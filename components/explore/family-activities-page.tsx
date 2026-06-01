"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { getFamilyActivityImageForCard } from "@/lib/i18n/messages/explore-family-activities-guide";
import type {
  FamilyGuideItem,
  FamilyScheduleRow,
} from "@/lib/i18n/messages/explore-family-activities-guide";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { getFamilyActivitiesPage } from "@/lib/i18n/messages/explore-family";
import type { getFamilyTips } from "@/lib/i18n/messages/explore-family";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  Baby,
  Calendar,
  Car,
  Clock,
  CloudRain,
  Droplets,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FamilyCardLabels = {
  openDaysLabel: string;
  hoursRangeLabel: string;
  bestTimeLabel: string;
  highlightsLabel: string;
  vibeLabel: string;
  bestForLabel: string;
  tipsLabel: string;
  openInMaps: string;
  directionsLabel: string;
  officialSiteLabel: string;
  guideLinkLabel: string;
};

function FamilyGuideCard({ spot, labels }: { spot: FamilyGuideItem; labels: FamilyCardLabels }) {
  return (
    <article
      id={`family-${spot.id}`}
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e7e8e9]">
        <Image
          src={getFamilyActivityImageForCard(spot.id)}
          alt={spot.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#191c1d]">{spot.name}</h3>
        <dl className="mt-3 space-y-1.5 text-xs font-medium text-[#747878]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.openDaysLabel}
            </dt>
            <dd className="text-[#191c1d]">{spot.openDays}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.hoursRangeLabel}
            </dt>
            <dd className="text-[#191c1d]">{spot.hoursRange}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt>{labels.bestTimeLabel}</dt>
            <dd className="text-[#191c1d]">{spot.bestTimeOfDay}</dd>
          </div>
        </dl>
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">{labels.highlightsLabel}</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-[#444748]">
            {spot.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.vibeLabel}: </span>
          {spot.vibe}
        </p>
        {spot.bestFor ? (
          <p className="mt-2 text-sm leading-relaxed text-[#444748]">
            <span className="font-semibold text-[#191c1d]">{labels.bestForLabel}: </span>
            {spot.bestFor}
          </p>
        ) : null}
        {spot.tips ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-xs leading-relaxed text-[#444748] ring-1 ring-[#e7e8e9]">
            <span className="font-semibold text-[#191c1d]">{labels.tipsLabel}: </span>
            {spot.tips}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <a
            href={spot.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {labels.openInMaps}
          </a>
          {spot.officialHref ? (
            <a
              href={spot.officialHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c1d] hover:underline"
            >
              <Navigation className="h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.officialSiteLabel}
            </a>
          ) : null}
          {spot.internalHref ? (
            <Link
              href={spot.internalHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#455f88] hover:underline"
            >
              {labels.guideLinkLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function FamilyAgeScheduleSection({
  schedule,
}: {
  schedule: ReturnType<typeof getFamilyActivitiesPage>["schedule"];
}) {
  return (
    <div className="mt-5">
      <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:hidden" aria-label={schedule.title}>
        {schedule.rows.map((row) => (
          <li key={row.id} className="min-w-0">
            <a
              href={`#family-${row.id}`}
              className="flex h-full min-h-[7.5rem] flex-col rounded-xl border border-[#e7e8e9] bg-white px-2.5 py-2.5 shadow-sm transition hover:border-[#B52E88]/30 hover:bg-[#fdf8fb] sm:px-3 sm:py-3"
            >
              <p className="line-clamp-2 text-[11px] font-bold leading-tight text-[#B52E88] sm:text-xs">
                {row.name}
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-snug text-[#191c1d] sm:text-base">
                {row.ageRangeCompact}
              </p>
              <p className="mt-1 text-[10px] leading-snug text-[#747878] sm:text-xs">{row.bestTimeOfDay}</p>
              <p className="mt-auto pt-1.5 text-[10px] leading-snug text-[#747878] sm:text-xs">
                {row.scheduleVibe}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[#e7e8e9] bg-[#fdf8fb]">
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.spot}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.age}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.bestTime}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.vibe}</th>
            </tr>
          </thead>
          <tbody>
            {schedule.rows.map((row: FamilyScheduleRow) => (
              <tr key={row.id} className="border-b border-[#e7e8e9] last:border-0">
                <td className="px-4 py-3 font-semibold text-[#191c1d]">
                  <a href={`#family-${row.id}`} className="text-[#B52E88] hover:underline">
                    {row.name}
                  </a>
                </td>
                <td className="px-4 py-3 text-[#444748]">{row.ageRange}</td>
                <td className="px-4 py-3 text-[#444748]">{row.bestTimeOfDay}</td>
                <td className="px-4 py-3 text-[#444748]">{row.scheduleVibe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const familyTipIcons = {
  sun: Sun,
  traffic: Car,
  snacks: Droplets,
  rain: CloudRain,
  pace: Users,
} as const;

function FamilyTipsPanel({ tips }: { tips: ReturnType<typeof getFamilyTips> }) {
  return (
    <article className="mt-8 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm">
      <ul className="divide-y divide-[#e7e8e9]">
        {tips.items.map((tip) => {
          const Icon = familyTipIcons[tip.id];
          return (
            <li key={tip.id} id={`tip-${tip.id}`} className="scroll-mt-24 flex gap-4 p-5 sm:gap-5 sm:p-6">
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

export function FamilyActivitiesPage() {
  const { language } = useLanguage();
  const page = getFamilyActivitiesPage(language);

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="family-hero-title"
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
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            {page.hero.badge}
          </span>
          <h1 id="family-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
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
        <section id="family-guide" className="scroll-mt-24" aria-labelledby="family-guide-title">
          <div>
            <h2 id="family-guide-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">{page.guide.body}</p>
            <p className="mt-2 max-w-3xl text-xs text-[#747878]">{page.guide.sourceNote}</p>
          </div>

          <section
            id="family-age-schedule"
            className="mt-10 scroll-mt-24"
            aria-labelledby="family-age-schedule-title"
          >
            <h3 id="family-age-schedule-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
              {page.schedule.title}
            </h3>
            <p className="mt-1 max-w-3xl text-sm text-[#747878]">{page.schedule.subtitle}</p>
            <FamilyAgeScheduleSection schedule={page.schedule} />
          </section>

          <div className="mt-10 space-y-12">
            {page.categories.map((category) => (
              <div key={category.id} id={`family-cat-${category.id}`} className="scroll-mt-24">
                <h3 className="text-xl font-bold text-[#191c1d] md:text-2xl">{category.title}</h3>
                <p className="mt-1 max-w-3xl text-sm text-[#747878]">{category.subtitle}</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
                  {category.spots.map((spot) => (
                    <FamilyGuideCard key={spot.id} spot={spot} labels={page.guide} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="family-young-kids"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="family-young-kids-title"
        >
          <div className="flex items-start gap-3">
            <Baby className="mt-0.5 h-6 w-6 shrink-0 text-[#B52E88]" aria-hidden />
            <div>
              <span className="inline-flex rounded-full bg-[#B52E88]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B52E88]">
                {page.youngKids.badge}
              </span>
              <h2 id="family-young-kids-title" className="mt-2 text-xl font-bold text-[#191c1d] md:text-2xl">
                {page.youngKids.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">
                {page.youngKids.intro}
              </p>
            </div>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {page.youngKids.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-[#e7e8e9] bg-white/90 px-4 py-3 text-sm font-medium leading-snug text-[#444748]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-[#e7e8e9] bg-white/80 p-5 sm:p-6">
            <h3 className="text-sm font-bold text-[#191c1d]">{page.youngKids.picks.title}</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#444748]">
              {page.youngKids.picks.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="family-dining"
          className="scroll-mt-24 rounded-2xl border border-[#e7e8e9] bg-white p-6 sm:p-8"
          aria-labelledby="family-dining-title"
        >
          <h2 id="family-dining-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
            {page.dining.title}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">{page.dining.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.dining.malls.map((mall) => (
              <div
                key={mall.name}
                className="rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] p-5 shadow-sm"
              >
                <a
                  href={mall.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#B52E88] hover:underline"
                >
                  {mall.name}
                </a>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[#444748]">
                  {mall.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="family-3-day-plan"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="family-3-day-plan-title"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-[#B52E88]" aria-hidden />
            <div>
              <h2 id="family-3-day-plan-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
                {page.threeDayPlan.title}
              </h2>
              <p className="mt-1 text-sm text-[#747878]">{page.threeDayPlan.subtitle}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.threeDayPlan.days.map((day) => (
              <div
                key={day.id}
                className="rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm"
              >
                <h3 className="text-sm font-bold text-[#B52E88]">{day.title}</h3>
                <ol className="mt-3 space-y-2">
                  {day.items.map((item, index) => (
                    <li key={item} className="flex gap-2 text-sm leading-snug text-[#444748]">
                      <span className="font-bold tabular-nums text-[#191c1d]">{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section id="family-tips" className="scroll-mt-24" aria-labelledby="family-tips-title">
          <div>
            <h2 id="family-tips-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.tips.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.tips.subtitle}
            </p>
          </div>
          <FamilyTipsPanel tips={page.tips} />
        </section>

        <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">{page.alsoExplore.title}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/explore/islands/koh-larn"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.kohLarnDayTrip}
            </Link>
            <Link
              href="/explore/shopping/malls"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.shoppingMalls}
            </Link>
            <Link
              href={page.alsoExplore.marketsHref}
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.markets}
            </Link>
            <Link
              href={marketPagePaths.streetFoodPage}
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.streetFood}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
