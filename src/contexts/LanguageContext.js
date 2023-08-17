import React, { useContext, useEffect, useState } from "react";
import i18next from "i18next";
import i18n from "../i18n";

const LanguageContext = React.createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(i18next.language);

  useEffect(() => {
    localStorage.setItem("i18nextLng", language);
    i18n.changeLanguage(language);
  }, [language]);

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  const value = {
    language,
    changeLanguage,
  };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
