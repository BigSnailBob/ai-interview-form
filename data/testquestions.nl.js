// ---------------------------------------------------------------
// Dutch test questions
// Grammar: 30 multiple-choice questions.
// Source: Dutch_Grammar_Test_Extracted.xlsx
// ---------------------------------------------------------------

export const LANGUAGE = "nl";
export const LANGUAGE_NAME = "Dutch";

export const grammarQuestions = [
  {
    id: 1,
    question: "Ik woon __________ Amsterdam.",
    options: ["op", "in", "aan", "bij"],
    correctAnswerIndex: 1,
    grammarPoint: "preposition (locatie)"
  },
  {
    id: 2,
    question: "Mijn broer __________ iedere dag koffie.",
    options: ["drink", "drinkt", "drinken", "gedronken"],
    correctAnswerIndex: 1,
    grammarPoint: "verb conjugation (3rd person singular)"
  },
  {
    id: 3,
    question: "Dat is __________ mooie auto.",
    options: ["de", "het", "een", "geen"],
    correctAnswerIndex: 2,
    grammarPoint: "indefinite article"
  },
  {
    id: 4,
    question: "Gisteren __________ wij naar het strand gegaan.",
    options: ["hebben", "zijn", "waren", "hadden"],
    correctAnswerIndex: 1,
    grammarPoint: "perfect tense with 'zijn'"
  },
  {
    id: 5,
    question: "Kun je het licht even __________?",
    options: ["uitdoen", "doen uit", "uit gedaan", "doet uit"],
    correctAnswerIndex: 0,
    grammarPoint: "separable verb (infinitive)"
  },
  {
    id: 6,
    question: "Morgen __________ we vroeg vertrekken.",
    options: ["moeten", "moesten", "gemoeten", "moet"],
    correctAnswerIndex: 0,
    grammarPoint: "modal verb (present, plural)"
  },
  {
    id: 7,
    question: "Ik weet niet __________ hij morgen komt.",
    options: ["als", "of", "dan", "want"],
    correctAnswerIndex: 1,
    grammarPoint: "conjunction (indirect question)"
  },
  {
    id: 8,
    question: "De vrouw __________ naast mij woont, is arts.",
    options: ["die", "dat", "wie", "waar"],
    correctAnswerIndex: 0,
    grammarPoint: "relative pronoun (de-word)"
  },
  {
    id: 9,
    question: "Als ik meer tijd had, __________ ik vaker reizen.",
    options: ["zal", "zou", "ben", "was"],
    correctAnswerIndex: 1,
    grammarPoint: "conditional (would)"
  },
  {
    id: 10,
    question: "Hij vergat de deur op slot __________ doen.",
    options: ["om", "te", "dat", "voor"],
    correctAnswerIndex: 1,
    grammarPoint: "infinitive with 'te'"
  },
  {
    id: 11,
    question: "De manager vroeg of het rapport al __________.",
    options: ["af is", "af was", "was af", "is af"],
    correctAnswerIndex: 1,
    grammarPoint: "reported speech (past tense)"
  },
  {
    id: 12,
    question: "Ik ben blij dat jij me __________.",
    options: ["hebt geholpen", "hebt help", "heeft geholpen", "helpen hebt"],
    correctAnswerIndex: 0,
    grammarPoint: "perfect tense (subordinate clause)"
  },
  {
    id: 13,
    question: "Hij gedraagt zich alsof hij alles __________.",
    options: ["weet", "geweten", "zou weten"],
    correctAnswerIndex: 0,
    grammarPoint: "'alsof' + present indicative"
  },
  {
    id: 14,
    question: "Hoewel het hard regende, __________.",
    options: [
      "ging de wedstrijd door",
      "de wedstrijd ging door",
      "door ging de wedstrijd",
      "ging door de wedstrijd"
    ],
    correctAnswerIndex: 0,
    grammarPoint: "inversion after subordinate clause"
  },
  {
    id: 15,
    question: "De documenten moeten vandaag nog __________.",
    options: ["ondertekenen", "ondertekend worden", "worden ondertekent", "ondertekend zijn"],
    correctAnswerIndex: 1,
    grammarPoint: "passive infinitive"
  },
  {
    id: 16,
    question: "De directeur stelde de vergadering uit, __________ meerdere collega's ziek waren.",
    options: ["doordat", "ondanks", "tenzij", "hoewel"],
    correctAnswerIndex: 0,
    grammarPoint: "conjunction (cause)"
  },
  {
    id: 17,
    question: "De medewerker bleek de procedure niet goed __________.",
    options: [
      "begrepen te hebben",
      "te hebben begrepen",
      "begrepen hebben",
      "hebben begrepen"
    ],
    correctAnswerIndex: 1,
    grammarPoint: "infinitive construction (perfect)"
  },
  {
    id: 18,
    question: "De offerte werd goedgekeurd, __________ enkele kleine wijzigingen waren aangebracht.",
    options: ["nadat", "hoewel", "zodra", "tenzij"],
    correctAnswerIndex: 0,
    grammarPoint: "conjunction (temporal)"
  },
  {
    id: 19,
    question: "De directeur, __________ beslissing veel discussie veroorzaakte, gaf geen toelichting.",
    options: ["waarvan de", "wiens", "waarover de", "van wie de"],
    correctAnswerIndex: 1,
    grammarPoint: "possessive relative pronoun (formal)"
  },
  {
    id: 20,
    question: "Zelden __________ zo'n overtuigende presentatie gehoord.",
    options: ["ik heb", "heb ik", "ik had", "had ik"],
    correctAnswerIndex: 1,
    grammarPoint: "inversion (negative adverb)"
  },
  {
    id: 21,
    question: "__________ de aanvraag volledig is ingevuld, kan deze worden verwerkt.",
    options: ["Mits", "Ondanks", "Behalve", "Zodra"],
    correctAnswerIndex: 0,
    grammarPoint: "conjunction (condition)"
  },
  {
    id: 22,
    question: "Het project liep vertraging op, __________ de planning moest worden aangepast.",
    options: ["waardoor", "waarin", "waarmee", "waarvan"],
    correctAnswerIndex: 0,
    grammarPoint: "relative adverb (consequence)"
  },
  {
    id: 23,
    question: "Het voorstel werd aangenomen, __________ enkele bezwaren waren geuit.",
    options: ["ondanks", "hoewel", "ondanks dat", "desondanks"],
    correctAnswerIndex: 1,
    grammarPoint: "concessive conjunction"
  },
  {
    id: 24,
    question: "De commissie adviseerde het voorstel te wijzigen, __________ uiteindelijk ook gebeurde.",
    options: ["hetgeen", "waardoor", "waarmee", "waarvan"],
    correctAnswerIndex: 0,
    grammarPoint: "relative pronoun (formal, referring to a clause)"
  },
  {
    id: 25,
    question: "Pas nadat alle documenten waren gecontroleerd, __________ de overeenkomst ondertekend.",
    options: ["werd", "is", "had", "heeft"],
    correctAnswerIndex: 0,
    grammarPoint: "passive past tense (imperfect)"
  },
  {
    id: 26,
    question: "Niet eerder __________ de organisatie zo'n ingrijpende verandering doorgevoerd.",
    options: ["heeft", "had", "werd", "is"],
    correctAnswerIndex: 0,
    grammarPoint: "inversion (perfect tense)"
  },
  {
    id: 27,
    question: "Geen van de aanwezigen __________ bezwaar tegen het voorstel.",
    options: ["hadden", "hebben", "had", "hebben gehad"],
    correctAnswerIndex: 2,
    grammarPoint: "subject-verb agreement ('geen van' + singular)"
  },
  {
    id: 28,
    question: "De wijze __________ het probleem werd opgelost, verdient waardering.",
    options: ["waarop", "waaraan", "waarmee", "waarover"],
    correctAnswerIndex: 0,
    grammarPoint: "prepositional relative adverb (manner)"
  },
  {
    id: 29,
    question: "Welke zin is grammaticaal én stilistisch het meest geschikt voor een formeel rapport?",
    options: [
      "De resultaten wijzen erop dat aanvullende maatregelen noodzakelijk zijn.",
      "De resultaten zeggen dat we meer moeten doen.",
      "We moeten waarschijnlijk iets extra's doen.",
      "Er moeten misschien nog wat dingen gebeuren."
    ],
    correctAnswerIndex: 0,
    grammarPoint: "formal register"
  },
  {
    id: 30,
    question: "Welke zin is grammaticaal correct?",
    options: [
      "Hoewel hij weinig ervaring had, maar hij kreeg de functie.",
      "Ondanks hij weinig ervaring had, kreeg hij de functie.",
      "Hoewel hij weinig ervaring had, kreeg hij de functie.",
      "Ondanks dat hij had weinig ervaring, kreeg hij de functie."
    ],
    correctAnswerIndex: 2,
    grammarPoint: "concessive clause structure"
  }
];

