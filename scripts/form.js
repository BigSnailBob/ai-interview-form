import { renderQuestions } from "./renderquestions.js";
import { submitForm, setupFormSubmission } from "./submitform.js";
import {
  initTestState,
  startTimer,
  isTestInProgress,
  getSelectedLanguage,
  setSelectedLanguage
} from "./state.js";

setupFormSubmission();
setupCopyProtection();
initTestState(() => submitForm({ isAutoSubmit: true }));

// If the candidate already started the test (e.g., page reload), skip the gate
// and re-render the questions for their previously selected language.
if (isTestInProgress()) {
  const language = getSelectedLanguage();
  renderQuestions(language);
  // Re-run state restore now that the questions exist in the DOM.
  reapplySavedAnswers();
  revealTest();
} else {
  setupStartButton();
}

function setupStartButton() {
  const startButton = document.querySelector(".js-start-button");
  if (!startButton) return;

  startButton.addEventListener("click", () => {
    const form = document.querySelector("form");

    // HTML5 validates required fields (including the language dropdown).
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const language = document.querySelector("#language").value;
    setSelectedLanguage(language);
    renderQuestions(language);
    revealTest();
  });
}

function revealTest() {
  document.querySelector(".js-test-section").style.display = "";
  document.querySelector(".js-timer").style.display = "";

  const startButton = document.querySelector(".js-start-button");
  if (startButton) startButton.style.display = "none";

  // Lock the language dropdown once the test has started — the questions
  // are already rendered in that language and can't be swapped mid-test.
  const languageEl = document.querySelector("#language");
  if (languageEl) languageEl.disabled = true;

  startTimer();
}

// When resuming a session (page reload mid-test), the questions get rendered
// AFTER state.js has already tried to restore answers into the DOM. Re-apply
// them now that the DOM has the correct language-specific inputs.
function reapplySavedAnswers() {
  const raw = localStorage.getItem("germanTest_answers_v3");
  if (!raw) return;
  let answers;
  try {
    answers = JSON.parse(raw);
  } catch {
    return;
  }

  if (answers.grammar) {
    Object.entries(answers.grammar).forEach(([id, value]) => {
      const radio = document.querySelector(`input[name="grammar-${id}"][value="${value}"]`);
      if (radio) radio.checked = true;
    });
  }

  if (answers.scenarios) {
    Object.entries(answers.scenarios).forEach(([id, value]) => {
      const element = document.querySelector(`#scenario-${id}`);
      if (element) element.value = value;
    });
  }
}

function setupCopyProtection() {
  const testSection = document.querySelector(".js-language-test");
  if (!testSection) return;

  testSection.addEventListener("copy", (event) => event.preventDefault());
  testSection.addEventListener("cut", (event) => event.preventDefault());
  testSection.addEventListener("paste", (event) => event.preventDefault());
  testSection.addEventListener("contextmenu", (event) => event.preventDefault());
}
