import type { HospitalId } from "@/lib/i18n/messages/living/hospitals";

export type HospitalMapPin = {
  id: HospitalId;
  lat: number;
  lng: number;
  shortLabel: string;
  tier: "premium" | "public";
};

/** Pattaya hospitals — coordinates from Google Maps */
export const hospitalMapPins: HospitalMapPin[] = [
  {
    id: "bangkok-pattaya",
    lat: 12.949556,
    lng: 100.896389,
    shortLabel: "Bangkok Hospital",
    tier: "premium",
  },
  {
    id: "pattaya-memorial",
    lat: 12.931026,
    lng: 100.882614,
    shortLabel: "Pattaya Memorial",
    tier: "premium",
  },
  {
    id: "pattaya-international",
    lat: 12.944465,
    lng: 100.887779,
    shortLabel: "Pattaya International",
    tier: "premium",
  },
  {
    id: "pattaya-city",
    lat: 12.9268,
    lng: 100.8775,
    shortLabel: "Pattaya City Hosp.",
    tier: "public",
  },
  {
    id: "pattaya-patimakun",
    lat: 12.966288,
    lng: 100.906509,
    shortLabel: "Pattaya Patimakun",
    tier: "public",
  },
];

export const hospitalsMapOpenHref =
  "https://www.google.com/maps/search/Bangkok+Hospital+Pattaya,+Pattaya+Memorial+Hospital,+Pattaya+International+Hospital,+Pattaya+City+Hospital,+Pattaya+Patimakun+Hospital/@12.935,100.895,13z";

export function hospitalGoogleMapsHref(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query.replace(/\+/g, " "))}`;
}

export function hospitalMarkerColor(tier: "premium" | "public"): string {
  return tier === "premium" ? "#B29475" : "#475569";
}
