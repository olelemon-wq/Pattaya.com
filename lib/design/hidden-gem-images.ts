import { beachesImages } from "@/lib/design/beaches-images";
import { exploreImages } from "@/lib/design/explore-images";

/** Hidden gem spot cards — same order as `getHiddenGemsSpots` items */
export const hiddenGemSpotImages = [
  beachesImages.naklua,
  beachesImages.pratumnak,
  beachesImages.wongAmat,
  beachesImages.dongtan,
] as const;

/** Slow walk day plans — same order as `getHiddenGemsWalkPlans` items */
export const hiddenGemWalkPlanImages = [
  beachesImages.naklua,
  beachesImages.pratumnak,
  beachesImages.wongAmat,
] as const;

/** Explorer guide tips — same order as `getHiddenGemsTips` items (HTTP 200 verified) */
export const hiddenGemTipImages = [
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80",
] as const;

export const hiddenGemsHeroImage = exploreImages.hiddenSpots;
