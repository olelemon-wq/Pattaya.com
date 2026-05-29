"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { Car, FileText, MapPin, Shield } from "lucide-react";

function getSteps(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      step: 1,
      title: t(lang, L("Residence proof", "หลักฐานที่อยู่", "居住证明", "Подтверждение адреса")),
      note: t(lang, L("TM30, lease, or house registration.", "TM30 สัญญาเช่า หรือทะเบียนบ้าน", "TM30、租约或户口。", "TM30, аренда или house book.")),
    },
    {
      step: 2,
      title: t(lang, L("Medical certificate", "ใบตรวจสุขภาพ", "体检证明", "Медсправка")),
      note: t(lang, L("From approved clinic — same day in Pattaya.", "จากคลินิกที่อนุมัติ — ทำได้ในพัทยา", "认可诊所当日可办。", "В одобренной клинике в Паттайе.")),
    },
    {
      step: 3,
      title: t(lang, L("DLT test", "สอบขับขี่", "陆运厅考试", "Экзамен DLT")),
      note: t(lang, L("Colour-blindness + reaction at DLT.", "ทดสอบตาบอดสีและปฏิกิริยา ที่กรมขนส่ง", "色盲与反应测试。", "Тест зрения и реакции.")),
    },
    {
      step: 4,
      title: t(lang, L("License issued", "รับใบขับขี่", "领证", "Получение прав")),
      note: t(lang, L("Thai license valid 5 years (car); motorcycle separate.", "ใบขับขี่ไทย 5 ปี (รถยนต์) มอไซค์แยกชั้น", "泰驾照汽车 5 年；摩托另考。", "Права на 5 лет; мото отдельно.")),
    },
  ];
}

function getTips() {
  return [
    iconEnTh(
      MapPin,
      "Pattaya traffic",
      "การจราจรพัทยา",
      "Motorbikes dominate; watch U-turns on Beach Road and Soi traffic.",
      "มอไซค์เยอะ ระวังกลับรถ Beach Road และซอย",
      "芭提雅交通",
      "Движение",
    ),
    iconEnTh(
      Shield,
      "Insurance",
      "ประกันรถ",
      "Por Ror Bor plus optional class 1+ for collision cover.",
      "พ.ร.บ. และประกันชั้น 1+ เพิ่มความคุ้มครอง",
      "车险",
      "Страховка",
    ),
    iconEnTh(
      FileText,
      "International permit",
      "ใบขับขี่สากล",
      "IDP valid only short-term; long-stay should convert at DLT Chonburi.",
      "IDP ใช้ระยะสั้น อยู่ระยะยาวควรแปลงที่กรมขนส่งชลบุรี",
      "国际驾照",
      "IDP",
    ),
    iconEnTh(
      Car,
      "Rental cars",
      "เช่ารถ",
      "Carry passport, license, and card hold. Inspect damage photos before leaving.",
      "พกพาสปอร์ต ใบขับขี่ และมัดจำบัตร ถ่ายรูความเสียหายก่อนรับรถ",
      "租车",
      "Аренда авто",
    ),
  ];
}

const faqs = [
  faqEnTh(
    "convert",
    "Can I convert my home country license?",
    "แปลงใบขับขี่เดิมได้ไหม?",
    "Many nationals skip practical test with home license + embassy translation + medical cert at Chonburi DLT.",
    "หลายสัญชาติข้ามสอบขับถ้ามีใบเดิม แปลสถานทูต และใบตรวจสุขภาพ",
    "能否转换本国驾照？",
    "Конвертация иностранных прав?",
  ),
  faqEnTh(
    "fine",
    "What if police stop me?",
    "ตำรวจจับได้อย่างไร?",
    "Carry license and insurance. Request official receipt if paying a fine on-site.",
    "พกใบขับขี่และประกัน ขอใบเสร็จทางการหากจ่ายค่าปรับ",
    "被警察拦下怎么办？",
    "Остановка полицией?",
  ),
];

export function DrivingPage() {
  const { language } = useLanguage();

  return (
    <LocalizedLivingPageShell shellKey="driving" heroImage={livingImages.driving} heroAlt="Driving in Thailand">
      <section aria-labelledby="driving-steps">
        <h2 id="driving-steps" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, L("License process", "ขั้นตอนใบขับขี่", "驾照流程", "Получение прав"))}
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {getSteps(language).map((s) => (
            <li key={s.step} className="rounded-xl border border-[#e2e8f0] bg-white p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-3 font-bold text-[#0A192F]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#444748]">{s.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="driving-tips">
        <h2 id="driving-tips" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, L("Pattaya driving tips", "เคล็ดลับขับในพัทยา", "芭提雅驾驶贴士", "Советы"))}
        </h2>
        <div className="mt-6">
          <LivingIconCards items={getTips()} />
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Driving", "ขับขี่", "驾驶", "Вождение")}
      />
    </LocalizedLivingPageShell>
  );
}
