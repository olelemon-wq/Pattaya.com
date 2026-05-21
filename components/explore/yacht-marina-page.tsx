import Image from "next/image";
import Link from "next/link";
import {
  IconAnchor,
  IconIsland,
  IconMarina,
  IconSunset,
  IconUsers,
} from "@/components/explore/yacht-ui-icons";
import { yachtImages } from "@/lib/design/yacht-images";

const featuredCharters = [
  {
    name: "Azure Spirit Catamaran",
    nameTh: "อาซัวร์ สปิริต คาตามารัน",
    type: "Catamaran",
    guests: 15,
    price: 45000,
    image: yachtImages.charterCatamaran,
    featured: true,
    href: "/explore/luxury/yacht",
  },
  {
    name: "Pattaya Pearl Motor Yacht",
    nameTh: "พัทยา เพิร์ล มอเตอร์ยอร์ช",
    type: "Motor Yacht",
    guests: 12,
    price: 68000,
    image: yachtImages.charterMotor,
    href: "/explore/luxury/yacht",
  },
  {
    name: "Royal Horizon Superyacht",
    nameTh: "รอยัล ฮอไรซัน ซูเปอร์ยอร์ช",
    type: "Superyacht",
    guests: 20,
    price: 120000,
    image: yachtImages.charterSuperyacht,
    href: "/explore/luxury/yacht",
  },
];

const cruiseRoutes = [
  {
    title: "Sunset Cruise",
    titleTh: "ล่องเรือชมพระอาทิตย์ตก",
    duration: "3 hours",
    description:
      "Golden-hour sailing along Pattaya Bay with champagne service and live DJ optional.",
    icon: IconSunset,
    href: "/explore/beaches",
  },
  {
    title: "Koh Khram Private Escape",
    titleTh: "ทริปส่วนตัวเกาะคราม",
    duration: "Full day",
    description:
      "Secluded island anchorage, snorkeling, and beach picnic — ideal for VIP groups.",
    icon: IconIsland,
    href: "/explore/islands/koh-larn",
  },
  {
    title: "Koh Larn Adventure",
    titleTh: "ผจญภัยเกาะล้าน",
    duration: "6–8 hours",
    description:
      "Island-hopping with water toys, lunch at sea, and flexible beach stops.",
    icon: IconAnchor,
    href: "/explore/islands/koh-larn",
  },
];

const marinaAmenities = [
  "Deep-water berths up to 45m",
  "24/7 security & concierge",
  "Fuel dock & technical services",
  "Crew lounge & provisioning",
  "Luxury retail & waterfront dining",
];

