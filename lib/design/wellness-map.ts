export type WellnessPinId =
  | "oasis-spa-jomtien"
  | "cliff-spa-pattaya"
  | "yunomori-onsen"
  | "lets-relax-onsen-pattaya"
  | "health-land-sukhumvit"
  | "tea-tree-spa"
  | "pra-nita-spa"
  | "thai-sabai-massage";

export type WellnessPin = {
  id: WellnessPinId;
  lat: number;
  lng: number;
  shortLabel: string;
};

export const wellnessMapPins: WellnessPin[] = [
  { id: "oasis-spa-jomtien", lat: 12.885, lng: 100.872, shortLabel: "Oasis" },
  { id: "cliff-spa-pattaya", lat: 12.908, lng: 100.858, shortLabel: "Cliff" },
  { id: "yunomori-onsen", lat: 12.905, lng: 100.888, shortLabel: "Yunomori" },
  { id: "lets-relax-onsen-pattaya", lat: 12.951, lng: 100.887, shortLabel: "Let's Relax" },
  { id: "health-land-sukhumvit", lat: 12.928, lng: 100.895, shortLabel: "Health Land" },
  { id: "tea-tree-spa", lat: 12.935, lng: 100.884, shortLabel: "Tea Tree" },
  { id: "pra-nita-spa", lat: 12.945, lng: 100.905, shortLabel: "Pra Ni Ta" },
  { id: "thai-sabai-massage", lat: 12.946, lng: 100.898, shortLabel: "Thai Sabai" },
];

export const wellnessPinById = Object.fromEntries(
  wellnessMapPins.map((p) => [p.id, p]),
) as Record<WellnessPinId, WellnessPin>;

/** Suggested spa loop — south (Jomtien) toward central Pattaya */
export const wellnessMapRouteHref =
  "https://www.google.com/maps/dir/Oasis+Spa+Jomtien+Pattaya/Cliff+Spa+Royal+Cliff+Pattaya/Yunomori+Onsen+Pattaya/Let's+Relax+Onsen+Spa+Pattaya/Health+Land+Pattaya+Sukhumvit/Tea+Tree+Spa+Pattaya";

export const WELLNESS_MAP_PIN_COLOR = "#B52E88";

export function wellnessGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
