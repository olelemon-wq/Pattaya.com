"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { fineDiningImages } from "@/lib/design/fine-dining-images";
import {
  getCollections,
  getDiningTips,
  getDiningZones,
  tFineDining,
} from "@/lib/i18n/messages/fine-dining";
import { Building2, ChefHat, MapPin, Sunset, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const collectionIcons = {
  sunset: Sunset,
  building: Building2,
  chef: ChefHat,
} as const;

type ZoneCardProps = {
  name: string;
  style: string;
  styleLabel: string;
  text: string;
  priceRange: string;
  priceRangeLabel: string;
  href: string;
  linkLabel: string;
  image: string;
};

function ZoneCard({
  name,
  style,
  styleLabel,
  text,
  priceRange,
  priceRangeLabel,
  href,
  linkLabel,
  image,
}: ZoneCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md"
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
        <p className="mt-2 pl-6 text-xs font-medium text-[#747878]">
          {styleLabel}: <span className="text-[#191c1d]">{style}</span>
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
    </Link>
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

function CollectionCard({
  title,
  description,
  href,
  linkLabel,
  image,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#e7e8e9] bg-white shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 bg-[#e7e8e9]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 400px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#191c1d]/75 via-[#191c1d]/25 to-[#191c1d]/10"
          aria-hidden
        />
        <span
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F0D4E8]/95 text-[#B52E88] shadow-sm backdrop-blur-sm"
          aria-hidden
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold leading-snug text-white drop-shadow-sm sm:text-xl">
          {title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="flex-1 text-sm leading-relaxed text-[#444748]">{description}</p>
        <span className="mt-4 text-sm font-semibold text-[#B52E88] group-hover:underline">
          {linkLabel}
        </span>
      </div>
    </Link>
  );
}

export function FineDiningPage() {
  const { language } = useLanguage();
  const zones = getDiningZones(language);
  const tips = getDiningTips(language);
  const collections = getCollections(language).map((c, i) => ({
    ...c,
    image: [
      fineDiningImages.collectionSunset,
      fineDiningImages.collectionRooftop,
      fineDiningImages.collectionChefsTable,
    ][i],
  }));

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
          alt={tFineDining(language, "heroImageAlt")}
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
                  {tFineDining(language, "explore")}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/80">{tFineDining(language, "restaurants")}</span>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">{tFineDining(language, "fineDining")}</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            {tFineDining(language, "restaurants")}
          </span>
          <h1
            id="fine-dining-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            {tFineDining(language, "fineDining")}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">
            {tFineDining(language, "heroSub")}
          </p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            {tFineDining(language, "heroBody")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        <section id="dining-zones" className="scroll-mt-24" aria-labelledby="zones-title">
          <div>
            <h2 id="zones-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {zones.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {zones.subtitle}
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:items-stretch">
            {zones.items.map((zone) => (
              <li key={zone.id} id={`zone-${zone.id}`} className="flex min-h-0 scroll-mt-24">
                <ZoneCard
                  {...zone}
                  styleLabel={zones.styleLabel}
                  priceRangeLabel={zones.priceRangeLabel}
                />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="collections-title">
          <div>
            <h2
              id="collections-title"
              className="text-2xl font-semibold text-[#191c1d] md:text-3xl"
            >
              {tFineDining(language, "collections")}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {tFineDining(language, "collectionsSub")}
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:items-stretch">
            {collections.map((collection) => {
              const Icon = collectionIcons[collection.icon];
              return (
                <li key={collection.title} className="flex min-h-0">
                  <CollectionCard
                    title={collection.title}
                    description={collection.description}
                    href={collection.href}
                    linkLabel={collection.linkLabel}
                    image={collection.image}
                    icon={Icon}
                  />
                </li>
              );
            })}
          </ul>
        </section>

        <section id="dining-guides" className="scroll-mt-24" aria-labelledby="guides-title">
          <div>
            <h2 id="guides-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {tips.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#747878] sm:text-base">
              {tips.subtitle}
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 md:items-stretch">
            {tips.items.map((tip) => (
              <TipCard
                key={tip.id}
                id={tip.id}
                title={tip.title}
                paragraphs={tip.paragraphs}
                image={tip.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
