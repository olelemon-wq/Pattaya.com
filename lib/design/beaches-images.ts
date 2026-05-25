import { exploreImages } from "@/lib/design/explore-images";

/** Pattaya main beaches — hero & cards (Stitch explore + curated) */
export const beachesImages = {
  hero: exploreImages.hero,
  pattayaBeach: exploreImages.hero,
  jomtien: exploreImages.cafeLifestyle,
  dongtan: exploreImages.islandHopping,
  naklua: exploreImages.thepprasitMarket,
  wongAmat: exploreImages.skyGallery,
  pratumnak: exploreImages.caveBeachClub,
  activities:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
} as const;
