# Relux Works — Landing Page

Landing page for [Relux Works](https://relux.works) — agentic studio registered in Armenia.

## Stack

- **Astro 5** — static site generator
- **YAML** — localization (`locales/`)
- **CSS** — custom properties, no frameworks

## Languages

| Path | Language |
|------|----------|
| `/en/` | English |
| `/ru/` | Russian |
| `/hy/` | Armenian |
| `/ka/` | Georgian |

## Commands

```
make           # show available commands
make install   # install dependencies
make dev       # start dev server
make build     # production build → dist/
make preview   # preview production build
make clean     # remove dist/, .astro/, node_modules/
```

## Project Structure

```
locales/           # YAML translation files (en, ru, hy, ka)
public/            # static assets (favicon, logo SVG)
src/
  components/      # Astro components (Header, Hero, Services, etc.)
  i18n/utils.ts    # i18n helper — t(lang, 'key'), locale paths
  layouts/         # base HTML layout
  pages/           # routes: /, /en/, /ru/, /hy/, /ka/
  styles/
    palette.css    # color palette (CSS custom properties)
    global.css     # reset, typography, utilities
.scripts/          # shell scripts (build, dev, preview, clean)
.spec/             # project spec
.task-board/       # task tracking
```

## Palette

All colors are CSS custom properties in `src/styles/palette.css`. To retheme, edit that file — everything else inherits.

## Tools

| Tool | Purpose | Command |
|------|---------|---------|
| Astro | SSG build | `make build` |
| js-yaml | YAML locale loading | used at build time |
| task-board | project tracking | `task-board summary` |
