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
  }[];
}

export interface Module {
  level: string;
  title: string;
  germanLines: string[];
  englishLines: string[];
  vocabulary: VocabularyEntry[];
  tasks: string[];
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
