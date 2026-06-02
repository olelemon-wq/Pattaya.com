"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { BeachShorelineCarousel } from "@/components/explore/beach-shoreline-carousel";
import { useLanguage } from "@/components/layout/language-provider";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { beachesImages } from "@/lib/design/beaches-images";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { getMainBeachesPage } from "@/lib/i18n/messages/explore-beaches";
import { Clock, MapPin, Sun, Umbrella, Users, Waves, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const beachImages: Record<string, string> = {
  "pattaya-beach": beachesImages.pattayaBeach,
  jomtien: beachesImages.jomtien,
  dongtan: beachesImages.dongtan,
  naklua: beachesImages.naklua,
  wongamat: beachesImages.wongAmat,
  pratumnak: beachesImages.pratumnak,
};

const tipIcons = [Sun, Waves, Umbrella, Clock] as const;

function TipRow({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-[#c4c7c8]/30 bg-white p-4 sm:p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B52E88]/10">
        <Icon className="h-5 w-5 text-[#B52E88]" aria-hidden />
      </div>
      <div>
        <h4 className="font-bold text-[#191c1d]">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-[#444748]">{text}</p>
      </div>
    </div>
  );
}

export function MainBeachesPage() {
  const { language } = useLanguage();
  const c = getExploreCommon(language);
  const page = getMainBeachesPage(language);

  const beaches = page.beaches.map((beach) => ({
    ...beach,
    image: beachImages[beach.id] ?? beachesImages.hero,
  }));

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="beaches-hero-title"
      >
        <Image
          src={beachesImages.hero}
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
                <span className="text-white">{page.breadcrumb.current}</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            {page.hero.badge}
          </span>
          <h1
            id="beaches-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />
              {page.hero.badgeStretches}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Users className="h-4 w-4" aria-hidden />
              {page.hero.badgeOptions}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:px-6 md:py-16">
        <BeachShorelineCarousel
          beaches={beaches}
          title={page.carousel.title}
          description={page.carousel.description}
          prevLabel={page.carousel.prev}
          nextLabel={page.carousel.next}
          detailLabels={{ bestFor: c.bestFor, access: c.access, water: c.water }}
        />

        <section className="mb-16 overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[240px] md:min-h-0">
              <Image
                src={beachesImages.activities}
                alt={page.comparison.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B52E88]">
                {page.comparison.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">{page.comparison.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#444748]">
                {page.comparison.items.map((item) => (
                  <li key={item.name}>
                    <strong className="text-[#191c1d]">{item.name}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <Link
                href="/explore/islands/koh-larn"
                className="mt-6 inline-flex w-fit rounded-xl bg-[#B52E88] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
              >
                {page.comparison.cta}
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{page.tips.title}</h2>
          <p className="mt-2 text-[#444748]">{page.tips.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.tips.items.map((tip, i) => (
              <TipRow key={tip.title} icon={tipIcons[i] ?? Sun} {...tip} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold md:text-3xl">{page.exploreMore.title}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {page.exploreMore.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[#c4c7c8]/30 bg-white p-5 shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md"
              >
                <p className="font-bold text-[#B52E88]">{link.label} →</p>
                <p className="mt-2 text-sm text-[#444748]">{link.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
