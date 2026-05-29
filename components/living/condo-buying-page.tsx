"use client";

import { CondoBuyingDueDiligence } from "@/components/living/condo-buying-due-diligence";
import { CondoBuyingFaq } from "@/components/living/condo-buying-faq";
import { CondoBuyingFet } from "@/components/living/condo-buying-fet";
import { CondoBuyingQuotaDetail } from "@/components/living/condo-buying-quota-detail";
import { CondoBuyingRequirements } from "@/components/living/condo-buying-requirements";
import { CondoBuyingSteps } from "@/components/living/condo-buying-steps";
import { CondoBuyingTransferDay } from "@/components/living/condo-buying-transfer-day";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { condoBuyingImages } from "@/lib/design/condo-buying-images";
import { livingTheme } from "@/lib/design/living-theme";
import { L, t } from "@/lib/i18n/living-helpers";
import type { LocalizedText } from "@/lib/i18n/text";

function getAreas(): { name: LocalizedText; note: LocalizedText }[] {
  return [
    {
      name: L("Pattaya Beach & Central", "พัทยากลาง", "芭提雅海滩/市中心", "Pattaya Beach"),
      note: L(
        "Walkable nightlife, older stock, strong short-term rental demand.",
        "เดินได้ สต็อกเก่า ปล่อยเช่าระยะสั้นแรง",
        "步行便利、房龄较老、短租需求强。",
        "Пешая доступность, аренда.",
      ),
    },
    {
      name: L("Jomtien & Dongtan", "จอมเทียน", "仲天", "Jomtien"),
      note: L(
        "Family beaches, newer towers, popular with long-stay expats.",
        "ชายหาดครอบครัว ตึกใหม่ expat ระยะยาวนิยม",
        "亲子海滩、新楼、长租外籍人士多。",
        "Семейный пляж, новые башни.",
      ),
    },
    {
      name: L("Pratumnak Hill", "พระตำหนัก", "帕塔姆纳克山", "Pratumnak"),
      note: L(
        "Premium views, quieter vibe, boutique and luxury towers.",
        "วิวดี เงียบ ตึกบูติกและหรู",
        "景观佳、安静、精品与豪宅。",
        "Виды, тише, премиум.",
      ),
    },
    {
      name: L("Naklua & Wong Amat", "นาเกลือ", "那库拉", "Naklua"),
      note: L(
        "North Pattaya upswing, marina proximity, growing foreign interest.",
        "พัทยาเหนือเติบโต ใกล้มารีน่า ต่างชาติสนใจมากขึ้น",
        "北芭提雅升温、近码头、外籍买家增多。",
        "Север Паттайи, марина.",
      ),
    },
  ];
}

function getCostRows(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      item: t(lang, L("Transfer fee", "ค่าโอน", "过户费", "Пошлина")),
      approx: t(lang, L("2% of appraised value", "2% ของราคาประเมิน", "评估价 2%", "2% оценки")),
      notes: t(lang, L("Often split with seller in SPA", "แบ่งกับผู้ขายในสัญญา", "SPA 中常与卖方分摊", "Делят в SPA")),
    },
    {
      item: t(lang, L("Sinking fund (one-off)", "กองทุนสำรอง", "维修基金（一次性）", "Sinking fund")),
      approx: "฿300–800 / sqm",
      notes: t(lang, L("Paid to juristic on transfer", "จ่ายนิติบุคคลวันโอน", "过户时付物业", "Juristic person")),
    },
    {
      item: t(lang, L("Common fees", "ค่าส่วนกลาง", "物业费", "Common fees")),
      approx: "฿40–80 / sqm / month",
      notes: t(lang, L("Varies by building", "ต่างกันตามอาคาร", "因楼盘而异", "Зависит от здания")),
    },
    {
      item: t(lang, L("Stamp duty (seller)", "อากรแสตมป์ (ผู้ขาย)", "印花税（卖方）", "Гербовый сбор")),
      approx: "0.5%",
      notes: t(
        lang,
        L("If seller owned 5+ years (instead of SBT)", "ถ้าถือ 5 ปีขึ้นไป แทน ภ.ธ.3.3", "持有 5 年以上（替代 SBT）", "Если >5 лет"),
      ),
    },
    {
      item: t(lang, L("Specific Business Tax (seller)", "ภ.ธ.3.3 (ผู้ขาย)", "特定业务税（卖方）", "SBT")),
      approx: "3.3%",
      notes: t(
        lang,
        L("If seller held under 5 years", "ถ้าถือน้อยกว่า 5 ปี", "持有不足 5 年", "Если <5 лет"),
      ),
    },
    {
      item: t(lang, L("Withholding tax (seller)", "ภาษีหัก ณ ที่จ่าย", "预扣税（卖方）", "Удержание")),
      approx: "1–3%",
      notes: t(lang, L("Progressive by seller type", "ตามประเภทผู้ขาย", "按卖方类型累进", "По типу продавца")),
    },
    {
      item: t(lang, L("Mortgage registration", "จดจำนอง", "抵押登记", "Ипотека")),
      approx: "1%",
      notes: t(lang, L("If financing with Thai bank", "หากกู้ธนาคารไทย", "泰国银行贷款时", "При ипотеке")),
    },
    {
      item: t(lang, L("Legal review", "ทนายตรวจสัญญา", "法律审阅", "Юрист")),
      approx: "฿15k–40k",
      notes: t(lang, L("Recommended every purchase", "แนะนำทุกครั้ง", "建议每次购买都做", "Рекомендуется")),
    },
  ];
}

