import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pl from './locales/pl.json';
import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
    pl: { translation: pl },
    en: { translation: en },
    de: { translation: de },
};

i18n
    .use(LanguageDetector)           // automatycznie wykrywa język przeglądarki
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'pl',             // jeśli nie znajdzie języka → polski
        supportedLngs: ['pl', 'en', 'de'],
        interpolation: {
            escapeValue: false,          // React już escapuje
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;