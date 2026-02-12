# TASK-260212-1yv5e6: i18n-setup

## Description
Set up i18n infrastructure: Astro i18n config (en/ru/hy/ka, prefix all locales), YAML locale files in locales/, i18n helper to load and resolve translations, hreflang meta tags, routing for /en/ /ru/ /hy/ /ka/.

## Scope
(define task scope)

## Acceptance Criteria
- astro.config.mjs has i18n config with 4 locales
- locales/*.yml files exist for en, ru, hy, ka
- i18n helper loads YAML and resolves nested keys
- Pages render correct locale based on URL prefix
- hreflang tags present in HTML head
