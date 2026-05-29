import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
export const fineDiningUi = {
  explore: L("Explore", "สำรวจ", "探索", "Explore"),
  restaurants: L("Restaurants", "ร้านอาหาร", "餐厅", "Рестораны"),
  fineDining: L("Fine Dining", "ร้านอาหารหรู", "精致餐饮", "Fine dining"),
  heroSub: L("Luxury restaurants", "ร้านอาหารหรู", "高端餐饮", "Премиум-рестораны"),
  heroBody: L(
    "Luxury dining in Pattaya — sunset terraces, chef's tables, and ocean-view reservations.",
    "ดินเนอร์หรูในพัทยา — ระเบียงพระอาทิตย์ตก เชฟเทเบิล และจองวิวทะเล",
    "芭提雅奢华餐饮 — 日落露台、主厨餐桌与海景预订。",
    "Рестораны премиум-класса в Паттайе.",
  ),
  sponsoredShowcase: L("Sponsored Showcase", "สปอนเซอร์", "赞助展示", "Спонсор"),
  featuredTitle: L("Featured Fine Dining", "ร้านหรูแนะนำ", "精选高端餐饮", "Избранное"),
  featuredSub: L(
    "Hand-picked luxury venues — reserve your table today",
    "คัดสรรร้านหรู — จองโต๊ะวันนี้",
    "精选奢华餐厅 — 立即订位",
    "Лучшие площадки — бронируйте стол",
  ),
  sponsored: L("Sponsored", "สปอนเซอร์", "赞助", "Спонсор"),
  reserve: L("Reserve a Table", "จองโต๊ะ", "预订餐桌", "Забронировать"),
  collections: L("Curated Collections", "คอลเลกชันคัดสรร", "精选合集", "Подборки"),
  collectionsSub: L(
    "Explore by mood, view, and dining style",
    "เลือกตามบรรยากาศ วิว และสไตล์",
    "按氛围、景观与风格探索",
    "По настроению и виду",
  ),
  browseCollection: L("Browse collection →", "ดูคอลเลกชัน →", "浏览合集 →", "Подборка →"),
  guides: L("Dining Guides", "คู่มือดินเนอร์", "餐饮指南", "Гиды"),
  guidesSub: L(
    "Tips, etiquette, and editor picks",
    "เคล็ดลับ มารยาท และคัดสรรโดยบรรณาธิการ",
    "贴士、礼仪与编辑推荐",
    "Советы и выбор редакции",
  ),
  readGuide: L("Read guide →", "อ่านคู่มือ →", "阅读指南 →", "Читать →"),
  minRead: L("min read", "นาที", "分钟阅读", "мин"),
} as const;

export function tFineDining(lang: LanguageCode, key: keyof typeof fineDiningUi): string {
  return t(lang, fineDiningUi[key]);
}

export function getFeaturedRestaurants(lang: LanguageCode) {
  return [
    {
      name: "Mantra Restaurant & Bar",
      nameLocalized: t(
        lang,
        L("Mantra Restaurant & Bar", "มนตรา เรสเตอรองต์", "Mantra 餐厅酒吧", "Mantra"),
      ),
      description: t(
        lang,
        L(
          "Fine Thai–international cuisine in an elegant cliffside setting.",
          "อาหารไทย–นานาชาติ บรรยากาศหน้าผา",
          "悬崖边精致泰式与国际融合料理。",
          "Тайско-международная кухня на скале.",
        ),
      ),
      cuisine: t(lang, L("Thai–Fusion", "ไทย–ฟิวชัน", "泰式融合", "Fusion")),
      location: t(lang, L("Pratumnak Hill", "พระตำหนัก", "帕塔姆纳克山", "Pratumnak")),
      href: "/explore/restaurants/fine-dining",
    },
    {
      name: "The Sky Gallery",
      nameLocalized: t(
        lang,
        L("The Sky Gallery", "เดอะ สกาย แกลเลอรี่", "天空画廊", "Sky Gallery"),
      ),
      description: t(
        lang,
        L(
          "Contemporary dining with panoramic Pattaya Bay views.",
          "อาหารร่วมสมัย วิวอ่าวพัทยา",
          "当代美食与芭提雅湾全景。",
          "Современная кухня с видом на залив.",
        ),
      ),
      cuisine: t(lang, L("Contemporary", "ร่วมสมัย", "现代", "Contemporary")),
      location: t(lang, L("Pattaya Bay", "อ่าวพัทยา", "芭提雅湾", "Залив")),
      href: "/explore/restaurants/fine-dining",
    },
    {
      name: "Horizon Terrace",
      nameLocalized: t(
        lang,
        L("Horizon Terrace", "ฮอไรซัน เทอร์เรส", "地平线露台", "Horizon Terrace"),
      ),
      description: t(
        lang,
        L(
          "Premium steaks, seafood towers, and live piano evenings.",
          "สเต็ก ซีฟู้ดทาวเวอร์ และเปียโนสด",
          "顶级牛排、海鲜塔与钢琴之夜。",
          "Стейки, морепродукты, живое пиано.",
        ),
      ),
      cuisine: t(lang, L("Steak & Seafood", "สเต็ก & ซีฟู้ด", "牛排海鲜", "Стейк")),
      location: t(lang, L("Pattaya Beach Road", "ถนน Beach Road", "海滩路", "Beach Road")),
      href: "/explore/restaurants/fine-dining",
    },
  ];
}

