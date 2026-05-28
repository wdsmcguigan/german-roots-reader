// src/chapters/chapter11.ts

import type { Chapter } from "./types";

export const chapter11: Chapter = {
  id: 11,
  title: "Thought Translation Training",
  subtitle: "Thinking directly in German structures.",
  summary:
    "Instead of translating English sentences into German, you start from raw ideas, feelings and scenes — and choose the forms a native speaker would use: mir ist kalt, ich habe Hunger, das gefällt mir. This chapter trains you to reshape thoughts in German rather than converting English word-for-word.",
  sections: [
    {
      heading: "11.1 From English Sentences to German Thoughts",
      paragraphs: [
        "Chapter 10 worked on the input side: stop translating as you read. This chapter works on the output side: stop translating as you express. Same wall, different face.",
        "Direct translation fails because languages do not map 1:1. English phrase structure is not German phrase structure. English metaphors are not German metaphors. English rhythm is not German rhythm.",
        "If you think in English and then output German, you often end up with sentences that are grammatically correct but emotionally or structurally wrong. They sound like copies, not originals.",
        "Native German is not a translation of English. It is a different way of framing reality. In this chapter, you stop asking ‘How do I say this English sentence?’ and instead ask: ‘How would a German speaker naturally express this idea?’"
      ]
    },
    {
      heading: "11.2 How German Structures Thought",
      paragraphs: [
        "English tends to shoot straight: subject → verb → object.",
        "German often builds context and structure first, then fills in the action. It thinks in frames, roles and conditions.",
        "Compare the idea ‘I want to go to the store.’",
        "• English: I want to go to the store.",
        "• German: Ich will zum Laden gehen.",
        "Literally: I want to the shop go.",
        "German often moves towards the important part at the end (gehen), with context and intention setting up the scene. Think of it as building a small piece of architecture instead of firing a single arrow."
      ]
    },
    {
      heading: "11.3 Word-for-Word Translation vs German Thought",
      paragraphs: [
        "A classic trap is translating each English word one by one. Watch what happens:",
        "Idea: ‘I don’t have time today.’",
        "Naive translation attempt: ❌ Ich habe nicht Zeit heute.",
        "Natural German thought: ✓ Ich habe heute keine Zeit.",
        "German negation typically attaches to the noun (keine Zeit) instead of just tacked onto the verb. The structure shifts because the language is highlighting the absence of ‘time’ as the key fact.",
        "Working rule: if you would negate the noun that follows in English (no time, no friends, no idea), German prefers kein/keine before the noun. If you would negate the verb or the whole action (don’t run, didn’t come), German uses nicht. So ‘I have no time’ = Ich habe keine Zeit, while ‘I’m not running today’ = Ich laufe heute nicht.",
        "Thought first, grammar second. Translation is never the goal; appropriate German structure is."
      ],
      exampleBlocks: [
        {
          title: "English Thought → German Structure",
          rows: [
            {
              left: "I don’t have time today.",
              right: "Ich habe heute keine Zeit."
            },
            {
              left: "Today I can’t come.",
              right: "Ich kann heute nicht kommen."
            }
          ]
        }
      ]
    },
    {
      heading: "11.4 Replace Translation with Re-Framing",
      paragraphs: [
        "Instead of translating English sentences into German, you re-frame the idea in German logic. Many everyday phrases show clear structural differences.",
        "There’s something philosophically tidy in mir ist kalt. English flattens the experience into identity: I am cold, as if cold were a property of me. German keeps the experience separate from the self — cold is happening to me; I’m just the one it’s happening to. Same with hunger, boredom, and most pains and pleasures. Whether or not native speakers consciously feel this distinction, the grammar quietly maintains it. Languages aren’t neutral containers for thought. They tilt the room slightly toward certain ways of describing what’s happening, and mir ist kalt is one of German’s small tilts.",
        "Notice how German often uses ‘have’ or ‘to me is’ instead of ‘I am’:"
      ],
      exampleBlocks: [
        {
          title: "Common Pattern Shifts",
          rows: [
            { left: "I’m hungry.", right: "Ich habe Hunger. (I have hunger.)" },
            { left: "I’m cold.", right: "Mir ist kalt. (To me is cold.)" },
            { left: "I’m bored.", right: "Mir ist langweilig. (To me is boredom.)" }
          ],
          moreTitle: "More Examples",
          moreRows: [
            { left: "I miss you.", right: "Du fehlst mir. (You are missing to me.)" },
            { left: "I like this.", right: "Das gefällt mir. (That pleases me.)" },
            { left: "There is a problem.", right: "Es gibt ein Problem. (It gives/there is a problem.)" }
          ]
        }
      ]
    },
    {
      heading: "11.5 What This Looks Like in Your Head",
      paragraphs: [
        "When you catch yourself starting to translate, what you’re really catching is a fork in the road. The English sentence is forming. The question is whether you pause long enough to ask what the idea actually is — a feeling, a physical state, a wish, a need, a possession — and reach for the German pattern that expresses that kind of thing rather than the English words that say it.",
        "Take the cold. Idea: I’m cold. Function: internal physical condition. German’s pattern for internal physical conditions is mir ist + Adjektiv, so the sentence that arrives is Mir ist kalt — not Ich bin kalt, which sounds emotionally cold or detached. You didn’t translate. You named the function and let the language hand you the form.",
        "The shift is small and it happens slowly. The first month you catch yourself a few times. The third month, German patterns start to surface before English ones do. The first year, you stop noticing the switch at all."
      ]
    },
    {
      heading: "11.6 Closing Insight for Chapter 11",
      paragraphs: [
        "At this stage, you are no longer just putting German clothes on English thoughts.",
        "You are allowing German to shape your thoughts directly — your feelings, your complaints, your wishes, your small observations.",
        "Where most learners get stuck in word-for-word mode, you are starting to choose patterns like mir ist kalt, das gefällt mir, es gibt … as first instincts.",
        "This is what real fluency looks like from the inside: not a bigger dictionary, but a new way to structure experience."
      ]
    }
  ],
  module: {
    level: "A2",
    title: "Ohne Umweg Durch Englisch",
    germanLines: [
      "Ich denke heute direkt in Deutsch.",
      "Keine Übersetzung, kein Umweg.",
      "Ich beschreibe nur, was ich sehe und fühle.",
      "Der Himmel ist hell, und mein Kopf ist ruhig.",
      "Worte kommen langsam, aber sie kommen von innen."
    ],
    englishLines: [
      "Today I think directly in German.",
      "No translation, no detour.",
      "I simply describe what I see and feel.",
      "The sky is bright, and my mind is calm.",
      "Words come slowly, but they come from inside."
    ],
    vocabulary: [
      { german: "der Umweg", english: "detour" },
      { german: "beschreiben", english: "to describe" },
      { german: "fühlen", english: "to feel" },
      { german: "ruhig", english: "calm" },
      { german: "von innen", english: "from inside" },
      { german: "direkt", english: "directly" },
      { german: "mir ist kalt", english: "I’m cold (lit. to me is cold)" },
      { german: "ich habe Hunger", english: "I’m hungry (lit. I have hunger)" },
      { german: "das gefällt mir", english: "I like that (lit. that pleases me)" },
      { german: "es gibt", english: "there is/are (lit. it gives)" },
      { german: "du fehlst mir", english: "I miss you (lit. you are missing to me)" }
    ],
    tasks: [
      "Write your own inner monologue in German with 4–6 lines. No English words, no translation.",
      "Rewrite the same monologue in the third person (er/sie/man), for example: Heute denkt sie direkt in Deutsch.",
      "Choose a feeling (for example: müde, neugierig, nervös) and describe it with an image rather than just the word. For example: 'Mein Kopf ist schwer, und meine Augen wollen zugehen.'",
      "Bonus: Write 3–4 sentences using patterns like: mir ist … / ich habe … / es gibt … / das gefällt mir … and read them aloud.",
    ],
    tasksGerman: [
      "Schreibe deinen eigenen inneren Monolog auf Deutsch mit 4–6 Zeilen. Keine englischen Wörter, keine Übersetzung.",
      "Schreibe denselben Monolog noch einmal in der dritten Person (er/sie/man), zum Beispiel: Heute denkt sie direkt in Deutsch.",
      "Wähle ein Gefühl (zum Beispiel: müde, neugierig, nervös) und beschreibe es mit einem Bild statt nur mit dem Wort. Zum Beispiel: „Mein Kopf ist schwer, und meine Augen wollen zugehen.”",
      "Bonus: Schreibe 3–4 Sätze mit Mustern wie: mir ist … / ich habe … / es gibt … / das gefällt mir … und lies sie laut vor."
    ]
  }
};
