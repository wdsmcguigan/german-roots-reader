// types.ts
export interface VocabularyEntry {
  german: string;
  english: string;
}

export interface Section {
  heading: string;
  paragraphs: string[];
  exampleBlocks?: {
    title?: string;
    rows: { left: string; right: string }[];
    moreRows?: { left: string; right: string }[];
    moreTitle?: string;
  }[];
}

export interface Module {
  level: string;
  title: string;
  germanLines: string[];
  englishLines: string[];
  vocabulary: VocabularyEntry[];
  tasks: string[];           // English versions (primary authored content)
  tasksGerman?: string[];   // German versions — shown by default when present
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  sections?: Section[];
  module?: Module;
  kind?: "appendix"; // optional
  label?: string;    // optional label for appendices
}
