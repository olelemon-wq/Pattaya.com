import type { CafeMapPinId } from "@/lib/design/cafes-map";

export type CafeImageId = CafeMapPinId;

const cafeGuideImages: Record<CafeImageId, string> = {
  "lunar-beach-house": "/images/explore/cafe-lunar-beach-house.png",
  "siris-beach-cafe": "/images/explore/cafe-siris-beach-cafe.png",
  "smore-beach-cafe": "/images/explore/cafe-smore-beach-cafe.png",
  "sunset-coffee-roasters": "/images/explore/cafe-sunset-coffee-roasters.png",
  "albatross-coffee": "/images/explore/cafe-albatross-coffee.png",
  "squid-coffee": "/images/explore/cafe-squid-coffee.png",
  "backstreet-house": "/images/explore/cafe-backstreet-house.png",
  "sheeva-cafe": "/images/explore/cafe-sheeva-cafe.png",
  "vanvela-cafe": "/images/explore/cafe-vanvela-cafe.png",
};

export function getCafeGuideImage(id: CafeImageId): string {
  return cafeGuideImages[id];
}
