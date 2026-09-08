"use client";

import { useTranslation } from "@/providers/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="relative flex items-center justify-between w-16 h-8 p-1 bg-flame-950 rounded-full border border-flame-500/40 cursor-pointer transition-colors"
      aria-label={`Cambiar idioma a ${language === "es" ? "Inglés" : "Español"}`}
    >
      <span
        className={`text-[10px] font-black z-10 w-1/2 text-center transition-colors ${language === "es" ? "text-flame-white" : "text-flame-500"
          }`}
      >
        ES
      </span>
      <span
        className={`text-[10px] font-black z-10 w-1/2 text-center transition-colors ${language === "en" ? "text-flame-white" : "text-flame-500"
          }`}
      >
        EN
      </span>
      <div
        className={`absolute top-1 bottom-1 w-6 bg-flame-500 rounded-full transition-transform duration-200 ease-in-out ${language === "en" ? "translate-x-7" : "translate-x-0"
          }`}
      />
    </button>
  );
}