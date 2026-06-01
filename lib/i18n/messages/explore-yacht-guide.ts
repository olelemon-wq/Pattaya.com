import type { LanguageCode } from "@/lib/i18n/languages";
import {
  yachtCharterPinById,
  yachtChartersMapOpenHref,
  yachtGoogleMapsDirectionsHref,
  type YachtCharterPinId,
} from "@/lib/design/yacht-charter-map";
import { getYachtCharterGuideImage } from "@/lib/design/yacht-charter-guide-images";
import { L, t } from "@/lib/i18n/living-helpers";

export type YachtCharterGuideItem = {
  id: YachtCharterPinId;
  name: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  priceGuide: string;
  highlights: string[];
  vibe: string;
  bestFor: string;
  tips?: string;
  mapsHref: string;
  directionsHref: string;
  phoneLabel?: string;
  phoneHref?: string;
};

export type YachtCharterCategory = {
  id: string;
  title: string;
  subtitle: string;
  charters: YachtCharterGuideItem[];
};

export type YachtQuickRow = {
  id: YachtCharterPinId;
  name: string;
  styleCompact: string;
  priceCompact: string;
  bestTimeOfDay: string;
  scheduleVibe: string;
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function charter(
  id: YachtCharterPinId,
  maps: string,
  fields: {
    name: ReturnType<typeof L>;
    openDays: ReturnType<typeof L>;
    hoursRange: ReturnType<typeof L>;
    bestTimeOfDay: ReturnType<typeof L>;
    priceGuide: ReturnType<typeof L>;
    styleCompact?: ReturnType<typeof L>;
    highlights: ReturnType<typeof L>[];
    vibe: ReturnType<typeof L>;
    bestFor: ReturnType<typeof L>;
    tips?: ReturnType<typeof L>;
    phone?: string;
  },
) {
  const pin = yachtCharterPinById[id];
  return {
    id,
    mapsHref: mapsQuery(maps),
    directionsHref: yachtGoogleMapsDirectionsHref(pin.lat, pin.lng),
    phoneHref: fields.phone ? `tel:${fields.phone.replace(/\s/g, "")}` : undefined,
    ...fields,
  };
}

const guideCharters = {
  "pattaya-yacht-charters": charter(
    "pattaya-yacht-charters",
    "Pattaya Yacht Charters Ocean Marina Na Jomtien Thailand",
    {
      name: L("Pattaya Yacht Charters", "Pattaya Yacht Charters", "Pattaya Yacht Charters", "Pattaya Yacht Charters"),
      openDays: L("By appointment", "นัดล่วงหน้า", "需预约", "По записи"),
      hoursRange: L("Half / full day · sunset", "half / full day · sunset", "半日/全日 · 日落", "Полдня / день · закат"),
      bestTimeOfDay: L("Family · sunset", "ครอบครัว · sunset", "亲子 · 日落", "Семья · закат"),
      priceGuide: L("Catamaran ~15,000–40,000 THB", "คาตามารัน ~15,000–40,000 บาท", "双体船约1.5–4万泰铢", "Катамаран ~15–40 тыс."),
      styleCompact: L("Family chill", "ครอบครัวชิล", "亲子轻松", "Семья"),
      highlights: [
        L("Half & full day", "half & full day", "半日/全日", "Полдня / день"),
        L("Sunset cruise", "sunset cruise", "日落巡航", "Закат"),
        L("Koh Larn & island hops", "เกาะล้าน & island hopping", "格兰岛跳岛", "Ko Larn"),
        L("Crew, food, snorkel gear", "crew อาหาร อุปกรณ์ดำน้ำ", "船员、餐食、浮潜装备", "Экипаж, еда, сноркел"),
      ],
      vibe: L(
        "Top pick for families with kids — private, comfortable, trips tailored to headcount and budget.",
        "เหมาะมากพาครอบครัวมีเด็ก — private สบาย ปรับทริปตามจำนวนคนและงบ",
        "带娃家庭首选——私密舒适，可按人数与预算定制。",
        "Лучший выбор для семей с детьми.",
      ),
      bestFor: L(
        "Parents who want crew support, food on board, and calm catamaran decks.",
        "พ่อแม่ที่อยากได้ crew ดูแล มีอาหาร ดาดฟ้าคาตามารันกว้าง",
        "需要船员照料、船上餐饮、宽敞双体船甲板的家庭。",
        "С crew и едой на борту.",
      ),
      tips: L(
        "They note trips are flexible by group size and budget — confirm inclusions before paying.",
        "เว็บระบุปรับทริปตามจำนวนคนและงบ — ยืนยันสิ่งที่รวมก่อนจ่าย",
        "官网称可按人数与预算调整——付款前确认包含项目。",
        "Уточните, что входит в цену.",
      ),
      phone: "+66876457771",
    },
  ),
  "we-charters": charter("we-charters", "WE Charters Thailand Ocean Marina Pattaya", {
    name: L("WE Charters Thailand", "WE Charters Thailand", "WE Charters Thailand", "WE Charters"),
    openDays: L("By appointment", "นัดล่วงหน้า", "需预约", "По записи"),
    hoursRange: L("Full day · events", "เต็มวัน · งานพิเศษ", "全日 · 活动", "День · ивенты"),
    bestTimeOfDay: L("Celebrations", "งานฉลอง", "庆典", "Праздники"),
    priceGuide: L("Luxury ~40,000–200,000+ THB", "luxury ~40,000–200,000+ บาท", "豪华约4–20万+泰铢", "Luxury 40k+"),
    styleCompact: L("Premium", "พรีเมียม", "高端", "Premium"),
    highlights: [
      L("Catering", "catering", "餐饮", "Кейтеринг"),
      L("Snorkeling & island routes", "ดำน้ำ & เส้นทางเกาะ", "浮潜与跳岛", "Сноркелинг"),
      L("Sunset dinner", "sunset dinner", "日落晚餐", "Ужин на закате"),
      L("Highly customizable", "ปรับแต่งละเอียด", "高度定制", "Кастомизация"),
    ],
    vibe: L(
      "True premium line — big groups, birthdays, anniversaries, and corporate days.",
      "สาย premium จริง — ครอบครัวใหญ่ วันเกิด ครบรอบ งานบริษัท",
      "真正高端线——大家庭、生日、纪念日、企业活动。",
      "Премиум для больших групп и ивентов.",
    ),
    bestFor: L(
      "When you want white-glove catering and a fully bespoke itinerary.",
      "เมื่ออยากได้ catering ครบ และแผนละเอียด",
      "想要全套餐饮与完全定制行程时。",
      "Полный кастом и кейтеринг.",
    ),
    tips: L(
      "Many luxury charters customize menus, timing, and add-ons in detail — get it in writing.",
      "charter หรูปรับเมนู เวลา add-on ละเอียด — ให้เป็นลายลักษณ์",
      "豪华包船可细调菜单与时间——务必书面确认。",
      "Всё письменно.",
    ),
    phone: "+66611734421",
  }),
  "manta-marina": charter("manta-marina", "Manta Marina Pattaya Beach Road Thailand", {
    name: L(
      "Manta Marina Pattaya",
      "Manta Marina Pattaya",
      "Manta Marina Pattaya",
      "Manta Marina",
    ),
    openDays: L("By appointment", "นัดล่วงหน้า", "需预约", "По записи"),
    hoursRange: L("Speedboat & catamaran", "speedboat & catamaran", "快艇与双体船", "Катер и катамаран"),
    bestTimeOfDay: L("Active · photos", "active · ถ่ายรูป", "动感 · 拍照", "Активно"),
    priceGuide: L("Speedboat ~5,000–15,000+ THB", "speedboat ~5,000–15,000+ บาท", "快艇约5千–1.5万+泰铢", "Speedboat 5k+"),
    styleCompact: L("Youth & activity", "วัยรุ่น activity", "青年动感", "Активно"),
    highlights: [
      L("Catamaran & speedboat", "catamaran & speedboat", "双体船与快艇", "Катамаран и катер"),
      L("Lots of activities", "activity เยอะ", "活动多", "Много активностей"),
      L("Photo-friendly", "ถ่ายรูปสวย", "适合拍照", "Для фото"),
    ],
    vibe: L(
      "Younger, busier energy — great when teens want action and Instagram-worthy shots.",
      "ฟีลวัยรุ่น activity เยอะ — เด็กโตชอบ",
      "更年轻、更有活力——适合青少年想要刺激与出片。",
      "Для подростков и активного отдыха.",
    ),
    bestFor: L(
      "Families with older kids who want speedboats, toys, and a livelier deck.",
      "ครอบครัวเด็กโต อยาก speedboat ของเล่นบนเรือ",
      "孩子较大、想要快艇与船上活动的家庭。",
      "Старшие дети и активность.",
    ),
    phone: "+66942639422",
  }),
  sailbreeze: charter("sailbreeze", "SailBreeze Yacht Charter Ocean Marina Pattaya Thailand", {
    name: L(
      "SailBreeze Yacht Charter",
      "SailBreeze Yacht Charter",
      "SailBreeze Yacht Charter",
      "SailBreeze",
    ),
    openDays: L("By appointment", "นัดล่วงหน้า", "需预约", "По записи"),
    hoursRange: L("Sailing · snorkel days", "ล่องใบ · ดำน้ำ", "帆船 · 浮潜日", "Парус · сноркел"),
    bestTimeOfDay: L("Morning · sunset", "เช้า · sunset", "早上 · 日落", "Утро · закат"),
    priceGuide: L("Mid-range · varies", "กลาง ๆ · แล้วแต่", "中档 · 视行程", "Средний сегмент"),
    styleCompact: L("Chill sail", "ชิลล่องใบ", "帆船悠闲", "Парус"),
    highlights: [
      L("Sailing yacht", "sailing yacht", "帆船", "Парусная яхта"),
      L("Snorkeling", "snorkeling", "浮潜", "Сноркелинг"),
      L("Slow-life sunset", "slow life · sunset", "慢生活日落", "Закат без суеты"),
    ],
    vibe: L(
      "Quieter than party boats — sailing feel, snorkeling, and relaxed sunsets.",
      "สงบกว่า party yacht — ล่องใบ ดำน้ำ sunset ชิล",
      "比派对船安静——帆船感、浮潜、悠闲日落。",
      "Спокойнее party-yacht.",
    ),
    bestFor: L(
      "Families, older guests, and anyone who dislikes loud music on deck.",
      "ครอบครัว ผู้ใหญ่ คนไม่ชอบเสียงดัง",
      "家庭、长辈、不喜欢甲板吵闹音乐的人。",
      "Семья и те, кто не любит шум.",
    ),
    phone: "+66823208506",
  }),
  "blue-voyage": charter("blue-voyage", "Blue Voyage Yachting Pattaya Ocean Marina Thailand", {
    name: L(
      "Blue Voyage Yachting Pattaya",
      "Blue Voyage Yachting Pattaya",
      "Blue Voyage Yachting",
      "Blue Voyage",
    ),
    openDays: L("By appointment", "นัดล่วงหน้า", "需预约", "По записи"),
    hoursRange: L("Special events", "งานพิเศษ", "特别活动", "Ивенты"),
    bestTimeOfDay: L("Sunset · celebrations", "sunset · ฉลอง", "日落 · 庆典", "Закат · праздник"),
    priceGuide: L("Varies by boat & menu", "แล้วแต่เรือ & เมนู", "因船与菜单而异", "По лодке и меню"),
    styleCompact: L("Special day", "วันพิเศษ", "特别日子", "Особый день"),
    highlights: [
      L("Birthdays & proposals", "วันเกิด & ขอแต่งงาน", "生日与求婚", "Дни рождения"),
      L("Family parties", "ปาร์ตี้ครอบครัว", "家庭派对", "Семейные вечеринки"),
      L("Sunset dinner & private BBQ", "sunset dinner & BBQ", "日落晚餐与烧烤", "BBQ на закате"),
    ],
    vibe: L(
      "Popular locally for milestone trips — birthdays, proposals, and private celebrations.",
      "คนไทยใช้กันเยอะสำหรับวันพิเศษ",
      "本地人常选——生日、求婚与私人庆祝。",
      "Популярен для особых дат.",
    ),
    bestFor: L(
      "When the trip itself is the event, not just transport to an island.",
      "เมื่อทริปคืองานฉลอง ไม่ใช่แค่พาไปเกาะ",
      "当行程本身就是庆典，而不只是去岛上的交通。",
      "Когда чартер = праздник.",
    ),
    phone: "+66868265656",
  }),
  "best-yacht-club": charter("best-yacht-club", "The Best Yacht Club Pattaya Thailand", {
    name: L(
      "The Best Yacht Club",
      "The Best Yacht Club",
      "The Best Yacht Club",
      "Best Yacht Club",
    ),
    openDays: L("By appointment", "นัดล่วงหน้า", "需预约", "По записи"),
    hoursRange: L("Pattaya · Phuket fleets", "พัทยา · ภูเก็ต", "芭提雅 · 普吉船队", "Паттайя · Пхукет"),
    bestTimeOfDay: L("Events · sunset", "งาน · sunset", "活动 · 日落", "Ивенты"),
    priceGuide: L("Varies · premium options", "แล้วแต่ · ตัวเลือกหรู", "视豪华选项而定", "Премиум опции"),
    styleCompact: L("Events", "งานพิเศษ", "活动", "Ивенты"),
    highlights: [
      L("Birthday & proposal setups", "จัดวันเกิด ขอแต่งงาน", "生日求婚布置", "Праздники"),
      L("Sunset dinner", "sunset dinner", "日落晚餐", "Ужин"),
      L("Private BBQ", "BBQ ส่วนตัว", "私人烧烤", "BBQ"),
    ],
    vibe: L(
      "Another go-to for special-day charters — compare quotes with Blue Voyage for your date.",
      "อีกเจ้าที่คนใช้จัดวันพิเศษ — เทียบราคากับ Blue Voyage",
      "另一个特殊日子常用选择——可与 Blue Voyage 比价。",
      "Сравните с Blue Voyage.",
    ),
    bestFor: L(
      "Groups planning a one-off celebration with catering and décor.",
      "กลุ่มจัดฉลองครั้งเดียว พร้อมอาหาร",
      "一次性庆祝、需要餐饮布置的团体。",
      "Разовые праздники с кейтерингом.",
    ),
    phone: "+66996239969",
  }),
  "ocean-marina": charter("ocean-marina", "Ocean Marina Yacht Club Pattaya Thailand", {
    name: L("Ocean Marina Yacht Club", "Ocean Marina Yacht Club", "Ocean Marina", "Ocean Marina"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Office ~08:00–17:00", "สำนักงาน ~08:00–17:00", "办公约8–17点", "Офис ~8–17"),
    bestTimeOfDay: L("Morning departures", "ออกเช้า", "早上出发", "Утром"),
    priceGuide: L("Berths · charters vary", "ท่าจอด · เช่าเรือต่างกัน", "泊位 · 包船各异", "Причал"),
    styleCompact: L("Main hub", "ฮับหลัก", "主枢纽", "Хаб"),
    highlights: [
      L("Deep-water marina", "ท่าน้ำลึก", "深水码头", "Глубокая марина"),
      L("Most private charters start here", "เรือเช่าส่วนใหญ่ออกจากที่นี่", "多数包船由此出发", "Старт чартеров"),
      L("Fuel & provisioning", "น้ำมัน & เติมเสบียง", "加油与补给", "Топливо"),
    ],
    vibe: L(
      "The main yacht hub south of Pattaya — where most operators base, not Bali Hai ferries.",
      "ฮับยอชต์หลักใต้พัทยา — operator ส่วนใหญ่อยู่ที่นี่ ไม่ใช่เรือโดยสารบาลีไฮ",
      "芭提雅南侧主要游艇枢纽——多数运营商在此，不是 Bali Hai 渡轮。",
      "Главная марина — не Bali Hai.",
    ),
    bestFor: L(
      "Meeting your charter, checking the boat, and planning a multi-hour departure.",
      "เจอ operator เช็คเรือ ก่อนออกทริปหลายชม.",
      "与运营商会合、看船、规划数小时行程。",
      "Встреча с оператором и осмотр лодки.",
    ),
    tips: L(
      "Arrive 20–30 minutes early for security — bring booking confirmation.",
      "มาก่อน 20–30 นาที ผ่านรปภ. — นำยืนยันการจอง",
      "提前20–30分钟到以过安检——带预订确认。",
      "Приезжайте заранее с подтверждением.",
    ),
  }),
  "bali-hai": charter("bali-hai", "Bali Hai Pier Pattaya Thailand", {
    name: L("Bali Hai Pier", "ท่าเรือบาลีไฮ", "Bali Hai 码头", "Bali Hai"),
    openDays: L("Ferry daily", "เรือทุกวัน", "每日船班", "Ежедневно"),
    hoursRange: L("~07:00–18:00 (seasonal)", "~07:00–18:00 (ตามฤดู)", "约7–18点（季变）", "~7–18"),
    bestTimeOfDay: L("Early ferry", "เรือเช้า", "早班船", "Утро"),
    priceGuide: L("Ferry ~30–150 THB", "เรือ ~30–150 บาท", "渡轮约30–150泰铢", "Паром"),
    styleCompact: L("Public pier", "ท่าเรือโดยสาร", "客运码头", "Паром"),
    highlights: [
      L("Koh Larn ferries", "เรือเกาะล้าน", "格兰岛渡轮", "Ko Larn"),
      L("Shared speedboats", "เรือเร็วรวม", "合乘快艇", "Speedboat"),
      L("Not luxury charters", "ไม่ใช่ยอชต์หรู", "非豪华包船", "Не чартер"),
    ],
    vibe: L(
      "Busy passenger pier — ferries and budget boats, not private yacht boarding (unless operator says meet here).",
      "ท่าเรือโดยสารคึกคัก — เรือเกาะล้าน ไม่ใช่จุดขึ้นยอชต์หรู (ยกเว้น operator นัด)",
      "繁忙客运码头——渡轮与平价船，通常不是豪华包船登船点。",
      "Пассажирский причал, не чартер.",
    ),
    bestFor: L(
      "Reference only — compare with Ocean Marina so your driver does not drop you at the wrong pier.",
      "อ้างอิง — อย่าสลับกับ Ocean Marina ตอนรถมาส่ง",
      "作对照——避免司机送错码头。",
      "Не путайте с Ocean Marina.",
    ),
    tips: L(
      "Some operators say 'Pattaya pier' — confirm Ocean Marina vs Bali Hai in writing.",
      "บางเจ้าบอก 'ท่าเรือพัทยา' — ยืนยัน Ocean Marina หรือบาลีไฮเป็นข้อความ",
      "有运营商只说「芭提雅码头」——书面确认是哪个。",
      "Уточните причал письменно.",
    ),
  }),
} as const;

const charterOrder: YachtCharterPinId[] = [
  "pattaya-yacht-charters",
  "we-charters",
  "manta-marina",
  "sailbreeze",
  "blue-voyage",
  "best-yacht-club",
];

const hubOrder: YachtCharterPinId[] = ["ocean-marina", "bali-hai"];

function resolveCharter(lang: LanguageCode, key: keyof typeof guideCharters): YachtCharterGuideItem {
  const raw = guideCharters[key];
  const pin = yachtCharterPinById[raw.id];
  return {
    id: raw.id,
    name: t(lang, raw.name),
    openDays: t(lang, raw.openDays),
    hoursRange: t(lang, raw.hoursRange),
    bestTimeOfDay: t(lang, raw.bestTimeOfDay),
    priceGuide: t(lang, raw.priceGuide),
    highlights: raw.highlights.map((h) => t(lang, h)),
    vibe: t(lang, raw.vibe),
    bestFor: t(lang, raw.bestFor),
    tips: raw.tips ? t(lang, raw.tips) : undefined,
    mapsHref: raw.mapsHref,
    directionsHref: raw.directionsHref,
    phoneLabel: raw.phoneHref
      ? t(lang, L("Call operator", "โทร operator", "致电运营商", "Позвонить"))
      : undefined,
    phoneHref: raw.phoneHref,
  };
}

export function getYachtCharterGuideImageForCard(id: YachtCharterPinId): string {
  return getYachtCharterGuideImage(id);
}

export function getYachtGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Pattaya yacht & private charters",
        "ล่องยอร์ช & เช่าเรือส่วนตัวที่พัทยา",
        "芭提雅游艇与私人包船",
        "Чартеры в Паттайе",
      ),
    ),
    body: t(
      lang,
      L(
        "Pattaya is one of Thailand's easiest yacht starting points — close to Bangkok, often cheaper than Phuket, with boats from small speedboats to superyachts. Most private charters leave Ocean Marina; Bali Hai is for ferries. We list real operators — Pattaya.com does not sell trips.",
        "พัทยาเป็นเมืองเริ่มต้นล่องยอร์ชที่คุ้มมาก — ใกล้กรุงเทพ ราคาไม่แรงเท่าภูเก็ต มีตั้งแต่เรือเล็กถึง super yacht เหมาะครอบครัว คู่รัก ปาร์ตี้ เรือส่วนใหญ่ออก Ocean Marina บาลีไฮคือเรือโดยสาร หน้านี้ไม่ขายทริป",
        "芭提雅是泰国最易起步的游艇城市之一——近曼谷、常比普吉实惠，从小快艇到超级游艇都有；多数私人包船从 Ocean Marina 出发，Bali Hai 是渡轮码头。本页不售行程。",
        "Паттайя — удобный старт для чартеров; Ocean Marina — главный хаб.",
      ),
    ),
    sourceNote: t(
      lang,
      L(
        "Prices and fleets change — confirm quotes, pier, and inclusions with each operator before you pay.",
        "ราคาและเรือเปลี่ยนได้ — ยืนยันใบเสนอราคา ท่า และสิ่งที่รวมก่อนจ่าย",
        "价格与船队会变——付款前向运营商确认报价、码头与包含项目。",
        "Уточняйте цену и pier до оплаты.",
      ),
    ),
    openDaysLabel: t(lang, L("Booking", "การจอง", "预订", "Бронь")),
    hoursRangeLabel: t(lang, L("Trip types", "รูปทริป", "行程类型", "Типы")),
    bestTimeLabel: t(lang, L("Best for", "เหมาะ", "适合", "Кому")),
    priceGuideLabel: t(lang, L("Guide price", "ราคาคร่าว ๆ", "参考价", "Ориентир")),
    highlightsLabel: t(lang, L("Highlights", "เด่น", "亮点", "Изюминка")),
    vibeLabel: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Best for", "เหมาะกับ", "适合", "Кому")),
    tipsLabel: t(lang, L("Tip", "ทิป", "提示", "Совет")),
    openInMaps: t(lang, L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图打开 →", "Google Maps →")),
    directionsLabel: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    phoneLabel: t(lang, L("Call", "โทร", "电话", "Звонок")),
  };
}

