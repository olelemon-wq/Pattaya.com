import { YachtMarinaPage } from "@/components/explore/yacht-marina-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yacht & Marina Pattaya | เรือยอร์ช | Luxury Charters | Pattaya.com",
  description:
    "Yacht charters and marina experiences in Pattaya — featured luxury rentals, cruise routes, and world-class marina facilities.",
  openGraph: {
    title: "Yacht & Marina | เรือยอร์ช — Pattaya.com",
    description:
      "Premium yacht charters, sunset cruises, and marina lifestyle in Pattaya Bay.",
  },
};

export default function YachtMarinaRoutePage() {
  return <YachtMarinaPage />;
}
