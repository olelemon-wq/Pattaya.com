import { exploreImages } from "@/lib/design/explore-images";
import { images } from "@/lib/design/images";

/** Koh Larn page imagery — all URLs verified HTTP 200 */
export const kohLarnImages = {
  hero: exploreImages.islandHopping,
  snorkeling: images.guideYacht,
  islandTour:
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80",
  jetski: images.guideBeach,
  parasailing:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  beachTaWan: images.guideBeach,
  beachNual: exploreImages.skyGallery,
  beachTien: exploreImages.caveBeachClub,
  restaurant: images.guideDining,
  hotel: images.guideInterior,
} as const;
