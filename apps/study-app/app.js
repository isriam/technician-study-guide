// ===== DATA & STATE =====

// Populated asynchronously from the active question pool JSON
let QUESTION_POOL = [];
let ACTIVE_POOL = null; // { id, label, path, effective, expires, total }

const POOLS = [
  {
    id: '2022-2026',
    label: '2022–2026 Pool (411 Qs)',
    path: '../../pools/2022-2026/questions.json',
    effective: '2022-07-01',
    expires: '2026-06-30',
    total: 411,
  },
  {
    id: '2026-2030',
    label: '2026–2030 Pool (409 Qs) — Active July 2026',
    path: '../../pools/2026-2030/questions.json',
    effective: '2026-07-01',
    expires: '2030-06-30',
    total: 409,
  },
];

function getDefaultPool() {
  const today = new Date().toISOString().slice(0, 10);
  // Prefer the pool active on today's date
  for (const p of POOLS) {
    if (today >= p.effective && today <= p.expires) return p;
  }
  // Fallback: most recent
  return POOLS[POOLS.length - 1];
}

const SUBELEMENT_NAMES = {
  T1: 'T1 · FCC Rules & Regulations',
  T2: 'T2 · Operating Procedures',
  T3: 'T3 · Radio Wave Characteristics',
  T4: 'T4 · Amateur Radio Practices',
  T5: 'T5 · Electrical Principles',
  T6: 'T6 · Electronic Components',
  T7: 'T7 · Practical Circuits',
  T8: 'T8 · Signals & Emissions',
  T9: 'T9 · Antennas & Feed Lines',
  T0: 'T0 · Electrical & RF Safety',
};

const BADGES = [
  { id: 'first_flip', icon: '🃏', name: 'First Flip', desc: 'Flip your first flashcard' },
  { id: 'first_test', icon: '📝', name: 'Test Taker', desc: 'Complete your first practice exam' },
  { id: 'first_pass', icon: '🏆', name: 'First Pass', desc: 'Score 74% or higher on a practice exam' },
  { id: 'perfect_test', icon: '💯', name: 'Perfect Score', desc: 'Score 100% on a practice exam' },
  { id: '100_cards', icon: '💪', name: 'Century', desc: 'Study 100 flashcards' },
  { id: 'all_seen', icon: '👁️', name: 'All Seen', desc: 'See all questions in the pool' },
  { id: 'streak_3', icon: '🔥', name: '3-Day Streak', desc: 'Study 3 days in a row' },
  { id: 'streak_7', icon: '🌟', name: '7-Day Streak', desc: 'Study 7 days in a row' },
  { id: 'mastered_50', icon: '🧠', name: 'Half Master', desc: 'Master 50 questions' },
  { id: 'mastered_all', icon: '🎓', name: 'Full Master', desc: 'Master all questions in the pool' },
  { id: '5_tests', icon: '📚', name: 'Dedicated', desc: 'Take 5 practice exams' },
  { id: 'ready', icon: '📡', name: 'Exam Ready', desc: 'Reach 90% readiness' },
];

const STATE_KEY = 'hamradio_state_v2';
const VALID_BADGE_IDS = new Set(BADGES.map(b => b.id));
const VALID_POOL_IDS = new Set(POOLS.map(p => p.id));
const VALID_THEMES = new Set(['auto', 'light', 'dark']);

function createDefaultState() {
  return {
    cards: {},         // { [qid]: { seen: bool, correct: int, wrong: int, mastered: bool } }
    tests: [],         // [{ score, total, pct, date, wrong: [qids] }]
    streak: 0,
    lastStudyDay: null,
    badges: [],        // earned badge ids
    theme: 'auto',
    selectedPool: null, // '2022-2026' | '2026-2030' | null (auto)
  };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function toNonNegativeInt(value, fallback = 0) {
  const num = Number(value);
  if (!Number.isFinite(num)) return fallback;
  return Math.max(0, Math.round(num));
}

function normalizeIsoDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function normalizeStudyDay(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : value;
}

function normalizeSavedState(saved) {
  const next = createDefaultState();
  if (!isPlainObject(saved)) return next;

  if (isPlainObject(saved.cards)) {
    for (const [qid, card] of Object.entries(saved.cards)) {
      if (!isPlainObject(card) || typeof qid !== 'string') continue;
      next.cards[qid] = {
        seen: card.seen === true,
        correct: toNonNegativeInt(card.correct, 0),
        wrong: toNonNegativeInt(card.wrong, 0),
        mastered: card.mastered === true,
      };
    }
  }

  if (Array.isArray(saved.tests)) {
    next.tests = saved.tests.map(test => {
      if (!isPlainObject(test)) return null;
      const total = Math.max(1, toNonNegativeInt(test.total, 35));
      const score = Math.min(total, toNonNegativeInt(test.score, 0));
      const pct = Math.min(100, toNonNegativeInt(test.pct, Math.round(score / total * 100)));
      const date = normalizeIsoDate(test.date);
      if (!date) return null;
      return {
        score,
        total,
        pct,
        date,
        wrong: Array.isArray(test.wrong)
          ? test.wrong.filter(qid => typeof qid === 'string').slice(0, total)
          : [],
      };
    }).filter(Boolean);
  }

  next.streak = toNonNegativeInt(saved.streak, 0);
  next.lastStudyDay = normalizeStudyDay(saved.lastStudyDay);
  next.badges = Array.isArray(saved.badges)
    ? [...new Set(saved.badges.filter(id => VALID_BADGE_IDS.has(id)))]
    : [];
  next.theme = VALID_THEMES.has(saved.theme) ? saved.theme : next.theme;
  next.selectedPool = VALID_POOL_IDS.has(saved.selectedPool) ? saved.selectedPool : null;

  return next;
}

// State loaded from localStorage
let state = createDefaultState();

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) state = normalizeSavedState(JSON.parse(saved));
  } catch(e) {}
  updateStreak();
}

function saveState() {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch(e) {}
}

function updateStreak() {
  const today = new Date().toISOString().slice(0,10);
  if (!state.lastStudyDay) return;
  const last = new Date(state.lastStudyDay);
  const now = new Date(today);
  const diffDays = Math.round((now - last) / 86400000);
  if (diffDays > 1) { state.streak = 0; saveState(); }
}

function recordStudyDay() {
  const today = new Date().toISOString().slice(0,10);
  if (state.lastStudyDay === today) return;
  const last = state.lastStudyDay ? new Date(state.lastStudyDay) : null;
  const now = new Date(today);
  const diffDays = last ? Math.round((now - last) / 86400000) : 99;
  if (diffDays === 1) {
    state.streak = (state.streak || 0) + 1;
  } else {
    state.streak = 1;
  }
  state.lastStudyDay = today;
  saveState();
  checkBadges();
}

// ===== THEME =====

function applyTheme(theme) {
  if (theme === 'auto') {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const btn = document.getElementById('theme-btn');
  btn.textContent = isDark ? '☀️' : '🌙';
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  state.theme = next;
  applyTheme(next);
  saveState();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (state.theme === 'auto') applyTheme('auto');
});

// ===== NAVIGATION =====

let currentPage = 'home';

function showPage(page, skipMenu) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.remove('active');
    b.removeAttribute('aria-current');
  });

  document.getElementById(`page-${page}`).classList.add('active');
  const navBtn = document.getElementById(`nav-${page}`);
  if (navBtn) {
    navBtn.classList.add('active');
    navBtn.setAttribute('aria-current', 'page');
  }

  currentPage = page;
  if (page === 'home') renderHome();
  if (page === 'progress') renderProgress();
  if (page === 'sections') renderSections();
  if (page === 'flashcard' && !skipMenu) showFlashcardMenu();
  if (page === 'schematic' && !skipMenu) showSchematicMenu();
  if (page === 'test' && !skipMenu) showTestStart();

  // Update formula FAB visibility
  updateFormulaFab();

  // Announce page change to screen readers
  announce(page.charAt(0).toUpperCase() + page.slice(1) + ' page');
  window.scrollTo(0, 0);
}

function announce(message) {
  const el = document.getElementById('sr-announce');
  if (el) { el.textContent = ''; requestAnimationFrame(() => { el.textContent = message; }); }
}

// ===== STATS / READINESS =====