function CharterCard({
  name,
  nameTh,
  type,
  guests,
  price,
  image,
  featured,
  href,
}: (typeof featuredCharters)[number]) {
  return (
    <article className="yacht-charter-card group flex flex-col overflow-hidden rounded-2xl border border-[#e8ecf0] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent"
          aria-hidden
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0A192F] shadow-sm">
          {type}
        </span>
        {featured && (
          <span className="absolute right-4 top-4 rounded-full bg-[#FF8C00] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#0A192F]">{name}</h3>
        <p className="text-sm text-[#777777]">{nameTh}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#444748] ring-1 ring-[#e2e8f0]">
            <IconUsers />
            Max {guests} guests
          </span>
        </div>
        <p className="mt-4 text-sm text-[#777777]">
          Starting from{" "}
          <span className="text-lg font-bold tabular-nums text-[#0A192F]">
            THB {price.toLocaleString("th-TH")}
          </span>
          <span className="text-xs"> / charter</span>
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#FF8C00] px-4 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#e67e00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8C00]"
        >
          Inquire Now / ติดต่อเช่าเรือ
        </Link>
      </div>
    </article>
  );
}

function RouteBlock({
  title,
  titleTh,
  duration,
  description,
  icon: Icon,
  href,
  index,
}: (typeof cruiseRoutes)[number] & { index: number }) {
  return (
    <Link
      href={href}
      className="yacht-route-card group flex gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition duration-300 hover:border-[#FF8C00]/40 hover:shadow-md sm:p-6"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A192F] text-white transition group-hover:bg-[#FF8C00]">
        <Icon className="h-7 w-7" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-bold text-[#0A192F] group-hover:text-[#FF8C00]">
            {title}
          </h3>
          <span className="rounded-full bg-[#F8FAFC] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#777777] ring-1 ring-[#e2e8f0]">
            {duration}
          </span>
        </div>
        <p className="text-xs text-[#777777]">{titleTh}</p>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">
          {description}
        </p>
        <span className="mt-3 inline-block text-sm font-semibold text-[#0A192F] group-hover:underline">
          View route details →
        </span>
      </div>
    </Link>
  );
}

export function YachtMarinaPage() {
  return (
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      {/* Hero */}
      <section
        className="relative min-h-[min(75vh,580px)] overflow-hidden"
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
          className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/92 via-[#0A192F]/75 to-[#132f4c]/85"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,140,0,0.12),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(75vh,580px)] max-w-[1280px] flex-col justify-end px-4 pb-20 pt-24 sm:px-6 sm:pb-24">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/70 sm:text-sm">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/explore" className="transition hover:text-white">
                  Explore
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/90">Yacht & Marina</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#a7f3d0] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#065f46]">
            Luxury
          </span>
          <h1
            id="yacht-hero-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            Yacht & Marina | เรือยอร์ช
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Yacht charters and marina experiences in Pattaya — curated for
            discerning travelers and private celebrations at sea.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-16 px-4 py-14 sm:px-6 sm:py-20">
        {/* Featured charters */}
        <section aria-labelledby="charters-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8C00]">
                Luxury Ads
              </p>
              <h2
                id="charters-title"
                className="mt-1 text-2xl font-bold tracking-tight text-[#0A192F] sm:text-3xl"
              >
                Featured Charters
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[#777777]">
                Premium yacht rentals — เรือยอร์ชและเรือเช่าพรีเมียมในพัทยา
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCharters.map((charter) => (
              <CharterCard key={charter.name} {...charter} />
            ))}
          </div>
        </section>

        {/* Cruise routes */}
        <section
          aria-labelledby="routes-title"
          className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <h2
            id="routes-title"
            className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            Popular Cruise Routes
          </h2>
          <p className="mt-1 text-sm text-[#777777]">
            เส้นทางยอดนิยม — curated sailing experiences
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {cruiseRoutes.map((route, index) => (
              <RouteBlock key={route.title} {...route} index={index} />
            ))}
          </div>
        </section>

        {/* Marina spotlight */}
        <section
          aria-labelledby="marina-title"
          className="overflow-hidden rounded-3xl border border-[#0A192F]/10 bg-white shadow-lg"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src={yachtImages.marina}
                alt="Pattaya marina and luxury yachts at dock"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A192F]/20 lg:bg-gradient-to-l lg:from-[#0A192F]/40 lg:to-transparent"
                aria-hidden
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A192F] text-white">
                <IconMarina className="h-7 w-7" />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8C00]">
                Marina Infrastructure
              </p>
              <h2
                id="marina-title"
                className="mt-2 text-2xl font-bold text-[#0A192F] sm:text-3xl"
              >
                World-Class Marina Facilities
              </h2>
              <p className="mt-1 text-sm text-[#777777]">
                ท่าเรือระดับโลกในพัทยา — lifestyle & docking
              </p>
              <p className="mt-4 leading-relaxed text-[#444748]">
                Pattaya&apos;s premier marinas combine deep-water berths,
                white-glove concierge, and waterfront dining — designed for
                superyacht owners, charter guests, and long-stay cruisers
                exploring the Gulf of Thailand.
              </p>
              <ul className="mt-6 space-y-3">
                {marinaAmenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#444748]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8C00]"
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
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <Link
                href="/explore"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-xl bg-[#FF8C00] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#e67e00]"
              >
                Explore Marina Partners
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="rounded-3xl px-6 py-10 text-center sm:px-12 sm:py-12"
          style={{
            background: "linear-gradient(135deg, #0A192F 0%, #132f4c 100%)",
          }}
          aria-labelledby="yacht-cta-title"
        >
          <h2
            id="yacht-cta-title"
            className="text-xl font-bold text-white sm:text-2xl"
          >
            Plan your private charter
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">
            Corporate events, weddings, and bespoke itineraries — our luxury
            partners respond within 24 hours.
          </p>
          <Link
            href="/explore/luxury/yacht"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#FF8C00] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#e67e00]"
          >
            Request a Private Quote
          </Link>
        </section>
      </div>
    </div>
  );
}
