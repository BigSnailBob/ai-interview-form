// ---------------------------------------------------------------
// Spanish test questions
// Grammar: 30 multiple-choice questions.
// Source: spanish_grammar_test.xlsx
// ---------------------------------------------------------------

export const LANGUAGE = "es";
export const LANGUAGE_NAME = "Spanish";

export const grammarQuestions = [
  {
    id: 1,
    question: "Ayer llamó __________ tal David. Yo no sé quién es. ¿Y tú?",
    options: ["el", "un", "sin artículo"],
    correctAnswerIndex: 1,
    grammarPoint: "artículo indefinido"
  },
  {
    id: 2,
    question: "__________ mí, Madrid es la ciudad perfecta para estudiar español.",
    options: ["por", "para"],
    correctAnswerIndex: 1,
    grammarPoint: "por/para"
  },
  {
    id: 3,
    question: "El cliente insistió en __________ una explicación más detallada antes de aceptar la solución.",
    options: ["recibir", "recibiendo", "recibido", "recibe"],
    correctAnswerIndex: 0,
    grammarPoint: "preposición + infinitivo"
  },
  {
    id: 4,
    question: "No ha venido aún. Puede que __________ un accidente.",
    options: ["ha sufrido", "haya sufrido", "sufre"],
    correctAnswerIndex: 1,
    grammarPoint: "subjuntivo (probabilidad)"
  },
  {
    id: 5,
    question: "Estudió en Francia, es por eso que __________ perfectamente francés.",
    options: ["hable", "habla", "hablaba"],
    correctAnswerIndex: 1,
    grammarPoint: "indicativo (causa demostrada)"
  },
  {
    id: 6,
    question: "Como __________ lo que opina, a menudo tiene problemas.",
    options: ["dice", "diga", "dijera"],
    correctAnswerIndex: 0,
    grammarPoint: "indicativo (causa real)"
  },
  {
    id: 7,
    question: "Aún no lo sé, pero este mes como __________, me iré de vacaciones a España.",
    options: ["pueda", "pude", "podré"],
    correctAnswerIndex: 0,
    grammarPoint: "subjuntivo (condición futura)"
  },
  {
    id: 8,
    question: "Quería que se __________ a la tienda.",
    options: ["fuere", "sería", "siere", "fuera"],
    correctAnswerIndex: 3,
    grammarPoint: "subjuntivo imperfecto"
  },
  {
    id: 9,
    question: "Era una lástima que __________ agotado.",
    options: ["estaría", "estuviera", "estuviere", "estaríamos"],
    correctAnswerIndex: 1,
    grammarPoint: "subjuntivo (emoción)"
  },
  {
    id: 10,
    question: "Era preciso que __________ a la embajada.",
    options: ["fuiste", "fue", "fuera"],
    correctAnswerIndex: 2,
    grammarPoint: "subjuntivo (obligación impersonal)"
  },
  {
    id: 11,
    question: "Es una persona seria y por eso, no creo que ahora __________ problemas para tomar la mejor decisión.",
    options: ["tenga", "tuviera", "tiene", "tendrá"],
    correctAnswerIndex: 0,
    grammarPoint: "subjuntivo (duda)"
  },
  {
    id: 12,
    question: "Sería fenomenal que __________ a visitarme en el futuro.",
    options: ["vuelves", "volverías", "volverás", "volvieras"],
    correctAnswerIndex: 3,
    grammarPoint: "subjuntivo (deseo)"
  },
  {
    id: 13,
    question: "Su infancia __________ durante los últimos años de la dictadura.",
    options: ["pasó", "ocurrió", "transcurrió", "se produjo"],
    correctAnswerIndex: 2,
    grammarPoint: "vocabulario preciso"
  },
  {
    id: 14,
    question: "__________ revisar el historial del cliente, detectamos un error en el sistema.",
    options: ["Al", "En", "De", "Para"],
    correctAnswerIndex: 0,
    grammarPoint: "al + infinitivo"
  },
  {
    id: 15,
    question: "No estoy __________ bromas. ¡Lo mejor es que me dejes en paz!",
    options: ["de", "para", "a", "por", "sin"],
    correctAnswerIndex: 1,
    grammarPoint: "expresión fija (no estar para)"
  },
  {
    id: 16,
    question: "Cuando __________ nosotros, el tren ya __________.",
    options: [
      "llegamos, salió",
      "llegamos, había salido",
      "hemos llegado, salió",
      "llegaremos, había salido",
      "hemos llegado, haya salido"
    ],
    correctAnswerIndex: 1,
    grammarPoint: "pretérito + pluscuamperfecto"
  },
  {
    id: 17,
    question: "Ayer yo __________ todo el texto sin tu ayuda.",
    options: ["traducí", "traduje", "traduzco", "traducé", "tradujo"],
    correctAnswerIndex: 1,
    grammarPoint: "pretérito irregular"
  },
  {
    id: 18,
    question: "Yo en tu lugar __________ la falda roja.",
    options: ["me ponía", "me pondría", "me pongo", "me pongía", "me pondré", "me poní"],
    correctAnswerIndex: 1,
    grammarPoint: "condicional (consejo)"
  },
  {
    id: 19,
    question: "\"Alicia no comerá la tarta de manzana\" — en voz pasiva la misma frase sería:",
    options: [
      "La tarta de manzana no estará comida de Alicia",
      "La tarta de manzana no será comida por Alicia",
      "La tarta de manzana no estará comida por Alicia",
      "La tarta de manzana no será comida de Alicia"
    ],
    correctAnswerIndex: 1,
    grammarPoint: "voz pasiva"
  },
  {
    id: 20,
    question: "Esta es la tienda, en __________ compré el vestido.",
    options: ["la cual", "cual", "cuya", "la"],
    correctAnswerIndex: 0,
    grammarPoint: "pronombre relativo"
  },
  {
    id: 21,
    question: "Aunque el agente no podía resolver el problema en ese momento, se comprometió a __________ al cliente informado sobre cualquier novedad.",
    options: ["mantener", "llevar", "poner", "seguir"],
    correctAnswerIndex: 0,
    grammarPoint: "verbo + adjetivo (mantener informado)"
  },
  {
    id: 22,
    question: "El pedido se retrasó __________ una incidencia logística en el almacén.",
    options: ["por", "para", "de", "desde"],
    correctAnswerIndex: 0,
    grammarPoint: "por (causa)"
  },
  {
    id: 23,
    question: "El cliente insistía __________ hablar con un supervisor porque no estaba satisfecho con la solución ofrecida.",
    options: ["en", "de", "por", "hacia"],
    correctAnswerIndex: 0,
    grammarPoint: "preposición fija (insistir en)"
  },
  {
    id: 24,
    question: "En cuanto __________ toda la información del cliente, podremos revisar el caso.",
    options: ["tendremos", "tengamos", "tenemos", "tuvimos"],
    correctAnswerIndex: 1,
    grammarPoint: "subjuntivo (cláusula temporal futura)"
  },
  {
    id: 25,
    question: "El agente le pidió al cliente que __________ unas capturas de pantalla para analizar el problema.",
    options: ["enviaba", "enviara", "enviará", "envía"],
    correctAnswerIndex: 1,
    grammarPoint: "subjuntivo (mandato indirecto)"
  },
  {
    id: 26,
    question: "Si el cliente hubiera facilitado toda la información desde el principio, el caso __________ mucho antes.",
    options: ["resolvería", "se habría resuelto", "se resolvió", "se resolverá"],
    correctAnswerIndex: 1,
    grammarPoint: "condicional compuesto (pasado hipotético)"
  },
  {
    id: 27,
    question: "El cliente terminó __________ la suscripción porque el problema nunca se solucionó.",
    options: ["cancelar", "cancelando", "cancelado", "cancelación"],
    correctAnswerIndex: 1,
    grammarPoint: "terminar + gerundio"
  },
  {
    id: 28,
    question: "El equipo consiguió resolver el problema __________ el cliente tuviera que volver a ponerse en contacto.",
    options: ["sin que", "sin", "para que", "aunque"],
    correctAnswerIndex: 0,
    grammarPoint: "subjuntivo (sin que)"
  },
  {
    id: 29,
    question: "El supervisor nos recomendó __________ siempre un tono profesional, incluso en situaciones difíciles.",
    options: ["mantener", "manteniendo", "mantenido", "mantenerse"],
    correctAnswerIndex: 0,
    grammarPoint: "recomendar + infinitivo"
  },
  {
    id: 30,
    question: "En caso de que el problema vuelva a producirse, le recomendamos que __________ con nosotros lo antes posible.",
    options: ["contacta", "contactará", "contacte", "contastas"],
    correctAnswerIndex: 2,
    grammarPoint: "subjuntivo (recomendar que)"
  }
];

