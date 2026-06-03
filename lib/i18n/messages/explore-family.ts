import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getFamilyAgeSchedule,
  getFamilyDiningSection,
  getFamilyGuideCategories,
  getFamilyGuideIntro,
  getFamilyThreeDayPlan,
  getFamilyYoungKidsSection,
} from "@/lib/i18n/messages/explore-family-activities-guide";
import { marketPagePaths } from "@/lib/design/market-page-paths";

export function getFamilyTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Tips for traveling with kids", "ทริคพาเด็กเที่ยวพัทยา", "带娃游芭提雅贴士", "Советы с детьми")),
    subtitle: t(
      lang,
      L(
        "Straightforward notes on sun, traffic, snacks, and backup plans — nothing sponsored on this page.",
        "เรื่องแดด รถ ขนม แผนสำรอง — หน้านี้ไม่มีโฆษณา",
        "防晒、交通、零食与备选方案——本页无商业推广。",
        "Простые советы без рекламы.",
      ),
    ),
    items: [
      {
        id: "sun" as const,
        title: t(lang, L("Avoid midday sun", "หลีกเลี่ยงแดดเที่ยง", "避开正午暴晒", "Полдень")),
        paragraphs: [
          t(
            lang,
            L(
              "Kids tire fast in peak sun — plan water parks or indoor stops for 11:00–15:00 and save the beach for morning or late afternoon.",
              "เด็กหมดแรงไวตอนแดดแรง — วางสวนน้ำหรือในร่มช่วง 11:00–15:00 เก็บหาดไว้เช้าหรือเย็น",
              "正午孩子很快累——11–15点安排室内或水上乐园，海滩放早晚。",
              "В полдень — тень или крытые места.",
            ),
          ),
        ],
      },
      {
        id: "traffic" as const,
        title: t(lang, L("Allow extra travel time", "เผื่อเวลาเดินทาง", "预留交通时间", "Время в пути")),
        paragraphs: [
          t(
            lang,
            L(
              "Pattaya traffic stacks up more than maps suggest around 17:00–19:00 — leave buffer before ferry or show times.",
              "รถติดพัทยามากกว่าที่คิดช่วง 17:00–19:00 — เผื่อเวลาก่อนเรือหรือโชว์",
              "芭提雅17–19点堵车常超预期——赶船或演出要多留时间。",
              "Вечером пробки — закладывайте запас.",
            ),
          ),
        ],
      },
      {
        id: "snacks" as const,
        title: t(lang, L("Water & snacks matter", "น้ำ + ขนมสำคัญ", "水与零食", "Вода и перекус")),
        paragraphs: [
          t(
            lang,
            L(
              "Especially on Koh Larn — stalls are fewer once you leave the main beach. Pack drinks, simple snacks, and reapply SPF every two hours.",
              "โดยเฉพาะเกาะล้าน — พกน้ำ ขนม ทากันแดดทุก 2 ชม.",
              "格兰岛尤其要带饮水与零食，每两小时补防晒。",
              "На Ко Лан берите воду и SPF.",
            ),
          ),
        ],
      },
      {
        id: "rain" as const,
        title: t(lang, L("Always have an indoor backup", "มี indoor backup เสมอ", "备好室内备选", "Запасной план")),
        paragraphs: [
          t(
            lang,
            L(
              "Gulf weather turns quickly — HarborLand, Underwater World, or a mall food court can save a washed-out afternoon.",
              "ฝนทะเลมาไว — HarborLand, Underwater World หรือฟู้ดคอร์ทห้างช่วยชีวิตบ่ายฝนตก",
              "海湾天气变脸快——室内游乐场、水族馆或商场可救场。",
              "Дождь — аквариум, HarborLand или ТРЦ.",
            ),
          ),
        ],
      },
      {
        id: "pace" as const,
        title: t(lang, L("Do not over-pack the day", "อย่ายัดแน่นเกิน", "别排太满", "Не перегружайте")),
        paragraphs: [
          t(
            lang,
            L(
              "Kids often have the most fun with free play time — one main activity plus downtime beats racing four tickets in one day.",
              "เด็กสนุกสุดตอนมีเวลาวิ่งเล่นเฉย ๆ — กิจกรรมหลักหนึ่งอย่าง + พัก ดีกว่ายัด 4 ที่ในวันเดียว",
              "孩子最需要自由玩耍时间——一天一个主活动加休息，好过赶四张票。",
              "Одно главное место + отдых лучше четырех подряд.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getFamilyActivitiesPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      current: t(lang, L("Family Activities", "กิจกรรมครอบครัว", "亲子活动", "Семейный отдых")),
    },
    hero: {
      badge: c.family,
      title: t(lang, L("Family Activities", "กิจกรรมครอบครัว", "亲子活动", "Семейный отдых")),
      subtitle: t(
        lang,
        L(
          "Kids have fun · parents do not burn out",
          "เด็กสนุก · ผู้ใหญ่ไม่เหนื่อยเกิน",
          "孩子开心 · 家长不太累",
          "Детям весело · родителям не тяжело",
        ),
      ),
      body: t(
        lang,
        L(
          "Sea, water parks, zoos, cafés, malls, and kid zones — Pattaya is an easy family city when you pick the right mix.",
          "ทะเล สวนน้ำ สวนสัตว์ คาเฟ่ ห้าง โซนเด็ก — พัทยาเที่ยวครอบครัวง่ายถ้าเลือกจุดถูก",
          "海、水上乐园、动物园、咖啡馆、商场与儿童区——点对地方，芭提雅很适合家庭。",
          "Море, аквапарки, зоопарки и ТРЦ — Паттайя удобна для семьи.",
        ),
      ),
      badgeAreas: t(
        lang,
        L(
          "Aquaverse · Zoo · Koh Larn · HarborLand · Nong Nooch",
          "อควาเวิร์ส · เขาเขียว · เกาะล้าน · HarborLand · นงนุช",
          "Aquaverse · 动物园 · 格兰岛 · HarborLand · 东芭",
          "Aquaverse · Khao Kheow · Ko Lan · HarborLand",
        ),
      ),
      image: "/images/explore/family-activities-hero.png",
    },
    guide: getFamilyGuideIntro(lang),
    schedule: getFamilyAgeSchedule(lang),
    categories: getFamilyGuideCategories(lang),
    youngKids: getFamilyYoungKidsSection(lang),
    dining: getFamilyDiningSection(lang),
    threeDayPlan: getFamilyThreeDayPlan(lang),
    tips: getFamilyTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      kohLarnDayTrip: c.kohLarnDayTrip,
      mainBeaches: c.mainBeaches,
      streetFood: c.streetFood,
      shoppingMalls: c.shoppingMalls,
      markets: t(lang, L("Local markets", "ตลาดท้องถิ่น", "本地市场", "Рынки")),
      marketsHref: marketPagePaths.page,
    },
  };
}
