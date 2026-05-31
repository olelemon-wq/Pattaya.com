import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const monetizationTags = {
  Ads: L("Ads", "โฆษณา", "广告", "Реклама"),
  Affiliate: L("Affiliate", "พันธมิตร", "联盟", "Партнёрка"),
  "Property Ads": L("Property Ads", "โฆษณาอสังหา", "房产广告", "Недвижимость"),
  Sponsored: L("Sponsored", "สปอนเซอร์", "赞助", "Спонсор"),
  "Visa Agents": L("Visa Agents", "ตัวแทนวีซ่า", "签证代理", "Визовые агенты"),
  "Legal Ads": L("Legal Ads", "โฆษณากฎหมาย", "法律广告", "Юридическая реклама"),
  Sponsorship: L("Sponsorship", "สปอนเซอร์ชิป", "赞助合作", "Спонсорство"),
  "Visa Service": L("Visa Service", "บริการวีซ่า", "签证服务", "Визовый сервис"),
  "Legal Service": L("Legal Service", "บริการกฎหมาย", "法律服务", "Юридические услуги"),
  "Medical Ads": L("Medical Ads", "โฆษณาการแพทย์", "医疗广告", "Медицина"),
  "Insurance Ads": L("Insurance Ads", "โฆษณาประกัน", "保险广告", "Страхование"),
  Tours: L("Tours", "ทัวร์", "旅游", "Туры"),
  "Luxury Ads": L("Luxury Ads", "โฆษณาหรู", "奢华广告", "Люкс"),
  Consulting: L("Consulting", "ที่ปรึกษา", "咨询", "Консалтинг"),
  "Event Ads": L("Event Ads", "โฆษณางาน", "活动广告", "События"),
  Premium: L("Premium", "พรีเมียม", "高级", "Премиум"),
  "Featured Listing": L("Featured Listing", "รายการแนะนำ", "精选 listing", "Избранное"),
} as const;

const featureTags = {
  SEO: L("SEO", "SEO", "SEO", "SEO"),
  "Real-time": L("Real-time", "เรียลไทม์", "实时", "Онлайн"),
  "Multi-language": L("Multi-language", "หลายภาษา", "多语言", "Мультиязычность"),
  "AI Summary + Multi-language": L(
    "AI Summary + Multi-language",
    "สรุป AI + หลายภาษา",
    "AI 摘要 + 多语言",
    "AI + мультиязычность",
  ),
  Calendar: L("Calendar", "ปฏิทิน", "日历", "Календарь"),
  "API Widget": L("API Widget", "วิดเจ็ต API", "API 组件", "API-виджет"),
  "Live Update": L("Live Update", "อัปเดตสด", "实时更新", "Live"),
  "Community Driven": L("Community Driven", "ชุมชน", "社区驱动", "Сообщество"),
  API: L("API", "API", "API", "API"),
} as const;

type MonetizationKey = keyof typeof monetizationTags;
type FeatureKey = keyof typeof featureTags;

export function localizeMonetizationTag(
  lang: LanguageCode,
  value: string,
): string {
  const key = value as MonetizationKey;
  const copy = monetizationTags[key];
  return copy ? t(lang, copy) : value;
}

export function localizeFeatureTag(lang: LanguageCode, value: string): string {
  const key = value as FeatureKey;
  const copy = featureTags[key];
  return copy ? t(lang, copy) : value;
}

export function applyNavTags<T extends { monetization?: string; features?: string }>(
  lang: LanguageCode,
  item: T,
): T {
  return {
    ...item,
    ...(item.monetization
      ? { monetization: localizeMonetizationTag(lang, item.monetization) }
      : {}),
    ...(item.features
      ? { features: localizeFeatureTag(lang, item.features) }
      : {}),
  };
}
