import { newsImages } from "@/lib/design/news-images";

export const cityUpdatesHero = {
  title:
    "Pattaya Smart City Initiatives: Infrastructure Overhaul Commences on Beach Road",
  excerpt:
    "City Hall unveils a 500 million THB plan to modernize waterfront access, bury overhead cables, and expand public Wi-Fi along Beach Road by Q4 2026.",
  byline: "By City Desk · 2 Hours Ago",
} as const;

export const cityUpdatesSpotlights = [
  {
    id: "beach-road",
    badge: "Infrastructure",
    title: "Beach Road Smart Corridor: Phase 1 Breaks Ground",
    excerpt:
      "Lane closures alternate nightly from 22:00–05:00 while crews install fiber ducts and LED wayfinding from Central Pattaya to Walking Street.",
    image: newsImages.heroCinematic,
    imageAlt: "Pattaya Beach Road waterfront at dusk",
    overlayClass:
      "bg-gradient-to-t from-[#0c1a33]/95 via-[#0c1a33]/65 to-[#0c1a33]/30",
    href: "/news/local-news/infrastructure",
    cta: "Road Closures Map",
  },
  {
    id: "utilities",
    badge: "Utilities",
    title: "Jomtien Drainage Upgrade: Flood-Prone Sois Targeted",
    excerpt:
      "PEA and city engineers replace aging pumps on Thappraya Road — residents asked to clear storm drains before monsoon peak.",
    image: newsImages.breakingAccident,
    imageAlt: "City roadworks and drainage maintenance in Pattaya",
    overlayClass:
      "bg-gradient-to-t from-[#1e3a5f]/95 via-[#455f88]/75 to-[#455f88]/30",
    href: "/news/local-news/infrastructure",
    cta: "Utility Advisories",
  },
  {
    id: "public-services",
    badge: "Public Services",
    title: "Free Beach Wi-Fi Zones Expand to Naklua & Wongamat",
    excerpt:
      "200 new access points go live this month with bilingual login portals for tourists and long-stay residents.",
    image: newsImages.walkingStreet,
    imageAlt: "Pattaya city street at night with public lighting",
    overlayClass:
      "bg-gradient-to-t from-[#0c1a33]/95 via-[#2563eb]/70 to-[#3b82f6]/25",
    href: "/news/local-news/city-updates",
    cta: "View Coverage Map",
  },
] as const;

export const cityUpdatesArticles = [
  {
    href: "/news/nightlife/walking-street",
    image: newsImages.walkingStreet,
    imageAlt: "Walking Street Pattaya at night",
    badge: "Nightlife District",
    badgeClass: "bg-[#191c1d] text-white",
    title: "Walking Street Transformation: Smart Lighting & CCTV Rollout",
    excerpt:
      "New LED poles and emergency call boxes aim to improve safety for visitors while preserving the district's character.",
    footer: "5 hours ago",
  },
  {
    href: "/news/local-news/infrastructure",
    image: newsImages.breakingAccident,
    imageAlt: "Traffic on Sukhumvit near Pattaya",
    badge: "Traffic",
    badgeClass: "bg-[#455f88] text-white",
    title: "Sukhumvit U-Turn Widening: Commuter Delays Expected Through May",
    excerpt:
      "Chonburi Highway Department adds a third lane at North Pattaya interchange — alternative routes via Sukhumvit Soi 50 advised.",
    footer: "Yesterday",
  },
  {
    href: "/news/local-news/city-updates",
    image: newsImages.hiddenGems,
    imageAlt: "Pattaya beach cleanup volunteers",
    badge: "Environment",
    badgeClass: "bg-[#059669] text-white",
    title: "Big Beach Clean 2026: 3,000 Volunteers Register in First Week",
    excerpt:
      "City partners with hotels and dive shops for monthly waste collection from Bali Hai Pier to Jomtien Beach.",
    footer: "2 days ago",
  },
  {
    href: "/news/local-news/infrastructure",
    image: newsImages.hotels,
    imageAlt: "Pattaya bay skyline and hotels",
    badge: "Urban Planning",
    badgeClass: "bg-[#455f88] text-white",
    title: "Wongamat High-Rise Guidelines: New Height Caps Announced",
    excerpt:
      "Planning committee limits future towers to 35 floors to preserve sea-view corridors for neighboring properties.",
    footer: "3 days ago",
  },
  {
    href: "/news/local-news/crime",
    image: newsImages.policeCrime,
    imageAlt: "Pattaya city safety patrol",
    badge: "Public Safety",
    badgeClass: "bg-[#191c1d] text-white",
    title: "Tourist Police Mobile Units Deployed at Bali Hai Pier",
    excerpt:
      "Bilingual officers on electric carts offer 24/7 assistance during peak ferry hours to Koh Larn.",
    footer: "4 days ago",
  },
  {
    href: "/news/tourism/promotions",
    image: newsImages.promotions,
    imageAlt: "Pattaya city festival and promotions",
    badge: "Events",
    badgeClass: "bg-[#ae2f34] text-white",
    title: "Pattaya Music Festival 2026: Road Closures & Shuttle Routes Published",
    excerpt:
      "Free shuttle buses loop between Beach Road, Terminal 21, and Bali Hai Pier during the three-day event.",
    footer: "1 week ago",
  },
] as const;
