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
import { UtilitiesCostCalculator } from "@/components/living/utilities-cost-calculator";
import {
  getUtilitiesEstimates,
  getUtilitiesPage,
} from "@/lib/i18n/messages/living/utilities";
import {
  AlertTriangle,
  Droplets,
  Flame,
  GlassWater,
  Home,
  Plug,
  Snowflake,
  Trash2,
  Wifi,
  Zap,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  faqEnTh(
    "high-bill",
    "Why is my electric bill so high?",
    "ค่าไฟแพงผิดปกติ?",
    "Condo markups (฿7–10/unit), old AC, and Mar–May heat can nearly double costs vs government PEA rates.",
    "เรทคอนโด แอร์เก่า และหน้าร้อน — อาจแพงเกือบเท่าตัวเทียบเรท PEA",
    "电费为何很高？",
    "Почему счёт высокий?",
  ),
  faqEnTh(
    "government-rate",
    "Can I insist on government utility rates?",
    "บังคับเรทหลวงได้ไหม?",
    "Only if the landlord agrees in the lease. Many buildings bill through juristic meters — negotiate before deposit.",
    "ได้ถ้าเจ้าของตกลงในสัญญา หลายตึกคิดผ่านมิเตอร์นิติบุคคล — ต่อรองก่อนมัดจำ",
    "能要求政府电价吗？",
    "Гостариф в договоре?",
  ),
  faqEnTh(
    "drinking",
    "Is tap water safe if boiled?",
    "น้ำก๊อกต้มแล้วดื่มได้ไหม?",
    "Expats in Pattaya budget bottled delivery or coin machines — not tap, even boiled.",
    "ชาวต่างชาติใช้น้ำถังหรือตู้หยอดเหรียญ — ไม่ใช่ก๊อกแม้ต้ม",
    "自来水烧开能喝吗？",
    "Кипячённая вода из крана?",
  ),
  faqEnTh(
    "fiber",
    "How do I get fiber in my condo?",
    "ติดไฟเบอร์ในคอนโดอย่างไร?",
    "Ask juristic person which ISPs run to your floor. Older buildings may only offer VDSL or shared Wi‑Fi.",
    "ถามนิติบุคคลว่า ISP ไหนเข้าถึงชั้น ตึกเก่าอาจมีแค่ VDSL",
    "公寓如何装光纤？",
    "Оптика в кондо?",
  ),
  faqEnTh(
    "transfer",
    "Should utilities be in my name?",
    "ควรโอนมิเตอร์เป็นชื่อเราไหม?",
    "Long-term renters usually pay via the landlord’s meter. Rare to transfer PEA/PWA unless you own.",
    "ผู้เช่าระยะยาวมักจ่ายผ่านเจ้าของ ไม่ค่อยโอน PEA/PWA ยกเว้นเป็นเจ้าของ",
    "水电要过户吗？",
    "Оформление на имя?",
  ),
];

