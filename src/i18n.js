import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS_EN } from "./translations/en/en";
import { TRANSLATIONS_RU } from "./translations/ru/ru";
import { TRANSLATIONS_DE } from "./translations/de/de";

export const languages = ["ru-RU", "en-US", "de-DE"];

i18n.use(initReactI18next).init({
  fallbackLng: "en-US",
  resources: {
    "en-US": {
      translation: TRANSLATIONS_EN,
    },
    "ru-RU": {
      translation: TRANSLATIONS_RU,
    },
    "de-DE": {
      translation: TRANSLATIONS_DE,
    },
  },
});

if (localStorage.getItem("i18nextLng") && languages.some((i) => i === localStorage.getItem("i18nextLng"))) {
  i18n.changeLanguage(localStorage.getItem("i18nextLng"));
} else {
  localStorage.setItem("i18nextLng", languages[0]);
  i18n.changeLanguage(languages[0]);
}

export default i18n;
