"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { NinetyDayReportAssistant } from "@/components/living/ninety-day-report-assistant";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import Link from "next/link";

const faqs = [
  faqEnTh(
    "tm30",
    "How is TM30 related?",
    "TM30 เกี่ยวอะไร?",
    "Landlords file TM30 when you check in. Mismatches cause delays — keep copies.",
    "เจ้าของแจ้ง TM30 ตอนเข้าพัก ที่อยู่ไม่ตรงทำให้ล่าช้า เก็บสำเนา",
    "TM30 有何关系？",
    "TM30?",
  ),
  faqEnTh(
    "travel",
    "Does leaving Thailand reset the clock?",
    "ออกนอกประเทศแล้วนับใหม่ไหม?",
    "Re-entry on a new stamp starts a new 90-day period. Track passport stamps.",
    "เข้าใหม่ด้วยตราประทับใหม่ เริ่มนับ 90 วันใหม่ ดูตราในพาสปอร์ต",
    "离境会重置吗？",
    "Сброс при выезде?",
  ),
  faqEnTh(
    "agent",
    "Can someone report for me?",
    "ให้คนอื่นยื่นแทนได้ไหม?",
    "Power of attorney possible in person; online must be your account.",
    "มอบอำนาจยื่นแทนได้ที่สำนักงาน ออนไลน์ต้องใช้บัญชีตัวเอง",
    "能代报吗？",
    "Подать за меня?",
  ),
];

export function NinetyDayReportPage() {
  const { language } = useLanguage();
  const rulesNote = t(
    language,
    L("Rules change — verify on", "กฎเปลี่ยนได้ — ตรวจที่", "规定可能变更 — 请查阅", "Правила меняются — см."),
  );
  const visaGuides = t(language, L("visa guides", "คู่มือวีซ่า", "签证指南", "гайды по визам"));
  const orAgent = t(language, L("or with a licensed agent.", "หรือตัวแทนที่มีใบอนุญาต", "或咨询持牌代理。", "или лицензированного агента."));

  return (
    <LocalizedLivingPageShell
      shellKey="ninetyDay"
      heroImage={livingImages.ninetyDay}
      heroAlt="Immigration documents"
      hideLeadCta
    >
      <div className="rounded-2xl border border-[#D7CBBA]/60 bg-[#f5f5f7] p-4 sm:p-6">
        <NinetyDayReportAssistant />
      </div>

      <p className="text-center text-xs text-[#777777]">
        {rulesNote}{" "}
        <Link href="/living/visa/retirement" className="text-[#B29475] hover:underline">
          {visaGuides}
        </Link>{" "}
        {orAgent}
      </p>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "90-day report", "รายงาน 90 วัน", "90 天报到", "Отчёт 90 дней")}
      />
    </LocalizedLivingPageShell>
  );
}
