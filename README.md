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
  robots.txt       # AI-crawler allowlist + sitemap pointer
  llms.txt         # structured company summary for AI assistants
src/
  components/      # Astro components (Header, Hero, Services, MvpPage, etc.)
  i18n/utils.ts    # i18n helper — t(lang, 'key'), locale paths
  layouts/         # base HTML layout (canonical, hreflang, OG, Organization JSON-LD)
  pages/           # routes: /, /en/, /ru/, /hy/, /ka/, /{lang}/ai-mvp-development/
  styles/
    palette.css    # color palette (CSS custom properties)
    global.css     # reset, typography, utilities
.research/         # research artifacts (GEO off-site playbook, logo concepts)
.scripts/          # shell scripts (build, dev, preview, clean)
.spec/             # project spec
.task-board/       # task tracking
```

## SEO / GEO

The site is optimized for AI chat systems (ChatGPT, Claude, Perplexity) as well as classic search:

- `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended and other AI crawlers
- `sitemap-index.xml` is generated at build time by `@astrojs/sitemap` (with i18n alternates)
- `llms.txt` carries a structured company summary (services, pricing, IP terms, contacts)
- JSON-LD: Organization on all pages; Service + OfferCatalog + FAQPage on `/{lang}/ai-mvp-development/`
- Off-site actions (Clutch, Bing Webmaster, listicles) — see `.research/260612_geo-offsite-playbook.md`

## Palette

All colors are CSS custom properties in `src/styles/palette.css`. To retheme, edit that file — everything else inherits.

## Tools

| Tool | Purpose | Command |
|------|---------|---------|
| Astro | SSG build | `make build` |
| @astrojs/sitemap | sitemap generation | runs during `make build` → `dist/sitemap-index.xml` |
| js-yaml | YAML locale loading | used at build time |
| task-board | project tracking | `task-board tree` |
