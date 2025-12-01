// src/chapters/chapter08.ts

import type { Chapter } from "./types";

export const chapter08: Chapter = {
  id: 8,
  title: "False Friends",
  subtitle: "bekommen, Gift & other traps.",
  summary:
    "Some German words look like English but mean something very different. Instead of fearing them, you learn to see the history behind the shift.",
  sections: [
    {
      heading: "8.1 Why False Friends Exist",
      paragraphs: [
        "Sometimes meanings drift apart in related languages. Sometimes one language borrows a word and uses it differently. The result: pairs that look safe but are semantic traps.",
      ],
    },
    {
      heading: "8.2 High-Risk Everyday False Friends",
      paragraphs: [
        "This chapter focuses on words you actually see in beginner texts: bekommen, bald, Chef, Gift, brav. Each one gets a mini story to make the 'wrong' English meaning feel ridiculous.",
      ],
    },
    {
      heading: "8.3 Building Your Personal Watchlist",
      paragraphs: [
        "Instead of memorising a giant table, you create a compact personal list of 10–20 false friends that actually show up in your reading. You revisit them regularly until the correct meaning feels natural.",
      ],
    },
  ],
  module: {
    level: "A1–A2",
    title: "Wörter Täuschen Manchmal",
    germanLines: [
      "Heute bekomme ich ein Paket.",
      "Das bedeutet: Ich erhalte etwas.",
      "Ich werde nicht jemand anderes — es heißt nicht 'become'.",
      "'Gift' heißt nicht Geschenk, es heißt Gift = Poison.",
      "Manche Wörter sehen gleich aus, aber meinen etwas anderes.",
    ],
    englishLines: [
      "Today I get a package.",
      "That means: I receive something.",
      "I do not become someone else — it does not mean 'become'.",
      "'Gift' does not mean present, it means poison.",
      "Some words look the same, but mean something different.",
    ],
    vocabulary: [
      { german: "bekommen", english: "to receive" },
      { german: "erhalten", english: "to receive / obtain" },
      { german: "Gift", english: "poison" },
      { german: "Paket", english: "package, parcel" },
      { german: "anders", english: "different" },
    ],
    tasks: [
      "Write two correct sentences with bekommen in the present tense.",
      "Write one deliberately wrong sentence with a false friend (for example Gift as 'present') and then correct it.",
      "Make a personal mini-list of 3 false friends you want to remember.",
    ],
  },
};

