// src/chapters/chapter02.ts

import type { Chapter } from "./types";

export const chapter02: Chapter = {
  id: 2,
  title: "Sound Shift Code",
  subtitle: "Vater → father, Wasser → water.",
  summary:
    "This chapter shows how sound shifts connect German and English. Once you see the patterns, new vocabulary feels familiar instead of random.",
  sections: [
    {
      heading: "2.1 Grimm's Law in Plain Language",
      paragraphs: [
        "You may have heard of Grimm's Law: a set of sound changes that turned old Indo-European sounds into Germanic ones. In practice, you do not need formulas; you need a few recurring pairs: p→f, t→th, k→h, d→t.",
        "Vater/father, Wasser/water, Pfeffer/pepper are not coincidences. Once you start to spot these pairs, spelling differences become predictable noise.",
      ],
    },
    {
      heading: "2.2 Hearing Patterns Instead of Memorising Lists",
      paragraphs: [
        "Traditional vocabulary lists hide patterns by mixing everything together. Here, you group words by sound shift families. You see that ziehen and to tug, kalt and cold, Essen and to eat have systematic links.",
        "Your goal is not to memorise every law but to train your ear: 'Ah, German f often shows up where English has p or b; German t can show up where English has d.'",
      ],
    },
    {
      heading: "2.3 When Patterns Break",
      paragraphs: [
        "Borrowed words, spelling reforms and random history create exceptions. This is not a bug; it is part of the story. When a pattern seems broken, you often discover that one side borrowed the word from Latin or French instead of keeping the native Germanic form.",
      ],
    },
  ],
  module: {
    level: "A1–A2",
    title: "Laute Haben Geschichte",
    germanLines: [
      "Wörter reisen durch die Zeit.",
      "Deutsch und Englisch klingen ähnlich.",
      "Vater klingt wie father.",
      "Wasser klingt wie water.",
      "Wenn Laute sich verändern, bleibt die Wurzel gleich.",
    ],
    englishLines: [
      "Words travel through time.",
      "German and English sound similar.",
      "Vater sounds like father.",
      "Wasser sounds like water.",
      "When sounds change, the root stays the same.",
    ],
    vocabulary: [
      { german: "Laute", english: "sounds" },
      { german: "reisen", english: "to travel" },
      { german: "klingen", english: "to sound" },
      { german: "Wurzel", english: "root (literal/figurative)" },
    ],
    tasks: [
      "Say three more cognate pairs aloud (Haus/house, Hand/hand, Name/name).",
      "Write two sentences using 'klingt wie'.",
      "Explain in simple German why Laute (sounds) have Geschichte (history).",
    ],
  },
};

