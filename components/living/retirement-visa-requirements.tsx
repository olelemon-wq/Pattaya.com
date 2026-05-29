"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import {
  Activity,
  FileCheck,
  Info,
  Landmark,
  Shield,
  User,
  type LucideIcon,
} from "lucide-react";

function getRequirements(lang: import("@/lib/i18n/languages").LanguageCode) {
  const items: {
    icon: LucideIcon;
    title: string;
    highlight: string;
    body: string;
    detail: string;
  }[] = [
    {
      icon: User,
      title: t(lang, L("Age Requirement", "อายุขั้นต่ำ", "年龄要求", "Возраст")),
      highlight: "50+",
      body: t(
        lang,
        L(
          "Applicants must be 50 years or older at the time of application.",
          "ผู้สมัครต้องมีอายุ 50 ปีขึ้นไป ณ วันยื่นคำขอ",
          "申请时须年满 50 周岁。",
          "Возраст 50+ на дату подачи.",
        ),
      ),
      detail: t(
        lang,
        L(
          "Age verified with passport biodata page.",
          "ยืนยันอายุด้วยหน้าพาสปอร์ต",
          "以护照资料页核实年龄。",
          "По данным паспорта.",
        ),
      ),
    },
    {
      icon: Landmark,
      title: t(
        lang,
        L("Financial Requirements", "เงินทุนการเงิน", "资金要求", "Финансы"),
      ),
      highlight: "800K THB",
      body: t(
        lang,
        L(
          "800,000 THB in a Thai bank for 2+ months, monthly income of 65,000 THB+, OR a combined deposit + income totaling 800,000 THB.",
          "เงิน 800,000 บาทในธนาคารไทย 2 เดือน รายได้ 65,000 บาท/เดือน หรือฝาก+รายได้รวม 800,000 บาท",
          "泰国银行存 80 万泰铢满 2 个月、月收入 6.5 万泰铢以上，或存款+收入合计 80 万泰铢。",
          "800 000 THB на счёте 2+ мес., доход 65 000+ или комбинация 800 000 THB.",
        ),
      ),
      detail: t(
        lang,
        L(
          "Bank letter and statements required.",
          "ต้องมีหนังสือธนาคารและสเตทเมนต์",
          "需银行证明与流水。",
          "Нужны выписка и письмо банка.",
        ),
      ),
    },
    {
      icon: Activity,
      title: t(
        lang,
        L("Medical Insurance", "ประกันสุขภาพ", "医疗保险", "Страховка"),
      ),
      highlight: t(lang, L("Required", "จำเป็น", "必需", "Обязательно")),
      body: t(
        lang,
        L(
          "Valid health insurance meeting Immigration minimums for your entire stay.",
          "ประกันที่ตรงเกณฑ์ Immigration ตลอดระยะเวลาพำนัก",
          "整个停留期符合移民局最低要求的有效保险。",
          "Страховка на весь срок пребывания по нормам Immigration.",
        ),
      ),
      detail: t(
        lang,
        L(
          "Inpatient 400,000 THB + outpatient 40,000 THB minimum from an approved Thai or OIC-recognised insurer.",
          "IP 400,000 บาท + OP 40,000 บาท ขึ้นไป จากบริษัทที่ Immigration รับรอง",
          "住院至少 40 万 + 门诊至少 4 万泰铢，须为认可保险公司。",
          "Стационар 400 000 + амбулаторно 40 000 THB, одобренный страховщик.",
        ),
      ),
    },
    {
      icon: FileCheck,
      title: t(lang, L("Passport validity", "อายุพาสปอร์ต", "护照有效期", "Паспорт")),
      highlight: "18 mo",
      body: t(
        lang,
        L(
          "Passport must be valid at least 18 months when applying for O-A at an embassy.",
          "พาสปอร์ตต้องมีอายุอย่างน้อย 18 เดือนเมื่อยื่น O-A ที่สถานทูต",
          "在使馆申请 O-A 时护照有效期至少 18 个月。",
          "Для O-A в посольстве — паспорт от 18 месяцев.",
        ),
      ),
      detail: t(
        lang,
        L(
          "Keep blank pages for visa stamps and re-entry permits.",
          "เหลือหน้าว่างสำหรับตราวีซ่าและ re-entry",
          "保留空白页用于签证与再入境许可。",
          "Оставьте страницы для штампов.",
        ),
      ),
    },
    {
      icon: Shield,
      title: t(
        lang,
        L("Police & medical certs", "ประวัติและใบแพทย์", "无犯罪与医疗证明", "Справки"),
      ),
      highlight: t(lang, L("3 mo", "3 เดือน", "3 个月", "3 мес.")),
      body: t(
        lang,
        L(
          "Certificate of no criminal record and medical certificate from your home country (notarized), usually valid 3 months.",
          "หนังสือรับรองความประพฤติและใบแพทย์จากประเทศเดิม (รับรองเอกสาร) มักอายุ 3 เดือน",
          "原籍国无犯罪与医疗证明（公证），通常 3 个月有效。",
          "Справки из страны гражданства (нотариус), 3 мес.",
        ),
      ),
      detail: t(
        lang,
        L(
          "Thai police clearance may be required for in-country extensions.",
          "ต่ออายุในประเทศอาจขอประวัติอาชญากรรมไทย",
          "境内延期可能需泰国无犯罪证明。",
          "При продлении — тайская справка.",
        ),
      ),
    },
  ];
  return items;
}

export function RetirementVisaRequirements() {
  const { language } = useLanguage();
  const requirements = getRequirements(language);

  return (
    <section aria-labelledby="requirements-title">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
            {t(language, L("Eligibility", "คุณสมบัติ", "资格", "Критерии"))}
          </p>
          <h2
            id="requirements-title"
            className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            {t(language, L("Core Requirements", "ข้อกำหนดหลัก", "核心要求", "Основные требования"))}
          </h2>
          <p className="mt-1 text-sm text-[#777777]">
            {t(
              language,
              L(
                "Check before you apply for a retirement extension in Pattaya.",
                "ตรวจสอบก่อนยื่นต่ออายุเกษียณในพัทยา",
                "在芭提雅申请退休签延期前先核对。",
                "Проверьте перед подачей в Паттайе.",
              ),
            )}
          </p>
        </div>
        <span className="rounded-full border border-[#FF7320]/30 bg-[#FF7320]/10 px-3 py-1 text-xs font-semibold text-[#c2410c]">
          {t(language, L("Very High Priority", "ความสำคัญสูงมาก", "高优先级", "Высокий приоритет"))}
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {requirements.map((req, index) => {
          const Icon = req.icon;
          return (
            <article
              key={req.title}
              className="visa-req-card group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition duration-300 hover:border-[#D7CBBA] hover:shadow-lg"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#FF7320]/5 transition group-hover:bg-[#FF7320]/10"
                aria-hidden
              />
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B29475] text-white shadow-md transition group-hover:bg-[#D7CBBA]">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-lg bg-[#B29475] px-2.5 py-1 text-lg font-bold tabular-nums text-white">
                  {req.highlight}
                </span>
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-[#0A192F]">
                {req.title}
              </h3>
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
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#B29475]" aria-hidden />
        {t(
          language,
          L(
            "Requirements may change per Immigration notices. Confirm with an official source or our consultants before applying.",
            "เกณฑ์อาจเปลี่ยนตามประกาศ Immigration — ยืนยันก่อนยื่น",
            "要求可能随移民局公告调整，申请前请核实。",
            "Требования могут меняться — уточняйте перед подачей.",
          ),
        )}
      </p>
    </section>
  );
}
