import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "quota",
    question: "How do I check if a unit is in the foreign quota?",
    questionTh: "ตรวจโควตาต่างชาติอย่างไร?",
    answer:
      "Ask the juristic person for a letter listing foreign-owned units, then confirm at Chonburi Land Office before signing. Never rely on agent verbal assurances alone.",
  },
  {
    id: "fees",
    question: "Who pays transfer fees and taxes?",
    questionTh: "ใครจ่ายค่าโอนและภาษี?",
    answer:
      "Split is negotiable in the SPA. Typically buyer pays transfer fee (2%) and seller pays specific business tax or stamp duty depending on holding period. Budget 3–6% all-in for buyer side.",
  },
  {
    id: "offplan",
    question: "Is off-plan purchase safe for foreigners?",
    questionTh: "ซื้อออฟพลานปลอดภัยไหม?",
    answer:
      "Use escrow-friendly contracts, licensed developers, and staged payments tied to construction milestones. Resale before completion has extra restrictions — legal review is essential.",
  },
  {
    id: "leasehold",
    question: "What if the foreign quota is full?",
    questionTh: "โควตาเต็มทำอย่างไร?",
    answer:
      "Alternatives include 30-year registered lease + renewals, company structures (with legal advice), or choosing another building with quota available. Do not use informal nominee arrangements.",
  },
  {
    id: "rental",
    question: "Can I rent out my condo?",
    questionTh: "ปล่อยเช่าได้ไหม?",
    answer:
      "Yes, subject to juristic person rules and correct tax reporting. Short-term platforms may require building permission. Factor management fees and vacancy into yield calculations.",
  },
] as const;

export function CondoBuyingFaq() {
  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="condo-faq-title"
    >
      <h2
        id="condo-faq-title"
        className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
      >
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-sm text-[#777777]">
        คำถามที่พบบ่อย — ซื้อคอนโดในพัทยา
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
