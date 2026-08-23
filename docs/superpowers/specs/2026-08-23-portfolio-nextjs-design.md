# Portfolio redesign — Next.js + shadcn (approved 2026-08-23)

**Status:** APPROVED  
**Reference:** [devichand579.github.io](https://devichand579.github.io) structure · locked B&W mock `_temp/design-demos/portfolio-purple.html`  
**Stack:** Next.js App Router · React · Tailwind v4 · shadcn/ui · Vercel

---

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Stack | Next.js App Router (replaces Vite SPA) |
| Visual | Dark B&W — `#0a0a0a` bg, Instrument Serif + DM Sans |
| Sections | About · News · Selected work · Experience · Contact |
| shadcn | Minimal use — Button, Separator, Sheet, Table |

---

## Page structure (`/`)

1. **Nav** — `SS` mark · About · News · Work · Experience · Contact (mobile Sheet)
2. **About** — grayscale portrait + status dot, name, affiliation, first-person bio
3. **News** — dated rows (Activate, Lexapar, wins)
4. **Selected work** — SecondCortex, SusyDB, ALRA 2.0 with key metric + link to `/projects/[slug]`
5. **Experience** — Lexapar, SecondCortex Labs, Kubeflow, InternLoom
6. **Contact** — email, resume PDF, GitHub, LinkedIn
7. **Footer** — © year

---

## Routes

| Route | Phase |
|-------|-------|
| `/` | v1 |
| `/projects/[slug]` | v1 (port existing detail) |
| `/resume.pdf` | v1 (`public/resume.pdf`) |

---

## Design tokens

| Token | Value |
|-------|--------|
| `--background` | `#0a0a0a` |
| `--foreground` | `#ffffff` / `#e8e8e8` body |
| `--muted-foreground` | `#9a9a9a` |
| `--border` | `#2a2a2a` |
| Max width | 920px |

No orange accent, glass navbar, SaaS hero, card-heavy UI, or footer game.

---

## Content source

Resume-accurate copy from locked spec and `portfolio-purple.html` mock.

---

## Out of scope (v1)

Light mode · blog · CMS · publications/BibTeX · Epoch game · Next.js case-study prose polish

---

## Acceptance

- [ ] Home matches Devichand structure with dark B&W tokens
- [ ] shadcn components used for nav, table, buttons, mobile sheet
- [ ] Hard refresh on `/` and `/projects/*` works
- [ ] Content matches resume (Lexapar, Activate, SecondCortex, wins)
