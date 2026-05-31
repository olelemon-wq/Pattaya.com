"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { NinetyDayReportAssistant } from "@/components/living/ninety-day-report-assistant";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { ninetyDayFaqs } from "@/lib/i18n/messages/living/living-page-faqs";
import Link from "next/link";


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
        faqs={ninetyDayFaqs}
        subtitle={faqSubtitle(language, "90-day report", "รายงาน 90 วัน", "90 天报到", "Отчёт 90 дней")}
      />
    </LocalizedLivingPageShell>
  );
}
