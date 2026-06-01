"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { useLanguage } from "@/components/layout/language-provider";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { cultureEtiquetteFaqs } from "@/lib/i18n/messages/living/living-page-faqs";

export function CultureEtiquetteFaq() {
  const { language } = useLanguage();

  return (
    <LivingFaqSection
      faqs={cultureEtiquetteFaqs}
      subtitle={faqSubtitle(language, "Thai etiquette", "มารยาทไทย", "泰国礼仪", "Этикет")}
      titleId="culture-faq-title"
    />
  );
}
