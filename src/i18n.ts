import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

// Bilingual site — Arabic is the default, English available via toggle.
const savedLang = localStorage.getItem("wedding-lang") || "ar";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: savedLang,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

const applyDir = (lng: string) => {
  const dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lng);
};

applyDir(savedLang);

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("wedding-lang", lng);
  applyDir(lng);
});

export default i18n;
