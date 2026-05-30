"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { useLanguage } from "@/components/layout/language-provider";
import { shoppingImages } from "@/lib/design/shopping-images";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { getShoppingMallsPage } from "@/lib/i18n/messages/explore-shopping-malls";
import { Car, Clock, MapPin, ShoppingBag, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const mallImages: Record<string, string> = {
  "central-festival": shoppingImages.centralFestival,
  "terminal-21": shoppingImages.terminal21,
  "royal-garden": shoppingImages.royalGarden,
  "harbor-mall": shoppingImages.harborMall,
};

const categoryImages = [
  shoppingImages.souvenirs,
  shoppingImages.nightStalls,
  shoppingImages.terminal21,
  shoppingImages.centralFestival,
];

const tipIcons = [Car, Clock, ShoppingBag, Store] as const;

function CategoryCard({
  name,
  nameTh,
  image,
  note,
}: {
  name: string;
  nameTh: string;
  image: string;
  note: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-[#191c1d]">{name}</h4>
        {nameTh ? <p className="text-sm text-[#B52E88]">{nameTh}</p> : null}
        <p className="mt-2 text-xs leading-relaxed text-[#444748]">{note}</p>
      </div>
    </article>
  );
}

export function ShoppingMallsPage() {
  const { language } = useLanguage();
  const c = getExploreCommon(language);
  const page = getShoppingMallsPage(language);

  const mallGuideCards: ExploreGuideCardData[] = page.malls.map((mall) => ({
    id: mall.id,
    name: mall.name,
    nameTh: mall.nameTh,
    image: mallImages[mall.id] ?? shoppingImages.mallsHero,
    tags: mall.tags,
    excerpt: mall.excerpt,
    details: [
      { icon: "clock", label: c.hours, value: mall.hours },
      { icon: "mapPin", label: c.location, value: mall.location },
      { icon: "film", label: c.highlights, value: mall.highlights },
    ],
  }));

  return (
    <div data-full-bleed className="bg-[#f8f9fa] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="malls-hero-title"
      >
        <Image
          src={shoppingImages.mallsHero}
          alt={page.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/75 via-[#191c1d]/50 to-[#191c1d]/88"
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
          <span className="mb-3 inline-flex w-fit rounded-full bg-teal-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-800">
            {page.hero.badge}
          </span>
          <h1 id="malls-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-teal-200 md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <ShoppingBag className="h-4 w-4" aria-hidden />
              {page.hero.badgeLuxury}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />
              {page.hero.badgeAreas}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title={page.carousel.title}
          description={page.carousel.description}
          prevLabel={page.carousel.prev}
          nextLabel={page.carousel.next}
          items={mallGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{page.categories.title}</h2>
          <p className="mt-2 text-[#444748]">{page.categories.subtitle}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {page.categories.items.map((cat, i) => (
              <CategoryCard key={cat.name} {...cat} image={categoryImages[i] ?? shoppingImages.souvenirs} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{page.tips.title}</h2>
          <p className="mt-2 text-[#444748]">{page.tips.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.tips.items.map((tip, i) => {
              const Icon = tipIcons[i] ?? Car;
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
              href="/explore/shopping/markets"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.localMarkets}
            </Link>
            <Link
              href="/explore/restaurants/street-food"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.streetFood}
            </Link>
            <Link
              href="/explore/cafes"
              className="rounded-xl border border-[#455f88]/30 px-6 py-3 text-center text-sm font-semibold text-[#455f88] transition hover:bg-[#455f88]/5"
            >
              {page.alsoExplore.cafesLink}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
