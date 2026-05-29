"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import { Check } from "lucide-react";

export function CondoBuyingTransferDay() {
  const { language } = useLanguage();

  const items = [
    t(language, L("Passport with valid entry stamp or visa", "พาสปอร์ตพร้อมตราเข้า/วีซ่า", "护照及入境章/签证", "Паспорт и штамп")),
    t(language, L("FET form or bank credit note matching purchase amount", "FET หรือหนังสือธนาคารตรงยอดซื้อ", "FET 或银行证明与购房款一致", "FET / credit note")),
    t(language, L("Foreign quota letter from juristic person (recent)", "หนังสือโควตาจากนิติบุคคล (ใหม่)", "近期外资配额函", "Quota letter")),
    t(language, L("Signed SPA and Tor Dor 21 / อ.ช. 21 transfer form", "SPA ลงนาม และ ท.ด.21 / อ.ช.21", "已签 SPA 及过户表", "SPA и Tor Dor 21")),
    t(language, L("Cashier's cheques or arranged fee payment for taxes & transfer", "เช็คหรือชำระค่าธรรมเนียมและภาษี", "费用与税费付款安排", "Оплата пошлин")),
    t(
      language,
      L(
        "Power of Attorney if your lawyer attends on your behalf",
        "หนังสือมอบอำนาจหากทนายไปแทน",
        "律师代办需授权书",
        "Доверенность для юриста",
      ),
    ),
  ];

  return (
    <section aria-labelledby="transfer-day-title" className="mt-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
        {t(language, L("Transfer day", "วันโอน", "过户日", "День сделки"))}
      </p>
      <h2 id="transfer-day-title" className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl">
        {t(
          language,
          L(
            "What to bring to Chonburi Land Office",
            "เอกสารวันโอนที่สำนักงานที่ดินชลบุรี",
            "春武里土地厅过户携带材料",
            "Документы в Land Office Чонбури",
          ),
        )}
      </h2>
      <p className="mt-2 text-sm text-[#777777]">
        {t(
          language,
          L(
            "Registration usually takes 2–4 hours when documents are complete. You receive the Chanote with your name on transfer.",
            "การจดทะเบียนมัก 2–4 ชม. เมื่อเอกสารครบ ได้รับโฉนดชื่อคุณในวันโอน",
            "材料齐全通常 2–4 小时完成，当日领取 Chanote。",
            "2–4 часа при полном пакете; Chanote на ваше имя.",
          ),
        )}
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 text-sm text-[#444748]"
          >
            <Check className="h-5 w-5 shrink-0 text-[#B29475]" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
