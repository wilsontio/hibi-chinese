const lessons = [
  {
    title: "Customize a Coffee Order",
    goal: "Order politely with preferences for sweetness and milk.",
    phrase: {
      hanzi: "\u6211\u60f3\u8981\u4e00\u676f\u71d5\u9ea6\u62ff\u94c1\uff0c\u4e0d\u8981\u592a\u751c\u3002",
      pinyin: "Wo3 xiang3 yao4 yi4 bei1 yan4mai4 na2tie3, bu2 yao4 tai4 tian2.",
      translation: "I would like an oat latte, but not too sweet."
    },
    dialogue: [
      { speaker: "A", hanzi: "\u4f60\u60f3\u559d\u70b9\u4ec0\u4e48\uff1f", pinyin: "Ni3 xiang3 he1 dian3 shen2me?", translation: "What would you like to drink?" },
      { speaker: "B", hanzi: "\u6211\u60f3\u8981\u4e00\u676f\u71d5\u9ea6\u62ff\u94c1\uff0c\u4e0d\u8981\u592a\u751c\u3002", pinyin: "Wo3 xiang3 yao4 yi4 bei1 yan4mai4 na2tie3, bu2 yao4 tai4 tian2.", translation: "I would like an oat latte, but not too sweet." },
      { speaker: "A", hanzi: "\u53ef\u4ee5\uff0c\u8981\u70ed\u7684\u8fd8\u662f\u51b0\u7684\uff1f", pinyin: "Ke3yi3, yao4 re4 de hai2shi bing1 de?", translation: "Sure, hot or iced?" },
      { speaker: "B", hanzi: "\u51b0\u7684\uff0c\u8c22\u8c22\u3002", pinyin: "Bing1 de, xie4xie.", translation: "Iced, thank you." }
    ],
    quiz: {
      question: "\u4e0d\u8981\u592a\u751c suggests the speaker wants it:",
      answer: "Less sweet",
      options: ["Less sweet", "Extra hot", "With no milk", "Very large"]
    }
  },
  {
    title: "Ask for a Better Route",
    goal: "Ask for directions and compare two transport options.",
    phrase: {
      hanzi: "\u53bb\u706b\u8f66\u7ad9\u5750\u5730\u94c1\u6bd4\u8f83\u65b9\u4fbf\u5417\uff1f",
      pinyin: "Qu4 huo3che1 zhan4 zuo4 di4tie3 bi3jiao4 fang1bian4 ma?",
      translation: "Is taking the subway more convenient for going to the train station?"
    },
    dialogue: [
      { speaker: "A", hanzi: "\u8bf7\u95ee\uff0c\u53bb\u706b\u8f66\u7ad9\u600e\u4e48\u8d70\uff1f", pinyin: "Qing3wen4, qu4 huo3che1 zhan4 zen3me zou3?", translation: "Excuse me, how do I get to the train station?" },
      { speaker: "B", hanzi: "\u4f60\u53ef\u4ee5\u5750\u516c\u4ea4\uff0c\u4e5f\u53ef\u4ee5\u5750\u5730\u94c1\u3002", pinyin: "Ni3 ke3yi3 zuo4 gong1jiao1, ye3 ke3yi3 zuo4 di4tie3.", translation: "You can take the bus, or you can take the subway." },
      { speaker: "A", hanzi: "\u5750\u5730\u94c1\u6bd4\u8f83\u65b9\u4fbf\u5417\uff1f", pinyin: "Zuo4 di4tie3 bi3jiao4 fang1bian4 ma?", translation: "Is taking the subway more convenient?" },
      { speaker: "B", hanzi: "\u5bf9\uff0c\u800c\u4e14\u4e0d\u5bb9\u6613\u5835\u8f66\u3002", pinyin: "Dui4, er2qie3 bu4 rong2yi4 du3che1.", translation: "Yes, and it is less likely to get stuck in traffic." }
    ],
    quiz: {
      question: "\u6bd4\u8f83\u65b9\u4fbf means:",
      answer: "More convenient",
      options: ["More convenient", "Too expensive", "Far away", "A little late"]
    }
  },
  {
    title: "Compare Prices",
    goal: "Ask whether there is a cheaper option.",
    phrase: {
      hanzi: "\u8fd9\u4e2a\u6709\u6ca1\u6709\u4fbf\u5b9c\u4e00\u70b9\u7684\uff1f",
      pinyin: "Zhe4ge you3 mei2you3 pian2yi yi4dian3 de?",
      translation: "Do you have something a little cheaper than this?"
    },
    dialogue: [
      { speaker: "A", hanzi: "\u8fd9\u4ef6\u5916\u5957\u591a\u5c11\u94b1\uff1f", pinyin: "Zhe4 jian4 wai4tao4 duo1shao qian2?", translation: "How much is this jacket?" },
      { speaker: "B", hanzi: "\u4e09\u767e\u516b\u5341\u5757\u3002", pinyin: "San1bai3 ba1shi2 kuai4.", translation: "Three hundred eighty yuan." },
      { speaker: "A", hanzi: "\u6709\u6ca1\u6709\u4fbf\u5b9c\u4e00\u70b9\u7684\uff1f", pinyin: "You3 mei2you3 pian2yi yi4dian3 de?", translation: "Do you have something a little cheaper?" },
      { speaker: "B", hanzi: "\u6709\uff0c\u8fd9\u4ef6\u6253\u6298\u4ee5\u540e\u4e24\u767e\u4e5d\u3002", pinyin: "You3, zhe4 jian4 da3zhe2 yi3hou4 liang3bai3 jiu3.", translation: "Yes, this one is 290 after the discount." }
    ],
    quiz: {
      question: "\u6253\u6298\u4ee5\u540e describes the price:",
      answer: "After the discount",
      options: ["Before tax", "After the discount", "For two people", "Paid online"]
    }
  },
  {
    title: "Reschedule a Plan",
    goal: "Explain that a time does not work and suggest another.",
    phrase: {
      hanzi: "\u6211\u4eca\u5929\u665a\u4e0a\u4e0d\u592a\u65b9\u4fbf\uff0c\u660e\u5929\u53ef\u4ee5\u5417\uff1f",
      pinyin: "Wo3 jin1tian1 wan3shang bu2 tai4 fang1bian4, ming2tian1 ke3yi3 ma?",
      translation: "Tonight is not very convenient for me. Would tomorrow work?"
    },
    dialogue: [
      { speaker: "A", hanzi: "\u4eca\u5929\u665a\u4e0a\u4e00\u8d77\u5403\u996d\u600e\u4e48\u6837\uff1f", pinyin: "Jin1tian1 wan3shang yi4qi3 chi1fan4 zen3meyang4?", translation: "How about having dinner together tonight?" },
      { speaker: "B", hanzi: "\u6211\u4eca\u5929\u665a\u4e0a\u4e0d\u592a\u65b9\u4fbf\u3002", pinyin: "Wo3 jin1tian1 wan3shang bu2 tai4 fang1bian4.", translation: "Tonight is not very convenient for me." },
      { speaker: "A", hanzi: "\u90a3\u660e\u5929\u5462\uff1f", pinyin: "Na4 ming2tian1 ne?", translation: "Then what about tomorrow?" },
      { speaker: "B", hanzi: "\u660e\u5929\u53ef\u4ee5\uff0c\u6211\u4eec\u4e03\u70b9\u89c1\u3002", pinyin: "Ming2tian1 ke3yi3, wo3men qi1 dian3 jian4.", translation: "Tomorrow works. Let's meet at seven." }
    ],
    quiz: {
      question: "\u4e0d\u592a\u65b9\u4fbf is a softer way to say:",
      answer: "It does not really work for me",
      options: ["It does not really work for me", "I am very hungry", "It is too far", "I forgot your name"]
    }
  },
  {
    title: "Explain a Small Problem",
    goal: "Describe a problem with a room or service.",
    phrase: {
      hanzi: "\u623f\u95f4\u91cc\u7684\u7a7a\u8c03\u597d\u50cf\u4e0d\u592a\u597d\u7528\u3002",
      pinyin: "Fang2jian1 li de kong1tiao2 hao3xiang4 bu2 tai4 hao3 yong4.",
      translation: "The air conditioner in the room does not seem to work very well."
    },
    dialogue: [
      { speaker: "A", hanzi: "\u60a8\u597d\uff0c\u6709\u4ec0\u4e48\u9700\u8981\u5e2e\u5fd9\u7684\u5417\uff1f", pinyin: "Nin2 hao3, you3 shen2me xu1yao4 bang1mang2 de ma?", translation: "Hello, is there anything you need help with?" },
      { speaker: "B", hanzi: "\u623f\u95f4\u91cc\u7684\u7a7a\u8c03\u597d\u50cf\u4e0d\u592a\u597d\u7528\u3002", pinyin: "Fang2jian1 li de kong1tiao2 hao3xiang4 bu2 tai4 hao3 yong4.", translation: "The air conditioner in the room does not seem to work very well." },
      { speaker: "A", hanzi: "\u4e0d\u597d\u610f\u601d\uff0c\u6211\u4eec\u9a6c\u4e0a\u8bf7\u4eba\u53bb\u770b\u4e00\u4e0b\u3002", pinyin: "Bu4hao3yisi, wo3men ma3shang qing3 ren2 qu4 kan4 yi2xia4.", translation: "Sorry, we will ask someone to check it right away." },
      { speaker: "B", hanzi: "\u597d\u7684\uff0c\u9ebb\u70e6\u4f60\u4e86\u3002", pinyin: "Hao3 de, ma2fan ni3 le.", translation: "Okay, sorry for the trouble." }
    ],
    quiz: {
      question: "\u597d\u50cf makes the complaint sound:",
      answer: "Less direct",
      options: ["Less direct", "More angry", "Already solved", "About tomorrow"]
    }
  },
  {
    title: "Give an Opinion",
    goal: "Share a nuanced opinion about food or a place.",
    phrase: {
      hanzi: "\u6211\u89c9\u5f97\u8fd9\u5bb6\u9910\u5385\u5473\u9053\u4e0d\u9519\uff0c\u5c31\u662f\u6709\u70b9\u8d35\u3002",
      pinyin: "Wo3 jue2de zhe4 jia1 can1ting1 wei4dao bu2cuo4, jiu4shi you3dian3 gui4.",
      translation: "I think this restaurant tastes pretty good, it is just a bit expensive."
    },
    dialogue: [
      { speaker: "A", hanzi: "\u4f60\u89c9\u5f97\u8fd9\u5bb6\u9910\u5385\u600e\u4e48\u6837\uff1f", pinyin: "Ni3 jue2de zhe4 jia1 can1ting1 zen3meyang4?", translation: "What do you think of this restaurant?" },
      { speaker: "B", hanzi: "\u5473\u9053\u4e0d\u9519\uff0c\u5c31\u662f\u6709\u70b9\u8d35\u3002", pinyin: "Wei4dao bu2cuo4, jiu4shi you3dian3 gui4.", translation: "The taste is pretty good, it is just a bit expensive." },
      { speaker: "A", hanzi: "\u6211\u4e5f\u8fd9\u4e48\u89c9\u5f97\u3002", pinyin: "Wo3 ye3 zhe4me jue2de.", translation: "I think so too." },
      { speaker: "B", hanzi: "\u4e0b\u6b21\u6211\u4eec\u53ef\u4ee5\u627e\u4e00\u5bb6\u66f4\u5b9e\u60e0\u7684\u3002", pinyin: "Xia4ci4 wo3men ke3yi3 zhao3 yi4 jia1 geng4 shi2hui4 de.", translation: "Next time we can find a better-value place." }
    ],
    quiz: {
      question: "\u5c31\u662f\u6709\u70b9\u8d35 adds:",
      answer: "A mild contrast",
      options: ["A mild contrast", "A time estimate", "A direct refusal", "A location"]
    }
  }
];

const tones = [
  { mark: "ma1", name: "First tone", cue: "High and level" },
  { mark: "ma2", name: "Second tone", cue: "Rises like a question" },
  { mark: "ma3", name: "Third tone", cue: "Dips low, then lifts" },
  { mark: "ma4", name: "Fourth tone", cue: "Falls sharply" },
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
        <p class="line-meta">${line.pinyin} &middot; ${line.translation}</p>
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
    row.innerHTML = `<strong>${item.hanzi}</strong><span>${item.pinyin} &middot; ${item.translation}</span>`;
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
