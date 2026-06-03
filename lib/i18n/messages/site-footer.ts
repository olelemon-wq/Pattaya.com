import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getHeaderNavItems } from "@/lib/i18n/messages/site-header";

export function getFooterCopy(lang: LanguageCode) {
  return {
    description: t(
      lang,
      L(
        "News, community guides, local spots, business intel, and listings — your daily Pattaya hub.",
        "ข่าวสาร คู่มือชุมชน รอบเมือง ธุรกิจ และประกาศ — ทุกอย่างที่ต้องรู้ในพัทยา",
        "新闻、社区指南、本地探索、商业资讯与分类信息——您的芭提雅每日枢纽。",
        "Новости, сообщество, город, бизнес и объявления — ваш ежедневный хаб Паттайи.",
      ),
    ),
    sectionsTitle: t(lang, L("Main Sections", "หมวดหลัก", "主要栏目", "Разделы")),
    connectTitle: t(lang, L("Quick Links", "ลิงก์ด่วน", "快捷链接", "Быстрые ссылки")),
  };
}

export function getFooterSectionLinks(lang: LanguageCode) {
  return getHeaderNavItems(lang).map((item) => ({
    key: item.href,
    label: item.label,
    href: item.href,
  }));
}

export function getFooterConnectLinks(lang: LanguageCode) {
  return [
    {
      key: "emergency",
      label: t(lang, L("Emergency Guide", "คู่มือฉุกเฉิน", "紧急指南", "Экстренная помощь")),
      href: "/emergency",
    },
    {
      key: "events",
      label: t(lang, L("Events Calendar", "ปฏิทินอีเวนต์", "活动日历", "Календарь событий")),
      href: "/events",
    },
    {
      key: "forum",
      label: t(lang, L("Community Forum", "ฟอรัมชุมชน", "社区论坛", "Форум")),
      href: "/forum/trending",
    },
    {
      key: "weather",
      label: t(lang, L("Pattaya Weather", "สภาพอากาศพัทยา", "芭提雅天气", "Погода в Паттайе")),
      href: "/utilities/weather",
    },
    {
      key: "contact",
      label: t(lang, L("Contact Us", "ติดต่อเรา", "联系我们", "Связаться с нами")),
      href: "#",
    },
  ] as const;
}

export function getFooterCopyright(lang: LanguageCode, year: number) {
  return t(
    lang,
    L(
      `© ${year} Pattaya.com. All rights reserved.`,
      `© ${year} Pattaya.com สงวนลิขสิทธิ์`,
      `© ${year} Pattaya.com 保留所有权利。`,
      `© ${year} Pattaya.com. Все права защищены.`,
    ),
  );
}