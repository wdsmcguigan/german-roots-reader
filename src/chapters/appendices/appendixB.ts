// src/chapters/appendices/appendixB.ts

import type { Chapter } from "../types";

export const appendixB: Chapter = {
  id: 102,
  kind: "appendix",
  label: "Appendix B",
  title: "Prefix & Suffix Library",
  subtitle: "The power-tools of meaning transformation.",
  summary:
    "Prefixes and suffixes are the engineering layer of German. Once you know what they usually do, you stop guessing and start decoding — and you can build new words with confidence.",
  sections: [
    {
      heading: "B.1 Prefix Function Map",
      paragraphs: [
        "German prefixes do not just ‘decorate’ verbs. They redirect meaning: inward, outward, apart, completed, wrong, achieved.",
        "You do not need to memorise every prefix combination. You only need a clear sense of each prefix’s typical direction. Then sehen, an•sehen, über•sehen, ein•sehen, versehen stop looking random.",
        "Use this table when a verb feels unfamiliar but the stem is clear. Often the prefix tells you exactly which version of the idea you are dealing with."
      ],
      exampleBlocks: [
        {
          title: "Common Verb Prefixes",
          rows: [
            {
              left: "ver-",
              right: "change, distort, complete · verlieren, verbessern, verbrennen"
            },
            {
              left: "be-",
              right: "direct action onto an object · bekommen, bearbeiten, begleiten"
            },
            {
              left: "ent-",
              right: "remove, undo, release · entfernen, entkommen, entnehmen"
            },
            {
              left: "er-",
              right: "achieve, result in, begin · erreichen, erinnern, erleben"
            },
            {
              left: "zer-",
              right: "break apart, shatter · zerreißen, zerbrechen"
            },
            {
              left: "um-",
              right: "around, re-, change around · umschreiben, umziehen, umwerfen"
            },
            {
              left: "an-",
              right: "onset, approach, start · anfangen, ankommen, ansehen"
            },
            {
              left: "auf-",
              right: "upward, open, begin · aufstehen, aufmachen, aufbauen"
            },
            {
              left: "ab-",
              right: "away, down, off · abfahren, abnehmen, abschneiden"
            }
          ]
        }
      ]
    },
    {
      heading: "B.2 Suffix Logic (Meaning from Endings)",
      paragraphs: [
        "Suffixes signal what kind of thing a word is: concrete object, abstract state, group, small version, quality.",
        "Once you see -ung, -heit, -keit, -schaft, -chen, -lein, -bar everywhere, you stop being surprised by new nouns. You know their job before you know their exact dictionary gloss.",
        "Use this section as a semantic blueprint: the ending tells you roughly what kind of meaning lives inside the word."
      ],
      exampleBlocks: [
        {
          title: "Common Noun & Adjective Suffixes",
          rows: [
            {
              left: "-heit / -keit",
              right: "abstract quality · Freiheit, Höflichkeit, Krankheit, Möglichkeit"
            },
            {
              left: "-ung",
              right: "process, result, thing made by the verb · Bewegung, Lösung, Zeitung"
            },
            {
              left: "-tum",
              right: "collective, realm, status · Eigentum, Kaisertum"
            },
            {
              left: "-schaft",
              right: "group or state of being · Wissenschaft, Freundschaft, Mannschaft"
            },
            {
              left: "-chen / -lein",
              right: "diminutive, often neuter · Mädchen, Häuschen, Fräulein"
            },
            {
              left: "-bar",
              right: "capable of, possible · machbar, sichtbar, essbar"
            }
          ]
        }
      ]
    },
    {
      heading: "B.3 Combining Roots, Prefixes and Suffixes",
      paragraphs: [
        "A single root plus one prefix plus one suffix already gives you three layers of meaning: base action, direction, and kind of thing.",
        "Once this becomes intuitive, you no longer fear long words. You disassemble them, read the logic, and move on."
      ]
    }
  ]
};
