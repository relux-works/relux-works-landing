import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export const languages = ['en', 'ru', 'hy', 'ka'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export const langLabels: Record<Lang, string> = {
  en: 'EN',
  ru: 'RU',
  hy: 'ՀՅ',
  ka: 'ქა',
};

type Translations = Record<string, unknown>;
const cache = new Map<Lang, Translations>();

function loadLocale(lang: Lang): Translations {
  if (cache.has(lang)) return cache.get(lang)!;
  const filePath = path.join(process.cwd(), 'locales', `${lang}.yml`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = yaml.load(raw) as Translations;
  cache.set(lang, data);
  return data;
}

function resolve(obj: unknown, keys: string[]): string {
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return keys.join('.');
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : keys.join('.');
}

export function t(lang: Lang, key: string): string {
  const data = loadLocale(lang);
  return resolve(data, key.split('.'));
}

export function getLocalePath(lang: Lang, path: string = '/'): string {
  return `/${lang}${path === '/' ? '/' : path}`;
}

export function getAlternateLinks(currentPath: string): { lang: Lang; href: string }[] {
  const pathWithoutLang = currentPath.replace(/^\/(en|ru|hy|ka)/, '') || '/';
  return languages.map((lang) => ({
    lang,
    href: getLocalePath(lang, pathWithoutLang),
  }));
}
