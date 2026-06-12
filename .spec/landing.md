# Relux Works — Landing Page Spec

## Overview

Landing page for **Relux Works** — agentic studio registered in Armenia (LLC/ՍՊԸ).
Domain: `relux.works`

## Stack

- **Astro** — static site generator (SSG)
- **Localization** — YAML files in `locales/`, 4 languages
- Routing: `/en/`, `/ru/`, `/hy/`, `/ka/`
- Default language: EN (root `/` redirects to `/en/`)

## Hosting & Deploy

- **Cloudflare Worker** (not Pages) with git-integrated Workers Builds
- Build: `npm run build` → `dist/`; deploy: `npx wrangler deploy`; production branch: `main`
- Every push to `main` auto-deploys (GitHub app "Cloudflare Workers and Pages" on the relux-works org)
- **Pages Functions are NOT executed** on this hosting — `functions/index.js` is inert;
  root locale redirect is the static shim `src/pages/index.astro` (nf_lang cookie →
  browser language → `/en/`, meta-refresh fallback for no-JS/crawlers)

## Languages

| Code | Language | Script | Priority |
|------|----------|--------|----------|
| en   | English  | Latin  | Primary (international) |
| ru   | Russian  | Cyrillic | CIS audience |
| hy   | Armenian | Armenian | Local (Armenia) |
| ka   | Georgian | Mkhedruli | Local (Georgia) |

## Sections

### 1. Header / Nav
- Logo (Relux Works)
- Navigation links to sections
- Language switcher (EN / RU / ՀՅ / ქა)
- CTA button → Contact

### 2. Hero
- Tagline: "Agentic Studio"
- Subtitle: "Developing and distributing mobile apps and services"
- CTA: Get in touch / Explore Relux ecosystem
- Background: subtle, modern, tech-oriented

### 3. What We Do (Services)
- **Product Development** — full-cycle app development, from idea to launch
- **AI/Agent Engineering** — AI agents as primary engineering force
- **Architecture & Consulting** — Flux/Redux, predictable state management for Swift

### 4. Portfolio
- **T&L – Learn Foreign Words** — education app, vocabulary learning through visuals/audio/text, 7 languages, award-winning (Children's Technology Review 2013), App Store: https://apps.apple.com/us/app/t-l-learn-foreign-words/id548917415
- **Tundra Clans** — tile-based strategy game, currently in TestFlight beta: https://testflight.apple.com/join/TGyPY5G2

### 5. Relux Ecosystem (Open Source)
- Relux — open, modular, agentic-first ecosystem for Swift developers
- Core state containers, middleware, tools
- Type-safe, predictable data flow
- Link to GitHub / docs
- Community-driven: open contribution, discussions, shared knowledge

### 6. About
- Founded 2026, Armenia
- 2-10 people
- Mission: predictable architecture + agentic tooling belong together
- Tech-forward, lean, bootstrapped

### 7. Community
- Open contribution model
- Technical discussions
- Shared knowledge
- Links to community channels (GitHub, Telegram, etc.)

### 8. Contact
- Email: ivan@relux.works
- NO phone number on the page
- Contact form (optional, sends to email)
- Social links: LinkedIn, GitHub, Telegram

### 9. Footer
- Company legal info (required by Armenian law for LLC):
  - Full name: «RELUX WORKS» LLC / « DELAYS WORKS» ΅ΤΠΩ
  - Registration: 999.110.1559507
  - Tax ID (HVHH): 03036828
  - Address: Tsaghkadzor, Orbeli Brothers St. 19, Kotayq, Armenia 2310
- Copyright
- Privacy Policy link (placeholder)
- Language switcher (duplicate)

## Armenian Market Requirements

- **Legal disclosure in footer** — Armenian LLCs must display company name, registration number, tax ID, and legal address on their website
- **Armenian script support** — proper font that renders Armenian (Noto Sans Armenian / similar)
- **Georgian script support** — proper font that renders Georgian (Noto Sans Georgian / similar)
- **Local trust signals** — registered address, legal entity info visible
- **Messenger preference** — Telegram widely used in both AM and GE; include Telegram link

## Design Direction

- Clean, minimal, modern
- Dark or light theme (TBD)
- Tech/developer-oriented aesthetic
- Responsive: mobile-first (Armenia/Georgia — high mobile traffic)
- Fast: target Lighthouse 95+
- Fonts: system + Noto Sans for Armenian/Georgian scripts
- No heavy animations — speed over flash

## SEO & Meta

- Proper `hreflang` tags for all 4 languages (absolute URLs)
- Canonical URLs (`site: https://relux.works` in Astro config)
- Open Graph / Twitter Card meta for each language
- Structured data: Organization (all pages), Service + OfferCatalog + FAQPage (MVP page)
- `robots.txt` with explicit allow for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- `sitemap-index.xml` via `@astrojs/sitemap` with i18n alternates
- `llms.txt` — structured company summary for AI assistants

## GEO (Generative Engine Optimization)

Target: surface in AI chat answers (ChatGPT, Claude, Perplexity) for queries like
"AI MVP development agency fixed price", "vibe coding studio", "MVP agency 20k 50k".

- **AI MVP Development page** (`/{lang}/ai-mvp-development/`): fixed-price packages
  ($20k / $35k / $50k — draft numbers, owner must confirm), 4–8 week timeline,
  IP & source code ownership, QA, security review, post-launch support, 10-question FAQ.
  Every term AI assistants verify by in-page search (pricing, fixed, weeks, IP ownership,
  source code, post-launch, QA, security) appears literally in page copy.
- **App Publishing & Scaling page** (`/{lang}/app-publishing/`): full-service publishing
  operations — App Store/Google Play accounts (client's or ours with contractual transfer),
  app review handling, payments/banking/payouts, vibe-code rescue (take over Lovable/Cursor/
  Bolt/v0 codebases → agentic rails + scalable architecture), fractional CTO, scaling
  infrastructure to hundreds of thousands of users. 8-question FAQ, Service + FAQPage JSON-LD.
- **Vibe-Code Rescue page** (`/{lang}/vibe-code-rescue/`): de-vibe-coding landing for
  pain-point queries ("fix my Lovable app", "AI can't fix my bug", "vibe coded app technical
  debt"). Symptoms list, 4 service blocks (rescue audit / complex bug fixing / refactor to
  production / agentic rails), pricing (audit $3k draft, sprint from $10k, full $15k–40k —
  owner must confirm), process, 9-question FAQ, Service + FAQPage JSON-LD.
- Off-site playbook: `.research/260612_geo-offsite-playbook.md` (Clutch, GoodFirms,
  Bing Webmaster/IndexNow, listicles, competitor set).

## Out of Scope (v1)

- Blog / comparison content (candidate for next epic — see GEO playbook)
- Detailed case studies
- User accounts
- CMS integration
- Analytics (add later)
