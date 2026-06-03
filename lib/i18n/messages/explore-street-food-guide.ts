import type { LanguageCode } from "@/lib/i18n/languages";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import {
  streetFoodGoogleMapsDirectionsHref,
  streetFoodMapOpenHref,
  streetFoodMapPinById,
  type StreetFoodMapPinId,
} from "@/lib/design/street-food-guide-map";
import { L, t } from "@/lib/i18n/living-helpers";

export type StreetFoodGuideItem = {
  id: StreetFoodMapPinId;
  name: string;
  tagline?: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  highlights: string[];
  vibe: string;
  bestFor: string;
  foods?: string[];
  tips?: string;
  mapsHref: string;
  directionsHref: string;
  siteHref?: string;
};

export type StreetFoodGuideCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: StreetFoodGuideItem[];
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function spot(
  id: StreetFoodMapPinId,
  maps: string,
  fields: {
    name: ReturnType<typeof L>;
    tagline?: ReturnType<typeof L>;
    openDays: ReturnType<typeof L>;
    hoursRange: ReturnType<typeof L>;
    bestTimeOfDay: ReturnType<typeof L>;
    highlights: ReturnType<typeof L>[];
    vibe: ReturnType<typeof L>;
    bestFor: ReturnType<typeof L>;
    foods?: ReturnType<typeof L>[];
    tips?: ReturnType<typeof L>;
    siteHref?: string;
  },
) {
  const pin = streetFoodMapPinById[id];
  return {
    id,
    mapsHref: mapsQuery(maps),
    directionsHref: streetFoodGoogleMapsDirectionsHref(pin.lat, pin.lng),
    ...fields,
  };
}

