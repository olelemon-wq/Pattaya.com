import { ChevronDown } from "lucide-react";

export type LivingFaq = {
  id: string;
  question: string;
  questionTh: string;
  answer: string;
};

export function LivingFaqSection({
  faqs,
  subtitle,
  titleId = "faq-title",
}: {
  faqs: readonly LivingFaq[];
  subtitle: string;
  titleId?: string;
}) {
  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-sm text-[#777777]">{subtitle}</p>
      <div className="mt-6 divide-y divide-[#e2e8f0]">
        {faqs.map((faq, index) => (
          <details key={faq.id} className="group py-4 first:pt-0 last:pb-0" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 pr-2">
                <span className="block font-semibold text-[#0A192F]">{faq.question}</span>
                <span className="mt-0.5 block text-xs text-[#777777]">{faq.questionTh}</span>
              </span>
              <span
                className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#F8FAFC] transition duration-200 group-open:rotate-180 group-open:border-[#B29475] group-open:bg-[#B29475] group-open:text-white"
                aria-hidden
              >
                <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#444748]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
