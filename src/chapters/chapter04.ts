// src/chapters/chapter04.ts

import type { Chapter } from "./types";

export const chapter04: Chapter = {
  id: 4,
  title: "Word Order",
  subtitle: "Why German verbs land where they do — and how the sentence holds itself open.",
  summary:
    "German word order looks scrambled until you see the shape underneath it. The conjugated verb takes the second position. Anything non-conjugated — an infinitive, a participle, a stray prefix — gets sent to the very end. In subordinate clauses, the verb goes all the way to the back. This chapter shows you the three patterns that govern almost every German sentence, and the thousand-year history that explains why English lost them and German didn't.",
  sections: [
    {
      heading: "4.1 The Promise from Chapter 3",
      paragraphs: [
        "Chapter 3 closed with a small debt. After laying out cases as labels for roles — who acts, who is affected, who receives — it pointed forward and said: in the next chapter, we combine this case logic with word order, and you'll see why German sometimes sends verbs to the end, and how that structure is far cleaner than it first appears. This chapter pays that debt.",
        "The reason the promise matters is that cases and word order are partners, not rivals. English fixes word order strictly — subject, verb, object — and uses position itself to mark who is doing what. The man bit the dog and the dog bit the man are entirely different events, and only the order tells you which one happened. German, having kept its case endings, doesn't need position to do that work. Den Mann biss der Hund and der Mann biss den Hund mean the same thing: the dog did the biting, and the man received it, because den marks the man as accusative either way.",
        "That freedom is the whole reason German word order can look strange. It's not chaotic. It's that the language doesn't have to keep the subject in front of the verb to be understood — the case endings already said who the subject is. So German uses word order for something else. It uses it for emphasis, for rhythm, and for the one rule we'll meet next: the verb's appointed seat."
      ]
    },
    {
      heading: "4.2 The V2 Rule: The Verb's Appointed Seat",
      paragraphs: [
        "Almost every German main clause obeys a single law: the conjugated verb sits in the second position. Not the second word — the second position. This is the difference between counting letters and counting chunks, and it's where most learners trip on their first day and most enthusiasts find the pattern beautiful on their first look.",
        "A position is a constituent — a meaningful chunk of meaning. It might be a single word like heute (today). It might be a phrase like nächsten Sommer (next summer). It might be a whole adverbial expression like nach dem langen Frühstück mit meiner Schwester (after the long breakfast with my sister). Whatever fills the first slot — one word or eight — the verb comes immediately after it. Always.",
        "Watch what happens when we move the first slot around. The sentence stays the same. Only the emphasis changes."
      ],
      exampleBlocks: [
        {
          title: "The Verb Lands in Position 2 No Matter What Comes First",
          rows: [
            { left: "Ich trinke morgen Kaffee mit Anna.", right: "I drink coffee with Anna tomorrow. (Position 1: Ich. Verb: trinke.)" },
            { left: "Morgen trinke ich Kaffee mit Anna.", right: "Tomorrow I drink coffee with Anna. (Position 1: Morgen. Verb still: trinke.)" },
            { left: "Mit Anna trinke ich morgen Kaffee.", right: "With Anna I drink coffee tomorrow. (Position 1: Mit Anna. Verb still: trinke.)" },
            { left: "Nach der langen Sitzung trinke ich morgen Kaffee mit Anna.", right: "After the long meeting I drink coffee with Anna tomorrow. (Position 1: a six-word phrase. Verb still: trinke.)" }
          ]
        }
      ]
    },
    {
      heading: "4.3 Why V2 Exists at All",
      paragraphs: [
        "The V2 rule is not a quirk German invented. It is the verb-second pattern shared across the Germanic family — Dutch has it, Swedish has it, Norwegian has it, Icelandic has it. English used to have it too. Old English routinely placed the verb second after an adverbial: Þa cwæð he — then said he. That's V2. You can still hear its ghost in a few stiff inversions: never had I seen, hardly did he speak, only then did she answer. Modern English speakers don't think of these as a rule. They're just the surviving ledge of a structure that used to run the whole house.",
        "The reason English lost it and German kept it comes back to the same fork in the road we met in Chapter 3. When English shed its case endings, it had to use word order to mark roles. Subject came to mean the noun in front of the verb. Once that became the deal, the verb couldn't move freely anymore — moving it would confuse who was doing what. German kept its endings, so its verb stayed mobile. The verb's seat in position 2 became a structural marker in its own right: not a clue about who's the subject, but a clue about what kind of sentence you're reading.",
        "So when you see Heute gehe ich ins Kino — today go I to the cinema — your inner English speaker may flinch. But the verb-second pattern is older than English's strict order. You're meeting the original Germanic shape that English drifted away from."
      ]
    },
    {
      heading: "4.4 The Satzklammer: The Sentence Holds Itself Open",
      paragraphs: [
        "Once you know about V2, you're ready for the most elegant move in German syntax. It's called the Satzklammer — the sentence bracket, or verb bracket. The idea is simple. When a German sentence has more than one verb element — a conjugated verb plus an infinitive, or a conjugated verb plus a participle, or a conjugated verb plus a separable prefix — the conjugated part stays in position 2, and the other piece flies to the very end of the clause. Everything in between is held inside the bracket.",
        "Visually, you can see it as two posts holding open a tent. The conjugated verb is the front post. The non-conjugated piece is the back post. The content of the sentence — objects, adverbs, time expressions, prepositional phrases — fills the space between them. The reader doesn't know exactly what the sentence is doing until they reach the back post, which is precisely the point. German loves to keep the punchline at the end.",
        "The phrase ich rufe dich morgen früh an looks, to an English speaker, like an unfinished sentence with a stranded preposition. It's not. It's a complete sentence, and the an at the end is the second half of anrufen — the separable verb 'to call.' The conjugated piece rufe sat down in position 2 the moment the sentence started. The prefix an held the door open until everything else (you, tomorrow, early) had been said. Then it closed the bracket.",
        "This is what Chapter 7 will call the separable prefix family: an, auf, ab, ein, aus, mit, vor, nach, zu. Each one is a syllable with spatial meaning that detaches from its verb and waits at the back. The Satzklammer is the reason it waits there. The verb isn't broken. The sentence is just being held open."
      ],
      exampleBlocks: [
        {
          title: "The Verb Bracket in Action",
          rows: [
            { left: "Ich rufe dich morgen früh an.", right: "I'll call you early tomorrow. (Front post: rufe. Back post: an. The prefix lands last because the Satzklammer holds the sentence open.)" },
            { left: "Wir haben gestern einen Film gesehen.", right: "We watched a film yesterday. (Front post: haben. Back post: gesehen. The participle waits at the end.)" },
            { left: "Sie will heute Abend ihre Mutter besuchen.", right: "She wants to visit her mother tonight. (Front post: will. Back post: besuchen. The infinitive closes the bracket.)" },
            { left: "Ich werde nächstes Jahr nach Berlin ziehen.", right: "I'll move to Berlin next year. (Front post: werde. Back post: ziehen — the same verb from Chapter 6's haben/sein story, here waiting at the back of its own bracket.)" }
          ]
        }
      ]
    },
    {
      heading: "4.5 Verb-Final in Subordinate Clauses",
      paragraphs: [
        "There is one more pattern, and it's the one that scares learners most before it stops scaring them. When a German clause starts with a subordinating conjunction — weil (because), dass (that), wenn (when, if), obwohl (although), als (when, in the past), wann (when, in a question) — the verb doesn't sit in position 2 anymore. It goes all the way to the end of the clause.",
        "Ich gehe nicht ins Kino, weil ich müde bin. I'm not going to the cinema, because I tired am. The bin — the conjugated verb of the second clause — has been sent to the very back. There's no Satzklammer to admire here, because the whole verb is at the end. The subordinating conjunction itself, weil, was the trigger. It changes the rules of the clause that follows it.",
        "This is the part that feels most alien — and the part with the deepest history. Indo-European, the ancestor language from which both German and English descend, was largely verb-final. In its earliest reconstructable form, the verb tended to come at the end of the sentence. Sanskrit kept that pattern. Latin had heavy traces of it. Old English had it strongly in subordinate clauses and weakly in main clauses. The story of every Germanic and Romance language since is the story of the verb walking forward, out of the back of the sentence and into the middle. German is the language that walked the least. Its main clauses moved the verb forward to position 2. Its subordinate clauses kept the verb back where it always was.",
        "So when you write weil ich müde bin instead of weil ich bin müde, you are not learning a German oddity. You are using a sentence shape that is older than English, older than Latin, older than the Roman Empire. English finished the journey to subject-verb-object order in every clause type. German stopped halfway, and the seam is visible: main clauses one way, subordinate clauses the other. The seam is where the history shows.",
        "There are even fossils of the old order surviving in stiff English phrasings. The 1662 Book of Common Prayer wedding vow read till death us do part — verb at the end of the clause, the older Germanic shape exactly. Come what may. Be that as it may. As the case may be. Each of these has a verb in a position that modern English would no longer choose freely, and each one feels solemn or legal or proverbial precisely because it preserves an older syntax. German didn't keep these as fossils. It kept them as the working rule for an entire category of sentence."
      ],
      exampleBlocks: [
        {
          title: "Subordinating Conjunctions Send the Verb to the End",
          rows: [
            { left: "Ich gehe nicht ins Kino, weil ich müde bin.", right: "I'm not going to the cinema because I'm tired. (weil → bin lands at the end.)" },
            { left: "Er sagt, dass er morgen kommt.", right: "He says that he is coming tomorrow. (dass → kommt at the end.)" },
            { left: "Wenn es regnet, bleiben wir zu Hause.", right: "When/if it rains, we stay home. (wenn → regnet at the end of the first clause; then the second clause flips back to V2, with bleiben in position 2.)" },
            { left: "Obwohl sie spät ankommt, bringt sie immer Blumen.", right: "Although she arrives late, she always brings flowers. (obwohl → the separable verb ankommt arrives at the end as one piece — the prefix and stem reunite when sent to the back.)" }
          ],
          moreTitle: "Common Subordinators to Watch For",
          moreRows: [
            { left: "weil", right: "because" },
            { left: "dass", right: "that" },
            { left: "wenn", right: "when, if" },
            { left: "als", right: "when (a single past event)" },
            { left: "obwohl", right: "although" },
            { left: "damit", right: "so that, in order that" },
            { left: "während", right: "while" },
            { left: "bis", right: "until" }
          ]
        }
      ]
    },
    {
      heading: "4.6 One Long Sentence, Decoded",
      paragraphs: [
        "Let's take everything from this chapter and Chapter 3 and run it through a single sentence. Here it is:",
        "Wenn der Mann seiner Schwester morgen das Buch geben will, muss er es vorher kaufen.",
        "Word for word: When the man to-his sister tomorrow the book give wants, must he it beforehand buy. To an English reader, it looks like the words have been thrown in a blender. To a reader who has Chapter 3 and Chapter 4 in their head, it looks like a small, neat machine.",
        "Start at the front. Wenn is a subordinating conjunction, so the whole first clause will have its conjugated verb at the end. That verb turns out to be will (wants), and what it wants is geben (to give) — an infinitive, waiting at the back of the Satzklammer that the modal verb opens. Between will and geben sits the cargo: der Mann, the subject, marked nominative; seiner Schwester, marked dative, because Schwester is the receiver of what will be given; morgen, an adverb of time; das Buch, marked accusative, because the book is the thing being given. Four roles, all labelled by their articles, all sitting calmly inside the verb bracket of the subordinate clause.",
        "Then the comma. Now the main clause starts. The first clause itself counts as position 1 — the whole when-clause is one big constituent — so the conjugated verb of the main clause arrives immediately in position 2: muss. After that comes er (the subject, nominative), es (the book again, accusative, now a pronoun), vorher (an adverb meaning beforehand), and finally kaufen (the infinitive to buy, closing the main clause's Satzklammer).",
        "Once you see all of this, the sentence reads in one breath: If the man wants to give his sister the book tomorrow, he has to buy it beforehand. Nothing was scrambled. Every piece was exactly where the rules said it should be. The cases told you who was doing what. The V2 rule told you where the conjugated verb sat. The Satzklammer held the sentence open until the infinitive arrived. The subordinating conjunction flipped one clause's verb to the back. Four rules. One sentence. Total clarity once you know the rules.",
        "This is what Chapter 13 means when it looks back and says you now possess structural awareness — cases, word order, prefix verbs, compounds. The first two of those four are now in your hands."
      ]
    },
    {
      heading: "4.7 Closing Insight for Chapter 4",
      paragraphs: [
        "German word order is not free, and it is not chaotic. It runs on three patterns. The conjugated verb sits in position 2 of a main clause. Any other verb element — infinitive, participle, separable prefix — sits at the end of the clause, holding the sentence open. And in any clause introduced by a subordinating conjunction, the conjugated verb itself moves to the end, where Indo-European put it before the Romans were a city.",
        "Combine these three patterns with the case logic from Chapter 3 and you can read most German sentences as architecture: front post, content, back post, with each noun's case telling you its role no matter where it appears in the line.",
        "The next chapter turns from sentence-shape to word-shape. We've spent two chapters on what German does with cases and word order — both pieces of an inheritance English largely let go of. Next we look at the third piece German kept and English didn't: grammatical gender. Der, die, das — three little articles carrying a thousand years of Indo-European pattern that English flattened in a single generation."
      ]
    }
  ],
  module: {
    level: "A2",
    title: "Die Wortstellung — Wo das Verb sitzt",
    germanLines: [
      "Heute trinke ich Kaffee mit meiner Schwester.",
      "Mit meiner Schwester trinke ich heute Kaffee.",
      "Ich rufe dich morgen früh an.",
      "Wir haben gestern einen Film gesehen.",
      "Sie will heute Abend ihre Mutter besuchen.",
      "Ich gehe nicht ins Kino, weil ich müde bin.",
      "Wenn es regnet, bleiben wir zu Hause.",
      "Das Verb hat immer einen festen Platz."
    ],
    englishLines: [
      "Today I drink coffee with my sister.",
      "With my sister I drink coffee today.",
      "I'll call you early tomorrow.",
      "We watched a film yesterday.",
      "She wants to visit her mother tonight.",
      "I'm not going to the cinema because I'm tired.",
      "When/if it rains, we stay at home.",
      "The verb always has a fixed seat."
    ],
    vocabulary: [
      { german: "die Wortstellung", english: "word order" },
      { german: "der Satz", english: "sentence" },
      { german: "die Position", english: "position" },
      { german: "die Satzklammer", english: "the sentence bracket (verb bracket)" },
      { german: "der Nebensatz", english: "subordinate clause" },
      { german: "der Hauptsatz", english: "main clause" },
      { german: "anrufen", english: "to call (separable: ruf … an)" },
      { german: "besuchen", english: "to visit" },
      { german: "weil", english: "because (sends verb to end)" },
      { german: "dass", english: "that (sends verb to end)" },
      { german: "wenn", english: "when, if (sends verb to end)" },
      { german: "obwohl", english: "although (sends verb to end)" }
    ],
    tasks: [
      "Take three English sentences and rewrite each one twice in German: once starting with the subject, once starting with a time expression (heute, morgen, gestern). Underline the conjugated verb each time and check that it lands in position 2.",
      "Find three separable verbs (for example anrufen, aufstehen, einschlafen). Write a present-tense sentence with each, and mark where the prefix lands. You should see it at the end of the clause every time.",
      "Write three sentence pairs in the form 'X, weil Y' — for example 'Ich bleibe zu Hause, weil ich müde bin.' Confirm that the verb in the weil-clause goes to the very end.",
      "Take this sentence and label every piece: Wenn der Mann seiner Schwester morgen das Buch geben will, muss er es vorher kaufen. Mark the cases on each noun and circle both back-post verbs (geben, kaufen) and both front-post verbs (will, muss)."
    ],
    tasksGerman: [
      "Nimm drei englische Sätze und schreibe jeden zweimal auf Deutsch um: einmal mit dem Subjekt am Anfang, einmal mit einer Zeitangabe (heute, morgen, gestern) am Anfang. Unterstreiche jedes Mal das konjugierte Verb und prüfe, ob es in Position 2 steht.",
      "Suche drei trennbare Verben (zum Beispiel anrufen, aufstehen, einschlafen). Schreibe mit jedem einen Satz im Präsens und markiere, wo das Präfix landet. Es sollte jedes Mal am Ende des Satzes stehen.",
      "Schreibe drei Satzpaare nach dem Muster „X, weil Y“ — zum Beispiel „Ich bleibe zu Hause, weil ich müde bin.“ Überprüfe, dass das Verb im weil-Satz ganz am Ende steht.",
      "Nimm diesen Satz und beschrifte jedes Element: „Wenn der Mann seiner Schwester morgen das Buch geben will, muss er es vorher kaufen.“ Markiere den Kasus jedes Nomens und kreise beide Verben am hinteren Ende (geben, kaufen) sowie beide Verben in Position 2 (will, muss) ein."
    ]
  }
};
