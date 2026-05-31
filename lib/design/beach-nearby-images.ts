import { beachesImages } from "@/lib/design/beaches-images";
import { exploreImages } from "@/lib/design/explore-images";
import { newsImages } from "@/lib/design/news-images";
import type { BeachDetailSlug } from "@/lib/explore/beach-detail-slugs";

/** Three nearby-spot images per beach detail page (same order as `nearby.items`) */
export const beachNearbyImages: Record<BeachDetailSlug, readonly [string, string, string]> = {
  "pattaya-beach": [
    "/images/explore/walking-street.png",
    exploreImages.centralFestival,
    "/images/explore/pattaya-city-sign.png",
  ],
  jomtien: [
    exploreImages.thepprasitMarket,
    beachesImages.dongtan,
    "/images/explore/pattaya-floating-market.png",
  ],
  dongtan: [
    beachesImages.jomtien,
    exploreImages.thepprasitMarket,
    exploreImages.aquaverse,
  ],
  naklua: [
    exploreImages.weekendGuide,
    exploreImages.thepprasitMarket,
    beachesImages.wongAmat,
  ],
  wongamat: [
    newsImages.sanctuary,
    beachesImages.naklua,
    exploreImages.skyGallery,
  ],
  pratumnak: [
    beachesImages.pratumnak,
    exploreImages.caveBeachClub,
    exploreImages.coralCoast,
  ],
};
