/* ==========================================================
   MCQ Review — Application logic
   Depends on: data.js (QUESTIONS)
   ========================================================== */

// ---------- DOM references ----------
const listEl   = document.getElementById('list');
const chipsEl  = document.getElementById('chips');
const searchEl = document.getElementById('search');
const showAllBtn = document.getElementById('showAll');
const resetBtn   = document.getElementById('reset');
const progressEl = document.getElementById('progress');
const statusEl   = document.getElementById('status');

// ---------- State ----------
// picked[n]: option index chosen for question n, or -1 if only the answer was revealed
const picked = {};
let sectionFilter = 'all';
let showAll = false;

// ---------- Helpers ----------
const LETTERS = 'ABCD';
const correctIndex = (q) => 'abcd'.indexOf(q.answer[0].toLowerCase());

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Wrap English terms inside the Arabic explanation so they can be highlighted
const highlightEnglish = (text) =>
  escapeHtml(text).replace(
    /[A-Za-z][A-Za-z0-9\-\.\/']*(?:\s+(?:[A-Za-z0-9\-\.\/']+|&amp;))*/g,
    (term) => `<span class="en">${term}</span>`
  );

const isAnswered = (n) => picked[n] !== undefined && picked[n] !== -1;

// ---------- Rendering ----------
function sectionTitle(section) {
  const name  = section === 1 ? 'القسم الأول' : 'القسم الثاني';
  const range = section === 1 ? '1 – 20' : '21 – 40';
  return `<h2>${name} <span class="en" style="font-size:15px">Questions ${range}</span></h2>`;
}

function optionHtml(q, n, text, k, isOpen) {
  let state = '';
  if (isOpen && k === correctIndex(q)) state = ' ok';
  else if (picked[n] === k) state = ' no';
  return `
    <li>
      <button class="opt${state}" data-n="${n}" data-k="${k}">
        <b>${LETTERS[k]}</b><span>${escapeHtml(text)}</span>
      </button>
    </li>`;
}

function questionHtml(q, n) {
  const isOpen = showAll || picked[n] !== undefined;
  return `
    <section class="q${isOpen ? ' show' : ''}" id="q${n}">
      <div class="qh">
        <div class="n">${n}</div>
        <div class="qt">${escapeHtml(q.question)}</div>
      </div>
      <ul class="opts">${q.options.map((o, k) => optionHtml(q, n, o, k, isOpen)).join('')}</ul>
      <button class="tg" data-toggle="${n}">${isOpen ? 'إخفاء الإجابة' : 'إظهار الإجابة والشرح'}</button>
      <div class="ans">
        <div><span class="lbl">الإجابة الصحيحة:</span></div>
        <div class="av">${escapeHtml(q.answer)}</div>
        <div class="ex"><span class="lbl">الشرح:</span> ${highlightEnglish(q.explanation)}</div>
      </div>
    </section>`;
}

function matchesSearch(q, term) {
  if (!term) return true;
  return (q.question + q.options.join(' ') + q.explanation).toLowerCase().includes(term);
}

function renderList() {
  const term = searchEl.value.trim().toLowerCase();
  let html = '';
  let lastSection = 0;

  QUESTIONS.forEach((q, i) => {
    const n = i + 1;
    const inSection = sectionFilter === 'all' || Number(sectionFilter) === q.section;
    if (!inSection || !matchesSearch(q, term)) return;

    if (q.section !== lastSection) {
      html += sectionTitle(q.section);
      lastSection = q.section;
    }
    html += questionHtml(q, n);
  });

  listEl.innerHTML = html || '<p class="empty">لا توجد نتائج</p>';
}

function renderProgress() {
  let right = 0, wrong = 0;

  [...chipsEl.children].forEach((chip, i) => {
    const n = i + 1;
    chip.className = 'chip';
    if (!isAnswered(n)) return;
    if (picked[n] === correctIndex(QUESTIONS[i])) { chip.classList.add('ok'); right++; }
    else { chip.classList.add('no'); wrong++; }
  });

  progressEl.style.width = ((right + wrong) / QUESTIONS.length) * 100 + '%';
  statusEl.textContent =
    `تمت الإجابة على ${right + wrong} من ${QUESTIONS.length} — صحيحة: ${right} · خاطئة: ${wrong}`;
}

function render() {
  renderList();
  renderProgress();
}

// ---------- Question-number chips (quick navigation) ----------
function buildChips() {
  QUESTIONS.forEach((_, i) => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = i + 1;
    chip.addEventListener('click', () => goToQuestion(i + 1));
    chipsEl.appendChild(chip);
  });
}

function goToQuestion(n) {
  if (!document.getElementById('q' + n)) {   // hidden by a filter/search
    sectionFilter = 'all';
    searchEl.value = '';
    syncFilterButtons();
    render();
  }
  document.getElementById('q' + n).scrollIntoView();
}

// ---------- Events ----------
listEl.addEventListener('click', (e) => {
  // 1) Option clicked -> record the choice (only once per question)
  const opt = e.target.closest('.opt');
  if (opt) {
    const n = Number(opt.dataset.n);
    if (picked[n] === undefined || picked[n] === -1) {
      picked[n] = Number(opt.dataset.k);
      render();
      document.getElementById('q' + n).scrollIntoView({ block: 'nearest' });
    }
    return;
  }

  // 2) Show / hide answer button
  const toggle = e.target.closest('[data-toggle]');
  if (toggle) {
    const n = Number(toggle.dataset.toggle);
    if (picked[n] === undefined) {            // reveal without answering
      picked[n] = -1;
      render();
    } else {                                   // just fold / unfold the panel
      const card = document.getElementById('q' + n);
      card.classList.toggle('show');
      toggle.textContent = card.classList.contains('show') ? 'إخفاء الإجابة' : 'إظهار الإجابة والشرح';
    }
  }
});

searchEl.addEventListener('input', render);

function syncFilterButtons() {
  document.querySelectorAll('[data-filter]').forEach((b) =>
    b.classList.toggle('on', b.dataset.filter === sectionFilter));
}

document.querySelectorAll('[data-filter]').forEach((btn) =>
  btn.addEventListener('click', () => {
    sectionFilter = btn.dataset.filter;
    syncFilterButtons();
    render();
  }));

function setShowAll(value) {
  showAll = value;
  showAllBtn.classList.toggle('on', showAll);
  showAllBtn.textContent = showAll ? 'إخفاء كل الإجابات' : 'إظهار كل الإجابات';
}

showAllBtn.addEventListener('click', () => { setShowAll(!showAll); render(); });

resetBtn.addEventListener('click', () => {
  Object.keys(picked).forEach((k) => delete picked[k]);
  setShowAll(false);
  render();
});

// ---------- Init ----------
buildChips();
render();
