import type { LanguageCode } from "@/lib/i18n/languages";
import { classifiedsImages } from "@/lib/design/classifieds-images";
import { L, t } from "@/lib/i18n/living-helpers";

export const CLASSIFIEDS_THEME = "#C7856D";

export type ListingCategoryId =
  | "property"
  | "vehicles"
  | "jobs"
  | "services"
  | "buy-sell"
  | "community";

export type ClassifiedListing = {
  id: string;
  category: ListingCategoryId;
  categoryLabel: string;
  title: string;
  price: string;
  location: string;
  posted: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
  featured?: boolean;
};

const categoryLabels = {
  property: L("Property", "อสังหาริมทรัพย์", "房产", "Недвижимость"),
  vehicles: L("Vehicles", "ยานพาหนะ", "车辆", "Транспорт"),
  jobs: L("Jobs", "งาน", "招聘", "Работа"),
  services: L("Services", "บริการ", "服务", "Услуги"),
  "buy-sell": L("Buy & Sell", "ซื้อ-ขาย", "买卖", "Купля-продажа"),
  community: L("Community", "ชุมชน", "社区", "Сообщество"),
} as const;

function cat(lang: LanguageCode, id: ListingCategoryId) {
  return t(lang, categoryLabels[id]);
}

const hero = {
  badge: L("Classifieds", "ประกาศ", "分类信息", "Объявления"),
  title: L("Pattaya Listings", "ประกาศพัทยา", "芭提雅分类信息", "Объявления Паттайи"),
  description: L(
    "Browse rentals, sales, jobs, services, and community posts from expats and locals — updated daily across Jomtien, Naklua, and Central Pattaya.",
    "ค้นหาประกาศเช่า ขาย งาน บริการ และโพสต์ชุมชนจากชาวต่างชาติและคนท้องถิ่น — อัปเดตทุกวันทั่วพัทยา",
    "浏览租赁、买卖、招聘、服务与社区帖子——涵盖仲天、那库拉与芭提雅中心区，每日更新。",
    "Аренда, продажа, работа, услуги и посты сообщества — ежедневно по всей Паттайе.",
  ),
  searchPlaceholder: L(
    "Search listings — condo, car, job…",
    "ค้นหาประกาศ — คอนโด รถ งาน…",
    "搜索——公寓、车辆、工作…",
    "Поиск — кондо, авто, работа…",
  ),
  searchButton: L("Search", "ค้นหา", "搜索", "Искать"),
};

const sections = {
  categoriesTitle: L("Browse by category", "เลือกตามหมวด", "按类别浏览", "По категориям"),
  categoriesSubtitle: L(
    "Find what you need — property, transport, work, and everyday services in Pattaya.",
    "หาสิ่งที่ต้องการ — ที่อยู่ ยานพาหนะ งาน และบริการในพัทยา",
    "找到所需——住房、出行、工作与日常服务。",
    "Жильё, транспорт, работа и услуги в Паттайе.",
  ),
  featuredTitle: L("Featured listings", "ประกาศเด่น", "精选信息", "Избранное"),
  featuredSubtitle: L(
    "Verified and promoted posts — contact sellers directly.",
    "ประกาศที่ตรวจสอบและโปรโมต — ติดต่อผู้ลงประกาศโดยตรง",
    "已验证与推广帖——请直接联系发布者。",
    "Проверенные объявления — связывайтесь с автором напрямую.",
  ),
  recentTitle: L("Latest posts", "ประกาศล่าสุด", "最新发布", "Новые объявления"),
  recentSubtitle: L(
    "Fresh listings from the past 48 hours across all categories.",
    "ประกาศใหม่ใน 48 ชม.ที่ผ่านมา ทุกหมวด",
    "过去 48 小时内各分类最新信息。",
    "Свежие объявления за последние 48 часов.",
  ),
  safetyTitle: L("Safe browsing tips", "เคล็ดลับความปลอดภัย", "安全浏览提示", "Безопасность"),
  postTitle: L("Post your listing", "ลงประกาศของคุณ", "发布信息", "Разместить объявление"),
  postBody: L(
    "Reach thousands of expats and locals in Pattaya. Property, vehicles, jobs, and services welcome.",
    "เข้าถึงชาวต่างชาติและคนท้องถิ่นในพัทยาหลายพันคน รับประกาศอสังหา รถ งาน และบริการ",
    "触达芭提雅数千外籍与本地用户——欢迎房产、车辆、招聘与服务类信息。",
    "Тысячи expat и местных в Паттайе — недвижимость, авто, работа, услуги.",
  ),
  postCta: L("Submit a listing →", "ส่งประกาศ →", "提交信息 →", "Подать объявление →"),
  viewListing: L("View listing", "ดูประกาศ", "查看", "Подробнее"),
  verified: L("Verified", "ยืนยันแล้ว", "已认证", "Проверено"),
  promoted: L("Promoted", "โปรโมต", "推广", "Рекомендуем"),
};

