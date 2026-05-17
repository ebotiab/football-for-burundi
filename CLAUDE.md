# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for the **Torneo Benéfico NEAR YOU** — a 7-a-side charity football tournament in Madrid on 27 June 2026, raising funds for a project in Burundi run by [NEAR YOU](https://wenearyou.org/). Spanish-language copy.

## Running locally

No build step. JSX is transformed in the browser by `@babel/standalone`, so the directory must be served over HTTP (opening `index.html` via `file://` will not work because the `<script src="components/*.jsx">` tags are fetched at runtime).

```bash
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

Any other static server (`npx serve`, `live-server`) works too.

There are no tests, no linter, no package.json — changes are validated by reloading the page in the browser.

## Architecture

Static site rendered client-side with React 18 + Babel standalone loaded from unpkg CDN. There is no bundler and no module system.

- [index.html](index.html) — entry point. Loads React, ReactDOM, Babel, then each `components/*.jsx` file as `<script type="text/babel">` in dependency order, and finally mounts `<App />` into `#root`.
- [components/App.jsx](components/App.jsx) — composes the page sections in order: `Header → Hero → TagsBar → Causa → StatsBar → HowItWorks → Ambiente → Inscription → FAQ → Footer`.
- [components/](components/) — one React component per file. Each file defines a function and assigns it to `window` (e.g. `window.Hero = Hero`). Other components reference it via a `/* global ... */` comment at the top. There are no ESM imports.
- [landing.css](landing.css) — local styles, imports the design tokens.
- [assets/colors_and_type.css](assets/colors_and_type.css) — NEAR YOU brand design tokens (CSS custom properties: `--ny-navy-*`, `--ny-gold`, `--ny-bone`, `--font-display`, etc.). Treat this as the source of truth for colors and type — don't hard-code hex values, use the tokens.
- [assets/](assets/) — images, plus `kid-loop.webp` (animated WebP, transparent alpha) used by `KidAvatar`.

### Adding a new component

1. Create `components/Foo.jsx` defining `function Foo() { ... }` and ending with `window.Foo = Foo;`.
2. Add `<script type="text/babel" src="components/Foo.jsx"></script>` to `index.html` **before** `App.jsx` (and before any component that uses it).
3. Reference globals it depends on via a leading `/* global React, OtherComponent */` comment so editors/linters don't complain.
4. Import it into `App.jsx`'s top `/* global */` comment and render it.

### Tournament config — keep two places in sync

Tournament defaults (format, price, venue, avatar size, tags bar toggle) are defined in **two** places that must stay in sync:

- `window.TOURNAMENT = { ... }` in [index.html](index.html)
- `TOURNAMENT_DEFAULTS` in [components/App.jsx](components/App.jsx) (this object is reassigned to `window.TOURNAMENT` on every render, so it wins at runtime)

Components read these values off `window.TOURNAMENT` / `TOURNAMENT` (declared as a global).

### Styling conventions

- Most layout/visual styling lives as inline style objects inside components (see `Hero.jsx`).
- Shared primitives (`.wrap`, `.eyebrow`, `.brush`, `.btn-primary`, `.btn-secondary`, `.btn-compact`, `.tag`, `.card`, `.bignum`, `.numeral`, `.tbd`, `section.cream`) live in `landing.css` — reuse them rather than reinventing.
- Responsive overrides are done with a per-component `<style>{`...`}</style>` block at the bottom of the JSX, scoped by section id. Because the elements use inline styles, the media-query rules use `!important` to override (intentional — see `Hero.jsx` comment). Breakpoints used across the site: `1024px` (tablet — keeps 2-col grids where desktop has 3), `880px` (most sections collapse to 1 col), `720px` (form / stats fully stack), `480px` (small-phone refinements).
- The cream section variant (`<section className="cream">`) flips the dark theme to bone background + navy text; several utilities have `section.cream` overrides.

### KidAvatar clip

[components/KidAvatar.jsx](components/KidAvatar.jsx) renders a transparent-background looping clip of a kid in Burundi kit as an animated WebP (`assets/kid-loop.webp`), not a `<video>`.

The earlier `<video>` implementation was abandoned because iOS Low Power Mode blocks `<video autoplay>` at the OS level — no `muted` / `playsinline` / ref-forcing trick gets past it. Animated WebP goes through the image pipeline and loops regardless of power state. Don't "modernize" this back to `<video>`.

To regenerate the WebP (requires `brew install webp` for `img2webp`):

```bash
# Extract frames from the original alpha source, then encode.
ffmpeg -i source.webm -vf "scale=920:-2:flags=lanczos,format=rgba" /tmp/f/frame_%04d.png
img2webp -loop 0 -d 33 -q 90 -m 6 -mixed -o assets/kid-loop.webp /tmp/f/frame_*.png
```

`920px` wide is 2× retina for the 460px max display size; quality 90 is visually lossless. Resulting file is ~5–6 MB.
