"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreCategoryNav } from "@/components/explore/explore-category-nav";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { commonUi } from "@/lib/i18n/messages/common";
import { getLifestyleSpots, tExplore } from "@/lib/i18n/messages/explore-hub";
import { pickText } from "@/lib/i18n/text";
import { PattayaCityMap } from "@/components/explore/pattaya-city-map";
import { exploreImages } from "@/lib/design/explore-images";

function BookingCard({
  badge,
  badgeClass,
  title,
  excerpt,
  image,
  imageAlt,
  mapHref,
  bookHref,
}: {
  badge: string;
  badgeClass: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  mapHref: string;
  bookHref: string;
}) {
  const { language } = useLanguage();

  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#c4c7c8]/30 shadow-lg">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-8">
        <span
          className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase ${badgeClass}`}
        >
          {badge}
        </span>
        <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="mb-6 line-clamp-2 text-base text-white/80">{excerpt}</p>
        <div className="flex gap-3">
          <Link
            href={mapHref}
            className="flex-1 rounded-xl bg-white py-3 text-center text-sm font-semibold text-[#191c1d] transition-all hover:bg-[#f3f4f5]"
          >
            {pickText(language, commonUi.seeMap)}
          </Link>
          <Link
            href={bookHref}
            className="flex-1 rounded-xl bg-[#B52E88] py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#B52E88]/90"
          >
            {pickText(language, commonUi.bookTour)}
          </Link>
        </div>
      </div>
    </div>
  );
}

function DiningCard({
  title,
  rating,
  location,
  excerpt,
  image,
  imageAlt,
  cta,
  href,
}: {
  title: string;
  rating: string;
  location: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  cta: string;
  href: string;
}) {
  const { language } = useLanguage();
  const sponsored = pickText(language, commonUi.sponsored);

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-[#c4c7c8]/30 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Mobile: full-bleed image + overlay text */}
      <div className="relative aspect-[4/5] overflow-hidden md:hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#191c1d]/95 via-[#191c1d]/55 to-[#191c1d]/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent"
          aria-hidden
        />
        <span className="absolute left-6 top-6 z-10 rounded-full bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ae2f34]">
            {sponsored}
          </span>
        </span>
        <div className="absolute inset-x-0 bottom-0 z-10 p-6">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h4 className="text-xl font-semibold leading-tight text-white">
              {title}
            </h4>
            <div className="flex shrink-0 items-center text-white">
              <span className="text-sm text-[#F0B8DA]" aria-hidden>
                ★
              </span>
              <span className="ml-1 text-sm font-semibold">{rating}</span>
            </div>
          </div>
          <p className="mb-6 text-sm leading-relaxed text-white/90">
            {excerpt}
          </p>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/75">
              {location}
            </span>
            <span className="text-sm font-semibold text-[#F5D0E8] group-hover:underline">
              {cta} →
            </span>
          </div>
        </div>
      </div>

      {/* Desktop: image on top, text panel below (Stitch layout) */}
      <div className="hidden min-h-0 flex-1 flex-col md:flex">
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="50vw"
          />
        </div>
        <div className="relative flex min-h-0 flex-1 flex-col p-8">
          <div className="absolute -top-12 left-8 rounded-full bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ae2f34]">
              {sponsored}
            </span>
          </div>
          <div className="mb-4 flex items-start justify-between gap-6 pt-1">
            <h4 className="min-w-0 flex-1 text-2xl font-semibold leading-tight text-[#191c1d]">
              {title}
            </h4>
            <div className="flex shrink-0 items-center text-[#B52E88]">
              <span className="text-sm" aria-hidden>
                ★
              </span>
              <span className="ml-1 text-sm font-semibold">{rating}</span>
            </div>
          </div>
          <p className="flex-1 text-base leading-relaxed text-[#444748]">
            {excerpt}
          </p>
          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#747878]">
              {location}
            </span>
            <span className="shrink-0 text-sm font-semibold text-[#B52E88] group-hover:underline">
              {cta} →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ExploreHubPage() {
  const { language } = useLanguage();
  const lifestyleSpots = getLifestyleSpots(language);
  const wellnessTags = [
    tExplore(language, "tagPremium"),
    tExplore(language, "tagSkyView"),
    tExplore(language, "tagSeaView"),
  ];

  return (
    <div data-full-bleed className="bg-[#fdf8fb] pb-16 text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pt-8 md:px-16">
        <section className="mb-12 md:mb-16" aria-label={tExplore(language, "heroTitle")}>
          <article
            data-cinematic="active"
            className="hero-cinematic group relative isolate z-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/10 sm:rounded-2xl min-h-[min(70dvh,400px)] sm:min-h-[500px] lg:min-h-[560px]"
          >
          <div className="hero-cinematic__bg absolute inset-[-4%]">
            <Image
              src={exploreImages.hero}
              alt={tExplore(language, "heroImageAlt")}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="hero-cinematic__shine pointer-events-none absolute inset-0" aria-hidden />
          <div className="hero-cinematic__vignette pointer-events-none absolute inset-0" aria-hidden />
          <div className="hero-cinematic__glow pointer-events-none absolute inset-x-0 bottom-0 h-2/5" aria-hidden />
          <div className="hero-cinematic__grain pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#B52E88]/30 via-transparent to-black/20"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex min-h-[min(70dvh,400px)] w-full flex-col items-center justify-center px-5 text-center sm:min-h-[500px] md:px-10 lg:min-h-[560px]">
            <h1 className="hero-cinematic__rise hero-cinematic__rise--2 mb-8 text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
              {tExplore(language, "heroTitle")}
            </h1>
            <div className="hero-cinematic__rise hero-cinematic__rise--4 flex w-full max-w-2xl items-center rounded-full bg-white/80 p-2 shadow-2xl backdrop-blur-md">
              <div className="flex flex-1 items-center px-4 md:px-6">
                <Search className="h-5 w-5 shrink-0 text-[#747878]" aria-hidden />
                <input
                  type="text"
                  placeholder={tExplore(language, "searchPlaceholder")}
                  aria-label={tExplore(language, "searchPlaceholder")}
                  className="w-full border-none bg-transparent px-3 text-base text-[#191c1d] placeholder:text-[#747878] focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="button"
                className="shrink-0 rounded-full bg-[#B52E88] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#B52E88]/90 md:px-8 md:py-4"
              >
                {tExplore(language, "exploreBtn")}
              </button>
            </div>
          </div>
          </article>
        </section>
      </div>

      <ExploreCategoryNav />

      <section className="mx-auto max-w-[1280px] px-5 py-8 md:px-16">
        <PattayaCityMap />
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-16">
        {/* Must-Visit + Dining + Wellness */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="space-y-12 lg:col-span-8">
              <div>
                <div className="mb-6 flex items-end justify-between">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    {tExplore(language, "mustVisitTitle")}
                  </h2>
                  <Link
                    href="/explore/islands/koh-larn"
                    className="flex items-center gap-1 text-sm font-semibold text-[#B52E88] hover:underline"
                  >
                    {tExplore(language, "viewAll")}
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <BookingCard
                    badge={tExplore(language, "bookingBestSeller")}
                    badgeClass="bg-[#ae2f34] text-white"
                    title={tExplore(language, "booking1Title")}
                    excerpt={tExplore(language, "booking1Excerpt")}
                    image={exploreImages.islandHopping}
                    imageAlt={tExplore(language, "booking1Title")}
                    mapHref="/explore/islands/koh-larn"
                    bookHref="/explore/islands/koh-larn"
                  />
                  <BookingCard
                    badge={tExplore(language, "bookingPopular")}
                    badgeClass="bg-[#B52E88] text-white"
                    title={tExplore(language, "booking2Title")}
                    excerpt={tExplore(language, "booking2Excerpt")}
                    image={exploreImages.coralCoast}
                    imageAlt={tExplore(language, "booking2Title")}
                    mapHref="/explore/beaches"
                    bookHref="/explore/beaches"
                  />
                </div>
              </div>

              <div className="space-y-8 border-t border-[#c4c7c8]/20 pt-12">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold md:text-3xl">
                      {tExplore(language, "diningTitle")}
                    </h2>
                    <p className="text-[#444748]">
                      {tExplore(language, "diningSubtitle")}
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-xl bg-[#f3f4f5] p-1">
                    <button
                      type="button"
                      className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#B52E88] shadow-sm ring-1 ring-[#B52E88]/15"
                    >
                      {tExplore(language, "luxuryDining")}
                    </button>
                    <Link
                      href="/explore/restaurants/street-food"
                      className="rounded-lg px-6 py-2.5 text-sm font-semibold text-[#444748] transition-all hover:bg-white/50"
                    >
                      {tExplore(language, "localFood")}
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                  <DiningCard
                    title={tExplore(language, "dining1Title")}
                    rating="4.9"
                    location={tExplore(language, "dining1Location")}
                    excerpt={tExplore(language, "dining1Excerpt")}
                    image={exploreImages.skyGallery}
                    imageAlt={tExplore(language, "dining1Title")}
                    cta={pickText(language, commonUi.exploreMenu)}
                    href="/explore/restaurants/fine-dining"
                  />
                  <DiningCard
                    title={tExplore(language, "dining2Title")}
                    rating="4.8"
                    location={tExplore(language, "dining2Location")}
                    excerpt={tExplore(language, "dining2Excerpt")}
                    image={exploreImages.caveBeachClub}
                    imageAlt={tExplore(language, "dining2Title")}
                    cta={pickText(language, commonUi.bookTable)}
                    href="/explore/restaurants/fine-dining"
                  />
                </div>
              </div>
            </div>

            {/* Wellness sidebar — stretches to match left column height on desktop */}
            <div className="flex flex-col gap-6 lg:col-span-4 lg:min-h-0">
              <h2 className="shrink-0 text-2xl font-semibold md:text-3xl">
                {tExplore(language, "wellnessTitle")}
              </h2>
              <div className="group flex flex-col overflow-hidden rounded-[40px] border border-white/20 bg-[#e1e3e4] shadow-2xl transition-all duration-500 hover:shadow-[#B52E88]/10 lg:min-h-0 lg:flex-1">
                <div className="relative h-[400px] shrink-0 overflow-hidden">
                  <Image
                    src={exploreImages.auraSanctuary}
                    alt={tExplore(language, "wellnessName")}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ae2f34] shadow-lg backdrop-blur-md">
                    {tExplore(language, "eliteChoice")}
                  </span>
                </div>
                <div className="relative -mt-12 flex flex-col rounded-t-[40px] border-t border-white/50 bg-white/80 p-8 backdrop-blur-xl lg:min-h-0 lg:flex-1">
                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.25em] text-[#B52E88]">
                    {tExplore(language, "wellnessEyebrow")}
                  </span>
                  <h3 className="mb-1 text-4xl font-extrabold leading-[1.1] text-[#191c1d]">
                    {tExplore(language, "wellnessName")}
                  </h3>
                  <p className="mb-4 text-sm font-medium italic text-[#444748]">
                    {tExplore(language, "wellnessTagline")}
                  </p>
                  <div className="mb-4 flex text-amber-400">
                    {"★★★★★"}
                    <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-[#191c1d]/60">
                      {tExplore(language, "wellnessReviews")}
                    </span>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {wellnessTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-[#B52E88]/10 bg-[#B52E88]/5 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-[#B52E88]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col lg:min-h-0 lg:flex-1">
                    <div className="mb-6 flex flex-col gap-4 text-[15px] leading-relaxed text-[#444748] lg:flex-1">
                      <p>{tExplore(language, "wellnessP1")}</p>
                      <p>{tExplore(language, "wellnessP2")}</p>
                      <p className="text-sm leading-relaxed text-[#747878]">
                        {tExplore(language, "wellnessP3")}
                      </p>
                    </div>
                    <ul className="mb-8 space-y-4 text-[#444748]">
                      {(
                        [
                          "wellnessFeature1",
                          "wellnessFeature2",
                          "wellnessFeature3",
                        ] as const
                      ).map((key) => (
                        <li
                          key={key}
                          className="flex items-center gap-4 text-sm font-semibold"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B52E88]/10 text-[#B52E88]">
                            ✓
                          </span>
                          {tExplore(language, key)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto shrink-0 border-t border-[#c4c7c8]/20 pb-6 pt-6">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#444748]">
                      {tExplore(language, "wellnessInvestment")}
                    </span>
                    <div className="mb-6 flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold tracking-tighter text-[#B52E88]">
                        {tExplore(language, "wellnessPrice")}
                      </span>
                      <span className="text-sm font-medium text-[#444748]">
                        {pickText(language, commonUi.perSession)}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/explore/wellness"
                        className="w-full rounded-xl bg-[#B52E88] py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:bg-[#B52E88]/90"
                      >
                        {tExplore(language, "bookNow")}
                      </Link>
                      <Link
                        href="/explore/wellness"
                        className="w-full rounded-xl border border-[#c4c7c8] bg-white py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-[#191c1d] transition-all hover:bg-[#edeeef]"
                      >
                        {tExplore(language, "checkPrice")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lifestyle carousel */}
      <section className="mb-20 bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {tExplore(language, "lifestyleTitle")}
            </h2>
            <p className="mt-1 text-[#444748]">
              {tExplore(language, "lifestyleSubtitle")}
            </p>
          </div>
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:snap-none [&::-webkit-scrollbar]:hidden">
          {lifestyleSpots.map((spot) => (
            <Link
              key={spot.title}
              href={spot.href}
              className="group w-[min(85vw,320px)] shrink-0 snap-start md:w-auto md:min-w-0"
            >
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#c4c7c8]/20 bg-[#edeeef] shadow-xl">
                <Image
                  src={exploreImages.cafeLifestyle}
                  alt={spot.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#B52E88] shadow-sm backdrop-blur-md">
                  {spot.badge}
                </span>
              </div>
              <div className="px-2">
                <h4 className="mb-2 text-2xl font-semibold text-[#191c1d] transition-colors group-hover:text-[#B52E88]">
                  {spot.title}
                </h4>
                <div className="flex items-center gap-2 text-[#444748]">
                  <span className="text-sm font-medium">{spot.location}</span>
                  <span className="h-1 w-1 rounded-full bg-[#c4c7c8]" />
                  <span className="text-sm font-semibold text-[#B52E88]">
                    {spot.hours}
                  </span>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        {/* Shopping & Family */}
        <section className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col gap-8 lg:min-h-0">
            <h2 className="shrink-0 text-2xl font-semibold md:text-3xl">
              {tExplore(language, "shoppingTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch lg:min-h-0 lg:flex-1">
              <Link
                href="/explore/shopping/malls"
                className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl border border-[#c4c7c8]/30 shadow-lg lg:aspect-auto lg:h-full lg:min-h-0"
              >
                <Image
                  src={exploreImages.centralFestival}
                  alt={tExplore(language, "centralFestivalTitle")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 mt-auto w-full p-8">
                  <span className="mb-3 inline-block rounded-full bg-[#B52E88] px-3 py-1 text-[10px] font-bold uppercase text-white">
                    {tExplore(language, "luxuryMalls")}
                  </span>
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    {tExplore(language, "centralFestivalTitle")}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-white/80 lg:line-clamp-4">
                    {tExplore(language, "centralFestivalExcerpt")}
                  </p>
                  <span className="block rounded-xl bg-white py-3 text-center text-sm font-semibold text-[#191c1d]">
                    {pickText(language, commonUi.viewDirectory)}
                  </span>
                </div>
              </Link>
              <Link
                href="/explore/shopping/markets"
                className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl border border-[#c4c7c8]/30 shadow-lg lg:aspect-auto lg:h-full lg:min-h-0"
              >
                <Image
                  src={exploreImages.thepprasitMarket}
                  alt={tExplore(language, "thepprasitTitle")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 mt-auto w-full p-8">
                  <span className="mb-3 inline-block rounded-full bg-[#ae2f34] px-3 py-1 text-[10px] font-bold uppercase text-white">
                    {tExplore(language, "localMarkets")}
                  </span>
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    {tExplore(language, "thepprasitTitle")}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-white/80 lg:line-clamp-4">
                    {tExplore(language, "thepprasitExcerpt")}
                  </p>
                  <span className="block rounded-xl bg-white py-3 text-center text-sm font-semibold text-[#191c1d]">
                    {pickText(language, commonUi.exploreStalls)}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:min-h-0">
            <h2 className="shrink-0 text-2xl font-semibold md:text-3xl">
              {tExplore(language, "familyTitle")}
            </h2>
            <div className="flex min-h-0 flex-1 flex-col gap-6 rounded-[32px] bg-[#edeeef] p-6 md:flex-row">
              <div className="relative aspect-square shrink-0 overflow-hidden rounded-2xl md:aspect-auto md:h-auto md:w-1/2 md:self-stretch lg:min-h-[240px]">
                <Image
                  src={exploreImages.aquaverse}
                  alt={tExplore(language, "aquaverseTitle")}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="flex flex-col justify-center md:w-1/2 md:py-2">
                <span className="mb-2 text-xs font-bold uppercase text-[#B52E88]">
                  {tExplore(language, "waterParks")}
                </span>
                <h3 className="mb-4 text-2xl font-semibold">
                  {tExplore(language, "aquaverseTitle")}
                </h3>
                <p className="mb-6 text-[#444748]">
                  {tExplore(language, "aquaverseExcerpt")}
                </p>
                <Link
                  href="/explore/family-activities"
                  className="w-max rounded-xl bg-[#B52E88] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg"
                >
                  {pickText(language, commonUi.buyTickets)}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Yacht + Hidden Gems */}
        <section className="space-y-12">
          <div className="group relative mb-12 h-[500px] overflow-hidden rounded-[40px] md:h-[600px]">
            <Image
              src={exploreImages.yacht}
              alt={tExplore(language, "yachtTitle")}
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-24">
              <div className="max-w-xl">
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-[#ffb3b0]">
                  {tExplore(language, "yachtEyebrow")}
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                  {tExplore(language, "yachtTitle")}
                </h2>
                <p className="mb-8 text-lg text-white/80">
                  {tExplore(language, "yachtExcerpt")}
                </p>
                <Link
                  href="/explore/luxury/yacht"
                  className="inline-block rounded-full bg-white px-10 py-5 text-sm font-semibold text-[#B52E88] transition-all hover:-translate-y-1 hover:bg-[#B52E88] hover:text-white"
                >
                  {pickText(language, commonUi.contactCharter)}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {tExplore(language, "hiddenGemsTitle")}
              </h2>
              <p className="text-[#444748]">
                {tExplore(language, "hiddenGemsSubtitle")}
              </p>
            </div>
            <Link
              href="/explore/hidden-gems"
              className="text-sm font-semibold text-[#B52E88] hover:underline"
            >
              {tExplore(language, "readAllStories")}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/explore/hidden-gems"
              className="group flex cursor-pointer flex-col"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={exploreImages.hiddenSpots}
                  alt={tExplore(language, "article1Title")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ae2f34] shadow-sm backdrop-blur-md">
                  {pickText(language, commonUi.magazine)}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold leading-tight text-[#191c1d] transition-colors group-hover:text-[#B52E88]">
                {tExplore(language, "article1Title")}
              </h3>
              <p className="mb-6 line-clamp-3 text-[#444748]">
                {tExplore(language, "article1Excerpt")}
              </p>
              <span className="mt-auto text-sm font-semibold text-[#444748]">
                {tExplore(language, "article1ReadMins")}
              </span>
            </Link>

            <Link
              href="/explore/hidden-gems"
              className="group flex cursor-pointer flex-col"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={exploreImages.weekendGuide}
                  alt={tExplore(language, "article2Title")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88] shadow-sm backdrop-blur-md">
                  {pickText(language, commonUi.guide)}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold leading-tight text-[#191c1d] transition-colors group-hover:text-[#B52E88]">
                {tExplore(language, "article2Title")}
              </h3>
              <p className="mb-6 line-clamp-3 text-[#444748]">
                {tExplore(language, "article2Excerpt")}
              </p>
              <span className="mt-auto text-sm font-semibold text-[#444748]">
                {tExplore(language, "article2ReadMins")}
              </span>
            </Link>

            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#B52E88]/20 bg-[#FCE8F4] p-10 shadow-2xl">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#B52E88]/10 blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#B52E88]/10 blur-[60px]" />
              <div className="relative z-10">
                <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.4em] text-[#B52E88]">
                  {tExplore(language, "newsletter")}
                </span>
                <h3 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#B52E88]">
                  {tExplore(language, "newsletterTitle")}
                </h3>
                <p className="mb-10 max-w-[280px] leading-relaxed text-[#B52E88]/80">
                  {tExplore(language, "newsletterBody")}
                </p>
              </div>
              <form className="relative z-10 space-y-4">
                <input
                  type="email"
                  placeholder={pickText(language, commonUi.emailPlaceholder)}
                  aria-label={pickText(language, commonUi.emailPlaceholder)}
                  className="w-full rounded-xl border border-[#B52E88]/20 bg-white/50 px-5 py-4 text-[#191c1d] shadow-inner backdrop-blur-md outline-none placeholder:text-[#B52E88]/40 focus:border-[#B52E88]/50 focus:ring-2 focus:ring-[#B52E88]/50"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#B52E88] py-4 text-[13px] font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#B52E88]/90 active:scale-[0.98]"
                >
                  {pickText(language, commonUi.joinNow)}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
