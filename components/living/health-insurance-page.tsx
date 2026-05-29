"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { Globe, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

function getPlanTypes() {
  return [
    iconEnTh(
      Globe,
      "International plans",
      "ประกันต่างประเทศ",
      "April, Luma, Cigna-style coverage with direct billing in Pattaya.",
      "April Luma แบบสากล เคลมตรงที่โรงพยาบาลพัทยา",
      "国际保险",
      "Международные планы",
    ),
    iconEnTh(
      ShieldCheck,
      "Thai local insurers",
      "ประกันในประเทศ",
      "Lower premiums; confirm Immigration-approved wording for long-stay visas.",
      "เบี้ยต่ำ ตรวจข้อความที่ตม.รับรองสำหรับวีซ่าระยะยาว",
      "泰国本地险",
      "Тайские страховщики",
    ),
    iconEnTh(
      Stethoscope,
      "Hospital packages",
      "แพ็กเกจโรงพยาบาล",
      "Check-up bundles for visa medical — separate from inpatient cover.",
      "แพ็กเกจตรวจสุขภาพสำหรับวีซ่า แยกจากคุ้มครองผู้ป่วยใน",
      "医院套餐",
      "Пакеты больниц",
    ),
    iconEnTh(
      HeartPulse,
      "Travel vs resident",
      "เดินทาง vs อยู่ระยะยาว",
      "Travel insurance rarely satisfies retirement extension rules.",
      "ประกันเดินทางมักไม่ผ่านเกณฑ์ต่ออายุเกษียณ",
      "旅游险 vs 居留险",
      "Travel vs resident",
    ),
  ];
}

function getChecklist(lang: import("@/lib/i18n/languages").LanguageCode): string[] {
  return [
    t(lang, L("Policy certificate in English (or certified Thai)", "ใบรับรองภาษาอังกฤษหรือไทยรับรอง", "英文或认证泰文保单", "Полис на английском")),
    t(lang, L("Valid through proposed extension date", "คุ้มครองถึงวันต่ออายุที่ขอ", "覆盖至拟延签日期", "Действует до продления")),
    t(lang, L("Insurer letterhead and contact number", "หัวกระดาษและเบอร์ติดต่อบริษัทประกัน", "保险公司抬头与电话", "Реквизиты страховщика")),
    t(lang, L("Coverage amounts matching Immigration circular", "วงเงินตามประกาศตม.", "保额符合移民局通告", "Суммы по circular Immigration")),
  ];
}

const faqs = [
  faqEnTh(
    "retirement",
    "What coverage does retirement visa need?",
    "วีซ่าเกษียณต้องมีประกันแบบไหน?",
    "Policies must meet Immigration minimums and span your full stay period.",
    "ต้องตรงเกณฑ์ตม. และคุ้มครองตลอดระยะพำนัก",
    "退休签证需要什么保险？",
    "Страховка для retirement?",
  ),
  faqEnTh(
    "preexisting",
    "Are pre-existing conditions covered?",
    "โรคประจำตัวคุ้มครองไหม?",
    "Most plans exclude or waiting-period pre-existing conditions. Disclose honestly at application.",
    "ส่วนใหญ่ไม่คุ้มหรือรอระยะเวลา แจ้งตรงตอนสมัคร",
    "既往症保吗？",
    "Предсуществующие болезни?",
  ),
];

export function HealthInsurancePage() {
  const { language } = useLanguage();

  return (
    <LocalizedLivingPageShell shellKey="healthInsurance" heroImage={livingImages.insurance} heroAlt="Health insurance">
      <section aria-labelledby="insurance-types">
        <h2 id="insurance-types" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, L("Plan types", "ประเภทแผน", "保险类型", "Типы планов"))}
        </h2>
        <div className="mt-6">
          <LivingIconCards items={getPlanTypes()} />
        </div>
      </section>

      <section
        className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 sm:p-8"
        aria-labelledby="insurance-visa-note"
      >
        <h2 id="insurance-visa-note" className="text-xl font-bold text-[#0A192F]">
          {t(language, L("Visa & extension checklist", "เช็กลิสต์วีซ่าและต่ออายุ", "签证延签清单", "Чеклист визы"))}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#444748]">
          {getChecklist(language).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm">
          <Link href="/living/visa/retirement" className="font-bold text-[#B29475] hover:underline">
            {t(language, L("Retirement visa requirements →", "เงื่อนไขวีซ่าเกษียณ →", "退休签证要求 →", "Retirement →"))}
          </Link>
        </p>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Health insurance", "ประกันสุขภาพ", "健康保险", "Страховка")}
      />
    </LocalizedLivingPageShell>
  );
}
