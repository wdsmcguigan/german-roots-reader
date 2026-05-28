# Editorial Review

Runs a full editorial pass on German Roots Reader using all four editorial agents.

## What This Does

1. **editorial-director** — full structural/arc analysis of the whole book
2. **reader-sim** — dual-persona simulation (Maya + David) across all chapters, structured by chapter
3. **voice-auditor** — story density, audience reach, and audio viability audit across all chapters
4. **module-auditor** — Practice Module quality audit (Examples, Vocabulary, Exercises) across all chapters

All four agents output findings **plus** a structured `## Editorial Action Plan` block
at the end of their report. These action plan blocks are the input for `/apply-editorial-changes`.

## Usage

```
/editorial-review              # full pass — all four agents, all chapters
/editorial-review chapter 3    # reader-sim and voice-auditor focused on Chapter 3 only;
                               # editorial-director and module-auditor still run full book
/editorial-review module       # module-auditor only
/editorial-review structure    # editorial-director only
```

## Important

Each agent runs independently. Run all four in parallel. Report findings under
separate headings. Close with a **Combined Top 5 Priority List** drawn from all
four action plans — the changes that would most improve the book.

The action plan items each agent outputs can be passed directly to
`/apply-editorial-changes` for execution. Review and adjust the plan before
triggering that command.
