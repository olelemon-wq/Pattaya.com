"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANGUAGE,
  getLanguageByCode,
  LANGUAGE_STORAGE_KEY,
  type LanguageCode,
} from "@/lib/i18n/languages";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored && getLanguageByCode(stored).code === stored) {
        setLanguageState(stored as LanguageCode);
      } else {
        const match = document.cookie.match(
          new RegExp(`(?:^|; )${LANGUAGE_STORAGE_KEY}=([^;]*)`),
        );
        const fromCookie = match?.[1];
        if (fromCookie && getLanguageByCode(fromCookie).code === fromCookie) {
          setLanguageState(fromCookie as LanguageCode);
        }
      }
    } catch {
      // private mode / blocked storage
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.cookie = `${LANGUAGE_STORAGE_KEY}=${language};path=/;max-age=31536000;SameSite=Lax`;
  }, [language, ready]);

  const setLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code);
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