const categories = [
  {
    id: "property" as const,
    count: L("240+ active", "240+ ประกาศ", "240+ 条", "240+"),
    description: L(
      "Condos, houses, and rooms for rent or sale",
      "คอนโด บ้าน และห้องเช่า/ขาย",
      "公寓、别墅与房间租售",
      "Кондо, дома, комнаты",
    ),
    image: classifiedsImages.propertyRent,
    href: "/living/housing/rentals",
  },
  {
    id: "vehicles" as const,
    count: L("85+ active", "85+ ประกาศ", "85+ 条", "85+"),
    description: L(
      "Cars, motorbikes, and boats",
      "รถยนต์ มอเตอร์ไซค์ และเรือ",
      "汽车、摩托车与船只",
      "Авто, мото, лодки",
    ),
    image: classifiedsImages.vehicle,
    href: "/classifieds#vehicles",
  },
  {
    id: "jobs" as const,
    count: L("60+ active", "60+ ประกาศ", "60+ 条", "60+"),
    description: L(
      "Hospitality, remote, and local roles",
      "โรงแรม รีโมต และงานท้องถิ่น",
      "酒店、远程与本地职位",
      "HoReCa, remote, местные",
    ),
    image: classifiedsImages.job,
    href: "/classifieds#jobs",
  },
  {
    id: "services" as const,
    count: L("120+ active", "120+ ประกาศ", "120+ 条", "120+"),
    description: L(
      "Visa help, cleaning, repairs, tutors",
      "วีซ่า ทำความสะอาด ซ่อม ติวเตอร์",
      "签证、清洁、维修、家教",
      "Виза, уборка, ремонт, репетиторы",
    ),
    image: classifiedsImages.service,
    href: "/classifieds#services",
  },
  {
    id: "buy-sell" as const,
    count: L("95+ active", "95+ ประกาศ", "95+ 条", "95+"),
    description: L(
      "Furniture, electronics, and gear",
      "เฟอร์นิเจอร์ อิเล็กทรอนิกส์ อุปกรณ์",
      "家具、电子产品与装备",
      "Мебель, техника, снаряжение",
    ),
    image: classifiedsImages.buySell,
    href: "/classifieds#buy-sell",
  },
  {
    id: "community" as const,
    count: L("40+ active", "40+ ประกาศ", "40+ 条", "40+"),
    description: L(
      "Language exchange, rides, lost & found",
      "แลกเปลี่ยนภาษา แชร์รถ ของหาย",
      "语言交换、拼车、失物招领",
      "Языковой обмен, попутчики",
    ),
    image: classifiedsImages.community,
    href: "/classifieds#community",
  },
];

const safetyTips = [
  {
    title: L("Meet in public", "นัดพบในที่สาธารณะ", "公共场所见面", "Встречайтесь публично"),
    text: L(
      "Inspect property and vehicles in daylight with a friend — avoid solo visits to remote locations.",
      "ดูห้องและรถตอนกลางวัน พาเพื่อนไปด้วย — หลีกเลี่ยงที่ลับล่อ",
      "白天看房看车并结伴——避免独自前往偏僻地点。",
      "Осмотр днём и с другом — не езжайте один в отдалённые места.",
    ),
  },
  {
    title: L("Verify documents", "ตรวจเอกสาร", "核实文件", "Проверяйте документы"),
    text: L(
      "Ask for Chanote, foreign quota letters, and signed contracts before any deposit.",
      "ขอโฉนด หนังสือโควตา และสัญญาก่อนจ่ายมัดจำ",
      "付定金前要求地契、外资配额函与签署合同。",
      "Chanote, квота и договор до депозита.",
    ),
  },
  {
    title: L("Never wire blindly", "อย่าโอนเงินมั่ว", "切勿盲目转账", "Без слепых переводов"),
    text: L(
      "Scammers use fake listings on social media — use Pattaya.com verified posts when possible.",
      "มิจฉาชีพใช้ประกาศปลอมบนโซเชียล — ใช้ประกาศยืนยันบน Pattaya.com",
      "社交媒体虚假房源常见——优先使用本站已验证信息。",
      "Мошенники в соцсетях — предпочитайте проверенные посты.",
    ),
  },
];

