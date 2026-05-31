"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { useLanguage } from "@/components/layout/language-provider";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { exploreImages } from "@/lib/design/explore-images";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { getHiddenGemsPage } from "@/lib/i18n/messages/explore-hidden-gems";
import { BookOpen, Clock, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const storyImages: Record<string, string> = {
  "hidden-spots": exploreImages.hiddenSpots,
  "weekend-guide": exploreImages.weekendGuide,
  "naklua-morning": exploreImages.thepprasitMarket,
  "pratumnak-sunsets": exploreImages.skyGallery,
};

const tipIcons = [MapPin, BookOpen, Sparkles, Clock] as const;

export function HiddenGemsPage() {
  const { language } = useLanguage();
  const c = getExploreCommon(language);
  const page = getHiddenGemsPage(language);

  const storyGuideCards: ExploreGuideCardData[] = page.stories.map((story) => ({
    id: story.id,
    name: story.name,
    nameTh: story.nameTh,
    image: storyImages[story.id] ?? exploreImages.hiddenSpots,
    tags: story.tags,
    excerpt: story.excerpt,
    details: [
      { icon: "clock", label: c.readTime, value: story.readTime },
      { icon: "mapPin", label: c.areas, value: story.location },
      { icon: "gem", label: c.vibe, value: story.tags.join(" · ") },
    ],
  }));

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="gems-hero-title"
      >
        <Image
          src={exploreImages.hiddenSpots}
          alt={page.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/70 via-[#191c1d]/50 to-[#191c1d]/85"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(65vh,480px)] max-w-[1280px] flex-col justify-end px-5 pb-14 pt-20 md:px-16 md:pb-16">
          <nav aria-label={tSiteUi(language, "breadcrumb")} className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
              <li>
                <Link href="/explore" className="hover:text-white">
                  {page.breadcrumb.explore}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">{page.breadcrumb.current}</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            {page.hero.badge}
          </span>
          <h1 id="gems-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title={page.carousel.title}
          description={page.carousel.description}
          prevLabel={page.carousel.prev}
          nextLabel={page.carousel.next}
          items={storyGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{page.tips.title}</h2>
          <p className="mt-2 text-[#444748]">{page.tips.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.tips.items.map((tip, i) => {
              const Icon = tipIcons[i] ?? MapPin;
              return (
                <div
                  key={tip.title}
                  className="flex gap-4 rounded-xl border border-[#c4c7c8]/30 bg-white p-4 sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B52E88]/10">
                    <Icon className="h-5 w-5 text-[#B52E88]" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#191c1d]">{tip.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#444748]">{tip.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-[#B52E88]/20 bg-[#FCE8F4] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#B52E88] md:text-2xl">{page.newsletter.title}</h2>
          <p className="mt-2 text-sm text-[#444748]">{page.newsletter.body}</p>
          <Link
            href="/explore"
            className="mt-4 inline-flex rounded-xl bg-[#B52E88] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
          >
            {page.newsletter.cta}
          </Link>
        </section>

        <section className="mt-8 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">{page.alsoExplore.title}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/explore/beaches"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.mainBeaches}
            </Link>
            <Link
              href="/explore/shopping/markets"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.localMarkets}
            </Link>
            <Link
              href="/explore/cafes"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.cafesLink}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
