# Amateur Radio Technician Exam Study Guide

Pass the FCC Technician class license exam. All questions, all answers, explained.

## What's Inside

- **411 real exam questions** with correct answers and explanations
- **10 study sections** organized by topic (subelements T1–T0)
- **Cram sheet** for last-minute review
- **Practice test script** to simulate the real exam
- **7-day study plan** to get you from zero to licensed

## The Exam

| | |
|---|---|
| **Questions** | 35 multiple choice |
| **Passing** | 26 correct (74%) |
| **Time** | No time limit |
| **Fee** | $35 (ARRL VEC) |
| **Where** | Find a session at [arrl.org/find-an-amateur-radio-license-exam-session](http://www.arrl.org/find-an-amateur-radio-license-exam-session) |

The exam pulls from a **fixed public question pool** — every possible question and answer is published. This guide covers all of them.

## Current Question Pool

**2022–2026 pool** — effective July 1, 2022 through June 30, 2026.

The 2026–2030 pool takes effect July 1, 2026. If you're taking the exam after that date, check `pools/2026-2030/` for the updated pool.

## How to Study

### Quick Path (7 days)

See [STUDY-PLAN.md](STUDY-PLAN.md) for the full day-by-day plan.

| Day | Topic | Section |
|-----|-------|---------|
| 1 | FCC Rules | [T1](subelements/T1-fcc-rules.md) |
| 2 | Operating & Radio Waves | [T2](subelements/T2-operating-procedures.md), [T3](subelements/T3-radio-waves.md) |
| 3 | Station Setup | [T4](subelements/T4-amateur-practices.md) |
| 4 | Electrical Theory | [T5](subelements/T5-electrical-principles.md) |
| 5 | Components & Circuits | [T6](subelements/T6-components.md), [T7](subelements/T7-practical-circuits.md) |
| 6 | Signals, Antennas, Safety | [T8](subelements/T8-signals-emissions.md), [T9](subelements/T9-antennas-feedlines.md), [T0](subelements/T0-safety.md) |
| 7 | Review + Practice Test | [Cram Sheet](CRAM-SHEET.md) + `python3 scripts/practice-test.py` |

### Study Sections

Each section has every question from that subelement with the correct answer highlighted and a brief explanation of *why* it's correct.

| Section | Topic | Exam Questions | Pool Size |
|---------|-------|:-:|:-:|
| [T1](subelements/T1-fcc-rules.md) | FCC Rules | 6 | 67 |
| [T2](subelements/T2-operating-procedures.md) | Operating Procedures | 3 | 36 |
| [T3](subelements/T3-radio-waves.md) | Radio Wave Propagation | 3 | 34 |
| [T4](subelements/T4-amateur-practices.md) | Amateur Radio Practices | 2 | 24 |
| [T5](subelements/T5-electrical-principles.md) | Electrical Principles | 4 | 52 |
| [T6](subelements/T6-components.md) | Components | 4 | 47 |
| [T7](subelements/T7-practical-circuits.md) | Practical Circuits | 4 | 43 |
| [T8](subelements/T8-signals-emissions.md) | Signals & Emissions | 4 | 48 |
| [T9](subelements/T9-antennas-feedlines.md) | Antennas & Feed Lines | 2 | 24 |
| [T0](subelements/T0-safety.md) | Safety | 3 | 36 |
| | **Total** | **35** | **411** |

### Practice Test

```bash
python3 scripts/practice-test.py
```

Generates a random 35-question exam from the real pool, scores it, and shows which areas need work.

### Cram Sheet

[CRAM-SHEET.md](CRAM-SHEET.md) — one page of key facts, formulas, frequencies, and power limits. Read this the morning of your exam.

## Question Pool Source

All questions are from the official NCVEC Technician Class Question Pool, released into the public domain.

- **Source:** [ncvec.org](https://ncvec.org/index.php/amateur-question-pools)
- **Current pool:** 2022–2026 (effective July 1, 2022 – June 30, 2026)
- **Next pool:** 2026–2030 (effective July 1, 2026)

## License

Question pool content is public domain (NCVEC). Study guide explanations and scripts are MIT licensed.
