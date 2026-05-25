import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import Image from "next/image";
import Link from "next/link";
import { exploreImages } from "@/lib/design/explore-images";

const categories = [
  { label: "Beaches", href: "/explore/beaches", icon: "🏖️", active: true },
  { label: "Islands", href: "/explore/islands/koh-larn", icon: "🛶" },
  { label: "Luxury Dining", href: "/explore/restaurants/fine-dining", icon: "🍽️" },
  { label: "Local Food", href: "/explore/restaurants/street-food", icon: "🍜" },
  { label: "Cafes", href: "/explore/cafes", icon: "☕" },
  { label: "Shopping", href: "/explore/shopping/malls", icon: "🛍️" },
  { label: "Markets", href: "/explore/shopping/markets", icon: "🏪" },
  { label: "Family", href: "/explore/family-activities", icon: "👨‍👩‍👧" },
  { label: "Yacht", href: "/explore/luxury/yacht", icon: "⛵" },
  { label: "Hidden Gems", href: "/explore/hidden-gems", icon: "💎" },
  { label: "Wellness", href: "/explore/wellness", icon: "🧘" },
];

const lifestyleSpots = [
  {
    title: "Coco Lounge & Bar",
    location: "Jomtien Beach",
    hours: "Open until 11 PM",
    badge: "Ocean Front",
    href: "/explore/cafes",
  },
  {
    title: "Horizon Terrace",
    location: "Pattaya Beach",
    hours: "Open until 2 AM",
    badge: "Sunset View",
    href: "/explore/cafes",
  },
  {
    title: "Bake & Bloom",
    location: "Pratumnak Hill",
    hours: "Open until 6 PM",
    badge: "Artisan Coffee",
    href: "/explore/cafes",
  },
];

