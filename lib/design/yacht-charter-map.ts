export type YachtCharterPinId =
  | "ocean-marina"
  | "bali-hai"
  | "pattaya-yacht-charters"
  | "we-charters"
  | "manta-marina"
  | "sailbreeze"
  | "blue-voyage"
  | "best-yacht-club";

export type YachtCharterPin = {
  id: YachtCharterPinId;
  lat: number;
  lng: number;
  shortLabel: string;
};

/** Pattaya yacht operators & piers — coordinates approximate (Google Maps) */
export const yachtCharterPins: YachtCharterPin[] = [
  { id: "ocean-marina", lat: 12.8482, lng: 100.9015, shortLabel: "Marina" },
  { id: "bali-hai", lat: 12.9283, lng: 100.8675, shortLabel: "Bali Hai" },
  { id: "pattaya-yacht-charters", lat: 12.8484, lng: 100.9018, shortLabel: "PYC" },
  { id: "we-charters", lat: 12.848, lng: 100.9012, shortLabel: "WE" },
  { id: "sailbreeze", lat: 12.8486, lng: 100.902, shortLabel: "Sail" },
  { id: "blue-voyage", lat: 12.8478, lng: 100.901, shortLabel: "Blue" },
  { id: "manta-marina", lat: 12.9365, lng: 100.8835, shortLabel: "Manta" },
  { id: "best-yacht-club", lat: 12.935, lng: 100.89, shortLabel: "Best" },
];

export const yachtCharterPinById = Object.fromEntries(
  yachtCharterPins.map((p) => [p.id, p]),
) as Record<YachtCharterPinId, YachtCharterPin>;

export const yachtChartersMapOpenHref =
  "https://www.google.com/maps/search/yacht+charter+Ocean+Marina+Pattaya/@12.89,100.88,11z";

export const YACHT_MAP_PIN_COLOR = "#455f88";

export function yachtGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
