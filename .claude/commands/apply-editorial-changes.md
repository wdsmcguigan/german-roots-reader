# Apply Editorial Changes

Executes a structured editorial action plan against the chapter content files.
This command makes actual edits — review and approve the plan before running it.

## What This Does

Takes a set of action plan items (from `/editorial-review` output) and applies
targeted edits to the TypeScript chapter files in `src/chapters/`.

Each edit is surgical: it touches only the identified text and leaves everything
else intact.

## Usage

Paste the action plan items you want to apply after the command, or reference
a specific set of items:

```
/apply-editorial-changes ITEM 3, ITEM 7, ITEM 12
/apply-editorial-changes all items from voice-auditor chapter 1
/apply-editorial-changes all high-priority items
```

## Process

For each action plan item:

1. **Read** the target file and locate the exact text identified in the item
2. **Confirm** the current text matches the quoted text in the action plan
   (flag any mismatch — the chapter may have been edited since the audit ran)
3. **Show** the proposed change as a before/after diff
4. **Apply** the edit to the file

After all edits:
- Show a summary of what was changed and in which files
- Do NOT commit — leave that to the user for review

## Action Plan Item Format

Items should follow this structure (as output by the editorial agents):

```
### ITEM [N] — [Chapter X, Section Y] [brief issue label]
**File:** src/chapters/chapterNN.ts
**Location:** sections[index].paragraphs[index]
**Current text:** "[exact quote]"
**Issue:** [one sentence]
**Action:** [what to do]
**Suggested revision:** "[suggested text]"
```

## If No Suggested Revision Is Provided

For items with `Action: rewrite` but no suggested revision, draft the revision
yourself before applying it. Show the draft to the user for approval before
writing to the file.

## Safety Rules

- Never delete a section entirely without explicit instruction
- If the current text doesn't match the quoted text, skip the item and flag it
- Never modify the Practice Module (`module` field) based on main-content action
  plan items, and vice versa — keep the two content layers separate
- After completing all edits, remind the user to run `/editorial-review` again
  to verify the changes addressed the issues