function buildListings(lang: LanguageCode): ClassifiedListing[] {
  const raw: Array<
    Omit<ClassifiedListing, "title" | "price" | "location" | "posted" | "excerpt" | "imageAlt"> & {
      title: ReturnType<typeof L>;
      price: ReturnType<typeof L>;
      location: ReturnType<typeof L>;
      posted: ReturnType<typeof L>;
      excerpt: ReturnType<typeof L>;
      imageAlt: ReturnType<typeof L>;
    }
  > = [
    {
      id: "condo-jomtien",
      category: "property",
      categoryLabel: cat(lang, "property"),
      title: L(
        "2BR Sea-View Condo · Jomtien",
        "คอนโด 2 ห้องนอน วิวทะเล · Jomtien",
        "仲天海景两卧公寓",
        "2BR с видом на море · Jomtien",
      ),
      price: L("฿28,000 / mo", "฿28,000 / เดือน", "฿28,000/月", "฿28,000 / мес"),
      location: L("Jomtien Beach Road", "ถนนเลียบหาด Jomtien", "仲天海滨路", "Jomtien Beach Road"),
      posted: L("2 hours ago", "2 ชม.ที่แล้ว", "2 小时前", "2 ч назад"),
      excerpt: L(
        "Fully furnished, foreign quota, pool & gym. 12-month contract, 2 months deposit.",
        "เฟอร์ครบ โควตาต่างชาติ สระและฟิตเนส สัญญา 12 เดือน มัดจำ 2 เดือน",
        "全配家具、外资配额、泳池健身。12 个月约、押二。",
        "Мебель, квота, бассейн. 12 мес., депозит 2 мес.",
      ),
      image: classifiedsImages.featuredCondo,
      imageAlt: L("Jomtien condo interior", "ห้องคอนโด Jomtien", "仲天公寓内景", "Интерьер кондо"),
      href: "/living/housing/rentals",
      featured: true,
    },
    {
      id: "studio-pratumnak",
      category: "property",
      categoryLabel: cat(lang, "property"),
      title: L(
        "Studio · Pratumnak Hill",
        "สตูดิโอ · พระตำหนัก",
        "帕坦纳克山工作室",
        "Студия · Pratumnak",
      ),
      price: L("฿12,500 / mo", "฿12,500 / เดือน", "฿12,500/月", "฿12,500 / мес"),
      location: L("Pratumnak", "พระตำหนัก", "帕坦纳克", "Pratumnak"),
      posted: L("5 hours ago", "5 ชม.ที่แล้ว", "5 小时前", "5 ч назад"),
      excerpt: L(
        "Quiet building, high floor, sea glimpse. Available from next month.",
        "ตึกเงียบ ชั้นสูง เห็นทะเลบางส่วน ว่างเดือนหน้า",
        "安静楼栋、高层、部分海景。下月起可入住。",
        "Тихий дом, высокий этаж. Со след. месяца.",
      ),
      image: classifiedsImages.propertyRent,
      imageAlt: L("Pratumnak studio", "สตูดิโอพระตำหนัก", "帕坦纳克工作室", "Студия Pratumnak"),
      href: "/living/housing/rentals",
    },
    {
      id: "honda-city",
      category: "vehicles",
      categoryLabel: cat(lang, "vehicles"),
      title: L(
        "Honda City 2021 · Low mileage",
        "Honda City 2021 · ไมล์น้อย",
        "Honda City 2021 · 低里程",
        "Honda City 2021 · малый пробег",
      ),
      price: L("฿520,000", "฿520,000", "฿520,000", "฿520,000"),
      location: L("Central Pattaya", "พัทยากลาง", "芭提雅中心", "Central Pattaya"),
      posted: L("Today", "วันนี้", "今天", "Сегодня"),
      excerpt: L(
        "One owner, full service history, transferable registration.",
        "เจ้าของคนเดียว ประวัติศูนย์ครบ โอนทะเบียนได้",
        "一手车、完整保养记录、可过户。",
        "Один владелец, сервис, переоформление.",
      ),
      image: classifiedsImages.featuredCar,
      imageAlt: L("Honda City", "Honda City", "Honda City", "Honda City"),
      href: "/classifieds#vehicles",
      featured: true,
    },
    {
      id: "hotel-front-desk",
      category: "jobs",
      categoryLabel: cat(lang, "jobs"),
      title: L(
        "Front Desk · 4-Star Hotel",
        "แผนกต้อนรับ · โรงแรม 4 ดาว",
        "四星酒店前台",
        "Reception · отель 4★",
      ),
      price: L("฿18,000–22,000", "฿18,000–22,000", "฿18,000–22,000", "฿18,000–22,000"),
      location: L("North Pattaya", "พัทยาเหนือ", "北芭提雅", "North Pattaya"),
      posted: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
      excerpt: L(
        "English required, Thai a plus. Work permit support for the right candidate.",
        "ต้องอังกฤษ ไทยเป็นพลัส ช่วย work permit",
        "需英语，泰语加分。合适者可协助工作证。",
        "Английский обязателен. Work permit возможен.",
      ),
      image: classifiedsImages.featuredJob,
      imageAlt: L("Hotel front desk", "แผนกต้อนรับโรงแรม", "酒店前台", "Reception"),
      href: "/classifieds#jobs",
      featured: true,
    },
    {
      id: "visa-service",
      category: "services",
      categoryLabel: cat(lang, "services"),
      title: L(
        "Visa & TM30 Service · Bilingual",
        "บริการวีซ่า & TM30 · สองภาษา",
        "签证与 TM30 服务 · 双语",
        "Виза и TM30 · двуязычно",
      ),
      price: L("From ฿2,500", "เริ่ม ฿2,500", "起 ฿2,500", "от ฿2,500"),
      location: L("Jomtien / On-site", "Jomtien / ถึงที่", "仲天 / 上门", "Jomtien / выезд"),
      posted: L("3 hours ago", "3 ชม.ที่แล้ว", "3 小时前", "3 ч назад"),
      excerpt: L(
        "Retirement extensions, 90-day reporting, and landlord TM30 filing.",
        "ต่ออายุ retirement รายงาน 90 วัน TM30",
        "退休签延期、90 天报告、房东 TM30。",
        "Retirement, 90-day report, TM30.",
      ),
      image: classifiedsImages.service,
      imageAlt: L("Visa service", "บริการวีซ่า", "签证服务", "Визовые услуги"),
      href: "/living/visa/retirement",
    },
    {
      id: "sofa-set",
      category: "buy-sell",
      categoryLabel: cat(lang, "buy-sell"),
      title: L(
        "L-Shaped Sofa Set · Like New",
        "โซฟา L มือสอง · สภาพดี",
        "L 型沙发 · 近新",
        "Диван L · как новый",
      ),
      price: L("฿8,500", "฿8,500", "฿8,500", "฿8,500"),
      location: L("Naklua", "นาเกลือ", "那库拉", "Naklua"),
      posted: L("6 hours ago", "6 ชม.ที่แล้ว", "6 小时前", "6 ч назад"),
      excerpt: L(
        "Moving sale — pickup only, includes delivery within Naklua.",
        "ย้ายบ้าน — รับเอง ส่งในนาเกลือได้",
        "搬家甩卖——自提，那库拉内可送货。",
        "Переезд — самовывоз, доставка в Naklua.",
      ),
      image: classifiedsImages.buySell,
      imageAlt: L("Sofa set", "ชุดโซฟา", "沙发", "Диван"),
      href: "/classifieds#buy-sell",
    },
    {
      id: "language-exchange",
      category: "community",
      categoryLabel: cat(lang, "community"),
      title: L(
        "Thai–English Language Exchange",
        "แลกเปลี่ยนภาษาไทย–อังกฤษ",
        "泰英语言交换",
        "Обмен TH–EN",
      ),
      price: L("Free", "ฟรี", "免费", "Бесплатно"),
      location: L("Terminal 21 area", "แถว Terminal 21", "Terminal 21 附近", "Terminal 21"),
      posted: L("Today", "วันนี้", "今天", "Сегодня"),
      excerpt: L(
        "Weekly Saturday meetup — beginners welcome, coffee on us first round.",
        "พบกันทุกเสาร์ มือใหม่ได้ รอบแรกเลี้ยงกาแฟ",
        "每周六聚会——欢迎新手，首轮咖啡我们请。",
        "Каждую субботу — кофе за наш счёт.",
      ),
      image: classifiedsImages.community,
      imageAlt: L("Language meetup", "พบแลกเปลี่ยนภาษา", "语言聚会", "Языковая встреча"),
      href: "/classifieds#community",
    },
    {
      id: "pool-villa-sale",
      category: "property",
      categoryLabel: cat(lang, "property"),
      title: L(
        "Pool Villa · East Pattaya",
        "พูลวิลล่า · พัทยาตะวันออก",
        "东芭提雅泳池别墅",
        "Pool villa · East Pattaya",
      ),
      price: L("฿12.5M", "฿12.5M", "฿12.5M", "฿12.5M"),
      location: L("East Pattaya", "พัทยาตะวันออก", "东芭提雅", "East Pattaya"),
      posted: L("1 day ago", "1 วันที่แล้ว", "1 天前", "1 день назад"),
      excerpt: L(
        "4 bed, private pool, Chanote title. Viewings by appointment.",
        "4 ห้องนอน สระส่วนตัว โฉนด นัดชมได้",
        "四卧、私人泳池、有地契。预约看房。",
        "4 спальни, бассейн, Chanote. По записи.",
      ),
      image: classifiedsImages.propertySale,
      imageAlt: L("Pool villa", "พูลวิลล่า", "泳池别墅", "Pool villa"),
      href: "/living/housing/condo-buying",
    },
  ];

  return raw.map((item) => ({
    ...item,
    title: t(lang, item.title),
    price: t(lang, item.price),
    location: t(lang, item.location),
    posted: t(lang, item.posted),
    excerpt: t(lang, item.excerpt),
    imageAlt: t(lang, item.imageAlt),
  }));
}

