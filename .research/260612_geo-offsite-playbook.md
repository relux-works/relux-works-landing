# GEO Off-Site Playbook — Getting Cited by AI Chat Systems

Task: STORY-260612-tyax23 (EPIC-260612-3am3ma)
Date: 2026-06-12

## How AI assistants pick agencies (observed pipeline)

When a founder asks ChatGPT/Claude/Perplexity "AI MVP development agency fixed price 20k", the assistant:

1. **Searches its web index** — ChatGPT uses Bing, Perplexity uses its own + Brave, Claude uses Brave/web search. Results are dominated by *listicles* ("Top 10 AI MVP agencies 2026") and *directories* (Clutch, GoodFirms), not agency homepages.
2. **Extracts candidates** from those pages and cross-checks facts: pricing, timeline, reviews.
3. **Verifies by name** — searches "[studio] pricing", "[studio] Clutch", "[studio] reviews". An agency that appears in step 1 but fails step 3 (no reviews, no pricing) gets dropped from the answer.

On-site work (done in this repo) makes relux.works *extractable and verifiable*. Off-site work below makes it *findable* in step 1 and *credible* in step 3.

## Priority 1 — Index plumbing (do this week, free)

- [x] **Bing Webmaster Tools** — register relux.works, submit `sitemap-index.xml`. ChatGPT search runs on Bing; an unindexed site does not exist for ChatGPT. *(done 2026-06-12)*
- [x] **IndexNow** — Cloudflare Crawler Hints enabled. Instant Bing indexing on deploy. *(done 2026-06-12)*
- [x] **Google Search Console** — register, submit sitemap (Gemini grounding + Google AI Overviews). *(done 2026-06-12)*
- [ ] Verify AI crawlers reach the site after deploy: check Cloudflare logs for `GPTBot`, `ClaudeBot`, `PerplexityBot` hits. robots.txt now explicitly allows all of them.

## Priority 2 — Directory profiles (the verification layer)

These are what AI assistants check when verifying "[studio name] reviews":

- [ ] **Clutch.co** — the single most-cited B2B directory in AI answers. Create profile: services (MVP Development, AI Development), min project size ($10k+), hourly band, location Armenia, portfolio (T&L, Tundra Clans, Waio). Then **get 3–5 client reviews** — Clutch reviews are phone/form-verified and AI systems treat them as ground truth. Even 2 reviews beats zero.
- [ ] **GoodFirms** — second most-cited. Free profile, same content.
- [ ] **Crunchbase** — company record (founded 2026, Armenia, bootstrapped). AI systems use it for entity resolution ("is this a real company?").
- [ ] **LinkedIn company page** — keep headline keyword-aligned: "AI MVP development studio — fixed-price MVPs in 4–8 weeks".
- [ ] **GitHub org** (github.com/relux-works) — pin Relux ecosystem repos, org description aligned with positioning. Already linked via `sameAs` in Organization schema.

## Priority 3 — Listicle placement (the discovery layer)

Step-1 search results are listicles. Two routes:

- [ ] **Get into others' listicles** — find ranking articles for "best AI MVP development agencies", "top vibe coding agencies", "AI-native development studios" (Medium, dev.to, F6S, StartupStash, etc.). Many accept submissions or respond to outreach. Each placement = one more source an AI can cite.
- [ ] **Publish our own comparison content** — a blog is currently out of scope for the landing, but a single honest comparison page ("AI MVP agency vs no-code agency vs freelancers — cost & timeline breakdown, 2026") is the highest-leverage GEO content format: AI assistants love citing comparison tables with concrete numbers. Consider as next epic.

## Priority 4 — Community footprint

AI training data and search both weight Reddit/HN heavily:

- [ ] Reddit: useful answers (not ads) in r/startups, r/SaaS, r/Entrepreneur threads about MVP costs/agencies. Mention the studio only where genuinely relevant.
- [ ] Hacker News: Show HN for Relux ecosystem / Tundra Clans; comments on agency/MVP threads.
- [ ] Product Hunt: launch Waio Recorder / Tundra Clans under the Relux Works maker profile — creates more verifiable entity mentions.

## Competitor set (from search log, 2026-06-12)

Studios that currently surface for our target queries — study their profiles, don't copy:

| Studio | Surfaces via |
|--------|-------------|
| Octave Agency | Clutch + "vibe coding" positioning |
| Makeitfuture | Clutch/GoodFirms reviews |
| SpeedMVPs | pricing-forward landing |
| 9.agency | Clutch, startup MVP positioning |
| RapidMVP (Rado Entchev) | founder-brand + reviews |

Useful exercise: run "[their name] pricing / reviews / Clutch" and note which pages the AI cites — those are the exact surfaces we need to exist on.

## Verification loop (monthly)

Ask ChatGPT, Claude, and Perplexity (fresh sessions, no history):

1. "AI MVP development agency fixed price 20k"
2. "vibe coding agency MVP founders"
3. "Relux Works reviews" / "Relux Works pricing"

Track: are we mentioned, what's cited, what facts the assistant gets wrong. Wrong facts → fix the on-site source (llms.txt, FAQ).

## Notes / risks

- Pricing on the site ($20k/$35k/$50k) is drafted from the target-query budget bracket — **needs owner confirmation before deploy**.
- hy/ka translations of the MVP page are machine-drafted — need native review (low GEO priority, EN/RU carry the queries).
- The site has no blog; the comparison-content route (Priority 3) would need a content section — separate decision.
