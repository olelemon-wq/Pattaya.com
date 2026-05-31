import { businessImages } from "@/lib/design/business-images";
import type { Metadata } from "next";

export type BusinessPageId =
  | "thai-company"
  | "boi"
  | "restaurant"
  | "bar"
  | "hotel"
  | "real-estate"
  | "economy"
  | "events";

type BusinessStep = { step: string; title: string; description: string };

export type BusinessEconomyStat = {
  icon: string;
  value: string;
  label: string;
};

export type BusinessNetworkingEvent = {
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
};

export type BusinessReadingPathItem = {
  step: string;
  href: string;
};

export type BusinessServicePoint = {
  name: string;
  note: string;
};

export type BusinessPageConfig = {
  metadata: Metadata;
  heroImage: string;
  heroAlt: string;
  badge: string;
  breadcrumb: string;
  title: string;
  titleTh: string;
  description: string;
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
    href: string;
  };
  ctaSecondary?: { button: string; href: string };
  overview: { title: string; body: string };
  steps: { title: string; items: BusinessStep[] };
  checklist: { title: string; items: string[] };
  highlights: { title: string; items: { title: string; description: string }[] };
  related: { label: string; href: string; blurb: string }[];
  economyStats?: BusinessEconomyStat[];
  networkingEvents?: BusinessNetworkingEvent[];
  readingPath?: { items: BusinessReadingPathItem[] };
  servicePoints?: { items: BusinessServicePoint[] };
};

const baseMeta = (title: string, description: string): Metadata => ({
  title: `${title} | Business | Pattaya.com`,
  description,
  openGraph: { title: `${title} — Pattaya.com`, description },
});

