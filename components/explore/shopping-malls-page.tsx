"use client";

import dynamic from "next/dynamic";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { getMallGuideImage } from "@/lib/i18n/messages/explore-shopping-malls-guide";
import type { MallGuideItem } from "@/lib/i18n/messages/explore-shopping-malls-guide";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { shoppingImages } from "@/lib/design/shopping-images";
import { getMallTips, getShoppingMallsPage } from "@/lib/i18n/messages/explore-shopping-malls";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  Calendar,
  CircleParking,
  Clock,
  MapPin,
  Navigation,
  Receipt,
  ShoppingBag,
  Sparkles,
  Store,
  SunMedium,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ShoppingMallsMap = dynamic(
  () => import("@/components/explore/shopping-malls-map").then((m) => m.ShoppingMallsMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-2xl bg-[#e7e8e9] md:h-[380px]" aria-hidden />
    ),
  },
);

type MallGuideLabels = ReturnType<typeof getShoppingMallsPage>["guide"];

function MallGuideCard({ mall, labels }: { mall: MallGuideItem; labels: MallGuideLabels }) {
  return (
    <article
      id={`mall-${mall.id}`}
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e7e8e9]">
        <Image
          src={getMallGuideImage(mall.imageId)}
          alt={mall.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#191c1d]">{mall.name}</h3>
        <dl className="mt-3 space-y-1.5 text-xs font-medium text-[#747878]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.openDaysLabel}
            </dt>
            <dd className="text-[#191c1d]">{mall.openDays}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.hoursRangeLabel}
            </dt>
            <dd className="text-[#191c1d]">{mall.hoursRange}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt>{labels.bestTimeLabel}</dt>
            <dd className="text-[#191c1d]">{mall.bestTimeOfDay}</dd>
          </div>
        </dl>
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">{labels.highlightsLabel}</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-[#444748]">
            {mall.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.vibeLabel}: </span>
          {mall.vibe}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.bestForLabel}: </span>
          {mall.bestFor}
        </p>
        {mall.brands && mall.brands.length > 0 ? (
          <div className="mt-3">
            <p className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">{labels.brandsLabel}</p>
            <ul className="mt-1.5 flex flex-wrap gap-2">
              {mall.brands.map((brand) => (
                <li
                  key={brand}
                  className="rounded-full bg-[#fdf8fb] px-2.5 py-0.5 text-xs font-medium text-[#444748] ring-1 ring-[#e7e8e9]"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {mall.mustTry ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-sm font-medium text-[#191c1d] ring-1 ring-[#e7e8e9]">
            <span className="text-[#B52E88]">{labels.mustTryLabel}: </span>
            {mall.mustTry}
          </p>
        ) : null}
        {mall.tips ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-xs leading-relaxed text-[#444748] ring-1 ring-[#e7e8e9]">
            <span className="font-semibold text-[#191c1d]">{labels.tipsLabel}: </span>
            {mall.tips}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <a
            href={mall.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {labels.openInMaps}
          </a>
          <a
            href={mall.directionsHref}
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

const mallTipIcons = {
  parking: CircleParking,
  timing: Clock,
  vat: Receipt,
  midday: SunMedium,
} as const;

function MallTipsPanel({ tips }: { tips: ReturnType<typeof getMallTips> }) {
  return (
    <article className="mt-8 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm">
      <ul className="divide-y divide-[#e7e8e9]">
        {tips.items.map((tip) => {
          const Icon = mallTipIcons[tip.id];
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
        <div className="relative mx-auto flex min-h-[min(65vh,480px)] max-w-[1280px] flex-col justify-end px-4 pb-14 pt-20 lg:px-6 md:pb-16">
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
              <Store className="h-4 w-4" aria-hidden />
              {page.hero.badgeAreas}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 lg:px-6 md:py-16">
        <section id="malls" className="scroll-mt-24" aria-labelledby="malls-title">
          <div>
            <h2 id="malls-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">{page.guide.body}</p>
            <p className="mt-2 max-w-3xl text-xs text-[#747878]">{page.guide.sourceNote}</p>
          </div>

          <div className="mt-10">
            <ShoppingMallsMap />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
            {page.guideItems.map((mall) => (
              <MallGuideCard key={mall.id} mall={mall} labels={page.guide} />
            ))}
          </div>
        </section>

        <section
          id="mall-mood"
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
                href={`#mall-${group.mallId}`}
                className="rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm transition hover:border-[#B52E88]/35 hover:bg-white"
              >
                <h3 className="text-sm font-bold text-[#B52E88]">{group.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#191c1d]">{group.pick}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="mall-first-visit"
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
                href={`#mall-${item.mallId}`}
                className="rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] p-5 transition hover:border-[#B52E88]/35"
              >
                <h3 className="font-bold text-[#B52E88]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{item.body}</p>
              </a>
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
          <MallTipsPanel tips={page.tips} />
        </section>

        <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">{page.alsoExplore.title}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={marketPagePaths.page}
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.localMarkets}
            </Link>
            <Link
              href={marketPagePaths.streetFoodThepprasit}
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
