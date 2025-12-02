// src/chapters/appendices/appendixD.ts

import type { Chapter } from "../types";

export const appendixD: Chapter = {
  id: 104,
  kind: "appendix",
  label: "Appendix D",
  title: "False Friend Quick Chart",
  subtitle: "Reference for when meaning feels “too obvious”.",
  summary:
    "False friends are pairs that look reassuringly familiar but mean something different. This appendix gives you a fast way to check whether your instinct is correct or about to betray you.",
  sections: [
    {
      heading: "D.1 Why This Chart Exists",
      paragraphs: [
        "Your brain loves shortcuts. When a German word looks exactly like an English one, it rushes in with a guess.",
        "Most of the time that guess is fine. Sometimes it is utterly wrong. That is a false friend.",
        "This chart is not about fear. It is about awareness. If a word looks suspiciously easy, you pause, check here, and confirm the history before you trust it."
      ]
    },
    {
      heading: "D.2 High-Risk Everyday False Friends",
      paragraphs: [
        "These are words that appear early in textbooks and real life — and that cause classic misunderstandings.",
        "Use this section as a quick sanity check when you are reading or writing."
      ],
      exampleBlocks: [
        {
          title: "False Friend Snapshot",
          rows: [
            { left: "bekommen", right: "NOT become → means: to receive" },
            { left: "bald", right: "NOT bald → means: soon" },
            { left: "Chef", right: "NOT chef (cook) → means: boss / manager" },
            { left: "Gift", right: "NOT gift (present) → means: poison" },
            { left: "Rat", right: "NOT rat (animal) → means: advice, council" },
            { left: "aktuell", right: "NOT actual → means: current, up-to-date" },
            { left: "eventuell", right: "NOT eventually → means: possibly, perhaps" },
            { left: "Fabrik", right: "NOT fabric → means: factory" }
          ]
        }
      ]
    },
    {
      heading: "D.3 Rule of Thumb",
      paragraphs: [
        "If a German word looks incredibly easy and you feel zero resistance:",
        "1) Pause for one second.",
        "2) Ask yourself: have I seen this pair confirmed before?",
        "3) If not, treat it as a suspect and check this chart or a dictionary.",
        "That tiny pause will save you from many extremely confident misunderstandings."
      ]
    }
  ]
};
