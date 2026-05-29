"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { tExplore } from "@/lib/i18n/messages/explore-hub";
import {
  pattayaCityMapEmbedSrc,
  pattayaCityMapOpenHref,
} from "@/lib/design/pattaya-map";

export function PattayaCityMap() {
  const { language } = useLanguage();

  return (
    <div className="overflow-hidden rounded-3xl border border-[#c4c7c8]/30 shadow-lg">
      <div className="relative aspect-[21/9] w-full md:aspect-[2/1]">
        <iframe
          title={tExplore(language, "pattayaMapAria")}
          src={pattayaCityMapEmbedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-[#c4c7c8]/30 bg-white px-4 py-3">
        <p className="text-sm font-semibold text-[#191c1d]">
          {tExplore(language, "pattayaMapLabel")}
        </p>
        <a
          href={pattayaCityMapOpenHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-semibold text-[#B52E88] hover:underline"
        >
          {tExplore(language, "pattayaMapOpen")}
        </a>
      </div>
    </div>
  );
}
