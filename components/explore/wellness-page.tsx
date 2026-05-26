import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { Clock, MapPin, Sparkles, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { exploreImages } from "@/lib/design/explore-images";

const spas = [
  {
    id: "aura-sanctuary",
    name: "Aura Sanctuary",
    nameTh: "ออร่า แซงชัวรี่",
    image: exploreImages.auraSanctuary,
    tags: ["Premium", "Skyline", "Thai massage"],
    hours: "Daily · ~10:00–22:00",
    location: "Central Pattaya · skyline views",
    session: "Signature 90-min · from ฿2,400",
    excerpt:
      "World-class Thai massage and aromatherapy in a glass-front sanctuary — the Explore hub’s top wellness pick.",
  },
  {
    id: "cliff-spa",
    name: "Pratumnak Cliff Spa",
    nameTh: "สปาริมหน้าผา พระตำหนัก",
    image: exploreImages.skyGallery,
    tags: ["Clifftop", "Couples", "Sunset"],
    hours: "Daily · ~11:00–21:00",
    location: "Pratumnak Hill",
    session: "Couples package · from ฿3,200",
    excerpt:
      "Oil and herbal compress treatments with bay views — book the last slot for golden-hour calm.",
  },
  {
    id: "jomtien-retreat",
    name: "Jomtien Beach Retreat",
    nameTh: "จอมเทียน บีช รีทรีต",
    image: exploreImages.cafeLifestyle,
    tags: ["Beachfront", "Relax", "Foot massage"],
    hours: "Daily · ~10:00–23:00",
    location: "Jomtien Beach Rd",
    session: "Foot + shoulder · from ฿800",
    excerpt:
      "Casual beach-road spa for post-swim recovery — walk-ins welcome, quieter weekday afternoons.",
  },
  {
    id: "naklua-herbal",
    name: "Naklua Herbal House",
    nameTh: "น้ำมันสมุนไพร นาเกลือ",
    image: exploreImages.caveBeachClub,
    tags: ["Traditional", "Herbal", "Local"],
    hours: "Daily · ~09:00–20:00",
    location: "Naklua, north Pattaya",
    session: "Herbal ball massage · from ฿1,200",
    excerpt:
      "Old-school Thai techniques and warm herbal compresses — authentic, unhurried atmosphere away from the core.",
  },
];

const spaGuideCards: ExploreGuideCardData[] = spas.map((spa) => ({
  id: spa.id,
  name: spa.name,
  nameTh: spa.nameTh,
  image: spa.image,
  tags: spa.tags,
  excerpt: spa.excerpt,
  details: [
    { icon: "clock", label: "Hours", value: spa.hours },
    { icon: "mapPin", label: "Location", value: spa.location },
    { icon: "sparkles", label: "From", value: spa.session },
  ],
}));

const wellnessTips = [
  {
    icon: Clock,
    title: "Book ahead",
    text: "Weekends fill for couples rooms — reserve 24–48 hours ahead for skyline slots at premium spas.",
  },
  {
    icon: Sun,
    title: "Before & after sun",
    text: "Avoid deep massage on fresh sunburn. Hydrate before aromatherapy sessions.",
  },
  {
    icon: Sparkles,
    title: "Communicate pressure",
    text: "Say ‘bao bao’ (light) or ‘nak’ (firm). Tip 10–15% only when service exceeds expectations.",
  },
  {
    icon: MapPin,
    title: "Arrive early",
    text: "Check in 15 minutes early for consultation — late arrivals may shorten treatment time.",
  },
];

export function WellnessPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="wellness-hero-title"
      >
        <Image
          src={exploreImages.auraSanctuary}
          alt="Luxury spa interior in Pattaya"
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
                <span className="text-white">Wellness</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Wellness
          </span>
          <h1
            id="wellness-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Relax & Wellness
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">สปา & นวด</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Premium spas and traditional Thai massage across Pattaya — from
            skyline sanctuaries to quiet herbal houses in Naklua.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title="Choose your sanctuary"
          description="Hand-picked spas from the Explore hub — match skyline luxury, beach recovery, or traditional herbal treatments."
          prevLabel="Previous spas"
          nextLabel="Next spas"
          items={spaGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Spa tips</h2>
          <p className="mt-2 text-[#444748]">
            Get the most from your treatment without surprises.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {wellnessTips.map((tip) => {
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
              href="/explore/beaches"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              Main beaches →
            </Link>
            <Link
              href="/explore/restaurants/fine-dining"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              Fine dining →
            </Link>
            <Link
              href="/explore/islands/koh-larn"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              Koh Larn →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
