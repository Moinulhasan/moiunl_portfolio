---
name: project-memory
description: Read or add to this project's persistent memory (MEMORY.md in this skill folder) — decisions, gotchas, in-progress work, and context that any Claude Code agent working in this repo should know about. Use when the user says "remember this", "note for the project", "add to project memory", "what's in project memory", "what do we know about this project", or anything similar. Also check MEMORY.md at the start of nontrivial work in this repo, even without being asked, so prior context isn't lost between sessions.
---

# Project Memory

This skill is the project's own memory, separate from any personal
cross-project memory system you may have. It lives in the repo, travels with
`git`, and is the same for every agent and every session that opens this
project — this is what makes it "memory for anyone," not just for one user's
account.

The content lives in [MEMORY.md](MEMORY.md), right next to this file.

## Reading it

- At the start of nontrivial work in this repo, read `MEMORY.md` if you
  haven't already this session. Don't announce that you're doing this —
  just fold what you learn into how you work.
- If the user asks "what's in project memory" or similar, summarize the
  relevant parts instead of dumping the whole file.

## Writing to it

When the user asks you to remember or note something for the project:

1. Read the current `MEMORY.md` first — don't append blind.
2. Decide where it belongs:
   - **Key Facts** — stable, load-bearing facts (real domain, deploy
     target, architectural conventions, hard constraints). These get
     *updated in place*, not duplicated. If a new fact supersedes an old
     one, replace it and don't leave the stale version behind.
   - **Gotchas** — things that cost time to figure out and will cost time
     again for the next agent (build quirks, flaky tooling, non-obvious
     fixes). Update in place if the same gotcha resurfaces with a better
     fix.
   - **Session Log** — dated, append-only entries for decisions, what
     changed and why, and open threads. Newest entry at the top. Keep each
     entry to a few lines — this is a memory aid, not a changelog (git
     already has the diffs).
3. Write the entry yourself; don't ask the user to phrase it. Keep it
   concrete — a future agent should be able to act on it without asking
   "what did they mean by this."
4. Don't log routine work that git history already captures (routine
   edits, typo fixes). Log the *why*, the non-obvious constraint, or the
   thing that isn't visible from reading the code.

## What NOT to put here

- Anything derivable by reading the code (file structure, component
  props, current styling) — that goes stale and duplicates what `git log`
  / the code itself already show.
- Secrets, credentials, tokens — this file is committed to the repo.
- Long transcripts or copy-pasted conversation — summarize instead.

If `MEMORY.md` grows past a few hundred lines and the Session Log gets hard
to scan, propose trimming or archiving old entries to the user rather than
letting it grow forever — don't do this unprompted.
