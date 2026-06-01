import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getHiddenGemGuideIntro,
  getHiddenGemGuideItems,
  getHiddenGemMoodPicks,
  getHiddenGemSecretRoute,
} from "@/lib/i18n/messages/explore-hidden-gems-guide";

export function getHiddenGemsTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Explorer notes", "บันทึกนักเดินทาง", "探索者笔记", "Заметки")),
    subtitle: t(
      lang,
      L(
        "Practical habits for quieter corners — no tour sales on this page.",
        "นิสัยที่ช่วยเดินจุดเงียบ — หน้านี้ไม่ขายทัวร์",
        "安静角落的实用习惯——本页不售行程。",
        "Практика для тихих мест — без туров.",
      ),
    ),
    items: [
      {
        id: "timing" as const,
        title: t(lang, L("Timing beats the crowd", "เวลาชนะฝูง", "时间胜过人群", "Время важнее")),
        paragraphs: [
          t(
            lang,
            L(
              "Cave Beach Club before 10:00, Khao Chi Chan at golden hour, Bang Saray in the evening — famous names can still feel quiet if you pick the hour.",
              "Cave Beach Club ก่อน 10 โมง เขาชีจรรย์ช่วงเย็น บางเสร่ตอนพระอาทิตย์ตก — ที่ดังก็ยังเงียบได้ถ้าเลือกเวลา",
              "Cave Beach Club 10点前、Khao Chi Chan 黄金时刻、Bang Saray 傍晚——名店选对时间仍可很安静。",
              "Известные места тихи в правильный час — например Cave до 10:00.",
            ),
          ),
          t(
            lang,
            L(
              "Mabprachan mornings and Dicey Reilly’s after 20:00 are different worlds from Beach Road at midnight.",
              "เช้าริมอ่างมาบประชัน กับ Dicey Reilly's หลัง 20:00 คนละโลกกับ Beach Road เที่ยงคืน",
              "Mabprachan 早晨与 20:00 后的 Dicey Reilly's，与午夜海滩路是两种世界。",
              "Озеро утром и бар вечером — не Beach Road в полночь.",
            ),
          ),
        ],
      },
      {
        id: "respect" as const,
        title: t(lang, L("Respect locals", "เคารพคนท้องถิ่น", "尊重当地人", "Уважение")),
        paragraphs: [
          t(
            lang,
            L(
              "Residential sois are not photo studios — ask before shooting homes, temples, fishing boats, or market vendors up close.",
              "ซอยที่อยู่อาศัยไม่ใช่สตูดิโอ — ถามก่อนถ่ายบ้าน วัด เรือประมง หรือแม่ค้าใกล้ๆ",
              "住宅巷不是摄影棚 — 拍摄房屋、寺庙、渔船或近拍摊主前先询问。",
              "Спрашивайте перед съёмкой домов и лодок.",
            ),
          ),
          t(
            lang,
            L(
              "Dress modestly near temples on Pratumnak Hill and keep voices down in Naklua village lanes after dark.",
              "แต่งกายสุภาพใกล้วัดบนเขาพระตำหนัก และลดเสียงในซอยนาเกลือหลังค่ำ",
              "Pratumnak 寺庙附近衣着得体；Naklua 村巷夜间放低音量。",
              "Скромная одежда у храмов; тише в Naklua вечером.",
            ),
          ),
        ],
      },
      {
        id: "nav" as const,
        title: t(lang, L("Maps & taxis", "แผนที่ & รถ", "地图与交通", "Карты и такси")),
        paragraphs: [
          t(
            lang,
            L(
              "Screenshot Maps pins and Thai place names for drivers — many Naklua and hill sois have little English signage.",
              "แคปหมุด Maps และชื่อไทยให้คนขับ — ซอยนาเกลือและเขาหลายที่ไม่มีป้ายอังกฤษ",
              "截图 Maps 钉点与泰文地名给司机 — 那库拉与上山许多巷无英文标识。",
              "Сохраните Thai названия для водителя.",
            ),
          ),
          t(
            lang,
            L(
              "Songthaews work for beach-road loops; Grab is easier for hill returns. Agree songthaew price before chartering off-route.",
              "สองแถวเหมาะวนเลียบหาด Grab สะดวกลงเขา — ถ้าเหมาสองแถวออกนอกเส้นทางตกลงราคาก่อน",
              "海滩路环线双条车可行；下山 Grab 更省事——包车须先讲价。",
              "Songthaew по Beach Rd; Grab с холма.",
            ),
          ),
        ],
      },
      {
        id: "food" as const,
        title: t(lang, L("Pair with food guides", "จับคู่คู่มืออาหาร", "搭配美食指南", "Еда рядом")),
        paragraphs: [
          t(
            lang,
            L(
              "Je Tum in Bang Saray after the beach; Pa Tid in Naklua after the market — both are «locals eat here» stops from this list.",
              "เจ๊ตุ้มบางเสร่หลังเล่นหาด ครัวป้าติ๊ดนาเกลือหลังตลาด — สองร้าน local จากลิสต์นี้",
              "海滩后去 Bang Saray 的 Je Tum；早市后去那库鲁阿的 Pa Tid——本清单上的本地人食堂。",
              "Je Tum после пляжа; Pa Tid после рынка Naklua.",
            ),
          ),
          t(
            lang,
            L(
              "Driving south? See the Pattaya → Na Jomtien → Bang Saray → Sattahip route block above and our street-food guide for more stops.",
              "ขับลงใต้? ดูเส้นทางด้านบน และคู่มือ street food สำหรับจุดแวะเพิ่ม",
              "自驾南下？看上方路线，并参考 street food 指南更多停靠点。",
              "На юг — маршрут выше + гид street food.",
            ),
          ),
        ],
      },
    ],
  };
}