function CategoryNav() {
  return (
    <section className="sticky top-0 z-30 border-b border-[#c4c7c8]/30 bg-white py-6">
      <div className="mx-auto flex max-w-[1280px] items-center justify-start gap-6 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:gap-10 md:px-16 [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group flex min-w-max flex-col items-center gap-3 transition-all duration-300"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full border text-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#455f88] group-hover:text-white group-hover:shadow-lg ${
                cat.active
                  ? "border-[#455f88]/20 bg-[#455f88]/5 text-[#455f88]"
                  : "border-[#c4c7c8]/30 bg-[#edeeef] text-[#444748]"
              }`}
            >
              <span aria-hidden>{cat.icon}</span>
            </div>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${
                cat.active
                  ? "text-[#455f88]"
                  : "text-[#444748] group-hover:text-[#455f88]"
              }`}
            >
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function BookingCard({
  badge,
  badgeClass,
  title,
  excerpt,
  image,
  imageAlt,
  mapHref,
  bookHref,
}: {
  badge: string;
  badgeClass: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  mapHref: string;
  bookHref: string;
}) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#c4c7c8]/30 shadow-lg">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-8">
        <span
          className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase ${badgeClass}`}
        >
          {badge}
        </span>
        <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="mb-6 line-clamp-2 text-base text-white/80">{excerpt}</p>
        <div className="flex gap-3">
          <Link
            href={mapHref}
            className="flex-1 rounded-xl bg-white py-3 text-center text-sm font-semibold text-[#191c1d] transition-all hover:bg-[#f3f4f5]"
          >
            See Map
          </Link>
          <Link
            href={bookHref}
            className="flex-1 rounded-xl bg-[#455f88] py-3 text-center text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            Book Tour
          </Link>
        </div>
      </div>
    </div>
  );
}

function DiningCard({
  title,
  rating,
  location,
  excerpt,
  image,
  imageAlt,
  cta,
  href,
}: {
  title: string;
  rating: string;
  location: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  cta: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[32px] border border-[#c4c7c8]/30 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Mobile: full-bleed image + overlay text */}
      <div className="relative aspect-[4/5] overflow-hidden md:hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#191c1d]/95 via-[#191c1d]/55 to-[#191c1d]/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent"
          aria-hidden
        />
        <span className="absolute left-6 top-6 z-10 rounded-full bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ae2f34]">
            Sponsored
          </span>
        </span>
        <div className="absolute inset-x-0 bottom-0 z-10 p-6">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h4 className="text-xl font-semibold leading-tight text-white">
              {title}
            </h4>
            <div className="flex shrink-0 items-center text-white">
              <span className="text-sm text-[#b6d0ff]" aria-hidden>
                ★
              </span>
              <span className="ml-1 text-sm font-semibold">{rating}</span>
            </div>
          </div>
          <p className="mb-6 text-sm leading-relaxed text-white/90">
            {excerpt}
          </p>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/75">
              {location}
            </span>
            <span className="text-sm font-semibold text-[#d6e3ff] group-hover:underline">
              {cta} →
            </span>
          </div>
        </div>
      </div>

      {/* Desktop: image on top, text panel below (Stitch layout) */}
      <div className="hidden md:flex md:flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="50vw"
          />
        </div>
        <div className="relative p-8">
          <div className="absolute -top-12 left-8 rounded-full bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ae2f34]">
              Sponsored
            </span>
          </div>
          <div className="mb-4 flex items-start justify-between gap-6 pt-1">
            <h4 className="min-w-0 flex-1 text-2xl font-semibold leading-tight text-[#191c1d]">
              {title}
            </h4>
            <div className="flex shrink-0 items-center text-[#455f88]">
              <span className="text-sm" aria-hidden>
                ★
              </span>
              <span className="ml-1 text-sm font-semibold">{rating}</span>
            </div>
          </div>
          <p className="mb-8 text-base leading-relaxed text-[#444748]">
            {excerpt}
          </p>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#747878]">
              {location}
            </span>
            <span className="shrink-0 text-sm font-semibold text-[#455f88] group-hover:underline">
              {cta} →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ExploreHubPage() {
  return (
    <div data-full-bleed className="bg-[#f8f9fa] pb-16 text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>
      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden md:h-[85vh]">
        <Image
          src={exploreImages.hero}
          alt="Pattaya coastline at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Discover Your Pattaya
          </h1>
          <div className="flex w-full max-w-2xl items-center rounded-full bg-white/80 p-2 shadow-2xl backdrop-blur-md">
            <div className="flex flex-1 items-center px-4 md:px-6">
              <span className="text-[#747878]" aria-hidden>
                🔍
              </span>
              <input
                type="text"
                placeholder="Search experiences, places, or tours..."
                className="w-full border-none bg-transparent px-3 text-base text-[#191c1d] placeholder:text-[#747878] focus:outline-none focus:ring-0"
              />
            </div>
            <button
              type="button"
              className="rounded-full bg-[#B52E88] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#B52E88]/90 md:px-8 md:py-4"
            >
              Explore
            </button>
          </div>
        </div>
      </section>

      <CategoryNav />

      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-16">
        {/* Must-Visit + Dining + Wellness */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              <div>
                <div className="mb-6 flex items-end justify-between">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Must-Visit &amp; Top Bookings
                  </h2>
                  <Link
                    href="/explore/islands/koh-larn"
                    className="flex items-center gap-1 text-sm font-semibold text-[#455f88] hover:underline"
                  >
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <BookingCard
                    badge="Best Seller"
                    badgeClass="bg-[#ae2f34] text-white"
                    title="Pristine Island Hopping"
                    excerpt="Discover the hidden lagoons and crystal clear waters of Koh Larn and beyond."
                    image={exploreImages.islandHopping}
                    imageAlt="Island hopping tour"
                    mapHref="/explore/islands/koh-larn"
                    bookHref="/explore/islands/koh-larn"
                  />
                  <BookingCard
                    badge="Popular"
                    badgeClass="bg-[#455f88] text-white"
                    title="Coral Coast Discovery"
                    excerpt="The ultimate guide to Pattaya's most exclusive beach clubs and sunset spots."
                    image={exploreImages.islandHopping}
                    imageAlt="Coral coast beach"
                    mapHref="/explore/beaches"
                    bookHref="/explore/beaches"
                  />
                </div>
              </div>

              <div className="space-y-8 border-t border-[#c4c7c8]/20 pt-12">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold md:text-3xl">
                      Pattaya Dining Guide
                    </h2>
                    <p className="text-[#444748]">
                      Curated culinary experiences for the discerning palate.
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-xl bg-[#f3f4f5] p-1">
                    <button
                      type="button"
                      className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#455f88] shadow-sm"
                    >
                      Luxury Dining
                    </button>
                    <Link
                      href="/explore/restaurants/street-food"
                      className="rounded-lg px-6 py-2.5 text-sm font-semibold text-[#444748] transition-all hover:bg-white/50"
                    >
                      Local Food
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <DiningCard
                    title="Sky Gallery Cliffside"
                    rating="4.9"
                    location="Pratumnak Hill"
                    excerpt="Savor world-class fusion cuisine with panoramic clifftop views of the Gulf of Thailand at Pattaya's most iconic sunset destination."
                    image={exploreImages.skyGallery}
                    imageAlt="Sky Gallery Cliffside Signature Dish"
                    cta="Explore Menu"
                    href="/explore/restaurants/fine-dining"
                  />
                  <DiningCard
                    title="Cave Beach Club"
                    rating="4.8"
                    location="Na Jomtien"
                    excerpt="Escape to a bohemian sanctuary. Experience sophisticated rustic dining directly on the sand with a curation of elite tropical cocktails."
                    image={exploreImages.caveBeachClub}
                    imageAlt="Cave Beach Club Interior"
                    cta="Book Table"
                    href="/explore/restaurants/fine-dining"
                  />
                </div>
              </div>
            </div>

            {/* Wellness sidebar */}
            <div className="space-y-6 lg:col-span-4">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Relax &amp; Wellness
              </h2>
              <div className="group flex flex-col overflow-hidden rounded-[40px] border border-white/20 bg-[#e1e3e4] shadow-2xl transition-all duration-500 hover:shadow-[#455f88]/10">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={exploreImages.auraSanctuary}
                    alt="Aura Sanctuary Luxury Interior"
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ae2f34] shadow-lg backdrop-blur-md">
                    Elite Choice
                  </span>
                </div>
                <div className="relative -mt-12 flex flex-1 flex-col rounded-t-[40px] border-t border-white/50 bg-white/80 p-8 backdrop-blur-xl">
                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.25em] text-[#455f88]">
                    Global Wellness Destination
                  </span>
                  <h3 className="mb-1 text-4xl font-extrabold leading-[1.1] text-[#191c1d]">
                    Aura Sanctuary
                  </h3>
                  <p className="mb-4 text-sm font-medium italic text-[#444748]">
                    บริการนวดไทยแผนโบราณและสปาระดับเวิลด์คลาส
                  </p>
                  <div className="mb-4 flex text-amber-400">
                    {"★★★★★"}
                    <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-[#191c1d]/60">
                      4.9 (120 รีวิว)
                    </span>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {["พรีเมียม", "วิวดาดฟ้า", "วิวทะเล"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-[#455f88]/10 bg-[#455f88]/5 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-[#455f88]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 text-[15px] leading-relaxed text-[#444748]">
                    Indulge in a premium spa experience that blends traditional
                    Thai techniques with modern luxury aromatherapy.
                  </p>
                  <ul className="mb-8 space-y-4 text-[#444748]">
                    <li className="flex items-center gap-4 text-sm font-semibold">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#455f88]/10 text-[#455f88]">
                        ✓
                      </span>
                      Award-winning therapists
                    </li>
                    <li className="flex items-center gap-4 text-sm font-semibold">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#455f88]/10 text-[#455f88]">
                        ✓
                      </span>
                      Signature 90-minute treatment
                    </li>
                  </ul>
                  <div className="mt-auto border-t border-[#c4c7c8]/20 pb-6 pt-6">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#444748]">
                      Investment in Wellness
                    </span>
                    <div className="mb-6 flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold tracking-tighter text-[#455f88]">
                        ฿2,400
                      </span>
                      <span className="text-sm font-medium text-[#444748]">
                        / session
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/explore/wellness"
                        className="w-full rounded-xl bg-[#455f88] py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:bg-[#455f88]/90"
                      >
                        จองคิวออนไลน์ (Book Now)
                      </Link>
                      <Link
                        href="/explore/wellness"
                        className="w-full rounded-xl border border-[#c4c7c8] bg-white py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-[#191c1d] transition-all hover:bg-[#edeeef]"
                      >
                        เช็กราคาประเมิน (Check Price)
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lifestyle carousel */}
      <section className="mb-20 overflow-hidden bg-white py-16">
        <div className="mx-auto mb-8 flex max-w-[1280px] items-end justify-between px-5 md:px-16">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Lifestyle &amp; Local Vibes
            </h2>
            <p className="text-[#444748]">
              The trendiest beach cafes and sunset spots.
            </p>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto px-5 [-ms-overflow-style:none] [scrollbar-width:none] md:px-16 [&::-webkit-scrollbar]:hidden">
          {lifestyleSpots.map((spot) => (
            <Link
              key={spot.title}
              href={spot.href}
              className="group min-w-[320px] cursor-pointer md:min-w-[400px]"
            >
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#c4c7c8]/20 bg-[#edeeef] shadow-xl">
                <Image
                  src={exploreImages.cafeLifestyle}
                  alt={spot.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#455f88] shadow-sm backdrop-blur-md">
                  {spot.badge}
                </span>
              </div>
              <div className="px-2">
                <h4 className="mb-2 text-2xl font-semibold text-[#191c1d] transition-colors group-hover:text-[#455f88]">
                  {spot.title}
                </h4>
                <div className="flex items-center gap-2 text-[#444748]">
                  <span className="text-sm font-medium">{spot.location}</span>
                  <span className="h-1 w-1 rounded-full bg-[#c4c7c8]" />
                  <span className="text-sm font-semibold text-[#455f88]">
                    {spot.hours}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        {/* Shopping & Family */}
        <section className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Shopping &amp; Markets
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Link
                href="/explore/shopping/malls"
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#c4c7c8]/30 shadow-lg"
              >
                <Image
                  src={exploreImages.centralFestival}
                  alt="Central Festival Pattaya Beach"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="mb-3 inline-block rounded-full bg-[#455f88] px-3 py-1 text-[10px] font-bold uppercase text-white">
                    Luxury Malls
                  </span>
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    Central Festival Pattaya Beach
                  </h3>
                  <p className="mb-6 line-clamp-2 text-base text-white/80">
                    Pattaya&apos;s flagship oceanfront mall featuring
                    international brands, premium dining, and a cinema complex.
                  </p>
                  <span className="block rounded-xl bg-white py-3 text-center text-sm font-semibold text-[#191c1d]">
                    View Directory
                  </span>
                </div>
              </Link>
              <Link
                href="/explore/shopping/markets"
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#c4c7c8]/30 shadow-lg"
              >
                <Image
                  src={exploreImages.thepprasitMarket}
                  alt="Thepprasit Night Market"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="mb-3 inline-block rounded-full bg-[#ae2f34] px-3 py-1 text-[10px] font-bold uppercase text-white">
                    Local Markets
                  </span>
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    Thepprasit Night Market
                  </h3>
                  <p className="mb-6 line-clamp-2 text-base text-white/80">
                    A must-visit for street food lovers and bargain hunters,
                    offering a wide array of local goods and vibrant energy.
                  </p>
                  <span className="block rounded-xl bg-white py-3 text-center text-sm font-semibold text-[#191c1d]">
                    Explore Stalls
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Family Activities
            </h2>
            <div className="flex h-full flex-col gap-6 rounded-[32px] bg-[#edeeef] p-6 md:flex-row">
              <div className="relative aspect-square overflow-hidden rounded-2xl md:w-1/2">
                <Image
                  src={exploreImages.aquaverse}
                  alt="Columbia Pictures Aquaverse"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="flex flex-col justify-center md:w-1/2">
                <span className="mb-2 text-xs font-bold uppercase text-[#455f88]">
                  Water Parks
                </span>
                <h3 className="mb-4 text-2xl font-semibold">
                  Columbia Pictures Aquaverse
                </h3>
                <p className="mb-6 text-[#444748]">
                  World&apos;s first Columbia Pictures theme park. The perfect
                  day out for kids and adults alike.
                </p>
                <Link
                  href="/explore/family-activities"
                  className="w-max rounded-xl bg-[#455f88] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg"
                >
                  Buy Tickets
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Yacht + Hidden Gems */}
        <section className="space-y-12">
          <div className="group relative mb-12 h-[500px] overflow-hidden rounded-[40px] md:h-[600px]">
            <Image
              src={exploreImages.yacht}
              alt="Luxury yacht on the Gulf of Thailand"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-24">
              <div className="max-w-xl">
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-[#ffb3b0]">
                  Ultra-Luxury Experience
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                  Elite Yacht Life &amp; Charters
                </h2>
                <p className="mb-8 text-lg text-white/80">
                  Access the most prestigious fleet of private yachts in the Gulf
                  of Thailand. Tailored itineraries for the discerning traveler.
                </p>
                <Link
                  href="/explore/luxury/yacht"
                  className="inline-block rounded-full bg-white px-10 py-5 text-sm font-semibold text-[#455f88] transition-all hover:-translate-y-1 hover:bg-[#455f88] hover:text-white"
                >
                  Contact for Charter
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Hidden Gems Articles
              </h2>
              <p className="text-[#444748]">
                Curated insights for the modern explorer.
              </p>
            </div>
            <Link
              href="/explore/hidden-gems"
              className="text-sm font-semibold text-[#455f88] hover:underline"
            >
              Read All Stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/explore/hidden-gems"
              className="group flex cursor-pointer flex-col"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={exploreImages.hiddenSpots}
                  alt="10 Hidden Spots Only Locals Know"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ae2f34] shadow-sm backdrop-blur-md">
                  Magazine
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold leading-tight text-[#191c1d] transition-colors group-hover:text-[#455f88]">
                10 Hidden Spots Only Locals Know
              </h3>
              <p className="mb-6 line-clamp-3 text-[#444748]">
                From secret viewpoints to the best street stalls in Naklua, we go
                off the beaten path to discover the authentic soul of the city.
              </p>
              <span className="mt-auto text-sm font-semibold text-[#444748]">
                5 min read
              </span>
            </Link>

            <Link
              href="/explore/hidden-gems"
              className="group flex cursor-pointer flex-col"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={exploreImages.weekendGuide}
                  alt="The Ultimate Weekend Guide"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#455f88] shadow-sm backdrop-blur-md">
                  Guide
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold leading-tight text-[#191c1d] transition-colors group-hover:text-[#455f88]">
                The Ultimate Weekend Guide
              </h3>
              <p className="mb-6 line-clamp-3 text-[#444748]">
                How to spend 48 hours in luxury in Pattaya, covering high-end
                dining, exclusive stays, and the most vibrant nightlife.
              </p>
              <span className="mt-auto text-sm font-semibold text-[#444748]">
                8 min read
              </span>
            </Link>

            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#455f88]/10 bg-[#D3E4FE] p-10 shadow-2xl">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#455f88]/10 blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#455f88]/10 blur-[60px]" />
              <div className="relative z-10">
                <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.4em] text-[#455f88]">
                  Newsletter
                </span>
                <h3 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#455f88]">
                  Want more exclusive insights?
                </h3>
                <p className="mb-10 max-w-[280px] leading-relaxed text-[#455f88]/80">
                  Join our elite circle for weekly updates on luxury property,
                  lifestyle, and invitation-only events.
                </p>
              </div>
              <form className="relative z-10 space-y-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-xl border border-[#455f88]/20 bg-white/50 px-5 py-4 text-[#191c1d] shadow-inner backdrop-blur-md outline-none placeholder:text-[#455f88]/40 focus:border-[#455f88]/50 focus:ring-2 focus:ring-[#455f88]/50"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#455f88] py-4 text-[13px] font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#455f88]/90 active:scale-[0.98]"
                >
                  Join Now →
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