export function getYachtCharterQuickRef(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Operators at a glance",
        "operator แต่ละเจ้าในคร่าว ๆ",
        "运营商速览",
        "Операторы кратко",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Tap a row to jump to the full card — prices are whole-boat guides only.",
        "แตะแถวไปการ์ดเต็ม — ราคาเป็นคร่าว ๆ ทั้งลำ",
        "点击行跳转详情卡——价格为整船参考。",
        "Нажмите на строку — цены ориентировочные.",
      ),
    ),
    columns: {
      name: t(lang, L("Operator / pier", "operator / ท่า", "运营商/码头", "Оператор")),
      style: t(lang, L("Style", "สไตล์", "风格", "Стиль")),
      price: t(lang, L("Guide price", "ราคาคร่าว ๆ", "参考价", "Цена")),
      bestTime: t(lang, L("Sweet spot", "จุดเด่น", "亮点时段", "Когда")),
    },
    rows: [...charterOrder, ...hubOrder].map((key) => {
      const raw = guideCharters[key];
      const item = resolveCharter(lang, key);
      return {
        id: item.id,
        name: item.name,
        styleCompact: t(lang, raw.styleCompact ?? raw.bestTimeOfDay),
        priceCompact: item.priceGuide,
        bestTimeOfDay: item.bestTimeOfDay,
        scheduleVibe: t(lang, raw.styleCompact ?? raw.bestTimeOfDay),
      } satisfies YachtQuickRow;
    }),
  };
}

