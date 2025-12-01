// src/chapters/chapter08.ts

import type { Chapter } from "./types";

export const chapter08: Chapter = {
  id: 8,
  title: "False Friends",
  subtitle: "bekommen, Gift & other traps.",
  summary:
    "Some German words look like English but mean something very different. Instead of fearing them, you learn why meanings drift, how false friends are born, and how to build a personal watchlist so they become historical clues instead of traps.",
  sections: [
    {
      heading: "8.1 When Familiarity Lies to You",
      paragraphs: [
        "Up to now, German has mostly rewarded your instincts. Roots matched, sound shifts made sense, compounds felt logical.",
        "False friends are the next test: words that look like English but are not. Words that used to match until meaning wandered. Words that share ancestry, but not destiny.",
        "You do not beat false friends by brute-force memorisation. You beat them by understanding how languages drift apart."
      ]
    },
    {
      heading: "8.2 Why False Friends Exist",
      paragraphs: [
        "Every word carries history. English and German split, evolved, borrowed from French and Latin, simplified in different ways and drifted in meaning.",
        "Some pairs stayed close: Haus/house, kalt/cold, Wasser/water. Others wandered off:",
      ],
      exampleBlocks: [
        {
          title: "Same Roots, Different Destinies",
          rows: [
            { left: "bekommen", right: "looks like ‘become’ → actually ‘to receive’" },
            { left: "bald", right: "looks like ‘bald’ → actually ‘soon’" },
            { left: "Rat", right: "looks like ‘rat’ → actually ‘advice; council’" }
          ]
        }
      ]
    },
    {
      heading: "8.3 The Five Types of False Friends",
      paragraphs: [
        "False friends are easier to tame when you know what kind of trick they are playing. Most of them fall into a few patterns."
      ],
      exampleBlocks: [
        {
          title: "1) Ancient Cognates with Diverged Meaning",
          rows: [
            { left: "Gift (German)", right: "poison — NOT a present" },
            { left: "gift (English)", right: "present — generous, not deadly" }
          ]
        },
        {
          title: "2) Borrowed Words That Shifted",
          rows: [
            { left: "Chef (German)", right: "boss, manager — hierarchy" },
            { left: "chef (English)", right: "head cook — kitchen" }
          ]
        },
        {
          title: "3) Words That Shrunk or Expanded",
          rows: [
            { left: "brav (German)", right: "well-behaved, good" },
            { left: "brave (English)", right: "courageous, fearless" }
          ]
        },
        {
          title: "4) Older Meanings vs New Meanings",
          rows: [
            { left: "fast (German)", right: "almost, nearly" },
            { left: "fast (English)", right: "quick" }
          ]
        },
        {
          title: "5) Pure Coincidence",
          rows: [
            { left: "Brief (German)", right: "letter (mail) — not ‘brief’/short" },
            { left: "Lokomotive (German)", right: "locomotive — not ‘location’" }
          ]
        }
      ]
    },
    {
      heading: "8.4 High-Risk Everyday False Friends",
      paragraphs: [
        "This book focuses on false friends that actually show up at beginner and lower-intermediate level. These are the ones that can genuinely confuse you in real text or speech.",
        "Read the table, then say the real meanings out loud once, with a clear sentence in your head."
      ],
      exampleBlocks: [
        {
          title: "Core Watchlist",
          rows: [
            { left: "bekommen", right: "to receive — NOT ‘to become’" },
            { left: "bald", right: "soon — NOT ‘bald (no hair)’" },
            { left: "Chef", right: "boss, manager — NOT ‘chef/cook’" },
            { left: "Gift", right: "poison — NOT ‘present’" },
            { left: "fast", right: "almost — NOT ‘fast/quick’" },
            { left: "brav", right: "well-behaved — NOT ‘brave’" },
            { left: "aktuell", right: "current, up-to-date — NOT ‘actual’" },
            { left: "eventuell", right: "possibly, maybe — NOT ‘eventually’" },
            { left: "Fabrik", right: "factory — NOT ‘fabric’" },
            { left: "großartig", right: "magnificent, fantastic — NOT ‘gross’" }
          ]
        }
      ]
    },
    {
      heading: "8.5 Why Learning These Makes You Smarter, Not Cautious",
      paragraphs: [
        "False friends are not there to humiliate you. They are fossils showing where English and German split paths.",
        "When you see eventuell and your brain screams ‘eventually’, you pause and remember: German often kept the older, more literal meaning. English sometimes slid into something metaphorical or shifted entirely.",
        "Over time, your instinct rewires. You stop trusting the English look-alike and start asking: how did this word travel here?"
      ]
    },
    {
      heading: "8.6 Exercises: Correct the Lies",
      paragraphs: [
        "Now you train your brain to spot the trap and replace it with the correct meaning. Don’t rush. Focus on the feeling of correction."
      ],
      exampleBlocks: [
        {
          title: "A) Fix the Sentence in Your Head",
          rows: [
            {
              left: "Ich bekomme morgen ein Paket.",
              right: "I receive a package tomorrow. (NOT: I become a package.)"
            },
            {
              left: "Das ist vielleicht irgendwann eventuell möglich.",
              right: "That is possibly maybe doable someday. (eventuell = possibly, not eventually)"
            },
            {
              left: "Der aktuelle Plan ist besser.",
              right: "The current plan is better. (NOT: the ‘actual real’ plan.)"
            },
            {
              left: "Er hat mir einen guten Rat gegeben.",
              right: "He gave me good advice. (Rat = advice, NOT a small animal.)"
            },
            {
              left: "Das Essen war Gift.",
              right: "The food was poison. (NOT: a gift.)"
            }
          ]
        },
        {
          title: "B) Quick Recognition Drill",
          rows: [
            { left: "brav", right: "well-behaved, good" },
            { left: "schlimm", right: "bad, terrible (NOT ‘slim’)" },
            { left: "großartig", right: "wonderful, magnificent" },
            { left: "aktuell", right: "current" },
            { left: "Fabrik", right: "factory" }
          ]
        }
      ]
    },
    {
      heading: "8.7 Closing Insight for Chapter 8",
      paragraphs: [
        "False friends are not bugs in the system. They are history lessons wearing a disguise.",
        "Once you see why meanings diverge — drift, borrowing, metaphor — these words stop deceiving you. They become markers: signs that tell you how English and German parted ways.",
        "You are no longer afraid of the familiar-looking word. You are alert, curious, and starting to think like a historical linguist in training."
      ]
    }
  ],
  module: {
    level: "A1–A2",
    title: "Wörter Täuschen Manchmal",
    germanLines: [
      "Heute bekomme ich ein Paket.",
      "Das bedeutet: Ich erhalte etwas.",
      "Ich werde nicht jemand anderes — es heißt nicht „become“.",
      "„Gift“ heißt nicht Geschenk, es heißt Gift = Poison.",
      "Manche Wörter sehen gleich aus, aber meinen etwas anderes."
    ],
    englishLines: [
      "Today I get a package.",
      "That means: I receive something.",
      "I do not become someone else — it does not mean “become.”",
      "“Gift” does not mean present, it means poison.",
      "Some words look the same, but mean something different."
    ],
    vocabulary: [
      { german: "bekommen", english: "to receive (NOT: to become)" },
      { german: "erhalten", english: "to receive, obtain" },
      { german: "das Gift", english: "poison" },
      { german: "das Paket", english: "package, parcel" },
      { german: "anders", english: "different" }
    ],
    tasks: [
      "Write two correct sentences with bekommen in the present tense (for example: Ich bekomme eine Nachricht. Wir bekommen Besuch.).",
      "Write one deliberately wrong sentence with a false friend (for example using Gift as ‘present’), then correct it in German and English.",
      "Make a personal mini-list of 3–5 false friends you want to remember and write one example sentence for each.",
      "Optional: Write one true and one false sentence, then correct the false one yourself. Example: Falsch: Heute esse ich Gift im Café. Richtig: Heute esse ich Kuchen im Café."
    ]
  }
};
