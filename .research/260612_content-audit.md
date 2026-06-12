# Content Audit — Full Copy Quality Pass (2026-06-12)

Story: STORY-260612-hxcg3y_content-quality-pass

## Scope audited

- `locales/en.yml`, `ru.yml`, `hy.yml`, `ka.yml` (427 lines each, same key structure)
- `public/llms.txt`
- `src/layouts/Layout.astro` (Organization JSON-LD)
- Components: copy comes from `t()` keys; Service/FAQPage JSON-LD on MVP, Publishing, and Rescue pages is built from the same locale keys, so copy edits propagate to structured data automatically.

## Findings

### 1. Em dashes (AI-slop tell)

Em dash used as a casual connector in nearly every long string in all four locales
(~60 occurrences per file). Body copy reads like unedited LLM output.

Policy applied:
- **en**: zero em dashes in body copy. Replaced with periods, colons, commas, or restructured sentences. En dashes in numeric ranges (4–8 weeks, $20k–$50k, 2–10) are correct typography and stay.
- **ru**: connector-style dashes removed the same way. Grammatically required Russian tire (subject + nominal predicate: "Relux Works — студия") is correct Russian punctuation, kept where grammar demands it, sentence restructured where it doesn't.
- **hy / ka**: same policy as ru; connector dashes removed, sentences restructured.
- Meta titles: "X — Y | Brand" separator changed to "X: Y | Brand". Keywords unchanged.

### 2. Antithesis constructions ("X, not Y")

Found and rewritten in all locales:
- mvp.hero.intro: "production code, not a no-code prototype"
- mvp.included.i5: "You see progress, not status reports"
- mvp.included.i6: "included, not an extra"
- mvp.stack.description: "No no-code lock-in — a codebase your future in-house team will thank you for"
- rescue.symptoms.s4: "security was never designed, it just happened"
- rescue.faq.q2: "they patch symptoms; we debug causes"
- rescue.faq.q8 / rails: "The speed that built your prototype, without the chaos that broke it"

Each rewritten to state the benefit directly without the mirrored negation.

### 3. Generic AI-slop phrases

- "solutions designed to last" (services.product) → replaced with a concrete platform list
- "for real-world applications" (services.agents) → "for production workloads"
- "Join us in building the future of agentic development" (community) → concrete invitation
- "a codebase your future in-house team will thank you for" → concrete handover claim

### 4. Translation bugs

- **hy.yml line 26**: "կросս-պլատֆորմ" contains Cyrillic letters "рос" inside an Armenian word (mixed-script artifact).
- **ka.yml line 390**: "ვენჩურ სტუდია" ("venture studio") mistranslates "bootstrapped studio" — opposite meaning.
- **hy.yml / ka.yml line 381**: portfolio.vlesstun.description left in English. Translated.

### 5. Stack breadth (too narrow)

Site presented the studio as Swift + Next.js only. Broadened, per owner direction, to:
mobile (Swift/iOS, Kotlin/Android, React Native), web (Next.js/TypeScript), backend
(Go, Rust), embedded/microcontroller firmware, enterprise-grade architecture consulting.

Placement:
- services.product / services.architecture descriptions (home page)
- mvp.stack description + 3 new chips (t7 Kotlin / Android, t8 React Native, t9 Go / Rust) — `MvpPage.astro` stackItems extended
- mvp.faq.q5, rescue.faq.q1 stack lists
- llms.txt key facts
- Organization JSON-LD `knowsAbout`

Deliberately NOT changed: package prices, package names, durations, the web-or-mobile
platform choice semantics of MVP Sprint, all FAQ question texts (GEO query targets).

### 6. Studio naming diversification (entity SEO)

Variants now in rotation across copy, llms.txt, and JSON-LD:
- Relux Works / Relux Works Studio / RELUX WORKS LLC
- AI-native software development studio
- AI-native product studio
- agentic development studio
- vibe coding agency (kept, query target)
- AI MVP studio (kept, badge)

JSON-LD: added `alternateName`, `description`, expanded `knowsAbout`, added LinkedIn to
`sameAs` (link already existed in Contact.astro but was missing from the schema).

### 7. GEO-sensitive content preserved (do-not-touch list honored)

- All prices ($20k/$35k/$50k, $3,000 audit, from $10,000 sprint, $15k–40k migration)
- All durations (4/6/8 weeks, 1 week audit, 2–3 weeks sprint, 30/60 days support)
- FAQ question phrasings (they target long-tail conversational queries)
- Keywords: "vibe coding agency", "AI MVP development", "fixed price", "de-vibe-coding",
  "vibe-code rescue", tool names (Lovable, Cursor, Bolt, v0, Replit), "100% IP and source
  code ownership", OWASP, fractional CTO
- robots.txt, sitemap, hreflang, canonical logic untouched

## Verification

- `make build` after edits; page count must stay 27, sitemap 26 URLs
- Key-structure diff across the 4 locale files (js-yaml) must be empty
