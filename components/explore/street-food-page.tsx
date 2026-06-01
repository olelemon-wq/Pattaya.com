"use client";

import dynamic from "next/dynamic";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { getLocalFoodGuideImage } from "@/lib/design/local-food-guide-images";
import { getStreetFoodGuideImage } from "@/lib/design/street-food-guide-images";
import type { LocalFoodGuideItem } from "@/lib/i18n/messages/explore-local-food-guide";
import type { StreetFoodGuideItem } from "@/lib/i18n/messages/explore-street-food-guide";
import { streetFoodImages } from "@/lib/design/street-food-images";
import { getStreetFoodPage, getStreetFoodTips } from "@/lib/i18n/messages/explore-street-food";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  Banknote,
  Calendar,
  Clock,
  Flame,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Utensils,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LocalFoodMap = dynamic(
  () => import("@/components/explore/local-food-map").then((m) => m.LocalFoodMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-2xl bg-[#e7e8e9] md:h-[380px]" aria-hidden />
    ),
  },
);

const StreetFoodMap = dynamic(
  () => import("@/components/explore/street-food-map").then((m) => m.StreetFoodMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-2xl bg-[#e7e8e9] md:h-[380px]" aria-hidden />
    ),
  },
);

type GuideLabels = {
  openDaysLabel: string;
  hoursRangeLabel: string;
  bestTimeLabel: string;
  highlightsLabel: string;
  vibeLabel: string;
  bestForLabel: string;
  foodsLabel: string;
  tipsLabel: string;
  openInMaps: string;
  directionsLabel: string;
  siteGuideLabel: string;
};

type GuideVenue = LocalFoodGuideItem | StreetFoodGuideItem;

