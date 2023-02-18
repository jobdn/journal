import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources } from "./resources";

export { resources } from "./resources";

i18n.use(LanguageDetector).init({
  fallbackLng: "ru",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: resources,
});

export default i18n;
