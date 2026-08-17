// ---------------------------------------------------------------
// Italian test questions
// Grammar: 30 multiple-choice questions (B1-C1 focus).
// Source: Italian_Grammar_Test_B1-C1.xlsx
// ---------------------------------------------------------------

export const LANGUAGE = "it";
export const LANGUAGE_NAME = "Italian";

export const grammarQuestions = [
  {
    id: 1,
    question: "Ieri, mentre __________ al cliente, il sistema si è bloccato.",
    options: ["ho risposto", "rispondevo", "risponderei", "avevo risposto"],
    correctAnswerIndex: 1,
    grammarPoint: "imperfetto (background action)"
  },
  {
    id: 2,
    question: "Non ho ancora ricevuto il documento. Puoi __________ di nuovo?",
    options: ["mandarlo mi", "mandarmi lo", "me lo mandare", "mandarmelo"],
    correctAnswerIndex: 3,
    grammarPoint: "pronomi combinati"
  },
  {
    id: 3,
    question: "Lavoro in questa azienda __________ tre anni.",
    options: ["durante", "da", "per", "fra"],
    correctAnswerIndex: 1,
    grammarPoint: "preposizione (da + durata)"
  },
  {
    id: 4,
    question: "Quando arriverà il responsabile, gli __________ subito il problema.",
    options: ["spiegavo", "avrei spiegato", "spiegherò", "spiegassi"],
    correctAnswerIndex: 2,
    grammarPoint: "futuro semplice"
  },
  {
    id: 5,
    question: "Se hai bisogno di aiuto, __________ pure.",
    options: ["chiameresti", "chiamami", "chiamandomi", "mi chiami"],
    correctAnswerIndex: 1,
    grammarPoint: "imperativo (tu)"
  },
  {
    id: 6,
    question: "Non conosco la collega __________ hai parlato ieri.",
    options: ["di cui", "cui la", "che", "la quale"],
    correctAnswerIndex: 0,
    grammarPoint: "pronome relativo (preposizione + cui)"
  },
  {
    id: 7,
    question: "Il cliente ha detto che non __________ soddisfatto del servizio.",
    options: ["era", "sia", "fosse stato", "sarà"],
    correctAnswerIndex: 0,
    grammarPoint: "discorso indiretto (imperfetto)"
  },
  {
    id: 8,
    question: "Vorrei sapere se __________ possibile modificare l'ordine.",
    options: ["sarebbe", "fosse stato", "sia"],
    correctAnswerIndex: 0,
    grammarPoint: "condizionale (richiesta cortese)"
  },
  {
    id: 9,
    question: "È importante che ogni richiesta __________ entro 24 ore.",
    options: ["è gestendo", "venga gestita", "viene gestita", "verrà gestita"],
    correctAnswerIndex: 1,
    grammarPoint: "congiuntivo passivo (necessità)"
  },
  {
    id: 10,
    question: "Nonostante __________ molta esperienza, ha chiesto consiglio al collega.",
    options: ["aveva", "avrebbe", "ha", "avesse"],
    correctAnswerIndex: 3,
    grammarPoint: "congiuntivo imperfetto (nonostante)"
  },
  {
    id: 11,
    question: "Se il cliente __________ prima, avremmo potuto risolvere il problema ieri.",
    options: ["chiamava", "avrebbe chiamato", "avesse chiamato", "chiamerebbe"],
    correctAnswerIndex: 2,
    grammarPoint: "periodo ipotetico (terzo tipo)"
  },
  {
    id: 12,
    question: "Di reclami simili ne abbiamo già __________ parecchi questa settimana.",
    options: ["ricevere", "ricevuto", "ricevendo", "ricevuti"],
    correctAnswerIndex: 3,
    grammarPoint: "accordo participio passato (con ne)"
  },
  {
    id: 13,
    question: "La procedura __________ ti ho parlato è stata aggiornata.",
    options: ["della che", "che", "di cui", "a cui"],
    correctAnswerIndex: 2,
    grammarPoint: "pronome relativo (di cui)"
  },
  {
    id: 14,
    question: "Prima di contattare il cliente, assicurati __________ controllato tutti i dettagli.",
    options: ["che hai", "da aver", "di avere", "di aver"],
    correctAnswerIndex: 3,
    grammarPoint: "infinito passato (di aver)"
  },
  {
    id: 15,
    question: "Il rimborso verrà effettuato __________ il cliente fornisca la ricevuta.",
    options: ["siccome", "anche se", "poiché", "purché"],
    correctAnswerIndex: 3,
    grammarPoint: "congiunzione (purché + congiuntivo)"
  },
  {
    id: 16,
    question: "Non credo che il cliente __________ ancora la nostra ultima e-mail.",
    options: ["ha letto", "abbia letto", "leggeva", "avrebbe letto"],
    correctAnswerIndex: 1,
    grammarPoint: "congiuntivo passato (dubbio)"
  },
  {
    id: 17,
    question: "Qualora __________ ulteriori problemi, non esiti a ricontattarci.",
    options: ["sorgerebbero", "sorgevano", "sorgeranno", "dovessero sorgere"],
    correctAnswerIndex: 3,
    grammarPoint: "congiuntivo imperfetto (qualora)"
  },
  {
    id: 18,
    question: "Benché il problema __________ già stato segnalato, non era ancora stato risolto.",
    options: ["sia", "era", "sarebbe", "fosse"],
    correctAnswerIndex: 3,
    grammarPoint: "congiuntivo trapassato (benché)"
  },
  {
    id: 19,
    question: "Se non __________ per il suo intervento, avremmo perso il cliente.",
    options: ["sarebbe stato", "fosse stato", "era stato", "sia stato"],
    correctAnswerIndex: 1,
    grammarPoint: "periodo ipotetico (irreale del passato)"
  },
  {
    id: 20,
    question: "Il responsabile pretendeva che la questione __________ prima della fine del turno.",
    options: ["sarebbe risolta", "sia risolta", "fosse risolta", "era risolta"],
    correctAnswerIndex: 2,
    grammarPoint: "congiuntivo imperfetto passivo"
  },
  {
    id: 21,
    question: "Non appena __________ tutti i dati, procederemo con la verifica.",
    options: ["ricevevamo", "riceveremmo", "riceveremo", "avessimo ricevuto"],
    correctAnswerIndex: 2,
    grammarPoint: "futuro (subordinata temporale)"
  },
  {
    id: 22,
    question: "Anche se il cliente __________ ragione, non possiamo ignorare la procedura.",
    options: ["possa avere", "può avere", "avrebbe", "avesse avuto"],
    correctAnswerIndex: 0,
    grammarPoint: "congiuntivo (anche se concessivo)"
  },
  {
    id: 23,
    question: "Mi sorprende che nessuno __________ dell'errore prima della riunione.",
    options: ["si sia accorto", "si accorgeva", "si accorgerà", "si è accorto"],
    correctAnswerIndex: 0,
    grammarPoint: "congiuntivo passato (emozione)"
  },
  {
    id: 24,
    question: "Il cliente chiedeva che gli __________ una conferma scritta entro la giornata.",
    options: ["venisse inviata", "sarebbe inviata", "veniva inviata", "sia inviata"],
    correctAnswerIndex: 0,
    grammarPoint: "congiuntivo imperfetto passivo (richiesta)"
  },
  {
    id: 25,
    question: "Se non ci __________ il contrario, la richiesta verrà chiusa automaticamente.",
    options: ["comunichi", "comunicherai", "comunicassi", "comunicheresti"],
    correctAnswerIndex: 0,
    grammarPoint: "congiuntivo presente (condizione)"
  },
  {
    id: 26,
    question: "Avendo __________ tutte le alternative, abbiamo deciso di procedere con il rimborso.",
    options: ["valutate", "valutato", "valutare", "valutando"],
    correctAnswerIndex: 1,
    grammarPoint: "gerundio passato (senza accordo)"
  },
  {
    id: 27,
    question: "È una situazione a __________ non avevamo mai dovuto far fronte prima.",
    options: ["chi", "che", "cui", "quale"],
    correctAnswerIndex: 2,
    grammarPoint: "pronome relativo (a cui)"
  },
  {
    id: 28,
    question: "Non c'era alcun motivo perché il cliente __________ così a lungo.",
    options: ["deve aspettare", "avrebbe aspettato", "dovesse aspettare", "ha aspettato"],
    correctAnswerIndex: 2,
    grammarPoint: "congiuntivo imperfetto (perché finale)"
  },
  {
    id: 29,
    question: "__________ avvertiti in tempo, avremmo potuto evitare il disguido.",
    options: ["Essendo", "Se fossimo stati", "Avendo", "Se saremmo stati"],
    correctAnswerIndex: 1,
    grammarPoint: "periodo ipotetico (irreale)"
  },
  {
    id: 30,
    question: "Il problema si è rivelato più complesso di quanto __________ inizialmente.",
    options: ["sembrasse", "sembrerà", "sembrava", "sembrerebbe"],
    correctAnswerIndex: 0,
    grammarPoint: "congiuntivo imperfetto (comparativa)"
  }
];

