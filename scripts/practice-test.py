#!/usr/bin/env python3
"""Generate and score a random Technician class practice exam.

Simulates the real exam: 35 questions drawn from the pool with the correct
number of questions per subelement.

Usage:
    python3 practice-test.py           # Interactive exam
    python3 practice-test.py --quick   # Show answers immediately
    python3 practice-test.py --stats   # Just show pool stats
"""

import json
import random
import sys
from pathlib import Path

POOL_PATH = Path(__file__).parent.parent / "pools" / "2022-2026" / "questions.json"

# Questions per subelement on the real exam
EXAM_DISTRIBUTION = {
    "T1": 6, "T2": 3, "T3": 3, "T4": 2, "T5": 4,
    "T6": 4, "T7": 4, "T8": 4, "T9": 2, "T0": 3,
}


def load_pool():
    with open(POOL_PATH) as f:
        data = json.load(f)
    return data["questions"], data["subelements"]


def generate_exam(questions):
    """Select questions matching real exam distribution."""
    by_sub = {}
    for q in questions:
        by_sub.setdefault(q["subelement"], []).append(q)

    exam = []
    for sub, count in EXAM_DISTRIBUTION.items():
        pool = by_sub.get(sub, [])
        if len(pool) >= count:
            exam.extend(random.sample(pool, count))
        else:
            exam.extend(pool)

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


def main():
    questions, subelements = load_pool()

    if "--stats" in sys.argv:
        show_stats(questions, subelements)
        return

    exam = generate_exam(questions)

    if "--quick" in sys.argv:
        run_quick(exam)
        return

    correct, total, wrong = run_interactive(exam)
    if total > 0:
        print_results(correct, total, wrong)


if __name__ == "__main__":
    main()
