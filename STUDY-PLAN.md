# 7-Day Study Plan

You can pass this exam in a week. The pool is 411 questions — sounds like a lot, but many answers are common sense once you understand the concepts.

## Strategy

1. **Read the section** — focus on the explanations, not just memorizing letters
2. **Flag hard questions** — anything with math, specific frequencies, or Part 97 numbers
3. **Take practice tests** — run `python3 scripts/practice-test.py` at least once per day starting Day 4
4. **Review wrong answers** — the practice test tells you which subelements to revisit

## The Plan

### Day 1 — FCC Rules (T1)
**67 questions, 6 on the exam**

This is the biggest section and the most testable. Learn:
- Who can operate, license classes, call signs
- What you can and can't transmit
- Control operator responsibilities
- Station identification rules
- Third-party traffic rules

📖 [T1 — FCC Rules](subelements/T1-fcc-rules.md)

---

### Day 2 — Operating & Radio Waves (T2, T3)
**70 questions, 6 on the exam**

How to actually use a radio and how signals travel:
- Repeater operation, CTCSS tones, offsets
- Emergency and public service operating
- VHF/UHF propagation (line of sight, ducting, scatter)
- Wavelength ↔ frequency conversion

📖 [T2 — Operating Procedures](subelements/T2-operating-procedures.md)
📖 [T3 — Radio Waves](subelements/T3-radio-waves.md)

---

### Day 3 — Station Setup (T4)
**24 questions, 2 on the exam**

Lightest exam day — only 2 questions from this section:
- Connecting microphones, power, computers
- SWR meters, squelch, filters, AGC
- Mobile installation

📖 [T4 — Amateur Practices](subelements/T4-amateur-practices.md)

---

### Day 4 — Electrical Theory (T5)
**52 questions, 4 on the exam**

The math section. Focus on:
- Ohm's Law: E = I × R (voltage = current × resistance)
- Power: P = E × I
- Decibels: 3 dB = double, 10 dB = 10×
- Unit conversions (mega, kilo, milli, micro)
- Basic AC/DC concepts

📖 [T5 — Electrical Principles](subelements/T5-electrical-principles.md)

Take your first practice test today: `python3 scripts/practice-test.py`

---

### Day 5 — Components & Circuits (T6, T7)
**90 questions, 8 on the exam**

Hardware knowledge:
- Resistors, capacitors, inductors — what they do
- Diodes, transistors, ICs
- Schematic symbols (3 diagrams on the real exam)
- Soldering, test equipment, troubleshooting

📖 [T6 — Components](subelements/T6-components.md)
📖 [T7 — Practical Circuits](subelements/T7-practical-circuits.md)

---

### Day 6 — Signals, Antennas, Safety (T8, T9, T0)
**108 questions, 9 on the exam**

The remaining topics:
- Modulation types (AM, FM, SSB)
- Digital modes, satellite operation
- Antenna types and feed lines
- RF safety, electrical safety, tower safety

📖 [T8 — Signals & Emissions](subelements/T8-signals-emissions.md)
📖 [T9 — Antennas & Feed Lines](subelements/T9-antennas-feedlines.md)
📖 [T0 — Safety](subelements/T0-safety.md)

---

### Day 7 — Review & Practice
**Exam day prep**

1. Read the [Cram Sheet](CRAM-SHEET.md)
2. Take 2–3 practice tests: `python3 scripts/practice-test.py`
3. Review any subelement where you score below 80%
4. Get a good night's sleep

## Tips

- **You need 26/35 (74%)** — you can miss 9 questions and still pass
- **No time limit** — take your time, read every answer choice
- **Eliminate wrong answers** — if you can rule out 2, you have a 50/50 shot
- **The exam is easier than you think** — most people pass on the first try
