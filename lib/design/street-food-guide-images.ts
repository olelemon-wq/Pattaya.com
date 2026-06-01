import { shoppingMarketImagesById } from "@/lib/design/shopping-market-images";
import type { StreetFoodMapPinId } from "@/lib/design/street-food-guide-map";

export type StreetFoodImageId = StreetFoodMapPinId;

export const streetFoodGuideImages: Record<StreetFoodImageId, string> = {
  thepprasit: "/images/explore/street-food-thepprasit.png",
  "noen-plub-wan": "/images/explore/hidden-noen-plub-wan.jpg",
  "lan-pho-naklua": "/images/explore/street-food-lan-pho-naklua.png",
  "soi-buakhao": "/images/explore/street-food-soi-buakhao.png",
  "wat-chai-mongkhon": "/images/explore/street-food-wat-chai-mongkhon.png",
  "pattaya-park": shoppingMarketImagesById["pattaya-park"],
};

export function getStreetFoodGuideImage(id: StreetFoodImageId): string {
  return streetFoodGuideImages[id];
}
