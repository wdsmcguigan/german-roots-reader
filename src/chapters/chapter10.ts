// src/chapters/chapter10.ts

import type { Chapter } from "./types";

export const chapter10: Chapter = {
  id: 10,
  title: "Reading & Thinking in German",
  subtitle: "Understanding without translating.",
  summary:
    "Here you practice seeing a scene directly in German — no English in the middle. The focus is on sensory detail and quiet internal understanding.",
  sections: [
    {
      heading: "10.1 The Cost of Constant Translation",
      paragraphs: [
        "If you silently translate every word into English, your brain never gets to build direct links between German and meaning. Everything must pass through a narrow bottleneck.",
      ],
    },
    {
      heading: "10.2 Building Direct Links",
      paragraphs: [
        "This chapter uses short, concrete sensory scenes to train you to stay with the German. You read, imagine, feel — and only later check the translation if needed.",
      ],
    },
    {
      heading: "10.3 Trusting Partial Understanding",
      paragraphs: [
        "You are encouraged to tolerate 'blurred' understanding instead of panicking over every unknown word. The goal is to maintain contact with the scene, not to achieve perfect dictionary coverage.",
      ],
    },
  ],
  module: {
    level: "A2",
    title: "Ohne Übersetzung",
    germanLines: [
      "Der Morgen ist still.",
      "Ich trinke Kaffee und atme warmen Dampf.",
      "Die Stadt wacht langsam auf.",
      "Ich höre Schritte, aber ich sehe niemanden.",
      "Ich verstehe die Szene — ohne Englisch.",
    ],
    englishLines: [
      "The morning is quiet.",
      "I drink coffee and breathe warm steam.",
      "The city wakes slowly.",
      "I hear footsteps, but I see no one.",
      "I understand the scene — without English.",
    ],
    vocabulary: [
      { german: "still", english: "quiet" },
      { german: "atmen", english: "to breathe" },
      { german: "wacht auf", english: "wakes up" },
      { german: "Schritte", english: "footsteps" },
      { german: "Szene", english: "scene" },
    ],
    tasks: [
      "Close your eyes and imagine the scene only from the German text, then describe one new detail in German.",
      "Write your own 4–5 line morning scene in German.",
      "Underline all verbs and say them aloud in the ich-form.",
    ],
  },
};

