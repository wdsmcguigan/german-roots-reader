// src/chapters/chapter09.ts

import type { Chapter } from "./types";

export const chapter09: Chapter = {
  id: 9,
  title: "Semantic Drift",
  subtitle: "When meanings wander over time.",
  summary:
    "Words do not stay fixed. 'Fast' once meant 'almost' in older English and still does in German. You learn to see drift as a historical process, not a bug.",
  sections: [
    {
      heading: "9.1 Words as Moving Targets",
      paragraphs: [
        "Meanings shift as cultures, technologies and metaphors change. The word fast is a textbook example: in German it kept the 'almost' sense; in English it ended up describing speed.",
      ],
    },
    {
      heading: "9.2 Parallel and Divergent Paths",
      paragraphs: [
        "You look at pairs like Traum/dream, brav/brave, Tier/deer to see how related languages can either march together or wander in different semantic directions.",
      ],
    },
    {
      heading: "9.3 Drift as Story, Not Chaos",
      paragraphs: [
        "Instead of treating these differences as arbitrary, you treat them as stories. Sometimes religious language, sometimes legal usage, sometimes slang pushes a word into a new niche.",
      ],
    },
  ],
  module: {
    level: "A2",
    title: "Wörter Wandern Wie Flüsse",
    germanLines: [
      "'Fast' heißt in Deutsch: fast = beinahe.",
      "In Englisch heißt es: fast = schnell.",
      "Zwei Wege, ein Wort — zwei Zeiten, zwei Bedeutungen.",
      "Sprachen verändern sich wie Wasser im Fluss.",
      "Das Herz des Wortes bleibt, aber die Richtung kann sich drehen.",
    ],
    englishLines: [
      "'Fast' in German means: almost.",
      "In English it means: quick.",
      "Two paths, one word — two times, two meanings.",
      "Languages change like water in a river.",
      "The heart of the word stays, but its direction can turn.",
    ],
    vocabulary: [
      { german: "fast", english: "almost (German meaning)" },
      { german: "schnell", english: "fast / quick" },
      { german: "verändern", english: "to change" },
      { german: "Fluss", english: "river" },
      { german: "Richtung", english: "direction" },
    ],
    tasks: [
      "Explain in simple German what 'fast' means in German and in English.",
      "Write your own metaphor for how languages change (for example like trees, cities, or weather).",
      "Choose another word pair (Traum/dream, brav/brave) and describe the difference in meaning.",
    ],
  },
};

