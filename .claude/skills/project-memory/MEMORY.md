# Project Memory — moinul_portfolio

Read [SKILL.md](SKILL.md) first for how to read/write this file.

## Key Facts

- **Real production domain is `https://moinul4u.com`.** `robots.ts` and
  `sitemap.ts` used to point at a placeholder `moinulhasan.com` — fixed
  2026-09-01. If you see `moinulhasan.com` anywhere again, it's a bug, not
  an alternate domain.
- **Owner**: Md Moinul Hasan Khan, Senior Software Specialist, SSL Wireless,
  Dhaka, Bangladesh. CV lives at `public/cv/Md-Moinul-Hasan-Khan-CV.pdf` —
  treat it as the source of truth for any resume/profile-facing content
  (skills, job titles, project history), not the pre-existing placeholder
  copy that was in the repo before 2026-09-01.
- **Stack**: Next.js 16 (App Router, Turbopack), static export
  (`output: 'export'` in `next.config.ts`), Tailwind CSS 3, shadcn/ui
  (Radix primitives under `src/components/ui`), no backend/API routes —
  all content is static TypeScript data in `src/data/`.
- **Design language** (established across Expertise/Projects/AI Tools
  sections): dark glass cards, gradient text, per-category color coding
  (purple/sky/emerald/pink/yellow/indigo) driven by literal Tailwind class
  fields in the data objects. Match this instead of inventing a new palette
  per section.
- **Never build Tailwind classes at runtime via string concatenation**
  (e.g. `` `bg-gradient-to-r ${x.bg.replace("bg-","from-")}` ``). Tailwind's
  compiler only sees literal class strings in source — anything built at
  runtime silently produces no CSS. Always store the complete literal
  class string in the data object instead (see `topBar`/`bar` fields in
  `src/data/aiTools.ts` and the categories array in `ExpertiseSection.tsx`
  for the pattern).

## Gotchas

- **Turbopack dev cache corrupts often on this machine.** Symptom: `next
  dev` panics on startup with `range start index X out of range for slice
  of length Y` (turbo-persistence). Fix: `rm -rf .next` (deleting just
  `.next/dev/lock` is NOT enough) and restart. This happened repeatedly
  during the 2026-09-01 session.
- **Stray `next dev` processes pile up on port 3000** across sessions on
  this Windows machine, causing Next to silently fall back to 3001/3002.
  Before starting the dev server, check
  `Get-NetTCPConnection -LocalPort 3000 -State Listen` and kill the owning
  PID first, or you'll end up verifying against a stale server.
- **`public/robots.txt` (static) conflicted with `src/app/robots.ts`
  (dynamic route)** — Next.js 500'd the entire `/robots.txt` route because
  of it. Fixed by deleting the static file 2026-09-01; the dynamic route
  (which also emits the `Sitemap:` directive) is the one source of truth
  now. Don't re-add a static `public/robots.txt`.
- **`ViewTransitionItem` (`src/components/ViewTransition.tsx`) already
  renders as whatever tag `as` specifies** (defaults to `span`). Don't
  wrap another heading tag inside it — that was causing a nested `<h3>`
  hydration error in `ProjectsSection.tsx` until fixed 2026-09-01. Pass
  `className` straight to `ViewTransitionItem` instead of nesting a literal
  tag inside it.
- Project detail (`/project/[id]`) and AI tool detail (`/ai-tools/[id]`)
  pages had **no per-page metadata** — every one silently inherited the
  homepage's title/description. Fixed via `generateMetadata` in both
  `[id]/page.tsx` files 2026-09-01; if you add a new dynamic route under
  `src/app/`, give it `generateMetadata` too rather than relying on the
  root layout default.
- **A two-column `grid` with no explicit `grid-template-columns` at the
  current breakpoint can still overflow its parent on mobile**, even
  though no individual leaf element shows raw overflow — because grid
  (and flex) items default to `min-width: auto`, refusing to shrink below
  their content's natural minimum. Caused `#contact`'s two panels to be
  clipped ~32px on the right on mobile. Fix: add `min-w-0` to the direct
  grid/flex item, not to anything deeper — fixed 2026-09-02 in
  `ContactSection.tsx`. Worth checking any other raw `grid`/`flex`
  responsive layout that reported as "not fitting on mobile" even though
  it "looks fine" at a glance.
- **`#expertise` has `overflow-visible` (not the `section-padding`
  default `overflow-hidden`)** — required so `position: sticky` isn't
  broken by an ancestor's overflow clipping (see the sticky-stack entry
  above). Side effect: its own decorative background blobs are no longer
  auto-contained and will bleed past the viewport on narrow screens
  unless they're wrapped in their own `absolute inset-0 overflow-hidden`
  sibling div that is NOT an ancestor of the sticky cards. Fixed
  2026-09-02. If you add more decorative/ambient elements to this
  section, wrap them the same way — don't rely on the section's own
  overflow setting to contain them.
- **Don't run a second `npm run dev` / `rm -rf .next` while the user
  already has one running.** Two Turbopack instances writing the same
  `.next` cache directory concurrently corrupts it ("Persisting failed:
  Another write batch or compaction is already active") and can take
  down the user's own running server, not just yours. Before starting a
  dev server for verification, check
  `Get-NetTCPConnection -LocalPort 3000 -State Listen` (and 3001-3003)
  first — if something's already there and healthy (`curl` it), use that
  one directly instead of starting a competing instance. This bit twice
  in the 2026-09-02 session.

## Session Log

<!-- Newest entry first. Keep entries short — this is a memory aid, not a changelog. -->

- **2026-09-02** — Fixed real mobile-responsiveness bugs found via a
  Playwright audit (per-element `getBoundingClientRect` + document-level
  `scrollWidth` check across 360/375/390px viewports): Contact section's
  two-column grid was overflowing/clipping ~32px on mobile (grid item
  `min-width: auto` gotcha), and Expertise's decorative blobs were
  bleeding past the viewport (side effect of the earlier `overflow-visible`
  fix for sticky positioning). Both fixed; re-verified the Expertise
  sticky-stack effect still works after the blob-containment change (no
  regression). Also this session: added a themed `app/icon.svg` favicon
  (gradient "M" monogram matching `.gradient-text`), trimmed Hero/About
  content duplication then reverted the Hero paragraph back to the
  original hashtag-style line per explicit user request, added
  Google Analytics gated behind `NEXT_PUBLIC_GA_ID` (off until set),
  slowed the hero badge orbit animation twice (24s → 32s → 40s, synced
  in both `HeroSection.tsx` and `globals.css`), redesigned Certifications
  as a sorted timeline, and modernized the Contact section's visual
  language to match the rest of the site. Twice this session I broke the
  user's own running dev server by running a second Turbopack instance
  against the same cache — see the gotcha above.
- **2026-09-01** — Created this memory skill. Prior work this session (not
  previously logged): redesigned Expertise (sticky-stack cards, CV-grounded
  content), Projects (3D coverflow carousel replacing the old embla
  carousel), and AI Tools (real product screenshots, fixed broken gradient
  bug) sections; rewrote the About section copy against the CV; fixed the
  domain mismatch, the `robots.txt` conflict, and added per-page SEO
  metadata to project/AI-tool detail pages. All verified with a clean
  `npm run build`. Nothing was committed to git — user has not asked for
  commits this session; several SEO-related files are staged
  (pre-existing, not something this session did).
