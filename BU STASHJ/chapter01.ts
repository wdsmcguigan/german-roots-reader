// src/chapters/chapter01.ts
import type { Chapter } from "./types";

export const chapter01: Chapter = 

{
  id: 1,
  title: "Shared Roots",
  subtitle: "German & English — one origin, two branches.",
  summary:
    "German and English are not strangers. They are siblings that grew apart over time. This chapter teaches you to see the shared ancestry instead of memorising isolated words.",
  sections: [
    {
      heading: "1.1 Why German Already Lives in Your English",
      paragraphs: [
        "English is not a pure Latin or French language with random German on top. It is a Germanic language with heavy Romance influence. That means a large part of your mental vocabulary is already built from the same roots as German.",
        "When you see Wasser, Hand, Haus, you are not learning something alien. You are seeing an older, less disguised version of water, hand, house. Once you see this, vocabulary feels less like a list of strangers and more like a family reunion.",
        "The mindset shift for this chapter: you are not starting from zero. You already carry hundreds of German-friendly patterns in your head. We are just switching the lights on."
      ],
    },
    {
      heading: "1.2 The Germanic Family Tree (Minimal Version)",
      paragraphs: [
        "Both German and English are children of Proto-Germanic, an earlier language that left no direct recordings but can be reconstructed from patterns. One branch goes through Old English to Modern English. Another branch goes through Old High German to Modern German.",
        "You do not need historical detail here. You only need one idea: if two words share shape, sound and meaning, there is usually a shared ancestor. This book constantly exploits that fact."
      ],
    },
    {
      heading: "1.3 Cognates as Cheat Codes",
      paragraphs: [
        "Cognates are words that share a common origin. In this course, cognates are treated as cheat codes. Instead of ‘learning’ them, you simply notice them and let your brain connect the dots: Name–name, Hand–hand, Wasser–water.",
        "You will sometimes meet ‘false friends’ later — words that look similar but mean something different. For Chapter 1, we stay with the friendly ones: clear, safe cognates that build confidence."
      ],
    },
    {
      heading: "1.4 Micro-Skill: How to Spot a Cognate",
      paragraphs: [
        "You train a small visual habit: 1) Look at the German word slowly. 2) Strip away endings wie -er, -en, -e in your head. 3) Ask: if I change one or two sounds, do I recognise an English word?",
        "Example: Wasser → wass-er → ‘wass’ → imagine w→v shift backwards and double s→t: water. Name → same spelling, same meaning. Hand → same spelling, same meaning. This is what we want you to see automatically.",
        "You do not have to be right every time. Even ‘failed’ guesses train the pattern detector deep in your brain."
      ],
    },
    {
      heading: "1.5 Practice Routine for This Chapter",
      paragraphs: [
        "For beginners, a simple routine is enough: 1) Read the German text aloud once. 2) Underline or highlight all words that look like English. 3) Check the English version. 4) Rewrite one or two sentences in your own German.",
        "If you repeat this routine across the book, your eye for roots will become faster and more accurate than any vocabulary list."
      ],
    },
  ],
  module: {
    level: "A1",
    title: "Zwei Sprachen, Ein Ursprung",
    germanLines: [
      "Deutsch und Englisch sind alte Freunde.",
      "Sie kommen aus derselben Sprache-Familie.",
      "Viele Wörter sehen ähnlich aus: Wasser, Hand, Haus, Name.",
      "Manchmal sind sie genau gleich, manchmal ein bisschen anders.",
      "Wenn wir langsam lesen, erkennen wir die Verwandtschaft.",
      "Unser Gehirn kennt die Muster schon. Wir schalten nur das Licht an."
    ],
    englishLines: [
      "German and English are old friends.",
      "They come from the same language family.",
      "Many words look similar: water, hand, house, name.",
      "Sometimes they are exactly the same, sometimes a little different.",
      "When we read slowly, we recognise the relationship.",
      "Our brain already knows the patterns. We are just switching the light on."
    ],
    vocabulary: [
      { german: "die Sprache", english: "language" },
      { german: "die Familie", english: "family" },
      { german: "die Sprache-Familie", english: "language family" },
      { german: "ähnlich", english: "similar" },
      { german: "die Verwandtschaft", english: "relationship, kinship" },
      { german: "erkennen", english: "to recognise" },
      { german: "das Muster", english: "pattern" }
    ],
    tasks: [
      "Mark all clear cognates in the German text (Wasser, Hand, Haus, Name, etc.). Add at least two more that you notice yourself.",
      "Write a two-line mini-text in German that uses at least three cognates (for example: Haus, Name, Familie, Musik, Hotel). Keep the grammar simple.",
      "Choose one sentence from the German text and rewrite it with different words but the same idea. Do this in German first, then check with English if you need to.",
      "In your notes, make a small list with two columns: „Deutsch“ and „Englisch“. Add 5–10 new cognate pairs that you find in other chapters or in the wild."
    ],
  },
};
