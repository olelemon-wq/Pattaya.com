"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { useLanguage } from "@/components/layout/language-provider";
import { shoppingImages } from "@/lib/design/shopping-images";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { getShoppingMarketsPage } from "@/lib/i18n/messages/explore-shopping-markets";
import { Clock, HandCoins, MapPin, ShoppingBasket, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const marketImages: Record<string, string> = {
  thepprasit: shoppingImages.thepprasit,
  naklua: shoppingImages.naklua,
  floating: shoppingImages.floatingMarket,
  "made-in-thailand": shoppingImages.madeInThailand,
};

const findImages = [
  shoppingImages.souvenirs,
  shoppingImages.bargains,
  shoppingImages.localCrafts,
  shoppingImages.nightStalls,
];

const tipIcons = [HandCoins, Clock, ShoppingBasket, Sparkles] as const;

function FindCard({
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
        <Image src={image} alt={name} fill className="object-cover" sizes="25vw" />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-[#191c1d]">{name}</h4>
        {nameTh ? <p className="text-sm text-[#B52E88]">{nameTh}</p> : null}
        <p className="mt-2 text-xs leading-relaxed text-[#444748]">{note}</p>
      </div>
    </article>
  );
}

export function ShoppingMarketsPage() {
  const { language } = useLanguage();
  const c = getExploreCommon(language);
  const page = getShoppingMarketsPage(language);

  const marketGuideCards: ExploreGuideCardData[] = page.markets.map((market) => ({
    id: market.id,
    name: market.name,
    nameTh: market.nameTh,
    image: marketImages[market.id] ?? shoppingImages.marketsHero,
    tags: market.tags,
    excerpt: market.excerpt,
    details: [
      { icon: "clock", label: c.hours, value: market.hours },
      { icon: "mapPin", label: c.location, value: market.location },
      { icon: "store", label: c.mustBuy, value: market.mustBuy },
    ],
  }));

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="markets-hero-title"
      >
        <Image
          src={shoppingImages.marketsHero}
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
                <span className="text-white/80">{page.breadcrumb.shopping}</span>
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
          <h1 id="markets-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
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
          items={marketGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{page.finds.title}</h2>
          <p className="mt-2 text-[#444748]">{page.finds.subtitle}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {page.finds.items.map((item, i) => (
              <FindCard key={item.name} {...item} image={findImages[i] ?? shoppingImages.souvenirs} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{page.tips.title}</h2>
          <p className="mt-2 text-[#444748]">{page.tips.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.tips.items.map((tip, i) => {
              const Icon = tipIcons[i] ?? HandCoins;
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
              href="/explore/shopping/malls"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.shoppingMalls}
            </Link>
            <Link
              href="/explore/restaurants/street-food"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.streetFood}
            </Link>
            <Link
              href="/explore/beaches"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.mainBeaches}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
