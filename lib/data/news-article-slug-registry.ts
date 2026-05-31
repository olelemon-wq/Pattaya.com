import { slugifyNewsTitle } from "@/lib/data/news-article-slug";

/** English title → slug for articles listed on a category page. */
const TITLE_SLUGS: Record<string, Record<string, string>> = {
  "local-news/city-updates": {
    "Walking Street Transformation: Smart Lighting & CCTV Rollout": "walking-street",
    "Sukhumvit U-Turn Widening: Commuter Delays Expected Through May": "sukhumvit",
    "Big Beach Clean 2026: 3,000 Volunteers Register in First Week": "beach-clean-2026",
    "Wongamat High-Rise Guidelines: New Height Caps Announced": "wongamat-height-caps",
    "Tourist Police Mobile Units Deployed at Bali Hai Pier": "tourist-police-bali-hai",
    "Pattaya Music Festival 2026: Road Closures & Shuttle Routes Published": "music-festival-2026",
  },
  "business/real-estate": {
    "Royal Cliff Residences: Branded Villas Back on Market": "royal-cliff-residences",
    "Beach Road Hotel Plot Trades at Record 420M THB Per Rai": "beach-road-hotel-plot",
    "Long-Stay Leases: Jomtien Studios See 12% More Inquiries": "jomtien-studio-leases",
    "Naklua Land Parcels Rezoned for Low-Rise Residential": "naklua-rezoning",
    "Off-Plan Incentives: 0% Transfer Fees on Select Naklua Projects": "naklua-off-plan-incentives",
    "Eastern Seaboard Golf Estates: Second-Home Demand Surges": "golf-estates-demand",
  },
  "expat/visa": {
    "Thailand Elite Visa: Pattaya Privilege Card Benefits": "thailand-elite",
    "BOI Work Permits: Faster Processing for EEC Companies": "boi-work-permits",
    "Chonburi Immigration: Extended Hours for Tourist Season": "immigration-extended-hours",
    "Condo Foreign Quota: What Visa Holders Should Verify": "condo-foreign-quota",
    "Retirement Visa Insurance: Approved Plans for 2026": "retirement-visa-insurance",
    "Tax Residency Rules: Remote Workers in Pattaya": "tax-residency-remote-workers",
  },
  "expat/immigration": {
    "Missed a 90-Day Report? Penalties and How to Fix": "missed-90-day",
    "Tourist Visa Extensions: Documents Checklist for Pattaya": "visa-extensions",
    "Annual Retirement Extension: Bank Letter Requirements": "retirement-bank",
    "WP + Visa Sync: Employers Must Update Within 7 Days": "wp-sync",
    "Thappraya Road Works: Allow Extra Time for Jomtien Office": "thappraya-road",
    "TM.30 Landlord Rules: Hotels and Condos Clarified": "tm30-rules",
  },
};

export function resolveNewsArticleSlug(
  categorySlug: string,
  title: string,
): string {
  const fromRegistry = TITLE_SLUGS[categorySlug]?.[title];
  if (fromRegistry) return fromRegistry;
  return slugifyNewsTitle(title);
}
