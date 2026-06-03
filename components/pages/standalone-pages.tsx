"use client";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { useLanguage } from "@/components/layout/language-provider";
import { buildStandaloneBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import {
  getStandalonePageCopy,
  getStandalonePlaceholderLinks,
} from "@/lib/i18n/messages/standalone-pages";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { L, t } from "@/lib/i18n/living-helpers";
import { EmergencyPage } from "@/components/emergency/emergency-page";
import { PattayaWeatherPage } from "@/components/utilities/pattaya-weather-page";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ShieldCheck, Star } from "lucide-react";

function ComingSoonPanel({
  messageKey,
  linkKey,
}: {
  messageKey: "guideContentSoon" | "directorySoon" | "forumSoon" | "apiWidgetSoon";
  linkKey?: "guide" | "directory/featured" | "forum/trending";
}) {
  const { language } = useLanguage();
  const links = linkKey ? getStandalonePlaceholderLinks(language, linkKey) : [];

  return (
    <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
      <p>{tSiteUi(language, messageKey)}</p>
      {links.length > 0 ? (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {tSiteUi(language, "exploreWhileWaiting")}
          </p>
          <ul className="mt-3 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-teal-600 hover:text-teal-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function GuidePageContent() {
  const { language } = useLanguage();
  const copy = getStandalonePageCopy(language, "guide");

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(language, copy.title, "/guide")}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      <ComingSoonPanel messageKey="guideContentSoon" linkKey="guide" />
    </>
  );
}

export function EmergencyPageContent() {
  return <EmergencyPage />;
}

export function FeaturedDirectoryPageContent() {
  const { language } = useLanguage();
  const copy = getStandalonePageCopy(language, "directory/featured");
  const ui = {
    sectionTitle: t(
      language,
      L("Featured Businesses", "ธุรกิจแนะนำ", "精选商家", "Рекомендуемые бизнесы"),
    ),
    sectionSubtitle: t(
      language,
      L(
        "Handpicked businesses with strong reputations in Pattaya. Use this as a starting point before contacting providers.",
        "คัดเฉพาะธุรกิจที่มีชื่อเสียงในพัทยา ใช้เป็นจุดเริ่มต้นก่อนติดต่อผู้ให้บริการ",
        "精选芭提雅口碑商家，作为联系服务商前的起点。",
        "Подборка бизнесов с сильной репутацией в Паттайе.",
      ),
    ),
    verified: t(language, L("Verified", "ยืนยันแล้ว", "已认证", "Проверено")),
    featured: t(language, L("Featured", "แนะนำ", "精选", "Рекомендуем")),
    viewProfile: t(language, L("View profile", "ดูโปรไฟล์", "查看详情", "Профиль")),
    openDirectory: t(
      language,
      L("Open business hub", "ไปที่ศูนย์ธุรกิจ", "打开商业中心", "Открыть бизнес-хаб"),
    ),
  };

  const businesses = [
    {
      name: "Royal Cliff Hotels Group",
      badge: ui.verified,
      badgeClass: "bg-[#fff7ed] text-[#c2410c]",
      logo: "/logos/royal-cliff.png",
      logoWrapClass: "rounded-full border border-[#e2e8f0] bg-[#f8fafc] p-3 shadow-sm",
      logoClass: "h-14 w-14 object-contain",
      location: "Pratumnak Hill, Pattaya",
      category: t(language, L("Hospitality", "โรงแรม", "酒店", "Гостиницы")),
      href: "/business/guide/hotel",
    },
    {
      name: "Siam Yacht Club",
      badge: ui.featured,
      badgeClass: "bg-[#eff6ff] text-[#1d4ed8]",
      logo: "/logos/siam-yacht-club.png",
      logoWrapClass: "overflow-hidden rounded-full bg-[#1f2759] p-0 shadow-sm",
      logoClass: "h-20 w-20 object-cover",
      location: "Ocean Marina, Na Jomtien",
      category: t(language, L("Marine & Leisure", "เรือและไลฟ์สไตล์", "游艇休闲", "Яхты и leisure")),
      href: "/explore/luxury/yacht",
    },
    {
      name: "Bangkok Hospital Pattaya",
      badge: ui.verified,
      badgeClass: "bg-[#ecfeff] text-[#0f766e]",
      logo: "/logos/bangkok-hospital.png",
      logoWrapClass: "rounded-full border border-[#e2e8f0] bg-[#f8fafc] p-3 shadow-sm",
      logoClass: "h-14 w-14 object-contain",
      location: "North Pattaya Road",
      category: t(language, L("Healthcare", "สุขภาพ", "医疗", "Медицина")),
      href: "/living/healthcare/hospitals",
    },
  ];

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(
          language,
          copy.title,
          "/directory/featured",
        )}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      <section className="mx-auto max-w-[1280px] px-4 pb-16 lg:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#e2e8f0] bg-gradient-to-br from-[#f8fafc] via-white to-[#eff6ff] p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f97316]">
            {ui.sectionTitle}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#0c1a33] sm:text-3xl">
            {copy.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#475569]">
            {ui.sectionSubtitle}
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {businesses.map((biz) => (
              <article
                key={biz.name}
                className="group rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#f97316]/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={biz.logoWrapClass}>
                    <Image
                      src={biz.logo}
                      alt={biz.name}
                      width={80}
                      height={80}
                      className={biz.logoClass}
                    />
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${biz.badgeClass}`}
                  >
                    {biz.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#191c1d]">{biz.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#475569]">{biz.category}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-[#64748b]">
                  <MapPin className="h-3.5 w-3.5 text-[#f97316]" />
                  {biz.location}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 text-[#0f766e]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {ui.verified}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#B8860B]">
                    <Star className="h-3.5 w-3.5" />
                    {ui.featured}
                  </span>
                </div>
                <Link
                  href={biz.href}
                  className="mt-5 inline-flex text-sm font-semibold text-[#0c1a33] transition group-hover:text-[#f97316]"
                >
                  {ui.viewProfile}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center border-t border-[#e2e8f0] pt-6">
            <Link
              href="/business"
              className="inline-flex rounded-2xl bg-[#0c1a33] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#132f52]"
            >
              {ui.openDirectory}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function TrendingForumPageContent() {
  const { language } = useLanguage();
  const copy = getStandalonePageCopy(language, "forum/trending");

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(
          language,
          copy.title,
          "/forum/trending",
        )}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      <ComingSoonPanel messageKey="forumSoon" linkKey="forum/trending" />
    </>
  );
}

type UtilityKey = "utilities/weather" | "utilities/transport" | "utilities/currency";

const utilityPaths: Record<string, UtilityKey> = {
  weather: "utilities/weather",
  transport: "utilities/transport",
  currency: "utilities/currency",
};

export function UtilityPageContent({ utility }: { utility: string }) {
  const { language } = useLanguage();
  const key = utilityPaths[utility];
  if (!key) return null;

  const copy = getStandalonePageCopy(language, key);

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(
          language,
          copy.title,
          `/utilities/${utility}`,
        )}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      {utility === "weather" ? (
        <PattayaWeatherPage />
      ) : (
        <ComingSoonPanel messageKey="apiWidgetSoon" />
      )}
    </>
  );
}
