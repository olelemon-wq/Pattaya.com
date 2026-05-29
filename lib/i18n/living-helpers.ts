import type { LanguageCode } from "@/lib/i18n/languages";
import { pickText, type LocalizedText } from "@/lib/i18n/text";

/** Shorthand for localized copy (en required; th/zh/ru optional). */
export function L(
  en: string,
  th?: string,
  zh?: string,
  ru?: string,
): LocalizedText {
  return { en, th, zh, ru };
}

export function t(lang: LanguageCode, text: LocalizedText): string {
  return pickText(lang, text);
}

export type LivingFaqItem = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export function faq(
  id: string,
  question: LocalizedText,
  answer: LocalizedText,
): LivingFaqItem {
  return { id, question, answer };
}

/** Migrate legacy en + th FAQ rows; zh/ru fall back to en. */
export function faqEnTh(
  id: string,
  questionEn: string,
  questionTh: string,
  answerEn: string,
  answerTh?: string,
  questionZh?: string,
  questionRu?: string,
  answerZh?: string,
  answerRu?: string,
): LivingFaqItem {
  return faq(
    id,
    L(questionEn, questionTh, questionZh, questionRu),
    L(answerEn, answerTh ?? answerEn, answerZh, answerRu),
  );
}

export type LivingIconItem = {
  icon: import("lucide-react").LucideIcon;
  title: LocalizedText;
  text: LocalizedText;
};

export function iconEnTh(
  icon: import("lucide-react").LucideIcon,
  titleEn: string,
  titleTh: string,
  textEn: string,
  textTh?: string,
  titleZh?: string,
  titleRu?: string,
  textZh?: string,
  textRu?: string,
): LivingIconItem {
  return {
    icon,
    title: L(titleEn, titleTh, titleZh, titleRu),
    text: L(textEn, textTh ?? textEn, textZh, textRu),
  };
}

export const livingCommon = {
  faqTitle: L(
    "Frequently Asked Questions",
    "คำถามที่พบบ่อย",
    "常见问题",
    "Часто задаваемые вопросы",
  ),
  livingHub: L("Living", "ไลฟ์สไตล์", "生活", "Жизнь"),
} as const;
