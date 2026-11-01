# 911 Dakar — Beyond the Road

A premium, responsive editorial showcase celebrating the 2024 Porsche 911 Dakar. Desert photography, oversized typography, an accessible drive mode explorer, technical specifications, and an editorial heritage story.

## Run locally

Requires Node.js 20 or newer. No packages, API keys, database, or installation step required.

```sh
node scripts/server.mjs
```

Open http://localhost:4173. Stop with Ctrl+C. Set `PORT` to use another port. If npm is available, `npm run dev` works too.

## Production build

```sh
node scripts/build.mjs
node scripts/server.mjs --dist
```

The build copies only public website files into `dist/`. Upload its contents to any static web host. All asset paths are relative, so subdirectory hosting works. No server runtime is needed in production.

### Deployment options

- **Netlify:** import the repository; `netlify.toml` defines build and output settings.
- **Vercel:** import the repository; `vercel.json` defines build and output settings.
- **Cloudflare Pages:** build command `node scripts/build.mjs`; output directory `dist`.
- **GitHub Pages:** build locally and publish `dist`, or add a Pages deployment workflow when ready. The included CI builds and uploads a downloadable artifact but does not deploy.
- **Other hosting:** upload the contents of `dist/` to the web root.

Nothing is deployed automatically. CI checks JavaScript syntax and builds the site on pushes and pull requests.

## Project layout

- `index.html` — content, semantic sections, metadata, credits dialog
- `styles.css` — responsive layout, typography, reduced motion support
- `app.js` — keyboard-accessible mode tabs and credits dialog
- `assets/` — locally stored images and favicon
- `scripts/` — dependency-free local server and production build

The terrain explorer explains real driving modes; it is not a live configurator or vehicle simulation. Figures are manufacturer claims and market specifications may differ. Source links appear in the site and in `ASSETS.md`.

Fonts are loaded from Google Fonts, with system fallbacks if unavailable. Vehicle images are bundled locally, so no external image host is needed at runtime.

## Editorial assets

This is an independent enthusiast project, not an official Porsche website. Porsche names and photography belong to their owners. `ASSETS.md` records the sources and credits. Before public publication, confirm that intended use of the photographs meets the source's terms or replace them with images you own or have licensed. The repository does not grant rights to Porsche photography or trademarks.

For a public launch, set `og:image` to an absolute URL on your chosen domain for reliable social previews.

## GitHub setup

The project is prepared as a standalone Git repository. If creation could not be completed by the assistant, create a private repository named `911-dakar` without initializing files, then run:

```sh
git remote add origin https://github.com/KevinLaChapelle/911-dakar.git
git push -u origin main
```

With GitHub CLI installed and signed in, this creates and pushes in one step:

```sh
gh repo create 911-dakar --private --source . --remote origin --push
```
