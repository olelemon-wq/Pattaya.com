"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { HomeCardCtaButton } from "@/components/home/home-card-cta-button";
import { getHomeLivingPicks } from "@/lib/i18n/messages/home-hub";

export function HomeLivingPicks() {
  const { language } = useLanguage();
  const copy = getHomeLivingPicks(language);

  return (
    <section
      aria-labelledby="home-living-heading"
      className="home-section-reveal mx-auto max-w-[1280px] px-3 sm:px-4 lg:px-6"
      style={{ animationDelay: "220ms" }}
    >
      <div className="mb-5 flex items-end justify-between border-b border-[#e2e8f0] pb-3">
        <div>
          <h2 id="home-living-heading" className="text-xl font-extrabold text-[#0c1a33] sm:text-2xl">
            {copy.title}
          </h2>
          <p className="mt-1 text-sm text-[#64748b]">{copy.subtitle}</p>
        </div>
        <Link
          href={copy.viewAllHref}
          className="shrink-0 text-xs font-bold text-[#8a7349] transition-colors hover:text-[#6d5a3c] sm:text-sm"
        >
          {copy.viewAll}
        </Link>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {copy.picks.map((pick) => (
          <Link
            key={pick.href}
            href={pick.href}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-36 overflow-hidden sm:h-40">
              <Image
                src={pick.image}
                alt=""
                fill
                unoptimized={!pick.image.startsWith("/")}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a33]/70 via-[#0c1a33]/10 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#8a7349]">
                {pick.meta}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-4 sm:gap-2">
              <h3 className="text-sm font-bold leading-snug text-[#0c1a33] group-hover:text-[#8a7349] sm:text-base">
                {pick.title}
              </h3>
              {pick.lines.map((line, i) => (
                <p
                  key={i}
                  className="line-clamp-1 text-xs leading-relaxed text-[#64748b] sm:text-sm"
                >
                  {line}
                </p>
              ))}
              <div className="mt-auto border-t border-[#f1f5f9] pt-3">
                <HomeCardCtaButton label={copy.readMore} variant="living" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
