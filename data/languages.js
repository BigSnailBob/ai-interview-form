

import * as deData from "./testquestions.de.js";
import * as esData from "./testquestions.es.js";
import * as frData from "./testquestions.fr.js";
import * as enData from "./testquestions.en.js";
import * as nlData from "./testquestions.nl.js";
import * as itData from "./testquestions.it.js";


export const WEBHOOK_URLS = {
  de: "https://pexly-ai.app.n8n.cloud/webhook/f7a5a995-f3b4-48e6-bac3-4c8dd2b8c6f0",
  es: "https://pexly-ai.app.n8n.cloud/webhook/f7a5a995-f3b4-48e6-bac3-4c8dd2b8c6f0",
  fr: "https://pexly-ai.app.n8n.cloud/webhook/f7a5a995-f3b4-48e6-bac3-4c8dd2b8c6f0",
  en: "https://pexly-ai.app.n8n.cloud/webhook/f7a5a995-f3b4-48e6-bac3-4c8dd2b8c6f0",
  nl: "https://pexly-ai.app.n8n.cloud/webhook/f7a5a995-f3b4-48e6-bac3-4c8dd2b8c6f0",
  it: "https://pexly-ai.app.n8n.cloud/webhook/f7a5a995-f3b4-48e6-bac3-4c8dd2b8c6f0"
};


const languageData = {
  de: { ...deData, code: "de", name: "German",  webhook: WEBHOOK_URLS.de },
  es: { ...esData, code: "es", name: "Spanish", webhook: WEBHOOK_URLS.es },
  fr: { ...frData, code: "fr", name: "French",  webhook: WEBHOOK_URLS.fr },
  en: { ...enData, code: "en", name: "English", webhook: WEBHOOK_URLS.en },
  nl: { ...nlData, code: "nl", name: "Dutch",   webhook: WEBHOOK_URLS.nl },
  it: { ...itData, code: "it", name: "Italian", webhook: WEBHOOK_URLS.it }
};


export const DEFAULT_LANGUAGE = "de";


export const SUPPORTED_LANGUAGES = [
  { code: "de", name: "German" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "en", name: "English" },
  { code: "nl", name: "Dutch" },
  { code: "it", name: "Italian" }
];



export function getLanguageData(code) {
  return languageData[code] || languageData[DEFAULT_LANGUAGE];
}

export function getWebhookUrl(code) {
  return WEBHOOK_URLS[code] || WEBHOOK_URLS[DEFAULT_LANGUAGE];
}

export function isValidLanguage(code) {
  return code in languageData;
}
