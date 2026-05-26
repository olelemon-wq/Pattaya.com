import { HiddenGemsPage } from "@/components/explore/hidden-gems-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hidden Gems | จุดลับ | Pattaya.com",
  description:
    "Hidden gems and local-only spots in Pattaya — secret viewpoints, Naklua mornings, and editor stories.",
  openGraph: {
    title: "Hidden Gems — Pattaya.com",
    description:
      "Curated off-path guides for travelers who want Pattaya beyond the postcard.",
  },
};

export default function HiddenGemsRoutePage() {
  return <HiddenGemsPage />;
}
