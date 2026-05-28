# Editorial Review

Runs a full editorial pass on German Roots Reader using the three editorial agents in sequence.

## What This Does

1. **editorial-director** — overall structural/arc analysis of the whole book
2. **reader-sim** — dual-persona reading simulation on Chapter 1 (the entry point)
3. **voice-auditor** — voice and story-density audit on Chapter 1

You can also run individual agents directly:
- For a reader sim on a specific chapter: mention "reader-sim chapter N"
- For a voice audit on a specific chapter: mention "voice-auditor chapter N"
- For the full structural pass only: mention "editorial-director"

## Usage

Type `/editorial-review` to run the full pass, or add a chapter number to focus:
`/editorial-review chapter 3`

---

Run the editorial-director agent first for the structural overview, then
reader-sim and voice-auditor on the specified chapter (default: Chapter 1).
Report findings for each agent separately with a clear heading, then close
with a combined **Priority List**: the top 5 changes across all three analyses
that would most improve the book.
