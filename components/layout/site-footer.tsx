"use client";

import Link from "next/link";
import { pickText } from "@/lib/i18n/text";
import { useLanguage } from "./language-provider";

const networkLinks = [
  {
    label: {
      en: "Investment Portal",
      th: "พอร์ทัลการลงทุน",
      zh: "投资门户",
      ru: "Инвестиционный портал",
    },
    href: "/business/investment/real-estate",
  },
  {
    label: {
      en: "Real Estate Index",
      th: "ดัชนีอสังหาริมทรัพย์",
      zh: "房地产指数",
      ru: "Индекс недвижимости",
    },
    href: "/news/business/real-estate",
  },
  {
    label: {
      en: "Visa Services",
      th: "บริการวีซ่า",
      zh: "签证服务",
      ru: "Визовые услуги",
    },
    href: "/living/visa/retirement",
  },
  {
    label: {
      en: "Business Directory",
      th: "ไดเรกทอรีธุรกิจ",
      zh: "商业目录",
      ru: "Бизнес-каталог",
    },
    href: "/directory/featured",
  },
];

const connectLinks = [
  {
    label: {
      en: "Advertise With Us",
      th: "ลงโฆษณากับเรา",
      zh: "与我们合作投放广告",
      ru: "Реклама у нас",
    },
    href: "#",
  },
  {
    label: { en: "Sitemap", th: "แผนผังเว็บไซต์", zh: "网站地图", ru: "Карта сайта" },
    href: "#",
  },
  {
    label: {
      en: "Privacy Policy",
      th: "นโยบายความเป็นส่วนตัว",
      zh: "隐私政策",
      ru: "Политика конфиденциальности",
    },
    href: "#",
  },
  {
    label: { en: "Contact", th: "ติดต่อเรา", zh: "联系我们", ru: "Контакты" },
    href: "#",
  },
];

export function SiteFooter() {
  const { language } = useLanguage();

  return (
    <footer className="mt-8 bg-[#0c1a33] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-6">
        <div>
          <p className="text-lg font-extrabold tracking-tight">PATTAYA.COM</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            {pickText(language, {
              en: "The Seamless Hybrid City Hub — connecting expats, tourists, and local businesses through trusted information and community.",
              th: "ศูนย์กลางเมืองไฮบริดที่เชื่อมชาวต่างชาติ นักท่องเที่ยว และธุรกิจท้องถิ่นผ่านข้อมูลที่เชื่อถือได้และชุมชน",
              zh: "无缝融合城市枢纽——通过可信信息与社区连接外籍人士、游客和本地企业。",
              ru: "Гибридный городской хаб, объединяющий экспатов, туристов и местный бизнес через проверенную информацию и сообщество.",
            })}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
            {pickText(language, { en: "Network", th: "เครือข่าย", zh: "网络", ru: "Сеть" })}
          </h3>
          <ul className="space-y-2.5">
            {networkLinks.map((link) => (
              <li key={link.label.en}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#f97316]"
                >
                  {pickText(language, link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
            {pickText(language, {
              en: "Connect",
              th: "ติดต่อ",
              zh: "联系",
              ru: "Связь",
            })}
          </h3>
          <ul className="space-y-2.5">
            {connectLinks.map((link) => (
              <li key={link.label.en}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#f97316]"
                >
                  {pickText(language, link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1280px] px-4 py-4 text-center text-[10px] uppercase tracking-[0.12em] text-white/40 lg:px-6">
          {pickText(language, {
            en: `© ${new Date().getFullYear()} Pattaya.com — The Seamless Hybrid City Hub. All Rights Reserved.`,
            th: `© ${new Date().getFullYear()} Pattaya.com — ศูนย์กลางเมืองไฮบริด สงวนลิขสิทธิ์`,
            zh: `© ${new Date().getFullYear()} Pattaya.com — 无缝融合城市枢纽。保留所有权利。`,
            ru: `© ${new Date().getFullYear()} Pattaya.com — Гибридный городской хаб. Все права защищены.`,
          })}
        </p>
      </div>
    </footer>
  );
}
