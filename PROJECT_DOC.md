# Moinul Hasan Khan — Portfolio Site

Personal portfolio for Moinul Hasan Khan, a Senior PHP & Laravel Developer based in Dhaka, Bangladesh. Single-page marketing site (with two dynamic detail routes) built to showcase his work, AI side-projects, and contact info.

- Live domain (per SEO metadata): `moinul4u.com`
- Contact: `moinulhasan.4960@gmail.com`

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI runtime | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 3 + `tailwindcss-animate` |
| Component kit | shadcn/ui (Radix UI primitives under `src/components/ui`) |
| Theming | `next-themes` (dark mode default, system switch disabled) |
| Page transitions | `next-view-transitions` |
| Forms | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Data fetching cache | `@tanstack/react-query` (provider wired, no live queries currently) |
| Icons | `lucide-react` |
| Notifications | `sonner` + shadcn `Toaster` |
| Charts | `recharts` (available via `ui/chart.tsx`, not currently used on any page) |

No backend/API routes or database — all content is static TypeScript data.

## Project Structure

```
src/
  app/
    layout.tsx          Root layout: fonts, theme provider, NavBar/Footer, JSON-LD SEO schema
    page.tsx             Home page — composes all section components
    template.tsx          Per-navigation wrapper (view-transition animation hook)
    not-found.tsx          404 page
    robots.ts / sitemap.ts   Next.js metadata routes (SEO)
    project/[id]/page.tsx    Project detail page (dynamic route)
    ai-tools/[id]/page.tsx   AI tool detail page (dynamic route)
  components/
    HeroSection, AboutSection, ExpertiseSection, ProjectsSection,
    AIToolsSection, CertificationsSection, ContactSection, Footer, NavBar
    ThemeToggle.tsx        Light/dark toggle
    ViewTransition.tsx     View-transition wrapper
    providers.tsx          Theme / React Query / Tooltip / Toaster providers
    ui/                    shadcn/ui primitives (accordion, dialog, card, etc.)
  data/
    projects.ts             Project case studies (typed `Project[]`)
    aiTools.ts               AI tools built by the author (typed `AITool[]`)
  hooks/
    use-mobile.tsx, use-toast.ts
  lib/
    utils.ts                `cn()` class-merge helper (clsx + tailwind-merge)
public/                     Static images (project screenshots, avatar, etc.)
```

Path alias: `@/*` → `src/*` (see `tsconfig.json`).

## Site Sections (single-page flow, `src/app/page.tsx`)

1. **Hero** — name, title, intro, CTAs
2. **About** — bio
3. **Expertise** — technical skills/proficiency
4. **Projects** — featured project cards, links to `/project/[id]`
5. **AI Tools** — side-project AI tools, links to `/ai-tools/[id]`
6. **Certifications** — certifications & education
7. **Contact** — contact form/details

## Content Data Models

**`Project`** (`src/data/projects.ts`): `id`, `title`, `shortDescription`, `fullDescription`, `image`, `cardImage`, `gallery?`, `technologies[]`, `role`, `liveLink?`, `githubLink?`, `features[]`, `challenges?`, `solutions?`, `year`, `company?`

Current entries: `overseas-expat-portal`, `real-time-analytics`, `easy-consumer-platform`, `bat-roi-dashboard`, `dproperty-bd`

**`AITool`** (`src/data/aiTools.ts`): `id`, `name`, `description`, `longDescription`, `category`, `link`, `color`, `bg`, `aiModel`, `frontendStack[]`, `backendStack[]`, `keyFunctions[]`, `useCases[]`, `pricing?`, `status`

Current entries: `econotes-studio`, `run-gen-ai`

To add a new project or AI tool, append an object to the corresponding array — the dynamic route pages (`project/[id]`, `ai-tools/[id]`) render from these arrays automatically.

## SEO

- `layout.tsx` injects JSON-LD structured data (`WebSite`, `Person`, `ItemList` nav) directly via `<Script type="application/ld+json">`.
- `app/robots.ts` and `app/sitemap.ts` generate `robots.txt` and `sitemap.xml` using Next's metadata route conventions.
- Per-page `metadata` exports (`layout.tsx`, `page.tsx`) set title/description.

## Scripts

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # run production build
npm run lint    # eslint
```

## Notes

- Theme defaults to dark; system preference is disabled (`enableSystem={false}` in `providers.tsx`), so `ThemeToggle` is the only way to switch.
- React Query provider is present but no queries currently consume it — content is fully static.
- `lovable-tagger` in devDependencies suggests the project originated from/was edited via Lovable; no other Lovable-specific config is present.
