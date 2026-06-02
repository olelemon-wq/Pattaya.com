"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { LivingFeaturedHeroCinematic } from "@/components/living/living-featured-hero-cinematic";
import { useLanguage } from "@/components/layout/language-provider";
import { CostOfLivingWidget } from "@/components/living/cost-of-living-widget";
import {
  getCommercialCards,
  getCulturalDonts,
  getCulturalDos,
  getInfoCards,
  getScamAlerts,
  tLivingHub,
} from "@/lib/i18n/messages/living/hub";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { livingImages } from "@/lib/design/living-images";

type LivingHubCard = {
  title: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  excerpt: string;
  cta: string;
  href: string;
};

function HubCardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D7CBBA]/50 text-[#B29475]">
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
    </span>
  );
}

function SectionIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#191c1d] md:text-3xl">{title}</h2>
      <p className="mt-1 text-[#444748]">{description}</p>
    </div>
  );
}

function GridInfoCard({
  title,
  icon,
  image,
  imageAlt,
  excerpt,
  cta,
  href,
}: LivingHubCard) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-sm transition-all hover:border-[#455f88]/50"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-base font-bold text-[#191c1d]">{title}</h4>
          <HubCardIcon icon={icon} />
        </div>
        <p className="mb-6 flex-grow text-sm leading-relaxed text-[#444748]">
          {excerpt}
        </p>
        <span className="mt-auto text-xs font-bold uppercase tracking-wider text-[#455f88] group-hover:underline">
          {cta} →
        </span>
      </div>
    </Link>
  );
}

