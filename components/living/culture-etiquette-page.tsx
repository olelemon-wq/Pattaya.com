"use client";

import { CultureEtiquetteFaq } from "@/components/living/culture-etiquette-faq";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import {
  getCultureDos,
  getCultureDonts,
  getCultureEtiquettePage,
  getDontDeepDives,
  getPattayaTips,
  getSocialTips,
  getTempleChecklist,
  type EtiquetteItemId,
} from "@/lib/i18n/messages/living/culture-etiquette";
import {
  Briefcase,
  Bus,
  Camera,
  Check,
  Crown,
  Footprints,
  Hand,
  Handshake,
  Heart,
  HardHat,
  Landmark,
  Languages,
  ListOrdered,
  MapPin,
  Music,
  Shield,
  Shirt,
  Smile,
  Sparkles,
  Sun,
  Trash2,
  Users,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const doIcons: Partial<Record<EtiquetteItemId, LucideIcon>> = {
  wai: Handshake,
  hierarchy: Users,
  dress: Shirt,
  monks: Landmark,
  shoes: Footprints,
  "thai-phrases": Languages,
  "right-hand": Hand,
  smile: Smile,
  queue: ListOrdered,
};

const dontIcons: Partial<Record<EtiquetteItemId, LucideIcon>> = {
  head: Hand,
  feet: Footprints,
  voice: VolumeX,
  monarchy: Crown,
  pda: Heart,
  "beach-dress": Sun,
  "photos-monks": Camera,
  "public-argue": Users,
  litter: Trash2,
};

const pattayaIcons = [Landmark, Sun, Music, Shield, Briefcase, Bus, HardHat] as const;

function EtiquetteCard({
  icon: Icon,
  title,
  text,
  variant,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  variant: "do" | "dont";
}) {
  const accent = variant === "do" ? "#B29475" : "#ae2f34";
  return (
    <article
      className={`group flex gap-4 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
        variant === "do"
          ? "border-[#e2e8f0] hover:border-[#D7CBBA]"
          : "border-[#f0e0e0] hover:border-[#ae2f34]/40"
      }`}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition group-hover:scale-105"
        style={{ backgroundColor: accent }}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0">
        <h3 className="font-bold text-[#0A192F]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">{text}</p>
      </div>
    </article>
  );
}

export function CultureEtiquettePage() {
  const { language } = useLanguage();
  const copy = getCultureEtiquettePage(language);
  const dos = getCultureDos(language);
  const donts = getCultureDonts(language);
  const templeItems = getTempleChecklist(language);
  const pattayaTips = getPattayaTips(language);
  const socialTips = getSocialTips(language);
  const deepDives = getDontDeepDives(language);

  return (
    <LocalizedLivingPageShell
      shellKey="cultureEtiquette"
      heroImage={livingImages.cultureEtiquette}
      heroAlt="Thai culture and etiquette in Pattaya"
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/culture/thai-culture" className={livingCtaButtonClass.outline}>
            {copy.thaiCulture}
          </Link>
          <Link href="/living/safety/scam-alerts" className={livingCtaButtonClass.danger}>
            {copy.scamAlerts}
          </Link>
        </LivingCtaActions>
      }
    >
      {/* Intro */}
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="intro-title"
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #B29475 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#B29475" }}
          >
            <Sparkles className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section aria-labelledby="pillars-title">
        <h2 id="pillars-title" className={livingTheme.heading}>
          {copy.pillarsTitle}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {copy.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-[#D7CBBA]/50 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#B29475]/15 text-[#B29475]">
                <Heart className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-bold text-[#0A192F]">{pillar.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Wai guide */}
      <section
        className="rounded-2xl border border-[#0A192F]/10 bg-[#0A192F] p-6 text-white sm:p-8"
        aria-labelledby="wai-title"
      >
        <h2 id="wai-title" className="text-xl font-bold text-[#D7CBBA] sm:text-2xl">
          {copy.waiTitle}
        </h2>
        <p className="mt-2 text-sm text-white/80 sm:text-base">{copy.waiSubtitle}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {copy.waiSteps.map((step, i) => (
            <div
              key={step.level}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-[#B29475]">
                {i === 0 ? "①" : i === 1 ? "②" : "③"} {step.level}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-white/90">{step.who}</p>
            </div>
          ))}
        </div>
      </section>

      {/* High & low */}
      <section
        className="rounded-2xl border border-[#0A192F]/10 bg-[#0A192F]/[0.03] p-5 sm:p-6"
        aria-labelledby="high-low-title"
      >
        <h2 id="high-low-title" className="text-lg font-bold text-[#0A192F] sm:text-xl">
          {copy.highLowTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.body}`}>{copy.highLowBody}</p>
      </section>

      {/* Dos & Don'ts side by side */}
      <section aria-labelledby="dos-donts-compare">
        <h2 id="dos-donts-compare" className="sr-only">
          {copy.dosDontsIntro}
        </h2>
        <p className={`mb-6 max-w-3xl ${livingTheme.muted}`}>{copy.dosDontsIntro}</p>
        <div className="grid gap-8 xl:grid-cols-2 xl:gap-10">
          <div aria-labelledby="dos-title">
            <h3
              id="dos-title"
              className="flex items-center gap-2 text-xl font-bold text-[#B29475] sm:text-2xl"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B29475] text-sm text-white"
                aria-hidden
              >
                ✓
              </span>
              {copy.dosTitle}
            </h3>
            <div className="mt-5 grid gap-4">
              {dos.map((item) => (
                <EtiquetteCard
                  key={item.id}
                  icon={doIcons[item.id] ?? Handshake}
                  title={item.title}
                  text={item.text}
                  variant="do"
                />
              ))}
            </div>
          </div>
          <div aria-labelledby="donts-title">
            <h3
              id="donts-title"
              className="flex items-center gap-2 text-xl font-bold text-[#ae2f34] sm:text-2xl"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ae2f34] text-sm text-white"
                aria-hidden
              >
                ✕
              </span>
              {copy.dontsTitle}
            </h3>
            <div className="mt-5 grid gap-4">
              {donts.map((item) => (
                <EtiquetteCard
                  key={item.id}
                  icon={dontIcons[item.id] ?? VolumeX}
                  title={item.title}
                  text={item.text}
                  variant="dont"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep dives */}
      <section aria-labelledby="deep-dive-title">
        <h2 id="deep-dive-title" className={livingTheme.heading}>
          {copy.deepDiveTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.deepDiveSubtitle}</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {deepDives.map((block) => (
            <article
              key={block.id}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
            >
              <h3 className="font-bold text-[#ae2f34]">{block.title}</h3>
              <p className={`mt-2 text-sm font-medium text-[#0A192F] ${livingTheme.body}`}>
                {block.why}
              </p>
              <ul className="mt-3 space-y-2">
                {block.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex gap-2 text-sm leading-relaxed text-[#444748]"
                  >
                    <span className="text-[#B29475]" aria-hidden>
                      →
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Temple checklist */}
      <section
        className="grid gap-6 lg:grid-cols-2 lg:items-start"
        aria-labelledby="temple-title"
      >
        <div>
          <h2 id="temple-title" className={livingTheme.heading}>
            {copy.templeTitle}
          </h2>
          <p className={`mt-2 ${livingTheme.muted}`}>{copy.templeSubtitle}</p>
        </div>
        <ul className="space-y-3 rounded-2xl border border-[#D7CBBA]/60 bg-[#faf7f2] p-5 sm:p-6">
          {templeItems.map((line) => (
            <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#444748] sm:text-base">
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B29475] text-white"
                aria-hidden
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              {line}
            </li>
          ))}
        </ul>
      </section>

      {/* Pattaya tips */}
      <section aria-labelledby="pattaya-title">
        <h2 id="pattaya-title" className={livingTheme.heading}>
          {copy.pattayaTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.pattayaSubtitle}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pattayaTips.map((tip, i) => {
            const Icon = pattayaIcons[i] ?? MapPin;
            return (
              <article
                key={tip.title}
                className={`flex flex-col gap-3 p-5 shadow-sm transition hover:shadow-md ${livingTheme.cardStatic}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A192F] text-[#D7CBBA]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-bold text-[#0A192F]">{tip.title}</h3>
                <p className={`flex-1 text-sm leading-relaxed ${livingTheme.body}`}>{tip.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Social tips */}
      <section aria-labelledby="social-title" className={livingTheme.accentPanel}>
        <h2 id="social-title" className={livingTheme.headingSm}>
          {copy.socialTitle}
        </h2>
        <ul className="mt-4 space-y-3">
          {socialTips.map((line) => (
            <li
              key={line}
              className="flex gap-3 border-b border-[#D7CBBA]/40 pb-3 text-sm leading-relaxed text-[#444748] last:border-0 last:pb-0 sm:text-base"
            >
              <span className="font-bold text-[#B29475]" aria-hidden>
                •
              </span>
              {line}
            </li>
          ))}
        </ul>
      </section>

      <CultureEtiquetteFaq />
    </LocalizedLivingPageShell>
  );
}
