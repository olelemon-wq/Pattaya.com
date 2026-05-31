"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ExploreGuideCard } from "@/components/explore/explore-guide-card";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { useLanguage } from "@/components/layout/language-provider";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

const GAP_PX = 24;

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type ExploreGuideCarouselProps = {
  title: string;
  description: string;
  items: ExploreGuideCardData[];
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
};

export function ExploreGuideCarousel({
  title,
  description,
  items,
  prevLabel,
  nextLabel,
  className,
}: ExploreGuideCarouselProps) {
  const { language } = useLanguage();
  const c = getExploreCommon(language);
  const resolvedPrev = prevLabel ?? c.prev;
  const resolvedNext = nextLabel ?? c.next;
  const resolvedItems = items.map((item) =>
    item.href && !item.ctaLabel ? { ...item, ctaLabel: c.viewDetails } : item,
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollWidth, clientWidth, scrollLeft } = el;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollPrev(scrollLeft > 2);
    setCanScrollNext(scrollLeft < maxScroll - 2);

    if (scrollWidth <= clientWidth + 2) {
      setPageCount(1);
      setActivePage(0);
      return;
    }

    const pages = Math.max(1, Math.ceil(scrollWidth / clientWidth));
    setPageCount(pages);
    setActivePage(Math.min(pages - 1, Math.round(scrollLeft / clientWidth)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState, items.length]);

  const scrollByStep = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-guide-slide]");
    if (!slide) return;
    const step = slide.offsetWidth + GAP_PX;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const scrollToPage = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className={cn("mb-16", className)}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-2xl text-[#444748]">{description}</p>
        </div>
        <div className="hidden shrink-0 gap-2 md:flex">
          <button
            type="button"
            aria-label={resolvedPrev}
            disabled={!canScrollPrev}
            onClick={() => scrollByStep(-1)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full bg-[#e8eaed] text-[#5f6368] transition hover:bg-[#dfe1e5]",
              canScrollPrev
                ? "ring-2 ring-[#B52E88]"
                : "cursor-not-allowed opacity-40",
            )}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label={resolvedNext}
            disabled={!canScrollNext}
            onClick={() => scrollByStep(1)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full bg-[#e8eaed] text-[#5f6368] transition hover:bg-[#dfe1e5]",
              !canScrollNext && "cursor-not-allowed opacity-40",
            )}
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-8 grid auto-cols-[min(100%,340px)] grid-flow-col gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:auto-cols-[calc((100%-1.5rem)/2)] lg:auto-cols-[calc((100%-3rem)/3)] [&::-webkit-scrollbar]:hidden"
      >
        {resolvedItems.map((item) => (
          <div key={item.id} data-guide-slide className="flex h-full min-h-0 snap-start flex-col">
            <ExploreGuideCard {...item} />
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div
          className="mt-4 flex items-center justify-center gap-2 md:hidden"
          role="tablist"
          aria-label={c.carouselPages}
        >
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === activePage}
              aria-label={c.carouselPage
                .replace("{current}", String(index + 1))
                .replace("{total}", String(pageCount))}
              onClick={() => scrollToPage(index)}
              className={cn(
                "rounded-full transition-all",
                index === activePage
                  ? "h-2 w-2 bg-[#444748]"
                  : "h-2 w-2 bg-[#c4c7c8] hover:bg-[#747878]",
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
