# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio + blog for Mahdi Saifullah Srizan, built with **SvelteKit 2 + Svelte 5 (runes), Tailwind v4, and mdsvex**. Statically prerendered and deployed to GitHub Pages at `https://srizanx.github.io`.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — produce the static site in `build/`
- `npm run preview` — serve the production build locally
- `npm run check` — type-check with `svelte-check` (run after non-trivial changes; there is no test suite)
- `npm run lint` — Prettier check + ESLint
- `npm run format` — auto-format with Prettier

There are no unit tests. Verification is `npm run check` + `npm run build`.

## Personal info

Bio, experience, skills, and contact details for the site owner live in `DATA.md` (repo root) — read it when editing landing-page sections (Hero, About, Skills, Projects, Experience, Contact) or writing site copy. It is reference context only and is not part of the build.

## Architecture

**Fully static.** `src/routes/+layout.ts` sets `prerender = true` for the whole app and `svelte.config.js` uses `adapter-static` with `fallback: '404.html'`. Everything must be resolvable at build time — no server runtime, no runtime data fetching. The `strict: true` adapter setting means any non-prerenderable route fails the build.

**Svelte 5 runes mode is forced on** (`compilerOptions.runes` in `svelte.config.js`). Use `$props()`, `$state()`, `$derived()`, etc. — not the legacy `export let` / reactive `$:` syntax.

**Two surfaces:**
- Landing page (`src/routes/+page.svelte`) composes section components from `src/lib/components/sections/` (Hero, About, Skills, Projects, Experience, Contact).
- Blog under `src/routes/blog/`.

**Blog content pipeline:**
- Posts are Markdown files in `src/content/posts/*.md`, processed by **mdsvex** (configured in `svelte.config.js`; `.md` and `.svx` are treated as Svelte components).
- Each post starts with YAML frontmatter: `title`, `date` (string, e.g. `'2024-09-30'`), `description`, `tags` (list).
- `blog/+page.ts` builds the post index via `import.meta.glob('/src/content/posts/*.md', { eager: true })`, reading each module's exported `metadata` and sorting by `date` descending.
- `blog/[slug]/+page.ts` dynamically imports `content/posts/${slug}.md`, rendering `post.default` as a component and pulling `post.metadata`; a missing file throws `error(404)`.

**To add a blog post:** drop a new `.md` file in `src/content/posts/` with the frontmatter above. It is auto-indexed and routed. **Then manually add its `<url>` entry to `src/routes/sitemap.xml/+server.ts`** — the sitemap is hand-maintained, not generated from the posts glob.

**Reveal animations:** `src/lib/components/` and sections use the Svelte actions in `src/lib/actions/reveal.ts` — `use:reveal` (IntersectionObserver fade/translate-in) and `use:staggerReveal` (incrementally delays direct children). Prefer these over ad-hoc scroll listeners.

**Styling:** Tailwind v4 via `@tailwindcss/vite`, configured entirely in CSS at `src/routes/layout.css` (imported once in `+layout.svelte`). Theme tokens (`--color-primary`, `--color-accent`, `--font-sans`, etc.) and the `@plugin '@tailwindcss/typography'` (for blog prose) live in the `@theme` block there — there is no `tailwind.config.js`.

**`$lib` alias** maps to `src/lib/` (assets, components, actions, icons).

## Conventions

- Prettier enforces **tabs**, single quotes, no trailing commas, 100-col width (`.prettierrc`). The `prettier-plugin-tailwindcss` auto-sorts class lists against `src/routes/layout.css`.

## Deployment

`.github/workflows/deploy.yml` builds and publishes `build/` to GitHub Pages on every push to `main` (Node 25). The default working branch here is `dev`.
