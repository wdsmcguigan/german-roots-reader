// chapter05.ts
import type { Chapter } from "./types";

export const chapter06: Chapter = {
  id: 6,
  title: "Strong vs Weak Verbs",
  subtitle: "Vowel tribes, verb DNA, and living history.",
  summary:
    "German verbs are not random. Weak verbs follow a safe, regular pattern; strong verbs carry ancient vowel shifts you already know from English: sing–sang–sung, drink–drank–drunk. This chapter shows you how to treat strong verbs as vowel tribes and weak verbs as your default baseline — plus how prefixes and ge- turn a single root into an entire verb family.",
  sections: [
    {
      heading: "6.1 The Truth About German Verbs",
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
      heading: "6.2 The Two Verb Tribes",
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
      heading: "6.3 Vowel Tribes: Strong Verb Clans",
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
      heading: "6.4 Prefix Power: The Verb Multiplier (Teaser)",
      paragraphs: [
        "German prefixes do not just decorate verbs. They multiply them. One stem can produce an entire family of meanings — all still connected to the same core idea.",
        "Chapter 7 takes the prefix system apart in detail — what each prefix does, how separable and inseparable prefixes behave, and their English cousins. For now, just notice the multiplication in action with a single verb."
      ],
      exampleBlocks: [
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
      heading: "6.5 The ge- Prefix: Time Marker, Not Decoration",
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
      heading: "6.6 Haben or Sein? Two Helpers, Two Worlds",
      paragraphs: [
        "Two helpers, one rule of thumb: most verbs take haben. Use sein only when the subject moves to a new place (gehen, kommen, fahren) or changes state on its own (einschlafen, sterben). Everything else: haben. That rule covers about 95% of cases. The rest of this section is the interesting 5% — verbs that flip meaning depending on which helper you choose.",
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
      heading: "6.7 Closing Insight for Chapter 6",
      paragraphs: [
        "German verbs are not irregular — they are alive.",
        "They evolve through patterns: vowel tribes, prefix logic, and ge- as a time marker.",
        "Once you learn to hear the shifts and read the stems, verb charts stop being walls of forms. They collapse into intuition.",
        "You stop cramming German verbs and start speaking their history.",
        "Next we open up the prefix layer in depth — ver-, be-, ent-, er-, zer-, and the separable family — so a single stem like schlafen can fork into verschlafen and einschlafen and you read both on sight."
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
      { german: "tanzen", english: "to dance (weak verb)" },
      { german: "trinken / trank / getrunken", english: "to drink (strong: i → a → u)" },
      { german: "kaufen / kaufte / gekauft", english: "to buy (weak: regular -te / -t)" },
      { german: "verstehen", english: "to understand (prefix ver- + stehen)" },
      { german: "ich habe gezogen", english: "I pulled (with haben — physical action)" },
      { german: "ich bin gezogen", english: "I moved / relocated (with sein — change of place)" },
      { german: "das Verb", english: "verb" },
      { german: "stark / schwach", english: "strong / weak (verb class)" }
    ],
    tasks: [
      "Conjugate singen in ich-form: ich singe, ich sang, ich habe gesungen.",
      "Write three parallel sentences with trinken (ich trinke, ich trank, ich habe getrunken).",
      "Write one sentence that uses a strong verb and a weak verb together.",
      "Pick the verb stehen and write three sentences that each use a different prefix verb from §6.4 (e.g., verstehen, bestehen, entstehen). Notice how each prefix tilts the meaning.",
      "Classify these as weak (W) or strong (S), then write each in past + perfect: lernen, schwimmen, trinken, leben, essen, kaufen. (Hints: schwimmen → schwamm → geschwommen; essen → aß → gegessen.)"
    ],
    tasksGerman: [
      "Konjugiere singen in der Ich-Form: ich singe, ich sang, ich habe gesungen.",
      "Schreibe drei parallele Sätze mit trinken (ich trinke, ich trank, ich habe getrunken).",
      "Schreibe einen Satz, in dem ein starkes und ein schwaches Verb gemeinsam vorkommen.",
      "Nimm das Verb stehen und schreibe drei Sätze, die jeweils ein anderes Präfixverb aus §6.4 verwenden (z. B. verstehen, bestehen, entstehen). Achte darauf, wie jedes Präfix die Bedeutung verschiebt.",
      "Ordne diese Verben als schwach (W) oder stark (S) ein und schreibe jeweils Präteritum und Perfekt: lernen, schwimmen, trinken, leben, essen, kaufen. (Hinweise: schwimmen → schwamm → geschwommen; essen → aß → gegessen.)",
    ]
  }
};
