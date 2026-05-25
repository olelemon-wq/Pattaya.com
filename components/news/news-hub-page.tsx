import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { NewsFeaturedHeroCinematic } from "@/components/news/news-featured-hero-cinematic";
import {
  NewsArticleCard,
  NewsBadge,
  OverlayFeaturedCard,
} from "@/components/news/news-ui";
import { Building2, ClipboardList, IdCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { newsImages } from "@/lib/design/news-images";

export function NewsHubPage() {
  return (
    <div data-full-bleed className="bg-[#f8f9fa] pb-16 text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="news" />
      </div>
      <div className="mx-auto max-w-[1280px] px-4 pt-4 pb-10 sm:px-6 sm:pt-6 md:px-16 md:pt-8">
        {/* Featured City Updates + three cards below */}
        <section className="mb-12 flex flex-col gap-5 sm:mb-20 sm:gap-6">
          <NewsFeaturedHeroCinematic />
          <p className="hidden flex-wrap items-center gap-3 px-1 text-sm text-[#777777] sm:flex">
            <span>By Editor-in-Chief</span>
            <span className="h-1 w-1 rounded-full bg-[#c4c7c8]" aria-hidden />
            <span>2 Hours Ago</span>
          </p>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <OverlayFeaturedCard
              image={newsImages.featuredProperty}
              imageAlt="Luxury penthouse property in Wongamat, Pattaya"
              overlayClass="bg-gradient-to-t from-[#0c1a33]/95 via-[#0c1a33]/65 to-[#0c1a33]/30"
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <NewsBadge className="bg-white/15 text-white backdrop-blur-sm">
                    Property Market
                  </NewsBadge>
                  <Building2
                    className="h-5 w-5 text-white/90"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                  Wongamat Riviera: New Luxury Penthouse Units Released
                </h3>
                <p className="line-clamp-2 text-sm text-white/85">
                  Exclusive preview of the highest-floor residences starting at 25M
                  THB with panoramic sea views.
                </p>
              </div>
              <Link
                href="/news/business/real-estate"
                className="mt-4 block rounded-lg border border-white/60 bg-white/10 py-2 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-[#455f88]"
              >
                View Property Ads
              </Link>
            </OverlayFeaturedCard>

            <OverlayFeaturedCard
              image={newsImages.featuredVisa}
              imageAlt="Travel and visa documentation"
              overlayClass="bg-gradient-to-t from-[#1e3a5f]/95 via-[#2563eb]/75 to-[#3b82f6]/35"
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <NewsBadge className="bg-white/20 text-white backdrop-blur-sm">
                    Visa News
                  </NewsBadge>
                  <IdCard
                    className="h-5 w-5 text-white/90"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                  New &apos;Destination Thailand&apos; Visa: Expert Guide
                </h3>
                <p className="text-sm text-white/85">
                  Everything you need to know about the new 5-year visa for digital
                  nomads and remote workers.
                </p>
              </div>
              <Link
                href="/news/expat/visa"
                className="mt-4 block rounded-lg bg-white py-2 text-center text-sm font-semibold text-[#1e3a5f] transition-opacity hover:opacity-90"
              >
                Get Visa Quote
              </Link>
            </OverlayFeaturedCard>

            <OverlayFeaturedCard
              image={newsImages.immigration}
              imageAlt="Immigration office and official documents in Thailand"
              overlayClass="bg-gradient-to-t from-[#0c1a33]/95 via-[#455f88]/70 to-[#455f88]/25"
              href="/news/expat/immigration"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                    <ClipboardList className="h-5 w-5" aria-hidden />
                  </div>
                  <h4 className="font-bold uppercase tracking-wide text-white">
                    Immigration Updates
                  </h4>
                </div>
                <span className="shrink-0 text-xs font-medium text-white/75">
                  Updated 15m ago
                </span>
              </div>
              <div className="space-y-3">
                <h5 className="text-sm font-bold text-[#b6d0ff]">
                  90-Day Online Reporting System
                </h5>
                <p className="text-sm leading-relaxed text-white/85">
                  Temporary maintenance scheduled for{" "}
                  <span className="font-semibold text-white">Oct 14–16</span>.
                  Residents are advised to visit the Jomtien office or use the
                  mobile app for alternative filings.
                </p>
              </div>
              <div className="border-t border-white/20 pt-2">
                <span className="text-xs font-bold text-white group-hover:underline">
                  View Detailed Advisory →
                </span>
              </div>
            </OverlayFeaturedCard>
          </div>
        </section>

        {/* City Movements */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between border-b border-[#c4c7c8] pb-4">
            <h2 className="text-2xl font-semibold">City Movements</h2>
            <Link
              href="/news"
              className="flex items-center gap-1 text-sm font-semibold text-[#455f88] hover:underline"
            >
              Explore All →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NewsArticleCard
              href="/news/local-news/crime"
              image={newsImages.policeCrime}
              imageAlt="Night street with police lights"
              badge="Police & Crime"
              badgeClass="bg-[#191c1d] text-white"
              title="Jomtien Raids: Underground Casino Shut Down in Late-Night Operation"
              excerpt="Authorities seized over 2 million THB in cash and equipment during the 2 AM raid on a private villa..."
              footer="🕐 45 mins ago"
            />

            <NewsArticleCard
              href="/news/local-news/accidents"
              image={newsImages.breakingAccident}
              imageAlt="Pattaya highway at night"
              badge="Breaking"
              badgeClass="animate-pulse bg-[#ba1a1a] text-white"
              title="Major Traffic Delay: Sukhumvit Road Blocked After Multi-Vehicle Collision"
              excerpt="Commuters are advised to take alternative routes through local sois as emergency crews work to clear the scene..."
              footer="⚠ Live Update"
              footerClass="font-bold uppercase text-[#ba1a1a]"
              borderHover="border-2 border-transparent hover:border-[#10438f]"
            />

            <NewsArticleCard
              href="/news/tourism/attractions"
              image={newsImages.hiddenGems}
              imageAlt="Hidden islands near Pattaya"
              badge="Experiences"
              badgeClass="bg-[#ae2f34] text-white"
              title="Hidden Gems: 5 Secret Islands Near Pattaya You Must Visit This Season"
              excerpt="Escape the crowds and discover the pristine turquoise waters of Koh Rin and Koh Kram Yai..."
            >
              <span className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#10438f] bg-[#10438f] py-2.5 text-sm font-semibold text-white transition-all group-hover:bg-[#10438f]/90">
                Book Tour Now
              </span>
            </NewsArticleCard>

            <NewsArticleCard
              href="/news/tourism/attractions"
              image={newsImages.sanctuary}
              imageAlt="Sanctuary of Truth"
              badge="Attractions"
              badgeClass="bg-[#ae2f34] text-white"
              title="The Sanctuary of Truth: A Masterpiece of Thai Craftsmanship"
              excerpt="Explore the intricate carvings and spiritual journey behind Pattaya's most iconic wooden structure."
              footer="🕐 3 Hours Ago"
            />

            <NewsArticleCard
              href="/news/nightlife/walking-street"
              image={newsImages.walkingStreet}
              imageAlt="Walking Street at night"
              badge="Nightlife Updates"
              badgeClass="bg-[#191c1d] text-white"
              title="Walking Street Transformation: New Smart City Infrastructure Rollout"
              excerpt="Pattaya's nightlife hub undergoes a digital and structural renaissance to enhance visitor safety and experience."
              footer="🕐 5 Hours Ago"
            />

            <NewsArticleCard
              href="/news/expat/immigration"
              image={newsImages.immigration}
              imageAlt="Immigration documents"
              badge="Immigration Updates"
              badgeClass="bg-[#455f88] text-white"
              title="90-Day Online Reporting: System Offline for Maintenance"
              excerpt="Chonburi Immigration has announced a temporary service interruption for online reporting. Residents are advised to visit the Jomtien office or use the mobile app."
              footer="🕐 Updated 15m ago"
            />

            <Link
              href="/news/business/hotels"
              className="group col-span-1 flex cursor-pointer overflow-hidden rounded-xl bg-[#f3f4f5] md:col-span-2"
            >
              <div className="relative min-h-[140px] w-1/3 min-w-[120px] shrink-0 self-stretch overflow-hidden">
                <Image
                  src={newsImages.hotels}
                  alt="Luxury hotel pool overlooking Pattaya coast"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="200px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#455f88]">
                  Hotel Industry
                </span>
                <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-[#455f88]">
                  Occupancy Rates Hit 3-Year High as International Flights Return
                </h3>
                <p className="line-clamp-2 text-sm text-[#444748]">
                  Pattaya&apos;s luxury hotel sector sees a significant rebound with
                  Chinese and European tourists leading the charge...
                </p>
              </div>
            </Link>

            <Link
              href="/news/nightlife/walking-street"
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#2e3132] p-6 text-[#f0f1f2]"
            >
              <div className="pointer-events-none absolute -bottom-10 -right-10 text-[160px] opacity-10">
                🌙
              </div>
              <div>
                <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb3b0]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#ae2f34]" />
                  Walking Street News
                </div>
                <h3 className="mb-4 text-xl font-semibold transition-colors group-hover:text-[#ffb3b0]">
                  Walking Street: New &apos;Neon Garden&apos; Zone Unveiled
                </h3>
                <p className="mb-6 text-sm text-white/60">
                  A first look at the futuristic redevelopment project aimed at
                  transforming the iconic street into a world-class pedestrian hub.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-[#ffdad8] transition-all group-hover:gap-4">
                Live Webcams 📡
              </span>
            </Link>
          </div>
        </section>

        {/* Infrastructure & Growth + Sports sidebar */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="col-span-1 flex flex-col gap-6 lg:col-span-8">
            <div className="flex items-center justify-between border-b border-[#c4c7c8] pb-2">
              <h2 className="text-xl font-semibold">Infrastructure & Growth</h2>
              <span className="rounded bg-[#e7e8e9] px-3 py-1 text-[10px] font-bold text-[#444748]">
                Q3 UPDATE
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Link
                href="/news/local-news/infrastructure"
                className="rounded-xl border border-[#c4c7c8]/30 bg-[#f8f9fa] p-5 transition-all hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d6e3ff] text-lg">
                    🛣️
                  </div>
                  <h4 className="font-bold text-[#191c1d]">Roads & Utilities</h4>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-[#444748]">
                  Scheduled maintenance in Naklua area this Sunday (Oct 14) from
                  9:00 AM to 4:00 PM. Impacted zones listed...
                </p>
                <span className="text-xs font-bold text-[#455f88] hover:underline">
                  Full Impact Map →
                </span>
              </Link>

              <Link
                href="/news/business/openings"
                className="relative rounded-xl border border-[#c4c7c8]/30 bg-[#f8f9fa] p-5 transition-all hover:shadow-md"
              >
                <span className="absolute right-4 top-4 rounded bg-[#d6e3ff] px-2 py-0.5 text-[9px] font-bold">
                  SPONSORED
                </span>
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-[#ffdad8] p-2 text-lg">🍽️</div>
                  <h4 className="font-bold text-[#191c1d]">The Glasshouse Marina</h4>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-[#444748]">
                  Now Open: A revolutionary fine-dining experience at Ocean Marina.
                  Sunset cocktails and fresh Mediterranean...
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#444748]">Rating:</span>
                  <span className="text-amber-400">★★★★½</span>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-8 rounded-xl bg-[#e7e8e9] p-8 md:flex-row">
              <div className="w-full md:w-1/3">
                <div className="aspect-square w-full rotate-3 overflow-hidden rounded-lg border-4 border-white shadow-xl transition-transform group-hover:rotate-0">
                  <div className="relative h-full w-full">
                    <Image
                      src={newsImages.promotions}
                      alt="Elegant tropical cocktail"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-[#455f88]">
                  Exclusive Deals
                </span>
                <h3 className="mb-4 text-2xl font-semibold">
                  Pattaya Restaurant Week: Save up to 50% on Fine Dining
                </h3>
                <p className="mb-6 text-[#444748]">
                  Join over 40 award-winning restaurants for an 11-day celebration
                  of Pattaya&apos;s culinary diversity. Limited table bookings
                  available.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/news/tourism/promotions"
                    className="rounded-full bg-[#10438f] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#10438f]/90"
                  >
                    Get Promo Code
                  </Link>
                  <Link
                    href="/news/tourism/promotions"
                    className="rounded-full border border-[#10438f] px-6 py-2.5 text-sm font-semibold text-[#10438f] transition-all hover:bg-[#10438f]/5"
                  >
                    Participating Outlets
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-6 lg:col-span-4">
            <div className="overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white">
              <div className="flex items-center justify-between border-b border-[#c4c7c8] bg-[#f3f4f5] p-6">
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <span className="text-[#455f88]">🥋</span>
                  Sports & Recreation
                </h2>
              </div>
              <div>
                <Link
                  href="/news/sports/muay-thai"
                  className="group block cursor-pointer border-b border-[#c4c7c8]/30 p-6 transition-colors hover:bg-[#f3f4f5]"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#ae2f34]">
                      Muay Thai News
                    </span>
                    <span className="rounded bg-gray-200 px-1 text-[8px] font-bold italic text-gray-500">
                      MAX FIGHT
                    </span>
                  </div>
                  <h4 className="font-bold leading-tight text-[#191c1d] transition-colors group-hover:text-[#ae2f34]">
                    Lumpinee Champion to Face Local Hero in Weekend Main Event
                  </h4>
                  <p className="mt-2 text-xs text-[#444748]">
                    Max Muay Thai Stadium prepares for a sold-out crowd as local
                    favorite &apos;Iron Knee&apos; returns...
                  </p>
                </Link>
                <Link
                  href="/news/sports/golf"
                  className="group block cursor-pointer p-6 transition-colors hover:bg-[#f3f4f5]"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#455f88]">
                      Golf & Leisure News
                    </span>
                    <span className="rounded bg-gray-200 px-1 text-[8px] font-bold italic text-gray-500">
                      Siam CC
                    </span>
                  </div>
                  <h4 className="font-bold leading-tight text-[#191c1d] transition-colors group-hover:text-[#455f88]">
                    Pattaya Open: International Pro-Am Kicks off at Siam Country
                    Club
                  </h4>
                  <div className="relative mt-4 h-24 overflow-hidden rounded-lg">
                    <Image
                      src={newsImages.golf}
                      alt="Golf course in Pattaya"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-[#10438f] p-8 text-white">
              <div className="pointer-events-none absolute -right-12 -top-12 text-[200px] text-white/5 transition-colors group-hover:text-white/10">
                🌐
              </div>
              <div className="relative z-10">
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold">
                  Pattaya in World News
                </h3>
                <p className="mb-6 text-sm text-white/70">
                  See how global media outlets are reporting on Thailand&apos;s
                  primary tourist destination.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                    <Link
                      href="/news/international/global"
                      className="text-sm font-semibold italic hover:underline"
                    >
                      &quot;The Future of Retirement: Why Pattaya is Winning&quot; —
                      NY Times
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                    <Link
                      href="/news/international/global"
                      className="text-sm font-semibold italic hover:underline"
                    >
                      &quot;Pattaya&apos;s Digital Renaissance&quot; — BBC Travel
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
