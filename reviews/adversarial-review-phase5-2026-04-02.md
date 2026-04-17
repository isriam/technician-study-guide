# Adversarial Review — Phase 5 (Post-Fix Verification)
**Date:** 2026-04-02  
**Reviewer:** Hostile Examiner (subagent, adversarial mode)  
**Pool:** 2026-2030 Technician Class (409 questions)  
**Prior Review:** adversarial-review-2026-03-31.md (found 2 critical, 4 high, 4 medium issues)  
**Scope:** Full re-review of all study guides, question banks, cram sheet, and study plan against the official pool

---

## Overall Grade: **A-**

The study guides and question banks are in excellent shape. All 6 critical/high findings from the March 31 review have been **fixed** in the study guide and question bank files. However, one **critical error persists in the Cram Sheet** — the exact same "0.1 watt" trap that was fixed in the study guide was NOT fixed in the cram sheet. This is the document students read the morning of their exam. One additional new minor issue was found.

**TLDR:** Fix one line in CRAM-SHEET.md and this is an A.

---

## Methodology

1. **Pool Alignment (20-question random sample):** Selected 20 questions from pools/2026-2030/questions.json using seed=42. Verified each against the corresponding question bank file. **20/20 match.**
2. **Full Pool Alignment (all 409 questions):** Programmatically extracted every question block from all 10 question bank files and compared the bolded/✅ answer letter against the pool's `correct` field. **409/409 match. Zero mismatches.**
3. **Coverage Check:** Verified all 409 pool question IDs exist in the question bank files. **409/409 present. No missing questions.**
4. **Factual Cross-Reference:** Verified key frequencies, power limits, formulas, regulations, and technical facts against the pool answers and FCC Part 97 citations.
5. **Cram Sheet vs. Study Guide:** Compared every major claim in the cram sheet against the study guides and pool.
6. **Prior Finding Regression:** Re-checked all 10 findings from the 2026-03-31 adversarial review.

---

## Prior Finding Regression (March 31 Review)

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| 1 | T2A09: "monitoring" → "listening" | CRITICAL | ✅ **FIXED** — Study guide now says "listening" |
| 2 | T1D11: 0.1 watt framing → model craft | CRITICAL | ⚠️ **PARTIALLY FIXED** — Study guide fixed, **CRAM SHEET STILL WRONG** |
| 3 | T2B05: "distorted" → "drops out" | HIGH | ✅ **FIXED** — Study guide now says "drops out" |
| 4 | T0A06: interlocks → capacitor discharge | HIGH | ✅ **FIXED** — Study guide updated to match pool |
| 5 | T4A04: "WSJT-X" → "FT8 software" | HIGH | ✅ **FIXED** — Now says "FT8 software such as WSJT-X" |
| 6 | T2C05: "messages" → "formal messages" | HIGH | ✅ **FIXED** — Now says "formal messages" |
| 7 | "Before calling CQ" stale content | MEDIUM | N/A — Harmless, doesn't cause wrong answers |
| 8 | Ionosphere reflect vs. refract | LOW | N/A — Both terms are scientifically correct |
| 9 | SSB bandwidth 3kHz vs. 2400Hz contradiction | MEDIUM | ✅ **FIXED** — T4 now explains filter is narrower than signal |
| 10 | Group D terminology missing | HIGH | ✅ **FIXED** — "Group D" now in both study guide and cram sheet |

**Summary: 7 of 8 actionable findings fixed. 1 remains (cram sheet only).**

---

## Critical Issues (Would Cause Exam Failures)

### CRITICAL-1: Cram Sheet Contains Wrong Answer for T1D11 ⛔

**File:** `CRAM-SHEET.md`, line 96  
**Current text:**
```
| When can you transmit without ID | **Only when power is below 0.1 watt** (e.g., model craft) |
```

**The problem:** This tells students the answer is "power below 0.1 watt" — which is **answer choice C, a wrong distractor** on the actual exam question T1D11.

**Pool question T1D11:**
```
When may an amateur station transmit without identifying on the air?
A) When the transmissions are of a brief nature to make station adjustments
B) When the transmissions are unmodulated  
C) When the transmitted power level is below 0.1 watt  ← WRONG (this is what the cram sheet says)
D) When transmitting signals to control model craft    ← CORRECT
```

