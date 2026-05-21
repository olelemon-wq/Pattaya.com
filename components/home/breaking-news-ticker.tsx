"use client";

import { useEffect, useRef, useState } from "react";

const headline =
  "Major infrastructure upgrade announced for Pattaya Beach Road — construction begins Q3 2025";

export function BreakingNewsTicker() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

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
      className="flex h-8 items-center overflow-hidden bg-[#f97316] px-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white lg:px-6"
      role="region"
      aria-label="Breaking news"
    >
      <span className="shrink-0">Breaking</span>
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
              {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
