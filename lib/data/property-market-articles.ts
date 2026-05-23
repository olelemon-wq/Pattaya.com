import { newsImages } from "@/lib/design/news-images";

export const propertyMarketHero = {
  title: "Wongamat Riviera: New Luxury Penthouse Units Released",
  excerpt:
    "Exclusive preview of the highest-floor residences starting at 25M THB with panoramic Gulf views — pre-sales open to qualified foreign and Thai buyers.",
  byline: "By Property Desk · 4 Hours Ago",
} as const;

export const propertyMarketSpotlights = [
  {
    id: "wongamat-penthouse",
    badge: "New Launch",
    title: "Wongamat Riviera: Sky Residences From 25M THB",
    excerpt:
      "42 penthouse units across floors 38–45 feature private plunge pools, smart-home packages, and direct beach-club access.",
    image: newsImages.featuredProperty,
    imageAlt: "Luxury high-rise condominium in Wongamat, Pattaya",
    overlayClass:
      "bg-gradient-to-t from-[#0c1a33]/95 via-[#0c1a33]/70 to-[#0c1a33]/25",
    href: "#listings",
    cta: "View Floor Plans",
  },
  {
    id: "jomtien-condos",
    badge: "Market Data",
    title: "Jomtien Condo Index: Prices Up 6% Year-on-Year",
    excerpt:
      "One-bedroom sea-view units now average 4.2M THB; rental yields hold at 5.8% for long-term leases in the district.",
    image: newsImages.hotels,
    imageAlt: "Pattaya bay skyline and condominium towers",
    overlayClass:
      "bg-gradient-to-t from-[#1e3a5f]/95 via-[#455f88]/75 to-[#455f88]/30",
    href: "/business/investment/real-estate",
    cta: "Investment Portal",
  },
  {
    id: "foreign-quota",
    badge: "Legal Guide",
    title: "Foreign Quota 2026: What Buyers Need to Know",
    excerpt:
      "Updated guidance on condo ownership, leasehold structures, and company-held assets for expat investors in Chonburi.",
    image: newsImages.featuredVisa,
    imageAlt: "Property documents and investment planning",
    overlayClass:
      "bg-gradient-to-t from-[#78350f]/90 via-[#b45309]/65 to-[#d97706]/30",
    href: "/living/housing/ownership",
    cta: "Ownership Guide",
  },
] as const;

export const propertyMarketArticles = [
  {
    href: "/news/business/real-estate",
    image: newsImages.featuredProperty,
    imageAlt: "Luxury penthouse interior with sea view",
    badge: "Premium",
    badgeClass: "bg-[#191c1d] text-white",
    title: "Royal Cliff Residences: Branded Villas Back on Market",
    excerpt:
      "Twelve freehold villas return to inventory after renovation — starting at 89M THB with managed rental programs.",
    footer: "Today",
  },
  {
    href: "/news/business/hotels",
    image: newsImages.hotels,
    imageAlt: "Beachfront hotel and resort properties",
    badge: "Hospitality",
    badgeClass: "bg-[#455f88] text-white",
    title: "Beach Road Hotel Plot Trades at Record 420M THB Per Rai",
    excerpt:
      "Developers eye mixed-use towers as tourism occupancy rebounds above 78% in Q1 2026.",
    footer: "Yesterday",
  },
  {
    href: "/living/housing/rentals",
    image: newsImages.hiddenGems,
    imageAlt: "Coastal residential area in Pattaya",
    badge: "Rentals",
    badgeClass: "bg-[#059669] text-white",
    title: "Long-Stay Leases: Jomtien Studios See 12% More Inquiries",
    excerpt:
      "Agents report six-month contracts dominating demand from remote workers and retirees relocating from Bangkok.",
    footer: "2 days ago",
  },
  {
    href: "/news/local-news/infrastructure",
    image: newsImages.walkingStreet,
    imageAlt: "Pattaya urban development and roads",
    badge: "Development",
    badgeClass: "bg-[#455f88] text-white",
    title: "Naklua Land Parcels Rezoned for Low-Rise Residential",
    excerpt:
      "City planning committee approves 18-hectare mixed community with height limits to protect neighborhood character.",
    footer: "3 days ago",
  },
  {
    href: "/business/investment/real-estate",
    image: newsImages.promotions,
    imageAlt: "Property investment seminar in Pattaya",
    badge: "Investment",
    badgeClass: "bg-[#f97316] text-white",
    title: "Off-Plan Incentives: 0% Transfer Fees on Select Naklua Projects",
    excerpt:
      "Developers bundle furniture packages and guaranteed rental management for purchases before June 30.",
    footer: "5 days ago",
  },
  {
    href: "/directory/featured",
    image: newsImages.golf,
    imageAlt: "Golf course community near Pattaya",
    badge: "Lifestyle",
    badgeClass: "bg-[#ae2f34] text-white",
    title: "Eastern Seaboard Golf Estates: Second-Home Demand Surges",
    excerpt:
      "Villas within 20 minutes of Pattaya Country Club list 15% faster than inland stock, agents say.",
    footer: "1 week ago",
  },
] as const;
