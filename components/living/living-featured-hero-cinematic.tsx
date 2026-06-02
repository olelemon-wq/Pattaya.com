"use client";

import { FeaturedHeroCinematic } from "@/components/cinematic/featured-hero-cinematic";
import { useLanguage } from "@/components/layout/language-provider";
import { livingHero } from "@/lib/i18n/messages/living/hub";
import { t } from "@/lib/i18n/living-helpers";
import { livingImages } from "@/lib/design/living-images";

export function LivingFeaturedHeroCinematic() {
  const { language } = useLanguage();

  return (
    <FeaturedHeroCinematic
      image={livingImages.heroHub}
      imageAlt={t(language, livingHero.imageAlt)}
      href="/living/visa/retirement"
      category={t(language, livingHero.category)}
      featuredLabel={t(language, livingHero.featured)}
      title={t(language, livingHero.title)}
      excerpt={t(language, livingHero.excerpt)}
      ctaLabel={t(language, livingHero.cta)}
      ctaTone="living"
      visualTone="neo-smart-city"
      showAiSummary={false}
      minHeightClass="min-h-[min(56dvh,360px)] sm:min-h-[420px] lg:min-h-[480px]"
    />
  );
}
