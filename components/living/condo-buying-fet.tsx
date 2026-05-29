"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import { Banknote, XCircle } from "lucide-react";

export function CondoBuyingFet() {
  const { language } = useLanguage();

  const steps = [
    t(
      language,
      L(
        "Open a Thai bank account and wire the purchase price in foreign currency (USD, EUR, GBP, etc.) — do not convert to baht before sending.",
        "เปิดบัญชีไทย โอนราคาซื้อเป็นสกุลเงินต่างประเทศ — อย่าแลกเป็นบาทก่อนส่ง",
        "开立泰国账户，以外币电汇购房款——勿在汇出前兑换泰铢。",
        "Счёт в Таиланде, перевод в валюте, не в батах заранее.",
      ),
    ),
    t(
      language,
      L(
        'Use transfer reference: "For purchase of condominium unit [no.] at [project] for [name per passport]."',
        "ระบุในหมายเหตุการโอน: ซื้อคอนโด ห้อง [เลข] โครงการ [ชื่อ] ชื่อ [ตามพาสปอร์ต]",
        "汇款附言注明：购买 [项目] [房号] 公寓，买受人 [护照姓名]。",
        "Назначение перевода: покупка кондо, юнит, ФИО.",
      ),
    ),
    t(
      language,
      L(
        "After conversion, request the FET form (ธ.ท.3) or bank credit note from your Thai bank — required for Land Office registration.",
        "หลังแลกเงิน ขอ FET (ธ.ท.3) หรือหนังสือรับรองจากธนาคาร — ใช้จดทะเบียนที่ดิน",
        "入账后向泰国银行索取 FET（ธ.ท.3）或入账证明——土地厅登记必需。",
        "FET (Tor Tor 3) или credit note от банка.",
      ),
    ),
    t(
      language,
      L(
        "Allow 2–5 business days for the wire plus 1–2 days for the bank letter before scheduling transfer day.",
        "เผื่อโอน 2–5 วันทำการ + ออกหนังสือธนาคาร 1–2 วัน ก่อนนัดวันโอน",
        "电汇 2–5 个工作日 + 银行文件 1–2 天，再预约过户日。",
        "2–5 дней перевод + 1–2 дня документ.",
      ),
    ),
  ];

  const mistakes = [
    t(
      language,
      L("Sending baht instead of foreign currency", "ส่งเป็นบาทแทนสกุลต่างประเทศ", "汇出前已兑换泰铢", "Перевод уже в батах"),
    ),
    t(
      language,
      L("Cash deposits without overseas wire trail", "ฝากเงินสดไม่มีหลักฐานโอนจากต่างประเทศ", "现金存入无境外汇款记录", "Наличные без FET"),
    ),
    t(
      language,
      L("Transfer purpose missing “condominium purchase”", "ไม่ระบุวัตถุประสงค์ซื้อคอนโด", "附言未写明购公寓", "Без назначения «покупка кондо»"),
    ),
    t(
      language,
      L("Sender name does not match buyer (needs extra docs)", "ชื่อผู้โอนไม่ตรงผู้ซื้อ (ต้องเอกสารเพิ่ม)", "汇款人非买受人（需补充材料）", "Отправитель ≠ покупатель"),
    ),
  ];

  return (
    <section aria-labelledby="fet-title" className="mt-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
        {t(language, L("Funds from abroad", "เงินจากต่างประเทศ", "境外资金", "Средства из-за рубежа"))}
      </p>
      <h2 id="fet-title" className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl">
        {t(
          language,
          L(
            "FET form (Foreign Exchange Transaction)",
            "แบบ FET (ธ.ท.3)",
            "FET 外汇交易表",
            "FET (Tor Tor 3)",
          ),
        )}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[#777777]">
        {t(
          language,
          L(
            "Most foreign buyers qualify under Condominium Act §19 by proving purchase funds were remitted from abroad — no Thai visa required for this route.",
            "ผู้ซื้อต่างชาติส่วนใหญ่ใช้มาตรา 19 โดยนำเงินจากต่างประเทศ — ไม่จำเป็นต้องมีวีซ่าไทยสำหรับเส้นทางนี้",
            "多数外籍买家依公寓法第 19 条证明资金从境外汇入即可——此路径不要求泰国签证。",
            "Путь по §19 — перевод из-за рубежа, виза не обязательна.",
          ),
        )}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <div className="flex items-center gap-3">
            <Banknote className="h-6 w-6 text-[#B29475]" aria-hidden />
            <h3 className="font-bold text-[#0A192F]">
              {t(language, L("How to obtain FET", "ขั้นตอนขอ FET", "如何取得 FET", "Как получить FET"))}
            </h3>
          </div>
          <ol className="mt-4 space-y-3">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-[#444748]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B29475]/15 text-xs font-bold text-[#8a7358]">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border border-red-200/60 bg-red-50/50 p-6">
          <div className="flex items-center gap-3">
            <XCircle className="h-6 w-6 text-red-700" aria-hidden />
            <h3 className="font-bold text-[#0A192F]">
              {t(language, L("Common mistakes", "ข้อผิดพลาดที่พบบ่อย", "常见错误", "Ошибки"))}
            </h3>
          </div>
          <ul className="mt-4 space-y-2">
            {mistakes.map((item) => (
              <li key={item} className="text-sm text-[#444748]">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
