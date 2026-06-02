"use client";

import dynamic from "next/dynamic";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import {
  getCafeGuideImage,
  type CafeGuideItem,
} from "@/lib/i18n/messages/explore-cafes-guide";
import { getCafesPage } from "@/lib/i18n/messages/explore-cafes";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  Calendar,
  Clock,
  Coffee,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
  SunMedium,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CafesMap = dynamic(() => import("@/components/explore/cafes-map").then((m) => m.CafesMap), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] w-full animate-pulse rounded-2xl bg-[#e7e8e9] md:h-[380px]" aria-hidden />
  ),
});

type CafeGuideLabels = ReturnType<typeof getCafesPage>["guide"];

function CafeGuideCard({ cafe, labels }: { cafe: CafeGuideItem; labels: CafeGuideLabels }) {
  const image = getCafeGuideImage(cafe.id);
  return (
    <article
      id={`cafe-${cafe.id}`}
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e7e8e9]">
        <Image
          src={image}
          alt={cafe.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={image.startsWith("/")}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B52E88]">{cafe.category}</p>
        <h3 className="mt-1 text-lg font-bold text-[#191c1d]">{cafe.name}</h3>
        <dl className="mt-3 space-y-1.5 text-xs font-medium text-[#747878]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.openDaysLabel}
            </dt>
            <dd className="text-[#191c1d]">{cafe.openDays}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
              {labels.hoursRangeLabel}
            </dt>
            <dd className="text-[#191c1d]">{cafe.hoursRange}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <dt>{labels.bestTimeLabel}</dt>
            <dd className="text-[#191c1d]">{cafe.bestTimeOfDay}</dd>
          </div>
        </dl>
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">{labels.highlightsLabel}</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-[#444748]">
            {cafe.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.vibeLabel}: </span>
          {cafe.vibe}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">
          <span className="font-semibold text-[#191c1d]">{labels.bestForLabel}: </span>
          {cafe.bestFor}
        </p>
        {cafe.mustTry ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-sm font-medium text-[#191c1d] ring-1 ring-[#e7e8e9]">
            <span className="text-[#B52E88]">{labels.mustTryLabel}: </span>
            {cafe.mustTry}
          </p>
        ) : null}
        {cafe.tips ? (
          <p className="mt-3 rounded-lg bg-[#fdf8fb] px-3 py-2 text-xs leading-relaxed text-[#444748] ring-1 ring-[#e7e8e9]">
            <span className="font-semibold text-[#191c1d]">{labels.tipsLabel}: </span>
            {cafe.tips}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          {cafe.phone && cafe.phoneHref ? (
            <a
              href={cafe.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c1d] hover:underline"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
              {cafe.phone}
            </a>
          ) : null}
          <a
            href={cafe.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {labels.openInMaps}
          </a>
          <a
            href={cafe.directionsHref}
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

const cafeTipIcons = {
  hours: SunMedium,
  work: Wifi,
  seating: Coffee,
  ordering: UtensilsCrossed,
} as const;

function CafeTipsPanel({ tips }: { tips: ReturnType<typeof getCafesPage>["tips"] }) {
  return (
    <article className="mt-8 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm">
      <ul className="divide-y divide-[#e7e8e9]">
        {tips.items.map((tip) => {
          const Icon = cafeTipIcons[tip.id];
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

export function CafesPage() {
  const { language } = useLanguage();
  const page = getCafesPage(language);

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="cafes-hero-title"
      >
        <Image
          src={page.heroImage}
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
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            {page.hero.badge}
          </span>
          <h1 id="cafes-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Coffee className="h-4 w-4" aria-hidden />
              {page.hero.badgeSunset}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />
              {page.hero.badgeAreas}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        <section id="cafes" className="scroll-mt-24" aria-labelledby="cafes-title">
          <div>
            <h2 id="cafes-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">{page.guide.body}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.guide.pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#444748] ring-1 ring-[#e7e8e9]"
                >
                  {pillar}
                </li>
              ))}
            </ul>
            <p className="mt-2 max-w-3xl text-xs text-[#747878]">{page.guide.sourceNote}</p>
          </div>

          <div className="mt-10">
            <CafesMap />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
            {page.guideItems.map((cafe) => (
              <CafeGuideCard key={cafe.id} cafe={cafe} labels={page.guide} />
            ))}
          </div>
        </section>

        <section
          id="cafe-mood"
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
                href={`#cafe-${group.cafeId}`}
                className="rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm transition hover:border-[#B52E88]/35 hover:bg-white"
              >
                <h3 className="text-sm font-bold text-[#B52E88]">{group.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#191c1d]">{group.pick}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="cafe-first-visit"
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
                href={`#cafe-${item.cafeId}`}
                className="rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] p-5 transition hover:border-[#B52E88]/35"
              >
                <h3 className="font-bold text-[#B52E88]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{item.body}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="cafe-route"
          className="scroll-mt-24 rounded-2xl border border-[#B52E88]/20 bg-gradient-to-br from-[#fdf8fb] to-white p-6 sm:p-8"
          aria-labelledby="route-title"
        >
          <h2 id="route-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
            {page.hoppingRoute.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
            {page.hoppingRoute.subtitle}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {page.hoppingRoute.routes.map((route) => (
              <article
                key={route.id}
                className="flex flex-col rounded-xl border border-[#e7e8e9] bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-lg font-bold text-[#B52E88] md:text-xl">{route.title}</h3>
                <p className="mt-1 text-sm text-[#747878]">{route.subtitle}</p>
                <ol className="mt-5 space-y-5">
                  {route.stops.map((stop) => {
                    const primaryHref = stop.cafeId
                      ? `#cafe-${stop.cafeId}`
                      : "mapsHref" in stop && stop.mapsHref
                        ? stop.mapsHref
                        : "#";
                    const isAnchor = Boolean(stop.cafeId);
                    return (
                      <li key={`${route.id}-${stop.timeLabel}-${stop.title}`} className="border-l-2 border-[#B52E88]/25 pl-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-[#B52E88]">{stop.timeLabel}</p>
                        <a
                          href={primaryHref}
                          {...(!isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="mt-1 block text-base font-bold text-[#191c1d] hover:text-[#B52E88] hover:underline"
                        >
                          {stop.title}
                        </a>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#444748]">{stop.body}</p>
                        {"mustTry" in stop && stop.mustTry ? (
                          <p className="mt-2 text-xs font-medium text-[#747878]">
                            <span className="text-[#B52E88]">→ </span>
                            {stop.mustTry}
                          </p>
                        ) : null}
                        {"alternative" in stop && stop.alternative ? (
                          <a
                            href={stop.alternative.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-xs font-semibold text-[#455f88] hover:underline"
                          >
                            {stop.alternative.label}
                          </a>
                        ) : null}
                      </li>
                    );
                  })}
                </ol>
                <a
                  href={route.openRouteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#B52E88] hover:underline"
                >
                  <Navigation className="h-4 w-4 shrink-0" aria-hidden />
                  {page.hoppingRoute.openRouteLabel}
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[#747878]">{page.hoppingRoute.footnote}</p>
        </section>

        <section id="cafe-guides" className="scroll-mt-24" aria-labelledby="tips-title">
          <div>
            <h2 id="tips-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.tips.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.tips.subtitle}
            </p>
          </div>
          <CafeTipsPanel tips={page.tips} />
        </section>

        <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">{page.alsoExplore.title}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/explore/restaurants/fine-dining"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.fineDining}
            </Link>
            <Link
              href={marketPagePaths.streetFoodThepprasit}
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.streetFood}
            </Link>
            <Link
              href={marketPagePaths.page}
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.localMarkets}
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
