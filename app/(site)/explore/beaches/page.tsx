import { MainBeachesPage } from "@/components/explore/main-beaches-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Beaches | ชายหาดหลัก | Explore Pattaya | Pattaya.com",
  description:
    "Pattaya's main beaches and what to expect — Pattaya Beach, Jomtien, Dongtan, Naklua, Wong Amat, and Pratumnak. Vibes, access, and practical tips.",
  openGraph: {
    title: "Main Beaches | ชายหาดหลัก — Pattaya.com",
    description:
      "Guide to Pattaya's six main beach stretches: crowds, water conditions, and how to get there.",
  },
};

export default function MainBeachesRoutePage() {
  return <MainBeachesPage />;
}
