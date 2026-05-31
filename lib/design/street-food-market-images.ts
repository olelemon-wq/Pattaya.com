import { beachesImages } from "@/lib/design/beaches-images";
import { exploreImages } from "@/lib/design/explore-images";

/** Market zone cards — same order as `getStreetFoodMarkets` items */
export const streetFoodMarketImages = [
  exploreImages.thepprasitMarket,
  beachesImages.naklua,
  beachesImages.jomtien,
  "/images/explore/walking-street.png",
] as const;

export const streetFoodTipImages = [
  exploreImages.thepprasitMarket,
  exploreImages.cafeLifestyle,
  exploreImages.weekendGuide,
  exploreImages.coralCoast,
] as const;
