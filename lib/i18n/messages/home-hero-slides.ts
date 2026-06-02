import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { homeImages } from "@/lib/design/home-images";

const sliderUi = {
  prev: L("Previous slide", "สไลด์ก่อนหน้า", "上一张", "Предыдущий слайд"),
  next: L("Next slide", "สไลด์ถัดไป", "下一张", "Следующий слайд"),
  carousel: L("Featured stories", "เรื่องเด่น", "精选故事", "Избранное"),
  goToSlide: L(
    "Go to slide {n} of {total}",
    "ไปสไลด์ที่ {n} จาก {total}",
    "转到第 {n} 张，共 {total} 张",
    "Слайд {n} из {total}",
  ),
};

type HomeHeroSlide = {
  image: string;
  imageAlt: ReturnType<typeof L>;
  href: string;
  category: ReturnType<typeof L>;
  title: ReturnType<typeof L>;
  excerpt: ReturnType<typeof L>;
  featuredLabel: ReturnType<typeof L>;
  ctaLabel: ReturnType<typeof L>;
  ctaTone: "home" | "news" | "living" | "explore";
  visualTone: "default" | "neo-smart-city" | "news-dawn";
  byline: ReturnType<typeof L>;
};

const slides: HomeHeroSlide[] = [
  {
    image: homeImages.neoPattayaHero,
    imageAlt: L(
      "Aerial view of Pattaya at blue hour",
      "มุมสูงพัทยายามพลบค่ำ",
      "蓝调时刻芭提雅航拍",
      "Паттайя с высоты на закате",
    ),
    href: "/news/local-news/infrastructure",
    category: L("City Development", "พัฒนาเมือง", "城市发展", "Развитие города"),
    title: L(
      "The Neo-Pattaya Transformation: A Smart City Vision 2025",
      "Neo-Pattaya: วิสัยทัศน์เมืองอัจฉริยะ 2025",
      "新芭提雅转型：2025 智慧城市愿景",
      "Neo-Pattaya: умный город 2025",
    ),
    excerpt: L(
      "Infrastructure and digital initiatives reshape Pattaya into Southeast Asia's premier hybrid hub.",
      "โครงสร้างพื้นฐานและดิจิทัลยกระดับพัทยาเป็นศูนย์กลางท่องเที่ยวและที่อยู่อาศัย",
      "基建与数字化举措将芭提雅打造为东南亚混合枢纽。",
      "Инфраструктура и цифра превращают Паттайю в гибридный хаб.",
    ),
    featuredLabel: L("Featured", "แนะนำ", "精选", "Рекомендуем"),
    ctaLabel: L("Read Article", "อ่านบทความ", "阅读文章", "Читать"),
    ctaTone: "news",
    visualTone: "news-dawn",
    byline: L("By Editor-in-Chief · 2 Hours Ago", "บรรณาธิการ · 2 ชม.ที่แล้ว", "主编 · 2 小时前", "Главред · 2 ч назад"),
  },
  {
    image: homeImages.heroKohLarn,
    imageAlt: L(
      "Koh Larn island beach and turquoise water",
      "ชายหาดเกาะล้านและน้ำทะเลใส",
      "格兰岛海滩与碧海",
      "Пляж Ко Лан",
    ),
    href: "/explore/islands/koh-larn",
    category: L("Islands", "เกาะ", "岛屿", "Острова"),
    title: L(
      "Koh Larn Day Trip: Ferries, Beaches & What to Pack",
      "ทริปเกาะล้าน: เรือ ชายหาด และสิ่งที่ต้องเตรียม",
      "格兰岛一日游：渡轮、海滩与行前清单",
      "Ко Лан за один день",
    ),
    excerpt: L(
      "Compare piers, beach vibes, and the best hours to beat the weekend crowds.",
      "เปรียบเทียบท่าเรือ บรรยากาศชายหาด และช่วงเวลาที่คนน้อย",
      "对比码头与海滩氛围，避开周末人潮的最佳时段。",
      "Сравните причалы, пляжи и лучшее время без толп.",
    ),
    featuredLabel: L("Explore", "สำรวจ", "探索", "Исследовать"),
    ctaLabel: L("Open Guide", "เปิดคู่มือ", "打开指南", "Открыть гид"),
    ctaTone: "explore",
    visualTone: "default",
    byline: L("Explore Desk · Updated weekly", "ทีมสำรวจ · อัปเดตรายสัปดาห์", "探索组 · 每周更新", "Explore · еженедельно"),
  },
  {
    image: homeImages.heroLiving,
    imageAlt: L(
      "Pattaya skyline at twilight with city lights",
      "เส้นขอบฟ้าพัทยายามค่ำ",
      "暮色中的芭提雅天际线",
      "Панорама Паттайи на закате",
    ),
    href: "/living/visa/retirement",
    category: L("Living", "การใช้ชีวิต", "生活", "Жизнь"),
    title: L(
      "Retirement Visa Toolkit: Income, Insurance & TM7",
      "คู่มือวีซ่าผู้สูงอายุ: รายได้ ประกัน และ TM7",
      "退休签证工具包：收入、保险与 TM7",
      "Пенсионная виза: доход, страховка, TM7",
    ),
    excerpt: L(
      "Step-by-step checklists for bank proof, health cover, and 90-day reporting.",
      "เช็กลิสต์พิสูจน์รายได้ ประกันสุขภาพ และรายงาน 90 วัน",
      "银行证明、医保与 90 天报到的一站式清单。",
      "Чек-листы для банка, страховки и отчёта 90 дней.",
    ),
    featuredLabel: L("Living", "ไลฟ์สไตล์", "生活", "Жизнь"),
    ctaLabel: L("Open Toolkit", "เปิดคู่มือ", "打开工具包", "Открыть"),
    ctaTone: "living",
    visualTone: "neo-smart-city",
    byline: L("Living Editors · Verified Mar 2026", "ทีมไลฟ์สไตล์ · ตรวจแล้ว มี.ค. 2569", "生活编辑 · 2026年3月核实", "Living · март 2026"),
  },
  {
    image: homeImages.heroEvents,
    imageAlt: L(
      "Pattaya festival lights and beachfront crowd",
      "ไฟประดับเทศกาลพัทยาและชายหาด",
      "芭提雅节庆灯光与海滨人群",
      "Фестиваль на пляже Паттайи",
    ),
    href: "/events",
    category: L("Events", "อีเวนต์", "活动", "События"),
    title: L(
      "What's On in Pattaya: Festivals, Markets & Night Runs",
      "อีเวนต์พัทยา: เทศกาล ตลาด และกิจกรรมกลางคืน",
      "芭提雅活动：节庆、市集与夜间跑",
      "События Паттайи: фестивали и рынки",
    ),
    excerpt: L(
      "Curated weekends from Loy Krathong to beach concerts and food fairs.",
      "คัดสุดสัปดาห์จากลอยกระทง คอนเสิร์ตชายหาด ถึงตลาดอาหาร",
      "从水灯节到海滨音乐会与美食市集，精选周末活动。",
      "От Лой Кратонг до концертов и фуд-маркетов.",
    ),
    featuredLabel: L("This Week", "สัปดาห์นี้", "本周", "На неделе"),
    ctaLabel: L("See Calendar", "ดูปฏิทิน", "查看日历", "Календарь"),
    ctaTone: "home",
    visualTone: "default",
    byline: L("Events Team · Live listings", "ทีมอีเวนต์ · อัปเดตสด", "活动组 · 实时列表", "Events · онлайн"),
  },
  {
    image: homeImages.heroBusiness,
    imageAlt: L(
      "Pattaya city welcome sign at golden hour",
      "ป้ายต้อนรับเมืองพัทยายามเย็น",
      "黄金时刻的芭提雅城市标牌",
      "Знак города Паттайя",
    ),
    href: "/business/investment/economy",
    category: L("Business", "ธุรกิจ", "商业", "Бизнес"),
    title: L(
      "EEC & Tourism: Why Investors Watch Pattaya in 2026",
      "EEC และท่องเที่ยว: ทำไมนักลงทุนจับตาพัทยา 2026",
      "EEC 与旅游：2026 投资者为何关注芭提雅",
      "EEC и туризм: Паттайя в 2026",
    ),
    excerpt: L(
      "Hotels, marinas, and mixed-use projects along the eastern corridor.",
      "โรงแรม มารีน่า และโครงการผสมผสานตลอดทางเศรษฐกิจตะวันออก",
      "东部经济走廊沿线的酒店、游艇港与综合体项目。",
      "Отели, марины и mixed-use в восточном коридоре.",
    ),
    featuredLabel: L("Business", "ธุรกิจ", "商业", "Бизнес"),
    ctaLabel: L("Read Brief", "อ่านสรุป", "阅读简报", "Бриф"),
    ctaTone: "news",
    visualTone: "neo-smart-city",
    byline: L("Business Desk · Q2 outlook", "ทีมธุรกิจ · มุมมอง Q2", "商业组 · Q2 展望", "Business · Q2"),
  },
];

export function getHomeHeroSliderUi(lang: LanguageCode) {
  return {
    prev: t(lang, sliderUi.prev),
    next: t(lang, sliderUi.next),
    carousel: t(lang, sliderUi.carousel),
    goToSlide: (n: number, total: number) =>
      t(lang, sliderUi.goToSlide).replace("{n}", String(n)).replace("{total}", String(total)),
  };
}

export function getHomeHeroSlides(lang: LanguageCode) {
  return slides.map((slide) => ({
    image: slide.image,
    imageAlt: t(lang, slide.imageAlt),
    href: slide.href,
    category: t(lang, slide.category),
    title: t(lang, slide.title),
    excerpt: t(lang, slide.excerpt),
    featuredLabel: t(lang, slide.featuredLabel),
    ctaLabel: t(lang, slide.ctaLabel),
    ctaTone: slide.ctaTone,
    visualTone: slide.visualTone,
    byline: t(lang, slide.byline),
  }));
}
