import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "foreign-bank",
    question: "Can I use a foreign bank account for the financial requirement?",
    questionTh: "ใช้บัญชีธนาคารต่างประเทศได้หรือไม่?",
    answer:
      "For the retirement extension, funds must typically be held in a Thai bank account for at least two months before application, or you must show qualifying monthly income deposited in Thailand. Foreign statements alone are usually not accepted — our visa team can review your specific case.",
  },
  {
    id: "duration",
    question: "How long does the retirement visa process take?",
    questionTh: "ใช้เวลากี่วันในการดำเนินการ?",
    answer:
      "After entering Thailand on an eligible visa (often a Non-Immigrant O-A or converting from a tourist visa with proper planning), document preparation takes 1–2 weeks. Immigration office processing for the extension is often same-day or within a few business days in Pattaya, depending on queue volume.",
  },
  {
    id: "insurance-amount",
    question: "What medical insurance coverage is required?",
    questionTh: "ประกันสุขภาพต้องคุ้มครองเท่าไหร่?",
    answer:
      "Policies must meet Immigration requirements (commonly outpatient coverage of at least 40,000 THB and inpatient of 400,000 THB, or equivalent approved plans). Coverage must remain valid throughout your stay. We help match approved insurers used by Chonburi Immigration.",
  },
  {
    id: "90-day",
    question: "What is 90-day reporting and do I need to do it?",
    questionTh: "รายงานตัว 90 วันคืออะไร?",
    answer:
      "Every 90 days you must report your current address to Immigration (online, by mail, or in person). Missing a report can result in fines. Our service includes reminders and optional assisted reporting for Pattaya residents.",
  },
  {
    id: "spouse",
    question: "Can my spouse qualify on my retirement visa?",
    questionTh: "คู่สมรสสามารถตามวีซ่าเกษียณได้ไหม?",
    answer:
      "Dependents may apply for a Non-Immigrant O visa as your spouse with supporting marriage certificate and financial proof. Requirements differ from the primary applicant — book a consultation to plan joint applications.",
  },
] as const;

export function RetirementVisaFaq() {
  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="faq-title"
    >
      <h2
        id="faq-title"
        className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
      >
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-sm text-[#777777]">
        คำถามที่พบบ่อย — วีซ่าเกษียณในพัทยา
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
