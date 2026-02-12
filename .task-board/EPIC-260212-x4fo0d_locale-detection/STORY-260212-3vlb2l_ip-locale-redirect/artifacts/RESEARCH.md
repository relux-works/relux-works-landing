# Locale Detection — Implementation Options

Date: 2026-02-12

## Context

Landing at `/` needs to auto-detect user's locale and redirect to `/en/`, `/ru/`, `/hy/`, or `/ka/`. Default: EN.

Current stack: Astro SSG (static). Current `/` does a static redirect to `/en/`.

## Country → Language Mapping

| Country | Language |
|---------|----------|
| AM (Armenia) | hy |
| GE (Georgia) | ka |
| RU, BY, KZ, UA | ru |
| Everything else | en |

## Option 1: Client-side JS (works with any hosting)

Replace static redirect on `/` with a JS script.

**Detection chain:**
1. Check `localStorage` for cached locale (skip detection on repeat visits)
2. Check `navigator.languages` — map browser language to supported locale
3. (Optional) Call free geo-IP API (`ip-api.com`, `ipapi.co`) for country-based detection
4. Redirect to matched locale, default EN

**Pros:**
- Works with any static hosting (GitHub Pages, S3, any CDN)
- No server dependency
- `navigator.languages` is instant, no network call

**Cons:**
- ~100-300ms white flash before redirect (script needs to execute)
- Geo-IP API adds latency if used (~200-500ms)
- JS required (negligible concern in 2026)

**Implementation sketch:**
```js
const LANG_MAP = { hy: 'hy', ka: 'ka', ru: 'ru', be: 'ru', kk: 'ru', uk: 'ru' };
const SUPPORTED = ['en', 'ru', 'hy', 'ka'];

function detectLocale() {
  const cached = localStorage.getItem('locale');
  if (cached && SUPPORTED.includes(cached)) return cached;

  for (const lang of navigator.languages) {
    const code = lang.split('-')[0].toLowerCase();
    if (LANG_MAP[code]) { cache(LANG_MAP[code]); return LANG_MAP[code]; }
    if (SUPPORTED.includes(code)) { cache(code); return code; }
  }
  return 'en';
}

function cache(locale) { localStorage.setItem('locale', locale); }
window.location.replace('/' + detectLocale() + '/');
```

## Option 2: Astro Hybrid Mode + Middleware (needs SSR hosting)

Switch Astro to `output: 'hybrid'`. Keep all pages static except `/` which becomes SSR.

**Detection chain:**
1. Read `Accept-Language` header → map to supported locale
2. Read platform geo-headers:
   - Cloudflare: `CF-IPCountry`
   - Vercel: `X-Vercel-IP-Country`
   - Netlify: `X-Country`
3. Combine signals, redirect with 302

**Pros:**
- Instant redirect (server-side 302), no flash
- No client JS needed
- `Accept-Language` is reliable and free

**Cons:**
- Requires SSR-capable hosting (Vercel, Cloudflare Pages, Netlify)
- Slightly more complex Astro config
- Geo-headers are platform-specific (need adapter)

**Implementation sketch (Astro middleware):**
```ts
// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

const COUNTRY_MAP: Record<string, string> = {
  AM: 'hy', GE: 'ka', RU: 'ru', BY: 'ru', KZ: 'ru', UA: 'ru',
};

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname !== '/') return next();

  const country = context.request.headers.get('cf-ipcountry')
    || context.request.headers.get('x-vercel-ip-country')
    || context.request.headers.get('x-country');

  const locale = COUNTRY_MAP[country ?? ''] ?? parseAcceptLanguage(context.request) ?? 'en';
  return context.redirect('/' + locale + '/', 302);
});
```

## Option 3: Edge Function (platform-specific, fastest)

Cloudflare Worker or Vercel Edge Middleware. Redirect at CDN level before any page renders.

**Pros:**
- Fastest possible — redirect at edge, ~0ms perceived latency
- Full access to geo data (Cloudflare `request.cf.country`, Vercel geo headers)

**Cons:**
- Platform lock-in
- Separate deployment config
- Overkill for a landing page

## Recommendation

**Decision deferred until hosting is chosen.** When hosting is decided:

- **Vercel/Cloudflare Pages/Netlify** → Option 2 (hybrid + middleware). Best UX, native geo-headers.
- **Static-only hosting (S3, GitHub Pages)** → Option 1 (client-side JS). `navigator.languages` alone covers 95% of cases for AM/GE market.
- **High-traffic / SEO-critical** → Option 3 (edge function). But probably overkill here.

**Note on `navigator.languages` vs geo-IP:** For the AM/GE target market, browser language detection is sufficient. Armenian users typically have hy or ru browser language, Georgian users have ka or ru. Geo-IP is only useful for catching tourists with EN browsers who are physically in AM/GE — but those users likely *want* English, so geo-IP redirect to local language is arguably worse UX.