// ---------------------------------------------------------------
// Customer service scenarios — open-ended (evaluated by AI)
// Same scenarios as the other language tests, in Dutch.
// Uses formal register ('u') as standard for customer service.
// ---------------------------------------------------------------

export const scenarioQuestions = [
  {
    id: 1,
    question: "Een klant belt en is heel boos omdat zijn bestelling twee weken te laat is aangekomen. Hij dreigt een negatieve recensie achter te laten en nooit meer bij ons te bestellen. Hoe zou u in deze situatie reageren?"
  },
  {
    id: 2,
    question: "Een klant schrijft u een e-mail om te klagen over een defect product, maar zij heeft de garantieperiode met drie dagen overschreden. Hoe gaat u met deze aanvraag om?"
  },
  {
    id: 3,
    question: "Een klant eist onmiddellijk met uw leidinggevende te spreken, nog voordat u de kans hebt gehad om zijn probleem te begrijpen. Hoe reageert u hierop?"
  },
  {
    id: 4,
    question: "U heeft een fout gemaakt en een klant onjuiste informatie over een product gegeven. Als gevolg daarvan heeft de klant iets verkeerds gekocht. Hoe zou u deze situatie oplossen?"
  },
  {
    id: 5,
    question: "Een klant eist een korting die u volgens het bedrijfsbeleid niet kunt geven. Hij houdt vol en beweert dat een andere medewerker hem die heeft beloofd. Wanneer u beleefd uitlegt dat u de korting niet kunt geven, beschuldigt hij u ervan onbeleefd te zijn. Hoe gaat u met deze situatie om?"
  }
];

// ---------------------------------------------------------------
// CEFR level lookup based on grammar score (out of 30)
// Same cutoffs as Spanish/English: C1 (27-30), B2 (24-26), B1 (21-23)
// Below B1: split into A1 / A2 for finer signal
// ---------------------------------------------------------------

export function getCefrLevelFromGrammarScore(score) {
  if (score <= 13) return "A1";
  if (score <= 20) return "A2";
  if (score <= 23) return "B1";
  if (score <= 26) return "B2";
  return "C1";
}
