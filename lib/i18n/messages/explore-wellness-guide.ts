import type { LanguageCode } from "@/lib/i18n/languages";
import {
  wellnessGoogleMapsDirectionsHref,
  wellnessMapRouteHref,
  wellnessPinById,
  type WellnessPinId,
} from "@/lib/design/wellness-map";
import { getWellnessGuideImage } from "@/lib/design/wellness-guide-images";
import { L, t } from "@/lib/i18n/living-helpers";

export type WellnessGuideItem = {
  id: WellnessPinId;
  category: string;
  name: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  priceGuide: string;
  highlights: string[];
  vibe: string;
  bestFor: string;
  tips?: string;
  phone?: string;
  phoneHref?: string;
  websiteHref?: string;
  websiteLabel?: string;
  mapsHref: string;
  directionsHref: string;
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function telHref(number: string) {
  return `tel:${number.replace(/\s/g, "")}`;
}

function spa(
  id: WellnessPinId,
  maps: string,
  fields: {
    category: ReturnType<typeof L>;
    name: ReturnType<typeof L>;
    openDays: ReturnType<typeof L>;
    hoursRange: ReturnType<typeof L>;
    bestTimeOfDay: ReturnType<typeof L>;
    priceGuide: ReturnType<typeof L>;
    highlights: ReturnType<typeof L>[];
    vibe: ReturnType<typeof L>;
    bestFor: ReturnType<typeof L>;
    tips?: ReturnType<typeof L>;
    phone?: string;
    websiteHref?: string;
    websiteLabel?: ReturnType<typeof L>;
  },
) {
  const pin = wellnessPinById[id];
  return {
    id,
    mapsHref: mapsQuery(maps),
    directionsHref: wellnessGoogleMapsDirectionsHref(pin.lat, pin.lng),
    phoneHref: fields.phone ? telHref(fields.phone) : undefined,
    ...fields,
  };
}

const guideSpas = {
  "oasis-spa-jomtien": spa("oasis-spa-jomtien", "Oasis Spa Pattaya Jomtien Thappraya Road Thailand", {
    category: L("Luxury / resort vibe", "สายหรู / รีสอร์ต", "奢华度假感", "Люкс / курорт"),
    name: L("Oasis Spa (Jomtien)", "Oasis Spa (จอมเทียน)", "Oasis Spa（Jomtien）", "Oasis Spa Jomtien"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–22:00 (check branch)", "~10:00–22:00 (เช็กสาขา)", "约10:00–22:00（请查分店）", "~10:00–22:00"),
    bestTimeOfDay: L("Weekday afternoon", "บ่ายวันธรรมดา", "工作日下午", "Будни днём"),
    priceGuide: L("Mid–high · packages", "กลาง–สูง · มีแพ็กเกจ", "中高 · 套餐", "Средне–высоко"),
    highlights: [
      L("Aromatherapy", "อโรมาเธอราพี", "芳疗", "Ароматерапия"),
      L("Multi-hour packages", "แพ็กเกจหลายชั่วโมง", "多小时套餐", "Пакеты на несколько часов"),
      L("Beautiful treatment rooms", "ห้องทรีทเมนต์สวย", "护理房漂亮", "Красивые кабинеты"),
      L("Tropical calm", "สงบ กลิ่นหอมแบบทรอปิค", "热带静谧与香气", "Тропическое спокойствие"),
    ],
    vibe: L(
      "Popular with Thai and international guests who want a real spa day — feels like stepping out of noisy Pattaya.",
      "ดังในหมู่คนไทยและต่างชาติที่อยากสปาจริง — สงบ กลิ่นหอม เหมือนหลุดจากพัทยา",
      "泰籍与外籍客爱去的真 spa——安静、香气、像离开喧嚣的芭提雅。",
      "Настоящий spa-день вне шума Pattaya.",
    ),
    bestFor: L(
      "Couples, visiting parents, and anyone booking a proper rest day.",
      "คู่รัก พาผู้ใหญ่ วันพักจริงจัง",
      "情侣、带长辈、认真休息的一天。",
      "Пары и полноценный день отдыха.",
    ),
    phone: "+6638115888",
    websiteHref: "https://www.oasisspa.net/",
    websiteLabel: L("Oasis Spa", "Oasis Spa", "Oasis Spa", "Oasis Spa"),
  }),
  "cliff-spa-pattaya": spa("cliff-spa-pattaya", "Cliff Spa Royal Cliff Grand Hotel Pattaya Thailand", {
    category: L("Luxury / resort vibe", "สายหรู / รีสอร์ต", "奢华度假感", "Люкс / курорт"),
    name: L("Cliff Spa (Royal Cliff)", "Cliff Spa (Royal Cliff)", "Cliff Spa（Royal Cliff）", "Cliff Spa"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Hotel spa hours", "เวลาสปาโรงแรม", "酒店 spa 时段", "Часы отеля"),
    bestTimeOfDay: L("Late afternoon", "บ่ายแก่", "傍晚", "Вечер"),
    priceGuide: L("Premium", "พรีเมียม", "高端", "Премиум"),
    highlights: [
      L("Sea views", "วิวทะเล", "海景", "Вид на море"),
      L("Private feel", "เงียบ เป็นส่วนตัว", "私密安静", "Приватно"),
      L("Hotel-grade service", "บริการระดับโรงแรม", "酒店级服务", "Уровень отеля"),
      L("Award-winning spa wing", "สปาที่ได้รางวัล", "获奖 spa", "Награждённый spa"),
    ],
    vibe: L(
      "Adult, premium hotel spa on Pratumnak — maximum quiet and polish inside Royal Cliff.",
      "สปาโรงแรมผู้ใหญ่บนพระตำหนัก — เงียบและพรีเมียมสุดใน Royal Cliff",
      "Pratumnak 成人高端酒店 spa——Royal Cliff 内最安静精致。",
      "Премиум spa в Royal Cliff.",
    ),
    bestFor: L(
      "Special occasions, hotel guests, and spa lovers who want views with treatment.",
      "โอกาสพิเศษ แขกโรงแรม อยากนวดพร้อมวิว",
      "特殊场合、酒店住客、想要景观的护理。",
      "Особые случаи и вид на море.",
    ),
    phone: "+6638250421",
    websiteHref: "https://www.royalcliff.com/",
    websiteLabel: L("Royal Cliff", "Royal Cliff", "Royal Cliff", "Royal Cliff"),
  }),
  "yunomori-onsen": spa("yunomori-onsen", "Yunomori Onsen Spa Pattaya Thepprasit Road Thailand", {
    category: L("Japanese onsen", "สายออนเซ็นญี่ปุ่น", "日式温泉", "Онсэн"),
    name: L("Yunomori Onsen & Spa", "Yunomori Onsen & Spa", "Yunomori Onsen & Spa", "Yunomori"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–24:00", "~10:00–24:00", "约10:00–24:00", "~10:00–24:00"),
    bestTimeOfDay: L("Evening after sightseeing", "เย็นหลังเดินเที่ยว", "观光后的晚上", "Вечер после прогулок"),
    priceGuide: L("Mid–high · soak + massage", "กลาง–สูง · แช่ + นวด", "中高 · 泡汤+按摩", "Средне–высоко"),
    highlights: [
      L("Hot baths", "บ่อร้อน", "温泉池", "Горячие ванны"),
      L("Sauna & steam", "ซาวน่า & สตีม", "桑拿与蒸汽", "Сауна и пар"),
      L("Japanese atmosphere", "บรรยากาศญี่ปุ่น", "日式氛围", "Японский вайб"),
      L("Clean facilities", "สะอาด ครบ", "设施干净齐全", "Чисто и полно"),
    ],
    vibe: L(
      "Pattaya's benchmark onsen — soak first, massage after; ideal when your legs hurt from walking all day.",
      "ออนเซ็นตัวท็อปของพัทยา — แช่ก่อน นวดทีหลัง เหมาะเมื่อขาเมื่อยจากเดินทั้งวัน",
      "芭提雅标杆温泉——先泡后按；走一天腿酸时很适合。",
      "Эталон онсэна — ванны и массаж.",
    ),
    bestFor: L(
      "Families with older kids, couples, and recovery days between beach and nightlife.",
      "ครอบครัวเด็กโต คู่รัก วันพักฟื้นหลังเดินเที่ยว",
      "有大孩子的家庭、情侣、游玩与夜生活之间的恢复日。",
      "Восстановление после долгих прогулок.",
    ),
    phone: "+6622595778",
    websiteHref: "https://yunomorionsen.com/",
    websiteLabel: L("Yunomori", "Yunomori", "Yunomori", "Yunomori"),
  }),
  "lets-relax-onsen-pattaya": spa(
    "lets-relax-onsen-pattaya",
    "Let's Relax Onsen and Spa Grande Centre Point Space Pattaya Thailand",
    {
      category: L("Japanese onsen", "สายออนเซ็นญี่ปุ่น", "日式温泉", "Онсэн"),
      name: L("Let's Relax Onsen & Spa", "Let's Relax Onsen & Spa", "Let's Relax Onsen & Spa", "Let's Relax Onsen"),
      openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
      hoursRange: L("~10:00–22:00", "~10:00–22:00", "约10:00–22:00", "~10:00–22:00"),
      bestTimeOfDay: L("Sunset soak", "แช่ช่วงพระอาทิตย์ตก", "日落泡汤", "Закат"),
      priceGuide: L("Mid–high", "กลาง–สูง", "中高", "Средне–высоко"),
      highlights: [
        L("Sea-view onsen", "ออนเซ็นวิวทะเล", "海景温泉", "Онсэн с видом"),
        L("Modern & clean", "โมเดิร์น สะอาด", "现代干净", "Современно"),
        L("Photo-friendly", "ถ่ายรูปสวย", "适合拍照", "Для фото"),
        L("Hotel rooftop setting", "บนโรงแรม Grande Centre Point", "Grande Centre Point 楼顶", "На крыше отеля"),
      ],
      vibe: L(
        "Rare seaside onsen in Thailand — polished, bright, and easy for first-time onsen visitors.",
        "ออนเซ็นริมทะเลที่หาไม่บ่อย — โมเดิร์น สะอาด เหมาะคนลองครั้งแรก",
        "泰国少有的海滨温泉——明亮精致，适合初次体验。",
        "Онсэн с видом на море — редкость для Таиланда.",
      ),
      bestFor: L(
        "Instagram-minded guests who still want a serious soak and massage menu.",
        "อยากสวยในรูป แต่ยังอยากแช่และนวดจริงจัง",
        "想要出片又认真泡汤按摩的客人。",
        "Красиво и по делу.",
      ),
      phone: "+6633266145",
      websiteHref: "https://www.letsrelaxspa.com/",
      websiteLabel: L("Let's Relax", "Let's Relax", "Let's Relax", "Let's Relax"),
    },
  ),
  "health-land-sukhumvit": spa(
    "health-land-sukhumvit",
    "Health Land Spa Massage Pattaya Sukhumvit Road Thailand",
    {
      category: L("Serious massage / value", "สายนวดดี ราคาสมเหตุ", "正经按摩/性价比", "Массаж"),
      name: L("Health Land (Sukhumvit Rd)", "Health Land (ถ.สุขุมวิท)", "Health Land（Sukhumvit）", "Health Land"),
      openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
      hoursRange: L("~09:00–23:00", "~09:00–23:00", "约9:00–23:00", "~09:00–23:00"),
      bestTimeOfDay: L("Weekday lunch", "มื้อเที่ยงวันธรรมดา", "工作日午餐时段", "Обед в будни"),
      priceGuide: L("Mid · consistent", "กลาง · มาตรฐานคงที่", "中等 · 稳定", "Средне"),
      highlights: [
        L("Thai massage", "นวดไทย", "泰式按摩", "Тайский массаж"),
        L("Foot spa", "สปาเท้า", "足疗", "Для ног"),
        L("Easy booking", "จองง่าย", "易预约", "Бронь"),
        L("Large therapist team", "หมอนวดเยอะ", "理疗师多", "Много мастеров"),
      ],
      vibe: L(
        "The Pattaya classic chain — predictable quality, clean rooms, trusted for office-sore backs.",
        "เครือคลาสสิกของพัทยา — มาตรฐานคงที่ สะอาด ไว้ใจเรื่องออฟฟิศซินโดรม",
        "芭提雅经典连锁——品质稳定、干净、办公室肩颈首选。",
        "Классическая сеть — предсказуемо.",
      ),
      bestFor: L(
        "Regular massage, foot recovery, and families who want a safe branded option.",
        "นวดประจำ แก้เท้าเมื่อย ครอบครัวที่อยากแบรนด์ชัด",
        "常规按摩、足部恢复、要靠谱连锁的家庭。",
        "Семьи и регулярный массаж.",
      ),
      phone: "+6638412995",
      websiteHref: "https://www.healthlandspa.com/",
      websiteLabel: L("Health Land", "Health Land", "Health Land", "Health Land"),
    },
  ),
  "tea-tree-spa": spa("tea-tree-spa", "Tea Tree Spa Pattaya Sai 1 Thailand", {
    category: L("Serious massage / value", "สายนวดดี ราคาสมเหตุ", "正经按摩/性价比", "Массаж"),
    name: L("Tea Tree Spa", "Tea Tree Spa", "Tea Tree Spa", "Tea Tree Spa"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–22:00", "~10:00–22:00", "约10:00–22:00", "~10:00–22:00"),
    bestTimeOfDay: L("Afternoon", "บ่าย", "下午", "Днём"),
    priceGuide: L("Mid", "กลาง", "中等", "Средне"),
    highlights: [
      L("Oil massage", "นวดน้ำมัน", "精油按摩", "Масло"),
      L("Modern interiors", "ออกแบบโมเดิร์น", "现代内装", "Современный дизайн"),
      L("Quiet rooms", "ห้องเงียบ", "安静房间", "Тихо"),
      L("Popular with women", "ผู้หญิงชอบเยอะ", "女性客人多", "Популярно у женщин"),
    ],
    vibe: L(
      "Aesthetic day spa in central Pattaya — calm, pretty, and good for a slow relaxing afternoon.",
      "สปาบรรยากาศสวยกลางเมือง — เงียบ สวย เหมาะบ่ายชิล",
      "市中心有美感的水疗——安静漂亮，适合悠闲下午。",
      "Эстетичный day spa.",
    ),
    bestFor: L(
      "Oil massage days, solo reset, and guests who care about room design.",
      "นวดน้ำมัน มาคนเดียวพักใจ สายชอบห้องสวย",
      "精油日、独自放松、在意空间设计的人。",
      "Релакс и красивые комнаты.",
    ),
    phone: "+6638725555",
    websiteHref: "https://www.teatreespattaya.com/",
    websiteLabel: L("Tea Tree", "Tea Tree", "Tea Tree", "Tea Tree"),
  }),
  "pra-nita-spa": spa("pra-nita-spa", "Pra Ni Ta Massage Spa Pattaya Nongprue Thailand", {
    category: L("Local hidden gem", "สายท้องถิ่น / จุดลับ", "本地秘境", "Местное"),
    name: L("Pra Ni Ta Massage & Spa", "ปราณิตา นวดไทย & สปา", "Pra Ni Ta Massage & Spa", "Pra Ni Ta"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Often until late", "มักเปิดดึก", "常营业至较晚", "До позднего"),
    bestTimeOfDay: L("Late evening", "เย็นดึก", "深夜", "Поздний вечер"),
    priceGuide: L("Budget–mid", "ไม่แพง", "实惠", "Бюджет"),
    highlights: [
      L("Strong Thai massage", "นวดไทยดี", "泰式按摩好", "Хороший тайский"),
      L("Late hours", "เปิดดึก", "营业晚", "Поздно"),
      L("Local regulars", "คนพัทยาไปจริง", "本地人常去", "Местные"),
      L("Fair prices", "ราคาไม่แรง", "价格公道", "Честные цены"),
    ],
    vibe: L(
      "Where Pattaya residents go — no tourist brochure gloss, just solid massage and late-night flexibility.",
      "ที่คนอยู่พัทยาไป — ไม่หรูตามโบรชัวร์ แต่นวดดี เปิดดึก",
      "芭提雅居民会去的地方——不华丽但按摩实在、晚间也开。",
      "Для местных, без глянца.",
    ),
    bestFor: L(
      "Night owls, budget-conscious guests, and authentic Thai massage fans.",
      "สายดึก งบไม่เยอะ ชอบนวดไทยจริงๆ",
      "夜猫子、预算有限、真爱泰式按摩。",
      "Поздно и недорого.",
    ),
    phone: "+66951961666",
  }),
  "thai-sabai-massage": spa(
    "thai-sabai-massage",
    "Thai Sabai Massage 219 Nongprue Pattaya Sukhumvit Road Thailand",
    {
      category: L("Local hidden gem", "สายท้องถิ่น / จุดลับ", "本地秘境", "Местное"),
      name: L("Thai Sabai Massage", "ไทยสบาย มาสสาจ", "Thai Sabai Massage", "Thai Sabai"),
      openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
      hoursRange: L("~09:00–02:00", "~09:00–02:00", "约9:00–2:00", "~09:00–02:00"),
      bestTimeOfDay: L(
        "Late evening after sightseeing",
        "เย็นดึกหลังเดินเที่ยวเมื่อย",
        "游玩后深夜",
        "Поздний вечер",
      ),
      priceGuide: L("Fair · not expensive", "ราคาค่อนข้างโอเค", "价格公道", "Нормальные цены"),
      highlights: [
        L("Thai massage", "นวดไทย", "泰式按摩", "Тайский массаж"),
        L("Foot massage", "นวดเท้า", "足疗", "Для ног"),
        L("Office syndrome relief", "แก้ออฟฟิศซินโดรม", "缓解久坐酸痛", "Офисная спина"),
        L("Reasonable prices", "ราคาไม่แพง", "价格合适", "Доступно"),
      ],
      vibe: L(
        "Central Pattaya (Nongprue) — not beachfront, but easy by car or Grab. Local, clean, not flashy; focuses on real massage and draws plenty of Thai regulars.",
        "โซนพัทยากลาง แถวหนองปรือ — ไม่ติดทะเล แต่ Grab/รถสะดวก บรรยากาศท้องถิ่น สะอาด ไม่หรู เน้นนวดจริง คนไทยใช้เยอะ",
        "芭提雅中央那库鲁阿区——不临海但 Grab/开车方便；本地、干净、不奢华，专注按摩，泰国常客多。",
        "Центр Pattaya, Nongprue — не у моря, но Grab удобен; местно и по делу.",
      ),
      bestFor: L(
        "Near Pattaya Central and Sukhumvit Road — local shops and stays around; ideal when you are sore after walking and want a late session.",
        "ใกล้ Pattaya Central ไม่ไกลถนนสุขุมวิท มีร้านท้องถิ่นและที่พักรอบๆ เหมาะเมื่อยแล้วอยากนวดดึก",
        "近 Pattaya Central 与 Sukhumvit 路——周边本地店与住宿多；走累后想深夜按摩的人。",
        "После прогулок — поздний визит.",
      ),
      tips: L(
        "Evenings and weekends: Bolt or Grab is easier than finding parking — spaces can be limited.",
        "เย็นหรือวันหยุด: Bolt/Grab สะดวกกว่า ที่จอดรถอาจไม่เยอะ",
        "傍晚或周末：Bolt/Grab 比找停车位方便——车位可能不多。",
        "Вечером удобнее Grab — парковка ограничена.",
      ),
      phone: "+66984688701",
    },
  ),
} as const;

const spaOrder: WellnessPinId[] = [
  "oasis-spa-jomtien",
  "cliff-spa-pattaya",
  "yunomori-onsen",
  "lets-relax-onsen-pattaya",
  "health-land-sukhumvit",
  "tea-tree-spa",
  "pra-nita-spa",
  "thai-sabai-massage",
];

function resolveSpa(lang: LanguageCode, key: WellnessPinId): WellnessGuideItem {
  const raw = guideSpas[key];
  return {
    id: raw.id,
    category: t(lang, raw.category),
    name: t(lang, raw.name),
    openDays: t(lang, raw.openDays),
    hoursRange: t(lang, raw.hoursRange),
    bestTimeOfDay: t(lang, raw.bestTimeOfDay),
    priceGuide: t(lang, raw.priceGuide),
    highlights: raw.highlights.map((h) => t(lang, h)),
    vibe: t(lang, raw.vibe),
    bestFor: t(lang, raw.bestFor),
    tips: raw.tips ? t(lang, raw.tips) : undefined,
    phone: raw.phone,
    phoneHref: raw.phoneHref,
    websiteHref: raw.websiteHref,
    websiteLabel: raw.websiteLabel ? t(lang, raw.websiteLabel) : undefined,
    mapsHref: raw.mapsHref,
    directionsHref: raw.directionsHref,
  };
}

export function getWellnessGuideItems(lang: LanguageCode): WellnessGuideItem[] {
  return spaOrder.map((key) => resolveSpa(lang, key));
}

export function getWellnessSpasForMap(lang: LanguageCode) {
  return getWellnessGuideItems(lang).map((item) => ({
    id: item.id,
    name: item.name,
    hoursRange: item.hoursRange,
    openDays: item.openDays,
    mapsHref: item.mapsHref,
    directionsHref: item.directionsHref,
    pin: wellnessPinById[item.id],
  }));
}

export function getWellnessMapCopy(lang: LanguageCode) {
  return {
    title: t(lang, L("Spa & massage map", "แผนที่สปา & นวด", "水疗按摩地图", "Карта spa")),
    subtitle: t(
      lang,
      L(
        "Eight picks by vibe — tap a pin for directions.",
        "8 ร้านแยกตามสาย — แตะหมุดดูเส้นทาง",
        "按类型精选八家——点击图钉导航。",
        "8 мест — нажмите на метку для маршрута.",
      ),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open place", "เปิดสถานที่", "打开地点", "Открыть")),
    openRoute: t(
      lang,
      L("Open suggested route in Maps", "เปิดเส้นทางแนะนำใน Maps", "在地图中打开推荐路线", "Маршрут в Maps"),
    ),
    openRouteHref: wellnessMapRouteHref,
    legendGuide: t(lang, L("8 spas", "8 ร้าน", "8 家", "8 spa")),
  };
}

export function getWellnessGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("Choose your spa line", "เลือกสายสปา & นวด", "选择水疗类型", "Выберите тип spa"),
    ),
    body: t(
      lang,
      L(
        "Pattaya mixes local massage shops, luxury resort spas, Japanese onsen, aromatherapy, rooftop soaks, and serious recovery chains — each with a different vibe. Below: eight trusted picks to compare.",
        "พัทยามีทั้งร้านนวดท้องถิ่น สปาหรู ออนเซ็นญี่ปุ่น อโรมาเธอราพี แช่บนดาดฟ้า และเครือมาตรฐาน — แต่ละที่บรรยากาศต่างกัน ด้านล่างคือ 8 ร้านที่แนะนำให้เทียบแล้วเลือก",
        "芭提雅有本地按摩、奢华度假 spa、日式温泉、芳疗、屋顶泡汤与正规连锁——气质各异。下列八家精选供对比选择。",
        "8 проверенных мест — сравните и выберите.",
      ),
    ),
    pillars: [
      t(lang, L("Local shops with fair prices", "ร้านท้องถิ่น ราคาดี", "本地店价格实惠", "Местные цены")),
      t(lang, L("Luxury & hotel spas", "สปาหรูและสปาในโรงแรม", "奢华与酒店 spa", "Люкс и отели")),
      t(lang, L("Onsen & aromatherapy", "ออนเซ็นและอโรมาเธอราพี", "温泉与芳疗", "Онсэн и ароматы")),
      t(lang, L("Recovery & family-safe chains", "เครือฟื้นตัวและปลอดภัยสำหรับครอบครัว", "恢复与家庭友好连锁", "Семьи и recovery")),
    ],
    sourceNote: t(
      lang,
      L(
        "Hours and menus change — confirm on Google Maps or call ahead.",
        "เวลาและเมนูเปลี่ยนได้ — เช็กก่อนไปหรือโทรถาม",
        "时间与项目会变——请查地图或致电确认。",
        "Уточняйте часы и меню в Maps или по телефону.",
      ),
    ),
    openInMaps: t(
      lang,
      L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps"),
    ),
    directionsLabel: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    phoneLabel: t(lang, L("Phone", "โทร", "电话", "Телефон")),
    websiteLabel: t(lang, L("Website", "เว็บไซต์", "网站", "Сайт")),
    highlightsLabel: t(lang, L("Highlights", "จุดเด่น", "亮点", "Особенности")),
    vibeLabel: t(lang, L("Atmosphere", "บรรยากาศ", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Good fit if", "เหมาะกับ", "适合", "Кому")),
    priceGuideLabel: t(lang, L("Price guide", "ราคาคร่าวๆ", "参考价", "Цены")),
    tipsLabel: t(lang, L("Note", "หมายเหตุ", "提示", "Совет")),
    openDaysLabel: t(lang, L("Access", "การเข้าถึง", "开放", "Доступ")),
    hoursRangeLabel: t(lang, L("Hours", "เวลาโดยประมาณ", "时间", "Часы")),
    bestTimeLabel: t(lang, L("Best time", "ช่วงเวลาที่เหมาะ", "最佳时段", "Когда")),
  };
}

export function getWellnessMoodPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("Pick by mood", "เลือกตามอารมณ์", "按心情选", "По настроению")),
    subtitle: t(
      lang,
      L("Jump to a spa card below.", "แตะไปการ์ดด้านล่าง", "跳转到下方卡片。", "К карточке ниже."),
    ),
    groups: [
      {
        title: t(lang, L("Real rest day", "อยากพักจริง", "认真休息", "Отдых")),
        pick: t(lang, L("Oasis / Cliff Spa", "โอเอซิส / คลิฟฟ์ สปา", "Oasis / Cliff", "Oasis / Cliff")),
        spaId: "oasis-spa-jomtien" as const,
      },
      {
        title: t(lang, L("Onsen soak", "อยากแช่ออนเซ็น", "想泡温泉", "Онсэн")),
        pick: t(
          lang,
          L(
            "Yunomori / Let's Relax Onsen",
            "ยูโนโมริ / เล็ตส์ รีแล็กซ์ ออนเซ็น",
            "Yunomori / Let's Relax",
            "Yunomori",
          ),
        ),
        spaId: "yunomori-onsen" as const,
      },
      {
        title: t(lang, L("Sore body", "ปวดตัวหนัก", "身体酸痛", "Боли в теле")),
        pick: t(lang, L("Health Land", "เฮลธ์แลนด์", "Health Land", "Health Land")),
        spaId: "health-land-sukhumvit" as const,
      },
      {
        title: t(lang, L("Hidden local", "ร้านท้องถิ่นที่ซ่อนอยู่", "本地秘境", "Местное")),
        pick: t(lang, L("Pra Ni Ta / Thai Sabai", "ปราณิตา / ไทยสบาย", "Pra Ni Ta / Thai Sabai", "Pra Ni Ta")),
        spaId: "pra-nita-spa" as const,
      },
      {
        title: t(lang, L("Aesthetic spa", "อยากบรรยากาศสวย", "氛围感", "Эстетика")),
        pick: t(lang, L("Tea Tree Spa", "ทีทรี สปา", "Tea Tree", "Tea Tree")),
        spaId: "tea-tree-spa" as const,
      },
      {
        title: t(lang, L("Family-friendly", "พาครอบครัว", "适合家庭", "С семьёй")),
        pick: t(
          lang,
          L(
            "Oasis / Health Land / Yunomori",
            "โอเอซิส / เฮลธ์แลนด์ / ยูโนโมริ",
            "三家连锁",
            "Три варианта",
          ),
        ),
        spaId: "oasis-spa-jomtien" as const,
      },
    ],
  };
}

export function getWellnessFamilyNote(lang: LanguageCode) {
  return {
    title: t(lang, L("With family", "พาครอบครัว", "与家人同行", "С семьёй")),
    body: t(
      lang,
      L(
        "Safest starting points: Oasis Spa (Jomtien), Health Land (Sukhumvit), and Yunomori Onsen — clean, professional, and suitable for adults and older teens. Confirm age rules for onsen with the venue.",
        "จุดเริ่มที่ปลอดภัย: โอเอซิส สปา จอมเทียน เฮลธ์แลนด์ ถ.สุขุมวิท และยูโนโมริ — สะอาด มืออาชีพ เหมาะผู้ใหญ่และวัยรุ่นโต ควรถามกฎอายุออนเซ็นที่ร้าน",
        "较稳妥选择：Oasis（Jomtien）、Health Land（Sukhumvit）、Yunomori——干净专业，适合成人和较大青少年；温泉年龄规则请向场馆确认。",
        "Для семьи: Oasis, Health Land, Yunomori — уточните возраст для онсэна.",
      ),
    ),
  };
}

export function getWellnessSafetyNote(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("Choose real wellness", "เลือกร้านเพื่อสุขภาพจริง", "选择真正的康养店", "Настоящий wellness"),
    ),
    body: t(
      lang,
      L(
        "Pattaya has many massage storefront types. For genuine spa, onsen, or therapeutic massage, stick to hotel spas, onsen venues, day spas, and established chains like those listed above — clearer menus and safer expectations.",
        "พัทยามีร้านนวดหลายแบบ ถ้าอยากได้สปา ออนเซ็น หรือนวดจริงจัง ให้เลือกสปาโรงแรม ออนเซ็น สปาเดย์แพ็ก หรือเครือมาตรฐานแบบในลิสต์ — เมนูชัดและคาดหวังได้",
        "芭提雅按摩店类型很多。若要真正的 spa、温泉或理疗，优先酒店 spa、温泉场馆、day spa 与上述连锁——菜单清晰、预期更安全。",
        "Для настоящего spa выбирайте отели, онсэны и сети из списка.",
      ),
    ),
  };
}

export { getWellnessGuideImage };
