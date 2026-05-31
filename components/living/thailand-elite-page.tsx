"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { thailandEliteFaqs } from "@/lib/i18n/messages/living/living-page-faqs";
import {
  getEliteCaveats,
  getElitePerks,
  getEliteSteps,
  getEliteTiers,
  getEliteWhyBenefits,
  getThailandElitePage,
} from "@/lib/i18n/messages/living/thailand-elite";
import {
  Briefcase,
  CalendarRange,
  ClipboardList,
  Crown,
  FileText,
  MapPin,
  Plane,
  Sparkles,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const whyIcons: LucideIcon[] = [CalendarRange, FileText, Plane, ClipboardList];
import Link from "next/link";


export function ThailandElitePage() {
  const { language } = useLanguage();
  const copy = getThailandElitePage(language);
  const why = getEliteWhyBenefits(language);
  const tiers = getEliteTiers(language);
  const caveats = getEliteCaveats(language);
  const steps = getEliteSteps(language);
  const perks = getElitePerks(language);

  return (
    <LocalizedLivingPageShell
      shellKey="thailandElite"
      heroImage={livingImages.thailandElite}
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/visa/retirement" className={livingCtaButtonClass.outline}>
            {copy.retirementVisa}
          </Link>
          <Link href="/living/visa/work-permit" className={livingCtaButtonClass.outline}>
            {copy.workPermit}
          </Link>
        </LivingCtaActions>
      }
    >
      {/* Intro */}
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="elite-intro-title"
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
            <Crown className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="elite-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Why Elite */}
      <section aria-labelledby="why-elite-title">
        <h2 id="why-elite-title" className={livingTheme.heading}>
          {copy.whyTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.whySubtitle}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {why.map((item, i) => {
            const Icon = whyIcons[i] ?? FileText;
            return (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
            >
              <div className={livingTheme.iconBox}>
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F]">{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{item.text}</p>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      {/* Tier table */}
      <section aria-labelledby="tiers-title">
        <h2 id="tiers-title" className={livingTheme.heading}>
          {copy.tiersTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.tiersSubtitle}</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-b border-[#e2e8f0] bg-[#faf7f2] text-xs font-semibold uppercase tracking-wide text-[#0A192F]">
                <th className="px-4 py-3 sm:px-6">{copy.tableTier}</th>
                <th className="px-4 py-3 sm:px-6">{copy.tableTerm}</th>
                <th className="px-4 py-3 sm:px-6">{copy.tableFee}</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">{copy.tableBestFor}</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier) => (
                <tr
                  key={tier.id}
                  className={`border-b border-[#e2e8f0] last:border-0 ${
                    tier.highlight ? "bg-[#B29475]/5" : ""
                  }`}
                >
                  <td className="px-4 py-4 font-bold text-[#0A192F] sm:px-6">
                    {tier.name}
                    {"inviteOnly" in tier && tier.inviteOnly ? (
                      <span className="ml-2 rounded-full bg-[#0A192F] px-2 py-0.5 text-xs font-medium text-[#D7CBBA]">
                        {copy.inviteOnly}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-4 py-4 text-[#444748] sm:px-6">{tier.term}</td>
                  <td className="px-4 py-4 font-semibold tabular-nums text-[#B29475] sm:px-6">
                    ฿{tier.fee}
                  </td>
                  <td className="hidden px-4 py-4 text-[#444748] sm:table-cell sm:px-6">
                    {tier.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
          {tiers.map((tier) => (
            <article
              key={`card-${tier.id}`}
              className={`rounded-xl border p-4 ${
                tier.highlight ? "border-[#B29475] bg-[#faf7f2]" : "border-[#e2e8f0] bg-white"
              }`}
            >
              <p className="font-bold text-[#0A192F]">{tier.name}</p>
              <p className="mt-1 text-sm text-[#B29475]">
                {tier.term} · ฿{tier.fee}
              </p>
              <p className={`mt-2 text-sm ${livingTheme.body}`}>{tier.bestFor}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Caveats */}
      <section aria-labelledby="caveats-title">
        <h2 id="caveats-title" className={livingTheme.heading}>
          {copy.beforeTitle}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {caveats.map((item, i) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white">
                {i === 0 ? (
                  <Briefcase className="h-5 w-5" aria-hidden />
                ) : (
                  <Wallet className="h-5 w-5" aria-hidden />
                )}
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F]">{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section aria-labelledby="steps-title">
        <h2 id="steps-title" className={livingTheme.heading}>
          {copy.stepsTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.stepsSubtitle}</p>
        <ol className="mt-6 space-y-4">
          {steps.map((step) => (
            <li
              key={step.step}
              className="flex gap-4 rounded-2xl border border-[#0A192F]/10 bg-white p-5 shadow-sm"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-lg font-bold text-[#D7CBBA]"
                aria-hidden
              >
                {step.step}
              </span>
              <div>
                <h3 className="font-bold text-[#0A192F]">{step.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Extra perks */}
      <section aria-labelledby="perks-title">
        <h2 id="perks-title" className={livingTheme.headingSm}>
          {copy.perksTitle}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {perks.map((p, i) => {
            const Icon = [Plane, FileText, Sparkles][i] ?? Sparkles;
            return (
              <article key={p.title} className={`p-5 ${livingTheme.cardStatic}`}>
                <div className={livingTheme.iconBox}>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-3 font-bold text-[#0A192F]">{p.title}</h3>
                <p className={`mt-2 text-sm ${livingTheme.body}`}>{p.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Pattaya */}
      <section
        className="flex gap-4 rounded-2xl border border-[#D7CBBA]/60 bg-[#0A192F] p-6 text-white sm:p-8"
        aria-labelledby="pattaya-elite-title"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B29475]">
          <MapPin className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <h2 id="pattaya-elite-title" className="text-xl font-bold text-[#D7CBBA]">
            {copy.pattayaTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
            {copy.pattayaBody}
          </p>
        </div>
      </section>

      <LivingFaqSection
        faqs={thailandEliteFaqs}
        subtitle={faqSubtitle(language, "Thailand Elite", "Thailand Elite", "泰国精英签", "Thailand Elite")}
        titleId="elite-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
