"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { getYachtPage } from "@/lib/i18n/messages/explore-yacht";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { Anchor, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function VenueCard({
  name,
  hours,
  hoursLabel,
  highlight,
  highlightLabel,
  text,
  priceRange,
  priceRangeLabel,
  href,
  linkLabel,
  image,
  secondaryHref,
  secondaryLinkLabel,
}: {
  name: string;
  hours: string;
  hoursLabel: string;
  highlight: string;
  highlightLabel: string;
  text: string;
  priceRange: string;
  priceRangeLabel: string;
  href: string;
  linkLabel: string;
  image: string;
  secondaryHref?: string;
  secondaryLinkLabel?: string;
}) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] shadow-sm">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-0 flex-1 flex-col transition hover:border-[#B52E88]/30"
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
            <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
            <span>
              {highlightLabel}: <span className="text-[#191c1d]">{highlight}</span>
            </span>
          </p>
          <p className="mt-2 pl-6 text-sm">
            <span className="font-medium text-[#747878]">{priceRangeLabel}: </span>
            <span className="font-semibold text-[#B52E88]">{priceRange}</span>
          </p>
          <p className="mt-2 flex-1 pl-6 text-sm leading-relaxed text-[#444748]">{text}</p>
          <span className="mt-4 pl-6 text-sm font-semibold text-[#B52E88] group-hover:underline">
            {linkLabel}
          </span>
        </div>
      </a>
      {secondaryHref && secondaryLinkLabel ? (
        <div className="border-t border-[#e7e8e9] px-4 py-3 sm:px-5">
          {isExternalHref(secondaryHref) ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#455f88] transition hover:text-[#B52E88] hover:underline"
            >
              {secondaryLinkLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className="text-sm font-semibold text-[#455f88] transition hover:text-[#B52E88] hover:underline"
            >
              {secondaryLinkLabel}
            </Link>
          )}
        </div>
      ) : null}
    </article>
  );
}

function DayPlanCard({
  title,
  paragraphs,
  href,
  linkLabel,
  image,
}: {
  title: string;
  paragraphs: string[];
  href: string;
  linkLabel: string;
  image: string;
}) {
  const linkClass =
    "mt-4 inline-flex text-sm font-semibold text-[#B52E88] transition hover:underline";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full shrink-0 bg-[#e7e8e9]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-bold text-[#191c1d] sm:text-lg">{title}</h3>
        <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-[#444748]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {isExternalHref(href) ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {linkLabel}
          </a>
        ) : (
          <Link href={href} className={linkClass}>
            {linkLabel}
          </Link>
        )}
      </div>
    </article>
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
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] shadow-sm"
    >
      <div className="relative aspect-[21/9] w-full shrink-0 bg-[#e7e8e9] sm:aspect-[2/1]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
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
          src={page.marina.image}
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
          <h1
            id="yacht-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        <section id="departure-points" className="scroll-mt-24" aria-labelledby="departure-title">
          <div>
            <h2 id="departure-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.departurePoints.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.departurePoints.subtitle}
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:items-stretch xl:grid-cols-3">
            {page.departurePoints.items.map((point) => (
              <li key={point.id} id={`departure-${point.id}`} className="flex min-h-0 scroll-mt-24">
                <VenueCard
                  name={point.name}
                  hours={point.hours}
                  hoursLabel={page.departurePoints.hoursLabel}
                  highlight={point.highlight}
                  highlightLabel={page.departurePoints.highlightLabel}
                  text={point.text}
                  priceRange={point.priceRange}
                  priceRangeLabel={page.departurePoints.priceRangeLabel}
                  href={point.href}
                  linkLabel={point.linkLabel}
                  image={point.image}
                  secondaryHref={point.secondaryHref}
                  secondaryLinkLabel={point.secondaryLinkLabel}
                />
              </li>
            ))}
          </ul>
        </section>

        <section id="charter-types" className="scroll-mt-24" aria-labelledby="charter-types-title">
          <div>
            <h2 id="charter-types-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.charterTypes.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.charterTypes.subtitle}
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:items-stretch xl:grid-cols-3">
            {page.charterTypes.items.map((charter) => (
              <li key={charter.id} id={`charter-${charter.id}`} className="flex min-h-0 scroll-mt-24">
                <VenueCard
                  name={charter.name}
                  hours={charter.hours}
                  hoursLabel={page.charterTypes.hoursLabel}
                  highlight={charter.highlight}
                  highlightLabel={page.charterTypes.highlightLabel}
                  text={charter.text}
                  priceRange={charter.priceRange}
                  priceRangeLabel={page.charterTypes.priceRangeLabel}
                  href={charter.href}
                  linkLabel={charter.linkLabel}
                  image={charter.image}
                  secondaryHref={charter.secondaryHref}
                  secondaryLinkLabel={charter.secondaryLinkLabel}
                />
              </li>
            ))}
          </ul>
        </section>

        <section
          id="ocean-marina"
          className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm"
          aria-labelledby="marina-title"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <Image
                src={page.marina.image}
                alt={page.marina.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B52E88]/10 text-[#B52E88]">
                <Anchor className="h-7 w-7" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#B52E88]">
                {page.marina.eyebrow}
              </p>
              <h2 id="marina-title" className="mt-2 text-2xl font-semibold text-[#191c1d] md:text-3xl">
                {page.marina.title}
              </h2>
              <p className="mt-4 leading-relaxed text-[#444748]">{page.marina.body}</p>
              <ul className="mt-6 space-y-3">
                {page.marina.amenities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#444748]">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B52E88]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={page.marina.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B52E88] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
                >
                  {page.marina.mapsLabel}
                </a>
                <a
                  href={page.marina.siteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[#B52E88]/30 px-6 py-3 text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
                >
                  {page.marina.siteLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="yacht-day-plans" className="scroll-mt-24" aria-labelledby="day-plans-title">
          <div>
            <h2 id="day-plans-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.dayPlans.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.dayPlans.subtitle}
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3 md:items-stretch">
            {page.dayPlans.items.map((plan) => (
              <DayPlanCard
                key={plan.id}
                title={plan.title}
                paragraphs={plan.paragraphs}
                href={plan.href}
                linkLabel={plan.linkLabel}
                image={plan.image}
              />
            ))}
          </div>
        </section>

        <section id="yacht-guides" className="scroll-mt-24" aria-labelledby="tips-title">
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
              href="/explore/islands/koh-larn"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.kohLarnDayTrip}
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
