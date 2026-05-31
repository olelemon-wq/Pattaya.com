import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const spotlightBodies = {
  "beach-road": {
    badge: L("Infrastructure", "โครงสร้างพื้นฐาน", "基建", "Инфраструктура"),
    title: L(
      "Beach Road Smart Corridor: Phase 1 Breaks Ground",
      "Smart Corridor หาดพัทยา เฟส 1 เริ่มก่อสร้าง",
      "海滩路智慧走廊：一期开工",
      "Smart Corridor Beach Road: фаза 1",
    ),
    excerpt: L(
      "Lane closures alternate nightly from 22:00–05:00 while crews install fiber ducts and LED wayfinding from Central Pattaya to Walking Street.",
      "ปิดเลนสลับกันคืน 22:00–05:00 ติดตั้งไฟเบอร์และป้าย LED จากกลางเมืองถึง Walking Street",
      "每晚 22:00–05:00 交替封 lane，铺设光纤与 LED 导视。",
      "Ночные перекрытия 22:00–05:00 — оптоволокно и LED.",
    ),
    cta: L("Road Closures Map", "แผนปิดถนน", "封路地图", "Карта перекрытий"),
    imageAlt: L(
      "Pattaya Beach Road waterfront at dusk",
      "ริมหาดพัทยายามเย็น",
      "芭提雅海滩路黄昏",
      "Beach Road на закате",
    ),
  },
  utilities: {
    badge: L("Utilities", "สาธารณูปโภค", "公用事业", "Коммунальные"),
    title: L(
      "Jomtien Drainage Upgrade: Flood-Prone Sois Targeted",
      "ปรับท่อระบายจอมเทียน: ซอยเสี่ยงน้ำท่วม",
      "仲天排水升级：整治易涝巷",
      "Jomtien: дренаж в зонах риска",
    ),
    excerpt: L(
      "PEA and city engineers replace aging pumps on Thappraya Road — residents asked to clear storm drains before monsoon peak.",
      "PEA และวิศวกรเปลี่ยนปั๊มเก่าถนนทัพพระยา — ขอให้ล้างท่อก่อนฤดูฝน",
      "电力局与市政更换 Thappraya 路旧泵，请居民雨季前清理排水沟。",
      "Замена насосов на Thappraya — очистите ливневки.",
    ),
    cta: L("Utility Advisories", "ประกาศสาธารณูปโภค", "公用事业公告", "Объявления"),
    imageAlt: L(
      "City roadworks and drainage maintenance in Pattaya",
      "งานถนนและท่อระบายในพัทยา",
      "芭提雅道路与排水施工",
      "Дорожные работы Pattaya",
    ),
  },
  "public-services": {
    badge: L("Public Services", "บริการสาธารณะ", "公共服务", "Услуги"),
    title: L(
      "Free Beach Wi-Fi Zones Expand to Naklua & Wongamat",
      "Wi-Fi ชายหาดฟรีขยายถึงนาเกลือและวงอามาด",
      "免费海滩 Wi-Fi 扩展至那库拉与 Wongamat",
      "Бесплатный Wi-Fi: Naklua и Wongamat",
    ),
    excerpt: L(
      "200 new access points go live this month with bilingual login portals for tourists and long-stay residents.",
      "จุดใหม่ 200 จุดพร้อมพอร์ทัลสองภาษาสำหรับนักท่องเที่ยวและผู้อยู่อาศัย",
      "本月上线 200 个新接入点，双语登录门户。",
      "200 точек доступа с двуязычным порталом.",
    ),
    cta: L("View Coverage Map", "แผนครอบคลุม", "覆盖地图", "Карта покрытия"),
    imageAlt: L(
      "Pattaya city street at night with public lighting",
      "ถนนเมืองพัทยายามค่ำ",
      "芭提雅夜间街道",
      "Улица Pattaya ночью",
    ),
  },
} as const;

