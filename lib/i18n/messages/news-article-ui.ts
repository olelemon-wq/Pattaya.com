import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export const newsArticleUi = {
  readArticle: L("Read article →", "อ่านบทความ →", "阅读文章 →", "Читать →"),
  backToCategory: L("← Back to category", "← กลับหมวดข่าว", "← 返回类别", "← К разделу"),
  articleBadge: L("News article", "บทความข่าว", "新闻文章", "Статья"),
  updated: L("Updated", "อัปเดต", "更新", "Обновлено"),
} as const;

export function tNewsArticleUi(
  lang: LanguageCode,
  key: keyof typeof newsArticleUi,
): string {
  return t(lang, newsArticleUi[key]);
}
