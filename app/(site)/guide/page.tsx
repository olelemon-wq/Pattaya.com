import type { Metadata } from "next";
import { GuidePageContent } from "@/components/pages/standalone-pages";

export const metadata: Metadata = {
  title: "Pattaya Guide | Pattaya.com",
  description: "Essential city guide for visitors and residents in Pattaya",
};

export default function GuidePage() {
  return <GuidePageContent />;
}
