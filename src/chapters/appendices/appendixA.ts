// src/chapters/appendices/appendixA.ts

import type { Chapter } from "../types";

export const appendixA: Chapter = {
  id: 101,
  kind: "appendix",
  label: "Appendix A",
  title: "Sound Shift Reference",
  subtitle: "Quick look-up for the main consonant patterns.",
  summary:
    "A compact reference for the most important German–English sound correspondences you meet in the main chapters.",
  sections: [
    {
      heading: "A.1 Core Consonant Shifts",
      paragraphs: [
        "This section lists the most common consonant pairs between German and English for Germanic vocabulary: p ↔ f, t ↔ th, k ↔ h, d ↔ t, b ↔ p.",
        "Each pair is illustrated with a handful of examples (for example: Pfeffer/pepper, Vater/father, zwei/two, kalt/cold, machen/make).",
      ],
    },
    {
      heading: "A.2 How to Use This Appendix",
      paragraphs: [
        "Do not try to memorise the list in one sitting. Instead, keep this page open when you feel 'this looks familiar, but not quite'. See if one of the standard shifts explains the difference.",
      ],
    },
  ],
};

