import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

// The site is Arabic-only — no language toggle, always RTL.
const LANG = "ar";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: LANG,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.setAttribute("dir", "rtl");
document.documentElement.setAttribute("lang", "ar");

export default i18n;
