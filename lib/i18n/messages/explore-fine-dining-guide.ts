import type { LanguageCode } from "@/lib/i18n/languages";
import {
  fineDiningGoogleMapsDirectionsHref,
  fineDiningMapOpenHref,
  fineDiningMapPinById,
  type FineDiningMapPinId,
} from "@/lib/design/fine-dining-map";
import { L, t } from "@/lib/i18n/living-helpers";

export type FineDiningGuideItem = {
  id: FineDiningMapPinId;
  imageId: FineDiningMapPinId;
  name: string;
  tagline?: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  highlights: string[];
  vibe: string;
  bestFor: string;
  mustTry?: string;
  tips?: string;
  mapsHref: string;
  directionsHref: string;
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function restaurant(
  id: FineDiningMapPinId,
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
    mustTry?: ReturnType<typeof L>;
    tips?: ReturnType<typeof L>;
  },
) {
  const pin = fineDiningMapPinById[id];
  return {
    id,
    imageId: id,
    mapsHref: mapsQuery(maps),
    directionsHref: fineDiningGoogleMapsDirectionsHref(pin.lat, pin.lng),
    ...fields,
  };
}

const guideRestaurants = {
  horizon: restaurant("horizon-rooftop", "Horizon Rooftop Restaurant Bar Hilton Pattaya", {
    name: L("Horizon Rooftop Restaurant & Bar", "Horizon Rooftop Restaurant and Bar", "Horizon 屋顶餐厅", "Horizon Rooftop"),
    tagline: L(
      "Iconic bay-view rooftop",
      "ดินเนอร์หรูวิวทะเล — โรแมนติกสุด",
      "海湾景观屋顶 — 极致浪漫",
      "Культовый rooftop с видом",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~17:00–late", "~17:00–ดึก", "约17:00–深夜", "~17:00–поздно"),
    bestTimeOfDay: L("17:30–19:00 (sunset)", "17:30–19:00 (sunset)", "17:30–19:00（日落）", "17:30–19:00"),
    highlights: [
      L("Level 34, Hilton Pattaya", "ชั้น 34 Hilton พัทยา", "希尔顿34层", "34 этаж Hilton"),
      L("Full Pattaya Bay views", "วิวอ่าวพัทยาเต็ม ๆ", "芭提雅湾全景", "Вид на залив"),
      L("Steak & seafood", "สเต็ก & ซีฟู้ด", "牛排与海鲜", "Стейк и морепродукты"),
      L("Cocktails & wine", "ค็อกเทล & ไวน์", "鸡尾酒与葡萄酒", "Коктейли и вино"),
    ],
    vibe: L(
      "Dress up, ride the elevator, and watch the bay turn gold — one of Pattaya's most iconic sunset tables.",
      "แต่งตัวขึ้นชั้น 34 วิวอ่าวเปลี่ยนสีทอง — rooftop iconic ของพัทยา",
      "盛装乘电梯，看海湾变金色——芭提雅最具标志性的日落餐桌之一。",
      "Один из самых знаковых закатов Паттайи.",
    ),
    bestFor: L(
      "Dates, anniversaries, and anyone who wants sunset plus night lights in one booking.",
      "เดต anniversary อยากได้ทั้ง sunset และไฟเมือง",
      "约会、纪念日，一次预订同时收获日落与夜景。",
      "Романтика и закат.",
    ),
    mustTry: L("Outdoor sunset table if available", "ขอ outdoor sunset table", "尽量订户外日落位", "Стол на закат"),
    tips: L(
      "Book 1–3 days ahead on weekends; ask for an outdoor sunset table when you reserve.",
      "จองล่วงหน้า 1–3 วัน ส–อา ขอโต๊ะ outdoor sunset",
      "周末提前1–3天订位，预订时申请户外日落桌。",
      "Бронь за 1–3 дня в выходные.",
    ),
  }),
  cafeDesAmis: restaurant("cafe-des-amis", "Cafe des Amis Fine Dining Pattaya Thap Phraya", {
    name: L("Cafe des Amis Fine Dining", "Cafe des Amis Fine Dining", "Cafe des Amis", "Cafe des Amis"),
    tagline: L(
      "Legendary Pattaya fine dining",
      "Fine dining คลาสสิกระดับตำนาน",
      "芭提雅传奇精致餐饮",
      "Классика fine dining",
    ),
    openDays: L("Tue–Sun (confirm)", "อ–อา (ยืนยันก่อนไป)", "周二至周日（请确认）", "Вт–Вс"),
    hoursRange: L("~18:00–22:00", "~18:00–22:00", "约18:00–22:00", "~18:00–22:00"),
    bestTimeOfDay: L("Evening", "เย็น", "傍晚", "Вечер"),
    highlights: [
      L("Tasting menus", "เทสต์เมนู", "品鉴菜单", "Дегустации"),
      L("Beef Wellington", "บีฟเวลลิงตัน", "惠灵顿牛排", "Beef Wellington"),
      L("Foie gras", "ฟัวกราส์", "鹅肝", "Фуа-гра"),
      L("Wine pairing", "ไวน์แพร์ริ่ง", "餐酒搭配", "Винное сопровождение"),
    ],
    vibe: L(
      "Classic European fine dining — quiet, intimate, and serious about special occasions.",
      "ยุโรปคลาสสิก เงียบ สุขุม intimate มาก",
      "经典欧式精致餐饮——安静、私密，适合郑重场合。",
      "Тихий европейский fine dining.",
    ),
    bestFor: L(
      "Anniversaries, proposals, and dinners where you want the full white-tablecloth experience.",
      "anniversary ขอแต่งงาน วันพิเศษจริงจัง",
      "周年纪念、求婚与需要完整正式用餐体验的场合。",
      "Годовщины и предложения.",
    ),
  }),
  casaPascal: restaurant("casa-pascal", "Casa Pascal Restaurant Pattaya Second Road", {
    name: L("Casa Pascal Restaurant", "Casa Pascal Restaurant", "Casa Pascal", "Casa Pascal"),
    tagline: L(
      "Old-money European elegance",
      "หรูแบบ old money ยุโรป",
      "欧式老钱优雅",
      "Quiet luxury",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~12:00–22:00", "~12:00–22:00", "约12:00–22:00", "~12:00–22:00"),
    bestTimeOfDay: L("Dinner", "มื้อเย็น", "晚餐", "Ужин"),
    highlights: [
      L("French–European cuisine", "อาหารฝรั่งเศส–ยุโรป", "法欧料理", "Франко-европейская кухня"),
      L("Seafood", "ซีฟู้ด", "海鲜", "Морепродукты"),
      L("Strong wine list", "ไวน์ลิสต์ดี", "精选酒单", "Винная карта"),
      L("Polished service", "เซอร์วิสเนี้ยบ", "细致服务", "Сервис"),
    ],
    vibe: L(
      "A long-running European institution in Pattaya — quiet luxury that expats have known for years.",
      "ร้านยุโรปเก่าแก่ คนต่างชาติอยู่พัทยานานรู้จัก — quiet luxury",
      "芭提雅老牌欧式餐厅，长期侨民熟知——低调奢华。",
      "Институция для знатоков.",
    ),
    bestFor: L(
      "Elegant European dinners without the rooftop wind — wine lovers especially.",
      "อยาก elegant แบบยุโรป ไม่ต้อง rooftop",
      "想要优雅欧式晚餐、不必吹屋顶风——尤其适合爱酒者。",
      "Европейская элегантность.",
    ),
  }),
  harlans: restaurant("harlans", "Harlan's Pattaya Welcome Town", {
    name: L("Harlan's Pattaya", "Harlan's Pattaya", "Harlan's Pattaya", "Harlan's Pattaya"),
    tagline: L(
      "Modern chef-driven dining",
      "สาย modern / chef-driven",
      "现代主厨驱动",
      "Chef-driven",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~17:00–23:00", "~17:00–23:00", "约17:00–23:00", "~17:00–23:00"),
    bestTimeOfDay: L("Dinner", "มื้อเย็น", "晚餐", "Ужин"),
    highlights: [
      L("Dry-aged steak", "สเต็ก dry aged", "干式熟成牛排", "Dry-aged стейк"),
      L("Creative plating", "จัดจานสร้างสรรค์", "创意摆盘", "Подача"),
      L("Tasting menus", "เทสต์เมนู", "品鉴菜单", "Дегустации"),
      L("Premium ingredients", "วัตถุดิบพรีเมียม", "优质食材", "Продукты"),
    ],
    vibe: L(
      "Foodie-forward fine dining — feels like Bangkok-level chef ambition moved to Pattaya.",
      "สาย foodie จริงจัง — ฟีล fine dining กรุงเทพย้ายมาพัทยา",
      "面向美食爱好者的精致餐饮——像曼谷级主厨野心搬到芭提雅。",
      "Для гурманов.",
    ),
    bestFor: L(
      "Steak lovers and guests who care about ingredients and plating more than the view.",
      "คนชอบสเต็ก สายวัตถุดิบและจานสวย",
      "重视食材与摆盘的牛排爱好者。",
      "Стейк и гастрономия.",
    ),
  }),
  theView: restaurant("the-view", "The VIEW Pattaya Restaurant M12", {
    name: L("The VIEW Pattaya Restaurant", "The VIEW Pattaya Restaurant", "The VIEW Pattaya", "The VIEW"),
    tagline: L(
      "Cinematic sea views",
      "วิวสวย + ถ่ายรูปสวยมาก",
      "电影感海景",
      "Cinematic views",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~11:00–23:00", "~11:00–23:00", "约11:00–23:00", "~11:00–23:00"),
    bestTimeOfDay: L("Sunset dinner", "sunset dinner", "日落晚餐", "Закат"),
    highlights: [
      L("Seafood", "ซีฟู้ด", "海鲜", "Морепродукты"),
      L("Cocktails", "ค็อกเทล", "鸡尾酒", "Коктейли"),
      L("Photo-friendly corners", "มุมถ่ายรูป", "适合拍照", "Фото-споты"),
      L("Relaxed luxury", "luxury แต่ชิล", "轻松奢华", "Relaxed luxury"),
    ],
    vibe: L(
      "Romantic and photogenic — luxury that still feels relaxed, especially at golden hour.",
      "romantic luxury but relaxed — sunset dinner ดีมาก",
      "浪漫上镜——奢华但轻松，黄金时刻尤佳。",
      "Романтика и фото.",
    ),
    bestFor: L(
      "Couples who want a beautiful table and social-ready photos without full formality.",
      "คู่รักอยากสวย ถ่ายรูปได้ ไม่ formal เกิน",
      "情侣想要漂亮餐桌与出片照片，不必过于正式。",
      "Пары и фото.",
    ),
  }),
  prego: restaurant("prego", "Prego Pattaya Pasta Lab Bar 240 Beach Road", {
    name: L("Prego Pattaya Pasta Lab & Bar", "Prego Pattaya Pasta Lab & Bar", "Prego", "Prego"),
    tagline: L(
      "Upscale Italian, still cozy",
      "Italian หรู ๆ แต่ยัง cozy",
      "高端意式仍温馨",
      "Cozy Italian",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~12:00–23:00", "~12:00–23:00", "约12:00–23:00", "~12:00–23:00"),
    bestTimeOfDay: L("Dinner date", "date night", "约会晚餐", "Ужин вдвоём"),
    highlights: [
      L("Fresh pasta", "พาสต้าทำสด", "鲜意面", "Свежая паста"),
      L("Wine bar", "ไวน์บาร์", "葡萄酒吧", "Вино"),
      L("Beach Road location", "Beach Road", "Beach Road", "Beach Road"),
    ],
    vibe: L(
      "Modern Italian warmth — dress up a little, but you will not feel like a black-tie gala.",
      "Italian modern อบอุ่น — หรูแต่ไม่ formal เกิน",
      "现代意式温暖——略作打扮即可，不必燕尾服级别。",
      "Италия без лишнего пафоса.",
    ),
    bestFor: L(
      "Date nights when you want quality pasta and wine without rooftop formality.",
      "date night อยากพาสต้าและไวน์ดี ไม่เอา rooftop formal",
      "约会之夜——优质意面与葡萄酒，不必屋顶正装。",
      "Итальянский date night.",
    ),
  }),
  sky32: restaurant("sky32", "The Sky32 Restaurant Pattaya", {
    name: L("The Sky32 Restaurant", "The Sky32 Restaurant", "Sky32", "Sky32"),
    tagline: L(
      "City lights rooftop",
      "Rooftop ฟีลเมืองกลางคืน",
      "城市夜景屋顶",
      "Городские огни",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~17:00–late", "~17:00–ดึก", "约17:00–深夜", "~17:00–поздно"),
    bestTimeOfDay: L("After dark", "หลังค่ำ", "入夜后", "После темноты"),
    highlights: [
      L("Pattaya skyline views", "วิวเมืองพัทยา", "芭提雅天际线", "Панорама города"),
      L("Cocktails", "ค็อกเทล", "鸡尾酒", "Коктейли"),
      L("Dinner & lounge", "ดินเนอร์ & นั่งชิล", "晚餐与酒廊", "Ужин и лаунж"),
    ],
    vibe: L(
      "See the whole city light up — best when you want skyline drama more than beach sunset.",
      "เห็นวิวเมืองพัทยาเต็ม ๆ — เหมาะกลางคืนมากกว่า sunset ริมทะเล",
      "俯瞰芭提雅灯火——适合要城市天际线而非海滩日落。",
      "Огни города.",
    ),
    bestFor: L(
      "Cocktail-first evenings and relaxed dinner dates after the beach.",
      "cocktail ก่อน ดินเนอร์ชิลหลังหาด",
      "鸡尾酒开场、海滩后的轻松晚餐约会。",
      "Коктейли и ночной город.",
    ),
  }),
} as const;

const guideOrder = [
  "horizon",
  "cafeDesAmis",
  "casaPascal",
  "harlans",
  "theView",
  "prego",
  "sky32",
] as const satisfies readonly (keyof typeof guideRestaurants)[];

function resolveRestaurant(lang: LanguageCode, key: keyof typeof guideRestaurants): FineDiningGuideItem {
  const r = guideRestaurants[key];
  return {
    id: r.id,
    imageId: r.imageId,
    name: t(lang, r.name),
    tagline: r.tagline ? t(lang, r.tagline) : undefined,
    openDays: t(lang, r.openDays),
    hoursRange: t(lang, r.hoursRange),
    bestTimeOfDay: t(lang, r.bestTimeOfDay),
    highlights: r.highlights.map((h) => t(lang, h)),
    vibe: t(lang, r.vibe),
    bestFor: t(lang, r.bestFor),
    mustTry: r.mustTry ? t(lang, r.mustTry) : undefined,
    tips: r.tips ? t(lang, r.tips) : undefined,
    mapsHref: r.mapsHref,
    directionsHref: r.directionsHref,
  };
}

export function getFineDiningGuideItems(lang: LanguageCode): FineDiningGuideItem[] {
  return guideOrder.map((key) => resolveRestaurant(lang, key));
}

export function getFineDiningGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("Pattaya fine dining guide", "คู่มือ fine dining พัทยา", "芭提雅精致餐饮指南", "Гид fine dining"),
    ),
    body: t(
      lang,
      L(
        "Pattaya's upscale scene has grown fast — sea-view rooftops, chef's tables, wine bars, and modern Thai tasting menus, not just hotel restaurants. Pick by mood below.",
        "ร้าน fine dining / rooftop / chef's table โตขึ้นมาก — มีทั้งวิวทะเล โรแมนติก เทสต์เมนู ไวน์บาร์ ไม่ใช่แค่ห้างโรงแรม แยกตามสไตล์ด้านล่าง",
        "芭提雅高端餐饮发展迅速——海景屋顶、主厨餐桌、葡萄酒吧与现代泰式品鉴，不只是酒店餐厅。按下方氛围选择。",
        "Fine dining, rooftop и винные бары — выбирайте по настроению.",
      ),
    ),
    sourceNote: t(
      lang,
      L(
        "Hours and tips are guides only — confirm with the restaurant or Google Maps before you go.",
        "เวลาและเคล็ดลับเป็นคำแนะนำ — ยืนยันกับร้านหรือ Google Maps ก่อนไป",
        "时间为参考，出发前请与餐厅或地图确认。",
        "Уточняйте у ресторана.",
      ),
    ),
    openInMaps: t(
      lang,
      L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps"),
    ),
    directionsLabel: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    highlightsLabel: t(lang, L("Highlights", "จุดเด่น", "亮点", "Особенности")),
    vibeLabel: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Best for", "เหมาะกับ", "适合", "Подходит")),
    mustTryLabel: t(lang, L("Ask for", "ควรขอ", "建议", "Спросите")),
    tipsLabel: t(lang, L("Tip", "เคล็ดลับ", "提示", "Совет")),
    openDaysLabel: t(lang, L("Open", "เปิดวัน", "开放", "Дни")),
    hoursRangeLabel: t(lang, L("Hours", "เวลาโดยประมาณ", "时间", "Часы")),
    bestTimeLabel: t(lang, L("Best time", "เวลาที่ดีที่สุด", "最佳时段", "Лучшее время")),
  };
}

export function getFineDiningMoodPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("Match your mood", "เลือกตามอารมณ์", "按心情选择", "По настроению")),
    subtitle: t(
      lang,
      L("Quick picks from the guide — tap to jump to the card.", "สรุปจากคู่มือ — แตะเพื่อไปการ์ด", "指南快选——点击查看卡片。", "Быстрый выбор."),
    ),
    groups: [
      {
        title: t(lang, L("Date / anniversary", "เดต / anniversary", "约会/周年纪念", "Свидание")),
        pick: t(lang, L("Cafe des Amis", "Cafe des Amis", "Cafe des Amis", "Cafe des Amis")),
        restaurantId: "cafe-des-amis" as const,
      },
      {
        title: t(lang, L("Best sea sunset", "วิวทะเลสวยที่สุด", "最美海上日落", "Закат у моря")),
        pick: t(lang, L("Horizon Rooftop", "Horizon Rooftop", "Horizon", "Horizon")),
        restaurantId: "horizon-rooftop" as const,
      },
      {
        title: t(lang, L("Serious foodie", "สาย foodie จริงจัง", "认真美食家", "Гурман")),
        pick: t(lang, L("Harlan's Pattaya", "Harlan's Pattaya", "Harlan's", "Harlan's")),
        restaurantId: "harlans" as const,
      },
      {
        title: t(lang, L("European elegance", "elegant แบบยุโรป", "欧式优雅", "Европейская элегантность")),
        pick: t(lang, L("Casa Pascal", "Casa Pascal", "Casa Pascal", "Casa Pascal")),
        restaurantId: "casa-pascal" as const,
      },
      {
        title: t(lang, L("Photos & romance", "ถ่ายรูปสวย", "拍照与浪漫", "Фото")),
        pick: t(lang, L("The VIEW Pattaya", "The VIEW", "The VIEW", "The VIEW")),
        restaurantId: "the-view" as const,
      },
      {
        title: t(lang, L("Chill but still luxe", "ชิลแต่ยังหรู", "轻松仍奢华", "Chill luxury")),
        pick: t(lang, L("Prego Pasta Lab & Bar", "Prego", "Prego", "Prego")),
        restaurantId: "prego" as const,
      },
    ],
  };
}

export function getFineDiningFirstVisitPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("First special dinner?", "ดินเนอร์พิเศษครั้งแรก?", "第一次正式晚餐？", "Первый раз?")),
    subtitle: t(
      lang,
      L("If you only book one or two tables on this trip.", "ถ้าจองได้แค่ 1–2 ร้าน", "此行只能订一两处时。", "Если мало времени."),
    ),
    items: [
      {
        title: t(lang, L("Sunset + bay view", "sunset + วิวอ่าว", "日落+海湾", "Закат")),
        body: t(
          lang,
          L(
            "Horizon Rooftop — arrive 17:30–19:00 for golden hour and night lights.",
            "Horizon — มา 17:30–19:00 ได้ทั้ง sunset และไฟกลางคืน",
            "Horizon——17:30–19:00 黄金时刻与夜景。",
            "Horizon на закате.",
          ),
        ),
        restaurantId: "horizon-rooftop" as const,
      },
      {
        title: t(lang, L("Classic fine dining", "fine dining คลาสสิก", "经典精致餐", "Классика")),
        body: t(
          lang,
          L(
            "Cafe des Amis — tasting menus, wine pairing, and a truly formal mood.",
            "Cafe des Amis — เทสต์เมนู ไวน์แพร์ริ่ง บรรยากาศจริงจัง",
            "Cafe des Amis——品鉴菜单、餐酒搭配、正式氛围。",
            "Cafe des Amis для особого случая.",
          ),
        ),
        restaurantId: "cafe-des-amis" as const,
      },
    ],
  };
}

