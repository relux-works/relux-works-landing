## Status
done

## Assigned To
claude-fable

## Created
2026-02-12T14:43:35Z

## Last Update
2026-06-11T23:33:38Z

## Blocked By
- (none)

## Blocks
- STORY-260212-3vlb2l

## Checklist
(empty)

## Notes
External block: waiting for Ivan Oparin to decide on hosting platform.
RESOLVED 2026-06-12: hosting is Cloudflare Worker (not Pages) with git-integrated Workers Builds: build = npm run build, deploy = npx wrangler deploy, production branch = main, repo relux-works/relux-works-landing. Implication: Pages Functions (functions/index.js) are NOT executed on this hosting — root locale redirect is handled by static dist/index.html shim (src/pages/index.astro). Git connection had been broken (disconnected GitHub app), reconnected 2026-06-12, auto-deploy verified working.

## Precondition Resources
(none)

## Outcome Resources
(none)
