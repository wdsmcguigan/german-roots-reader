// chapter05.ts
import type { Chapter } from "./types";

export const chapter05: Chapter = {
  id: 5,
  title: "Strong vs Weak Verbs",
  subtitle: "Vowel tribes, verb DNA, and living history.",
  summary:
    "German verbs are not random. Weak verbs follow a safe, regular pattern; strong verbs carry ancient vowel shifts you already know from English: sing–sang–sung, drink–drank–drunk. This chapter shows you how to treat strong verbs as vowel tribes and weak verbs as your default baseline — plus how prefixes and ge- turn a single root into an entire verb family.",
  sections: [
    {
      heading: "5.1 The Truth About German Verbs",
      paragraphs: [
        "German verbs scare learners for two reasons: the endings change, and the vowels seem to mutate like living creatures.",
        "But neither is random. Those vowel shifts — sprechen → sprach → gesprochen — are the same ancient patterns you still use in English.",
        "Compare them side by side and the skeleton appears:",
      ],
      exampleBlocks: [
        {
          title: "English and German Strong Verb Echoes",
          rows: [
            { left: "sing / sang / sung", right: "singen / sang / gesungen" },
            { left: "drink / drank / drunk", right: "trinken / trank / getrunken" },
            { left: "give / gave / given", right: "geben / gab / gegeben" },
            { left: "drive / drove / driven", right: "fahren / fuhr / gefahren" }
          ]
        }
      ]
    },
    {
      heading: "5.2 The Two Verb Tribes",
      paragraphs: [
        "German verbs live in two big tribes: weak and strong.",
        "Weak verbs are your regular, factory-built pattern. Strong verbs are the heirloom lineage — older, but patterned.",
        "You do not memorise hundreds of isolated forms. You learn how each tribe behaves."
      ],
      exampleBlocks: [
        {
          title: "Weak Verbs (Regular) — The Default",
          rows: [
            { left: "Pattern", right: "no vowel change, past in -te, participle in ge- + -t" },
            { left: "machen → machte → gemacht", right: "to do, to make" },
            { left: "leben → lebte → gelebt", right: "to live" },
            { left: "kaufen → kaufte → gekauft", right: "to buy" }
          ]
        },
        {
          title: "Strong Verbs (Irregular) — Vowel Shifters",
          rows: [
            { left: "nehmen → nahm → genommen", right: "to take" },
            { left: "finden → fand → gefunden", right: "to find" },
            { left: "schreiben → schrieb → geschrieben", right: "to write" },
            { left: "sprechen → sprach → gesprochen", right: "to speak" }
          ]
        }
      ]
    },
    {
      heading: "5.3 Vowel Tribes: Strong Verb Clans",
      paragraphs: [
        "Every strong verb belongs to a vowel family. Once you hear the pattern, you can often predict the past form even if you have not memorised it.",
        "You are not learning random exceptions. You are listening for vowel DNA."
      ],
      exampleBlocks: [
        {
          title: "Sample Strong Verb Patterns",
          rows: [
            { left: "i → a → u", right: "singen → sang → gesungen; trinken → trank → getrunken" },
            { left: "e → a → o", right: "sprechen → sprach → gesprochen; brechen → brach → gebrochen" },
            { left: "e → a → e", right: "geben → gab → gegeben; lesen → las → gelesen" },
            { left: "ie → o → o", right: "biegen → bog → gebogen; fliegen → flog → geflogen" }
          ]
        }
      ]
    },
    {
      heading: "5.4 Prefix Power: The Verb Multiplier",
      paragraphs: [
        "German prefixes do not just decorate verbs. They multiply them.",
        "One stem can produce an entire family of meanings — all still connected to the same core idea.",
        "Once you know the prefix pattern, you start decoding new verbs on sight."
      ],
      exampleBlocks: [
        {
          title: "High-Value Prefixes",
          rows: [
            { left: "be-", right: "affect directly → bearbeiten (process), besuchen (visit)" },
            { left: "ver-", right: "change / undo / wrong → verlieren (lose), verbrennen (burn up)" },
            { left: "er-", right: "achieve / begin → erreichen (achieve), erkennen (realise)" },
            { left: "ent-", right: "release / remove → entkommen (escape), entnehmen (extract)" },
            { left: "zer-", right: "shatter / break apart → zerbrechen (break to pieces)" }
          ]
        },
        {
          title: "One Stem, Many Verbs: stehen (to stand)",
          rows: [
            { left: "entstehen", right: "to originate (come into being)" },
            { left: "verstehen", right: "to understand (stand with, grasp)" },
            { left: "überstehen", right: "to withstand, survive" },
            { left: "abstehen", right: "to stick out, stand apart" },
            { left: "bestehen", right: "to exist; to pass (an exam)" }
          ]
        }
      ]
    },
    {
      heading: "5.5 The ge- Prefix: Time Marker, Not Decoration",
      paragraphs: [
        "Weak verbs form the past with -te. Strong verbs change the vowel and mark completion with ge- + -en.",
        "The ge- prefix is not random. It flags a completed action — the perfect participle.",
        "English used to do this too with patterns like write–wrote–written, break–broke–broken. German simply kept the system visible."
      ],
      exampleBlocks: [
        {
          title: "Weak vs Strong in the Past",
          rows: [
            { left: "kaufen → kaufte → gekauft", right: "weak: predictable -te / -t" },
            { left: "reisen → reiste → gereist", right: "weak: -te / -t, often movement" },
            { left: "gehen → ging → gegangen", right: "strong: vowel change + -en + ge-" },
            { left: "schreiben → schrieb → geschrieben", right: "strong: vowel change + -en + ge-" }
          ]
        }
      ]
    },
    {
      heading: "5.6 Haben or Sein? Two Helpers, Two Worlds",
      paragraphs: [
        "The ge- participle tells you when an action happened. The auxiliary tells you what kind of event you just witnessed.",
        "German splits its perfect tense between two helpers. The rule is short: if the verb describes an action carried out on an object, it takes haben. If it describes a change of location, or a state the subject ends up in on its own, it takes sein.",
        "Most verbs sit on one side or the other. A handful — the most interesting ones — flip depending on what they mean in a given sentence. Ziehen is the headline case: er hat die Tür gezogen (he pulled the door) and er ist nach Berlin gezogen (he moved to Berlin) share one participle but describe two different events."
      ],
      exampleBlocks: [
        {
          title: "Verbs That Flip Between Haben and Sein",
          rows: [
            { left: "ziehen", right: "hat gezogen → pulled, drew (something) · ist gezogen → moved, migrated" },
            { left: "brechen", right: "hat gebrochen → broke (something) · ist gebrochen → shattered on its own" },
            { left: "schmelzen", right: "hat geschmolzen → melted (something) · ist geschmolzen → melted in the heat" },
            { left: "reißen", right: "hat gerissen → tore (something) · ist gerissen → snapped, gave way" },
            { left: "Quick test", right: "If you can swap in ‘relocated’ or ‘the thing changed on its own,’ use sein. Otherwise haben." }
          ]
        }
      ]
    },
    {
      heading: "5.7 Exercises: Strong vs Weak in Your Head",
      paragraphs: [
        "Now test the patterns. Do not memorise — recognise.",
        "First, decide whether each verb feels weak (W) or strong (S). Then, try to guess past forms based on the vowel tribes."
      ],
      exampleBlocks: [
        {
          title: "A) Strong or Weak?",
          rows: [
            { left: "lernen", right: "W (lernen → lernte → gelernt)" },
            { left: "schwimmen", right: "S (schwimmen → schwamm → geschwommen)" },
            { left: "trinken", right: "S (trinken → trank → getrunken)" },
            { left: "leben", right: "W (leben → lebte → gelebt)" },
            { left: "essen", right: "S (essen → aß → gegessen)" },
            { left: "kaufen", right: "W (kaufen → kaufte → gekauft)" }
          ]
        },
        {
          title: "B) Predict the Past by Vowel Tribe",
          rows: [
            { left: "singen → ______ → gesungen", right: "sang" },
            { left: "brechen → ______ → gebrochen", right: "brach" },
            { left: "geben → ______ → gegeben", right: "gab" },
            { left: "finden → ______ → gefunden", right: "fand" }
          ]
        },
        {
          title: "C) Prefix Expansion — gehen (to go)",
          rows: [
            { left: "ausgehen", right: "go out → exit, go out socially" },
            { left: "umgehen", right: "go around → handle, deal with" },
            { left: "vergehen", right: "go away → time passes" },
            { left: "durchgehen", right: "go through → review, go through" },
            { left: "entgehen", right: "go away from → escape, avoid" }
          ]
        }
      ]
    },
    {
      heading: "5.8 Closing Insight for Chapter 5",
      paragraphs: [
        "German verbs are not irregular — they are alive.",
        "They evolve through patterns: vowel tribes, prefix logic, and ge- as a time marker.",
        "Once you learn to hear the shifts and read the stems, verb charts stop being walls of forms. They collapse into intuition.",
        "You stop cramming German verbs and start speaking their history."
      ]
    }
  ],
  module: {
    level: "A1–A2",
    title: "Verben Haben Kraft",
    germanLines: [
      "Ich singe ein Lied.",
      "Gestern sang ich laut im Park.",
      "Heute habe ich schon gesungen.",
      "Meine Stimme geht hoch und tief.",
      "Wörter tanzen, wenn Verben sich ändern."
    ],
    englishLines: [
      "I sing a song.",
      "Yesterday I sang loudly in the park.",
      "Today I have already sung.",
      "My voice goes high and low.",
      "Words dance when verbs change."
    ],
    vocabulary: [
      { german: "singe", english: "I sing (present, strong verb stem: singen)" },
      { german: "sang", english: "sang (simple past, strong verb)" },
      { german: "gesungen", english: "sung (past participle: ge- + -en)" },
      { german: "die Stimme", english: "voice" },
      { german: "tanzen", english: "to dance (weak verb)" }
    ],
    tasks: [
      "Conjugate singen in ich-form: ich singe, ich sang, ich habe gesungen.",
      "Write three parallel sentences with trinken (ich trinke, ich trank, ich habe getrunken).",
      "Write one sentence that uses a strong verb and a weak verb together.",
      "Create a sentence where both a weak and a strong verb appear, for example: Ich schreibe langsam und habe Kaffee getrunken."
    ]
  }
};
