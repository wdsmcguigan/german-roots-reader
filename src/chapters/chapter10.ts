// src/chapters/chapter09.ts

import type { Chapter } from "./types";

export const chapter10: Chapter = {
  id: 10,
  title: "When Family Drifts",
  subtitle: "Where shared cognates wander off into different meanings.",
  summary:
    "English and German were once one language. Then time pushed them in different directions — narrowing some meanings, broadening others, borrowing from French and Latin, shifting emotional weight. This chapter teaches you how meanings drift and gives you a watchlist of the false friends those drifts created. False friends stop being traps and become historical clues.",
  sections: [
    {
      heading: "10.1 Why Familiarity Lies",
      paragraphs: [
        "Up to now, German has mostly rewarded your instincts. Roots matched, sound shifts made sense, compounds felt logical.",
        "False friends are the next test: words that look like English but are not. Words that used to match until meaning wandered. Words that share ancestry, but not destiny.",
        "You do not beat false friends by brute-force memorisation. You beat them by understanding how languages drift apart — and once you see drift as a process, the gallery of false friends turns from a minefield into a kind of history book."
      ]
    },
    {
      heading: "10.2 How Meanings Drift",
      paragraphs: [
        "Drift is not chaos. It usually follows a few recognisable paths. Four mechanisms account for almost every divergence you will meet: narrowing, broadening, emotional shift, and borrowing."
      ],
      exampleBlocks: [
        {
          title: "1) Narrowing — Meaning Becomes More Specific",
          rows: [
            { left: "English: meat (older)", right: "food in general" },
            { left: "English: meat (now)", right: "animal flesh only" },
            { left: "German: Gift (older)", right: "something given" },
            { left: "German: Gift (now)", right: "poison" }
          ]
        },
        {
          title: "2) Broadening — One Becomes Many",
          rows: [
            { left: "German: fahren", right: "originally ‘to travel’ → now any kind of going by vehicle" },
            { left: "English: dog", right: "once one specific breed → now all dogs" }
          ]
        },
        {
          title: "3) Emotional Shift — Melioration & Pejoration",
          rows: [
            { left: "stolz", right: "proud; positive in German, sometimes arrogant in English feel" },
            { left: "frech", right: "cheeky; playful in German, often rude in English tone" }
          ]
        },
        {
          title: "4) Borrowing — One Side Picks Up a Replacement",
          rows: [
            { left: "German: klug", right: "clever, intelligent in a steady, capable way" },
            { left: "English: clever", right: "shifted toward ingenuity, trickiness, ‘life-hack’ smart" },
            { left: "Why?", right: "English absorbed huge amounts of French and Latin vocabulary; German kept more of the original Germanic sense. The result: related words that no longer feel related at all." }
          ]
        }
      ]
    },
    {
      heading: "10.3 Same Root, Different Destiny — The False Friend Gallery",
      paragraphs: [
        "Most false friends fall into a few patterns, and the patterns themselves are more interesting than the trap-list they produce.",
        "Bekommen is the headline case for English speakers. It looks exactly like ‘become,’ shares the same Germanic root, and means something entirely different: to receive, to get. The slip is so common that German learners' forums have whole threads about the day someone confidently told their host family ‘Ich bekomme ein Baby’ meaning to say ‘I'm becoming a parent’ and accidentally announced a pregnancy.",
        "The trap exists because both words descend from be- + kommen, ‘to come to’ — and English narrowed it toward identity change while German kept it on the older sense of something arriving. Every entry in the gallery below has a story like that underneath. The cognates are the surface; the centuries are what made them diverge."
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
        },
        {
          title: "Core Watchlist — The False Friends You’ll Actually Meet",
          rows: [
            { left: "bekommen", right: "to receive — NOT ‘to become’" },
            { left: "bald", right: "soon — NOT ‘bald (no hair)’" },
            { left: "Chef", right: "boss, manager — NOT ‘chef/cook’" },
            { left: "Gift", right: "poison — NOT ‘present’" },
            { left: "fast", right: "almost — NOT ‘fast/quick’" }
          ],
          moreTitle: "More False Friends",
          moreRows: [
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
      heading: "10.4 Brief: An Elegant Drift",
      paragraphs: [
        "Brief is the most elegant case. It’s the same Latin word as English ‘brief’ — brevis, short — but the two languages took it in opposite directions.",
        "English kept the adjective and used it for length: a brief meeting. German took the noun and used it for the most common short written thing in medieval life: a short official note. Over centuries the note grew longer, the meaning stayed ‘letter’, and Brief in German now means any piece of mail at all.",
        "Same word, same root, two completely different daily lives."
      ]
    },
    {
      heading: "10.5 Predicting Direction: Concrete vs Abstract",
      paragraphs: [
        "A rough but useful rule of thumb:",
        "• German tends to stay more concrete and structural.",
        "• English tends to float upward into abstraction and metaphor.",
        "This is not always true, but it helps you guess how meaning may have shifted.",
        "Counter-examples exist — Geist means both ghost and intellectual spirit, while English ‘mind’ has narrowed to mostly cognition. Treat the rule of thumb as a starting guess, not a law."
      ],
      exampleBlocks: [
        {
          title: "Anchored vs Floating",
          rows: [
            { left: "Boden (German)", right: "ground, floor — physical surface" },
            { left: "ground (English)", right: "physical ground, but also basis, reason, justification" },
            { left: "Sinn (German)", right: "sense, meaning; concrete mental orientation" }
          ],
          moreTitle: "More Examples",
          moreRows: [
            { left: "sense (English)", right: "sense, feeling, logical meaning — more abstract" },
            { left: "Geist (German)", right: "spirit, ghost; also mindset" },
            { left: "ghost/spirit (English)", right: "mostly supernatural or metaphorical" },
            { left: "schlimm (German)", right: "bad, terrible (NOT: slim)" },
            { left: "Traum (German)", right: "dream; often deeper, more emotionally weighted than English ‘dream’" }
          ]
        }
      ]
    },
    {
      heading: "10.6 Closing Insight for Chapter 10",
      paragraphs: [
        "False friends are not bugs in the system. They are history lessons wearing a disguise.",
        "Once you see why meanings diverge — narrowing, broadening, emotional shift, borrowing — vocabulary stops being a wall of arbitrary facts. You are no longer just memorising that ‘fast’ or ‘Gift’ mean something different. You are tracing the path that took them there.",
        "You stop trusting the English look-alike and start asking: how did this word travel here? That is the shift from learner to linguistic observer — from surviving German to understanding how it thinks.",
        "In the next chapter we take that observer mode one step further: we stop translating altogether and start reading German as direct experience."
      ]
    }
  ],
  module: {
    level: "A2",
    title: "Wenn Verwandte Auseinandergehen",
    germanLines: [
      "Heute bekomme ich ein Paket. Das bedeutet: Ich erhalte etwas.",
      "Ich werde nicht jemand anderes — „bekommen“ heißt nicht „become“.",
      "Das deutsche Wort „Gift“ bedeutet nicht „Geschenk“ — es bedeutet wirklich: Gift, etwas Gefährliches.",
      "Sprachen verändern sich wie Wasser im Fluss.",
      "Das Herz des Wortes bleibt, aber die Richtung kann sich drehen."
    ],
    englishLines: [
      "Today I get a package. That means: I receive something.",
      "I do not become someone else — “bekommen” does not mean “become.”",
      "The German word “Gift” does not mean “present” — it really means: poison, something dangerous.",
      "Languages change like water in a river.",
      "The heart of the word stays, but its direction can turn."
    ],
    vocabulary: [
      { german: "bekommen", english: "to receive (NOT: to become)" },
      { german: "das Gift", english: "poison (NOT: present)" },
      { german: "bald", english: "soon (NOT: bald/hairless)" },
      { german: "der Chef", english: "boss (NOT: cook)" },
      { german: "fast", english: "almost (NOT: quick)" },
      { german: "brav", english: "well-behaved (NOT: brave)" },
      { german: "aktuell", english: "current (NOT: actual)" },
      { german: "eventuell", english: "possibly (NOT: eventually)" },
      { german: "die Fabrik", english: "factory (NOT: fabric)" },
      { german: "der Traum", english: "dream (often deeper than English ‘dream’)" },
      { german: "klug", english: "clever, intelligent (steadier than English ‘clever’)" },
      { german: "das Tier", english: "animal (cf. English ‘deer’, narrowed)" },
      { german: "schlimm", english: "bad, terrible (NOT: slim)" },
      { german: "der Fluss", english: "river" },
      { german: "die Richtung", english: "direction" }
    ],
    tasks: [
      "Write two correct sentences with bekommen in the present tense (for example: Ich bekomme eine Nachricht. Wir bekommen Besuch.).",
      "Write one deliberately wrong sentence with a false friend (for example using Gift as ‘present’), then correct it in German and English.",
      "Choose a drift pair (Traum/dream, brav/brave, klug/clever, Tier/deer) and describe the difference in meaning in 2–3 German sentences.",
      "Make a personal mini-list of 3–5 false friends you want to remember and write one example sentence for each.",
      "Optional: Find or write a short paragraph (3–4 sentences) that uses three false friends correctly. The challenge: a non-learner skimming it might misread the meaning. Annotate which words are the traps."
    ],
    tasksGerman: [
      "Schreibe zwei korrekte Sätze mit bekommen im Präsens (zum Beispiel: Ich bekomme eine Nachricht. Wir bekommen Besuch.).",
      "Schreibe einen absichtlich falschen Satz mit einem falschen Freund (zum Beispiel Gift als ‚Geschenk'), und korrigiere ihn dann auf Deutsch und Englisch.",
      "Wähle ein Drift-Paar (Traum/dream, brav/brave, klug/clever, Tier/deer) und beschreibe den Bedeutungsunterschied in 2–3 deutschen Sätzen.",
      "Erstelle eine persönliche Mini-Liste von 3–5 falschen Freunden, die du dir merken möchtest, und schreibe für jeden einen Beispielsatz.",
      "Optional: Finde oder schreibe einen kurzen Absatz (3–4 Sätze), in dem drei falsche Freunde korrekt verwendet werden. Die Herausforderung: Wer den Text schnell liest, könnte die Bedeutung falsch verstehen. Markiere die Stolperwörter."
    ]
  }
};
