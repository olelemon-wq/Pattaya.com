import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { Clock, MapPin, Ticket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { exploreImages } from "@/lib/design/explore-images";

const activities = [
  {
    id: "aquaverse",
    name: "Columbia Pictures Aquaverse",
    nameTh: "โคลัมเบีย พิคเจอร์ส อควาเวิร์ส",
    image: exploreImages.aquaverse,
    tags: ["Water park", "Theme park", "All ages"],
    hours: "Daily · ~10:00–18:00",
    location: "Sukhumvit Rd, south Pattaya",
    highlight: "Movie-themed slides, wave pool, family cabanas",
    excerpt:
      "The world’s first Columbia Pictures theme park — blockbuster zones, lazy river, and full-day tickets for kids and adults.",
  },
  {
    id: "cartoon-network",
    name: "Cartoon Network Amazone",
    nameTh: "การ์ตูน เน็ตเวิร์ก อเมซอน",
    image: exploreImages.islandHopping,
    tags: ["Water park", "Kids", "Slides"],
    hours: "Daily · ~10:00–17:00",
    location: "Bang Saray (short drive from Pattaya)",
    highlight: "Character zones, splash areas, teen-friendly rides",
    excerpt:
      "Cartoon-branded water park with high-energy slides — pair with a beach lunch in Bang Saray afterward.",
  },
  {
    id: "mini-siam",
    name: "Mini Siam",
    nameTh: "เมืองจำลอง",
    image: exploreImages.centralFestival,
    tags: ["Landmarks", "Photos", "Easy walk"],
    hours: "Daily · ~07:00–22:00",
    location: "Sukhumvit Rd, north Pattaya",
    highlight: "Miniature Thailand & global icons, evening lights",
    excerpt:
      "Stroll past scaled temples and world monuments — low effort, high photo value for mixed-age groups.",
  },
  {
    id: "nong-nooch",
    name: "Nong Nooch Tropical Garden",
    nameTh: "สวนนงนุช",
    image: exploreImages.hiddenSpots,
    tags: ["Gardens", "Culture show", "Full day"],
    hours: "Daily · ~08:00–18:00",
    location: "Sattahip (30 min from central Pattaya)",
    highlight: "Elephant shows, orchid gardens, cycling paths",
    excerpt:
      "Sprawling botanical park with cultural performances — ideal for a relaxed family day away from the beach crowds.",
  },
];

const activityGuideCards: ExploreGuideCardData[] = activities.map((item) => ({
  id: item.id,
  name: item.name,
  nameTh: item.nameTh,
  image: item.image,
  tags: item.tags,
  excerpt: item.excerpt,
  details: [
    { icon: "clock", label: "Hours", value: item.hours },
    { icon: "mapPin", label: "Location", value: item.location },
    { icon: "users", label: "Highlights", value: item.highlight },
  ],
}));

const familyTips = [
  {
    icon: Ticket,
    title: "Book online",
    text: "Water parks often discount advance tickets — compare official sites vs hotel concierge bundles.",
  },
  {
    icon: Clock,
    title: "Arrive early",
    text: "Queues shorten before 11:00. Bring swim shoes, sunscreen, and a dry bag for phones.",
  },
  {
    icon: Users,
    title: "Height & age rules",
    text: "Check ride minimum heights online — some slides require adult accompaniment for younger kids.",
  },
  {
    icon: MapPin,
    title: "Getting there",
    text: "Grab or private van for Bang Saray / Sattahip parks; songthaews work for Mini Siam on Sukhumvit.",
  },
];

export function FamilyActivitiesPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="family-hero-title"
      >
        <Image
          src={exploreImages.aquaverse}
          alt="Family water park in Pattaya"
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
                <span className="text-white">Family Activities</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Family
          </span>
          <h1
            id="family-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Family Activities
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">กิจกรรมครอบครัว</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Water parks, gardens, and kid-friendly days out around Pattaya — plan
            tickets, timing, and transport for stress-free family fun.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title="Choose your day out"
          description="Featured family attractions from the Explore hub — mix a splash park morning with gardens or mini-landmarks in the afternoon."
          prevLabel="Previous activities"
          nextLabel="Next activities"
          items={activityGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Family tips</h2>
          <p className="mt-2 text-[#444748]">
            Practical notes before you buy tickets and pack the swim bags.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {familyTips.map((tip) => {
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
              href="/explore/islands/koh-larn"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              Koh Larn day trip →
            </Link>
            <Link
              href="/explore/beaches"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              Main beaches →
            </Link>
            <Link
              href="/explore/restaurants/street-food"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              Street food →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
