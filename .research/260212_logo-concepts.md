# Relux Works Logo Concepts Research

Date: 2026-02-12

## Context

Relux Works is an agentic venture studio that builds apps and develops a Swift state management ecosystem called "Relux" (inspired by Redux/Flux architecture).

**Key brand concepts:** data flow, predictable state, agents, modular architecture, cycles/loops, unidirectional flow.

**Color palette (dark theme):**
- Primary: `#1a1a2e`
- Accent: `#e94560`
- Link/secondary: `#7c8cf8`
- Text: `#eaeaea`

**Technical requirements:**
- SVG format, `currentColor` or CSS variables for recoloring
- Must work as: full logo (icon + wordmark), icon only (32px+), favicon (16px)

---

## Part 1: Research Findings

### 1.1 Geometric Forms That Represent Data Flow & State Cycles

| Symbol | Meaning | Precedent |
|--------|---------|-----------|
| **Circular arrows / orbital loops** | Unidirectional data cycle (Action -> Reducer -> State -> View) | Redux logo (three interconnected orbital paths forming an "R") |
| **Three elliptical orbits (atom)** | Interconnected components orbiting a single source of truth | React logo, Redux logo |
| **Infinity loop / Mobius strip** | Continuous, predictable data flow that never breaks | Common in workflow/automation tools |
| **Hexagon** | Modular architecture (hexagonal/ports-and-adapters pattern) | Widely used in software architecture diagrams |
| **Chevrons / arrows** | Directional flow, forward motion, pipelines | Vercel (triangle = growth/deployment), many CI/CD tools |
| **Interlocking rings** | State connections between decoupled modules | Redux circles symbolize component interconnection |
| **Recursive/nested shapes** | Reducers composing into larger state trees | Fractal-like patterns |

**Key insight from Redux logo analysis:** The Redux logo was designed by Matthew Johnston. It uses three interconnected circular paths that simultaneously form a stylized "R" and represent the core Redux concept: connecting and managing different parts of application state. Each loop symbolizes a component; the connections represent data flow. Licensed CC0.

**Key insight from React logo:** Three elliptical orbits around a central nucleus. The nucleus = single source of truth. Orbits = components that derive from and feed back into state. Simple enough to work at any size.

### 1.2 Lettermark Patterns (R, W, RW)

Best practices from research:

- **Single-letter marks** (R) are stronger at small sizes than two-letter combinations (RW)
- **Negative space** within an "R" can encode meaning: the counter (hole) of the R can become an arrow, a loop, or a state symbol
- **Geometric R construction:** An R can be built from simple primitives: a vertical stroke + a bowl (half-circle or arc) + a diagonal leg. Each part can carry meaning
- **Interlocking monograms** (RW) work at medium sizes but lose clarity below 24px; better suited for full-logo variant only
- **Tesla approach:** The "T" doubles as a motor cross-section. Similarly, an "R" can double as a data-flow diagram

### 1.3 What Makes Tech Logos Work at Tiny Sizes (Favicon)

From research on favicon best practices and scalable logo design:

1. **Maximum 2-3 shapes.** At 16px, anything beyond that becomes mud
2. **No thin strokes.** Minimum apparent stroke width ~2px at 16x16
3. **Strong silhouette.** The logo must be recognizable as a filled black shape on white (and vice versa)
4. **Avoid text in favicon.** Only the icon mark
5. **SVG favicons** are supported by ~72% of browsers; include PNG fallbacks (32x32, 16x16)
6. **Dark mode adaptation:** SVG favicons can embed `@media (prefers-color-scheme: dark)` CSS
7. **Optical adjustments:** Circles appear smaller than squares at the same pixel dimensions; compensate
8. **File size:** Keep SVG favicons under 1KB; optimize with SVGO/SVGOMG

**Exemplary tech logos that work at all sizes:**
- **Vercel:** Equilateral triangle. One shape. Works at 8px
- **Linear:** Abstract mark in a rounded square. ~3 paths
- **Stripe:** Bold "S" lettermark. One path, heavy weight
- **Supabase:** Simplified abstract mark. ~2-3 shapes
- **Redux:** Three orbital loops. Recognizable but starts losing clarity below 24px
- **React:** Atom with three orbits + center dot. 4 elements, still reads at 16px because of distinct silhouette

