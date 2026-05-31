"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { SongthaewGuide } from "@/components/living/songthaew-guide";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { getSongthaewPage } from "@/lib/i18n/messages/living/songthaew";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { songthaewFaqs } from "@/lib/i18n/messages/living/living-page-faqs";
import { Bus } from "lucide-react";
import Link from "next/link";


export function SongthaewPage() {
  const { language } = useLanguage();
  const copy = getSongthaewPage(language);

  return (
    <LocalizedLivingPageShell
      shellKey="songthaew"
      heroImage={livingImages.songthaewHero}
      ctaHref="#songthaew-content"
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living/transportation/ride-apps" className={livingCtaButtonClass.primary}>
            {copy.rideApps}
          </Link>
          <Link href="/living/culture/etiquette" className={livingCtaButtonClass.outline}>
            {copy.cultureLink}
          </Link>
          <Link href="/living/transportation/driving" className={livingCtaButtonClass.outline}>
            {copy.driving}
          </Link>
        </LivingCtaActions>
      }
    >
      <section
        id="songthaew-content"
        className="relative scroll-mt-28 overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="songthaew-intro-title"
      >
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#B29475" }}
          >
            <Bus className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="songthaew-intro-title" className="text-xl font-bold text-[#0A192F] sm:text-2xl">
              {copy.introTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#444748] sm:text-base">
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-[#D7CBBA]/60 bg-[#f5f5f7] p-4 sm:p-6">
        <SongthaewGuide />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:gap-8">
        <section
          className="flex h-full flex-col rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 sm:p-8"
          aria-labelledby="songthaew-etiquette"
        >
          <h2 id="songthaew-etiquette" className="text-xl font-bold text-[#0A192F]">
            {copy.etiquetteTitle}
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#444748]">
            {copy.etiquetteItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section
          className="flex h-full flex-col rounded-2xl border border-[#e2e8f0] bg-white p-6 sm:p-8"
          aria-labelledby="songthaew-grab-alt"
        >
          <h2 id="songthaew-grab-alt" className="text-xl font-bold text-[#0A192F]">
            {copy.whenGrabTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[#444748]">
            {copy.whenGrabItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#B29475]" aria-hidden>
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-4 text-sm">
            <Link href="/living/safety/scam-alerts" className="font-semibold text-[#B29475] hover:underline">
              {copy.scamLink}
            </Link>
          </p>
        </section>
      </div>

      <LivingFaqSection
        faqs={songthaewFaqs}
        subtitle={faqSubtitle(language, "Songthaew", "สองแถว", "双条车", "Songthaew")}
      />
    </LocalizedLivingPageShell>
  );
}
