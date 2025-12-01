// src/chapters/chapter12.ts

import type { Chapter } from "./types";

export const chapter12: Chapter = {
  id: 12,
  title: "Decode → Build → Express",
  subtitle: "From understanding to free expression.",
  summary:
    "In the final chapter you practice the full cycle: read, understand, rebuild the meaning in new German — and then extend it with your own voice.",
  sections: [
    {
      heading: "12.1 The Three-Step Cycle",
      paragraphs: [
        "You repeatedly run the same loop: (1) decode a short German text, (2) rebuild its meaning in simpler German, (3) extend or personalise it.",
      ],
    },
    {
      heading: "12.2 From Copying to Creating",
      paragraphs: [
        "At first you stay very close to the original sentences. Over time you start taking more risks: changing perspective, time, mood, or adding details from your own life.",
      ],
    },
    {
      heading: "12.3 Looking Back at the Journey",
      paragraphs: [
        "The chapter closes by inviting you to write a short reflection in German about your learning so far. The point is not flawless grammar but the recognition: I can now think, feel and tell stories in this language.",
      ],
    },
  ],
  module: {
    level: "A2",
    title: "Verstehen und Gestalten",
    germanLines: [
      "Ich lese einen kurzen Text.",
      "Dann sage ich ihn mit anderen Wörtern neu.",
      "Ich baue Sätze wie kleine Häuser.",
      "Stein für Stein, Wort für Wort.",
      "So wird Verständnis zu Sprache.",
    ],
    englishLines: [
      "I read a short text.",
      "Then I say it again with different words.",
      "I build sentences like small houses.",
      "Stone by stone, word by word.",
      "In this way, understanding becomes language.",
    ],
    vocabulary: [
      { german: "kurz", english: "short" },
      { german: "mit anderen Wörtern", english: "with different words" },
      { german: "bauen", english: "to build" },
      { german: "Stein", english: "stone" },
      { german: "Verständnis", english: "understanding" },
    ],
    tasks: [
      "Choose one earlier module text and summarise it in 2–3 German sentences.",
      "Rewrite the text on this page in your own German words, keeping the same idea.",
      "Write a final paragraph about your German journey so far — entirely in German.",
    ],
  },
};

