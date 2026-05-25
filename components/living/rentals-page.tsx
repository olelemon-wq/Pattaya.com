import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { livingImages } from "@/lib/design/living-images";
import {
  ChevronDown,
  ClipboardList,
  FileText,
  Home,
  Shield,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const checklist: { icon: LucideIcon; title: string; titleTh: string; text: string }[] =
  [
    {
      icon: FileText,
      title: "Written lease",
      titleTh: "สัญญาเช่า",
      text: "Thai + English contract naming both parties, rent, term, deposit, maintenance, and early termination.",
    },
    {
      icon: Shield,
      title: "Deposit terms",
      titleTh: "เงินประกัน",
      text: "Common pattern: 2 months deposit + 1 month advance. Document move-in photos and meter readings.",
    },
    {
      icon: ClipboardList,
      title: "TM30 reporting",
      titleTh: "รายงานตัว TM30",
      text: "Landlord must file TM30 within 24 hours of your check-in. Keep a copy for Immigration and visa extensions.",
    },
    {
      icon: Home,
      title: "Utilities & fees",
      titleTh: "ค่าส่วนกลาง",
      text: "Confirm who pays electricity (often unit rate), water, internet, and condo common area fees.",
    },
  ];

const rentRanges = [
  { area: "Pattaya Beach / Central", studio: "฿8k–15k", twoBed: "฿15k–28k" },
  { area: "Jomtien & Dongtan", studio: "฿10k–18k", twoBed: "฿18k–35k" },
  { area: "Pratumnak Hill", studio: "฿12k–22k", twoBed: "฿22k–45k" },
  { area: "Naklua / Wong Amat", studio: "฿10k–20k", twoBed: "฿20k–40k" },
];

const faqs = [
  {
    id: "deposit",
    question: "How do I get my deposit back?",
    questionTh: "ขอเงินประกันคืนอย่างไร?",
    answer:
      "Give proper notice per contract (often 30 days), professional cleaning, and a joint move-out inspection. Disputes are common — photo/video evidence and a clear inventory list protect both sides.",
  },
  {
    id: "agent",
    question: "Should I use a rental agent?",
    questionTh: "ควรใช้เอเจนต์ไหม?",
    answer:
      "Agents save time for newcomers and often know buildings with foreign-friendly juristic offices. Fees are typically one month rent from landlord or tenant — confirm who pays before viewing.",
  },
  {
    id: "buy",
    question: "Rent first or buy a condo?",
    questionTh: "เช่าก่อนหรือซื้อเลย?",
    answer:
      "Most expats rent 6–12 months to learn neighborhoods, then buy if foreign quota is available. See our condo buying guide for ownership rules.",
  },
];

function FaqBlock() {
  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="rentals-faq-title"
    >
      <h2 id="rentals-faq-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-sm text-[#777777]">คำถามที่พบบ่อย — Rentals</p>
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

export function RentalsPage() {
  return (
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>

      <section
        className="relative min-h-[min(72vh,560px)] overflow-hidden"
        aria-labelledby="rentals-hero-title"
      >
        <Image
          src={livingImages.rentals}
          alt="Luxury rental interior in Pattaya"
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
                <span className="text-white/90">Rentals</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#D7CBBA] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6b5a48]">
            Housing
          </span>
          <h1
            id="rentals-hero-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Rentals | เช่าบ้าน
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Navigating rental contracts, deposits, and TM30 duties for condos and
            houses in Pattaya.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-[900px] px-4 sm:-mt-16 sm:px-6">
        <aside
          className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-xl ring-1 ring-[#B29475]/20 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8"
          aria-label="Rental listings consultation"
        >
          <div className="sm:flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
              Property Service
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-[#0A192F] sm:text-lg">
              Find verified rentals in your budget
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#777777]">
              Shortlist Jomtien, Pratumnak, and central Pattaya units with
              English contracts and TM30-compliant landlords.
            </p>
          </div>
          <Link
            href="/living"
            className="mt-5 inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-[#B29475] px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#B29475]/90 sm:mt-0 sm:w-auto"
          >
            View Listings
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        <section aria-labelledby="checklist-title">
          <h2 id="checklist-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
            Rental checklist
          </h2>
          <p className="mt-1 text-sm text-[#777777]">สิ่งที่ต้องตรวจก่อนเซ็นสัญญา</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {checklist.map(({ icon: Icon, title, titleTh, text }) => (
              <article
                key={title}
                className="flex gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B29475] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F]">{title}</h3>
                  <p className="text-xs font-medium text-[#B29475]">{titleTh}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#444748]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="rent-table-title">
          <h2 id="rent-table-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
            Indicative monthly rent
          </h2>
          <p className="mt-2 text-sm text-[#777777]">
            ค่าเช่าโดยประมาณ — furnished condos, 2025 market (varies by building)
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
                <tr>
                  <th className="px-4 py-3 sm:px-6">Area</th>
                  <th className="px-4 py-3 sm:px-6">Studio</th>
                  <th className="px-4 py-3 sm:px-6">2 BR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
                {rentRanges.map((row) => (
                  <tr key={row.area}>
                    <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">
                      {row.area}
                    </td>
                    <td className="px-4 py-3 sm:px-6">{row.studio}</td>
                    <td className="px-4 py-3 sm:px-6">{row.twoBed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FaqBlock />

        <section
          className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] px-6 py-8 text-center sm:px-10 sm:py-10"
          aria-labelledby="rentals-cta-title"
        >
          <h2 id="rentals-cta-title" className="text-xl font-bold text-[#0A192F] sm:text-2xl">
            Ready to tour rentals in Pattaya?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#444748]">
            Compare lease terms, or explore buying if you plan a long-term stay.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/living"
              className="inline-flex items-center justify-center rounded-lg bg-[#B29475] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#B29475]/90"
            >
              Browse Listings
            </Link>
            <Link
              href="/living/housing/condo-buying"
              className="inline-flex items-center justify-center rounded-lg border border-[#B29475] px-8 py-3.5 text-sm font-bold text-[#B29475] transition hover:bg-[#B29475]/10"
            >
              Condo buying guide →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
