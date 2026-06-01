import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getFooterCopy(lang: LanguageCode) {
  return {
    description: t(
      lang,
      L(
        "The Seamless Hybrid City Hub — connecting expats, tourists, and local businesses through trusted information and community.",
        "ศูนย์กลางเมืองไฮบริดที่เชื่อมชาวต่างชาติ นักท่องเที่ยว และธุรกิจท้องถิ่นผ่านข้อมูลที่เชื่อถือได้และชุมชน",
        "无缝融合城市枢纽——通过可信信息与社区连接外籍人士、游客和本地企业。",
        "Гибридный городской хаб, объединяющий экспатов, туристов и местный бизнес через проверенную информацию и сообщество。",
      ),
    ),
    networkTitle: t(lang, L("Network", "เครือข่าย", "网络", "Сеть")),
    connectTitle: t(lang, L("Connect", "ติดต่อ", "联系", "Связь")),
  };
}

export function getFooterNetworkLinks(lang: LanguageCode) {
  return [
    {
      key: "investment",
      label: t(lang, L("Investment Portal", "พอร์ทัลการลงทุน", "投资门户", "Инвестиционный портал")),
      href: "/business/investment/real-estate",
    },
    {
      key: "real-estate-index",
      label: t(lang, L("Real Estate Index", "ดัชนีอสังหาริมทรัพย์", "房地产指数", "Индекс недвижимости")),
      href: "/news/business/real-estate",
    },
    {
      key: "visa-services",
      label: t(lang, L("Visa Services", "บริการวีซ่า", "签证服务", "Визовые услуги")),
      href: "/living/visa/retirement",
    },
    {
      key: "business-directory",
      label: t(lang, L("Business Directory", "ไดเรกทอรีธุรกิจ", "商业目录", "Бизнес-каталог")),
      href: "/directory/featured",
    },
  ] as const;
}

export function getFooterConnectLinks(lang: LanguageCode) {
  return [
    {
      key: "advertise",
      label: t(lang, L("Advertise With Us", "ลงโฆษณากับเรา", "与我们合作投放广告", "Реклама у нас")),
      href: "#",
    },
    { key: "sitemap", label: t(lang, L("Sitemap", "แผนผังเว็บไซต์", "网站地图", "Карта сайта")), href: "#" },
    {
      key: "privacy",
      label: t(lang, L("Privacy Policy", "นโยบายความเป็นส่วนตัว", "隐私政策", "Политика конфиденциальности")),
      href: "#",
    },
    { key: "contact", label: t(lang, L("Contact", "ติดต่อเรา", "联系我们", "Контакты")), href: "#" },
  ] as const;
}

export function getFooterCopyright(lang: LanguageCode, year: number) {
  return t(
    lang,
    L(
      `© ${year} Pattaya.com — The Seamless Hybrid City Hub. All Rights Reserved.`,
      `© ${year} Pattaya.com — ศูนย์กลางเมืองไฮบริด สงวนลิขสิทธิ์`,
      `© ${year} Pattaya.com — 无缝融合城市枢纽。保留所有权利。`,
      `© ${year} Pattaya.com — Гибридный городской хаб. Все права защищены.`,
    ),
  );
}