export function LivingHubPage() {
  const { language } = useLanguage();
  const scamAlerts = getScamAlerts(language);
  const culturalDos = getCulturalDos(language);
  const culturalDonts = getCulturalDonts(language);
  const commercialCards = getCommercialCards(language);
  const infoCards = getInfoCards(language);
  return (
    <div data-full-bleed className="bg-[#f8f9fa] pb-16 text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-8 lg:px-6">
        {/* Hero */}
        <section className="mb-20">
          <LivingFeaturedHeroCinematic />
        </section>

        {/* Expat Essentials */}
        <section className="mb-20">
          <SectionIntro
            title={tLivingHub(language, "expatTitle")}
            description={tLivingHub(language, "expatDesc")}
          />

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="group flex flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={livingImages.retirementVisa}
                    alt={tLivingHub(language, "retirementImageAlt")}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-grow flex-col p-8">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#ae2f34]">
                    {tLivingHub(language, "visaBadge")}
                  </span>
                  <h3 className="mb-4 text-xl font-semibold">
                    {tLivingHub(language, "retirementTitle")}
                  </h3>
                  <p className="mb-8 flex-grow leading-relaxed text-[#444748]">
                    {tLivingHub(language, "retirementExcerpt")}
                  </p>
                  <Link
                    href="/living/visa/retirement"
                    className="mt-auto inline-flex w-fit rounded-full bg-[#B29475] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#B29475]/25 transition-all hover:bg-[#B29475]/90"
                  >
                    {tLivingHub(language, "retirementCta")}
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={livingImages.realEstate}
                    alt={tLivingHub(language, "realEstateImageAlt")}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-grow flex-col p-8">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#455f88]">
                    {tLivingHub(language, "realEstateBadge")}
                  </span>
                  <h3 className="mb-4 text-xl font-semibold">
                    {tLivingHub(language, "condoTitle")}
                  </h3>
                  <p className="mb-8 flex-grow leading-relaxed text-[#444748]">
                    {tLivingHub(language, "condoExcerpt")}
                  </p>
                  <Link
                    href="/living/housing/condo-buying"
                    className="mt-auto text-sm font-bold text-[#455f88] hover:underline"
                  >
                    {tLivingHub(language, "condoCta")}
                  </Link>
                </div>
              </article>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Scam alerts */}
              <div className="flex flex-col justify-center rounded-xl border-l-[12px] border-[#ae2f34] bg-[#D7CBBA] p-8">
                <div className="relative mb-8 h-48 overflow-hidden rounded-lg">
                  <Image
                    src={livingImages.scamAlerts}
                    alt={tLivingHub(language, "scamAlertsImageAlt")}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ae2f34] text-white">
                    ⚠
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#ae2f34]">
                    {tLivingHub(language, "scamTitle")}
                  </h4>
                </div>
                <ul className="mb-10 space-y-4">
                  {scamAlerts.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ae2f34]" />
                      <p className="text-sm font-bold leading-tight text-[#8c1520]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mb-8">
                  <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#ae2f34]">
                    {tLivingHub(language, "safetyEssentials")}
                  </h5>
                  <ul className="space-y-2 text-sm text-[#8c1520]">
                    <li>✓ {tLivingHub(language, "safety1")}</li>
                    <li>✓ {tLivingHub(language, "safety2")}</li>
                  </ul>
                </div>
                <div className="mt-auto rounded-lg border border-[#ae2f34]/10 bg-white/50 p-6">
                  <h5 className="mb-2 font-bold text-[#191c1d]">
                    {tLivingHub(language, "emergencyTitle")}
                  </h5>
                  <p className="mb-4 text-xs text-[#444748]">
                    {tLivingHub(language, "emergencyBody")}
                  </p>
                  <Link
                    href="/living/safety/scam-alerts"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ae2f34] py-3 text-xs font-bold text-white transition-colors hover:bg-[#8c1520]"
                  >
                    {tLivingHub(language, "downloadSafety")}
                  </Link>
                </div>
              </div>

              {/* Culture & etiquette */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden md:h-56">
                  <Image
                    src={livingImages.cultureEtiquette}
                    alt={tLivingHub(language, "cultureImageAlt")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-white/80">
                      {tLivingHub(language, "cultureEyebrow")}
                    </span>
                    <h4 className="text-2xl font-semibold text-white">
                      {tLivingHub(language, "cultureTitle")}
                    </h4>
                  </div>
                </div>
                <div className="flex-grow p-8">
                  <p className="mb-8 text-sm leading-relaxed text-[#444748]">
                    {tLivingHub(language, "cultureIntro")}
                  </p>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <h5 className="mb-4 flex items-center gap-2 border-b border-[#455f88]/10 pb-2 text-sm font-bold uppercase tracking-widest text-[#455f88]">
                        ✓ {tLivingHub(language, "culturalDos")}
                      </h5>
                      <ul className="space-y-4">
                        {culturalDos.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.title}>
                              <p className="mb-1 flex items-center gap-2 text-sm font-bold">
                                <Icon
                                  className="h-4 w-4 shrink-0 text-[#455f88]"
                                  aria-hidden
                                />
                                {item.title}
                              </p>
                              <p className="text-xs leading-relaxed text-[#444748]">
                                {item.text}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-4 flex items-center gap-2 border-b border-[#ae2f34]/10 pb-2 text-sm font-bold uppercase tracking-widest text-[#ae2f34]">
                        ✕ {tLivingHub(language, "culturalDonts")}
                      </h5>
                      <ul className="space-y-4">
                        {culturalDonts.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.title}>
                              <p className="mb-1 flex items-center gap-2 text-sm font-bold">
                                <Icon
                                  className="h-4 w-4 shrink-0 text-[#ae2f34]"
                                  aria-hidden
                                />
                                {item.title}
                              </p>
                              <p className="text-xs leading-relaxed text-[#444748]">
                                {item.text}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#c4c7c8]/30 bg-[#f3f4f5] px-8 py-6">
                  <span className="text-xs italic text-[#444748]">
                    {tLivingHub(language, "cultureFooter")}
                  </span>
                  <Link
                    href="/living/culture/etiquette"
                    className="text-xs font-bold uppercase tracking-widest text-[#455f88] hover:underline"
                  >
                    {tLivingHub(language, "protocolGuide")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Potential */}
        <section className="mb-20">
          <SectionIntro
            title={tLivingHub(language, "commercialTitle")}
            description={tLivingHub(language, "commercialDesc")}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {commercialCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex min-h-[280px] flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white pb-6 shadow-sm transition-all hover:border-[#455f88]/50"
              >
                <div className="relative mb-4 aspect-video w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />
                </div>
                <div className="flex flex-grow flex-col px-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-bold text-[#191c1d]">{card.title}</h4>
                    <HubCardIcon icon={card.icon} />
                  </div>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-[#444748]">
                    {card.excerpt}
                  </p>
                  <span className="text-xs font-bold text-[#455f88] group-hover:underline">
                    {card.cta.toUpperCase()} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Steady Traffic & Informational */}
        <section className="mb-20">
          <SectionIntro
            title={tLivingHub(language, "steadyTitle")}
            description={tLivingHub(language, "steadyDesc")}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <GridInfoCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        {/* Lifestyle & Convenience */}
        <section className="mb-20">
          <div className="hub-lifestyle-row grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="hub-lifestyle-row__cost lg:col-span-8">
              <CostOfLivingWidget />
            </div>

            <aside className="hub-mobility lg:col-span-4">
              <div className="relative h-[4.5rem] w-full shrink-0 overflow-hidden rounded-t-xl sm:h-20">
                <Image
                  src={livingImages.boltApp}
                  alt={tLivingHub(language, "mobilityTitle")}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#D7CBBA] via-[#D7CBBA]/50 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="hub-mobility__body">
                <h3 className="text-lg font-semibold leading-snug text-[#3f5882]">
                  {tLivingHub(language, "mobilityTitle")}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#3f5882]/80 line-clamp-2">
                  {tLivingHub(language, "mobilityDesc")}
                </p>

                <div className="hub-mobility__links">
                  <Link
                    href="/living/transportation/ride-apps"
                    className="hub-mobility__link hub-mobility__link--grab group"
                  >
                    <div className="hub-mobility__link-visual">
                      <Image
                        src={livingImages.grabApp}
                        alt={tLivingHub(language, "grabTitle")}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1023px) 44px, (min-width: 1024px) 280px"
                      />
                      <span className="hub-mobility__link-badge" style={{ backgroundColor: "#00B14F" }}>
                        G
                      </span>
                    </div>
                    <div className="hub-mobility__link-content">
                      <div className="hub-mobility__link-text">
                        <p className="hub-mobility__link-title">
                          {tLivingHub(language, "grabTitle")}
                        </p>
                        <p className="hub-mobility__link-sub">
                          {tLivingHub(language, "grabSub")}
                        </p>
                      </div>
                      <span className="hub-mobility__link-arrow" aria-hidden>
                        →
                      </span>
                    </div>
                  </Link>
                  <Link
                    href="/living/transportation/ride-apps"
                    className="hub-mobility__link hub-mobility__link--bolt group"
                  >
                    <div className="hub-mobility__link-visual">
                      <Image
                        src={livingImages.boltApp}
                        alt={tLivingHub(language, "boltTitle")}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1023px) 44px, (min-width: 1024px) 280px"
                      />
                      <span className="hub-mobility__link-badge" style={{ backgroundColor: "#0047FF" }}>
                        B
                      </span>
                    </div>
                    <div className="hub-mobility__link-content">
                      <div className="hub-mobility__link-text">
                        <p className="hub-mobility__link-title">
                          {tLivingHub(language, "boltTitle")}
                        </p>
                        <p className="hub-mobility__link-sub">
                          {tLivingHub(language, "boltSub")}
                        </p>
                      </div>
                      <span className="hub-mobility__link-arrow" aria-hidden>
                        →
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
