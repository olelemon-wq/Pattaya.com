"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { useLanguage } from "@/components/layout/language-provider";
import { faqEnTh } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";

const faqs = [
  faqEnTh(
    "quota",
    "How do I check if a unit is in the foreign quota?",
    "ตรวจโควตาต่างชาติอย่างไร?",
    "Ask the juristic person for a letter, then confirm at Chonburi Land Office before signing.",
    "ขอหนังสือจากนิติบุคคล แล้วยืนยันที่สำนักงานที่ดินก่อนเซ็น",
    "如何核实外资配额？",
    "Как проверить квоту?",
    "向物业管理方索取证明函，签约前到春武里土地厅核实。",
    "Запросите письмо у juristic person и подтвердите в Land Office до подписания.",
  ),
  faqEnTh(
    "fees",
    "Who pays transfer fees and taxes?",
    "ใครจ่ายค่าโอนและภาษี?",
    "Split is negotiable in the SPA. Budget 3–6% all-in for the buyer side.",
    "แบ่งจ่ายตามสัญญา ผู้ซื้อควรเผื่อ 3–6%",
    "过户费与税费谁付？",
    "Кто платит пошлины?",
    "买卖协议中可协商分摊；买方侧建议预留总价 3–6%。",
    "Деление в SPA; закладывайте 3–6% на стороне покупателя.",
  ),
  faqEnTh(
    "offplan",
    "Is off-plan purchase safe for foreigners?",
    "ซื้อออฟพลานปลอดภัยไหม?",
    "Use licensed developers, staged payments, and legal review before signing.",
    "ใช้ผู้พัฒนาที่มีใบอนุญาต จ่ายเป็นงวด และให้ทนายตรวจสัญญา",
    "外籍买期房安全吗？",
    "Безопасна ли покупка off-plan?",
    "选择持牌开发商、分期付款，签约前请律师审阅合同。",
    "Лицензированный застройщик, этапная оплата и проверка юристом.",
  ),
  faqEnTh(
    "leasehold",
    "What if the foreign quota is full?",
    "โควตาเต็มทำอย่างไร?",
    "Consider registered lease, another building, or proper legal structures — not informal nominees.",
    "พิจารณาสิทธิเช่า อาคารอื่น หรือโครงสร้างที่ถูกกฎหมาย",
    "外资配额满了怎么办？",
    "Если квота заполнена?",
    "可考虑登记租赁权、换楼盘或合法结构——勿用非正式代持。",
    "Leasehold, другой объект или легальная структура — не номinee.",
  ),
  faqEnTh(
    "fet",
    "Do I need a visa to buy a condo?",
    "ต้องมีวีซ่าไหมถึงจะซื้อคอนโดได้?",
    "Not if you use the overseas funds route (§19(5)): wire purchase money from abroad and obtain an FET form. Other §19 routes may require residence or BOI status.",
    "ถ้าใช้เงินจากต่างประเทศ (มาตรา 19(5)) ไม่จำเป็น — โอนเงินและขอ FET",
    "买房需要签证吗？",
    "Нужна ли виза?",
    "若走境外资金路径（第 19(5) 条）：从海外电汇购房款并取得 FET 即可；其他第 19 条路径可能需居留或 BOI 身份。",
    "Для пути с FET виза не нужна; иные маршруты §19 могут требовать статус.",
  ),
  faqEnTh(
    "apartment",
    "Can I buy any apartment in Pattaya?",
    "ซื้ออพาร์ตเมนต์ทั่วไปได้ไหม?",
    "Only units in buildings registered under the Condominium Act qualify for foreign freehold. Unregistered apartment blocks cannot transfer title to foreigners.",
    "เฉพาะอาคารจดทะเบียนอาคารชุดเท่านั้นที่โอนกรรมสิทธิ์ต่างชาติได้",
    "任何公寓都能买吗？",
    "Любая квартира?",
    "仅《公寓法》注册楼盘的单元可外籍永久产权过户；未注册公寓楼不能过户给外国人。",
    "Только зарегистрированное кондо; обычные apartment blocks — нет.",
  ),
  faqEnTh(
    "timeline",
    "How long does a resale purchase take?",
    "ซื้อมือสองใช้เวลานานแค่ไหน?",
    "Typically 30–90 days from reservation to Land Office transfer when documents and FET are ready.",
    "มัก 30–90 วัน จากจองถึงโอน เมื่อเอกสารและ FET พร้อม",
    "二手房多久完成？",
    "Сроки resale?",
    "材料与 FET 齐备时，从预订到土地厅过户通常 30–90 天。",
    "Обычно 30–90 дней при готовых документах и FET.",
  ),
  faqEnTh(
    "rental",
    "Can I rent out my condo?",
    "ปล่อยเช่าได้ไหม?",
    "Yes, subject to juristic rules and tax reporting. Short-term may need building permission.",
    "ได้ ตามกฎนิติบุคคลและภาษี ปล่อยระยะสั้นอาจต้องขออนุญาต",
    "能否出租公寓？",
    "Можно ли сдавать в аренду?",
    "可以，须遵守物业规定并报税；短租可能需要楼盘许可。",
    "Да, по правилам juristic person и с налогами; краткосрок — разрешение здания.",
  ),
];

export function CondoBuyingFaq() {
  const { language } = useLanguage();

  return (
    <LivingFaqSection
      faqs={faqs}
      subtitle={faqSubtitle(language, "Condo buying", "ซื้อคอนโด", "购房", "Покупка кондо")}
      titleId="condo-faq-title"
    />
  );
}
