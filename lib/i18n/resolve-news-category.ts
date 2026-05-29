import type { NewsCategoryContent } from "@/lib/data/news-category-types";
import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { tNewsCategoryUi } from "@/lib/i18n/messages/news-category-ui";
import { getNewsNavCopy } from "@/lib/i18n/messages/news-nav";
import type { LocalizedText } from "@/lib/i18n/text";
import { pickText } from "@/lib/i18n/text";

type HeroPatch = {
  title: LocalizedText;
  excerpt: LocalizedText;
  byline?: LocalizedText;
  ctaLabel?: LocalizedText;
  featuredLabel?: LocalizedText;
};

type FooterPatch = {
  title: LocalizedText;
  body: LocalizedText;
  primary: { label: LocalizedText; href: string };
  secondary?: { label: LocalizedText; href: string };
};

type CategoryPatch = {
  headlinesTitle?: LocalizedText;
  hero: HeroPatch;
  footer?: FooterPatch;
};

const patches: Record<string, CategoryPatch> = {
  "local-news/city-updates": {
    headlinesTitle: L("Latest City Headlines", "ข่าวเมืองล่าสุด", "最新城市要闻", "Городские новости"),
    hero: {
      title: L(
        "Pattaya Smart City: Infrastructure Overhaul on Beach Road",
        "Pattaya Smart City: ปรับปรุง Beach Road",
        "芭提雅智慧城市：海滩路基建升级",
        "Smart City: Beach Road",
      ),
      excerpt: L(
        "City Hall unveils a 500M THB plan to modernize waterfront access and telecom by Q4 2026.",
        "ศาลากลางแผน 500 ล้านบาทปรับริมน้ำและสื่อสาร",
        "市政厅 5 亿泰铢计划改造海滨与通信。",
        "План 500 млн бат на набережную.",
      ),
      byline: L("By City Desk · 2 Hours Ago", "City Desk · 2 ชม.", "城市版 · 2 小时前", "City Desk · 2 ч"),
      featuredLabel: L("Lead Story", "ข่าวเด่น", "头条", "Главное"),
      ctaLabel: L("Read Full Story", "อ่านฉบับเต็ม", "阅读全文", "Читать"),
    },
    footer: {
      title: L("Municipal Contact", "ติดต่อเทศบาล", "市政联系", "Муниципалитет"),
      body: L(
        "Report issues via Pattaya City Call Center 1337 (24/7) or Naklua Road service counter.",
        "แจ้งปัญหาที่ 1337 (24 ชม.) หรือเคาน์เตอร์ถนนนาเกลือ",
        "请拨打 1337（24 小时）或至那库拉路服务台。",
        "Call Center 1337 или офис на Naklua Road.",
      ),
      primary: {
        label: L("Call 1337", "โทร 1337", "拨打 1337", "1337"),
        href: "tel:1337",
      },
      secondary: {
        label: L("City Updates Hub", "ศูนย์ข่าวเมือง", "城市新闻中心", "Новости города"),
        href: "/news",
      },
    },
  },
  "local-news/crime": {
    hero: {
      title: L(
        "Jomtien Raids: Underground Casino Shut Down",
        "จอมเทียน: ปิดคาสิโนใต้ดิน",
        "仲天突袭：地下赌场被查封",
        "Jomtien: подпольное казино",
      ),
      excerpt: L(
        "Authorities seized over 2M THB in a 2 AM villa raid — Tourist Police assisted with translation.",
        "ยึดเงินกว่า 2 ล้านบาท บุกค้นตี 2 Tourist Police ช่วยแปล",
        "凌晨突袭别墅，查获超 200 万泰铢。",
        "Изъято 2+ млн бат.",
      ),
      byline: L("By Crime Desk · 45 mins ago", "Crime Desk · 45 นาที", "犯罪版 · 45 分钟前", "45 мин"),
      featuredLabel: L("Breaking", "ด่วน", "突发", "Срочно"),
      ctaLabel: L("Read Full Report", "อ่านรายงาน", "阅读全文", "Отчёт"),
    },
  },
  "local-news/accidents": {
    hero: {
      title: L(
        "Major Traffic Delay: Sukhumvit Road Blocked",
        "จราจรติด: สุขุมวิทปิด",
        "严重拥堵：素坤逸路封闭",
        "Sukhumvit перекрыта",
      ),
      excerpt: L(
        "Use alternative routes as crews clear a multi-vehicle collision near North Pattaya.",
        "ใช้เส้นทางอื่นขณะเคลียร์อุบัติเหตุหลายคัน",
        "多车相撞，请绕行。",
        "Объезд из-за ДТП.",
      ),
      byline: L("By Traffic Desk · Live", "Traffic Desk · สด", "交通版 · 实时", "Live"),
      featuredLabel: L("Breaking", "ด่วน", "突发", "Срочно"),
      ctaLabel: L("Route Advisories", "เส้นทางแนะนำ", "路线提示", "Маршруты"),
    },
  },
  "local-news/infrastructure": {
    hero: {
      title: L(
        "Beach Road Smart Corridor: Cabling Project Begins",
        "Beach Road: เริ่มงานสายใต้ดิน",
        "海滩路智慧走廊：地下线缆工程启动",
        "Beach Road: кабели",
      ),
      excerpt: L(
        "Nightly lane closures while crews bury lines — completion targeted Q4 2026.",
        "ปิดเลนกลางคืน ฝังสาย — เสร็จ Q4 2026",
        "夜间封 lane 铺缆，目标 2026 年 Q4。",
        "Ночные перекрытия до Q4 2026.",
      ),
      byline: L("By Infrastructure Desk · 6h ago", "Infrastructure · 6 ชม.", "基建版 · 6 小时前", "6 ч"),
      ctaLabel: L("Impact Map", "แผนผลกระทบ", "影响地图", "Карта"),
    },
  },
  "tourism/attractions": {
    hero: {
      title: L(
        "Sanctuary of Truth: Restoration Opens New Wings",
        "ปราสาทสัจธรรม: เปิดปีกใหม่หลังบูรณะ",
        "真理寺：修复后新翼开放",
        "Sanctuary of Truth: новые крылья",
      ),
      excerpt: L(
        "Tour newly completed teak galleries — timed tickets available online.",
        "ชมโถงไม้สักที่เสร็จใหม่ — จองตั๋วออนไลน์",
        "参观新完工柚木展厅，可网上预约。",
        "Новые галереи — билеты онлайн.",
      ),
      ctaLabel: L("Book Tickets", "จองตั๋ว", "订票", "Билеты"),
    },
  },
  "tourism/promotions": {
    hero: {
      title: L(
        "Songkran 2026: Hotel Flash Sales Across Pattaya Bay",
        "สงกรานต์ 2026: แฟลชเซลโรงแรมอ่าวพัทยา",
        "2026 宋干节：芭提雅湾酒店闪购",
        "Songkran 2026: отели",
      ),
      excerpt: L(
        "Rates cut 30–45% for bookings before April 1 at participating resorts.",
        "ลด 30–45% จองก่อน 1 เม.ย. ที่ร่วมรายการ",
        "参与酒店 4 月 1 日前预订享 30–45% 折扣。",
        "−30–45% до 1 апреля.",
      ),
      ctaLabel: L("View Deals", "ดูดีล", "查看优惠", "Акции"),
    },
  },
  "business/hotels": {
    hero: {
      title: L(
        "Pattaya Occupancy Hits 78% as Q1 Tourism Surges",
        "อัตราเข้าพัก 78% ไตรมาส 1 พุ่ง",
        "Q1 入住率达 78%",
        "Загрузка отелей 78%",
      ),
      excerpt: L(
        "Strongest forward bookings since 2019 — ADR up 12%.",
        "จองล่วงหน้าแรงสุดตั้งแต่ 2019 — ADR +12%",
        "2019 以来最强预订，ADR 升 12%。",
        "Лучшие брони с 2019.",
      ),
      ctaLabel: L("Industry Report", "รายงานอุตสาหกรรม", "行业报告", "Отчёт"),
    },
  },
  "business/real-estate": {
    headlinesTitle: L("Latest Property Headlines", "ข่าวอสังหาล่าสุด", "房产要闻", "Недвижимость"),
    hero: {
      title: L(
        "Wongamat Riviera: New Luxury Penthouse Units",
        "Wongamat Riviera: เปิด penthouse ใหม่",
        "Wongamat Riviera 新豪华顶层",
        "Wongamat: пентхаусы",
      ),
      excerpt: L(
        "Residences from 25M THB with Gulf views — pre-sales open.",
        "เริ่ม 25 ล้านบาท วิวอ่าว — เปิดจอง",
        "2500 万泰铢起，海景，预售开放。",
        "От 25 млн бат, вид на залив.",
      ),
      ctaLabel: L("View Property Ads", "ดูประกาศ", "查看房源", "Объявления"),
      featuredLabel: L("Lead Listing", "ประกาศเด่น", "主推房源", "Лид"),
    },
    footer: {
      title: L("List Your Property", "ลงประกาศอสังหา", "发布房源", "Разместить"),
      body: L(
        "Reach buyers across Pattaya.com's property network.",
        "เข้าถึงผู้ซื้อในเครือข่าย Pattaya.com",
        "触达 Pattaya.com 房产买家网络。",
        "Сеть Pattaya.com.",
      ),
      primary: {
        label: L("View Property Ads", "ดูประกาศ", "查看房源", "Объявления"),
        href: "/directory/featured",
      },
      secondary: {
        label: L("Investment Portal", "พอร์ทัลลงทุน", "投资入口", "Инвестиции"),
        href: "/business/investment/real-estate",
      },
    },
  },
  "business/openings": {
    hero: {
      title: L(
        "Terminal 21: Six New F&B Concepts Open",
        "Terminal 21: เปิด F&B 6 แบรนด์",
        "Terminal 21：六家餐饮新概念开业",
        "Terminal 21: 6 F&B",
      ),
      excerpt: L(
        "Soft openings with preview menus at 50% off this month.",
        "ซอฟต์เปิด เมนูทดลองลด 50%",
        "本月软开业，试菜菜单五折。",
        "Soft opening −50%.",
      ),
      ctaLabel: L("Opening Calendar", "ปฏิทินเปิด", "开业日历", "Календарь"),
    },
  },
  "expat/visa": {
    headlinesTitle: L("Latest Visa Headlines", "ข่าววีซ่าล่าสุด", "签证要闻", "Визы"),
    hero: {
      title: L(
        "Destination Thailand Visa: Expert Guide",
        "วีซ่า Destination Thailand: คู่มือ",
        "Destination Thailand 签证指南",
        "DTV: гид",
      ),
      excerpt: L(
        "5-year visa for digital nomads — eligibility and Chonburi Immigration steps.",
        "วีซ่า 5 ปีสำหรับ digital nomad — เงื่อนไขและขั้นตอนตม.",
        "数字游民 5 年签证 — 条件与春武里移民局流程。",
        "5 лет для digital nomads.",
      ),
      ctaLabel: L("Get Visa Quote", "ขอใบเสนอวีซ่า", "获取报价", "Запрос"),
      featuredLabel: L("Lead Story", "ข่าวเด่น", "头条", "Главное"),
    },
    footer: {
      title: L("Free Visa Consultation", "ปรึกษาวีซ่าฟรี", "免费签证咨询", "Консультация"),
      body: L(
        "Partner agents assist with retirement, marriage, and business visas.",
        "ตัวแทนช่วยวีซ่าเกษียณ สมรส และธุรกิจ",
        "合作代理协助退休、结婚与商务签证。",
        "Агенты по визам.",
      ),
      primary: {
        label: L("Get Visa Quote", "ขอใบเสนอ", "获取报价", "Запрос"),
        href: "/living/visa/retirement",
      },
      secondary: {
        label: L("90-Day Reporting", "รายงาน 90 วัน", "90 天报到", "90 дней"),
        href: "/living/visa/90-day-report",
      },
    },
  },
  "expat/immigration": {
    headlinesTitle: L("Latest Immigration Headlines", "ข่าวตม.ล่าสุด", "移民要闻", "Immigration"),
    hero: {
      title: L(
        "90-Day Online Reporting: Maintenance Advisory",
        "รายงาน 90 วันออนไลน์: ปิดปรับปรุง",
        "90 天在线报到：系统维护",
        "90-дневный отчёт: техработы",
      ),
      excerpt: L(
        "Temporary interruption — visit Jomtien office or use the mobile app.",
        "หยุดชั่วคราว — ไปจอมเทียนหรือใช้แอป",
        "临时中断 — 请至 Jomtien 或使用 App。",
        "Перерыв — Jomtien или приложение.",
      ),
      ctaLabel: L("View Advisory", "ดูคำแนะนำ", "查看公告", "Подробнее"),
      featuredLabel: L("Breaking Advisory", "แจ้งด่วน", "紧急公告", "Срочно"),
    },
  },
  "expat/tax-legal": {
    hero: {
      title: L(
        "Tax Residency 2026: Remote Workers Clarified",
        "ภาษี 2026: ทำงานรีโมตชัดเจน",
        "2026 税务居民：远程工作者指引",
        "Налоги 2026: remote",
      ),
      excerpt: L(
        "180-day rule, foreign income, and treaties for long-stay residents.",
        "กฎ 180 วัน รายได้ต่างประเทศ และสนธิ",
        "180 天规则、境外收入与税收协定。",
        "180 дней и договоры.",
      ),
      ctaLabel: L("Read Advisory", "อ่านคำแนะนำ", "阅读指引", "Читать"),
    },
  },
  "nightlife/walking-street": {
    hero: {
      title: L(
        "Walking Street: Smart Infrastructure Complete",
        "Walking Street: โครงสร้าง Smart City เสร็จ",
        "Walking Street 智慧基建完工",
        "Walking Street: инфраструктура",
      ),
      excerpt: L(
        "LED lighting, CCTV, and emergency call boxes now cover the zone.",
        "ไฟ LED กล้อง และปุ่มฉุกเฉินครอบคลุมแล้ว",
        "LED、监控与紧急呼叫已全覆盖。",
        "LED, CCTV, кнопки SOS.",
      ),
      ctaLabel: L("District Guide", "คู่มือย่าน", "街区指南", "Гид"),
    },
  },
  "nightlife/clubs-bars": {
    hero: {
      title: L(
        "Pattaya Nightlife: International Acts Book Summer",
        "ไนท์ไลฟ์พัทยา: ศิลปินต่างชาติซัมเมอร์",
        "芭提雅夜生活：国际艺人夏季档",
        "Nightlife: лето",
      ),
      excerpt: L(
        "Superclubs announce residencies through August — early tables include credits.",
        "ซูเปอร์คลับจองถึงสิงหา — จองก่อนมีเครดิต",
        "超级俱乐部官宣至 8 月驻场，早订含额度。",
        "Резиденции до августа.",
      ),
      ctaLabel: L("Venue List", "รายชื่อร้าน", "场馆列表", "Площадки"),
    },
  },
  "sports/muay-thai": {
    hero: {
      title: L(
        "Max Muay Thai: March Card Sells Out",
        "Max Muay Thai: บัตรมีนาคมหมด",
        "Max Muay Thai：三月赛事售罄",
        "Max Muay Thai: sold out",
      ),
      excerpt: L(
        "International broadcast for co-main — gyms offer watch parties.",
        "ถ่ายทอดนานาชาติ — ค่ายมวยจัดดูสด",
        "联合主赛国际转播，拳馆观赛活动。",
        "Трансляция и watch parties.",
      ),
      ctaLabel: L("Fight Card", "คู่ชก", "对阵", "Карта"),
    },
  },
  "sports/golf": {
    hero: {
      title: L(
        "Pattaya Country Club: Amateur Open Returns",
        "Pattaya CC: เปิดสมัครมือสมัครเล่น",
        "芭提雅乡村俱乐部业余公开赛回归",
        "Amateur Open",
      ),
      excerpt: L(
        "120 players from 14 countries — cart path only on back nine.",
        "120 คน 14 ประเทศ — หลัง 9 ใช้รถกอล์ฟเท่านั้น",
        "14 国 120 人 — 后九洞仅球车道。",
        "120 игроков, 14 стран.",
      ),
      ctaLabel: L("Tournament Info", "ข้อมูลทัวร์นาเมนต์", "赛事信息", "Турнир"),
    },
  },
  "international/global": {
    hero: {
      title: L(
        "BBC Features Pattaya Smart City Recovery",
        "BBC รายงานฟื้นตัว Smart City พัทยา",
        "BBC 报道芭提雅智慧城市复苏",
        "BBC о Smart City",
      ),
      excerpt: L(
        "Global outlets highlight infrastructure and tourism rebound.",
        "สื่อโลกชี้โครงสร้างและท่องเที่ยวฟื้น",
        "国际媒体关注基建与旅游复苏。",
        "Мировая пресса о восстановлении.",
      ),
      ctaLabel: L("Global Coverage", "ข่าวโลก", "国际报道", "Мировые СМИ"),
    },
  },
};

