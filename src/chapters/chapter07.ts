// src/chapters/chapter06.ts
import type { Chapter } from "./types";

export const chapter07: Chapter = {
  id: 7,
  title: "Root Families",
  subtitle: "Ein Wort wird viele.",
  summary:
    "Memorising 1,000 isolated words is slow. Learning 100 roots that generate 3,000 words is efficient. German builds dense families around core verbs and stems. Once you see roots like gehen, schreiben, nehmen, sehen under compounds and prefix verbs, vocabulary stops being a list and becomes a network.",
  sections: [
    {
      heading: "7.1 Vocabulary Grows Like a Tree, Not a List",
      paragraphs: [
        "Traditional language courses hand out words like loose leaves. Etymology hands you the trunk.",
        "In German, one root generates entire forests of meaning. If you truly learn the stem, you unlock every branch built on it.",
        "You already saw this with gehen hidden inside Zugang, Ausgang, Vorgang, Übergang. Once you recognise the root, you stop treating each word as a stranger. You see them as family.",
        "This chapter teaches roots in four layers at once — the root itself, its English relatives, the compounds it makes, and the prefix verbs it spawns. Each layer multiplies the others."
      ],
      exampleBlocks: [
        {
          title: "Root Family Preview — gehen (to go)",
          rows: [
            { left: "gehen", right: "to go, to walk" },
            { left: "Zugang", right: "zu + Gang → access; way in" },
            { left: "Ausgang", right: "aus + Gang → exit; way out" },
            { left: "Vorgang", right: "vor + Gang → process; what is going on" },
            { left: "Übergang", right: "über + Gang → transition; crossing" }
          ]
        }
      ]
    },
    {
      heading: "7.2 Root Family Templates",
      paragraphs: [
        "You will reuse this template throughout the book. Once you understand how one family works, you can build your own.",
        "Below are four example families. Do not memorise every word. Focus on seeing the logic."
      ],
      exampleBlocks: [
        {
          title: "Root Family 1 — gehen (to go, walk)",
          rows: [
            { left: "English relatives", right: "gait, gate (opening), gangway" },
            { left: "Core logic", right: "movement, transition, passage" },
            { left: "Gang", right: "‘going’ → corridor, passage, gait" },
            { left: "Zugang", right: "zu + Gang → access, way in" }
          ],
          moreTitle: "Extended Family",
          moreRows: [
            { left: "Ausgang", right: "aus + Gang → exit, way out" },
            { left: "Übergang", right: "über + Gang → crossing, transition" },
            { left: "Vorgang", right: "vor + Gang → process; what is going on" }
          ]
        },
        {
          title: "Root Family 2 — schreiben (to write)",
          rows: [
            { left: "English relatives", right: "scribe, script, inscription" },
            { left: "Core logic", right: "recording, marking, expressing in text" },
            { left: "Beschreibung", right: "be + schreiben → description" }
          ],
          moreTitle: "Extended Family",
          moreRows: [
            { left: "Einschreiben", right: "ein + schreiben → to enrol; registered mail" },
            { left: "Umschreiben", right: "um + schreiben → to rewrite, paraphrase" },
            { left: "Verschreibung", right: "ver + schreiben → prescription" }
          ]
        },
        {
          title: "Root Family 3 — nehmen (to take)",
          rows: [
            { left: "English echoes", right: "nimble (quick to take), numb (taken feeling)" },
            { left: "Core logic", right: "acquiring, grasping, absorbing" },
            { left: "annehmen", right: "to accept; to take in" },
            { left: "aufnehmen", right: "to record; to take up" }
          ],
          moreTitle: "Extended Family",
          moreRows: [
            { left: "entnehmen", right: "to remove; to take out" },
            { left: "übernehmen", right: "to take over; assume control" },
            { left: "vernehmen", right: "to examine, interrogate; take information" }
          ]
        },
        {
          title: "Root Family 4 — sehen (to see)",
          rows: [
            { left: "English relatives", right: "sight, oversee, insight" },
            { left: "Core logic", right: "perception, observation" },
            { left: "ansehen", right: "to look at; to view" },
            { left: "übersehen", right: "to overlook; to miss, ignore" }
          ],
          moreTitle: "Extended Family",
          moreRows: [
            { left: "einsehen", right: "to see into; to realise" },
            { left: "zusehen", right: "to watch; to observe passively" },
            { left: "versehen", right: "to do by mistake; mis-see → error" }
          ]
        },
        {
          title: "Root Family 5 — ziehen (to pull, to move)",
          rows: [
            { left: "English relatives", right: "tug, tow, tie (PIE *deuk-); via Latin: duct, duke" },
            { left: "Core logic", right: "pulling — and, by extension, pulling yourself somewhere new" },
            { left: "Anzug", right: "‘the pull-on’ → suit (the thing you pull on)" },
            { left: "Umzug", right: "‘the pull-around’ → a move, a procession" }
          ],
          moreTitle: "Extended Family",
          moreRows: [
            { left: "anziehen", right: "to put on (clothes); to attract" },
            { left: "ausziehen", right: "to take off (clothes); to move out" },
            { left: "einziehen", right: "to move in" },
            { left: "umziehen", right: "to change clothes; to relocate" },
            { left: "Erziehung", right: "‘pulling out’ → upbringing, education" },
            { left: "Zug", right: "a pull; a train; a draft of air" }
          ]
        }
      ]
    },
    {
      heading: "7.3 A Root That Lives a Double Life",
      paragraphs: [
        "Of the families above, ziehen behaves differently. The others stay close to one core meaning. Ziehen split itself in half — and German grammar kept score.",
        "Its oldest job was muscle. Pulling carts, dragging rope, towing a load. The PIE root *deuk- — that’s Proto-Indo-European, the reconstructed ancestor of English, German, Latin, Sanskrit and dozens of others; the asterisk marks a word linguists have rebuilt but never directly observed — surfaces in English as tug, tow, tie, and gave Latin its words for leading and channeling: duct, duke.",
        "Then the wagons happened. Before moving vans existed, relocating meant packing your life into a cart and pulling it to the next valley. Tribes and families literally said the equivalent of ‘we pulled to the next town.’ Over time, the wagons fell out of the sentence. The pulling stayed, but it meant the migration itself.",
        "Now ziehen does both jobs. With a direct object — a door, a card, a cable — it is still old physical work, and it takes haben. Without one, it means relocating, and it takes sein. (You met this split in §5.6.) Er hat die Tür gezogen versus er ist nach Berlin gezogen: same verb, two events."
      ],
      exampleBlocks: [
        {
          title: "You’ll See This Again — A Pattern Across Germanic",
          rows: [
            { left: "English pack", right: "bundle → ‘pack up and leave’ — the wrapping becomes the departure" },
            { left: "English bear / German tragen", right: "carry weight → bear a child → bear a burden — the load becomes the state" },
            { left: "English move / German bewegen", right: "shift an object → move to a new city — the action becomes the relocation" },
            { left: "The trick", right: "Germanic minds repeatedly took a physical-load verb and reused it for an abstract change of state or place" },
            { left: "Note inside English", right: "bear (the animal) and bare (naked) are unrelated to bear (carry). The cognate lives in the verb sense alone." }
          ]
        }
      ]
    },
    {
      heading: "7.4 How to Generate New Vocabulary On Your Own",
      paragraphs: [
        "Once you understand root families, you no longer wait for a teacher or app to feed you words. You can generate them.",
        "For any new root, ask yourself:",
        "• What English words share letters, sound, or meaning with this stem?",
        "• How do meaning and structure align?",
        "• What happens if I add common prefixes?",
        "• Does German form compound nouns from this root?",
        "You turn vocabulary into a building kit, not a memorisation list."
      ]
    },
    {
      heading: "7.5 Closing Insight for Chapter 7",
      paragraphs: [
        "Vocabulary is not a flat list. It is a network.",
        "Roots are engines. Prefixes are fuel. Compounds are architecture.",
        "Once you master root families, German stops expanding linearly and starts expanding exponentially.",
        "This is where fluency accelerates: you no longer collect words — you grow systems."
      ]
    }
  ],
  module: {
    level: "A1–A2",
    title: "Ein Wort Wird Viele",
    germanLines: [
      "Ich gehe langsam durch die Stadt.",
      "Der Zugang zum Park ist offen.",
      "Ein Ausgang führt zum Fluss.",
      "Jeder Vorgang hat einen Anfang.",
      "Ein kleines Wort baut viele große Wörter."
    ],
    englishLines: [
      "I walk slowly through the city.",
      "The entrance to the park is open.",
      "An exit leads to the river.",
      "Every process has a beginning.",
      "A small word builds many big words."
    ],
    vocabulary: [
      { german: "gehen", english: "to go, to walk" },
      { german: "Zugang", english: "access, entrance" },
      { german: "Ausgang", english: "exit" },
      { german: "Vorgang", english: "process" },
      { german: "Anfang", english: "beginning" },
      { german: "führt", english: "leads (from führen, to lead)" },
      { german: "die Stadt", english: "city" }
    ],
    tasks: [
      "Underline or highlight all words in the text that belong to the root family of gehen.",
      "Decode these compounds without checking a dictionary: Mitteilung (mit + teilen), Vorstellung (vor + stellen), Entdeckung (ent + decken), Gegenstand (gegen + Stand). Write your guess, then verify.",
      "Write two sentences using your new compound in context.",
      "Invent one playful compound of your own (for example: Mondgang for a slow walk under moonlight) and write a short sentence with it."
    ],
    tasksGerman: [
      "Unterstreiche oder markiere alle Wörter im Text, die zur Wortwurzel-Familie von gehen gehören.",
      "Entschlüssele diese Zusammensetzungen ohne Wörterbuch: Mitteilung (mit + teilen), Vorstellung (vor + stellen), Entdeckung (ent + decken), Gegenstand (gegen + Stand). Notiere deine Vermutung, überprüfe sie dann.",
      "Schreibe zwei Sätze, in denen du deine neue Zusammensetzung verwendest.",
      "Erfinde eine spielerische Zusammensetzung (zum Beispiel: Mondgang für einen langsamen Spaziergang im Mondlicht) und schreibe einen kurzen Satz damit.",
    ]
  }
};
