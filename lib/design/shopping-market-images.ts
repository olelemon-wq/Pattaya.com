import { beachesImages } from "@/lib/design/beaches-images";
import { exploreImages } from "@/lib/design/explore-images";

/** Shopping market cards — same order as `getShoppingMarketsList` items */
export const shoppingMarketImages = [
  exploreImages.thepprasitMarket,
  beachesImages.naklua,
  "/images/explore/pattaya-floating-market.png",
  exploreImages.thepprasitMarket,
] as const;

/** Market guide tips — same order as `getMarketTips` items (HTTP 200 verified) */
export const shoppingMarketTipImages = [
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
] as const;
