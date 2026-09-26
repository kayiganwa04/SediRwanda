# SEDI Rwanda

Website for SEDI Rwanda, built with [React](https://react.dev/) and [Vite](https://vite.dev/).

## Requirements

- Node.js 22 or newer
- [pnpm](https://pnpm.io/) (the repo pins `pnpm@11` via the `packageManager` field)

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000) with hot reloading.

## Scripts

| Command        | What it does                                   |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Start the development server                   |
| `pnpm build`   | Build the production bundle into `dist/`       |
| `pnpm preview` | Serve the production build locally             |
| `pnpm test`    | Run the test suite once (Vitest)               |
| `pnpm lint`    | Run ESLint                                     |

## Deployment

The site deploys to Netlify. `netlify.toml` sets the build command (`pnpm run build`),
the publish directory (`dist`), Node 22, and a single-page-app redirect so client-side
routes work on direct load.

GitHub Actions (`.github/workflows/ci.yml`) runs lint, tests, and a production build
on every push to `main` and on pull requests.

## Project structure

```
src/
  data/site.js        contact details, navigation, programs, values, stats, campaigns, bank details
  components/         header, footer, layout, page hero, donate band, contact form, icons
  pages/              one file per route (Home, About, History, Education, Health, ...)
  styles/global.css   design tokens (colours, type, spacing) and all component styles
  Images/             photography used across the site
```

Most text that changes over time (phone numbers, bank accounts, statistics, campaign
descriptions) lives in `src/data/site.js`, so it can be updated without touching any page.

## Contact form

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). A hidden static
copy of the form in `index.html` lets Netlify register it at build time. Submissions appear in
the Netlify dashboard under **Forms**; enable email notifications there to receive them.
Locally, submissions fail with a friendly error because there is no Netlify backend.
