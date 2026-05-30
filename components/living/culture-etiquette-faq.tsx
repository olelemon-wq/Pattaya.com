"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { useLanguage } from "@/components/layout/language-provider";
import { faqEnTh } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";

const faqs = [
  faqEnTh(
    "wai",
    "When should I use the wai?",
    "ไหว้เมื่อไหร่?",
    "Use the wai when greeting elders, monks, and officials. A slight bow is enough for casual daily interactions.",
    "ไหว้เมื่อทักทายผู้ใหญ่ พระ และเจ้าหน้าที่ ไหว้เบาๆ ในชีวิตประจำวัน",
    "何时合十礼？",
    "Когда делать вай?",
  ),
  faqEnTh(
    "temple",
    "What should I wear to temples in Pattaya?",
    "แต่งกายเข้าวัดอย่างไร?",
    "Cover shoulders and knees, remove shoes, and keep voices low. Carry a sarong for beach-area temples.",
    "ปิดไหล่และเข่า ถอดรองเท้า พูดเบา พกผ้าคลุมสำหรับวัดริมทะเล",
    "进庙如何着装？",
    "Одежда для храма",
  ),
  faqEnTh(
    "monks",
    "Can women interact with monks?",
    "ผู้หญิงคุยกับพระได้ไหม?",
    "Women should not touch monks — place items on a cloth or table. Give up seats when possible.",
    "ผู้หญิงไม่สัมผัสพระ วางของบนผ้าหรือโต๊ะ ให้ที่นั่งพระ",
    "女性能否与僧侣交流？",
    "Женщины и монахи",
  ),
  faqEnTh(
    "face",
    "What does 'saving face' mean?",
    "‘เกรงใจ/รักษาหน้า’ หมายถึงอะไร?",
    "Avoid public arguments and embarrassing others. Calm negotiation works better than confrontation.",
    "หลีกเลี่ยงทะเลาะในที่สาธารณะ การเจรจาอย่างใจเย็นได้ผลดีกว่า",
    "“给面子”是什么意思？",
    "Что такое «сохранение лица»",
  ),
  faqEnTh(
    "royal",
    "Are there rules about the monarchy?",
    "กฎเกี่ยวกับสถาบันกษัตริย์?",
    "Show respect in public. Avoid casual or critical discussion — strict laws apply.",
    "แสดงความเคารพในที่สาธารณะ หลีกเลี่ยงการพูดจาไม่เหมาะสม",
    "关于王室有何规定？",
    "Правила о монархии",
  ),
  faqEnTh(
    "shoes",
    "Do I remove shoes everywhere?",
    "ถอดรองเท้าทุกที่ไหม?",
    "Homes, temple buildings, and many shops — look for shoe racks or others barefoot before entering.",
    "บ้าน อาคารวัด และร้านหลายแห่ง — สังเกตที่วางรองเท้าหรือคนอื่นถอดรองเท้า",
    "到处都要脱鞋吗？",
    "Где снимать обувь?",
  ),
  faqEnTh(
    "nightlife",
    "Is Walking Street different from temple etiquette?",
    "Walking Street ต่างจากมารยาทวัดไหม?",
    "Yes — nightlife is commercial and loud; dress more on the street, stay alert for scams, but still avoid public fights.",
    "ใช่ — ไนท์ไลฟ์เชิงพาณิชย์และดัง แต่งตัวมิดชิดขึ้น ระวังมิจฉาชีพ อย่าทะเลาะในที่สาธารณะ",
    "步行街与寺庙礼仪不同吗？",
    "Walking Street и храмы",
  ),
  faqEnTh(
    "songthaew",
    "How do I use a Pattaya songthaew without overpaying?",
    "ขึ้นสองแถวพัทยาไม่ให้โดนแพง?",
    'Wave to board on the normal route — do not ask "Can you go to…?" Press the buzzer to stop and pay 10–20 THB in small notes at the driver.',
    "โบกขึ้นเส้นทางปกติ อย่าถาม “ไป...ได้ไหม” กดกิ่งลง จ่าย 10–20 บาทเงินย่อยที่คนขับ",
    "芭提雅双条车怎样不被多收钱？",
    "Как ехать на сонгтхэу?",
  ),
  faqEnTh(
    "currency",
    "What if Thai banknotes blow onto the ground?",
    "ธนบัตรปลิวลงพื้นทำอย่างไร?",
    "Pick them up by hand respectfully — never step on notes or coins bearing the King's image.",
    "เก็บด้วยมืออย่างสุภาพ — ห้ามเหยียบธนบัตรหรือเหรียญที่มีพระบรมฉายาลักษณ์",
    "泰铢掉地上怎么办？",
    "Банкноты на земле",
  ),
  faqEnTh(
    "gift",
    "What gifts are appropriate?",
    "ของขวัญอะไรเหมาะ?",
    "Small thoughtful items (fruit, snacks, local crafts) presented with both hands. Avoid overly expensive gifts that create obligation.",
    "ของเล็กมีความหมาย (ผลไม้ ขนม หัตถกรรม) ส่งด้วยสองมือ หลีกเลี่ยงของแพงจนเกิดภาระ",
    "送什么礼物合适？",
    "Какие подарки уместны?",
  ),
];

export function CultureEtiquetteFaq() {
  const { language } = useLanguage();

  return (
    <LivingFaqSection
      faqs={faqs}
      subtitle={faqSubtitle(language, "Thai etiquette", "มารยาทไทย", "泰国礼仪", "Этикет")}
      titleId="culture-faq-title"
    />
  );
}
