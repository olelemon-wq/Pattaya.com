import { Building2, FileSearch, Scale, type LucideIcon } from "lucide-react";

const requirements: {
  icon: LucideIcon;
  title: string;
  titleTh: string;
  highlight: string;
  body: string;
  detail: string;
}[] = [
  {
    icon: Scale,
    title: "49% Foreign Quota",
    titleTh: "โควตาต่างชาติ",
    highlight: "49%",
    body: "Only units within the building’s registered foreign quota can transfer freehold to non-Thais. Verify availability before paying a deposit.",
    detail: "ขอหนังสือรับรองจากนิติบุคคลอาคารชุดและตรวจที่กรมที่ดินก่อนทำสัญญา",
  },
  {
    icon: Building2,
    title: "Condominium Act",
    titleTh: "พ.ร.บ.อาคารชุด",
    highlight: "Freehold",
    body: "Foreign freehold applies to condo units only — not land, houses, or villas. Leasehold structures are separate agreements.",
    detail: "กรรมสิทธิ์ห้องชุดเท่านั้น — บ้าน/ที่ดินต้องใช้สิทธิ์เช่าหรือโครงสร้างอื่น",
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    titleTh: "ตรวจสอบก่อนซื้อ",
    highlight: "Must-do",
    body: "Review juristic person books, common fees, sinking fund, developer track record, and outstanding encumbrances at the Land Office.",
    detail: "ตรวจภาระหนี้ ค่าส่วนกลาง และสัญญาจะซื้อจะขายกับทนายความที่รู้ Pattaya",
  },
];

export function CondoBuyingRequirements() {
  return (
    <section aria-labelledby="condo-req-title">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
            Legal basics
          </p>
          <h2
            id="condo-req-title"
            className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            What every buyer should know
          </h2>
          <p className="mt-1 text-sm text-[#777777]">
            สิ่งที่ต้องรู้ก่อนซื้อคอนโดในพัทยา
          </p>
        </div>
        <span className="rounded-full border border-[#B29475]/30 bg-[#D7CBBA] px-3 py-1 text-xs font-semibold text-[#6b5a48]">
          Very High Priority
        </span>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {requirements.map((req, index) => (
          <article
            key={req.title}
            className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition duration-300 hover:border-[#D7CBBA] hover:shadow-lg"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#B29475]/5 transition group-hover:bg-[#B29475]/10"
              aria-hidden
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B29475] text-white shadow-md transition group-hover:bg-[#D7CBBA]">
                <req.icon className="h-6 w-6" />
              </div>
              <span className="rounded-lg bg-[#B29475] px-2.5 py-1 text-lg font-bold tabular-nums text-white">
                {req.highlight}
              </span>
            </div>
            <h3 className="relative mt-5 text-lg font-bold text-[#0A192F]">
              {req.title}
            </h3>
            <p className="relative text-xs font-medium text-[#B29475]">
              {req.titleTh}
            </p>
            <p className="relative mt-3 text-sm leading-relaxed text-[#444748]">
              {req.body}
            </p>
            <p className="relative mt-2 border-t border-[#e2e8f0] pt-3 text-xs text-[#777777]">
              {req.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
