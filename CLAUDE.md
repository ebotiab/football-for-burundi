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
- [assets/](assets/) — images, plus `kid-loop.mov` (HEVC alpha for Safari), `kid-loop.webm` (VP8 alpha for everything else), and `kid-loop.webp` (animated WebP fallback) used by `KidAvatar`.

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

### KidAvatar clip — hybrid video + WebP fallback

[components/KidAvatar.jsx](components/KidAvatar.jsx) renders a transparent-background looping clip of a kid in Burundi kit. The component is deliberately hybrid: `<video>` for the best quality and smoothest playback when the browser allows autoplay, animated WebP as a fallback when it doesn't.

Why both:
- **iOS Low Power Mode blocks `<video autoplay>` at the OS level** — no `muted` / `playsinline` / ref-forcing trick gets past it. Animated WebP goes through the image pipeline and loops regardless of power state, so it's the only reliable option for those users.
- **Animated WebP playback is noticeably less smooth and lower-fidelity than native video** — it's not designed for video-rate animation. So we only use it when we have to, not as the default.

How the swap happens (see `useEffect` in the component):
1. Mount `<video>` with both HEVC and webm sources, force `muted`/`playsinline` attributes via ref.
2. Call `play()`. If the promise rejects, set `fallback = true` → re-render as `<img src="kid-loop.webp">`.
3. Some browsers (iOS in LPM specifically) don't reject `play()` but silently refuse to start playback. A 1.2s watchdog checks `video.paused` and triggers the fallback if so.

Don't "simplify" this to just `<video>` or just `<img>` — each path covers a real device class.

To regenerate the WebP fallback (requires `brew install webp` for `img2webp`):

```bash
# IMPORTANT: pass -c:v libvpx, otherwise ffmpeg drops VP8 alpha during decode
# and you end up with an opaque black background.
ffmpeg -c:v libvpx -i assets/kid-loop.webm \
  -vf "fps=15,scale=540:-2:flags=lanczos,format=rgba" /tmp/f/frame_%04d.png
img2webp -loop 0 -d 67 -q 75 -m 6 -mixed \
  -o assets/kid-loop.webp /tmp/f/frame_*.png
```

Current output: 540×304, 15 fps (67 ms/frame), quality 75, ~2.1 MB. The dimensions and frame rate are tuned for **Safari/iOS playback smoothness, not download size**: every animated WebP frame is a CPU bitmap that Safari uploads to the GPU as a new texture, and that upload pressure accumulates over time and visibly degrades the loop after a few seconds. Smaller textures (540 wide ≈ 1.17× the 460 px display max) and fewer uploads/second (15 fps instead of 24–30) are what keep the loop fluid indefinitely. Don't crank these back up unless you've verified Safari can sustain the new settings for 60+ seconds. The fallback is also paused by an `IntersectionObserver` in `KidAvatar.jsx` when scrolled off-screen, so the decoder gets a fresh start each time the user returns to the hero.
