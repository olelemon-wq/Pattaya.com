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
      imageAlt="Pattaya smart city skyline and coastline at twilight"
      href="/living/visa/retirement"
      category={t(language, livingHero.category)}
      featuredLabel={t(language, livingHero.featured)}
      title={t(language, livingHero.title)}
      excerpt={t(language, livingHero.excerpt)}
      ctaLabel={t(language, livingHero.cta)}
      ctaTone="living"
      visualTone="neo-smart-city"
      showAiSummary={false}
      minHeightClass="min-h-[min(70dvh,400px)] sm:min-h-[500px] lg:min-h-[560px]"
    />
  );
}