export function getCollections(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Sunset & Ocean View", "ชมพระอาทิตย์ตกริมทะเล", "日落海景", "Закат")),
      description: t(
        lang,
        L(
          "Romantic terraces and beachfront tables for golden hour.",
          "ระเบียงโรแมนติกและโต๊ะริมหาดยามเย็น",
          "浪漫露台与海滨黄金时刻餐桌。",
          "Террасы и столики на закате.",
        ),
      ),
      href: "/explore/beaches",
      icon: "sunset" as const,
    },
    {
      title: t(lang, L("Rooftop Dining", "ดินเนอร์บนดาดฟ้า", "屋顶餐饮", "Крыша")),
      description: t(
        lang,
        L(
          "City lights, cocktails, and elevated tasting menus.",
          "ไฟเมือง ค็อกเทล และเมนูเดกสเทชัน",
          "城市灯火、鸡尾酒与高级品鉴菜单。",
          "Огни города и дегустации.",
        ),
      ),
      href: "/explore/cafes",
      icon: "building" as const,
    },
    {
      title: t(lang, L("Chef's Table", "เชฟเทเบิล", "主厨餐桌", "Chef table")),
      description: t(
        lang,
        L(
          "Omakase-style experiences and private chef counters.",
          "โอมากาเสะและเคาน์เตอร์เชฟส่วนตัว",
          "Omakase 与私人主厨吧台体验。",
          "Omakase и приватные стойки.",
        ),
      ),
      href: "/explore/restaurants/fine-dining",
      icon: "chef" as const,
    },
  ];
}

export function getDiningGuides(lang: LanguageCode) {
  return [
    {
      title: t(
        lang,
        L(
          "What to Wear: Fine Dining Dress Code",
          "แต่งตัวยังไง: ดรสโค้ดร้านหรู",
          "着装指南：高端餐厅礼仪",
          "Дресс-код",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Smart casual vs. formal — what top venues expect.",
          "สมาร์ทแคชชวล vs ฟอร์มัล — ร้านหรูคาดหวังอะไร",
          "商务休闲与正装 — 顶级餐厅要求。",
          "Smart casual и formal.",
        ),
      ),
      readTime: `5 ${tFineDining(lang, "minRead")}`,
      href: "/guide",
    },
    {
      title: t(
        lang,
        L(
          "10 Best Sunset Restaurants with Ocean Views",
          "10 ร้านชมพระอาทิตย์ตกวิวทะเล",
          "十大日落海景餐厅",
          "10 ресторанов на закате",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Editor picks from Naklua to Jomtien.",
          "คัดโดยบรรณาธิการ นาเกลือถึงจอมเทียน",
          "编辑精选：从那库拉到仲天。",
          "От Naklua до Jomtien.",
        ),
      ),
      readTime: `8 ${tFineDining(lang, "minRead")}`,
      href: "/explore/beaches",
    },
    {
      title: t(
        lang,
        L(
          "Thai Dining Etiquette for International Guests",
          "มารยาทอาหารไทยสำหรับชาวต่างชาติ",
          "国际宾客泰国用餐礼仪",
          "Этикет за столом",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Sharing dishes, utensils, and tipping customs.",
          "การแบ่งจาน ช้อนส้อม และทิป",
          "分餐、餐具与给小费习俗。",
          "Общие блюда и чаевые.",
        ),
      ),
      readTime: `6 ${tFineDining(lang, "minRead")}`,
      href: "/living",
    },
    {
      title: t(
        lang,
        L(
          "Special Occasions: Birthdays & Proposals",
          "โอกาสพิเศษ: วันเกิด & ขอแต่งงาน",
          "特殊场合：生日与求婚",
          "Праздники",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Private rooms, cake service, and photo-friendly tables.",
          "ห้องส่วนตัว เค้ก และโต๊ะถ่ายรูป",
          "包间、蛋糕服务与适合拍照的座位。",
          "Приватные залы и торты.",
        ),
      ),
      readTime: `7 ${tFineDining(lang, "minRead")}`,
      href: "/explore/restaurants/fine-dining",
    },
  ];
}
