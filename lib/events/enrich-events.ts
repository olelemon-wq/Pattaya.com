import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type {
  EventCategoryId,
  EventLanguageTag,
  EventLocationArea,
  EventPriceTier,
  EventTicketing,
  EventsHubEvent,
  EventsHubEventCore,
} from "@/lib/i18n/messages/events-hub";

type EventMeta = {
  locationArea: EventLocationArea;
  priceTier: EventPriceTier;
  languageTags: EventLanguageTag[];
  organizer: ReturnType<typeof L>;
  mapQuery: string;
  ticketing: EventTicketing;
  ticketsHref?: string;
  forumTopic?: string;
};

const TICKETING_LABELS: Record<EventTicketing, ReturnType<typeof L>> = {
  free: L("Free entry", "เข้างานฟรี", "免费入场", "Бесплатно"),
  door: L("Pay at venue", "ซื้อหน้างาน", "现场购票", "На месте"),
  guide: L("How to attend", "ดูวิธีเข้างาน", "如何参加", "Как посетить"),
  online: L("Book tickets", "จองตั๋ว", "购票", "Билеты"),
};

const LOCATION_LABELS: Record<EventLocationArea, ReturnType<typeof L>> = {
  central: L("Central Pattaya", "พัทยากลาง", "芭提雅中心", "Центр Паттайи"),
  jomtien: L("Jomtien", "จอมเทียน", "乔木提恩", "Джомтьен"),
  naklua: L("Naklua / North", "นาเกลือ / เหนือ", "那库拉/北区", "Naklua / север"),
  pratumnak: L("Pratumnak Hill", "พระตำหนัก", "帕坦纳克", "Pratumnak"),
  marina: L("Ocean Marina", "โอเชียน มารีน่า", "Ocean Marina", "Ocean Marina"),
  banglamung: L("Banglamung", "บางละมุง", "邦拉蒙", "Banglamung"),
};

const PRICE_LABELS: Record<EventPriceTier, ReturnType<typeof L>> = {
  free: L("Free", "ฟรี", "免费", "Бесплатно"),
  paid: L("Paid tickets", "มีค่าใช้จ่าย", "收费", "Платно"),
  donation: L("Donation", "บริจาค", "随喜", "Donation"),
};

const LANGUAGE_LABELS: Record<EventLanguageTag, ReturnType<typeof L>> = {
  th: L("TH", "ไทย", "泰", "TH"),
  en: L("EN", "EN", "英", "EN"),
  zh: L("ZH", "ZH", "中", "ZH"),
  ru: L("RU", "RU", "俄", "RU"),
  multi: L("Multi", "หลายภาษา", "多语", "Multi"),
};

