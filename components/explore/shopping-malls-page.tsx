import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import {
  Car,
  Clock,
  Film,
  MapPin,
  ShoppingBag,
  Store,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { shoppingImages } from "@/lib/design/shopping-images";

const malls = [
  {
    id: "central-festival",
    name: "Central Festival Pattaya Beach",
    nameTh: "เซ็นทรัล เฟสติวัล พัทยา บีช",
    image: shoppingImages.centralFestival,
    tags: ["Oceanfront", "Luxury brands", "Cinema"],
    hours: "Daily · ~10:00–22:00",
    location: "Pattaya Beach Rd (Beach Rd end)",
    highlights: "Flagship mall with sea views, international fashion, and rooftop dining.",
    excerpt:
      "Pattaya’s largest beach-road mall — air-conditioned comfort, brand-name stores, and easy access from Walking Street and the bay.",
  },
  {
    id: "terminal-21",
    name: "Terminal 21 Pattaya",
    nameTh: "เทอร์มินอล 21 พัทยา",
    image: shoppingImages.terminal21,
    tags: ["Themed floors", "Food court", "Central"],
    hours: "Daily · ~10:00–22:00",
    location: "Pattaya 2 Rd, near Bali Hai Pier",
    highlights: "City-themed levels, wide food court, and mid-range fashion under one roof.",
    excerpt:
      "Distinct airport-terminal concept with photo-friendly décor — popular for families and rainy-day shopping.",
  },
  {
    id: "royal-garden",
    name: "Royal Garden Plaza",
    nameTh: "รอยัล การ์เด้น พลาซ่า",
    image: shoppingImages.royalGarden,
    tags: ["Ripley’s", "Dining", "South Pattaya"],
    hours: "Daily · ~11:00–22:00",
    location: "2nd Rd, south Pattaya",
    highlights: "Ripley’s Believe It or Not!, restaurants, and souvenir-friendly mid-size mall.",
    excerpt:
      "Compact mall with entertainment attractions — handy base before an evening on Walking Street.",
  },
  {
    id: "harbor-mall",
    name: "Harbor Mall & Mike Shopping Mall",
    nameTh: "ฮาร์เบอร์ / ไมค์ ช็อปปิ้ง",
    image: shoppingImages.harborMall,
    tags: ["Budget", "Souvenirs", "South Pattaya"],
    hours: "Daily · ~10:00–21:00",
    location: "South Pattaya, near Bali Hai",
    highlights: "Value fashion, luggage, and tourist souvenirs at lower price points.",
    excerpt:
      "Pair these adjacent complexes for bargain hunting — expect negotiation at smaller independent stalls.",
  },
];

const mallCategories = [
  {
    name: "Fashion & lifestyle",
    nameTh: "แฟชั่น",
    image: shoppingImages.souvenirs,
    note: "International chains mix with local boutiques; sales peak holiday weekends.",
  },
  {
    name: "Electronics",
    nameTh: "อิเล็กทรอนิกส์",
    image: shoppingImages.nightStalls,
    note: "Compare prices online before big purchases; ask about Thai warranty.",
  },
  {
    name: "Cinema & entertainment",
    nameTh: "โรงภาพยนตร์",
    image: shoppingImages.terminal21,
    note: "Major malls run English-subtitled films; book ahead on Friday nights.",
  },
  {
    name: "Dining courts",
    nameTh: "ฟู้ดคอร์ท",
    image: shoppingImages.centralFestival,
    note: "Food courts are card/cash friendly — load a stored-value card where offered.",
  },
];

const mallTips = [
  {
    icon: Car,
    title: "Parking & taxis",
    text: "Beach-road malls fill at sunset. Use mall parking or drop-off; Grab works well after 22:00.",
  },
  {
    icon: Clock,
    title: "Best times",
    text: "Weekday mornings are quietest. Weekends 17:00–20:00 are busiest near cinema and dining.",
  },
  {
    icon: ShoppingBag,
    title: "Tax & receipts",
    text: "Tourist VAT refund applies at participating stores — keep receipts and passport handy.",
  },
  {
    icon: Store,
    title: "Air-con breaks",
    text: "Malls are the midday escape from heat — plan beach time early, shopping after lunch.",
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

function MallCard({
  id,
  name,
  nameTh,
  image,
  tags,
  excerpt,
  hours,
  location,
  highlights,
}: (typeof malls)[number]) {
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
          <ShopDetailRow icon={Film} label="Highlights" value={highlights} />
        </dl>
      </div>
    </article>
  );
}

function CategoryCard({
  name,
  nameTh,
  image,
  note,
}: (typeof mallCategories)[number]) {
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

export function ShoppingMallsPage() {
  return (
    <div data-full-bleed className="bg-[#f8f9fa] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="malls-hero-title"
      >
        <Image
          src={shoppingImages.mallsHero}
          alt="Central Festival Pattaya Beach mall"
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
                <span className="text-white">Shopping Malls</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-teal-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-800">
            Shopping
          </span>
          <h1
            id="malls-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Shopping Malls
          </h1>
          <p className="mt-2 text-lg text-teal-200 md:text-xl">ห้างสรรพสินค้า</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Air-conditioned malls along Pattaya Beach Road and central Pattaya —
            international brands, cinemas, and food courts for hot afternoons.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <ShoppingBag className="h-4 w-4" aria-hidden />
              Luxury & mid-range
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />
              Beach Rd · 2nd Rd
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Major malls</h2>
          <p className="mt-2 max-w-2xl text-[#444748]">
            Four staples from the Explore hub — each suits a different budget and
            vibe, from flagship beachfront to bargain southerly complexes.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {malls.map((mall) => (
              <MallCard key={mall.id} {...mall} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">What to shop</h2>
          <p className="mt-2 text-[#444748]">
            Categories you will find across Pattaya&apos;s larger malls.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {mallCategories.map((cat) => (
              <CategoryCard key={cat.name} {...cat} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Mall tips</h2>
          <p className="mt-2 text-[#444748]">
            Practical notes for smoother shopping days.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {mallTips.map((tip) => {
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
              href="/explore/shopping/markets"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              Local markets →
            </Link>
            <Link
              href="/explore/restaurants/street-food"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              Street food →
            </Link>
            <Link
              href="/explore/cafes"
              className="rounded-xl border border-[#455f88]/30 px-6 py-3 text-center text-sm font-semibold text-[#455f88] transition hover:bg-[#455f88]/5"
            >
              Cafes →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
