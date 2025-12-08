// chapters.ts
import type { Chapter } from "./types";
import { chapter01 } from "./chapter01";
import { appendixE } from "./appendices/appendixE";
import { appendixF } from "./appendices/appendixF";
// later:
// import { chapter02 } from "./chapter02";
// import { chapter03 } from "./chapter03";
// …

export const chapters: Chapter[] = [
  chapter01,
  appendixE,
  appendixF,
  // chapter02,
  // chapter03,
  // …
];
