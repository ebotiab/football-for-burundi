# Football for Burundi — NEAR YOU Charity Tournament

Landing page for the **Torneo Benéfico NEAR YOU** — a 7-a-side charity football tournament in Madrid on **27 June 2026**, raising funds for a project in Burundi run by [NEAR YOU](https://wenearyou.org/).

## Stack

Static site, no build step. The page is rendered client-side with React 18 + Babel standalone loaded from a CDN:

- `index.html` — entry point, configures `window.TOURNAMENT` and mounts `<App />`
- `landing.css` + `assets/colors_and_type.css` — styling and design tokens
- `components/*.jsx` — one React component per file, attached to `window` and composed in `App.jsx`
- `assets/` — images and video loop

Sections rendered: `Header → Hero → TagsBar → Causa → StatsBar → HowItWorks → Ambiente → Inscription → FAQ → Footer`.

## Running locally

The JSX files are fetched at runtime, so you need to serve the directory over HTTP (opening `index.html` via `file://` will not work).

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/index.html>.

Any other static server (`npx serve`, `live-server`, etc.) works too.

## Editing content

Tournament defaults (format, price, venue, avatar size, tags bar toggle) are defined in two places that must stay in sync:

- `index.html` — `window.TOURNAMENT = { ... }`
- `components/App.jsx` — `TOURNAMENT_DEFAULTS`

Copy lives directly inside each component under `components/`.