export type ClassifiedListingPreview = ClassifiedListing & { lines: string[] };

const previewLinesById: Record<
  string,
  [ReturnType<typeof L>, ReturnType<typeof L>, ReturnType<typeof L>]
> = {
  "condo-jomtien": [
    L("Jomtien Beach Road · posted 2 hours ago", "ถนนเลียบหาด Jomtien · ลงเมื่อ 2 ชม.ที่แล้ว", "仲天海滨路 · 2 小时前", "Jomtien · 2 ч назад"),
    L("Fully furnished with pool, gym, and foreign quota available.", "เฟอร์ครบ มีสระ ฟิตเนส และโควตาต่างชาติ", "全配家具，含泳池、健身与外资配额。", "Мебель, бассейн, квота."),
    L("12-month lease, two months deposit — view before you transfer.", "สัญญา 12 เดือน มัดจำ 2 เดือน — ดูห้องก่อนโอน", "12 个月约、押二 — 看房后再转账。", "12 мес., депозит 2 мес."),
  ],
  "honda-city": [
    L("Central Pattaya · posted today", "พัทยากลาง · ลงวันนี้", "芭提雅中心 · 今天", "Central Pattaya · сегодня"),
    L("One owner, full dealer service history on file.", "เจ้าของคนเดียว ประวัติศูนย์ครบ", "一手车，完整 4S 保养记录。", "Один владелец, сервис."),
    L("Registration transfer ready — inspect and test drive in person.", "โอนทะเบียนได้ — นัดดูและทดลองขับ", "可过户 — 请当面验车试驾。", "Переоформление — осмотр лично."),
  ],
  "hotel-front-desk": [
    L("North Pattaya · posted yesterday", "พัทยาเหนือ · ลงเมื่อวาน", "北芭提雅 · 昨天", "North Pattaya · вчера"),
    L("English required; Thai language skills are a plus.", "ต้องใช้อังกฤษได้ ภาษาไทยเป็นพลัส", "需英语；泰语加分。", "Английский обязателен."),
    L("Work permit support offered for the right candidate.", "ช่วย work permit สำหรับผู้สมัครที่เหมาะสม", "合适人选可协助工作证。", "Work permit возможен."),
  ],
  "language-exchange": [
    L("Terminal 21 area · posted today", "แถว Terminal 21 · ลงวันนี้", "Terminal 21 附近 · 今天", "Terminal 21 · сегодня"),
    L("Weekly Saturday meetup — beginners welcome.", "พบกันทุกเสาร์ มือใหม่ยินดี", "每周六聚会，欢迎新手。", "Каждую субботу."),
    L("First round of coffee on us — RSVP in the post.", "รอบแรกเลี้ยงกาแฟ — ตอบรับในโพสต์", "首轮咖啡我们请 — 请在帖内报名。", "Первый кофе — в посте."),
  ],
};

