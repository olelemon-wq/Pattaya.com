import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getUtilitiesCalculatorCopy(lang: LanguageCode) {
  return {
    badge: t(lang, L("Interactive tool", "เครื่องมือโต้ตอบ", "互动工具", "Интерактив")),
    title: t(
      lang,
      L(
        "Pattaya utilities cost calculator",
        "เครื่องคำนวณค่าใช้จ่ายสาธารณูปโภค (พัทยา)",
        "芭提雅公用事业费用计算器",
        "Калькулятор коммуналки (Паттайя)",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Adjust housing type, AC use, and billing rate — see your monthly split update instantly.",
        "เลือกประเภทที่พัก การเปิดแอร์ และเรทค่าน้ำ-ไฟ — ดูยอดรวมและกราฟอัปเดตทันที",
        "选择住房类型、空调用法与计费方式——即时查看月度分项。",
        "Настройте тип жилья, кондиционер и тариф — мгновенный расчёт.",
      ),
    ),
    housingLabel: t(lang, L("Housing type", "ประเภทที่พัก", "住房类型", "Тип жилья")),
    housingStudio: t(
      lang,
      L("Studio ~30 sqm", "สตูดิโอ ~30 ตร.ม.", "单间 ~30㎡", "Студия ~30 м²"),
    ),
    housingOneBed: t(
      lang,
      L("1 bedroom ~45 sqm", "1 ห้องนอน ~45 ตร.ม.", "一卧 ~45㎡", "1 спальня ~45 м²"),
    ),
    housingHouse: t(
      lang,
      L("House / townhome", "บ้าน / ทาวน์โฮม", "别墅/联排", "Дом / таунхаус"),
    ),
    acLabel: t(lang, L("Air conditioning", "การเปิดเครื่องปรับอากาศ", "空调使用", "Кондиционер")),
    acLow: t(
      lang,
      L("Minimal", "น้อย", "很少开", "Минимум"),
    ),
    acNight: t(lang, L("Night only (~8h)", "เฉพาะตอนนอน (~8 ชม.)", "仅夜间 (~8h)", "Только ночью")),
    acHigh: t(lang, L("Most of day", "เกือบทั้งวัน", "几乎全天", "Почти весь день")),
    billingLabel: t(
      lang,
      L("Water & electricity billing",
        "รูปแบบการคิดค่าน้ำ-ไฟ",
        "水电计费方式",
        "Тариф воды и света",
      ),
    ),
    billingGov: t(lang, L("Government rate", "เรทหลวง", "政府费率", "Гостариф")),
    billingCondo: t(lang, L("Condo / building rate", "เรทคอนโด/ตึก", "公寓/楼盘费率", "Тариф кондо")),
    totalLabel: t(lang, L("Estimated monthly total", "รวมค่าใช้จ่ายต่อเดือน", "预估月总费用", "Итого в месяц")),
    lineElectric: t(lang, L("Electricity", "ค่าไฟฟ้า", "电费", "Электричество")),
    lineWater: t(lang, L("Water", "ค่าน้ำประปา", "自来水", "Вода")),
    lineInternet: t(lang, L("Internet", "อินเทอร์เน็ต", "网络", "Интернет")),
    lineDrinking: t(lang, L("Drinking water", "น้ำดื่ม", "饮用水", "Питьевая вода")),
    unitsNote: t(
      lang,
      L("~{units} kWh/month at ฿{rate}/unit",
        "~{units} หน่วย/เดือน ที่ ฿{rate}/หน่วย",
        "约 {units} 度/月，฿{rate}/度",
        "~{units} кВт·ч по ฿{rate}",
      ),
    ),
    disclaimer: t(
      lang,
      L(
        "Estimates only — actual bills vary by building, season (Mar–May), and appliances.",
        "ประมาณการเท่านั้น — บิลจริงขึ้นกับตึก ฤดูกาล (มี.ค.–พ.ค.) และเครื่องใช้",
        "仅供参考——实际账单因楼盘、季节（3–5月）与电器而异。",
        "Оценка; реальные счета зависят от здания и сезона.",
      ),
    ),
  };
}
