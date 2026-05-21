import { FineDiningPage } from "@/components/explore/fine-dining-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fine Dining in Pattaya | ร้านอาหารหรู | Pattaya.com",
  description:
    "Luxury dining experiences in Pattaya — featured restaurants, sunset terraces, rooftop dining, and fine dining guides.",
  openGraph: {
    title: "Fine Dining | ร้านอาหารหรู — Pattaya.com",
    description:
      "Discover Pattaya's best fine dining: reserve tables at sponsored showcases, curated collections, and expert dining guides.",
  },
};

export default function FineDiningRoutePage() {
  return <FineDiningPage />;
}
