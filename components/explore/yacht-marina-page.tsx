"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { useLanguage } from "@/components/layout/language-provider";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { getYachtPage } from "@/lib/i18n/messages/explore-yacht";
import { yachtImages } from "@/lib/design/yacht-images";
import { Anchor, Building2, Palmtree, Sunset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routeIcons = [Sunset, Palmtree, Anchor] as const;

export function YachtMarinaPage() {
  const { language } = useLanguage();
  const c = getExploreCommon(language);
  const page = getYachtPage(language);

  const charterGuideCards: ExploreGuideCardData[] = page.charters.map((charter) => ({
    id: charter.id,
    name: charter.name,
    nameTh: charter.nameTh,
    image: charter.image,
    tags: charter.tags,
    excerpt: charter.excerpt,
    details: [
      { icon: "anchor", label: c.vessel, value: charter.type },
      { icon: "users", label: c.capacity, value: charter.guests },
      { icon: "sparkles", label: c.price, value: charter.price },
    ],
  }));

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="yacht-hero-title"
      >
        <Image
          src={yachtImages.hero}
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
        <div className="relative mx-auto flex min-h-[min(65vh,480px)] max-w-[1280px] flex-col justify-end px-5 pb-14 pt-20 md:px-16 md:pb-16">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
              <li>
                <Link href="/explore" className="hover:text-white">
                  {page.breadcrumb.explore}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/80">{page.breadcrumb.luxury}</span>
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
            id="yacht-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title={page.carousel.title}
          description={page.carousel.description}
          prevLabel={page.carousel.prev}
          nextLabel={page.carousel.next}
          items={charterGuideCards}
        />

        <section className="mb-16 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">{page.routes.title}</h2>
          <p className="mt-1 text-sm text-[#747878]">{page.routes.subtitle}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.routes.items.map((route, i) => {
              const Icon = routeIcons[i] ?? Anchor;
              return (
                <Link
                  key={route.title}
                  href={route.href}
                  className="group flex gap-4 rounded-2xl border border-[#c4c7c8]/30 bg-[#fdf8fb] p-5 transition hover:border-[#B52E88]/30 hover:shadow-md sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#B52E88]/10 text-[#B52E88] transition group-hover:bg-[#B52E88] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#191c1d] group-hover:text-[#B52E88]">
                        {route.title}
                      </h3>
                      <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#747878] ring-1 ring-[#c4c7c8]/40">
                        {route.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#444748]">
                      {route.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-16 overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src={yachtImages.marina}
                alt={page.marina.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B52E88]/10 text-[#B52E88]">
                <Building2 className="h-7 w-7" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#B52E88]">
                {page.marina.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#191c1d] md:text-3xl">
                {page.marina.title}
              </h2>
              <p className="mt-4 leading-relaxed text-[#444748]">{page.marina.body}</p>
              <ul className="mt-6 space-y-3">
                {page.marina.amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#444748]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B52E88]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={yachtImages.marinaLifestyle}
                  alt={page.marina.title}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-[#191c1d] px-6 py-10 text-center sm:px-12 sm:py-12">
          <h2 className="text-xl font-bold text-white md:text-2xl">{page.cta.title}</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">{page.cta.body}</p>
          <Link
            href={page.cta.href}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#B52E88] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#B52E88]/90"
          >
            {page.cta.button}
          </Link>
        </section>
      </div>
    </div>
  );
}
