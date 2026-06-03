import type { LanguageCode } from "@/lib/i18n/languages";
import { marketGoogleMapsDirectionsHref } from "@/lib/design/shopping-markets-map";
import type { HiddenMarketImageId } from "@/lib/design/shopping-market-hidden-images";
import { L, t } from "@/lib/i18n/living-helpers";

export type HiddenMarketItem = {
  id: HiddenMarketImageId;
  name: string;
  nameEn?: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  highlights: string[];
  vibe: string;
  bestFor?: string;
  foods?: string[];
  tips?: string;
  mapsHref: string;
  directionsHref?: string;
};

type HiddenMarketMapPin = {
  id: HiddenMarketImageId;
  lat: number;
  lng: number;
  shortLabel: string;
};

const hiddenMapPins: Record<HiddenMarketImageId, HiddenMarketMapPin> = {
  "wat-chai-mongkhon": { id: "wat-chai-mongkhon", lat: 12.9358, lng: 100.9038, shortLabel: "Wat Chai" },
  "lan-pho-naklua": { id: "lan-pho-naklua", lat: 12.9615, lng: 100.8972, shortLabel: "Lan Pho" },
  "noen-plub-wan": { id: "noen-plub-wan", lat: 12.9086, lng: 100.8779, shortLabel: "Noen Plub" },
  "wat-tham-samakkee": { id: "wat-tham-samakkee", lat: 12.9478, lng: 100.9115, shortLabel: "Wat Tham" },
  "naklua-old-town": { id: "naklua-old-town", lat: 12.9578, lng: 100.9045, shortLabel: "Naklua old" },
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function hiddenMarket(
  id: HiddenMarketImageId,
  maps: string,
  fields: {
    name: ReturnType<typeof L>;
    nameEn?: ReturnType<typeof L>;
    openDays: ReturnType<typeof L>;
    hoursRange: ReturnType<typeof L>;
    bestTimeOfDay: ReturnType<typeof L>;
    highlights: ReturnType<typeof L>[];
    vibe: ReturnType<typeof L>;
    bestFor?: ReturnType<typeof L>;
    foods?: ReturnType<typeof L>[];
    tips?: ReturnType<typeof L>;
  },
) {
  return { id, mapsHref: mapsQuery(maps), ...fields };
}

const hiddenMarketsDef = {
  watChaiMongkhon: hiddenMarket("wat-chai-mongkhon", "Wat Chai Mongkhon Market Pattaya Thailand", {
    name: L(
      "Wat Chai Mongkhon morning market",
      "ตลาดวัดชัยมงคล (ตลาดเช้าลับกลางเมือง)",
      "柴孟克寺早市",
      "Рынок Wat Chai Mongkhon",
    ),
    nameEn: L("Wat Chai Mongkhon Market", "Wat Chai Mongkhon Market", "Wat Chai Mongkhon Market", "Wat Chai Mongkhon Market"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("06:00–08:30", "06:00–08:30", "06:00–08:30", "06:00–08:30"),
    bestTimeOfDay: L("Very early morning", "เช้ามาก", "清晨", "Раннее утро"),
    highlights: [
      L("Very low prices", "ราคาถูกมาก", "价格很低", "Очень дёшево"),
      L("Few tourists", "นักท่องเที่ยวน้อย", "游客少", "Мало туристов"),
      L("Real Pattaya morning life", "ได้เห็นชีวิตจริงของพัทยา", "看见真实的芭提雅早晨", "Настоящая жизнь Паттайи"),
    ],
    vibe: L(
      "A true neighbourhood morning market — workers, elders, and locals buying curry bags and breakfast.",
      "ตลาดเช้าชาวบ้านแท้ ๆ คนทำงาน คนแก่ แม่บ้าน มาซื้อกับข้าวกันจริง",
      "真正的社区早市，上班族和住户来买早餐。",
      "Настоящий утренний рынок для местных.",
    ),
    foods: [
      L("Curry bags", "ข้าวแกงถุง", "袋装咖喱", "Карри в пакете"),
      L("Patongko", "ปาท่องโก๋", "油条", "Патонго"),
      L("Thai sweets", "ขนมไทย", "泰式甜点", "Тайские сладости"),
      L("Morning grilled pork", "หมูปิ้งเช้า ๆ", "清晨烤猪", "Утренний муу-пинг"),
      L("Fresh soy milk", "น้ำเต้าหู้", "豆浆", "Соевое молоко"),
    ],
  }),
  lanPhoNaklua: hiddenMarket("lan-pho-naklua", "Lan Pho Naklua Market Pattaya Thailand", {
    name: L("Lan Pho Naklua market", "ตลาดลานโพธิ์นาเกลือ", "兰坡那库拉市场", "Lan Pho Naklua"),
    nameEn: L("Lan Pho Naklua Market", "Lan Pho Naklua Market", "Lan Pho Naklua Market", "Lan Pho Naklua Market"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Morning–late morning", "เช้า–สาย", "上午", "Утро"),
    bestTimeOfDay: L("Morning", "เช้า–สาย", "早晨", "Утро"),
    highlights: [
      L("Ultra-fresh seafood", "อาหารทะเลสดมาก", "海鲜极鲜", "Очень свежие морепродукты"),
      L("Local prices", "ราคา local", "本地价", "Местные цены"),
      L("Grill shops on site", "ซื้อแล้วมีร้านรับเผา", "买后可代烤", "Жарят на месте"),
    ],
    vibe: L(
      "The real local seafood market — what Naklua residents buy before the tourist crowds.",
      "ซีฟู้ดตลาดชาวบ้านตัวจริง คนพื้นที่มาซื้อก่อนฝูงทัวร์",
      "本地人买海鲜的地方，游客还不多。",
      "Рынок морепродуктов для местных.",
    ),
    foods: [
      L("Blue crab", "ปูม้า", "青蟹", "Краб"),
      L("Squid with eggs", "หมึกไข่", "鱿鱼卵", "Кальмар"),
      L("Sweet clams", "หอยหวาน", "蛤蜊", "Моллюски"),
      L("Sea prawns", "กุ้งทะเล", "海虾", "Креветки"),
    ],
    tips: L(
      "Still quieter than the floating market or Thepprasit — go early for the best pick.",
      "ยังไม่แน่นเท่าตลาดน้ำหรือเทพประสิทธิ์ — ไปเช้าของสดสุด",
      "比水上市场或 Thepprasit 人少 — 早去货最好。",
      "Ранним утром выбор лучше.",
    ),
  }),
  noenPlubWan: hiddenMarket("noen-plub-wan", "Noen Plub Wan Community Market Pattaya", {
    name: L(
      "Noen Plub Wan community market",
      "ตลาดชุมชนซอยเนินพลับหวาน",
      "暖普拉万社区市场",
      "Noen Plub Wan",
    ),
    nameEn: L(
      "Noen Plub Wan Community Market",
      "Noen Plub Wan Community Market",
      "Noen Plub Wan Community Market",
      "Noen Plub Wan Community Market",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Evening peak", "เย็นหลังเลิกงาน", "傍晚高峰", "Вечер"),
    bestTimeOfDay: L("Evening", "เย็น", "傍晚", "Вечер"),
    highlights: [
      L("Made-to-order dishes", "อาหารตามสั่งเด็ด", "现点现做", "По заказу"),
      L("Lots of evening snacks", "ของกินเย็นเยอะ", "晚间小吃多", "Много вечерних снеков"),
      L("Almost no tourist markup", "ราคาแทบไม่มี tourist tax", "几乎没有游客加价", "Без наценки для туристов"),
    ],
    vibe: L(
      "Pattaya's lived-in side — expats and locals eating like they do at home.",
      "พัทยาฝั่งคนอยู่จริง กินแบบบ้าน ๆ",
      "常住者常来的社区夜市。",
      "Рынок для тех, кто живёт в Паттайе.",
    ),
    foods: [
      L("Som tam", "ส้มตำ", "青木瓜沙拉", "Сом там"),
      L("Grilled chicken", "ไก่ย่าง", "烤鸡", "Курица"),
      L("Fried meatballs", "ลูกชิ้นทอด", "炸肉丸", "Фрикадельки"),
      L("Red pork rice", "ข้าวหมูแดง", "叉烧饭", "Свинина с рисом"),
    ],
    bestFor: L(
      "Anyone who wants genuinely local food, not night-market theatre.",
      "คนอยากกินแบบ local จริง ๆ ไม่ใช่โชว์ไนท์มาร์เก็ต",
      "想体验真实本地味的人。",
      "Для настоящего local-опыта.",
    ),
  }),
  watThamSamakkee: hiddenMarket("wat-tham-samakkee", "Wat Tham Samakkee Market Pattaya Thailand", {
    name: L(
      "Wat Tham Samakkee evening market",
      "ตลาดวัดธรรมสามัคคี",
      "达摩三密寺晚市",
      "Wat Tham Samakkee",
    ),
    nameEn: L(
      "Wat Tham Samakkee Market",
      "Wat Tham Samakkee Market",
      "Wat Tham Samakkee Market",
      "Wat Tham Samakkee Market",
    ),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Evening", "เย็น", "傍晚", "Вечер"),
    bestTimeOfDay: L("Evening", "เย็น", "傍晚", "Вечер"),
    highlights: [
      L("Cheap eats", "ของกินถูก", "便宜", "Дёшево"),
      L("Mostly locals", "คนพื้นที่เยอะ", "本地人多", "Много местных"),
      L("Lots of fresh-cooked food", "อาหารทำสดเยอะ", "现做食物多", "Много готовой еды"),
    ],
    vibe: L(
      "Low-key temple market — calm, homely, easy to stroll.",
      "ตลาดวัดเย็น ๆ บ้าน ๆ ไม่วุ่นวาย เดินสบาย",
      "低调的寺庙晚市，悠闲好逛。",
      "Спокойный вечерний рынок у храма.",
    ),
    foods: [
      L("Kanom krok", "ขนมครก", "椰奶小煎饼", "Каном крок"),
      L("Pad Thai", "ผัดไทย", "泰式炒河粉", "Пад тай"),
      L("Fried chicken", "ไก่ทอด", "炸鸡", "Курица"),
      L("Pork sticky rice", "ข้าวเหนียวหมู", "猪肉糯米饭", "Рис с свининой"),
    ],
  }),
  nakluaOldTown: hiddenMarket("naklua-old-town", "Naklua Old Town Market Pattaya Thailand", {
    name: L(
      "Naklua old town (early morning)",
      "ตลาดนาเกลือเก่า (ช่วงเช้ามืด)",
      "那库拉老城早市",
      "Naklua Old Town",
    ),
    nameEn: L("Naklua Old Town Market", "Naklua Old Town Market", "Naklua Old Town Market", "Naklua Old Town Market"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("05:30–08:00", "05:30–08:00", "05:30–08:00", "05:30–08:00"),
    bestTimeOfDay: L("Pre-dawn to morning", "เช้ามืด", "黎明至上午", "Раннее утро"),
    highlights: [
      L("Fishing boats", "เรือประมง", "渔船", "Лодки"),
      L("Fresh seafood", "อาหารทะเลสด", "新鲜海鲜", "Морепродукты"),
      L("Old-school snacks", "ขนมโบราณ", "传统点心", "Старые снеки"),
      L("Vintage cafés", "ร้านกาแฟเก่า ๆ", "老咖啡馆", "Старые кафе"),
    ],
    vibe: L(
      "Historic fishing village — quiet after 08:00; feels like Pattaya before the resorts.",
      "ชุมชนประมงเก่าแก่ หลัง 08:00 เงียบ เหมือนได้เห็นพัทยาก่อนเป็นเมืองท่องเที่ยว",
      "古老渔村，八点后人少，像旅游开发前的芭提雅。",
      "Старая рыбацкая деревня — тихо после 8:00.",
    ),
    tips: L(
      "Best before sunrise crowds thin — pair with Lan Pho if you love seafood.",
      "ไปก่อนคนเยอะ จับคู่กับลานโพธิ์ถ้าชอบซีฟู้ด",
      "趁人少早去，爱吃海鲜可顺路兰坡。",
      "Рано утром; рядом Lan Pho для морепродуктов.",
    ),
  }),
} as const;

const hiddenMarketOrder = [
  "watChaiMongkhon",
  "lanPhoNaklua",
  "noenPlubWan",
  "watThamSamakkee",
  "nakluaOldTown",
] as const;

function resolveHiddenMarket(lang: LanguageCode, key: keyof typeof hiddenMarketsDef): HiddenMarketItem {
  const m = hiddenMarketsDef[key];
  const pin = hiddenMapPins[m.id];
  return {
    id: m.id,
    name: t(lang, m.name),
    nameEn: m.nameEn ? t(lang, m.nameEn) : undefined,
    openDays: t(lang, m.openDays),
    hoursRange: t(lang, m.hoursRange),
    bestTimeOfDay: t(lang, m.bestTimeOfDay),
    highlights: m.highlights.map((h) => t(lang, h)),
    vibe: t(lang, m.vibe),
    bestFor: m.bestFor ? t(lang, m.bestFor) : undefined,
    foods: m.foods?.map((f) => t(lang, f)),
    tips: m.tips ? t(lang, m.tips) : undefined,
    mapsHref: m.mapsHref,
    directionsHref: pin ? marketGoogleMapsDirectionsHref(pin.lat, pin.lng) : undefined,
  };
}

export function getHiddenMarkets(lang: LanguageCode): HiddenMarketItem[] {
  return hiddenMarketOrder.map((key) => resolveHiddenMarket(lang, key));
}

export function getHiddenMarketsSection(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Hidden markets tourists rarely find",
        "ตลาดลับที่นักท่องเที่ยวยังไม่ค่อยรู้",
        "游客少见的隐秘市场",
        "Скрытые рынки для туристов",
      ),
    ),
    intro: t(
      lang,
      L(
        "Pattaya has plenty of places locals actually shop — not on generic tour plans, often better value and more authentic than the famous night bazaars.",
        "พัทยามีตลาดที่คนพื้นที่ไปจริงเยอะมาก ไม่ค่อยอยู่ในแพลนเที่ยวทั่วไป บางที่ของกินดี ราคาดี ฟีลจริงกว่าไนท์มาร์เก็ตดัง ๆ",
        "芭提雅有很多本地人常去的市集，不在常规行程里，往往比著名夜市更实惠、更地道。",
        "В Паттайе много рынков для местных — дешевле и аутентичнее знаменитых базаров.",
      ),
    ),
    badge: t(lang, L("Local secret", "ฟีล local จริง", "本地秘境", "Местный секрет")),
    markets: getHiddenMarkets(lang),
    picks: {
      title: t(lang, L("If you only pick one", "ถ้าเลือกลับแต่ควรไป", "只选一个", "Если выбрать один")),
      groups: [
        {
          title: t(lang, L("Food lovers", "สายกิน", "美食", "Еда")),
          pick: t(lang, L("Noen Plub Wan community market", "ตลาดชุมชนซอยเนินพลับหวาน", "暖普拉万社区市场", "Noen Plub Wan")),
        },
        {
          title: t(lang, L("Seafood", "สายซีฟู้ด", "海鲜", "Морепродукты")),
          pick: t(lang, L("Lan Pho Naklua market", "ตลาดลานโพธิ์นาเกลือ", "兰坡那库拉", "Lan Pho Naklua")),
        },
        {
          title: t(lang, L("Photos & local vibe", "สายฟีล local ถ่ายรูปสวย", "拍照与氛围", "Фото и атмосфера")),
          pick: t(lang, L("Naklua old town (early morning)", "ตลาดนาเกลือเก่า (เช้ามืด)", "那库拉老城清晨", "Naklua old town")),
        },
        {
          title: t(lang, L("Real Pattaya life", "อยากเห็นชีวิตคนพัทยาจริง", "真实本地生活", "Жизнь Паттайи")),
          pick: t(
            lang,
            L("Wat Chai Mongkhon morning market", "ตลาดวัดชัยมงคลตอนเช้า", "柴孟克寺早市", "Wat Chai Mongkhon"),
          ),
        },
      ],
    },
    localTips: {
      title: t(lang, L("Local tips", "ทริคแบบคนพื้นที่", "本地人贴士", "Советы местных")),
      items: [
        t(
          lang,
          L(
            "True local markets peak at dawn or after work — not at midday.",
            "ตลาด local จริง ๆ จะคึกคักเช้ามาก หรือเย็นหลังเลิกงาน",
            "真正的本地市集中在清晨或下班后。",
            "Пик — раннее утро или вечер после работы.",
          ),
        ),
        t(
          lang,
          L(
            "Lots of motorbikes parked outside usually means great food.",
            "ถ้าเห็นวินมอไซค์จอดเยอะ = ของกินอร่อย",
            "门口摩托车停很多 = 好吃。",
            "Много байков у входа — еда хорошая.",
          ),
        ),
        t(
          lang,
          L(
            "Long queues without English menus often mark the best stalls.",
            "ร้านที่คนต่อคิวเยอะ แต่ไม่มีป้ายอังกฤษ มักเด็ด",
            "排队多但没有英文招牌的摊位往往最好。",
            "Очередь без английского меню — хороший знак.",
          ),
        ),
        t(
          lang,
          L(
            "Cash still matters at many hidden markets — carry small notes.",
            "ตลาดลับหลายที่เงินสดยังสำคัญ — พกแบงก์ย่อย",
            "许多隐秘市场仍偏现金，备零钱。",
            "Наличные всё ещё важны — мелочь пригодится.",
          ),
        ),
      ],
    },
    labels: {
      openDaysLabel: t(lang, L("Open", "เปิดวัน", "开放", "Дни")),
      hoursRangeLabel: t(lang, L("Hours", "เวลา", "时间", "Часы")),
      bestTimeLabel: t(lang, L("Best time", "เหมาะสุด", "最佳时段", "Лучшее время")),
      highlightsLabel: t(lang, L("Highlights", "จุดเด่น", "亮点", "Особенности")),
      vibeLabel: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
      bestForLabel: t(lang, L("Best for", "เหมาะกับ", "适合", "Подходит")),
      foodsLabel: t(lang, L("Try", "ของน่ากิน", "推荐", "Попробуйте")),
      tipsLabel: t(lang, L("Tip", "เคล็ดลับ", "提示", "Совет")),
      openInMaps: t(
        lang,
        L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps"),
      ),
      directionsLabel: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    },
  };
}

export function getHiddenMarketsForMap(lang: LanguageCode) {
  return getHiddenMarkets(lang)
    .map((market) => {
      const pin = hiddenMapPins[market.id];
      if (!pin) return null;
      return { ...market, pin };
    })
    .filter((row): row is HiddenMarketItem & { pin: HiddenMarketMapPin } => row !== null);
}
