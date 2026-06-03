import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export const newsCategoryUi = {
  newsHub: L("News Hub", "ศูนย์ข่าว", "新闻中心", "Новости"),
  browseHeadlines: L(
    "Browse headlines in this category",
    "ดูหัวข้อข่าวในหมวดนี้",
    "浏览本类别要闻",
    "Смотреть заголовки в разделе",
  ),
  viewCategory: L("View category", "เข้าหมวดข่าว", "进入新闻类别", "В раздел"),
  relatedGuide: L("Related guide", "คู่มือที่เกี่ยวข้อง", "相关指南", "См. гайд"),
  categoryBadge: L("News category", "หมวดข่าว", "新闻类别", "Раздел новостей"),
  categoryIntro: L(
    "Headlines and updates grouped by topic — select a story to read the full article.",
    "รวมหัวข้อข่าวในหมวดเดียวกัน — เลือกหัวข้อเพื่ออ่านบทความเต็ม",
    "按主题汇总要闻 — 选择标题阅读全文。",
    "Подборка по теме — выберите заголовок для полного текста.",
  ),
  featured: L("Featured", "แนะนำ", "精选", "Рекомендуем"),
  leadStory: L("Lead Story", "ข่าวเด่น", "头条", "Главное"),
  breaking: L("Breaking", "ด่วน", "突发", "Срочно"),
  latestHeadlines: L(
    "Headlines in this category",
    "หัวข้อข่าวในหมวดนี้",
    "本类别要闻",
    "Заголовки в разделе",
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
