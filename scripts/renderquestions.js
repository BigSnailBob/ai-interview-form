import { getLanguageData } from "../data/languages.js";

// Section headers per language. Kept in English intentionally
// (per product decision — English UI across all three tests).
const SECTION_HEADERS = {
  grammar: "Short Grammar Test",
  scenarios: "Customer Service Scenarios"
};

export function renderQuestions(languageCode) {
  const container = document.querySelector(".js-language-test");
  if (!container) return;

  const { grammarQuestions, scenarioQuestions } = getLanguageData(languageCode);

  container.innerHTML =
    renderGrammarSection(grammarQuestions) +
    renderScenarioSection(scenarioQuestions);
}

function renderGrammarSection(grammarQuestions) {
  let html = `<fieldset class="grammar-section"><legend>${SECTION_HEADERS.grammar}</legend>`;

  grammarQuestions.forEach((question) => {
    html += `
      <div class="question-container">
        <p class="question-label" id="grammar-label-${question.id}">
          ${question.id}. ${question.question}
        </p>
        <div class="options-list" role="radiogroup" aria-labelledby="grammar-label-${question.id}">
    `;

    question.options.forEach((option, index) => {
      html += `
        <label class="option">
          <input type="radio" name="grammar-${question.id}" value="${index}">
          <span>${option}</span>
        </label>
      `;
    });

    html += `</div></div>`;
  });

  html += "</fieldset>";
  return html;
}

function renderScenarioSection(scenarioQuestions) {
  let html = `<fieldset class="scenario-section"><legend>${SECTION_HEADERS.scenarios}</legend>`;

  scenarioQuestions.forEach((question) => {
    html += `
      <div class="question-container">
        <label for="scenario-${question.id}" class="question-label">
          ${question.id}. ${question.question}
        </label>
        <textarea id="scenario-${question.id}" placeholder="Type your answer" class="question-input" rows="4"></textarea>
      </div>
    `;
  });

  html += "</fieldset>";
  return html;
}
