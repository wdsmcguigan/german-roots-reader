// src/chapters/appendices/appendixC.ts

import type { Chapter } from "../types";

export const appendixC: Chapter = {
  id: 103,
  kind: "appendix",
  label: "Appendix C",
  title: "Cognate Finder Table",
  subtitle: "Spot English inside German like fossils in stone.",
  summary:
    "This appendix collects clean cognates — words that share Germanic ancestry and still show it in form and meaning. You use it to train your eye, not to cram lists.",
  sections: [
    {
      heading: "C.1 How to Use the Cognate Finder",
      paragraphs: [
        "Cognates are proof that German and English are siblings, not strangers. They share an ancestor, and the resemblance remains visible in both languages.",
        "Use this table when you feel a word is almost obvious but you’re not sure. Check whether the similarity is real and meaningful — or just coincidence.",
        "Over time, you will rely on this appendix less because your eyes and ears will automatically flag these family resemblances."
      ]
    },
    {
      heading: "C.2 Sample Cognate Pairs",
      paragraphs: [
        "These examples show classic German–English connections. The goal is to see patterns: sound shifts, preserved roots, and the occasional semantic drift.",
        "You can annotate this table with your own discoveries from real texts."
      ],
      exampleBlocks: [
        {
          title: "Core Cognates",
          rows: [
            { left: "Hand", right: "hand — identical lineage" },
            { left: "Wasser", right: "water — sound shift ss → t in English" },
            { left: "kalt", right: "cold — same root, k ↔ c/k; vowel drift" },
            { left: "finden", right: "find — preserved verb root" },
            { left: "Bruder", right: "brother — d/b shift fossil and extra syllable" },
            { left: "Licht", right: "light — direct cognate" },
            { left: "Tochter", right: "daughter — vowel aging and extra consonant" },
            { left: "Buch", right: "book — same core, minor vowel variation" },
            { left: "Zeit", right: "tide (archaic English) — semantic drift over time" }
          ]
        }
      ]
    },
    {
      heading: "C.3 Training Your Instinct",
      paragraphs: [
        "When you meet a suspiciously familiar word, pause for two seconds.",
        "Ask: does it match in sound and meaning? Can a standard sound shift explain the difference? If yes — it is probably a cognate.",
        "You are not memorising these pairs. You are calibrating a radar that will keep working long after you close the book."
      ]
    }
  ]
};
