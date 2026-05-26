import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import {
  Bus,
  CalendarDays,
  Car,
  CreditCard,
  Crown,
  Footprints,
  Hand,
  Handshake,
  Home,
  Hospital,
  IdCard,
  Key,
  Landmark,
  Lock,
  Shield,
  Shirt,
  Star,
  Users,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { livingImages } from "@/lib/design/living-images";

const culturalDos: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Handshake,
    title: "The Wai Protocol",
    text: "Bow with palms together to show respect to elders, officials, and new acquaintances.",
  },
  {
    icon: Users,
    title: "Social Hierarchy",
    text: "Acknowledge age and status with appropriate gestures and a calm, polite tone of voice.",
  },
  {
    icon: Shirt,
    title: "Dress Codes",
    text: "Wear modest clothing (covering shoulders and knees) when visiting temples and official buildings.",
  },
  {
    icon: Landmark,
    title: "Respect for Monks",
    text: "Give up your seat and maintain a respectful distance; women should avoid any physical contact.",
  },
];

const culturalDonts: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Hand,
    title: "Touching the Head",
    text: "Considered the most sacred part of the body; avoid touching anyone's head, even children.",
  },
  {
    icon: Footprints,
    title: "Pointing Feet",
    text: "Feet are seen as the lowest part of the body; never point them at people, monks, or images of the Buddha.",
  },
  {
    icon: VolumeX,
    title: "Raising Voice",
    text: "Maintain a calm demeanor; losing your temper is seen as losing face and is highly counterproductive.",
  },
  {
    icon: Crown,
    title: "Disrespecting the Monarchy",
    text: "Always show utmost respect for the Royal Family. Discussion of the monarchy is subject to strict laws.",
  },
];

const scamAlerts = [
  "Unsecured bank deposits via offshore accounts.",
  'Unofficial agents promising "Express" stamps.',
  "Unauthorized crypto ATM exchanges in walking street.",
  "Fake property listings on social media.",
  "Unauthorized taxi fare overcharging.",
];

type LivingHubCard = {
  title: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  excerpt: string;
  cta: string;
  href: string;
};

function HubCardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D7CBBA]/50 text-[#B29475]">
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
    </span>
  );
}

const commercialCards: LivingHubCard[] = [
  {
    title: "Thailand Elite",
    icon: Star,
    image: livingImages.thailandElite,
    imageAlt: "Thailand Elite Visa",
    excerpt:
      "The ultimate 5 to 20 year visa solution designed for high-net-worth residents seeking concierge-level service and exclusive privileges.",
    cta: "Apply Now",
    href: "/living/visa/thailand-elite",
  },
  {
    title: "Work Permit",
    icon: IdCard,
    image: livingImages.workPermit,
    imageAlt: "Work Permit Document",
    excerpt:
      "Comprehensive legal frameworks for professional employment, business setup, and the specialized Digital Nomad LTR visa category.",
    cta: "Legal Compliance",
    href: "/living/visa/work-permit",
  },
  {
    title: "Rentals",
    icon: Home,
    image: livingImages.rentals,
    imageAlt: "Luxury Rental Interior",
    excerpt:
      "Navigating rental contracts for condos and houses, security deposits, and the mandatory TM30 reporting duties for tenants.",
    cta: "View Listings",
    href: "/living/housing/rentals",
  },
  {
    title: "Medical",
    icon: Hospital,
    image: livingImages.medical,
    imageAlt: "World Class Medical Facility",
    excerpt:
      "Access world-class healthcare with our curated directory of international hospitals and specialized clinics in the Pattaya region.",
    cta: "Hospital List",
    href: "/living/healthcare/hospitals",
  },
];