const articleBodies = {
  "walking-street": {
    badge: L("Nightlife District", "ย่านไนท์ไลฟ์", "夜生活区", "Ночная жизнь"),
    title: L(
      "Walking Street Transformation: Smart Lighting & CCTV Rollout",
      "Walking Street: ไฟอัจฉริยะและกล้อง CCTV",
      "步行街改造：智能照明与监控",
      "Walking Street: освещение и CCTV",
    ),
    excerpt: L(
      "New LED poles and emergency call boxes aim to improve safety for visitors while preserving the district's character.",
      "เสา LED และปุ่มฉุกเฉินเพื่อความปลอดภัยโดยคงเอกลักษณ์ย่าน",
      "新 LED 灯杆与紧急呼叫箱提升安全并保留街区特色。",
      "LED и SOS-боксы для безопасности гостей.",
    ),
    footer: L("5 hours ago", "5 ชม.ที่แล้ว", "5 小时前", "5 ч назад"),
    imageAlt: L(
      "Walking Street Pattaya at night with neon signs",
      "Walking Street กลางคืนพร้อมไฟนีออน",
      "芭提雅步行街霓虹夜景",
      "Walking Street с неоном",
    ),
  },
  sukhumvit: {
    badge: L("Traffic", "จราจร", "交通", "Трафик"),
    title: L(
      "Sukhumvit U-Turn Widening: Commuter Delays Expected Through May",
      "ขยายยูเทิร์นสุขุมวิท: คาดหน่วงจนถึงพฤษภา",
      "素坤逸掉头拓宽：预计五月前拥堵",
      "Sukhumvit: расширение разворота до мая",
    ),
    excerpt: L(
      "Chonburi Highway Department adds a third lane at North Pattaya interchange — alternative routes via Sukhumvit Soi 50 advised.",
      "กรมทางหลวงเพิ่มเลนที่ทาง interchange เหนือพัทยา — แนะนำทางเลี่ยงซอย 50",
      "春武里公路局在北芭提雅立交增第三车道，建议走 Soi 50 绕行。",
      "Третья полоса на съезде — объезд Soi 50.",
    ),
    footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
    imageAlt: L(
      "Busy road and local transport near Pattaya",
      "ถนนคึกคักและขนส่งสาธารณะใกล้พัทยา",
      "芭提雅附近繁忙道路与公共交通",
      "Оживлённая дорога и транспорт",
    ),
  },
  cleanup: {
    badge: L("Environment", "สิ่งแวดล้อม", "环境", "Экология"),
    title: L(
      "Big Beach Clean 2026: 3,000 Volunteers Register in First Week",
      "Big Beach Clean 2026: อาสา 3,000 คนสมัครในสัปดาห์แรก",
      "2026 海滩大清洁：首周 3000 志愿者报名",
      "Big Beach Clean 2026: 3000 волонтёров",
    ),
    excerpt: L(
      "City partners with hotels and dive shops for monthly waste collection from Bali Hai Pier to Jomtien Beach.",
      "เทศบาลร่วมโรงแรมและร้านดำน้ำเก็บขยะรายเดือนจากแหลมบาลีฮายถึงจอมเทียน",
      "市政与酒店、潜店合作，每月从 Bali Hai 至仲天清理垃圾。",
      "Ежемесячная уборка от Bali Hai до Jomtien.",
    ),
    footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
    imageAlt: L(
      "Jomtien Beach shoreline in Pattaya",
      "ชายหาดจอมเทียน พัทยา",
      "芭提雅仲天海滩海岸线",
      "Берег Jomtien",
    ),
  },
  wongamat: {
    badge: L("Urban Planning", "ผังเมือง", "城市规划", "Градостроение"),
    title: L(
      "Wongamat High-Rise Guidelines: New Height Caps Announced",
      "แนวทางตึกสูงวงอามาด: ประกาศจำกัดความสูงใหม่",
      "Wongamat 高层指引：公布新限高",
      "Wongamat: новые лимиты высоты",
    ),
    excerpt: L(
      "Planning committee limits future towers to 35 floors to preserve sea-view corridors for neighboring properties.",
      "คณะกรรมการจำกัดตึกใหม่ 35 ชั้น เพื่อรักษาเส้นสายตามทะเล",
      "规划委员会限制未来塔楼 35 层，保留海景通廊。",
      "Лимит 35 этажей для сохранения видов.",
    ),
    footer: L("3 days ago", "3 วันที่แล้ว", "3 天前", "3 дня назад"),
    imageAlt: L(
      "Wongamat Beach and high-rise coastline in Pattaya",
      "หาดวงอามาดและตึกสูงริมชายฝั่งพัทยา",
      "芭提雅 Wongamat 海滩与高层海岸",
      "Wongamat и высотки",
    ),
  },
  "tourist-police": {
    badge: L("Public Safety", "ความปลอดภัย", "公共安全", "Безопасность"),
    title: L(
      "Tourist Police Mobile Units Deployed at Bali Hai Pier",
      "Tourist Police มือถือที่แหลมบาลีฮาย",
      "Bali Hai 码头部署旅游警察移动单位",
      "Tourist Police у Bali Hai",
    ),
    excerpt: L(
      "Bilingual officers on electric carts offer 24/7 assistance during peak ferry hours to Koh Larn.",
      "เจ้าหน้าที่สองภาษาบนรถไฟฟ้า ช่วย 24/7 ช่วงเรือไปเกาะล้าน",
      "双语警员电动巡逻车，格兰岛渡轮高峰 24/7 协助。",
      "Двуязычные патрули 24/7 на паромы к Koh Larn.",
    ),
    footer: L("4 days ago", "4 วันที่แล้ว", "4 天前", "4 дня назад"),
    imageAlt: L(
      "Boats and pier traffic toward Koh Larn from Pattaya",
      "เรือและท่าเรือมุ่งหน้าเกาะล้านจากพัทยา",
      "芭提雅前往格兰岛的船只与码头",
      "Лодки к Koh Larn",
    ),
  },
  "music-festival": {
    badge: L("Events", "งาน", "活动", "События"),
    title: L(
      "Pattaya Music Festival 2026: Road Closures & Shuttle Routes Published",
      "Pattaya Music Festival 2026: ประกาศปิดถนนและรถรับส่ง",
      "2026 芭提雅音乐节：封路与 shuttle 路线",
      "Music Festival 2026: маршруты shuttle",
    ),
    excerpt: L(
      "Free shuttle buses loop between Beach Road, Terminal 21, and Bali Hai Pier during the three-day event.",
      "รถรับส่งฟรีวน Beach Road, Terminal 21 และแหลมบาลีฮาย 3 วัน",
      "活动期间免费 shuttle 环 Beach Road、Terminal 21 与 Bali Hai。",
      "Бесплатный shuttle 3 дня.",
    ),
    footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
    imageAlt: L(
      "Outdoor music festival crowd at night",
      "งานเทศกาลดนตรีกลางแจ้งยามค่ำ",
      "夜间户外音乐节人群",
      "Фестиваль под открытым небом",
    ),
  },
} as const;

