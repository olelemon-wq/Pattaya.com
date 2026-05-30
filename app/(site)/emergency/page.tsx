import type { Metadata } from "next";
import { EmergencyPageContent } from "@/components/pages/standalone-pages";

export const metadata: Metadata = {
  title: "Emergency Contacts | Pattaya.com",
  description: "Important emergency phone numbers in Pattaya",
};

export default function EmergencyPage() {
  return <EmergencyPageContent />;
}
