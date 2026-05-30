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
  getRentalDocuments,
  getRentalFinancials,
  getRentalLeaseChecks,
  getRentalNeighborhoods,
  getRentalPriceRanges,
  getRentalTm30,
  getRentalsPage,
} from "@/lib/i18n/messages/living/rentals";
import {
  AlertTriangle,
  Building2,
  Check,
  FileText,
  Home,
  MapPin,
  Receipt,
  Wallet,
  Zap,
} from "lucide-react";
import Link from "next/link";

const financialIcons = [Wallet, Zap, Building2] as const;

const faqs = [
  faqEnTh(
    "deposit",
    "How do I get my deposit back?",
    "ขอเงินประกันคืนอย่างไร?",
    "Give notice per contract, clean professionally, joint move-out inspection with photos. Deposit must be returned within 30 days if no damage.",
    "แจ้งล่วงหน้าตามสัญญา ทำความสะอาด ตรวจร่วมตอนย้ายออก พร้อมรูป มัดจำคืนภายใน 30 วันหากไม่เสียหาย",
    "如何退回押金？",
    "Как вернуть залог?",
  ),
  faqEnTh(
    "tm30",
    "What if my landlord refuses TM.30?",
    "เจ้าของไม่ยื่น TM.30 ทำอย่างไร?",
    "Do not sign until they agree in writing. Without TM.30 you may fail visa extensions and bank KYC in Pattaya.",
    "อย่าเซ็นจนกว่าจะตกลงเป็นหน้าเขียน ไม่มี TM.30 อาจต่อวีซ่าและเปิดบัญชีไม่ได้",
    "房东不办 TM.30？",
    "TM.30 отказ?",
  ),
  faqEnTh(
    "utilities",
    "Can the landlord charge extra for electricity?",
    "เจ้าของเก็บค่าไฟแพงกว่าหลวงได้ไหม?",
    "Yes, some units surcharge 2–3×. Insist on MEA/PEA government billing or a fair per-unit rate in the contract.",
    "ได้บางแห่งบวก 2–3 เท่า ควรจ่ายตามบิลหลวงหรือระบุเรทในสัญญา",
    "电费能加价吗？",
    "Наценка на свет?",
  ),
  faqEnTh(
    "agent",
    "Should I use a rental agent?",
    "ควรใช้เอเจนต์ไหม?",
    "Agents save time and know foreign-friendly buildings. Confirm who pays the fee before viewing.",
    "เอเจนต์ช่วยประหยัดเวลา ยืนยันผู้จ่ายค่านายหน้าก่อนดูห้อง",
    "要不要用中介？",
    "Нужен ли агент?",
  ),
  faqEnTh(
    "buy",
    "Rent first or buy a condo?",
    "เช่าก่อนหรือซื้อเลย?",
    "Most expats rent 6–12 months to learn areas, then buy if foreign quota is available.",
    "ส่วนใหญ่เช่า 6–12 เดือนก่อน แล้วค่อยซื้อถ้าโควตาพร้อม",
    "先租还是先买？",
    "Сначала аренда или покупка?",
  ),
];

