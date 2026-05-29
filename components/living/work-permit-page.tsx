"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import type { LocalizedText } from "@/lib/i18n/text";
import {
  BadgeCheck,
  Building2,
  FileCheck,
  Laptop,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

function getRequirements(): { icon: LucideIcon; title: LocalizedText; body: LocalizedText }[] {
  return [
    {
      icon: Building2,
      title: L("Registered employer", "นายจ้างจดทะเบียน", "注册雇主", "Работодатель"),
      body: L(
        "Thai company with paid-up capital, tax filings, and valid office that can sponsor your permit.",
        "บริษัทไทยมีทุนจดทะเบียน ยื่นภาษี และที่ตั้งสำนักงานที่รับรอง work permit",
        "泰资公司须实缴资本、报税并有可担保的办公地址。",
        "Тайская компания с уставным капиталом и офисом для спонсорства.",
      ),
    },
    {
      icon: FileCheck,
      title: L("Valid non-immigrant visa", "วีซ่าที่ถูกต้อง", "有效非移民签证", "Виза Non-Immigrant"),
      body: L(
        "Typically Non-Immigrant B before work permit application at Labour Department.",
        "มักเป็น Non-Immigrant B ก่อนยื่น work permit ที่กรมแรงงาน",
        "通常需先有 Non-Immigrant B 再向劳工部申请工作证。",
        "Обычно Non-Immigrant B до подачи в Department of Labour.",
      ),
    },
    {
      icon: BadgeCheck,
      title: L("Role & qualifications", "ตำแหน่งและคุณสมบัติ", "职位与资质", "Должность"),
      body: L(
        "Job description, education, and experience must match Labour Office standards.",
        "ลักษณะงาน การศึกษา และประสบการณ์ต้องตรงมาตรฐานกรมแรงงาน",
        "职位描述、学历与经验须符合劳工厅标准。",
        "Описание должности и квалификация по нормам Labour Office.",
      ),
    },
    {
      icon: Stethoscope,
      title: L("Medical certificate", "ใบรับรองแพทย์", "体检证明", "Медсправка"),
      body: L(
        "Thai clinic or hospital medical form within the required timeframe.",
        "ใบตรวจจากคลินิกหรือโรงพยาบาลไทยภายในระยะเวลาที่กำหนด",
        "须在有效期内由泰国诊所或医院出具。",
        "Медформу из тайской клиники в срок.",
      ),
    },
  ];
}

function getSteps(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      step: 1,
      title: t(lang, L("Secure job offer", "ได้ข้อเสนองาน", "获得工作 offer", "Оффер")),
      note: t(
        lang,
        L("Signed employment contract in Thai/English.", "สัญญาจ้างสองภาษา", "泰英双语雇佣合同。", "Контракт на двух языках."),
      ),
    },
    {
      step: 2,
      title: t(lang, L("Non-B visa", "วีซ่า Non-B", "Non-B 签证", "Виза Non-B")),
      note: t(
        lang,
        L("Apply at Thai embassy or convert with legal support.", "ยื่นสถานทูตหรือแปลงวีซ่าผ่านทนาย", "在使馆申请或依法转换。", "В посольстве или конвертация."),
      ),
    },
    {
      step: 3,
      title: t(lang, L("Work permit", "ใบอนุญาตทำงาน", "工作证", "Work permit"),
      ),
      note: t(
        lang,
        L("Submit at Chonburi Labour Office with company documents.", "ยื่นที่กรมแรงงานชลบุรีพร้อมเอกสารบริษัท", "向春武里劳工部提交公司文件。", "Подача в Labour Office Chonburi."),
      ),
    },
    {
      step: 4,
      title: t(lang, L("Annual renewal", "ต่ออายุรายปี", "年度续签", "Ежегодное продление"),
      ),
      note: t(
        lang,
        L("Sync visa extension, 90-day report, and permit renewal.", "ประสานต่อวีซ่า รายงาน 90 วัน และ work permit", "同步签证延签、90 天报到与工作证续期。", "Виза, 90 дней и permit вместе."),
      ),
    },
  ];
}

