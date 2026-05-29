# Write Chapter

Drafts a new chapter for German Roots Reader using the `chapter-writer` agent.
The agent reads the book index and adjacent chapters before writing, produces a
complete TypeScript `Chapter` object, outputs a self-critique, then waits for
your approval before touching any file.

## Usage

Paste a brief after the command. The brief should answer:

```
/write-chapter
id: [exact integer — check src/chapters/index.ts to confirm the slot is free]
title: [working title]
theme: [the linguistic or etymological relationship this chapter covers]
slot: [what chapter comes immediately before and after, by number + title]
key sections:
  - [major point, story, or example to include]
  - [...]
cross-references: [specific chapters/sections to reference or build on]
module: [yes (A1/A2/B1) | no]
notes: [anything else — tone targets, things to avoid, promises to honor]
```

## Example Brief

```
/write-chapter
id: 6
title: Word Order
theme: German V2 rule, the Satzklammer (verb bracket), verb-final in
       subordinate clauses — why German word order feels so different and
       why it follows strict, learnable logic
slot: after Ch 5 (Strong vs Weak Verbs), before Ch 6 (Root Families) [shift
      existing Ch 6 onwards up by one if needed]
key sections:
  - Open by honoring the Ch 4 cliffhanger (§4.7 promised word order was next)
  - The V2 rule: second position, not second word — show with examples
  - Satzklammer: the verb bracket that holds subordinate clauses together
  - Verb-final in subordinate clauses: why "weil" changes everything
  - Closing: show a full complex sentence decoded step by step
cross-references: Ch 4 §4.7 (forward pointer to honor), Ch 5 verb forms
module: yes, A2
notes: The enthusiast angle — English once had freer word order; this is
       about convergence and divergence, not just a learner grammar rule
```

## What the Agent Does

1. **Reads** `src/chapters/types.ts`, `src/chapters/index.ts`, and the two
   adjacent chapters in full before writing anything
2. **Drafts** the complete chapter as a TypeScript code block
3. **Self-critiques** — voice, dual-audience appeal, arc continuity, module quality
4. **Waits** for your explicit approval (a question or suggestion is not approval)
5. **Writes** to `src/chapters/chapterNN.ts` only after you say go ahead

## After the Agent Writes the File

You still need to:
- Add the import and entry to `src/chapters/index.ts`
- Run `npm run build` to confirm no TypeScript errors
- Run `/editorial-review` after integration to catch arc or voice issues in context

## Notes

- Use this command for **new chapters only** — chapters that don't exist yet
- For enriching narrative in an **existing chapter**, use `/expand-narrative`
  (coming soon) which takes a specific section and deepens its story content
- The Practice Module (`module` field) is learner-targeted and calibrated to
  the specified level; it is not part of the audiobook version of the content
- If you're unsure what chapter ID to assign because ED#3/ED#4 restructuring
  hasn't landed yet, do the structural edits first so numbering is settled
  before the agent drafts cross-references
