# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (http://localhost:5173)
npm run build     # type-check + production build
npm run lint      # ESLint
npm run preview   # preview production build locally
```

There is no test suite. There is no test runner configured.

## Architecture

**German Roots Reader** is a single-page React 19 app (Vite + TypeScript + Tailwind CSS) that serves as an interactive reader for the book *German Through Its Roots*. It has no router — chapter navigation is purely React state.

### State & persistence

All UI state lives in `App.tsx`. Persistent state is stored in `localStorage` under these keys:
- `grr-notes` — per-chapter text notes (keyed by chapter `id`)
- `grr-left-sidebar` — left sidebar open/closed
- `grr-right-sidebar` — reading module drawer open/closed
- `grr-right-column-width` — resizable right drawer width in px

### Content system

All book content is plain TypeScript data in `src/chapters/`. The shape is defined in `src/chapters/types.ts`:

- **`Chapter`** — top-level unit with `id`, `title`, `subtitle`, `summary`, optional `sections`, optional `module`, and optional `kind: "appendix"` + `label`
- **`Section`** — heading, paragraphs array, and optional `exampleBlocks`
- **`Module`** — per-chapter reading practice: German text lines, English translation lines, vocabulary pairs, and exercise tasks
- **`ExampleBlock`** (the data shape inside Section) — a two-column table with optional expandable `moreRows`

Chapters are numbered 1–12 (`id` 1–12). Appendices use `id >= 100` and `kind: "appendix"` (e.g., Appendix A = `id: 101`).

**Active manifest:** `src/chapters/index.ts` exports the `chapters` array used by the app (all 12 chapters + 6 appendices A–F). The file `src/chapters/chapters.ts` is a legacy stub that only loads chapter01 + appendixE/F — it is not used by the app.

### Component structure

The app has two components:
- **`App.tsx`** — the entire shell: top bar, collapsible left sidebar (chapter nav), main content area, and the right-side reading module drawer. The drawer is fixed-positioned, slides in/out, and is resizable by dragging its left edge on desktop.
- **`ExampleBlock.tsx`** — renders a two-column term/definition table with an optional expandable "more rows" section (collapsed by default).

### Adding content

To add a new chapter: create `src/chapters/chapterNN.ts` exporting a `Chapter` object, then add it to the array in `src/chapters/index.ts`. To add content to an existing chapter, add `sections` entries; to add a reading module (right drawer), add a `module` field. The right-drawer toggle button only appears in the header when the active chapter has a `module`.