function getStats() {
  const seen = Object.values(state.cards).filter(c => c.seen).length;
  const mastered = Object.values(state.cards).filter(c => c.mastered).length;
  const total = QUESTION_POOL.length;

  // Flashcard accuracy (last seen)
  const totalSeen = seen;
  const totalCorrectCards = Object.values(state.cards).reduce((s,c) => s + (c.correct||0), 0);
  const totalWrongCards = Object.values(state.cards).reduce((s,c) => s + (c.wrong||0), 0);
  const cardAcc = (totalCorrectCards + totalWrongCards) > 0
    ? totalCorrectCards / (totalCorrectCards + totalWrongCards) : 0;

  // Test average (last 5)
  const recentTests = state.tests.slice(-5);
  const testAvg = recentTests.length > 0
    ? recentTests.reduce((s,t) => s + t.pct, 0) / recentTests.length : 0;

  // Readiness = blend of card mastery + test avg
  let readiness = 0;
  if (recentTests.length > 0) {
    readiness = Math.round(testAvg * 0.6 + (mastered / total) * 100 * 0.4);
  } else {
    readiness = Math.round((mastered / total) * 100 * 0.7 + cardAcc * 30);
  }
  readiness = Math.min(100, readiness);

  return { seen, mastered, total, cardAcc, testAvg, readiness, recentTests };
}

function getReadinessDesc(pct) {
  if (pct >= 90) return '🎓 Exam ready! Go get licensed!';
  if (pct >= 75) return '💪 Looking great — keep pushing!';
  if (pct >= 50) return '📈 Good progress — keep studying!';
  if (pct >= 25) return '🌱 Building foundation…';
  return 'Start studying to track your progress';
}

// ===== HOME PAGE =====

function renderHome() {
  const stats = getStats();

  document.getElementById('readiness-score').textContent = stats.readiness + '%';
  document.getElementById('readiness-desc').textContent = getReadinessDesc(stats.readiness);
  document.getElementById('readiness-bar').style.width = stats.readiness + '%';
  const readinessContainer = document.getElementById('readiness-bar-container');
  if (readinessContainer) readinessContainer.setAttribute('aria-valuenow', stats.readiness);

  document.getElementById('stat-seen').textContent = stats.seen;
  document.getElementById('stat-mastered').textContent = stats.mastered;
  document.getElementById('stat-tests').textContent = state.tests.length;
  document.getElementById('stat-streak').textContent = state.streak || 0;
}

// ===== SECTIONS PAGE =====

function renderSections() {
  const subtitle = document.getElementById('sections-subtitle');
  if (subtitle && ACTIVE_POOL) {
    subtitle.textContent = `${QUESTION_POOL.length} questions across 10 subelements · ${ACTIVE_POOL.label}`;
  }
  const list = document.getElementById('section-list');
  const subelements = Object.keys(SUBELEMENT_NAMES).sort();

  list.innerHTML = subelements.map(se => {
    const qs = QUESTION_POOL.filter(q => q.id.startsWith(se));
    const total = qs.length;
    const seen = qs.filter(q => state.cards[q.id]?.seen).length;
    const mastered = qs.filter(q => state.cards[q.id]?.mastered).length;
    const pct = Math.round((mastered / total) * 100);
    const barColor = pct >= 80 ? 'green' : pct >= 40 ? '' : '';

    return `<div class="section-card" data-action="start-section-study" data-section="${se}" data-keyboard-activate="true" tabindex="0" role="button" aria-label="${SUBELEMENT_NAMES[se]}, ${total} questions, ${mastered} mastered">
      <div class="section-header">
        <div class="section-title">${SUBELEMENT_NAMES[se]}</div>
        <div class="section-count">${total} Qs</div>
      </div>
      <div class="progress-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${SUBELEMENT_NAMES[se]} mastery">
        <div class="progress-fill ${barColor}" style="width:${pct}%"></div>
      </div>
      <div class="section-stats">
        <div class="section-stat"><span class="dot dot-green"></span> ${mastered} mastered</div>
        <div class="section-stat"><span class="dot dot-gray"></span> ${seen} seen</div>
        <div class="section-stat"><span class="dot dot-gray"></span> ${total - seen} new</div>
      </div>
    </div>`;
  }).join('');
}

// ===== FLASHCARDS =====

let fcDeck = [];
let fcIndex = 0;
let fcSection = 'all';
let fcFlipped = false;
let fcSessionCorrect = 0;
let fcSessionWrong = 0;
let fcAdvanceTimer = null;

function clearFlashcardAdvanceTimer() {
  if (!fcAdvanceTimer) return;
  clearTimeout(fcAdvanceTimer);
  fcAdvanceTimer = null;
}

function showFlashcardMenu() {
  clearFlashcardAdvanceTimer();
  document.getElementById('fc-mode-select').style.display = 'block';
  document.getElementById('fc-session').style.display = 'none';
  document.getElementById('fc-done').style.display = 'none';

  const chooser = document.getElementById('section-chooser');
  const subelements = Object.keys(SUBELEMENT_NAMES).sort();

  chooser.innerHTML = `
    <div class="mode-option selected" data-action="select-section" data-section="all" data-keyboard-activate="true" tabindex="0" role="option" aria-selected="true">
      <div class="mode-option-title">📚 All Questions (${QUESTION_POOL.length})</div>
      <div class="mode-option-desc">Full pool — prioritizes questions you haven't seen or got wrong</div>
    </div>
    <div class="mode-option" data-action="select-section" data-section="weak" data-keyboard-activate="true" tabindex="0" role="option" aria-selected="false">
      <div class="mode-option-title">⚡ Weak Spots Only</div>
      <div class="mode-option-desc">Questions you've gotten wrong or haven't studied yet</div>
    </div>
    ${subelements.map(se => {
      const count = QUESTION_POOL.filter(q => q.id.startsWith(se)).length;
      return `<div class="mode-option" data-action="select-section" data-section="${se}" data-keyboard-activate="true" tabindex="0" role="option" aria-selected="false">
        <div class="mode-option-title">${SUBELEMENT_NAMES[se]} (${count})</div>
        <div class="mode-option-desc">${getSectionDesc(se)}</div>
      </div>`;
    }).join('')}
  `;
  fcSection = 'all';
}

function getSectionDesc(se) {
  const qs = QUESTION_POOL.filter(q => q.id.startsWith(se));
  const mastered = qs.filter(q => state.cards[q.id]?.mastered).length;
  return `${mastered}/${qs.length} mastered`;
}

function selectSection(el, se = el?.dataset.section) {
  if (!el || !se) return;
  document.querySelectorAll('#section-chooser .mode-option').forEach(e => {
    e.classList.remove('selected');
    e.setAttribute('aria-selected', 'false');
  });
  el.classList.add('selected');
  el.setAttribute('aria-selected', 'true');
  fcSection = se;
}

function buildDeck(section) {
  let pool;
  if (section === 'all') {
    pool = [...QUESTION_POOL];
  } else if (section === 'weak') {
    // Not seen + wrong answers, then unseen, then all
    pool = QUESTION_POOL.filter(q => {
      const c = state.cards[q.id];
      if (!c || !c.seen) return true; // unseen
      if (c.wrong > 0 && !c.mastered) return true; // got wrong
      return false;
    });
    if (pool.length === 0) pool = [...QUESTION_POOL];
  } else {
    pool = QUESTION_POOL.filter(q => q.id.startsWith(section));
  }

  // Sort: not seen first, then by error rate descending
  pool.sort((a, b) => {
    const ca = state.cards[a.id];
    const cb = state.cards[b.id];
    const seenA = ca?.seen ? 1 : 0;
    const seenB = cb?.seen ? 1 : 0;
    if (seenA !== seenB) return seenA - seenB;
    const errA = ca ? (ca.wrong || 0) / Math.max(1, (ca.correct||0) + (ca.wrong||0)) : 0;
    const errB = cb ? (cb.wrong || 0) / Math.max(1, (cb.correct||0) + (cb.wrong||0)) : 0;
    return errB - errA;
  });

  return pool;
}

