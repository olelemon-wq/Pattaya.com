"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { useLanguage } from "@/components/layout/language-provider";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { condoBuyingFaqs } from "@/lib/i18n/messages/living/living-page-faqs";

export function CondoBuyingFaq() {
  const { language } = useLanguage();

  return (
    <LivingFaqSection
      faqs={condoBuyingFaqs}
      subtitle={faqSubtitle(language, "Condo buying", "ซื้อคอนโด", "购房", "Покупка кондо")}
      titleId="condo-faq-title"
    />
  );
}
