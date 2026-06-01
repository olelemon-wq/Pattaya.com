import { exploreImages } from "@/lib/design/explore-images";

/** Per-market hero images for the local markets guide */
export const shoppingMarketImagesById = {
  thepprasit: "/images/explore/market-thepprasit-night.png",
  "pattaya-park": "/images/explore/market-pattaya-park.png",
  buakhao: "/images/explore/market-buakhao.jpg",
  "old-naklua": "/images/explore/market-naklua-fresh.png",
  "jomtien-cooked": "/images/explore/market-jomtien-cooked.jpg",
  "pattaya-klang": "/images/explore/market-pattaya-klang.png",
  "ang-sila": "/images/explore/market-ang-sila.jpg",
  klongtom: "/images/explore/market-klongtom.jpg",
  "tree-market": "/images/explore/market-tree-market.jpg",
  floating: "/images/explore/pattaya-floating-market.png",
  "night-bazaar": "/images/explore/walking-street.png",
  "made-in-thailand": exploreImages.thepprasitMarket,
} as const;

export type ShoppingMarketImageId = keyof typeof shoppingMarketImagesById;

/** @deprecated Use shoppingMarketImagesById — kept for tip card order */
export const shoppingMarketImages = [
  shoppingMarketImagesById.thepprasit,
  shoppingMarketImagesById["old-naklua"],
  shoppingMarketImagesById.floating,
  shoppingMarketImagesById["made-in-thailand"],
] as const;
