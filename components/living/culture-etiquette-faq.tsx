import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "wai",
    question: "When should I use the wai?",
    questionTh: "ไหว้เมื่อไหร่?",
    answer:
      "Use the wai when greeting elders, monks, officials, and in formal settings. A slight bow with palms together is enough for casual daily interactions. Handshakes are fine among expats but follow locals’ lead in mixed groups.",
  },
  {
    id: "temple",
    question: "What should I wear to temples in Pattaya?",
    questionTh: "แต่งกายเข้าวัดอย่างไร?",
    answer:
      "Cover shoulders and knees, remove shoes before entering buildings, and keep voices low. Some beach temples near Pattaya still enforce modest dress — carry a light sarong or shirt in your bag.",
  },
  {
    id: "monks",
    question: "Can women interact with monks?",
    questionTh: "ผู้หญิงคุยกับพระได้ไหม?",
    answer:
      "Women should not touch monks or hand objects directly — place items on a cloth or table. Give up seats on public transport and avoid sitting higher than a monk when possible.",
  },
  {
    id: "face",
    question: "What does ‘saving face’ mean in daily life?",
    questionTh: "‘เกรงใจ/รักษาหน้า’ หมายถึงอะไร?",
    answer:
      "Avoid public arguments, loud criticism, or embarrassing someone in a group. Calm negotiation and a smile go further than confrontation — especially with service staff, landlords, and officials.",
  },
  {
    id: "royal",
    question: "Are there rules about the monarchy?",
    questionTh: "กฎเกี่ยวกับสถาบันกษัตริย์?",
    answer:
      "Show respect in public and media. Avoid casual or critical discussion — Thailand has strict laws on this topic. Stand quietly if the royal anthem plays in cinemas or public events.",
  },
] as const;

export function CultureEtiquetteFaq() {
  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="culture-faq-title"
    >
      <h2
        id="culture-faq-title"
        className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
      >
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-sm text-[#777777]">
        คำถามที่พบบ่อย — มารยาทไทยในพัทยา
      </p>

      <div className="mt-6 divide-y divide-[#e2e8f0]">
        {faqs.map((faq, index) => (
          <details
            key={faq.id}
            className="group py-4 first:pt-0 last:pb-0"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 pr-2">
                <span className="block font-semibold text-[#0A192F]">
                  {faq.question}
                </span>
                <span className="mt-0.5 block text-xs text-[#777777]">
                  {faq.questionTh}
                </span>
              </span>
              <span
                className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#F8FAFC] text-[#0A192F] transition duration-200 group-open:rotate-180 group-open:border-[#B29475] group-open:bg-[#B29475] group-open:text-white"
                aria-hidden
              >
                <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#444748]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