/** Editorial series on `/explore/hidden-gems` — same page, shared copy source */
export function getHiddenGemsSeriesName(lang: LanguageCode) {
  return t(
    lang,
    L(
      "Pattaya, going deeper",
      "พัทยาฉบับคนเริ่มรู้ลึก",
      "芭提雅·开始深入了解",
      "Паттайя: глубже",
    ),
  );
}

export function getHiddenGemsPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  const seriesName = getHiddenGemsSeriesName(lang);
  const spotsTitle = t(lang, L("Hidden gems", "จุดลับ", "秘境", "Секретные места"));

  return {
    seoTitle: t(
      lang,
      L(
        "Pattaya, going deeper — hidden gems",
        "พัทยาฉบับคนเริ่มรู้ลึก — จุดลับ",
        "芭提雅深入了解 — 秘境",
        "Паттайя глубже — секретные места",
      ),
    ),
    breadcrumb: {
      explore: c.explore,
      current: seriesName,
    },
    hero: {
      badge: seriesName,
      title: spotsTitle,
      subtitle: t(
        lang,
        L(
          "Beyond Walking Street — when you start knowing Pattaya past the beach strip",
          "นอก Walking Street — เมื่อเริ่มรู้จักพัทยาเกินหาดกลาง",
          "超越步行街——开始了解海滩路以外的芭提雅",
          "За пределами Walking Street — Паттайя глубже пляжа",
        ),
      ),
      body: t(
        lang,
        L(
          "Not just famous landmarks — cafés, Bang Saray, local seafood, quiet bars, sunset hills, and lake mornings. Nine spots where locals still outnumber tour buses; Maps links only.",
          "ไม่ใช่แค่แลนด์มาร์ก — คาเฟ่ บางเสร่ ซีฟู้ด local บาร์เงียบ จุดพระอาทิตย์ตก และเช้าริมอ่าง 9 จุดที่คนพัทยายังมากกว่ารถทัวร์ มีแค่ลิงก์แผนที่",
          "不只是地标——咖啡、班萨拉伊、本地海鲜、安静酒吧、日落山与湖畔清晨。九处本地人仍多于旅游大巴，仅链地图。",
          "9 мест, где местных больше, чем автобусов — только Maps.",
        ),
      ),
      badgeQuiet: t(lang, L("Quieter corners", "มุมเงียบ", "安静角落", "Тихие уголки")),
      badgeTiming: t(lang, L("Timing matters", "เวลาสำคัญ", "时间很重要", "Время важно")),
    },
    guide: getHiddenGemGuideIntro(lang),
    guideItems: getHiddenGemGuideItems(lang),
    moodPicks: getHiddenGemMoodPicks(lang),
    secretRoute: getHiddenGemSecretRoute(lang),
    tips: getHiddenGemsTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      mainBeaches: c.mainBeaches,
      localMarkets: c.localMarkets,
      streetFood: c.streetFood,
      cafesLink: c.cafesLink,
    },
  };
}
