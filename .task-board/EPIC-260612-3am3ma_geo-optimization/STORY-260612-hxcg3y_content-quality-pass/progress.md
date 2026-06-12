## Status
to-review

## Assigned To
claude-fable

## Created
2026-06-12T00:00:00Z

## Last Update
2026-06-12T08:07:00Z

## Blocked By
- (none)

## Blocks
- (none)

## Checklist
- [x] Audit en.yml, ru.yml, hy.yml, ka.yml + llms.txt + JSON-LD
- [x] Research doc in .research/260612_content-audit.md
- [x] Rewrite en.yml (master)
- [x] Mirror to ru.yml
- [x] Mirror to hy.yml
- [x] Mirror to ka.yml
- [x] llms.txt + Layout.astro JSON-LD updates
- [x] Build verification

## Notes
Done: full copy quality pass across 4 locales. Em dashes removed from body copy
(en/hy/ka: zero in built output; ru: only grammatically required Russian tire kept).
Antithesis constructions rewritten in all locales. Translation bugs fixed: Cyrillic
inside Armenian word (hy services.product), "venture studio" mistranslation of
"bootstrapped" (ka about), untranslated vless-tun description (hy, ka). Stack broadened
to Swift/Kotlin/React Native/Next.js/Go/Rust/embedded + enterprise architecture
(services, mvp stack + 9 chips, FAQ answers, llms.txt, JSON-LD knowsAbout). Naming
diversified (Relux Works Studio, AI-native software development studio, agentic
development studio) incl. JSON-LD alternateName + description; LinkedIn added to sameAs.
RescuePage serviceType em dash fixed. NOT touched: prices, durations, package names,
FAQ question texts, GEO keywords, robots/sitemap/hreflang.
Verification: key structure identical across locales (313 keys), build 27 pages,
sitemap 26 URLs, zero em dashes in built en/hy/ka and llms.txt.
hy/ka copy is machine-drafted refinement; native review still recommended.

## Precondition Resources
- locales/*.yml, public/llms.txt, src/layouts/Layout.astro

## Outcome Resources
- .research/260612_content-audit.md
