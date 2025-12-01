// src/chapters/chapter06.ts

import type { Chapter } from "./types";

export const chapter06: Chapter = {
  id: 6,
  title: "Root Families",
  subtitle: "Ein Wort wird viele.",
  summary:
    "A single German root can generate a whole family of words. You learn to see Zugang, Ausgang, Vorgang as variations built on gehen — movement in different directions.",
  sections: [
    {
      heading: "6.1 Seeing Roots Under Compounds",
      paragraphs: [
        "Many German nouns are built from a verb root plus a prefix or ending. Once you see gehen inside Zugang, Ausgang, Vorgang, Übergang, you stop treating each word as a stranger.",
      ],
    },
    {
      heading: "6.2 Direction, Process, Result",
      paragraphs: [
        "Prefixes like zu-, aus-, vor- often encode direction or viewpoint. You learn to map them onto simple diagrams: arrows into, out of, ahead of. This gives you a visual handle on long, intimidating nouns.",
      ],
    },
    {
      heading: "6.3 Root Families as Memory Palaces",
      paragraphs: [
        "Instead of ten disconnected nouns, you build one small 'root family' in your memory. New words can later be attached to that family tree like new branches.",
      ],
    },
  ],
  module: {
    level: "A1–A2",
    title: "Ein Wort Wird Viele",
    germanLines: [
      "Ich gehe langsam durch die Stadt.",
      "Der Zugang zum Park ist offen.",
      "Ein Ausgang führt zum Fluss.",
      "Jeder Vorgang hat einen Anfang.",
      "Ein kleines Wort baut viele große Wörter.",
    ],
    englishLines: [
      "I walk slowly through the city.",
      "The entrance to the park is open.",
      "An exit leads to the river.",
      "Every process has a beginning.",
      "A small word builds many big words.",
    ],
    vocabulary: [
      { german: "gehen", english: "to go / walk" },
      { german: "Zugang", english: "access, entrance" },
      { german: "Ausgang", english: "exit" },
      { german: "Vorgang", english: "process" },
      { german: "Anfang", english: "beginning" },
    ],
    tasks: [
      "Underline all words related to gehen in the text.",
      "Invent one new compound with -gang as ending (for example Übergang).",
      "Write two sentences using your new compound in context.",
    ],
  },
};

