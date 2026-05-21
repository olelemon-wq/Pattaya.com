import { KohLarnPage } from "@/components/explore/koh-larn-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koh Larn (เกาะล้าน) | Tours, Beaches & Day Trips | Pattaya.com",
  description:
    "Island day trips and activities at Koh Larn — beaches, snorkeling tours, ferry info, and where to eat & stay. Book tours from Pattaya.",
  openGraph: {
    title: "Koh Larn | เกาะล้าน — Pattaya.com",
    description:
      "Discover Koh Larn: 8 beaches, tours from Bali Hai Pier, beach guide, and recommended restaurants & hotels.",
  },
};

export default function KohLarnRoutePage() {
  return <KohLarnPage />;
}
