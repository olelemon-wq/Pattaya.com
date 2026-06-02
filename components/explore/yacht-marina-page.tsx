"use client";

import dynamic from "next/dynamic";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { getYachtCharterGuideImageForCard } from "@/lib/i18n/messages/explore-yacht-guide";
import type {
  YachtCharterGuideItem,
  YachtQuickRow,
} from "@/lib/i18n/messages/explore-yacht-guide";
import { getYachtPage } from "@/lib/i18n/messages/explore-yacht";
import type { getYachtTips } from "@/lib/i18n/messages/explore-yacht";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  Anchor,
  Calendar,
  Clock,
  Cloud,
  MapPin,
  Navigation,
  Phone,
  Ship,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const YachtCharterMap = dynamic(
  () => import("@/components/explore/yacht-charter-map").then((m) => m.YachtCharterMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-2xl bg-[#e7e8e9] md:h-[380px]" aria-hidden />
    ),
  },
);

type YachtCardLabels = ReturnType<typeof getYachtPage>["guide"];

function YachtCharterCard({ charter, labels }: { charter: YachtCharterGuideItem; labels: YachtCardLabels }) {
  return (
    <article
      id={`yacht-${charter.id}`}
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e7e8e9]">
        <Image
          src={getYachtCharterGuideImageForCard(charter.id)}
          alt={charter.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#191c1d]">{charter.name}</h3>
        <dl className="mt-3 space-y-1.5 text-xs font-medium text-[#747878]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-[#455f88]" aria-hidden />
              {labels.openDaysLabel}
            </dt>
            <dd className="text-[#191c1d]">{charter.openDays}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#455f88]" aria-hidden />
              {labels.hoursRangeLabel}
            </dt>
            <dd className="text-[#191c1d]">{charter.hoursRange}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt>{labels.bestTimeLabel}</dt>
            <dd className="text-[#191c1d]">{charter.bestTimeOfDay}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt>{labels.priceGuideLabel}</dt>
            <dd className="font-semibold text-[#455f88]">{charter.priceGuide}</dd>
          </div>
        </dl>
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#455f88]">{labels.highlightsLabel}</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-[#444748]">
            {charter.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.vibeLabel}: </span>
          {charter.vibe}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.bestForLabel}: </span>
          {charter.bestFor}
        </p>
        {charter.tips ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-xs leading-relaxed text-[#444748] ring-1 ring-[#e7e8e9]">
            <span className="font-semibold text-[#191c1d]">{labels.tipsLabel}: </span>
            {charter.tips}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <a
            href={charter.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#455f88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {labels.openInMaps}
          </a>
          <a
            href={charter.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c1d] hover:underline"
          >
            <Navigation className="h-4 w-4 shrink-0 text-[#455f88]" aria-hidden />
            {labels.directionsLabel}
          </a>
          {charter.phoneHref && charter.phoneLabel ? (
            <a
              href={charter.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {charter.phoneLabel}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function YachtQuickRefSection({ quickRef }: { quickRef: ReturnType<typeof getYachtPage>["quickRef"] }) {
  return (
    <div className="mt-5">
      <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:hidden" aria-label={quickRef.title}>
        {quickRef.rows.map((row) => (
          <li key={row.id} className="min-w-0">
            <a
              href={`#yacht-${row.id}`}
              className="flex h-full min-h-[7.5rem] flex-col rounded-xl border border-[#e7e8e9] bg-white px-2.5 py-2.5 shadow-sm transition hover:border-[#455f88]/30 hover:bg-[#fdf8fb] sm:px-3 sm:py-3"
            >
              <p className="line-clamp-2 text-[11px] font-bold leading-tight text-[#455f88] sm:text-xs">
                {row.name}
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-snug text-[#191c1d] sm:text-base">
                {row.styleCompact}
              </p>
              <p className="mt-1 text-[10px] font-medium text-[#455f88] sm:text-xs">{row.priceCompact}</p>
              <p className="mt-auto pt-1.5 text-[10px] leading-snug text-[#747878] sm:text-xs">
                {row.bestTimeOfDay}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[#e7e8e9] bg-[#fdf8fb]">
              <th className="px-4 py-3 font-bold text-[#191c1d]">{quickRef.columns.name}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{quickRef.columns.style}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{quickRef.columns.price}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{quickRef.columns.bestTime}</th>
            </tr>
          </thead>
          <tbody>
            {quickRef.rows.map((row: YachtQuickRow) => (
              <tr key={row.id} className="border-b border-[#e7e8e9] last:border-0">
                <td className="px-4 py-3 font-semibold text-[#191c1d]">
                  <a href={`#yacht-${row.id}`} className="text-[#455f88] hover:underline">
                    {row.name}
                  </a>
                </td>
                <td className="px-4 py-3 text-[#444748]">{row.styleCompact}</td>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-[#455f88]">{row.priceCompact}</td>
                <td className="px-4 py-3 text-[#444748]">{row.bestTimeOfDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const yachtTipIcons = {
  timing: Sun,
  seas: Cloud,
  inclusions: Ship,
  kids: Users,
  pier: Anchor,
} as const;

function YachtTipsPanel({ tips }: { tips: ReturnType<typeof getYachtTips> }) {
  return (
    <article className="mt-8 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm">
      <ul className="divide-y divide-[#e7e8e9]">
        {tips.items.map((tip) => {
          const Icon = yachtTipIcons[tip.id];
          return (
            <li key={tip.id} id={`tip-${tip.id}`} className="scroll-mt-24 flex gap-4 p-5 sm:gap-5 sm:p-6">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdf8fb] text-[#455f88] ring-1 ring-[#e7e8e9]"
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

export function YachtMarinaPage() {
  const { language } = useLanguage();
  const page = getYachtPage(language);

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="yacht-hero-title"
      >
        <Image
          src={page.hero.image}
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
                <span className="text-white/80">{page.breadcrumb.luxury}</span>
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
          <h1 id="yacht-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Anchor className="h-4 w-4" aria-hidden />
              {page.hero.badgeAreas}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 lg:px-6 md:py-16">
        <section id="yacht-guide" className="scroll-mt-24" aria-labelledby="yacht-guide-title">
          <div>
            <h2 id="yacht-guide-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">{page.guide.body}</p>
            <p className="mt-2 max-w-3xl text-xs text-[#747878]">{page.guide.sourceNote}</p>
          </div>

          <section
            id="yacht-quick-ref"
            className="mt-10 scroll-mt-24"
            aria-labelledby="yacht-quick-ref-title"
          >
            <h3 id="yacht-quick-ref-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
              {page.quickRef.title}
            </h3>
            <p className="mt-1 max-w-3xl text-sm text-[#747878]">{page.quickRef.subtitle}</p>
            <YachtQuickRefSection quickRef={page.quickRef} />
          </section>

          <div className="mt-10">
            <YachtCharterMap />
          </div>

          <section
            id="yacht-catamaran"
            className="mt-10 scroll-mt-24 rounded-2xl border border-[#455f88]/25 bg-gradient-to-br from-[#f4f7fa] via-white to-[#fdf8fb] p-6 sm:p-8"
            aria-labelledby="yacht-catamaran-title"
          >
            <h3 id="yacht-catamaran-title" className="text-lg font-bold text-[#191c1d] md:text-xl">
              {page.catamaranNote.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">
              {page.catamaranNote.body}
            </p>
          </section>

          <div className="mt-10 space-y-12">
            {page.categories.map((category) => (
              <div key={category.id} id={`yacht-cat-${category.id}`} className="scroll-mt-24">
                <h3 className="text-xl font-bold text-[#191c1d] md:text-2xl">{category.title}</h3>
                <p className="mt-1 max-w-3xl text-sm text-[#747878]">{category.subtitle}</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
                  {category.charters.map((charter) => (
                    <YachtCharterCard key={charter.id} charter={charter} labels={page.guide} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div id="yacht-piers" className="mt-14 scroll-mt-24">
            <h3 className="text-xl font-bold text-[#191c1d] md:text-2xl">{page.hubsSection.title}</h3>
            <p className="mt-1 max-w-3xl text-sm text-[#747878]">{page.hubsSection.subtitle}</p>
            <div className="mt-5 grid gap-5 md:grid-cols-2 md:items-stretch">
              {page.hubCards.map((hub) => (
                <YachtCharterCard key={hub.id} charter={hub} labels={page.guide} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="yacht-mood"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="yacht-mood-title"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-[#455f88]" aria-hidden />
            <div>
              <h2 id="yacht-mood-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
                {page.moodPicks.title}
              </h2>
              <p className="mt-1 text-sm text-[#747878]">{page.moodPicks.subtitle}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.moodPicks.groups.map((group) => (
              <a
                key={group.title}
                href={`#yacht-${group.charterId}`}
                className="rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm transition hover:border-[#455f88]/35 hover:bg-white"
              >
                <h3 className="text-sm font-bold text-[#455f88]">{group.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#191c1d]">{group.pick}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="yacht-prices"
          className="scroll-mt-24 rounded-2xl border border-[#e7e8e9] bg-white p-6 sm:p-8"
          aria-labelledby="yacht-prices-title"
        >
          <h2 id="yacht-prices-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
            {page.priceGuide.title}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">{page.priceGuide.subtitle}</p>
          <div className="mt-6 overflow-hidden rounded-xl border border-[#e7e8e9]">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {page.priceGuide.rows.map((row) => (
                  <tr key={row.type} className="border-b border-[#e7e8e9] last:border-0">
                    <td className="px-4 py-3 font-semibold text-[#191c1d]">{row.type}</td>
                    <td className="px-4 py-3 font-medium text-[#455f88]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#747878]">{page.priceGuide.footnote}</p>
        </section>

        <section id="yacht-routes" className="scroll-mt-24" aria-labelledby="yacht-routes-title">
          <h2 id="yacht-routes-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
            {page.routes.title}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">{page.routes.subtitle}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.routes.items.map((route) => (
              <div
                key={route.id}
                className="rounded-xl border border-[#e7e8e9] bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-[#455f88]">{route.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{route.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="yacht-family"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="yacht-family-title"
        >
          <h2 id="yacht-family-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
            {page.familyOnBoard.title}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold text-[#455f88]">{page.familyOnBoard.goodTitle}</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[#444748]">
                {page.familyOnBoard.goodItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#191c1d]">{page.familyOnBoard.avoidTitle}</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[#444748]">
                {page.familyOnBoard.avoidItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-[#e7e8e9] bg-white/80 p-5">
            <h3 className="text-sm font-bold text-[#455f88]">{page.valueNote.title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#444748]">{page.valueNote.body}</p>
          </div>
        </section>

        <section id="yacht-tips" className="scroll-mt-24" aria-labelledby="yacht-tips-title">
          <div>
            <h2 id="yacht-tips-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.tips.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.tips.subtitle}
            </p>
          </div>
          <YachtTipsPanel tips={page.tips} />
        </section>

        <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">{page.alsoExplore.title}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/explore/islands/koh-larn"
              className="rounded-xl bg-[#455f88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#455f88]/90"
            >
              {page.alsoExplore.kohLarnDayTrip}
            </Link>
            <Link
              href={page.alsoExplore.familyActivitiesHref}
              className="rounded-xl border border-[#455f88]/30 px-6 py-3 text-center text-sm font-semibold text-[#455f88] transition hover:bg-[#455f88]/5"
            >
              {page.alsoExplore.familyActivities}
            </Link>
            <Link
              href="/explore/restaurants/fine-dining"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.fineDining}
            </Link>
            <Link
              href="/explore/wellness"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.wellness}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
