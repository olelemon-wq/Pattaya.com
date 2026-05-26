import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import {
  BadgeCheck,
  Building2,
  ChevronDown,
  FileCheck,
  Laptop,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const requirements: { icon: LucideIcon; title: string; titleTh: string; body: string }[] =
  [
    {
      icon: Building2,
      title: "Registered employer",
      titleTh: "นายจ้างจดทะเบียน",
      body: "A Thai company with paid-up capital, tax filings, and a valid office address that can sponsor your permit.",
    },
    {
      icon: FileCheck,
      title: "Valid non-immigrant visa",
      titleTh: "วีซ่าที่ถูกต้อง",
      body: "Typically Non-Immigrant B (or eligible category) obtained before work permit application at Labour Department.",
    },
    {
      icon: BadgeCheck,
      title: "Role & qualifications",
      titleTh: "ตำแหน่งและคุณสมบัติ",
      body: "Job description, education, and experience must match Labour Office standards for the position.",
    },
    {
      icon: Stethoscope,
      title: "Medical certificate",
      titleTh: "ใบรับรองแพทย์",
      body: "Thai clinic or hospital medical form issued within the required timeframe.",
    },
  ];

const steps = [
  { step: 1, title: "Secure job offer", titleTh: "ได้ข้อเสนองาน", note: "Signed employment contract in Thai/English." },
  { step: 2, title: "Non-B visa", titleTh: "วีซ่า Non-B", note: "Apply at Thai embassy or convert with legal support." },
  { step: 3, title: "Work permit", titleTh: "ใบอนุญาตทำงาน", note: "Submit at Chonburi Labour Office with company documents." },
  { step: 4, title: "Annual renewal", titleTh: "ต่ออายุรายปี", note: "Sync visa extension, 90-day report, and permit renewal." },
];

const faqs = [
  {
    id: "nomad",
    question: "Can digital nomads use a standard work permit?",
    questionTh: "Digital Nomad ใช้ work permit ปกติได้ไหม?",
    answer:
      "Remote work for foreign employers may qualify under LTR (Long-Term Resident) or specific BOI schemes — not a classic employer-sponsored permit. We map your income source and nationality to the correct route.",
  },
  {
    id: "ratio",
    question: "What is the Thai-to-foreign employee ratio?",
    questionTh: "อัตราส่วนคนไทยต่อต่างชาติ?",
    answer:
      "Many companies must employ four Thai staff per foreign work permit holder (with exceptions for BOI-promoted firms). Your HR or our legal partners verify the ratio before filing.",
  },
  {
    id: "change",
    question: "Can I change employers on the same permit?",
    questionTh: "เปลี่ยนนายจ้างได้ไหม?",
    answer:
      "A new employer requires a new work permit application and often a fresh visa alignment. Plan 2–4 weeks for handover; working without an updated permit is a serious violation.",
  },
];

function FaqBlock() {
  return (
    <section
      id="faq"
      className={`relative z-10 scroll-mt-24 ${livingTheme.panel}`}
      aria-labelledby="wp-faq-title"
    >
      <h2 id="wp-faq-title" className={livingTheme.heading}>
        Frequently Asked Questions
      </h2>
      <p className={`mt-1 ${livingTheme.muted}`}>คำถามที่พบบ่อย — Work Permit</p>
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
            <p className={`mt-3 ${livingTheme.body}`}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function WorkPermitPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.workPermit}
      heroAlt="Work permit documents and professional employment"
      badge="Visa & Immigration"
      breadcrumbLeaf="Work Permit"
      title="Work Permit | ใบอนุญาตทำงาน"
      subtitle="Legal frameworks for employment, business setup, and LTR options for professionals based in Pattaya and Chonburi."
      ctaEyebrow="Legal Service"
      ctaTitle="Employer sponsorship & compliance review"
      ctaBody="Pattaya law firms on our network handle Non-B visas, work permits, and BOI/LTR screening for hospitality, tech, and remote workers."
      ctaButton="Legal Compliance Consultation"
      ctaAriaLabel="Work permit legal consultation"
      bottomTitle="Need a compliant work permit in Chonburi?"
      bottomBody="Our legal partners review company ratio, contracts, and Labour Office filings before you submit."
      bottomPrimary={{ label: "Get Free Consultation", href: "/living" }}
    >
      <section aria-labelledby="wp-req-title">
        <h2 id="wp-req-title" className={livingTheme.heading}>
          Core requirements
        </h2>
        <p className={`mt-1 ${livingTheme.muted}`}>เอกสารและเงื่อนไขหลัก</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {requirements.map(({ icon: Icon, title, titleTh, body }) => (
            <article key={title} className={`p-5 ${livingTheme.card}`}>
              <div className={livingTheme.iconBox}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-[#0A192F]">{title}</h3>
              <p className="text-xs font-medium text-[#B29475]">{titleTh}</p>
              <p className={`mt-2 ${livingTheme.body}`}>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="wp-steps-title">
        <h2 id="wp-steps-title" className={livingTheme.heading}>
          Application process
        </h2>
        <p className={`mt-1 ${livingTheme.muted}`}>ขั้นตอนโดยสรุป</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className={`flex flex-col p-5 ${livingTheme.cardStatic}`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-3 font-bold text-[#0A192F]">{s.title}</h3>
              <p className="text-xs text-[#B29475]">{s.titleTh}</p>
              <p className={`mt-2 flex-1 ${livingTheme.body}`}>{s.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={livingTheme.accentPanel} aria-labelledby="ltr-title">
        <div className="flex items-start gap-4 text-left">
          <div className={livingTheme.iconBox}>
            <Laptop className="h-6 w-6" />
          </div>
          <div>
            <h2 id="ltr-title" className={livingTheme.headingSm}>
              LTR &amp; Digital Nomad pathway
            </h2>
            <p className={`mt-2 ${livingTheme.body}`}>
              Remote workers and wealthy global citizens may qualify for the Long-Term Resident
              (LTR) visa with 10-year stay permission and simplified work rules — separate from a
              classic employer work permit. Income thresholds and industry categories apply.
            </p>
            <Link
              href="/living/visa/retirement"
              className="mt-4 inline-flex text-sm font-bold text-[#B29475] hover:underline"
            >
              Compare with Retirement Visa →
            </Link>
          </div>
        </div>
      </section>

      <FaqBlock />
    </LivingPageShell>
  );
}
