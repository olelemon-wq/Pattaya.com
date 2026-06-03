import type { LanguageCode } from "@/lib/i18n/languages";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getFineDiningFirstVisitPicks,
  getFineDiningGuideIntro,
  getFineDiningGuideItems,
  getFineDiningMoodPicks,
  getFineDiningTips,
} from "@/lib/i18n/messages/explore-fine-dining-guide";

export const fineDiningUi = {
  explore: L("Explore", "สำรวจ", "探索", "Explore"),
  restaurants: L("Restaurants", "ร้านอาหาร", "餐厅", "Рестораны"),
  fineDining: L("Fine Dining", "ร้านอาหารหรู", "精致餐饮", "Fine dining"),
  heroSub: L(
    "Rooftops, tasting menus & bay views",
    "Rooftop · เทสต์เมนู · วิวอ่าว",
    "屋顶、品鉴菜单与海湾景观",
    "Rooftop и дегустации",
  ),
  heroImageAlt: L(
    "Luxury fine dining in Pattaya",
    "ร้านอาหารหรูในพัทยา",
    "芭提雅精致餐饮",
    "Fine dining в Паттайе",
  ),
  heroBody: L(
    "Pattaya now has serious rooftops, chef-driven rooms, and wine-forward tables — not only hotel restaurants. Book directly with each venue.",
    "พัทยามี rooftop, chef's table และร้านไวน์จริงจังแล้ว — จองตรงกับร้าน",
    "芭提雅已有正经屋顶餐厅、主厨驱动空间与葡萄酒餐桌——请直接向餐厅预订。",
    "Бронируйте напрямую у ресторана.",
  ),
} as const;

export function tFineDining(lang: LanguageCode, key: keyof typeof fineDiningUi): string {
  return t(lang, fineDiningUi[key]);
}

export function getFineDiningPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      restaurants: t(lang, fineDiningUi.restaurants),
      current: t(lang, fineDiningUi.fineDining),
    },
    hero: {
      badge: t(lang, fineDiningUi.restaurants),
      title: t(lang, fineDiningUi.fineDining),
      subtitle: t(lang, fineDiningUi.heroSub),
      body: t(lang, fineDiningUi.heroBody),
      badgeSunset: t(lang, L("Sunset tables", "โต๊ะ sunset", "日落位", "Закат")),
      badgeWine: t(lang, L("Wine & tasting menus", "ไวน์ & เทสต์เมนู", "葡萄酒与品鉴", "Вино")),
    },
    guide: getFineDiningGuideIntro(lang),
    guideItems: getFineDiningGuideItems(lang),
    moodPicks: getFineDiningMoodPicks(lang),
    firstVisit: getFineDiningFirstVisitPicks(lang),
    tips: getFineDiningTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      streetFood: {
        label: t(
          lang,
          L("Local & street food", "อาหารท้องถิ่น & สตรีทฟู้ด", "本地与街头美食", "Еда"),
        ),
        href: marketPagePaths.streetFoodThepprasit,
      },
      localMarkets: { label: c.localMarkets, href: marketPagePaths.page },
      cafes: { label: c.cafesLink, href: "/explore/cafes" },
    },
  };
}
