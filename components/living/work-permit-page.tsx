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
import { workPermitFaqs } from "@/lib/i18n/messages/living/living-page-faqs";
import {
  getWorkPermitApplicantReqs,
  getWorkPermitChecklist,
  getWorkPermitCompanyReqs,
  getWorkPermitPage,
  getWorkPermitRules,
  getWorkPermitSteps,
} from "@/lib/i18n/messages/living/work-permit";
import {
  AlertTriangle,
  Building2,
  Check,
  FileCheck,
  Laptop,
  MapPin,
  Scale,
  ShieldAlert,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const companyIcons = [Wallet, Users, Building2] as const;
const ruleIcons = [ShieldAlert, Scale, FileCheck] as const;


export function WorkPermitPage() {
  const { language } = useLanguage();
  const copy = getWorkPermitPage(language);
  const companyReqs = getWorkPermitCompanyReqs(language);
  const checklist = getWorkPermitChecklist(language);
  const steps = getWorkPermitSteps(language);
  const rules = getWorkPermitRules(language);
  const applicantReqs = getWorkPermitApplicantReqs(language);

  return (
    <LocalizedLivingPageShell
      shellKey="workPermit"
      heroImage={livingImages.workPermit}
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/visa/retirement" className={livingCtaButtonClass.outline}>
            {copy.retirementVisa}
          </Link>
          <Link href="/living/visa/thailand-elite" className={livingCtaButtonClass.outline}>
            {copy.thailandElite}
          </Link>
        </LivingCtaActions>
      }
    >
      {/* Intro */}
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="wp-intro-title"
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #B29475 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ae2f34] text-white shadow-lg"
          >
            <AlertTriangle className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="wp-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Company requirements */}
      <section aria-labelledby="wp-company-title">
        <h2 id="wp-company-title" className={livingTheme.heading}>
          {copy.companyTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.companySubtitle}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {companyReqs.map((item, i) => {
            const Icon = companyIcons[i] ?? Building2;
            return (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
              >
                <div className={livingTheme.iconBox}>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-bold text-[#0A192F]">{item.title}</h3>
                <p className={`flex-1 text-sm leading-relaxed ${livingTheme.body}`}>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Applicant quick reqs + checklist */}
      <section
        className="grid gap-8 lg:grid-cols-2 lg:items-start"
        aria-labelledby="wp-checklist-title"
      >
        <div>
          <h2 id="wp-checklist-title" className={livingTheme.heading}>
            {copy.checklistTitle}
          </h2>
          <p className={`mt-2 ${livingTheme.muted}`}>{copy.checklistSubtitle}</p>
          <div className="mt-6 grid gap-3">
            {applicantReqs.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#D7CBBA]/50 bg-[#faf7f2] p-4"
              >
                <h3 className="text-sm font-bold text-[#0A192F]">{item.title}</h3>
                <p className={`mt-1 text-sm ${livingTheme.body}`}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <ul className="space-y-3 rounded-2xl border border-[#D7CBBA]/60 bg-white p-5 shadow-sm sm:p-6">
          {checklist.map((line) => (
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

      {/* Timeline */}
      <section aria-labelledby="wp-steps-title">
        <h2 id="wp-steps-title" className={livingTheme.heading}>
          {copy.processTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.processSubtitle}</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.step}
              className="flex flex-col rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition hover:border-[#D7CBBA] hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-3 font-bold text-[#0A192F]">{s.title}</h3>
              <p className={`mt-2 flex-1 text-sm leading-relaxed ${livingTheme.body}`}>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Crucial rules */}
      <section aria-labelledby="wp-rules-title">
        <h2 id="wp-rules-title" className={livingTheme.heading}>
          {copy.rulesTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.rulesSubtitle}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {rules.map((item, i) => {
            const Icon = ruleIcons[i] ?? AlertTriangle;
            return (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-[#ae2f34]/20 bg-[#fdf8f8] p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ae2f34] text-white">
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

      {/* Pattaya office */}
      <section
        className="flex gap-4 rounded-2xl border border-[#D7CBBA]/60 bg-[#0A192F] p-6 text-white sm:p-8"
        aria-labelledby="wp-pattaya-title"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B29475]">
          <MapPin className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <h2 id="wp-pattaya-title" className="text-xl font-bold text-[#D7CBBA]">
            {copy.pattayaTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
            {copy.pattayaBody}
          </p>
        </div>
      </section>

      {/* LTR pathway */}
      <section className={livingTheme.accentPanel} aria-labelledby="ltr-title">
        <div className="flex items-start gap-4 text-left">
          <div className={livingTheme.iconBox}>
            <Laptop className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h2 id="ltr-title" className={livingTheme.headingSm}>
              {copy.ltrTitle}
            </h2>
            <p className={`mt-2 ${livingTheme.body}`}>{copy.ltrBody}</p>
          </div>
        </div>
      </section>

      <LivingFaqSection
        faqs={workPermitFaqs}
        subtitle={faqSubtitle(language, "Work permit", "ใบอนุญาตทำงาน", "工作证", "Work permit")}
        titleId="wp-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
