"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const SCROLL_THRESHOLD_PX = 320;

export function BackToTopButton() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#e7e8e9] bg-white text-[#191c1d] shadow-[0_8px_24px_rgba(25,28,29,0.12)] transition-transform hover:scale-105 hover:bg-[#f8f9fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669] active:scale-95 sm:right-6 motion-reduce:transition-none motion-reduce:hover:scale-100"
      aria-label={tSiteUi(language, "backToTop")}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.25} aria-hidden />
      <span className="sr-only">{tSiteUi(language, "backToTop")}</span>
    </button>
  );
}
