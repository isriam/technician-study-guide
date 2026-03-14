# Build & Maintenance Notes

*Internal documentation for maintaining this repo. Not part of the study guide.*

## How This Was Built

1. Downloaded official NCVEC 2022-2026 Technician pool PDF
2. Extracted text with PyMuPDF, parsed questions with regex into `questions.json`
3. Verified: 411 questions across 10 subelements, all counts match official syllabus
4. Generated subelement study guides with AI assistance (explanations reviewed for accuracy)
5. Cram sheet hand-curated from most-tested facts across the pool

## Updating for a New Pool

1. Download the new pool PDF from [ncvec.org](https://ncvec.org/index.php/amateur-question-pools)
2. Place in `pools/YYYY-YYYY/`
3. Run the parser: adjust `scripts/parse-pool.py` if format changed
4. Regenerate subelement files with updated questions
5. Update `scripts/practice-test.py` POOL_PATH to point to new pool
6. Update README.md effective dates
7. Run `scripts/diff-pools.py` to document what changed

## Pool Diff

When the 2026-2030 pool becomes active:
- 409 questions (vs 412 original / 411 after errata)
- 27 new questions, 30 removed, ~155 modified
- Same 10 subelement structure, same exam format (35 questions)

## Quality Checks

- Every question ID in JSON matches official pool
- Every correct answer verified against official answer key (letter in parentheses after question ID)
- Subelement question counts verified against syllabus header counts
- T7D05 correctly excluded (removed per NCVEC errata)
