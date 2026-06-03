"use client";

import {
  Anchor,
  Clock,
  Coffee,
  Film,
  Gem,
  MapPin,
  Navigation,
  Soup,
  Sparkles,
  Store,
  Users,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type {
  ExploreGuideCardData,
  ExploreGuideDetail,
  GuideIconName,
} from "@/components/explore/explore-guide-types";

export type { ExploreGuideCardData, ExploreGuideDetail, GuideIconName };

const guideIcons: Record<GuideIconName, LucideIcon> = {
  clock: Clock,
  mapPin: MapPin,
  film: Film,
  coffee: Coffee,
  soup: Soup,
  users: Users,
  navigation: Navigation,
  waves: Waves,
  store: Store,
  anchor: Anchor,
  sparkles: Sparkles,
  gem: Gem,
};

function GuideTag({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-[#B52E88]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#B52E88]">
      {children}
    </span>
  );
}

function GuideDetailRow({ icon, label, value }: ExploreGuideDetail) {
  const Icon = guideIcons[icon];
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
      <div className="min-w-0">
        <dt className="font-bold uppercase tracking-wide text-[#747878]">
          {label}
        </dt>
        <dd className="mt-0.5 text-[#191c1d]">{value}</dd>
      </div>
    </div>
  );
}

export function ExploreGuideCard({
  id,
  name,
  nameTh,
  image,
  tags,
  excerpt,
  details,
  href,
  ctaLabel,
}: ExploreGuideCardData) {
  const imageBlock = (
    <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 1024px) 85vw, 33vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#191c1d]/50 to-transparent"
        aria-hidden
      />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-xl font-bold text-white drop-shadow-sm">{name}</h3>
        {nameTh && nameTh !== name ? (
          <p className="text-sm text-white/90">{nameTh}</p>
        ) : null}
      </div>
    </div>
  );

  return (
    <article
      id={id}
      className="group flex h-full min-h-full w-full flex-1 flex-col overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm transition hover:shadow-lg"
    >
      {href ? (
        <Link href={href} className="block shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88]">
          {imageBlock}
        </Link>
      ) : (
        imageBlock
      )}
      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <GuideTag key={tag}>{tag}</GuideTag>
          ))}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-[#444748]">{excerpt}</p>
        <dl className="space-y-3 border-t border-[#e7e8e9] pt-4 text-xs">
          {details.map((detail) => (
            <GuideDetailRow key={detail.label} {...detail} />
          ))}
        </dl>
        {href && ctaLabel ? (
          <div className="mt-auto pt-4">
            <Link
              href={href}
              className="inline-flex w-fit items-center text-sm font-semibold text-[#B52E88] transition hover:underline"
            >
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
