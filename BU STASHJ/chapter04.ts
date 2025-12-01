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
        "Grammatical gender is an old classification system, not a comment on real-world masculinity or femininity. Many Indo-European languages had three genders. English largely lost them; German kept them.",
        "Instead of fighting der/die/das, you treat gender as an extra hook for memory. Article + noun become one rhythm unit: dertisch, dieblume, dashaus.",
      ],
    },
    {
      heading: "4.2 Patterns in Endings and Meaning",
      paragraphs: [
        "You learn high-value patterns: nouns ending in -ung, -heit, -keit, -schaft are feminine; most nouns ending in -chen, -lein are neuter; many male humans and animals are masculine.",
        "The goal is not perfection; it is to make guessing smarter than pure chance.",
      ],
    },
    {
      heading: "4.3 Training with Mini-Mantras",
      paragraphs: [
        "Short, repetitive sentences like der Tisch bleibt der Tisch are used to drill article + noun as a single sound. The reading module gives you a safe, almost meditative loop to internalise the rhythm.",
      ],
    },
  ],
  module: {
    level: "A1",
    title: "Wörter Haben Formen",
    germanLines: [
      "Der Tisch ist groß.",
      "Die Blume ist schön.",
      "Das Haus ist alt.",
      "Der Tisch bleibt der Tisch.",
      "Die Blume bleibt die Blume.",
    ],
    englishLines: [
      "The table is big.",
      "The flower is beautiful.",
      "The house is old.",
      "The table stays the table.",
      "The flower stays the flower.",
    ],
    vocabulary: [
      { german: "der Tisch", english: "table (masculine)" },
      { german: "die Blume", english: "flower (feminine)" },
      { german: "das Haus", english: "house (neuter)" },
    ],
    tasks: [
      "Say the three nouns aloud with their articles until the rhythm feels natural.",
      "Rewrite the pattern with der Hund, die Sonne, das Buch.",
      "Add one more sentence for each noun in German (for example, describe color or size).",
    ],
  },
};

