export type MallMapPinId =
  | "central-pattaya"
  | "terminal-21"
  | "outlet-mall"
  | "central-marina"
  | "gems-gallery";

export type MallMapPin = {
  id: MallMapPinId;
  lat: number;
  lng: number;
  shortLabel: string;
};

/** Pattaya malls — coordinates from Google Maps (approx.) */
export const mallMapPins: MallMapPin[] = [
  { id: "central-pattaya", lat: 12.9347, lng: 100.883, shortLabel: "Central" },
  { id: "terminal-21", lat: 12.9303, lng: 100.875, shortLabel: "T21" },
  { id: "outlet-mall", lat: 12.8879, lng: 100.8778, shortLabel: "Outlet" },
  { id: "central-marina", lat: 12.9475, lng: 100.8917, shortLabel: "Marina" },
  { id: "gems-gallery", lat: 12.9579, lng: 100.8946, shortLabel: "Gems" },
];

export const mallMapPinById = Object.fromEntries(
  mallMapPins.map((p) => [p.id, p]),
) as Record<MallMapPinId, MallMapPin>;

export const mallsMapOpenHref =
  "https://www.google.com/maps/search/shopping+malls+in+Pattaya+Chonburi/@12.93,100.88,12z";

export const MALL_MAP_PIN_COLOR = "#B52E88";

export function mallGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
