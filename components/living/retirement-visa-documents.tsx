"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import { Check } from "lucide-react";

function getChecklist(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      group: t(
        lang,
        L("Identity & application", "ตัวตนและแบบฟอร์ม", "身份与表格", "Личность и формы"),
      ),
      items: [
        t(
          lang,
          L(
            "Passport valid at least 18 months with blank visa pages",
            "พาสปอร์ตอายุอย่างน้อย 18 เดือน และหน้าว่างสำหรับวีซ่า",
            "护照有效期至少 18 个月并有空白签证页",
            "Паспорт от 18 мес. и пустые страницы.",
          ),
        ),
        t(
          lang,
          L(
            "Completed visa application form(s) and recent 4×6 cm photos",
            "แบบฟอร์มวีซ่าและรูปถ่าย 4×6 ซม. ตามจำนวนที่กำหนด",
            "填写完整的签证申请表及近期 4×6 厘米照片",
            "Анкета и фото 4×6 см.",
          ),
        ),
        t(
          lang,
          L(
            "TM.7 / extension forms when applying inside Thailand",
            "แบบ TM.7 และแบบต่ออายุเมื่อยื่นในประเทศ",
            "在泰国内延期时填写 TM.7 等表格",
            "Формы TM.7 при продлении в Таиланде.",
          ),
        ),
      ],
    },
    {
      group: t(
        lang,
        L("Background & health", "ประวัติและสุขภาพ", "背景与健康", "Справки"),
      ),
      items: [
        t(
          lang,
          L(
            "Police clearance / certificate of no criminal record (usually valid 3 months, notarized)",
            "หนังสือรับรองความประพฤติ (มักอายุไม่เกิน 3 เดือน รับรองเอกสาร)",
            "无犯罪记录证明（通常 3 个月内有效并公证）",
            "Справка о несудимости (до 3 мес., нотариус).",
          ),
        ),
        t(
          lang,
          L(
            "Medical certificate confirming no prohibited diseases (3 months validity)",
            "ใบรับรองแพทย์ว่าไม่เป็นโรคต้องห้าม (อายุไม่เกิน 3 เดือน)",
            "医疗证明无禁止入境疾病（3 个月有效）",
            "Медсправка без запрещённых болезней (3 мес.).",
          ),
        ),
        t(
          lang,
          L(
            "Thai police clearance when converting or extending in Thailand (if required)",
            "ประวัติอาชญากรรมไทยเมื่อต่ออายุในประเทศ (ถ้าขอ)",
            "在泰延期时可能需泰国无犯罪证明",
            "Тайская справка при продлении (если требуют).",
          ),
        ),
      ],
    },
    {
      group: t(
        lang,
        L("Money & insurance", "เงินและประกัน", "资金与保险", "Деньги и страховка"),
      ),
      items: [
        t(
          lang,
          L(
            "Bank letter + statements proving 800,000 THB, income, or combined total",
            "หนังสือธนาคาร + สเตทเมนต์แสดง 800,000 บาท รายได้ หรือยอดรวม",
            "银行证明 + 流水显示 80 万存款、收入或合计",
            "Письмо банка + выписки: 800 000 THB или доход.",
          ),
        ),
        t(
          lang,
          L(
            "Health insurance certificate: inpatient 400,000 THB + outpatient 40,000 THB minimum (approved insurer)",
            "ใบรับรองประกัน: IP 400,000 บาท + OP 40,000 บาท ขึ้นไป (บริษัทที่รับรอง)",
            "保险证明：住院至少 40 万 + 门诊至少 4 万泰铢（认可保险公司）",
            "Страховка: 400 000 стационар + 40 000 амбулаторно.",
          ),
        ),
      ],
    },
    {
      group: t(
        lang,
        L("Address in Thailand", "ที่อยู่ในประเทศ", "泰国地址", "Адрес в Таиланде"),
      ),
      items: [
        t(
          lang,
          L(
            "Proof of residence: rental agreement, condo title, or TM.30 / house registration",
            "หลักฐานที่อยู่: สัญญาเช่า โฉนด หรือ TM.30 / ทะเบียนบ้าน",
            "居住证明：租约、产权或 TM.30 / 户口登记",
            "Адрес: аренда, TM.30, регистрация.",
          ),
        ),
        t(
          lang,
          L(
            "Utility bills or landlord letter matching Immigration records",
            "บิลค่าน้ำไฟ หรือหนังสือจากเจ้าของบ้านตรงกับที่ Immigration บันทึก",
            "水电账单或房东证明与移民局登记一致",
            "Счета ЖКХ или письмо арендодателя.",
          ),
        ),
      ],
    },
  ];
}

export function RetirementVisaDocuments() {
  const { language } = useLanguage();
  const checklist = getChecklist(language);

  return (
    <section aria-labelledby="documents-title" className="mt-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
        {t(language, L("Checklist", "เช็กลิสต์", "清单", "Чеклист"))}
      </p>
      <h2
        id="documents-title"
        className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
      >
        {t(
          language,
          L(
            "Documents to prepare",
            "เอกสารที่ต้องเตรียม",
            "需准备的材料",
            "Необходимые документы",
          ),
        )}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[#777777]">
        {t(
          language,
          L(
            "Embassy applications (O-A) and in-country extensions may ask for slightly different sets — confirm with Chonburi Immigration or your consulate.",
            "ยื่นที่สถานทูต (O-A) กับต่ออายุในประเทศอาจขอคนละชุด — ยืนยันกับ Immigration ชลบุรีหรือสถานกงสุล",
            "使馆申请 O-A 与境内延期材料略有不同——请向春武里移民局或领馆确认。",
            "O-A в посольстве и продление в Таиланде — уточняйте список.",
          ),
        )}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {checklist.map((section) => (
          <div
            key={section.group}
            className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-5 sm:p-6"
          >
            <h3 className="font-bold text-[#0A192F]">{section.group}</h3>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#444748]">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#B29475]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
