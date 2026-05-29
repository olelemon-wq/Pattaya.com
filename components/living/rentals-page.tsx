"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { ClipboardList, FileText, Home, Shield } from "lucide-react";

function getChecklist() {
  return [
    iconEnTh(
      FileText,
      "Written lease",
      "สัญญาเช่า",
      "Thai + English contract with rent, term, deposit, maintenance, and termination.",
      "สัญญาสองภาษา ระบุค่าเช่า ระยะเวลา มัดจำ และการเลิกสัญญา",
      "书面租约",
      "Договор аренды",
    ),
    iconEnTh(
      Shield,
      "Deposit terms",
      "เงินประกัน",
      "Often 2 months deposit + 1 month advance. Document move-in photos and meters.",
      "มัก 2 เดือนประกัน + 1 เดือนล่วงหน้า ถ่ายรูปและมิเตอร์ตอนเข้าพัก",
      "押金条款",
      "Залог",
    ),
    iconEnTh(
      ClipboardList,
      "TM30 reporting",
      "รายงานตัว TM30",
      "Landlord must file TM30 within 24 hours. Keep a copy for Immigration.",
      "เจ้าของต้องแจ้ง TM30 ภายใน 24 ชม. เก็บสำเนาไว้ต่อตม.",
      "TM30 报备",
      "TM30",
    ),
    iconEnTh(
      Home,
      "Utilities & fees",
      "ค่าส่วนกลาง",
      "Confirm who pays electricity, water, internet, and common fees.",
      "ยืนยันผู้จ่ายค่าไฟ น้ำ อินเทอร์เน็ต และค่าส่วนกลาง",
      "水电与物业费",
      "Коммуналка",
    ),
  ];
}

function getRentRanges(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      area: t(lang, L("Pattaya Beach / Central", "พัทยากลาง", "芭提雅海滩/市中心", "Pattaya Beach")),
      studio: "฿8k–15k",
      twoBed: "฿15k–28k",
    },
    {
      area: t(lang, L("Jomtien & Dongtan", "จอมเทียน", "仲天", "Jomtien")),
      studio: "฿10k–18k",
      twoBed: "฿18k–35k",
    },
    {
      area: t(lang, L("Pratumnak Hill", "พระตำหนัก", "帕塔姆纳克山", "Pratumnak")),
      studio: "฿12k–22k",
      twoBed: "฿22k–45k",
    },
    {
      area: t(lang, L("Naklua / Wong Amat", "นาเกลือ", "那库拉", "Naklua")),
      studio: "฿10k–20k",
      twoBed: "฿20k–40k",
    },
  ];
}

const faqs = [
  faqEnTh(
    "deposit",
    "How do I get my deposit back?",
    "ขอเงินประกันคืนอย่างไร?",
    "Give notice per contract, clean professionally, and do a joint move-out inspection with photo evidence.",
    "แจ้งล่วงหน้าตามสัญญา ทำความสะอาด และตรวจร่วมตอนย้ายออก พร้อมหลักฐานภาพ",
    "如何退回押金？",
    "Как вернуть залог?",
  ),
  faqEnTh(
    "agent",
    "Should I use a rental agent?",
    "ควรใช้เอเจนต์ไหม?",
    "Agents save time and know foreign-friendly buildings. Confirm who pays the fee before viewing.",
    "เอเจนต์ช่วยประหยัดเวลา ยืนยันผู้จ่ายค่านายหน้าก่อนดูห้อง",
    "要不要用中介？",
    "Нужен ли агент?",
  ),
  faqEnTh(
    "buy",
    "Rent first or buy a condo?",
    "เช่าก่อนหรือซื้อเลย?",
    "Most expats rent 6–12 months to learn areas, then buy if foreign quota is available.",
    "ส่วนใหญ่เช่า 6–12 เดือนก่อน แล้วค่อยซื้อถ้าโควตาพร้อม",
    "先租还是先买？",
    "Сначала аренда или покупка?",
  ),
];

export function RentalsPage() {
  const { language } = useLanguage();
  const h = {
    checklist: t(language, L("Rental checklist", "เช็กลิสต์เช่า", "租房清单", "Чеклист аренды")),
    checklistSub: t(
      language,
      L("Before signing", "ก่อนเซ็นสัญญา", "签约前", "Перед подписанием"),
    ),
    rent: t(language, L("Indicative monthly rent", "ค่าเช่าโดยประมาณ", "参考月租", "Примерная аренда")),
    rentSub: t(
      language,
      L("Furnished condos, 2025 market", "คอนโดพร้อมอยู่ ตลาด 2025", "精装公寓，2025 市场", "Меблированные кондо, 2025"),
    ),
    area: t(language, L("Area", "ทำเล", "区域", "Район")),
    studio: t(language, L("Studio", "สตูดิโอ", "单间", "Студия")),
    twoBr: t(language, L("2 BR", "2 ห้องนอน", "两卧", "2 спальни")),
  };

  return (
    <LocalizedLivingPageShell
      shellKey="rentals"
      heroImage={livingImages.rentals}
      heroAlt="Luxury rental interior in Pattaya"
      ctaAriaLabel="Rental listings consultation"
    >
      <section aria-labelledby="checklist-title">
        <h2 id="checklist-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {h.checklist}
        </h2>
        <p className="mt-1 text-sm text-[#777777]">{h.checklistSub}</p>
        <div className="mt-6">
          <LivingIconCards items={getChecklist()} />
        </div>
      </section>

      <section aria-labelledby="rent-table-title">
        <h2 id="rent-table-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {h.rent}
        </h2>
        <p className="mt-2 text-sm text-[#777777]">{h.rentSub}</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{h.area}</th>
                <th className="px-4 py-3 sm:px-6">{h.studio}</th>
                <th className="px-4 py-3 sm:px-6">{h.twoBr}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {getRentRanges(language).map((row) => (
                <tr key={row.area}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{row.area}</td>
                  <td className="px-4 py-3 sm:px-6">{row.studio}</td>
                  <td className="px-4 py-3 sm:px-6">{row.twoBed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Rentals", "เช่าที่พัก", "租房", "Аренда")}
        titleId="rentals-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
