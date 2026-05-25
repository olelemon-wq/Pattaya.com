import { CafesPage } from "@/components/explore/cafes-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialty Coffee | คาเฟ่ | Pattaya Cafes | Pattaya.com",
  description:
    "Cafes and specialty coffee spots in Pattaya — beach terraces, hilltop brunch, pour-over, and sunset views in Jomtien and Pratumnak.",
  openGraph: {
    title: "Specialty Coffee | คาเฟ่ — Pattaya.com",
    description:
      "Discover Pattaya's best cafés: Coco Lounge, Horizon Terrace, Bake & Bloom, and clifftop coffee corners.",
  },
};

export default function CafesRoutePage() {
  return <CafesPage />;
}
