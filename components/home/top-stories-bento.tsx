"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeTopStories } from "@/lib/i18n/messages/home-hub";
import { HomeCardCtaButton } from "@/components/home/home-card-cta-button";
import { getHomeTopStoriesCards, type HomeTopStoryCard } from "@/lib/i18n/messages/news-hub";

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
      <div className="relative h-44 overflow-hidden sm:h-48">
        <Image
          src={story.image}
          alt=""
          fill
          unoptimized={!story.image.startsWith("/")}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
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
        {story.detail ? (
          <p className="line-clamp-2 text-xs leading-relaxed text-[#64748b] sm:text-sm">
            {story.detail}
          </p>
        ) : null}
        {story.detailExtra ? (
          <p className="line-clamp-2 text-xs leading-relaxed text-[#64748b] sm:text-sm">
            {story.detailExtra}
          </p>
        ) : null}
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

  return (
    <section
      aria-labelledby="top-stories-heading"
      className="home-section-reveal mx-auto max-w-[1280px] px-3 sm:px-4 lg:px-6"
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

      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-5">
        {stories.map((story) => (
          <StoryCard key={story.href} story={story} readMore={copy.readMore} />
        ))}
      </div>
    </section>
  );
}