const categoriesDef = [
  {
    id: "family",
    title: L("Family & sunset chill", "สายครอบครัว / sunset ชิล ๆ", "亲子与悠闲日落", "Семья и закат"),
    subtitle: L(
      "Private, comfortable, crew-supported days on the water.",
      "private สบาย มี crew ดูแล",
      "私密舒适、有船员照料的水上日。",
      "Private и спокойно.",
    ),
    keys: ["pattaya-yacht-charters", "sailbreeze"] as const,
  },
  {
    id: "luxury",
    title: L("Luxury & big celebrations", "สาย luxury & งานใหญ่", "豪华与大型庆典", "Luxury"),
    subtitle: L(
      "Premium catering, custom menus, and milestone events.",
      "catering พรีเมียม งานฉลอง",
      "高端餐饮与定制庆典。",
      "Премиум и ивенты.",
    ),
    keys: ["we-charters"] as const,
  },
  {
    id: "active",
    title: L("Active & photo-ready", "สาย activity & ถ่ายรูป", "动感与出片", "Активно"),
    subtitle: L(
      "Speedboats, toys, and livelier decks for older kids and groups.",
      "speedboat ของเล่นบนเรือ เด็กโต",
      "快艇、船上玩具，适合大孩子与团体。",
      "Speedboat и активность.",
    ),
    keys: ["manta-marina"] as const,
  },
  {
    id: "events",
    title: L("Birthdays & special days", "วันพิเศษ & งานฉลอง", "生日与特别日子", "Особые дни"),
    subtitle: L(
      "Proposals, BBQ sunsets, and party setups — compare two popular locals.",
      "ขอแต่งงาน BBQ sunset — เทียบสองเจ้ายอดนิยม",
      "求婚、烧烤日落——可对比两家本地热门。",
      "Дни рождения и BBQ.",
    ),
    keys: ["blue-voyage", "best-yacht-club"] as const,
  },
] as const;

