import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { Clock, Flame, Star, Utensils, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { streetFoodImages } from "@/lib/design/street-food-images";

const markets = [
  {
    id: "thepprasit",
    name: "Thepprasit Night Market",
    nameTh: "ตลาดเทพประสิทธิ์",
    image: streetFoodImages.thepprasit,
    tags: ["Night market", "Seafood", "Bargains"],
    hours: "Fri–Sun · ~17:00–23:00",
    location: "Thepprasit Rd, south Pattaya",
    mustTry: "Grilled prawns, papaya salad, coconut ice cream",
    excerpt:
      "Pattaya’s most famous night market for street eats and souvenirs. Arrive hungry and walk the full loop before choosing your stall.",
  },
  {
    id: "naklua",
    name: "Naklua Morning Market",
    nameTh: "ตลาดนาเกลือ",
    image: streetFoodImages.naklua,
    tags: ["Morning", "Local", "Fresh"],
    hours: "Daily · ~06:00–11:00",
    location: "Naklua, north Pattaya",
    mustTry: "Boat noodles, khao tom, fresh fruit & curry bags",
    excerpt:
      "Where residents shop before the heat sets in. Best for authentic breakfast, takeaway curry, and market-price seafood.",
  },
  {
    id: "jomtien",
    name: "Jomtien Seafood Stalls",
    nameTh: "ร้านอาหารทะเลจอมเทียน",
    image: streetFoodImages.jomtienSeafood,
    tags: ["Seafood", "Beach road", "Evening"],
    hours: "Daily · ~17:00–late",
    location: "Jomtien Beach Rd",
    mustTry: "Live crab & fish by weight, tom yum, garlic prawns",
    excerpt:
      "Pick your seafood from the ice display, agree on price per kilo, then wait beachside while it’s grilled or wok-fried.",
  },
  {
    id: "walking-street",
    name: "Walking Street Bites",
    nameTh: "ของกิน Walking Street",
    image: streetFoodImages.walkingStreet,
    tags: ["Late night", "Snacks", "Tourist hub"],
    hours: "Daily · from ~19:00",
    location: "Walking Street, south Pattaya",
    mustTry: "Satay skewers, roti, late-night noodles",
    excerpt:
      "Quick bites between shows and bars — best for snacks and people-watching rather than a full sit-down meal.",
  },
];

const marketGuideCards: ExploreGuideCardData[] = markets.map((market) => ({
  id: market.id,
  name: market.name,
  nameTh: market.nameTh,
  image: market.image,
  tags: market.tags,
  excerpt: market.excerpt,
  details: [
    { icon: "clock", label: "Hours", value: market.hours },
    { icon: "mapPin", label: "Location", value: market.location },
    { icon: "soup", label: "Must try", value: market.mustTry },
  ],
}));

const signatureDishes = [
  {
    name: "Pad Thai",
    nameTh: "ผัดไทย",
    image: streetFoodImages.padThai,
    note: "Ask for ‘mai ped’ if you prefer mild; lime and peanuts on the side.",
  },
  {
    name: "Som Tam",
    nameTh: "ส้มตำ",
    image: streetFoodImages.somTam,
    note: "Papaya salad — specify spice level; great with grilled chicken.",
  },
  {
    name: "Grilled Seafood",
    nameTh: "ซีฟู้ดย่าง",
    image: streetFoodImages.grilledSeafood,
    note: "Confirm price by weight before cooking; share platters for value.",
  },
  {
    name: "Mango Sticky Rice",
    nameTh: "ข้าวเหนียวมะม่วง",
    image: streetFoodImages.mangoSticky,
    note: "Seasonal Apr–Jun; dessert stalls cluster near markets.",
  },
];

const eatingTips = [
  {
    icon: Clock,
    title: "Peak times",
    text: "Markets fill 19:00–21:00. Go earlier for shorter queues or after 21:30 for calmer seating.",
  },
  {
    icon: Wallet,
    title: "Cash & prices",
    text: "Many stalls are cash-only. Confirm seafood price per kg and check your bill before paying.",
  },
  {
    icon: Flame,
    title: "Spice & hygiene",
    text: "Say ‘mai ped’ (not spicy) or ‘ped nit noi’ (a little). Pick busy stalls with high turnover.",
  },
  {
    icon: Utensils,
    title: "Seating",
    text: "Shared tables are normal. Tissue packs and utensil cups are usually self-service.",
  },
];

function DishCard({
  name,
  nameTh,
  image,
  note,
}: (typeof signatureDishes)[number]) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-[#191c1d]">{name}</h4>
        <p className="text-sm text-[#B52E88]">{nameTh}</p>
        <p className="mt-2 text-xs leading-relaxed text-[#444748]">{note}</p>
      </div>
    </article>
  );
}

export function StreetFoodPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="street-food-hero-title"
      >
        <Image
          src={streetFoodImages.hero}
          alt="Pattaya night market street food"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/75 via-[#191c1d]/55 to-[#191c1d]/88"
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
                <Link
                  href="/explore/restaurants/fine-dining"
                  className="hover:text-white"
                >
                  Restaurants
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">Street Food</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Restaurants
          </span>
          <h1
            id="street-food-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Street Food
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">อาหารท้องถิ่น</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Best local and street food in Pattaya — night markets, morning
            vendors, and beach-road seafood you can eat like a resident.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Star className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" aria-hidden />
              Local picks & markets
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Utensils className="h-4 w-4" aria-hidden />
              Budget-friendly
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title="Choose your market"
          description="Start with these four staples — each suits a different time of day and mood, from morning noodles to midnight skewers."
          prevLabel="Previous markets"
          nextLabel="Next markets"
          items={marketGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Signature dishes
          </h2>
          <p className="mt-2 text-[#444748]">
            What to order when you cannot decide — and how to order in Thai
            comfort zones.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {signatureDishes.map((dish) => (
              <DishCard key={dish.name} {...dish} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Eating smart</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {eatingTips.map((tip) => {
              const Icon = tip.icon;
              return (
              <div
                key={tip.title}
                className="flex gap-4 rounded-xl border border-[#c4c7c8]/30 bg-white p-4 sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B52E88]/10">
                  <Icon className="h-5 w-5 text-[#B52E88]" aria-hidden />
                </div>
                <div>
                  <h4 className="font-bold text-[#191c1d]">{tip.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#444748]">
                    {tip.text}
                  </p>
                </div>
              </div>
            );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">Also explore</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/explore/restaurants/fine-dining"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              Fine dining →
            </Link>
            <Link
              href="/explore/shopping/markets"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              Local markets →
            </Link>
            <Link
              href="/explore/beaches"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              Main beaches →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