### 1.4 SVG Structure Best Practices

- Use `viewBox="0 0 N N"` (square) for icon variants; wider for full logo
- `currentColor` as fill for single-color variants
- CSS custom properties (`var(--color-accent)`) for multi-color variants
- Remove all metadata, editor cruft; optimize with SVGO
- Prefer `<path>` over `<circle>` + `<rect>` combinations when shapes overlap (fewer elements)
- Group with `<g>` only when needed for animation or independent styling
- Target under 1KB for favicon SVG, under 5KB for full logo

---

## Part 2: Three Logo Concepts

---

### Concept A: "The State Loop" (Cyclic R)

**Geometric idea:**

A stylized letter "R" constructed from a single continuous loop/path that flows back into itself, forming a cycle. The vertical stroke of the R flows up, curves into the bowl, continues down as the diagonal leg, and loops back to the starting point --- creating a closed circuit.

Think of it as an "R" drawn without lifting the pen, where the path's start and end connect, forming a visible loop at the junction point (bottom-left).

**Relation to Relux/Redux/state flow:**

- The continuous loop = unidirectional data flow (Action -> Store -> View -> Action)
- The closed path = predictable state (no broken connections, no side effects)
- The single continuous stroke = "single source of truth" --- everything is one connected system
- The "R" = Relux

**How it works at different sizes:**

- **Full logo (icon + wordmark):** The loop-R icon sits left of "elux Works" in Lato or Inter weight 700. The "R" in the wordmark is replaced by the icon itself, reading as "Relux Works"
- **Icon only (32px+):** The loop-R alone. The continuous stroke is thick enough (stroke-width ~15% of viewBox) to remain clear
- **Favicon (16px):** Same loop-R, but with stroke weight increased to ~20% of viewBox. At 16px, the loop detail at the bottom simplifies --- the brain still reads "R" from the vertical + bowl + leg

**SVG structure:**

```
<svg viewBox="0 0 64 64">
  <!-- Single <path> element: the continuous-loop R -->
  <path d="..." fill="none" stroke="currentColor" stroke-width="8"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

- **1 path element.** Stroke-based, not filled. This keeps it light and elegant
- Estimated ~400 bytes after optimization
- The loop junction can optionally have a small dot/node to emphasize the "state store" concept

**Pros:**
- Extremely minimal (1 path)
- Strong conceptual connection to state cycles
- "R" is immediately readable
- Scales down well due to thick strokes

**Cons:**
- Requires careful path design to keep the loop readable vs. looking like a generic cursive R
- Stroke-based logos can feel less "solid" than filled marks

---

### Concept B: "The Flux Hexagon" (Modular RW Mark)

**Geometric idea:**

A hexagonal container (representing modular architecture) with an abstract "RW" monogram inside, formed by geometric cuts/negative space. The hexagon is divided by angular lines that simultaneously create:
- An "R" in the left portion (via negative space)
- A "W" implied by the angular cuts in the right portion
- Arrow-like directional flow from the cuts (pointing rightward/downward = data flowing through the system)

The hexagon outline is not a plain border --- it has a small gap/opening at one vertex (like a "port" in hexagonal architecture), suggesting data entering and exiting the module.

**Relation to Relux/Redux/state flow:**

- Hexagon = ports-and-adapters / modular architecture (a core principle of well-designed state management)
- The gap in the hexagon = a "port" where actions enter and state exits
- The internal R+W letterforms = Relux Works identity
- The angular cuts creating directional flow = unidirectional data flow
- The contained geometry = predictability, everything is bounded and controlled

**How it works at different sizes:**

- **Full logo (icon + wordmark):** Hex icon left, "Relux Works" wordmark right in geometric sans-serif (Space Grotesk, DM Sans, or similar)
- **Icon only (32px+):** The full hexagon with R+W negative space. All cuts are thick enough to read
- **Favicon (16px):** Simplified to just the hexagon with the "R" negative space only (drop the W detail). The gap in the hexagon border remains visible as a distinguishing mark

**SVG structure:**

```
<svg viewBox="0 0 64 64">
  <!-- Hexagon outline with gap -->
  <path d="..." fill="currentColor"/>
  <!-- Negative space cuts forming R and W -->
  <!-- Achieved via compound path (even-odd fill rule) -->
