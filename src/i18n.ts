import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './locales/en.json';

type LocaleModule = { translation: Record<string, unknown> };

const localeModules = import.meta.glob(['./locales/*.json', '!./locales/en.json']) as Record<
  string,
  () => Promise<{ default: LocaleModule }>
>;

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

i18n.use(initReactI18next).init({
  resources: { en },
  fallbackLng: 'en',
  lng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
