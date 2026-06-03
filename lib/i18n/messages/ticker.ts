import type { LanguageCode } from "@/lib/i18n/languages";
import { pickText, type LocalizedText } from "@/lib/i18n/text";

const breakingLabel: LocalizedText = {
  en: "Breaking",
  th: "ด่วน",
  zh: "快讯",
  ru: "Срочно",
};

const headlines = {
  home: {
    en: "Major infrastructure upgrade announced for Pattaya Beach Road — construction begins Q3 2025",
    th: "ประกาศปรับปรุงโครงสร้างถนนชายหาดพัทยา — เริ่มก่อสร้าง Q3 2025",
    zh: "芭提雅海滩路重大基建升级公布 — 2025 年第三季度开工",
    ru: "Масштабная модернизация Beach Road — старт строительства Q3 2025",
  },
  news: {
    en: "Pattaya Smart City: 500M THB Beach Road infrastructure overhaul — City Updates",
    th: "Pattaya Smart City: งบ 500 ล้านบาทปรับปรุง Beach Road — อัปเดตเมือง",
    zh: "芭提雅智慧城市：5 亿泰铢海滩路改造 — 城市动态",
    ru: "Smart City Паттайя: 500 млн бат на Beach Road",
  },
  living: {
    en: "90-day reporting window opens next week — visa and retirement updates for Pattaya expats",
    th: "เปิดรอบรายงานตัว 90 วันสัปดาห์หน้า — อัปเดตวีซ่าและเกษียณในพัทยา",
    zh: "90 天报到窗口下周开启 — 芭提雅签证与退休签动态",
    ru: "Окно 90-дневной отчётности — визы и пенсионные визы",
  },
  explore: {
    en: "Koh Larn ferry schedules updated — sunset dining and hidden beach guides",
    th: "อัปเดตเรือเกาะล้าน — ร้านอาหารยามเย็นและคู่มือหาดลับ",
    zh: "格兰岛船班更新 — 日落餐饮与隐秘海滩指南",
    ru: "Обновлено расписание паромов на Ко Лан",
  },
  business: {
    en: "EEC investment briefing in Pattaya — BOI incentives, setup, and networking",
    th: "บรีฟฟิ่งลงทุน EEC ในพัทยา — สิทธิ BOI จัดตั้งบริษัท และเน็ตเวิร์ก",
    zh: "芭提雅 EEC 投资简报 — BOI 优惠、公司设立与社交活动",
    ru: "Брифинг EEC в Паттайе — BOI, регистрация, нетворкинг",
  },
  classifieds: {
    en: "Listings: Jomtien 2BR sea-view condo ฿28,000/mo · Honda City 2021 ฿520K · Visa & TM30 from ฿2,500 · Moving sale furniture in Naklua · Post free on Pattaya.com",
    th: "ประกาศ: คอนโด 2 ห้องนอนวิวทะเล Jomtien ฿28,000/เดือน · Honda City 2021 ฿520K · วีซ่า & TM30 จาก ฿2,500 · ขายเฟอร์นิเจอร์ย้ายบ้านนาเกลือ · ลงประกาศฟรีที่ Pattaya.com",
    zh: "分类信息：仲天海景两卧 ฿28,000/月 · Honda City 2021 ฿520K · 签证与 TM30 起 ฿2,500 · 那库拉搬家甩卖家具 · 免费发布",
    ru: "Объявления: 2BR Jomtien ฿28,000/мес · Honda City ฿520K · виза и TM30 от ฿2,500 · мебель Naklua · бесплатно",
  },
} satisfies Record<string, LocalizedText>;

export type TickerVariant = keyof typeof headlines;

export function tBreakingLabel(lang: LanguageCode): string {
  return pickText(lang, breakingLabel);
}

export function tTickerHeadline(
  lang: LanguageCode,
  variant: TickerVariant,
): string {
  return pickText(lang, headlines[variant]);
}