export function CondoBuyingPage() {
  const { language } = useLanguage();
  const h = {
    areas: t(language, L("Popular Pattaya areas", "ทำเลยอดนิยม", "热门区域", "Районы")),
    costs: t(language, L("Typical buyer costs", "ค่าใช้จ่ายผู้ซื้อ", "常见买家费用", "Расходы")),
    item: t(language, L("Item", "รายการ", "项目", "Статья")),
    approx: t(language, L("Approx.", "โดยประมาณ", "约", "Примерно")),
    notes: t(language, L("Notes", "หมายเหตุ", "说明", "Примечания")),
  };

  return (
    <LocalizedLivingPageShell
      shellKey="condoBuying"
      heroImage={condoBuyingImages.hero}
      heroAlt="Condominium towers in Pattaya"
      ctaAriaLabel="Property consultation"
    >
      <CondoBuyingRequirements />
      <CondoBuyingQuotaDetail />
      <CondoBuyingFet />

      <section aria-labelledby="areas-title">
        <h2 id="areas-title" className={livingTheme.heading}>
          {h.areas}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getAreas().map((area) => (
            <div key={area.name.en} className={`p-5 ${livingTheme.card}`}>
              <h3 className="font-bold text-[#0A192F]">{t(language, area.name)}</h3>
              <p className={`mt-2 ${livingTheme.body}`}>{t(language, area.note)}</p>
            </div>
          ))}
        </div>
      </section>

      <CondoBuyingSteps />
      <CondoBuyingDueDiligence />

      <section aria-labelledby="costs-title">
        <h2 id="costs-title" className={livingTheme.heading}>
          {h.costs}
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{h.item}</th>
                <th className="px-4 py-3 sm:px-6">{h.approx}</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">{h.notes}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {getCostRows(language).map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{row.item}</td>
                  <td className="px-4 py-3 sm:px-6">{row.approx}</td>
                  <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[#777777]">
          {t(
            language,
            L(
              "Budget roughly 6–9% on top of price for buyer-side fees, sinking fund, and legal costs. Government fee reductions through mid-2026 generally apply to Thai buyers under ฿7M — foreign buyers usually pay full 2% transfer fee.",
              "เผื่อค่าใช้จ่ายผู้ซื้อรวม 6–9% นอกราคา มาตรการลดค่าธรรมเนียมมักใช้กับคนไทยซื้อไม่เกิน 7 ล้าน — ต่างชาติมักจ่ายค่าโอน 2% เต็ม",
              "除房价外预留约 6–9% 买方费用。2026 年中前降费通常仅适用于泰国公民购买 700 万泰铢以下房产。",
              "+6–9% к цене; льготы 2026 — в основном для граждан Таиланда.",
            ),
          )}
        </p>
      </section>

      <CondoBuyingTransferDay />
      <CondoBuyingFaq />
    </LocalizedLivingPageShell>
  );
}
