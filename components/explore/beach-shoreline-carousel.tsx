"use client";

import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import {
  beachToGuideCard,
  type BeachCardData,
  type BeachDetailLabels,
} from "@/components/explore/beach-card";
import { useLanguage } from "@/components/layout/language-provider";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { getMainBeachesPage } from "@/lib/i18n/messages/explore-beaches";

type BeachShorelineCarouselProps = {
  beaches: BeachCardData[];
  title?: string;
  description?: string;
  prevLabel?: string;
  nextLabel?: string;
  detailLabels?: BeachDetailLabels;
};

export function BeachShorelineCarousel({
  beaches,
  title,
  description,
  prevLabel,
  nextLabel,
  detailLabels,
}: BeachShorelineCarouselProps) {
  const { language } = useLanguage();
  const page = getMainBeachesPage(language);
  const c = getExploreCommon(language);
  const labels = detailLabels ?? {
    bestFor: c.bestFor,
    access: c.access,
    water: c.water,
  };

  return (
    <ExploreGuideCarousel
      title={title ?? page.carousel.title}
      description={description ?? page.carousel.description}
      prevLabel={prevLabel ?? page.carousel.prev}
      nextLabel={nextLabel ?? page.carousel.next}
      items={beaches.map((beach) => beachToGuideCard(beach, labels))}
    />
  );
}
