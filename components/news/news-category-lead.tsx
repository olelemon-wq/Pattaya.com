"use client";

import Image from "next/image";
import Link from "next/link";

type NewsCategoryLeadProps = {
  image: string;
  imageAlt: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  byline?: string;
  browseLabel: string;
};

export function NewsCategoryLead({
  image,
  imageAlt,
  categoryLabel,
  title,
  excerpt,
  byline,
  browseLabel,
}: NewsCategoryLeadProps) {
  const isLocalAsset = image.startsWith("/");

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
      <div className="relative h-40 overflow-hidden sm:h-48">
        <Image
          src={image}
          alt={imageAlt}
          fill
          unoptimized={!isLocalAsset}
          className="object-cover"
          sizes="(max-width: 1280px) 100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0c1a33]/85 via-[#0c1a33]/35 to-transparent"
          aria-hidden
        />
      </div>
      <div className="border-t border-[#f1f5f9] p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#10438f]">
          {categoryLabel}
        </p>
        <h2 className="mt-2 text-lg font-bold leading-snug text-[#0c1a33] sm:text-xl">{title}</h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#64748b]">{excerpt}</p>
        {byline ? <p className="mt-2 text-xs text-[#94a3b8]">{byline}</p> : null}
        <Link
          href="#latest"
          className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#10438f] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#10438f]/90"
        >
          {browseLabel}
        </Link>
      </div>
    </div>
  );
}
