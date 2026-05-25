import {
  ClipboardCheck,
  HandCoins,
  MapPin,
  Stamp,
  type LucideIcon,
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Choose area & budget",
    titleTh: "เลือกทำเลและงบ",
    duration: "1–2 weeks",
    description:
      "Compare Pattaya Beach, Jomtien, Pratumnak, and Naklua for lifestyle, commute, and resale liquidity. Set all-in budget including transfer fees.",
    icon: MapPin,
  },
  {
    step: 2,
    title: "Verify foreign quota",
    titleTh: "ตรวจโควตาต่างชาติ",
    duration: "Before deposit",
    description:
      "Request juristic person certificate and confirm the unit is in the 49% foreign pool at Chonburi Land Office.",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Sale & purchase agreement",
    titleTh: "สัญญาจะซื้อจะขาย",
    duration: "1–3 weeks",
    description:
      "Lawyer-reviewed SPA, deposit schedule, completion date, furniture inventory, and penalty clauses for developer delay.",
    icon: HandCoins,
  },
  {
    step: 4,
    title: "Transfer at Land Office",
    titleTh: "โอนกรรมสิทธิ์",
    duration: "Transfer day",
    description:
      "Pay transfer fees, withholding tax (if applicable), and register ownership. Update juristic person records and utilities.",
    icon: Stamp,
  },
] as const;

function StepNode({ step }: { step: number }) {
  return (
    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white shadow-[0_0_0_4px_rgba(178,148,117,0.35)] ring-4 ring-[#D7CBBA]">
      {step}
    </div>
  );
}

function StepCard({
  step,
  title,
  titleTh,
  duration,
  description,
  icon: Icon,
  index,
}: (typeof steps)[number] & { index: number }) {
  return (
    <li
      className="group relative flex gap-4 lg:flex lg:h-full lg:flex-col lg:text-center"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center lg:hidden">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white shadow-md">
          {step}
        </div>
        {index < steps.length - 1 && (
          <span
            className="my-1 min-h-[2rem] w-0.5 flex-1 bg-gradient-to-b from-[#B29475] to-[#B29475]/30"
            aria-hidden
          />
        )}
      </div>

      <article className="flex min-h-0 min-w-0 flex-1 flex-col rounded-2xl border border-white/10 bg-white p-5 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl lg:mt-6 lg:h-full">
        <div className="flex items-start gap-3 lg:flex-col lg:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A192F]/5 text-[#0A192F] transition group-hover:bg-[#B29475]/15 group-hover:text-[#B29475]">
            <Icon className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1 lg:w-full">
            <span className="inline-flex rounded-full bg-[#B29475]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#8a7358]">
              {duration}
            </span>
            <h3 className="mt-2 text-base font-bold text-[#0A192F]">{title}</h3>
            <p className="text-xs font-medium text-[#B29475]">{titleTh}</p>
          </div>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555] lg:text-center">
          {description}
        </p>
      </article>
    </li>
  );
}

export function CondoBuyingSteps() {
  return (
    <section
      aria-labelledby="condo-steps-title"
      className="overflow-hidden rounded-3xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 shadow-xl sm:p-8 lg:p-10"
    >
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B29475]">
          Your purchase path
        </p>
        <h2
          id="condo-steps-title"
          className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
        >
          Step-by-Step Buying Timeline
        </h2>
        <p className="mt-2 max-w-xl text-sm text-[#444748]">
          ขั้นตอนซื้อคอนโด — จากเลือกทำเลถึงโอนที่กรมที่ดิน
        </p>

        <div
          className="relative mt-10 hidden lg:grid lg:grid-cols-4 lg:gap-6"
          aria-hidden
        >
          <div className="absolute left-[12.5%] right-[12.5%] top-5 h-1 overflow-hidden rounded-full bg-[#B29475]/20">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-[#B29475] via-[#B29475]/70 to-[#B29475]/40" />
          </div>
          {steps.map((item) => (
            <div key={item.step} className="flex justify-center">
              <StepNode step={item.step} />
            </div>
          ))}
        </div>

        <ol className="relative mt-8 space-y-0 lg:mt-4 lg:grid lg:grid-cols-4 lg:items-stretch lg:gap-6">
          {steps.map((item, index) => (
            <StepCard key={item.step} {...item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
