import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { Building2, ChefHat, Sunset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { fineDiningImages } from "@/lib/design/fine-dining-images";

const featuredRestaurants = [
  {
    name: "Mantra Restaurant & Bar",
    nameTh: "มนตรา เรสเตอรองต์",
    description:
      "Fine Thai–international cuisine in an elegant cliffside setting. Perfect for anniversaries and business dinners.",
    cuisine: "Thai–Fusion",
    location: "Pratumnak Hill",
    image: fineDiningImages.featuredMantra,
    sponsored: true,
    href: "/explore/restaurants/fine-dining",
  },
  {
    name: "The Sky Gallery",
    nameTh: "เดอะ สกาย แกลเลอรี่",
    description:
      "Contemporary dining with panoramic Pattaya Bay views. Sunset seating and curated wine pairings.",
    cuisine: "Contemporary",
    location: "Pattaya Bay",
    image: fineDiningImages.featuredSkyGallery,
    sponsored: true,
    href: "/explore/restaurants/fine-dining",
  },
  {
    name: "Horizon Terrace",
    nameTh: "ฮอไรซัน เทอร์เรส",
    description:
      "Premium steaks, seafood towers, and live piano evenings in a refined oceanfront lounge.",
    cuisine: "Steak & Seafood",
    location: "Pattaya Beach Road",
    image: fineDiningImages.featuredHorizon,
    sponsored: true,
    href: "/explore/restaurants/fine-dining",
  },
];

const collections = [
  {
    title: "Sunset & Ocean View",
    titleTh: "ชมพระอาทิตย์ตกริมทะเล",
    description: "Romantic terraces and beachfront tables for golden hour.",
    image: fineDiningImages.collectionSunset,
    href: "/explore/beaches",
    icon: Sunset,
  },
  {
    title: "Rooftop Dining",
    titleTh: "ดินเนอร์บนดาดฟ้า",
    description: "City lights, cocktails, and elevated tasting menus.",
    image: fineDiningImages.collectionRooftop,
    href: "/explore/cafes",
    icon: Building2,
  },
  {
    title: "Chef's Table",
    titleTh: "เชฟเทเบิลพิเศษ",
    description: "Omakase-style experiences and private chef counters.",
    image: fineDiningImages.collectionChefsTable,
    href: "/explore/restaurants/fine-dining",
    icon: ChefHat,
  },
];

const diningGuides = [
  {
    title: "What to Wear: Fine Dining Dress Code in Pattaya",
    titleTh: "แต่งตัวยังไงให้เหมาะกับร้านหรูในพัทยา",
    excerpt:
      "Smart casual vs. formal — how top venues expect guests to dress, season by season.",
    image: fineDiningImages.guideDressCode,
    href: "/guide",
    readTime: "5 min",
  },
  {
    title: "10 Best Sunset Restaurants with Ocean Views",
    titleTh: "10 ร้านอาหารชมพระอาทิตย์ตกที่วิวดีที่สุด",
    excerpt:
      "Our editors' picks for golden-hour dining from Naklua to Jomtien.",
    image: fineDiningImages.guideSunset,
    href: "/explore/beaches",
    readTime: "8 min",
  },
  {
    title: "Thai Dining Etiquette for International Guests",
    titleTh: "มารยาทการรับประทานอาหารไทยสำหรับชาวต่างชาติ",
    excerpt:
      "Sharing dishes, chopsticks vs. fork & spoon, and tipping customs explained.",
    image: fineDiningImages.guideEtiquette,
    href: "/living",
    readTime: "6 min",
  },
  {
    title: "Special Occasions: Where to Book for Birthdays & Proposals",
    titleTh: "จองร้านสำหรับวันเกิดและขอแต่งงาน",
    excerpt:
      "Private rooms, cake service, and photographer-friendly tables at luxury spots.",
    image: fineDiningImages.guideOccasion,
    href: "/explore/restaurants/fine-dining",
    readTime: "7 min",
  },
];

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-[#B52E88]/10 px-2.5 py-1 text-xs font-medium text-[#B52E88] ring-1 ring-[#B52E88]/15">
      {children}
    </span>
  );
}

