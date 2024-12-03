import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import en from "./Locals/en.json";
import de from "./Locals/de.json";
import hi from "./Locals/hi.json";

// Initialize i18n
i18n
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n to React
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      hi: { translation: hi },
    },
    fallbackLng: "en", // Fallback language if the detected language is unavailable
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;