const guideSpots = {
  thepprasit: spot("thepprasit", "Thepprasit Night Market Pattaya Thailand", {
    name: L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Thepprasit"),
    tagline: L(
      "King of Pattaya street food",
      "ราชา street food พัทยา",
      "芭提雅街头美食之王",
      "Король стритфуда Паттайи",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~17:00–22:30", "~17:00–22:30", "约17:00–22:30", "~17:00–22:30"),
    bestTimeOfDay: L("18:00–21:00", "18:00–21:00", "18:00–21:00", "18:00–21:00"),
    highlights: [
      L("Grilled squid", "หมึกย่าง", "烤鱿鱼", "Кальмар на гриле"),
      L("Mala skewers", "หม่าล่า", "麻辣串", "Mala"),
      L("Sushi stalls", "ซูชิ", "寿司摊", "Суши"),
      L("Crispy pork", "หมูกรอบ", "脆皮猪", "Хрустящая свинина"),
      L("Mango sticky rice", "ข้าวเหนียวมะม่วง", "芒果糯米饭", "Манго sticky rice"),
      L("Fruit smoothies", "น้ำผลไม้ปั่น", "水果冰沙", "Смузи"),
    ],
    vibe: L(
      "Pattaya's biggest serious street-food market — packed aisles, food smells everywhere, the full night-market circus in one loop.",
      "ตลาด street food ใหญ่สุดของพัทยาแบบจริงจัง — คึกคักมาก คนเดินแน่น กลิ่นอาหารตีหน้าแบบสะใจ",
      "芭提雅最大、最正经的街头夜市——人潮涌动、香味扑面，一圈逛完最过瘾。",
      "Самый серьёзный стритфуд-рынок — толпа, запахи, всё в одном круге.",
    ),
    bestFor: L(
      "When you want the densest street-food night in Pattaya — arrive hungry, walk the full loop before you choose stalls.",
      "อยากกินแบบแน่นที่สุด — มาหิว ๆ เดินครบวงก่อนเลือกร้าน",
      "想体验芭提雅最密集的夜市——空腹来，先逛一整圈再选摊。",
      "Самый насыщенный вечер — приходите голодными, обойдите круг.",
    ),
    tips: L(
      "Golden hour 18:00–21:00 — weekends are busiest; come by 17:30 for parking and the best seafood pick.",
      "เวลาทอง 18:00–21:00 — ส–อาแน่นมาก มา 17:30 จอดง่าย เลือกซีฟู้ดได้ครบ",
      "黄金时段 18:00–21:00；周末最挤，17:30 前到停车和海鲜选择更好。",
      "Пик 18:00–21:00; в выходные люднее — к 17:30 проще с парковкой.",
    ),
    siteHref: marketPagePaths.thepprasit,
  }),
  noenPlubWan: spot("noen-plub-wan", "Noen Plub Wan Community Market Pattaya", {
    name: L(
      "Noen Plub Wan Community Market",
      "ตลาดเนินพลับหวาน",
      "Noen Plub Wan 社区市场",
      "Noen Plub Wan",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~16:00–22:00", "~16:00–22:00", "约16:00–22:00", "~16:00–22:00"),
    bestTimeOfDay: L("Early evening", "เย็นเร็ว", "傍晚", "Ранний вечер"),
    highlights: [
      L("Papaya salad", "ส้มตำ", "青木瓜沙拉", "Som tam"),
      L("Grilled chicken", "ไก่ย่าง", "烤鸡", "Курица на гриле"),
      L("Fried meatballs", "ลูกชิ้นทอด", "炸肉丸", "Фрикадельки"),
      L("Pork skewers", "หมูปิ้ง", "烤猪肉串", "Свиные шашлычки"),
      L("Red pork rice", "ข้าวหมูแดง", "叉烧饭", "Рис с красной свининой"),
    ],
    vibe: L(
      "Street food for people who actually live here — prices still very local.",
      "street food ของคนอยู่จริง — ราคายัง local มาก",
      "真正居民吃的街头美食，价格仍很本地。",
      "Еда для местных — цены ещё «свои».",
    ),
    bestFor: L(
      "When you want authentic market stalls without the tourist show.",
      "อยาก local จริง ไม่เน้นโชว์นักท่องเที่ยว",
      "要地道小摊、不要游客表演。",
      "Настоящий local без туристического цирка.",
    ),
    siteHref: marketPagePaths.hiddenNoenPlubWan,
  }),
  lanPho: spot("lan-pho-naklua", "Lan Pho Naklua Market Pattaya Thailand", {
    name: L("Lan Pho Naklua Market", "ลานโพธิ์นาเกลือ", "兰坡那库拉", "Lan Pho Naklua"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~06:00–18:00", "~06:00–18:00", "约6:00–18:00", "~6:00–18:00"),
    bestTimeOfDay: L("Late afternoon", "บ่ายแก่ ๆ", "下午", "После обеда"),
    highlights: [
      L("Grilled squid", "หมึกย่าง", "烤鱿鱼", "Кальмар"),
      L("Grilled prawns", "กุ้งเผา", "烤虾", "Креветки"),
      L("Grilled shellfish", "หอยเผา", "烤贝", "Моллюски"),
      L("Seafood dipping sauce", "น้ำจิ้มซีฟู้ด", "海鲜蘸料", "Соус для морепродуктов"),
    ],
    vibe: L(
      "Seafood street food — buy fresh, eat by the water like locals do.",
      "street food เวอร์ชันทะเล — กินริมทะเลแบบบ้าน ๆ",
      "海鲜版街头美食，像本地人一样在水边吃。",
      "Стритфуд у моря — просто и по-рыбацки.",
    ),
    bestFor: L(
      "Grilled seafood without a sit-down restaurant bill.",
      "อยากซีฟู้ดย่าง ไม่ต้องเข้าร้านหรู",
      "想烤海鲜、不必进餐厅。",
      "Жареные морепродукты без ресторана.",
    ),
    siteHref: marketPagePaths.hiddenLanPho,
  }),
  soiBuakhao: spot("soi-buakhao", "Soi Buakhao Pattaya Thailand", {
    name: L("Soi Buakhao (night)", "ซอยบัวขาว ตอนกลางคืน", "Buakhao 巷（夜间）", "Soi Buakhao"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~18:00–late", "~18:00–ดึก", "约18:00–深夜", "~18:00–поздно"),
    bestTimeOfDay: L("After 22:00", "หลัง 4 ทุ่ม", "22:00 后", "После 22:00"),
    highlights: [
      L("Roti", "โรตี", "Roti", "Roti"),
      L("Kebab", "เคบับ", "烤肉卷", "Кебаб"),
      L("Pork skewers", "หมูปิ้ง", "烤猪", "Свинина"),
      L("Pad Thai", "ผัดไทย", "泰式炒河", "Pad Thai"),
      L("Burgers", "เบอร์เกอร์", "汉堡", "Бургеры"),
      L("Isaan stalls", "อาหารอีสาน", "伊桑摊", "Isaan"),
    ],
    vibe: L(
      "Real Pattaya after dark — carts and counters no matter how late you are hungry.",
      "พัทยากลางคืนของจริง — ดึกแค่ไหนก็ยังมีของกิน",
      "真正的芭提雅夜晚——再晚也有吃的。",
      "Настоящая ночная Паттайя — еда допоздна.",
    ),
    bestFor: L(
      "Late-night snacks when clubs and bars wind down.",
      "หิวดึก ๆ หลังออกจากบาร์",
      "酒吧后深夜解馋。",
      "Поздний перекус после баров.",
    ),
    siteHref: marketPagePaths.buakhao,
  }),
  watChaiMongkhon: spot("wat-chai-mongkhon", "Wat Chai Mongkhon Market Pattaya Thailand", {
    name: L(
      "Wat Chai Mongkhon morning market",
      "ตลาดเช้าวัดชัยมงคล",
      "柴孟坤寺早市",
      "Wat Chai Mongkhon",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~05:00–11:00", "~05:00–11:00", "约5:00–11:00", "~5:00–11:00"),
    bestTimeOfDay: L("Before 08:00", "ก่อน 8 โมง", "8:00 前", "До 8:00"),
    highlights: [
      L("Patongko (Thai donuts)", "ปาท่องโก๋", "泰式油条", "Patongko"),
      L("Pork sticky rice", "ข้าวเหนียวหมู", "猪肉糯米饭", "Рис с свининой"),
      L("Kanom krok", "ขนมครก", "椰奶小煎饼", "Kanom krok"),
      L("Soy milk", "น้ำเต้าหู้", "豆浆", "Соевое молоко"),
      L("Curry bags to go", "ข้าวแกงถุง", "袋装咖喱饭", "Рис с карри"),
    ],
    vibe: L(
      "Morning street food at its most local — Pattaya before tourists wake up.",
      "street food เช้า local สุด — พัทยาก่อนนักท่องเที่ยวตื่น",
      "最本地的早市街头美食——游客起床前的芭提雅。",
      "Утренний стритфуд — Паттайя до туристов.",
    ),
    bestFor: L(
      "Breakfast like a resident, then beach or market later.",
      "อาหารเช้าแบบคนพื้นที่",
      "像本地人吃早餐。",
      "Завтрак как у местных.",
    ),
    siteHref: marketPagePaths.hiddenWatChaiMongkhon,
  }),
  pattayaPark: spot("pattaya-park", "Pattaya Park Night Market Thailand", {
    name: L("Pattaya Park Night Market", "ตลาดพัทยาปาร์ค", "Pattaya Park 夜市", "Pattaya Park"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~17:00–22:00", "~17:00–22:00", "约17:00–22:00", "~17:00–22:00"),
    bestTimeOfDay: L("Evening", "เย็น", "傍晚", "Вечер"),
    highlights: [
      L("Fried snacks", "ของทอด", "油炸小吃", "Жареное"),
      L("Seafood", "ซีฟู้ด", "海鲜", "Морепродукты"),
      L("Thai desserts", "ขนมไทย", "泰式甜点", "Десерты"),
      L("Made-to-order plates", "อาหารตามสั่ง", "现炒", "По заказу"),
    ],
    vibe: L(
      "Snack-heavy night market — more locals than tourists, still a fun graze.",
      "สายกินจุกจิก — คนพื้นที่เยอะกว่า tourist นิดนึง",
      "小吃型夜市，本地人略多于游客。",
      "Рынок закусок — чуть больше местных.",
    ),
    bestFor: L(
      "Casual nibbling when Thepprasit feels too intense.",
      "อยากเดินกินเบา ๆ ไม่เอาแน่นแบบเทพประสิทธิ์",
      "Thepprasit 太挤时，轻松逛吃。",
      "Лёгкая прогулка без толпы Thepprasit.",
    ),
    siteHref: marketPagePaths.pattayaPark,
  }),
} as const;

const categoriesDef = [
  {
    id: "night-markets",
    title: L(
      "Night markets & grazing",
      "ตลาดกลางคืน & สายกินจุกจิก",
      "夜市与逛吃",
      "Ночные рынки",
    ),
    subtitle: L(
      "The big evening loops — arrive hungry.",
      "ลูปเย็น ๆ มาหิว ๆ",
      "傍晚大环线，空着肚子来。",
      "Вечерние маршруты — приходите голодными.",
    ),
    spotKeys: ["thepprasit", "noenPlubWan", "pattayaPark"] as const,
  },
  {
    id: "seafood-late",
    title: L(
      "Seafood & late-night soi",
      "ซีฟู้ด & ซอยดึก",
      "海鲜与深夜巷",
      "Морепродукты & ночные сои",
    ),
    subtitle: L(
      "From the fishing hall to Buakhao after hours.",
      "จากลานโพธิ์ไปบัวขาวดึก ๆ",
      "从鱼市到深夜 Buakhao。",
      "От Lan Pho до Buakhao ночью.",
    ),
    spotKeys: ["lanPho", "soiBuakhao"] as const,
  },
  {
    id: "morning",
    title: L(
      "Morning street food",
      "สายอาหารเช้า",
      "早餐街头美食",
      "Утренний стритфуд",
    ),
    subtitle: L(
      "Go early — stalls thin out after 10:00.",
      "ไปเช้า — หลัง 10 โมงของลด",
      "宜早去，10 点后摊位移少。",
      "Рано — после 10:00 мало.",
    ),
    spotKeys: ["watChaiMongkhon"] as const,
  },
] as const;

function resolveSpot(lang: LanguageCode, key: keyof typeof guideSpots): StreetFoodGuideItem {
  const s = guideSpots[key];
  return {
    id: s.id,
    name: t(lang, s.name),
    tagline: s.tagline ? t(lang, s.tagline) : undefined,
    openDays: t(lang, s.openDays),
    hoursRange: t(lang, s.hoursRange),
    bestTimeOfDay: t(lang, s.bestTimeOfDay),
    highlights: s.highlights.map((h) => t(lang, h)),
    vibe: t(lang, s.vibe),
    bestFor: t(lang, s.bestFor),
    foods: s.foods?.map((f) => t(lang, f)),
    tips: s.tips ? t(lang, s.tips) : undefined,
    mapsHref: s.mapsHref,
    directionsHref: s.directionsHref,
    siteHref: s.siteHref,
  };
}

export function getStreetFoodGuideCategories(lang: LanguageCode): StreetFoodGuideCategory[] {
  return categoriesDef.map((cat) => ({
    id: cat.id,
    title: t(lang, cat.title),
    subtitle: t(lang, cat.subtitle),
    items: cat.spotKeys.map((key) => resolveSpot(lang, key)),
  }));
}

export function getStreetFoodGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Pattaya street food guide",
        "คู่มือ street food พัทยา",
        "芭提雅街头美食指南",
        "Гид по стритфуду Паттайи",
      ),
    ),
    body: t(
      lang,
      L(
        "Street food is the heartbeat of Pattaya — a city of night workers and all-day carts. Think seaside grills, spicy Isaan, night bazaars, late carts, village breakfasts, and old-school snacks.",
        "street food คือหัวใจพัทยา — เมืองคนทำงานกลางคืน รถเข็นคึกคักทั้งวัน มีทั้งซีฟู้ดริมทาง อีสานแซ่บ ตลาดนัด รถเข็นดึก ๆ ของกินเช้า",
        "街头美食是芭提雅的心脏——夜班城市，摊车昼夜不停：海边烧烤、伊桑辣、夜市、深夜推车、早餐与古早小吃。",
        "Стритфуд — сердце Паттайи: море, Isaan, ночные рынки, утро и ночные сои.",
      ),
    ),
    sourceNote: t(
      lang,
      L(
        "Hours are practical guides only — confirm on site or in Google Maps.",
        "เวลาเป็นคำแนะนำ — ยืนยันหน้างานหรือใน Google Maps",
        "时间为参考，请现场确认。",
        "Часы ориентировочные.",
      ),
    ),
    openInMaps: t(
      lang,
      L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps"),
    ),
    directionsLabel: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    siteGuideLabel: t(
      lang,
      L("Market guide on Pattya", "คู่มือตลาดใน Pattya", "本站市场指南", "Гид по рынкам"),
    ),
    highlightsLabel: t(lang, L("Must try", "ของกินเด่น", "必吃", "Попробуйте")),
    vibeLabel: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Best for", "เหมาะกับ", "适合", "Подходит")),
    foodsLabel: t(lang, L("Styles", "สาย", "类型", "Стили")),
    tipsLabel: t(lang, L("Tip", "เคล็ดลับ", "提示", "Совет")),
    openDaysLabel: t(lang, L("Open", "เปิดวัน", "开放", "Дни")),
    hoursRangeLabel: t(lang, L("Hours", "เวลาโดยประมาณ", "时间", "Часы")),
    bestTimeLabel: t(lang, L("Golden hour", "เวลาทอง", "黄金时段", "Лучшее время")),
  };
}

export function getStreetFoodMoodPicks(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("Street food by mood", "street food ตามอารมณ์", "按心情选街头美食", "Стритфуд по настроению"),
    ),
    subtitle: t(
      lang,
      L("Quick picks when you do not want to read every card.", "เลือกเร็วเมื่อไม่อยากอ่านทุกการ์ด", "不想逐张看卡片时的快选。", "Быстрый выбор."),
    ),
    items: [
      {
        mood: t(lang, L("Busiest feast", "อยากกินแบบแน่นที่สุด", "最热闹大餐", "Самый плотный")),
        pick: t(lang, L("Thepprasit", "เทพประสิทธิ์", "Thepprasit", "Thepprasit")),
        spotId: "thepprasit" as const,
      },
      {
        mood: t(lang, L("Most local", "อยาก local จริง", "最本地", "Самый local")),
        pick: t(lang, L("Noen Plub Wan", "เนินพลับหวาน", "Noen Plub Wan", "Noen Plub Wan")),
        spotId: "noen-plub-wan" as const,
      },
      {
        mood: t(lang, L("Seafood grills", "อยากซีฟู้ด", "海鲜烧烤", "Морепродукты")),
        pick: t(lang, L("Lan Pho Naklua", "ลานโพธิ์นาเกลือ", "兰坡", "Lan Pho")),
        spotId: "lan-pho-naklua" as const,
      },
      {
        mood: t(lang, L("Morning local", "อยากอาหารเช้า local", "本地早餐", "Утро")),
        pick: t(lang, L("Wat Chai Mongkhon", "วัดชัยมงคล", "柴孟坤寺", "Wat Chai")),
        spotId: "wat-chai-mongkhon" as const,
      },
      {
        mood: t(lang, L("Late-night hungry", "อยากกินดึก", "深夜解馋", "Поздно ночью")),
        pick: t(lang, L("Soi Buakhao", "ซอยบัวขาว", "Buakhao 巷", "Buakhao")),
        spotId: "soi-buakhao" as const,
      },
    ],
  };
}

export function getStreetFoodForMap(lang: LanguageCode) {
  const keys = Object.keys(guideSpots) as (keyof typeof guideSpots)[];
  return keys.map((key) => {
    const item = resolveSpot(lang, key);
    const pin = streetFoodMapPinById[item.id];
    return { ...item, pin };
  });
}

export function getStreetFoodMapCopy(lang: LanguageCode) {
  return {
    title: t(lang, L("Street food on the map", "street food บนแผนที่", "街头美食地图", "На карте")),
    subtitle: t(
      lang,
      L("Six local picks — tap a pin for directions.", "6 จุด local — แตะหมุดเพื่อเส้นทาง", "六个本地推荐点。", "Шесть точек."),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open place", "เปิดสถานที่", "打开地点", "Открыть")),
    openAll: t(
      lang,
      L("Open all in Google Maps", "เปิดทั้งหมดใน Google Maps", "在 Google 地图打开全部", "Все в Maps"),
    ),
    openAllHref: streetFoodMapOpenHref,
    legendGuide: t(lang, L("Guide picks", "จุดในคู่มือ", "指南推荐", "Из гида")),
  };
}
