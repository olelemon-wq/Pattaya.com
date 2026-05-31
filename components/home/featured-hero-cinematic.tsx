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
      imageAlt={hero.imageAlt}
      href="/news/local-news/infrastructure"
      category={hero.category}
      featuredLabel={hero.featured}
      title={hero.title}
      excerpt={hero.excerpt}
      ctaLabel={hero.cta}
      ctaTone="news"
      visualTone="news-dawn"
      showAiSummary={false}
      byline={hero.byline}
      minHeightClass="min-h-[min(56dvh,360px)] sm:min-h-[420px] lg:min-h-[480px]"
    />
  );
}