</svg>
```

- **1-2 path elements** using `fill-rule="evenodd"` for the negative space
- Or a single compound path with holes
- Estimated ~600-800 bytes after optimization

**Pros:**
- Strong "brand container" --- the hexagon is instantly recognizable as the Relux Works mark
- Rich meaning (modularity, ports, data flow) without visual complexity
- Two-letter monogram gives more brand specificity than single letter
- Hexagons tile/tessellate well for patterns (merch, backgrounds, loading animations)

**Cons:**
- More complex than Concept A (more paths, more detail)
- The RW legibility inside a hexagon at 16px is challenging; needs a simplified favicon variant
- Hexagons are somewhat common in tech (though the gapped/ported variant is distinctive)

---

### Concept C: "The Orbital R" (Atom-Redux Hybrid)

**Geometric idea:**

A bold, geometric letter "R" at the center with two elliptical orbit paths crossing through/around it. The R is solid and blocky (constructed from rectangles + a half-circle bowl, no serifs). The two orbits:
- One orbit traces the path Action -> Reducer (wrapping around the R's bowl)
- One orbit traces the path State -> View (crossing the R's leg diagonally)

Together, the orbits and the R form a compact, atom-like symbol. The orbits are thinner than the R's strokes, creating a clear hierarchy: letter first, orbits second.

A small circle/dot sits where the two orbits intersect (near the R's shoulder) --- representing the "store" / single source of truth.

**Relation to Relux/Redux/state flow:**

- Direct descendant of the Redux/React atom aesthetic, but with a distinct identity (solid R instead of hollow loops)
- Two orbits (not three like React/Redux) = Relux's own identity, representing the two core cycles: (1) state update cycle, (2) effect/middleware cycle
- The solid R = stability, predictability, the framework itself
- The intersection dot = the store, the single source of truth
- The orbits = data in motion around the stable core

**How it works at different sizes:**

- **Full logo (icon + wordmark):** Orbital-R icon left, "elux Works" wordmark right. The icon's R serves as the first letter, creating a visual connection
- **Icon only (32px+):** Full orbital-R with both ellipses and the center dot clearly visible. The R reads immediately; the orbits add dynamism
- **Favicon (16px):** The bold R alone (no orbits) OR the R with orbits simplified to two straight diagonal lines crossing behind it. At 16px, the key recognition is the R shape + "something crossing it" which hints at the full mark

**SVG structure:**

```
<svg viewBox="0 0 64 64">
  <!-- Bold geometric R (compound path with counter hole) -->
  <path d="..." fill="currentColor"/>
  <!-- Orbit 1: ellipse path -->
  <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(-30 32 32)"
           fill="none" stroke="currentColor" stroke-width="3"/>
  <!-- Orbit 2: ellipse path -->
  <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(30 32 32)"
           fill="none" stroke="currentColor" stroke-width="3"/>
  <!-- Store dot -->
  <circle cx="38" cy="20" r="4" fill="currentColor"/>
</svg>
```

- **4 elements:** 1 path (R) + 2 ellipses (orbits) + 1 circle (dot)
- Mixed stroke + fill approach
- Estimated ~500-700 bytes after optimization
- The orbits can optionally use the accent color (`#e94560`) while the R uses text color, for a two-tone variant

**Pros:**
- Most visually dynamic of the three concepts
- Strong visual kinship with Redux/React ecosystem (instant recognition by developers)
- The bold R provides excellent favicon readability (just drop the orbits)
- Two-tone variant (R in one color, orbits in accent) creates a striking dark-theme mark
- The "store dot" is a memorable detail that becomes a brand element on its own

**Cons:**
- 4 SVG elements is more complex (though still very light)
- Risk of looking too similar to Redux/React if not carefully differentiated
- The orbit paths behind the R need careful clipping/masking to not create visual noise

---

## Part 3: Comparison Matrix

