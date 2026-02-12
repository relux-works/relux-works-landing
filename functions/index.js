const SUPPORTED_LOCALES = new Set(['en', 'ru', 'hy', 'ka']);
const DEFAULT_LOCALE = 'en';

function parseAcceptLanguage(header) {
  if (!header) return [];

  return header
    .split(',')
    .map((entry, index) => {
      const [rawTag, ...params] = entry.trim().split(';');
      const tag = rawTag.toLowerCase();
      let q = 1;

      for (const param of params) {
        const [key, value] = param.trim().split('=');
        if (key === 'q') {
          const parsed = Number.parseFloat(value);
          if (!Number.isNaN(parsed)) q = parsed;
        }
      }

      return { tag, q, index };
    })
    .filter((item) => item.tag)
    .sort((a, b) => {
      if (b.q !== a.q) return b.q - a.q;
      return a.index - b.index;
    })
    .map((item) => item.tag);
}

function pickLocale(acceptLanguage) {
  const rankedTags = parseAcceptLanguage(acceptLanguage);

  for (const tag of rankedTags) {
    if (tag === '*') return DEFAULT_LOCALE;

    if (SUPPORTED_LOCALES.has(tag)) {
      return tag;
    }

    const baseTag = tag.split('-')[0];
    if (SUPPORTED_LOCALES.has(baseTag)) {
      return baseTag;
    }
  }

  return DEFAULT_LOCALE;
}

export function onRequest(context) {
  const { request } = context;

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return context.next();
  }

  const locale = pickLocale(request.headers.get('accept-language'));
  const url = new URL(request.url);
  const location = `/${locale}/${url.search}`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: location,
      Vary: 'Accept-Language',
      'Cache-Control': 'no-store',
    },
  });
}
