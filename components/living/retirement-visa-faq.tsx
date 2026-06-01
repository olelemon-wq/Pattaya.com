"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { retirementVisaFaqs } from "@/lib/i18n/messages/living/living-page-faqs";
import { useLanguage } from "@/components/layout/language-provider";

export function RetirementVisaFaq() {
  const { language } = useLanguage();

  return (
    <LivingFaqSection
      faqs={retirementVisaFaqs}
      subtitle={faqSubtitle(language, "Retirement visa", "วีซ่าเกษียณ", "退休签证", "Пенсионная виза")}
      titleId="faq-title"
    />
  );
}
