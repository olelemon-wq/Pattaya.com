"use client";

import { FeaturedHeroCinematic as CinematicHero } from "@/components/cinematic/featured-hero-cinematic";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeHero } from "@/lib/i18n/messages/home-hub";
import { homeImages } from "@/lib/design/home-images";

export function FeaturedHeroCinematic() {
  const { language } = useLanguage();
  const hero = getHomeHero(language);

  return (
    <CinematicHero
      image={homeImages.neoPattayaHero}
      imageAlt="Aerial view of Pattaya at blue hour"
      href="/news/local-news/infrastructure"
      category={hero.category}
      title={hero.title}
      excerpt={hero.excerpt}
      visualTone="neo-smart-city"
      minHeightClass="min-h-[min(78dvh,440px)] sm:min-h-[520px] lg:min-h-[580px]"
    />
  );
}
