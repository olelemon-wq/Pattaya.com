"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeGuide } from "@/lib/i18n/messages/home-hub";
import { kohLarnImages } from "@/lib/design/koh-larn-images";
import { images } from "@/lib/design/images";

const guideImages = [
  kohLarnImages.hero,
  images.guideDining,
  images.guideInterior,
  images.guideYacht,
];

export function PattayaGuideSection() {
  const { language } = useLanguage();
  const guide = getHomeGuide(language);

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-8 lg:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0c1a33]">{guide.title}</h2>
          <p className="mt-1 text-sm text-[#64748b]">{guide.subtitle}</p>
        </div>
        <Link href="/guide" className="text-sm font-bold text-[#f97316] hover:underline">
          {guide.exploreAll}
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guide.guides.map((item, i) => {
          const imageSrc = guideImages[i];
          const isLocalAsset = imageSrc.startsWith("/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className="group overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={item.title}
                  fill
                  unoptimized={isLocalAsset}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold leading-snug text-[#0c1a33] group-hover:text-[#f97316]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[10px] font-bold tracking-wide text-[#94a3b8]">
                  {item.meta}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
