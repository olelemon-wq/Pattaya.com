import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const pages = {
  guide: {
    title: L("Pattaya Guide", "คู่มือเมืองพัทยา", "芭提雅指南", "Гид по Паттайе"),
    description: L(
      "Your essential guide to navigating Pattaya — neighborhoods, basics, and must-know tips.",
      "คู่มือจำเป็นสำหรับพัทยา — ย่าน พื้นฐาน และเคล็ดลับที่ควรรู้",
      "芭提雅必备指南：街区、基础信息与实用贴士。",
      "Необходимый гид: районы, основы и советы.",
    ),
    badge: L("Home Widget", "วิดเจ็ตหน้าแรก", "首页组件", "Виджет"),
  },
  emergency: {
    title: L("Emergency Contacts", "เบอร์ฉุกเฉิน", "紧急联系方式", "Экстренные номера"),
    description: L(
      "Keep these numbers handy for emergencies in Pattaya.",
      "เก็บเบอร์เหล่านี้ไว้สำหรับเหตุฉุกเฉินในพัทยา",
      "在芭提雅遇到紧急情况请保存这些号码。",
      "Сохраните номера на случай экстренной ситуации.",
    ),
    badge: L("Home Widget", "วิดเจ็ตหน้าแรก", "首页组件", "Виджет"),
  },
  "directory/featured": {
    title: L("Featured Businesses", "ธุรกิจแนะนำ", "精选商家", "Рекомендуемые"),
    description: L(
      "Discover top-rated and sponsored businesses in Pattaya.",
      "ค้นพบธุรกิจยอดนิยมและสปอนเซอร์ในพัทยา",
      "发现芭提雅高评分与赞助商家。",
      "Лучшие и спонсируемые бизнесы Паттайи.",
    ),
    badge: L("Directory", "ไดเรกทอรี", "目录", "Каталог"),
  },
  "forum/trending": {
    title: L("Trending Forum", "กระทู้ยอดนิยม", "热门论坛", "Популярное на форуме"),
    description: L(
      "See what the Pattaya community is talking about right now.",
      "ดูว่าชุมชนพัทยากำลังพูดถึงอะไร",
      "看看芭提雅社区正在讨论什么。",
      "О чём сейчас говорит сообщество Паттайи.",
    ),
    badge: L("Community", "ชุมชน", "社区", "Сообщество"),
  },
  "utilities/weather": {
    title: L("Weather", "สภาพอากาศ", "天气", "Погода"),
    description: L(
      "Current weather conditions and forecast for Pattaya.",
      "สภาพอากาศและพยากรณ์ล่าสุดสำหรับพัทยา",
      "芭提雅当前天气与预报。",
      "Текущая погода и прогноз для Паттайи.",
    ),
    badge: L("Utility Widget", "วิดเจ็ตยูทิลิตี้", "实用组件", "Виджет"),
  },
  "utilities/transport": {
    title: L("Traffic & Transport", "การเดินทาง", "交通出行", "Транспорт"),
    description: L(
      "Road conditions, local transport, and U-Tapao airport info.",
      "สภาพถนน การเดินทางท้องถิ่น และข้อมูลสนามบิน U-Tapao",
      "路况、本地交通与乌塔保机场信息。",
      "Дороги, транспорт и аэропорт U-Tapao.",
    ),
    badge: L("Utility Widget", "วิดเจ็ตยูทิลิตี้", "实用组件", "Виджет"),
  },
  "utilities/currency": {
    title: L("Currency Rates", "ค่าเงิน", "汇率", "Курсы валют"),
    description: L(
      "Live exchange rates for major currencies in Thailand.",
      "อัตราแลกเปลี่ยนล่าสุดสำหรับสกุลเงินหลักในไทย",
      "泰国主要货币实时汇率。",
      "Актуальные курсы основных валют в Таиланде.",
    ),
    badge: L("Utility Widget", "วิดเจ็ตยูทิลิตี้", "实用组件", "Виджет"),
  },
} as const;

const emergencyServices = {
  "tourist-police": L("Tourist Police", "Tourist Police", "旅游警察", "Tourist Police"),
  "city-call-center": L("City Call Center", "ศูนย์บริการ 1337", "市政热线", "Call Center 1337"),
  "medical-ems": L("Medical (EMS)", "แพทย์ฉุกเฉิน (1669)", "医疗急救", "Скорая (1669)"),
  "fire-dept": L("Fire Dept", "ดับเพลิง", "消防", "Пожарная"),
  "marine-police": L("Marine Police", "ตำรวจทางน้ำ", "水警", "Морская полиция"),
  immigration: L("Immigration", "ตรวจคนเข้าเมือง", "移民局", "Immigration"),
} as const;

export type EmergencyServiceId = keyof typeof emergencyServices;

export type StandalonePageKey = keyof typeof pages;

export function getStandalonePageCopy(lang: LanguageCode, key: StandalonePageKey) {
  const copy = pages[key];
  return {
    title: t(lang, copy.title),
    description: t(lang, copy.description),
    badge: t(lang, copy.badge),
  };
}

export function getEmergencyServiceName(
  lang: LanguageCode,
  id: EmergencyServiceId,
): string {
  return t(lang, emergencyServices[id]);
}
