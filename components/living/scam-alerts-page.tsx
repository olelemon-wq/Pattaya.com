"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { scamAlertsFaqs } from "@/lib/i18n/messages/living/living-page-faqs";
import {
  getScamAlertsPage,
  getScamContacts,
  getScamEssentials,
  getScamItems,
  getScamRedFlags,
  getScamReportSteps,
  type ScamAlertId,
  type ScamSeverity,
} from "@/lib/i18n/messages/living/scam-alerts";
import {
  AlertTriangle,
  Banknote,
  Car,
  Gem,
  Heart,
  Home,
  IdCard,
  MapPin,
  Phone,
  Plane,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const scamIcons: Record<ScamAlertId, LucideIcon> = {
  property: Home,
  visa: IdCard,
  crypto: Banknote,
  jetski: Waves,
  scooter: Car,
  romance: Heart,
  taxi: Car,
  bar: Sparkles,
  gems: Gem,
  herbal: Sparkles,
  "fake-police": ShieldAlert,
  "fake-tours": Plane,
  pickpocket: Smartphone,
};

const severityStyles: Record<
  ScamSeverity,
  { badge: string; border: string }
> = {
  high: {
    badge: "bg-[#ae2f34] text-white",
    border: "border-[#ae2f34]/25 hover:border-[#ae2f34]/50",
  },
  medium: {
    badge: "bg-amber-600 text-white",
    border: "border-amber-200/80 hover:border-amber-400/60",
  },
};


export function ScamAlertsPage() {
  const { language } = useLanguage();
  const copy = getScamAlertsPage(language);
  const contacts = getScamContacts(language);
  const scams = getScamItems(language);
  const redFlags = getScamRedFlags(language);
  const reportSteps = getScamReportSteps(language);
  const essentials = getScamEssentials(language);

  return (
    <LocalizedLivingPageShell
      shellKey="scamAlerts"
      heroImage={livingImages.scamAlerts}
      ctaHref="/living/safety/emergency-guide"
    >
      <section
        className="overflow-hidden rounded-2xl border border-[#ae2f34]/30 bg-gradient-to-br from-[#ae2f34]/10 via-white to-white p-6 shadow-sm sm:p-8"
        aria-labelledby="scam-intro"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ae2f34] text-white shadow-lg">
            <AlertTriangle className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="scam-intro" className="text-xl font-bold text-[#0A192F] sm:text-2xl">
              {copy.introTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#444748] sm:text-base">
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="emergency-numbers" className="-mt-2">
        <h2 id="emergency-numbers" className="sr-only">
          {copy.emergencyTitle}
        </h2>
        <div className="rounded-2xl border border-[#0A192F]/10 bg-[#0A192F] p-6 text-white shadow-xl sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#D7CBBA]">
                {copy.emergencyTitle}
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/85">
                {copy.emergencySubtitle}
              </p>
            </div>
            <Phone className="hidden h-10 w-10 text-[#D7CBBA]/60 sm:block" aria-hidden />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((c) => (
              <a
                key={c.number}
                href={c.href}
                className={`rounded-xl border p-4 transition hover:-translate-y-0.5 hover:shadow-lg ${
                  c.primary
                    ? "border-[#FF7320]/50 bg-[#FF7320] text-white"
                    : "border-white/15 bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                <p className="text-2xl font-bold tabular-nums tracking-tight">
                  {c.number}
                </p>
                <p className="mt-1 text-sm font-semibold">{c.label}</p>
                <p className={`mt-0.5 text-xs ${c.primary ? "text-white/90" : "text-white/70"}`}>
                  {c.note}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/70">{copy.appNote}</p>
        </div>
      </section>

      <section aria-labelledby="hot-zones">
        <h2 id="hot-zones" className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
          {copy.hotZonesTitle}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {copy.hotZones.map((zone) => (
            <li
              key={zone}
              className="flex gap-3 rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#444748] shadow-sm"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ae2f34]" aria-hidden />
              {zone}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="scam-list-title">
        <h2 id="scam-list-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {copy.scamsTitle}
        </h2>
        <p className="mt-2 text-sm text-[#777777]">{copy.scamsSubtitle}</p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {scams.map((scam) => {
            const Icon = scamIcons[scam.id];
            const style = severityStyles[scam.severity];
            return (
              <li
                key={scam.id}
                className={`group flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition duration-300 hover:shadow-md ${style.border}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ae2f34]/10 text-[#ae2f34] transition group-hover:bg-[#ae2f34] group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${style.badge}`}
                  >
                    {scam.severity === "high" ? copy.severityHigh : copy.severityWatch}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#8c1520]">{scam.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#444748]">
                  {scam.body}
                </p>
                <p className="mt-4 rounded-lg bg-[#F8FAFC] px-3 py-2.5 text-xs leading-relaxed text-[#555] ring-1 ring-[#e2e8f0]">
                  <span className="font-bold text-[#0A192F]">Tip: </span>
                  {scam.tip}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section
          className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6 sm:p-8"
          aria-labelledby="red-flags"
        >
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-amber-800" aria-hidden />
            <h2 id="red-flags" className="text-lg font-bold text-amber-950">
              {copy.redFlagsTitle}
            </h2>
          </div>
          <ul className="mt-5 space-y-3">
            {redFlags.map((flag) => (
              <li
                key={flag}
                className="flex gap-3 text-sm leading-relaxed text-amber-950/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                {flag}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="rounded-2xl border border-[#B29475]/25 bg-[#D7CBBA]/30 p-6 sm:p-8"
          aria-labelledby="report-steps"
        >
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-[#6b5a48]" aria-hidden />
            <h2 id="report-steps" className="text-lg font-bold text-[#0A192F]">
              {copy.reportTitle}
            </h2>
          </div>
          <ol className="mt-5 space-y-4">
            {reportSteps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-[#444748]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B29475] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section
        className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA]/40 p-6 sm:p-8"
        aria-labelledby="scam-essentials-title"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B29475] text-white">
            <ShieldCheck className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h2 id="scam-essentials-title" className="text-xl font-bold text-[#0A192F]">
              {copy.essentialsTitle}
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#444748]">
              {essentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link
                href="/living/housing/rentals"
                className="font-bold text-[#B29475] hover:underline"
              >
                {copy.rentalLink}
              </Link>
              {" · "}
              <Link
                href="/living/culture/etiquette"
                className="font-bold text-[#B29475] hover:underline"
              >
                {copy.cultureLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <LivingFaqSection
        faqs={scamAlertsFaqs}
        subtitle={faqSubtitle(language, "Scam alerts", "มิจฉาชีพ", "诈骗提醒", "Мошенничество")}
        titleId="scam-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
