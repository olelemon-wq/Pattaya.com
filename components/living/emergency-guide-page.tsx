"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import type { LocalizedText } from "@/lib/i18n/text";
import Link from "next/link";

function getContacts(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      service: t(lang, L("Emergency (all services)", "ฉุกเฉิน (ทุกบริการ)", "紧急（全服务）", "Экстренные службы")),
      number: "1669",
      note: t(lang, L("Ambulance and rescue", "รถพยาบาลและกู้ภัย", "救护与救援", "Скорая и спасение")),
    },
    {
      service: t(lang, L("Tourist Police", "ตำรวจท่องเที่ยว", "旅游警察", "Tourist Police")),
      number: "1155",
      note: t(lang, L("English support", "ภาษาอังกฤษ", "英语支持", "Английский")),
    },
    {
      service: t(lang, L("Police (general)", "ตำรวจทั่วไป", "警察", "Полиция")),
      number: "191",
      note: t(lang, L("Crime and immediate threats", "อาชญากรรมและภัยทันที", "犯罪与紧急威胁", "Преступления")),
    },
    {
      service: t(lang, L("Fire", "ดับเพลิง", "消防", "Пожарные")),
      number: "199",
      note: t(lang, L("Fire and rescue", "ไฟและกู้ภัย", "火灾救援", "Пожар")),
    },
    {
      service: t(lang, L("Bangkok Hospital Pattaya", "โรงพยาบาลกรุงเทพพัทยา", "曼谷医院芭提雅", "Bangkok Hospital")),
      number: "038 259 999",
      note: t(lang, L("24/7 ER — North Pattaya", "ER 24 ชม. — พัทยาเหนือ", "24 小时急诊", "ER 24/7")),
    },
    {
      service: t(lang, L("Phyathai Hospital Pattaya", "พญาไท พัทยา", "帕亚泰芭提雅", "Phyathai")),
      number: "033 296 999",
      note: t(lang, L("ER and specialists", "ER และแพทย์เฉพาะทาง", "急诊与专科", "ER и специалисты")),
    },
  ];
}

function getScenarios(): { title: LocalizedText; steps: LocalizedText }[] {
  return [
    {
      title: L("Medical emergency", "ฉุกเฉินทางการแพทย์", "医疗急救", "Медицина"),
      steps: L(
        "Call 1669 or taxi to nearest ER with passport. Contact insurer pre-auth if conscious.",
        "โทร 1669 หรือแท็กซี่ไป ER พร้อมพาสปอร์ต แจ้งประกัน pre-auth ถ้าไหว",
        "拨打 1669 或打车至最近急诊，携带护照；清醒时联系保险预授权。",
        "1669 или такси в ER с паспортом; pre-auth страховки.",
      ),
    },
    {
      title: L("Traffic accident", "อุบัติเหตุจราจร", "交通事故", "ДТП"),
      steps: L(
        "Do not leave scene; call 191 and 1669. Photograph vehicles and licenses.",
        "อย่าออกจากที่เกิดเหตุ โทร 191 และ 1669 ถ่ายรูปรถและใบขับขี่",
        "勿离开现场；拨 191、1669；拍摄车辆与证件。",
        "Не покидайте место; 191 и 1669; фото.",
      ),
    },
    {
      title: L("Theft or assault", "ขโมยหรือทำร้าย", "盗窃或袭击", "Кража / нападение"),
      steps: L(
        "Tourist Police 1155 for English report; keep copy for embassy and insurance.",
        "ตำรวจท่องเที่ยว 1155 รายงานภาษาอังกฤษ เก็บสำเนาให้สถานทูตและประกัน",
        "旅游警察 1155 英文报案；保留副本供使馆与保险。",
        "1155 — отчёт на английском.",
      ),
    },
    {
      title: L("Fire / flood", "ไฟไหม้ / น้ำท่วม", "火灾/洪水", "Пожар / наводнение"),
      steps: L(
        "199 for fire; move to stairwell, alert juristic person in condos.",
        "199 ไฟไหม้ ไปบันได แจ้งนิติบุคคลในคอนโด",
        "火灾拨 199；走楼梯，通知物业。",
        "199; лестница; управляющая компания.",
      ),
    },
  ];
}

const faqs = [
  faqEnTh(
    "embassy",
    "When should I contact my embassy?",
    "เมื่อไหร่ควรติดต่อสถานทูต?",
    "Serious injury, death, arrest, or lost passport warrant consular help. Keep digital passport scans secure.",
    "บาดเจ็บสาหัส เสียชีวิต ถูกจับ หรือพาสปอร์ตหาย ติดต่อสถานทูต เก็บสำเนาพาสปอร์ตในคลาวด์",
    "何时联系使馆？",
    "Посольство?",
  ),
  faqEnTh(
    "insurance",
    "Will hospitals treat me without insurance?",
    "ไม่มีประกันรักษาได้ไหม?",
    "Emergency care is provided; deposit may be required for admission. Carry policy hotlines.",
    "รักษาฉุกเฉินได้ อาจต้องมัดจำเมื่อรับเข้า พกเบอร์ประกัน",
    "无保险能就医吗？",
    "Без страховки?",
  ),
];

export function EmergencyGuidePage() {
  const { language } = useLanguage();
  const h = {
    contacts: t(language, L("Key contacts", "เบอร์สำคัญ", "重要电话", "Контакты")),
    service: t(language, L("Service", "บริการ", "服务", "Служба")),
    number: t(language, L("Number", "เบอร์", "号码", "Номер")),
    notes: t(language, L("Notes", "หมายเหตุ", "备注", "Примечания")),
    what: t(language, L("What to do", "ควรทำอย่างไร", "如何应对", "Что делать")),
    hospitals: t(language, L("Full hospitals directory →", "รายชื่อโรงพยาบาล →", "完整医院目录 →", "Больницы →")),
  };

  return (
    <LocalizedLivingPageShell shellKey="emergencyGuide" heroImage={livingImages.safetyGuide} heroAlt="Emergency guide">
      <section aria-labelledby="emergency-contacts">
        <h2 id="emergency-contacts" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {h.contacts}
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{h.service}</th>
                <th className="px-4 py-3 sm:px-6">{h.number}</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">{h.notes}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {getContacts(language).map((c) => (
                <tr key={c.number + c.service}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{c.service}</td>
                  <td className="px-4 py-3 font-bold tabular-nums text-[#B29475] sm:px-6">{c.number}</td>
                  <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="emergency-scenarios">
        <h2 id="emergency-scenarios" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {h.what}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getScenarios().map((s) => (
            <article key={s.title.en} className="rounded-xl border border-[#e2e8f0] bg-white p-5">
              <h3 className="font-bold text-[#0A192F]">{t(language, s.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#444748]">{t(language, s.steps)}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm">
          <Link href="/living/healthcare/hospitals" className="font-bold text-[#B29475] hover:underline">
            {h.hospitals}
          </Link>
        </p>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Emergency", "ฉุกเฉิน", "紧急", "Экстренная помощь")}
      />
    </LocalizedLivingPageShell>
  );
}