| Criteria | A: State Loop | B: Flux Hexagon | C: Orbital R |
|----------|--------------|-----------------|--------------|
| **Conceptual depth** | High (cycle = state flow) | High (hex = modularity, ports) | Very high (atom = ecosystem) |
| **Lettermark clarity** | R (strong) | RW (medium) | R (strong) |
| **Favicon readability** | Good (thick stroke R) | Needs simplification | Very good (bold solid R) |
| **SVG complexity** | Minimal (1 path) | Low (1-2 paths) | Medium (4 elements) |
| **Uniqueness** | High | Medium-high | Medium (Redux/React family) |
| **Scalability** | Excellent | Good | Excellent |
| **Dark theme suitability** | Excellent (stroke) | Excellent (fill) | Excellent (mixed) |
| **Animation potential** | High (trace the loop) | Medium (hex rotate) | Very high (orbits spin) |
| **Brand extensibility** | Medium | High (hex tiles) | High (orbits as pattern) |

---

## Part 4: Recommendation

**Primary recommendation: Concept C (Orbital R)** with Concept A (State Loop) as a close second.

**Rationale:**

1. **Concept C** has the strongest favicon story: the bold geometric R works perfectly at 16px even without the orbits. Adding orbits at larger sizes creates a layered brand reveal
2. The two-orbit design is distinct enough from Redux (three loops) and React (three orbits) while clearly signaling "same ecosystem, different identity"
3. The store-dot becomes a powerful micro-brand element (loading spinners, bullet points, cursor)
4. Two-tone potential (R in `#eaeaea`, orbits in `#e94560`, dot in `#7c8cf8`) creates a signature look
5. Animation potential is highest: orbits can rotate on hover/load, creating a "living" logo

**If maximum minimalism is preferred:** Go with Concept A. One path, one stroke, pure simplicity. It's the Stripe-level "just a letter, but done perfectly" approach.

**If brand container / pattern system matters most:** Go with Concept B. The hexagon becomes a design system element (cards, badges, backgrounds).

---

## Part 5: Next Steps

1. **Sketch all three concepts** on paper or in Figma to validate proportions
2. **Build SVG prototypes** for the chosen concept at three sizes (full, icon, favicon)
3. **Test at actual pixel sizes** --- render at 16px, 32px, 64px, 128px and verify readability
4. **Dark mode test** --- verify against `#1a1a2e` background
5. **Color variants** --- monochrome (currentColor), two-tone (accent + text), full color
6. **Motion test** --- simple CSS animation for the chosen mark (orbit rotation, loop trace, hex pulse)

---

## Sources

- [Redux Logo README (GitHub)](https://github.com/reduxjs/redux/blob/master/logo/README.md) --- official Redux logo info, CC0 license
- [Redux Logo Analysis](https://30dayscoding.com/blog/unraveling-the-mystery-of-the-redux-logo) --- three interconnected loops forming "R"
- [Vercel Logo History](https://logos-world.net/vercel-logo/) --- triangle mark analysis
- [Logo Design Trends 2026 (SmartComma)](https://smartcomma.com/logo-design-trends/2026) --- neo-minimalism, sharp contrast
- [Logo Design Trends 2026 (Gapsy)](https://gapsystudio.com/blog/logo-design-trends/) --- beyond minimalism
- [Favicon Best Practices 2026 (Evil Martians)](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) --- three files for most needs
- [SVG Favicon Guide (favicon.im)](https://favicon.im/blog/svg-favicon-complete-guide) --- dark mode, optimization
- [SVG Best Practices (Bitovi)](https://www.bitovi.com/blog/best-practices-for-working-with-svgs) --- viewBox, SVGO, structure
- [Scalable Logo Design (Rabbit Logo)](https://rabbitlogo.com/scalable-logo-design/) --- clarity at small sizes
- [Negative Space Logo Design (GingerSauce)](https://gingersauce.co/how-to-design-negative-space-logo-26-examples-for-26-letters/) --- letter R negative space
- [Lettermark Logos (99designs)](https://99designs.com/inspiration/logos/lettermark) --- R and W monogram patterns
- [Hexagonal Architecture (Wikipedia)](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)) --- ports and adapters meaning
- [CSS Tricks SVG Favicons](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/) --- SVG favicon capabilities
- [Adaptive Favicon (web.dev)](https://web.dev/articles/building/an-adaptive-favicon) --- building responsive favicons
- [AI Company Branding 2026 (Ebaq)](https://www.ebaqdesign.com/blog/ai-company-branding) --- modern AI startup branding patterns
