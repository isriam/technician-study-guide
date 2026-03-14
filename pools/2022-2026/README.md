# 2022–2026 Technician Question Pool

**Source:** [NCVEC Question Pool Committee](https://ncvec.org/index.php/2022-2026-technician-question-pool-release)
**Effective:** July 1, 2022 – June 30, 2026
**Questions:** 411 (T7D05 removed per errata)
**Exam draws:** 35 questions per exam

## Files

- `questions.json` — Parsed question pool in structured JSON format
- Original PDF source: [NCVEC download](https://ncvec.org/downloads/2022-2026%20Technician%20Pool%20Released%20Jan17%20Revised.pdf)

## JSON Structure

```json
{
  "subelements": { "T1": { "name": "...", "exam_questions": 6, ... }, ... },
  "questions": [
    {
      "id": "T1A01",
      "subelement": "T1",
      "group": "T1A",
      "question": "...",
      "correct": "C",
      "answers": { "A": "...", "B": "...", "C": "...", "D": "..." }
    }
  ],
  "total": 411
}
```
