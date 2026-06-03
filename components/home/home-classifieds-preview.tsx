"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeCardCtaButton } from "@/components/home/home-card-cta-button";
import { useLanguage } from "@/components/layout/language-provider";
import type { ClassifiedListingPreview } from "@/lib/i18n/messages/classifieds-hub";
import { getHomeClassifiedsPreview } from "@/lib/i18n/messages/classifieds-hub";

function ListingCard({
  listing,
  viewLabel,
  theme,
}: {
  listing: ClassifiedListingPreview;
  viewLabel: string;
  theme: string;
}) {
  return (
    <Link
      href={listing.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-36 overflow-hidden sm:h-40">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          unoptimized={listing.image.startsWith("/")}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a33]/70 via-[#0c1a33]/10 to-transparent" />
        <span
          className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
          style={{ color: theme }}
        >
          {listing.categoryLabel}
        </span>
        <span className="absolute bottom-3 left-3 text-sm font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
          {listing.price}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4 sm:gap-2">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#0c1a33] transition-colors group-hover:opacity-90 sm:text-base">
          {listing.title}
        </h3>
        {listing.lines.map((line, i) => (
          <p key={i} className="line-clamp-1 text-xs leading-relaxed text-[#64748b] sm:text-sm">
            {line}
          </p>
        ))}
        <div className="mt-auto border-t border-[#f1f5f9] pt-3">
          <HomeCardCtaButton label={viewLabel} variant="classifieds" />
        </div>
      </div>
    </Link>
  );
}

export function HomeClassifiedsPreview() {
  const { language } = useLanguage();
  const copy = getHomeClassifiedsPreview(language);

  return (
    <section
      aria-labelledby="home-classifieds-heading"
      className="home-section-reveal mx-auto max-w-[1280px] px-3 sm:px-4 lg:px-6"
      style={{ animationDelay: "180ms" }}
    >
      <div className="mb-5 flex items-end justify-between border-b border-[#e2e8f0] pb-3">
        <div>
          <h2 id="home-classifieds-heading" className="text-xl font-extrabold text-[#0c1a33] sm:text-2xl">
            {copy.title}
          </h2>
          <p className="mt-1 text-sm text-[#64748b]">{copy.subtitle}</p>
        </div>
        <Link
          href={copy.viewAllHref}
          className="shrink-0 text-xs font-bold transition-colors hover:opacity-80 sm:text-sm"
          style={{ color: copy.theme }}
        >
          {copy.viewAll}
        </Link>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {copy.listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            viewLabel={copy.viewListing}
            theme={copy.theme}
          />
        ))}
      </div>
    </section>
  );
}