function FeaturedCard({
  name,
  nameTh,
  description,
  cuisine,
  location,
  image,
  href,
}: (typeof featuredRestaurants)[number]) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#ae2f34] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          Sponsored
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-[#191c1d]">{name}</h3>
        <p className="text-sm text-[#747878]">{nameTh}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#444748]">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag>{cuisine}</Tag>
          <Tag>📍 {location}</Tag>
        </div>
        <Link
          href={href}
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#B52E88] px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#B52E88]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88]"
        >
          Reserve a Table
        </Link>
      </div>
    </article>
  );
}

function CollectionCard({
  title,
  titleTh,
  description,
  image,
  href,
  icon,
}: (typeof collections)[number]) {
  const Icon = icon;
  return (
    <Link
      href={href}
      className="group flex gap-4 rounded-2xl border border-[#c4c7c8]/30 bg-white p-4 shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md sm:p-5"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="96px"
        />
        <span
          className="absolute inset-0 flex items-center justify-center bg-[#191c1d]/40"
          aria-hidden
        >
          <Icon className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={1.75} />
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-[#191c1d] group-hover:text-[#B52E88]">
          {title}
        </h3>
        <p className="text-xs text-[#747878]">{titleTh}</p>
        <p className="mt-1 line-clamp-2 text-sm text-[#444748]">
          {description}
        </p>
        <span className="mt-2 inline-block text-sm font-semibold text-[#B52E88]">
          Browse collection →
        </span>
      </div>
    </Link>
  );
}

function GuideCard({
  title,
  titleTh,
  excerpt,
  image,
  href,
  readTime,
}: (typeof diningGuides)[number]) {
  return (
    <article className="flex gap-4 rounded-xl border border-[#c4c7c8]/30 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <div className="relative hidden h-24 w-28 shrink-0 overflow-hidden rounded-lg sm:block">
        <Image src={image} alt="" fill className="object-cover" sizes="112px" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[#747878]">
          {readTime} read
        </p>
        <h3 className="mt-1 text-base font-bold leading-snug text-[#191c1d]">
          <Link href={href} className="hover:text-[#B52E88] hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-xs text-[#747878]">{titleTh}</p>
        <p className="mt-2 line-clamp-2 text-sm text-[#444748]">{excerpt}</p>
        <Link
          href={href}
          className="mt-3 inline-block text-sm font-semibold text-[#B52E88] hover:underline"
        >
          Read guide →
        </Link>
      </div>
    </article>
  );
}

export function FineDiningPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="fine-dining-hero-title"
      >
        <Image
          src={fineDiningImages.hero}
          alt="Luxury fine dining restaurant ambiance in Pattaya"
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
                <span className="text-white/80">Restaurants</span>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">Fine Dining</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Restaurants
          </span>
          <h1
            id="fine-dining-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Fine Dining
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">ร้านอาหารหรู</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Luxury dining experiences in Pattaya — sunset terraces, chef&apos;s
            tables, and ocean-view reservations.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-5 py-12 md:px-16 md:py-16">
        {/* Sponsored showcase */}
        <section aria-labelledby="sponsored-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B52E88]">
                Sponsored Showcase
              </p>
              <h2
                id="sponsored-title"
                className="mt-1 text-2xl font-semibold text-[#191c1d] md:text-3xl"
              >
                Featured Fine Dining
              </h2>
              <p className="mt-1 text-sm text-[#747878]">
                Hand-picked luxury venues — reserve your table today
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRestaurants.map((restaurant) => (
              <FeaturedCard key={restaurant.name} {...restaurant} />
            ))}
          </div>
        </section>

        {/* Curated collections */}
        <section aria-labelledby="collections-title">
          <h2
            id="collections-title"
            className="text-2xl font-semibold text-[#191c1d] md:text-3xl"
          >
            Curated Collections
          </h2>
          <p className="mt-1 text-sm text-[#747878]">
            Explore by mood, view, and dining style
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard key={collection.title} {...collection} />
            ))}
          </div>
        </section>

        {/* Dining guides */}
        <section aria-labelledby="guides-title">
          <h2
            id="guides-title"
            className="text-2xl font-semibold text-[#191c1d] md:text-3xl"
          >
            Dining Guides
          </h2>
          <p className="mt-1 text-sm text-[#747878]">
            Tips, etiquette, and editor picks for discerning diners
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {diningGuides.map((guide) => (
              <GuideCard key={guide.title} {...guide} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