// ---------------------------------------------------------------
// Customer service scenarios — open-ended (evaluated by AI)
// Translated from the German source scenarios.
// ---------------------------------------------------------------

export const scenarioQuestions = [
  {
    id: 1,
    question: "Un cliente llama y está muy enfadado porque su pedido llegó con dos semanas de retraso. Amenaza con dejar una reseña negativa y no volver a comprar nunca más con nosotros. ¿Cómo reaccionaría en esta situación?"
  },
  {
    id: 2,
    question: "Una clienta le escribe un correo electrónico y se queja de un producto defectuoso, pero ha superado el plazo de garantía en tres días. ¿Cómo gestiona esta consulta?"
  },
  {
    id: 3,
    question: "Un cliente exige hablar inmediatamente con su superior, incluso antes de que usted haya tenido la oportunidad de entender su problema. ¿Cómo reacciona ante esto?"
  },
  {
    id: 4,
    question: "Ha cometido un error y ha dado a un cliente información incorrecta sobre un producto. Como consecuencia, el cliente ha comprado algo equivocado. ¿Cómo resolvería esta situación?"
  },
  {
    id: 5,
    question: "Un cliente exige un descuento que usted, según las políticas de la empresa, no puede conceder. Insiste y afirma que otro empleado se lo prometió. Cuando le explica cortésmente que no puede darle el descuento, le acusa de ser descortés. ¿Cómo gestiona esta situación?"
  }
];

// ---------------------------------------------------------------
// CEFR level lookup based on grammar score (out of 30)
// Updated per reviewer request: C1 (27-30), B2 (24-26), B1 (21-23)
// Below B1: split into A1 / A2 for finer signal
// ---------------------------------------------------------------

export function getCefrLevelFromGrammarScore(score) {
  if (score <= 13) return "A1";
  if (score <= 20) return "A2";
  if (score <= 23) return "B1";
  if (score <= 26) return "B2";
  return "C1";
}
