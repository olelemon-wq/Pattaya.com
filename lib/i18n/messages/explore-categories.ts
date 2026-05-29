import type { LanguageCode } from "@/lib/i18n/languages";
import { pickText, type LocalizedText } from "@/lib/i18n/text";

const labels = {
  beaches: {
    en: "Beaches",
    th: "ชายหาด",
    zh: "海滩",
    ru: "Пляжи",
  },
  islands: {
    en: "Islands",
    th: "เกาะ",
    zh: "岛屿",
    ru: "Острова",
  },
  luxuryDining: {
    en: "Luxury Dining",
    th: "ร้านหรู",
    zh: "高端餐饮",
    ru: "Премиум-рестораны",
  },
  localFood: {
    en: "Local Food",
    th: "อาหารท้องถิ่น",
    zh: "本地美食",
    ru: "Местная еда",
  },
  cafes: {
    en: "Cafes",
    th: "คาเฟ่",
    zh: "咖啡馆",
    ru: "Кафе",
  },
  shopping: {
    en: "Shopping",
    th: "ช้อปปิ้ง",
    zh: "购物",
    ru: "Шопинг",
  },
  markets: {
    en: "Markets",
    th: "ตลาด",
    zh: "市场",
    ru: "Рынки",
  },
  family: {
    en: "Family",
    th: "ครอบครัว",
    zh: "亲子",
    ru: "Семья",
  },
  yacht: {
    en: "Yacht",
    th: "เรือยอชต์",
    zh: "游艇",
    ru: "Яхты",
  },
  hiddenGems: {
    en: "Hidden Gems",
    th: "จุดลับ",
    zh: "秘境",
    ru: "Скрытые места",
  },
  wellness: {
    en: "Wellness",
    th: "เวลเนส",
    zh: "康养",
    ru: "Велнес",
  },
  categoryPages: {
    en: "Category pages",
    th: "หน้าหมวดหมู่",
    zh: "分类页",
    ru: "Страницы категорий",
  },
} satisfies Record<string, LocalizedText>;

export type ExploreCategoryId = keyof typeof labels;

export function tExploreCategory(
  lang: LanguageCode,
  id: ExploreCategoryId,
): string {
  return pickText(lang, labels[id]);
}

export const exploreCategoryNavItems = [
  { id: "beaches" as const, href: "/explore/beaches", icon: "waves" as const, active: true },
  { id: "islands" as const, href: "/explore/islands/koh-larn", icon: "ship" as const },
  { id: "luxuryDining" as const, href: "/explore/restaurants/fine-dining", icon: "chefHat" as const },
  { id: "localFood" as const, href: "/explore/restaurants/street-food", icon: "soup" as const },
  { id: "cafes" as const, href: "/explore/cafes", icon: "coffee" as const },
  { id: "shopping" as const, href: "/explore/shopping/malls", icon: "shoppingBag" as const },
  { id: "markets" as const, href: "/explore/shopping/markets", icon: "store" as const },
  { id: "family" as const, href: "/explore/family-activities", icon: "users" as const },
  { id: "yacht" as const, href: "/explore/luxury/yacht", icon: "anchor" as const },
  { id: "hiddenGems" as const, href: "/explore/hidden-gems", icon: "gem" as const },
  { id: "wellness" as const, href: "/explore/wellness", icon: "sparkles" as const },
];
