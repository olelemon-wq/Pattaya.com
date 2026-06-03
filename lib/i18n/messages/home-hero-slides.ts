import type { LanguageCode } from "@/lib/i18n/languages";
import { businessImages } from "@/lib/design/business-images";
import { exploreImages } from "@/lib/design/explore-images";
import { livingImages } from "@/lib/design/living-images";
import { newsImages } from "@/lib/design/news-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { tBusiness } from "@/lib/i18n/messages/business-hub";
import { getClassifiedsHub } from "@/lib/i18n/messages/classifieds-hub";
import { getEventsHub } from "@/lib/i18n/messages/events-hub";
import { tExplore } from "@/lib/i18n/messages/explore-hub";
import { livingHero } from "@/lib/i18n/messages/living/hub";
import { newsHero, tNewsHero } from "@/lib/i18n/messages/news-hub";

const EVENTS_HERO_IMAGE = "/images/events/events-hero-pattaya-festival.png";

const sliderUi = {
  prev: L("Previous slide", "สไลด์ก่อนหน้า", "上一张", "Предыдущий слайд"),
  next: L("Next slide", "สไลด์ถัดไป", "下一张", "Следующий слайд"),
  carousel: L("Hub highlights", "ไฮไลต์แต่ละหมวด", "各栏目精选", "Разделы сайта"),
  goToSlide: L(
    "Go to slide {n} of {total}",
    "ไปสไลด์ที่ {n} จาก {total}",
    "转到第 {n} 张，共 {total} 张",
    "Слайд {n} из {total}",
  ),
};

const exploreSlide = {
  category: L("Explore", "รอบเมือง", "探索", "Обзор"),
  featuredLabel: L("Explore", "รอบเมือง", "探索", "Обзор"),
  ctaLabel: L("Discover Pattaya", "ค้นพบพัทยา", "探索芭提雅", "Открыть раздел"),
};

const eventsSlide = {
  ctaLabel: L("See today's events", "ดูงานวันนี้", "查看今日活动", "События сегодня"),
};

type HomeHeroSlide = {
  image: string;
  imageAlt: string;
  href: string;
  category: string;
  title: string;
  excerpt: string;
  featuredLabel: string;
  ctaLabel: string;
  ctaTone: "home" | "news" | "living" | "explore" | "business" | "classifieds";
  visualTone: "default" | "neo-smart-city" | "news-dawn" | "classifieds";
  byline?: string;
};

export function getHomeHeroSliderUi(lang: LanguageCode) {
  return {
    prev: t(lang, sliderUi.prev),
    next: t(lang, sliderUi.next),
    carousel: t(lang, sliderUi.carousel),
    goToSlide: (n: number, total: number) =>
      t(lang, sliderUi.goToSlide).replace("{n}", String(n)).replace("{total}", String(total)),
  };
}

/** One slide per major hub — copy and imagery aligned with each section's hero. */
export function getHomeHeroSlides(lang: LanguageCode): HomeHeroSlide[] {
  const events = getEventsHub(lang);
  const classifieds = getClassifiedsHub(lang);

  return [
    {
      image: newsImages.newsHubHero,
      imageAlt: t(lang, newsHero.imageAlt),
      href: "/news/local-news/city-updates",
      category: tNewsHero(lang, "category"),
      title: tNewsHero(lang, "title"),
      excerpt: tNewsHero(lang, "excerpt"),
      featuredLabel: t(lang, newsHero.featured),
      ctaLabel: tNewsHero(lang, "cta"),
      ctaTone: "news",
      visualTone: "news-dawn",
      byline: tNewsHero(lang, "byline"),
    },
    {
      image: livingImages.heroHub,
      imageAlt: t(lang, livingHero.imageAlt),
      href: "/living",
      category: t(lang, livingHero.category),
      title: t(lang, livingHero.title),
      excerpt: t(lang, livingHero.excerpt),
      featuredLabel: t(lang, livingHero.featured),
      ctaLabel: t(lang, livingHero.cta),
      ctaTone: "living",
      visualTone: "neo-smart-city",
    },
    {
      image: exploreImages.hero,
      imageAlt: tExplore(lang, "heroImageAlt"),
      href: "/explore",
      category: t(lang, exploreSlide.category),
      title: tExplore(lang, "heroTitle"),
      excerpt: tExplore(lang, "searchPlaceholder"),
      featuredLabel: t(lang, exploreSlide.featuredLabel),
      ctaLabel: t(lang, exploreSlide.ctaLabel),
      ctaTone: "explore",
      visualTone: "default",
    },
    {
      image: EVENTS_HERO_IMAGE,
      imageAlt: events.hero.title,
      href: "/events",
      category: events.hero.badge,
      title: events.hero.title,
      excerpt: events.hero.description,
      featuredLabel: events.hero.badge,
      ctaLabel: t(lang, eventsSlide.ctaLabel),
      ctaTone: "home",
      visualTone: "default",
    },
    {
      image: businessImages.hero,
      imageAlt: tBusiness(lang, "heroImageAlt"),
      href: "/business/company-setup/thai-company",
      category: tBusiness(lang, "heroFeaturedCategory"),
      title: tBusiness(lang, "heroFeaturedTitle"),
      excerpt: tBusiness(lang, "heroFeaturedExcerpt"),
      featuredLabel: tBusiness(lang, "heroFeaturedLabel"),
      ctaLabel: tBusiness(lang, "heroCtaStart"),
      ctaTone: "business",
      visualTone: "news-dawn",
    },
    {
      image: classifieds.heroImage,
      imageAlt: classifieds.hero.title,
      href: "/classifieds#recent",
      category: classifieds.hero.category,
      title: classifieds.hero.title,
      excerpt: classifieds.hero.description,
      featuredLabel: classifieds.hero.badge,
      ctaLabel: classifieds.hero.searchButton,
      ctaTone: "classifieds",
      visualTone: "classifieds",
    },
  ];
}