**Why this is critical:**
- The cram sheet is designed to be read the morning of the exam
- It explicitly states the wrong answer as fact
- The distractor "0.1 watt" was specifically designed to trap students who confuse the power limit detail with the actual exemption
- A student who reads this cram sheet entry and encounters T1D11 on their exam will confidently pick C and get it wrong

**The irony:** The study guide (T1-fcc-rules.md) was correctly updated after the March 31 review. It now says: *"The only time you can transmit without identifying on the air is when transmitting signals to control model craft."* The cram sheet was simply not updated to match.

**Fix:** Change line 96 to:
```
| When can you transmit without ID | **Only when controlling model craft** (per §97.215) |
```

---

## Major Issues (Misleading or Confusing)

### MAJOR-1: Study Plan Question Counts Are Wrong (5 of 6 days)

**File:** `STUDY-PLAN.md`

| Day | Study Plan Claims | Actual Pool Count | Off By |
|-----|------------------|-------------------|--------|
| Day 1 (T1) | "67 questions" | 68 | -1 |
| Day 2 (T2+T3) | "70 questions" | 72 | -2 |
| Day 3 (T4) | "24 questions" | 23 | +1 |
| Day 4 (T5) | "52 questions" | 50 | +2 |
| Day 5 (T6+T7) | "90 questions" | 90 | ✅ |
| Day 6 (T8+T9+T0) | "108 questions" | 106 | +2 |

**Impact:** Low — these are informational, not exam-affecting. But wrong numbers undermine credibility. If a student counts the questions in the bank and gets a different number, they may wonder what else is wrong.

**Fix:** Update the six question count numbers to match the 2026-2030 pool (68, 72, 23, 50, 90, 106).

### MAJOR-2: T1D11 Question Bank Explanation Is Minimal

**File:** `subelements/T1-fcc-rules-questions.md`, T1D11 block

**Current explanation:**
```
> The correct answer is When transmitting signals to control model craft.
```

**The problem:** Every other question in the bank has a substantive explanation — why the answer is correct, what the distractors are wrong, and contextual detail. T1D11's explanation is a bare sentence that doesn't explain *why* model craft is the answer, doesn't warn about the "0.1 watt" trap (answer C), and doesn't mention §97.215. Given that the cram sheet currently has the WRONG answer for this same question, the question bank explanation should be especially robust here.

**Fix:** Expand to something like:
```
> Under §97.215, amateur stations transmitting signals to control model craft are exempt from station identification requirements. The key is the activity (model craft control), not the power level. Answer C ("below 0.1 watt") is a common trap — there is no blanket low-power ID exemption. The actual power limit for model craft telecommand is 1 watt input.
```

---

## Minor Issues (Could Be Better)

### MINOR-1: Cram Sheet Lists 446.000 MHz and 223.500 MHz as Key Frequencies — Not Directly Tested

**File:** `CRAM-SHEET.md`

The cram sheet lists:
- `446.000 MHz` — 70cm FM national calling frequency
- `223.500 MHz` — 1.25m FM national calling frequency

These are real, correct frequencies. But the 2026-2030 pool does **not** have a question asking for the 70cm or 1.25m national calling frequency. The only calling frequency question is T2A02 (2m = 146.520 MHz). Including untested frequencies in a cram sheet isn't wrong, but it dilutes focus on exam day.

**Impact:** Negligible — doesn't cause wrong answers, just dilutes focus.

### MINOR-2: Study Guide T1 Says "Radio Control Craft" — Pool Says "Model Craft"

**File:** `subelements/T1-fcc-rules.md`, line 83

The study guide says:
```
The one exception is control commands to space stations or radio control craft
```

But Pool question T1D03 correct answer says:
```
Only when transmitting control commands to space stations or model craft
```

The term "radio control craft" vs "model craft" is a minor wording difference. The student would still pick the right answer since "model craft" maps to "radio control craft" intuitively. But for exam vocabulary precision, "model craft" matches the FCC rule and the exam wording.

**Impact:** Very low — unlikely to cause a wrong answer but imprecise.

### MINOR-3: "All These Choices Are Correct" Tip in Cram Sheet — Potentially Harmful

**File:** `CRAM-SHEET.md`

The cram sheet says:
```
"All these choices are correct" — it's the right answer ~40% of the time
```

This could lead lazy students to default to "All these choices" when unsure, even though it's wrong 60% of the time. The advice to "evaluate each option independently" partially mitigates this, but the leading stat is more memorable than the caveat.

**Impact:** Low — the caveat helps, but the 40% stat is the more memorable takeaway.

