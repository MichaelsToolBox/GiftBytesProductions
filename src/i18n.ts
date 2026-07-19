import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './locales/en.json';

type LocaleModule = { translation: Record<string, unknown> };

const localeModules = import.meta.glob(['./locales/*.json', '!./locales/en.json']) as Record<
  string,
  () => Promise<{ default: LocaleModule }>
>;

const supportedCodes = new Set([
  'en',
  ...Object.keys(localeModules).map((path) => path.match(/\/([a-z]{2})\.json$/)?.[1]).filter(Boolean) as string[],
]);

function detectBrowserLanguage(): string {
  if (typeof navigator === 'undefined') return 'en';
  const candidates = [...(navigator.languages ?? []), navigator.language].filter(Boolean);
  for (const locale of candidates) {
    const code = locale.toLowerCase().split('-')[0];
    if (supportedCodes.has(code)) return code;
  }
  return 'en';
}

/** Lazily load a locale bundle the first time it is needed. */
export async function loadLanguage(lng: string): Promise<string> {
  const code = lng.split('-')[0];
  if (i18n.hasResourceBundle(code, 'translation')) {
    return code;
  }

  const loader = localeModules[`./locales/${code}.json`];
  if (!loader) {
    return 'en';
  }

  const mod = await loader();
  i18n.addResourceBundle(code, 'translation', mod.default.translation, true, true);
  return code;
}

const initialLng = detectBrowserLanguage();

void i18n.use(initReactI18next).init({
  resources: { en },
  fallbackLng: 'en',
  lng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
}).then(async () => {
  if (initialLng !== 'en') {
    const code = await loadLanguage(initialLng);
    await i18n.changeLanguage(code);
  }
});

export default i18n;
