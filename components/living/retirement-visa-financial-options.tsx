"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import { Banknote, PiggyBank, Wallet } from "lucide-react";

function getOptions(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      icon: PiggyBank,
      title: t(lang, L("Lump sum (bank deposit)", "เงินฝากก้อน", "存款方式", "Депозит")),
      amount: "800,000 THB",
      body: t(
        lang,
        L(
          "Maintain at least 800,000 THB in a Thai bank account for at least 2 months before you apply. Funds should be traceable from an overseas source.",
          "ฝากอย่างน้อย 800,000 บาทในธนาคารไทยอย่างน้อย 2 เดือนก่อนยื่น เงินควรโอนจากต่างประเทศและตรวจสอบได้",
          "申请前在泰国银行账户存满至少 80 万泰铢并保持至少 2 个月，资金宜来自境外并可追溯。",
          "Не менее 800 000 THB на тайском счёте 2+ месяца; средства из-за рубежа.",
        ),
      ),
      docs: t(
        lang,
        L(
          "Updated passbook + bank letter (often within 7 days of application).",
          "สมุดบัญชี + หนังสือธนาคาร (มักไม่เกิน 7 วันก่อนยื่น)",
          "存折更新 + 银行证明（通常申请前 7 日内）。",
          "Выписка + письмо банка (часто за 7 дней).",
        ),
      ),
    },
    {
      icon: Wallet,
      title: t(lang, L("Monthly income", "รายได้รายเดือน", "月收入", "Доход")),
      amount: "65,000 THB",
      body: t(
        lang,
        L(
          "Prove a stable monthly income of at least 65,000 THB — pension, Social Security, or other regular payments.",
          "แสดงรายได้ประจำอย่างน้อย 65,000 บาท/เดือน — บำนาญ ประกันสังคม หรือรายได้ประจำอื่น",
          "证明月收入至少 6.5 万泰铢——养老金、社保或其他固定收入。",
          "Стабильный доход от 65 000 THB/мес. — пенсия и т.д.",
        ),
      ),
      docs: t(
        lang,
        L(
          "Embassy income letter in Thailand, or 12 months of Thai bank deposits showing 65,000 THB/month.",
          "หนังสือรายได้จากสถานทูต หรือสเตทเมนต์ 12 เดือนแสดงเงินเข้า 65,000 บาท/เดือน",
          "泰国使馆收入证明，或 12 个月泰铢入账流水。",
          "Справка посольства или 12 мес. выписки с 65 000 THB.",
        ),
      ),
    },
    {
      icon: Banknote,
      title: t(lang, L("Combined method", "วิธีรวม", "组合方式", "Комбинация")),
      amount: "800,000 THB",
      body: t(
        lang,
        L(
          "Deposit plus annual income that together total at least 800,000 THB — common when you do not hold the full lump sum year-round.",
          "เงินฝาก + รายได้ต่อปีรวมไม่น้อยกว่า 800,000 บาท — เหมาะเมื่อไม่ฝากเต็มจำนวนตลอดปี",
          "存款加年收入合计至少 80 万泰铢——适合无法全年维持全额存款者。",
          "Депозит + годовой доход = не менее 800 000 THB.",
        ),
      ),
      docs: t(
        lang,
        L(
          "Bank letter, income certificate, and statements showing how totals are met.",
          "หนังสือธนาคาร หนังสือรายได้ และสเตทเมนต์แสดงยอดรวม",
          "银行证明、收入证明及显示合计达标的流水。",
          "Письма банка и дохода + выписки.",
        ),
      ),
    },
  ];
}

export function RetirementVisaFinancialOptions() {
  const { language } = useLanguage();
  const options = getOptions(language);

  return (
    <section aria-labelledby="financial-options-title" className="mt-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
        {t(language, L("Finances", "การเงิน", "资金", "Финансы"))}
      </p>
      <h2
        id="financial-options-title"
        className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
      >
        {t(
          language,
          L(
            "Three ways to meet financial proof",
            "3 วิธีแสดงหลักฐานการเงิน",
            "三种资金证明方式",
            "Три способа подтвердить финансы",
          ),
        )}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[#777777]">
        {t(
          language,
          L(
            "You only need to qualify under one option. Immigration may verify account history — not just your current balance.",
            "เลือกได้เพียงหนึ่งวิธี — เจ้าหน้าที่อาจตรวจประวัติบัญชีย้อนหลัง ไม่ใช่แค่ยอดปัจจุบัน",
            "只需满足其中一种。移民局可能核查账户历史，而非仅看当前余额。",
            "Достаточно одного варианта; проверяют историю счёта.",
          ),
        )}
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {options.map((opt) => {
          const Icon = opt.icon;
          return (
            <article
              key={opt.title}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF7320]/10 text-[#c2410c]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <span className="text-xl font-bold tabular-nums text-[#0A192F]">
                  {opt.amount}
                </span>
              </div>
              <h3 className="mt-4 font-bold text-[#0A192F]">{opt.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#444748]">
                {opt.body}
              </p>
              <p className="mt-3 border-t border-[#e2e8f0] pt-3 text-xs text-[#777777]">
                <span className="font-semibold text-[#0A192F]">
                  {t(language, L("Documents:", "เอกสาร:", "材料：", "Документы:"))}
                </span>{" "}
                {opt.docs}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