export function RentalsPage() {
  const { language } = useLanguage();
  const copy = getRentalsPage(language);
  const financials = getRentalFinancials(language);
  const documents = getRentalDocuments(language);
  const leaseChecks = getRentalLeaseChecks(language);
  const tm30 = getRentalTm30(language);
  const neighborhoods = getRentalNeighborhoods(language);
  const priceRanges = getRentalPriceRanges(language);

  return (
    <LocalizedLivingPageShell
      shellKey="rentals"
      heroImage={livingImages.rentals}
      heroAlt="Luxury rental interior in Pattaya"
      ctaAriaLabel="Rental listings consultation"
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/housing/condo-buying" className={livingCtaButtonClass.outline}>
            {copy.condoBuying}
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
        aria-labelledby="rent-intro-title"
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
            <Home className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="rent-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Financials */}
      <section aria-labelledby="rent-financials-title">
        <h2 id="rent-financials-title" className={livingTheme.heading}>
          {copy.financialsTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.financialsSubtitle}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {financials.map((item, i) => {
            const Icon = financialIcons[i] ?? Wallet;
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

      {/* Documents */}
      <section
        className="grid gap-8 lg:grid-cols-2 lg:items-start"
        aria-labelledby="rent-docs-title"
      >
        <div>
          <h2 id="rent-docs-title" className={livingTheme.heading}>
            {copy.documentsTitle}
          </h2>
          <p className={`mt-2 ${livingTheme.muted}`}>{copy.documentsSubtitle}</p>
        </div>
        <div className="space-y-4">
          <ul className="space-y-3 rounded-2xl border border-[#D7CBBA]/60 bg-[#faf7f2] p-5 sm:p-6">
            {documents.need.map((line) => (
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
          <p className={`rounded-xl border border-dashed border-[#e2e8f0] bg-white p-4 text-sm ${livingTheme.body}`}>
            <span className="font-semibold text-[#0A192F]">Note: </span>
            {documents.notRequired}
          </p>
        </div>
      </section>

      {/* Lease checks */}
      <section aria-labelledby="rent-lease-title">
        <h2 id="rent-lease-title" className={livingTheme.heading}>
          {copy.leaseTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.leaseSubtitle}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {leaseChecks.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#B29475]/15 text-[#B29475]">
                <FileText className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-bold text-[#0A192F]">{item.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TM30 */}
      <section
        className="rounded-2xl border border-[#ae2f34]/25 bg-gradient-to-br from-[#fdf8f8] to-white p-6 sm:p-8"
        aria-labelledby="rent-tm30-title"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ae2f34] text-white shadow-lg">
            <AlertTriangle className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="rent-tm30-title" className="text-xl font-bold text-[#ae2f34] sm:text-2xl">
              {copy.tm30Title}
            </h2>
            <p className={`mt-1 text-sm ${livingTheme.muted}`}>{copy.tm30Subtitle}</p>
            <p className={`mt-4 ${livingTheme.body}`}>{tm30.landlordDuty}</p>
            <p className={`mt-3 rounded-xl border border-[#ae2f34]/20 bg-white p-4 text-sm font-medium text-[#0A192F]`}>
              <Receipt className="mb-2 inline h-4 w-4 text-[#ae2f34]" aria-hidden /> {tm30.tenantTip}
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section aria-labelledby="rent-hoods-title">
        <h2 id="rent-hoods-title" className={livingTheme.heading}>
          {copy.neighborhoodsTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.neighborhoodsSubtitle}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {neighborhoods.map((hood) => (
            <article
              key={hood.name}
              className="flex flex-col gap-2 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition hover:border-[#D7CBBA] hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-[#0A192F]">{hood.name}</h3>
                <span className="shrink-0 rounded-full bg-[#D7CBBA]/60 px-2.5 py-0.5 text-xs font-semibold text-[#6b5a48]">
                  {hood.vibe}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${livingTheme.body}`}>{hood.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Rent table */}
      <section aria-labelledby="rent-table-title">
        <h2 id="rent-table-title" className={livingTheme.heading}>
          {copy.rentTableTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.rentTableSubtitle}</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{copy.tableArea}</th>
                <th className="px-4 py-3 sm:px-6">{copy.tableStudio}</th>
                <th className="px-4 py-3 sm:px-6">{copy.tableTwoBr}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {priceRanges.map((row) => (
                <tr key={row.area} className="hover:bg-[#faf7f2]/80">
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-[#B29475]" aria-hidden />
                      {row.area}
                    </span>
                  </td>
                  <td className="px-4 py-3 tabular-nums sm:px-6">{row.studio}</td>
                  <td className="px-4 py-3 tabular-nums sm:px-6">{row.twoBed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Rentals", "เช่าที่พัก", "租房", "Аренда")}
        titleId="rentals-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
