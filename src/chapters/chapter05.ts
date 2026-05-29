// src/chapters/chapter04.ts

import type { Chapter } from "./types";

export const chapter05: Chapter = {
  id: 5,
  title: "Gender Patterns",
  subtitle: "Der, die, das — shapes, sounds, and memory.",
  summary:
    "Noun gender in German is not pure chaos. You start to feel patterns in endings and categories, and you train your ear with simple, repeated structures.",
  sections: [
    {
      heading: "5.1 Why Gender Exists at All",
      paragraphs: [
        "Grammatical gender is not a comment on masculinity or femininity. It is a classification tool — an ancient one. Many Indo-European languages once carried three genders. English lost most of that structure; German preserved it.",
        "English had three genders too, all the way through the Anglo-Saxon period — sēo sunne (the sun, feminine) and se mōna (the moon, masculine) and þæt wīf (the woman, neuter, because all diminutives were neuter, even adult women). What killed the system was sound erosion: the unstressed vowels at the ends of English words gradually flattened to a single neutral sound, and once they did, the gender markers were indistinguishable.",
        "German’s stressed endings stayed crisp. The gender stayed crisp with them. So when you meet der/die/das, you’re not meeting arbitrary German bureaucracy. You’re meeting the part of the Old English noun that survived.",
        "Instead of treating der/die/das like three boxes you must memorize, treat them like memory markers. The article and noun fuse into a single sound in your brain: dertisch, dieblume, dashaus.",
        "Gender becomes rhythm — not theory."
      ]
    },
    {
      heading: "5.2 Patterns You Can Feel — Not Memorise",
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
      heading: "5.3 Mini-Mantras — Rhythm Over Rules",
      paragraphs: [
        "Instead of memorising charts, you train pattern recognition through repetition.",
        "Short loops like ‚Der Tisch bleibt der Tisch‘ lock gender to noun in muscle memory.",
        "Sound, not theory, does the work."
      ]
    },
    {
      heading: "5.4 Reading Gender from the Ending",
      paragraphs: [
        "Native intuition for gender does not run on charts. It runs on endings. -ung pulls for die before the dictionary opens; -chen pulls for das; -er for der. The pattern is fast enough that even uncertain guesses land on the right side more often than chance, and after a few weeks the guesses stop feeling like guesses.",
        "Read the column below as a fluent reader would: ending first, gender on its heels."
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
      heading: "5.5 Declension as Movement, Not Memory",
      paragraphs: [
        "Cases don’t create chaos — they show movement.",
        "Masculine nouns shift early, feminine holds longer, neuter behaves like a blend.",
        "Watch the symmetry, not the exceptions.",
        "Notice the asymmetry between the three columns below: masculine changes its article in every case, neuter changes once, feminine barely moves at all. This isn’t bureaucratic noise. Across Indo-European, feminine declensions consistently lost their case distinctions earlier than masculine ones — the same flattening English completed everywhere, German half-completed in only one gender. When you write ‘die Frau’ and don’t change it for accusative, you’re meeting a sound erosion that started a thousand years ago and stopped halfway.",
        "You’ll see a ‘Gen’ row in the tables below — genitive. Chapter 3 deferred it because spoken German often replaces it with von + dative. But it still lives in writing, fixed phrases, and the -es ending on masculine and neuter nouns. Read the row; don’t memorise it yet."
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
      heading: "5.6 The Balance Trick",
      paragraphs: [
        "Only masculine changes in accusative (der → den). Feminine and neuter do not.",
        "Meaning: one shift = one signal.",
        "Wenn du den Mann siehst, ruf die Frau.",
        "→ den Mann = object. die Frau = reference or subject."
      ]
    },
    {
      heading: "5.7 Closing Insight for Chapter 5",
      paragraphs: [
        "Gender is not random. Declension is not memorisation.",
        "You now see endings, categories, patterns. You read gender as code.",
        "From here forward, every noun is a rhythm pattern — derTisch, dieBlume, dasHaus — and every case shift is a movement you can hear.",
        "Next we look at the engines that move every German sentence — verbs — and how their strong and weak tribes carry a thousand years of pattern memory."
      ]
    }
  ],
  module: {
    level: "A1",
    title: "Wörter Haben Formen",
    germanLines: [
      "Die Zeitung liegt auf dem Tisch.",
      "Das Mädchen liest.",
      "Der Lehrer kommt.",
      "Die Universität ist groß.",
      "Das Dokument ist neu.",
      "Endungen sind kleine Signale: -ung, -heit, -tät zeigen oft die.",
      "-chen, -ment, -um zeigen oft das. -er, -ig, -or zeigen oft der."
    ],
    englishLines: [
      "The newspaper lies on the table.",
      "The girl reads.",
      "The teacher comes.",
      "The university is big.",
      "The document is new.",
      "Endings are small signals: -ung, -heit, -tät usually point to die.",
      "-chen, -ment, -um usually point to das. -er, -ig, -or usually point to der."
    ],
    vocabulary: [
      { german: "der Tisch", english: "table" },
      { german: "die Blume", english: "flower" },
      { german: "das Haus", english: "house" },
      { german: "die Zeitung", english: "newspaper (-ung → die)" },
      { german: "das Mädchen", english: "girl (-chen → das)" },
      { german: "der Lehrer", english: "teacher (-er → der)" },
      { german: "die Universität", english: "university (-tät → die)" },
      { german: "das Dokument", english: "document (-ment → das)" },
      { german: "der Honig", english: "honey (-ig → der)" },
      { german: "die Schönheit", english: "beauty (-heit → die)" },
      { german: "das Thema", english: "theme (-ma → das)" }
    ],
    tasks: [
      "Identify which noun is masculine, which feminine, which neuter.",
      "Rewrite the sentences using: der Hund / die Sonne / das Buch.",
      "Predict the gender of these new nouns based on their endings, then check against §5.2: Wohnung, Mädchen, Direktor, Schönheit, Universität."
    ],
    tasksGerman: [
      "Bestimme, welches Nomen maskulin, welches feminin und welches neutrum ist.",
      "Schreibe die Sätze mit folgenden Nomen um: der Hund / die Sonne / das Buch.",
      "Rate das Genus dieser neuen Nomen anhand der Endungen und überprüfe es mit §5.2: Wohnung, Mädchen, Direktor, Schönheit, Universität.",
    ]
  }
};