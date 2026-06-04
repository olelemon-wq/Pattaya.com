import type { EventCategoryId } from "@/lib/i18n/messages/events-hub";

export const eventCategoryBadgeStyles: Record<EventCategoryId, string> = {
  concert: "bg-[#fce7f3] text-[#be185d]",
  festival: "bg-[#ffedd5] text-[#c2410c]",
  edm: "bg-[#ede9fe] text-[#6d28d9]",
  muayThai: "bg-[#dcfce7] text-[#15803d]",
  golf: "bg-[#ecfdf5] text-[#0f766e]",
  business: "bg-[#e2e8f0] text-[#334155]",
  family: "bg-[#dbeafe] text-[#1d4ed8]",
  market: "bg-[#fee2e2] text-[#b91c1c]",
  localFestival: "bg-[#fef3c7] text-[#b45309]",
};

export const eventCategoryTextStyles: Record<EventCategoryId, string> = {
  concert: "text-[#be185d]",
  festival: "text-[#c2410c]",
  edm: "text-[#6d28d9]",
  muayThai: "text-[#15803d]",
  golf: "text-[#0f766e]",
  business: "text-[#334155]",
  family: "text-[#1d4ed8]",
  market: "text-[#b91c1c]",
  localFestival: "text-[#b45309]",
};
