import type { LanguageCode } from "@/lib/i18n/languages";
import {
  marketGoogleMapsDirectionsHref,
  marketMapPinById,
  marketsMapOpenHref,
  type MarketMapPin,
} from "@/lib/design/shopping-markets-map";
import {
  shoppingMarketImagesById,
  type ShoppingMarketImageId,
} from "@/lib/design/shopping-market-images";
import { L, t } from "@/lib/i18n/living-helpers";

export type MarketGuideItem = {
  id: string;
  imageId: ShoppingMarketImageId;
  name: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  scheduleVibe: string;
  highlights: string[];
  vibe: string;
  bestFor?: string;
  foods?: string[];
  tips?: string;
  mapsHref: string;
  directionsHref?: string;
};

export type MarketScheduleRow = {
  id: string;
  name: string;
  openDays: string;
  openDaysCompact: string;
  hoursRange: string;
  hoursRangeCompact: string;
  bestTimeOfDay: string;
  scheduleVibe: string;
};

export type MarketGuideCategory = {
  id: string;
  title: string;
  subtitle: string;
  markets: MarketGuideItem[];
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function market(
  id: ShoppingMarketImageId,
  maps: string,
  fields: {
    name: ReturnType<typeof L>;
    openDays: ReturnType<typeof L>;
    openDaysCompact?: ReturnType<typeof L>;
    hoursRange: ReturnType<typeof L>;
    hoursRangeCompact?: ReturnType<typeof L>;
    bestTimeOfDay: ReturnType<typeof L>;
    scheduleVibe: ReturnType<typeof L>;
    highlights: ReturnType<typeof L>[];
    vibe: ReturnType<typeof L>;
    bestFor?: ReturnType<typeof L>;
    foods?: ReturnType<typeof L>[];
    tips?: ReturnType<typeof L>;
  },
) {
  return { id, imageId: id, mapsHref: mapsQuery(maps), ...fields };
}

const guideMarkets = {
  thepprasit: market("thepprasit", "Thepprasit Night Market Pattaya Thailand", {
    name: L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Thepprasit"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("17:00–22:30", "17:00–22:30", "17:00–22:30", "17:00–22:30"),
    bestTimeOfDay: L("Night", "กลางคืน", "夜间", "Ночь"),
    scheduleVibe: L(
      "Packed food, easy stroll, very crowded.",
      "ของกินแน่น เดินเพลิน คนเยอะ",
      "美食密集、好逛、人多。",
      "Много еды, людно.",
    ),
    highlights: [
      L("Huge food section", "ของกินเยอะมาก", "美食区很大", "Огромный выбор еды"),
      L("Budget clothes & souvenirs", "เสื้อผ้าราคาถูก ของฝาก", "便宜服装与纪念品", "Одежда и сувениры"),
      L("Pets, second-hand, phone cases", "สัตว์เลี้ยง มือสอง เคสมือถือ", "宠物、二手、手机壳", "Питомцы, б/у, чехлы"),
      L("Grilled seafood, Thai sweets, snacks", "หมึกย่าง ซีฟู้ด ขนมไทย", "烤海鲜、泰式甜点", "Морепродукты, десерты"),
    ],
    vibe: L(
      "Chatuchak-meets-Pattaya energy — busy night bazaar with locals and tourists mixed together.",
      "ฟีลจตุจักรเวอร์ชันพัทยา + ตลาดนัดวัยรุ่น คนไทยกับนักท่องเที่ยวเดินปนกัน",
      "像曼谷周末市场遇上芭提雅夜市，本地人与游客混在一起。",
      "Энергия как Chatuchak в Паттайе.",
    ),
    bestFor: L(
      "Eat-as-you-walk, souvenirs, and one evening that covers food + shopping.",
      "เดินกินเรื่อย ๆ หาของฝาก เดินคืนเดียวจบครบ",
      "边走边吃、买伴手礼，一晚搞定吃喝逛。",
      "Еда на ходу, сувениры, всё за один вечер.",
    ),
  }),
  pattayaPark: market("pattaya-park", "Pattaya Park Night Market Thailand", {
    name: L("Pattaya Park Night Market", "ตลาดพัทยาปาร์ค", "Pattaya Park 夜市", "Pattaya Park"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("12:00–01:00", "12:00–01:00", "12:00–01:00", "12:00–01:00"),
    bestTimeOfDay: L("Evening–late night", "เย็น–ดึก", "傍晚至深夜", "Вечер–ночь"),
    scheduleVibe: L(
      "Local street-food focus.",
      "สตรีทฟู้ด local",
      "本地街头美食。",
      "Местный стритфуд.",
    ),
    highlights: [
      L("Lots of food stalls", "ของกินเยอะ", "摊位美食多", "Много еды"),
      L("Often better local prices", "ราคามักดีกว่าฝั่งท่องเที่ยว", "价格常比旅游区实惠", "Часто дешевле туристических зон"),
      L("Thai, Isaan, and seafood", "อาหารไทย อีสาน ซีฟู้ด", "泰餐、伊桑菜、海鲜", "Тайская, исанская, морепродукты"),
    ],
    vibe: L(
      "More everyday-local than Thepprasit — serious about eating, less about the show.",
      "local กว่าเทพประสิทธิ์นิดนึง เน้นกินจริงจัง",
      "比 Thepprasit 更接地气，重在吃东西。",
      "Более «местный», чем Thepprasit.",
    ),
    bestFor: L(
      "Late lunch through after midnight when you want food without the weekend crush.",
      "กินกลางวันดึกถึงหลังเที่ยงคืน ไม่ต้องเบียดวันหยุด",
      "从午后吃到深夜，不必挤周末人潮。",
      "Обед до полуночи без давки выходных.",
    ),
  }),
  buakhao: market("buakhao", "Buakhao Market Pattaya Thailand", {
    name: L("Buakhao Market", "ตลาดบัวขาว", "Buakhao 市场", "Buakhao"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("06:00–18:00", "06:00–18:00", "06:00–18:00", "06:00–18:00"),
    bestTimeOfDay: L("Morning–afternoon", "เช้า–บ่าย", "上午至下午", "Утро–день"),
    scheduleVibe: L(
      "Long-stay expat market, many foreigners.",
      "ตลาดคนอยู่ยาว ฝรั่งเยอะ",
      "长住外籍人士多。",
      "Много expats.",
    ),
    highlights: [
      L("Good-value food", "อาหารราคาดี", "食物划算", "Выгодная еда"),
      L("Popular with long-stay foreigners", "ฝรั่งอยู่เยอะ", "长住外籍人士常来", "Популярен у expats"),
      L("Fruit carts, snacks, ready-to-eat meals", "ผลไม้ ขนม อาหารพร้อมกิน", "水果、小吃、即食", "Фрукты, снеки"),
    ],
    vibe: L(
      "Pattaya's long-stay expat strip — casual, affordable, and very Soi Buakhao.",
      "พัทยาสายต่างชาติ long stay ชิล ๆ ราคาดี",
      "芭提雅长住外籍人士氛围，轻松实惠。",
      "Атмосфера expat long-stay.",
    ),
    foods: [
      L("Sticky rice with pork", "ข้าวเหนียวหมู", "糯米饭配猪肉", "Клейкий рис с свининой"),
      L("Papaya salad", "ส้มตำ", "青木瓜沙拉", "Som tam"),
      L("Fried chicken", "ไก่ทอด", "炸鸡", "Жареная курица"),
      L("Fruit from push carts", "ผลไม้รถเข็น", "推车水果", "Фрукты с тележки"),
    ],
  }),
  oldNaklua: market("old-naklua", "Old Market Pattaya Naklua Thailand", {
    name: L("Old Market Pattaya (Naklua)", "ตลาดเก่าพัทยา (นาเกลือ)", "芭提雅老市场（那库拉）", "Old Market Naklua"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("06:00–18:00", "06:00–18:00", "06:00–18:00", "06:00–18:00"),
    bestTimeOfDay: L("Very early morning", "เช้ามาก", "清晨", "Раннее утро"),
    scheduleVibe: L(
      "Fresh market, true local lifestyle.",
      "ตลาดสด วิถีชาวบ้าน",
      "生鲜市场、本地生活。",
      "Свежий рынок, быт местных.",
    ),
    highlights: [
      L("Very fresh seafood", "ของทะเลสดมาก", "海鲜极新鲜", "Очень свежие морепродукты"),
      L("Residents shop here for real", "คนพื้นที่ซื้อจริง", "本地人真来买", "Местные покупают здесь"),
      L("Among the most local prices", "ราคา local สุด", "价格最接地气", "Самые местные цены"),
    ],
    vibe: L(
      "See Pattaya life away from Beach Road — wet market energy, not a tourist show.",
      "เห็นชีวิตพัทยาจริง ๆ มากกว่าฝั่งท่องเที่ยว",
      "远离海滩路，感受真实本地生活。",
      "Настоящая жизнь Паттайи, не шоу для туристов.",
    ),
    tips: L(
      "Go early — busiest and freshest before the heat builds.",
      "ไปเช้า ๆ จะคึกคักและสดสุด",
      "尽量早去，最新鲜也最热闹。",
      "Приходите рано — свежее и оживлённее.",
    ),
  }),
  jomtienCooked: market("jomtien-cooked", "Jomtien cooked food market Pattaya", {
    name: L("Jomtien cooked-food market", "ตลาดอาหารปรุงสำเร็จจอมเทียน", "Jomtien 熟食市场", "Jomtien cooked food"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("07:00–19:00", "07:00–19:00", "07:00–19:00", "07:00–19:00"),
    bestTimeOfDay: L("Afternoon–evening", "บ่าย–เย็น", "下午至傍晚", "День–вечер"),
    scheduleVibe: L(
      "Ready-to-eat dishes and curry bags.",
      "ตลาดกับข้าว ของกินพร้อมทาน",
      "熟食与外卖咖喱。",
      "Готовая еда.",
    ),
    highlights: [
      L("Ready-to-eat dishes", "ของกินพร้อมทาน", "即食菜品", "Готовая еда"),
      L("Fair prices", "ราคาไม่แรง", "价格不贵", "Недорого"),
      L("Easy takeaway for condo stays", "ซื้อกลับที่พักสะดวก", "适合带回公寓", "Удобно на вынос"),
    ],
    vibe: L(
      "Neighbourhood rice-and-curry market for Jomtien residents.",
      "ตลาดกับข้าวคนแถวจอมเทียน",
      "仲天居民的外带熟食市场。",
      "Рынок готовой еды для жителей Jomtien.",
    ),
  }),
  pattayaKlang: market("pattaya-klang", "Pattaya Klang Market Thailand", {
    name: L("Pattaya Klang Market", "ตลาดพัทยากลาง", "Pattaya Klang 市场", "Pattaya Klang"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("All day (stalls vary)", "ทั้งวัน (ร้านเปิดไม่พร้อมกัน)", "全天（摊位不一）", "Весь день"),
    hoursRangeCompact: L("All day", "ทั้งวัน", "全天", "Весь день"),
    bestTimeOfDay: L("Morning", "เช้า", "早晨", "Утро"),
    scheduleVibe: L(
      "Serious wet market, low prices.",
      "ตลาดสดจริงจัง ของถูก",
      "正经生鲜市场，物价低。",
      "Серьёзный рынок, дёшево.",
    ),
    highlights: [
      L("Large wet market", "ตลาดสดใหญ่", "大型生鲜市场", "Большой wet market"),
      L("Low prices on produce", "ของถูก", "物价低", "Низкие цены"),
      L("Strong breakfast stalls", "ของกินเช้าเด็ด", "早餐摊很棒", "Отличные завтраки"),
    ],
    vibe: L(
      "Pattaya as residents live it — less postcard, more shopping list.",
      "พัทยาฉบับคนอยู่จริง",
      "本地人眼中的芭提雅。",
      "Паттайя «как для жителей».",
    ),
    bestFor: L(
      "Morning explorers who want authentic market rhythm.",
      "คนอยากเห็นจังหวะตลาดเช้าแท้ ๆ",
      "想体验真实早市节奏的人。",
      "Утренние прогулки без туристического лака.",
    ),
  }),
  angSila: market("ang-sila", "Ang Sila Local Fish Market Chonburi", {
    name: L("Ang Sila fish market", "ตลาดปลาอ่างศิลา", "昂西拉鱼市", "Ang Sila"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("06:00–12:00", "06:00–12:00", "06:00–12:00", "06:00–12:00"),
    bestTimeOfDay: L("Early morning", "เช้ามาก", "清晨", "Раннее утро"),
    scheduleVibe: L(
      "Ultra-fresh seafood — short drive from Pattaya.",
      "ซีฟู้ดสดสุด ๆ ขับจากพัทยาไม่ไกล",
      "极鲜海鲜，离芭提雅不远。",
      "Сверхсвежее морепродукты.",
    ),
    highlights: [
      L("Ultra-fresh seafood", "ซีฟู้ดสดสุด ๆ", "海鲜极鲜", "Сверхсвежее"),
      L("Crab, shrimp, squid, fish in volume", "กั้ง ปู หมึก ปลา เพียบ", "蟹虾鱿鱼鱼齐全", "Краб, креветки, кальмар"),
      L("Famous seafood dipping sauces", "น้ำจิ้มซีฟู้ดเด็ด", "海鲜蘸料出名", "Соусы отличные"),
    ],
    vibe: L(
      "Chonburi's real seaside market — worth the short trip north of central Pattaya.",
      "ตลาดทะเลแท้ ๆ ของชลบุรี ขับออกจากพัทยากลางไม่ไกล",
      "春武里正宗海边鱼市，离芭提雅市中心不远。",
      "Настоящий рыбный рынок Чонбури — короткая поездка.",
    ),
    bestFor: L(
      "Buy seafood to grill at home or your villa.",
      "ซื้อกลับไปปิ้งย่างที่บ้านหรือวิลล่า",
      "买回去烧烤。",
      "Купить и пожарить дома.",
    ),
    tips: L(
      "Outside Pattaya city proper — plan ~30–45 minutes by car from Beach Road.",
      "อยู่นอกตัวเมืองพัทยา — ขับจาก Beach Rd ประมาณ 30–45 นาที",
      "不在芭提雅市区内，从海滩路开车约30–45分钟。",
      "~30–45 мин от Beach Road на машине.",
    ),
  }),
  klongtom: market("klongtom", "Klongtom Market Pattaya Thailand", {
    name: L("Klongtom Market", "ตลาดคลองถม", "Klongtom 市场", "Klongtom"),
    openDays: L(
      "Every day (busiest Sat–Sun)",
      "ทุกวัน (คึกคักสุดเสาร์–อาทิตย์)",
      "每天（周六日最热闹）",
      "Ежедн. (пик Сб–Вс)",
    ),
    openDaysCompact: L(
      "Every day · busiest Sat–Sun",
      "ทุกวัน · คึก ส–อา",
      "每天 · 周六日最热闹",
      "Ежедн. · пик Сб–Вс",
    ),
    hoursRange: L("10:00–21:00", "10:00–21:00", "10:00–21:00", "10:00–21:00"),
    bestTimeOfDay: L("Afternoon", "บ่าย", "下午", "День"),
    scheduleVibe: L(
      "Second-hand and treasure-hunt finds.",
      "มือสอง ของล่าของ",
      "二手与淘货。",
      "Б/у и находки.",
    ),
    highlights: [
      L("Second-hand treasures", "ของมือสอง", "二手宝贝", "Секонд-хенд"),
      L("Tools, vintage oddities", "เครื่องมือช่าง ของวินเทจ", "工具、复古杂物", "Инструменты, винтаж"),
      L("Phones, parts, car accessories", "มือถือ อะไหล่ ของแต่งรถ", "手机、配件、车饰", "Телефоны, запчасти"),
    ],
    vibe: L(
      "Treasure-hunter market — chaotic, fun, and unpredictable.",
      "ตลาดนักล่าสมบัติ  chaotic สนุก ไม่รู้จะเจออะไร",
      "淘宝式市场，混乱但有趣。",
      "Рынок для «охотников за находками».",
    ),
    tips: L(
      "Weekends have the biggest selection; go early before the heat.",
      "เสาร์อาทิตย์ของเยอะสุด ไปเช้าจะสบายกว่า",
      "周末货最多，早去较舒适。",
      "В выходные выбор максимальный.",
    ),
  }),
  treeMarket: market("tree-market", "Tree Market Pattaya Thailand", {
    name: L("Tree Market Pattaya", "ตลาดต้นไม้พัทยา", "芭提雅树市", "Tree Market"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("09:00–19:00", "09:00–19:00", "09:00–19:00", "09:00–19:00"),
    bestTimeOfDay: L("Evening", "เย็น", "傍晚", "Вечер"),
    scheduleVibe: L(
      "Plants, garden décor, very chill.",
      "ต้นไม้ แต่งสวน ชิลมาก",
      "植物园艺，非常悠闲。",
      "Растения, спокойно.",
    ),
    highlights: [
      L("Plants and pots", "ต้นไม้ กระถาง", "植物与花盆", "Растения и горшки"),
      L("Garden décor", "ของแต่งสวน", "园艺装饰", "Садовый декор"),
      L("Cute prices on small plants", "ราคาน่ารัก", "小盆栽价格友好", "Недорогие растения"),
    ],
    vibe: L(
      "Slow, green, and easy on the eyes — opposite of a night bazaar.",
      "ชิลมาก เดินสบายตา ตรงข้ามตลาดกลางคืน",
      "悠闲绿意，与夜市完全不同。",
      "Спокойно и зелено.",
    ),
  }),
  floating: market("floating", "Pattaya Floating Market Four Regions Thailand", {
    name: L("Pattaya Floating Market", "ตลาดน้ำ 4 ภาค", "四方水上市场", "Плавучий рынок"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("09:00–19:00", "09:00–19:00", "09:00–19:00", "09:00–19:00"),
    bestTimeOfDay: L("Late morning–afternoon", "สาย–บ่าย", "上午至下午", "Утро–день"),
    scheduleVibe: L(
      "Photos and sightseeing — entry fee applies.",
      "ถ่ายรูป เที่ยวเล่น (มีค่าเข้า)",
      "拍照游玩（需门票）。",
      "Фото и экскурсия.",
    ),
    highlights: [
      L("Boats and canals", "ตลาดน้ำ มีเรือ", "水道与船", "Лодки и каналы"),
      L("Thai regional snacks", "ของกินไทย", "泰国地方小吃", "Тайские снеки"),
      L("Many photo spots", "มุมถ่ายรูปเยอะ", "拍照点多", "Много фото-точек"),
    ],
    vibe: L(
      "Thai-style attraction market — touristy but fun for families.",
      "ไทยประยุกต์ + ท่องเที่ยว เหมาะครอบครัว",
      "旅游向水上市场，适合家庭。",
      "Туристический, но семейный.",
    ),
    bestFor: L(
      "Half-day outing with kids or first-time visitors.",
      "ครึ่งวันกับครอบครัวหรือคนมาพัทยาครั้งแรก",
      "带孩子或首次来访的半日游。",
      "Полдня с детьми или новичками.",
    ),
    tips: L(
      "Entry fee applies — check the official rate before you go.",
      "มีค่าเข้า — เช็คราหน้างานก่อนไป",
      "需门票 — 出发前查官方票价。",
      "Есть входной билет.",
    ),
  }),
  nightBazaar: market("night-bazaar", "Pattaya Night Bazaar Thailand", {
    name: L("Pattaya Night Bazaar", "พัทยาไนท์บาซาร์", "芭提雅夜市集市", "Night Bazaar"),
    openDays: L("Every day", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("10:00–23:00", "10:00–23:00", "10:00–23:00", "10:00–23:00"),
    bestTimeOfDay: L("Evening", "เย็น", "傍晚", "Вечер"),
    scheduleVibe: L(
      "Clothes shopping, cooler covered walkways.",
      "ช้อปเสื้อผ้า เดินแอร์เย็น",
      "买衣服，有顶棚较凉快。",
      "Одежда, прохладнее.",
    ),
    highlights: [
      L("Clothes and souvenirs", "เสื้อผ้า ของฝาก", "服装纪念品", "Одежда, сувениры"),
      L("Indoor-ish walkways", "เดินสบาย ไม่ร้อน", "步行舒适不太热", "Комфортная прогулка"),
      L("Between market and mall feel", "กึ่งตลาด กึ่งห้าง", "半市场半商场", "Между рынком и ТЦ"),
    ],
    vibe: L(
      "Easy central shopping without sun — good rainy-day backup.",
      "ช้อปกลางเมืองไม่โดนแดด ฝนตกก็มาได้",
      "市中心不受晒，雨天备选。",
      "Центр, без жары.",
    ),
  }),
  madeInThailand: market("made-in-thailand", "Made in Thailand Market Pattaya", {
    name: L("Made in Thailand Market", "เมดอินไทยแลนด์", "Made in Thailand", "Made in Thailand"),
    openDays: L("Wed–Sun", "พุธ–อาทิตย์", "周三至日", "Ср–Вс"),
    hoursRange: L("17:00–23:00", "17:00–23:00", "17:00–23:00", "17:00–23:00"),
    bestTimeOfDay: L("Evening", "เย็น", "傍晚", "Вечер"),
    scheduleVibe: L(
      "Handmade bags, art, and design gifts.",
      "กระเป๋าทำมือ งานศิลป์ ของขวัญดีไซน์",
      "手工包、艺术礼品。",
      "Ручная работа и подарки.",
    ),
    highlights: [
      L("Handmade bags and art", "กระเป๚าทำมือ งานศิลป์", "手工包与艺术", "Сумки ручной работы"),
      L("Design gifts", "ของขวัญดีไซน์", "设计礼品", "Дизайн-подарки"),
      L("More curated than souvenir rows", "คัดสรรกว่าแผงของฝากทั่วไป", "比普通纪念品摊更精选", "Кураторский выбор"),
    ],
    vibe: L(
      "Weekend design market — check hours before driving over.",
      "ตลาดดีไซน์วันหยุด — เช็คเวลาก่อนไป",
      "周末设计市集，出发前确认时间。",
      "Дизайн-рынок выходного дня.",
    ),
  }),
} as const;

const categoriesDef = [
  {
    id: "food-night",
    title: L(
      "Food & night bazaars",
      "สายของกิน / ตลาดกลางคืน",
      "美食与夜市",
      "Еда и ночные рынки",
    ),
    subtitle: L(
      "Walk, eat, and browse — Pattaya's busiest evening markets.",
      "เดินกินเพลิน ๆ — ตลาดเย็นที่คึกคักสุด",
      "边走边吃，最热闹的晚间市场。",
      "Вечерние рынки для еды и прогулок.",
    ),
    marketKeys: ["thepprasit", "pattayaPark", "buakhao"] as const,
  },
  {
    id: "fresh-local",
    title: L(
      "Fresh markets & local life",
      "สายตลาดสด / วิถีคนพื้นที่",
      "生鲜与本地生活",
      "Свежие продукты",
    ),
    subtitle: L(
      "Morning wet markets where residents actually shop.",
      "ตลาดเช้าที่คนพัทยาซื้อของจริง",
      "本地人真正会去的早市。",
      "Утренние рынки для местных.",
    ),
    marketKeys: ["oldNaklua", "jomtienCooked", "pattayaKlang"] as const,
  },
  {
    id: "seafood",
    title: L("Seafood specialists", "สายซีฟู้ด / อาหารทะเล", "海鲜专场", "Морепродукты"),
    subtitle: L(
      "Buy live or on ice — grill at home or ask vendors to cook.",
      "ซื้อสดกลับไปปิ้งย่าง หรือให้ร้านช่วยปรุง",
      "买鲜活海鲜回家烤，或请摊主代煮。",
      "Купите свежее — жарьте сами или закажите готовку.",
    ),
    marketKeys: ["angSila"] as const,
  },
  {
    id: "bargain",
    title: L(
      "Bargains & second-hand",
      "สายของถูก / มือสอง / คลองถม",
      "二手与淘货",
      "Барахолки",
    ),
    subtitle: L(
      "Vintage, tools, phones, and surprises — weekend is best.",
      "ของแปลก มือสอง อะไหล่ — เสาร์อาทิตย์ของเยอะ",
      "复古、工具、手机配件，周末最好逛。",
      "Винтаж и находки — лучше в выходные.",
    ),
    marketKeys: ["klongtom"] as const,
  },
  {
    id: "plants",
    title: L("Plants & home", "สายต้นไม้ / แต่งบ้าน", "植物与家居", "Растения"),
    subtitle: L(
      "Slow market mornings away from the beach crowds.",
      "เช้าชิล ๆ ห่างจากฝูงชายหาด",
      "远离海滩人群的悠闲早晨。",
      "Спокойное утро вдали от пляжа.",
    ),
    marketKeys: ["treeMarket"] as const,
  },
  {
    id: "tourist",
    title: L(
      "Photo-friendly & attractions",
      "สายเที่ยวถ่ายรูป / ตลาดแนวไทย",
      "拍照与景点型",
      "Туристические",
    ),
    subtitle: L(
      "Floating market culture — plan half a day and check entry fees.",
      "ตลาดน้ำ — ใช้เวลาครึ่งวัน เช็คค่าเข้า",
      "水上市场文化，预留半天并查门票。",
      "Плавучий рынок — полдня, проверьте билет.",
    ),
    marketKeys: ["floating"] as const,
  },
  {
    id: "city-shopping",
    title: L(
      "Central shopping strips",
      "สายช้อปในเมือง เดินง่าย",
      "市中心购物带",
      "Центральный шопинг",
    ),
    subtitle: L(
      "Covered or evening bazaars when you want less heat.",
      "ตลาดในเมืองเมื่อไม่อยากโดนแดด",
      "不想暴晒时的市区市集。",
      "Когда не хочется жары.",
    ),
    marketKeys: ["nightBazaar", "madeInThailand"] as const,
  },
] as const;

const scheduleRowOrder = [
  "thepprasit",
  "pattayaPark",
  "buakhao",
  "oldNaklua",
  "jomtienCooked",
  "pattayaKlang",
  "klongtom",
  "treeMarket",
  "floating",
  "nightBazaar",
  "angSila",
  "madeInThailand",
] as const satisfies readonly (keyof typeof guideMarkets)[];

function resolveMarket(lang: LanguageCode, key: keyof typeof guideMarkets): MarketGuideItem {
  const m = guideMarkets[key];
  const pin = marketMapPinById[m.imageId];
  return {
    id: m.id,
    imageId: m.imageId,
    mapsHref: m.mapsHref,
    directionsHref: pin ? marketGoogleMapsDirectionsHref(pin.lat, pin.lng) : undefined,
    name: t(lang, m.name),
    openDays: t(lang, m.openDays),
    hoursRange: t(lang, m.hoursRange),
    bestTimeOfDay: t(lang, m.bestTimeOfDay),
    scheduleVibe: t(lang, m.scheduleVibe),
    highlights: m.highlights.map((h) => t(lang, h)),
    vibe: t(lang, m.vibe),
    bestFor: m.bestFor ? t(lang, m.bestFor) : undefined,
    foods: m.foods?.map((f) => t(lang, f)),
    tips: m.tips ? t(lang, m.tips) : undefined,
  };
}

export function getMarketSchedule(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "When Pattaya markets open + best time to visit",
        "ตลาดพัทยาเปิดวันไหน + เหมาะไปเวลาไหน",
        "芭提雅市场开放日与最佳到访时间",
        "Когда открыты рынки Паттайи",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Plan morning vs evening trips at a glance — hours are approximate.",
        "จะได้วางแพลนว่าเช้าไปไหน เย็นไปไหน ไม่เสียเที่ยว — เวลาเป็นคร่าว ๆ",
        "一眼规划早晚行程，时间为参考。",
        "Кратко: утро или вечер — часы ориентировочные.",
      ),
    ),
    columns: {
      market: t(lang, L("Market", "ตลาด", "市场", "Рынок")),
      openDays: t(lang, L("Open days", "เปิดวัน", "开放日", "Дни")),
      hours: t(lang, L("Approx. hours", "เวลาโดยประมาณ", "大约时间", "Часы")),
      bestTime: t(lang, L("Best time", "เหมาะสุด", "最佳时段", "Лучшее время")),
      vibe: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
    },
    rows: scheduleRowOrder.map((key) => {
      const raw = guideMarkets[key];
      const m = resolveMarket(lang, key);
      return {
        id: m.id,
        name: m.name,
        openDays: m.openDays,
        openDaysCompact: t(lang, raw.openDaysCompact ?? raw.openDays),
        hoursRange: m.hoursRange,
        hoursRangeCompact: t(lang, raw.hoursRangeCompact ?? raw.hoursRange),
        bestTimeOfDay: m.bestTimeOfDay,
        scheduleVibe: m.scheduleVibe,
      } satisfies MarketScheduleRow;
    }),
  };
}

export function getMarketsForMap(lang: LanguageCode) {
  return scheduleRowOrder
    .map((key) => {
      const market = resolveMarket(lang, key);
      const pin = marketMapPinById[market.imageId];
      if (!pin) return null;
      return { ...market, pin };
    })
    .filter((row): row is MarketGuideItem & { pin: MarketMapPin } => row !== null);
}

export function getMarketMapCopy(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Pattaya markets on the map",
        "แผนที่ตลาดพัทยา",
        "芭提雅市场地图",
        "Карта рынков Паттайи",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Tap a pin for directions — open Google Maps for live hours and traffic.",
        "แตะหมุดเพื่อดูเส้นทาง — เปิด Google Maps เช็คเวลาเปิดและการจราจรสด",
        "点击标记获取路线 — 在 Google 地图查看实时营业与路况。",
        "Нажмите на метку для маршрута — в Google Maps актуальные часы.",
      ),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open in Maps", "เปิดในแผนที่", "在地图中打开", "Открыть в Maps")),
    openAll: t(
      lang,
      L("Open all markets in Google Maps", "เปิดทุกตลาดใน Google Maps", "在 Google 地图打开全部", "Все рынки в Maps"),
    ),
    openAllHref: marketsMapOpenHref,
    hoursOnCard: t(lang, L("Hours (guide)", "เวลา (คร่าว ๆ)", "时间（参考）", "Часы (ориент.)")),
    legendGuide: t(lang, L("Guide markets", "ตลาดในคู่มือ", "指南市场", "Из гида")),
    legendHidden: t(lang, L("Hidden / local", "ตลาดลับ / local", "隐秘本地", "Скрытые")),
  };
}

export function getMarketGuideCategories(lang: LanguageCode): MarketGuideCategory[] {
  return categoriesDef.map((cat) => ({
    id: cat.id,
    title: t(lang, cat.title),
    subtitle: t(lang, cat.subtitle),
    markets: cat.marketKeys.map((key) => resolveMarket(lang, key)),
  }));
}

export function getMarketGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Pattaya market guide by style",
        "คู่มือตลาดพัทยาแยกตามสไตล์",
        "芭提雅市场风格指南",
        "Гид по рынкам Паттайи",
      ),
    ),
    body: t(
      lang,
      L(
        "Pattaya is not just Walking Street — local markets range from night food bazaars and morning wet markets to plant fairs and second-hand treasure hunts. Each feels different; use the sections below to match your mood and time of day.",
        "พัทยาไม่ได้มีแค่ Walking Street — มีตลาด local เยอะมาก ทั้งสายกินกลางคืน ตลาดสดเช้า ซีฟู้ด ต้นไม้ และคลองถม แต่ละที่ฟีลต่างกัน เลือกตามอารมณ์และเวลาที่ไป",
        "芭提雅不只是步行街——还有夜市、早市、海鲜、植物与二手市场，风格各异，按心情和时段选择。",
        "Паттайя — не только Walking Street: ночные базары, утренние рынки, морепродукты и барахолки.",
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
    highlightsLabel: t(lang, L("Highlights", "จุดเด่น", "亮点", "Особенности")),
    vibeLabel: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Best for", "เหมาะกับ", "适合", "Подходит")),
    foodsLabel: t(lang, L("Try", "ของน่ากิน", "推荐", "Попробуйте")),
    tipsLabel: t(lang, L("Tip", "เคล็ดลับ", "提示", "Совет")),
    openDaysLabel: t(lang, L("Open", "เปิดวัน", "开放", "Дни")),
    hoursRangeLabel: t(lang, L("Hours", "เวลาโดยประมาณ", "时间", "Часы")),
    bestTimeLabel: t(lang, L("Best time", "เหมาะสุด", "最佳时段", "Лучшее время")),
  };
}

export function getMarketRankings(lang: LanguageCode) {
  return {
    title: t(lang, L("Quick picks", "จัดอันดับแบบสรุป", "快速推荐", "Краткий топ")),
    subtitle: t(
      lang,
      L(
        "Subjective shortlist when you only have one or two evenings — combine with the sections above for details.",
        "สรุปสั้น ๆ เมื่อมีเวลาแค่ 1–2 คืน — ดูรายละเอียดในหมวดด้านบน",
        "时间有限时的主观精选，详情见上方分类。",
        "Краткий список, если мало времени.",
      ),
    ),
    groups: [
      {
        title: t(lang, L("Best for food", "ของกินดีที่สุด", "美食首选", "Лучшая еда")),
        items: [
          t(lang, L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit", "Thepprasit")),
          t(lang, L("Pattaya Park Night Market", "ตลาดพัทยาปาร์ค", "Pattaya Park", "Pattaya Park")),
          t(lang, L("Buakhao Market", "ตลาดบัวขาว", "Buakhao", "Buakhao")),
        ],
      },
      {
        title: t(lang, L("Best for seafood", "ซีฟู้ดดีที่สุด", "海鲜首选", "Морепродукты")),
        items: [
          t(lang, L("Naklua / Old Market area", "นาเกลือ / ตลาดเก่า", "那库拉/老市场", "Naklua")),
          t(lang, L("Ang Sila fish market", "ตลาดปลาอ่างศิลา", "昂西拉鱼市", "Ang Sila")),
        ],
      },
      {
        title: t(lang, L("Most local", "local จริงที่สุด", "最本地", "Самые местные")),
        items: [
          t(lang, L("Pattaya Klang Market", "ตลาดพัทยากลาง", "Pattaya Klang", "Klang")),
          t(lang, L("Old Market Pattaya", "ตลาดเก่าพัทยา", "老市场", "Old Market")),
        ],
      },
      {
        title: t(lang, L("Most fun to wander", "เดินเพลินสุด", "最好逛", "Прогулка")),
        items: [
          t(lang, L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit", "Thepprasit")),
          t(lang, L("Pattaya Floating Market", "ตลาดน้ำ 4 ภาค", "水上市场", "Floating")),
        ],
      },
      {
        title: t(lang, L("Most unusual finds", "ของแปลกเยอะสุด", "最猎奇", "Необычное")),
        items: [t(lang, L("Klongtom Market", "ตลาดคลองถม", "Klongtom", "Klongtom"))],
      },
    ],
  };
}

export function getMarketImage(id: ShoppingMarketImageId): string {
  return shoppingMarketImagesById[id];
}
