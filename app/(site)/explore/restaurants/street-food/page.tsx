import { StreetFoodPage } from "@/components/explore/street-food-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Street Food | อาหารท้องถิ่น | Pattaya Local Food | Pattaya.com",
  description:
    "Best local and street food in Pattaya — night markets, seafood stalls, signature Thai dishes, and practical tips for eating like a local.",
  openGraph: {
    title: "Street Food | อาหารท้องถิ่น — Pattaya.com",
    description:
      "Thepprasit Night Market, Naklua morning market, Jomtien seafood, and must-try Thai street dishes.",
  },
};

export default function StreetFoodRoutePage() {
  return <StreetFoodPage />;
}