export function getYachtCharterCategories(lang: LanguageCode): YachtCharterCategory[] {
  return categoriesDef.map((cat) => ({
    id: cat.id,
    title: t(lang, cat.title),
    subtitle: t(lang, cat.subtitle),
    charters: cat.keys.map((key) => resolveCharter(lang, key)),
  }));
}

export function getYachtHubCards(lang: LanguageCode): YachtCharterGuideItem[] {
  return hubOrder.map((key) => resolveCharter(lang, key));
}

export function getYachtCatamaranNote(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Best boat type for families?",
        "เรือแบบไหนเหมาะครอบครัวที่สุด?",
        "哪种船最适合家庭？",
        "Какой тип лодки для семьи?",
      ),
    ),
    body: t(
      lang,
      L(
        "For most families — especially with kids — a catamaran (twin-hull boat) is the easiest choice: wide decks, less rocking, room to walk safely, good photo spots, and a calmer ride than a fast, bumpy speedboat.",
        "ถ้าพาครอบครัวหรือมีเด็กไปด้วย แนะนำเรือ catamaran (เรือสองท้อง) เพราะดาดฟ้ากว้าง โยกน้อยกว่าเรือลำเดียว เด็กเดินได้สะดวก มีมุมถ่ายรูปสวย และโดยรวมสบายกว่า speedboat ที่เร็วและแรงจนบางคนเมาเรือ",
        "带娃或家庭出行，双体船通常最合适：甲板宽、摇晃小、孩子走动安全、拍照好看，也比颠簸的快艇更舒适。",
        "С детьми чаще всего удобнее катамаран: широкая палуба, меньше качает, спокойнее, чем быстрый катер.",
      ),
    ),
  };
}

