import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { Priority } from "@/lib/navigation/types";

export const siteUi = {
  home: L("Home", "หน้าแรก", "首页", "Главная"),
  comingSoon: L("Coming Soon", "เร็วๆ นี้", "即将推出", "Скоро"),
  placeholderBody: L(
    "Content for this section is planned for Phase 1. The route and metadata are ready — add articles, guides, or API integrations here.",
    "เนื้อหาส่วนนี้วางแผนใน Phase 1 — route และ metadata พร้อมแล้ว รอเพิ่มบทความ คู่มือ หรือ API",
    "本节内容计划在 Phase 1 上线，路由与元数据已就绪。",
    "Контент запланирован на Phase 1 — маршрут и метаданные готовы.",
  ),
  category: L("Category", "หมวด", "分类", "Категория"),
  subcategory: L("Subcategory", "หมวดย่อย", "子分类", "Подкатегория"),
  priority: L("Priority", "ความสำคัญ", "优先级", "Приоритет"),
  monetization: L("Monetization", "รายได้", "变现", "Монетизация"),
  categoriesCount: L("categories", "หมวด", "个分类", "категорий"),
  apiWidgetSoon: L(
    "API widget integration coming soon.",
    "การเชื่อมต่อ widget API เร็วๆ นี้",
    "API 组件集成即将上线。",
    "Интеграция API-виджета скоро.",
  ),
  guideContentSoon: L(
    "City guide content coming soon.",
    "เนื้อหาคู่มือเมืองเร็วๆ นี้",
    "城市指南内容即将上线。",
    "Городской гид скоро.",
  ),
  directorySoon: L(
    "Business directory listings coming soon.",
    "รายชื่อธุรกิจในไดเรกทอรีเร็วๆ นี้",
    "商家目录即将上线。",
    "Каталог бизнесов скоро.",
  ),
  forumSoon: L(
    "Forum integration planned for a future phase.",
    "ฟอรัมวางแผนในเฟสถัดไป",
    "论坛集成计划在后续阶段。",
    "Форум запланирован на следующую фазу.",
  ),
} as const;

const priorityLabels: Record<Priority, ReturnType<typeof L>> = {
  "very-high": L("Very High", "สูงมาก", "极高", "Очень высокий"),
  high: L("High", "สูง", "高", "Высокий"),
  medium: L("Medium", "ปานกลาง", "中", "Средний"),
};

export function tSiteUi(lang: LanguageCode, key: keyof typeof siteUi): string {
  return t(lang, siteUi[key]);
}

export function formatPriorityLocalized(
  lang: LanguageCode,
  priority: Priority,
): string {
  return t(lang, priorityLabels[priority]);
}
