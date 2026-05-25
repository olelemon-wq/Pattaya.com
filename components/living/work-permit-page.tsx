import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
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
import Image from "next/image";
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
      className="relative z-10 scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="wp-faq-title"
    >
      <h2 id="wp-faq-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-sm text-[#777777]">คำถามที่พบบ่อย — Work Permit</p>
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

export function WorkPermitPage() {
  return (
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>

      <section
        className="relative min-h-[min(72vh,560px)] overflow-hidden"
        aria-labelledby="wp-hero-title"
      >
        <Image
          src={livingImages.workPermit}
          alt="Work permit documents and professional employment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/75 to-[#0A192F]/92"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(72vh,560px)] max-w-[1280px] flex-col justify-end px-4 pb-28 pt-20 sm:px-6 sm:pb-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/75 sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/living" className="hover:text-white">
                  Living
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/90">Work Permit</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#D7CBBA] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6b5a48]">
            Visa & Immigration
          </span>
          <h1
            id="wp-hero-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Work Permit | ใบอนุญาตทำงาน
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Legal frameworks for employment, business setup, and LTR options for
            professionals based in Pattaya and Chonburi.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-[900px] px-4 sm:-mt-16 sm:px-6">
        <aside
          className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-xl ring-1 ring-[#B29475]/20 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8"
          aria-label="Work permit legal consultation"
        >
          <div className="sm:flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
              Legal Service
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-[#0A192F] sm:text-lg">
              Employer sponsorship &amp; compliance review
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#777777]">
              Pattaya law firms on our network handle Non-B visas, work permits,
              and BOI/LTR screening for hospitality, tech, and remote workers.
            </p>
          </div>
          <Link
            href="/living"
            className="mt-5 inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-[#B29475] px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#B29475]/90 sm:mt-0 sm:w-auto"
          >
            Legal Compliance Consultation
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        <section aria-labelledby="wp-req-title">
          <h2 id="wp-req-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
            Core requirements
          </h2>
          <p className="mt-1 text-sm text-[#777777]">เอกสารและเงื่อนไขหลัก</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {requirements.map(({ icon: Icon, title, titleTh, body }) => (
              <article
                key={title}
                className="rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#B29475] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-[#0A192F]">{title}</h3>
                <p className="text-xs font-medium text-[#B29475]">{titleTh}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="wp-steps-title">
          <h2 id="wp-steps-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
            Application process
          </h2>
          <p className="mt-1 text-sm text-[#777777]">ขั้นตอนโดยสรุป</p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.step}
                className="flex flex-col rounded-xl border border-[#e2e8f0] bg-white p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-3 font-bold text-[#0A192F]">{s.title}</h3>
                <p className="text-xs text-[#B29475]">{s.titleTh}</p>
                <p className="mt-2 flex-1 text-sm text-[#444748]">{s.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 sm:p-8"
          aria-labelledby="ltr-title"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B29475] text-white">
              <Laptop className="h-6 w-6" />
            </div>
            <div>
              <h2 id="ltr-title" className="text-xl font-bold text-[#0A192F]">
                LTR &amp; Digital Nomad pathway
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#444748]">
                Remote workers and wealthy global citizens may qualify for the
                Long-Term Resident (LTR) visa with 10-year stay permission and
                simplified work rules — separate from a classic employer work
                permit. Income thresholds and industry categories apply.
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

        <section
          className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] px-6 py-8 text-center sm:px-10 sm:py-10"
          aria-labelledby="wp-cta-title"
        >
          <h2 id="wp-cta-title" className="text-xl font-bold text-[#0A192F] sm:text-2xl">
            Need a compliant work permit in Chonburi?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#444748]">
            Our legal partners review company ratio, contracts, and Labour Office
            filings before you submit.
          </p>
          <Link
            href="/living"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#B29475] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#B29475]/90"
          >
            Get Free Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
