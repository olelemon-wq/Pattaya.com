"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { Calendar, Globe, Mail, Monitor } from "lucide-react";
import Link from "next/link";

function getMethods() {
  return [
    iconEnTh(
      Monitor,
      "Online (TM47)",
      "ออนไลน์",
      "Immigration Bureau online reporting — fastest if address history is current.",
      "รายงานออนไลน์ตม. — เร็วถ้าที่อยู่ตรงกับระบบ",
      "在线 (TM47)",
      "Онлайн TM47",
    ),
    iconEnTh(
      Mail,
      "By mail",
      "ส่งไปรษณีย์",
      "Registered mail with TM47 form — keep proof of posting.",
      "ส่งลงทะเบียนพร้อมแบบ TM47 เก็บหลักฐานการส่ง",
      "邮寄",
      "Почтой",
    ),
    iconEnTh(
      Globe,
      "In person",
      "ยื่นด้วยตน",
      "Chonburi Immigration (Pattaya) — passport, previous receipt, TM30 if requested.",
      "ตม.ชลบุรี (พัทยา) — พาสปอร์ต ใบเสร็จครั้งก่อน TM30 ถ้าขอ",
      "现场办理",
      "Лично",
    ),
    iconEnTh(
      Calendar,
      "Deadline",
      "กำหนดเวลา",
      "Report within 90 days of last entry or report — late fines (~฿2,000).",
      "รายงานภายใน 90 วันนับจากเข้าหรือรายงานครั้งล่าสุด — ปรับล่าช้า ~฿2,000",
      "截止日期",
      "Срок",
    ),
  ];
}

function getOnlineSteps(lang: import("@/lib/i18n/languages").LanguageCode): string[] {
  return [
    t(lang, L("Confirm address matches TM30 / house book data.", "ยืนยันที่อยู่ตรง TM30/ทะเบียนบ้าน", "确认地址与 TM30/户口一致。", "Адрес = TM30 / house book.")),
    t(lang, L("Log in to Immigration online reporting portal.", "เข้าพอร์ทัลรายงานตัวออนไลน์ตม.", "登录移民局在线报到系统。", "Портал Immigration.")),
    t(lang, L("Complete TM47 and submit before day 90.", "กรอก TM47 และส่งก่อนครบ 90 วัน", "填写 TM47 并于第 90 天前提交。", "TM47 до 90-го дня.")),
    t(lang, L("Save confirmation PDF or screenshot.", "เก็บ PDF หรือแคปหน้าจอยืนยัน", "保存确认 PDF 或截图。", "Сохраните подтверждение.")),
    t(lang, L("Set calendar reminder for next cycle (day 85).", "ตั้งเตือนวันที่ 85 รอบถัดไป", "设置下次提醒（第 85 天）。", "Напоминание на 85-й день.")),
  ];
}

const faqs = [
  faqEnTh(
    "tm30",
    "How is TM30 related?",
    "TM30 เกี่ยวอะไร?",
    "Landlords file TM30 when you check in. Mismatches cause delays — keep copies.",
    "เจ้าของแจ้ง TM30 ตอนเข้าพัก ที่อยู่ไม่ตรงทำให้ล่าช้า เก็บสำเนา",
    "TM30 有何关系？",
    "TM30?",
  ),
  faqEnTh(
    "travel",
    "Does leaving Thailand reset the clock?",
    "ออกนอกประเทศแล้วนับใหม่ไหม?",
    "Re-entry on a new stamp starts a new 90-day period. Track passport stamps.",
    "เข้าใหม่ด้วยตราประทับใหม่ เริ่มนับ 90 วันใหม่ ดูตราในพาสปอร์ต",
    "离境会重置吗？",
    "Сброс при выезде?",
  ),
  faqEnTh(
    "agent",
    "Can someone report for me?",
    "ให้คนอื่นยื่นแทนได้ไหม?",
    "Power of attorney possible in person; online must be your account.",
    "มอบอำนาจยื่นแทนได้ที่สำนักงาน ออนไลน์ต้องใช้บัญชีตัวเอง",
    "能代报吗？",
    "Подать за меня?",
  ),
];

export function NinetyDayReportPage() {
  const { language } = useLanguage();
  const rulesNote = t(
    language,
    L("Rules change — verify on", "กฎเปลี่ยนได้ — ตรวจที่", "规定可能变更 — 请查阅", "Правила меняются — см."),
  );
  const visaGuides = t(language, L("visa guides", "คู่มือวีซ่า", "签证指南", "гайды по визам"));
  const orAgent = t(language, L("or with a licensed agent.", "หรือตัวแทนที่มีใบอนุญาต", "或咨询持牌代理。", "или лицензированного агента."));

  return (
    <LocalizedLivingPageShell shellKey="ninetyDay" heroImage={livingImages.ninetyDay} heroAlt="Immigration documents">
      <section aria-labelledby="report-methods">
        <h2 id="report-methods" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, L("Reporting methods", "ช่องทางรายงานตัว", "报到方式", "Способы отчёта"))}
        </h2>
        <div className="mt-6">
          <LivingIconCards items={getMethods()} />
        </div>
      </section>

      <section aria-labelledby="report-steps">
        <h2 id="report-steps" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, L("Step-by-step (online)", "ขั้นตอนออนไลน์", "在线步骤", "Онлайн по шагам"))}
        </h2>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[#444748]">
          {getOnlineSteps(language).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-[#777777]">
          {rulesNote}{" "}
          <Link href="/living/visa/retirement" className="text-[#B29475] hover:underline">
            {visaGuides}
          </Link>{" "}
          {orAgent}
        </p>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "90-day report", "รายงาน 90 วัน", "90 天报到", "Отчёт 90 дней")}
      />
    </LocalizedLivingPageShell>
  );
}