/** Pattaya 2569 calendar — sourced from major city-wide listings */
const EVENT_META: Record<string, EventMeta> = {
  "fireworks-festival": {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya City Events", "เทศบาลเมืองพัทยา", "芭提雅市政活动", "Events Pattaya City"),
    mapQuery: "Pattaya Beach fireworks festival",
    forumTopic: "fireworks-festival",
  },
  "pattaya-music-festival": {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya Music Festival", "เทศกาลดนตรีเมืองพัทยา", "芭提雅音乐节", "Pattaya Music Festival"),
    mapQuery: "Pattaya Beach Music Festival",
    forumTopic: "pattaya-music-festival",
  },
  "holi-festival": {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Tourism Authority of Thailand", "การท่องเที่ยวแห่งประเทศไทย", "泰国旅游局", "TAT"),
    mapQuery: "Pattaya Beach Holi Festival",
    forumTopic: "holi-pattaya",
  },
  thepprasit: {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Thepprasit Market Association", "สมาคมตลาดเทพประสิทธิ์", "Thepprasit 市集协会", "Thepprasit Market"),
    mapQuery: "Thepprasit Night Market Pattaya",
    forumTopic: "thepprasit-market",
  },
  "walking-street": {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Walking Street Business Assoc.", "สมาคมผู้ประกอบการ Walking Street", "Walking Street 商协会", "Walking Street Assoc."),
    mapQuery: "Walking Street Pattaya",
    forumTopic: "walking-street-weekend",
  },
  "kite-festival": {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya City Events", "เทศบาลเมืองพัทยา", "芭提雅市政活动", "Events Pattaya City"),
    mapQuery: "Central Festival Pattaya kite festival",
    forumTopic: "kite-festival",
  },
  "naklua-food-walk-jan": {
    locationArea: "naklua",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en"],
    organizer: L("Naklua Community", "ชุมชนนาเกลือ", "那库拉社区", "Naklua Community"),
    mapQuery: "Lan Po Naklua Old Market Pattaya",
    forumTopic: "naklua-food-walk",
  },
  "jomtien-fishing-cup": {
    locationArea: "jomtien",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en"],
    organizer: L("Pattaya Fishing Association", "สมาคมตกปลาพัทยา", "芭提雅钓鱼协会", "Pattaya Fishing Assoc."),
    mapQuery: "Jomtien Beach fishing competition",
    forumTopic: "jomtien-fishing",
  },
  "seafood-festival": {
    locationArea: "jomtien",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en"],
    organizer: L("Jomtien Tourism Group", "กลุ่มท่องเที่ยวจอมเทียน", "乔木提恩旅游组", "Jomtien Tourism"),
    mapQuery: "Jomtien Beach seafood festival",
    forumTopic: "seafood-festival",
  },
  "miss-queen": {
    locationArea: "central",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Tiffany's Show Pattaya", "ทiffany's Show พัทยา", "Tiffany's Show 芭提雅", "Tiffany's Show"),
    mapQuery: "Tiffany's Show Pattaya",
    ticketsHref: "/explore/nightlife",
    forumTopic: "miss-international-queen",
  },
  "wan-lai": {
    locationArea: "naklua",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya City Events", "เทศบาลเมืองพัทยา", "芭提雅市政活动", "Events Pattaya City"),
    mapQuery: "Wan Lai Songkran Pattaya Naklua",
    forumTopic: "wan-lai-songkran",
  },
  "pride-festival": {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["en", "th", "multi"],
    organizer: L("Pattaya PRIDE Committee", "คณะจัดงาน Pattaya PRIDE", "芭提雅 PRIDE 组委会", "Pattaya PRIDE"),
    mapQuery: "Pattaya Beach PRIDE Festival",
    forumTopic: "pride-festival",
  },
  "circuit-festival": {
    locationArea: "banglamung",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Circuit Festival Asia", "Circuit Festival Asia", "Circuit Festival Asia", "Circuit Festival Asia"),
    mapQuery: "Ramayana Water Park Pattaya",
    ticketsHref: "/explore/family-activities",
    forumTopic: "circuit-festival",
  },
  "pattaya-marathon": {
    locationArea: "central",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Pattaya Marathon Organizing Committee", "คณะจัดงาน Pattaya Marathon", "芭提雅马拉松组委会", "Pattaya Marathon"),
    mapQuery: "Terminal 21 Pattaya",
    ticketsHref: "/news/sports",
    forumTopic: "pattaya-marathon",
  },
  "film-festival": {
    locationArea: "central",
    priceTier: "paid",
    ticketing: "door",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya Film Festival", "เทศกาลภาพยนต์เมืองพัทยา", "芭提雅电影节", "Pattaya Film Festival"),
    mapQuery: "Pattaya city center",
    forumTopic: "film-festival",
  },
  "music-festival-jomtien": {
    locationArea: "jomtien",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya Music Festival", "เทศกาลดนตรีเมืองพัทยา", "芭提雅音乐节", "Pattaya Music Festival"),
    mapQuery: "Jomtien Beach Music Festival",
    forumTopic: "pattaya-music-festival",
  },
  "music-festival-koh-larn": {
    locationArea: "marina",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya Music Festival", "เทศกาลดนตรีเมืองพัทยา", "芭提雅音乐节", "Pattaya Music Festival"),
    mapQuery: "Samae Beach Koh Larn Pattaya",
    forumTopic: "pattaya-music-festival",
  },
  "music-festival-beach-finale": {
    locationArea: "naklua",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya Music Festival", "เทศกาลดนตรีเมืองพัทยา", "芭提雅音乐节", "Pattaya Music Festival"),
    mapQuery: "Lan Po Naklua Public Park Pattaya",
    forumTopic: "pattaya-music-festival",
  },
  "fitz-tennis": {
    locationArea: "pratumnak",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Fitz Club Royal Cliff", "Fitz Club รอยัล คลิฟ", "Fitz Club Royal Cliff", "Fitz Club Royal Cliff"),
    mapQuery: "Fitz Club Royal Cliff Pattaya",
    ticketsHref: "/news/sports",
    forumTopic: "fitz-tennis",
  },
  "pattaya-fashion-week": {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["en", "th", "multi"],
    organizer: L("Pattaya Fashion Week", "เทศกาลแฟชั่นวีคพัทยา", "芭提雅时装周", "Pattaya Fashion Week"),
    mapQuery: "Central Festival Pattaya Sunken Beachfront",
    forumTopic: "pattaya-fashion-week",
  },
  "kong-khao-pattaya": {
    locationArea: "naklua",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en"],
    organizer: L("Pattaya City Events", "เทศบาลเมืองพัทยา", "芭提雅市政活动", "Events Pattaya City"),
    mapQuery: "Lan Po Naklua Public Park Pattaya",
    forumTopic: "kong-khao-pattaya",
  },
  "fitz-pickleball": {
    locationArea: "pratumnak",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Fitz Club Royal Cliff", "Fitz Club รอยัล คลิฟ", "Fitz Club Royal Cliff", "Fitz Club Royal Cliff"),
    mapQuery: "Fitz Club Royal Cliff Pattaya",
    ticketsHref: "/news/sports",
    forumTopic: "fitz-pickleball",
  },
  "pattaya-night-run": {
    locationArea: "central",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Pattaya Night Run", "Pattaya Night Run", "Pattaya Night Run", "Pattaya Night Run"),
    mapQuery: "Pattaya Beach Road night run",
    ticketsHref: "/news/sports",
    forumTopic: "pattaya-night-run",
  },
  "mixology-open": {
    locationArea: "marina",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya Mixology Association", "สมาคมบาร์เทนเดอร์พัทยา", "芭提雅调酒协会", "Pattaya Mixology"),
    mapQuery: "Central Marina Pattaya",
    forumTopic: "mixology-open",
  },
  "fitz-squash": {
    locationArea: "pratumnak",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Fitz Club Royal Cliff", "Fitz Club รอยัล คลิฟ", "Fitz Club Royal Cliff", "Fitz Club Royal Cliff"),
    mapQuery: "Fitz Club Royal Cliff Pattaya",
    ticketsHref: "/news/sports",
    forumTopic: "fitz-squash",
  },
  "rolling-loud-thailand": {
    locationArea: "banglamung",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Rolling Loud", "Rolling Loud", "Rolling Loud", "Rolling Loud"),
    mapQuery: "Pattaya Rolling Loud Thailand",
    ticketsHref: "/explore/nightlife",
    forumTopic: "rolling-loud-thailand",
  },
  "coffee-on-the-beach": {
    locationArea: "central",
    priceTier: "paid",
    ticketing: "door",
    languageTags: ["th", "en", "multi"],
    organizer: L("Chonburi Coffee Association", "สมาคมกาแฟชลบุรี", "春武里咖啡协会", "Chonburi Coffee"),
    mapQuery: "Central Pattaya Beach",
    forumTopic: "coffee-on-the-beach",
  },
  "itf-masters-tennis": {
    locationArea: "pratumnak",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("ITF / Fitz Club", "ITF / Fitz Club", "ITF / Fitz Club", "ITF / Fitz Club"),
    mapQuery: "Fitz Club Royal Cliff Pattaya",
    ticketsHref: "/news/sports",
    forumTopic: "itf-masters-tennis",
  },
  "wonderfruit-festival": {
    locationArea: "banglamung",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Wonderfruit", "Wonderfruit", "Wonderfruit", "Wonderfruit"),
    mapQuery: "Siam Country Club Chonburi",
    ticketsHref: "/explore/nightlife",
    forumTopic: "wonderfruit-festival",
  },
  "naklua-food-walk-dec": {
    locationArea: "naklua",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en"],
    organizer: L("Naklua Community", "ชุมชนนาเกลือ", "那库拉社区", "Naklua Community"),
    mapQuery: "Lan Po Naklua Old Market Pattaya",
    forumTopic: "naklua-food-walk",
  },
  "trail-run": {
    locationArea: "pratumnak",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Pattaya Trail Running", "การแข่งขันวิ่งเทรลพัทยา", "芭提雅越野跑", "Pattaya Trail Running"),
    mapQuery: "Bali Hai Pier Pattaya",
    ticketsHref: "/news/sports",
    forumTopic: "trail-run",
  },
  "loma-run": {
    locationArea: "jomtien",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Loma Run Pattaya", "Loma Run พัทยา", "Loma Run", "Loma Run"),
    mapQuery: "Jomtien Beach Pattaya",
    ticketsHref: "/news/sports",
    forumTopic: "loma-run",
  },
  "bikini-beach-race": {
    locationArea: "central",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Pattaya Beach Race", "การแข่งขันวิ่งชายหาดพัทยา", "芭提雅海滩跑", "Pattaya Beach Race"),
    mapQuery: "Pattaya Beach",
    ticketsHref: "/news/sports",
    forumTopic: "bikini-beach-race",
  },
  "loy-krathong": {
    locationArea: "naklua",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya City Events", "เทศบาลเมืองพัทยา", "芭提雅市政活动", "Events Pattaya City"),
    mapQuery: "Lan Po Naklua Pattaya Loy Krathong",
    forumTopic: "loy-krathong",
  },
  "tomorrow-thailand": {
    locationArea: "banglamung",
    priceTier: "paid",
    ticketing: "online",
    languageTags: ["en", "th", "multi"],
    organizer: L("Tomorrowland / Wisdom Valley", "Tomorrowland / Wisdom Valley", "Tomorrowland / Wisdom Valley", "Tomorrowland"),
    mapQuery: "Wisdom Valley Pattaya",
    ticketsHref: "/explore/nightlife",
    forumTopic: "tomorrow-thailand",
  },
  "jazz-festival": {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["en", "th", "multi"],
    organizer: L("Pattaya International Jazz Festival", "เทศกาลดนตรีแจ๊สนานาชาติพัทยา", "芭提雅国际爵士节", "Pattaya Jazz Festival"),
    mapQuery: "Pattaya Beach jazz festival",
    forumTopic: "jazz-festival",
  },
  countdown: {
    locationArea: "central",
    priceTier: "free",
    ticketing: "free",
    languageTags: ["th", "en", "multi"],
    organizer: L("Pattaya City Events", "เทศบาลเมืองพัทยา", "芭提雅市政活动", "Events Pattaya City"),
    mapQuery: "Pattaya Beach Countdown",
    forumTopic: "pattaya-countdown",
  },
};

