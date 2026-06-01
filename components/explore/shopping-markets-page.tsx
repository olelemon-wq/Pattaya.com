"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { shoppingImages } from "@/lib/design/shopping-images";
import { getShoppingMarketsPage } from "@/lib/i18n/messages/explore-shopping-markets";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { Clock, MapPin, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const findImages = [
  shoppingImages.souvenirs,
  shoppingImages.bargains,
  shoppingImages.localCrafts,
  shoppingImages.nightStalls,
];

function MarketCard({
  name,
  hours,
  hoursLabel,
  mustBuy,
  mustBuyLabel,
  text,
  priceRange,
  priceRangeLabel,
  href,
  linkLabel,
  image,
  secondaryHref,
  secondaryLinkLabel,
}: {
  name: string;
  hours: string;
  hoursLabel: string;
  mustBuy: string;
  mustBuyLabel: string;
  text: string;
  priceRange: string;
  priceRangeLabel: string;
  href: string;
  linkLabel: string;
  image: string;
  secondaryHref?: string;
  secondaryLinkLabel?: string;
}) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] shadow-sm">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-0 flex-1 flex-col transition hover:border-[#B52E88]/30"
      >
        <div className="relative aspect-[4/3] w-full shrink-0 bg-[#e7e8e9]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <p className="flex items-start gap-2 font-bold text-[#191c1d]">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
            {name}
          </p>
          <p className="mt-2 flex items-start gap-2 pl-6 text-xs font-medium text-[#747878]">
            <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
            <span>
              {hoursLabel}: <span className="text-[#191c1d]">{hours}</span>
            </span>
          </p>
          <p className="mt-2 flex items-start gap-2 pl-6 text-xs font-medium text-[#747878]">
            <Store className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
            <span>
              {mustBuyLabel}: <span className="text-[#191c1d]">{mustBuy}</span>
            </span>
          </p>
          <p className="mt-2 pl-6 text-sm">
            <span className="font-medium text-[#747878]">{priceRangeLabel}: </span>
            <span className="font-semibold text-[#B52E88]">{priceRange}</span>
          </p>
          <p className="mt-2 flex-1 pl-6 text-sm leading-relaxed text-[#444748]">{text}</p>
          <span className="mt-4 pl-6 text-sm font-semibold text-[#B52E88] group-hover:underline">
            {linkLabel}
          </span>
        </div>
      </a>
      {secondaryHref && secondaryLinkLabel ? (
        <div className="border-t border-[#e7e8e9] px-4 py-3 sm:px-5">
          <Link
            href={secondaryHref}
            className="text-sm font-semibold text-[#455f88] transition hover:text-[#B52E88] hover:underline"
          >
            {secondaryLinkLabel}
          </Link>
        </div>
      ) : null}
    </article>
  );
}

function TipCard({
  id,
  title,
  paragraphs,
  image,
}: {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
}) {
  return (
    <article
      id={`tip-${id}`}
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] shadow-sm"
    >
      <div className="relative aspect-[21/9] w-full shrink-0 bg-[#e7e8e9] sm:aspect-[2/1]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-bold text-[#191c1d] sm:text-lg">{title}</h3>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#444748]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

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
  const page = getShoppingMarketsPage(language);

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
          <nav aria-label={tSiteUi(language, "breadcrumb")} className="mb-4">
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

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        <section id="markets" className="scroll-mt-24" aria-labelledby="markets-title">
          <div>
            <h2 id="markets-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.markets.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.markets.subtitle}
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:items-stretch xl:grid-cols-4">
            {page.markets.items.map((market) => (
              <li key={market.id} id={`market-${market.id}`} className="flex min-h-0 scroll-mt-24">
                <MarketCard
                  name={market.name}
                  hours={market.hours}
                  hoursLabel={page.markets.hoursLabel}
                  mustBuy={market.mustBuy}
                  mustBuyLabel={page.markets.mustBuyLabel}
                  text={market.text}
                  priceRange={market.priceRange}
                  priceRangeLabel={page.markets.priceRangeLabel}
                  href={market.href}
                  linkLabel={market.linkLabel}
                  image={market.image}
                  secondaryHref={market.secondaryHref}
                  secondaryLinkLabel={market.secondaryLinkLabel}
                />
              </li>
            ))}
          </ul>
        </section>

        <section id="finds" className="scroll-mt-24" aria-labelledby="finds-title">
          <h2 id="finds-title" className="text-2xl font-semibold md:text-3xl">
            {page.finds.title}
          </h2>
          <p className="mt-2 text-[#444748]">{page.finds.subtitle}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {page.finds.items.map((item, i) => (
              <FindCard key={item.name} {...item} image={findImages[i] ?? shoppingImages.souvenirs} />
            ))}
          </div>
        </section>

        <section id="market-guides" className="scroll-mt-24" aria-labelledby="tips-title">
          <div>
            <h2 id="tips-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.tips.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.tips.subtitle}
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 md:items-stretch">
            {page.tips.items.map((tip) => (
              <TipCard key={tip.id} id={tip.id} title={tip.title} paragraphs={tip.paragraphs} image={tip.image} />
            ))}
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
