"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import {
  tBreakingLabel,
  tTickerHeadline,
  type TickerVariant,
} from "@/lib/i18n/messages/ticker";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";

type BreakingNewsTickerProps = {
  variant?: TickerVariant;
  headline?: string;
};

const barStyles = {
  home: "bg-[#f97316] text-white",
  news: "bg-[#10438f] text-white",
  living: "bg-[#B29475] text-white",
  explore: "bg-[#B52E88] text-white",
  business: "bg-[#363636] text-white",
} as const;

const labelStyles = {
  home: "shrink-0",
  news: "shrink-0 text-[#FF8C00]",
  living: "shrink-0",
  explore: "shrink-0",
  business: "shrink-0 text-[#E2B04E]",
} as const;

export function BreakingNewsTicker({
  variant = "home",
  headline,
}: BreakingNewsTickerProps) {
  const { language } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const text = headline ?? tTickerHeadline(language, variant);
  const breakingLabel = tBreakingLabel(language);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`flex h-8 items-center overflow-hidden px-4 text-[11px] font-bold uppercase tracking-[0.15em] lg:px-6 ${barStyles[variant]}`}
      role="region"
      aria-label={tSiteUi(language, "breakingNews")}
    >
      <span className={labelStyles[variant]}>{breakingLabel}</span>
      <div
        className="relative ml-4 min-w-0 flex-1 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div
          className={`breaking-news-marquee-track flex w-max ${paused ? "is-paused" : ""}`}
        >
          {[0, 1].map((copy) => (
            <span
              key={copy}
              className="inline-block shrink-0 pr-12 font-medium normal-case tracking-normal opacity-95 motion-reduce:pr-0"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