export function getYachtPriceGuide(lang: LanguageCode) {
  return {
    title: t(lang, L("Guide prices (whole boat)", "ราคาประมาณของจริง (ทั้งลำ)", "参考价（整船）", "Ориентиры (лодка)")),
    subtitle: t(
      lang,
      L(
        "Depends on guests, hours, route, food, and weekend/sunset slots — always get a written quote.",
        "ขึ้นกับจำนวนคน ชั่วโมง เส้นทาง อาหาร sunset/วันหยุด — ขอใบเสนอราคาเป็นลายลักษณ์",
        "因人数、时长、路线、餐饮与周末/日落档期而异——务必书面报价。",
        "Зависит от гостей, часов, маршрута и еды.",
      ),
    ),
    rows: [
      {
        type: t(lang, L("Private speedboat", "Speedboat private", "私人快艇", "Speedboat")),
        price: t(lang, L("~5,000–15,000+ THB", "~5,000–15,000+ บาท", "约5,000–15,000+泰铢", "~5–15+ тыс.")),
      },
      {
        type: t(lang, L("Family catamaran", "Catamaran ครอบครัว", "家庭双体船", "Катамаран")),
        price: t(lang, L("~15,000–40,000 THB", "~15,000–40,000 บาท", "约1.5–4万泰铢", "~15–40 тыс.")),
      },
      {
        type: t(lang, L("Luxury yacht", "Luxury yacht", "豪华游艇", "Luxury")),
        price: t(lang, L("~40,000–200,000+ THB", "~40,000–200,000+ บาท", "约4–20万+泰铢", "40k+")),
      },
    ],
    footnote: t(
      lang,
      L(
        "Weekends, sunset-only slots, and peak season push prices up — morning departures often mean calmer seas.",
        "วันหยุด sunset ไฮซีซันราคาขึ้น — ออกเช้ามักทะเลสวย",
        "周末、仅日落时段与旺季更贵——早出发海况常更好。",
        "Выходные и закат дороже; утро спокойнее.",
      ),
    ),
  };
}

