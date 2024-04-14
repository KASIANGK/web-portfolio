import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importez les fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours en cas de traduction manquante
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },
  });

export default i18n;
