// src/chapters/chapter05.ts

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
        "English had three genders too, all the way through the Anglo-Saxon period — sēo sunne (the sun, feminine) and se mōna (the moon, masculine) and þæt wīf — the þ is the Old English letter ‘thorn,’ the same ‘th’ sound it survives as in modern English — (the woman, neuter, because all diminutives were neuter, even adult women). What killed the system was sound erosion: the unstressed vowels at the ends of English words gradually flattened to a single neutral sound, and once they did, the gender markers were indistinguishable.",
        "German’s stressed endings stayed crisp. The gender stayed crisp with them. So when you meet der/die/das, you’re not meeting arbitrary German bureaucracy. You’re meeting the part of the Old English noun that survived.",
        "Instead of treating der/die/das like three boxes you must memorize, treat them like memory markers. The article and noun fuse into a single sound in your brain: dertisch, dieblume, dashaus.",
        "Gender becomes rhythm — not theory."
      ]
    },
    {
      heading: "5.2 Patterns You Can Feel — Not Memorise",
      paragraphs: [
        "Notice the logic underneath the lists. Abstract qualities cluster as feminine (-heit, -keit, -ung, -schaft). Diminutives and young beings cluster as neuter (-chen, -lein, das Kind). Agents and concrete actors cluster as masculine (-er, -ling). This isn't German bureaucracy — it's a classification scheme older than English, the Germanic mind's instinct for sorting the world into things-that-act, things-that-are-acted-on, and things-that-have-just-arrived. Romance languages did almost the same sort with different markers.",
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
        "Instead of memorising charts, you train pattern recognition through repetition. Short loops like „Der Tisch bleibt der Tisch, die Blume bleibt die Blume, das Haus bleibt das Haus“ lock article to noun in muscle memory.",
        "Say them aloud until the article fuses to the noun rather than sitting in front of it. Dertisch. Dieblume. Dashaus. After a week, you stop reaching for the article — it arrives with the noun the way ‘an’ arrives with ‘apple’ in English.",
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
        "You’ll see a ‘Gen’ row in the tables below — genitive. Chapter 3 set it aside because spoken German often replaces it with von + dative. We're including it in the tables for completeness so the pattern is visible, but you don't need to produce it. Recognise the -es on masculine and neuter nouns and move on.",
        "As you read across the three tables below, listen for the asymmetry: masculine flips its article three times (der, den, dem), neuter flips once (das stays put for nominative and accusative, then shifts to dem), and feminine barely flips at all (die for both subject and object, der only in dative and genitive)."
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
        "Notice what this asymmetry buys you as a reader. Because only masculine flips between der and den, every other article is doing double duty — the same die serves as both subject and object for the woman, the same das for the child. The whole signaling load lives on one syllable.",
        "If you see den Mann in a sentence, the den alone tells you he's the one being seen, called, helped, hit, missed. The article became a tiny role-tag. German concentrated its grammatical information in one place where English used to spread it across the whole noun ending and then gave up on it entirely.",
        "So when a sentence like „Wenn du den Mann siehst, ruf die Frau“ arrives, the den Mann instantly marks the man as the object of seeing, while die Frau could still be either the subject of calling or the person being called — and only context, not the article, resolves it. Masculine carries the signal alone."
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
    level: "A1–A2",
    title: "Wörter Haben Formen",
    germanLines: [
      "Die Zeitung liegt auf dem Tisch.",
      "Das Mädchen liest.",
      "Der Lehrer kommt.",
      "Die Universität ist groß.",
      "Das Dokument ist neu.",
      "Der Honig schmeckt süß, und die Freiheit fühlt sich leicht an.",
      "Ein kleines Mädchen liest ein neues Dokument."
    ],
    englishLines: [
      "The newspaper lies on the table.",
      "The girl reads.",
      "The teacher comes.",
      "The university is big.",
      "The document is new.",
      "The honey tastes sweet, and freedom feels light.",
      "A little girl reads a new document."
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
      { german: "die Freiheit", english: "freedom (-heit → die)" },
      { german: "das Thema", english: "theme (-ma → das)" }
    ],
    tasks: [
      "For each noun in the passage, name its article AND name the suffix or shape that predicts that article (e.g., Zeitung → die, because -ung → feminine). If a noun has no predictive ending, mark it as a ‘memorise’ item.",
      "Take the first three lines of the German passage (‘Die Zeitung liegt auf dem Tisch.’ / ‘Das Mädchen liest.’ / ‘Der Lehrer kommt.’) and rewrite each one substituting the subject noun: use der Hund for the first, die Sonne for the second, das Buch for the third. Notice how the article shifts the rhythm even when the rest of the sentence stays put.",
      "Predict the gender of these new nouns based on their endings, then check against §5.2: Wohnung, Mädchen, Direktor, Schönheit, Universität.",
      "Write three short sentences. Each sentence must use a noun from a different gender (one der-noun, one die-noun, one das-noun). Say each sentence aloud so the article fuses to the noun in rhythm.",
      "Start a 'Gender by Ending' list in your notebook: three columns (Suffix / Article / Examples). Whenever you meet a new noun, add it under its ending. Aim for 5 new entries this week."
    ],
    tasksGerman: [
      "Bestimme für jedes Nomen im Text seinen Artikel UND nenne das Suffix oder die Form, die diesen Artikel vorhersagt (z. B. Zeitung → die, weil -ung → feminin). Wenn ein Nomen kein vorhersagendes Suffix hat, markiere es als „auswendig lernen“.",
      "Nimm die ersten drei Zeilen des deutschen Textes („Die Zeitung liegt auf dem Tisch.“ / „Das Mädchen liest.“ / „Der Lehrer kommt.“) und schreibe jede neu, indem du das Subjektnomen ersetzt: der Hund für die erste, die Sonne für die zweite, das Buch für die dritte. Achte darauf, wie der Artikel den Rhythmus verändert, auch wenn der Rest des Satzes gleich bleibt.",
      "Rate das Genus dieser neuen Nomen anhand der Endungen und überprüfe es mit §5.2: Wohnung, Mädchen, Direktor, Schönheit, Universität.",
      "Schreibe drei kurze Sätze. Jeder Satz muss ein Nomen einer anderen Genusgruppe enthalten (ein der-Nomen, ein die-Nomen, ein das-Nomen). Sprich jeden Satz laut, damit Artikel und Nomen rhythmisch zusammenwachsen.",
      "Leg in deinem Notizheft eine Liste „Genus nach Endung“ an: drei Spalten (Suffix / Artikel / Beispiele). Trag jedes neue Nomen unter seiner Endung ein. Ziel: 5 neue Einträge diese Woche.",
    ]
  }
};