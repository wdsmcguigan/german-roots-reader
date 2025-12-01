// src/chapters/chapter05.ts

import type { Chapter } from "./types";

export const chapter05: Chapter = {
  id: 5,
  title: "Strong vs Weak Verbs",
  subtitle: "Vowel tribes and simple past forms.",
  summary:
    "German verbs come in two main patterns: weak (regular) and strong (vowel-changing). Here you meet them in a simple, emotional context instead of a dry table.",
  sections: [
    {
      heading: "5.1 Weak Verbs as the Default Pattern",
      paragraphs: [
        "Weak verbs add a dental ending (-t or -et) in the past and perfect tenses. For most new verbs you meet, you can assume they are weak until proven otherwise.",
        "The book emphasises this as the 'boring but safe' pattern — your mental baseline.",
      ],
    },
    {
      heading: "5.2 Strong Verbs as Vowel Tribes",
      paragraphs: [
        "Strong verbs change their stem vowel to mark tense: singen–sang–gesungen, trinken–trank–getrunken. Instead of memorising isolated triples, you group them into tribes by vowel pattern.",
        "The emotional context of the reading text (singing in a park, voice going high and low) helps you attach feelings and images to otherwise dry forms.",
      ],
    },
    {
      heading: "5.3 Mixing Strong and Weak in Real Sentences",
      paragraphs: [
        "You practise building sentences that combine strong and weak verbs, so the difference becomes intuitive: a strong kick inside a mostly regular sentence.",
      ],
    },
  ],
  module: {
    level: "A1–A2",
    title: "Verben Haben Kraft",
    germanLines: [
      "Ich singe ein Lied.",
      "Gestern sang ich laut im Park.",
      "Heute habe ich schon gesungen.",
      "Meine Stimme geht hoch und tief.",
      "Wörter tanzen, wenn Verben sich ändern.",
    ],
    englishLines: [
      "I sing a song.",
      "Yesterday I sang loudly in the park.",
      "Today I have already sung.",
      "My voice goes high and low.",
      "Words dance when verbs change.",
    ],
    vocabulary: [
      { german: "singe", english: "I sing" },
      { german: "sang", english: "sang (simple past)" },
      { german: "gesungen", english: "sung (past participle)" },
      { german: "Stimme", english: "voice" },
      { german: "tanzen", english: "to dance" },
    ],
    tasks: [
      "Conjugate singen in ich-form: ich singe, ich sang, ich habe gesungen.",
      "Write three parallel sentences with trinken (trinke, trank, habe getrunken).",
      "Write one sentence that uses a strong verb and a weak verb together.",
    ],
  },
};

