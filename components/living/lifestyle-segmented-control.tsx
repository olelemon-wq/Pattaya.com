"use client";

import { useCostLiving } from "@/components/living/cost-living-provider";
import { useLanguage } from "@/components/layout/language-provider";
import type { LifestyleTier } from "@/lib/cost-of-living/cost-data";
import { getTierOptions } from "@/lib/i18n/messages/living/cost-of-living-widget";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  "aria-label"?: string;
};

export function LifestyleSegmentedControl({ className = "", "aria-label": ariaLabel }: Props) {
  const { language } = useLanguage();
  const options = getTierOptions(language);
  const { tier, setTier } = useCostLiving();

  const trackRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<LifestyleTier, HTMLButtonElement | null>>({
    budget: null,
    standard: null,
    premium: null,
  });
  const [glide, setGlide] = useState({ width: 0, left: 0, ready: false });

  const measureTier = useCallback((activeTier: LifestyleTier) => {
    const track = trackRef.current;
    const btn = btnRefs.current[activeTier];
    if (!track || !btn) return;
    const trackRect = track.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setGlide({
      width: btnRect.width,
      left: btnRect.left - trackRect.left,
      ready: true,
    });
  }, []);

  useLayoutEffect(() => {
    measureTier(tier);
  }, [tier, language, measureTier]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => measureTier(tier));
    observer.observe(track);
    return () => observer.disconnect();
  }, [tier, measureTier]);

  return (
    <div
      className={`lifestyle-seg ${className}`.trim()}
      role="tablist"
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className="lifestyle-seg__track">
        <span
          className={`lifestyle-seg__glide${glide.ready ? " lifestyle-seg__glide--ready" : ""}`}
          aria-hidden
          style={{
            width: glide.width,
            transform: `translateX(${glide.left}px)`,
          }}
        />
        {options.map((opt) => (
          <button
            key={opt.value}
            ref={(el) => {
              btnRefs.current[opt.value] = el;
            }}
            type="button"
            role="tab"
            aria-selected={tier === opt.value}
            className={`lifestyle-seg__btn${tier === opt.value ? " lifestyle-seg__btn--active" : ""}`}
            onClick={() => {
              setTier(opt.value);
              measureTier(opt.value);
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
