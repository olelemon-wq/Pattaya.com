import { RetirementVisaPage } from "@/components/living/retirement-visa-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retirement Visa Guide Pattaya | วีซ่าเกษียณ | Pattaya.com",
  description:
    "Comprehensive retirement visa guide for Pattaya — age, financial, and insurance requirements, application timeline, FAQ, and expert visa consultation.",
  openGraph: {
    title: "Retirement Visa | วีซ่าเกษียณ — Pattaya.com",
    description:
      "Requirements, step-by-step process, and free consultation for Thailand retirement visa applicants in Pattaya.",
  },
};

export default function RetirementVisaRoutePage() {
  return <RetirementVisaPage />;
}