// ---------------------------------------------------------------
// Customer service scenarios — open-ended (evaluated by AI)
// Same scenarios as the other language tests, in Italian.
// Uses formal register ('Lei') as standard for customer service.
// ---------------------------------------------------------------

export const scenarioQuestions = [
  {
    id: 1,
    question: "Un cliente chiama ed è molto arrabbiato perché il suo ordine è arrivato con due settimane di ritardo. Minaccia di lasciare una recensione negativa e di non comprare mai più da noi. Come reagirebbe in questa situazione?"
  },
  {
    id: 2,
    question: "Una cliente Le scrive un'e-mail per lamentarsi di un prodotto difettoso, ma ha superato il periodo di garanzia di tre giorni. Come gestisce questa richiesta?"
  },
  {
    id: 3,
    question: "Un cliente pretende di parlare immediatamente con il Suo superiore, prima ancora che Lei abbia avuto l'opportunità di capire il suo problema. Come reagisce a questa situazione?"
  },
  {
    id: 4,
    question: "Ha commesso un errore e ha dato a un cliente informazioni sbagliate su un prodotto. Di conseguenza, il cliente ha comprato qualcosa di sbagliato. Come risolverebbe questa situazione?"
  },
  {
    id: 5,
    question: "Un cliente pretende uno sconto che, secondo le politiche aziendali, Lei non può concedere. Insiste e afferma che un altro dipendente glielo ha promesso. Quando Lei spiega educatamente che non può concedere lo sconto, la accusa di essere maleducato. Come gestisce questa situazione?"
  }
];

// ---------------------------------------------------------------
// CEFR level lookup based on grammar score (out of 30)
// Same cutoffs as Spanish/English/Dutch: C1 (27-30), B2 (24-26), B1 (21-23)
// Below B1: split into A1 / A2 for finer signal
// ---------------------------------------------------------------

export function getCefrLevelFromGrammarScore(score) {
  if (score <= 13) return "A1";
  if (score <= 20) return "A2";
  if (score <= 23) return "B1";
  if (score <= 26) return "B2";
  return "C1";
}