export const businessPages: Record<BusinessPageId, BusinessPageConfig> = {
  "thai-company": {
    metadata: baseMeta(
      "Company Registration | เปิดบริษัท",
      "Register a Thai limited company in Pattaya — shareholders, capital, work permits, and legal compliance for EEC investors.",
    ),
    heroImage: businessImages.incorporation,
    heroAlt: "Modern office for company registration in Pattaya",
    badge: "Company Setup",
    breadcrumb: "Company Registration",
    title: "Company Registration",
    titleTh: "เปิดบริษัท",
    description:
      "Your gateway to the Eastern Economic Corridor — complete frameworks for local and international entities with regulatory compliance.",
    cta: {
      eyebrow: "Legal & Setup",
      title: "ติดต่อสำนักงานกฎหมาย",
      body: "Document review, shareholder structure, VAT registration, and work-permit pathways — matched to your investment timeline.",
      button: "ขอคำปรึกษาฟรี",
      href: "/business",
    },
    ctaSecondary: {
      button: "See reading order",
      href: "#reading-path",
    },
    readingPath: {
      items: [
        { step: "1", href: "#registration-roadmap" },
        { step: "2", href: "/business/company-setup/boi" },
        { step: "3", href: "/business/guide/restaurant" },
        { step: "4", href: "/living/visa/work-permit" },
        { step: "5", href: "/news/expat/immigration" },
      ],
    },
    servicePoints: {
      items: [
        { name: "DBD Chonburi", note: "Company registration and amendments" },
        { name: "Revenue Department — Pattaya area", note: "Tax ID and VAT" },
        { name: "Pattaya City Hall", note: "Municipal licenses" },
      ],
    },
    overview: {
      title: "Why register in Chonburi",
      body: "Pattaya sits inside the EEC footprint with strong tourism, logistics, and property demand. A Thai limited company is the standard vehicle for operating restaurants, hotels, import/export, and service businesses — with clear rules on foreign ownership, nominee structures, and BOI upgrades when eligible.",
    },
    steps: {
      title: "Registration roadmap",
      items: [
        {
          step: "01",
          title: "Name reservation & structure",
          description:
            "Reserve your company name (Thai/English), define objectives, shareholders, and registered capital aligned with visa and license needs.",
        },
        {
          step: "02",
          title: "Memorandum & statutory meeting",
          description:
            "Prepare MOA/AOA, appoint directors, and hold the statutory meeting — typically coordinated with your law firm.",
        },
        {
          step: "03",
          title: "DBD registration & tax IDs",
          description:
            "File with the Department of Business Development, obtain tax ID, and register VAT/social security when thresholds apply.",
        },
        {
          step: "04",
          title: "Licenses & work permits",
          description:
            "Layer industry permits (F&B, hotel, import) and Non-B / work permit filings once the entity is active.",
        },
      ],
    },
    checklist: {
      title: "Document checklist",
      items: [
        "Passport copies of all shareholders & directors",
        "Registered address evidence (office or virtual office contract)",
        "Bank certificate for paid-up capital (amount per structure)",
        "Lease or ownership docs for operating premises",
        "Business objectives matching future license categories",
      ],
    },
    highlights: {
      title: "Included in premium setup",
      items: [
        {
          title: "Work permit pathway",
          description:
            "Ratio planning for Thai vs foreign staff before you hire your first manager.",
        },
        {
          title: "Accounting handover",
          description:
            "Monthly filing calendar, invoice templates, and payroll registration.",
        },
        {
          title: "BOI readiness review",
          description:
            "Screen activities for promotion eligibility before you commit capital.",
        },
      ],
    },
    related: [
      {
        label: "BOI Promotion",
        href: "/business/company-setup/boi",
        blurb: "Tax holidays and foreign ownership benefits",
      },
      {
        label: "F&B Business Guide",
        href: "/business/guide/restaurant",
        blurb: "Permits after your company is registered",
      },
      {
        label: "Business Hub",
        href: "/business",
        blurb: "Networking events and economy stats",
      },
      {
        label: "Work permit guide",
        href: "/living/visa/work-permit",
        blurb: "Non-B visa and staffing ratio after your company is active",
      },
      {
        label: "Immigration updates",
        href: "/news/expat/immigration",
        blurb: "90-day reporting and extension headlines for operators",
      },
      {
        label: "Tax & legal news",
        href: "/news/expat/tax-legal",
        blurb: "Rule changes affecting foreign-owned operators in Chonburi",
      },
    ],
  },
  boi: {
    metadata: baseMeta(
      "BOI Promotion | สิทธิ BOI",
      "Board of Investment incentives in the EEC — tax holidays, land ownership, and fast-track visas for promoted activities.",
    ),
    heroImage: businessImages.boiEec,
    heroAlt: "EEC investment and BOI promotion briefing",
    badge: "BOI & EEC",
    breadcrumb: "BOI Promotion",
    title: "BOI Promotion",
    titleTh: "สิทธิ BOI",
    description:
      "Competitive tax privileges and enhanced foreign ownership for strategic projects in the Eastern Economic Corridor.",
    cta: {
      eyebrow: "Investment Incentives",
      title: "บริการปรึกษาด้านการขอสิทธิ BOI",
      body: "Activity code mapping, feasibility narratives, and coordination with BOI Bangkok — plus post-approval compliance.",
      button: "นัดที่ปรึกษา BOI",
      href: "/business",
    },
    ctaSecondary: {
      button: "See reading order",
      href: "#reading-path",
    },
    readingPath: {
      items: [
        { step: "1", href: "#registration-roadmap" },
        { step: "2", href: "/business/company-setup/thai-company" },
        { step: "3", href: "/business/guide/hotel" },
        { step: "4", href: "/business/investment/economy" },
        { step: "5", href: "/news/expat/tax-legal" },
      ],
    },
    servicePoints: {
      items: [
        { name: "BOI Head Office — Bangkok", note: "Applications and interviews" },
        { name: "EEC Office", note: "Zone incentives in Chonburi corridor" },
        { name: "DBD Chonburi", note: "Company registration aligned with BOI" },
      ],
    },
    overview: {
      title: "What BOI can unlock",
      body: "Promoted activities may receive corporate income tax exemptions, import duty relief, and permission for foreign nationals to own land for approved projects. In Pattaya–Chonburi, tourism tech, medical wellness, and selected manufacturing clusters are commonly evaluated — each with activity-specific caps and Thai staffing ratios.",
    },
    steps: {
      title: "Application flow",
      items: [
        {
          step: "01",
          title: "Eligibility screening",
          description:
            "Match your business plan to BOI activity lists (4.0 industries, tourism, digital, agro-processing).",
        },
        {
          step: "02",
          title: "Investment package",
          description:
            "Capital, machinery, and job-creation commitments documented with timelines and EEC zone benefits.",
        },
        {
          step: "03",
          title: "BOI submission & interview",
          description:
            "Application dossier, projections, and management interviews — often 90–120 days for approval.",
        },
        {
          step: "04",
          title: "Reporting & renewal",
          description:
            "Annual progress reports, visa privileges for experts, and permit renewals tied to milestones.",
        },
      ],
    },
    checklist: {
      title: "Typical BOI dossier",
      items: [
        "Detailed project description & location (EEC map coordinates if applicable)",
        "Financial projections (3–5 years) with capex breakdown",
        "Environmental and energy plans for factory or large hotel schemes",
        "Shareholder structure and source-of-funds statements",
        "Technology transfer or training plans for 4.0 activities",
      ],
    },
    highlights: {
      title: "EEC-specific advantages",
      items: [
        {
          title: "Land & property",
          description:
            "Foreign land ownership pathways for promoted projects meeting investment floors.",
        },
        {
          title: "Visa fast track",
          description:
            "Work permits and expert visas streamlined for approved positions.",
        },
        {
          title: "Customs efficiency",
          description:
            "Duty exemptions on machinery and raw materials for manufacturing promotions.",
        },
      ],
    },
    related: [
      {
        label: "Company Registration",
        href: "/business/company-setup/thai-company",
        blurb: "Entity setup before or in parallel with BOI filing",
      },
      {
        label: "Hotel Business Guide",
        href: "/business/guide/hotel",
        blurb: "EIA and hotel license layers for hospitality BOI",
      },
      {
        label: "Pattaya Economy",
        href: "/business/investment/economy",
        blurb: "Macro stats for your investment memo",
      },
      {
        label: "Work permit guide",
        href: "/living/visa/work-permit",
        blurb: "Expert visas after BOI approval",
      },
      {
        label: "Immigration updates",
        href: "/news/expat/immigration",
        blurb: "Reporting rules for promoted-project staff",
      },
      {
        label: "Tax & legal news",
        href: "/news/expat/tax-legal",
        blurb: "Changes affecting EEC investors",
      },
      {
        label: "Real estate & investment",
        href: "/business/investment/real-estate",
        blurb: "Land and project structures tied to BOI promotions",
      },
    ],
  },
  restaurant: {
    metadata: baseMeta(
      "F&B Business Guide | เปิดร้านอาหาร",
      "Open a restaurant or café in Pattaya — location, food safety, alcohol licenses, and health permits.",
    ),
    heroImage: businessImages.restaurant,
    heroAlt: "Luxury restaurant dining in Pattaya",
    badge: "Industry Guide",
    breadcrumb: "F&B Business",
    title: "Restaurant Guide",
    titleTh: "เปิดร้านอาหาร",
    description:
      "Luxury dining and café launches: site selection, kitchen design, and international food-safety standards in a tourism market.",
    cta: {
      eyebrow: "Hot Industry",
      title: "ดาวน์โหลดคู่มือฉบับเต็ม",
      body: "Health permit checklist, alcohol licensing paths, and lease negotiation tips for Beach Rd, Jomtien, and Naklua.",
      button: "ขอคู่มือ F&B",
      href: "/business",
    },
    ctaSecondary: {
      button: "See reading order",
      href: "#reading-path",
    },
    readingPath: {
      items: [
        { step: "1", href: "#registration-roadmap" },
        { step: "2", href: "/business/company-setup/thai-company" },
        { step: "3", href: "/business/guide/bar" },
        { step: "4", href: "/living/visa/work-permit" },
        { step: "5", href: "/news/expat/tax-legal" },
      ],
    },
    servicePoints: {
      items: [
        { name: "Pattaya City Hall", note: "Trade and local permits" },
        { name: "Provincial Public Health (อย.)", note: "Food establishment inspections" },
        { name: "Excise Department", note: "Alcohol licenses" },
      ],
    },
    overview: {
      title: "F&B in Pattaya’s tourism cycle",
      body: "High season drives covers; low season rewards operators with delivery, events, and expat regulars. Success pairs visible location with back-of-house compliance — Thai FDA (อย.), municipal trade licenses, and fire safety for kitchens over certain sizes.",
    },
    steps: {
      title: "Launch sequence",
      items: [
        {
          step: "01",
          title: "Entity & lease",
          description:
            "Thai company or partnership, lease review for tourism zoning and exhaust venting rights.",
        },
        {
          step: "02",
          title: "Construction & kitchen plan",
          description:
            "Grease traps, gas certification, and layout approved for health inspection.",
        },
        {
          step: "03",
          title: "Licenses",
          description:
            "สถานประกอบการ, อย. food license, music if applicable, and alcohol (if desired).",
        },
        {
          step: "04",
          title: "Soft opening & audit",
          description:
            "Staff food-hygiene training, HACCP-style logs, and tourism authority registration where required.",
        },
      ],
    },
    checklist: {
      title: "Health permit checklist",
      items: [
        "Kitchen floor plan with hand-wash and storage zones",
        "Supplier traceability for high-risk ingredients",
        "Pest control contract and waste disposal vendor",
        "Staff health certificates and training records",
        "Alcohol license guide if serving beer, wine, or spirits",
      ],
    },
    highlights: {
      title: "Operator tips",
      items: [
        {
          title: "Location matrix",
          description:
            "Foot traffic vs rent — Walking Street, Jomtien family strip, Pratumnak sunset cliffs.",
        },
        {
          title: "Menu & margin",
          description:
            "Dual-language menus, VAT-inclusive pricing, and import cost for wine lists.",
        },
        {
          title: "Staffing",
          description:
            "Work permits for head chef roles; Thai majority on payroll for license renewals.",
        },
      ],
    },
    related: [
      {
        label: "Bar Business Guide",
        href: "/business/guide/bar",
        blurb: "Nightlife licensing and sound regulations",
      },
      {
        label: "Company Registration",
        href: "/business/company-setup/thai-company",
        blurb: "Corporate vehicle before signing lease",
      },
      {
        label: "Fine Dining — Explore",
        href: "/explore/restaurants/fine-dining",
        blurb: "See how premium venues position in Pattaya",
      },
      {
        label: "BOI Promotion",
        href: "/business/company-setup/boi",
        blurb: "Large F&B investments with promoted activities",
      },
      {
        label: "Work permit guide",
        href: "/living/visa/work-permit",
        blurb: "Chef and manager visas",
      },
      {
        label: "Immigration updates",
        href: "/news/expat/immigration",
        blurb: "Staff compliance for foreign hires",
      },
    ],
  },
  bar: {
    metadata: baseMeta(
      "Bar Business Guide | เปิดบาร์",
      "Open a bar or nightlife venue in Pattaya — zoning, entertainment licenses, and compliance.",
    ),
    heroImage: businessImages.nightlife,
    heroAlt: "Pattaya nightlife venue",
    badge: "Elite Zone",
    breadcrumb: "Bar Business",
    title: "Bar & Nightlife",
    titleTh: "เปิดบาร์",
    description:
      "Entertainment venue management — sound limits, operating hours, and licensing under current Thai regulations.",
    cta: {
      eyebrow: "Nightlife Compliance",
      title: "นัดคุยที่ปรึกษา",
      body: "Zoning review, entertainment license timeline, and music copyright (MCT) guidance for live DJs and venues.",
      button: "ปรึกษาเปิดบาร์",
      href: "/business",
    },
    ctaSecondary: {
      button: "See reading order",
      href: "#reading-path",
    },
    readingPath: {
      items: [
        { step: "1", href: "#registration-roadmap" },
        { step: "2", href: "/business/company-setup/thai-company" },
        { step: "3", href: "/business/guide/restaurant" },
        { step: "4", href: "/business/guide/hotel" },
        { step: "5", href: "/living/visa/work-permit" },
      ],
    },
    servicePoints: {
      items: [
        { name: "Pattaya City Hall", note: "Trade and entertainment permits" },
        { name: "Excise Department", note: "Alcohol licenses" },
        { name: "MCT", note: "Music copyright registration" },
      ],
    },
    overview: {
      title: "Operating after regulatory updates",
      body: "Pattaya nightlife spans beach clubs, rooftop bars, and late-night districts. Operators must balance tourism demand with municipal noise ordinances, fire occupancy limits, and accurate reporting for entertainment tax categories.",
    },
    steps: {
      title: "Compliance path",
      items: [
        {
          step: "01",
          title: "Zoning & premises",
          description:
            "Confirm entertainment zoning, lease clauses on hours, and neighbor buffers in residential adjacency.",
        },
        {
          step: "02",
          title: "Licenses stack",
          description:
            "Trade license, อย. if serving food, alcohol license tier, and entertainment permit where applicable.",
        },
        {
          step: "03",
          title: "Sound & safety",
          description:
            "Decibel monitoring, crowd capacity, and security staffing plans for peak nights.",
        },
        {
          step: "04",
          title: "Copyright & media",
          description:
            "MCT licenses for recorded and live music; guest DJ contracts and liability coverage.",
        },
      ],
    },
    checklist: {
      title: "Pre-opening checklist",
      items: [
        "Zoning regulations confirmation letter",
        "Music copyright (MCT) registration",
        "Alcohol storage and service training logs",
        "Fire extinguisher layout and emergency exits signed off",
        "Staff ID and work permits for foreign managers",
      ],
    },
    highlights: {
      title: "Risk areas we review",
      items: [
        {
          title: "Hours & curfews",
          description:
            "District-specific closing times and special event permits.",
        },
        {
          title: "Tourism police liaison",
          description:
            "Incident response and guest conduct policies.",
        },
        {
          title: "Cash & POS",
          description:
            "VAT registration, receipt compliance, and tip pooling rules.",
        },
      ],
    },
    related: [
      {
        label: "Restaurant Guide",
        href: "/business/guide/restaurant",
        blurb: "Kitchen-led venues with bar components",
      },
      {
        label: "Hotel Business Guide",
        href: "/business/guide/hotel",
        blurb: "Lobby bars inside licensed hotels",
      },
      {
        label: "Business Hub",
        href: "/business",
        blurb: "Networking nights for operators",
      },
      {
        label: "Company Registration",
        href: "/business/company-setup/thai-company",
        blurb: "Entity before nightlife filings",
      },
      {
        label: "Immigration updates",
        href: "/news/expat/immigration",
        blurb: "Manager and performer visas",
      },
      {
        label: "Tax & legal news",
        href: "/news/expat/tax-legal",
        blurb: "Entertainment tax and compliance",
      },
    ],
  },
  hotel: {
    metadata: baseMeta(
      "Hotel Business Guide | โรงแรม",
      "Hotel investment in Pattaya — licenses, EIA, five-star standards, and ROI planning.",
    ),
    heroImage: businessImages.hotel,
    heroAlt: "Luxury hotel lobby in Pattaya",
    badge: "High ROI",
    breadcrumb: "Hotel Business",
    title: "Hotel Industry",
    titleTh: "โรงแรม",
    description:
      "Tourism real estate investment — hotel licenses, service standards, and environmental approvals for coastal projects.",
    cta: {
      eyebrow: "Hospitality Investment",
      title: "ดาวน์โหลดคู่มือฉบับเต็ม",
      body: "EIA triggers, hotel license flow, and operator agreements for condo-hotel and full-service assets.",
      button: "ขอคู่มือโรงแรม",
      href: "/business",
    },
    ctaSecondary: {
      button: "See reading order",
      href: "#reading-path",
    },
    readingPath: {
      items: [
        { step: "1", href: "#registration-roadmap" },
        { step: "2", href: "/business/company-setup/thai-company" },
        { step: "3", href: "/business/company-setup/boi" },
        { step: "4", href: "/business/investment/real-estate" },
        { step: "5", href: "/business/investment/economy" },
      ],
    },
    servicePoints: {
      items: [
        { name: "Provincial Tourism Office", note: "Hotel registration" },
        { name: "EIA authority", note: "Large project environmental review" },
        { name: "Local building control", note: "Construction and occupancy" },
      ],
    },
    overview: {
      title: "Hospitality asset classes",
      body: "From boutique beach resorts to high-rise condo-hotels, each model triggers different licensing (โรงแรม vs อพาร์ทเมนท์), foreign quota rules, and fire/life-safety tiers. EEC-linked projects may bundle BOI benefits with larger capex and staffing plans.",
    },
    steps: {
      title: "Hotel license flow",
      items: [
        {
          step: "01",
          title: "Feasibility & structure",
          description:
            "Room count, average daily rate assumptions, and land title review (Chanote, condo regime).",
        },
        {
          step: "02",
          title: "EIA & construction",
          description:
            "Environmental impact for large footprints; building permits and hospitality-grade MEP.",
        },
        {
          step: "03",
          title: "Tourism authority licensing",
          description:
            "Hotel registration, star classification pathway, and TAT marketing compliance.",
        },
        {
          step: "04",
          title: "Operations & brand",
          description:
            "Management contracts, OTA distribution, and SOPs for 5-star service audits.",
        },
      ],
    },
    checklist: {
      title: "EIA & permit standards",
      items: [
        "EIA standards for projects above threshold room keys",
        "Hotel license flow with provincial tourism office",
        "Fire suppression and elevator inspection schedule",
        "Pool and beach safety SOPs for insurers",
        "Foreign room quota reporting for condo-hotels",
      ],
    },
    highlights: {
      title: "Investment lens",
      items: [
        {
          title: "RevPAR drivers",
          description:
            "Convention demand, weekend Bangkok getaways, and international route recovery.",
        },
        {
          title: "Operator selection",
          description:
            "Franchise vs independent — fee stacks and reservation system integration.",
        },
        {
          title: "Exit liquidity",
          description:
            "Strata title resale rules and institutional buyer appetite in Chonburi.",
        },
      ],
    },
    related: [
      {
        label: "Property Investment",
        href: "/business/investment/real-estate",
        blurb: "Acquisition and yield benchmarks",
      },
      {
        label: "BOI Promotion",
        href: "/business/company-setup/boi",
        blurb: "Incentives for large hospitality capex",
      },
      {
        label: "Main Beaches",
        href: "/explore/beaches",
        blurb: "Location context for beachfront assets",
      },
      {
        label: "Restaurant Guide",
        href: "/business/guide/restaurant",
        blurb: "F&B outlets inside the property",
      },
      {
        label: "Bar Business Guide",
        href: "/business/guide/bar",
        blurb: "Lobby bars and event venues",
      },
      {
        label: "Work permit guide",
        href: "/living/visa/work-permit",
        blurb: "GM and executive team visas",
      },
    ],
  },
  "real-estate": {
    metadata: baseMeta(
      "Property Investment | ลงทุนอสังหา",
      "Pattaya real estate investment — condos, villas, yields, foreign quota, and agent partners.",
    ),
    heroImage: businessImages.investment,
    heroAlt: "Pattaya real estate and investment skyline",
    badge: "Investment",
    breadcrumb: "Property Investment",
    title: "Property Investment",
    titleTh: "ลงทุนอสังหา",
    description:
      "Access premium beachfront condos and hillside villas with transparent yield modelling and vetted agency partners.",
    cta: {
      eyebrow: "Real Estate Opportunity",
      title: "ติดต่อพาร์ทเนอร์เอเจนท์",
      body: "Off-plan vs resale, foreign quota checks, and rental management introductions for Jomtien, Pratumnak, and Wong Amat.",
      button: "ขอพอร์ตโครงการ",
      href: "/business",
    },
    ctaSecondary: {
      button: "See reading order",
      href: "#reading-path",
    },
    readingPath: {
      items: [
        { step: "1", href: "#registration-roadmap" },
        { step: "2", href: "/business/investment/economy" },
        { step: "3", href: "/business/company-setup/thai-company" },
        { step: "4", href: "/business/company-setup/boi" },
        { step: "5", href: "/business/guide/hotel" },
      ],
    },
    servicePoints: {
      items: [
        { name: "Chonburi Land Office", note: "Title transfer and registration" },
        { name: "Condominium juristic person", note: "Foreign quota certificate" },
        { name: "Revenue Department (local)", note: "Transfer fees and withholding" },
      ],
    },
    overview: {
      title: "Pattaya property market snapshot",
      body: "Chonburi remains a top second-home and rental market for Bangkok weekenders and international buyers. Condo-hotel structures, freehold vs leasehold, and transfer fee splits vary by project — due diligence on developer track record and occupancy history is essential before reservation deposits.",
    },
    steps: {
      title: "Acquisition process",
      items: [
        {
          step: "01",
          title: "Define strategy",
          description:
            "Yield play, personal use, or hybrid — sets budget, district, and unit size (studio vs 2-bed sea view).",
        },
        {
          step: "02",
          title: "Legal & quota review",
          description:
            "Foreign ownership quota in condo juristic person, lease structures for villas, and company-held assets if applicable.",
        },
        {
          step: "03",
          title: "Due diligence",
          description:
            "Chanote title search, common fee arrears, building inspection, and developer escrow for off-plan.",
        },
        {
          step: "04",
          title: "Transfer & management",
          description:
            "Land Office transfer, utilities handover, and optional rental / housekeeping management contracts.",
        },
      ],
    },
    checklist: {
      title: "Buyer checklist",
      items: [
        "Sales & purchase agreement reviewed by Thai counsel",
        "Foreign quota certificate from juristic person (condos)",
        "Snagging list and defect liability period for new builds",
        "Rental yield assumptions stress-tested (low season)",
        "Insurance and common area fee projections",
      ],
    },
    highlights: {
      title: "Featured segments",
      items: [
        {
          title: "Beachfront condos",
          description:
            "Jomtien and Wong Amat — strong rental demand, check flood and erosion history.",
        },
        {
          title: "Pratumnak luxury",
          description:
            "Clifftop units with premium finishes; higher ticket, lower velocity.",
        },
        {
          title: "EEC-linked industrial land",
          description:
            "Separate track for commercial plots — pair with BOI advisory.",
        },
      ],
    },
    related: [
      {
        label: "Pattaya Economy",
        href: "/business/investment/economy",
        blurb: "Macro drivers behind price growth",
      },
      {
        label: "Hotel Business Guide",
        href: "/business/guide/hotel",
        blurb: "Hospitality assets and licensing",
      },
      {
        label: "Property News",
        href: "/news/business/real-estate",
        blurb: "Latest market headlines",
      },
      {
        label: "Company Registration",
        href: "/business/company-setup/thai-company",
        blurb: "Thai entity for leases and company-held assets",
      },
      {
        label: "BOI Promotion",
        href: "/business/company-setup/boi",
        blurb: "EEC commercial land and promoted projects",
      },
      {
        label: "Retirement Visa Guide",
        href: "/living/visa/retirement",
        blurb: "Long-stay options for second-home buyers",
      },
    ],
  },
  economy: {
    metadata: baseMeta(
      "Pattaya Economy | เศรษฐกิจพัทยา",
      "Pattaya economic overview — tourism, EEC investment, real estate growth, and infrastructure.",
    ),
    heroImage: businessImages.hero,
    heroAlt: "Pattaya city and economic growth",
    badge: "Investment",
    breadcrumb: "Pattaya Economy",
    title: "Pattaya Economy",
    titleTh: "เศรษฐกิจพัทยา",
    description:
      "Key indicators for investors — visitor flows, EEC capital, real estate momentum, and major infrastructure in Chonburi.",
    cta: {
      eyebrow: "Market Intelligence",
      title: "ดูภาพรวมเศรษฐกิจพัทยา",
      body: "Weekly business briefings and sector reports — align your expansion or acquisition timeline with local data.",
      button: "สมัครรับรายงาน",
      href: "/business",
    },
    overview: {
      title: "Why Pattaya’s economy matters",
      body: "Tourism remains the demand engine, while the Eastern Economic Corridor adds logistics, manufacturing, and conference capacity. U-Tapao expansion, high-speed rail links, and industrial estates in Chonburi reshape commuter patterns and skilled labour supply — all feeding hospitality, retail, and residential absorption.",
    },
    steps: {
      title: "How to use this data",
      items: [
        {
          step: "01",
          title: "Tourism baseline",
          description:
            "Track international arrivals, average length of stay, and source-market recovery.",
        },
        {
          step: "02",
          title: "EEC project pipeline",
          description:
            "Map announced capex, job creation, and port/airport upgrades affecting east coast land values.",
        },
        {
          step: "03",
          title: "Real estate comparables",
          description:
            "Condo launch velocity, transfer volumes at Land Office, and rental occupancy surveys.",
        },
        {
          step: "04",
          title: "Policy watch",
          description:
            "Visa incentives, BOI promotions, and municipal infrastructure budgets.",
        },
      ],
    },
    checklist: {
      title: "Indicators we track",
      items: [
        "Annual visitor volume and hotel occupancy",
        "YoY condominium price and transaction trends",
        "EEC committed investment value (public filings)",
        "Major infrastructure milestone dates",
        "Exchange rate impact on foreign buyer segments",
      ],
    },
    highlights: {
      title: "Sector outlook",
      items: [
        {
          title: "Hospitality recovery",
          description:
            "ADR and RevPAR recovery vs 2019 benchmarks by sub-market.",
        },
        {
          title: "Industrial spillover",
          description:
            "Laem Chabang and Rayong demand for housing and services in Pattaya.",
        },
        {
          title: "Digital nomad & long-stay",
          description:
            "LTR and remote-work visas supporting mid-term rentals.",
        },
      ],
    },
    economyStats: [
      { icon: "👥", value: "12M+", label: "Annual Visitors" },
      { icon: "📈", value: "+18%", label: "Real Estate Growth (YoY)" },
      { icon: "💰", value: "฿1.3T", label: "EEC Investment Value" },
      { icon: "🏗️", value: "200+", label: "Infrastructure Projects" },
      { icon: "📊", value: "14%", label: "EEC GDP Share (Thailand)" },
      { icon: "🏭", value: "30+", label: "Industrial Estates Zones" },
    ],
    related: [
      {
        label: "Property Investment",
        href: "/business/investment/real-estate",
        blurb: "Turn macro trends into asset picks",
      },
      {
        label: "BOI Promotion",
        href: "/business/company-setup/boi",
        blurb: "Incentive-led industrial projects",
      },
      {
        label: "Business Networking",
        href: "/business/networking/events",
        blurb: "Meet investors and operators locally",
      },
    ],
  },
  events: {
    metadata: baseMeta(
      "Business Networking | Networking ธุรกิจ",
      "Pattaya business events — EEC summits, networking nights, and industry conferences.",
    ),
    heroImage: businessImages.nightlife,
    heroAlt: "Business networking event in Pattaya",
    badge: "Networking",
    breadcrumb: "Business Events",
    title: "Business Networking",
    titleTh: "Networking ธุรกิจ",
    description:
      "Connect with investors, operators, and service providers at curated Pattaya business events throughout the year.",
    cta: {
      eyebrow: "Upcoming Events",
      title: "ลงทะเบียนล่วงหน้า",
      body: "Priority seating for EEC summits and chamber mixers — RSVP for calendar invites and speaker line-ups.",
      button: "ดูตารางกิจกรรม",
      href: "/business/networking/events",
    },
    overview: {
      title: "Why attend local events",
      body: "Face-to-face networking still closes deals in hospitality, property, and cross-border services. Pattaya hosts chamber breakfasts, EEC investment briefings, and vertical meetups (F&B, hotel, tech) — ideal for founders relocating from Bangkok or overseas.",
    },
    steps: {
      title: "Getting the most from events",
      items: [
        {
          step: "01",
          title: "Pick the right format",
          description:
            "Summits for macro/EEC content; after-hours mixers for operator introductions.",
        },
        {
          step: "02",
          title: "Prepare your pitch",
          description:
            "30-second intro, Thai/English business cards, and clear ask (capital, partner, permit).",
        },
        {
          step: "03",
          title: "Follow up fast",
          description:
            "Line or email within 48 hours — reference the session you met at.",
        },
        {
          step: "04",
          title: "Join recurring circles",
          description:
            "Chamber and co-working hosts run monthly tables — consistency builds trust.",
        },
      ],
    },
    checklist: {
      title: "Event prep checklist",
      items: [
        "Register early for limited-seat summits",
        "Business attire or smart casual per venue (hotel vs rooftop)",
        "Bring printed materials sparingly — QR to deck preferred",
        "Note parking / Grab drop-off for beach hotels",
        "Calendar block for follow-up calls the week after",
      ],
    },
    highlights: {
      title: "Who you will meet",
      items: [
        {
          title: "Investors & developers",
          description:
            "EEC industrial, condo sponsors, and boutique hotel groups.",
        },
        {
          title: "Professional services",
          description:
            "Law, accounting, visa, and BOI consultancies with Chonburi desks.",
        },
        {
          title: "Operators",
          description:
            "Restaurant, bar, and tourism entrepreneurs sharing permit lessons learned.",
        },
      ],
    },
    networkingEvents: [
      {
        day: "24",
        month: "OCT",
        year: "2024",
        title: "Pattaya EEC Investment Summit",
        location: "Royal Cliff Grand Hotel, Pattaya",
      },
      {
        day: "12",
        month: "NOV",
        year: "2024",
        title: "Business After Hours: Networking Night",
        location: "Hilton Pattaya - Horizon Rooftop",
      },
      {
        day: "05",
        month: "DEC",
        year: "2024",
        title: "Digital Nomad & Tech Hub Conference",
        location: "Pattaya City Hall - Convention Center",
      },
    ],
    related: [
      {
        label: "Company Registration",
        href: "/business/company-setup/thai-company",
        blurb: "Meet legal partners on-site",
      },
      {
        label: "Pattaya Economy",
        href: "/business/investment/economy",
        blurb: "Data behind the keynote decks",
      },
      {
        label: "Business Hub",
        href: "/business",
        blurb: "All services in one place",
      },
    ],
  },
};
