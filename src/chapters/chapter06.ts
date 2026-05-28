// src/chapters/chapter06.ts

import type { Chapter } from "./types";

export const chapter06: Chapter = {
  id: 6,
  title: "The Engineering Layer — How Prefixes Steer Meaning",
  subtitle: "Five small syllables that rebuild any verb.",
  summary:
    "Prefixes and suffixes are the engineering layer of German. Once you know what they usually do, you stop guessing and start decoding — and you can build new words with confidence. This chapter takes the five core inseparable prefixes apart (ver-, be-, ent-, er-, zer-), shows you the separable family, and lays out the suffix logic that signals what kind of thing a word is.",
  sections: [
    {
      heading: "6.1 Prefix Function Map",
      paragraphs: [
        "Take schlafen (to sleep). Add ver- and you get verschlafen — to oversleep, to miss something by sleeping through it. Add ein- and you get einschlafen — to fall asleep. Same stem, different animal. The prefix did all the work.",
        "German prefixes do not just ‘decorate’ verbs. They redirect meaning: inward, outward, apart, completed, wrong, achieved.",
        "You do not need to memorise every prefix combination. You only need a clear sense of each prefix’s typical direction. Then sehen, an•sehen, über•sehen, ein•sehen, versehen stop looking random.",
        "Each prefix also has an English ancestor or cousin — sometimes hiding inside a single archaic word, sometimes the exact same prefix English still uses. Watch the right column."
      ],
      exampleBlocks: [
        {
          title: "Common Verb Prefixes (with English Cousins)",
          rows: [
            {
              left: "ver-",
              right: "change, distort, complete · English cousin: for- (forget, forbid, forlorn); mis- when it means error · verlieren, verbessern, verbrennen"
            },
            {
              left: "be-",
              right: "direct action onto an object · English cousin: be- (befriend, belittle, bemoan) — a clean 1:1 match · bekommen, bearbeiten, begleiten"
            },
            {
              left: "ent-",
              right: "remove, undo, release · English cousin: un-, de-, dis- (unpack, decouple); ancient kin survives in answer (and-) · entfernen, entkommen, entnehmen"
            },
            {
              left: "er-",
              right: "achieve, result in, begin · English cousin: a- (awake, arise); often rendered as ‘out’ or ‘up’ for completion · erreichen, erinnern, erleben"
            },
            {
              left: "zer-",
              right: "break apart, shatter · English lost its native equivalent (Old English to-, as in to-broken); now dis- or ‘to pieces’ · zerreißen, zerbrechen"
            },
            {
              left: "um-",
              right: "around, re-, change around · English: around, re- · umschreiben, umziehen, umwerfen"
            },
            {
              left: "an-",
              right: "onset, approach, start · English: on, at · anfangen, ankommen, ansehen"
            },
            {
              left: "auf-",
              right: "upward, open, begin · English: up, open · aufstehen, aufmachen, aufbauen"
            },
            {
              left: "ab-",
              right: "away, down, off · English: off (same ancient root) · abfahren, abnehmen, abschneiden"
            }
          ]
        }
      ]
    },
    {
      heading: "6.2 Separable vs Inseparable: Two Behaviors",
      paragraphs: [
        "German prefixes come in two breeds. Some fuse permanently with the verb stem and never move. Others snap on and off like a magnet, jumping to the end of the sentence in the present tense.",
        "The difference is structural, not optional. Each prefix belongs to one camp from birth.",
        "Verschlafen and einschlafen show it cleanly. Both attach to schlafen (to sleep). Both describe sleep. But they behave like different species."
      ],
      exampleBlocks: [
        {
          title: "Verschlafen vs Einschlafen — Same Stem, Different Animal",
          rows: [
            { left: "verschlafen", right: "inseparable. ver- stays welded on. Present: ich verschlafe. Perfect: ich habe verschlafen. Meaning: to oversleep, miss something by sleeping through it." },
            { left: "einschlafen", right: "separable. ein- snaps off and lands at the end. Present: ich schlafe ein. Perfect: ich bin eingeschlafen. Meaning: to fall asleep — a change of state, hence sein." }
          ]
        },
        {
          title: "Which Prefixes Belong to Which Camp",
          rows: [
            { left: "Always inseparable", right: "be-, ent-, er-, ver-, zer-, miss-, emp-" },
            { left: "Always separable", right: "ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, zu-" },
            { left: "Either, depending on meaning", right: "durch-, um-, über-, unter-, wieder-" }
          ]
        }
      ]
    },
    {
      heading: "6.3 Inseparable Prefixes in Depth",
      paragraphs: [
        "The five core inseparable prefixes — ver-, ent-, zer-, be-, er- — are not just direction markers. Each does specific semantic work on the verb it joins. Once you know the job, half the dictionary opens up.",
        "Each prefix also has an English ancestor or cousin, often hiding inside an old or specialised word."
      ],
      exampleBlocks: [
        {
          title: "ver- : The Four Jobs",
          rows: [
            { left: "1. Mistake", right: "sich verhören (mishear), sich vertippen (typo), sich verlaufen (get lost walking)" },
            { left: "2. Transformer", right: "verbessern (make better), verstärken (amplify), vergrößern (enlarge)" },
            { left: "3. Linker / Locker", right: "verbinden (connect), verkabeln (wire up), verschließen (lock, seal)" },
            { left: "4. Consumer", right: "verbrauchen (use up), verschwinden (disappear), verkaufen (sell — make it go away for money)" },
            { left: "English cousin", right: "for- (forget, forbid, forlorn, forswear); mis- when ver- means error" }
          ]
        },
        {
          title: "ent- : The Extractor",
          rows: [
            { left: "entfernen", right: "to remove — literally ‘make far’" },
            { left: "entdecken", right: "to discover — pull the cover off" },
            { left: "entpacken", right: "to unpack, unzip" },
            { left: "entkommen", right: "to escape" },
            { left: "entkoppeln", right: "to decouple, isolate" },
            { left: "English cousin", right: "un-, de-, dis- (unpack, decouple, discover); ancient kin and- survives in answer (‘swear back’)" }
          ]
        },
        {
          title: "zer- : The Destroyer",
          rows: [
            { left: "zerbrechen", right: "to break to pieces" },
            { left: "zerreißen", right: "to tear to shreds" },
            { left: "zerlegen", right: "to take apart, dismantle" },
            { left: "zerstören", right: "to destroy" },
            { left: "English cousin", right: "Old English to- (to-broken, to-torn) was lost in the Middle Ages. Modern English fills the gap with dis-, or with ‘to pieces’ / ‘apart’" }
          ]
        },
        {
          title: "be- : The Targeter",
          rows: [
            { left: "antworten → beantworten", right: "answer to → answer (it) — the prefix absorbs the preposition" },
            { left: "schreiben → beschreiben", right: "write → describe (write upon a subject)" },
            { left: "greifen → begreifen", right: "grasp → comprehend (grasp the idea)" },
            { left: "suchen → besuchen", right: "seek → visit" },
            { left: "English cousin", right: "be- (befriend, belittle, bemoan, bewitch) — a clean 1:1 match with the same job: apply the verb directly to the target" }
          ]
        },
        {
          title: "er- : The Achiever",
          rows: [
            { left: "finden → erfinden", right: "find → invent (find something that wasn’t there)" },
            { left: "kennen → erkennen", right: "know → recognise (knowing arrives in an instant)" },
            { left: "reichen → erreichen", right: "reach → achieve" },
            { left: "lernen → erlernen", right: "learn → master, learn completely" },
            { left: "Dark side", right: "er- means ‘carry through to the end’ — and the end can be fatal: erfrieren (freeze to death), erschießen (shoot dead), erwürgen (strangle to death)" },
            { left: "English cousin", right: "a- (awake, arise) shares the root; modern English usually adds ‘out’ or ‘up’ to mean completion (figure out, make up)" }
          ]
        }
      ]
    },
    {
      heading: "6.4 Separable Prefixes as German Phrasal Verbs",
      paragraphs: [
        "Separable prefixes are not abstract. They point in specific spatial directions: on, off, in, out, after, up. Each one has a direct English match — sometimes literally the same word.",
        "They behave the way English phrasal verbs do: switch on, switch off, turn in, look after, set up. The German prefix arrives at the end of the sentence the way ‘off’ arrives at the end of ‘switch it off.’"
      ],
      exampleBlocks: [
        {
          title: "Spatial Prefixes and Their English Match",
          rows: [
            { left: "ein- (in / en-)", right: "einbauen (build in, install), einatmen (breathe in), eintreten (step in, enter)" },
            { left: "zu- (to)", right: "zuhören (listen to), zumachen (close — ‘make to’), zuweisen (assign, allocate)" },
            { left: "ab- (off, of)", right: "abschalten (switch off), abnehmen (take off, lose weight), abfahren (depart), absagen (cancel — ‘say off’)" },
            { left: "an- (on, at)", right: "anschalten (switch on), ankommen (arrive — ‘come at’), anfangen (begin — ‘grab onto’), anrufen (phone — ‘call at’)" },
            { left: "nach- (after, re-)", right: "nachdenken (think after, reflect), nachbessern (touch up), nachbauen (recreate, clone)" },
            { left: "statt- (stead)", right: "stattfinden (take place — literally ‘find stead’; English cousin lives in in-stead, home-stead)" },
            { left: "teil- (deal)", right: "teilnehmen (take part, participate); English cousin survives in ‘a great deal of’" }
          ]
        }
      ],
    },
    {
      heading: "6.5 Suffix Logic (Meaning from Endings)",
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
      heading: "6.6 Combining Roots, Prefixes and Suffixes",
      paragraphs: [
        "A single root plus one prefix plus one suffix already gives you three layers of meaning: base action, direction, and kind of thing.",
        "Once this becomes intuitive, you no longer fear long words. You disassemble them, read the logic, and move on."
      ]
    },
    {
      heading: "6.7 Closing Insight for Chapter 6",
      paragraphs: [
        "Prefixes and suffixes are not decoration. They are the steering wheels and the badges of German vocabulary — they tell you which direction the verb is going, and what kind of object the noun is.",
        "From here on, every new long word is two questions, not one panic: Which prefix? Which suffix? The answer arrives faster than the dictionary does.",
        "Next, we use these prefixes to grow root families: how a single stem like gehen, schreiben, or nehmen explodes into dozens of related words once you let the prefixes loose on it."
      ]
    }
  ]
};
