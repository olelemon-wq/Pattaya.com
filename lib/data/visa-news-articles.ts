import { newsImages } from "@/lib/design/news-images";

export const visaNewsHero = {
  title: "New 'Destination Thailand' Visa: Expert Guide for Pattaya Expats",
  excerpt:
    "Everything you need to know about the 5-year visa for digital nomads and remote workers — eligibility, financial proof, and how to apply through Chonburi Immigration.",
  byline: "By Expat Desk · 3 Hours Ago",
} as const;

export const visaNewsSpotlights = [
  {
    id: "dtv",
    badge: "New Visa",
    title: "Destination Thailand Visa (DTV): 5-Year Stay",
    excerpt:
      "Remote workers and freelancers can qualify with 500,000 THB in savings or qualifying income — extensions available in Pattaya.",
    image: newsImages.featuredVisa,
    imageAlt: "Passport and travel documents for Thailand visa",
    overlayClass:
      "bg-gradient-to-t from-[#1e3a5f]/95 via-[#2563eb]/75 to-[#3b82f6]/35",
    href: "#guides",
    cta: "Read Requirements",
  },
  {
    id: "retirement",
    badge: "Retirement",
    title: "Non-Immigrant O-A: Pattaya Retirement Path",
    excerpt:
      "Age 50+, 800,000 THB in Thai bank or 65,000 THB monthly income — our partner agents assist with Chonburi Immigration filings.",
    image: newsImages.immigration,
    imageAlt: "Immigration office consultation",
    overlayClass:
      "bg-gradient-to-t from-[#0c1a33]/95 via-[#455f88]/70 to-[#455f88]/25",
    href: "/living/visa/retirement",
    cta: "Retirement Guide",
  },
  {
    id: "90-day",
    badge: "Compliance",
    title: "90-Day Reporting: Online System Updates",
    excerpt:
      "Jomtien Immigration office adds weekend slots; mobile app reminders now available for Naklua and central Pattaya zones.",
    image: newsImages.walkingStreet,
    imageAlt: "Pattaya city administrative services",
    overlayClass:
      "bg-gradient-to-t from-[#78350f]/90 via-[#b45309]/65 to-[#d97706]/30",
    href: "/living/visa/90-day-report",
    cta: "90-Day Guide",
  },
] as const;

export const visaNewsArticles = [
  {
    href: "/living/visa/thailand-elite",
    image: newsImages.hotels,
    imageAlt: "Luxury residence Thailand Elite visa",
    badge: "Thailand Elite",
    badgeClass: "bg-[#191c1d] text-white",
    title: "Thailand Elite Visa: Pattaya Privilege Card Benefits",
    excerpt:
      "Members gain airport fast-track, golf club access, and dedicated concierge for visa extensions in the Eastern Economic Corridor.",
    footer: "Today",
  },
  {
    href: "/living/visa/work-permit",
    image: newsImages.promotions,
    imageAlt: "Professional work permit documents",
    badge: "Work Permit",
    badgeClass: "bg-[#455f88] text-white",
    title: "BOI Work Permits: Faster Processing for EEC Companies",
    excerpt:
      "Employers in Chonburi report 30% shorter queues when applications include digital company registration certificates.",
    footer: "Yesterday",
  },
  {
    href: "/news/expat/immigration",
    image: newsImages.immigration,
    imageAlt: "Immigration policy update",
    badge: "Immigration",
    badgeClass: "bg-[#455f88] text-white",
    title: "Chonburi Immigration: Extended Hours for Tourist Season",
    excerpt:
      "Jomtien branch opens Saturdays 09:00–15:00 through April for visa extensions and re-entry permits.",
    footer: "2 days ago",
  },
  {
    href: "/living/housing/ownership",
    image: newsImages.featuredProperty,
    imageAlt: "Property ownership documents",
    badge: "Property & Visa",
    badgeClass: "bg-[#f97316] text-white",
    title: "Condo Foreign Quota: What Visa Holders Should Verify",
    excerpt:
      "Lawyers advise checking chanote and quota certificates before transfer — common delays at Pattaya land offices.",
    footer: "4 days ago",
  },
  {
    href: "/living/visa/retirement",
    image: newsImages.sanctuary,
    imageAlt: "Retired couple in Pattaya",
    badge: "Insurance",
    badgeClass: "bg-[#059669] text-white",
    title: "Retirement Visa Insurance: Approved Plans for 2026",
    excerpt:
      "Immigration accepts select outpatient/inpatient packages from Bangkok Hospital Pattaya and major insurers.",
    footer: "5 days ago",
  },
  {
    href: "/news/expat/tax-legal",
    image: newsImages.golf,
    imageAlt: "Legal consultation meeting",
    badge: "Tax & Legal",
    badgeClass: "bg-[#ae2f34] text-white",
    title: "Tax Residency Rules: Remote Workers in Pattaya",
    excerpt:
      "Revenue Department clarifies 180-day threshold for individuals on long-term visas — seek licensed tax advice.",
    footer: "1 week ago",
  },
] as const;
