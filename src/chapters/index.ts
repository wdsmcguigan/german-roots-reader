// src/chapters/index.ts

import type { Chapter } from "./types";

// Import all chapters
import { chapter01 } from "./chapter01";
import { chapter02 } from "./chapter02";
import { chapter03 } from "./chapter03";
import { chapter04 } from "./chapter04";
import { chapter05 } from "./chapter05";
import { chapter06 } from "./chapter06";
import { chapter07 } from "./chapter07";
import { chapter08 } from "./chapter08";
import { chapter09 } from "./chapter09";
import { chapter10 } from "./chapter10";
import { chapter11 } from "./chapter11";
import { chapter12 } from "./chapter12";

// Import all appendices
import { appendixA } from "./appendices/appendixA";
import { appendixE } from "./appendices/appendixE";
import { appendixF } from "./appendices/appendixF";

// Export types for convenience
export * from "./types";

// Export chapters array in the same order as the original
export const chapters: Chapter[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06,
  chapter07,
  chapter08,
  chapter09,
  chapter10,
  chapter11,
  chapter12,
  // Appendices
  appendixA,
  appendixE,
  appendixF,
];

