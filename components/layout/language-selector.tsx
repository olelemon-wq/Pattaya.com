"use client";

import { useEffect, useRef, useState } from "react";
import { LANGUAGES } from "@/lib/i18n/languages";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { useLanguage } from "./language-provider";

const LANGUAGE_FLAGS: Record<(typeof LANGUAGES)[number]["code"], string> = {
  th: "https://flagcdn.com/w40/th.png",
  en: "https://flagcdn.com/w40/gb.png",
  zh: "https://flagcdn.com/w40/cn.png",
  ru: "https://flagcdn.com/w40/ru.png",
};

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((lang) => lang.code === language) ?? LANGUAGES[1];

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={tSiteUi(language, "selectLanguage")}
        className="flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-3 py-2 text-xs font-semibold text-[#0c1a33] transition-colors hover:border-[#f97316] hover:text-[#f97316]"
      >
        <img
          src={LANGUAGE_FLAGS[current.code]}
          alt=""
          aria-hidden="true"
          className="h-3.5 w-5 rounded-[2px] object-cover ring-1 ring-black/10"
          loading="lazy"
        />
        <span className="sr-only">{current.label}</span>
        <span
          className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={tSiteUi(language, "languages")}
          className="absolute right-0 top-full z-[200] mt-2 min-w-[168px] overflow-hidden rounded-xl border border-[#e2e8f0] bg-white py-1 shadow-lg"
        >
          {LANGUAGES.map((lang) => {
            const selected = lang.code === language;
            return (
              <li key={lang.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setLanguage(lang.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                    selected
                      ? "bg-[#fff7ed] font-semibold text-[#f97316]"
                      : "text-[#0c1a33] hover:bg-[#f8fafc]"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={LANGUAGE_FLAGS[lang.code]}
                      alt=""
                      aria-hidden="true"
                      className="h-3.5 w-5 rounded-[2px] object-cover ring-1 ring-black/10"
                      loading="lazy"
                    />
                    <span>{lang.menuLabel}</span>
                  </span>
                  {selected && <span aria-hidden="true">✓</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
