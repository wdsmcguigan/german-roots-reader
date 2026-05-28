// src/chapters/appendices/appendixA.ts

import type { Chapter } from "../types";

export const appendixA: Chapter = {
  id: 101,
  kind: "appendix",
  label: "Appendix A",
  title: "Master Root Index",
  subtitle: "A living catalogue of German stems with English ancestry markers.",
  summary:
    "You don’t memorise this appendix like a vocabulary list. You treat it as a toolbox. Each root gives you a core meaning, English relatives, and typical compounds so you can grow whole word families from a single stem.",
  sections: [
    {
      heading: "A.1 How to Use This Index",
      paragraphs: [
        "This is not a list to cram before an exam. It is a reference you pull from when you need more reach from a single word.",
        "Each root entry includes four things: the core meaning, English relatives, common compounds and derived verbs, and a small memory hook. Over time, you can add your own notes and new examples.",
        "Think of this appendix as a workshop wall full of tools: you do not need every tool every day — but when you need one, you want it within arm’s reach.",
        "The index is intentionally incomplete. It is designed to grow with you: every chapter you read, every conversation you hold, every book you touch can add new family members."
      ]
    },
    {
      heading: "A.2 Core Roots — Starter Set",
      paragraphs: [
        "Here is a starter set of high-value roots — a foundation you’ll extend toward fifty (and beyond) as you read in the wild.",
        "These appear everywhere in everyday German. Learn to recognise them and you suddenly understand dozens of compounds at a glance.",
        "Expand this table yourself in your notebook or digital system. Add new compounds whenever you meet them."
      ],
      exampleBlocks: [
        {
          title: "Sample Root Families",
          rows: [
            {
              left: "gehen — go, move",
              right: "English: gait, gate · Compounds: Zugang, Ausgang, Vorgang, Übergang"
            },
            {
              left: "kommen — come, arrive",
              right: "English: come · Compounds: Willkommen, Einkommen, Auskommen"
            },
            {
              left: "sehen — see",
              right: "English: sight, oversee · Verbs: ansehen, einsehen, übersehen, versehen"
            },
            {
              left: "schreiben — write",
              right: "English: scribe, script · Nouns: Beschreibung, Verschreibung · Verbs: umschreiben"
            },
            {
              left: "nehmen — take",
              right: "English: nimble, numb · Verbs: annehmen, aufnehmen, entnehmen, übernehmen"
            },
            {
              left: "geben — give",
              right: "English: give · Verbs: vergeben, ergeben, ausgeben · Noun: Ergebnis"
            },
            {
              left: "laufen — run, walk",
              right: "English: leap (distant) · Nouns: Ablauf, Verlauf, Umlauf"
            },
            {
              left: "sprechen — speak",
              right: "English: speech · Nouns: Gespräch, Versprecher · Verb: versprechen"
            },
            {
              left: "stehen — stand",
              right: "English: stand · Nouns: Zustand, Widerstand, Verstand · Verb: bestehen"
            },
            {
              left: "bringen — bring",
              right: "English: bring · Nouns: Verbindung, Einbringung · Verb: mitbringen"
            },
            {
              left: "ziehen — pull, move",
              right: "English: tug, tow, tie · Compounds: Anzug, Umzug, Erziehung, Zug · Verbs: anziehen, ausziehen, einziehen, umziehen · Hook: the wagon that became the move"
            },
            {
              left: "gern — gladly, with pleasure",
              right: "English cousin: yearn · Usage: attaches to a verb to mean ‘I like doing X’ (ich helfe gern) · Hook: when you say it, you are saying ‘yearningly’"
            },
            {
              left: "gar — done, completely, at all",
              right: "English cousins: gear, garb (from Proto-Germanic *garwaz, ‘ready, prepared’) · Two roles: culinary ‘cooked through’ (das Fleisch ist gar) and absolute intensifier (gar nicht = not at all) · Hook: ready and finished"
            }
          ]
        }
      ]
    },
    {
      heading: "A.3 Growing Your Personal Root Map",
      paragraphs: [
        "Do not wait for a teacher or a book to complete this list. Every time you see a familiar stem inside a new word, note it here.",
        "Over months, you will feel a shift: vocabulary no longer feels like separate items. It feels like a network of roots and families — exactly how a native speaker experiences it."
      ]
    }
  ]
};
