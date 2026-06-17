# Portfolio — Mahdi Saifullah Srizan

My personal portfolio and blog. Built as a fully static site and deployed to GitHub Pages.

🔗 **Live:** [srizanx.github.io](https://srizanx.github.io)

## Tech stack

- **[SvelteKit 2](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev/)** (runes mode) — statically prerendered via `adapter-static`
- **[Tailwind CSS v4](https://tailwindcss.com/)** — configured in CSS (`src/routes/layout.css`), no `tailwind.config.js`
- **[mdsvex](https://mdsvex.pngwn.io/)** — Markdown-powered blog posts
- **TypeScript**, ESLint, Prettier
- **GitHub Pages** via GitHub Actions

## Getting started

```sh
npm install
npm run dev          # start the dev server (http://localhost:5173)
```

### Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Build the static site into `build/`  |
| `npm run preview` | Preview the production build locally |
| `npm run check`   | Type-check with `svelte-check`       |
| `npm run lint`    | Prettier check + ESLint              |
| `npm run format`  | Format with Prettier                 |

## Editing content

- **Projects** — edit `src/lib/data/projects.ts`. Set `featured: true` to surface a project on the home page; the full list lives at `/projects`. Screenshots go in `static/screenshots/<project>/`.
- **Blog posts** — add a Markdown file to `src/content/posts/` with `title`, `date`, `description`, and `tags` frontmatter. It's auto-indexed and routed at `/blog/<filename>`.
- **Skills / experience / about** — edited inline in their respective components under `src/lib/components/sections/`.

## Project structure

```
src/
├── routes/                 # pages: /, /projects, /blog, /blog/[slug], sitemap.xml
├── lib/
│   ├── components/         # Header, Footer, Seo, sections/, icons/
│   ├── data/projects.ts    # project list (single source of truth)
│   ├── actions/            # reveal (scroll animations) + portal
│   └── assets/             # images
├── content/posts/          # blog posts (Markdown)
└── routes/layout.css       # Tailwind theme + global styles
static/                     # served at web root (resume, og-image, screenshots, robots)
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `build/` to GitHub Pages. The default working branch is `dev`.