function loc(lang: LanguageCode, text: LocalizedText): string {
  return pickText(lang, text);
}

function localizeFooter(
  lang: LanguageCode,
  base: NonNullable<NewsCategoryContent["footer"]>,
  patch?: FooterPatch,
): NonNullable<NewsCategoryContent["footer"]> {
  if (!patch) return base;
  return {
    ...base,
    title: loc(lang, patch.title),
    body: loc(lang, patch.body),
    primary: {
      href: patch.primary.href,
      label: loc(lang, patch.primary.label),
    },
    secondary: patch.secondary
      ? {
          href: patch.secondary.href,
          label: loc(lang, patch.secondary.label),
        }
      : base.secondary,
  };
}

export function resolveNewsCategoryContent(
  lang: LanguageCode,
  slug: string,
  base: NewsCategoryContent,
): NewsCategoryContent {
  const patch = patches[slug];
  const nav = getNewsNavCopy(lang, slug);

  const headlinesTitle =
    patch?.headlinesTitle != null
      ? loc(lang, patch.headlinesTitle)
      : nav
        ? tNewsCategoryUi(lang, "latestHeadlines", { topic: ` ${nav.label}` })
        : base.headlinesTitle;

  const hero = patch
    ? {
        ...base.hero,
        title: loc(lang, patch.hero.title),
        excerpt: loc(lang, patch.hero.excerpt),
        byline: patch.hero.byline ? loc(lang, patch.hero.byline) : base.hero.byline,
        ctaLabel: patch.hero.ctaLabel
          ? loc(lang, patch.hero.ctaLabel)
          : base.hero.ctaLabel ?? tNewsCategoryUi(lang, "readFullStory"),
        featuredLabel: patch.hero.featuredLabel
          ? loc(lang, patch.hero.featuredLabel)
          : base.hero.featuredLabel ?? tNewsCategoryUi(lang, "featured"),
      }
    : {
        ...base.hero,
        ctaLabel: base.hero.ctaLabel ?? tNewsCategoryUi(lang, "readFullStory"),
        featuredLabel: base.hero.featuredLabel ?? tNewsCategoryUi(lang, "featured"),
      };

  const footer = base.footer
    ? localizeFooter(lang, base.footer, patch?.footer)
    : undefined;

  return {
    ...base,
    hero,
    headlinesTitle,
    footer,
    spotlights: base.spotlights,
    articles: base.articles,
  };
}
