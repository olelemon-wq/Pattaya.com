"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FeaturedHeroCinematic } from "@/components/cinematic/featured-hero-cinematic";
import { useLanguage } from "@/components/layout/language-provider";
import {
  getEventsHeroSliderUi,
  getEventsHeroSlides,
} from "@/lib/i18n/messages/events-hero-slides";

const AUTO_MS = 8000;
const SWIPE_THRESHOLD_PX = 48;

const HERO_MIN_HEIGHT =
  "min-h-[min(56dvh,360px)] sm:min-h-[420px] lg:min-h-[480px]";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function EventsHeroSlider() {
  const { language } = useLanguage();
  const slides = getEventsHeroSlides(language);
  const ui = getEventsHeroSliderUi(language);
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const regionRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const onTouchStart = (clientX: number) => {
    touchStartX.current = clientX;
  };

  const onTouchEnd = (clientX: number) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const delta = clientX - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  const current = slides[index];

  return (
    <section
      className="w-full"
      aria-roledescription="carousel"
      aria-label={ui.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!regionRef.current?.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        ref={regionRef}
        className="min-w-0"
        onTouchStart={(e) => onTouchStart(e.touches[0]?.clientX ?? 0)}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0]?.clientX ?? 0)}
      >
        <FeaturedHeroCinematic
          key={index}
          image={current.image}
          imageAlt={current.imageAlt}
          href={current.href}
          featuredLabel={current.featuredLabel}
          category={current.category}
          title={current.title}
          excerpt={current.excerpt}
          ctaLabel={current.ctaLabel}
          ctaTone="home"
          showAiSummary={false}
          minHeightClass={HERO_MIN_HEIGHT}
          byline={`${current.schedule} · ${current.venue}`}
        />
      </div>

      {total > 1 && (
        <div
          className="mt-4 flex items-center justify-center gap-2"
          role="tablist"
          aria-label={ui.carousel}
        >
          {slides.map((_, dotIndex) => {
            const selected = dotIndex === index;
            return (
              <button
                key={dotIndex}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={ui.goToSlide(dotIndex + 1, total)}
                onClick={() => goTo(dotIndex)}
                className={cn(
                  "rounded-full transition-all",
                  selected
                    ? "h-2 w-6 bg-[#f97316]"
                    : "h-2 w-2 bg-[#c4c7c8] hover:bg-[#fdba74]",
                )}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
