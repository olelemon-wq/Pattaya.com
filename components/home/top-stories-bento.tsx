"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeTopStories } from "@/lib/i18n/messages/home-hub";
import { HomeCardCtaButton } from "@/components/home/home-card-cta-button";
import { getHomeTopStoriesCards, type HomeTopStoryCard } from "@/lib/i18n/messages/news-hub";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function StoryBadge({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full border border-[#10438f]/20 bg-[#eff6ff] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#10438f]">
      {children}
    </span>
  );
}

function TimeLabel({ children }: { children: string }) {
  return (
    <span className="flex items-center gap-1 text-[10px] font-medium text-[#64748b] sm:text-xs">
      <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {children}
    </span>
  );
}

function StoryCard({ story, readMore }: { story: HomeTopStoryCard; readMore: string }) {
  return (
    <Link
      href={story.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-40 overflow-hidden sm:h-44">
        <Image
          src={story.image}
          alt=""
          fill
          unoptimized={!story.image.startsWith("/")}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:gap-2.5 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StoryBadge>{story.badge}</StoryBadge>
          <TimeLabel>{story.time}</TimeLabel>
        </div>
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#0c1a33] transition-colors group-hover:text-[#10438f] sm:text-lg">
          {story.title}
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-[#64748b] sm:text-sm">
          {story.excerpt}
        </p>
        <div className="mt-auto border-t border-[#f1f5f9] pt-3">
          <HomeCardCtaButton label={readMore} variant="home" />
        </div>
      </div>
    </Link>
  );
}

export function TopStoriesBento() {
  const { language } = useLanguage();
  const copy = getHomeTopStories(language);
  const stories = getHomeTopStoriesCards(language);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 2);
    setCanScrollNext(el.scrollLeft < maxScroll - 2);
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
  }, [updateScrollState, stories.length]);

  const scrollByPage = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="top-stories-heading"
      className="home-section-reveal mx-auto max-w-[1280px] px-3 sm:px-4 lg:px-6"
      style={{ animationDelay: "120ms" }}
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-[#e2e8f0] pb-3">
        <div className="flex items-end gap-3">
          <h2 id="top-stories-heading" className="text-xl font-extrabold text-[#0c1a33] sm:text-2xl">
            {copy.title}
          </h2>
          <span className="mb-1.5 h-1 w-10 shrink-0 rounded-full bg-[#f97316]" aria-hidden />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex gap-1.5">
            <button
              type="button"
              aria-label={copy.prev}
              disabled={!canScrollPrev}
              onClick={() => scrollByPage(-1)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#10438f] shadow-sm transition hover:border-[#10438f]/30 hover:bg-[#eff6ff]",
                !canScrollPrev && "cursor-not-allowed opacity-40",
              )}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label={copy.next}
              disabled={!canScrollNext}
              onClick={() => scrollByPage(1)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#10438f] shadow-sm transition hover:border-[#10438f]/30 hover:bg-[#eff6ff]",
                !canScrollNext && "cursor-not-allowed opacity-40",
              )}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold text-[#10438f] transition-colors hover:text-[#f97316] sm:text-sm"
          >
            {copy.viewAll}
          </Link>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="grid auto-cols-[min(100%,300px)] grid-flow-col gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:auto-cols-[calc((100%-1.25rem)/2)] lg:auto-cols-[calc((100%-3.75rem)/4)] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
      >
        {stories.map((story) => (
          <div
            key={story.href}
            data-story-slide
            className="flex h-full min-h-0 snap-start flex-col"
          >
            <StoryCard story={story} readMore={copy.readMore} />
          </div>
        ))}
      </div>
    </section>
  );
}
