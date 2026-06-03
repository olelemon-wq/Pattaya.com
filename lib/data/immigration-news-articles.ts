import { newsImages } from "@/lib/design/news-images";

export const immigrationNewsHero = {
  title: "90-Day Online Reporting: System Maintenance & Office Alternatives",
  excerpt:
    "Chonburi Immigration schedules downtime Oct 14–16 for platform upgrades. Residents in Pattaya can file at Jomtien office or use the mobile app in the meantime.",
  byline: "By Immigration Desk · Updated 15m ago",
} as const;

export const immigrationNewsSpotlights = [
  {
    id: "90-day-online",
    badge: "90-Day Report",
    title: "Online Reporting Offline Oct 14–16",
    excerpt:
      "Plan ahead: in-person filing at Jomtien Immigration accepts walk-ins 08:30–16:30 with passport and previous receipt.",
    image: newsImages.immigration,
    imageAlt: "Thailand immigration documents and official forms",
    overlayClass:
      "bg-gradient-to-t from-[#0c1a33]/95 via-[#455f88]/75 to-[#455f88]/30",
    href: "/living/visa/90-day-report",
    cta: "90-Day Guide",
  },
  {
    id: "jomtien-office",
    badge: "Pattaya Office",
    title: "Jomtien Immigration: Saturday Hours for Peak Season",
    excerpt:
      "Extra counter staff deployed for extensions and re-entry permits — arrive before 10:00 to reduce wait times.",
    image: newsImages.walkingStreet,
    imageAlt: "Pattaya city government services area",
    overlayClass:
      "bg-gradient-to-t from-[#1e3a5f]/95 via-[#2563eb]/70 to-[#3b82f6]/30",
    href: "#latest",
    cta: "Office Hours",
  },
  {
    id: "re-entry",
    badge: "Re-Entry Permit",
    title: "Single vs Multiple Re-Entry: Which to Choose?",
    excerpt:
      "Frequent travelers from U-Tapao should compare multiple re-entry validity — avoid overstays if plans change.",
    image: newsImages.featuredVisa,
    imageAlt: "Passport stamps and re-entry permit",
    overlayClass:
      "bg-gradient-to-t from-[#78350f]/90 via-[#b45309]/65 to-[#d97706]/25",
    href: "/news/expat/visa",
    cta: "Visa Options",
  },
] as const;

export const immigrationNewsArticles = [
  {
    href: "/news/expat/immigration/90-day-online-maintenance",
    image: newsImages.immigration,
    imageAlt: "Thailand immigration documents and official forms",
    badge: "Immigration",
    badgeClass: "bg-[#455f88] text-white",
    title: "90-Day Online Reporting: System Offline for Maintenance",
    excerpt:
      "Chonburi Immigration announces temporary interruption. Visit Jomtien office or use the mobile app.",
    footer: "Updated 15m ago",
  },
  {
    href: "/living/visa/90-day-report",
    image: newsImages.immigration,
    imageAlt: "90-day reporting immigration form",
    badge: "Compliance",
    badgeClass: "bg-[#455f88] text-white",
    title: "Missed a 90-Day Report? Penalties and How to Fix",
    excerpt:
      "Overdue filings may incur fines of 2,000 THB — voluntary reporting before a checkpoint is strongly advised.",
    footer: "Today",
  },
  {
    href: "/news/expat/visa",
    image: newsImages.featuredVisa,
    imageAlt: "Visa extension appointment",
    badge: "Extensions",
    badgeClass: "bg-[#191c1d] text-white",
    title: "Tourist Visa Extensions: Documents Checklist for Pattaya",
    excerpt:
      "Bring TM.30, photos, and proof of address — copies available at service counters in Jomtien.",
    footer: "Yesterday",
  },
  {
    href: "/living/visa/retirement",
    image: newsImages.sanctuary,
    imageAlt: "Retirement visa applicant at office",
    badge: "Retirement",
    badgeClass: "bg-[#059669] text-white",
    title: "Annual Retirement Extension: Bank Letter Requirements",
    excerpt:
      "Chonburi Immigration confirms 800,000 THB balance must show two months seasoning in a Thai account.",
    footer: "2 days ago",
  },
  {
    href: "/living/visa/work-permit",
    image: newsImages.promotions,
    imageAlt: "Work permit and visa documents",
    badge: "Work Permit",
    badgeClass: "bg-[#455f88] text-white",
    title: "WP + Visa Sync: Employers Must Update Within 7 Days",
    excerpt:
      "BOI-sponsored staff in Pattaya face faster audits — HR teams should file TM.86 promptly after role changes.",
    footer: "3 days ago",
  },
  {
    href: "/news/local-news/city-updates",
    image: newsImages.breakingAccident,
    imageAlt: "Traffic near immigration office Pattaya",
    badge: "Advisory",
    badgeClass: "bg-[#f97316] text-white",
    title: "Thappraya Road Works: Allow Extra Time for Jomtien Office",
    excerpt:
      "Detours via Soi Chayapruek add 15–20 minutes during morning rush — use Grab drop-off at rear entrance.",
    footer: "4 days ago",
  },
  {
    href: "/news/expat/tax-legal",
    image: newsImages.golf,
    imageAlt: "Legal consultation immigration law",
    badge: "Policy",
    badgeClass: "bg-[#ae2f34] text-white",
    title: "TM.30 Landlord Rules: Hotels and Condos Clarified",
    excerpt:
      "Immigration reminds owners to register guests within 24 hours — many Pattaya condos offer TM.30 service desks.",
    footer: "1 week ago",
  },
] as const;
