"use client";

import type { ReactNode } from "react";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { BeachMapEmbed } from "@/components/explore/beach-map-embed";
import { BeachWhenSlots } from "@/components/explore/beach-when-slots";
import { useLanguage } from "@/components/layout/language-provider";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { beachesImages } from "@/lib/design/beaches-images";
import type { BeachDetailSlug } from "@/lib/explore/beach-detail-slugs";
import { getBeachDetailPage } from "@/lib/i18n/messages/explore-beach-detail";
import {
  ArrowLeft,
  MapPin,
  Navigation,
  Shield,
  Users,
  Wallet,
  Waves,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const detailImages: Record<BeachDetailSlug, string> = {
  "pattaya-beach": beachesImages.pattayaBeach,
  jomtien: beachesImages.jomtien,
  dongtan: beachesImages.dongtan,
  naklua: beachesImages.naklua,
  wongamat: beachesImages.wongAmat,
  pratumnak: beachesImages.pratumnak,
};

function SummaryRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-[#c4c7c8]/30 bg-white p-4 shadow-sm">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#B52E88]" aria-hidden />
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-[#747878]">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-[#191c1d]">{value}</p>
      </div>
    </div>
  );
}

function SectionBlock({
  title,
  children,
  className = "",
  plainBody = false,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  plainBody?: boolean;
}) {
  return (
    <section
      className={`rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      <h2 className="text-xl font-semibold text-[#191c1d] md:text-2xl">{title}</h2>
      <div
        className={
          plainBody
            ? "mt-4 flex-1"
            : "mt-4 space-y-4 text-sm leading-relaxed text-[#444748]"
        }
      >
        {children}
      </div>
    </section>
  );
}

export function BeachDetailPage({ slug }: { slug: BeachDetailSlug }) {
  const { language } = useLanguage();
  const page = getBeachDetailPage(language, slug);
  const image = detailImages[slug];

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(55vh,480px)] overflow-hidden md:min-h-[min(60vh,520px)]"
        aria-labelledby="beach-detail-title"
      >
        <Image
          src={image}
          alt={page.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/55 via-[#191c1d]/35 to-[#191c1d]/85"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(55vh,480px)] max-w-[1280px] flex-col justify-end px-4 pb-12 pt-16 md:min-h-[min(60vh,520px)] lg:px-6 md:pb-14">
          <nav aria-label={tSiteUi(language, "breadcrumb")} className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
              <li>
                <Link href="/explore" className="hover:text-white">
                  {page.breadcrumb.explore}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/explore/beaches" className="hover:text-white">
                  {page.breadcrumb.beaches}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">{page.breadcrumb.current}</span>
              </li>
            </ol>
          </nav>
          <div className="mb-3 flex flex-wrap gap-2">
            {page.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white ring-1 ring-white/25 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 id="beach-detail-title" className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
            {page.hero.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-10 px-4 py-12 lg:px-6 md:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <SummaryRow icon={Users} label={page.summary.bestFor.label} value={page.summary.bestFor.value} />
          <SummaryRow
            icon={Navigation}
            label={page.summary.access.label}
            value={page.summary.access.value}
          />
          <SummaryRow icon={Waves} label={page.summary.water.label} value={page.summary.water.value} />
        </div>

        <figure className="overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-md">
          <div className="relative aspect-[21/9] w-full sm:aspect-[2/1]">
            <Image
              src={image}
              alt={page.photo.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#191c1d]/40 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-4 left-5 right-5 md:bottom-6 md:left-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                {page.photo.title}
              </p>
            </div>
          </div>
          <figcaption className="border-t border-[#e7e8e9] px-5 py-4 text-sm leading-relaxed text-[#444748] sm:px-8 sm:py-5">
            {page.photo.caption}
          </figcaption>
        </figure>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <SectionBlock
            title={page.whenToVisit.title}
            className="flex h-full flex-col"
            plainBody
          >
            <BeachWhenSlots slots={page.whenToVisit.slots} />
          </SectionBlock>

          <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm">
            <div className="border-b border-[#e7e8e9] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-[#191c1d] md:text-2xl">{page.map.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#444748]">{page.map.body}</p>
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <BeachMapEmbed
                title={page.map.locationLabel}
                embedSrc={page.map.embedSrc}
                openHref={page.map.mapsUrl}
                openLabel={page.map.openMaps}
                embedAria={page.map.embedAria}
              />
            </div>
          </section>
        </div>

        <SectionBlock title={page.nearby.title}>
          <ul className="grid gap-5 sm:grid-cols-3">
            {page.nearby.items.map((item) => (
              <li
                key={item.name}
                className="overflow-hidden rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full bg-[#e7e8e9]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <div className="p-4">
                  <p className="flex items-start gap-2 font-bold text-[#191c1d]">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
                    {item.name}
                  </p>
                  <p className="mt-2 pl-6 text-sm leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionBlock title={page.costs.title}>
            <ul className="space-y-3">
              {page.costs.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={page.safety.title}>
            <ul className="space-y-3">
              {page.safety.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>
        </div>

        <section>
          <h2 className="text-xl font-semibold md:text-2xl">{page.related.title}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {page.related.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[#c4c7c8]/30 bg-white p-5 shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md"
              >
                <p className="font-bold text-[#B52E88]">{link.label}</p>
                <p className="mt-2 text-sm text-[#444748]">{link.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        <Link
          href="/explore/beaches"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#B52E88] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {page.backToAll}
        </Link>
      </div>
    </div>
  );
}
