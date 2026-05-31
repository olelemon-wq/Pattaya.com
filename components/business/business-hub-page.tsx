"use client";

import { BusinessPageFooter } from "@/components/business/business-page-footer";
import { FeaturedHeroCinematic } from "@/components/cinematic/featured-hero-cinematic";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { commonUi } from "@/lib/i18n/messages/common";
import {
  getEconomyStats,
  getIndustryGuides,
  getNetworkingEvents,
  getSetupCards,
  tBusiness,
  type IndustryGuideItem,
} from "@/lib/i18n/messages/business-hub";
import { pickText } from "@/lib/i18n/text";
import { businessImages } from "@/lib/design/business-images";
type SetupCardProps = ReturnType<typeof getSetupCards>[number];

function SetupCard({
  title,
  excerpt,
  image,
  imageAlt,
  features,
  cta,
  href,
}: SetupCardProps) {
  const { language } = useLanguage();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col p-8">
        <span className="mb-6 inline-block w-fit rounded-full border border-[#363636]/15 bg-[#363636]/8 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#363636]">
          {tBusiness(language, "setupBadge")}
        </span>
        <h3 className="mb-6 text-2xl font-bold text-[#363636]">{title}</h3>
        <p className="mb-8 text-[#444748]">{excerpt}</p>
        <ul className="mb-8 flex-grow space-y-4">
          {features.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm font-bold text-[#191c1d]"
            >
              <span className="text-[#191c1d]" aria-hidden>
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="w-full rounded-xl border-2 border-[#363636] py-4 text-center font-bold text-[#363636] transition-all hover:bg-[#363636] hover:text-white"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

function IndustryGuideCard({
  title,
  badge,
  excerpt,
  image,
  imageAlt,
  checklist,
  cta,
  href,
  variant,
  badgePosition = "top",
}: IndustryGuideItem) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white transition-all duration-500 hover:border-[#B8860B]/30 hover:shadow-[0_20px_50px_rgba(184,134,11,0.08)]">
      <div
        className={`relative h-64 shrink-0 overflow-hidden ${variant === "dark" ? "flex items-center justify-center bg-[#363636]" : ""}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${variant === "dark" ? "opacity-50" : ""}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {variant === "dark" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span
              className="relative z-10 text-[56px] opacity-40 text-white"
              aria-hidden
            >
              🌙
            </span>
          </>
        )}
        <span
          className={`absolute rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md ${
            badgePosition === "bottom"
              ? "bottom-6 right-6 bg-[#B8860B]"
              : "left-6 top-6"
          }`}
        >
          {badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-10">
        <h4 className="mb-4 text-2xl font-bold text-[#363636]">{title}</h4>
        <p className="mb-8 text-sm leading-relaxed text-[#444748] opacity-80">
          {excerpt}
        </p>
        <ul className="mb-8 flex-1 space-y-4">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 text-[13px] font-semibold text-[#363636]"
            >
              <span className="shrink-0 text-xl text-[#B8860B]" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-auto flex w-full items-center justify-center rounded-lg bg-[#363636] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-[#363636]/10 transition-all hover:bg-[#363636]/90"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

export function BusinessHubPage() {
  const { language } = useLanguage();
  const setupCards = getSetupCards(language);
  const industryGuides = getIndustryGuides(language);
  const economyStats = getEconomyStats(language);
  const networkingEvents = getNetworkingEvents(language);

  return (
    <div data-full-bleed className="bg-[#f5f5f4] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="business" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pt-8 md:px-16">
        <section className="mb-12 md:mb-16" aria-label={tBusiness(language, "heroTitle")}>
          <FeaturedHeroCinematic
            image={businessImages.hero}
            imageAlt={tBusiness(language, "heroImageAlt")}
            href="/business/company-setup/thai-company"
            category={tBusiness(language, "heroFeaturedCategory")}
            featuredLabel={pickText(language, {
              en: "Featured",
              th: "แนะนำ",
              zh: "精选",
              ru: "Рекомендуем",
            })}
            title={tBusiness(language, "heroFeaturedTitle")}
            excerpt={tBusiness(language, "heroFeaturedExcerpt")}
            ctaLabel={tBusiness(language, "heroCtaStart")}
            ctaTone="news"
            visualTone="news-dawn"
            showAiSummary={false}
            minHeightClass="min-h-[min(70dvh,400px)] sm:min-h-[500px] lg:min-h-[560px]"
          />
        </section>
      </div>

      {/* Company Setup */}
      <section id="company-setup" className="scroll-mt-24 relative bg-white py-20 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-[#363636] md:text-5xl">
              {tBusiness(language, "setupSectionTitle")}
            </h2>
            <p className="text-lg text-[#444748]">
              {tBusiness(language, "setupSectionSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {setupCards.map((card) => (
              <SetupCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Guides */}
      <section id="industry-guides" className="scroll-mt-24 relative bg-[#f5f5f4] py-20 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-2xl">
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#B8860B]">
                {tBusiness(language, "industryTitle")}
              </span>
              <h2 className="mb-4 text-4xl font-bold text-[#363636] md:text-5xl">
                {pickText(language, {
                  en: "Industry operating guides",
                  th: "คู่มือบริหารตามอุตสาหกรรม",
                  zh: "行业运营指南",
                  ru: "Отраслевые гайды",
                })}
              </h2>
              <p className="border-l-2 border-[#B8860B] pl-6 text-lg text-[#444748]">
                {tBusiness(language, "industrySubtitle")}
              </p>
            </div>
            <Link
              href="/business/guide/restaurant"
              className="group flex items-center gap-3 pb-1 text-sm font-bold uppercase tracking-widest text-[#363636] transition-all hover:text-[#B8860B]"
            >
              {pickText(language, {
                en: "View all guides",
                th: "ดูคู่มือทั้งหมด",
                zh: "查看全部指南",
                ru: "Смотреть все гайды",
              })}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {industryGuides.map((guide) => (
              <IndustryGuideCard key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Economy */}
      <section id="economy" className="scroll-mt-24 relative overflow-hidden bg-[#363636] py-20 md:py-[100px]">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#ae2f34]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div>
              <h2 className="mb-10 text-4xl font-bold leading-tight text-white">
                {pickText(language, {
                  en: "Pattaya Economic",
                  th: "สถิติและความเติบโต",
                  zh: "芭提雅经济",
                  ru: "Экономика Паттайи",
                })}
                <br />
                <span className="text-[#ffb3b0]">
                  {pickText(language, {
                    en: "Growth Metrics",
                    th: "ทางเศรษฐกิจพัทยา",
                    zh: "增长指标",
                    ru: "Показатели роста",
                  })}
                </span>
              </h2>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  {economyStats.map((stat) => (
                    <div key={stat.label} className="group space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl" aria-hidden>
                          {stat.icon}
                        </span>
                        <div className="text-3xl font-bold text-white">
                          {stat.value}
                        </div>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        {stat.label}
                      </p>
                      <div className="h-0.5 w-8 bg-[#ae2f34] transition-all duration-500 group-hover:w-full" />
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-relaxed text-white/50">
                  {tBusiness(language, "economyStatDisclaimer")}
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
              <div className="group relative mb-8 overflow-hidden rounded-2xl">
                <Image
                  src={businessImages.investment}
                  alt={tBusiness(language, "investmentSpotlightAlt")}
                  width={800}
                  height={320}
                  className="h-80 w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8">
                  <div className="space-y-1">
                    <span className="mb-2 inline-block rounded-full bg-[#ae2f34] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      {tBusiness(language, "specialProject")}
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      {tBusiness(language, "investmentSpotlightTitle")}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <h4 className="mb-4 text-2xl font-semibold text-[#363636]">
                  {tBusiness(language, "realEstateTitle")}
                </h4>
                <p className="mb-10 leading-relaxed text-[#444748]">
                  {tBusiness(language, "realEstateExcerpt")}
                </p>
                <Link
                  href="/business/investment/real-estate"
                  className="block w-full rounded-2xl border-2 border-[#363636] py-5 text-center font-bold text-[#363636] shadow-lg transition-all hover:bg-[#363636] hover:text-white hover:shadow-[#363636]/20"
                >
                  {tBusiness(language, "contactAgent")}
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/business/investment/economy"
              className="text-sm font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white"
            >
              {tBusiness(language, "viewEconomyOverview")}
            </Link>
          </div>
        </div>
      </section>

      {/* Networking Events */}
      <section id="networking" className="scroll-mt-24 bg-white py-20 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mb-4 flex items-center gap-5">
            <h2 className="text-4xl font-bold text-[#363636]">
              {pickText(language, {
                en: "Business Networking Events",
                th: "ตารางกิจกรรมเครือข่ายธุรกิจ",
                zh: "商业社交活动",
                ru: "Бизнес-мероприятия и нетворкинг",
              })}
            </h2>
          </div>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#444748]">
            {tBusiness(language, "eventsHubNote")}
          </p>
          <div className="overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-[#ebebea]">
            {networkingEvents.map((event, i) => (
              <div
                key={event.title}
                className={`group flex flex-col items-start bg-white p-8 transition-all hover:bg-[#f5f5f4] md:flex-row md:items-center ${
                  i < networkingEvents.length - 1
                    ? "border-b border-[#c4c7c8]/30"
                    : ""
                }`}
              >
                <div className="flex-grow md:pr-8">
                  <h5 className="mb-3 text-2xl font-bold text-[#363636]">
                    {event.title}
                  </h5>
                  <p className="flex items-center gap-2 text-sm font-medium text-[#444748] opacity-80">
                    <span aria-hidden>📍</span>
                    {event.location}
                  </p>
                </div>
                <div className="mt-6 shrink-0 md:mt-0">
                  <Link
                    href={event.href}
                    className="whitespace-nowrap rounded-full border-2 border-[#363636] px-8 py-3.5 text-sm font-bold tracking-wide text-[#363636] transition-all hover:bg-[#363636] hover:text-white"
                  >
                    {event.linkLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BusinessPageFooter />
    </div>
  );
}
