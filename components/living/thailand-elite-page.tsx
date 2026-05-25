import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { livingImages } from "@/lib/design/living-images";
import {
  ChevronDown,
  Crown,
  Globe,
  Plane,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tiers = [
  {
    name: "Easy Access",
    term: "5 years",
    fee: "From ฿600,000",
    perks: "Airport fast track, government liaison, annual health check",
  },
  {
    name: "Exclusive",
    term: "10 years",
    fee: "From ฿1,000,000",
    perks: "Priority lanes, golf & spa privileges, dedicated Elite staff",
  },
  {
    name: "Ultimate",
    term: "20 years",
    fee: "From ฿2,000,000",
    perks: "Maximum privileges, family options, premium concierge",
  },
];

const benefits: { icon: LucideIcon; title: string; titleTh: string; text: string }[] =
  [
    {
      icon: Plane,
      title: "Airport VIP",
      titleTh: "บริการสนามบิน",
      text: "Fast-track immigration and lounge access at major Thai airports.",
    },
    {
      icon: Globe,
      title: "Long-stay visa",
      titleTh: "วีซ่าพำนักระยะยาว",
      text: "Multi-year permission to stay with simplified 90-day reporting support.",
    },
    {
      icon: Crown,
      title: "Concierge",
      titleTh: "คอนเซียร์จ",
      text: "Dedicated Elite team for government services, licenses, and lifestyle requests.",
    },
    {
      icon: Sparkles,
      title: "Lifestyle perks",
      titleTh: "สิทธิพิเศษ",
      text: "Partner discounts on hotels, golf, spas, and selected medical networks.",
    },
  ];

const faqs = [
  {
    id: "who",
    question: "Who is Thailand Elite best for?",
    questionTh: "เหมาะกับใคร?",
    answer:
      "High-net-worth individuals, frequent visitors, and retirees who want a premium long-stay solution without managing standard visa extensions themselves. Pattaya members often split time between beach living and Bangkok airport access.",
  },
  {
    id: "quota",
    question: "Can I work or buy property on Elite?",
    questionTh: "ทำงานหรือซื้อคอนโดได้ไหม?",
    answer:
      "Elite is a privilege membership — employment still requires a work permit and proper visa category. Property purchase follows standard foreign ownership rules; our property partners can run quota checks separately.",
  },
  {
    id: "family",
    question: "Can family members join?",
    questionTh: "ครอบครัวเข้าร่วมได้ไหม?",
    answer:
      "Dependent add-ons are available on higher tiers. Spouses and children need separate applications and fees — we coordinate family packages with Thailand Privilege Card Co., Ltd.",
  },
];

function FaqBlock() {
  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="elite-faq-title"
    >
      <h2 id="elite-faq-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-sm text-[#777777]">คำถามที่พบบ่อย — Thailand Elite</p>
      <div className="mt-6 divide-y divide-[#e2e8f0]">
        {faqs.map((faq, index) => (
          <details key={faq.id} className="group py-4 first:pt-0 last:pb-0" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 pr-2">
                <span className="block font-semibold text-[#0A192F]">{faq.question}</span>
                <span className="mt-0.5 block text-xs text-[#777777]">{faq.questionTh}</span>
              </span>
              <span
                className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#F8FAFC] text-[#0A192F] transition duration-200 group-open:rotate-180 group-open:border-[#B29475] group-open:bg-[#B29475] group-open:text-white"
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

export function ThailandElitePage() {
  return (
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>

      <section
        className="relative min-h-[min(72vh,560px)] overflow-hidden"
        aria-labelledby="elite-hero-title"
      >
        <Image
          src={livingImages.thailandElite}
          alt="Thailand Elite visa lifestyle"
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
                <span className="text-white/90">Thailand Elite</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#D7CBBA] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6b5a48]">
            Visa & Immigration
          </span>
          <h1
            id="elite-hero-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Thailand Elite | Elite Visa
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            The ultimate 5 to 20 year visa solution with concierge-level service
            and exclusive privileges for long-term residents.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-[900px] px-4 sm:-mt-16 sm:px-6">
        <aside
          className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-xl ring-1 ring-[#B29475]/20 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8"
          aria-label="Elite membership consultation"
        >
          <div className="sm:flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
              Elite Service
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-[#0A192F] sm:text-lg">
              Compare tiers &amp; apply with expert guidance
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#777777]">
              We help Pattaya residents choose the right membership, prepare
              documents, and coordinate with Thailand Privilege Card processing.
            </p>
          </div>
          <Link
            href="/living"
            className="mt-5 inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-[#B29475] px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#B29475]/90 sm:mt-0 sm:w-auto"
          >
            Apply Now / Free Consultation
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        <section aria-labelledby="tiers-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
                Membership
              </p>
              <h2 id="tiers-title" className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl">
                Popular tiers
              </h2>
              <p className="mt-1 text-sm text-[#777777]">
                แพ็กเกจยอดนิยม — ค่าธรรมเนียมและสิทธิ์โดยสรุป
              </p>
            </div>
            <Star className="h-8 w-8 text-[#B29475]" aria-hidden />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition hover:border-[#D7CBBA] hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#0A192F]">{tier.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#B29475]">{tier.term}</p>
                <p className="mt-3 text-2xl font-bold tabular-nums text-[#0A192F]">{tier.fee}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#444748]">{tier.perks}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="benefits-title">
          <h2 id="benefits-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
            Key benefits
          </h2>
          <p className="mt-1 text-sm text-[#777777]">สิทธิประโยชน์หลักสำหรับสมาชิก</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, titleTh, text }) => (
              <div
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
              </div>
            ))}
          </div>
        </section>

        <FaqBlock />

        <section
          className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] px-6 py-8 text-center sm:px-10 sm:py-10"
          aria-labelledby="elite-cta-title"
        >
          <h2 id="elite-cta-title" className="text-xl font-bold text-[#0A192F] sm:text-2xl">
            Ready for concierge-level residency?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#444748]">
            Book a free tier comparison for Pattaya-based applicants and frequent
            U-Tapao / Suvarnabhumi travelers.
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