export function getYachtRoutes(lang: LanguageCode) {
  return {
    title: t(lang, L("Popular routes", "เส้นทางยอดฮิต", "热门航线", "Маршруты")),
    subtitle: t(
      lang,
      L("Confirm timing and park fees with your operator.", "ยืนยันเวลาและค่าอุทยานกับ operator", "与运营商确认时间与公园费。", "Уточните у оператора."),
    ),
    items: [
      {
        id: "basic",
        title: t(lang, L("Classic day", "ทริปคลาสสิก", "经典一日", "Классика")),
        body: t(
          lang,
          L(
            "Pattaya → Koh Larn → snorkel stop → sunset on the way back.",
            "พัทยา → เกาะล้าน → ดำน้ำ → sunset ตอนกลับ",
            "芭提雅 → 格兰岛 → 浮潜 → 返程日落",
            "Паттайя → Ko Lan → сноркел → закат.",
          ),
        ),
      },
      {
        id: "monkey",
        title: t(lang, L("Monkey Island loop", "Monkey Island", "猴岛线", "Monkey Island")),
        body: t(
          lang,
          L("Monkey Island plus snorkeling — check sea state in the afternoon.", "Monkey Island + snorkeling", "猴岛+浮潜", "Остров обезьян."),
        ),
      },
      {
        id: "sunset",
        title: t(lang, L("Sunset only", "Sunset อย่างเดียว", "仅日落巡航", "Только закат")),
        body: t(
          lang,
          L(
            "Short bay loop (~3 hours) — many operators run dedicated sunset cruises.",
            "วนอ่าวสั้น ๆ (~3 ชม.) — หลายเจ้ามี sunset cruise",
            "短湾内环线（约3小时）——许多运营商有专门日落航程。",
            "Короткий закатный круг ~3 ч.",
          ),
        ),
      },
    ],
  };
}

