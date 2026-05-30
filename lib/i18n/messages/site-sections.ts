import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const sections = {
  news: {
    label: L("News", "ข่าวสาร", "新闻", "Новости"),
    description: L(
      "Pattaya news, expat updates, and local happenings",
      "ข่าวพัทยา อัปเดตชาวต่างชาติ และเหตุการณ์ท้องถิ่น",
      "芭提雅新闻、外籍资讯与本地动态",
      "Новости Паттайи и expat-обновления",
    ),
  },
  living: {
    label: L("Living", "การอยู่อาศัย", "生活", "Жизнь"),
    description: L(
      "Expat guides, housing, healthcare, and daily life in Pattaya",
      "คู่มือชาวต่างชาติ ที่อยู่ สุขภาพ และชีวิตประจำวันในพัทยา",
      "外籍指南、住房、医疗与芭提雅日常生活",
      "Гайды, жильё, медицина и быт в Паттайе",
    ),
  },
  explore: {
    label: L("Explore", "ท่องเที่ยว", "探索", "Обзор"),
    description: L(
      "Beaches, restaurants, activities, and hidden gems",
      "ชายหาด ร้านอาหาร กิจกรรม และจุดลับ",
      "海滩、餐厅、活动与秘境",
      "Пляжи, рестораны, активности и hidden gems",
    ),
  },
  business: {
    label: L("Business", "ธุรกิจ", "商业", "Бизнес"),
    description: L(
      "Company setup, investment guides, and B2B networking",
      "จดทะเบียนบริษัท คู่มือลงทุน และเครือข่าย B2B",
      "公司注册、投资指南与 B2B 社交",
      "Регистрация компаний, инвестиции и B2B",
    ),
  },
} as const;

export type SiteSectionId = keyof typeof sections;

export function getSiteSectionCopy(lang: LanguageCode, sectionId: string) {
  const copy = sections[sectionId as SiteSectionId];
  if (!copy) return null;
  return {
    label: t(lang, copy.label),
    description: t(lang, copy.description),
  };
}
