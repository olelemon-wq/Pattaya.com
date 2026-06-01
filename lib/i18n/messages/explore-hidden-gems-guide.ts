import type { LanguageCode } from "@/lib/i18n/languages";
import {
  hiddenGemGoogleMapsDirectionsHref,
  hiddenGemPinById,
  hiddenGemsMapOpenHref,
  type HiddenGemPinId,
} from "@/lib/design/hidden-gems-map";
import { getHiddenGemGuideImage } from "@/lib/design/hidden-gems-guide-images";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { L, t } from "@/lib/i18n/living-helpers";

export type HiddenGemGuideItem = {
  id: HiddenGemPinId;
  category: string;
  name: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  highlights: string[];
  vibe: string;
  bestFor: string;
  tips?: string;
  guideHref?: string;
  guideLabel?: string;
  mapsHref: string;
  directionsHref: string;
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function gem(
  id: HiddenGemPinId,
  maps: string,
  fields: {
    category: ReturnType<typeof L>;
    name: ReturnType<typeof L>;
    openDays: ReturnType<typeof L>;
    hoursRange: ReturnType<typeof L>;
    bestTimeOfDay: ReturnType<typeof L>;
    highlights: ReturnType<typeof L>[];
    vibe: ReturnType<typeof L>;
    bestFor: ReturnType<typeof L>;
    tips?: ReturnType<typeof L>;
    guideHref?: string;
    guideLabel?: ReturnType<typeof L>;
  },
) {
  const pin = hiddenGemPinById[id];
  return {
    id,
    mapsHref: mapsQuery(maps),
    directionsHref: hiddenGemGoogleMapsDirectionsHref(pin.lat, pin.lng),
    ...fields,
  };
}

const guideGems = {
  "white-house-beach-cafe": gem("white-house-beach-cafe", "White House Beach Cafe Pattaya Thailand", {
    category: L("Photo & aesthetic", "สายถ่ายรูป / aesthetic", "摄影与氛围", "Фото и эстетика"),
    name: L("White House Beach Café", "White House Beach Café", "White House Beach Café", "White House Beach Café"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Café hours vary", "เวลาร้านตามร้าน", "咖啡厅时间各异", "Часы по заведению"),
    bestTimeOfDay: L("Late afternoon · golden light", "บ่ายแก่ · แสงสวย", "傍晚 · 光线好", "Вечер · золотой час"),
    highlights: [
      L("Minimal beach mood", "ฟีล minimal ริมทะเล", "极简海滩氛围", "Минимализм у моря"),
      L("Korean-style corners", "มุมสไตล์เกาหลี", "韩式角落", "Корейский вайб"),
      L("Many photo spots", "มุมถ่ายรูปเยอะ", "拍照点多", "Много ракурсов"),
      L("Calmer than city cafés", "คนไม่วุ่นเท่าคาเฟ่ดังในเมือง", "比城里网红店安静", "Спокойнее городских кафе"),
    ],
    vibe: L(
      "Minimal beach café energy — pretty light at dusk without the chaos of central Pattaya coffee queues.",
      "คาเฟ่ริมทะเลมินิมอล — แสงเย็นสวย ไม่วุ่นเหมือนคิวคาเฟ่กลางเมือง",
      "极简海滨咖啡——傍晚光线好，没有市中心网红咖啡的拥挤。",
      "Минималистичное кафе у моря — красивый свет вечером.",
    ),
    bestFor: L(
      "Aesthetic photos, slow dates, and anyone who wants café time with sea air.",
      "ถ่ายรูปสวย เดทชิล อยากนั่งกาแฟมีลมทะเล",
      "氛围照、悠闲约会、想吹海风喝咖啡的人。",
      "Эстетичные фото и спокойные свидания.",
    ),
    guideHref: "/explore/cafes",
    guideLabel: L("Pattaya café guide →", "คู่มือคาเฟ่พัทยา →", "芭提雅咖啡馆指南 →", "Гид по кафе →"),
  }),
  "cave-beach-club-morning": gem("cave-beach-club-morning", "Cave Beach Club Na Jomtien Pattaya Thailand", {
    category: L("Photo & aesthetic", "สายถ่ายรูป / aesthetic", "摄影与氛围", "Фото и эстетика"),
    name: L("Cave Beach Club", "Cave Beach Club", "Cave Beach Club", "Cave Beach Club"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Club · restaurant hours vary", "คลับ · ร้านอาหารตามร้าน", "俱乐部 · 餐厅时间各异", "По заведению"),
    bestTimeOfDay: L("Before 10:00", "ก่อน 10:00 น.", "10点前", "До 10:00"),
    highlights: [
      L("Famous — but empty early", "ดัง แต่เช้าว่าง", "有名——但早晨空", "Известно — утром пусто"),
      L("Calm sea light", "แสงทะเลนุ่ม", "柔和海光", "Мягкий свет"),
      L("Beach-club setting", "บรรยากาศ beach club", "海滩俱乐部", "Beach club"),
      L("Good for photos", "ถ่ายรูปได้สวย", "适合拍照", "Для фото"),
    ],
    vibe: L(
      "Everyone knows the name — far fewer people go before 10:00, when it feels quiet and wide open.",
      "หลายคนรู้จัก แต่ก่อน 10 โมงเงียบและโล่งมาก",
      "很多人知道名字——10点前人少、开阔。",
      "Все знают название — до 10:00 тихо и просторно.",
    ),
    bestFor: L(
      "Early risers who want the famous spot without the afternoon crowd.",
      "คนตื่นเช้าที่อยากมาที่ดังโดยไม่เจอฝูงบ่าย",
      "早起者、想避开下午人潮的打卡者。",
      "Ранний визит без толпы.",
    ),
    tips: L(
      "Arrive before 10:00 — after that it fills quickly on weekends.",
      "มาก่อน 10:00 — หลังนั้นวันหยุดแน่นเร็ว",
      "10点前到——周末之后很快会满。",
      "Приезжайте до 10:00.",
    ),
  }),
  "bang-saray-beach": gem("bang-saray-beach", "Bang Saray Beach Chonburi Thailand", {
    category: L("Hidden nature", "ธรรมชาติที่มองข้าม", "被忽视的自然", "Природа"),
    name: L("Bang Saray Beach", "หาดบางเสร่", "Bang Saray 海滩", "Bang Saray"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Open shoreline", "ชายหาดเปิด", "海滩开放", "Открытый берег"),
    bestTimeOfDay: L("Evening", "ช่วงเย็น", "傍晚", "Вечер"),
    highlights: [
      L("Very local", "local มาก", "非常本地", "Очень местно"),
      L("Quieter than central Pattaya", "เงียบกว่าพัทยากลาง", "比芭提雅中心安静", "Тише центра"),
      L("Slow life", "slow life", "慢生活", "Slow life"),
      L("Good seafood nearby", "อาหารทะเลแถวนี้ดี", "附近海鲜好", "Хорошие морепродукты рядом"),
    ],
    vibe: L(
      "Sea for people who want to step out of «tour-bus Pattaya» — village pace, fewer neon signs, better evenings.",
      "ทะเลสำหรับคนอยากหนีฟีลพัทยารถทัวร์ — จังหวะหมู่บ้าน นีออนน้อย เย็นดี",
      "想逃离「旅游大巴芭提雅」的人的海——村落节奏、霓虹少、傍晚更好。",
      "Море для тех, кто устал от туристической Паттайи.",
    ),
    bestFor: L(
      "Half-day escapes south, sunset walks, and seafood dinners after the beach.",
      "หนีครึ่งวันไปทางใต้ เดินชมพระอาทิตย์ตก แล้วกินซีฟู้ดเย็น",
      "南下半日逃离、日落漫步、海滩后海鲜晚餐。",
      "Полдня на юг, закат и морепродукты.",
    ),
    guideHref: "/explore/beaches/jomtien",
    guideLabel: L("South coast beaches →", "หาดฝั่งใต้ →", "南岸海滩 →", "Пляжи юга →"),
  }),
  "khao-chi-chan-golden-hour": gem(
    "khao-chi-chan-golden-hour",
    "Khao Chi Chan Buddha Laser Mountain Chonburi Thailand",
    {
      category: L("Hidden nature", "ธรรมชาติที่มองข้าม", "被忽视的自然", "Природа"),
      name: L("Khao Chi Chan viewpoint", "จุดชมวิวเขาชีจรรย์", "Khao Chi Chan 观景点", "Khao Chi Chan"),
      openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
      hoursRange: L("Daylight best", "กลางวันถึงเย็น", "白天至傍晚", "Днём–вечером"),
      bestTimeOfDay: L("Golden hour · sunset", "golden hour · พระอาทิตย์ตก", "黄金时刻 · 日落", "Золотой час"),
      highlights: [
        L("Laser Buddha cliff", "พระใหญ่เขาชีจรรย์", "激光佛崖", "Скала с Буддой"),
        L("Most snap and leave", "หลายคนแวะถ่ายแล้วกลับ", "多数人拍完就走", "Многие только фото и уезжают"),
        L("Evening light is strong", "แสงเย็นสวยมาก", "傍晚光线很美", "Вечерний свет силён"),
        L("Easy day trip from Pattaya", "ทริปจากพัทยาไม่ไกล", "芭提雅一日可达", "Легко из Паттайи"),
      ],
      vibe: L(
        "A quick photo stop for tour buses — stay for golden hour and the hill feels like a different visit.",
        "รถทัวร์แวะถ่ายแล้วไป — ถ้าอยู่ถึงเย็น บรรยากาศต่างออกไปมาก",
        "旅游大巴拍张照就走——若待到黄金时刻，感受完全不同。",
        "Автобусы мелькают — закат стоит подождать.",
      ),
      bestFor: L(
        "Landscape photos, quiet drives, and pairing with Bang Saray the same afternoon.",
        "ถ่ายทิวทัศน์ ขับรถชิล จับคู่บางเสร่บ่ายเดียวกัน",
        "风景摄影、悠闲自驾、同日下午搭配 Bang Saray。",
        "Пейзажи и связка с Bang Saray.",
      ),
    },
  ),
  "je-tum-seafood-bang-saray": gem("je-tum-seafood-bang-saray", "Je Tum Seafood Bang Saray Thailand", {
    category: L("Hidden food", "อาหาร local จริง", "地道美食", "Еда"),
    name: L("Je Tum Seafood (Bang Saray)", "เจ๊ตุ้ม ซีฟู้ด บางเสร่", "Je Tum Seafood（Bang Saray）", "Je Tum Seafood"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Lunch · dinner", "มื้อกลางวัน · เย็น", "午餐 · 晚餐", "Обед · ужин"),
    bestTimeOfDay: L("Early dinner", "เย็นเร็ว", "早晚餐", "Ранний ужин"),
    highlights: [
      L("Crab", "ปู", "螃蟹", "Краб"),
      L("Squid", "หมึก", "鱿鱼", "Кальмар"),
      L("Mantis shrimp", "กั้ง", "皮皮虾", "Креветки"),
      L("Bold seafood dipping sauce", "น้ำจิ้มซีฟู้ดจัด", "海鲜蘸料够味", "Острый соус"),
    ],
    vibe: L(
      "Unpretentious local seafood — no staged presentation, just what Bang Saray families order.",
      "ซีฟู้ด local ไม่พยายามหรู — แบบที่ครอบครัวบางเสร่สั่งจริง",
      "朴实本地海鲜——没有摆盘表演，是班萨拉伊家庭会点的菜。",
      "Местный морской ресторан без понтов.",
    ),
    bestFor: L(
      "Groups who want real seafood south of Pattaya after a Bang Saray beach afternoon.",
      "กลุ่มเพื่อนหลังเล่นหาดบางเสร่ อยากกินทะเลสดจริงๆ",
      "班萨拉伊海滩下午后、想在芭提雅以南吃真海鲜的聚餐。",
      "Ужин после пляжа Bang Saray.",
    ),
    guideHref: marketPagePaths.streetFoodPage,
    guideLabel: L("Street food guide →", "คู่มืออาหารข้างทาง →", "街头美食指南 →", "Уличная еда →"),
  }),
  "pa-tid-kitchen-naklua": gem("pa-tid-kitchen-naklua", "Pa Tid Kitchen Naklua Pattaya Thailand", {
    category: L("Hidden food", "อาหาร local จริง", "地道美食", "Еда"),
    name: L("Pa Tid Kitchen (Naklua)", "ครัวป้าติ๊ด นาเกลือ", "Pa Tid Kitchen（那库鲁阿）", "Pa Tid Kitchen"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Lunch · dinner", "มื้อกลางวัน · เย็น", "午餐 · 晚餐", "Обед · ужин"),
    bestTimeOfDay: L("Lunch · early dinner", "มื้อเที่ยง · เย็นเร็ว", "午餐 · 早晚餐", "Обед · ранний ужин"),
    highlights: [
      L("Locals eat here", "คนพื้นที่กินจริง", "本地人常来", "Едят местные"),
      L("Honest homestyle plates", "อาหารจานโฮมเมดจริงใจ", "实在家常菜", "Домашняя еда"),
      L("No luxury styling", "ไม่จัดจานหรู", "无奢华摆盘", "Без ресторанного пафоса"),
      L("Naklua neighbourhood", "ย่านนาเกลือ", "那库鲁阿社区", "Район Naklua"),
    ],
    vibe: L(
      "Where Naklua residents go when they want Thai comfort food without the tourist menu markup.",
      "ร้านที่คนนาเกลือไปเมื่ออยากกินจานไทยๆ ไม่โดนค่าเมนู tourist",
      "那库鲁阿人想吃泰国家常菜、不想付游客价时会来的店。",
      "Тайская домашняя еда для местных.",
    ),
    bestFor: L(
      "After a Naklua market morning, or when you want proof that Pattaya still has neighbourhood kitchens.",
      "หลังเดินตลาดนาเกลือเช้า หรืออยากเห็นว่าพัทยายังมีครัวชุมชน",
      "那库鲁阿早市之后，或想证明芭提雅仍有社区小馆的人。",
      "После рынка Naklua.",
    ),
    guideHref: marketPagePaths.oldNaklua,
    guideLabel: L("Naklua market guide →", "คู่มือตลาดนาเกลือ →", "那库拉市场指南 →", "Рынок Naklua →"),
  }),
  "dicey-reillys-bars": gem("dicey-reillys-bars", "Dicey Reilly's Bar Pattaya Thailand", {
    category: L("Hidden nightlife", "ไนท์ไลฟ์ผู้ใหญ่", "隐秘夜生活", "Ночная жизнь"),
    name: L("Dicey Reilly's & quiet alley bars", "Dicey Reilly's & บาร์ซอยเงียบ", "Dicey Reilly's 与安静巷吧", "Dicey Reilly's"),
    openDays: L("Evenings", "ช่วงเย็น", "晚间", "Вечера"),
    hoursRange: L("~18:00–late", "~18:00–ดึก", "约18点–深夜", "~18:00–поздно"),
    bestTimeOfDay: L("After 20:00", "หลัง 20:00", "20点后", "После 20:00"),
    highlights: [
      L("Jazz & live music", "แจ๊ส & ดนตรีสด", "爵士与现场音乐", "Джаз и live"),
      L("Cocktails", "ค็อกเทล", "鸡尾酒", "Коктейли"),
      L("Quiet pubs", "ผับเงียบ", "安静酒吧", "Тихие пабы"),
      L("Beyond Walking Street volume", "ไม่ดังเท่า Walking Street", "音量不如步行街", "Тише Walking Street"),
    ],
    vibe: L(
      "Pattaya is not only loud beer bars — side streets hide jazz rooms, cocktail bars, and pubs where you can actually talk.",
      "พัทยาไม่ได้มีแต่บาร์เสียงดัง — ซอยซ่อนแจ๊ส ค็อกเทล ผับที่คุยกันได้",
      "芭提雅不只有吵啤酒吧——巷子里有爵士、鸡尾酒、能聊天的pub。",
      "Не только шумные бары — джаз и коктейли в переулках.",
    ),
    bestFor: L(
      "Adults who want a drink without club chaos — start here, then wander nearby sois.",
      "ผู้ใหญ่ที่อยากดื่มโดยไม่วุ่นแบบคลับ — เริ่มที่นี่แล้วเดินซอยใกล้ๆ",
      "想喝酒但不想俱乐部混乱的成年人——从这里开始再逛附近巷弄。",
      "Спокойный вечер без клубов.",
    ),
  }),
  "sky-mountain-pattaya": gem("sky-mountain-pattaya", "Sky Mountain Pattaya viewpoint Thailand", {
    category: L("Sunset", "จุด sunset", "日落", "Закат"),
    name: L("Sky Mountain Pattaya", "Sky Mountain Pattaya", "Sky Mountain Pattaya", "Sky Mountain"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Viewpoint · café hours vary", "จุดชมวิว · คาเฟ่ตามร้าน", "观景点 · 咖啡时间各异", "Смотровая"),
    bestTimeOfDay: L("Sunset", "พระอาทิตย์ตก", "日落", "Закат"),
    highlights: [
      L("Wide bay views", "วิวอ่าวกว้าง", "海湾全景", "Вид на залив"),
      L("Under-discussed online", "คนไม่ค่อยพูดถึงเท่าที่ควร", "网上讨论不多", "Мало упоминают"),
      L("Photo-friendly deck", "มุมถ่ายรูปดี", "适合拍照的平台", "Для фото"),
      L("Pair with Pratumnak hills", "จับคู่เขาพระตำหนักได้", "可搭配 Pratumnak", "Рядом с Pratumnak"),
    ],
    vibe: L(
      "A viewpoint that surprises first-timers — why more people do not build sunset plans around it is a mystery.",
      "จุดชมวิวที่คนมาครั้งแรกมักทึ่ง — ทำไมไม่ค่อยมีใครวางแผนพระอาทิตย์ตกที่นี่",
      "让初次来访者惊讶的观景点——奇怪的是很少人把日落行程安排在这里。",
      "Смотровая, которая приятно удивляет.",
    ),
    bestFor: L(
      "Sunset chasers tired of the same rooftop bar photos on Beach Road.",
      "สายพระอาทิตย์ตกที่เบื่อรูป rooftop เดิมๆ ริม Beach Road",
      "厌倦海滩路同款屋顶日落照的追光者。",
      "Закат без шаблонных rooftop.",
    ),
    guideHref: "/explore/beaches/pratumnak",
    guideLabel: L("Pratumnak guide →", "คู่มือพระตำหนัก →", "Pratumnak 指南 →", "Pratumnak →"),
  }),
  "mabprachan-lake-cafes": gem("mabprachan-lake-cafes", "Mabprachan Lake Pattaya Thailand", {
    category: L("Slow life", "ชีวิตช้า", "慢生活", "Slow life"),
    name: L("Cafés around Mabprachan Lake", "คาเฟ่รอบอ่างมาบประชัน", "Mabprachan 湖畔咖啡", "Mabprachan Lake"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Cafés · park daylight", "คาเฟ่ · สวนกลางวัน", "咖啡 · 公园白天", "Кафе днём"),
    bestTimeOfDay: L("Morning · late afternoon", "เช้า · บ่ายแก่", "早晨 · 傍晚", "Утро · вечер"),
    highlights: [
      L("Expat & long-stay crowd", "expat & คนอยู่ยาว", "长住客与外籍居民", "Expats"),
      L("Remote-work cafés", "คาเฟ่สาย remote", "远程办公咖啡", "Remote work"),
      L("Jogging & cycling loop", "วิ่ง ปั่นรอบอ่าง", "环湖跑骑", "Бег и велосипед"),
      L("Far from Beach Road noise", "ห่างจากเสียง Beach Road", "远离海滩路喧嚣", "Далеко от шума"),
    ],
    vibe: L(
      "A different Pattaya rhythm — lake breeze, laptops, and conversations instead of bar bass.",
      "จังหวะพัทยาอีกแบบ — ลมอ่าง แล็ปท็อป คุยกันแทนเสียงเบสบาร์",
      "另一种芭提雅节奏——湖风、笔记本、对话，而不是酒吧低音炮。",
      "Другой ритм — озеро вместо баров.",
    ),
    bestFor: L(
      "Half-day resets, café hopping, and anyone who lives here and needs a break from the beach strip.",
      "พักครึ่งวัน คาเฟ่ฮอป คนอยู่พัทยาที่อยากพักจากหาดกลาง",
      "半日休整、咖啡巡游、住在芭提雅想逃离海滩带的人。",
      "Перезагрузка у озера.",
    ),
    guideHref: "/explore/cafes",
    guideLabel: L("Pattaya café guide →", "คู่มือคาเฟ่พัทยา →", "芭提雅咖啡馆指南 →", "Гид по кафе →"),
  }),
} as const;

const gemOrder: HiddenGemPinId[] = [
  "white-house-beach-cafe",
  "cave-beach-club-morning",
  "bang-saray-beach",
  "khao-chi-chan-golden-hour",
  "je-tum-seafood-bang-saray",
  "pa-tid-kitchen-naklua",
  "dicey-reillys-bars",
  "sky-mountain-pattaya",
  "mabprachan-lake-cafes",
];

function resolveGem(lang: LanguageCode, key: HiddenGemPinId): HiddenGemGuideItem {
  const raw = guideGems[key];
  return {
    id: raw.id,
    category: t(lang, raw.category),
    name: t(lang, raw.name),
    openDays: t(lang, raw.openDays),
    hoursRange: t(lang, raw.hoursRange),
    bestTimeOfDay: t(lang, raw.bestTimeOfDay),
    highlights: raw.highlights.map((h) => t(lang, h)),
    vibe: t(lang, raw.vibe),
    bestFor: t(lang, raw.bestFor),
    tips: raw.tips ? t(lang, raw.tips) : undefined,
    guideHref: raw.guideHref,
    guideLabel: raw.guideLabel ? t(lang, raw.guideLabel) : undefined,
    mapsHref: raw.mapsHref,
    directionsHref: raw.directionsHref,
  };
}

export function getHiddenGemGuideItems(lang: LanguageCode): HiddenGemGuideItem[] {
  return gemOrder.map((key) => resolveGem(lang, key));
}

export function getHiddenGemsForMap(lang: LanguageCode) {
  return getHiddenGemGuideItems(lang).map((item) => ({
    id: item.id,
    name: item.name,
    hoursRange: item.hoursRange,
    openDays: item.openDays,
    mapsHref: item.mapsHref,
    directionsHref: item.directionsHref,
    pin: hiddenGemPinById[item.id],
  }));
}

export function getHiddenGemMapCopy(lang: LanguageCode) {
  return {
    title: t(lang, L("Going deeper — map", "แผนที่รู้ลึก", "深入了解地图", "Карта")),
    subtitle: t(
      lang,
      L(
        "Nine spots from our field list — tap a pin for directions. Guide only; no tour sales.",
        "9 จุดจากลิสต์จริง — แตะหมุดดูเส้นทาง เป็นคู่มือ ไม่ขายทัวร์",
        "实地清单九处——点击图钉导航。仅指南，不售行程。",
        "9 мест — только навигация.",
      ),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open place", "เปิดสถานที่", "打开地点", "Открыть")),
    openAll: t(
      lang,
      L("Open south-coast route in Maps", "เปิดเส้นทางฝั่งใต้ใน Maps", "在地图中打开南岸路线", "Маршрут на юг в Maps"),
    ),
    openAllHref: hiddenGemsMapOpenHref,
    legendGuide: t(lang, L("9 spots", "9 จุด", "9 处", "9 мест")),
  };
}

export function getHiddenGemGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Pattaya, going deeper — 9 spots",
        "พัทยาฉบับคนเริ่มรู้ลึก — 9 จุด",
        "芭提雅深入了解 — 9 处",
        "Паттайя глубже — 9 мест",
      ),
    ),
    body: t(
      lang,
      L(
        "Not just famous landmarks — places where people who actually live in Pattaya go, with their own mood, and where tourists still rarely show up. Below: photo stops, nature, local food, quiet bars, sunset views, and lake cafés — Maps links only.",
        "ไม่ใช่แค่แลนด์มาร์กดัง — แต่เป็นที่ที่คนอยู่พัทยาจริงไป มี mood เฉพาะตัว และ tourist ยังไม่ค่อยรู้ ด้านล่างมีสายถ่ายรูป ธรรมชาติ อาหาร local บาร์เงียบ จุดพระอาทิตย์ตก และคาเฟ่ริมอ่าง มีแค่ลิงก์แผนที่",
        "不只是著名地标——本地人常去、各有气质、游客仍少知的地方。下列含摄影点、自然、本地美食、安静酒吧、日落与湖畔咖啡，仅链地图。",
        "Не только landmarks — места, куда ходят местные.",
      ),
    ),
    pillars: [
      t(
        lang,
        L(
          "Where people who live in Pattaya actually go",
          "คนอยู่พัทยาจริงไป",
          "芭提雅常住者会去",
          "Куда ходят местные",
        ),
      ),
      t(lang, L("Strong vibe, not generic lists", "ฟีลดี ไม่ใช่ลิสต์ทั่วไป", "气质独特，非泛泛清单", "Свой характер")),
      t(
        lang,
        L("Each place has its own mood", "แต่ละที่มี mood เฉพาะตัว", "各有独特氛围", "У каждого места свой настрой"),
      ),
      t(
        lang,
        L("Many spots tourists still overlook", "หลายที่ tourist ยังไม่ค่อยรู้",
          "许多地方游客仍不了解",
          "Туристы ещё не нашли",
        ),
      ),
    ],
    categoryLabel: t(lang, L("Category", "หมวด", "分类", "Категория")),
    sourceNote: t(
      lang,
      L(
        "Hours and crowds change — confirm on Google Maps before you go. Pattaya.com does not book tours or take commission.",
        "เวลาและคนแนบเปลี่ยนได้ — เช็ก Google Maps ก่อนไป Pattaya.com ไม่จองทัวร์",
        "时间与人流会变——出发前请查地图。本站不代订、不抽佣。",
        "Уточняйте в Maps. Без бронирования туров.",
      ),
    ),
    openInMaps: t(
      lang,
      L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →"),
    ),
    directionsLabel: t(lang, L("Directions →", "เส้นทาง →", "路线 →", "Маршрут →")),
    highlightsLabel: t(lang, L("Highlights", "จุดเด่น", "亮点", "Особенности")),
    vibeLabel: t(lang, L("Atmosphere", "บรรยากาศ", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Good fit if", "เหมาะกับ", "适合", "Кому")),
    tipsLabel: t(lang, L("Note", "หมายเหตุ", "提示", "Совет")),
    guideLinkLabel: t(lang, L("Related guide", "คู่มือที่เกี่ยวข้อง", "相关指南", "Гид")),
    openDaysLabel: t(lang, L("Access", "การเข้าถึง", "开放", "Доступ")),
    hoursRangeLabel: t(lang, L("Hours", "เวลาโดยประมาณ", "时间", "Часы")),
    bestTimeLabel: t(lang, L("Best time", "ช่วงเวลาที่เหมาะ", "最佳时段", "Когда")),
  };
}

export function getHiddenGemMoodPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("Pick by mood", "เลือกตามฟีลที่อยากได้", "按心情选", "По настроению")),
    subtitle: t(
      lang,
      L("Jump to a spot card below.", "แตะไปการ์ดด้านล่าง", "跳转到下方卡片。", "К карточке ниже."),
    ),
    groups: [
      {
        title: t(lang, L("Photo & aesthetic", "สายถ่ายรูป", "摄影氛围", "Фото")),
        pick: t(lang, L("White House Beach Café", "White House Beach Café", "White House", "White House")),
        gemId: "white-house-beach-cafe" as const,
      },
      {
        title: t(lang, L("Famous spot, quiet hour", "ที่ดังแต่ไปเช้า", "有名但早去", "Известно — утром")),
        pick: t(lang, L("Cave Beach Club · before 10:00", "Cave Beach Club · ก่อน 10 โมง", "Cave · 10点前", "Cave до 10:00")),
        gemId: "cave-beach-club-morning" as const,
      },
      {
        title: t(lang, L("Escape central Pattaya", "หนีพัทยากลาง", "逃离中心", "Вне центра")),
        pick: t(lang, L("Bang Saray Beach", "หาดบางเสร่", "Bang Saray", "Bang Saray")),
        gemId: "bang-saray-beach" as const,
      },
      {
        title: t(lang, L("Local seafood", "ซีฟู้ด local", "本地海鲜", "Морепродукты")),
        pick: t(lang, L("Je Tum · Bang Saray", "เจ๊ตุ้ม บางเสร่", "Je Tum", "Je Tum")),
        gemId: "je-tum-seafood-bang-saray" as const,
      },
      {
        title: t(lang, L("Quiet drink", "ดื่มเงียบๆ", "安静喝一杯", "Спокойный бар")),
        pick: t(lang, L("Dicey Reilly's & alley bars", "Dicey Reilly's & ซอยบาร์", "Dicey Reilly's", "Dicey Reilly's")),
        gemId: "dicey-reillys-bars" as const,
      },
      {
        title: t(lang, L("Slow lake day", "วันเงียบริมอ่าง", "湖畔慢日", "Озеро")),
        pick: t(lang, L("Mabprachan Lake cafés", "คาเฟ่รอบอ่างมาบประชัน", "Mabprachan", "Mabprachan")),
        gemId: "mabprachan-lake-cafes" as const,
      },
    ],
  };
}

export function getHiddenGemSecretRoute(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("Secret route many skip", "เส้นทางลับที่หลายคนไม่ทำ", "许多人没走的路线", "Маршрут, который пропускают"),
    ),
    route: t(
      lang,
      L(
        "Pattaya → Na Jomtien → Bang Saray → Sattahip",
        "พัทยา → นาจอมเทียน → บางเสร่ → สัตหีบ",
        "芭提雅 → Na Jomtien → Bang Saray → Sattahip",
        "Pattaya → Na Jomtien → Bang Saray → Sattahip",
      ),
    ),
    body: t(
      lang,
      L(
        "Heading south, crowds thin out, villages feel more local, the sea gets cleaner, and café stops get prettier — ideal for a slow half-day or full-day drive with stops from this list.",
        "ยิ่งลงใต้คนยิ่งน้อย ฟีลชุมชนมากขึ้น ทะเลสะอาดขึ้น คาเฟ่สวยขึ้น — เหมาะขับช้าๆ ครึ่งวันหรือเต็มวัน แวะจุดจากลิสต์นี้",
        "一路向南，人更少、更本地、海水更清、咖啡馆更美——适合慢速半日或全日自驾，搭配本清单停靠。",
        "На юг — меньше людей, чище море, лучше кафе. Идеально на полдня за рулём.",
      ),
    ),
    mapsHref: hiddenGemsMapOpenHref,
    mapsLabel: t(
      lang,
      L("Open route in Google Maps →", "เปิดเส้นทางใน Google Maps →", "在 Google 地图中打开路线 →", "Маршрут в Maps →"),
    ),
  };
}

export { getHiddenGemGuideImage };
