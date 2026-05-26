import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingTheme } from "@/lib/design/living-theme";
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
      className={`relative z-10 scroll-mt-24 ${livingTheme.panel}`}
      aria-labelledby="elite-faq-title"
    >
      <h2 id="elite-faq-title" className={livingTheme.heading}>
        Frequently Asked Questions
      </h2>
      <p className={`mt-1 ${livingTheme.muted}`}>คำถามที่พบบ่อย — Thailand Elite</p>
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
            <p className={`mt-3 ${livingTheme.body}`}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ThailandElitePage() {
  return (
    <LivingPageShell
      heroImage={livingImages.thailandElite}
      heroAlt="Thailand Elite visa lifestyle"
      badge="Visa & Immigration"
      breadcrumbLeaf="Thailand Elite"
      title="Thailand Elite | Elite Visa"
      subtitle="The ultimate 5 to 20 year visa solution with concierge-level service and exclusive privileges for long-term residents."
      ctaEyebrow="Elite Service"
      ctaTitle="Compare tiers & apply with expert guidance"
      ctaBody="We help Pattaya residents choose the right membership, prepare documents, and coordinate with Thailand Privilege Card processing."
      ctaButton="Apply Now / Free Consultation"
      ctaAriaLabel="Elite membership consultation"
      bottomTitle="Ready for concierge-level residency?"
      bottomBody="Book a free tier comparison for Pattaya-based applicants and frequent U-Tapao / Suvarnabhumi travelers."
      bottomPrimary={{ label: "Get Free Consultation", href: "/living" }}
    >
      <section aria-labelledby="tiers-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={livingTheme.eyebrow}>Membership</p>
            <h2 id="tiers-title" className={`mt-1 ${livingTheme.heading}`}>
              Popular tiers
            </h2>
            <p className={`mt-1 ${livingTheme.muted}`}>
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
              <p className={`mt-3 ${livingTheme.body}`}>{tier.perks}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="benefits-title">
        <h2 id="benefits-title" className={livingTheme.heading}>
          Key benefits
        </h2>
        <p className={`mt-1 ${livingTheme.muted}`}>สิทธิประโยชน์หลักสำหรับสมาชิก</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, titleTh, text }) => (
            <div key={title} className={`flex gap-4 p-5 ${livingTheme.card}`}>
              <div className={livingTheme.iconBox}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F]">{title}</h3>
                <p className="text-xs font-medium text-[#B29475]">{titleTh}</p>
                <p className={`mt-2 ${livingTheme.body}`}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FaqBlock />
    </LivingPageShell>
  );
}
