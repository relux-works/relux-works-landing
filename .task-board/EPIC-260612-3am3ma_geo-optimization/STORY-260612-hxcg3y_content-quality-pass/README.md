# STORY-260612-hxcg3y: content-quality-pass

## Description
Full content audit and quality pass across all 4 locales (en, ru, hy, ka): remove AI-slop phrasing, em dashes, and antithesis constructions ("X, not Y"); broaden the declared tech stack (Swift, Kotlin, React Native, Go, Rust, embedded/microcontrollers, enterprise architecture); diversify studio naming (Relux Works / Relux Works Studio / AI-native software development studio / agentic development studio); keep all SEO/GEO-sensitive keywords, prices, and FAQ semantics intact; improve GEO signals (ChatGPT/Bing, Gemini/Google) where safe.

## Scope
- locales/en.yml, ru.yml, hy.yml, ka.yml — copy rewrite, same keys, no structural changes
- public/llms.txt — stack and naming updates
- src/layouts/Layout.astro — Organization JSON-LD knowsAbout/description enrichment
- src/components/MvpPage.astro — extend stack chips list if new keys added
- .research/ — audit findings document

## Acceptance Criteria
- No em dashes in body copy in any locale (en dashes in numeric ranges stay)
- No "X, not Y" antithesis constructions
- Stack mentions cover mobile (Swift/Kotlin/React Native), backend (Go/Rust/TypeScript), embedded/microcontrollers, enterprise architecture
- All prices, package names, timelines, and FAQ question semantics unchanged
- Build passes, page count unchanged
