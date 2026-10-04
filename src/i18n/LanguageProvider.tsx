import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { DEFAULT_LANGUAGE, isLanguage, translate, type Language, type Text } from "./languages";

const STORAGE_KEY = "portfolio.language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: Text) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // El servidor siempre renderiza el idioma por defecto; el guardado se aplica al montar
  // para no romper la hidratación.
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLanguage(saved)) setLanguageState(saved);
    } catch {
      // Almacenamiento no disponible: se mantiene el idioma por defecto.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Almacenamiento no disponible: el cambio aplica solo a esta visita.
    }
  }, []);

  const t = useCallback((text: Text) => translate(text, language), [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a <LanguageProvider />");
  }

  return context;
}
