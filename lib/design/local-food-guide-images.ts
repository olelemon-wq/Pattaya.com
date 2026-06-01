import type { LocalFoodMapPinId } from "@/lib/design/local-food-map";

export type LocalFoodImageId = LocalFoodMapPinId;

export const localFoodGuideImages: Record<LocalFoodImageId, string> = {
  "tai-thong-seafood": "/images/explore/local-food-tai-thong-seafood.png",
  "krua-nai-baan": "/images/explore/local-food-krua-nai-baan.png",
  "lan-pho-naklua": "/images/explore/hidden-lan-pho-naklua.jpg",
  "somtam-tid-zaeb": "/images/explore/local-food-somtam-tid-zaeb.png",
  "jaroenlin": "/images/explore/local-food-jaroenlin.png",
  "khrua-ban-por-ta": "/images/explore/local-food-khrua-ban-por-ta.png",
};

export function getLocalFoodGuideImage(id: LocalFoodImageId): string {
  return localFoodGuideImages[id];
}