function formatLanguageLabels(lang: LanguageCode, tags: EventLanguageTag[]) {
  return tags.map((tag) => t(lang, LANGUAGE_LABELS[tag])).join(" · ");
}

export function enrichEvents(lang: LanguageCode, events: EventsHubEventCore[]): EventsHubEvent[] {
  return events.map((event) => {
    const meta = EVENT_META[event.id];
    if (!meta) {
      throw new Error(`Missing event meta for ${event.id}`);
    }

    const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meta.mapQuery)}`;
    const forumHref = meta.forumTopic
      ? `/forum/trending?topic=${encodeURIComponent(meta.forumTopic)}`
      : "/forum/trending";

    const primaryCtaHref = meta.ticketsHref ?? event.href;

    return {
      ...event,
      locationArea: meta.locationArea,
      locationLabel: t(lang, LOCATION_LABELS[meta.locationArea]),
      priceTier: meta.priceTier,
      priceLabel: t(lang, PRICE_LABELS[meta.priceTier]),
      languageTags: [...meta.languageTags],
      languageLabels: formatLanguageLabels(lang, meta.languageTags),
      organizer: t(lang, meta.organizer),
      mapHref,
      ticketsHref: primaryCtaHref,
      forumHref,
      ticketing: meta.ticketing,
      primaryCtaLabel: t(lang, TICKETING_LABELS[meta.ticketing]),
      primaryCtaHref,
    };
  });
}

export const EVENT_CATEGORY_ORDER: EventCategoryId[] = [
  "concert",
  "festival",
  "edm",
  "localFestival",
  "market",
  "family",
  "muayThai",
  "golf",
  "business",
];

/** Categories that appear in the current event list — for browse pills & filters */
export function getActiveEventCategories(events: { category: EventCategoryId }[]): EventCategoryId[] {
  const used = new Set(events.map((event) => event.category));
  return EVENT_CATEGORY_ORDER.filter((id) => used.has(id));
}