const faqs = [
  faqEnTh(
    "nomad",
    "Can digital nomads use a standard work permit?",
    "Digital Nomad ใช้ work permit ปกติได้ไหม?",
    "Remote work may qualify under LTR or BOI schemes — not a classic employer-sponsored permit.",
    "ทำงานรีโมตอาจใช้ LTR หรือ BOI ไม่ใช่ work permit แบบนายจ้างสponsor ทั่วไป",
    "数字游民能用普通工作证吗？",
    "Digital nomad и work permit?",
  ),
  faqEnTh(
    "ratio",
    "What is the Thai-to-foreign employee ratio?",
    "อัตราส่วนคนไทยต่อต่างชาติ?",
    "Often four Thai staff per foreign permit (BOI firms may differ). HR verifies before filing.",
    "มัก 4 คนไทยต่อ 1 ต่างชาติ (บริษัท BOI อาจต่าง) HR ตรวจก่อนยื่น",
    "泰外籍员工比例？",
    "Соотношение тайцев и иностранцев?",
  ),
  faqEnTh(
    "change",
    "Can I change employers on the same permit?",
    "เปลี่ยนนายจ้างได้ไหม?",
    "New employer requires a new permit and often visa alignment. Working without update is a serious violation.",
    "นายจ้างใหม่ต้องยื่น work permit ใหม่ มักต้องจัดวีซ่าให้สอดคล้อง",
    "能换雇主不换证吗？",
    "Смена работодателя?",
  ),
];

export function WorkPermitPage() {
  const { language } = useLanguage();
  const h = {
    req: t(language, L("Core requirements", "เงื่อนไขหลัก", "核心要求", "Требования")),
    steps: t(language, L("Application process", "ขั้นตอน", "申请流程", "Процесс")),
    ltr: t(language, L("LTR & Digital Nomad pathway", "เส้นทาง LTR / Digital Nomad", "LTR 与数字游民通道", "LTR и digital nomad")),
    ltrBody: t(
      language,
      L(
        "Remote workers and wealthy global citizens may qualify for LTR with 10-year stay — separate from a classic employer work permit.",
        "ผู้มีรายได้สูงหรือทำงานรีโมตอาจใช้ LTR พำนัก 10 ปี แยกจาก work permit แบบนายจ้าง",
        "远程工作者与高净值人士可申请 LTR 十年居留，不同于雇主担保工作证。",
        "LTR на 10 лет — отдельно от классического work permit.",
      ),
    ),
    compare: t(language, L("Compare with Retirement Visa →", "เปรียบเทียบวีซ่าเกษียณ →", "对比退休签证 →", "Сравнить с retirement →")),
  };

  return (
    <LocalizedLivingPageShell
      shellKey="workPermit"
      heroImage={livingImages.workPermit}
      heroAlt="Work permit documents"
      ctaAriaLabel="Work permit legal consultation"
    >
      <section aria-labelledby="wp-req-title">
        <h2 id="wp-req-title" className={livingTheme.heading}>
          {h.req}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getRequirements().map((req) => (
            <article key={req.title.en} className={`p-5 ${livingTheme.card}`}>
              <div className={livingTheme.iconBox}>
                <req.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-[#0A192F]">{t(language, req.title)}</h3>
              <p className={`mt-2 ${livingTheme.body}`}>{t(language, req.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="wp-steps-title">
        <h2 id="wp-steps-title" className={livingTheme.heading}>
          {h.steps}
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {getSteps(language).map((s) => (
            <li key={s.step} className={`flex flex-col p-5 ${livingTheme.cardStatic}`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-3 font-bold text-[#0A192F]">{s.title}</h3>
              <p className={`mt-2 flex-1 ${livingTheme.body}`}>{s.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={livingTheme.accentPanel} aria-labelledby="ltr-title">
        <div className="flex items-start gap-4 text-left">
          <div className={livingTheme.iconBox}>
            <Laptop className="h-6 w-6" />
          </div>
          <div>
            <h2 id="ltr-title" className={livingTheme.headingSm}>
              {h.ltr}
            </h2>
            <p className={`mt-2 ${livingTheme.body}`}>{h.ltrBody}</p>
            <Link
              href="/living/visa/retirement"
              className="mt-4 inline-flex text-sm font-bold text-[#B29475] hover:underline"
            >
              {h.compare}
            </Link>
          </div>
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Work permit", "ใบอนุญาตทำงาน", "工作证", "Work permit")}
        titleId="wp-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
