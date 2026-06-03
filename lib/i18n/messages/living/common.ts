import { L } from "@/lib/i18n/living-helpers";

export const livingUi = {
  faqTitle: L(
    "Frequently Asked Questions",
    "คำถามที่พบบ่อย",
    "常见问题",
    "Часто задаваемые вопросы",
  ),
  utilityBreakdown: L(
    "Utility breakdown",
    "รายการค่าใช้จ่ายหลัก",
    "费用明细",
    "Коммунальные услуги",
  ),
  indicativeCosts: L(
    "Indicative monthly costs",
    "ค่าใช้จ่ายโดยประมาณต่อเดือน",
    "参考月费",
    "Примерные ежемесячные расходы",
  ),
  profile: L("Profile", "ประเภทที่พัก", "类型", "Профиль"),
  utilitiesApprox: L(
    "Utilities (approx.)",
    "ค่าสาธารณูปโภค (โดยประมาณ)",
    "公用事业（约）",
    "Коммуналка (прим.)",
  ),
  requirements: L("Requirements", "ข้อกำหนด", "要求", "Требования"),
  process: L("Process", "ขั้นตอน", "流程", "Процесс"),
  timeline: L("Timeline", "ไทม์ไลน์", "时间线", "Сроки"),
  learnMore: L("Learn more", "ดูเพิ่มเติม", "了解更多", "Подробнее"),
} as const;
