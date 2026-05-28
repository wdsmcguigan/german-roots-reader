# Changelog

All notable content and code changes to German Roots Reader are tracked here.
Newest changes go at the top.

## 2026-05-28 — Ziehen family, haben/sein split, expanded prefix etymology

Integrated material from an etymological dialogue covering the verb *ziehen*,
the German auxiliary split (haben vs. sein), and the deeper behavior of
German prefixes (separable vs. inseparable, with English cousins).

### Chapter 1 — Shared Roots

- **§1.2** added *gern → yearn* to the "More Cognates Hidden in Plain Sight"
  table. First adverb cognate in the chapter; shows the kinship reaches past
  nouns.

### Chapter 5 — Strong vs Weak Verbs

- **New §5.6 "Haben or Sein? Two Helpers, Two Worlds"** — introduces the
  transitive/intransitive auxiliary rule using *hat gezogen* vs *ist gezogen*
  as the headline case. Flip-pair table covers brechen, schmelzen, reißen.
- Existing **Exercises** renumbered §5.6 → §5.7.
- Existing **Closing Insight** renumbered §5.7 → §5.8.

### Chapter 6 — Root Families

- **§6.3** added *ziehen* as Root Family 5 with English relatives
  tug/tow/tie (and Latin echoes duct/duke). Extended family covers anziehen,
  ausziehen, einziehen, umziehen, Erziehung, Zug.
- **New §6.4 "A Root That Lives a Double Life"** — tells the PIE *deuk-*
  origin, the wagon-pulling-to-migration metonymy, and back-references the
  hat/sein split introduced in §5.6. Includes a "You'll See This Again"
  pattern callout naming English *pack/leave* and *bear/tragen* as parallel
  cases of Germanic physical-load-to-abstract-state metonymy. Explicit note
  that *bear* (the animal) and *bare* (naked) are unrelated false friends
  inside English — the cognate lives in the verb sense alone.
- Existing **How to Generate New Vocabulary** renumbered §6.4 → §6.5.
- Existing **Exercises** renumbered §6.5 → §6.6.
- Existing **Closing Insight** renumbered §6.6 → §6.7.

### Appendix A — Master Root Index

- **§A.2** added three Core Root entries:
  - **ziehen** (English: tug, tow, tie)
  - **gern** (English cousin: yearn)
  - **gar** (English cousins: gear, garb)

### Appendix B — Prefix & Suffix Library

Substantial expansion. Old structure had three sections; new structure has six.

- **§B.1** prefix table now annotates each row with its English cousin:
  ver-/for-, be-/be-, ent-/un-de-dis-, er-/a-, zer-/lost-Old-English-to-,
  ab-/off, an-/on-at, um-/around-re-, auf-/up-open.
- **New §B.2 "Separable vs Inseparable: Two Behaviors"** — uses
  *verschlafen* vs *einschlafen* as the paradigm pair, plus a roster of
  which prefixes belong to which camp.
- **New §B.3 "Inseparable Prefixes in Depth"** — semantic sub-categories:
  - **ver-**: mistake / transformer / linker / consumer
  - **ent-**: extractor
  - **zer-**: destroyer
  - **be-**: targeter (turns intransitive verbs transitive)
  - **er-**: achiever, including the "dark side" (erfrieren, erschießen,
    erwürgen) that illustrates the "carry-to-completion" logic
- **New §B.4 "Separable Prefixes as German Phrasal Verbs"** — frames
  ein-/zu-/ab-/an-/nach-/statt-/teil- as the German equivalent of English
  phrasal verbs. Highlights the noun-prefix surprises: *statt-* / stead
  (stattfinden = "find stead") and *teil-* / deal (teilnehmen = "take part").
- Existing **Suffix Logic** renumbered §B.2 → §B.5.
- Existing **Combining Roots, Prefixes and Suffixes** renumbered §B.3 → §B.6.

### Appendix E — Verb Conjugation Patterns

- **New §E.5 "Auxiliary Verb Selection (Haben vs Sein)"** — rules of thumb
  and a lookup table of verbs that flip auxiliaries based on meaning
  (ziehen, brechen, schmelzen, reißen). Complements Chapter 5.6.

### Editorial decisions captured in this wave

- **Skipped:** *passieren* (cross → happen). The abstraction leap is too
  large for the level the book is pitched at.
- **Skipped:** the *fahren* / *fliegen* vehicle-operator nuance (hat for
  steering, sein for traveling). Real but edge-case; would dilute the
  cleaner hat/sein examples.
- **Deferred to a later wave:** the *\*bher-* / *tragen* root family
  (gebären, Bürde, bear-the-verb). Belongs in a deliberate root-expansion
  alongside other candidates like *werd-*, *stand-*, *sprek-*.
- **Stylistic principle adopted throughout:** concrete physical imagery,
  root-as-protagonist arc, no AI-slop connectors ("testament to", "not
  only X but also Y", "in conclusion"), sharp endings on a concrete image.
  Applied within existing chapter/appendix structural shells rather than
  introducing a new format.

## 2026-05-28 — Repository initialization for Claude Code

- Added `CLAUDE.md` describing dev commands, content architecture,
  localStorage persistence keys, and chapter/appendix ID conventions.
- Rewrote `README.md` to describe the actual project, replacing the Vite
  template boilerplate.
