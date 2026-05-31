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
  getOwnershipDueDiligence,
  getOwnershipFetChecklist,
  getOwnershipPage,
  getOwnershipTableRows,
} from "@/lib/i18n/messages/living/ownership";
import {
  Building2,
  Check,
  FileText,
  Home,
  KeyRound,
  LandPlot,
  Scale,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  faqEnTh(
    "quota",
    "How do I verify the 49% foreign quota?",
    "ตรวจโควตา 49% อย่างไร?",
    "Request a juristic person letter before deposit. On transfer day, match total foreign ownership on the Chanote.",
    "ขอหนังสือนิติบุคคลก่อนมัดจำ วันโอนตรวจสัดส่วนต่างชาติบนโฉนด",
    "如何核实49%外资配额？",
    "Как проверить квоту 49%?",
  ),
  faqEnTh(
    "fet",
    "What is FET and do I need it?",
    "FET คืออะไร ต้องมีไหม?",
    "Yes for condo freehold. Funds must come from abroad; the bank issues FET (or Thor Tor 3) for the Land Department.",
    "ต้องมีสำหรับคอนโดกรรมสิทธิ์ เงินต้องโอนจากต่างประเทศ ธนาคารออก FET ให้กรมที่ดิน",
    "什么是FET？",
    "Что такое FET?",
  ),
  faqEnTh(
    "lease",
    "Is a 90-year leasehold safe?",
    "เช่า 90 ปีปลอดภัยไหม?",
    "Only registered 30-year terms are guaranteed by law. Renewals must be registered at Pattaya Land Office — side letters alone are not enforceable.",
    "กฎหมายรับประกันเช่าจดทะเบียน 30 ปี ต่ออายุต้องจดที่ดิน ข้อตกลงนอกระบบใช้ไม่ได้",
    "90年租赁安全吗？",
    "Leasehold на 90 лет?",
  ),
  faqEnTh(
    "villa",
    "Can I own a villa 100% as a foreigner?",
    "ต่างชาติถือวิลล่า 100% ได้ไหม?",
    "You can own the house structure in your name. The land is normally held via a registered lease, not freehold.",
    "เป็นเจ้าของตัวบ้านได้ ที่ดินมักเช่าจดทะเบียน ไม่ใช่กรรมสิทธิ์",
    "外籍能100%拥有别墅吗？",
    "Вилла на 100%?",
  ),
  faqEnTh(
    "rent-first",
    "Should I rent before buying?",
    "ควรเช่าก่อนซื้อไหม?",
    "Many expats rent 6–12 months to learn neighborhoods, then buy a condo if quota and FET are clear.",
    "หลายคนเช่า 6–12 เดือนก่อน แล้วซื้อคอนโดเมื่อโควตาและ FET พร้อม",
    "应该先租再买吗？",
    "Сначала аренда?",
  ),
];

export function OwnershipPage() {
  const { language } = useLanguage();
  const copy = getOwnershipPage(language);
  const fetChecklist = getOwnershipFetChecklist(language);
  const dueDiligence = getOwnershipDueDiligence(language);
  const tableRows = getOwnershipTableRows(language);

  return (
    <LocalizedLivingPageShell
      shellKey="ownership"
      heroImage={livingImages.ownership}
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/housing/condo-buying" className={livingCtaButtonClass.outline}>
            {copy.condoGuide}
          </Link>
          <Link href="/living/housing/rentals" className={livingCtaButtonClass.outline}>
            {copy.rentals}
          </Link>
        </LivingCtaActions>
      }
    >
      {/* Intro */}
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="ownership-intro-title"
      >
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#B29475" }}
          >
            <Scale className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="ownership-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Foreign ownership — two main paths */}
      <section aria-labelledby="foreign-ownership-title">
        <h2 id="foreign-ownership-title" className={livingTheme.heading}>
          {copy.foreignTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.foreignSubtitle}</p>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* Condo freehold */}
          <article className="flex flex-col rounded-2xl border border-[#D7CBBA]/60 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={livingTheme.iconBox}>
                <Building2 className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-[#0A192F]">{copy.condoTitle}</h3>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${livingTheme.body}`}>{copy.condoLead}</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-[#faf7f2] p-4 ring-1 ring-[#D7CBBA]/40">
                <h4 className="text-sm font-bold text-[#6b5a48]">{copy.condoQuotaTitle}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{copy.condoQuotaBody}</p>
              </div>
              <div className="rounded-xl bg-[#faf7f2] p-4 ring-1 ring-[#D7CBBA]/40">
                <h4 className="text-sm font-bold text-[#6b5a48]">{copy.condoFetTitle}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{copy.condoFetBody}</p>
              </div>
            </div>
          </article>

          {/* Landed / leasehold */}
          <article className="flex flex-col rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={livingTheme.iconBox}>
                <Home className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-[#0A192F]">{copy.landedTitle}</h3>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${livingTheme.body}`}>{copy.landedLead}</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-[#e2e8f0]">
                <div className="flex items-center gap-2">
                  <KeyRound className="h-4 w-4 text-[#475569]" aria-hidden />
                  <h4 className="text-sm font-bold text-[#0A192F]">{copy.leaseTitle}</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{copy.leaseBody}</p>
              </div>
              <div className="rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-[#e2e8f0]">
                <div className="flex items-center gap-2">
                  <LandPlot className="h-4 w-4 text-[#475569]" aria-hidden />
                  <h4 className="text-sm font-bold text-[#0A192F]">{copy.structureTitle}</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{copy.structureBody}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FET checklist + due diligence */}
      <section
        className="grid gap-6 lg:grid-cols-2"
        aria-labelledby="ownership-docs-title"
      >
        <div className="rounded-2xl border border-[#D7CBBA]/60 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-[#B29475]" aria-hidden />
            <div>
              <h2 id="ownership-docs-title" className="text-lg font-bold text-[#0A192F]">
                {copy.fetTitle}
              </h2>
              <p className="text-sm text-[#777777]">{copy.fetSubtitle}</p>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {fetChecklist.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#444748]">
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
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-amber-950">{copy.checklistTitle}</h2>
          <p className="mt-1 text-sm text-amber-900/80">{copy.checklistSubtitle}</p>
          <ul className="mt-5 space-y-3">
            {dueDiligence.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-amber-950/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comparison table */}
      <section aria-labelledby="ownership-compare">
        <h2 id="ownership-compare" className={livingTheme.heading}>
          {copy.compareTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.compareSubtitle}</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{copy.tableType}</th>
                <th className="px-4 py-3 sm:px-6">{copy.tableAccess}</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">{copy.tableUse}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {tableRows.map((row) => (
                <tr key={row.type}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{row.type}</td>
                  <td className="px-4 py-3 sm:px-6">{row.access}</td>
                  <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[#777777]">
          {copy.disclaimer}{" "}
          <Link href="/living/housing/condo-buying" className="font-semibold text-[#B29475] hover:underline">
            {copy.condoGuide}
          </Link>
        </p>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Ownership", "กรรมสิทธิ์", "产权", "Владение")}
        titleId="ownership-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