function startFlashcards() {
  clearFlashcardAdvanceTimer();
  fcDeck = buildDeck(fcSection);
  fcIndex = 0;
  fcSessionCorrect = 0;
  fcSessionWrong = 0;
  fcFlipped = false;

  document.getElementById('fc-mode-select').style.display = 'none';
  document.getElementById('fc-session').style.display = 'block';
  document.getElementById('fc-done').style.display = 'none';

  document.getElementById('fc-total').textContent = fcDeck.length;
  document.getElementById('fc-section-label').textContent =
    fcSection === 'all' ? 'All Questions' :
    fcSection === 'weak' ? 'Weak Spots' :
    SUBELEMENT_NAMES[fcSection];

  loadCard(0);
  recordStudyDay();
}

function startPracticeTest() {
  showPage('test');
}

function startQuickFlashcards() {
  showPage('flashcard', true);
  fcSection = 'weak';
  startFlashcards();
}

function startSectionFlashcards(se) {
  showPage('flashcard', true);
  fcSection = se;
  startFlashcards();
}

function loadCard(idx) {
  clearFlashcardAdvanceTimer();
  document.getElementById('fc-wrong-next').style.display = 'none';
  document.getElementById('page-flashcard').classList.remove('next-btn-visible');
  if (idx >= fcDeck.length) {
    showFcDone();
    return;
  }
  const q = fcDeck[idx];
  fcFlipped = false;

  const letters = ['A', 'B', 'C', 'D'];

  document.getElementById('fc-qid').textContent = q.id;
  document.getElementById('fc-question').textContent = q.question;

  // Remove old figure container if any
  const oldFig = document.getElementById('fc-figure-container');
  if (oldFig) oldFig.remove();

  // Show figure if question references one (works in all flashcard modes including weak areas)
  const figHtml = renderFcFigure(q.question);
  if (figHtml) {
    document.getElementById('fc-question').insertAdjacentHTML('afterend', figHtml);
  }

  // Show section label for weak areas mode
  if (fcSection === 'weak_areas') {
    const sub = q.id.substring(0, 2);
    const sectionName = SUBELEMENT_NAMES[sub] || sub;
    const remaining = getWeakQuestions().length;
    document.getElementById('fc-section-label').textContent = '🎯 Weak Areas · ' + sectionName + ' (' + remaining + ' remaining)';
  }

  document.getElementById('fc-options').innerHTML =
    q.answers.map((a, i) =>
      `<div class="fc-option" id="fc-opt-${i}" data-action="select-flashcard-answer" data-answer-index="${i}" data-keyboard-activate="true" role="button" tabindex="0">
        <span class="fc-option-letter">${letters[i]}</span>
        <span>${escapeHtml(a)}</span>
      </div>`
    ).join('');

  document.getElementById('fc-current').textContent = idx + 1;
  const fcPct = Math.round(idx / fcDeck.length * 100);
  document.getElementById('fc-bar').style.width = fcPct + '%';
  const fcBarContainer = document.getElementById('fc-bar-container');
  if (fcBarContainer) fcBarContainer.setAttribute('aria-valuenow', fcPct);
  document.getElementById('fc-back-btn').disabled = (idx === 0);

  if (!state.cards[q.id]) state.cards[q.id] = {};
  state.cards[q.id].seen = true;
  saveState();

  const seenCount = Object.values(state.cards).filter(c => c.seen).length;
  if (seenCount >= 100) checkBadge('100_cards');
  if (seenCount >= QUESTION_POOL.length) checkBadge('all_seen');
}

function showFlashcardFeedback(selectedIndex) {
  const q = fcDeck[fcIndex];
  if (!q) return false;

  q.answers.forEach((_, i) => {
    const el = document.getElementById(`fc-opt-${i}`);
    if (!el) return;
    el.removeAttribute('data-action');
    el.removeAttribute('data-answer-index');
    el.removeAttribute('data-keyboard-activate');
    el.setAttribute('aria-disabled', 'true');
    el.tabIndex = -1;
    if (i === q.correct) {
      el.classList.add('fc-correct');
    } else {
      el.classList.add('fc-wrong');
    }
    if (selectedIndex !== q.correct && i === selectedIndex) {
      el.classList.add('fc-selected-wrong');
    }
  });

  return selectedIndex === q.correct;
}

function selectFlashcardAnswer(selectedIndex) {
  if (fcFlipped) return;
  fcFlipped = true;

  const pickedCorrectly = showFlashcardFeedback(selectedIndex);
  checkBadge('first_flip');

  if (pickedCorrectly) {
    announce('Correct! Moving to next question.');
    fcAdvanceTimer = setTimeout(() => {
      fcAdvanceTimer = null;
      markCard(true);
    }, 1200);
    return;
  }

  announce('Incorrect. The correct answer is highlighted. Press Next to continue.');
  markCard(false, { advance: false });
  const wrongNext = document.getElementById('fc-wrong-next');
  wrongNext.style.display = 'flex';
  // Add padding so last answer option isn't hidden behind the fixed button
  document.getElementById('page-flashcard').classList.add('next-btn-visible');
}

function revealAnswer() {
  if (fcFlipped) return;
  fcFlipped = true;
  showFlashcardFeedback(fcDeck[fcIndex]?.correct);
  checkBadge('first_flip');
  // Show Next button after reveal so user isn't stuck
  document.getElementById('fc-wrong-next').style.display = 'flex';
  // Add padding so last answer option isn't hidden behind the fixed button
  document.getElementById('page-flashcard').classList.add('next-btn-visible');
}

// Legacy alias kept for TTS logic
function flipCard() { revealAnswer(); }

function prevCard() {
  clearFlashcardAdvanceTimer();
  if (fcIndex <= 0) return;
  fcIndex--;
  loadCard(fcIndex);
}

function fcAdvanceNext() {
  document.getElementById('fc-wrong-next').style.display = 'none';
  document.getElementById('page-flashcard').classList.remove('next-btn-visible');
  fcIndex++;
  loadCard(fcIndex);
}

function markCard(correct, { advance = true } = {}) {
  const q = fcDeck[fcIndex];
  if (!state.cards[q.id]) state.cards[q.id] = {};
  const c = state.cards[q.id];

  if (correct) {
    c.correct = (c.correct || 0) + 1;
    c.weakStreak = (c.weakStreak || 0) + 1;
    fcSessionCorrect++;
    // Mastered = got right 3+ times and error rate < 20%
    const total = (c.correct || 0) + (c.wrong || 0);
    if (c.correct >= 3 && (c.wrong || 0) / total < 0.2) c.mastered = true;
    // Graduate from weak areas if weakStreak >= 3
    if ((c.weakStreak || 0) >= 3) c.mastered = true;
  } else {
    c.wrong = (c.wrong || 0) + 1;
    c.mastered = false;
    c.weakStreak = 0;
    fcSessionWrong++;
  }
  saveState();
  checkBadges();

  if (!advance) return;

  fcIndex++;
  loadCard(fcIndex);
}

function showFcDone() {
  document.getElementById('fc-session').style.display = 'none';
  document.getElementById('fc-done').style.display = 'flex';
  document.getElementById('fc-done').style.flexDirection = 'column';
  document.getElementById('fc-done').style.gap = '12px';

  const total = fcSessionCorrect + fcSessionWrong;
  const pct = total > 0 ? Math.round(fcSessionCorrect / total * 100) : 0;
  document.getElementById('fc-done-stats').innerHTML =
    `<strong>${fcSessionCorrect}</strong> correct, <strong>${fcSessionWrong}</strong> learning, ${pct}% accuracy`;

  const mastered = Object.values(state.cards).filter(c => c.mastered).length;
  if (mastered >= 50) checkBadge('mastered_50');
  if (mastered >= QUESTION_POOL.length) checkBadge('mastered_all');
}

function restartFlashcards() {
  startFlashcards();
}

function endFlashcards() {
  clearFlashcardAdvanceTimer();
  showFlashcardMenu();
}

// ===== SCHEMATIC FLASHCARDS =====

let schDeck = [];
let schIndex = 0;
let schFigureFilter = 'all';
let schFlipped = false;
let schSessionCorrect = 0;
let schSessionWrong = 0;
let schAdvanceTimer = null;

function clearSchAdvanceTimer() {
  if (!schAdvanceTimer) return;
  clearTimeout(schAdvanceTimer);
  schAdvanceTimer = null;
}

