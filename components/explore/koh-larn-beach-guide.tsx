"use client";

import {
  Camera,
  MapPin,
  Palmtree,
  Ship,
  Users,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { kohLarnImages } from "@/lib/design/koh-larn-images";
import { getKohLarnPage } from "@/lib/i18n/messages/explore-koh-larn";

const beachImages = {
  tawaen: kohLarnImages.beachTaWan,
  nual: kohLarnImages.beachNual,
  tien: kohLarnImages.beachTien,
} as const;

const featureIcons: Record<string, LucideIcon[]> = {
  tawaen: [Waves, UtensilsCrossed, Ship],
  nual: [Waves, Palmtree, Camera],
  tien: [Waves, UtensilsCrossed, Camera],
};

function BeachMetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 text-sm">
      <span className="w-28 shrink-0 font-semibold text-[#747878] sm:w-32">{label}</span>
      <span className="text-[#191c1d]">{value}</span>
    </div>
  );
}

export function KohLarnBeachGuide() {
  const { language } = useLanguage();
  const page = getKohLarnPage(language);
  const beaches = page.beachGuide.beaches;
  const meta = page.beachGuide.meta;

  const [activeId, setActiveId] = useState<(typeof beaches)[number]["id"]>(beaches[0]?.id ?? "tawaen");
  const active = beaches.find((b) => b.id === activeId) ?? beaches[0];
  const icons = featureIcons[active.id] ?? [Waves, Camera, Palmtree];

  return (
    <section
      id="beach-guide"
      className="scroll-mt-24 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="beach-guide-title"
    >
      <h2
        id="beach-guide-title"
        className="text-2xl font-semibold tracking-tight text-[#191c1d] md:text-3xl"
      >
        {page.beachGuide.title}
      </h2>
      <p className="mt-2 text-sm text-[#747878] sm:text-base">{page.beachGuide.subtitle}</p>

      <div
        role="tablist"
        aria-label={page.beachGuide.tablistLabel}
        className="mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {beaches.map((beach) => {
          const selected = beach.id === activeId;
          return (
            <button
              key={beach.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`beach-panel-${beach.id}`}
              id={`beach-tab-${beach.id}`}
              onClick={() => setActiveId(beach.id)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                selected
                  ? "bg-[#B52E88] text-white shadow-md ring-1 ring-[#B52E88]/15"
                  : "bg-[#fdf8fb] text-[#191c1d] ring-1 ring-[#c4c7c8]/40 hover:bg-[#B52E88]/10"
              }`}
            >
              {beach.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`beach-panel-${active.id}`}
        aria-labelledby={`beach-tab-${active.id}`}
        className="mt-6 grid gap-6 md:grid-cols-2 md:items-start"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={beachImages[active.id]}
            alt={active.label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#191c1d]">{active.label}</h3>
          <p className="mt-3 leading-relaxed text-[#444748]">{active.description}</p>

          <dl className="mt-4 space-y-2 rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] p-4">
            <BeachMetaRow label={meta.bestFor} value={active.bestFor} />
            <BeachMetaRow label={meta.crowd} value={active.crowd} />
            <div className="flex gap-2 text-sm">
              <span className="flex w-28 shrink-0 items-center gap-1 font-semibold text-[#747878] sm:w-32">
                <Users className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {meta.access}
              </span>
              <span className="text-[#191c1d]">{active.access}</span>
            </div>
          </dl>

          <ul className="mt-4 flex flex-wrap gap-2">
            {active.features.map((feature, i) => {
              const Icon = icons[i] ?? Waves;
              return (
                <li
                  key={feature}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#B52E88]/10 px-3 py-1.5 text-sm font-medium text-[#191c1d] ring-1 ring-[#B52E88]/15"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
                  {feature}
                </li>
              );
            })}
          </ul>

          <a
            href={active.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B52E88] hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {meta.openMaps}
          </a>
        </div>
      </div>
    </section>
  );
}
