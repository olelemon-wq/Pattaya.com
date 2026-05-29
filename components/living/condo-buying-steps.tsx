"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import {
  Banknote,
  ClipboardCheck,
  FileSearch,
  HandCoins,
  MapPin,
  Stamp,
  type LucideIcon,
} from "lucide-react";

const STEP_COUNT = 6;

function getSteps(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      step: 1,
      title: t(lang, L("Choose area & budget", "เลือกทำเลและงบ", "选区与预算", "Район и бюджет")),
      duration: t(lang, L("1–2 weeks", "1–2 สัปดาห์", "1–2 周", "1–2 недели")),
      description: t(
        lang,
        L(
          "Compare Beach, Jomtien, Pratumnak, Naklua. Set all-in budget including transfer fees.",
          "เทียบพัทยา จอมเทียน พระตำหนัก นาเกลือ รวมค่าโอนในงบ",
          "比较各区并计入过户费。",
          "Сравните районы и заложите пошлины.",
        ),
      ),
      icon: MapPin,
    },
    {
      step: 2,
      title: t(lang, L("Verify foreign quota", "ตรวจโควตาต่างชาติ", "核实外资配额", "Квота 49%")),
      duration: t(lang, L("Before deposit", "ก่อนมัดจำ", "付定金前", "До депозита")),
      description: t(
        lang,
        L(
          "Request juristic certificate and confirm unit is in 49% pool at Chonburi Land Office.",
          "ขอหนังสือนิติบุคคล ยืนยันโควตาที่สำนักงานที่ดิน",
          "向物业索取证明并在土地厅核实 49% 配额。",
          "Справка juristic person и Land Office.",
        ),
      ),
      icon: ClipboardCheck,
    },
    {
      step: 3,
      title: t(lang, L("Sale & purchase agreement", "สัญญาจะซื้อจะขาย", "买卖协议", "SPA")),
      duration: t(lang, L("1–3 weeks", "1–3 สัปดาห์", "1–3 周", "1–3 недели")),
      description: t(
        lang,
        L(
          "Lawyer-reviewed SPA, deposit schedule, completion date, and penalty clauses.",
          "ทนายตรวจ SPA งวดมัดจำ วันโอน และค่าปรับล่าช้า",
          "律师审阅 SPA、定金、过户日与违约条款。",
          "SPA с юристом, график депозитов.",
        ),
      ),
      icon: HandCoins,
    },
    {
      step: 4,
      title: t(lang, L("Due diligence", "ตรวจสอบก่อนซื้อ", "尽职调查", "Due diligence")),
      duration: t(lang, L("1–2 weeks", "1–2 สัปดาห์", "1–2 周", "1–2 недели")),
      description: t(
        lang,
        L(
          "Chanote, encumbrances, juristic fees, developer licence (if off-plan), and fresh quota letter.",
          "โฉนด ภาระผูกพัน ค่านิติบุคคล ใบอนุญาตผู้พัฒนา หนังสือโควตาใหม่",
          "产权证、负担、物业费、开发商许可、最新配额函。",
          "Chanote, обременения, CJP, квота.",
        ),
      ),
      icon: FileSearch,
    },
    {
      step: 5,
      title: t(lang, L("Wire funds & FET", "โอนเงินและ FET", "汇款与 FET", "FET")),
      duration: t(lang, L("~1 week", "~1 สัปดาห์", "约 1 周", "~1 неделя")),
      description: t(
        lang,
        L(
          "Transfer purchase price from abroad in foreign currency; obtain FET or bank credit note before transfer day.",
          "โอนราคาซื้อจากต่างประเทศ ขอ FET ก่อนวันโอน",
          "境外汇入购房款，过户前取得 FET。",
          "Перевод и FET до сделки.",
        ),
      ),
      icon: Banknote,
    },
    {
      step: 6,
      title: t(lang, L("Transfer at Land Office", "โอนที่กรมที่ดิน", "土地厅过户", "Передача в Land Office")),
      duration: t(lang, L("Transfer day", "วันโอน", "过户日", "День сделки")),
      description: t(
        lang,
        L(
          "Pay fees, register ownership, update juristic person and utilities.",
          "จ่ายค่าโอน จดกรรมสิทธิ์ อัปเดตนิติบุคคลและสาธารณูปโภค",
          "缴费登记产权，更新物业与水电。",
          "Пошлины, регистрация, juristic person.",
        ),
      ),
      icon: Stamp,
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

function StepCard({
  step,
  title,
  duration,
  description,
  icon: Icon,
  index,
}: {
  step: number;
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) {
  const total = STEP_COUNT;

  return (
    <li
      className="group relative flex gap-4 lg:flex lg:h-full lg:flex-col lg:text-center"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center lg:hidden">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white shadow-md">
          {step}
        </div>
        {index < total - 1 && (
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
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555] lg:text-center">{description}</p>
      </article>
    </li>
  );
}

export function CondoBuyingSteps() {
  const { language } = useLanguage();
  const steps = getSteps(language);

  return (
    <section
      aria-labelledby="condo-steps-title"
      className="overflow-hidden rounded-3xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 shadow-xl sm:p-8 lg:p-10"
    >
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B29475]">
          {t(language, L("Your purchase path", "เส้นทางการซื้อ", "购房路径", "Путь покупки"))}
        </p>
        <h2 id="condo-steps-title" className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, L("Step-by-Step Buying Timeline", "ไทม์ไลน์ซื้อคอนโด", "分步购房时间线", "Этапы покупки"))}
        </h2>
        <p className="mt-2 max-w-xl text-sm text-[#444748]">
          {t(
            language,
            L(
              "From choosing an area to Land Office transfer.",
              "จากเลือกทำเลถึงโอนที่กรมที่ดิน",
              "从选区到土地厅过户。",
              "От района до Land Office.",
            ),
          )}
        </p>

        <div className="relative mt-10 hidden lg:grid lg:grid-cols-6 lg:gap-4" aria-hidden>
          <div className="absolute left-[8%] right-[8%] top-5 h-1 overflow-hidden rounded-full bg-[#B29475]/20">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-[#B29475] via-[#B29475]/70 to-[#B29475]/40" />
          </div>
          {steps.map((item) => (
            <div key={item.step} className="flex justify-center">
              <StepNode step={item.step} />
            </div>
          ))}
        </div>

        <ol className="relative mt-8 space-y-0 lg:mt-4 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-6 xl:grid-cols-6">
          {steps.map((item, index) => (
            <StepCard key={item.step} {...item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
