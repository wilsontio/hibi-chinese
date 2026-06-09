const lessons = [
  {
    title: "Order a Morning Coffee",
    goal: "Ask for a drink politely and recognize the reply.",
    phrase: { hanzi: "我要一杯咖啡。", pinyin: "Wo yao yi bei kafei.", translation: "I would like a cup of coffee." },
    dialogue: [
      { speaker: "A", hanzi: "早上好！你要什么？", pinyin: "Zaoshang hao! Ni yao shenme?", translation: "Good morning. What would you like?" },
      { speaker: "B", hanzi: "我要一杯咖啡。", pinyin: "Wo yao yi bei kafei.", translation: "I would like a cup of coffee." },
      { speaker: "A", hanzi: "好的，马上来。", pinyin: "Hao de, mashang lai.", translation: "Sure, coming right up." }
    ],
    quiz: { question: "What does 我要 mean here?", answer: "I would like", options: ["I would like", "I already ate", "Where is it?"] }
  },
  {
    title: "Say Where You Are Going",
    goal: "Use qu to say where someone is headed.",
    phrase: { hanzi: "我去地铁站。", pinyin: "Wo qu ditie zhan.", translation: "I am going to the subway station." },
    dialogue: [
      { speaker: "A", hanzi: "你去哪儿？", pinyin: "Ni qu nar?", translation: "Where are you going?" },
      { speaker: "B", hanzi: "我去地铁站。", pinyin: "Wo qu ditie zhan.", translation: "I am going to the subway station." },
      { speaker: "A", hanzi: "一起走吧。", pinyin: "Yiqi zou ba.", translation: "Let's go together." }
    ],
    quiz: { question: "Which word means subway station?", answer: "地铁站", options: ["地铁站", "一起", "哪儿"] }
  },
  {
    title: "Check the Price",
    goal: "Ask how much something costs in a shop.",
    phrase: { hanzi: "这个多少钱？", pinyin: "Zhege duoshao qian?", translation: "How much is this?" },
    dialogue: [
      { speaker: "A", hanzi: "这个多少钱？", pinyin: "Zhege duoshao qian?", translation: "How much is this?" },
      { speaker: "B", hanzi: "二十块。", pinyin: "Ershi kuai.", translation: "Twenty yuan." },
      { speaker: "A", hanzi: "我买一个。", pinyin: "Wo mai yige.", translation: "I'll buy one." }
    ],
    quiz: { question: "多少钱 asks about what?", answer: "Price", options: ["Time", "Price", "Color"] }
  },
  {
    title: "Make a Simple Plan",
    goal: "Suggest meeting tomorrow afternoon.",
    phrase: { hanzi: "明天下午见。", pinyin: "Mingtian xiawu jian.", translation: "See you tomorrow afternoon." },
    dialogue: [
      { speaker: "A", hanzi: "我们什么时候见？", pinyin: "Women shenme shihou jian?", translation: "When should we meet?" },
      { speaker: "B", hanzi: "明天下午见。", pinyin: "Mingtian xiawu jian.", translation: "See you tomorrow afternoon." },
      { speaker: "A", hanzi: "好，没问题。", pinyin: "Hao, mei wenti.", translation: "Great, no problem." }
    ],
    quiz: { question: "明天 means:", answer: "Tomorrow", options: ["Today", "Tomorrow", "Tonight"] }
  },
  {
    title: "Ask for Help",
    goal: "Politely ask someone to help you.",
    phrase: { hanzi: "可以帮我吗？", pinyin: "Keyi bang wo ma?", translation: "Can you help me?" },
    dialogue: [
      { speaker: "A", hanzi: "可以帮我吗？", pinyin: "Keyi bang wo ma?", translation: "Can you help me?" },
      { speaker: "B", hanzi: "当然可以。", pinyin: "Dangran keyi.", translation: "Of course." },
      { speaker: "A", hanzi: "谢谢你！", pinyin: "Xiexie ni!", translation: "Thank you." }
    ],
    quiz: { question: "Which phrase means of course?", answer: "当然可以", options: ["谢谢你", "当然可以", "帮我吗"] }
  }
];

const tones = [
  { mark: "mā", name: "First tone", cue: "High and level" },
  { mark: "má", name: "Second tone", cue: "Rises like a question" },
  { mark: "mǎ", name: "Third tone", cue: "Dips low, then lifts" },
  { mark: "mà", name: "Fourth tone", cue: "Falls sharply" },
  { mark: "ma", name: "Neutral tone", cue: "Light and short" }
];