export function getYachtFamilyOnBoard(lang: LanguageCode) {
  return {
    title: t(lang, L("Traveling with kids", "ถ้ามีเด็ก", "带孩子", "С детьми")),
    goodTitle: t(lang, L("Works best", "ดีสุด", "最合适", "Лучше")),
    goodItems: [
      t(lang, L("Catamaran", "Catamaran", "双体船", "Катамаран")),
      t(lang, L("Half day", "Half day", "半日", "Полдня")),
      t(lang, L("Morning departure", "ออกเช้า", "早上出发", "Утро")),
      t(lang, L("Shade on deck", "มี shade ในเรือ", "甲板有遮阳", "Тень на палубе")),
    ],
    avoidTitle: t(lang, L("May be rough", "อาจเหนื่อย", "可能较累", "Тяжелее")),
    avoidItems: [
      t(lang, L("Very fast speedboats", "Speedboat เร็วมาก", "极快快艇", "Быстрые катера")),
      t(lang, L("Full day in peak sun", "Full day แดดแรง", "烈日全天", "Весь день на солнце")),
      t(lang, L("Party yachts (loud music)", "Party yacht เสียงดัง", "派对船（吵）", "Party-yacht")),
    ],
  };
}

export function getYachtValueNote(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Worth it for 6–10 people?",
        "คุ้มไหมถ้ามี 6–10 คน?",
        "6–10人值得吗？",
        "Выгодно ли на 6–10 человек?",
      ),
    ),
    body: t(
      lang,
      L(
        "Split among a group, a private charter is often better value than crowded tours — you get space, flexible swim stops, safer kids' time, and a calmer vibe for adults. It feels nothing like a packed ferry.",
        "หารกัน 6–10 คน private yacht มักคุ้มกว่าทัวร์แน่น — ได้พื้นที่ เล่นน้ำอิสระ เด็กปลอดภัยกว่า ผู้ใหญ่สบาย ฟีลต่างจากเรือทัวร์มาก",
        "6–10人分摊后，私人包船常比拥挤团更划算——空间自由、游泳灵活、孩子更安全、大人更轻松，与挤满人的团完全不同。",
        "На компанию часто выгоднее, чем тур с толпой.",
      ),
    ),
  };
}

