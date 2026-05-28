// chapter02.ts
import type { Chapter } from "./types";

export const chapter02: Chapter = {
  id: 2,
  title: "The Decoder Ring",
  subtitle: "How sound shifts turn recognition into prediction.",
  summary:
    "Chapter 2 turns loose recognition into active decoding. You learn the core German ↔ English sound shifts, see how history shaped them, and start predicting German words you’ve never seen instead of memorising them.",
  sections: [
    {
      heading: "2.1 A Language That Split, Not Broke",
      paragraphs: [
        "If Chapter 1 showed you that German is family, Chapter 2 hands you the decoder for the family tree.",
        "English didn’t lose its connection to German. It drifted, picked up French and Latin influences, and smoothed many of its older sounds.",
        "German kept more of the original edges: clearer endings, sharper consonants, more visible structure.",
        "Once you learn how certain sounds changed in predictable ways, German stops feeling like a list of new vocabulary. It becomes reversible engineering.",
      ],
    },
    {
      heading: "2.2 Grimm’s Law Without the Textbook Pain",
      paragraphs: [
        "Linguists call the big sound changes between Proto-Indo-European, Proto-Germanic and later Germanic languages ‘Grimm’s Law’. You do not need the full theory. You only need a few high-yield patterns.",
        "The key idea: certain consonants shifted in systematic ways. What looks different today is often just the same sound, at a different stage in the timeline.",
        "You already met some of these implicitly in Chapter 1. Now we put them on the table.",
      ],
      exampleBlocks: [
        {
          title: "Core Shift Patterns (German → English)",
          rows: [
            { left: "p → f", right: "Pfeffer → pepper; Pfund → pound" },
            {
              left: "t → th",
              right: "drei → three; Tochter → daughter (via older forms)",
            },
            { left: "k → h", right: "kalt → cold; kommen → come (older: comen)" },
            {
              left: "d → t",
              right: "denken → think; Tag ↔ day (older: dag/deag)",
            },
            {
              left: "b → p",
              right: "Brot ↔ bread (via older stages); brechen ↔ break",
            },
            {
              left: "z / ss → t",
              right: "Herz → heart; sitzen ↔ sit (older forms show the t)",
            },
          ],
        },
      ],
    },
    {
      heading: "2.3 The River Metaphor: Sharp vs. Soft",
      paragraphs: [
        "Imagine a language as a river. One branch flows over stone and stays sharp-edged and cold. The other flows through softer ground and grows wider, smoother, more mixed.",
        "German is the stone channel. It kept more of the old endings and consonant clusters.",
        "English is the softened branch. It lost many endings, weakened some consonants, and absorbed foreign words.",
        "Neither river is better. But the sharply cut one makes it easier to see where the rocks came from.",
        "When you look at German with sound shifts in mind, you stop seeing ‘hard words’ and start seeing exposed geology.",
      ],
    },
    {
      heading: "2.4 The Decoder at Work: From Pattern to Meaning",
      paragraphs: [
        "Now you use the shifts actively. Instead of memorising German words, you let them remind you of English relatives.",
        "Look at each pair below. Do not translate first. Instead, say: ‘If I push this German word through the shift patterns, what English word appears?’",
      ],
      exampleBlocks: [
        {
          title: "Decode Rather Than Memorise",
          rows: [
            { left: "kalt", right: "cold (k → c/h; final t ↔ d)" },
            { left: "Fisch", right: "fish (same root, minimal change)" },
            { left: "Milch", right: "milk (ch ↔ older k sound)" },
            { left: "Brot", right: "bread (b ↔ br cluster; vowel drift)" }
          ],
          moreTitle: "More Examples",
          moreRows: [
            { left: "Vater", right: "father (v ↔ f; t ↔ th)" },
            { left: "Tochter", right: "daughter (t ↔ d/gh; ch ↔ older guttural)" },
            { left: "denken", right: "think (d → t; nk cluster retained)" },
            { left: "Fund", right: "find / found (same ancient root)" }
          ]
        },
      ],
    },
    {
      heading: "2.5 Invent a Word You’ve Never Seen",
      paragraphs: [
        "Now flip the process. Start from English and let your brain guess the German word using pattern memory.",
        "Say your guesses out loud before you look at the table. Even if you are wrong, you are strengthening the pattern network that makes later learning faster.",
      ],
      exampleBlocks: [
        {
          title: "English → Your Guess → Actual German",
          rows: [
            { left: "mother", right: "Mutter" },
            { left: "brother", right: "Bruder" },
            { left: "light", right: "Licht" },
            { left: "ground", right: "Grund / Boden" }
          ],
          moreTitle: "More Examples",
          moreRows: [
            { left: "ship", right: "Schiff" },
            { left: "foot", right: "Fuß" },
            { left: "heart", right: "Herz" },
            { left: "stone", right: "Stein" }
          ]
        },
      ],
    },
    {
      heading: "2.6 Mini-Reading: Hearing the Old Roots",
      paragraphs: [
        "Read the German sentences aloud first. Try to guess the English meaning using only sound and the patterns you know. Then check the English line.",
        "Do not worry about every small word. Focus on the core nouns and verbs. That is where the roots speak the loudest.",
      ],
      exampleBlocks: [
        {
          title: "Short Text with Decodable Roots",
          rows: [
            {
              left: "Die Tochter trinkt kaltes Wasser.",
              right: "The daughter drinks cold water.",
            },
            {
              left: "Der Vater denkt leise und spricht langsam.",
              right: "The father thinks quietly and speaks slowly.",
            },
            {
              left: "Die Zeit geht weiter, aber die alten Wörter bleiben.",
              right: "Time goes on, but the old words remain.",
            },
            {
              left: "Wir hören die Sprache und fühlen die alten Wurzeln.",
              right: "We hear the language and feel the old roots.",
            },
          ],
        },
      ],
    },
    {
      heading: "2.7 Closing Insight for Chapter 2",
      paragraphs: [
        "You are no longer just recognising German. You are beginning to generate and decode it.",
        "Sound shifts are not trivia. They are tools for seeing through the surface of words into their shared ancestry.",
        "From now on, every time you meet a new German word, ask two questions: ‘What English word does this remind me of?’ and ‘What sound changes would connect them?’",
        "In the next chapter we add another German superpower: compound words that let you read logic directly from structure.",
      ],
    },
  ],
  module: {
    level: "A1–A2",
    title: "Laute und Wurzeln — Sounds and Roots",
    germanLines: [
      "Deutsch und Englisch teilen viele alte Laute.",
      "Manche Wörter klingen fast gleich: Vater, Wasser, Hand, Haus.",
      "Andere Wörter haben kleine Veränderungen: kalt und cold, Licht und light.",
      "Wenn wir die Laut-Muster kennen, verstehen wir neue Wörter schneller.",
      "Wir raten nicht nur. Wir entschlüsseln.",
    ],
    englishLines: [
      "German and English share many old sounds.",
      "Some words sound almost the same: Vater, Wasser, Hand, Haus.",
      "Other words have small changes: kalt and cold, Licht and light.",
      "When we know the sound patterns, we understand new words faster.",
      "We are not just guessing. We are decoding.",
    ],
    vocabulary: [
      { german: "der Laut", english: "sound (speech sound)" },
      { german: "die Regel", english: "rule" },
      { german: "das Muster", english: "pattern" },
      { german: "die Wurzel", english: "root (linguistic or literal)" },
      { german: "ähnlich", english: "similar" },
      { german: "entschlüsseln", english: "to decode" },
      { german: "raten", english: "to guess" },
      { german: "verstehen", english: "to understand" },
    ],
    tasks: [
      "Mark all clear cognates in the German text (Vater, Wasser, Hand, Haus, etc.). Add at least two more that you notice yourself.",
      "Read the German lines aloud. Circle or note any place you hear a shift like p → f, t → th, k → h between German and English.",
      "Write two simple German sentences that each contain at least one cognate and one sound-shift pair (for example: kalt/cold, Licht/light).",
      "In your notebook, start a ‘Sound Shift List’ with three columns: German, English, and the pattern (for example: Vater / father / t → th). Add to this list as you continue through the book.",
    ],
    tasksGerman: [
      "Markiere alle klaren Kognaten im deutschen Text (Vater, Wasser, Hand, Haus, usw.). Füge mindestens zwei weitere hinzu, die du selbst entdeckst.",
      "Lies die deutschen Zeilen laut vor. Markiere jede Stelle, wo du eine Verschiebung hörst – wie p → f, t → th oder k → h zwischen Deutsch und Englisch.",
      "Schreibe zwei einfache deutsche Sätze, die jeweils mindestens einen Kognaten und ein Lautverschiebungspaar enthalten (zum Beispiel: kalt/cold, Licht/light).",
      "Leg in deinem Notizheft eine „Lautverschiebungsliste“ mit drei Spalten an: Deutsch, Englisch und Muster (zum Beispiel: Vater / father / t → th). Ergänze die Liste, während du weiterliest.",
    ],
  },
};
