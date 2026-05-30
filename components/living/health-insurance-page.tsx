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
import { faqEnTh } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import {
  getHealthInsuranceClaimSteps,
  getHealthInsuranceCompareItems,
  getHealthInsuranceMistakes,
  getHealthInsurancePage,
  getHealthInsurancePattayaHospitals,
  getHealthInsurancePlans,
  getHealthInsuranceVisaChecklist,
} from "@/lib/i18n/messages/living/health-insurance";
import {
  AlertTriangle,
  Building2,
  Check,
  CreditCard,
  FileText,
  HeartPulse,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { HealthInsuranceRecommender } from "@/components/living/health-insurance-recommender";
import Link from "next/link";

const faqs = [
  faqEnTh(
    "retirement",
    "What coverage does retirement visa need?",
    "วีซ่าเกษียณต้องมีประกันแบบไหน?",
    "Inpatient cover in Thailand, often ฿3M+ per policy year, valid your full stay, from an Immigration-approved insurer — confirm with Chonburi Immigration before buying.",
    "คุ้มครองผู้ป่วยในในไทย มักไม่ต่ำกว่า 3 ล้าน/ปี คุ้มครองตลอดพำนัก จากบริษัทที่อนุมัติ — ตรวจกับตม.ชลบุรีก่อนซื้อ",
    "退休签证需要什么保险？",
    "Страховка для retirement?",
  ),
  faqEnTh(
    "preexisting",
    "Are pre-existing conditions covered?",
    "โรคประจำตัวคุ้มครองไหม?",
    "Often excluded or subject to waiting periods (6–24 months). Disclose honestly — claims can be denied if you omit history.",
    "มักไม่คุ้มหรือรอ 6–24 เดือน แจ้งตรง — เคลมอาจถูกปฏิเสธถ้าปิดบัง",
    "既往症保吗？",
    "Предсуществующие болезни?",
  ),
  faqEnTh(
    "direct",
    "How do I get direct billing in Pattaya?",
    "เคลมตรงในพัทยาทำอย่างไร?",
    "Call your insurer before elective care. At admission, give your policy number to the international desk for GOP approval.",
    "โทรประกันก่อนนัด แจ้งเลขกรมธรรม์ที่แผนกต่างชาติเพื่อขอ GOP",
    "如何在芭提雅直付？",
    "Direct billing?",
  ),
  faqEnTh(
    "travel",
    "Can I use travel insurance for O-A?",
    "ประกันเดินทางใช้ O-A ได้ไหม?",
    "No — travel policies lack the inpatient limits and validity Immigration requires for retirement extensions.",
    "ไม่ได้ — ประกันเดินทางไม่มีวงเงินและระยะเวลาตามที่ตม.กำหนด",
    "旅游险能办O-A吗？",
    "Travel для O-A?",
  ),
  faqEnTh(
    "local",
    "Thai vs international insurer?",
    "ประกันไทยหรือต่างชาติดี?",
    "Thai plans: lower cost, O-A lists. International: better evacuation and global networks. Many retirees use Thai-approved local policies; frequent travellers prefer IPMI.",
    "ไทย: เบี้ยต่ำ อยู่ในลิสต์ O-A ต่างชาติ: ส่งตัวและเครือข่ายโลก",
    "泰国险还是国际险？",
    "Тайская или международная?",
  ),
];

export function HealthInsurancePage() {
  const { language } = useLanguage();
  const copy = getHealthInsurancePage(language);
  const plans = getHealthInsurancePlans(language);
  const hospitals = getHealthInsurancePattayaHospitals(language);
  const compareItems = getHealthInsuranceCompareItems(language);
  const claimSteps = getHealthInsuranceClaimSteps(language);
  const mistakes = getHealthInsuranceMistakes(language);
  const visaChecklist = getHealthInsuranceVisaChecklist(language);

  return (
    <LocalizedLivingPageShell
      shellKey="healthInsurance"
      heroImage={livingImages.insurance}
      heroAlt="Health insurance in Pattaya"
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/healthcare/hospitals" className={livingCtaButtonClass.outline}>
            {copy.hospitalsLink}
          </Link>
          <Link href="/living/safety/emergency-guide" className={livingCtaButtonClass.outline}>
            {copy.emergencyLink}
          </Link>
        </LivingCtaActions>
      }
    >
      {/* Intro */}
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="insurance-intro-title"
      >
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#B29475" }}
          >
            <ShieldCheck className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="insurance-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      <HealthInsuranceRecommender />

      {/* Plan types */}
      <section aria-labelledby="insurance-plans-title">
        <h2 id="insurance-plans-title" className={livingTheme.heading}>
          {copy.plansTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.plansSubtitle}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="flex flex-col rounded-2xl border border-[#D7CBBA]/60 bg-white p-5 shadow-sm transition hover:border-[#B29475]/50 hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-[#B29475]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#6b5a48]">
                {plan.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[#0A192F]">{plan.title}</h3>
              <p className={`mt-2 flex-1 text-sm leading-relaxed ${livingTheme.body}`}>{plan.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Direct billing */}
      <section aria-labelledby="insurance-billing-title">
        <h2 id="insurance-billing-title" className={livingTheme.heading}>
          {copy.billingTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.billingSubtitle}</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#D7CBBA]/60 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={livingTheme.iconBox}>
                <CreditCard className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-bold text-[#0A192F]">{copy.directTitle}</h3>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${livingTheme.body}`}>{copy.directBody}</p>
          </article>
          <article className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-600 text-white">
                <FileText className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-bold text-[#0A192F]">{copy.payFirstTitle}</h3>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${livingTheme.body}`}>{copy.payFirstBody}</p>
          </article>
        </div>
      </section>

      {/* Pattaya hospitals */}
      <section aria-labelledby="insurance-pattaya-title">
        <h2 id="insurance-pattaya-title" className={livingTheme.heading}>
          {copy.pattayaTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.pattayaSubtitle}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {hospitals.map((h) => (
            <li
              key={h.name}
              className="flex gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm"
            >
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B29475]" aria-hidden />
              <div>
                <p className="font-semibold text-[#0A192F]">{h.name}</p>
                <p className="mt-1 text-sm text-[#777777]">{h.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link
            href="/living/healthcare/hospitals"
            className="text-sm font-bold text-[#B29475] hover:underline"
          >
            {copy.hospitalsLink}
          </Link>
        </p>
      </section>

      {/* Visa + compare */}
      <section
        className="grid gap-6 lg:grid-cols-2 lg:items-start"
        aria-labelledby="insurance-visa-title"
      >
        <div className="rounded-2xl border border-[#B29475]/25 bg-[#D7CBBA]/30 p-6 sm:p-8">
          <h2 id="insurance-visa-title" className="text-xl font-bold text-[#0A192F]">
            {copy.visaTitle}
          </h2>
          <p className={`mt-2 text-sm ${livingTheme.muted}`}>{copy.visaSubtitle}</p>
          <p className={`mt-4 text-sm leading-relaxed ${livingTheme.body}`}>{copy.visaNote}</p>
          <h3 className="mt-6 text-sm font-bold text-[#6b5a48]">{copy.checklistTitle}</h3>
          <ul className="mt-3 space-y-2">
            {visaChecklist.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#444748]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B29475]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link href="/living/visa/retirement" className="font-bold text-[#B29475] hover:underline">
              {copy.retirementLink}
            </Link>
          </p>
        </div>

        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-[#0A192F]">{copy.compareTitle}</h2>
          <p className={`mt-2 text-sm ${livingTheme.muted}`}>{copy.compareSubtitle}</p>
          <ul className="mt-5 space-y-3">
            {compareItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#444748]">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#faf7f2] text-[#B29475] ring-1 ring-[#D7CBBA]/60"
                  aria-hidden
                >
                  <HeartPulse className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Claims + mistakes */}
      <section className="grid gap-6 lg:grid-cols-2" aria-labelledby="insurance-claims-title">
        <div>
          <h2 id="insurance-claims-title" className={livingTheme.headingSm}>
            {copy.claimsTitle}
          </h2>
          <ol className="mt-5 space-y-4">
            {claimSteps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-[#444748]">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-xs font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-800" aria-hidden />
            <h2 className="text-lg font-bold text-amber-950">{copy.mistakesTitle}</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {mistakes.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-amber-950/90">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Health insurance", "ประกันสุขภาพ", "健康保险", "Страховка")}
        titleId="insurance-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
