
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Import your translation files
import en from './locales/en.json';
import es from './locales/es.json';
// Import other languages here

i18n
  .use(initReactI18next)
  .init({
    // We pass the translations directly
    resources: {
      en: en,
      es: es,
      // Add other languages here
    },

    // The default language
    fallbackLng: 'en',

    // Debugging output in the console
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;