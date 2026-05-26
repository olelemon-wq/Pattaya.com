import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import {
  Anchor,
  Building2,
  Palmtree,
  Sunset,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { yachtImages } from "@/lib/design/yacht-images";

const featuredCharters = [
  {
    id: "azure-catamaran",
    name: "Azure Spirit Catamaran",
    nameTh: "อาซัวร์ สปิริต คาตามารัน",
    type: "Catamaran",
    guests: "Max 15 guests",
    price: "From THB 45,000 / charter",
    image: yachtImages.charterCatamaran,
    tags: ["Featured", "Catamaran", "Sunset"],
    excerpt:
      "Spacious twin-hull sailing with shaded decks — ideal for groups, celebrations, and calm Gulf afternoons.",
  },
  {
    id: "pearl-motor",
    name: "Pattaya Pearl Motor Yacht",
    nameTh: "พัทยา เพิร์ล มอเตอร์ยอร์ช",
    type: "Motor yacht",
    guests: "Max 12 guests",
    price: "From THB 68,000 / charter",
    image: yachtImages.charterMotor,
    tags: ["Motor yacht", "Speed", "Islands"],
    excerpt:
      "Fast island hops with air-conditioned saloon — cover Koh Larn and nearby bays in a single day.",
  },
  {
    id: "royal-horizon",
    name: "Royal Horizon Superyacht",
    nameTh: "รอยัล ฮอไรซัน ซูเปอร์ยอร์ช",
    type: "Superyacht",
    guests: "Max 20 guests",
    price: "From THB 120,000 / charter",
    image: yachtImages.charterSuperyacht,
    tags: ["Superyacht", "VIP", "Catering"],
    excerpt:
      "Full-service crew, premium catering, and private cabins for corporate events and milestone trips.",
  },
];

const charterGuideCards: ExploreGuideCardData[] = featuredCharters.map(
  (charter) => ({
    id: charter.id,
    name: charter.name,
    nameTh: charter.nameTh,
    image: charter.image,
    tags: charter.tags,
    excerpt: charter.excerpt,
    details: [
      { icon: "anchor", label: "Vessel", value: charter.type },
      { icon: "users", label: "Capacity", value: charter.guests },
      { icon: "sparkles", label: "Price", value: charter.price },
    ],
  }),
);

const cruiseRoutes = [
  {
    title: "Sunset Cruise",
    titleTh: "ล่องเรือชมพระอาทิตย์ตก",
    duration: "3 hours",
    description:
      "Golden-hour sailing along Pattaya Bay with champagne service and optional live DJ.",
    href: "/explore/beaches",
    icon: Sunset,
  },
  {
    title: "Koh Khram Private Escape",
    titleTh: "ทริปส่วนตัวเกาะคราม",
    duration: "Full day",
    description:
      "Secluded anchorage, snorkeling, and beach picnic — ideal for VIP groups.",
    href: "/explore/islands/koh-larn",
    icon: Palmtree,
  },
  {
    title: "Koh Larn Adventure",
    titleTh: "ผจญภัยเกาะล้าน",
    duration: "6–8 hours",
    description:
      "Island-hopping with water toys, lunch at sea, and flexible beach stops.",
    href: "/explore/islands/koh-larn",
    icon: Anchor,
  },
];

const marinaAmenities = [
  "Deep-water berths up to 45m",
  "24/7 security & concierge",
  "Fuel dock & technical services",
  "Crew lounge & provisioning",
  "Luxury retail & waterfront dining",
];

export function YachtMarinaPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="yacht-hero-title"
      >
        <Image
          src={yachtImages.hero}
          alt="Luxury yacht sailing in Pattaya Bay"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/70 via-[#191c1d]/50 to-[#191c1d]/85"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(65vh,480px)] max-w-[1280px] flex-col justify-end px-5 pb-14 pt-20 md:px-16 md:pb-16">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
              <li>
                <Link href="/explore" className="hover:text-white">
                  Explore
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/80">Luxury</span>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">Yacht & Marina</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Luxury
          </span>
          <h1
            id="yacht-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Yacht & Marina
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">เรือยอร์ช</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Yacht charters and marina experiences in Pattaya — curated for
            discerning travelers and private celebrations at sea.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title="Featured charters"
          description="Premium yacht rentals in Pattaya Bay — catamaran afternoons to full-day superyacht itineraries."
          prevLabel="Previous charters"
          nextLabel="Next charters"
          items={charterGuideCards}
        />

        <section className="mb-16 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Popular cruise routes
          </h2>
          <p className="mt-1 text-sm text-[#747878]">
            เส้นทางยอดนิยม — curated sailing experiences
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {cruiseRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <Link
                  key={route.title}
                  href={route.href}
                  className="group flex gap-4 rounded-2xl border border-[#c4c7c8]/30 bg-[#fdf8fb] p-5 transition hover:border-[#B52E88]/30 hover:shadow-md sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#B52E88]/10 text-[#B52E88] transition group-hover:bg-[#B52E88] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#191c1d] group-hover:text-[#B52E88]">
                        {route.title}
                      </h3>
                      <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#747878] ring-1 ring-[#c4c7c8]/40">
                        {route.duration}
                      </span>
                    </div>
                    <p className="text-xs text-[#747878]">{route.titleTh}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#444748]">
                      {route.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-16 overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src={yachtImages.marina}
                alt="Pattaya marina and luxury yachts at dock"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B52E88]/10 text-[#B52E88]">
                <Building2 className="h-7 w-7" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#B52E88]">
                Marina Infrastructure
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#191c1d] md:text-3xl">
                World-class marina facilities
              </h2>
              <p className="mt-4 leading-relaxed text-[#444748]">
                Pattaya&apos;s premier marinas combine deep-water berths,
                white-glove concierge, and waterfront dining — designed for
                charter guests and long-stay cruisers exploring the Gulf of
                Thailand.
              </p>
              <ul className="mt-6 space-y-3">
                {marinaAmenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#444748]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B52E88]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={yachtImages.marinaLifestyle}
                  alt="Marina lifestyle and waterfront amenities"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-[#191c1d] px-6 py-10 text-center sm:px-12 sm:py-12">
          <h2 className="text-xl font-bold text-white md:text-2xl">
            Plan your private charter
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">
            Corporate events, weddings, and bespoke itineraries — luxury
            partners respond within 24 hours.
          </p>
          <Link
            href="/explore"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#B52E88] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#B52E88]/90"
          >
            Contact for charter
          </Link>
        </section>
      </div>
    </div>
  );
}