function getSchematicQuestions(figureFilter) {
  return QUESTION_POOL.filter(q => {
    const text = q.question.toLowerCase();
    const hasFigure = text.includes('figure t-1') || text.includes('figure t-2') || text.includes('figure t-3');
    if (!hasFigure) return false;
    if (figureFilter === 'all') return true;
    return text.includes('figure ' + figureFilter.toLowerCase());
  });
}

function getSchFigureSrc(question) {
  const text = question.toLowerCase();
  if (text.includes('figure t-1')) return '../../figures/T-1.png';
  if (text.includes('figure t-2')) return '../../figures/T-2.png';
  if (text.includes('figure t-3')) return '../../figures/T-3.png';
  return null;
}

function getSchFigureLabel(question) {
  const text = question.toLowerCase();
  if (text.includes('figure t-1')) return 'Figure T-1';
  if (text.includes('figure t-2')) return 'Figure T-2';
  if (text.includes('figure t-3')) return 'Figure T-3';
  return '';
}

function showSchematicMenu() {
  clearSchAdvanceTimer();
  document.getElementById('sch-menu').style.display = 'block';
  document.getElementById('sch-session').style.display = 'none';
  document.getElementById('sch-done').style.display = 'none';

  const allSchQs = getSchematicQuestions('all');
  const mastered = allSchQs.filter(q => state.cards[q.id]?.mastered).length;
  const totalCorrect = allSchQs.reduce((s, q) => s + (state.cards[q.id]?.correct || 0), 0);
  const totalWrong = allSchQs.reduce((s, q) => s + (state.cards[q.id]?.wrong || 0), 0);
  const accPct = (totalCorrect + totalWrong) > 0
    ? Math.round(totalCorrect / (totalCorrect + totalWrong) * 100) : 0;

  document.getElementById('sch-stat-total').textContent = allSchQs.length;
  document.getElementById('sch-stat-mastered').textContent = mastered;
  document.getElementById('sch-stat-pct').textContent = accPct + '%';
}

