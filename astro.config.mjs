// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

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
      // root "/" is a redirect shim, not content
      filter: (page) => new URL(page).pathname !== '/',
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

  adapter: cloudflare()
});