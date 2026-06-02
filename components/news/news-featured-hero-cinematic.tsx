"use client";

import { FeaturedHeroCinematic } from "@/components/cinematic/featured-hero-cinematic";
import { useLanguage } from "@/components/layout/language-provider";
import { newsHero, tNewsHero } from "@/lib/i18n/messages/news-hub";
import { t } from "@/lib/i18n/living-helpers";
import { newsImages } from "@/lib/design/news-images";

export function NewsFeaturedHeroCinematic() {
  const { language } = useLanguage();

  return (
    <FeaturedHeroCinematic
      image={newsImages.newsHubHero}
      imageAlt={t(language, newsHero.imageAlt)}
      href="/news/local-news/city-updates"
      category={tNewsHero(language, "category")}
      featuredLabel={t(language, newsHero.featured)}
      title={tNewsHero(language, "title")}
      excerpt={tNewsHero(language, "excerpt")}
      ctaLabel={tNewsHero(language, "cta")}
      ctaTone="news"
      visualTone="news-dawn"
      showAiSummary={false}
      minHeightClass="min-h-[min(56dvh,360px)] sm:min-h-[420px] lg:min-h-[480px]"
      byline={tNewsHero(language, "byline")}
    />
  );
}