const articleKeyByTitle: Record<string, keyof typeof articleBodies> = {
  "Walking Street Transformation: Smart Lighting & CCTV Rollout": "walking-street",
  "Sukhumvit U-Turn Widening: Commuter Delays Expected Through May": "sukhumvit",
  "Big Beach Clean 2026: 3,000 Volunteers Register in First Week": "cleanup",
  "Wongamat High-Rise Guidelines: New Height Caps Announced": "wongamat",
  "Tourist Police Mobile Units Deployed at Bali Hai Pier": "tourist-police",
  "Pattaya Music Festival 2026: Road Closures & Shuttle Routes Published": "music-festival",
};

export function localizeCityUpdatesSpotlight<
  T extends {
    id: string;
    badge: string;
    title: string;
    excerpt: string;
    cta: string;
    imageAlt: string;
  },
>(lang: LanguageCode, item: T): T {
  const patch = spotlightBodies[item.id as keyof typeof spotlightBodies];
  if (!patch) return item;
  return {
    ...item,
    badge: t(lang, patch.badge),
    title: t(lang, patch.title),
    excerpt: t(lang, patch.excerpt),
    cta: t(lang, patch.cta),
    imageAlt: t(lang, patch.imageAlt),
  };
}

export function localizeCityUpdatesArticle<
  T extends {
    href: string;
    badge: string;
    title: string;
    excerpt: string;
    footer: string;
    imageAlt: string;
  },
>(lang: LanguageCode, item: T): T {
  const key = articleKeyByTitle[item.title];
  if (!key) return item;
  const patch = articleBodies[key];
  return {
    ...item,
    badge: t(lang, patch.badge),
    title: t(lang, patch.title),
    excerpt: t(lang, patch.excerpt),
    footer: t(lang, patch.footer),
    imageAlt: t(lang, patch.imageAlt),
  };
}
