// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://relux.works',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'hy', 'ka'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ru: 'ru',
          hy: 'hy',
          ka: 'ka',
        },
      },
    }),
  ],
});
