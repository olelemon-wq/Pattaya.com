export type HiddenGemPinId =
  | "white-house-beach-cafe"
  | "cave-beach-club-morning"
  | "bang-saray-beach"
  | "khao-chi-chan-golden-hour"
  | "je-tum-seafood-bang-saray"
  | "pa-tid-kitchen-naklua"
  | "dicey-reillys-bars"
  | "sky-mountain-pattaya"
  | "mabprachan-lake-cafes";

export type HiddenGemPin = {
  id: HiddenGemPinId;
  lat: number;
  lng: number;
  shortLabel: string;
};

/** Pattaya «going deeper» spots — approximate coordinates for map pins */
export const hiddenGemMapPins: HiddenGemPin[] = [
  { id: "white-house-beach-cafe", lat: 12.872, lng: 100.895, shortLabel: "White House" },
  { id: "cave-beach-club-morning", lat: 12.8683, lng: 100.8834, shortLabel: "Cave" },
  { id: "bang-saray-beach", lat: 12.7717, lng: 100.9053, shortLabel: "Bang Saray" },
  { id: "khao-chi-chan-golden-hour", lat: 12.7847, lng: 100.9365, shortLabel: "Khao Chi Chan" },
  { id: "je-tum-seafood-bang-saray", lat: 12.775, lng: 100.903, shortLabel: "Je Tum" },
  { id: "pa-tid-kitchen-naklua", lat: 12.964, lng: 100.894, shortLabel: "Pa Tid" },
  { id: "dicey-reillys-bars", lat: 12.9305, lng: 100.8845, shortLabel: "Dicey" },
  { id: "sky-mountain-pattaya", lat: 12.927, lng: 100.877, shortLabel: "Sky Mountain" },
  { id: "mabprachan-lake-cafes", lat: 12.918, lng: 100.958, shortLabel: "Lake" },
];

export const hiddenGemPinById = Object.fromEntries(
  hiddenGemMapPins.map((p) => [p.id, p]),
) as Record<HiddenGemPinId, HiddenGemPin>;

export const hiddenGemsMapOpenHref =
  "https://www.google.com/maps/dir/Pattaya,+Chonburi/Na+Jomtien,+Pattaya/Bang+Saray,+Chonburi/Sattahip,+Chonburi";

export const HIDDEN_GEM_MAP_PIN_COLOR = "#059669";

export function hiddenGemGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
