"use client";

import { createContext, useContext, useState } from "react";
import es from "../dictionaries/es.json";
import en from "../dictionaries/en.json";

type Language = "es" | "en";
type Dictionary = typeof es;

const dictionaries = { es, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: dictionaries[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation debe usarse dentro de LanguageProvider");
  }
  return context;
}