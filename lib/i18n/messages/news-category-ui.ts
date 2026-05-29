import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export const newsCategoryUi = {
  newsHub: L("News Hub →", "ศูนย์ข่าว →", "新闻中心 →", "Новости →"),
  readFullStory: L("Read Full Story", "อ่านฉบับเต็ม", "阅读全文", "Читать"),
  featured: L("Featured", "แนะนำ", "精选", "Рекомендуем"),
  leadStory: L("Lead Story", "ข่าวเด่น", "头条", "Главное"),
  breaking: L("Breaking", "ด่วน", "突发", "Срочно"),
  latestHeadlines: L(
    "Latest {topic} Headlines",
    "หัวข้อข่าว{topic}ล่าสุด",
    "最新{topic}要闻",
    "Свежие новости: {topic}",
  ),
} as const;

export function tNewsCategoryUi(
  lang: LanguageCode,
  key: keyof typeof newsCategoryUi,
  vars?: { topic?: string },
): string {
  let text = t(lang, newsCategoryUi[key]);
  if (vars?.topic) {
    text = text.replace("{topic}", vars.topic);
  }
  return text;
}