const storageKey = "hibiChineseState";
const todayKey = new Date().toISOString().slice(0, 10);
const state = loadState();
const lesson = lessons[getLessonIndex()];

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || { completed: [], saved: [], quizWins: 0 };
  } catch {
    return { completed: [], saved: [], quizWins: 0 };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getLessonIndex() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const diff = new Date() - start;
  const day = Math.floor(diff / 86400000);
  return day % lessons.length;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function renderLesson() {
  document.getElementById("todayDate").textContent = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(new Date());
  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonGoal").textContent = lesson.goal;
  document.getElementById("phraseHanzi").textContent = lesson.phrase.hanzi;
  document.getElementById("phrasePinyin").textContent = lesson.phrase.pinyin;
  document.getElementById("phraseTranslation").textContent = lesson.phrase.translation;
  document.getElementById("quizQuestion").textContent = lesson.quiz.question;

  const dialogue = document.getElementById("dialogueList");
  dialogue.innerHTML = "";
  lesson.dialogue.forEach((line) => {
    const item = document.createElement("article");
    item.className = "dialogue-line";
    item.innerHTML = `
      <div class="avatar">${line.speaker}</div>
      <div>
        <p class="line-hanzi">${line.hanzi}</p>
        <p class="line-meta">${line.pinyin} · ${line.translation}</p>
      </div>
      <button class="icon-button" type="button" aria-label="Play ${line.hanzi}" title="Play line">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M11 5 6 9H3v6h3l5 4V5Zm4.5 2.5a6 6 0 0 1 0 9"/></svg>
      </button>
    `;
    item.querySelector("button").addEventListener("click", () => speak(line.hanzi));
    dialogue.appendChild(item);
  });

  renderQuiz();
  renderTones();
  renderProgress();
  renderReview();
}

function renderQuiz() {
  const options = document.getElementById("quizOptions");
  const result = document.getElementById("quizResult");
  options.innerHTML = "";
  result.textContent = "";

  lesson.quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      options.querySelectorAll("button").forEach((item) => {
        item.disabled = true;
        if (item.textContent === lesson.quiz.answer) item.classList.add("correct");
      });
      if (option === lesson.quiz.answer) {
        state.quizWins += 1;
        result.textContent = "Correct. Nice ear.";
      } else {
        button.classList.add("wrong");
        result.textContent = `Almost. The answer is ${lesson.quiz.answer}.`;
      }
      saveState();
    });
    options.appendChild(button);
  });
}

function renderTones() {
  const grid = document.getElementById("toneGrid");
  grid.innerHTML = "";
  tones.forEach((tone) => {
    const card = document.createElement("button");
    card.className = "tone-card";
    card.type = "button";
    card.innerHTML = `<span class="tone-mark">${tone.mark}</span><strong>${tone.name}</strong><small>${tone.cue}</small>`;
    card.addEventListener("click", () => speak("ma"));
    grid.appendChild(card);
  });
}

function renderReview() {
  const list = document.getElementById("reviewList");
  list.innerHTML = "";
  if (!state.saved.length) {
    list.innerHTML = `<div class="empty-state">Saved phrases will appear here.</div>`;
    return;
  }

  state.saved.slice(-5).reverse().forEach((item) => {
    const row = document.createElement("button");
    row.className = "review-item";
    row.type = "button";
    row.innerHTML = `<strong>${item.hanzi}</strong><span>${item.pinyin} · ${item.translation}</span>`;
    row.addEventListener("click", () => speak(item.hanzi));
    list.appendChild(row);
  });
}

function renderProgress() {
  const completed = new Set(state.completed);
  const completedCount = completed.size;
  const didToday = completed.has(todayKey);
  document.getElementById("completedCount").textContent = completedCount;
  document.getElementById("streakCount").textContent = getStreak(completed);
  document.getElementById("streakStatus").textContent = didToday ? "Done today" : "Ready when you are";
  document.getElementById("markDone").textContent = didToday ? "Completed" : "Complete Today";
  document.getElementById("progressBar").style.width = `${Math.min(100, (completedCount / 30) * 100)}%`;

  const grid = document.getElementById("calendarGrid");
  grid.innerHTML = "";
  for (let offset = 27; offset >= 0; offset -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const key = date.toISOString().slice(0, 10);
    const day = document.createElement("div");
    day.className = `calendar-day${completed.has(key) ? " done" : ""}`;
    day.title = key;
    grid.appendChild(day);
  }
}

function getStreak(completed) {
  let streak = 0;
  const cursor = new Date();
  while (completed.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function setupActions() {
  document.getElementById("speakPhrase").addEventListener("click", () => speak(lesson.phrase.hanzi));
  document.getElementById("markDone").addEventListener("click", () => {
    if (!state.completed.includes(todayKey)) {
      state.completed.push(todayKey);
      saveState();
      renderProgress();
    }
  });
  document.getElementById("savePhrase").addEventListener("click", () => {
    if (!state.saved.some((item) => item.hanzi === lesson.phrase.hanzi)) {
      state.saved.push(lesson.phrase);
      saveState();
      renderReview();
    }
  });
  document.getElementById("resetProgress").addEventListener("click", () => {
    state.completed = [];
    state.saved = [];
    state.quizWins = 0;
    saveState();
    renderProgress();
    renderReview();
    renderQuiz();
  });
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll("[data-view-link]").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

setupActions();
renderLesson();
