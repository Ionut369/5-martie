import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { ro } from './locales/ro';

// Custom language detector that prioritizes location
const customLanguageDetector = {
  name: 'customLocationDetector',
  lookup() {
    // Get user's country from the browser's language preferences
    const userLanguages = navigator.languages || [navigator.language];
    const userCountry = new Intl.Locale(userLanguages[0]).maximize().region;
    
    // Return Romanian for users from Romania, English otherwise
    return userCountry === 'RO' ? 'ro' : 'en';
  },
  cacheUserLanguage(lng: string) {
    localStorage.setItem('i18nextLng', lng);
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ro: {
        translation: ro,
      },
    },
    fallbackLng: 'en', // Changed to English as default
    detection: {
      order: ['customLocationDetector', 'localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Register the custom detector
i18n.services.languageDetector.addDetector(customLanguageDetector);

export default i18n;