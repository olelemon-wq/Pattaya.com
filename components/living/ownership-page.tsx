"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { Building, FileKey, Home, LandPlot } from "lucide-react";
import Link from "next/link";

function getOptions() {
  return [
    iconEnTh(
      Home,
      "Freehold condo",
      "คอนโดกรรมสิทธิ์",
      "Foreigners may own up to 49% of sellable area — check quota letter before signing.",
      "ต่างชาติถือกรรมสิทธิ์ได้ไม่เกิน 49% — ตรวจหนังสือโควตาก่อนเซ็น",
      "公寓永久产权",
      "Freehold кондо",
    ),
    iconEnTh(
      FileKey,
      "Leasehold",
      "สิทธิเช่า",
      "30-year registered leases (+ renewals) common for villas and land projects.",
      "สิทธิเช่า 30 ปี (ต่ออายุ) ใช้กับวิลล่าและโครงการที่ดิน",
      "租赁权",
      "Leasehold",
    ),
    iconEnTh(
      LandPlot,
      "Land",
      "ที่ดิน",
      "Direct foreign land ownership is restricted; leasehold or company structures apply.",
      "ต่างชาติถือที่ดินโดยตรงจำกัด ใช้เช่าหรือโครงสร้างนิติบุคคล",
      "土地",
      "Земля",
    ),
    iconEnTh(
      Building,
      "Company structures",
      "นิติบุคคล",
      "Thai majority companies need FBA compliance — not a casual purchase route.",
      "บริษัทไทยส่วนใหญ่ต้องผ่าน FBA ไม่ใช่ทางซื้อแบบสบายๆ",
      "公司结构",
      "Через компанию",
    ),
  ];
}

function getTableRows(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      type: t(lang, L("Condo freehold", "คอนโดกรรมสิทธิ์", "公寓永久产权", "Freehold кондо")),
      access: t(lang, L("Yes, within 49% quota", "ได้ภายในโควตา 49%", "可以，在 49% 配额内", "Да, в квоте 49%")),
      use: t(lang, L("Beach / city apartments", "คอนโดชายหาด/เมือง", "海滨/市区公寓", "Квартиры у моря")),
    },
    {
      type: t(lang, L("Registered lease", "สิทธิเช่าจดทะเบียน", "登记租赁", "Аренда с регистрацией")),
      access: t(lang, L("Yes, up to 30+30 years", "ได้สูงสุด 30+30 ปี", "可以，最长 30+30 年", "Да, до 30+30 лет")),
      use: t(lang, L("Houses, villas, land", "บ้าน วิลล่า ที่ดิน", "别墅、土地项目", "Дома, виллы")),
    },
    {
      type: t(lang, L("Direct land", "ที่ดินโดยตรง", "直接持有土地", "Земля напрямую")),
      access: t(lang, L("Generally no", "โดยทั่วไปไม่ได้", "通常不可以", "Как правило нет")),
      use: t(lang, L("Requires Thai structure", "ต้องใช้โครงสร้างไทย", "需泰方结构", "Тайская структура")),
    },
  ];
}

const faqs = [
  faqEnTh(
    "quota",
    "How do I verify foreign quota?",
    "ตรวจโควตาต่างชาติอย่างไร?",
    "Request juristic person letter and match Chanote title before transfer day.",
    "ขอหนังสือนิติบุคคลและตรวจโฉนดก่อนวันโอน",
    "如何核实外资配额？",
    "Проверка квоты?",
  ),
  faqEnTh(
    "lease",
    "Is leasehold safe for 90 years?",
    "เช่า 90 ปีปลอดภัยไหม?",
    "Renewals must be registered at Land Office — unregistered side deals are not enforceable.",
    "ต่ออายุต้องจดทะเบียนที่ดิน ข้อตกลงนอกระบบใช้ไม่ได้",
    "90 年租赁安全吗？",
    "Leasehold на 90 лет?",
  ),
];

export function OwnershipPage() {
  const { language } = useLanguage();
  const h = {
    options: t(language, L("Ownership options", "ทางเลือกกรรมสิทธิ์", "产权选择", "Варианты владения")),
    compare: t(language, L("Quick comparison", "เปรียบเทียบสั้นๆ", "快速对比", "Сравнение")),
    type: t(language, L("Type", "ประเภท", "类型", "Тип")),
    access: t(language, L("Foreign access", "ต่างชาติ", "外籍准入", "Для иностранцев")),
    use: t(language, L("Typical use", "การใช้ทั่วไป", "典型用途", "Применение")),
    disclaimer: t(
      language,
      L("Not legal advice —", "ไม่ใช่คำแนะนำทางกฎหมาย —", "非法律意见 —", "Не юридическая консультация —"),
    ),
    guide: t(language, L("condo buying guide", "คู่มือซื้อคอนโด", "购房指南", "гид по покупке кондо")),
  };

  return (
    <LocalizedLivingPageShell shellKey="ownership" heroImage={livingImages.ownership} heroAlt="Property ownership">
      <section aria-labelledby="ownership-options">
        <h2 id="ownership-options" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {h.options}
        </h2>
        <div className="mt-6">
          <LivingIconCards items={getOptions()} />
        </div>
      </section>

      <section aria-labelledby="ownership-compare">
        <h2 id="ownership-compare" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {h.compare}
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{h.type}</th>
                <th className="px-4 py-3 sm:px-6">{h.access}</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">{h.use}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {getTableRows(language).map((row) => (
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
          {h.disclaimer}{" "}
          <Link href="/living/housing/condo-buying" className="font-semibold text-[#B29475] hover:underline">
            {h.guide}
          </Link>
        </p>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Ownership", "กรรมสิทธิ์", "产权", "Владение")}
      />
    </LocalizedLivingPageShell>
  );
}
