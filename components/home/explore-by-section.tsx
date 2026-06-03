"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeExploreSections } from "@/lib/i18n/messages/home-hub";
import { businessImages } from "@/lib/design/business-images";
import { exploreImages } from "@/lib/design/explore-images";
import { livingImages } from "@/lib/design/living-images";
import { newsImages } from "@/lib/design/news-images";

type SectionId = "news" | "living" | "explore" | "business";

const sectionImages: Record<SectionId, string> = {
  news: newsImages.newsHubHero,
  living: livingImages.heroHub,
  explore: exploreImages.hero,
  business: businessImages.hero,
};

const statColors: Record<SectionId, string> = {
  news: "text-[#10438f]",
  living: "text-[#8a7349]",
  explore: "text-[#B52E88]",
  business: "text-[#0c1a33]",
};

export function ExploreBySection() {
  const { language } = useLanguage();
  const { title, sections } = getHomeExploreSections(language);

  return (
    <section
      aria-labelledby="explore-sections-heading"
      className="home-section-reveal mx-auto max-w-[1280px] px-4 lg:px-6"
      style={{ animationDelay: "160ms" }}
    >
      <div className="mb-5 flex items-end gap-3">
        <h2
          id="explore-sections-heading"
          className="text-lg font-extrabold text-[#0c1a33] sm:text-xl"
        >
          {title}
        </h2>
        <span className="mb-1 h-1 w-10 shrink-0 rounded-full bg-[#f97316]" aria-hidden />
      </div>

      <ul className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4">
        {sections.map((section) => {
          const image = sectionImages[section.id];
          const isLocalAsset = image.startsWith("/");

          return (
            <li key={section.href} className="min-w-0">
              <Link
                href={section.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none sm:rounded-2xl"
                aria-label={`${section.label}: ${section.countValue} ${section.countUnit}`}
              >
                <div className="relative aspect-[6/5] w-full shrink-0 overflow-hidden sm:aspect-[5/4]">
                  <Image
                    src={image}
                    alt={section.imageAlt}
                    fill
                    unoptimized={!isLocalAsset}
                    className="object-cover brightness-[1.04] saturate-[1.12] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 25vw, 25vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 from-30% via-black/5 to-white/10"
                    aria-hidden
                  />
                  <h3 className="absolute inset-x-0 bottom-0 px-2 pb-2 text-[11px] font-bold leading-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] sm:px-2.5 sm:text-xs">
                    {section.label}
                  </h3>
                </div>

                <div className="flex flex-col items-center justify-center px-1.5 py-2 sm:px-2 sm:py-2.5">
                  <p className={`text-xl font-extrabold tabular-nums leading-none sm:text-2xl ${statColors[section.id]}`}>
                    {section.countValue}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-center text-[8px] font-semibold uppercase tracking-wide text-[#94a3b8] sm:text-[10px]">
                    {section.countUnit}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
