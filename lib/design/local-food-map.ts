export type LocalFoodMapPinId =
  | "tai-thong-seafood"
  | "krua-nai-baan"
  | "lan-pho-naklua"
  | "somtam-tid-zaeb"
  | "jaroenlin"
  | "khrua-ban-por-ta";

export type LocalFoodMapPin = {
  id: LocalFoodMapPinId;
  lat: number;
  lng: number;
  shortLabel: string;
};

/** Pattaya local-food picks — coordinates from Google Maps (approx.) */
export const localFoodMapPins: LocalFoodMapPin[] = [
  { id: "tai-thong-seafood", lat: 12.9582, lng: 100.8974, shortLabel: "Tai Thong" },
  { id: "krua-nai-baan", lat: 12.9591, lng: 100.8962, shortLabel: "Nai Baan" },
  { id: "lan-pho-naklua", lat: 12.9615, lng: 100.8972, shortLabel: "Lan Pho" },
  { id: "somtam-tid-zaeb", lat: 12.9034, lng: 100.8681, shortLabel: "Somtam" },
  { id: "jaroenlin", lat: 12.9215, lng: 100.8842, shortLabel: "Jaroenlin" },
  { id: "khrua-ban-por-ta", lat: 12.9288, lng: 100.8815, shortLabel: "Por Ta" },
];

export const localFoodMapPinById = Object.fromEntries(
  localFoodMapPins.map((p) => [p.id, p]),
) as Record<LocalFoodMapPinId, LocalFoodMapPin>;

export const localFoodMapOpenHref =
  "https://www.google.com/maps/search/local+seafood+restaurants+Naklua+Pattaya/@12.95,100.895,13z";

export const LOCAL_FOOD_MAP_PIN_COLOR = "#B52E88";

export function localFoodGoogleMapsDirectionsHref(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
