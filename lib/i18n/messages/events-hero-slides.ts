import type { LanguageCode } from "@/lib/i18n/languages";
import { eventsImages } from "@/lib/design/events-images";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { L, t } from "@/lib/i18n/living-helpers";

const sliderUi = {
  carousel: L("Featured events", "งานเด่น", "精选活动", "Избранные события"),
  goToSlide: L(
    "Go to slide {n} of {total}",
    "ไปสไลด์ที่ {n} จาก {total}",
    "转到第 {n} 张，共 {total} 张",
    "Слайд {n} из {total}",
  ),
  cta: L("View event", "ดูรายละเอียด", "查看活动", "Подробнее"),
};

const slides = [
  {
    image: eventsImages.fireworks,
    imageAlt: L(
      "Fireworks over Pattaya Bay",
      "พลุเหนืออ่าวพัทยา",
      "芭提雅湾烟花",
      "Фейерверк над заливом Паттайи",
    ),
    href: "/explore/beaches",
    featuredLabel: L("Nov 2569", "พ.ย. 2569", "2569年11月", "Ноя 2026"),
    category: L("Local Festival", "เทศกาลท้องถิ่น", "本地节庆", "Местный фестиваль"),
    title: L(
      "Pattaya International Fireworks Festival 2026",
      "เทศกาลพลุนานาชาติเมืองพัทยา 2569",
      "2026 芭提雅国际烟花节",
      "Международный фестиваль фейерверков 2026",
    ),
    excerpt: L(
      "International fireworks teams over Pattaya Bay — concerts and waterfront viewing all weekend.",
      "ทีมพลุนานาชาติเหนืออ่าวพัทยา — คอนเสิร์ตและจุดชมริมชายหาดตลอดสุดสัปดาห์",
      "国际烟花团队点亮芭提雅湾——周末音乐会与海滨观赏。",
      "Международные команды над заливом — концерты и вид с пляжа.",
    ),
    schedule: L("27–28 Nov 2569", "27–28 พ.ย. 2569", "11月27–28日", "27–28 ноя"),
    venue: L("Pattaya Beach", "ชายหาดพัทยา", "芭提雅海滩", "Пляж Паттайя"),
  },
  {
    image: eventsImages.beachConcert,
    imageAlt: L(
      "Live music at Pattaya Music Festival",
      "ดนตรีสดเทศกาลดนตรีพัทยา",
      "芭提雅音乐节现场",
      "Pattaya Music Festival",
    ),
    href: "/explore/beaches",
    featuredLabel: L("Mar 2569", "มี.ค. 2569", "2569年3月", "Мар 2026"),
    category: L("Festival", "เทศกาล", "节庆", "Фестиваль"),
    title: L(
      "Pattaya Music Festival 2026",
      "เทศกาลดนตรีเมืองพัทยา 2569",
      "2026 芭提雅音乐节",
      "Pattaya Music Festival 2026",
    ),
    excerpt: L(
      "Pop, rock, and indie stages on the beach — Pattaya's signature seaside music weekend.",
      "เวทีป๊อป ร็อก และอินดี้ริมทะเล — สุดสัปดาห์ดนตรีสดสัญลักษณ์ของพัทยา",
      "海滨流行、摇滚与独立音乐——芭提雅标志性音乐周末。",
      "Pop, rock и indie на пляже — главный музыкальный уикенд.",
    ),
    schedule: L("6–7 Mar 2569", "6–7 มี.ค. 2569", "3月6–7日", "6–7 мар"),
    venue: L("Pattaya Beach", "ชายหาดพัทยา", "芭提雅海滩", "Пляж Паттайя"),
  },
  {
    image: eventsImages.beachConcert,
    imageAlt: L(
      "PRIDE parade on Pattaya Beach",
      "ขบวน PRIDE ชายหาดพัทยา",
      "芭提雅 PRIDE 游行",
      "PRIDE Паттайя",
    ),
    href: "/explore/beaches",
    featuredLabel: L("Jun 2569", "มิ.ย. 2569", "2569年6月", "Июн 2026"),
    category: L("Festival", "เทศกาล", "节庆", "Фестиваль"),
    title: L(
      "Pattaya International PRIDE Festival 2026",
      "เทศกาลไพรด์นานาชาติเมืองพัทยา 2569",
      "2026 芭提雅国际 PRIDE 节",
      "Pattaya International PRIDE 2026",
    ),
    excerpt: L(
      "Parade, live music, and creative events along the beach — LGBTQ+ friendly Pattaya at its best.",
      "ขบวนพาเหรด ดนตรีสด และกิจกรรมสร้างสรรค์เลียบชายหาด",
      "海滨游行、现场音乐与创意活动——芭提雅 LGBTQ+ 友好盛典。",
      "Парад, музыка и события на набережной — LGBTQ+ friendly Паттайя.",
    ),
    schedule: L("26–28 Jun 2569", "26–28 มิ.ย. 2569", "6月26–28日", "26–28 июн"),
    venue: L("Pattaya Beach & Beach Road", "ชายหาดและถนนเลียบชายหาด", "海滩与海滨路", "Пляж и Beach Road"),
  },
  {
    image: eventsImages.beachConcert,
    imageAlt: L(
      "EDM festival at Wisdom Valley Pattaya",
      "งาน EDM ที่ Wisdom Valley พัทยา",
      "Wisdom Valley EDM 音乐节",
      "EDM Wisdom Valley",
    ),
    href: "/explore/nightlife",
    featuredLabel: L("Jun 2569", "มิ.ย. 2569", "2569年6月", "Июн 2026"),
    category: L("EDM", "EDM", "EDM", "EDM"),
    title: L(
      "Tomorrow Thailand 2026",
      "Tomorrow Thailand 2569",
      "Tomorrow Thailand 2026",
      "Tomorrow Thailand 2026",
    ),
    excerpt: L(
      "Asia's first Tomorrowland-style EDM festival — world DJs at Wisdom Valley, Chonburi.",
      "เทศกาล EDM สไตล์ Tomorrowland ครั้งแรกในเอเชีย — ดีเจระดับโลกที่ Wisdom Valley",
      "亚洲首届 Tomorrowland 风格 EDM——世界级 DJ 齐聚 Wisdom Valley。",
      "Первый EDM в стиле Tomorrowland в Азии — мировые DJ.",
    ),
    schedule: L("11–13 Dec 2569", "11–13 ธ.ค. 2569", "12月11–13日", "11–13 дек"),
    venue: L("Wisdom Valley, Pattaya", "Wisdom Valley พัทยา", "Wisdom Valley", "Wisdom Valley"),
  },
  {
    image: eventsImages.nightMarket,
    imageAlt: L(
      "Thepprasit Night Market stalls and lights",
      "ตลาดเทพประสิทธิ์ยามค่ำ",
      "Thepprasit 夜市",
      "Ночной рынок Thepprasit",
    ),
    href: marketPagePaths.page,
    featuredLabel: L("Every week", "ทุกสัปดาห์", "每周", "Еженедельно"),
    category: L("Market", "ตลาด", "市场", "Рынок"),
    title: L(
      "Thepprasit Night Market",
      "ตลาดเทพประสิทธิ์",
      "Thepprasit 夜市",
      "Ночной рынок Thepprasit",
    ),
    excerpt: L(
      "Street food, live music on weekends, and late-night bargains — one of Pattaya's busiest bazaars.",
      "สตรีทฟู้ด ดนตรีสดสุดสัปดาห์ และของถูกดึกๆ — หนึ่งในตลาดที่คึกที่สุด",
      "街头美食、周末现场音乐与深夜淘货——最热闹的市集之一。",
      "Стритфуд, музыка по выходным и ночные скидки.",
    ),
    schedule: L("Fri–Sun · from 17:00", "ศ–อา · ตั้งแต่ 17:00", "周五–日 · 17:00 起", "Пт–Вс · с 17:00"),
    venue: L("Thepprasit Rd, South Pattaya", "ถ.เทพประสิทธิ์ ใต้เมือง", "Thepprasit 路", "Thepprasit Rd"),
  },
] as const;

export function getEventsHeroSliderUi(lang: LanguageCode) {
  return {
    carousel: t(lang, sliderUi.carousel),
    goToSlide: (n: number, total: number) =>
      t(lang, sliderUi.goToSlide).replace("{n}", String(n)).replace("{total}", String(total)),
    cta: t(lang, sliderUi.cta),
  };
}

export function getEventsHeroSlides(lang: LanguageCode) {
  return slides.map((slide) => ({
    image: slide.image,
    imageAlt: t(lang, slide.imageAlt),
    href: slide.href,
    featuredLabel: t(lang, slide.featuredLabel),
    category: t(lang, slide.category),
    title: t(lang, slide.title),
    excerpt: t(lang, slide.excerpt),
    schedule: t(lang, slide.schedule),
    venue: t(lang, slide.venue),
    ctaLabel: t(lang, sliderUi.cta),
  }));
}
