# AGENTS.md — Astro Symposium Site Lite (one page, MIT)

## Stack
Astro 7 (static), Tailwind CSS 4 (`@tailwindcss/vite`), TypeScript strict, Node 22. **No JavaScript at all.**

## Commands
`npm run dev` · `npm run build` · `npx astro check` (0 errors / 0 warnings / 0 hints).

## Content
Everything lives in `src/event.config.ts`: name, date, venue, registration link and fee table (`registration.fees`), single-track `programme` (time, end, title, who, kind) and `speakers`. All sample people and places are fictional; keep them fictional or replace with the user's own edition.

## Rules
"Printed programme" design: Fraunces / Source Sans 3 / Red Hat Mono, paper `#F6F1E8`, ink, one stamp red. Radius 0, hairlines, no gradients, no shadows, no stock photos or faces, no entrance animations. Lighthouse ≥ 95 in all four categories.
