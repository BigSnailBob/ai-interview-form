import { getLanguageData, DEFAULT_LANGUAGE, isValidLanguage } from "../data/languages.js";

const TEST_DURATION_MS = 40 * 60 * 1000;
const STORAGE = {
  start:    "germanTest_startTime_v3",
  answers:  "germanTest_answers_v3",
  personal: "germanTest_personalInfo_v3",
  language: "germanTest_language_v3"
};
const personalFields = ["language", "fname", "lname", "email", "phonenum", "project", "recruiter"];
let onTimeoutCallback = null;
let timerIntervalId = null;

// ---------------------------------------------------------------
// Language selection helpers
// ---------------------------------------------------------------

export function getSelectedLanguage() {
  const el = document.querySelector("#language");
  if (el && el.value && isValidLanguage(el.value)) return el.value;
  const stored = localStorage.getItem(STORAGE.language);
  if (stored && isValidLanguage(stored)) return stored;
  return DEFAULT_LANGUAGE;
}

export function setSelectedLanguage(code) {
  if (!isValidLanguage(code)) return;
  localStorage.setItem(STORAGE.language, code);
}

// ---------------------------------------------------------------
// Public API
// ---------------------------------------------------------------

export function initTestState(onTimeout) {
  onTimeoutCallback = onTimeout;
  restoreSavedData();
  setupAutoSave();
}

export function isTestInProgress() {
  const startTime = parseInt(localStorage.getItem(STORAGE.start), 10);
  if (!startTime || Number.isNaN(startTime)) return false;

  // If the saved start time is older than 2× the test duration, treat as abandoned
  const isStale = (Date.now() - startTime) > TEST_DURATION_MS * 2;
  if (isStale) {
    localStorage.removeItem(STORAGE.start);
    localStorage.removeItem(STORAGE.answers);
    localStorage.removeItem(STORAGE.personal);
    localStorage.removeItem(STORAGE.language);
    return false;
  }

  return true;
}

export function clearTestState() {
  localStorage.removeItem(STORAGE.start);
  localStorage.removeItem(STORAGE.answers);
  localStorage.removeItem(STORAGE.personal);
  localStorage.removeItem(STORAGE.language);

  if (timerIntervalId !== null) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }

  const timerElement = document.querySelector(".js-timer");
  if (timerElement) {
    timerElement.textContent = "40:00";
    timerElement.classList.remove("is-warning", "is-critical");
  }
}

// ---------------------------------------------------------------
// Auto-save + restore
// ---------------------------------------------------------------

function restoreSavedData() {
  const personal = JSON.parse(localStorage.getItem(STORAGE.personal) || "{}");

  personalFields.forEach((field) => {
    const element = document.querySelector(`#${field}`);
    if (element && personal[field]) element.value = personal[field];
  });

  const answers = JSON.parse(localStorage.getItem(STORAGE.answers) || "{}");

  // Restore grammar radio selections
  if (answers.grammar) {
    Object.entries(answers.grammar).forEach(([id, value]) => {
      const radio = document.querySelector(`input[name="grammar-${id}"][value="${value}"]`);
      if (radio) radio.checked = true;
    });
  }

  // Restore scenario textareas
  if (answers.scenarios) {
    Object.entries(answers.scenarios).forEach(([id, value]) => {
      const element = document.querySelector(`#scenario-${id}`);
      if (element) element.value = value;
    });
  }
}

function setupAutoSave() {
  const form = document.querySelector("form");

  form.addEventListener("input", () => {
    // Save personal info (includes the language dropdown)
    const personal = {};
    personalFields.forEach((id) => {
      const el = document.querySelector(`#${id}`);
      if (el) personal[id] = el.value;
    });
    localStorage.setItem(STORAGE.personal, JSON.stringify(personal));

    // Persist selected language separately as source of truth
    if (personal.language) {
      localStorage.setItem(STORAGE.language, personal.language);
    }

    // Grammar + scenarios are language-specific — pull them from the registry
    const language = getSelectedLanguage();
    const { grammarQuestions, scenarioQuestions } = getLanguageData(language);
    const answers = { grammar: {}, scenarios: {} };

    grammarQuestions.forEach((question) => {
      const checked = document.querySelector(`input[name="grammar-${question.id}"]:checked`);
      if (checked) answers.grammar[question.id] = parseInt(checked.value, 10);
    });

    scenarioQuestions.forEach((question) => {
      const element = document.querySelector(`#scenario-${question.id}`);
      if (element) answers.scenarios[question.id] = element.value;
    });

    localStorage.setItem(STORAGE.answers, JSON.stringify(answers));
  });
}

// ---------------------------------------------------------------
// Timer
// ---------------------------------------------------------------

export function startTimer() {
  let startTime = parseInt(localStorage.getItem(STORAGE.start), 10);

  if (!startTime || Number.isNaN(startTime)) {
    startTime = Date.now();
    localStorage.setItem(STORAGE.start, String(startTime));
  }

  const timerElement = document.querySelector(".js-timer");
  let hasFiredTimeout = false;

  function tick() {
    const remaining = TEST_DURATION_MS - (Date.now() - startTime);

    if (remaining <= 0) {
      timerElement.textContent = "00:00";
      timerElement.classList.add("is-critical");
      if (!hasFiredTimeout) {
        hasFiredTimeout = true;
        if (onTimeoutCallback) onTimeoutCallback();
      }
      return;
    }

    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    timerElement.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    timerElement.classList.toggle("is-warning", remaining < 5 * 60 * 1000 && remaining >= 60 * 1000);
    timerElement.classList.toggle("is-critical", remaining < 60 * 1000);
  }

  tick();
  timerIntervalId = setInterval(tick, 1000);
}