export function getYachtMoodPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("Pick by mood", "เลือกตามฟีล", "按氛围选", "По настроению")),
    subtitle: t(lang, L("Jump to an operator card below.", "ไปการ์ดด้านล่าง", "跳转到下方卡片。", "К карточке ниже.")),
    groups: [
      {
        title: t(lang, L("Family + kids", "ครอบครัว + เด็ก", "家庭+孩子", "Семья")),
        pick: t(lang, L("Pattaya Yacht Charters", "Pattaya Yacht Charters", "Pattaya Yacht Charters", "PYC")),
        charterId: "pattaya-yacht-charters" as const,
      },
      {
        title: t(lang, L("Quiet sail & snorkel", "ล่องใบชิล", "安静帆船浮潜", "Парус")),
        pick: t(lang, L("SailBreeze", "SailBreeze", "SailBreeze", "SailBreeze")),
        charterId: "sailbreeze" as const,
      },
      {
        title: t(lang, L("Big celebration", "งานใหญ่", "大型庆典", "Праздник")),
        pick: t(lang, L("WE Charters", "WE Charters", "WE Charters", "WE")),
        charterId: "we-charters" as const,
      },
      {
        title: t(lang, L("Teens & action", "วัยรุ่น", "青少年动感", "Подростки")),
        pick: t(lang, L("Manta Marina", "Manta Marina", "Manta Marina", "Manta")),
        charterId: "manta-marina" as const,
      },
      {
        title: t(lang, L("Birthday / proposal", "วันเกิด / ขอแต่งงาน", "生日/求婚", "Особый день")),
        pick: t(
          lang,
          L(
            "Blue Voyage or Best Yacht Club",
            "Blue Voyage / Best Yacht Club",
            "Blue Voyage / Best Yacht Club",
            "Blue / Best",
          ),
        ),
        charterId: "blue-voyage" as const,
      },
    ],
  };
}

export function getYachtChartersForMap(lang: LanguageCode) {
  return [...charterOrder, ...hubOrder].map((key) => {
    const item = resolveCharter(lang, key);
    const pin = yachtCharterPinById[key];
    return { ...item, pin };
  });
}

export function getYachtMapCopy(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("Charter operators & piers on the map", "operator & ท่าเรือบนแผนที่", "运营商与码头地图", "На карте"),
    ),
    subtitle: t(
      lang,
      L(
        "Tap a pin for directions — confirm your exact boarding pier before payment.",
        "แตะหมุดดูเส้นทาง — ยืนยันท่าขึ้นเรือก่อนจ่าย",
        "点击标记获取路线——付款前确认登船码头。",
        "Нажмите на метку — уточните pier.",
      ),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open in Maps", "เปิดในแผนที่", "在地图中打开", "В Maps")),
    openAll: t(
      lang,
      L("Open all in Google Maps", "เปิดทั้งหมดใน Google Maps", "在 Google 地图打开全部", "Все в Maps"),
    ),
    openAllHref: yachtChartersMapOpenHref,
    hoursOnCard: t(lang, L("Trip types", "รูปทริป", "行程", "Тип")),
    legendOperators: t(lang, L("Operators", "operator", "运营商", "Операторы")),
    legendPiers: t(lang, L("Piers", "ท่าเรือ", "码头", "Причалы")),
  };
}
