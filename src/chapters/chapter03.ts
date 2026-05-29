// chapter03.ts
import type { Chapter } from "./types";

export const chapter03: Chapter = {
  id: 3,
  title: "Cases as Logic",
  subtitle: "Who does what to whom — and how German marks it cleanly.",
  summary:
    "Cases are not random endings. They are labels for roles: who acts, who is affected, who receives, who owns. This chapter reframes German cases as a simple logic system that English still half-remembers. You learn to see nominative, accusative and dative not as grammar tables, but as clear answers to one question: who does what to whom.",
  sections: [
    {
      heading: "3.1 German Isn’t Arbitrary, It’s Labelled",
      paragraphs: [
        "English mostly hides its case system. Word order does the heavy lifting: the subject sits before the verb, the object after it, and prepositions like to or for take over the rest.",
        "German still marks roles on the nouns themselves. That can feel like extra work at first — endings, articles, forms.",
        "But there is a payoff: once you see cases as labels, German sentences become diagrams. You can see, at a glance, who does what to whom, even when the word order bends.",
        "In other words: cases are not decoration. They are logic."
      ]
    },
    {
      heading: "3.2 Three Working Cases (for Real Life)",
      paragraphs: [
        "German has four cases, but only three matter for most early reading:",
        "• Nominative → the doer (subject).",
        "• Accusative → the direct object (thing acted on).",
        "• Dative → the receiver, indirect object, or ‘to/for’ person.",
        "Genitive exists too, but in modern German it is often replaced by prepositions. For now, we focus on the three that drive most everyday sentences."
      ],
      exampleBlocks: [
        {
          title: "Minimal Case Roles",
          rows: [
            { left: "Nominative", right: "Who does the action? (subject)" },
            { left: "Accusative", right: "What is directly affected? (object)" },
            { left: "Dative", right: "Who receives / benefits? (to/for whom)" }
          ]
        }
      ]
    },
    {
      heading: "3.3 You Already Know the Idea from English",
      paragraphs: [
        "English still has tiny case fossils:",
        "Compare: I see him vs. He sees me — not *I see he* or *him sees I*.",
        "Those pronoun changes are the last visible bits of a much larger older case system. German simply kept the full version.",
        "English’s case system didn’t shatter — it eroded. For about three centuries after the Vikings arrived, Old English and Old Norse speakers in northern England spoke languages similar enough to mostly understand each other but different enough in their endings that the endings became the friction point. Communication worked better when both sides quietly dropped them. By Chaucer’s time the system was nearly gone; today ‘whom’ sounds bookish even to fluent English speakers.",
        "German kept the endings because German never had a Danelaw — its history of contact looked different. So when you meet der/den/dem on the page, you’re not meeting an extra burden. You’re meeting what English would still have if a thousand years had gone slightly differently.",
        "So instead of thinking: ‘German is weird, why all the endings?’, try this: ‘German is honest about who does what to whom. English only whispers it.’"
      ],
      exampleBlocks: [
        {
          title: "English Case Echoes",
          rows: [
            { left: "I / me", right: "subject vs object" },
            { left: "he / him", right: "subject vs object" },
            { left: "who / whom", right: "subject vs object (formal/old-fashioned)" }
          ]
        }
      ]
    },
    {
      heading: "3.4 Articles as Case Signals",
      paragraphs: [
        "At A1–A2 level, you do not need to know every ending. You need to recognise the most common article patterns.",
        "Think of the article as a little flag that says: ‘this noun is subject’, or ‘this noun is object’, or ‘this noun is receiver’.",
        "For now, we focus on masculine nouns, because they show the clearest changes. Feminine and neuter are simpler and often stay the same in nominative and accusative."
      ],
      exampleBlocks: [
        {
          title: "Der-Words as a Case Map (Singular)",
          rows: [
            { left: "Nominative: der Mann", right: "the man (doer)" },
            { left: "Accusative: den Mann", right: "the man (affected)" },
            { left: "Dative: dem Mann", right: "to/for the man (receiver)" }
          ]
        }
      ]
    },
    {
      heading: "3.5 Cases in Action: One Sentence, Three Views",
      paragraphs: [
        "Watch what changes when we shift roles, but keep the same three words: man, dog, ball.",
        "Read the German first, then the English. Focus on the article changes — they carry the logic."
      ],
      exampleBlocks: [
        {
          title: "Who Does What to Whom?",
          rows: [
            {
              left: "Der Mann wirft den Ball.",
              right: "The man throws the ball. (Mann = nominative, Ball = accusative)"
            },
            {
              left: "Der Hund bringt dem Mann den Ball.",
              right: "The dog brings the man the ball. (Hund = nominative, Mann = dative, Ball = accusative)"
            },
            {
              left: "Dem Hund gibt der Mann den Ball.",
              right: "To the dog, the man gives the ball. (Hund = dative, Mann = nominative, Ball = accusative)"
            }
          ]
        }
      ]
    },
    {
      heading: "3.6 Micro-Rules You Can Actually Use",
      paragraphs: [
        "The shortcut is simpler than the chart. Anything that does the action — the eater, the thrower, the one in the doorway — takes nominative. Anything directly affected — the food, the ball, the news — takes accusative. Anyone receiving or benefiting — the friend you brought the coffee to, the dog the bone was thrown for — takes dative.",
        "The endings come later, after the roles are intuitive. Over time, you will connect these roles to article patterns automatically — der/den/dem, ein/einen/einem, and so on."
      ],
      exampleBlocks: [
        {
          title: "Role → Likely Case",
          rows: [
            { left: "The eater", right: "nominative (subject)" },
            { left: "The food", right: "accusative (direct object)" },
            { left: "The friend you give food to", right: "dative (indirect object)" }
          ]
        }
      ]
    },
    {
      heading: "3.7 What Role-First Reading Feels Like",
      paragraphs: [
        "A native reader of German does not consciously label cases. What they do — fast, automatically — is name roles first and let the endings ride along underneath. Who is doing it. What is being done. Who, if anyone, it's being done for.",
        "Watch the sentences below with that ear instead of the grammar-table ear. The roles are already obvious in English; the German endings just show their work.",
        "One thing to flag before the examples: a small group of common verbs — helfen, danken, gefallen, gehören, antworten — always send their main partner into dative, even when English would treat that partner as a direct object. Treat them as a watch-list of ‘dative verbs.’ The full list appears in your dictionary; the rule is just: when in doubt with one of these, reach for dative."
      ],
      exampleBlocks: [
        {
          title: "Role First, Case Second",
          rows: [
            {
              left: "Die Frau kauft den Kaffee.",
              right: "The woman buys the coffee. (Frau = nominative, Kaffee = accusative)"
            },
            {
              left: "Der Mann hilft der Frau.",
              right: "The man helps the woman. (Mann = nominative, Frau = dative after helfen)"
            },
            {
              left: "Wir schicken dem Lehrer eine E-Mail.",
              right: "We send the teacher an email. (wir = nominative, E-Mail = accusative, Lehrer = dative)"
            },
            {
              left: "Das Kind gibt dem Hund Wasser.",
              right: "The child gives the dog water. (Kind = nominative, Wasser = accusative, Hund = dative)"
            }
          ]
        }
      ]
    },
    {
      heading: "3.8 Closing Insight for Chapter 3",
      paragraphs: [
        "German cases are not a punishment. They are colour-coded labels for roles in a sentence.",
        "Once you see nominative, accusative and dative as answers to a single question — ‘who does what to whom?’ — the tables stop being abstract and start being useful.",
        "From here on, every sentence you meet is an opportunity to practice case spotting. You do not need to produce everything perfectly yet. You only need to recognise the logic.",
        "In the next chapter, we combine this case logic with word order: why German sometimes sends verbs to the end, and how that structure is far cleaner than it first appears."
      ]
    }
  ],
  module: {
    level: "A1–A2",
    title: "Wer macht was mit wem? — Cases as Roles",
    germanLines: [
      "Der Mann wirft den Ball.",
      "Der Hund läuft schnell.",
      "Der Hund bringt dem Mann den Ball.",
      "Der Mann gibt dem Hund Wasser.",
      "Wir sehen: der = Subjekt, den = Objekt, dem = Empfänger."
    ],
    englishLines: [
      "The man throws the ball.",
      "The dog runs fast.",
      "The dog brings the man the ball.",
      "The man gives the dog water.",
      "We see: der = subject, den = object, dem = recipient."
    ],
    vocabulary: [
      { german: "der Fall", english: "case (grammar)" },
      { german: "das Subjekt", english: "subject" },
      { german: "das Objekt", english: "object" },
      { german: "der Empfänger", english: "recipient" },
      { german: "bekommen", english: "to receive, get" },
      { german: "helfen", english: "to help (takes dative)" },
      { german: "geben", english: "to give" },
      { german: "der / den / dem Mann", english: "the man (nominative / accusative / dative)" }
    ],
    tasks: [
      "Take three simple English sentences (for example: 'The child sees the dog', 'I give the woman the book', 'We help the man'). Write a German version and label who is subject, who is direct object, who is receiver.",
      "Find three example sentences in a beginner German textbook or website. Underline the nouns and mark them as N (nominative), A (accusative) or D (dative).",
      "Write one mini-dialogue (3–4 lines) where someone gives, sends or shows something to someone else. Try to include at least one dative and one accusative noun.",
      "Keep a running list of verbs like geben, helfen, schicken that strongly suggest a certain case pattern. Add to it as you continue through the book."
    ],
    tasksGerman: [
      "Nimm drei einfache englische Sätze (zum Beispiel: „The child sees the dog“, „I give the woman the book“, „We help the man“). Schreibe eine deutsche Version und bezeichne, wer Subjekt, wer direktes Objekt und wer Empfänger ist.",
      "Suche drei Beispielsätze in einem Anfänger-Lehrwerk oder auf einer Website. Unterstreiche die Nomen und markiere sie als N (Nominativ), A (Akkusativ) oder D (Dativ).",
      "Schreibe einen kurzen Dialog (3–4 Zeilen), in dem jemand etwas gibt, schickt oder zeigt. Versuche, mindestens ein Dativ- und ein Akkusativnomen einzubauen.",
      "Führe eine laufende Liste von Verben wie geben, helfen, schicken, die ein bestimmtes Kasusmuster verlangen. Ergänze sie, während du weiterliest.",
    ]
  }
};
