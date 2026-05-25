import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import {
  Clock,
  HandCoins,
  MapPin,
  ShoppingBasket,
  Sparkles,
  Store,
  type LucideIcon,
} from "lucide-react";
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

function ShopTag({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-[#B52E88]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#B52E88]">
      {children}
    </span>
  );
}

function ShopDetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
      <div className="min-w-0">
        <dt className="font-bold uppercase tracking-wide text-[#747878]">
          {label}
        </dt>
        <dd className="mt-0.5 text-[#191c1d]">{value}</dd>
      </div>
    </div>
  );
}

function MarketCard({
  id,
  name,
  nameTh,
  image,
  tags,
  excerpt,
  hours,
  location,
  mustBuy,
}: (typeof markets)[number]) {
  return (
    <article
      id={id}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm transition hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#191c1d]/55 to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white drop-shadow-sm">{name}</h3>
          <p className="text-sm text-white/90">{nameTh}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <ShopTag key={t}>{t}</ShopTag>
          ))}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-[#444748]">{excerpt}</p>
        <dl className="mt-auto space-y-3 border-t border-[#e7e8e9] pt-4 text-xs">
          <ShopDetailRow icon={Clock} label="Hours" value={hours} />
          <ShopDetailRow icon={MapPin} label="Location" value={location} />
          <ShopDetailRow icon={Store} label="Must buy" value={mustBuy} />
        </dl>
      </div>
    </article>
  );
}

function FindCard({
  name,
  nameTh,
  image,
  note,
}: (typeof marketFinds)[number]) {
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

export function ShoppingMarketsPage() {
  return (
    <div data-full-bleed className="bg-[#f8f9fa] text-[#191c1d]">
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
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/75 via-[#191c1d]/50 to-[#191c1d]/88"
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
                <span className="text-white">Local Markets</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-teal-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-800">
            Shopping
          </span>
          <h1
            id="markets-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Local Markets
          </h1>
          <p className="mt-2 text-lg text-teal-200 md:text-xl">ตลาดท้องถิ่น</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Night bazaars, morning wet markets, and floating-market culture —
            where to bargain, snack, and pick up authentic Thai goods.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Store className="h-4 w-4" aria-hidden />
              Bargains & crafts
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />
              Naklua · Thepprasit · east Pattaya
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Markets to visit
          </h2>
          <p className="mt-2 max-w-2xl text-[#444748]">
            From weekend night bazaars to morning local runs — match the market to
            your schedule and shopping list.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {markets.map((market) => (
              <MarketCard key={market.id} {...market} />
            ))}
          </div>
        </section>

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
              className="rounded-xl bg-[#455f88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#455f88]/90"
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
              className="rounded-xl border border-[#455f88]/30 px-6 py-3 text-center text-sm font-semibold text-[#455f88] transition hover:bg-[#455f88]/5"
            >
              Main beaches →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