export function getHomeClassifiedsPreview(lang: LanguageCode) {
  const listings = buildListings(lang);
  const picks = (
    ["condo-jomtien", "honda-city", "hotel-front-desk", "language-exchange"] as const
  )
    .map((id) => listings.find((l) => l.id === id))
    .filter((l): l is ClassifiedListing => Boolean(l))
    .map((listing) => {
      const lines = previewLinesById[listing.id];
      return {
        ...listing,
        lines: lines
          ? [t(lang, lines[0]), t(lang, lines[1]), t(lang, lines[2])]
          : [listing.location, listing.excerpt, listing.posted],
      };
    });

  return {
    theme: CLASSIFIEDS_THEME,
    title: t(lang, L("Latest listings", "ประกาศล่าสุด", "最新信息", "Новые объявления")),
    subtitle: t(
      lang,
      L(
        "Rentals, vehicles, jobs, and community posts — updated across Pattaya.",
        "เช่า ขาย งาน และโพสต์ชุมชน — อัปเดตทั่วพัทยา",
        "租赁、车辆、招聘与社区帖——芭提雅每日更新。",
        "Аренда, авто, работа и посты сообщества в Паттайе.",
      ),
    ),
    viewAll: t(lang, L("View all listings", "ดูประกาศทั้งหมด", "查看全部信息", "Все объявления")),
    viewAllHref: "/classifieds",
    viewListing: t(lang, sections.viewListing),
    listings: picks,
  };
}