---

## What's Actually Good

### Pool Alignment: Perfect Score
- **409/409** questions present in the question bank files
- **409/409** correct answer letters match the pool exactly
- **0 mismatches** across any file
- The 20-question random spot-check and the full 409-question programmatic check both returned zero errors

### Study Guide Quality
- **All formulas verified correct** — Ohm's Law (3 forms), Power formula, Wavelength formula (λ = 300/f(MHz)), Decibel rules (3dB = double, 10dB = 10×), Battery life formula
- **All frequencies verified correct** — 146.520 (2m calling), 52.525 (6m calling), 28.200-28.300 (beacon sub-band), 28.300-28.500 (Tech phone), 50.0-50.1 and 144.0-144.1 (CW-only), all band edges
- **All power limits correct** — 200W PEP on HF, 1500W PEP on VHF/UHF
- **All regulatory facts correct** — 10-year term, 90-day renewal window, 2-year grace period, 4-member club minimum, 10-minute ID interval, etc.
- **Propagation physics correct** — HF 3-30 MHz, VHF 30-300 MHz, UHF 300-3000 MHz, speed of light = 300,000,000 m/s
- **Safety information correct** — 10-foot power line clearance, never climb alone, RF exposure at 50 MHz, non-ionizing radiation

### Prior Critical Fixes Verified
All 6 critical/high findings from March 31 were fixed in the study guides. The content is now accurate where it previously had exam-failing errors. Specific verifications:
- "Listening" (not "monitoring") for T2A09 ✅
- "Model craft" (not "0.1 watt") for T1D11 in study guide ✅
- "Drops out" (not "distorted") for T2B05 ✅
- "Capacitor discharge" (not "interlocks") for T0A06 ✅
- "FT8 software such as WSJT-X" for T4A04 ✅
- "Formal messages" for T2C05 ✅
- "Group D" call sign terminology for T1C05 ✅
- SSB bandwidth contradiction resolved in T4 ✅

### Structural Strengths
- Narrative study guides are engaging and explain *why* — not just *what*
- Question banks have every pool question with explanations
- Exam question counts per subelement are all correct (total = 35)
- Study plan daily breakdown is reasonable and well-structured
- Cram sheet formula table is clean and accurate
- Band privilege table is complete and correct
- No dangerous safety advice found — all safety guidance is conservative and correct
- No advice that would cause illegal transmissions

### Cross-Consistency
- Study guides and question banks agree on all facts checked
- No inter-chapter contradictions found
- Cram sheet agrees with study guides on all points **except** the T1D11 entry

---

## Verdict

| Area | Rating |
|------|--------|
| Pool alignment (answers) | **A+** — 409/409 perfect |
| Pool coverage (all questions present) | **A+** — 409/409 present |
| Factual accuracy (study guides) | **A** — All verified facts correct |
| Factual accuracy (cram sheet) | **B-** — One critical wrong answer |
| Safety content | **A+** — Conservative, correct, no dangerous advice |
| Prior fix verification | **A** — 7/8 actionable fixes applied |
| Study plan | **B+** — Good structure, wrong question counts |
| Question bank explanations | **A-** — One thin explanation (T1D11) |

### Overall: **A-**

**To reach A:** Fix the cram sheet's "0.1 watt" line (Critical-1). That single line is the difference between an A- and an A. Everything else is minor polish.

**To reach A+:** Also fix the study plan question counts, expand T1D11's question bank explanation, and change "radio control craft" to "model craft" in T1-fcc-rules.md line 83.

---

## Required Fixes (Priority Order)

### 🔴 Must Fix Immediately
1. **CRAM-SHEET.md line 96** — Change "Only when power is below 0.1 watt" to "Only when controlling model craft (per §97.215)". This is a wrong answer printed on the page students read exam morning.

### 🟡 Should Fix
2. **STUDY-PLAN.md** — Update question counts to match actual pool (68, 72, 23, 50, 90, 106)
3. **T1-fcc-rules-questions.md, T1D11** — Expand the bare-minimum explanation to warn about the 0.1 watt trap
4. **T1-fcc-rules.md line 83** — Change "radio control craft" to "model craft" to match pool/FCC wording

### 🟢 Nice to Have
5. **CRAM-SHEET.md** — Consider removing 446.000 and 223.500 from key frequencies since they're not tested
6. **CRAM-SHEET.md** — Reconsider the "40% of the time" All Choices tip framing
