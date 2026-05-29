import { exploreImages } from "@/lib/design/explore-images";
import { images } from "@/lib/design/images";

/** Fine Dining page — verified HTTP 200 image URLs */
export const fineDiningImages = {
  hero: images.guideDining,
  featuredMantra: exploreImages.caveBeachClub,
  featuredSkyGallery: exploreImages.skyGallery,
  featuredHorizon: exploreImages.auraSanctuary,
  collectionSunset: exploreImages.skyGallery,
  collectionRooftop: images.heroCityNight,
  collectionChefsTable: images.guideDining,
  guideDressCode: images.guideInterior,
  guideSunset: exploreImages.skyGallery,
  guideEtiquette: exploreImages.cafeLifestyle,
  guideOccasion: exploreImages.hiddenSpots,
} as const;
