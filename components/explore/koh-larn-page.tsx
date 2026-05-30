"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { KohLarnBeachGuide } from "@/components/explore/koh-larn-beach-guide";
import { useLanguage } from "@/components/layout/language-provider";
import { kohLarnImages } from "@/lib/design/koh-larn-images";
import { getKohLarnPage } from "@/lib/i18n/messages/explore-koh-larn";
import { MapPin, Ship, Sparkles, Star, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tourImages = [
  kohLarnImages.snorkeling,
  kohLarnImages.islandTour,
  kohLarnImages.jetski,
  kohLarnImages.parasailing,
];

const restaurantImages = [kohLarnImages.restaurant, kohLarnImages.beachTien];
const stayImages = [kohLarnImages.hotel, kohLarnImages.beachNual];

function QuickInfoBadge({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/25">
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {text}
    </span>
  );
}

type TourCardProps = {
  title: string;
  image: string;
  rating: number;
  price: number;
  badge?: string;
  href: string;
  priceLabel: string;
  bookLabel: string;
};

function TourCard({ title, image, rating, price, badge, href, priceLabel, bookLabel }: TourCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#ae2f34] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-1 text-sm font-semibold text-[#191c1d]">
            <Star className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" aria-hidden />
            <span>{rating}</span>
          </div>
          <h3 className="mt-2 text-base font-bold leading-snug text-[#191c1d]">{title}</h3>
        </div>
        <div className="mt-4 shrink-0">
          <p className="text-sm font-semibold text-[#B52E88]">
            {priceLabel.replace("{price}", price.toLocaleString("th-TH"))}
          </p>
          <Link
            href={href}
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#B52E88] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B52E88]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88]"
          >
            {bookLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

function DirectoryCard({
  name,
  blurb,
  image,
  href,
  promoLink,
}: {
  name: string;
  blurb: string;
  image: string;
  href: string;
  promoLink: string;
}) {
  return (
    <article className="flex gap-4 rounded-xl border border-[#c4c7c8]/30 bg-white p-3 shadow-sm sm:p-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24">
        <Image src={image} alt="" fill className="object-cover" sizes="96px" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h4 className="font-bold text-[#191c1d]">{name}</h4>
        <p className="mt-1 line-clamp-2 text-sm text-[#444748]">{blurb}</p>
        <Link
          href={href}
          className="mt-auto pt-2 text-sm font-semibold text-[#B52E88] hover:underline"
        >
          {promoLink}
        </Link>
      </div>
    </article>
  );
}

export function KohLarnPage() {
  const { language } = useLanguage();
  const page = getKohLarnPage(language);

  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      <section
        className="relative min-h-[min(75vh,560px)] overflow-hidden"
        aria-labelledby="koh-larn-hero-title"
      >
        <Image
          src={kohLarnImages.hero}
          alt={page.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/70 via-[#191c1d]/50 to-[#191c1d]/85"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(75vh,560px)] max-w-[1280px] flex-col justify-end px-5 pb-28 pt-20 md:px-16 md:pb-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
              <li>
                <Link href="/explore" className="hover:text-white">
                  {page.breadcrumb.explore}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/80">{page.breadcrumb.islands}</span>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">{page.breadcrumb.current}</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            {page.hero.badge}
          </span>
          <h1 id="koh-larn-hero-title" className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">{page.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{page.hero.body}</p>
          <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
            <QuickInfoBadge icon={MapPin} text={page.hero.badgeBeaches} />
            <QuickInfoBadge icon={Ship} text={page.hero.badgeFerry} />
            <QuickInfoBadge icon={Sparkles} text={page.hero.badgeTop} />
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-16 max-w-[960px] px-5 sm:-mt-20 md:px-16">
        <form
          className="rounded-2xl border border-[#c4c7c8]/30 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:p-6"
          action="/explore"
          method="get"
          aria-label={page.booking.ariaLabel}
        >
          <p className="text-sm font-bold text-[#191c1d] sm:text-base">{page.booking.title}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:gap-4">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-[#747878]">{page.booking.activityLabel}</span>
              <select
                name="activity"
                defaultValue="snorkeling"
                className="rounded-lg border border-[#c4c7c8]/50 bg-white px-3 py-2.5 text-[#191c1d] focus:border-[#B52E88] focus:outline-none focus:ring-2 focus:ring-[#B52E88]/20"
              >
                {page.booking.activities.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-[#747878]">{page.booking.dateLabel}</span>
              <input
                type="date"
                name="date"
                className="rounded-lg border border-[#c4c7c8]/50 bg-white px-3 py-2.5 text-[#191c1d] focus:border-[#B52E88] focus:outline-none focus:ring-2 focus:ring-[#B52E88]/20"
              />
            </label>
            <button
              type="submit"
              className="h-fit self-end rounded-xl bg-[#B52E88] px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#B52E88]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88] sm:py-3"
            >
              {page.booking.submit}
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-12 px-4 py-12 sm:px-6 sm:py-16">
        <section className="grid gap-8 lg:grid-cols-2 lg:items-start" aria-labelledby="about-koh-larn">
          <div>
            <h2 id="about-koh-larn" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
              {page.about.title}
            </h2>
            <p className="mt-4 leading-relaxed text-[#444748]">{page.about.body}</p>
          </div>
          <aside className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#191c1d]">{page.keyInfo.title}</h3>
            <ul className="mt-4 space-y-4 text-sm text-[#444748]">
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  🚢
                </span>
                <span>
                  <strong className="text-[#191c1d]">{page.keyInfo.transport.label}:</strong>{" "}
                  {page.keyInfo.transport.text}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  ☀️
                </span>
                <span>
                  <strong className="text-[#191c1d]">{page.keyInfo.season.label}:</strong>{" "}
                  {page.keyInfo.season.text}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  🛵
                </span>
                <span>
                  <strong className="text-[#191c1d]">{page.keyInfo.islandTransport.label}:</strong>{" "}
                  {page.keyInfo.islandTransport.text}
                </span>
              </li>
            </ul>
          </aside>
        </section>

        <section aria-labelledby="tours-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="tours-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
                {page.tours.title}
              </h2>
              <p className="mt-1 text-sm text-[#747878]">{page.tours.subtitle}</p>
            </div>
            <Link href="/explore" className="text-sm font-semibold text-[#B52E88] hover:underline">
              {page.tours.viewAll}
            </Link>
          </div>
          <div className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.tours.items.map((tour, i) => (
              <TourCard
                key={tour.title}
                title={tour.title}
                image={tourImages[i] ?? kohLarnImages.snorkeling}
                rating={tour.rating}
                price={tour.price}
                badge={tour.badge}
                href={tour.href}
                priceLabel={page.tours.priceFrom}
                bookLabel={page.bookNow}
              />
            ))}
          </div>
        </section>

        <KohLarnBeachGuide />

        <section aria-labelledby="directory-title">
          <h2 id="directory-title" className="text-2xl font-semibold text-[#191c1d] md:text-3xl">
            {page.directory.title}
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-[#B52E88]">{page.directory.eatTitle}</h3>
              <div className="mt-4 space-y-4">
                {page.directory.restaurants.map((place, i) => (
                  <DirectoryCard
                    key={place.name}
                    {...place}
                    image={restaurantImages[i] ?? kohLarnImages.restaurant}
                    promoLink={page.directory.promoLink}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#B52E88]">{page.directory.stayTitle}</h3>
              <div className="mt-4 space-y-4">
                {page.directory.stays.map((place, i) => (
                  <DirectoryCard
                    key={place.name}
                    {...place}
                    image={stayImages[i] ?? kohLarnImages.hotel}
                    promoLink={page.directory.promoLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
