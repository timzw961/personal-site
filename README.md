# personal-site

My personal portfolio site: the products I've worked on, side projects, recognition from colleagues, and a way to get in touch.

## Stack

- **Next.js 16** (App Router, Turbopack) with **React 19**
- **TypeScript** in strict mode
- **CSS Modules** plus a single global stylesheet of design tokens. No CSS framework.
- **next/font** to self-host Inter and IBM Plex Mono
- **ESLint** with `eslint-config-next` (Core Web Vitals and TypeScript rules)

There are no runtime dependencies beyond `next`, `react` and `react-dom`.

## Project structure

```
src/
  app/
    layout.tsx               Root layout: fonts, metadata, theme bootstrap script, header/footer
    page.tsx                 Home page, built from the section components
    globals.css              Design tokens (light + dark) and base styles
    work/[slug]/             Case-study page for each work project
    recognition/             Full list of recognition, newest first
  components/
    home/                    Sections that only appear on the home page
    Container, Header, Footer, ThemeToggle, TopLoadBar, Reveal, RecognitionCard
  lib/
    projects.ts              Work and side-project content (typed)
    recognition.ts           Recognition content plus date sorting
public/
  work/                      Project screenshots
  Timothy-Wang-Resume.pdf
```

## Key technical decisions

**Fully static.** All content lives in typed TypeScript modules under `src/lib`. There's no CMS, database or API. Each case-study page is prerendered at build time with `generateStaticParams`, so every route ships as static HTML.

**Content is data, pages are views.** To add a project you add an entry to `workProjects` or `sideProjects` in `projects.ts`, and the card and detail page follow. A work project with `highlights` gets a "Read more" case-study page at `/work/[slug]`. A project with an `href` links straight out (to a live demo or GitHub repo) instead. Old `/projects/[slug]` links redirect permanently to `/work/[slug]`.

**Dark mode without a flash.** A small inline script in `<head>` reads the saved preference from `localStorage`, falls back to `prefers-color-scheme`, and sets `data-theme` on `<html>` before first paint. `ThemeToggle` flips that attribute and saves the choice. Both themes are just overrides of the CSS custom properties in `globals.css`, so components never check the theme themselves. `suppressHydrationWarning` on `<html>` is there because the attribute is set before React hydrates.

**Server components by default.** Only three components need the browser, so only they use `"use client"`: `ThemeToggle` (click handler), `Reveal` (IntersectionObserver for scroll-in animations) and `TopLoadBar` (a one-off load animation). Everything else renders on the server and sends no JavaScript.

**Accessibility.** The colour tokens are chosen to meet WCAG contrast targets (the ratios are noted beside each token). Every interactive element has a visible keyboard focus style. `Reveal` and other motion turn off under `prefers-reduced-motion`.

**Plain `<img>` for screenshots.** The project thumbnails are shown at their natural aspect ratio with no cropping, so a plain `<img>` was simpler here than `next/image`'s sizing rules.

**`turbopack.root` in `next.config.ts`.** This pins the workspace root to the project directory so Turbopack doesn't pick up a stray lockfile in a parent directory and treat that as the root.

## Running locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
```

No environment variables are needed.

## Deployment

The site is a standard Next.js app with no server-side requirements. It deploys to Vercel with zero configuration.
