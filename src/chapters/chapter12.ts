// src/chapters/chapter12.ts

import type { Chapter } from "./types";

export const chapter12: Chapter = {
  id: 12,
  title: "Thought Translation Training",
  subtitle: "Thinking directly in German structures.",
  summary:
    "Instead of translating English sentences into German, you start from raw ideas, feelings and scenes — and choose the forms a native speaker would use: mir ist kalt, ich habe Hunger, das gefällt mir. This chapter trains you to reshape thoughts in German rather than converting English word-for-word.",
  sections: [
    {
      heading: "12.1 From English Sentences to German Thoughts",
      paragraphs: [
        "Chapter 11 worked on the input side: stop translating as you read. This chapter works on the output side: stop translating as you express. Same wall, different face.",
        "If you're not actively learning German, what follows still matters. This chapter is a tour of how a language quietly trains its speakers to describe their inner lives differently than English does — feeling cold is not a property of the self, hunger is something you possess, boredom happens to you. The procedural pieces are written for the reader who wants to practice the shift, but the meditation underneath is for anyone curious how grammar tilts the room.",
        "There's something philosophically tidy in mir ist kalt. English flattens the experience into identity: I am cold, as if cold were a property of me. German keeps the experience separate from the self — cold is happening to me; I'm just the one it's happening to. Same with hunger, boredom, and most pains and pleasures. Whether or not native speakers consciously feel this distinction, the grammar quietly maintains it. Languages aren't neutral containers for thought. They tilt the room slightly toward certain ways of describing what's happening, and mir ist kalt is one of German's small tilts.",
        "Direct translation fails because languages do not map 1:1. English phrase structure is not German phrase structure. English metaphors are not German metaphors. English rhythm is not German rhythm.",
        "If you think in English and then output German, you often end up with sentences that are grammatically correct but emotionally or structurally wrong. They sound like copies, not originals.",
        "Native German is not a translation of English. It is a different way of framing reality. In this chapter, you stop asking ‘How do I say this English sentence?’ and instead ask: ‘How would a German speaker naturally express this idea?’"
      ]
    },
    {
      heading: "12.2 How German Structures Thought",
      paragraphs: [
        "English tends to shoot straight: subject, then verb, then object. German often builds context and structure first, then fills in the action. It thinks in frames, roles and conditions.",
        "Take a simple idea: I want to go to the store. English fires it as a single arrow — subject, verb, infinitive, destination, in that order. German rearranges the same five pieces: ich will zum Laden gehen, which laid out word for word is ‘I want to the shop go.’ The conjugated verb sits down in second position. The infinitive — the actual action of going — waits at the very back of the sentence, the way the Satzklammer from Chapter 4 told it to.",
        "Think of it as building a small piece of architecture instead of firing a single arrow."
      ]
    },
    {
      heading: "12.3 Word-for-Word Translation vs German Thought",
      paragraphs: [
        "Take the idea ‘I don’t have time today.’ Run each word through its dictionary equivalent and you get Ich habe nicht Zeit heute — grammatically wrong, ear-of-a-native-speaker wrong, but not obviously wrong if you've only ever thought about it word by word.",
        "The German that actually expresses the idea is Ich habe heute keine Zeit. The difference is structural. German didn't negate the having. It negated the time itself. The absence of time, not the absence of having, is what the sentence is reporting.",
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
      heading: "12.4 Replace Translation with Re-Framing",
      paragraphs: [
        "Instead of translating English sentences into German, you re-frame the idea in German logic. Many everyday phrases show clear structural differences.",
        "The mir ist kalt pattern from §12.1 is one example of a wider habit. Notice how German often uses ‘have’ or ‘to me is’ instead of ‘I am’:"
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
      heading: "12.5 What This Looks Like in Your Head",
      paragraphs: [
        "When you catch yourself starting to translate, what you’re really catching is a fork in the road. The English sentence is forming. The question is whether you pause long enough to ask what the idea actually is — a feeling, a physical state, a wish, a need, a possession — and reach for the German pattern that expresses that kind of thing rather than the English words that say it.",
        "Take the cold. Idea: I’m cold. Function: internal physical condition. German’s pattern for internal physical conditions is mir ist + Adjektiv, so the sentence that arrives is Mir ist kalt — not Ich bin kalt, which sounds emotionally cold or detached. You didn’t translate. You named the function and let the language hand you the form.",
        "The shift is small and it happens slowly. The first month you catch yourself a few times. The third month, German patterns start to surface before English ones do. The first year, you stop noticing the switch at all."
      ]
    },
    {
      heading: "12.6 Closing Insight for Chapter 12",
      paragraphs: [
        "At this stage, you are no longer just putting German clothes on English thoughts.",
        "You are allowing German to shape your thoughts directly — your feelings, your complaints, your wishes, your small observations.",
        "Where most learners get stuck in word-for-word mode, you are starting to choose patterns like mir ist kalt, das gefällt mir, es gibt … as first instincts.",
        "What's left is the loop itself. The next chapter joins the input side and the output side into a single cycle — decode, rebuild, extend — and asks what this whole journey has actually changed in the way you meet a German sentence."
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
      "Mir ist warm, und das gefällt mir.",
      "Es gibt keine englischen Wörter in meinem Kopf — nur Bilder."
    ],
    englishLines: [
      "Today I think directly in German.",
      "No translation, no detour.",
      "I simply describe what I see and feel.",
      "I feel warm, and I like that.",
      "There are no English words in my head — only images."
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
      "Write 4–6 lines of inner monologue using at least three dative-experience patterns from this chapter (mir ist …, mir gefällt …, ich habe Hunger / Durst / Angst, es gibt …, du fehlst mir). Avoid sentences that translate word-for-word from English.",
      "Rewrite your monologue in the third person (er/sie/man), and pay attention to how the dative patterns shift: ich habe Hunger → er hat Hunger; mir ist kalt → ihm ist kalt; das gefällt mir → das gefällt ihm. Notice that the experiencer marker (mir → ihm) is the only thing that actually changes — the pattern shape stays the same.",
      "Choose a feeling (for example: müde, neugierig, nervös) and describe it with an image rather than just the word. For example: 'Mein Kopf ist schwer, und meine Augen wollen zugehen.'",
      "Bonus: For each English idea, choose the natural German pattern (ich bin …, ich habe …, mir ist …, das gefällt mir, es gibt …): ‘I'm hungry’ / ‘I'm bored’ / ‘I like jazz’ / ‘There's a problem’ / ‘I'm tired.’ Only one pattern sounds native per idea — write the full German sentence.",
    ],
    tasksGerman: [
      "Schreibe 4–6 Zeilen inneren Monolog und verwende mindestens drei Dativ-Erlebnis-Muster aus diesem Kapitel (mir ist …, mir gefällt …, ich habe Hunger / Durst / Angst, es gibt …, du fehlst mir). Vermeide Sätze, die wörtlich aus dem Englischen übersetzt sind.",
      "Schreibe deinen Monolog in der dritten Person (er/sie/man) und achte darauf, wie sich die Dativ-Muster verschieben: ich habe Hunger → er hat Hunger; mir ist kalt → ihm ist kalt; das gefällt mir → das gefällt ihm. Beobachte: Nur der Erlebende (mir → ihm) ändert sich — die Musterform bleibt gleich.",
      "Wähle ein Gefühl (zum Beispiel: müde, neugierig, nervös) und beschreibe es mit einem Bild statt nur mit dem Wort. Zum Beispiel: „Mein Kopf ist schwer, und meine Augen wollen zugehen.”",
      "Bonus: Wähle für jede englische Idee das natürliche deutsche Muster (ich bin …, ich habe …, mir ist …, das gefällt mir, es gibt …): „I'm hungry“ / „I'm bored“ / „I like jazz“ / „There's a problem“ / „I'm tired.“ Nur ein Muster klingt jeweils muttersprachlich — schreib den vollständigen deutschen Satz."
    ]
  }
};
