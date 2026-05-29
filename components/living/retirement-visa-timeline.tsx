"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Plane,
  type LucideIcon,
} from "lucide-react";

const STEP_COUNT = 4;

function getSteps(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      step: 1,
      title: t(lang, L("Gather Documents", "รวบรวมเอกสาร", "准备材料", "Документы")),
      duration: t(lang, L("1–2 weeks", "1–2 สัปดาห์", "1–2 周", "1–2 недели")),
      description: t(
        lang,
        L(
          "Passport, photos, bank statements, insurance, and Thai address proof.",
          "พาสปอร์ต รูป สเตทเมนต์ ประกัน และหลักฐานที่อยู่",
          "护照、照片、银行流水、保险与泰国地址证明。",
          "Паспорт, фото, выписки, страховка, адрес в Таиланде.",
        ),
      ),
      icon: FileText,
    },
    {
      step: 2,
      title: t(lang, L("Enter Thailand", "เข้าประเทศไทย", "入境泰国", "Въезд в Таиланд")),
      duration: t(lang, L("On arrival", "เมื่อถึง", "入境时", "По прибытии")),
      description: t(
        lang,
        L(
          "Arrive on an appropriate visa (often Non-O/O-A) or planned conversion with expert guidance.",
          "เข้าด้วยวีซ่าที่เหมาะสม หรือแปลงสถานะตามคำแนะนำผู้เชี่ยวชาญ",
          "持合适签证入境（常为 Non-O/O-A）或在专家指导下转换。",
          "Въезд с подходящей визой или конвертация с экспертом.",
        ),
      ),
      icon: Plane,
    },
    {
      step: 3,
      title: t(
        lang,
        L("Apply for Non-O Extension", "ยื่นขอต่ออายุ Non-O", "申请 Non-O 延期", "Продление Non-O"),
      ),
      duration: t(lang, L("Same day – 3 days", "วันเดียว – 3 วัน", "当天至 3 天", "В тот же день – 3 дня")),
      description: t(
        lang,
        L(
          "Submit at Chonburi Immigration with complete financial and medical evidence.",
          "ยื่นที่ Immigration ชลบุรีพร้อมหลักฐานการเงินและการแพทย์",
          "在春武里移民局提交完整资金与医疗证明。",
          "Подача в Immigration Чонбури с финансами и медициной.",
        ),
      ),
      icon: ClipboardCheck,
    },
    {
      step: 4,
      title: t(lang, L("90-Day Reporting", "รายงานตัว 90 วัน", "90 天报到", "Отчёт 90 дней")),
      duration: t(lang, L("Every 90 days", "ทุก 90 วัน", "每 90 天", "Каждые 90 дней")),
      description: t(
        lang,
        L(
          "Report your address every 90 days online or in person to stay compliant.",
          "รายงานที่อยู่ทุก 90 วันออนไลน์หรือด้วยตน",
          "每 90 天网上或现场报告住址以保持合规。",
          "Отчитывайтесь об адресе каждые 90 дней.",
        ),
      ),
      icon: Calendar,
    },
  ];
}

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
  duration,
  description,
  icon: Icon,
  index,
  isLast,
}: {
  step: number;
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
  index: number;
  isLast: boolean;
}) {
  return (
    <li
      className="visa-timeline-step group relative flex gap-4 lg:flex lg:h-full lg:flex-col lg:text-center"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center lg:hidden">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white shadow-md">
          {step}
        </div>
        {!isLast && (
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
  const { language } = useLanguage();
  const steps = getSteps(language);

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
            {t(language, L("Your journey", "เส้นทางของคุณ", "您的流程", "Ваш путь"))}
          </p>
          <h2
            id="timeline-title"
            className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            {t(
              language,
              L(
                "Step-by-Step Immigration Timeline",
                "ไทม์ไลน์ Immigration ทีละขั้น",
                "分步移民时间线",
                "Пошаговый таймлайн Immigration",
              ),
            )}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#444748]">
            {t(
              language,
              L(
                "From documents to 90-day reporting.",
                "จากเอกสารถึงรายงานตัว 90 วัน",
                "从材料到 90 天报到。",
                "От документов до отчёта 90 дней.",
              ),
            )}
          </p>
        </div>

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
            <TimelineCard
              key={item.step}
              {...item}
              index={index}
              isLast={index === STEP_COUNT - 1}
            />
          ))}
        </ol>

        <p className="relative mt-8 rounded-xl border border-[#B29475]/25 bg-white/50 px-4 py-3 text-center text-xs text-[#555]">
          {t(
            language,
            L(
              "Typical full process: 4–8 weeks with expert prep · Chonburi Immigration, Pattaya",
              "โดยทั่วไป 4–8 สัปดาห์เมื่อเตรียมเอกสารครบ · Immigration ชลบุรี พัทยา",
              "全程通常 4–8 周（专家协助）· 春武里移民局芭提雅",
              "Обычно 4–8 недель с подготовкой · Immigration Чонбури, Паттайя",
            ),
          )}
        </p>
      </div>
    </section>
  );
}