function selectSchFigure(el) {
  if (!el) return;
  const fig = el.dataset.figure;
  document.querySelectorAll('.sch-figure-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  schFigureFilter = fig;
}

function buildSchDeck(figureFilter) {
  let pool = getSchematicQuestions(figureFilter);

  pool.sort((a, b) => {
    const ca = state.cards[a.id];
    const cb = state.cards[b.id];
    const seenA = ca?.seen ? 1 : 0;
    const seenB = cb?.seen ? 1 : 0;
    if (seenA !== seenB) return seenA - seenB;
    const errA = ca ? (ca.wrong || 0) / Math.max(1, (ca.correct || 0) + (ca.wrong || 0)) : 0;
    const errB = cb ? (cb.wrong || 0) / Math.max(1, (cb.correct || 0) + (cb.wrong || 0)) : 0;
    return errB - errA;
  });

  return pool;
}

function startSchematicFlashcards() {
  clearSchAdvanceTimer();
  schDeck = buildSchDeck(schFigureFilter);
  if (schDeck.length === 0) return;
  schIndex = 0;
  schSessionCorrect = 0;
  schSessionWrong = 0;
  schFlipped = false;

  document.getElementById('sch-menu').style.display = 'none';
  document.getElementById('sch-session').style.display = 'block';
  document.getElementById('sch-done').style.display = 'none';

  document.getElementById('sch-total').textContent = schDeck.length;
  document.getElementById('sch-section-label').textContent =
    schFigureFilter === 'all' ? 'All Schematics' : 'Figure ' + schFigureFilter;

  loadSchCard(0);
  recordStudyDay();
}

function loadSchCard(idx) {
  clearSchAdvanceTimer();
  document.getElementById('sch-wrong-next').style.display = 'none';
  if (idx >= schDeck.length) {
    showSchDone();
    return;
  }
  const q = schDeck[idx];
  schFlipped = false;

  const figSrc = getSchFigureSrc(q.question);
  const figLabel = getSchFigureLabel(q.question);
  document.getElementById('sch-figure-img').src = figSrc || '';
  document.getElementById('sch-figure-img').style.display = figSrc ? 'block' : 'none';
  document.getElementById('sch-figure-label').textContent = figLabel;

  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('sch-qid').textContent = q.id;
  document.getElementById('sch-question').textContent = q.question;

  document.getElementById('sch-options').innerHTML =
    q.answers.map((a, i) =>
      `<div class="fc-option" id="sch-opt-${i}" data-action="select-sch-answer" data-answer-index="${i}" data-keyboard-activate="true" role="button" tabindex="0">
        <span class="fc-option-letter">${letters[i]}</span>
        <span>${escapeHtml(a)}</span>
      </div>`
    ).join('');

  document.getElementById('sch-current').textContent = idx + 1;
  const pct = Math.round(idx / schDeck.length * 100);
  document.getElementById('sch-bar').style.width = pct + '%';
  const barContainer = document.getElementById('sch-bar-container');
  if (barContainer) barContainer.setAttribute('aria-valuenow', pct);
  document.getElementById('sch-back-btn').disabled = (idx === 0);

  if (!state.cards[q.id]) state.cards[q.id] = {};
  state.cards[q.id].seen = true;
  saveState();
}

function showSchFeedback(selectedIndex) {
  const q = schDeck[schIndex];
  if (!q) return false;

  q.answers.forEach((_, i) => {
    const el = document.getElementById(`sch-opt-${i}`);
    if (!el) return;
    el.removeAttribute('data-action');
    el.removeAttribute('data-answer-index');
    el.removeAttribute('data-keyboard-activate');
    el.setAttribute('aria-disabled', 'true');
    el.tabIndex = -1;
    if (i === q.correct) {
      el.classList.add('fc-correct');
    } else {
      el.classList.add('fc-wrong');
    }
    if (selectedIndex !== q.correct && i === selectedIndex) {
      el.classList.add('fc-selected-wrong');
    }
  });

  return selectedIndex === q.correct;
}

function selectSchAnswer(selectedIndex) {
  if (schFlipped) return;
  schFlipped = true;

  const pickedCorrectly = showSchFeedback(selectedIndex);
  checkBadge('first_flip');

  if (pickedCorrectly) {
    announce('Correct! Moving to next question.');
    schAdvanceTimer = setTimeout(() => {
      schAdvanceTimer = null;
      markSchCard(true);
    }, 1200);
    return;
  }

  announce('Incorrect. The correct answer is highlighted. Press Next to continue.');
  markSchCard(false, { advance: false });
  document.getElementById('sch-wrong-next').style.display = 'flex';
}

function markSchCard(correct, { advance = true } = {}) {
  const q = schDeck[schIndex];
  if (!state.cards[q.id]) state.cards[q.id] = {};
  const c = state.cards[q.id];

  if (correct) {
    c.correct = (c.correct || 0) + 1;
    schSessionCorrect++;
    const total = (c.correct || 0) + (c.wrong || 0);
    if (c.correct >= 3 && (c.wrong || 0) / total < 0.2) c.mastered = true;
  } else {
    c.wrong = (c.wrong || 0) + 1;
    c.mastered = false;
    schSessionWrong++;
  }
  saveState();
  checkBadges();

  if (!advance) return;
  schIndex++;
  loadSchCard(schIndex);
}

function schPrevCard() {
  clearSchAdvanceTimer();
  if (schIndex <= 0) return;
  schIndex--;
  loadSchCard(schIndex);
}

function schAdvanceNext() {
  document.getElementById('sch-wrong-next').style.display = 'none';
  schIndex++;
  loadSchCard(schIndex);
}

function showSchDone() {
  document.getElementById('sch-session').style.display = 'none';
  document.getElementById('sch-done').style.display = 'flex';
  document.getElementById('sch-done').style.flexDirection = 'column';
  document.getElementById('sch-done').style.gap = '12px';

  const total = schSessionCorrect + schSessionWrong;
  const pct = total > 0 ? Math.round(schSessionCorrect / total * 100) : 0;
  document.getElementById('sch-done-stats').innerHTML =
    `<strong>${schSessionCorrect}</strong> correct, <strong>${schSessionWrong}</strong> learning, ${pct}% accuracy`;
}

function endSchematicFlashcards() {
  clearSchAdvanceTimer();
  showSchematicMenu();
}

function zoomSchematic() {
  const src = document.getElementById('sch-figure-img').src;
  if (!src) return;
  const overlay = document.getElementById('sch-zoom-overlay');
  document.getElementById('sch-zoom-img').src = src;
  overlay.classList.add('open');
}

function closeSchZoom() {
  document.getElementById('sch-zoom-overlay').classList.remove('open');
}

// ===== TTS =====

let speaking = false;
let utterance = null;

function speakQuestion() {
  if (!window.speechSynthesis) return;
  if (speaking) {
    window.speechSynthesis.cancel();
    speaking = false;
    document.getElementById('fc-tts-btn').classList.remove('speaking');
    return;
  }

  const q = fcDeck[fcIndex];
  if (!q) return;

  let text = q.question;
  if (fcFlipped) {
    text += '. The correct answer is: ' + q.answers[q.correct];
  }

  utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.onend = () => {
    speaking = false;
    document.getElementById('fc-tts-btn')?.classList.remove('speaking');
  };
  utterance.onerror = () => {
    speaking = false;
    document.getElementById('fc-tts-btn')?.classList.remove('speaking');
  };

  window.speechSynthesis.speak(utterance);
  speaking = true;
  document.getElementById('fc-tts-btn').classList.add('speaking');
}

// ===== PRACTICE TEST =====

let testQuestions = [];
let testAnswers = [];  // user's selected answer indices
let testRevealed = []; // which have been revealed
let testCurrentQ = 0;
let testTimer = null;
let testTimeLeft = 26 * 60;
let testStartTime = null;

function showTestStart() {
  document.getElementById('test-start').style.display = 'block';
  document.getElementById('test-active').style.display = 'none';
  document.getElementById('test-results').style.display = 'none';
  updateFormulaFab();
  if (testTimer) { clearInterval(testTimer); testTimer = null; }
}

function buildTestDeck() {
  // Real exam draws from each subelement proportionally — same weights for both 2022-2026 and 2026-2030 pools
  // Per NCVEC: T1(6), T2(3), T3(3), T4(2), T5(4), T6(4), T7(4), T8(4), T9(2), T0(3) = 35
  const weights = { T1:6, T2:3, T3:3, T4:2, T5:4, T6:4, T7:4, T8:4, T9:2, T0:3 };
  const deck = [];

  for (const [se, count] of Object.entries(weights)) {
    const pool = QUESTION_POOL.filter(q => q.id.startsWith(se));
    const shuffled = shuffle([...pool]);
    deck.push(...shuffled.slice(0, count));
  }

  return shuffle(deck);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startTest() {
  testQuestions = buildTestDeck();
  testAnswers = new Array(35).fill(-1);
  testRevealed = new Array(35).fill(false);
  testCurrentQ = 0;
  testTimeLeft = 26 * 60;
  testStartTime = Date.now();

  document.getElementById('test-start').style.display = 'none';
  document.getElementById('test-active').style.display = 'block';
  document.getElementById('test-results').style.display = 'none';

  renderTestQuestion();
  startTestTimer();
  updateFormulaFab(); // Hide FAB during test

  recordStudyDay();
  checkBadge('first_test');
}

function startTestTimer() {
  if (testTimer) clearInterval(testTimer);
  testTimer = setInterval(() => {
    testTimeLeft--;
    updateTimerDisplay();
    if (testTimeLeft <= 0) {
      clearInterval(testTimer);
      submitTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(testTimeLeft / 60);
  const secs = testTimeLeft % 60;
  const el = document.getElementById('test-timer');
  el.textContent = `⏱ ${mins}:${secs.toString().padStart(2,'0')}`;
  el.classList.toggle('warning', testTimeLeft < 5 * 60);
}

function getFigureForQuestion(question) {
  const text = question.toLowerCase();
  if (text.includes('figure t-1')) return '../../figures/T-1.png';
  if (text.includes('figure t-2')) return '../../figures/T-2.png';
  if (text.includes('figure t-3')) return '../../figures/T-3.png';
  return null;
}

function renderTestQuestion() {
  const q = testQuestions[testCurrentQ];
  const n = testCurrentQ + 1;

  document.getElementById('test-qnum').textContent = n;
  document.getElementById('test-qid').textContent = q.id;
  document.getElementById('test-question').textContent = q.question;
  const testPct = Math.round(n / 35 * 100);
  document.getElementById('test-bar').style.width = testPct + '%';
  const testBarContainer = document.getElementById('test-bar-container');
  if (testBarContainer) testBarContainer.setAttribute('aria-valuenow', testPct);
  const testBarPctEl = document.getElementById('test-bar-pct');
  if (testBarPctEl) testBarPctEl.textContent = testPct + '%';

  document.getElementById('test-prev-btn').disabled = testCurrentQ === 0;
  document.getElementById('test-next-btn').textContent =
    testCurrentQ === 34 ? 'Submit →' : 'Next →';
  const showAnswerBtn = document.getElementById('test-show-answer-btn');
  if (showAnswerBtn) showAnswerBtn.disabled = testRevealed[testCurrentQ] === true;

  // Show figure image if question references one
  const figureEl = document.getElementById('test-figure');
  const figureImg = document.getElementById('test-figure-img');
  const figSrc = getFigureForQuestion(q.question);
  if (figSrc) {
    figureImg.src = figSrc;
    figureEl.style.display = 'block';
  } else {
    figureEl.style.display = 'none';
    figureImg.src = '';
  }

  const letters = ['A', 'B', 'C', 'D'];
  const revealed = testRevealed[testCurrentQ] === true;
  const selected = testAnswers[testCurrentQ];

  document.getElementById('answer-options').innerHTML = q.answers.map((a, i) => {
    let cls = '';
    if (revealed) {
      if (i === q.correct) cls = 'correct';
      else if (i === selected && i !== q.correct) cls = 'wrong';
    } else if (typeof selected === 'number' && i === selected) {
      cls = 'selected';
    }
    return `<button type="button" class="answer-option ${cls}" data-action="select-answer" data-answer-index="${i}" ${revealed ? 'disabled' : ''}>
      <span class="answer-letter">${letters[i]}</span>
      <span>${escapeHtml(a)}</span>
    </button>`;
  }).join('');
}

function selectAnswer(idx) {
  if (testRevealed[testCurrentQ]) return;
  testAnswers[testCurrentQ] = idx;
  renderTestQuestion();
}

function showTestAnswer() {
  if (testRevealed[testCurrentQ] === true) return;
  // Mark as peeked: reveal the answer, count as wrong
  testRevealed[testCurrentQ] = true;
  // Force wrong by setting selected to something that isn't correct
  // (if they hadn't selected yet, -1 ensures it's wrong; if they had selected correctly, override to -1)
  const q = testQuestions[testCurrentQ];
  if (testAnswers[testCurrentQ] === q.correct) {
    // They had the right one — peeking overrides it to wrong
    testAnswers[testCurrentQ] = -1;
  }
  renderTestQuestion();
}

function endExamEarly() {
  const answered = testAnswers.filter(a => a !== -1).length;
  const correctSoFar = testQuestions.reduce((n, q, i) => n + (testAnswers[i] === q.correct ? 1 : 0), 0);
  const msg = answered === 0
    ? 'End exam now? All 35 questions will be marked wrong.'
    : `End exam now?\n\n${answered} of 35 answered · ${correctSoFar} correct so far\nUnanswered questions count as wrong.`;
  if (!confirm(msg)) return;
  submitTest();
}

function testPrev() {
  if (testCurrentQ > 0) {
    testCurrentQ--;
    renderTestQuestion();
  }
}

function testNext() {
  if (testCurrentQ < 34) {
    testCurrentQ++;
    renderTestQuestion();
  } else {
    submitTest();
  }
}

function submitTest() {
  if (testTimer) clearInterval(testTimer);

  let correct = 0;
  const wrongQids = [];

  testQuestions.forEach((q, i) => {
    if (testAnswers[i] === q.correct) {
      correct++;
      const c = state.cards[q.id] || {};
      c.seen = true; c.correct = (c.correct||0) + 1;
      state.cards[q.id] = c;
    } else {
      wrongQids.push(q.id);
      const c = state.cards[q.id] || {};
      c.seen = true; c.wrong = (c.wrong||0) + 1; c.mastered = false;
      state.cards[q.id] = c;
    }
  });

  const pct = Math.round(correct / 35 * 100);
  const pass = correct >= 26;

  state.tests.push({ score: correct, total: 35, pct, date: new Date().toISOString(), wrong: wrongQids });
  saveState();
  checkBadges();

  showTestResults(correct, pct, pass, wrongQids);
}

function showTestResults(correct, pct, pass, wrongQids) {
  document.getElementById('test-active').style.display = 'none';
  document.getElementById('test-results').style.display = 'block';
  updateFormulaFab(); // Show FAB again after test ends

  document.getElementById('score-emoji').textContent = pass ? (pct === 100 ? '💯' : '🏆') : '📖';
  document.getElementById('score-num').textContent = `${correct}/35`;
  document.getElementById('score-num').className = 'score-num ' + (pass ? 'pass' : 'fail');
  document.getElementById('score-label').textContent = pass ? '✓ PASS' : '✗ FAIL';
  document.getElementById('score-sub').textContent = `${pct}% · Need 74% (26/35) to pass`;

  const elapsed = Math.round((Date.now() - testStartTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  if (wrongQids.length === 0) {
    document.getElementById('review-section').style.display = 'none';
  } else {
    document.getElementById('review-section').style.display = 'block';
    document.getElementById('wrong-count').textContent = `${wrongQids.length} wrong`;
    document.getElementById('review-list').innerHTML = testQuestions.map((q, i) => {
      const isWrong = testAnswers[i] !== q.correct;
      if (!isWrong) return '';
      const selected = testAnswers[i];
      return `<div class="review-item wrong-item">
        <div class="review-qid wrong-item">${escapeHtml(q.id)}</div>
        <div class="review-q">${escapeHtml(q.question)}</div>
        <div class="review-answer">
          ${selected >= 0 ? `<span class="wrong-ans">✗ ${escapeHtml(q.answers[selected])}</span><br>` : ''}
          <span class="right">✓ ${escapeHtml(q.answers[q.correct])}</span>
        </div>
      </div>`;
    }).filter(Boolean).join('');
  }
}

// ===== PROGRESS PAGE =====

function renderProgress() {
  const stats = getStats();

  document.getElementById('prog-readiness').textContent = stats.readiness + '%';
  document.getElementById('prog-readiness-bar').style.width = stats.readiness + '%';

  // Test history
  const histList = document.getElementById('history-list');
  if (state.tests.length === 0) {
    histList.innerHTML = '<div class="empty-state"><div class="empty-icon">📝</div><p>No tests taken yet</p></div>';
  } else {
    histList.innerHTML = [...state.tests].reverse().slice(0, 10).map(t => {
      const pass = t.score >= 26;
      const d = new Date(t.date);
      const dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
      return `<div class="history-item">
        <div class="history-score ${pass?'pass':'fail'}">${escapeHtml(t.score)}/35</div>
        <div class="history-info">
          <div>${escapeHtml(t.pct)}% · ${pass ? '✓ Pass' : '✗ Fail'}</div>
          <div class="history-date">${escapeHtml(dateStr)}</div>
        </div>
      </div>`;
    }).join('');
  }

  // Per-section progress
  const spList = document.getElementById('section-progress-list');
  const subelements = Object.keys(SUBELEMENT_NAMES).sort();
  spList.innerHTML = subelements.map(se => {
    const qs = QUESTION_POOL.filter(q => q.id.startsWith(se));
    const total = qs.length;
    const mastered = qs.filter(q => state.cards[q.id]?.mastered).length;
    const seen = qs.filter(q => state.cards[q.id]?.seen).length;
    const pct = Math.round(mastered / total * 100);
    return `<div class="sp-card">
      <div class="sp-header">
        <div class="sp-title">${SUBELEMENT_NAMES[se]}</div>
        <div class="sp-pct">${pct}%</div>
      </div>
      <div class="progress-bar">
        <div class="progress-fill ${pct >= 80 ? 'green' : ''}" style="width:${pct}%"></div>
      </div>
      <div class="sp-detail">
        <span>✓ ${mastered} mastered</span>
        <span>👁 ${seen} seen</span>
        <span>📚 ${total} total</span>
      </div>
    </div>`;
  }).join('');

  // Badges
  renderBadges();
}

function renderBadges() {
  document.getElementById('badges-grid').innerHTML = BADGES.map(b => {
    const earned = state.badges.includes(b.id);
    return `<div class="badge-card ${earned ? 'earned' : ''}" title="${escapeHtml(b.desc)}">
      <div class="badge-icon">${escapeHtml(b.icon)}</div>
      <div class="badge-name">${escapeHtml(b.name)}</div>
    </div>`;
  }).join('');
}

// ===== BADGES =====

function checkBadge(id) {
  if (!state.badges.includes(id)) {
    state.badges.push(id);
    saveState();
  }
}

function checkBadges() {
  const stats = getStats();
  const tests = state.tests;

  if (Object.values(state.cards).some(c => c.seen)) checkBadge('first_flip');
  if (tests.length >= 1) checkBadge('first_test');
  if (tests.some(t => t.score >= 26)) checkBadge('first_pass');
  if (tests.some(t => t.score === 35)) checkBadge('perfect_test');
  if (tests.length >= 5) checkBadge('5_tests');

  const seenCount = Object.values(state.cards).filter(c => c.seen).length;
  if (seenCount >= 100) checkBadge('100_cards');
  if (seenCount >= QUESTION_POOL.length) checkBadge('all_seen');

  const mastered = Object.values(state.cards).filter(c => c.mastered).length;
  if (mastered >= 50) checkBadge('mastered_50');
  if (mastered >= QUESTION_POOL.length) checkBadge('mastered_all');

  if (state.streak >= 3) checkBadge('streak_3');
  if (state.streak >= 7) checkBadge('streak_7');
  if (stats.readiness >= 90) checkBadge('ready');
}

// ===== RESET =====

let modalPrevFocus = null;

function confirmReset() {
  modalPrevFocus = document.activeElement;
  const modal = document.getElementById('reset-modal');
  modal.classList.add('open');
  // Trap focus inside modal
  modal.addEventListener('keydown', trapModalFocus);
  // Focus cancel button for safety
  setTimeout(() => {
    const cancelBtn = document.getElementById('reset-cancel-btn');
    if (cancelBtn) cancelBtn.focus();
  }, 100);
}

function trapModalFocus(e) {
  if (e.key !== 'Tab') return;
  const modal = document.getElementById('reset-modal');
  const focusable = modal.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('open');
  modal.removeEventListener('keydown', trapModalFocus);
  if (modalPrevFocus) { modalPrevFocus.focus(); modalPrevFocus = null; }
}

function doReset() {
  state = { ...createDefaultState(), theme: state.theme, selectedPool: state.selectedPool };
  saveState();
  closeModal('reset-modal');
  renderProgress();
  renderHome();
  showPage('home');
}

// ===== PWA SERVICE WORKER =====

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ===== DATA LOADING =====

/**
 * Transform canonical pool format → app format:
 *   answers: {A,B,C,D}  → array [A_val, B_val, C_val, D_val]
 *   correct: letter      → index (A=0, B=1, C=2, D=3)
 *   question: may start with [97.1] bracket → extract as refs, strip from text
 */
function transformQuestion(q) {
  const answerKeys = ['A', 'B', 'C', 'D'];
  const answers = answerKeys.map(k => q.answers[k]);
  const correct = answerKeys.indexOf(q.correct);

  // Extract bracketed refs like [97.1] or [97.3(a)(2)] from start of question
  const refsMatch = q.question.match(/^\[([^\]]+)\]\s*/);
  const refs = refsMatch ? refsMatch[1] : null;
  const question = refsMatch ? q.question.slice(refsMatch[0].length) : q.question;

  return { id: q.id, correct, refs, question, answers };
}

async function loadPool(pool) {
  const loadingEl = document.createElement('div');
  loadingEl.id = 'loading-overlay';
  loadingEl.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:var(--bg);z-index:999;font-size:18px;color:var(--text2);';
  loadingEl.textContent = `📡 Loading ${pool.id} question pool…`;
  document.body.appendChild(loadingEl);

  try {
    const resp = await fetch(pool.path);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    QUESTION_POOL = data.questions.map(transformQuestion);
    ACTIVE_POOL = pool;
    loadingEl.remove();
    return true;
  } catch (err) {
    loadingEl.innerHTML = `<div style="text-align:center;padding:24px;">
      <div style="font-size:48px;margin-bottom:16px;">⚠️</div>
      <div style="font-weight:700;margin-bottom:8px;">Failed to load question pool</div>
      <div style="font-size:14px;color:var(--text2);margin-bottom:16px;">${escapeHtml(err.message)}</div>
      <button type="button" data-action="reload-page" style="padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:16px;">Retry</button>
    </div>`;
    return false;
  }
}

async function switchPool(poolId) {
  const pool = POOLS.find(p => p.id === poolId);
  if (!pool || pool.id === ACTIVE_POOL?.id) return;
  state.selectedPool = poolId;
  saveState();
  const ok = await loadPool(pool);
  if (ok) {
    renderHome();
    renderSections();
    updatePoolBanner();
    // Reset flashcard section if in middle of one
    if (currentPage === 'flashcard') showFlashcardMenu();
  }
}

function updatePoolBanner() {
  const banner = document.getElementById('pool-banner');
  const label = document.getElementById('pool-banner-label');
  const select = document.getElementById('pool-select');
  if (!banner) return;

  const today = new Date().toISOString().slice(0, 10);
  // Show banner always so user can switch pools
  banner.style.display = 'flex';

  // Update select options
  select.innerHTML = POOLS.map(p => {
    const isActive = today >= p.effective && today <= p.expires;
    return `<option value="${p.id}" ${ACTIVE_POOL?.id === p.id ? 'selected' : ''}>
      ${escapeHtml(p.id)}${isActive ? ' ✓' : ''}
    </option>`;
  }).join('');

  // Update label
  if (ACTIVE_POOL) {
    const isCurrentlyActive = today >= ACTIVE_POOL.effective && today <= ACTIVE_POOL.expires;
    label.textContent = `${ACTIVE_POOL.id} pool · ${QUESTION_POOL.length} questions${isCurrentlyActive ? ' · Active now' : ''}`;
  }
}

async function initApp() {
  loadState();
  applyTheme(state.theme || 'auto');

  // Pick pool: use saved preference, or auto-select by date
  const savedPoolId = state.selectedPool;
  const pool = (savedPoolId && POOLS.find(p => p.id === savedPoolId)) || getDefaultPool();

  const ok = await loadPool(pool);
  if (!ok) return;

  renderHome();
  renderSections();
  updatePoolBanner();
  updateFormulaFab();
}

function handleAction(actionEl) {
  switch (actionEl.dataset.action) {
    case 'toggle-theme':
      toggleTheme();
      return;
    case 'show-page':
      showPage(actionEl.dataset.page);
      return;
    case 'start-quick-flashcards':
      startQuickFlashcards();
      return;
    case 'start-practice-test':
      startPracticeTest();
      return;
    case 'start-flashcards':
      startFlashcards();
      return;
    case 'prev-card':
      prevCard();
      return;
    case 'speak-question':
      speakQuestion();
      return;
    case 'end-flashcards':
      endFlashcards();
      return;
    case 'flashcard-next':
      fcAdvanceNext();
      return;
    case 'restart-flashcards':
      restartFlashcards();
      return;
    case 'show-flashcard-menu':
      showFlashcardMenu();
      return;
    case 'start-test':
      startTest();
      return;
    case 'test-prev':
      testPrev();
      return;
    case 'test-next':
      testNext();
      return;
    case 'show-test-answer':
      showTestAnswer();
      return;
    case 'end-exam-early':
      endExamEarly();
      return;
    case 'confirm-reset':
      confirmReset();
      return;
    case 'do-reset':
      doReset();
      return;
    case 'close-modal':
      closeModal(actionEl.dataset.modalId);
      return;
    case 'start-section-flashcards':
      startSectionFlashcards(actionEl.dataset.section);
      return;
    case 'start-section-study':
      startSectionStudy(actionEl.dataset.section);
      return;
    case 'select-study-answer':
      selectStudyAnswer(Number(actionEl.dataset.answerIndex));
      return;
    case 'study-prev':
      studyPrev();
      return;
    case 'study-next':
      studyNext();
      return;
    case 'study-back':
      showPage('sections');
      return;
    case 'study-restart':
      studyRestart();
      return;
    case 'select-section':
      selectSection(actionEl);
      return;
    case 'select-flashcard-answer':
      selectFlashcardAnswer(Number(actionEl.dataset.answerIndex));
      return;
    case 'select-sch-figure':
      selectSchFigure(actionEl);
      return;
    case 'start-schematic-flashcards':
      startSchematicFlashcards();
      return;
    case 'sch-prev-card':
      schPrevCard();
      return;
    case 'end-schematic-flashcards':
      endSchematicFlashcards();
      return;
    case 'sch-advance-next':
      schAdvanceNext();
      return;
    case 'restart-schematic-flashcards':
      startSchematicFlashcards();
      return;
    case 'show-schematic-menu':
      showSchematicMenu();
      return;
    case 'select-sch-answer':
      selectSchAnswer(Number(actionEl.dataset.answerIndex));
      return;
    case 'zoom-schematic':
      zoomSchematic();
      return;
    case 'close-sch-zoom':
      closeSchZoom();
      return;
    case 'select-answer':
      selectAnswer(Number(actionEl.dataset.answerIndex));
      return;
    case 'reload-page':
      window.location.reload();
      return;
    case 'start-weak-areas':
      startWeakAreas();
      return;
    case 'open-formula-modal':
      openModal('formula-modal');
      return;
    default:
      return;
  }
}

function handleDocumentClick(event) {
  const actionEl = event.target.closest('[data-action]');
  if (!actionEl) return;
  handleAction(actionEl);
}

function handleDocumentChange(event) {
  if (event.target?.dataset.action !== 'switch-pool') return;
  switchPool(event.target.value);
}

function handleDocumentKeydown(event) {
  if (event.key === 'Escape') {
    const zoom = document.getElementById('sch-zoom-overlay');
    if (zoom?.classList.contains('open')) {
      closeSchZoom();
      return;
    }
    const formulaModal = document.getElementById('formula-modal');
    if (formulaModal?.classList.contains('open')) {
      closeModal('formula-modal');
      return;
    }
    const modal = document.getElementById('reset-modal');
    if (modal?.classList.contains('open')) {
      closeModal('reset-modal');
    }
    return;
  }

  if (event.key !== 'Enter' && event.key !== ' ') return;
  const actionEl = event.target.closest('[data-keyboard-activate="true"]');
  if (!actionEl) return;
  event.preventDefault();
  handleAction(actionEl);
}

function bindModalInteractions() {
  const modal = document.getElementById('reset-modal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal('reset-modal');
    });
  }
  const formulaModal = document.getElementById('formula-modal');
  if (formulaModal) {
    formulaModal.addEventListener('click', (event) => {
      if (event.target === formulaModal) closeModal('formula-modal');
    });
  }
}

// ===== FORMULA FAB VISIBILITY =====

function updateFormulaFab() {
  const fab = document.getElementById('formula-fab');
  if (!fab) return;
  const testActive = document.getElementById('test-active');
  if (currentPage === 'test' && testActive && testActive.style.display !== 'none') {
    fab.classList.add('hidden');
  } else {
    fab.classList.remove('hidden');
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

// ===== WEAK AREAS MODE =====

function getWeakQuestions() {
  return QUESTION_POOL.filter(q => {
    const c = state.cards[q.id];
    if (!c) return false;
    if (!c.seen) return false;
    if ((c.wrong || 0) === 0) return false;
    if (c.mastered) return false;
    if ((c.weakStreak || 0) >= 3) return false;
    return true;
  });
}

function startWeakAreas() {
  const weakQs = getWeakQuestions();
  if (weakQs.length === 0) {
    showPage('flashcard', true);
    document.getElementById('fc-mode-select').style.display = 'none';
    document.getElementById('fc-session').style.display = 'none';
    document.getElementById('fc-done').style.display = 'flex';
    document.getElementById('fc-done').style.flexDirection = 'column';
    document.getElementById('fc-done').style.gap = '12px';
    document.getElementById('fc-done-stats').innerHTML =
      `<div style="text-align:center;padding:20px 0">
        <div style="font-size:48px;margin-bottom:12px">🎯</div>
        <div class="page-title">No Weak Areas!</div>
        <div class="page-sub mt-2">You're crushing it! All questions mastered.</div>
      </div>`;
    return;
  }

  const shuffled = shuffle([...weakQs]);
  showPage('flashcard', true);
  fcDeck = shuffled;
  fcIndex = 0;
  fcSessionCorrect = 0;
  fcSessionWrong = 0;
  fcFlipped = false;
  fcSection = 'weak_areas';

  document.getElementById('fc-mode-select').style.display = 'none';
  document.getElementById('fc-session').style.display = 'block';
  document.getElementById('fc-done').style.display = 'none';
  document.getElementById('fc-total').textContent = fcDeck.length;
  document.getElementById('fc-section-label').textContent = '🎯 Weak Areas (' + fcDeck.length + ' remaining)';

  loadCard(0);
  recordStudyDay();
}

// ===== SECTION STUDY MODE =====

let studySection = '';
let studyQuestions = [];
let studyIndex = 0;
let studyAnswers = {}; // index → selected answer index

function startSectionStudy(se) {
  studySection = se;
  studyQuestions = QUESTION_POOL.filter(q => q.id.startsWith(se))
    .sort((a, b) => a.id.localeCompare(b.id));
  studyIndex = 0;
  studyAnswers = {};

  if (studyQuestions.length === 0) return;

  // Set header info
  const seName = SUBELEMENT_NAMES[se] || se;
  const shortDesc = seName.split('·')[1]?.trim();
  document.getElementById('study-section-title').textContent = shortDesc ? se + ' — ' + shortDesc : seName;
  document.getElementById('study-section-count').textContent = studyQuestions.length + ' questions';

  // Show active session, hide complete
  document.getElementById('study-active').style.display = 'flex';
  document.getElementById('study-complete').style.display = 'none';

  showPage('section-study', true);
  renderStudyQuestion();
  recordStudyDay();
}

function renderStudyQuestion() {
  const q = studyQuestions[studyIndex];
  if (!q) return;

  const total = studyQuestions.length;
  const num = studyIndex + 1;
  const pct = Math.round(num / total * 100);

  // Progress
  document.getElementById('study-progress-label').textContent = `Question ${num} of ${total}`;
  document.getElementById('study-progress-bar').style.width = pct + '%';
  const barContainer = document.getElementById('study-bar-container');
  if (barContainer) barContainer.setAttribute('aria-valuenow', pct);

  // Question
  document.getElementById('study-qid').textContent = q.id;
  document.getElementById('study-question').textContent = q.question;

  // Remove old figure if any
  const oldFig = document.getElementById('study-figure-container');
  if (oldFig) oldFig.remove();

  // Show figure if question references one
  const figHtml = renderStudyFigure(q.question);
  if (figHtml) {
    document.getElementById('study-question').insertAdjacentHTML('afterend', figHtml);
  }

  // Answers
  const letters = ['A', 'B', 'C', 'D'];
  const previousAnswer = studyAnswers[studyIndex];
  const isReviewing = previousAnswer !== undefined;

  document.getElementById('study-options').innerHTML =
    q.answers.map((a, i) => {
      let classes = 'fc-option';
      if (isReviewing) {
        // Show previous answer highlighted (dimmed)
        if (i === q.correct) {
          classes += ' fc-correct study-reviewed';
        } else {
          classes += ' fc-wrong study-reviewed';
        }
        if (previousAnswer !== q.correct && i === previousAnswer) {
          classes += ' fc-selected-wrong';
        }
      }
      const action = isReviewing ? '' : 'data-action="select-study-answer" data-answer-index="' + i + '" data-keyboard-activate="true"';
      const disabled = isReviewing ? 'aria-disabled="true" tabindex="-1"' : 'tabindex="0" role="button"';
      return `<div class="${classes}" id="study-opt-${i}" ${action} ${disabled}>
        <span class="fc-option-letter">${letters[i]}</span>
        <span>${escapeHtml(a)}</span>
      </div>`;
    }).join('');

  // Nav buttons
  document.getElementById('study-prev-btn').disabled = (studyIndex === 0);
  document.getElementById('study-next-btn').textContent =
    (studyIndex === total - 1 && studyAnswers[studyIndex] !== undefined) ? 'Finish →' : 'Next →';

  window.scrollTo(0, 0);
}

function selectStudyAnswer(selectedIndex) {
  // Already answered this question
  if (studyAnswers[studyIndex] !== undefined) return;

  studyAnswers[studyIndex] = selectedIndex;
  const q = studyQuestions[studyIndex];

  // Highlight answers
  q.answers.forEach((_, i) => {
    const el = document.getElementById(`study-opt-${i}`);
    if (!el) return;
    el.removeAttribute('data-action');
    el.removeAttribute('data-answer-index');
    el.removeAttribute('data-keyboard-activate');
    el.setAttribute('aria-disabled', 'true');
    el.tabIndex = -1;
    if (i === q.correct) {
      el.classList.add('fc-correct');
    } else {
      el.classList.add('fc-wrong');
    }
    if (selectedIndex !== q.correct && i === selectedIndex) {
      el.classList.add('fc-selected-wrong');
    }
  });

  // Update next button text for last question
  if (studyIndex === studyQuestions.length - 1) {
    document.getElementById('study-next-btn').textContent = 'Finish →';
  }

  const isCorrect = selectedIndex === q.correct;
  announce(isCorrect ? 'Correct!' : 'Incorrect. The correct answer is highlighted.');
}

function studyNext() {
  if (studyIndex < studyQuestions.length - 1) {
    studyIndex++;
    renderStudyQuestion();
  } else if (studyAnswers[studyIndex] !== undefined) {
    // On last question and answered — show completion
    showStudyComplete();
  }
}

function studyPrev() {
  if (studyIndex > 0) {
    studyIndex--;
    renderStudyQuestion();
  }
}

function showStudyComplete() {
  document.getElementById('study-active').style.display = 'none';
  document.getElementById('study-complete').style.display = 'flex';
  document.getElementById('study-complete').style.flexDirection = 'column';
  document.getElementById('study-complete').style.gap = '12px';

  const total = studyQuestions.length;
  const answered = Object.keys(studyAnswers).length;
  let correct = 0;
  for (const [idx, ans] of Object.entries(studyAnswers)) {
    if (studyQuestions[idx] && ans === studyQuestions[idx].correct) correct++;
  }
  const pct = answered > 0 ? Math.round(correct / answered * 100) : 0;

  document.getElementById('study-complete-stats').innerHTML =
    `<strong>${correct}</strong> of <strong>${answered}</strong> correct (${pct}%)<br>
     <span style="font-size:13px;color:var(--text2);">${total - answered} skipped</span>`;
}

function studyRestart() {
  studyIndex = 0;
  studyAnswers = {};
  document.getElementById('study-active').style.display = 'flex';
  document.getElementById('study-complete').style.display = 'none';
  renderStudyQuestion();
}

function renderStudyFigure(question) {
  const text = question.toLowerCase();
  const match = text.match(/figure t-([123])/);
  if (!match) return '';
  const figKey = 'T-' + match[1];
  const src = '../../figures/' + figKey + '.png';
  return `<div class="fc-figure" id="study-figure-container">
    <img src="${src}" alt="Figure ${figKey}" class="fc-figure-img" data-action="zoom-schematic-fc" data-fig-src="${src}">
  </div>`;
}

// ===== FIGURE RENDERING IN FLASHCARDS =====

function renderFcFigure(question) {
  const text = question.toLowerCase();
  const match = text.match(/figure t-([123])/);
  if (!match) return '';
  const figKey = 'T-' + match[1];
  const src = '../../figures/' + figKey + '.png';
  return `<div class="fc-figure" id="fc-figure-container">
    <img src="${src}" alt="Figure ${figKey}" class="fc-figure-img" data-action="zoom-schematic-fc" data-fig-src="${src}">
  </div>`;
}

// ===== INIT =====

document.addEventListener('click', handleDocumentClick);
document.addEventListener('change', handleDocumentChange);
document.addEventListener('keydown', handleDocumentKeydown);
bindModalInteractions();
initApp();
