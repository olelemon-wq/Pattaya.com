"use client";

import type { ReactNode } from "react";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { BeachMapEmbed } from "@/components/explore/beach-map-embed";
import { KohLarnBeachGuide } from "@/components/explore/koh-larn-beach-guide";
import { useLanguage } from "@/components/layout/language-provider";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { kohLarnImages } from "@/lib/design/koh-larn-images";
import { getKohLarnPage } from "@/lib/i18n/messages/explore-koh-larn";
import {
  Bike,
  Clock,
  MapPin,
  Moon,
  Shield,
  Ship,
  Sparkles,
  Sun,
  Umbrella,
  Wallet,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tripPlannerIcons = {
  ferry: Ship,
  beach: MapPin,
  activities: Waves,
} as const satisfies Record<string, LucideIcon>;

function TripPlannerAction({
  icon: Icon,
  label,
  blurb,
  href,
}: {
  icon: LucideIcon;
  label: string;
  blurb: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-w-0 flex-col rounded-xl border border-[#e7e8e9] bg-white p-2.5 shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88] sm:p-4"
    >
      <Icon className="h-4 w-4 text-[#B52E88] sm:h-5 sm:w-5" aria-hidden />
      <span className="mt-2 text-[11px] font-bold leading-snug text-[#191c1d] group-hover:text-[#B52E88] sm:mt-3 sm:text-sm">
        {label}
      </span>
      <span className="mt-0.5 text-[10px] leading-snug text-[#747878] sm:mt-1 sm:text-xs sm:leading-relaxed">
        {blurb}
      </span>
    </Link>
  );
}

function KeyInfoItem({
  icon: Icon,
  label,
  text,
}: {
  icon: LucideIcon;
  label: string;
  text: string;
}) {
  return (
    <li className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#B52E88]" aria-hidden />
      <span>
        <strong className="text-[#191c1d]">{label}:</strong> {text}
      </span>
    </li>
  );
}

function SectionBlock({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      <h2 className="text-xl font-semibold text-[#191c1d] md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#444748]">{children}</div>
    </section>
  );
}

type IslandGuideCardProps = {
  name: string;
  text: string;
  href: string;
  linkLabel: string;
  image: string;
  external: boolean;
  priceRange?: string;
  priceRangeLabel?: string;
};

function IslandGuideCard({
  name,
  text,
  href,
  linkLabel,
  image,
  external,
  priceRange,
  priceRangeLabel,
}: IslandGuideCardProps) {
  const inner = (
    <>
      <div className="relative aspect-[4/3] w-full shrink-0 bg-[#e7e8e9]">
        <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 400px" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="flex items-start gap-2 font-bold text-[#191c1d]">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
          {name}
        </p>
        {priceRange ? (
          <p className="mt-2 pl-6 text-sm">
            {priceRangeLabel ? (
              <span className="font-medium text-[#747878]">{priceRangeLabel}: </span>
            ) : null}
            <span className="font-semibold text-[#B52E88]">{priceRange}</span>
          </p>
        ) : null}
        <p className="mt-2 flex-1 pl-6 text-sm leading-relaxed text-[#444748]">{text}</p>
        <span className="mt-4 pl-6 text-sm font-semibold text-[#B52E88] group-hover:underline">
          {linkLabel}
        </span>
      </div>
    </>
  );

  const className =
    "group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

function QuickInfoBadge({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/25">
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {text}
    </span>
  );
}

export function KohLarnPage() {
  const { language } = useLanguage();
  const page = getKohLarnPage(language);

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(75vh,560px)] overflow-hidden"
        aria-labelledby="koh-larn-hero-title"
      >
        <Image
          src={kohLarnImages.hero}
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
        <div className="relative mx-auto flex min-h-[min(75vh,560px)] max-w-[1280px] flex-col justify-end px-5 pb-28 pt-20 md:px-16 md:pb-32">
          <nav aria-label={tSiteUi(language, "breadcrumb")} className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
              <li>
                <Link href="/explore" className="hover:text-white">
                  {page.breadcrumb.explore}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/80">{page.breadcrumb.islands}</span>
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
          <h1 id="koh-larn-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
            <QuickInfoBadge icon={MapPin} text={page.hero.badgeBeaches} />
            <QuickInfoBadge icon={Ship} text={page.hero.badgeFerry} />
            <QuickInfoBadge icon={Sparkles} text={page.hero.badgeTop} />
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-16 max-w-[960px] px-5 sm:-mt-20 md:px-16">
        <nav
          className="rounded-2xl border border-[#c4c7c8]/30 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:p-6"
          aria-label={page.tripPlanner.ariaLabel}
        >
          <p className="text-sm font-bold text-[#191c1d] sm:text-base">{page.tripPlanner.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-[#747878]">{page.tripPlanner.subtitle}</p>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            {page.tripPlanner.actions.map((action) => (
              <TripPlannerAction
                key={action.id}
                icon={tripPlannerIcons[action.id]}
                label={action.label}
                blurb={action.blurb}
                href={action.href}
              />
            ))}
          </div>
        </nav>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-12 px-4 py-12 sm:px-6 sm:py-16">
        <section className="grid gap-8 lg:grid-cols-2 lg:items-start" aria-labelledby="about-koh-larn">
          <div>
            <h2 id="about-koh-larn" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.about.title}
            </h2>
            <p className="mt-4 leading-relaxed text-[#444748]">{page.about.body}</p>
            <p className="mt-2 text-xs text-[#747878]">{page.about.sourceNote}</p>
          </div>
          <aside className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#191c1d]">{page.keyInfo.title}</h3>
            <ul className="mt-4 space-y-4 text-sm text-[#444748]">
              <KeyInfoItem
                icon={Ship}
                label={page.keyInfo.transport.label}
                text={page.keyInfo.transport.text}
              />
              <KeyInfoItem
                icon={Sun}
                label={page.keyInfo.season.label}
                text={page.keyInfo.season.text}
              />
              <KeyInfoItem
                icon={Bike}
                label={page.keyInfo.islandTransport.label}
                text={page.keyInfo.islandTransport.text}
              />
            </ul>
          </aside>
        </section>

        <section
          id="day-plan"
          className="scroll-mt-24 rounded-2xl border border-[#D7CBBA]/50 bg-gradient-to-br from-[#fdf8fb] via-white to-[#f5efe6] p-6 sm:p-8"
          aria-labelledby="day-plan-title"
        >
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-6 w-6 shrink-0 text-[#B52E88]" aria-hidden />
            <div>
              <h2 id="day-plan-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
                {page.dayPlan.title}
              </h2>
              <p className="mt-1 text-sm text-[#747878]">{page.dayPlan.subtitle}</p>
            </div>
          </div>
          <ol className="mt-6 space-y-4">
            {page.dayPlan.steps.map((step) => (
              <li
                key={`${step.time}-${step.title}`}
                className="flex gap-4 rounded-xl border border-[#e7e8e9] bg-white/90 p-4 shadow-sm"
              >
                <span className="w-14 shrink-0 text-sm font-bold tabular-nums text-[#B52E88]">{step.time}</span>
                <div>
                  <p className="font-semibold text-[#191c1d]">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#444748]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div id="ferry-guide" className="scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <SectionBlock title={page.ferry.title} className="flex h-full flex-col">
            <p>{page.ferry.body}</p>
            <ul className="list-disc space-y-2 pl-5">
              {page.ferry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </SectionBlock>

          <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm">
            <div className="border-b border-[#e7e8e9] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-[#191c1d] md:text-2xl">
                {page.ferry.locationLabel}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#444748]">
                {page.keyInfo.transport.text}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <BeachMapEmbed
                title={page.ferry.locationLabel}
                embedSrc={page.ferry.embedSrc}
                openHref={page.ferry.mapsUrl}
                openLabel={page.ferry.openMaps}
                embedAria={page.ferry.embedAria}
              />
            </div>
          </section>
        </div>

        <section id="activities" className="scroll-mt-24" aria-labelledby="activities-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="activities-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
                {page.activities.title}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#747878]">
                {page.activities.subtitle}
              </p>
            </div>
            <Link href="#costs-guide" className="text-sm font-semibold text-[#B52E88] hover:underline">
              {page.activities.costsLink}
            </Link>
          </div>
          <ul className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.activities.items.map((item) => (
              <li key={item.id} className="flex min-h-0">
                <IslandGuideCard
                  name={item.name}
                  text={item.text}
                  href={item.href}
                  linkLabel={item.linkLabel}
                  image={item.image}
                  external={item.external}
                  priceRange={item.priceRange}
                  priceRangeLabel={page.activities.priceRangeLabel}
                />
              </li>
            ))}
          </ul>
        </section>

        <KohLarnBeachGuide />

        <section id="first-visit-tips" className="scroll-mt-24" aria-labelledby="first-visit-tips-title">
          <div>
            <h2 id="first-visit-tips-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.firstTimerTips.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.firstTimerTips.subtitle}
            </p>
          </div>
          <ul className="mt-6 divide-y divide-[#e7e8e9] overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm">
            {page.firstTimerTips.items.map((tip) => {
              const Icon =
                tip.id === "cash"
                  ? Wallet
                  : tip.id === "early"
                    ? Sun
                    : tip.id === "sun"
                      ? Umbrella
                      : MapPin;
              return (
                <li key={tip.id} className="flex gap-4 p-5 sm:gap-5 sm:p-6">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdf8fb] text-[#B52E88] ring-1 ring-[#e7e8e9]"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-[#191c1d] sm:text-lg">{tip.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#444748]">{tip.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          id="overnight"
          className="scroll-mt-24 rounded-2xl border border-[#B52E88]/20 bg-[#fdf8fb] p-6 sm:p-8"
          aria-labelledby="overnight-title"
        >
          <div className="flex items-start gap-3">
            <Moon className="mt-0.5 h-6 w-6 shrink-0 text-[#B52E88]" aria-hidden />
            <div>
              <h2 id="overnight-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
                {page.overnight.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#444748] sm:text-base">{page.overnight.body}</p>
            </div>
          </div>
        </section>

        <SectionBlock title={page.viewpoint.title} className="scroll-mt-24">
          <p>{page.viewpoint.body}</p>
          <a
            href={page.viewpoint.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B52E88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {page.viewpoint.openMaps}
          </a>
        </SectionBlock>

        <SectionBlock title={page.nearby.title}>
          <ul className="grid gap-5 sm:grid-cols-3 sm:items-stretch">
            {page.nearby.items.map((item) => (
              <li key={item.name} className="flex min-h-0">
                <Link
                  href={item.href}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 bg-[#e7e8e9]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="flex items-start gap-2 font-bold text-[#191c1d]">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
                      {item.name}
                    </p>
                    <p className="mt-2 flex-1 pl-6 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <div id="costs-guide" className="scroll-mt-24 grid gap-8 lg:grid-cols-2">
          <SectionBlock title={page.costs.title}>
            <ul className="space-y-3">
              {page.costs.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={page.safety.title}>
            <ul className="space-y-3">
              {page.safety.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>
        </div>

        <section id="eat-guide" className="scroll-mt-24" aria-labelledby="directory-title">
          <h2 id="directory-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
            {page.directory.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
            {page.directory.subtitle}
          </p>

          <h3 className="mt-8 text-lg font-bold text-[#B52E88]">{page.mustTry.title}</h3>
          <p className="mt-1 text-sm text-[#747878]">{page.mustTry.subtitle}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {page.mustTry.dishes.map((dish) => (
              <li
                key={dish}
                className="rounded-full bg-[#fdf8fb] px-3 py-1.5 text-sm font-medium text-[#191c1d] ring-1 ring-[#e7e8e9]"
              >
                {dish}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-lg font-bold text-[#B52E88]">{page.cafes.title}</h3>
          <p className="mt-1 text-sm text-[#747878]">{page.cafes.subtitle}</p>
          <ul className="mt-4 grid gap-5 sm:grid-cols-3 sm:items-stretch">
            {page.cafes.items.map((item) => (
              <li key={item.name} className="flex min-h-0">
                <IslandGuideCard
                  name={item.name}
                  text={item.text}
                  href={item.href}
                  linkLabel={page.viewpoint.openMaps}
                  image={item.image}
                  external
                />
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-lg font-bold text-[#B52E88]">{page.mustTry.restaurantsTitle}</h3>
          <ul className="mt-4 grid gap-5 sm:grid-cols-3 sm:items-stretch">
            {page.mustTry.restaurants.map((item) => (
              <li key={item.name} className="flex min-h-0">
                <IslandGuideCard
                  name={item.name}
                  text={item.text}
                  href={item.href}
                  linkLabel={page.viewpoint.openMaps}
                  image={item.image}
                  external
                />
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-lg font-bold text-[#B52E88]">{page.directory.eatTitle}</h3>
          <ul className="mt-4 grid gap-5 sm:grid-cols-3 sm:items-stretch">
            {page.directory.eat.map((item) => (
              <li key={item.name} className="flex min-h-0">
                <IslandGuideCard {...item} />
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-lg font-bold text-[#B52E88]">{page.directory.stayTitle}</h3>
          <ul className="mt-4 grid gap-5 sm:grid-cols-3 sm:items-stretch">
            {page.directory.stay.map((item) => (
              <li key={item.name} className="flex min-h-0">
                <IslandGuideCard {...item} />
              </li>
            ))}
          </ul>
        </section>

        <SectionBlock title={page.summary.title}>
          <p>{page.summary.body}</p>
        </SectionBlock>
      </div>
    </div>
  );
}
