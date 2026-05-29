// src/chapters/chapter10.ts

import type { Chapter } from "./types";

export const chapter11: Chapter = {
  id: 11,
  title: "Reading & Thinking in German",
  subtitle: "Understanding without translating.",
  summary:
    "Fluency begins the moment you stop routing every sentence through English. This chapter trains you to read German as direct experience — seeing scenes, tracking roles, and writing simple texts without translation as a middle step.",
  sections: [
    {
      heading: "11.1 Why the Detour Through English Eventually Has to End",
      paragraphs: [
        "The translating reader and the fluent reader use different parts of the brain — that’s not a metaphor. Imaging studies of late bilinguals show measurable lag and recruitment of executive function regions when they read their second language; in early bilinguals or highly fluent late learners, that lag disappears. What you’re trying to build, when you stop translating, is not willpower. It’s a route.",
        "Most learners read like this: Deutsch → Englisch → Bedeutung.",
        "Fluent users read like this: Deutsch → Bedeutung.",
        "That middle step is useful at the very beginning — like training wheels. But if you never remove it, your brain never builds direct links between German and meaning. Every sentence has to squeeze through a narrow English bottleneck.",
        "This chapter is about dismantling that bottleneck. Not with force, but by giving your mind enough safe practice to trust German on its own.",
        "You do not translate ‘Der Hund jagt die Katze.’ You see it. You feel it. You understand it directly."
      ]
    },
    {
      heading: "11.2 How to Think in German Syntax",
      paragraphs: [
        "English depends heavily on fixed order: Subject → Verb → Object. Change the order and you often break the meaning.",
        "German thinks in roles first, word order second. Cases tell you who does what to whom. Word order becomes flexible — especially in main clauses — because endings carry the grammar.",
        "Compare:",
        "• Der Hund beißt den Mann.",
        "• Den Mann beißt der Hund.",
        "In both cases, the meaning is the same: the dog bites the man. Why? Because ‘der Hund’ is nominative (subject) and ‘den Mann’ is accusative (object). Function beats order.",
        "When you read, your goal is not to translate in sequence but to identify roles: Who is the subject? What is the object? What is being done? Where? When?"
      ],
      exampleBlocks: [
        {
          title: "Role-Based Understanding",
          rows: [
            {
              left: "Der Junge gibt dem Hund Wasser.",
              right:
                "Der Junge = subject (NOM), dem Hund = indirect object (DAT, receiver), Wasser = direct object (ACC, thing given)."
            },
            {
              left: "Im Garten findet das Kind einen Käfer.",
              right:
                "das Kind = subject (NOM), einen Käfer = object (ACC), im Garten = location (where)."
            }
          ]
        }
      ]
    },
    {
      heading: "11.3 Building Direct Links with Mini-Scenes",
      paragraphs: [
        "To think in German, you need short texts with high meaning and low vocabulary. Scenes you can actually visualise.",
        "You read the German. You imagine the situation. Only afterwards — if needed — you check the English.",
        "The point is not word-per-word accuracy. The point is: did you see and feel the moment?"
      ],
      exampleBlocks: [
        {
          title: "Text A — Herbstszene",
          rows: [
            {
              left: "Der Herbst kommt.",
              right: "Autumn is coming."
            },
            {
              left: "Die Tage werden kürzer.",
              right: "The days become shorter."
            },
            {
              left: "Der Wind ist kühl, aber die Sonne bleibt freundlich.",
              right: "The wind is cool, but the sun stays friendly."
            },
            {
              left: "Abends trinkt man Tee, und die Fenster leuchten warm.",
              right: "In the evening people drink tea and the windows glow warmly."
            }
          ]
        }
      ]
    },
    {
      heading: "11.4 Writing the Way You Read",
      paragraphs: [
        "The same route works the other direction. When you write — even a sentence, even three — restrict yourself to words you already know, describe only concrete things, and keep English off the page. No grand essays. Just experience flowing straight into German.",
        "The goal isn't complexity. The goal is the route itself: experience → German, with no English warehouse to detour through. Five honest sentences a day will reshape more than five hundred translated ones."
      ]
    },
    {
      heading: "11.5 Guided Thought Prompts (No Translation)",
      paragraphs: [
        "The easiest prompts are the sensory ones — the weather outside the window, what's on your plate, where the light is soft right now, how your body feels. Movement prompts work too: where are you going, what are you opening, what did you find, what do you see. Five words is enough. Honest and concrete beats grammatically ambitious every time.",
        "If you catch yourself planning the sentence in English first, stop and restart simpler — small enough that English never gets a turn."
      ],
      exampleBlocks: [
        {
          title: "Sample Free Responses",
          rows: [
            {
              left: "Das Licht ist weich heute. Die Luft riecht nach Regen.",
              right: "The light is soft today. The air smells of rain."
            },
            {
              left: "Ich gehe durch die Stadt und höre Musik. Ein Laden öffnet. Ein Kind findet eine Münze.",
              right: "I walk through the city and listen to music. A shop opens. A child finds a coin."
            }
          ]
        }
      ]
    },
    {
      heading: "11.6 Short Reading: Nacht in der Stadt",
      paragraphs: [
        "Try to understand the following text without translating line-by-line. Read it twice, then answer the questions in simple German.",
        "Die Nacht ist still.",
        "Auf den Straßen hört man nur Schritte.",
        "Eine Katze sitzt im Fenster und wartet.",
        "Irgendwo brennt noch ein kleines Licht.",
        "Berlin schläft — aber nicht ganz."
      ],
      exampleBlocks: [
        {
          title: "Understanding Questions (Answer in German)",
          rows: [
            { left: "Wer ist aktiv im Text?", right: "…" },
            { left: "Was macht die Stadt?", right: "…" },
            { left: "Was hört man?", right: "…" },
            { left: "Was bedeutet „aber nicht ganz“?", right: "…" }
          ]
        }
      ]
    },
    {
      heading: "11.7 Closing Insight for Chapter 11",
      paragraphs: [
        "Fluency is not ‘translating very fast’. Fluency is not needing to translate.",
        "You read. You process. You visualise. You feel. The meaning arrives without English labels.",
        "From this chapter onward, your job is to keep German in your head as German for longer and longer stretches. That is the real shift from vocabulary learner to German thinker."
      ]
    }
  ],
  module: {
    level: "A2",
    title: "Ohne Übersetzung",
    germanLines: [
      "Der Morgen ist still.",
      "Ich trinke Kaffee und atme warmen Dampf.",
      "Die Stadt wacht langsam auf.",
      "Ich höre Schritte, aber ich sehe niemanden.",
      "Ich verstehe die Szene — ohne Englisch."
    ],
    englishLines: [
      "The morning is quiet.",
      "I drink coffee and breathe warm steam.",
      "The city wakes slowly.",
      "I hear footsteps, but I see no one.",
      "I understand the scene — without English."
    ],
    vocabulary: [
      { german: "still", english: "quiet" },
      { german: "atmen", english: "to breathe" },
      { german: "wacht auf", english: "wakes up" },
      { german: "die Schritte", english: "footsteps" },
      { german: "die Szene", english: "scene" }
    ],
    tasks: [
      "Close your eyes and picture the scene using only the German text. Then write one new detail in simple German.",
      "Write your own morning scene in 4–6 lines in German. No translation — only images in your mind.",
      "Underline all verbs and say them aloud in the ich-form.",
      "Bonus: Write an even simpler version of the same scene — staccato, image-only. For example: ‘Morgen. Kaffee. Ich atme. Langsam kommt Leben in die Straßen.’",
    ],
    tasksGerman: [
      "Schließe die Augen und stell dir die Szene nur mit dem deutschen Text vor. Schreibe dann ein neues Detail in einfachem Deutsch.",
      "Schreibe deine eigene Morgen-Szene mit 4–6 Zeilen auf Deutsch. Keine Übersetzung – nur Bilder in deinem Kopf.",
      "Unterstreiche alle Verben und sprich sie laut in der ich-Form.",
      "Bonus: Schreibe eine noch einfachere Version derselben Szene, zum Beispiel: „Morgen. Kaffee. Ich atme. Langsam kommt Leben in die Straßen.”"
    ]
  }
};
