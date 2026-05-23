import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  Building2,
  Flame,
  HeartPulse,
  Landmark,
  Shield,
} from "lucide-react";

export type EmergencyContact = {
  id: string;
  service: string;
  number: string;
  icon: LucideIcon;
  iconClassName: string;
};

export const emergencyContacts: EmergencyContact[] = [
  {
    id: "tourist-police",
    service: "Tourist Police",
    number: "1155",
    icon: Shield,
    iconClassName: "text-[#2563EB] bg-[#EFF6FF]",
  },
  {
    id: "city-call-center",
    service: "City Call Center",
    number: "1337",
    icon: Building2,
    iconClassName: "text-[#0A192F] bg-[#F1F5F9]",
  },
  {
    id: "medical-ems",
    service: "Medical (EMS)",
    number: "1669",
    icon: HeartPulse,
    iconClassName: "text-[#DC2626] bg-[#FEF2F2]",
  },
  {
    id: "fire-dept",
    service: "Fire Dept",
    number: "199",
    icon: Flame,
    iconClassName: "text-[#EA580C] bg-[#FFF7ED]",
  },
  {
    id: "marine-police",
    service: "Marine Police",
    number: "1196",
    icon: Anchor,
    iconClassName: "text-[#0891B2] bg-[#ECFEFF]",
  },
  {
    id: "immigration",
    service: "Immigration",
    number: "038-110-636",
    icon: Landmark,
    iconClassName: "text-[#7C3AED] bg-[#F5F3FF]",
  },
];

/** Builds a `tel:` href for local Pattaya / Thailand numbers. */
export function emergencyTelHref(number: string): string {
  const digits = number.replace(/\D/g, "");
  if (digits.length >= 9 && digits.startsWith("0")) {
    return `tel:+66${digits.slice(1)}`;
  }
  return `tel:${digits}`;
}
