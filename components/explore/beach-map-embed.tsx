"use client";

import { ExternalLink, MapPin } from "lucide-react";

type BeachMapEmbedProps = {
  title: string;
  embedSrc: string;
  openHref: string;
  openLabel: string;
  embedAria: string;
};

export function BeachMapEmbed({
  title,
  embedSrc,
  openHref,
  openLabel,
  embedAria,
}: BeachMapEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[280px] lg:h-full">
        <iframe
          title={embedAria}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#c4c7c8]/30 bg-[#fdf8fb] px-4 py-3 sm:px-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#191c1d]">
          <MapPin className="h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
          {title}
        </p>
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#B52E88] transition hover:underline"
        >
          {openLabel}
          <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
        </a>
      </div>
    </div>
  );
}
