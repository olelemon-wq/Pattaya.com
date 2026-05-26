import { WellnessPage } from "@/components/explore/wellness-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness & Spa | สปา | Pattaya.com",
  description:
    "Spas and Thai massage in Pattaya — Aura Sanctuary, clifftop treatments, and traditional herbal houses.",
  openGraph: {
    title: "Relax & Wellness — Pattaya.com",
    description:
      "Premium wellness destinations and spa tips for your Pattaya stay.",
  },
};

export default function WellnessRoutePage() {
  return <WellnessPage />;
}
