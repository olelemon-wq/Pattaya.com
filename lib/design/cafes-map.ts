export type CafeMapPinId =
  | "lunar-beach-house"
  | "siris-beach-cafe"
  | "smore-beach-cafe"
  | "sunset-coffee-roasters"
  | "albatross-coffee"
  | "squid-coffee"
  | "backstreet-house"
  | "sheeva-cafe"
  | "vanvela-cafe";

export type CafeMapPin = {
  id: CafeMapPinId;
  lat: number;
  lng: number;
  shortLabel: string;
};

/** Pattaya cafés — coordinates approx. from Google Maps */
export const cafeMapPins: CafeMapPin[] = [
  { id: "lunar-beach-house", lat: 12.8778, lng: 100.9085, shortLabel: "Lunar" },
  { id: "siris-beach-cafe", lat: 12.845, lng: 100.906, shortLabel: "Siri's" },
  { id: "smore-beach-cafe", lat: 12.912, lng: 100.868, shortLabel: "S'more" },
  { id: "sunset-coffee-roasters", lat: 12.9485, lng: 100.894, shortLabel: "Sunset" },
  { id: "albatross-coffee", lat: 12.9328, lng: 100.8805, shortLabel: "Albatross" },
  { id: "squid-coffee", lat: 12.9345, lng: 100.883, shortLabel: "Squid" },
  { id: "backstreet-house", lat: 12.958, lng: 100.896, shortLabel: "Backstreet" },
  { id: "sheeva-cafe", lat: 12.9179, lng: 100.8982, shortLabel: "Sheeva" },
  { id: "vanvela-cafe", lat: 12.9035, lng: 100.9175, shortLabel: "Vanvela" },
];

export const cafeMapPinById = Object.fromEntries(
  cafeMapPins.map((p) => [p.id, p]),
) as Record<CafeMapPinId, CafeMapPin>;

/** Route 1 — chill day, photos + sea */
export const cafesChillRouteHref =
  "https://www.google.com/maps/dir/Sunset+Coffee+Roasters+Pattaya/Siri's+Beach+Cafe+Na+Chom+Thian/Skybar+Summer+Club+Pattaya";

/** Route 2 — hidden gem, less crowded */
export const cafesHiddenRouteHref =
  "https://www.google.com/maps/dir/Sheeva+Cafe+Pattaya/SQUID+COFFEE+Pattaya/Backstreet+House+Pattaya";

/** One-day café hop — Jomtien beach toward central specialty */
export const cafesMapRouteHref = cafesChillRouteHref;

export const cafesMapOpenHref =
  "https://www.google.com/maps/search/cafes+in+Pattaya+Chonburi/@12.915,100.89,12z";

export const CAFE_MAP_PIN_COLOR = "#B52E88";

export function cafeGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
