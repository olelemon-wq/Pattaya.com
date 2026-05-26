import { FamilyActivitiesPage } from "@/components/explore/family-activities-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Activities | กิจกรรมครอบครัว | Pattaya.com",
  description:
    "Family-friendly activities in Pattaya — water parks, gardens, Mini Siam, and day trips for kids and parents.",
  openGraph: {
    title: "Family Activities — Pattaya.com",
    description:
      "Kid-friendly days out including Aquaverse, Cartoon Network Amazone, and Nong Nooch Garden.",
  },
};

export default function FamilyActivitiesRoutePage() {
  return <FamilyActivitiesPage />;
}
