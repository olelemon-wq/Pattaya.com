import { exploreImages } from "@/lib/design/explore-images";
import { images } from "@/lib/design/images";

/** Koh Larn page imagery — all URLs verified HTTP 200 */
export const kohLarnImages = {
  hero: "/images/explore/koh-larn-hero.jpg",
  snorkeling: images.guideYacht,
  islandTour:
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80",
  jetski: images.guideBeach,
  parasailing:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  beachTaWan: "/images/explore/koh-larn-tawaen-beach.png",
  beachSamae: "/images/explore/koh-larn-samae-beach.png",
  beachNual: "/images/explore/koh-larn-nual-beach.png",
  beachTien: "/images/explore/koh-larn-tien-beach.png",
  restaurant: images.guideDining,
  hotel: images.guideInterior,
} as const;
