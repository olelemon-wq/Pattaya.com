"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { shoppingImages } from "@/lib/design/shopping-images";
import { getShoppingMallsPage } from "@/lib/i18n/messages/explore-shopping-malls";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { Clock, MapPin, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categoryImages = [
  shoppingImages.mallCategoryFashion,
  shoppingImages.mallCategoryElectronics,
  shoppingImages.mallCategoryCinema,
  shoppingImages.mallCategoryFoodCourt,
];

function MallCard({
  name,
  hours,
  hoursLabel,
  highlights,
  highlightsLabel,
  text,
  priceLevel,
  priceLevelLabel,
  href,
  linkLabel,
  image,
}: {
  name: string;
  hours: string;
  hoursLabel: string;
  highlights: string;
  highlightsLabel: string;
  text: string;
  priceLevel: string;
  priceLevelLabel: string;
  href: string;
  linkLabel: string;
  image: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md"
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
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
          <span>
            {highlightsLabel}: <span className="text-[#191c1d]">{highlights}</span>
          </span>
        </p>
        <p className="mt-2 pl-6 text-sm">
          <span className="font-medium text-[#747878]">{priceLevelLabel}: </span>
          <span className="font-semibold text-[#B52E88]">{priceLevel}</span>
        </p>
        <p className="mt-2 flex-1 pl-6 text-sm leading-relaxed text-[#444748]">{text}</p>
        <span className="mt-4 pl-6 text-sm font-semibold text-[#B52E88] group-hover:underline">
          {linkLabel}
        </span>
      </div>
    </a>
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
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm"
    >
      <div className="relative aspect-[21/9] w-full shrink-0 bg-[#e7e8e9] sm:aspect-[2/1]">
        <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
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
  const page = getShoppingMallsPage(language);

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

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        <section id="malls" className="scroll-mt-24" aria-labelledby="malls-title">
          <div>
            <h2 id="malls-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.malls.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.malls.subtitle}
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:items-stretch xl:grid-cols-4">
            {page.malls.items.map((mall) => (
              <li key={mall.id} id={`mall-${mall.id}`} className="flex min-h-0 scroll-mt-24">
                <MallCard
                  name={mall.name}
                  hours={mall.hours}
                  hoursLabel={page.malls.hoursLabel}
                  highlights={mall.highlights}
                  highlightsLabel={page.malls.highlightsLabel}
                  text={mall.text}
                  priceLevel={mall.priceLevel}
                  priceLevelLabel={page.malls.priceLevelLabel}
                  href={mall.href}
                  linkLabel={mall.linkLabel}
                  image={mall.image}
                />
              </li>
            ))}
          </ul>
        </section>

        <section id="categories" className="scroll-mt-24" aria-labelledby="categories-title">
          <h2 id="categories-title" className="text-2xl font-semibold md:text-3xl">
            {page.categories.title}
          </h2>
          <p className="mt-2 text-[#444748]">{page.categories.subtitle}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {page.categories.items.map((cat, i) => (
              <CategoryCard key={cat.name} {...cat} image={categoryImages[i] ?? shoppingImages.mallCategoryFashion} />
            ))}
          </div>
        </section>

        <section id="mall-guides" className="scroll-mt-24" aria-labelledby="tips-title">
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
