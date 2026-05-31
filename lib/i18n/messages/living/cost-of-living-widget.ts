import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { CostCurrency } from "@/lib/cost-of-living/exchange-rates";
import type { ExpenseCategoryId, LifestyleTier } from "@/lib/cost-of-living/cost-data";

export function getCostLivingWidgetCopy(lang: LanguageCode) {
  return {
    badge: t(lang, L("Finance", "การเงิน", "财务", "Финансы")),
    title: t(
      lang,
      L(
        "Pattaya cost of living",
        "ค่าครองชีพพัทยา",
        "芭提雅生活成本",
        "Стоимость жизни в Паттайе",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Monthly estimate for expats — adjust lifestyle tier and currency.",
        "ประมาณการรายเดือน — เลือกระดับชีวิตและสกุลเงิน",
        "外籍人士月度估算——可选生活档次与货币。",
        "Месячная оценка — выберите уровень и валюту.",
      ),
    ),
    totalLabel: t(
      lang,
      L("Est. monthly total", "รวมต่อเดือน (ประมาณ)", "约月总支出", "Итого/мес."),
    ),
    totalNote: t(
      lang,
      L(
        "Illustrative Pattaya average — housing, food, leisure & misc.",
        "ตัวเลขประมาณในพัทยา — ที่พัก อาหาร สันทนาการ และอื่นๆ",
        "芭提雅示意均值：住房、餐饮、休闲及其他。",
        "Ориентир по Паттайе.",
      ),
    ),
    fullAnalysis: t(
      lang,
      L("Full analysis", "ดูรายละเอียด", "完整分析", "Подробнее"),
    ),
    tierBudget: t(lang, L("Budget", "ประหยัด (Budget)", "经济 (Budget)", "Budget")),
    tierStandard: t(lang, L("Standard", "มาตรฐาน (Standard)", "标准 (Standard)", "Standard")),
    tierPremium: t(lang, L("Premium", "พรีเมียม (Premium)", "高端 (Premium)", "Premium")),
    disclaimer: t(
      lang,
      L(
        "Rates are illustrative. Your spend varies by district and habits.",
        "อัตราแลกเปลี่ยนและค่าใช้จ่ายเป็นตัวอย่าง แต่ละคนแตกต่างกัน",
        "汇率为示意值，实际因区域与习惯而异。",
        "Курсы и суммы ориентировочные.",
      ),
    ),
  };
}

export function getTierLabel(lang: LanguageCode, tier: LifestyleTier): string {
  const copy = getCostLivingWidgetCopy(lang);
  const map: Record<LifestyleTier, string> = {
    budget: copy.tierBudget,
    standard: copy.tierStandard,
    premium: copy.tierPremium,
  };
  return map[tier];
}

export function getTierOptions(lang: LanguageCode): { value: LifestyleTier; label: string }[] {
  return (["budget", "standard", "premium"] as const).map((value) => ({
    value,
    label: getTierLabel(lang, value),
  }));
}

export function getCurrencyOptions(lang: LanguageCode): { value: CostCurrency; label: string }[] {
  return [
    { value: "USD", label: t(lang, L("USD", "ดอลลาร์", "美元", "USD")) },
    { value: "THB", label: t(lang, L("THB", "บาท", "泰铢", "THB")) },
    { value: "EUR", label: t(lang, L("EUR", "ยูโร", "欧元", "EUR")) },
  ];
}

export function getCategoryLabel(lang: LanguageCode, id: ExpenseCategoryId): string {
  const labels: Record<ExpenseCategoryId, ReturnType<typeof L>> = {
    housing: L("Housing", "ที่พัก", "住房", "Жильё"),
    food: L("Food", "อาหาร", "餐饮", "Еда"),
    entertainment: L("Entertainment", "สันทนาการ", "娱乐", "Досуг"),
    other: L("Other", "อื่นๆ", "其他", "Прочее"),
  };
  return t(lang, labels[id]);
}
