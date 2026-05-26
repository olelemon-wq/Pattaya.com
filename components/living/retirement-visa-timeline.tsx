import {
  Calendar,
  ClipboardCheck,
  FileText,
  Plane,
  type LucideIcon,
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Gather Documents",
    titleTh: "รวบรวมเอกสาร",
    duration: "1–2 weeks",
    description:
      "Passport, photos, bank statements, insurance certificate, criminal record (if required), and Thai address proof.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Enter Thailand",
    titleTh: "เข้าประเทศไทย",
    duration: "On arrival",
    description:
      "Arrive on an appropriate visa (often Non-Immigrant O or O-A from your home country embassy, or planned conversion with expert guidance).",
    icon: Plane,
  },
  {
    step: 3,
    title: "Apply for Non-O Extension",
    titleTh: "ยื่นขอต่ออายุ Non-O",
    duration: "Same day – 3 days",
    description:
      "Submit your retirement extension at Chonburi Immigration (Pattaya/Jomtien) with complete financial and medical evidence.",
    icon: ClipboardCheck,
  },
  {
    step: 4,
    title: "90-Day Reporting",
    titleTh: "รายงานตัวทุก 90 วัน",
    duration: "Every 90 days",
    description:
      "Report your address every 90 days online or in person to remain compliant for the full one-year stay.",
    icon: Calendar,
  },
] as const;

function StepNode({ step }: { step: number }) {
  return (
    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white shadow-[0_0_0_4px_rgba(178,148,117,0.35)] ring-4 ring-[#D7CBBA]">
      {step}
    </div>
  );
}

function TimelineCard({
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
      className="visa-timeline-step group relative flex gap-4 lg:flex lg:h-full lg:flex-col lg:text-center"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Mobile vertical rail */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white shadow-md">
          {step}
        </div>
        {index < steps.length - 1 && (
          <span
            className="my-1 w-0.5 flex-1 min-h-[2rem] bg-gradient-to-b from-[#B29475] to-[#B29475]/30"
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

export function RetirementVisaTimeline() {
  return (
    <section
      aria-labelledby="timeline-title"
      className="isolate overflow-hidden rounded-3xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 shadow-xl sm:p-8 lg:p-10"
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B29475]/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#B29475]/15 blur-3xl"
          aria-hidden
        />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B29475]">
            Your journey
          </p>
          <h2
            id="timeline-title"
            className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            Step-by-Step Immigration Timeline
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#444748]">
            ขั้นตอนการดำเนินการ — จากเอกสารถึงรายงานตัว 90 วัน
          </p>
        </div>

        {/* Desktop progress track */}
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
            <TimelineCard key={item.step} {...item} index={index} />
          ))}
        </ol>

        <p className="relative mt-8 rounded-xl border border-[#B29475]/25 bg-white/50 px-4 py-3 text-center text-xs text-[#555]">
          Typical full process:{" "}
          <span className="font-semibold text-[#0A192F]">4–8 weeks</span> with
          expert preparation · Chonburi Immigration, Pattaya
        </p>
      </div>
    </section>
  );
}
