"use client";

import dynamic from "next/dynamic";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { getFineDiningGuideImage } from "@/lib/design/fine-dining-guide-images";
import type { FineDiningGuideItem } from "@/lib/i18n/messages/explore-fine-dining-guide";
import { fineDiningImages } from "@/lib/design/fine-dining-images";
import { getFineDiningPage } from "@/lib/i18n/messages/fine-dining";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Shirt,
  Sparkles,
  Sun,
  Wine,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FineDiningMap = dynamic(
  () => import("@/components/explore/fine-dining-map").then((m) => m.FineDiningMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-2xl bg-[#e7e8e9] md:h-[380px]" aria-hidden />
    ),
  },
);

type GuideLabels = ReturnType<typeof getFineDiningPage>["guide"];

function FineDiningGuideCard({
  restaurant,
  labels,
}: {
  restaurant: FineDiningGuideItem;
  labels: GuideLabels;
}) {
  return (
    <article
      id={`restaurant-${restaurant.id}`}
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e7e8e9]">
        <Image
          src={getFineDiningGuideImage(restaurant.imageId)}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#191c1d]">{restaurant.name}</h3>
        {restaurant.tagline ? (
          <p className="mt-1 text-sm font-semibold leading-snug text-[#B52E88]">{restaurant.tagline}</p>
        ) : null}
        <dl className="mt-3 space-y-1.5 text-xs font-medium text-[#747878]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.openDaysLabel}
            </dt>
            <dd className="text-[#191c1d]">{restaurant.openDays}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.hoursRangeLabel}
            </dt>
            <dd className="text-[#191c1d]">{restaurant.hoursRange}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt>{labels.bestTimeLabel}</dt>
            <dd className="text-[#191c1d]">{restaurant.bestTimeOfDay}</dd>
          </div>
        </dl>
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">{labels.highlightsLabel}</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-[#444748]">
            {restaurant.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.vibeLabel}: </span>
          {restaurant.vibe}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.bestForLabel}: </span>
          {restaurant.bestFor}
        </p>
        {restaurant.mustTry ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-sm font-medium text-[#191c1d] ring-1 ring-[#e7e8e9]">
            <span className="text-[#B52E88]">{labels.mustTryLabel}: </span>
            {restaurant.mustTry}
          </p>
        ) : null}
        {restaurant.tips ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-xs leading-relaxed text-[#444748] ring-1 ring-[#e7e8e9]">
            <span className="font-semibold text-[#191c1d]">{labels.tipsLabel}: </span>
            {restaurant.tips}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <a
            href={restaurant.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {labels.openInMaps}
          </a>
          <a
            href={restaurant.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c1d] hover:underline"
          >
            <Navigation className="h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
            {labels.directionsLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

const fineDiningTipIcons = {
  booking: Sun,
  dress: Shirt,
  weather: MapPin,
  occasions: Wine,
} as const;

function FineDiningTipsPanel({ tips }: { tips: ReturnType<typeof getFineDiningPage>["tips"] }) {
  return (
    <article className="mt-8 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm">
      <ul className="divide-y divide-[#e7e8e9]">
        {tips.items.map((tip) => {
          const Icon = fineDiningTipIcons[tip.id];
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

export function FineDiningPage() {
  const { language } = useLanguage();
  const page = getFineDiningPage(language);

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="fine-dining-hero-title"
      >
        <Image
          src={fineDiningImages.hero}
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
          <h1 id="fine-dining-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Sun className="h-4 w-4" aria-hidden />
              {page.hero.badgeSunset}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Wine className="h-4 w-4" aria-hidden />
              {page.hero.badgeWine}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        <section id="restaurants" className="scroll-mt-24" aria-labelledby="restaurants-title">
          <div>
            <h2 id="restaurants-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">
              {page.guide.body}
            </p>
            <p className="mt-2 max-w-3xl text-xs text-[#747878]">{page.guide.sourceNote}</p>
          </div>

          <div className="mt-10">
            <FineDiningMap />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
            {page.guideItems.map((restaurant) => (
              <FineDiningGuideCard key={restaurant.id} restaurant={restaurant} labels={page.guide} />
            ))}
          </div>
        </section>

        <section
          id="dining-mood"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="mood-title"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-[#B52E88]" aria-hidden />
            <div>
              <h2 id="mood-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
                {page.moodPicks.title}
              </h2>
              <p className="mt-1 text-sm text-[#747878]">{page.moodPicks.subtitle}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.moodPicks.groups.map((group) => (
              <a
                key={group.title}
                href={`#restaurant-${group.restaurantId}`}
                className="rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm transition hover:border-[#B52E88]/35 hover:bg-white"
              >
                <h3 className="text-sm font-bold text-[#B52E88]">{group.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#191c1d]">{group.pick}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="dining-first-visit"
          className="scroll-mt-24 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8"
          aria-labelledby="first-visit-title"
        >
          <h2 id="first-visit-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
            {page.firstVisit.title}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">{page.firstVisit.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.firstVisit.items.map((item) => (
              <a
                key={item.title}
                href={`#restaurant-${item.restaurantId}`}
                className="rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] p-5 transition hover:border-[#B52E88]/35"
              >
                <h3 className="font-bold text-[#B52E88]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{item.body}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="dining-guides" className="scroll-mt-24" aria-labelledby="guides-title">
          <div>
            <h2 id="guides-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.tips.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.tips.subtitle}
            </p>
          </div>
          <FineDiningTipsPanel tips={page.tips} />
        </section>

        <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">{page.alsoExplore.title}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={page.alsoExplore.streetFood.href}
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.streetFood.label}
            </Link>
            <Link
              href={page.alsoExplore.localMarkets.href}
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.localMarkets.label}
            </Link>
            <Link
              href={page.alsoExplore.cafes.href}
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.cafes.label}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
