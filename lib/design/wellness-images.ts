import { beachesImages } from "@/lib/design/beaches-images";
import { exploreImages } from "@/lib/design/explore-images";

/** Wellness zone cards — same order as `getWellnessZones` items */
export const wellnessZoneImages = [
  exploreImages.auraSanctuary,
  exploreImages.centralFestival,
  beachesImages.jomtien,
  beachesImages.pratumnak,
] as const;

/** Wellness day plan cards — same order as `getWellnessDayPlans` items */
export const wellnessDayPlanImages = [
  beachesImages.jomtien,
  beachesImages.pratumnak,
  exploreImages.centralFestival,
] as const;

/** Spa guide tips — same order as `getWellnessTips` items (HTTP 200 verified) */
export const wellnessTipImages = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
] as const;

export const wellnessHeroImage = exploreImages.auraSanctuary;
