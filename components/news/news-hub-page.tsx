"use client";

import { NewsFeaturedHeroCinematic } from "@/components/news/news-featured-hero-cinematic";
import { NewsPageFrame, NewsSectionHeading } from "@/components/news/news-layout";
import {
  NewsArticleCard,
  NewsBadge,
  NewsLiveFooter,
  NewsTimeFooter,
  OverlayFeaturedCard,
} from "@/components/news/news-ui";
import { useLanguage } from "@/components/layout/language-provider";
import {
  getCitySpotlights,
  getInfrastructureBlock,
  getMoreCityArticles,
  getNewsArticles,
  getNewsFeaturedCards,
  getNewsHubImageAlts,
  getNewsSections,
  getSportsBlock,
  getWorldNewsBlock,
  tNewsHero,
} from "@/lib/i18n/messages/news-hub";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { newsOverlay } from "@/lib/data/news-category-overlays";
import { newsImages } from "@/lib/design/news-images";
import { newsTheme } from "@/lib/design/news-theme";
import {
  Building2,
  ClipboardList,
  Globe,
  IdCard,
  Moon,
  Radio,
  Route,
  Swords,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NewsHubPage() {
  const { language } = useLanguage();
  const featured = getNewsFeaturedCards(language);
  const sections = getNewsSections(language);
  const articles = getNewsArticles(language);
  const moreArticles = getMoreCityArticles(language);
  const spotlights = getCitySpotlights(language);
  const infra = getInfrastructureBlock(language);
  const sports = getSportsBlock(language);
  const worldNews = getWorldNewsBlock(language);
  const imageAlts = getNewsHubImageAlts(language);
  const [propertyCard, visaCard, immigrationCard] = featured;
  const [crimeArticle, accidentArticle, gemsArticle] = articles;
  const [sanctuaryArticle, walkingArticle, immigrationArticle] = moreArticles;

  return (
    <NewsPageFrame>
        {/* Featured City Updates + three cards below */}
        <section className="mb-12 flex flex-col gap-5 sm:mb-20 sm:gap-6">
          <NewsFeaturedHeroCinematic />
          <p className="hidden flex-wrap items-center gap-3 px-1 text-sm text-[#777777] sm:flex">
            {tNewsHero(language, "byline")}
          </p>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <OverlayFeaturedCard
              image={newsImages.featuredProperty}
              imageAlt={imageAlts.featuredProperty}
              overlayClass="bg-gradient-to-t from-[#0c1a33]/95 via-[#0c1a33]/65 to-[#0c1a33]/30"
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <NewsBadge className="bg-white/15 text-white backdrop-blur-sm">
                    {propertyCard.badge}
                  </NewsBadge>
                  <Building2
                    className="h-5 w-5 text-white/90"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                  {propertyCard.title}
                </h3>
                <p className="line-clamp-2 text-sm text-white/85">
                  {propertyCard.excerpt}
                </p>
              </div>
              <Link
                href={propertyCard.href}
                className={`mt-4 block py-2 text-center ${newsTheme.spotlightCta}`}
              >
                {propertyCard.cta}
              </Link>
            </OverlayFeaturedCard>

            <OverlayFeaturedCard
              image={newsImages.featuredVisa}
              imageAlt={imageAlts.featuredVisa}
              overlayClass={newsOverlay.blue}
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <NewsBadge className="bg-white/20 text-white backdrop-blur-sm">
                    {visaCard.badge}
                  </NewsBadge>
                  <IdCard
                    className="h-5 w-5 text-white/90"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                  {visaCard.title}
                </h3>
                <p className="text-sm text-white/85">{visaCard.excerpt}</p>
              </div>
              <Link
                href={visaCard.href}
                className="mt-4 block rounded-lg bg-white py-2 text-center text-sm font-semibold text-[#10438f] transition-opacity hover:opacity-90"
              >
                {visaCard.cta}
              </Link>
            </OverlayFeaturedCard>

            <OverlayFeaturedCard
              image={newsImages.immigration}
              imageAlt={imageAlts.featuredImmigration}
              overlayClass="bg-gradient-to-t from-[#0c1a33]/95 via-[#455f88]/70 to-[#455f88]/25"
              href={immigrationCard.href}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                    <ClipboardList className="h-5 w-5" aria-hidden />
                  </div>
                  <h4 className="font-bold uppercase tracking-wide text-white">
                    {immigrationCard.heading}
                  </h4>
                </div>
                <span className="shrink-0 text-xs font-medium text-white/75">
                  {immigrationCard.updated}
                </span>
              </div>
              <div className="space-y-3">
                <h5 className="text-sm font-bold text-[#b6d0ff]">
                  {immigrationCard.subheading}
                </h5>
                <p className="text-sm leading-relaxed text-white/85">
                  {immigrationCard.excerpt}
                </p>
              </div>
              <div className="border-t border-white/20 pt-2">
                <span className="text-xs font-bold text-white group-hover:underline">
                  {immigrationCard.cta}
                </span>
              </div>
            </OverlayFeaturedCard>
          </div>
        </section>

        {/* City Movements */}
        <section className="mb-20">
          <NewsSectionHeading
            title={sections.cityMovements}
            action={
              <Link href="/news" className={newsTheme.link}>
                {sections.exploreAll}
              </Link>
            }
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NewsArticleCard
              href={crimeArticle.href}
              image={newsImages.policeCrime}
              imageAlt={imageAlts.crimeArticle}
              badge={crimeArticle.badge}
              badgeClass={newsTheme.badgeDark}
              title={crimeArticle.title}
              excerpt={crimeArticle.excerpt}
              footer={<NewsTimeFooter>{crimeArticle.footer ?? ""}</NewsTimeFooter>}
            />

            <NewsArticleCard
              href={accidentArticle.href}
              image={newsImages.breakingAccident}
              imageAlt={imageAlts.accidentArticle}
              badge={accidentArticle.badge}
              badgeClass="animate-pulse bg-[#ba1a1a] text-white"
              title={accidentArticle.title}
              excerpt={accidentArticle.excerpt}
              footer={<NewsLiveFooter>{sections.liveUpdate}</NewsLiveFooter>}
              borderHover="border-2 border-transparent hover:border-[#10438f]"
            />

            <NewsArticleCard
              href={gemsArticle.href}
              image={newsImages.hiddenGems}
              imageAlt={imageAlts.gemsArticle}
              badge={gemsArticle.badge}
              badgeClass="bg-[#ae2f34] text-white"
              title={gemsArticle.title}
              excerpt={gemsArticle.excerpt}
            >
              <span className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#10438f] bg-[#10438f] py-2.5 text-sm font-semibold text-white transition-all group-hover:bg-[#10438f]/90">
                {sections.bookTour}
              </span>
            </NewsArticleCard>

            <NewsArticleCard
              href={sanctuaryArticle.href}
              image={newsImages.sanctuary}
              imageAlt={imageAlts.sanctuaryArticle}
              badge={sanctuaryArticle.badge}
              badgeClass="bg-[#ae2f34] text-white"
              title={sanctuaryArticle.title}
              excerpt={sanctuaryArticle.excerpt}
              footer={<NewsTimeFooter>{sanctuaryArticle.footer}</NewsTimeFooter>}
            />

            <NewsArticleCard
              href={walkingArticle.href}
              image={newsImages.walkingStreet}
              imageAlt={imageAlts.walkingStreetArticle}
              badge={walkingArticle.badge}
              badgeClass={newsTheme.badgeDark}
              title={walkingArticle.title}
              excerpt={walkingArticle.excerpt}
              footer={<NewsTimeFooter>{walkingArticle.footer}</NewsTimeFooter>}
            />

            <NewsArticleCard
              href={immigrationArticle.href}
              image={newsImages.immigration}
              imageAlt={imageAlts.immigrationArticle}
              badge={immigrationArticle.badge}
              badgeClass={newsTheme.badgeAccent}
              title={immigrationArticle.title}
              excerpt={immigrationArticle.excerpt}
              footer={<NewsTimeFooter>{immigrationArticle.footer}</NewsTimeFooter>}
            />

            <Link
              href={spotlights.hotel.href}
              className="group col-span-1 flex cursor-pointer overflow-hidden rounded-xl bg-[#eef1f5] md:col-span-2"
            >
              <div className="relative min-h-[140px] w-1/3 min-w-[120px] shrink-0 self-stretch overflow-hidden">
                <Image
                  src={newsImages.hotels}
                  alt={imageAlts.hotelSpotlight}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="200px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <span className={`mb-2 ${newsTheme.eyebrow}`}>{spotlights.hotel.eyebrow}</span>
                <h3 className="mb-2 text-xl font-semibold text-[#0c1a33] transition-colors group-hover:text-[#10438f]">
                  {spotlights.hotel.title}
                </h3>
                <p className="line-clamp-2 text-sm text-[#444748]">{spotlights.hotel.excerpt}</p>
              </div>
            </Link>

            <Link
              href={spotlights.walkingStreet.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#2e3132] p-6 text-[#f0f1f2]"
            >
              <Moon
                className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 text-white opacity-10"
                aria-hidden
              />
              <div>
                <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb3b0]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#ae2f34]" />
                  {spotlights.walkingStreet.badge}
                </div>
                <h3 className="mb-4 text-xl font-semibold transition-colors group-hover:text-[#ffb3b0]">
                  {spotlights.walkingStreet.title}
                </h3>
                <p className="mb-6 text-sm text-white/60">{spotlights.walkingStreet.body}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-[#ffdad8] transition-all group-hover:gap-4">
                <Radio className="h-4 w-4" aria-hidden />
                {spotlights.walkingStreet.cta}
              </span>
            </Link>
          </div>
        </section>

        {/* Infrastructure & Growth + Sports sidebar */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="col-span-1 flex flex-col gap-6 lg:col-span-8">
            <div className="flex items-center justify-between border-b border-[#c4c7c8] pb-2">
              <h2 className={newsTheme.sectionTitleSm}>{sections.infrastructure}</h2>
              <span className="rounded bg-[#e7e8e9] px-3 py-1 text-[10px] font-bold text-[#444748]">
                {sections.q3Update}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Link href={infra.roads.href} className={newsTheme.cardMuted}>
                <div className="mb-3 flex items-center gap-3">
                  <div className={newsTheme.iconBox}>
                    <Route className="h-5 w-5" aria-hidden />
                  </div>
                  <h4 className="font-bold text-[#0c1a33]">{infra.roads.title}</h4>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-[#444748]">{infra.roads.excerpt}</p>
                <span className="text-xs font-bold text-[#10438f] hover:underline">
                  {infra.roads.cta}
                </span>
              </Link>

              <Link href={infra.sponsored.href} className={`relative ${newsTheme.cardMuted}`}>
                <span className="absolute right-4 top-4 rounded bg-[#d6e3ff] px-2 py-0.5 text-[9px] font-bold text-[#10438f]">
                  {sections.sponsored}
                </span>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffdad8] text-[#ae2f34]">
                    <UtensilsCrossed className="h-5 w-5" aria-hidden />
                  </div>
                  <h4 className="font-bold text-[#0c1a33]">{infra.sponsored.title}</h4>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-[#444748]">{infra.sponsored.excerpt}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#444748]">{infra.sponsored.rating}</span>
                  <span className="flex items-center gap-0.5 text-amber-500" aria-label={tSiteUi(language, "ratingFourHalfStars")}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                    ))}
                    <Star className="h-3.5 w-3.5 fill-current opacity-50" aria-hidden />
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-8 rounded-xl bg-[#e7e8e9] p-8 md:flex-row">
              <div className="w-full md:w-1/3">
                <div className="aspect-square w-full rotate-3 overflow-hidden rounded-lg border-4 border-white shadow-xl transition-transform group-hover:rotate-0">
                  <div className="relative h-full w-full">
                    <Image
                      src={newsImages.promotions}
                      alt={imageAlts.promoCocktail}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <span className={`mb-2 block ${newsTheme.eyebrow}`}>{infra.promo.eyebrow}</span>
                <h3 className="mb-4 text-2xl font-semibold text-[#0c1a33]">{infra.promo.title}</h3>
                <p className="mb-6 text-[#444748]">{infra.promo.body}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href={infra.promo.href} className={newsTheme.btnPrimaryPill}>
                    {infra.promo.primary}
                  </Link>
                  <Link href={infra.promo.href} className={newsTheme.btnOutlinePill}>
                    {infra.promo.secondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-6 lg:col-span-4">
            <div className="overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white">
              <div className="flex items-center justify-between border-b border-[#c4c7c8] bg-[#f3f4f5] p-6">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0c1a33]">
                  <Swords className="h-5 w-5 text-[#10438f]" aria-hidden />
                  {sports.title}
                </h2>
              </div>
              <div>
                <Link
                  href={sports.muayThai.href}
                  className="group block cursor-pointer border-b border-[#c4c7c8]/30 p-6 transition-colors hover:bg-[#f3f4f5]"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#ae2f34]">
                      {sports.muayThai.badge}
                    </span>
                    <span className="rounded bg-gray-200 px-1 text-[8px] font-bold italic text-gray-500">
                      {sports.muayThai.tag}
                    </span>
                  </div>
                  <h4 className="font-bold leading-tight text-[#0c1a33] transition-colors group-hover:text-[#ae2f34]">
                    {sports.muayThai.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#444748]">{sports.muayThai.excerpt}</p>
                </Link>
                <Link
                  href={sports.golf.href}
                  className="group block cursor-pointer p-6 transition-colors hover:bg-[#f3f4f5]"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#455f88]">
                      {sports.golf.badge}
                    </span>
                    <span className="rounded bg-gray-200 px-1 text-[8px] font-bold italic text-gray-500">
                      {sports.golf.tag}
                    </span>
                  </div>
                  <h4 className="font-bold leading-tight text-[#0c1a33] transition-colors group-hover:text-[#10438f]">
                    {sports.golf.title}
                  </h4>
                  <div className="relative mt-4 h-24 overflow-hidden rounded-lg">
                    <Image
                      src={newsImages.golf}
                      alt={imageAlts.golfCourse}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-[#10438f] p-8 text-white">
              <Globe
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 text-white/5 transition-colors group-hover:text-white/10"
                aria-hidden
              />
              <div className="relative z-10">
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold">
                  {worldNews.title}
                </h3>
                <p className="mb-6 text-sm text-white/70">{worldNews.body}</p>
                <ul className="space-y-4">
                  {worldNews.links.map((link) => (
                    <li key={link.href + link.label} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                      <Link href={link.href} className="text-sm font-semibold italic hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
    </NewsPageFrame>
  );
}
