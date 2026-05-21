import { Activity, Info, Landmark, User, type LucideIcon } from "lucide-react";

const requirements: {
  icon: LucideIcon;
  title: string;
  titleTh: string;
  highlight: string;
  body: string;
  detail: string;
}[] = [
  {
    icon: User,
    title: "Age Requirement",
    titleTh: "อายุขั้นต่ำ",
    highlight: "50+",
    body: "Applicants must be 50 years of age or older at the time of application.",
    detail: "บุคคลอายุ 50 ปีขึ้นไป ณ วันยื่นคำขอ",
  },
  {
    icon: Landmark,
    title: "Financial Requirements",
    titleTh: "เงินทุนการเงิน",
    highlight: "800K THB",
    body: "800,000 THB in a Thai bank account for 2+ months before applying, OR monthly income of at least 65,000 THB.",
    detail: "ฝากเงิน 800,000 บาทในธนาคารไทย หรือแสดงรายได้ 65,000 บาท/เดือน",
  },
  {
    icon: Activity,
    title: "Medical Insurance",
    titleTh: "ประกันสุขภาพ",
    highlight: "Required",
    body: "Valid health insurance meeting Thai Immigration coverage minimums for your entire stay.",
    detail: "กรมธรรม์ประกันสุขภาพที่ตรงตามเกณฑ์ตลอดระยะเวลาพำนัก",
  },
];

export function RetirementVisaRequirements() {
  return (
    <section aria-labelledby="requirements-title">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Eligibility
          </p>
          <h2
            id="requirements-title"
            className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            Core Requirements
          </h2>
          <p className="mt-1 text-sm text-[#777777]">
            เกณฑ์หลักสำหรับวีซ่าเกษียณ — ตรวจสอบก่อนยื่นคำขอ
          </p>
        </div>
        <span className="rounded-full border border-[#FF7320]/30 bg-[#FF7320]/10 px-3 py-1 text-xs font-semibold text-[#c2410c]">
          Very High Priority
        </span>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {requirements.map((req, index) => {
          const Icon = req.icon;
          return (
            <article
              key={req.title}
              className="visa-req-card group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition duration-300 hover:border-[#FF7320]/40 hover:shadow-lg"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#FF7320]/5 transition group-hover:bg-[#FF7320]/10"
                aria-hidden
              />
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A192F] text-white shadow-md transition group-hover:bg-[#FF7320]">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-lg bg-[#0A192F] px-2.5 py-1 text-lg font-bold tabular-nums text-white">
                  {req.highlight}
                </span>
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-[#0A192F]">
                {req.title}
              </h3>
              <p className="relative text-xs font-medium text-[#2563EB]">
                {req.titleTh}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-[#444748]">
                {req.body}
              </p>
              <p className="relative mt-2 border-t border-[#e2e8f0] pt-3 text-xs text-[#777777]">
                {req.detail}
              </p>
            </article>
          );
        })}
      </div>

      <p className="mt-6 flex items-start gap-2 rounded-xl bg-[#F8FAFC] px-4 py-3 text-xs text-[#777777] ring-1 ring-[#e2e8f0]">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" aria-hidden />
        Requirements may change per Immigration notices. Always confirm with an
        official source or our visa consultants before applying.
      </p>
    </section>
  );
}
