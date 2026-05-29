"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { fineDiningImages } from "@/lib/design/fine-dining-images";
import {
  getCollections,
  getDiningGuides,
  getFeaturedRestaurants,
  tFineDining,
} from "@/lib/i18n/messages/fine-dining";
import { Building2, ChefHat, Sunset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const collectionIcons = {
  sunset: Sunset,
  building: Building2,
  chef: ChefHat,
} as const;

function FeaturedCard({
  nameLocalized,
  description,
  cuisine,
  location,
  image,
  href,
  sponsoredLabel,
  reserveLabel,
}: {
  nameLocalized: string;
  description: string;
  cuisine: string;
  location: string;
  image: string;
  href: string;
  sponsoredLabel: string;
  reserveLabel: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={nameLocalized}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#ae2f34] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {sponsoredLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#191c1d]">{nameLocalized}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#444748]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#B52E88]/10 px-2.5 py-1 text-xs font-medium text-[#B52E88] ring-1 ring-[#B52E88]/15">
            {cuisine}
          </span>
          <span className="rounded-full bg-[#B52E88]/10 px-2.5 py-1 text-xs font-medium text-[#B52E88] ring-1 ring-[#B52E88]/15">
            📍 {location}
          </span>
        </div>
        <Link
          href={href}
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#B52E88] px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#B52E88]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88]"
        >
          {reserveLabel}
        </Link>
      </div>
    </article>
  );
}

export function FineDiningPage() {
  const { language } = useLanguage();
  const featured = getFeaturedRestaurants(language).map((r, i) => ({
    ...r,
    image: [
      fineDiningImages.featuredMantra,
      fineDiningImages.featuredSkyGallery,
      fineDiningImages.featuredHorizon,
    ][i],
  }));
  const collections = getCollections(language).map((c, i) => ({
    ...c,
    image: [
      fineDiningImages.collectionSunset,
      fineDiningImages.collectionRooftop,
      fineDiningImages.collectionChefsTable,
    ][i],
  }));
  const guides = getDiningGuides(language).map((g, i) => ({
    ...g,
    image: [
      fineDiningImages.guideDressCode,
      fineDiningImages.guideSunset,
      fineDiningImages.guideEtiquette,
      fineDiningImages.guideOccasion,
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
          alt="Luxury fine dining in Pattaya"
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
          <nav aria-label="Breadcrumb" className="mb-4">
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
        <section aria-labelledby="sponsored-title">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B52E88]">
              {tFineDining(language, "sponsoredShowcase")}
            </p>
            <h2
              id="sponsored-title"
              className="mt-1 text-2xl font-semibold text-[#191c1d] md:text-3xl"
            >
              {tFineDining(language, "featuredTitle")}
            </h2>
            <p className="mt-1 text-sm text-[#747878]">
              {tFineDining(language, "featuredSub")}
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((restaurant) => (
              <FeaturedCard
                key={restaurant.name}
                {...restaurant}
                sponsoredLabel={tFineDining(language, "sponsored")}
                reserveLabel={tFineDining(language, "reserve")}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="collections-title">
          <h2
            id="collections-title"
            className="text-2xl font-semibold text-[#191c1d] md:text-3xl"
          >
            {tFineDining(language, "collections")}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">
            {tFineDining(language, "collectionsSub")}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => {
              const Icon = collectionIcons[collection.icon];
              return (
                <Link
                  key={collection.title}
                  href={collection.href}
                  className="group flex gap-4 rounded-2xl border border-[#c4c7c8]/30 bg-white p-4 shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md sm:p-5"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                    <Image
                      src={collection.image}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="96px"
                    />
                    <span
                      className="absolute inset-0 flex items-center justify-center bg-[#191c1d]/40"
                      aria-hidden
                    >
                      <Icon className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[#191c1d] group-hover:text-[#B52E88]">
                      {collection.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-[#444748]">
                      {collection.description}
                    </p>
                    <span className="mt-2 inline-block text-sm font-semibold text-[#B52E88]">
                      {tFineDining(language, "browseCollection")}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="guides-title">
          <h2 id="guides-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
            {tFineDining(language, "guides")}
          </h2>
          <p className="mt-1 text-sm text-[#747878]">{tFineDining(language, "guidesSub")}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="flex gap-4 rounded-xl border border-[#c4c7c8]/30 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
              >
                <div className="relative hidden h-24 w-28 shrink-0 overflow-hidden rounded-lg sm:block">
                  <Image src={guide.image} alt="" fill className="object-cover" sizes="112px" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#747878]">
                    {guide.readTime}
                  </p>
                  <h3 className="mt-1 text-base font-bold leading-snug text-[#191c1d]">
                    <Link href={guide.href} className="hover:text-[#B52E88] hover:underline">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[#444748]">{guide.excerpt}</p>
                  <Link
                    href={guide.href}
                    className="mt-3 inline-block text-sm font-semibold text-[#B52E88] hover:underline"
                  >
                    {tFineDining(language, "readGuide")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
