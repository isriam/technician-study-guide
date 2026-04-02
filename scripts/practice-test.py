#!/usr/bin/env python3
"""Generate and score a random Technician class practice exam.

Simulates the real exam: 35 questions drawn from the pool with the correct
number of questions per subelement.

Usage:
    python3 practice-test.py                       # Interactive exam (auto-selects pool)
    python3 practice-test.py --pool 2026-2030      # Force a specific pool
    python3 practice-test.py --quick               # Show answers immediately
    python3 practice-test.py --stats               # Just show pool stats
"""

import json
import random
import sys
from datetime import date
from pathlib import Path

POOLS_DIR = Path(__file__).parent.parent / "pools"
CUTOVER_DATE = date(2026, 7, 1)

# Questions per subelement on the real exam
EXAM_DISTRIBUTION = {
    "T1": 6, "T2": 3, "T3": 3, "T4": 2, "T5": 4,
    "T6": 4, "T7": 4, "T8": 4, "T9": 2, "T0": 3,
}

# Questions that reference schematic diagrams
FIGURE_QUESTIONS = {
    "T6C02": "T-1.png", "T6C03": "T-1.png", "T6C04": "T-1.png", "T6C05": "T-1.png",
    "T6C06": "T-2.png", "T6C07": "T-2.png", "T6C08": "T-2.png", "T6C09": "T-2.png",
    "T6C10": "T-3.png", "T6C11": "T-3.png",
}


def resolve_pool(pool_arg: str | None) -> tuple[str, Path]:
    """Return (pool_name, pool_path) based on CLI arg or today's date."""
    if pool_arg is not None:
        valid = {"2022-2026", "2026-2030"}
        if pool_arg not in valid:
            print(f"Error: --pool must be one of: {', '.join(sorted(valid))}", file=sys.stderr)
            sys.exit(1)
        name = pool_arg
    else:
        name = "2026-2030" if date.today() >= CUTOVER_DATE else "2022-2026"

    return name, POOLS_DIR / name / "questions.json"


def load_pool(pool_path: Path):
    with open(pool_path) as f:
        data = json.load(f)
    return data["questions"], data["subelements"]


def generate_exam(questions):
    """Select one question per group, matching real exam structure."""
    by_group = {}
    for q in questions:
        by_group.setdefault(q["group"], []).append(q)

    exam = []
    for group in sorted(by_group.keys()):
        exam.append(random.choice(by_group[group]))

    random.shuffle(exam)
    return exam


def run_interactive(exam):
    """Run an interactive practice exam."""
    correct = 0
    total = len(exam)
    wrong = []

    print(f"\n{'='*60}")
    print(f"  TECHNICIAN CLASS PRACTICE EXAM")
    print(f"  {total} questions — need 26 to pass")
    print(f"{'='*60}\n")

    for i, q in enumerate(exam, 1):
        print(f"Q{i}. [{q['id']}] {q['question']}")
        # Show figure reference for schematic questions
        if q['id'] in FIGURE_QUESTIONS:
            fig = FIGURE_QUESTIONS[q['id']]
            print(f"    📎 See figures/{fig}")
        letters = sorted(q["answers"].keys())
        for letter in letters:
            print(f"    {letter}) {q['answers'][letter]}")

        while True:
            answer = input(f"\n  Your answer (A/B/C/D or Q to quit): ").strip().upper()
            if answer == "Q":
                print(f"\nQuitting. {correct}/{i-1} correct so far.")
                return correct, i - 1, wrong
            if answer in ["A", "B", "C", "D"]:
                break
            print("  Enter A, B, C, or D")

        if answer == q["correct"]:
            correct += 1
            print(f"  ✅ Correct!\n")
        else:
            wrong.append(q)
            print(f"  ❌ Wrong — correct answer is {q['correct']}) {q['answers'][q['correct']]}\n")

    return correct, total, wrong


def run_quick(exam):
    """Show all questions with answers revealed."""
    print(f"\n{'='*60}")
    print(f"  PRACTICE EXAM — ANSWER KEY")
    print(f"{'='*60}\n")

    for i, q in enumerate(exam, 1):
        print(f"Q{i}. [{q['id']}] {q['question']}")
        if q['id'] in FIGURE_QUESTIONS:
            fig = FIGURE_QUESTIONS[q['id']]
            print(f"    📎 See figures/{fig}")
        letters = sorted(q["answers"].keys())
        for letter in letters:
            mark = " ✅" if letter == q["correct"] else ""
            print(f"    {letter}) {q['answers'][letter]}{mark}")
        print()


def show_stats(questions, subelements):
    """Show pool statistics."""
    print(f"\n{'='*60}")
    print(f"  QUESTION POOL STATISTICS")
    print(f"{'='*60}\n")

    by_sub = {}
    for q in questions:
        by_sub.setdefault(q["subelement"], []).append(q)

    print(f"  {'Sub':<5} {'Topic':<35} {'Pool':>5} {'Exam':>5}")
    print(f"  {'-'*55}")
    for sub in sorted(EXAM_DISTRIBUTION.keys()):
        name = subelements.get(sub, {}).get("name", "Unknown")
        pool_count = len(by_sub.get(sub, []))
        exam_count = EXAM_DISTRIBUTION[sub]
        print(f"  {sub:<5} {name:<35} {pool_count:>5} {exam_count:>5}")

    total_pool = sum(len(v) for v in by_sub.values())
    total_exam = sum(EXAM_DISTRIBUTION.values())
    print(f"  {'-'*55}")
    print(f"  {'Total':<41} {total_pool:>5} {total_exam:>5}")
    print(f"\n  Passing score: 26/35 (74%)\n")


def print_results(correct, total, wrong):
    """Print exam results with subelement breakdown."""
    pct = (correct / total * 100) if total > 0 else 0
    passed = correct >= 26

    print(f"\n{'='*60}")
    print(f"  RESULTS: {correct}/{total} ({pct:.0f}%)")
    print(f"  {'✅ PASSED!' if passed else '❌ Not yet — keep studying'}")
    print(f"{'='*60}")

    if wrong:
        # Group wrong answers by subelement
        by_sub = {}
        for q in wrong:
            by_sub.setdefault(q["subelement"], []).append(q)

        print(f"\n  Areas to review:")
        for sub in sorted(by_sub.keys()):
            count = len(by_sub[sub])
            print(f"    {sub}: {count} wrong")

    print()


def parse_args() -> tuple[bool, bool, str | None]:
    """Parse CLI arguments. Returns (quick, stats, pool_name)."""
    args = sys.argv[1:]
    quick = "--quick" in args
    stats = "--stats" in args
    pool_name = None
    if "--pool" in args:
        idx = args.index("--pool")
        if idx + 1 >= len(args):
            print("Error: --pool requires a value (2022-2026 or 2026-2030)", file=sys.stderr)
            sys.exit(1)
        pool_name = args[idx + 1]
    return quick, stats, pool_name


def main():
    quick, stats, pool_arg = parse_args()

    pool_name, pool_path = resolve_pool(pool_arg)
    source = "auto-selected by date" if pool_arg is None else "specified via --pool"
    print(f"📡 Question pool: {pool_name} ({source})")

    questions, subelements = load_pool(pool_path)

    if stats:
        show_stats(questions, subelements)
        return

    exam = generate_exam(questions)

    if quick:
        run_quick(exam)
        return

    correct, total, wrong = run_interactive(exam)
    if total > 0:
        print_results(correct, total, wrong)


if __name__ == "__main__":
    main()