function RateCompareCard({
  icon: Icon,
  title,
  govLabel,
  govRate,
  buildingLabel,
  buildingRate,
}: {
  icon: typeof Zap;
  title: string;
  govLabel: string;
  govRate: string;
  buildingLabel: string;
  buildingRate: string;
}) {
  return (
    <article className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-[#B29475]" aria-hidden />
        <h3 className="font-bold text-[#0A192F]">{title}</h3>
      </div>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50/80 px-3 py-2.5 ring-1 ring-emerald-200/60">
          <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
            {govLabel}
          </dt>
          <dd className="mt-1 text-sm font-bold text-emerald-950">{govRate}</dd>
        </div>
        <div className="rounded-xl bg-amber-50/80 px-3 py-2.5 ring-1 ring-amber-200/60">
          <dt className="text-xs font-semibold uppercase tracking-wide text-amber-800">
            {buildingLabel}
          </dt>
          <dd className="mt-1 text-sm font-bold text-amber-950">{buildingRate}</dd>
        </div>
      </dl>
    </article>
  );
}

export function UtilitiesPage() {
  const { language } = useLanguage();
  const copy = getUtilitiesPage(language);
  const estimates = getUtilitiesEstimates(language);

  return (
    <LocalizedLivingPageShell
      shellKey="utilities"
      heroImage={livingImages.utilities}
      heroAlt="Utilities in Pattaya"
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/housing/rentals" className={livingCtaButtonClass.outline}>
            {copy.rentals}
          </Link>
          <Link href="/living/cost-of-living/food" className={livingCtaButtonClass.outline}>
            {copy.foodGuide}
          </Link>
        </LivingCtaActions>
      }
    >
      {/* Intro */}
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="utilities-intro-title"
      >
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#B29475" }}
          >
            <Plug className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="utilities-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Government vs building rates */}
      <section aria-labelledby="utility-rates-title">
        <h2 id="utility-rates-title" className={livingTheme.heading}>
          {copy.ratesTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.ratesSubtitle}</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <RateCompareCard
            icon={Zap}
            title={copy.electricGov}
            govLabel={copy.electricGov}
            govRate={copy.electricGovRate}
            buildingLabel={copy.electricBuilding}
            buildingRate={copy.electricBuildingRate}
          />
          <RateCompareCard
            icon={Droplets}
            title={copy.waterGov}
            govLabel={copy.waterGov}
            govRate={copy.waterGovRate}
            buildingLabel={copy.waterBuilding}
            buildingRate={copy.waterBuildingRate}
          />
        </div>
        <p className="mt-5 flex gap-3 rounded-xl border border-[#B29475]/30 bg-[#faf7f2] p-4 text-sm leading-relaxed text-[#444748]">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#B29475]" aria-hidden />
          {copy.ratesTip}
        </p>
      </section>

      {/* AC seasonal */}
      <section aria-labelledby="utility-ac-title">
        <h2 id="utility-ac-title" className={livingTheme.heading}>
          {copy.acTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.acSubtitle}</p>
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-sky-50 px-4 py-3 text-sm text-sky-950 ring-1 ring-sky-200">
          <Snowflake className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {copy.acHotSeason}
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0A192F]">{copy.acLightTitle}</h3>
            <p className="mt-2 text-2xl font-bold text-[#B29475]">{copy.acLightBill}</p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-amber-950">{copy.acHeavyTitle}</h3>
            <p className="mt-2 text-2xl font-bold text-amber-900">{copy.acHeavyBill}</p>
          </article>
        </div>
      </section>

      {/* Drinking water */}
      <section aria-labelledby="utility-drink-title">
        <h2 id="utility-drink-title" className={livingTheme.heading}>
          {copy.waterDrinkTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.waterDrinkSubtitle}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <article className={`flex gap-4 p-5 ${livingTheme.cardStatic}`}>
            <div className={livingTheme.iconBox}>
              <GlassWater className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h3 className="font-bold text-[#0A192F]">{copy.gallonTitle}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{copy.gallonBody}</p>
            </div>
          </article>
          <article className={`flex gap-4 p-5 ${livingTheme.cardStatic}`}>
            <div className={livingTheme.iconBox}>
              <Droplets className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h3 className="font-bold text-[#0A192F]">{copy.vendingTitle}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{copy.vendingBody}</p>
            </div>
          </article>
        </div>
      </section>

      {/* Trash + gas + internet */}
      <section className="grid gap-6 lg:grid-cols-3" aria-labelledby="utility-extra-title">
        <h2 id="utility-extra-title" className="sr-only">
          {copy.trashTitle}
        </h2>
        <article className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-[#475569]" aria-hidden />
            <h3 className="font-bold text-[#0A192F]">{copy.trashTitle}</h3>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#444748]">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29475]" aria-hidden />
              {copy.trashCondo}
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29475]" aria-hidden />
              {copy.trashHouse}
            </li>
          </ul>
        </article>
        <article className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-[#475569]" aria-hidden />
            <h3 className="font-bold text-[#0A192F]">{copy.gasTitle}</h3>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#444748]">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29475]" aria-hidden />
              {copy.gasCondo}
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29475]" aria-hidden />
              {copy.gasHouse}
            </li>
          </ul>
        </article>
        <article className="rounded-2xl border border-[#D7CBBA]/60 bg-[#faf7f2] p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Wifi className="h-5 w-5 text-[#6b5a48]" aria-hidden />
            <h3 className="font-bold text-[#0A192F]">{copy.internetTitle}</h3>
          </div>
          <p className={`mt-4 text-sm leading-relaxed ${livingTheme.body}`}>{copy.internetBody}</p>
          <p className="mt-3 flex gap-2 text-xs leading-relaxed text-amber-900">
            <Home className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            {copy.internetWarn}
          </p>
        </article>
      </section>

      {/* Estimates table */}
      <section aria-labelledby="util-estimates">
        <h2 id="util-estimates" className={livingTheme.heading}>
          {copy.estimatesTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.estimatesSubtitle}</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{copy.tableProfile}</th>
                <th className="px-4 py-3 sm:px-6">{copy.tableMonthly}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {estimates.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{row.item}</td>
                  <td className="px-4 py-3 sm:px-6">{row.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <UtilitiesCostCalculator />

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Utilities", "สาธารณูปโภค", "公用事业", "Коммуналка")}
        titleId="utilities-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
