"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { useLanguage } from "@/components/layout/language-provider";
import { exploreImages } from "@/lib/design/explore-images";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { getWellnessPage } from "@/lib/i18n/messages/explore-wellness";
import { Clock, MapPin, Sparkles, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const spaImages: Record<string, string> = {
  "aura-sanctuary": exploreImages.auraSanctuary,
  "cliff-spa": exploreImages.skyGallery,
  "jomtien-retreat": exploreImages.cafeLifestyle,
  "naklua-herbal": exploreImages.caveBeachClub,
};

const tipIcons = [Clock, Sun, Sparkles, MapPin] as const;

export function WellnessPage() {
  const { language } = useLanguage();
  const c = getExploreCommon(language);
  const page = getWellnessPage(language);

  const spaGuideCards: ExploreGuideCardData[] = page.spas.map((spa) => ({
    id: spa.id,
    name: spa.name,
    nameTh: spa.nameTh,
    image: spaImages[spa.id] ?? exploreImages.auraSanctuary,
    tags: spa.tags,
    excerpt: spa.excerpt,
    details: [
      { icon: "clock", label: c.hours, value: spa.hours },
      { icon: "mapPin", label: c.location, value: spa.location },
      { icon: "sparkles", label: c.from, value: spa.session },
    ],
  }));

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="wellness-hero-title"
      >
        <Image
          src={exploreImages.auraSanctuary}
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
          <nav aria-label="Breadcrumb" className="mb-4">
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
          <h1
            id="wellness-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
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
          items={spaGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{page.tips.title}</h2>
          <p className="mt-2 text-[#444748]">{page.tips.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.tips.items.map((tip, i) => {
              const Icon = tipIcons[i] ?? Clock;
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

        <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">{page.alsoExplore.title}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/explore/beaches"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.mainBeaches}
            </Link>
            <Link
              href="/explore/restaurants/fine-dining"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.fineDining}
            </Link>
            <Link
              href="/explore/islands/koh-larn"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.kohLarn}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
