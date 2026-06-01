"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { hiddenGemsHeroImage } from "@/lib/design/hidden-gem-images";
import { getHiddenGemsPage } from "@/lib/i18n/messages/explore-hidden-gems";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { Clock, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function SpotCard({
  name,
  hours,
  hoursLabel,
  highlight,
  highlightLabel,
  access,
  accessLabel,
  text,
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
  access: string;
  accessLabel: string;
  text: string;
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
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
            <span>
              {highlightLabel}: <span className="text-[#191c1d]">{highlight}</span>
            </span>
          </p>
          <p className="mt-2 pl-6 text-xs font-medium text-[#747878]">
            {accessLabel}: <span className="text-[#191c1d]">{access}</span>
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

function WalkPlanCard({
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

export function HiddenGemsPage() {
  const { language } = useLanguage();
  const page = getHiddenGemsPage(language);

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="gems-hero-title"
      >
        <Image
          src={hiddenGemsHeroImage}
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
          <h1 id="gems-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        <section id="hidden-spots" className="scroll-mt-24" aria-labelledby="spots-title">
          <div>
            <h2 id="spots-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.spots.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.spots.subtitle}
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:items-stretch xl:grid-cols-4">
            {page.spots.items.map((spot) => (
              <li key={spot.id} id={`spot-${spot.id}`} className="flex min-h-0 scroll-mt-24">
                <SpotCard
                  name={spot.name}
                  hours={spot.hours}
                  hoursLabel={page.spots.hoursLabel}
                  highlight={spot.highlight}
                  highlightLabel={page.spots.highlightLabel}
                  access={spot.access}
                  accessLabel={page.spots.accessLabel}
                  text={spot.text}
                  href={spot.href}
                  linkLabel={spot.linkLabel}
                  image={spot.image}
                  secondaryHref={spot.secondaryHref}
                  secondaryLinkLabel={spot.secondaryLinkLabel}
                />
              </li>
            ))}
          </ul>
        </section>

        <section id="slow-walks" className="scroll-mt-24" aria-labelledby="walk-plans-title">
          <div>
            <h2 id="walk-plans-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.walkPlans.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {page.walkPlans.subtitle}
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3 md:items-stretch">
            {page.walkPlans.items.map((plan) => (
              <WalkPlanCard
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

        <section id="explorer-guides" className="scroll-mt-24" aria-labelledby="tips-title">
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
              href="/explore/beaches"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              {page.alsoExplore.mainBeaches}
            </Link>
            <Link
              href="/explore/shopping/markets"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.localMarkets}
            </Link>
            <Link
              href="/explore/restaurants/street-food"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              {page.alsoExplore.streetFood}
            </Link>
            <Link
              href="/explore/cafes"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              {page.alsoExplore.cafesLink}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
