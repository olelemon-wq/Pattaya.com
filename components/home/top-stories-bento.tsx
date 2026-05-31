"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeTopStories } from "@/lib/i18n/messages/home-hub";
import { getCitySpotlights, getMoreCityArticles } from "@/lib/i18n/messages/news-hub";
import { newsImages } from "@/lib/design/news-images";

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

export function TopStoriesBento() {
  const { language } = useLanguage();
  const copy = getHomeTopStories(language);
  const [sanctuary, walking] = getMoreCityArticles(language);
  const { hotel } = getCitySpotlights(language);

  const secondary = [
    {
      badge: hotel.eyebrow,
      title: hotel.title,
      excerpt: hotel.excerpt,
      href: hotel.href,
      image: newsImages.hotels,
      time: copy.hotelTime,
    },
    {
      badge: walking.badge,
      title: walking.title,
      excerpt: walking.excerpt,
      href: walking.href,
      image: newsImages.walkingStreet,
      time: walking.footer,
    },
  ];

  return (
    <section
      aria-labelledby="top-stories-heading"
      className="home-section-reveal mx-auto max-w-[1280px] px-4 lg:px-6"
      style={{ animationDelay: "120ms" }}
    >
      <div className="mb-5 flex items-end justify-between border-b border-[#e2e8f0] pb-3">
        <div className="flex items-end gap-3">
          <h2 id="top-stories-heading" className="text-xl font-extrabold text-[#0c1a33] sm:text-2xl">
            {copy.title}
          </h2>
          <span className="mb-1.5 h-1 w-10 shrink-0 rounded-full bg-[#f97316]" aria-hidden />
        </div>
        <Link
          href="/news"
          className="text-xs font-bold text-[#10438f] transition-colors hover:text-[#f97316] sm:text-sm"
        >
          {copy.viewAll} →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <Link
          href={sanctuary.href}
          className="group flex flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-lg md:col-span-8"
        >
          <div className="relative h-44 overflow-hidden sm:h-56 md:h-[340px] lg:h-[380px]">
            <Image
              src={newsImages.sanctuary}
              alt=""
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 sm:gap-3.5 sm:p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <StoryBadge>{sanctuary.badge}</StoryBadge>
              <TimeLabel>{sanctuary.footer}</TimeLabel>
            </div>

            <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#0c1a33] transition-colors group-hover:text-[#10438f] sm:text-xl md:text-2xl">
              {sanctuary.title}
            </h3>

            {/* Mobile: short lead only */}
            <p className="line-clamp-2 text-sm leading-relaxed text-[#64748b] md:hidden">
              {sanctuary.excerpt}
            </p>

            {/* Tablet / desktop: lead + extra detail, clamped so card height stays balanced */}
            <div className="hidden space-y-2 md:block">
              <p className="text-sm leading-relaxed text-[#475569]">{sanctuary.excerpt}</p>
              {sanctuary.detail ? (
                <p className="line-clamp-2 text-sm leading-relaxed text-[#64748b] lg:line-clamp-3">
                  {sanctuary.detail}
                </p>
              ) : null}
            </div>

            <div className="mt-0.5 flex items-center justify-between gap-3 border-t border-[#f1f5f9] pt-3">
              <span className="sr-only">{copy.readMore}</span>
              <span
                className="inline-flex items-center gap-1 text-sm font-bold text-[#10438f] transition-colors group-hover:text-[#f97316]"
                aria-hidden
              >
                {copy.readMore}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-4 md:col-span-4 md:gap-5">
          {secondary.map((story) => (
            <Link
              key={story.href}
              href={story.href}
              className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden sm:h-48">
                <Image
                  src={story.image}
                  alt=""
                  fill
                  unoptimized={!story.image.startsWith("/")}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <StoryBadge>{story.badge}</StoryBadge>
                  <TimeLabel>{story.time}</TimeLabel>
                </div>
                <h3 className="text-base font-bold leading-snug text-[#0c1a33] transition-colors group-hover:text-[#10438f] sm:text-lg">
                  {story.title}
                </h3>
                <p className="line-clamp-2 text-xs text-[#64748b] sm:text-sm">{story.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
