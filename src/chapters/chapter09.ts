// src/chapters/chapter09.ts

import type { Chapter } from "./types";

export const chapter09: Chapter = {
  id: 9,
  title: "Semantic Drift",
  subtitle: "When meanings wander over time.",
  summary:
    "Words do not stay fixed. Meanings move like rivers — slow, constant, reshaping everything around them. ‘Fast’ once meant ‘almost’ in older English and still does in German; in modern English it describes speed. This chapter shows you how and why meanings drift, so false friends stop being surprises and start being predictable.",
  sections: [
    {
      heading: "9.1 Words as Moving Targets",
      paragraphs: [
        "Language never stands still. Words do not stay loyal to their origins. Time pushes them, culture stretches them, and usage quietly edits them.",
        "English and German look at each other and say: we were once the same. We are not anymore.",
        "Semantic drift is the name for this movement of meaning over time. You do not fight it — you learn to read it."
      ]
    },
    {
      heading: "9.2 How Drift Happens",
      paragraphs: [
        "Drift is not chaos. It usually follows a few recognisable paths. Three of the most important are narrowing, broadening and changes in emotional weight."
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
        }
      ]
    },
    {
      heading: "9.3 Parallel and Divergent Paths",
      paragraphs: [
        "Some German–English pairs march together. Others diverge hard.",
        "Drift between related words is where false friends are born — but once you see the pattern, you can often predict the direction of change."
      ],
      exampleBlocks: [
        {
          title: "Same Roots, Different Meanings",
          rows: [
            { left: "fast (German)", right: "almost" },
            { left: "fast (English)", right: "quick" },
            { left: "schlimm (German)", right: "bad, terrible" },
            { left: "slim (English)", right: "thin" },
            { left: "Traum (German)", right: "dream; often deeper, powerful" }
          ],
          moreTitle: "More Examples",
          moreRows: [
            { left: "dream (English)", right: "neutral dream; also wish, goal" },
            { left: "brav (German)", right: "well-behaved, good" },
            { left: "brave (English)", right: "courageous, fearless" },
            { left: "Tier (German)", right: "animal" },
            { left: "deer (English)", right: "one specific animal only" }
          ]
        }
      ]
    },
    {
      heading: "9.4 Borrowing and Broken Bloodlines",
      paragraphs: [
        "English absorbed huge amounts of French and Latin vocabulary. German did not to the same degree.",
        "That means English sometimes replaced older Germanic meanings with Romance ones, while German preserved the original sense.",
        "The result: related words that no longer feel related at all."
      ],
      exampleBlocks: [
        {
          title: "Borrowing vs Preserving",
          rows: [
            { left: "German: klug", right: "clever, intelligent in a steady, capable way" },
            { left: "English: clever", right: "shifted toward ingenuity, trickiness, ‘life-hack’ smart" },
            { left: "German: Traum", right: "deep dream, sometimes with emotional or symbolic weight" },
            { left: "English: dream", right: "neutral dream; also abstract hopes and goals" }
          ]
        }
      ]
    },
    {
      heading: "9.5 Predicting Direction: Concrete vs Abstract",
      paragraphs: [
        "A rough but useful rule of thumb:",
        "• German tends to stay more concrete and structural.",
        "• English tends to float upward into abstraction and metaphor.",
        "This is not always true, but it helps you guess how meaning may have shifted."
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
            { left: "ghost/spirit (English)", right: "mostly supernatural or metaphorical" }
          ]
        }
      ]
    },
    {
      heading: "9.6 Exercises: Reading Drift Instead of Memorising",
      paragraphs: [
        "Now you train yourself to see drift as a process, not a list of exceptions. Work through these slowly; speak the answers aloud if you can."
      ],
      exampleBlocks: [
        {
          title: "A) Predict the Drift",
          rows: [
            {
              left: "höflich (German)",
              right:
                "means polite, courteous. English ‘polite’ originally came from ‘polished’ → refined; you can still feel the connection."
            },
            {
              left: "seltsam (German)",
              right:
                "means strange, odd, rare. English ‘seldom’ means ‘not often’ — the ‘rare’ sense stayed, but the ‘odd’ sense shifted away."
            },
            {
              left: "schlimm (German)",
              right:
                "means bad, awful. English ‘slim’ went down the path of ‘thin’ instead. Same sound zone, totally different meaning."
            }
          ]
        },
        {
          title: "B) Fill in the Drift Logic",
          rows: [
            { left: "Gift → gift", right: "German = poison / English = present" },
            { left: "fast → fast", right: "German = almost / English = quick" },
            {
              left: "Traum → dream",
              right: "German = often deep, intense dream / English = neutral dream; also wish or goal"
            }
          ]
        }
      ]
    },
    {
      heading: "9.7 Closing Insight for Chapter 9",
      paragraphs: [
        "Semantic drift is not a bug. It is language breathing.",
        "When you understand how meanings evolve — narrowing, broadening, emotional shifts, borrowing — vocabulary stops being a wall of arbitrary facts.",
        "You are no longer just memorising that ‘fast’ or ‘Gift’ mean something different. You are tracing the path that took them there.",
        "That is the shift from learner to linguistic observer — from surviving German to understanding how it thinks."
      ]
    }
  ],
  module: {
    level: "A2",
    title: "Wörter Wandern Wie Flüsse",
    germanLines: [
      "„Fast“ heißt in Deutsch: fast = beinahe.",
      "In Englisch heißt es: fast = schnell.",
      "Zwei Wege, ein Wort — zwei Zeiten, zwei Bedeutungen.",
      "Sprachen verändern sich wie Wasser im Fluss.",
      "Das Herz des Wortes bleibt, aber die Richtung kann sich drehen."
    ],
    englishLines: [
      "'Fast' in German means: almost.",
      "In English it means: quick.",
      "Two paths, one word — two times, two meanings.",
      "Languages change like water in a river.",
      "The heart of the word stays, but its direction can turn."
    ],
    vocabulary: [
      { german: "fast", english: "almost (German meaning)" },
      { german: "schnell", english: "fast, quick" },
      { german: "verändern", english: "to change" },
      { german: "der Fluss", english: "river" },
      { german: "die Richtung", english: "direction" }
    ],
    tasks: [
      "Explain in simple German what ‘fast’ means in German and in English.",
      "Write your own metaphor for how languages change (for example like trees, cities, or weather).",
      "Choose another word pair (for example: Traum/dream, brav/brave) and describe the difference in meaning in 2–3 German sentences.",
      "Optional: Write 2–3 sentences about a word that feels ‘different’ to you in German and English, and note which meaning feels stronger where.",
    ],
    tasksGerman: [
      "Erkläre in einfachem Deutsch, was „fast” in Deutsch und in Englisch bedeutet.",
      "Schreibe deine eigene Metapher dafür, wie Sprachen sich verändern (zum Beispiel wie Bäume, Städte oder Wetter).",
      "Wähle ein weiteres Wortpaar (zum Beispiel: Traum/dream, brav/brave) und beschreibe den Bedeutungsunterschied in 2–3 deutschen Sätzen.",
      "Optional: Schreibe 2–3 Sätze über ein Wort, das sich für dich ‚anders’ anfühlt im Deutschen und im Englischen, und notiere, welche Bedeutung wo stärker ist."
    ]
  }
};