export function getClassifiedsHub(lang: LanguageCode) {
  const listings = buildListings(lang);

  return {
    theme: CLASSIFIEDS_THEME,
    hero: {
      badge: t(lang, hero.badge),
      title: t(lang, hero.title),
      description: t(lang, hero.description),
      searchPlaceholder: t(lang, hero.searchPlaceholder),
      searchButton: t(lang, hero.searchButton),
    },
    sections: {
      categoriesTitle: t(lang, sections.categoriesTitle),
      categoriesSubtitle: t(lang, sections.categoriesSubtitle),
      featuredTitle: t(lang, sections.featuredTitle),
      featuredSubtitle: t(lang, sections.featuredSubtitle),
      recentTitle: t(lang, sections.recentTitle),
      recentSubtitle: t(lang, sections.recentSubtitle),
      safetyTitle: t(lang, sections.safetyTitle),
      postTitle: t(lang, sections.postTitle),
      postBody: t(lang, sections.postBody),
      postCta: t(lang, sections.postCta),
      viewListing: t(lang, sections.viewListing),
      verified: t(lang, sections.verified),
      promoted: t(lang, sections.promoted),
    },
    categories: categories.map((c) => ({
      ...c,
      label: cat(lang, c.id),
      count: t(lang, c.count),
      description: t(lang, c.description),
    })),
    featured: listings.filter((l) => l.featured),
    recent: listings,
    safetyTips: safetyTips.map((tip) => ({
      title: t(lang, tip.title),
      text: t(lang, tip.text),
    })),
    heroImage: classifiedsImages.hero,
  };
}
