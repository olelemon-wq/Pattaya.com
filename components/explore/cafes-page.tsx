import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import {
  Clock,
  Coffee,
  MapPin,
  Sun,
  Wifi,
  Wind,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cafesImages } from "@/lib/design/cafes-images";

const cafes = [
  {
    id: "coco-lounge",
    name: "Coco Lounge & Bar",
    nameTh: "โคโค่ เลาจน์ แอนด์ บาร์",
    image: cafesImages.cocoLounge,
    tags: ["Ocean front", "Sunset", "Cocktails"],
    hours: "Daily · ~10:00–23:00",
    location: "Jomtien Beach Rd",
    mustTry: "Iced latte, fresh coconut, beachfront seating",
    excerpt:
      "Relaxed beach-club energy with coffee by day and drinks at golden hour. Ideal for long chats facing the Gulf.",
  },
  {
    id: "horizon-terrace",
    name: "Horizon Terrace",
    nameTh: "ฮอไรซัน เทอร์เรส",
    image: cafesImages.horizonTerrace,
    tags: ["Sunset view", "Pattaya Beach", "Evening"],
    hours: "Daily · ~11:00–02:00",
    location: "Pattaya Beach Rd",
    mustTry: "Espresso tonic, sunset mocktails, light bites",
    excerpt:
      "Elevated terrace vibes above the central bay — come before dusk for the best light and breeze.",
  },
  {
    id: "bake-bloom",
    name: "Bake & Bloom",
    nameTh: "เบค แอนด์ บลูม",
    image: cafesImages.bakeBloom,
    tags: ["Artisan", "Brunch", "Pratumnak"],
    hours: "Daily · ~08:00–18:00",
    location: "Pratumnak Hill",
    mustTry: "Pour-over single origin, house pastries, avocado toast",
    excerpt:
      "Specialty roasts and bakery-forward brunch in a leafy hill setting — a favourite for slow mornings.",
  },
  {
    id: "pratumnak-view",
    name: "Clifftop Coffee Corners",
    nameTh: "คาเฟ่ริมหน้าผา พระตำหนัก",
    image: cafesImages.pratumnakView,
    tags: ["Viewpoint", "Photo spot", "Quiet"],
    hours: "Daily · ~09:00–20:00",
    location: "Pratumnak / Cosy Beach area",
    mustTry: "Cappuccino, Thai tea soft-serve, cliff panoramas",
    excerpt:
      "Small footprint cafés tucked into the hill with big views — perfect between beach time and dinner plans.",
  },
];

const coffeeStyles = [
  {
    name: "Single-origin pour-over",
    nameTh: "พูรโอเวอร์",
    image: cafesImages.latteArt,
    note: "Ask which beans are on rotation; light roasts suit Pattaya’s heat.",
  },
  {
    name: "Thai tea & coffee",
    nameTh: "ชาไทย / กาแฟโบราณ",
    image: cafesImages.coldBrew,
    note: "Sweetened classics over ice — specify less sugar (‘mai wan’).",
  },
  {
    name: "Brunch plates",
    nameTh: "บรันช์",
    image: cafesImages.brunch,
    note: "Weekends fill 10:00–12:00; reserve if the venue offers booking.",
  },
  {
    name: "Dessert & bakery",
    nameTh: "เบเกอรี่",
    image: cafesImages.dessert,
    note: "Croissants, basque cheesecake, and local fruit tarts pair well with flat whites.",
  },
];

const cafeTips = [
  {
    icon: Sun,
    title: "Best hours",
    text: "Morning for quiet laptop sessions; 17:00–19:00 for sunset terraces and photo light.",
  },
  {
    icon: Wifi,
    title: "Work-friendly",
    text: "Check power outlets and AC — hill cafés cool faster; beach spots can be breezy and loud.",
  },
  {
    icon: Wind,
    title: "Seating choice",
    text: "Indoor for midday heat; outdoor decks for golden hour — bring light layers after dark.",
  },
  {
    icon: Coffee,
    title: "Order like a local",
    text: "‘Kafe yen’ (iced coffee), ‘kafe ron’ (hot), ‘mai wan’ (less sweet). Plant milk varies by shop.",
  },
];

function CafeTag({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-[#B52E88]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#B52E88]">
      {children}
    </span>
  );
}

function CafeDetailRow({
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

function CafeCard({
  id,
  name,
  nameTh,
  image,
  tags,
  excerpt,
  hours,
  location,
  mustTry,
}: (typeof cafes)[number]) {
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
            <CafeTag key={t}>{t}</CafeTag>
          ))}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-[#444748]">{excerpt}</p>
        <dl className="mt-auto space-y-3 border-t border-[#e7e8e9] pt-4 text-xs">
          <CafeDetailRow icon={Clock} label="Hours" value={hours} />
          <CafeDetailRow icon={MapPin} label="Location" value={location} />
          <CafeDetailRow icon={Coffee} label="Must try" value={mustTry} />
        </dl>
      </div>
    </article>
  );
}

function StyleCard({
  name,
  nameTh,
  image,
  note,
}: (typeof coffeeStyles)[number]) {
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

export function CafesPage() {
  return (
    <div data-full-bleed className="bg-[#f8f9fa] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="cafes-hero-title"
      >
        <Image
          src={cafesImages.hero}
          alt="Beach cafe in Pattaya at sunset"
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
                <span className="text-white">Cafes</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-teal-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-800">
            Cafes
          </span>
          <h1
            id="cafes-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Specialty Coffee
          </h1>
          <p className="mt-2 text-lg text-teal-200 md:text-xl">คาเฟ่</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Cafes and specialty coffee spots across Pattaya — from beach-club
            terraces to hilltop brunch and slow pour-over mornings.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Coffee className="h-4 w-4" aria-hidden />
              Sunset & brunch
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />
              Jomtien · Beach Rd · Pratumnak
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Featured cafés
          </h2>
          <p className="mt-2 max-w-2xl text-[#444748]">
            Hand-picked venues from the Explore hub — match your mood to the
            coastline, central bay, or the hill.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {cafes.map((cafe) => (
              <CafeCard key={cafe.id} {...cafe} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">What to order</h2>
          <p className="mt-2 text-[#444748]">
            Four coffee-house styles you will see again and again in Pattaya.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {coffeeStyles.map((style) => (
              <StyleCard key={style.name} {...style} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Café tips</h2>
          <p className="mt-2 text-[#444748]">
            Small habits that make mornings and sunsets smoother.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {cafeTips.map((tip) => {
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
              className="rounded-xl bg-[#455f88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#455f88]/90"
            >
              Fine dining →
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
