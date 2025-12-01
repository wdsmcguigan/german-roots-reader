// src/chapters/chapter11.ts

import type { Chapter } from "./types";

export const chapter11: Chapter = {
  id: 11,
  title: "Thought Translation Training",
  subtitle: "Thinking directly in German structures.",
  summary:
    "Instead of translating English sentences, you begin from the idea and choose German forms like mir ist kalt, ich habe Hunger, das gefällt mir.",
  sections: [
    {
      heading: "11.1 From English Sentences to German Thoughts",
      paragraphs: [
        "In many textbooks you start with an English sentence and then 'translate' it. Here you reverse that. You start with a raw mental image or feeling and ask: how would a German speaker normally phrase this?",
      ],
    },
    {
      heading: "11.2 Common Pattern Shifts",
      paragraphs: [
        "You practise patterns like mir ist kalt (to me is cold) instead of 'I am cold', ich habe Hunger instead of 'I am hungry', es gibt instead of 'there is'. These break English habits and force you into genuinely German structures.",
      ],
    },
    {
      heading: "11.3 Inner Monologue Exercises",
      paragraphs: [
        "A key exercise in this chapter is writing a short German inner monologue with no English allowed. The aim is not perfection but the feeling that German can carry your private thoughts, not just classroom dialogues.",
      ],
    },
  ],
  module: {
    level: "A2",
    title: "Ohne Umweg Durch Englisch",
    germanLines: [
      "Ich denke heute direkt in Deutsch.",
      "Keine Übersetzung, kein Umweg.",
      "Ich beschreibe nur, was ich sehe und fühle.",
      "Der Himmel ist hell, und mein Kopf ist ruhig.",
      "Worte kommen langsam, aber sie kommen von innen.",
    ],
    englishLines: [
      "Today I think directly in German.",
      "No translation, no detour.",
      "I simply describe what I see and feel.",
      "The sky is bright, and my mind is calm.",
      "Words come slowly, but they come from inside.",
    ],
    vocabulary: [
      { german: "Umweg", english: "detour" },
      { german: "beschreiben", english: "to describe" },
      { german: "fühlen", english: "to feel" },
      { german: "ruhig", english: "calm" },
      { german: "von innen", english: "from inside" },
    ],
    tasks: [
      "Write your own 4–6 line inner monologue in German — no English allowed.",
      "Rewrite your monologue in the third person (er/sie/man).",
      "Choose one feeling (müde, neugierig, nervös) and describe it with a picture instead of an abstract word.",
    ],
  },
};