function FoodGuideCard({
  venue,
  labels,
  imageSrc,
  idPrefix,
}: {
  venue: GuideVenue;
  labels: GuideLabels;
  imageSrc: string;
  idPrefix: string;
}) {
  return (
    <article
      id={`${idPrefix}-${venue.id}`}
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e7e8e9]">
        <Image
          src={imageSrc}
          alt={venue.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#191c1d]">{venue.name}</h3>
        {"tagline" in venue && venue.tagline ? (
          <p className="mt-1 text-sm font-semibold leading-snug text-[#B52E88]">{venue.tagline}</p>
        ) : null}
        <dl className="mt-3 space-y-1.5 text-xs font-medium text-[#747878]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.openDaysLabel}
            </dt>
            <dd className="text-[#191c1d]">{venue.openDays}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.hoursRangeLabel}
            </dt>
            <dd className="text-[#191c1d]">{venue.hoursRange}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt>{labels.bestTimeLabel}</dt>
            <dd className="text-[#191c1d]">{venue.bestTimeOfDay}</dd>
          </div>
        </dl>
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">{labels.highlightsLabel}</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-[#444748]">
            {venue.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.vibeLabel}: </span>
          {venue.vibe}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.bestForLabel}: </span>
          {venue.bestFor}
        </p>
        {venue.foods && venue.foods.length > 0 ? (
          <div className="mt-3">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#B52E88]">
              <Utensils className="h-3.5 w-3.5" aria-hidden />
              {labels.foodsLabel}
            </p>
            <ul className="mt-1.5 flex flex-wrap gap-2">
              {venue.foods.map((food) => (
                <li
                  key={food}
                  className="rounded-full bg-[#fdf8fb] px-2.5 py-0.5 text-xs font-medium text-[#444748] ring-1 ring-[#e7e8e9]"
                >
                  {food}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {venue.tips ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-xs leading-relaxed text-[#444748] ring-1 ring-[#e7e8e9]">
            <span className="font-semibold text-[#191c1d]">{labels.tipsLabel}: </span>
            {venue.tips}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <a
            href={venue.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {labels.openInMaps}
          </a>
          <a
            href={venue.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c1d] hover:underline"
          >
            <Navigation className="h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
            {labels.directionsLabel}
          </a>
          {venue.siteHref ? (
            <Link
              href={venue.siteHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c1d] hover:underline"
            >
              {labels.siteGuideLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

const streetFoodTipIcons = {
  prices: Banknote,
  spice: Flame,
  timing: Sun,
  seafood: Utensils,
} as const;

function StreetFoodTipsPanel({ tips }: { tips: ReturnType<typeof getStreetFoodTips> }) {
  return (
    <article className="mt-8 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm">
      <ul className="divide-y divide-[#e7e8e9]">
        {tips.items.map((tip) => {
          const Icon = streetFoodTipIcons[tip.id];
          return (
            <li
              key={tip.id}
              id={`tip-${tip.id}`}
              className="scroll-mt-24 flex gap-4 p-5 sm:gap-5 sm:p-6"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdf8fb] text-[#B52E88] ring-1 ring-[#e7e8e9]"
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-[#191c1d] sm:text-lg">{tip.title}</h3>
                <div className="mt-2 space-y-2 text-sm leading-relaxed text-[#444748]">
                  {tip.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export function StreetFoodPage() {
  const { language } = useLanguage();
  const page = getStreetFoodPage(language);

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="street-food-hero-title"
      >
        <Image
          src={streetFoodImages.hero}
          alt={page.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/75 via-[#191c1d]/55 to-[#191c1d]/88"
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
                <span className="text-white/80">{page.breadcrumb.restaurants}</span>
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
          <h1 id="street-food-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />
              {page.hero.badgePicks}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Wallet className="h-4 w-4" aria-hidden />
              {page.hero.badgeBudget}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        <section id="local-food" className="scroll-mt-24" aria-labelledby="local-food-title">
          <div>
            <h2 id="local-food-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.localFood.guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">
              {page.localFood.guide.body}
            </p>
            <p className="mt-2 max-w-3xl text-xs text-[#747878]">{page.localFood.guide.sourceNote}</p>
          </div>

          <div className="mt-10">
            <LocalFoodMap />
          </div>

          <div className="mt-10 space-y-12">
            {page.localFood.categories.map((category) => (
              <div key={category.id} id={`local-food-cat-${category.id}`} className="scroll-mt-24">
                <h3 className="text-xl font-bold text-[#191c1d] md:text-2xl">{category.title}</h3>
                <p className="mt-1 max-w-3xl text-sm text-[#747878]">{category.subtitle}</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
                  {category.items.map((venue) => (
                    <FoodGuideCard
                      key={venue.id}
                      venue={venue}
                      labels={page.localFood.guide}
                      imageSrc={getLocalFoodGuideImage(venue.id)}
                      idPrefix="venue"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="menu-guide"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="menu-guide-title"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-[#B52E88]" aria-hidden />
            <div>
              <h2 id="menu-guide-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
                {page.localFood.menuGuide.title}
              </h2>
              <p className="mt-1 text-sm text-[#747878]">{page.localFood.menuGuide.subtitle}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.localFood.menuGuide.groups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm"
              >
                <h3 className="text-sm font-bold text-[#B52E88]">{group.title}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-snug text-[#444748]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="day-route"
          className="scroll-mt-24 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8"
          aria-labelledby="day-route-title"
        >
          <h2 id="day-route-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
            {page.localFood.dayRoute.title}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">{page.localFood.dayRoute.subtitle}</p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.localFood.dayRoute.stops.map((stop) => (
              <li key={stop.time}>
                <a
                  href={stop.href}
                  className="flex h-full flex-col rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] p-5 transition hover:border-[#B52E88]/35"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">
                    {stop.time}
                  </span>
                  <span className="mt-2 font-bold text-[#191c1d]">{stop.place}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="street-food" className="scroll-mt-24" aria-labelledby="street-food-title">
          <div>
            <h2 id="street-food-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.streetFood.guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">
              {page.streetFood.guide.body}
            </p>
            <p className="mt-2 max-w-3xl text-xs text-[#747878]">{page.streetFood.guide.sourceNote}</p>
          </div>

          <div className="mt-10">
            <StreetFoodMap />
          </div>

          <div className="mt-10 space-y-12">
            {page.streetFood.categories.map((category) => (
              <div key={category.id} id={`street-food-cat-${category.id}`} className="scroll-mt-24">
                <h3 className="text-xl font-bold text-[#191c1d] md:text-2xl">{category.title}</h3>
                <p className="mt-1 max-w-3xl text-sm text-[#747878]">{category.subtitle}</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
                  {category.items.map((spot) => (
                    <FoodGuideCard
                      key={spot.id}
                      venue={spot}
                      labels={page.streetFood.guide}
                      imageSrc={getStreetFoodGuideImage(spot.id)}
                      idPrefix="street-spot"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="street-mood"
          className="scroll-mt-24 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8"
          aria-labelledby="street-mood-title"
        >
          <h2 id="street-mood-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
            {page.streetFood.moodPicks.title}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">{page.streetFood.moodPicks.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.streetFood.moodPicks.items.map((item) => (
              <a
                key={item.spotId}
                href={`#street-spot-${item.spotId}`}
                className="rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] p-5 transition hover:border-[#B52E88]/35"
              >
                <p className="text-sm font-semibold text-[#191c1d]">{item.mood}</p>
                <p className="mt-2 text-sm font-bold text-[#B52E88]">{item.pick}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="street-must-try"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="street-must-try-title"
        >
          <h2 id="street-must-try-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
            {page.streetFood.mustTry.title}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">{page.streetFood.mustTry.subtitle}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {page.streetFood.mustTry.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-[#e7e8e9] bg-white/90 px-4 py-3 text-sm leading-snug text-[#444748]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="eating-guides" className="scroll-mt-24" aria-labelledby="tips-title">
          <div>
            <h2 id="tips-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.tips.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.tips.subtitle}
            </p>
          </div>
          <StreetFoodTipsPanel tips={page.tips} />
        </section>

        <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">{page.alsoExplore.title}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={page.alsoExplore.fineDining.href}
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.fineDining.label}
            </Link>
            <Link
              href={page.alsoExplore.localMarkets.href}
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.localMarkets.label}
            </Link>
            <Link
              href={page.alsoExplore.mainBeaches.href}
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.mainBeaches.label}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
