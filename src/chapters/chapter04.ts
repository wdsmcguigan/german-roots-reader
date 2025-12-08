// src/chapters/chapter04.ts

import type { Chapter } from "./types";

export const chapter04: Chapter = {
  id: 4,
  title: "Gender Patterns",
  subtitle: "Der, die, das — shapes, sounds, and memory.",
  summary:
    "Noun gender in German is not pure chaos. You start to feel patterns in endings and categories, and you train your ear with simple, repeated structures.",
  sections: [
    {
      heading: "4.1 Why Gender Exists at All",
      paragraphs: [
        "Grammatical gender is not a comment on masculinity or femininity. It is a classification tool — an ancient one. Many Indo-European languages once carried three genders. English lost most of that structure; German preserved it.",
        "Instead of treating der/die/das like three boxes you must memorize, treat them like memory markers. The article and noun fuse into a single sound in your brain: dertisch, dieblume, dashaus.",
        "Gender becomes rhythm — not theory."
      ]
    },
    {
      heading: "4.2 Patterns You Can Feel — Not Memorise",
      paragraphs: [
        "Endings signal gender. They are not perfect, but they are strong enough to make guessing intelligent rather than random.",
        "Once you recognise the endings, der/die/das stops being trial-and-error — it becomes prediction."
      ],
      exampleBlocks: [
        {
          title: "Feminine Signals (DIE)",
          rows: [
            { left: "-ung", right: "die Zeitung — newspaper" },
            { left: "-heit / -keit", right: "die Freiheit — freedom; die Höflichkeit — politeness" },
            { left: "-schaft", right: "die Freundschaft — friendship" },
            { left: "-ion / -tät", right: "die Nation — nation; die Universität — university" },
            { left: "(most nouns ending in -e)", right: "die Blume — flower" }
          ]
        },
        {
          title: "Masculine Signals (DER)",
          rows: [
            { left: "-er", right: "der Lehrer — teacher" },
            { left: "-ich", right: "der Teppich — carpet" },
            { left: "-ig", right: "der Honig — honey" },
            { left: "-ling", right: "der Lehrling — apprentice" },
            { left: "-or / -us", right: "der Motor; der Globus" }
          ]
        },
        {
          title: "Neuter Signals (DAS)",
          rows: [
            { left: "-chen / -lein", right: "das Mädchen — little girl; das Häuslein — little house" },
            { left: "-ment", right: "das Dokument — document" },
            { left: "-um", right: "das Zentrum — center" },
            { left: "-ma", right: "das Thema — theme" },
            { left: "(young beings, materials, ge- nouns)", right: "das Kind — child; das Gold — gold; das Gebäude — building" }
          ]
        }
      ]
    },
    {
      heading: "4.3 Mini-Mantras — Rhythm Over Rules",
      paragraphs: [
        "Instead of memorising charts, you train pattern recognition through repetition.",
        "Short loops like ‚Der Tisch bleibt der Tisch‘ lock gender to noun in muscle memory.",
        "Sound, not theory, does the work."
      ]
    },
    {
      heading: "4.4 Gender Prediction Exercise",
      paragraphs: [
        "Predict each gender based only on ending. Don’t analyse — feel the pattern. Then compare."
      ],
      exampleBlocks: [
        {
          title: "Guess Before Checking",
          rows: [
            { left: "Zeitung", right: "(F) -ung" },
            { left: "Lehrer", right: "(M) -er" },
            { left: "Mädchen", right: "(N) -chen" },
            { left: "Honig", right: "(M) -ig" }
          ],
          moreTitle: "More Examples",
          moreRows: [
            { left: "Freundschaft", right: "(F) -schaft" },
            { left: "Thema", right: "(N) -ma" },
            { left: "Motor", right: "(M) -or" },
            { left: "Universität", right: "(F) -tät" }
          ]
        }
      ]
    },
    {
      heading: "4.5 Declension as Movement, Not Memory",
      paragraphs: [
        "Cases don’t create chaos — they show movement.",
        "Masculine nouns shift early, feminine holds longer, neuter behaves like a blend.",
        "Watch the symmetry, not the exceptions."
      ],
      exampleBlocks: [
        {
          title: "Masculine (DER)",
          rows: [
            { left: "Nom", right: "der Hund" },
            { left: "Acc", right: "den Hund" },
            { left: "Dat", right: "dem Hund" },
            { left: "Gen", right: "des Hundes" }
          ]
        },
        {
          title: "Feminine (DIE)",
          rows: [
            { left: "Nom", right: "die Blume" },
            { left: "Acc", right: "die Blume" },
            { left: "Dat", right: "der Blume" },
            { left: "Gen", right: "der Blume" }
          ]
        },
        {
          title: "Neuter (DAS)",
          rows: [
            { left: "Nom", right: "das Kind" },
            { left: "Acc", right: "das Kind" },
            { left: "Dat", right: "dem Kind" },
            { left: "Gen", right: "des Kindes" }
          ]
        }
      ]
    },
    {
      heading: "4.6 The Balance Trick",
      paragraphs: [
        "Only masculine changes in accusative (der → den). Feminine and neuter do not.",
        "Meaning: one shift = one signal.",
        "Wenn du den Mann siehst, ruf die Frau.",
        "→ den Mann = object. die Frau = reference or subject."
      ]
    },
    {
      heading: "4.7 Closing Insight for Chapter 4",
      paragraphs: [
        "Gender is not random. Declension is not memorisation.",
        "You now see endings, categories, patterns. You read gender as code.",
        "From here forward, every noun is a rhythm pattern — derTisch, dieBlume, dasHaus — and every case shift is a movement you can hear.",
        "Next we expand your toolkit into **word order architecture** — how German sentences balance information like structural beams."
      ]
    }
  ],
  module: {
    level: "A1",
    title: "Wörter Haben Formen",
    germanLines: [
      "Der Tisch ist groß.",
      "Die Blume ist schön.",
      "Das Haus ist alt.",
      "Der Tisch bleibt der Tisch.",
      "Die Blume bleibt die Blume."
    ],
    englishLines: [
      "The table is big.",
      "The flower is beautiful.",
      "The house is old.",
      "The table stays the table.",
      "The flower stays the flower."
    ],
    vocabulary: [
      { german: "der Tisch", english: "table" },
      { german: "die Blume", english: "flower" },
      { german: "das Haus", english: "house" }
    ],
    tasks: [
      "Identify which noun is masculine, which feminine, which neuter.",
      "Rewrite the sentences using: der Hund / die Sonne / das Buch.",
      "Create three new sentences with tense variation (war / wird / ist)."
    ]
  }
};