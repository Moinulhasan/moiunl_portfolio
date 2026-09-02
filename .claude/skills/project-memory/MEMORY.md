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

## Session Log

<!-- Newest entry first. Keep entries short — this is a memory aid, not a changelog. -->

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
