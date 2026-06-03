"use client";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { useLanguage } from "@/components/layout/language-provider";
import {
  CLASSIFIEDS_THEME,
  getClassifiedsHub,
  type ClassifiedListing,
  type ListingCategoryId,
} from "@/lib/i18n/messages/classifieds-hub";
import { buildStandaloneBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import {
  Building2,
  Car,
  Clock,
  MapPin,
  Megaphone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState, type FormEvent } from "react";

const THEME = CLASSIFIEDS_THEME;
const THEME_DARK = "#A86854";
const THEME_LIGHT = "#F5E8E2";

const categoryIcons: Record<ListingCategoryId, typeof Building2> = {
  property: Building2,
  vehicles: Car,
  jobs: Users,
  services: Wrench,
  "buy-sell": ShoppingBag,
  community: Megaphone,
};

const categoryStyles: Record<ListingCategoryId, string> = {
  property: "bg-[#F5E8E2] text-[#9A5F48]",
  vehicles: "bg-[#EDE4DE] text-[#8B5E48]",
  jobs: "bg-[#E8DDD6] text-[#7A5340]",
  services: "bg-[#F0E4DC] text-[#8F6048]",
  "buy-sell": "bg-[#F5EBE4] text-[#96654A]",
  community: "bg-[#EDE6E0] text-[#856048]",
};

function FeaturedCard({
  listing,
  promotedLabel,
  viewLabel,
}: {
  listing: ClassifiedListing;
  promotedLabel: string;
  viewLabel: string;
}) {
  return (
    <Link
      href={listing.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8DDD6] bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: THEME }}
        >
          {promotedLabel}
        </span>
        <span className="absolute bottom-3 left-3 text-lg font-bold text-white">
          {listing.price}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span
          className={`mb-2 w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${categoryStyles[listing.category]}`}
        >
          {listing.categoryLabel}
        </span>
        <h3 className="text-base font-bold text-[#191c1d] group-hover:text-[#9A5F48] sm:text-lg">
          {listing.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-[#64748b]">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {listing.location}
        </p>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[#475569]">
          {listing.excerpt}
        </p>
        <span className="mt-3 text-xs font-semibold" style={{ color: THEME }}>
          {viewLabel}
        </span>
      </div>
    </Link>
  );
}

function ListingRow({
  listing,
  viewLabel,
}: {
  listing: ClassifiedListing;
  viewLabel: string;
}) {
  return (
    <Link
      href={listing.href}
      id={listing.category}
      className="group flex gap-4 rounded-2xl border border-[#E8DDD6] bg-white p-4 transition-shadow hover:shadow-md sm:p-5"
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-32">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="128px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold tabular-nums" style={{ color: THEME }}>
            {listing.price}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${categoryStyles[listing.category]}`}
          >
            {listing.categoryLabel}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-medium text-[#94a3b8]">
            <Clock className="h-3 w-3" aria-hidden />
            {listing.posted}
          </span>
        </div>
        <h3 className="text-base font-bold text-[#191c1d] group-hover:text-[#9A5F48] sm:text-lg">
          {listing.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-[#64748b]">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {listing.location}
        </p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#475569]">
          {listing.excerpt}
        </p>
        <span className="mt-2 inline-block text-xs font-semibold" style={{ color: THEME }}>
          {viewLabel}
        </span>
      </div>
    </Link>
  );
}

export function ClassifiedsHubPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const hub = getClassifiedsHub(language);
  const [query, setQuery] = useState("");
  const breadcrumbs = buildStandaloneBreadcrumbs(
    language,
    hub.hero.title,
    "/classifieds",
  );

  const handleSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const q = query.trim();
      if (q) {
        router.push(`/classifieds?q=${encodeURIComponent(q)}#recent`);
      }
    },
    [query, router],
  );

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <div
        className="relative mb-10 overflow-hidden rounded-3xl border border-[#E8DDD6] p-6 shadow-xl sm:p-8"
        style={{ backgroundColor: THEME_DARK }}
      >
        <Image
          src={hub.heroImage}
          alt={hub.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(60,40,32,0.92) 0%, rgba(168,104,84,0.78) 55%, rgba(199,133,109,0.55) 100%)",
          }}
        />
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/90">
            {hub.hero.badge}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {hub.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            {hub.hero.description}
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-6 flex max-w-xl flex-col gap-2 sm:flex-row"
            role="search"
          >
            <label htmlFor="listings-search" className="sr-only">
              {hub.hero.searchPlaceholder}
            </label>
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]"
                aria-hidden
              />
              <input
                id="listings-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={hub.hero.searchPlaceholder}
                className="w-full rounded-xl border border-white/20 bg-white/95 py-3 pl-10 pr-4 text-sm text-[#191c1d] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: THEME }}
            >
              {hub.hero.searchButton}
            </button>
          </form>
        </div>
      </div>

      <section className="mb-12" aria-labelledby="listings-categories">
        <div className="mb-6">
          <h2
            id="listings-categories"
            className="text-2xl font-bold text-[#191c1d] sm:text-3xl"
          >
            {hub.sections.categoriesTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">
            {hub.sections.categoriesSubtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hub.categories.map((category) => {
            const Icon = categoryIcons[category.id];
            return (
              <Link
                key={category.id}
                href={category.href}
                id={category.id}
                className="group flex overflow-hidden rounded-2xl border border-[#E8DDD6] bg-white shadow-sm transition-all hover:border-[#C7856D]/40 hover:shadow-md"
              >
                <div className="relative min-h-[120px] w-28 shrink-0 self-stretch sm:w-32">
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="128px"
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: THEME }}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ backgroundColor: THEME_LIGHT, color: THEME_DARK }}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#94a3b8]">
                      {category.count}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#191c1d] group-hover:text-[#9A5F48]">
                    {category.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#64748b]">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-12" aria-labelledby="listings-featured">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p
              id="listings-featured"
              className="mb-1 text-xs font-bold uppercase tracking-widest"
              style={{ color: THEME }}
            >
              {hub.sections.promoted}
            </p>
            <h2 className="text-2xl font-bold text-[#191c1d] sm:text-3xl">
              {hub.sections.featuredTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#64748b]">
              {hub.sections.featuredSubtitle}
            </p>
          </div>
          <Sparkles className="hidden h-8 w-8 shrink-0 sm:block" style={{ color: THEME }} aria-hidden />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hub.featured.map((listing) => (
            <FeaturedCard
              key={listing.id}
              listing={listing}
              promotedLabel={hub.sections.promoted}
              viewLabel={hub.sections.viewListing}
            />
          ))}
        </div>
      </section>

      <section className="mb-12 scroll-mt-24" id="recent" aria-labelledby="listings-recent">
        <div className="mb-6">
          <h2 id="listings-recent" className="text-2xl font-bold text-[#191c1d] sm:text-3xl">
            {hub.sections.recentTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#64748b]">{hub.sections.recentSubtitle}</p>
        </div>

        <div className="space-y-4">
          {hub.recent.map((listing) => (
            <ListingRow
              key={listing.id}
              listing={listing}
              viewLabel={hub.sections.viewListing}
            />
          ))}
        </div>
      </section>

      <section className="mb-12" aria-labelledby="listings-safety">
        <div className="mb-6 flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 shrink-0" style={{ color: THEME }} aria-hidden />
          <h2 id="listings-safety" className="text-xl font-bold text-[#191c1d] sm:text-2xl">
            {hub.sections.safetyTitle}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {hub.safetyTips.map((tip) => (
            <article
              key={tip.title}
              className="rounded-2xl border border-[#E8DDD6] p-5"
              style={{ backgroundColor: THEME_LIGHT }}
            >
              <h3 className="font-bold text-[#9A5F48]">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C4030]">{tip.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="overflow-hidden rounded-3xl border border-[#E8DDD6] p-6 text-center sm:p-10"
        style={{
          background: `linear-gradient(135deg, ${THEME_LIGHT} 0%, #fff 50%, ${THEME_LIGHT} 100%)`,
        }}
      >
        <Megaphone className="mx-auto mb-4 h-10 w-10" style={{ color: THEME }} aria-hidden />
        <h2 className="text-2xl font-bold text-[#191c1d]">{hub.sections.postTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#64748b] sm:text-base">
          {hub.sections.postBody}
        </p>
        <Link
          href="#"
          className="mt-6 inline-block rounded-full px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: THEME }}
        >
          {hub.sections.postCta}
        </Link>
      </section>
    </>
  );
}
