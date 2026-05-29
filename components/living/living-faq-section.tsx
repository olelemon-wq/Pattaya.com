"use client";

import { useLanguage } from "@/components/layout/language-provider";
import type { LivingFaqItem } from "@/lib/i18n/living-helpers";
import { t } from "@/lib/i18n/living-helpers";
import { livingUi } from "@/lib/i18n/messages/living/common";
import type { LocalizedText } from "@/lib/i18n/text";
import { ChevronDown } from "lucide-react";

/** @deprecated Use LivingFaqItem from living-helpers */
export type LivingFaq = LivingFaqItem;

type LegacyFaq = {
  id: string;
  question: string;
  questionTh: string;
  questionZh?: string;
  questionRu?: string;
  answer: string;
  answerTh?: string;
  answerZh?: string;
  answerRu?: string;
};

function normalizeFaq(faq: LivingFaqItem | LegacyFaq): LivingFaqItem {
  if (typeof faq.question === "object") {
    return faq as LivingFaqItem;
  }
  const legacy = faq as LegacyFaq;
  return {
    id: legacy.id,
    question: {
      en: legacy.question,
      th: legacy.questionTh,
      zh: legacy.questionZh,
      ru: legacy.questionRu,
    },
    answer: {
      en: legacy.answer,
      th: legacy.answerTh,
      zh: legacy.answerZh,
      ru: legacy.answerRu,
    },
  };
}

export function LivingFaqSection({
  faqs,
  subtitle,
  titleId = "faq-title",
}: {
  faqs: readonly (LivingFaqItem | LegacyFaq)[];
  subtitle: string | LocalizedText;
  titleId?: string;
}) {
  const { language } = useLanguage();
  const subtitleText =
    typeof subtitle === "string" ? subtitle : t(language, subtitle);

  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
        {t(language, livingUi.faqTitle)}
      </h2>
      <p className="mt-1 text-sm text-[#777777]">{subtitleText}</p>
      <div className="mt-6 divide-y divide-[#e2e8f0]">
        {faqs.map((raw, index) => {
          const faq = normalizeFaq(raw);
          return (
          <details key={faq.id} className="group py-4 first:pt-0 last:pb-0" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 pr-2 font-semibold text-[#0A192F]">
                {t(language, faq.question)}
              </span>
              <span
                className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#F8FAFC] transition duration-200 group-open:rotate-180 group-open:border-[#B52E88] group-open:bg-[#B29475] group-open:text-white"
                aria-hidden
              >
                <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#444748]">
              {t(language, faq.answer)}
            </p>
          </details>
          );
        })}
      </div>
    </section>
  );
}
