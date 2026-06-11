## Status
analysis

## Assigned To
(none)

## Created
2026-02-12T14:38:12Z

## Last Update
2026-06-11T23:33:38Z

## Blocked By
- STORY-260212-2t2wcx

## Blocks
- (none)

## Checklist
(empty)

## Notes
Decision deferred until hosting is chosen. See artifacts/RESEARCH.md for 3 implementation options analysis.
2026-06-12: client-side fallback implemented in src/pages/index.astro — static root page redirects via nf_lang cookie -> navigator.languages -> /en/ (meta-refresh for no-JS). Works on any host. Server-side variant (functions/index.js) still requires Cloudflare Pages Functions — hosting decision (STORY-260212-2t2wcx) still open: prod currently does NOT execute Pages Functions (root was 404ing, dynamic Astro 404 suggests astro preview behind Cloudflare).
2026-06-12: root / now live with client-side redirect (browser language + nf_lang cookie). Remaining scope of this story (IP-geo country mapping AM->hy GE->ka via free geo-IP) is optional enhancement on top.

## Precondition Resources
(none)

## Outcome Resources
(none)
