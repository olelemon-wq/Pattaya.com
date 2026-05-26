import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { Clock, HandCoins, MapPin, ShoppingBasket, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { shoppingImages } from "@/lib/design/shopping-images";

const markets = [
  {
    id: "thepprasit",
    name: "Thepprasit Night Market",
    nameTh: "ตลาดเทพประสิทธิ์",
    image: shoppingImages.thepprasit,
    tags: ["Night market", "Food & fashion", "Weekend"],
    hours: "Fri–Sun · ~17:00–23:00",
    location: "Thepprasit Rd, south Pattaya",
    mustBuy: "Street snacks, printed tees, souvenirs, phone accessories",
    excerpt:
      "Pattaya’s best-known night market — eat first, then browse stalls for bargains and gifts.",
  },
  {
    id: "naklua",
    name: "Naklua Market",
    nameTh: "ตลาดนาเกลือ",
    image: shoppingImages.naklua,
    tags: ["Morning", "Local", "Fresh produce"],
    hours: "Daily · ~06:00–11:00",
    location: "Naklua, north Pattaya",
    mustBuy: "Spices, dried seafood, fruit, household goods",
    excerpt:
      "Where residents shop before the heat — authentic prices and takeaway ingredients for self-catering.",
  },
  {
    id: "floating",
    name: "Pattaya Floating Market",
    nameTh: "ตลาดน้ำ 4 ภาค",
    image: shoppingImages.floatingMarket,
    tags: ["Cultural", "Boat rides", "Souvenirs"],
    hours: "Daily · ~09:00–20:00",
    location: "Sukhumvit Rd (east Pattaya)",
    mustBuy: "Regional snacks, handicrafts, photo-friendly river setting",
    excerpt:
      "Themed zones representing four regions — plan half a day for boats, shows, and snack sampling.",
  },
  {
    id: "made-in-thailand",
    name: "Made in Thailand Market",
    nameTh: "เมดอินไทยแลนด์",
    image: shoppingImages.madeInThailand,
    tags: ["Evening", "Handicrafts", "Tourist-friendly"],
    hours: "Wed–Sun · ~17:00–23:00",
    location: "Thepprasit area (check seasonal hours)",
    mustBuy: "Handmade bags, art, local design gifts",
    excerpt:
      "Craft-forward market with a more curated feel than generic souvenir rows — good for unique gifts.",
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
    { icon: "store", label: "Must buy", value: market.mustBuy },
  ],
}));

const marketFinds = [
  {
    name: "Souvenirs & gifts",
    nameTh: "ของฝาก",
    image: shoppingImages.souvenirs,
    note: "Magnets, textiles, and coconut products — compare three stalls before buying.",
  },
  {
    name: "Clothing & bags",
    nameTh: "เสื้อผ้า กระเป๋า",
    image: shoppingImages.bargains,
    note: "Sizes run Asian-fit; check stitching on leather goods and negotiate politely.",
  },
  {
    name: "Local crafts",
    nameTh: "หัตถกรรม",
    image: shoppingImages.localCrafts,
    note: "Wood carvings and batik — ask if pieces are locally made vs imported.",
  },
  {
    name: "Night-market snacks",
    nameTh: "ของกิน",
    image: shoppingImages.nightStalls,
    note: "Eat at busy stalls; pair shopping with our street-food guide for dish ideas.",
  },
];

const marketTips = [
  {
    icon: HandCoins,
    title: "Bargaining",
    text: "Smile and ask ‘lod dai mai?’ at independent stalls — fixed prices are common in mall kiosks only.",
  },
  {
    icon: Clock,
    title: "Timing",
    text: "Night markets peak 19:00–21:00. Arrive by 17:30 for parking and the fullest food selection.",
  },
  {
    icon: ShoppingBasket,
    title: "Cash & bags",
    text: "Carry smaller notes; bring a foldable bag — many vendors add no extra packaging.",
  },
  {
    icon: Sparkles,
    title: "Quality checks",
    text: "Test electronics briefly, inspect seams on apparel, and keep receipts for higher-ticket items.",
  },
];

function FindCard({
  name,
  nameTh,
  image,
  note,
}: (typeof marketFinds)[number]) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={name} fill className="object-cover" sizes="25vw" />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-[#191c1d]">{name}</h4>
        <p className="text-sm text-[#B52E88]">{nameTh}</p>
        <p className="mt-2 text-xs leading-relaxed text-[#444748]">{note}</p>
      </div>
    </article>
  );
}

export function ShoppingMarketsPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="markets-hero-title"
      >
        <Image
          src={shoppingImages.marketsHero}
          alt="Thepprasit Night Market Pattaya"
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
                <span className="text-white/80">Shopping</span>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">Local Markets</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Shopping
          </span>
          <h1
            id="markets-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Local Markets
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">ตลาดท้องถิ่น</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Night bazaars, morning wet markets, and floating-market culture —
            where to bargain, snack, and pick up authentic Thai goods.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />
              Naklua · Thepprasit · east Pattaya
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title="Choose your market"
          description="From weekend night bazaars to morning local runs — match the market to your schedule and shopping list."
          prevLabel="Previous markets"
          nextLabel="Next markets"
          items={marketGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">What to buy</h2>
          <p className="mt-2 text-[#444748]">
            Four categories visitors hunt for most often in Pattaya markets.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {marketFinds.map((item) => (
              <FindCard key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Market tips</h2>
          <p className="mt-2 text-[#444748]">
            Habits that save money and hassle while you browse.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {marketTips.map((tip) => {
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
              href="/explore/shopping/malls"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              Shopping malls →
            </Link>
            <Link
              href="/explore/restaurants/street-food"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              Street food →
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