export function getFineDiningTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Booking tips", "เคล็ดลับจองร้าน", "预订贴士", "Советы по брони")),
    subtitle: t(
      lang,
      L(
        "Practical notes for Pattaya fine dining — nothing sponsored on this page.",
        "ทริคจองร้าน fine dining พัทยา — หน้านี้ไม่มีโฆษณา",
        "芭提雅精致餐饮预订实用建议——本页无商业推广。",
        "Без рекламы.",
      ),
    ),
    items: [
      {
        id: "booking" as const,
        title: t(lang, L("Reserve early", "จองล่วงหน้า", "提前预订", "Бронь")),
        paragraphs: [
          t(
            lang,
            L(
              "Friday–Saturday sunset slots fill fast — rooftop venues especially. Book 1–3 days ahead when you can.",
              "ศ–อา sunset เต็มไวมาก โดยเฉพาะ rooftop ควรจอง 1–3 วันล่วงหน้า",
              "周五至周六日落位很快订满，屋顶餐厅尤甚；尽量提前1–3天。",
              "Пт–Сб закат — бронируйте заранее.",
            ),
          ),
          t(
            lang,
            L(
              "Ask for an “outdoor sunset table” when you want the best view — not every seat faces west.",
              "อยากวิวสวยสุด ขอ outdoor sunset table — ไม่ใช่ทุกโต๊ะหันตะวันตก",
              "想要最佳景观请申请户外日落桌——并非每桌朝西。",
              "Просите стол на закат.",
            ),
          ),
        ],
      },
      {
        id: "dress" as const,
        title: t(lang, L("Dress code", "แต่งตัว", "着装", "Дресс-код")),
        paragraphs: [
          t(
            lang,
            L(
              "Smart casual is enough at most places — collared shirts, neat shoes; skip tank tops and flip-flops at rooftops.",
              "สมาร์ทแคชชวลพอ — เสื้อมีคอ รองเท้าปิด หลีกเลี่ยงเสื้อกล้าม แตะที่ rooftop",
              "多数场所 smart casual 即可——有领上衣、包脚鞋；屋顶避免背心和人字拖。",
              "Smart casual; без шлёпанцев на rooftop.",
            ),
          ),
        ],
      },
      {
        id: "weather" as const,
        title: t(lang, L("Rainy season", "ช่วงฝน", "雨季", "Дождь")),
        paragraphs: [
          t(
            lang,
            L(
              "Have an indoor backup plan — some terraces close seats in heavy rain even with a reservation.",
              "ช่วงฝนควรมี plan B indoor — บางร้านปิดระเบียนเมื่อฝนตกแม้จองแล้ว",
              "雨季备好室内方案——大雨时部分露台仍会关闭户外位。",
              "План B внутри при дожде.",
            ),
          ),
        ],
      },
      {
        id: "occasions" as const,
        title: t(lang, L("Special nights", "คืนพิเศษ", "特别之夜", "Особые вечера")),
        paragraphs: [
          t(
            lang,
            L(
              "Mention birthdays or proposals when booking — many venues arrange cake, flowers, or a quiet corner if you ask early.",
              "บอกวันเกิด/ขอแต่งงานตอนจอง — หลายร้านจัดเค้ก ดอกไม้ โต๊ะมุม",
              "预订时说明生日或求婚——许多餐厅可提前安排蛋糕、鲜花或安静角落。",
              "Сообщите о празднике при брони.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getFineDiningForMap(lang: LanguageCode) {
  return getFineDiningGuideItems(lang).map((item) => ({
    ...item,
    pin: fineDiningMapPinById[item.id],
  }));
}

export function getFineDiningMapCopy(lang: LanguageCode) {
  return {
    title: t(lang, L("Fine dining on the map", "ร้าน fine dining บนแผนที่", "精致餐饮地图", "На карте")),
    subtitle: t(
      lang,
      L("Seven picks from the guide — tap a pin for directions.", "7 ร้านจากคู่มือ — แตะหมุดเพื่อเส้นทาง", "指南七家——点击图钉导航。", "7 ресторанов."),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open place", "เปิดสถานที่", "打开地点", "Открыть")),
    openAll: t(
      lang,
      L("Open all in Google Maps", "เปิดทั้งหมดใน Google Maps", "在 Google 地图打开全部", "Все в Maps"),
    ),
    openAllHref: fineDiningMapOpenHref,
    legendGuide: t(lang, L("Guide picks", "ร้านในคู่มือ", "指南推荐", "Из гида")),
  };
}
