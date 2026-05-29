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
