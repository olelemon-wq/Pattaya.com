import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { BookOpen, Clock, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { exploreImages } from "@/lib/design/explore-images";

const stories = [
  {
    id: "hidden-spots",
    name: "10 Hidden Spots Only Locals Know",
    nameTh: "10 จุดลับที่คนท้องถิ่นรู้",
    image: exploreImages.hiddenSpots,
    tags: ["Magazine", "Viewpoints", "Local"],
    readTime: "5 min read",
    location: "Naklua · Pratumnak · backstreets",
    excerpt:
      "Secret viewpoints, quiet cafés, and street stalls beyond Walking Street — our editors map the authentic soul of the city.",
  },
  {
    id: "weekend-guide",
    name: "The Ultimate Weekend Guide",
    nameTh: "คู่มือสุดสัปดาห์",
    image: exploreImages.weekendGuide,
    tags: ["Guide", "Luxury", "48 hours"],
    readTime: "8 min read",
    location: "Central Pattaya · Jomtien",
    excerpt:
      "How to spend 48 hours in style — high-end dining, exclusive stays, and the most vibrant nightlife without the tourist traps.",
  },
  {
    id: "naklua-morning",
    name: "Naklua Morning Rituals",
    nameTh: "เช้าที่นาเกลือ",
    image: exploreImages.thepprasitMarket,
    tags: ["Markets", "Food", "Authentic"],
    readTime: "6 min read",
    location: "Naklua fishing village",
    excerpt:
      "Start at the wet market, grab boat noodles, then walk the quieter sand before the buses arrive from Bangkok.",
  },
  {
    id: "pratumnak-sunsets",
    name: "Pratumnak Sunset Trail",
    nameTh: "เส้นทางพระอาทิตย์ตกพระตำหนัก",
    image: exploreImages.skyGallery,
    tags: ["Sunset", "Clifftop", "Photos"],
    readTime: "4 min read",
    location: "Pratumnak Hill",
    excerpt:
      "A short hill loop linking cliff cafés and lookouts — best light 17:30–18:30 on clear evenings.",
  },
];

const storyGuideCards: ExploreGuideCardData[] = stories.map((story) => ({
  id: story.id,
  name: story.name,
  nameTh: story.nameTh,
  image: story.image,
  tags: story.tags,
  excerpt: story.excerpt,
  details: [
    { icon: "clock", label: "Read time", value: story.readTime },
    { icon: "mapPin", label: "Areas", value: story.location },
    { icon: "gem", label: "Vibe", value: story.tags.join(" · ") },
  ],
}));

const editorTips = [
  {
    icon: MapPin,
    title: "Go off-peak",
    text: "Hidden viewpoints empty out on weekday mornings — avoid sunset crowds at famous cliffs.",
  },
  {
    icon: BookOpen,
    title: "Save for offline",
    text: "Screenshot maps and Thai names for taxi drivers — some lanes have no English signage.",
  },
  {
    icon: Sparkles,
    title: "Respect locals",
    text: "Residential sois are not photo studios — ask before shooting homes, temples, or fishing boats.",
  },
  {
    icon: Clock,
    title: "Combine with food",
    text: "Pair Naklua mornings with street-food guides; Pratumnak evenings with fine-dining reservations.",
  },
];

export function HiddenGemsPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(65vh,480px)] overflow-hidden"
        aria-labelledby="gems-hero-title"
      >
        <Image
          src={exploreImages.hiddenSpots}
          alt="Hidden viewpoint in Pattaya"
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
                <span className="text-white">Hidden Gems</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Hidden Gems
          </span>
          <h1
            id="gems-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Hidden Gems
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">จุดลับ & บทความ</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Curated stories and local-only spots for travelers who want Pattaya
            beyond the postcard — viewpoints, markets, and slow evenings.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-16 md:py-16">
        <ExploreGuideCarousel
          title="Stories & secret spots"
          description="Editor picks from the Explore hub — read online or save for your next walk through Naklua, Pratumnak, and the quieter bays."
          prevLabel="Previous stories"
          nextLabel="Next stories"
          items={storyGuideCards}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Explorer tips</h2>
          <p className="mt-2 text-[#444748]">
            How to enjoy off-path Pattaya respectfully and comfortably.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {editorTips.map((tip) => {
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

        <section className="rounded-2xl border border-[#B52E88]/20 bg-[#FCE8F4] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#B52E88] md:text-2xl">
            Want more exclusive insights?
          </h2>
          <p className="mt-2 text-sm text-[#444748]">
            Subscribe on the Explore hub newsletter card for new hidden-gem
            stories each month.
          </p>
          <Link
            href="/explore"
            className="mt-4 inline-flex rounded-xl bg-[#B52E88] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
          >
            Back to Explore hub →
          </Link>
        </section>

        <section className="mt-8 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold md:text-2xl">Also explore</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/explore/beaches"
              className="rounded-xl bg-[#B52E88] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B52E88]/90"
            >
              Main beaches →
            </Link>
            <Link
              href="/explore/shopping/markets"
              className="rounded-xl border border-[#B52E88]/30 px-6 py-3 text-center text-sm font-semibold text-[#B52E88] transition hover:bg-[#B52E88]/5"
            >
              Local markets →
            </Link>
            <Link
              href="/explore/cafes"
              className="rounded-xl border border-[#c4c7c8]/50 px-6 py-3 text-center text-sm font-semibold text-[#191c1d] transition hover:bg-[#edeeef]"
            >
              Cafes →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
