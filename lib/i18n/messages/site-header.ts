import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getHeaderNavItems(lang: LanguageCode) {
  return [
    { href: "/", label: t(lang, L("HOME", "หน้าแรก", "首页", "ГЛАВНАЯ")) },
    { href: "/news", label: t(lang, L("NEWS", "ข่าวสาร", "新闻", "НОВОСТИ")) },
    { href: "/living", label: t(lang, L("LIVING", "การใช้ชีวิต", "生活", "ЖИЗНЬ")) },
    { href: "/explore", label: t(lang, L("EXPLORE", "สำรวจ", "探索", "ПУТЕВОДИТЕЛЬ")) },
    { href: "/business", label: t(lang, L("BUSINESS", "ธุรกิจ", "商业", "БИЗНЕС")) },
  ] as const;
}

export function getHeaderUi(lang: LanguageCode) {
  return {
    searchPlaceholder: t(lang, L("Search...", "ค้นหา...", "搜索...", "Поиск...")),
    menuOpen: t(lang, L("Open menu", "เปิดเมนู", "打开菜单", "Открыть меню")),
    menuClose: t(lang, L("Close menu", "ปิดเมนู", "关闭菜单", "Закрыть меню")),
  };
}
