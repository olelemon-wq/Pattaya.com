import type { ShoppingMarketImageId } from "@/lib/design/shopping-market-images";

export type MarketMapPin = {
  id: ShoppingMarketImageId;
  lat: number;
  lng: number;
  shortLabel: string;
};

/** Pattaya-area markets — coordinates from Google Maps (approx.) */
export const marketMapPins: MarketMapPin[] = [
  { id: "thepprasit", lat: 12.89694, lng: 100.87461, shortLabel: "Thepprasit" },
  { id: "pattaya-park", lat: 12.91583, lng: 100.86778, shortLabel: "Pattaya Park" },
  { id: "buakhao", lat: 12.92972, lng: 100.88861, shortLabel: "Buakhao" },
  { id: "old-naklua", lat: 12.95806, lng: 100.90472, shortLabel: "Old Market" },
  { id: "jomtien-cooked", lat: 12.8775, lng: 100.8725, shortLabel: "Jomtien food" },
  { id: "pattaya-klang", lat: 12.93639, lng: 100.88417, shortLabel: "Pattaya Klang" },
  { id: "ang-sila", lat: 13.34722, lng: 100.93194, shortLabel: "Ang Sila" },
  { id: "klongtom", lat: 12.9312, lng: 100.9012, shortLabel: "Klongtom" },
  { id: "tree-market", lat: 12.97139, lng: 100.90583, shortLabel: "Tree Market" },
  { id: "floating", lat: 12.8675, lng: 100.90556, shortLabel: "Floating" },
  { id: "night-bazaar", lat: 12.93528, lng: 100.88472, shortLabel: "Night Bazaar" },
  { id: "made-in-thailand", lat: 12.93778, lng: 100.89444, shortLabel: "Made in TH" },
];

export const marketMapPinById = Object.fromEntries(
  marketMapPins.map((p) => [p.id, p]),
) as Record<ShoppingMarketImageId, MarketMapPin>;

export const marketsMapOpenHref =
  "https://www.google.com/maps/search/night+market+and+local+market+in+Pattaya+Chonburi/@12.93,100.89,12z";

export const MARKET_MAP_PIN_COLOR = "#B52E88";
export const HIDDEN_MARKET_MAP_PIN_COLOR = "#2d6a4f";

export function marketGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
