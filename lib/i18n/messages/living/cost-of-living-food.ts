import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { CostCategoryKey } from "@/lib/cost-of-living/pattaya-prices";
import type { CostLineItemId } from "@/lib/cost-of-living/pattaya-prices";

export function getCostFoodPageCopy(lang: LanguageCode) {
  return {
    plannerBadge: t(lang, L("Live planner", "วางแผนค่าใช้จ่าย", "生活规划", "Планировщик")),
    plannerTitle: t(
      lang,
      L(
        "Your Pattaya monthly budget",
        "งบรายเดือนในพัทยา",
        "芭提雅月度预算",
        "Месячный бюджет в Паттайе",
      ),
    ),
    plannerSubtitle: t(
      lang,
      L(
        "Switch lifestyle tier — food, housing, and transport update instantly.",
        "เลือกระดับชีวิต — ค่าอาหาร ที่พัก และเดินทางเปลี่ยนทันที",
        "切换生活档次——餐饮、住房、交通即时更新。",
        "Смените уровень — еда, жильё и транспорт обновятся.",
      ),
    ),
    lifestyleLabel: t(
      lang,
      L("Lifestyle tier", "ระดับชีวิต", "生活档次", "Уровень жизни"),
    ),
    estimatedTotal: t(
      lang,
      L("Estimated monthly spend", "ค่าใช้จ่ายโดยประมาณ/เดือน", "约月支出", "Прим. расход/мес."),
    ),
    coreCategories: t(
      lang,
      L("Core categories", "หมวดหลัก", "核心类别", "Основные категории"),
    ),
    perMonth: t(lang, L("/ month", "/ เดือน", "/ 月", "/ мес.")),
    breakdownTitle: t(
      lang,
      L("Full monthly breakdown", "สรุปงบรายเดือนทั้งหมด", "完整月度分解", "Полная разбивка"),
    ),
    tipsTitle: t(lang, L("Pattaya tips", "เคล็ดลับพัทยา", "芭提雅贴士", "Советы")),
    tips: [
      t(
        lang,
        L(
          "Street food and markets keep food costs low in Naklua and Jomtien — fine dining pushes the Premium tier.",
          "สตรีทฟู้ดและตลาดช่วยลดค่าอาหาร — ร้านหรูดันค่า Premium สูง",
          "纳库鲁阿与 Jomtien 街头美食省钱——高端餐饮拉高 Premium。",
          "Стритфуд дешевле — рестораны для Premium.",
        ),
      ),
      t(
        lang,
        L(
          "Rent varies sharply by beach road vs Jomtien — confirm utilities are government or condo rates before signing.",
          "ค่าเช่าต่างกันมากตามทำเล — เช็คเรทไฟน้ำก่อนเซ็นสัญญา",
          "租金因地段差异大——签约前确认水电费率。",
          "Аренда зависит от района — проверьте тарифы.",
        ),
      ),
      t(
        lang,
        L(
          "Songthaews are cheapest; Grab adds up for late nights — budget Premium assumes frequent ride-hail.",
          "สองแถวถูกสุด — Grab สะดวกตอนดึก Premium ใช้บ่อย",
          "双条车最便宜——深夜 Grab 累加；Premium 假设常叫车。",
          "Сонгтео дешевле — Grab в Premium чаще.",
        ),
      ),
    ],
    utilitiesLink: t(lang, L("Utilities guide", "คู่มือค่าไฟน้ำ", "水电指南", "Коммуналка")),
    rentalsLink: t(lang, L("Rentals guide", "คู่มือเช่า", "租房指南", "Аренда")),
    streetFoodLink: t(lang, L("Street food guide", "สตรีทฟู้ด", "街头美食", "Стритфуд")),
  };
}

export function getCostCategoryTitle(lang: LanguageCode, key: CostCategoryKey): string {
  const map: Record<CostCategoryKey, ReturnType<typeof L>> = {
    food: L("Food & dining", "อาหาร & ร้านอาหาร", "餐饮", "Еда"),
    housing: L("Housing & utilities", "ที่พัก & สาธารณูปโภค", "住房与公用", "Жильё"),
    transport: L("Transport", "การเดินทาง", "交通", "Транспорт"),
  };
  return t(lang, map[key]);
}

export function getCostLineLabel(lang: LanguageCode, id: CostLineItemId): string {
  const map: Record<CostLineItemId, ReturnType<typeof L>> = {
    streetFood: L("Street food & markets", "สตรีทฟู้ด & ตลาด", "街头与市场", "Стритфуд"),
    groceries: L("Groceries & home cooking", "ของสด & ทำกินเอง", "生鲜自炊", "Продукты"),
    diningOut: L("Restaurants & cafés", "ร้านอาหาร & คาเฟ่", "餐厅咖啡", "Рестораны"),
    rent: L("Rent (condo/house)", "ค่าเช่า", "租金", "Аренда"),
    utilitiesBundle: L("Electric, water, internet", "ไฟ น้ำ เน็ต", "水电网", "Коммуналка"),
    condoFees: L("Condo / juristic fees", "ค่านิติ / ส่วนกลาง", "物业费", "Взносы"),
    songthaew: L("Songthaew & local buses", "สองแถว & รถเมล์", "双条车", "Сонгтео"),
    rideHail: L("Grab / Bolt", "Grab / Bolt", "Grab / Bolt", "Grab / Bolt"),
    fuelParking: L("Fuel & parking", "น้ำมัน & ที่จอด", "油费停车", "Бензин"),
  };
  return t(lang, map[id]);
}

export const costFoodFaqs = [
  {
    id: "tier",
    q: L("What do Budget, Standard, and Premium mean?", "Budget / Standard / Premium ต่างกันยังไง?", "三档有何区别？", "Уровни?"),
    a: L(
      "Budget reflects local-style living; Standard is a typical expat mix; Premium adds central rent, dining out, and ride-hail.",
      "Budget แบบคนท้องถิ่น Standard สไตล์ชาวต่างชาติทั่วไป Premium ค่าเช่ากลางเมือง กินร้าน และ Grab บ่อย",
      "经济档偏本地生活；标准档为常见外籍组合；高端档含中心租金、外出就餐与频繁网约车。",
      "Budget — местный стиль; Standard — экспат; Premium — центр и рестораны.",
    ),
  },
  {
    id: "currency",
    q: L("Are exchange rates live?", "อัตราแลกเปลี่ยนเรียลไทม์ไหม?", "汇率实时吗？", "Курс live?"),
    a: L(
      "No — rates are illustrative for planning. Check your bank before transferring.",
      "ไม่ — เป็นตัวเลขประมาณสำหรับวางแผน ตรวจกับธนาคารก่อนโอน",
      "否——仅供规划，汇款前请以银行为准。",
      "Нет, курсы ориентировочные.",
    ),
  },
];
