"use client";

import dynamic from "next/dynamic";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";

const ShoppingMarketsMap = dynamic(
  () => import("@/components/explore/shopping-markets-map").then((m) => m.ShoppingMarketsMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-2xl bg-[#e7e8e9] md:h-[380px]" aria-hidden />
    ),
  },
);
import { getHiddenMarketImage } from "@/lib/design/shopping-market-hidden-images";
import { getMarketImage } from "@/lib/i18n/messages/explore-shopping-markets-guide";
import type { MarketGuideItem } from "@/lib/i18n/messages/explore-shopping-markets-guide";
import type { HiddenMarketItem } from "@/lib/i18n/messages/explore-shopping-markets-hidden";
import { shoppingImages } from "@/lib/design/shopping-images";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { getMarketTips, getShoppingMarketsPage } from "@/lib/i18n/messages/explore-shopping-markets";
import type { getMarketSchedule } from "@/lib/i18n/messages/explore-shopping-markets-guide";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  Banknote,
  Calendar,
  Clock,
  Eye,
  HandCoins,
  MapPin,
  Moon,
  Navigation,
  ShieldCheck,
  Sparkles,
  Sun,
  SunMedium,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type MarketScheduleData = ReturnType<typeof getMarketSchedule>;

function MarketScheduleSection({ schedule }: { schedule: MarketScheduleData }) {
  return (
    <div className="mt-5">
      {/* Mobile / tablet: 2-column compact cards */}
      <ul
        className="grid grid-cols-2 gap-2 sm:gap-3 md:hidden"
        aria-label={schedule.title}
      >
        {schedule.rows.map((row) => (
          <li key={row.id} className="min-w-0">
            <a
              href={`#market-${row.id}`}
              className="flex h-full min-h-[7.5rem] flex-col rounded-xl border border-[#e7e8e9] bg-white px-2.5 py-2.5 shadow-sm transition hover:border-[#B52E88]/30 hover:bg-[#fdf8fb] sm:px-3 sm:py-3"
            >
              <p className="line-clamp-2 text-[11px] font-bold leading-tight text-[#B52E88] sm:text-xs">
                {row.name}
              </p>
              <p className="mt-1.5 text-sm font-semibold tabular-nums leading-none tracking-tight text-[#191c1d] sm:text-base">
                {row.hoursRangeCompact}
              </p>
              <p className="mt-1 text-[10px] leading-snug text-[#747878] sm:text-xs">{row.openDaysCompact}</p>
              <p className="mt-auto pt-1.5">
                <BestTimeBadge label={row.bestTimeOfDay} compact />
              </p>
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop: full table */}
      <div className="hidden overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[#e7e8e9] bg-[#fdf8fb]">
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.market}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.openDays}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.hours}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.bestTime}</th>
              <th className="px-4 py-3 font-bold text-[#191c1d]">{schedule.columns.vibe}</th>
            </tr>
          </thead>
          <tbody>
            {schedule.rows.map((row) => (
              <tr key={row.id} className="border-b border-[#e7e8e9] last:border-0">
                <td className="px-4 py-3 font-semibold text-[#191c1d]">
                  <a href={`#market-${row.id}`} className="text-[#B52E88] hover:underline">
                    {row.name}
                  </a>
                </td>
                <td className="px-4 py-3 text-[#444748]">{row.openDays}</td>
                <td className="whitespace-nowrap px-4 py-3 font-medium tabular-nums text-[#191c1d]">
                  {row.hoursRange}
                </td>
                <td className="px-4 py-3 text-[#444748]">
                  <BestTimeBadge label={row.bestTimeOfDay} />
                </td>
                <td className="px-4 py-3 text-[#444748]">{row.scheduleVibe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BestTimeBadge({ label, compact = false }: { label: string; compact?: boolean }) {
  const lower = label.toLowerCase();
  const isNight =
    lower.includes("night") ||
    lower.includes("ดึก") ||
    lower.includes("กลางคืน") ||
    lower.includes("夜间") ||
    lower.includes("ноч");
  const isEarly =
    lower.includes("early") ||
    lower.includes("เช้ามาก") ||
    lower.includes("清晨") ||
    lower.includes("ранн");
  const Icon = isNight ? Moon : isEarly ? SunMedium : Sun;

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium text-[#444748] ${compact ? "text-[10px] leading-snug sm:text-xs" : "text-sm"}`}
    >
      <Icon
        className={`shrink-0 text-[#B52E88] ${compact ? "h-3 w-3" : "h-3.5 w-3.5"}`}
        aria-hidden
      />
      <span className="line-clamp-2">{label}</span>
    </span>
  );
}

type MarketCardLabels = {
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
};

function MarketGuideCard({
  market,
  labels,
}: {
  market: MarketGuideItem;
  labels: MarketCardLabels;
}) {
  return (
    <MarketGuideCardInner
      id={`market-${market.id}`}
      name={market.name}
      imageSrc={getMarketImage(market.imageId)}
      market={market}
      labels={labels}
    />
  );
}

function HiddenMarketCard({
  market,
  labels,
}: {
  market: HiddenMarketItem;
  labels: MarketCardLabels;
}) {
  return (
    <MarketGuideCardInner
      id={`hidden-market-${market.id}`}
      name={market.name}
      imageSrc={getHiddenMarketImage(market.id)}
      market={market}
      labels={labels}
      secretBadge
    />
  );
}

function MarketGuideCardInner({
  id,
  name,
  imageSrc,
  market,
  labels,
  secretBadge = false,
}: {
  id: string;
  name: string;
  imageSrc: string;
  market: MarketGuideItem | HiddenMarketItem;
  labels: MarketCardLabels;
  secretBadge?: boolean;
}) {
  return (
    <article
      id={id}
      className={`scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm ${
        secretBadge ? "border-[#2d6a4f]/30 ring-1 ring-[#2d6a4f]/10" : "border-[#e7e8e9]"
      }`}
    >
      <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e7e8e9]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#191c1d]">{name}</h3>
        <dl className="mt-3 space-y-1.5 text-xs font-medium text-[#747878]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.openDaysLabel}
            </dt>
            <dd className="text-[#191c1d]">{market.openDays}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.hoursRangeLabel}
            </dt>
            <dd className="text-[#191c1d]">{market.hoursRange}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt>{labels.bestTimeLabel}</dt>
            <dd className="text-[#191c1d]">{market.bestTimeOfDay}</dd>
          </div>
        </dl>
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">
            {labels.highlightsLabel}
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-[#444748]">
            {market.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.vibeLabel}: </span>
          {market.vibe}
        </p>
        {market.bestFor ? (
          <p className="mt-2 text-sm leading-relaxed text-[#444748]">
            <span className="font-semibold text-[#191c1d]">{labels.bestForLabel}: </span>
            {market.bestFor}
          </p>
        ) : null}
        {market.foods && market.foods.length > 0 ? (
          <div className="mt-3">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#B52E88]">
              <Utensils className="h-3.5 w-3.5" aria-hidden />
              {labels.foodsLabel}
            </p>
            <ul className="mt-1.5 flex flex-wrap gap-2">
              {market.foods.map((food) => (
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
        {market.tips ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-xs leading-relaxed text-[#444748] ring-1 ring-[#e7e8e9]">
            <span className="font-semibold text-[#191c1d]">{labels.tipsLabel}: </span>
            {market.tips}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <a
            href={market.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {labels.openInMaps}
          </a>
          {market.directionsHref ? (
            <a
              href={market.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c1d] hover:underline"
            >
              <Navigation className="h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.directionsLabel}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function HiddenMarketsSection({
  section,
}: {
  section: ReturnType<typeof getShoppingMarketsPage>["hidden"];
}) {
  return (
    <section
      id="hidden-markets"
      className="scroll-mt-24 rounded-2xl border border-[#2d6a4f]/25 bg-gradient-to-br from-[#f4faf6] via-white to-[#fdf8fb] p-6 sm:p-8"
      aria-labelledby="hidden-markets-title"
    >
      <div className="flex items-start gap-3">
        <Eye className="mt-0.5 h-6 w-6 shrink-0 text-[#2d6a4f]" aria-hidden />
        <div>
          <span className="inline-flex rounded-full bg-[#2d6a4f]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2d6a4f]">
            {section.badge}
          </span>
          <h2 id="hidden-markets-title" className="mt-2 text-xl font-bold text-[#191c1d] md:text-2xl">
            {section.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">
            {section.intro}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
        {section.markets.map((market) => (
          <HiddenMarketCard key={market.id} market={market} labels={section.labels} />
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {section.picks.groups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm"
          >
            <h3 className="text-sm font-bold text-[#2d6a4f]">{group.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-snug text-[#191c1d]">{group.pick}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[#e7e8e9] bg-white/80 p-5 sm:p-6">
        <h3 className="text-sm font-bold text-[#191c1d]">{section.localTips.title}</h3>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#444748]">
          {section.localTips.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const marketTipIcons = {
  bargain: HandCoins,
  timing: Clock,
  cash: Banknote,
  quality: ShieldCheck,
} as const;

function MarketTipsPanel({ tips }: { tips: ReturnType<typeof getMarketTips> }) {
  return (
    <article className="mt-8 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm">
      <ul className="divide-y divide-[#e7e8e9]">
        {tips.items.map((tip) => {
          const Icon = marketTipIcons[tip.id];
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

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 lg:px-6 md:py-16">
        <section id="markets" className="scroll-mt-24" aria-labelledby="markets-title">
          <div>
            <h2 id="markets-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">
              {page.guide.body}
            </p>
            <p className="mt-2 max-w-3xl text-xs text-[#747878]">{page.guide.sourceNote}</p>
          </div>

          <section
            id="market-schedule"
            className="mt-10 scroll-mt-24"
            aria-labelledby="market-schedule-title"
          >
            <h3 id="market-schedule-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
              {page.schedule.title}
            </h3>
            <p className="mt-1 max-w-3xl text-sm text-[#747878]">{page.schedule.subtitle}</p>
            <MarketScheduleSection schedule={page.schedule} />
          </section>

          <div className="mt-10">
            <ShoppingMarketsMap />
          </div>

          <div className="mt-10 space-y-12">
            {page.categories.map((category) => (
              <div key={category.id} id={`market-cat-${category.id}`} className="scroll-mt-24">
                <h3 className="text-xl font-bold text-[#191c1d] md:text-2xl">{category.title}</h3>
                <p className="mt-1 max-w-3xl text-sm text-[#747878]">{category.subtitle}</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
                  {category.markets.map((market) => (
                    <MarketGuideCard key={market.id} market={market} labels={page.guide} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <HiddenMarketsSection section={page.hidden} />
          </div>
        </section>

        <section
          id="market-rankings"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="rankings-title"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-[#B52E88]" aria-hidden />
            <div>
              <h2 id="rankings-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
                {page.rankings.title}
              </h2>
              <p className="mt-1 text-sm text-[#747878]">{page.rankings.subtitle}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.rankings.groups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm"
              >
                <h3 className="text-sm font-bold text-[#B52E88]">{group.title}</h3>
                <ol className="mt-3 space-y-2">
                  {group.items.map((item, index) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-snug text-[#444748]"
                    >
                      <span className="font-bold tabular-nums text-[#191c1d]">{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
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
          <MarketTipsPanel tips={page.tips} />
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
              href={marketPagePaths.streetFoodThepprasit}
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
