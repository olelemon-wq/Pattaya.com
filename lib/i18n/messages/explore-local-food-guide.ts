import type { LanguageCode } from "@/lib/i18n/languages";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import {
  localFoodGoogleMapsDirectionsHref,
  localFoodMapOpenHref,
  localFoodMapPinById,
  type LocalFoodMapPinId,
} from "@/lib/design/local-food-map";
import { L, t } from "@/lib/i18n/living-helpers";

export type LocalFoodGuideItem = {
  id: LocalFoodMapPinId;
  name: string;
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

export type LocalFoodGuideCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: LocalFoodGuideItem[];
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function venue(
  id: LocalFoodMapPinId,
  maps: string,
  fields: {
    name: ReturnType<typeof L>;
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
  const pin = localFoodMapPinById[id];
  return {
    id,
    mapsHref: mapsQuery(maps),
    directionsHref: localFoodGoogleMapsDirectionsHref(pin.lat, pin.lng),
    ...fields,
  };
}

const guideVenues = {
  taiThong: venue("tai-thong-seafood", "Tai Thong Seafood 509 Pattaya-Na Kluea Rd Pattaya", {
    name: L(
      "Tai Thong Seafood (Krua Phuen Ban)",
      "ครัวพื้นบ้าน ไต๋ธง ซีฟู้๊ด",
      "泰通海鲜（家常厨房）",
      "Tai Thong Seafood",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–21:00", "~10:00–21:00", "约10:00–21:00", "~10:00–21:00"),
    bestTimeOfDay: L("Lunch · early dinner", "มื้อเที่ยง · เย็นเร็ว", "午餐 · 傍晚", "Обед · ранний ужин"),
    highlights: [
      L("Squid with salted egg", "ปลาหมึกผัดไข่เค็ม", "咸蛋黄炒鱿鱼", "Кальмар с сольным яйцом"),
      L("Sour fish soup (tom som)", "ต้มส้มปลา", "酸鱼汤", "Tom som"),
      L("Curry crab", "ปูผัดผงกะหรี่", "咖喱炒蟹", "Краб в карри"),
      L("Grilled shellfish", "หอยจ๊อ", "烤贝类", "Моллюски на гриле"),
    ],
    vibe: L(
      "Fisherman's-kitchen feel — homestyle seafood locals actually eat, not sweet tourist plates.",
      "ฟีลครัวชาวประมง — อาหารทะเลแบบคนพื้นที่กิน ไม่หวานนำแบบร้านนักท่องเที่ยว",
      "渔家厨房感，本地人吃的家常海鲜，不是甜腻游客菜。",
      "Домашняя кухня рыбаков — без «туристической» сладости.",
    ),
    bestFor: L(
      "Real Naklua seafood without the resort markup.",
      "ซีฟู้ดนาเกลือแท้ ๆ ไม่แพงแบบรีสอร์ต",
      "那库拉地道海鲜，非度假村价。",
      "Настоящие морепродукты Naklua.",
    ),
    foods: [
      L("Homestyle Thai seafood", "อาหารทะเลพื้นบ้าน", "泰式家常海鲜", "Домашние морепродукты"),
    ],
    tips: L(
      "509/4 Pattaya–Na Kluea Rd — call ahead on weekends (+66 65 742 3490).",
      "509/4 ถ.พัทยา–นาเกลือ วันหยุดควรโทรจอง (+66 65 742 3490)",
      "芭提雅–那库拉路509/4，周末建议电话预订。",
      "509/4 Pattaya–Na Kluea Rd — в выходные лучше позвонить.",
    ),
  }),
  kruaNaiBaan: venue("krua-nai-baan", "Krua Nai Baan 124 Naklua 13/9 Alley Pattaya", {
    name: L("Krua Nai Baan", "ครัวนายบ้าน", "主人厨房", "Krua Nai Baan"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–21:00", "~10:00–21:00", "约10:00–21:00", "~10:00–21:00"),
    bestTimeOfDay: L("Lunch with family", "มื้อเที่ยงครอบครัว", "家庭午餐", "Семейный обед"),
    highlights: [
      L("Sour curry with mackerel roe", "แกงส้มไข่ปลาเรียวเซียว", "马鲛鱼籽酸咖喱", "Кислый карри с икрой"),
      L("Fried mackerel with fish sauce", "ปลาทูทอดน้ำปลา", "鱼露炸鲭鱼", "Жареная скумбрия"),
      L("Stir-fried liang leaves with egg", "ใบเหลียงผัดไข่", "炒凉叶蛋", "Лян с яйцом"),
    ],
    vibe: L(
      "Like eating at a relative's wooden house — clear Thai flavours, fresh ingredients.",
      "ฟีลกินข้าวบ้านญาติ — รสไทยชัด วัตถุดิบสด บรรยากาศบ้านไม้",
      "像在亲戚家木屋里吃饭，泰味鲜明、食材新鲜。",
      "Как у родственников — чистый тайский вкус, свежие продукты.",
    ),
    bestFor: L(
      "Sit-down homestyle lunch after Naklua market.",
      "ข้าวเที่ยงบ้าน ๆ หลังตลาดนาเกลือ",
      "那库拉早市后的家常午餐。",
      "Домашний обед после рынка Naklua.",
    ),
    tips: L(
      "Near the tiger shrine parking area on Naklua 13/9 — popular with locals (+66 99 149 4693).",
      "แถวที่จอดศาลเสือ ซ.นาเกลือ 13/9 คนพื้นที่ชอบมาก (+66 99 149 4693)",
      "那库拉13/9巷虎庙停车场附近，本地人常去。",
      "Рядом с парковкой у храма тигра, Naklua 13/9.",
    ),
  }),
  lanPho: venue("lan-pho-naklua", "Lan Pho Naklua Market Pattaya Thailand", {
    name: L("Lan Pho Naklua Market", "ตลาดลานโพธิ์นาเกลือ", "兰坡那库拉市场", "Lan Pho Naklua"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~06:00–18:00", "~06:00–18:00", "约6:00–18:00", "~6:00–18:00"),
    bestTimeOfDay: L("Morning · lunch", "เช้า · มื้อเที่ยง", "上午 · 午餐", "Утро · обед"),
    highlights: [
      L("Buy live seafood at market price", "ซื้อซีฟู้ดสดราคาตลาด", "按市价买活海鲜", "Живые морепродукты по рыночной цене"),
      L("Grill at row restaurants", "ให้ร้านแถวเผา", "交给排档烤制", "Жарят в соседних лотках"),
      L("Eat by the sea", "นั่งกินริมทะเล", "海边用餐", "У моря"),
    ],
    vibe: L(
      "The most “local” seafood ritual — shop the hall, then cook next door.",
      "experience local จริง — ซื้อในตลาด ให้ร้านข้าง ๆ ทำ นั่งกินริมทะเล",
      "最地道的海鲜体验：市场买、旁边店做、海边吃。",
      "Самый местный ритуал — купить в зале, приготовить рядом.",
    ),
    bestFor: L(
      "Fisherman Pattaya — not a tourist food court.",
      "พัทยาเวอร์ชันชาวประมง",
      "芭提雅渔民版海鲜，不是游客美食广场。",
      "Паттайя рыбаков, не фуд-корт.",
    ),
    tips: L(
      "Agree grill fee per kilo before they cook — see our full market card for more.",
      "ตกลงค่าเผา/กิโลก่อนทำ — ดูการ์ดตลาดฉบับเต็มในหน้าตลาด",
      "烹饪前确认每公斤烧烤费 — 详见市场指南页。",
      "Договоритесь о цене жарки за кг — подробности на странице рынков.",
    ),
    siteHref: marketPagePaths.hiddenLanPho,
  }),
  somtamTidZaeb: venue("somtam-tid-zaeb", "Somtam Tid Zaeb 33/31 Thep Prasit 6 Pattaya", {
    name: L("Somtam Tid Zaeb", "ส้มตำติดแซ่บ", "Somtam Tid Zaeb", "Somtam Tid Zaeb"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~11:00–late", "~11:00–ดึก", "约11:00–深夜", "~11:00–поздно"),
    bestTimeOfDay: L("Late night", "ดึก ๆ", "深夜", "Поздно ночью"),
    highlights: [
      L("Papaya salad with fermented fish", "ตำปูปลาร้า", "木瓜沙拉配鱼露", "Som tam pla ra"),
      L("Grilled pork neck", "คอหมูย่าง", "烤猪颈肉", "Свиная шея на гриле"),
      L("Duck larb", "ลาบเป็ด", "鸭larb", "Лаб из утки"),
      L("Spicy tom saep", "ต้มแซ่บ", "酸辣汤", "Tom saep"),
    ],
    vibe: L(
      "Bold Isaan flavours — how Thai workers and night crowds actually eat in Pattaya.",
      "อาหารอีสานจัดแบบคนไทยกินจริง — แรงงาน + สายกลางคืนของพัทยา",
      "重口伊桑菜，芭提雅打工族和夜生活人群的真实选择。",
      "Острый Isaan — как едят местные и ночная толпа.",
    ),
    bestFor: L(
      "Spicy groups after bars — busiest late.",
      "สายเผ็ดหลังบาร์ — ดึกคนเยอะมาก",
      "酒吧后吃辣，深夜最热闹。",
      "Острая компания после баров — ночью полно.",
    ),
    tips: L("Thep Prasit 6 — book or go early on weekends (+66 63 412 8450).", "ซ.เทพประสิทธิ์ 6 ส–อาควรไปเร็ว (+66 63 412 8450)", "Thep Prasit 6巷，周末宜早到。", "Thep Prasit 6 — в выходные рано."),
  }),
  jaroenlin: venue("jaroenlin", "Jaroenlin Pattaya 500/20 Bang Lamung Chon Buri", {
    name: L("Jaroenlin Pattaya", "ร้านเจริญลิ้น พัทยา", "芭提雅 Jaroenlin", "Jaroenlin Pattaya"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–22:00", "~10:00–22:00", "约10:00–22:00", "~10:00–22:00"),
    bestTimeOfDay: L("Lunch · dinner", "มื้อเที่ยง · เย็น", "午晚餐", "Обед · ужин"),
    highlights: [
      L("Beef fat fried rice", "ข้าวผัดมันเนื้อ", "牛油炒饭", "Жареный рис с говяжьим жиром"),
      L("Crispy pork", "หมูกรอบ", "脆皮猪", "Хрустящая свинина"),
      L("Thai salads & drinking snacks", "ยำ + กับแกล้ม", "凉拌与下酒菜", "Салаты и закуски"),
    ],
    vibe: L(
      "Upgraded homestyle Thai — still local, just polished enough for a night out.",
      "อาหารไทยบ้าน ๆ ทำดีขึ้น ยัง local แต่พาครอบครัว/เพื่อนไปได้",
      "升级的家常泰餐，仍接地气，适合聚餐。",
      "Домашняя тайская кухня «повыше классом», но всё ещё местная.",
    ),
    bestFor: L(
      "Modern Pattaya locals who want Thai comfort food done right.",
      "คนพัทยายุคใหม่ที่อยากกินไทยบ้าน ๆ แบบจริงจัง",
      "想要正经家常泰菜的本地年轻人。",
      "Местные, кому нужен «правильный» домашний тайский.",
    ),
    tips: L("Moo 5 Bang Lamung — reservations help on weekends (+66 81 015 5567).", "หมู่ 5 บางละมุง ส–อาควรจอง (+66 81 015 5567)", "Bang Lamung 5村，周末建议预订。", "Moo 5 — в выходные лучше бронь."),
  }),
  khruaBanPorTa: venue("khrua-ban-por-ta", "Khrua Ban Por Ta 23 Phatthaya Tai 8 Alley Pattaya", {
    name: L("Khrua Ban Por Ta", "ครัวบ้านพ่อตา", "Ban Por Ta 厨房", "Khrua Ban Por Ta"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–21:00", "~10:00–21:00", "约10:00–21:00", "~10:00–21:00"),
    bestTimeOfDay: L("Sunset dinner", "เย็นพระอาทิตย์ตก", "日落晚餐", "Ужин на закате"),
    highlights: [
      L("Fried barramundi with fish sauce", "ปลากะพงทอดน้ำปลา", "鱼露炸鲈鱼", "Жареный баррамунди"),
      L("Butter baked scallops", "หอยเชลล์อบเนย", "黄油烤扇贝", "Гребешки с маслом"),
      L("Tom yum seafood", "ต้มยำทะเล", "冬阴功海鲜", "Tom yum"),
      L("Chili crab", "ปูผัดพริก", "辣椒炒蟹", "Краб с чили"),
    ],
    vibe: L(
      "Old-school seaside restaurant locals have known for years — clear Thai seafood flavours.",
      "ร้านเก่าแก่ คนพื้นที่รู้จัก — ซีฟู้ดรสไทยชัด",
      "老店，本地人熟知，泰式海鲜味鲜明。",
      "Старая прибрежная кухня с чистым тайским вкусом.",
    ),
    bestFor: L(
      "Classic “Pattaya by the sea” dinner without the Walking Street circus.",
      "ฟีลทะเลพัทยาจริง ไม่ใช่ Walking Street",
      "真正的芭提雅海边晚餐，远离步行街喧嚣。",
      "Классический ужин у моря без цирка Walking Street.",
    ),
    tips: L("Pattaya Tai 8 alley — parking on the soi (+66 93 024 2684).", "ซ.พัทยาใต้ 8 จอดในซอยได้ (+66 93 024 2684)", "Pattaya Tai 8巷，巷内可停车。", "Soi Pattaya Tai 8 — парковка в переулке."),
  }),
} as const;

const categoriesDef = [
  {
    id: "seafood-naklua",
    title: L(
      "Homestyle seafood — Naklua",
      "สายอาหารทะเลพื้นบ้าน — โซนนาเกลือ",
      "家常海鲜 — 那库拉",
      "Домашние морепродукты — Naklua",
    ),
    subtitle: L(
      "Fisherman's kitchens where locals eat — not sweet tourist plates.",
      "ครัวชาวประมงที่คนพื้นที่กินจริง",
      "渔家厨房，本地人日常吃的海鲜。",
      "Кухни рыбаков для местных.",
    ),
    venueKeys: ["taiThong", "kruaNaiBaan"] as const,
  },
  {
    id: "market-seafood",
    title: L(
      "Market-to-table seafood",
      "ซีฟู้ดแบบตลาดทะเล",
      "市场现买现做海鲜",
      "Морепродукты с рынка",
    ),
    subtitle: L(
      "Buy fresh, grill next door, eat by the water.",
      "ซื้อสด ให้ร้านแถวเผา นั่งริมทะเล",
      "买活的、旁边烤、水边吃。",
      "Купить → приготовить рядом → у моря.",
    ),
    venueKeys: ["lanPho"] as const,
  },
  {
    id: "isaan",
    title: L(
      "Isaan & spicy local",
      "สายอาหารอีสาน local",
      "伊桑与重口本地菜",
      "Isaan и острое",
    ),
    subtitle: L(
      "Pattaya runs on Isaan flavours — workers, nightlife, and bold salads.",
      "พัทยาคือเมืองอีสาน+กลางคืน — ตำจัดแบบคนไทยกินจริง",
      "芭提雅离不开伊桑菜与夜生活辣味。",
      "Паттайя живёт на остром Isaan.",
    ),
    venueKeys: ["somtamTidZaeb"] as const,
  },
  {
    id: "homestyle",
    title: L(
      "Everyday homestyle",
      "อาหารบ้าน ๆ คนพื้นที่",
      "日常家常菜",
      "Домашняя кухня",
    ),
    subtitle: L(
      "Where residents eat on a normal weeknight.",
      "ร้านที่คนพัทยาทานประจำ",
      "芭提雅人平日吃饭的地方。",
      "Куда местные ходят в будни.",
    ),
    venueKeys: ["jaroenlin", "khruaBanPorTa"] as const,
  },
] as const;

function resolveVenue(lang: LanguageCode, key: keyof typeof guideVenues): LocalFoodGuideItem {
  const v = guideVenues[key];
  return {
    id: v.id,
    name: t(lang, v.name),
    openDays: t(lang, v.openDays),
    hoursRange: t(lang, v.hoursRange),
    bestTimeOfDay: t(lang, v.bestTimeOfDay),
    highlights: v.highlights.map((h) => t(lang, h)),
    vibe: t(lang, v.vibe),
    bestFor: t(lang, v.bestFor),
    foods: v.foods?.map((f) => t(lang, f)),
    tips: v.tips ? t(lang, v.tips) : undefined,
    mapsHref: v.mapsHref,
    directionsHref: v.directionsHref,
    siteHref: v.siteHref,
  };
}

export function getLocalFoodGuideCategories(lang: LanguageCode): LocalFoodGuideCategory[] {
  return categoriesDef.map((cat) => ({
    id: cat.id,
    title: t(lang, cat.title),
    subtitle: t(lang, cat.subtitle),
    items: cat.venueKeys.map((key) => resolveVenue(lang, key)),
  }));
}

export function getLocalFoodGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Pattaya local food guide",
        "คู่มืออาหารท้องถิ่นพัทยา",
        "芭提雅本地美食指南",
        "Гид по местной еде Паттайи",
      ),
    ),
    body: t(
      lang,
      L(
        "Pattaya is more mixed than it looks — fishing Naklua, Teochew heritage, Chonburi seafood, Isaan workers, and everyday Thai home cooking. To eat like locals, split by style below rather than chasing only Walking Street snacks.",
        "พัทยาเป็นเมืองรวมหลายวัฒนธรรม — ชาวประมงนาเกลือ จีนแต้จิ๋ว อาหารทะเลชลบุรี อาหารอีสานแรงงาน อาหารบ้าน ๆ ถ้าอยากกินแบบคนพัทยา แยกตามสไตล์ด้านล่างดีกว่าไล่แค่ Walking Street",
        "芭提雅比表面更混杂——那库拉渔业、潮汕渊源、春武里海鲜、伊桑务工者与家常泰餐。想吃得像本地人，按下方风格选，而非只盯步行街小吃。",
        "Паттайя микс культур — рыбаки Naklua, морепродукты, Isaan, домашняя кухня. Ешьте по стилям ниже.",
      ),
    ),
    sourceNote: t(
      lang,
      L(
        "Hours and tips are practical guides only — confirm on site or in Google Maps before you travel.",
        "เวลาและเคล็ดลับเป็นคำแนะนำ — ยืนยันหน้างานหรือใน Google Maps ก่อนเดินทาง",
        "开放时间为参考，出发前请在地图或现场确认。",
        "Часы ориентировочные — уточняйте на месте.",
      ),
    ),
    openInMaps: t(
      lang,
      L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →"),
    ),
    directionsLabel: t(lang, L("Directions →", "เส้นทาง →", "路线 →", "Маршрут →")),
    siteGuideLabel: t(
      lang,
      L("Full guide on Pattya →", "คู่มือฉบับเต็มใน Pattya →", "本站完整指南 →", "Полный гид на сайте →"),
    ),
    highlightsLabel: t(lang, L("Must try", "เมนูที่ควรลอง", "必试", "Попробуйте")),
    vibeLabel: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Best for", "เหมาะกับ", "适合", "Подходит")),
    foodsLabel: t(lang, L("Style", "สไตล์", "风格", "Стиль")),
    tipsLabel: t(lang, L("Tip", "เคล็ดลับ", "提示", "Совет")),
    openDaysLabel: t(lang, L("Open", "เปิดวัน", "开放", "Дни")),
    hoursRangeLabel: t(lang, L("Hours", "เวลาโดยประมาณ", "时间", "Часы")),
    bestTimeLabel: t(lang, L("Best time", "เหมาะสุด", "最佳时段", "Лучшее время")),
  };
}

export function getLocalFoodMenuGuide(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("What locals order", "อาหารท้องถิ่นพัทยาควรกินอะไร", "本地人常点什么", "Что заказывают местные"),
    ),
    subtitle: t(
      lang,
      L(
        "Menus you will see again and again across Naklua seafood, Isaan spots, and homestyle kitchens.",
        "เมนูที่เจอซ้ำ ๆ ในร้านทะเลนาเกลือ อีสาน และครัวบ้าน",
        "在那库拉海鲜、伊桑店与家常馆反复出现的菜。",
        "Блюда, которые встречаются везде.",
      ),
    ),
    groups: [
      {
        title: t(lang, L("Seafood", "ซีฟู้ด", "海鲜", "Морепродукты")),
        items: [
          t(lang, L("Steamed blue crab", "ปูม้านึ่ง", "蒸蓝蟹", "Краб на пару")),
          t(lang, L("Grilled squid with roe", "หมึกไข่ย่าง", "烤鱿鱼卵", "Кальмар с икрой")),
          t(lang, L("Grilled sweet clams", "หอยหวานเผา", "烤甜蛤", "Моллюски на гриле")),
          t(lang, L("Fried barramundi, fish sauce", "ปลากะพงทอดน้ำปลา", "鱼露炸鲈鱼", "Баррамунди")),
        ],
      },
      {
        title: t(lang, L("Spicy & Isaan", "สายแซ่บ", "辣与伊桑", "Острое & Isaan")),
        items: [
          t(lang, L("Seafood papaya salad", "ส้มตำทะเล", "海鲜青木瓜沙拉", "Som tam морепродукты")),
          t(lang, L("Spicy crab salad", "ยำปูม้า", "辣蟹沙拉", "Yam pu")),
          t(lang, L("Larb", "ลาบ", "larb", "Лаб")),
          t(lang, L("Tom saep", "ต้มแซ่บ", "酸辣汤", "Tom saep")),
        ],
      },
      {
        title: t(lang, L("Homestyle Thai", "อาหารบ้าน ๆ", "家常泰菜", "Домашняя тайская")),
        items: [
          t(lang, L("Sour curry", "แกงส้ม", "酸咖喱", "Кислый карри")),
          t(lang, L("Sour fish soup", "ต้มส้มปลา", "酸鱼汤", "Tom som")),
          t(lang, L("Stir-fried seafood with herbs", "ผัดฉ่าทะเล", "香草炒海鲜", "Пад cha")),
          t(lang, L("Liang leaves with egg", "ใบเหลียงผัดไข่", "炒凉叶蛋", "Лян с яйцом")),
        ],
      },
      {
        title: t(lang, L("Snacks & sweets", "ของกินเล่น", "小吃甜点", "Закуски")),
        items: [
          t(lang, L("Chonburi bamboo rice", "ข้าวหลามชลบุรี", "春武里竹筒饭", "Рис в бамбуке")),
          t(lang, L("Market grilled squid", "ปลาหมึกย่างตลาด", "市场烤鱿鱼", "Кальмар с рынка")),
          t(lang, L("Thai desserts", "ขนมไทย", "泰式甜点", "Десерты")),
        ],
      },
    ],
  };
}

export function getLocalFoodDayRoute(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("One-day local eating route", "เส้นทางกิน local 1 วัน", "一日本地吃喝路线", "Маршрут на один день"),
    ),
    subtitle: t(
      lang,
      L(
        "A simple loop that hits sea, market, and late-night Isaan — adjust times to your hotel area.",
        "วนกินครบทะเล ตลาด ดึกอีสาน — ปรับเวลาตามที่พัก",
        "涵盖海鲜、市场与深夜伊桑，可按住宿调整时间。",
        "Море, рынок и ночной Isaan — подстройте под отель.",
      ),
    ),
    stops: [
      {
        time: t(lang, L("Morning", "เช้า", "早晨", "Утро")),
        place: t(lang, L("Naklua morning market", "ตลาดนาเกลือ", "那库拉早市", "Утренний рынок Naklua")),
        href: marketPagePaths.oldNaklua,
      },
      {
        time: t(lang, L("Midday", "เที่ยง", "中午", "День")),
        place: t(lang, L("Tai Thong Seafood", "ครัวพื้นบ้าน ไต๋ธง ซีฟู้๊ด", "泰通海鲜", "Tai Thong Seafood")),
        href: "#venue-tai-thong-seafood",
      },
      {
        time: t(lang, L("Evening", "เย็น", "傍晚", "Вечер")),
        place: t(lang, L("Lan Pho Naklua", "ลานโพธิ์นาเกลือ", "兰坡那库拉", "Lan Pho Naklua")),
        href: "#venue-lan-pho-naklua",
      },
      {
        time: t(lang, L("Late night", "ดึก", "深夜", "Ночь")),
        place: t(lang, L("Somtam Tid Zaeb", "ส้มตำติดแซ่บ", "Somtam Tid Zaeb", "Somtam Tid Zaeb")),
        href: "#venue-somtam-tid-zaeb",
      },
    ],
  };
}

export function getLocalFoodForMap(lang: LanguageCode) {
  const keys = Object.keys(guideVenues) as (keyof typeof guideVenues)[];
  return keys.map((key) => {
    const item = resolveVenue(lang, key);
    const pin = localFoodMapPinById[item.id];
    return { ...item, pin };
  });
}

export function getLocalFoodMapCopy(lang: LanguageCode) {
  return {
    title: t(lang, L("Local food on the map", "ร้านอาหารท้องถิ่นบนแผนที่", "本地美食地图", "На карте")),
    subtitle: t(
      lang,
      L(
        "Six picks from the guide — tap a pin for directions.",
        "6 ร้านจากคู่มือ — แตะหมุดเพื่อเส้นทาง",
        "指南中六处 — 点击图钉导航。",
        "Шесть мест из гида — нажмите на метку.",
      ),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open place", "เปิดสถานที่", "打开地点", "Открыть")),
    openAll: t(
      lang,
      L("Open all in Google Maps", "เปิดทั้งหมดใน Google Maps", "在 Google 地图打开全部", "Все в Maps"),
    ),
    openAllHref: localFoodMapOpenHref,
    legendGuide: t(lang, L("Guide picks", "ร้านในคู่มือ", "指南推荐", "Из гида")),
  };
}
