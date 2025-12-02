// src/chapters/appendices/appendixE.ts

import type { Chapter } from "../types";

export const appendixE: Chapter = {
  id: 105,
  kind: "appendix",
  label: "Appendix E",
  title: "Verb Conjugation Patterns",
  subtitle: "Strong and weak verbs at a glance.",
  summary:
    "This appendix distills the main verb patterns into a quick lookup: weak verbs with their predictable endings, and strong verbs with their vowel tribes. You use it to decode past forms and to group verbs into families.",
  sections: [
    {
      heading: "E.1 Weak Verbs (Regular Path)",
      paragraphs: [
        "Weak verbs are the predictable factory line: they add a dental ending (-t or -te) in the past and perfect tenses, usually without changing the stem vowel.",
        "For most new verbs you encounter, you can safely assume they are weak until proven otherwise.",
        "They are not exciting — but they are safe."
      ],
      exampleBlocks: [
        {
          title: "Weak Verb Pattern",
          rows: [
            { left: "machen", right: "machte · hat gemacht" },
            { left: "leben", right: "lebte · hat gelebt" },
            { left: "kaufen", right: "kaufte · hat gekauft" },
            { left: "lernen", right: "lernte · hat gelernt" },
            { left: "spielen", right: "spielte · hat gespielt" }
          ]
        }
      ]
    },
    {
      heading: "E.2 Strong Verbs (Vowel Mutation Path)",
      paragraphs: [
        "Strong verbs mark tense by changing their stem vowel and forming the participle with ge- + -en.",
        "They look irregular on the surface, but they follow old, systematic patterns — the vowel tribes you met in Chapter 5.",
        "These verbs are the living fossils of the language: English still shows many of the same patterns (sing/sang/sung, drink/drank/drunk)."
      ],
      exampleBlocks: [
        {
          title: "Strong Verb Examples",
          rows: [
            { left: "tragen", right: "trug · hat getragen" },
            { left: "sehen", right: "sah · hat gesehen" },
            { left: "schreiben", right: "schrieb · hat geschrieben" },
            { left: "nehmen", right: "nahm · hat genommen" },
            { left: "finden", right: "fand · hat gefunden" }
          ]
        }
      ]
    },
    {
      heading: "E.3 Weak vs Strong at a Glance",
      paragraphs: [
        "You can usually classify a verb by looking at its past tense:",
        "• If the stem vowel stays the same and you see -te in the simple past → weak.",
        "• If the stem vowel changes and the participle uses ge- + -en → strong.",
        "When in doubt, group new verbs under known patterns from Chapter 5."
      ]
    },
    {
      heading: "E.4 Past Tense Decoder Habit",
      paragraphs: [
        "When you read and meet a new past-tense form:",
        "1) Identify the infinitive (dictionary form).",
        "2) Note whether the stem vowel changed.",
        "3) Check whether the participle uses ge- + -t (weak) or ge- + -en (strong).",
        "This two-second scan trains your brain to see verbs as patterns, not isolated facts."
      ]
    }
  ]
};
