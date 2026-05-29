// src/chapters/appendices/appendixF.ts

import type { Chapter } from "../types";

export const appendixF: Chapter = {
  id: 106,
  kind: "appendix",
  label: "Appendix C",
  title: "30-Day Practice Framework",
  subtitle: "Daily minimal input → structural fluency.",
  summary:
    "This appendix gives you a 30-day training framework. Each day is light but focused: a small input text, structural decoding, a rebuild in your own German, and a short journal response with no English allowed. The framework supplies the structure; you supply (or borrow) the daily input.",
  sections: [
    {
      heading: "C.1 Daily Structure (15–25 Minutes)",
      paragraphs: [
        "The point is consistency, not exhaustion. You follow the same four-phase pattern every day. Over 30 days, the compound effect is huge.",
        "This appendix gives you the template, not the daily content. Use texts from earlier chapters as your daily input — the modules in chapters 1–13 alone give you 13 ready-made input texts, and the example blocks across the book provide many more."
      ],
      exampleBlocks: [
        {
          title: "Daily Session Outline",
          rows: [
            {
              left: "Input (≈ 5 min)",
              right: "Read one short mini-text aloud. Focus on sound and rhythm, not perfection."
            },
            {
              left: "Decode (≈ 5 min)",
              right: "Mark case, verb positions, and any root compounds or prefixes you recognise."
            },
            {
              left: "Build (≈ 5 min)",
              right: "Rewrite the text in simpler or different German while keeping the core idea."
            },
            {
              left: "Output (≈ 5–10 min)",
              right: "Write a short journal response in German. No English words, no translation."
            }
          ]
        }
      ]
    },
    {
      heading: "C.2 Weekly Scaling Tasks",
      paragraphs: [
        "Each week adds one larger challenge. These are not tests; they are demonstrations of growth.",
        "You can spread these tasks across the week or tackle them in one longer session."
      ],
      exampleBlocks: [
        {
          title: "Week-by-Week Focus",
          rows: [
            {
              left: "Week 1",
              right: "Read 3 short texts from earlier chapters. For each: decode, then rebuild it in new German."
            },
            {
              left: "Week 2",
              right: "Choose 10 new roots and build compound families or prefix verb sets from each."
            },
            {
              left: "Week 3",
              right: "Speak aloud for 5 minutes daily on simple topics (day, weather, plans) without planning in English."
            },
            {
              left: "Week 4",
              right: "Write a one-page narrative (or several short texts) entirely in German thought — no English drafting."
            }
          ]
        }
      ]
    },
    {
      heading: "C.3 Turning Practice into Habit",
      paragraphs: [
        "If you complete 30 days, you will notice a different kind of confidence: not ‘I know more words’, but ‘I can move inside the language’.",
        "The workbook does not end. You can loop it again with harder texts, longer journal entries, and more ambitious speaking tasks.",
        "Fluency is not a finish line. It is the feeling that you can keep walking — in German — as far as you like."
      ]
    }
  ]
};
