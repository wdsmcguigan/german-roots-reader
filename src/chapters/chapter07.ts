// src/chapters/chapter07.ts

import type { Chapter } from "./types";

export const chapter07: Chapter = {
  id: 7,
  title: "Compounds as LEGO",
  subtitle: "Handschuh, Lieblingswort & Co.",
  summary:
    "German lets you stick words together to form precise, often funny new ones. You practice seeing and building these LEGO-style compounds.",
  sections: [
    {
      heading: "7.1 Why German Loves Long Words",
      paragraphs: [
        "German often prefers building a new compound over borrowing a foreign word. Instead of saying 'glove', it literally says 'hand-shoe'. Instead of 'kindergarten', English simply borrowed the German compound as is.",
      ],
    },
    {
      heading: "7.2 Reading Compounds from Right to Left",
      paragraphs: [
        "You learn to decode compounds by starting at the right-hand end (the head) and then adding modifiers from left to right. A Bahnhof is a Hof (yard, place) for Bahnen (trains).",
      ],
    },
    {
      heading: "7.3 Building Your Own LEGO Words",
      paragraphs: [
        "The exercises push you to build playful compounds based on your own life. Even when your creations are not 'real' dictionary words, the process fuses meaning and structure in your memory.",
      ],
    },
  ],
  module: {
    level: "A1–A2",
    title: "Wörter Kleben Zusammen",
    germanLines: [
      "Ich trinke Kaffee aus einer Tasse.",
      "Auf dem Tisch liegt mein Notizbuch.",
      "Heute habe ich ein neues Lieblingswort: Handschuh.",
      "Hand + Schuh = ein Schuh für die Hand.",
      "Deutsch baut Wörter wie Lego.",
    ],
    englishLines: [
      "I drink coffee from a cup.",
      "On the table lies my notebook.",
      "Today I have a new favourite word: glove (Handschuh).",
      "Hand + shoe = a shoe for the hand.",
      "German builds words like LEGO.",
    ],
    vocabulary: [
      { german: "Handschuh", english: "glove (hand-shoe)" },
      { german: "Notizbuch", english: "notebook" },
      { german: "Lieblingswort", english: "favourite word" },
      { german: "Tasse", english: "cup" },
    ],
    tasks: [
      "Break three German compounds you know into their parts (for example: Zahnarzt, Bahnhof, Haustür).",
      "Create two new playful compounds from objects in your room (for example Kaffeetasse, Bücherregal).",
      "Write a short 3-sentence scene using at least two compounds you created.",
    ],
  },
};

