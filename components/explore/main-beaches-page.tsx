import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { Clock, MapPin, Sun, Umbrella, Users, Waves, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BeachShorelineCarousel } from "@/components/explore/beach-shoreline-carousel";
import { beachesImages } from "@/lib/design/beaches-images";

const beaches = [
  {
    id: "pattaya-beach",
    name: "Pattaya Beach",
    nameTh: "หาดพัทยา",
    image: beachesImages.pattayaBeach,
    vibe: ["Central", "Nightlife", "Shopping"],
    bestFor: "First-time visitors, beachfront walks, easy access to malls",
    access: "Songthaew along Beach Rd · Walking Street at south end",
    water: "Moderate clarity · busier on weekends",
    excerpt:
      "The city’s signature 3 km stretch from Walking Street to North Pattaya. Lively promenade, jet skis, and sunset views over the bay.",
  },
  {
    id: "jomtien",
    name: "Jomtien Beach",
    nameTh: "หาดจอมเทียน",
    image: beachesImages.jomtien,
    vibe: ["Family", "Calm", "Dining"],
    bestFor: "Families, long-stay visitors, relaxed swimming",
    access: "Songthaew south · parking along Jomtien 2nd Rd",
    water: "Generally calmer than central Pattaya",
    excerpt:
      "A softer, longer shoreline south of the core. Popular for seafood restaurants, water sports, and condo living with sea views.",
  },
  {
    id: "dongtan",
    name: "Dongtan Beach",
    nameTh: "หาดดองตาล",
    image: beachesImages.dongtan,
    vibe: ["Inclusive", "Relaxed", "Local"],
    bestFor: "Inclusive beach culture, casual day trips",
    access: "End of Jomtien Beach Rd · near Dongtan roundabout",
    water: "Shallow sections suitable for wading",
    excerpt:
      "A welcoming stretch at the southern end of Jomtien known for its relaxed atmosphere and strong local community presence.",
  },
  {
    id: "naklua",
    name: "Naklua Beach",
    nameTh: "หาดนาเกลือ",
    image: beachesImages.naklua,
    vibe: ["Local", "Markets", "Authentic"],
    bestFor: "Morning markets, local food, quieter mornings",
    access: "North Pattaya · near Naklua market area",
    water: "Quieter; fishing boats in morning",
    excerpt:
      "Traditional fishing village character meets tourism. Visit early for the market energy, then stroll the quieter sand.",
  },
  {
    id: "wongamat",
    name: "Wong Amat Beach",
    nameTh: "หาดวงอามาด",
    image: beachesImages.wongAmat,
    vibe: ["Upscale", "Quiet", "Clifftop"],
    bestFor: "Luxury stays, peaceful sunbathing, fewer crowds",
    access: "North Pattaya · Wong Amat Rd",
    water: "Clearer on calm days · rocky patches in places",
    excerpt:
      "An upscale northern bay with boutique hotels and clifftop venues. Ideal when you want space and a slower pace.",
  },
  {
    id: "pratumnak",
    name: "Pratumnak Beach",
    nameTh: "หาดพระตำหนัก",
    image: beachesImages.pratumnak,
    vibe: ["Views", "Cliffside", "Sunset"],
    bestFor: "Sunset dinners, photography, cliff viewpoints",
    access: "Pratumnak Hill · between Pattaya & Jomtien",
    water: "Smaller coves · check tide for swimming",
    excerpt:
      "Hilltop outlooks and cliffside dining define this area between the two main bays. Home to iconic sunset restaurants.",
  },
];

const practicalTips = [
  {
    icon: Sun,
    title: "Sun & peak hours",
    text: "UV is strong year-round. Aim for early morning or late afternoon; midday shade is limited on open beaches.",
  },
  {
    icon: Waves,
    title: "Season & sea",
    text: "Nov–Feb often brings calmer seas. May–Oct can have stronger waves — check flags and local advisories before swimming.",
  },
  {
    icon: Umbrella,
    title: "Chair rentals",
    text: "Expect 50–100 THB per chair/umbrella set on busy strips. Confirm price before sitting down.",
  },
  {
    icon: Clock,
    title: "Getting around",
    text: "Blue songthaews run Beach Rd and Jomtien loops. Agree on fare (~10–20 THB short hops) before boarding.",
  },
];

const relatedLinks = [
  {
    label: "Koh Larn day trips",
    href: "/explore/islands/koh-larn",
    blurb: "Island beaches 30 minutes from Bali Hai Pier",
  },
  {
    label: "Hidden gems",
    href: "/explore/hidden-gems",
    blurb: "Secret viewpoints and local-only stretches",
  },
  {
    label: "Wellness & spa",
    href: "/explore/wellness",
    blurb: "Recover after a long beach day",
  },
];

function TipRow({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-[#c4c7c8]/30 bg-white p-4 sm:p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B52E88]/10">
        <Icon className="h-5 w-5 text-[#B52E88]" aria-hidden />
      </div>
      <div>
        <h4 className="font-bold text-[#191c1d]">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-[#444748]">{text}</p>
      </div>
    </div>
  );
}

export function MainBeachesPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="beaches-hero-title"
      >
        <Image
          src={beachesImages.hero}
          alt="Pattaya bay and main beaches at sunset"
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
                <span className="text-white">Beaches</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Beaches
          </span>
          <h1
            id="beaches-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Main Beaches
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">ชายหาดหลัก</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Pattaya&apos;s main beaches and what to expect — from the central
            promenade to quiet northern coves and family-friendly Jomtien.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <MapPin className="h-4 w-4" aria-hidden />6 main stretches
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white ring-1 ring-white/25">
              <Users className="h-4 w-4" aria-hidden />
              Family & nightlife options
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <BeachShorelineCarousel beaches={beaches} />

        <section className="mb-16 overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[240px] md:min-h-0">
              <Image
                src={beachesImages.activities}
                alt="Beach activities in Pattaya"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B52E88]">
                Quick comparison
              </p>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                Central vs south vs north
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[#444748]">
                <li>
                  <strong className="text-[#191c1d]">Pattaya Beach</strong> —
                  busiest, best for first visits and nightlife proximity.
                </li>
                <li>
                  <strong className="text-[#191c1d]">Jomtien & Dongtan</strong>{" "}
                  — longer sand, calmer swim, strong dining scene.
                </li>
                <li>
                  <strong className="text-[#191c1d]">Naklua & Wong Amat</strong>{" "}
                  — quieter mornings, upscale stays, local markets north.
                </li>
                <li>
                  <strong className="text-[#191c1d]">Pratumnak</strong> —
                  cliff sunsets and fine dining, smaller swim coves.
                </li>
              </ul>
              <Link
                href="/explore/islands/koh-larn"
                className="mt-6 inline-flex w-fit rounded-xl bg-[#B52E88] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
              >
                Plan a Koh Larn day trip →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Practical tips
          </h2>
          <p className="mt-2 text-[#444748]">
            Stay comfortable and avoid common tourist pitfalls on the coast.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {practicalTips.map((tip) => (
              <TipRow key={tip.title} {...tip} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold md:text-3xl">Explore more</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[#c4c7c8]/30 bg-white p-5 shadow-sm transition hover:border-[#B52E88]/30 hover:shadow-md"
              >
                <p className="font-bold text-[#B52E88]">{link.label} →</p>
                <p className="mt-2 text-sm text-[#444748]">{link.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
