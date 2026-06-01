export type FineDiningMapPinId =
  | "horizon-rooftop"
  | "cafe-des-amis"
  | "casa-pascal"
  | "harlans"
  | "the-view"
  | "prego"
  | "sky32";

export type FineDiningMapPin = {
  id: FineDiningMapPinId;
  lat: number;
  lng: number;
  shortLabel: string;
};

/** Pattaya fine dining — coordinates from Google Maps (approx.) */
export const fineDiningMapPins: FineDiningMapPin[] = [
  { id: "horizon-rooftop", lat: 12.9342, lng: 100.8841, shortLabel: "Horizon" },
  { id: "cafe-des-amis", lat: 12.9284, lng: 100.8812, shortLabel: "Cafe des Amis" },
  { id: "casa-pascal", lat: 12.9318, lng: 100.8785, shortLabel: "Casa Pascal" },
  { id: "harlans", lat: 12.9152, lng: 100.8684, shortLabel: "Harlan's" },
  { id: "the-view", lat: 12.9261, lng: 100.8723, shortLabel: "The VIEW" },
  { id: "prego", lat: 12.9351, lng: 100.8832, shortLabel: "Prego" },
  { id: "sky32", lat: 12.9412, lng: 100.8864, shortLabel: "Sky32" },
];

export const fineDiningMapPinById = Object.fromEntries(
  fineDiningMapPins.map((p) => [p.id, p]),
) as Record<FineDiningMapPinId, FineDiningMapPin>;

export const fineDiningMapOpenHref =
  "https://www.google.com/maps/search/fine+dining+rooftop+restaurants+Pattaya/@12.93,100.88,13z";

export const FINE_DINING_MAP_PIN_COLOR = "#B52E88";

export function fineDiningGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