const infoCards: LivingHubCard[] = [
  {
    title: "Ownership",
    icon: Key,
    image: livingImages.ownership,
    imageAlt: "Ownership",
    excerpt:
      "Understand the legal frameworks for foreign property ownership and title deed transfers in Thailand.",
    cta: "Legal Guide",
    href: "/living/housing/ownership",
  },
  {
    title: "Utilities Cost",
    icon: CreditCard,
    image: livingImages.utilities,
    imageAlt: "Utilities Cost",
    excerpt:
      "Manage your monthly overheads including electricity, water, and high-speed fiber internet logistics.",
    cta: "Budget Tools",
    href: "/living/cost-of-living/utilities",
  },
  {
    title: "Insurance",
    icon: Shield,
    image: livingImages.insurance,
    imageAlt: "Insurance",
    excerpt:
      "Secure your future with premium international health insurance plans tailored for long-term expats.",
    cta: "View Policies",
    href: "/living/healthcare/insurance",
  },
  {
    title: "Driving",
    icon: Car,
    image: livingImages.driving,
    imageAlt: "Driving",
    excerpt:
      "Step-by-step guide to obtaining your Thai driving license and navigating local traffic laws.",
    cta: "License Guide",
    href: "/living/transportation/driving",
  },
  {
    title: "Culture",
    icon: Landmark,
    image: livingImages.cultureCard,
    imageAlt: "Culture",
    excerpt:
      "Master the social nuances of Pattaya, from traditional etiquette to modern business networking.",
    cta: "Learn More",
    href: "/living/culture/thai-culture",
  },
  {
    title: "90-Day Reporting",
    icon: CalendarDays,
    image: livingImages.ninetyDay,
    imageAlt: "90-Day Reporting",
    excerpt:
      "Automate your immigration compliance with our simplified guide to the mandatory 90-day reporting.",
    cta: "Process Guide",
    href: "/living/visa/90-day-report",
  },
  {
    title: "Local Transport",
    icon: Bus,
    image: livingImages.localTransport,
    imageAlt: "Local Transport",
    excerpt:
      "Expert tips for using Songthaews, ferries, and inter-city bus systems efficiently and safely.",
    cta: "Transit Map",
    href: "/living/transportation/songthaew",
  },
  {
    title: "Safety Guide",
    icon: Lock,
    image: livingImages.safetyGuide,
    imageAlt: "Safety Guide",
    excerpt:
      "Complete directory of emergency services, tourist police contacts, and safe-living protocols.",
    cta: "Emergency Info",
    href: "/living/safety/emergency-guide",
  },
];

function SectionIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#191c1d] md:text-3xl">{title}</h2>
      <p className="mt-1 text-[#444748]">{description}</p>
    </div>
  );
}

function GridInfoCard({
  title,
  icon,
  image,
  imageAlt,
  excerpt,
  cta,
  href,
}: (typeof infoCards)[number]) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-sm transition-all hover:border-[#455f88]/50"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-base font-bold text-[#191c1d]">{title}</h4>
          <HubCardIcon icon={icon} />
        </div>
        <p className="mb-6 flex-grow text-sm leading-relaxed text-[#444748]">
          {excerpt}
        </p>
        <span className="mt-auto text-xs font-bold uppercase tracking-wider text-[#455f88] group-hover:underline">
          {cta} →
        </span>
      </div>
    </Link>
  );
}

