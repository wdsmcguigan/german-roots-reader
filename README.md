# German Roots Reader

An interactive web reader for *German Through Its Roots* — a book that teaches German by tracing the shared etymology between German and English.

## What it is

A single-page React app that presents the book's chapters and appendices in a clean reading interface. Each chapter covers a linguistic concept (sound shifts, root families, compound-word logic, etc.) with structured explanations, example tables, and an optional reading practice module with German text, English translation, vocabulary, and exercises.

Key features:
- Dark / light mode (dark-first)
- Collapsible chapter navigation sidebar
- Per-chapter notes saved in the browser (localStorage)
- Reading module drawer (right side) with German text, togglable English translation, vocabulary list, and exercise tasks — resizable on desktop
- Expandable example tables within chapter sections

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS 3

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run lint
```

## Content structure

All book content lives in `src/chapters/` as plain TypeScript data files. Each chapter or appendix exports a `Chapter` object (see `src/chapters/types.ts`). The active chapter list is assembled in `src/chapters/index.ts`.

Chapters are numbered 1–12. Appendices use IDs ≥ 100 and `kind: "appendix"`.
