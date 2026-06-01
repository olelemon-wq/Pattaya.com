export type StreetFoodMapPinId =
  | "thepprasit"
  | "noen-plub-wan"
  | "lan-pho-naklua"
  | "soi-buakhao"
  | "wat-chai-mongkhon"
  | "pattaya-park";

export type StreetFoodMapPin = {
  id: StreetFoodMapPinId;
  lat: number;
  lng: number;
  shortLabel: string;
};

/** Pattaya street-food spots — coordinates from Google Maps (approx.) */
export const streetFoodMapPins: StreetFoodMapPin[] = [
  { id: "thepprasit", lat: 12.89694, lng: 100.87461, shortLabel: "Thepprasit" },
  { id: "noen-plub-wan", lat: 12.9086, lng: 100.8779, shortLabel: "Noen Plub" },
  { id: "lan-pho-naklua", lat: 12.9615, lng: 100.8972, shortLabel: "Lan Pho" },
  { id: "soi-buakhao", lat: 12.92972, lng: 100.88861, shortLabel: "Buakhao" },
  { id: "wat-chai-mongkhon", lat: 12.9358, lng: 100.9038, shortLabel: "Wat Chai" },
  { id: "pattaya-park", lat: 12.91583, lng: 100.86778, shortLabel: "P. Park" },
];

export const streetFoodMapPinById = Object.fromEntries(
  streetFoodMapPins.map((p) => [p.id, p]),
) as Record<StreetFoodMapPinId, StreetFoodMapPin>;

export const streetFoodMapOpenHref =
  "https://www.google.com/maps/search/street+food+night+market+Pattaya/@12.92,100.88,13z";

export const STREET_FOOD_MAP_PIN_COLOR = "#B52E88";

export function streetFoodGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