export function LivingHubPage() {
  return (
    <div data-full-bleed className="bg-[#f8f9fa] pb-16 text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>
      <div className="mx-auto max-w-[1280px] px-5 py-8 md:px-16">
        {/* Hero */}
        <section className="mb-20">
          <div className="relative flex h-[400px] items-end overflow-hidden rounded-xl md:h-[500px]">
            <Image
              src={livingImages.hero}
              alt="Pattaya skyline"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191c1d]/90 via-[#191c1d]/30 to-transparent" />
            <div className="relative w-full max-w-3xl p-8 md:p-16">
              <span className="mb-4 inline-block rounded-sm bg-[#ae2f34] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                The Complete Expat Hub
              </span>
              <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                Living the Dream in Pattaya
              </h1>
              <p className="max-w-2xl text-lg text-white/80">
                The ultimate residency, business, and lifestyle resource for the
                global citizen looking to call the City of Fun home.
              </p>
            </div>
          </div>
        </section>

        {/* Expat Essentials */}
        <section className="mb-20">
          <SectionIntro
            title="Expat Essentials"
            description="High-priority residency and security guides for seamless relocation."
          />

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="group flex flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={livingImages.retirementVisa}
                    alt="Retirement lifestyle in Pattaya"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-grow flex-col p-8">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#ae2f34]">
                    Visa & Immigration
                  </span>
                  <h3 className="mb-4 text-xl font-semibold">
                    Retirement Visa (Non-O / OA) Guide
                  </h3>
                  <p className="mb-8 flex-grow leading-relaxed text-[#444748]">
                    Our premium guide covers step-by-step documentation, financial
                    seasoning requirements, and hassle-free renewal strategies for
                    expats over 50.
                  </p>
                  <Link
                    href="/living/visa/retirement"
                    className="mt-auto inline-flex w-fit rounded-full bg-[#B29475] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#B29475]/25 transition-all hover:bg-[#B29475]/90"
                  >
                    Get Visa Quote
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={livingImages.realEstate}
                    alt="Luxury real estate in Pattaya"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-grow flex-col p-8">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#455f88]">
                    Real Estate
                  </span>
                  <h3 className="mb-4 text-xl font-semibold">
                    Mastering Pattaya&apos;s Condo Market
                  </h3>
                  <p className="mb-8 flex-grow leading-relaxed text-[#444748]">
                    Navigate investment, Freehold vs Leasehold, and the critical
                    49% Foreigner Ownership Quota rules with our verified legal
                    framework.
                  </p>
                  <Link
                    href="/living/housing/condo-buying"
                    className="mt-auto text-sm font-bold text-[#455f88] hover:underline"
                  >
                    View Property Ads →
                  </Link>
                </div>
              </article>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Scam alerts */}
              <div className="flex flex-col justify-center rounded-xl border-l-[12px] border-[#ae2f34] bg-[#D7CBBA] p-8">
                <div className="relative mb-8 h-48 overflow-hidden rounded-lg">
                  <Image
                    src={livingImages.scamAlerts}
                    alt="Pattaya tourist police kiosk"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ae2f34] text-white">
                    ⚠
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#ae2f34]">
                    Urgent: Scam Alerts
                  </h4>
                </div>
                <ul className="mb-10 space-y-4">
                  {scamAlerts.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ae2f34]" />
                      <p className="text-sm font-bold leading-tight text-[#8c1520]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mb-8">
                  <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#ae2f34]">
                    Safety Essentials
                  </h5>
                  <ul className="space-y-2 text-sm text-[#8c1520]">
                    <li>✓ Use only licensed real estate agencies</li>
                    <li>✓ Verify credentials at the Immigration Office</li>
                  </ul>
                </div>
                <div className="mt-auto rounded-lg border border-[#ae2f34]/10 bg-white/50 p-6">
                  <h5 className="mb-2 font-bold text-[#191c1d]">
                    Emergency Resources
                  </h5>
                  <p className="mb-4 text-xs text-[#444748]">
                    Access immediate help and local protocols.
                  </p>
                  <Link
                    href="/living/safety/scam-alerts"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ae2f34] py-3 text-xs font-bold text-white transition-colors hover:bg-[#8c1520]"
                  >
                    Download Safety Guide PDF
                  </Link>
                </div>
              </div>

              {/* Culture & etiquette */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden md:h-56">
                  <Image
                    src={livingImages.cultureEtiquette}
                    alt="Thai culture and etiquette"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-white/80">
                      Guide for Expats
                    </span>
                    <h4 className="text-2xl font-semibold text-white">
                      The Thai Way
                    </h4>
                  </div>
                </div>
                <div className="flex-grow p-8">
                  <p className="mb-8 text-sm leading-relaxed text-[#444748]">
                    Pattaya is a vibrant international city, but social harmony
                    remains rooted in traditional Thai values. Mastering these
                    cultural nuances ensures a respectful and rewarding residency.
                  </p>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <h5 className="mb-4 flex items-center gap-2 border-b border-[#455f88]/10 pb-2 text-sm font-bold uppercase tracking-widest text-[#455f88]">
                        ✓ Cultural Dos
                      </h5>
                      <ul className="space-y-4">
                        {culturalDos.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.title}>
                              <p className="mb-1 flex items-center gap-2 text-sm font-bold">
                                <Icon
                                  className="h-4 w-4 shrink-0 text-[#455f88]"
                                  aria-hidden
                                />
                                {item.title}
                              </p>
                              <p className="text-xs leading-relaxed text-[#444748]">
                                {item.text}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-4 flex items-center gap-2 border-b border-[#ae2f34]/10 pb-2 text-sm font-bold uppercase tracking-widest text-[#ae2f34]">
                        ✕ Cultural Don&apos;ts
                      </h5>
                      <ul className="space-y-4">
                        {culturalDonts.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.title}>
                              <p className="mb-1 flex items-center gap-2 text-sm font-bold">
                                <Icon
                                  className="h-4 w-4 shrink-0 text-[#ae2f34]"
                                  aria-hidden
                                />
                                {item.title}
                              </p>
                              <p className="text-xs leading-relaxed text-[#444748]">
                                {item.text}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#c4c7c8]/30 bg-[#f3f4f5] px-8 py-6">
                  <span className="text-xs italic text-[#444748]">
                    Learn more about local customs and integration.
                  </span>
                  <Link
                    href="/living/culture/etiquette"
                    className="text-xs font-bold uppercase tracking-widest text-[#455f88] hover:underline"
                  >
                    Detailed Protocol Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Potential */}
        <section className="mb-20">
          <SectionIntro
            title="Commercial Potential"
            description="Your professional directory for seamless daily living and administrative logistics."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {commercialCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex min-h-[280px] flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white pb-6 shadow-sm transition-all hover:border-[#455f88]/50"
              >
                <div className="relative mb-4 aspect-video w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />
                </div>
                <div className="flex flex-grow flex-col px-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-bold text-[#191c1d]">{card.title}</h4>
                    <HubCardIcon icon={card.icon} />
                  </div>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-[#444748]">
                    {card.excerpt}
                  </p>
                  <span className="text-xs font-bold text-[#455f88] group-hover:underline">
                    {card.cta.toUpperCase()} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Steady Traffic & Informational */}
        <section className="mb-20">
          <SectionIntro
            title="Steady Traffic & Informational"
            description="Essential guides for your long-term success and daily lifestyle integration."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <GridInfoCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        {/* Lifestyle & Convenience */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="flex flex-col items-center gap-10 rounded-xl border border-[#c4c7c8]/30 bg-white p-10 shadow-sm transition-shadow hover:shadow-md lg:col-span-8 md:flex-row">
              <div className="flex-1">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#ae2f34]">
                  Finance Analytics
                </span>
                <h3 className="mb-6 text-2xl font-semibold">
                  Pattaya Cost of Living 2024
                </h3>
                <p className="mb-8 leading-relaxed text-[#444748]">
                  A professional breakdown of monthly expenses for a high-fidelity
                  Urban Hybrid lifestyle in Pattaya&apos;s premium districts.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Housing & Luxury Utilities", pct: 45, color: "bg-[#455f88]" },
                    { label: "Gourmet Dining & Food", pct: 25, color: "bg-[#ae2f34]" },
                    { label: "Leisure & Wellness", pct: 15, color: "bg-[#adc7f7]" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="mb-2 flex justify-between text-sm font-bold">
                        <span className="uppercase tracking-wider text-[#444748]">
                          {bar.label}
                        </span>
                        <span>{bar.pct}%</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#edeeef]">
                        <div
                          className={`h-full ${bar.color}`}
                          style={{ width: `${bar.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full rounded-xl border border-[#c4c7c8]/20 bg-[#edeeef] p-8 text-center md:w-72">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#444748]">
                  Avg. Monthly Budget
                </p>
                <p className="mb-6 text-5xl font-bold tracking-tighter text-[#455f88]">
                  $1,850
                </p>
                <p className="px-4 text-xs italic leading-relaxed text-[#444748]">
                  Calculated for a premium high-rise residence with modern amenities.
                </p>
                <hr className="my-6 border-[#c4c7c8]/30" />
                <Link
                  href="/living/cost-of-living/food"
                  className="flex w-full items-center justify-center gap-2 text-sm font-bold text-[#455f88] hover:text-[#3f5882]"
                >
                  View Full Analysis →
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-xl border border-[#455f88]/10 bg-[#D7CBBA] p-10 lg:col-span-4">
              <h3 className="mb-4 text-xl font-semibold text-[#3f5882]">
                Elite Mobility
              </h3>
              <p className="mb-10 text-sm leading-relaxed text-[#3f5882]/80">
                Verified ride-hailing platforms for transparent, safe, and
                professional transportation across the city.
              </p>
              <div className="space-y-4">
                <Link
                  href="/living/transportation/ride-apps"
                  className="group flex items-center justify-between rounded-xl border border-transparent bg-white/90 p-5 transition-all hover:border-[#455f88]/20 hover:bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00B14F] text-lg font-bold text-white shadow-sm">
                      G
                    </div>
                    <div>
                      <p className="text-sm font-bold">Grab Premium</p>
                      <p className="text-xs text-[#444748]">
                        Priority Transport & Delivery
                      </p>
                    </div>
                  </div>
                  <span className="text-[#444748] group-hover:text-[#455f88]">
                    ↓
                  </span>
                </Link>
                <Link
                  href="/living/transportation/ride-apps"
                  className="group flex items-center justify-between rounded-xl border border-transparent bg-white/90 p-5 transition-all hover:border-[#455f88]/20 hover:bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0047FF] text-lg font-bold text-white shadow-sm">
                      B
                    </div>
                    <div>
                      <p className="text-sm font-bold">Bolt</p>
                      <p className="text-xs text-[#444748]">Optimized City Travel</p>
                    </div>
                  </div>
                  <span className="text-[#444748] group-hover:text-[#455f88]">
                    ↓
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
