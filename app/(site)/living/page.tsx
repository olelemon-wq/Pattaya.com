import type { Metadata } from "next";
import { LivingHubPage } from "@/components/living/living-hub-page";

export const metadata: Metadata = {
  title: "Living | Pattaya.com",
  description:
    "Expat living guide for Pattaya — visas, housing, culture, safety, healthcare, and cost of living.",
};

export default function LivingPage() {
  return <LivingHubPage />;
}
