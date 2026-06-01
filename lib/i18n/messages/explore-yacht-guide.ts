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
      hoursRange: L("Half / full day · sunset", "ครึ่งวัน / เต็มวัน · ช่วงพระอาทิตย์ตก", "半日/全日 · 日落", "Полдня / день · закат"),
      bestTimeOfDay: L("Family · sunset", "ครอบครัว · ชมอาทิตย์ตก", "亲子 · 日落", "Семья · закат"),
      priceGuide: L("Catamaran ~15,000–40,000 THB", "เรือสองท้อง ประมาณ 15,000–40,000 บาท", "双体船约1.5–4万泰铢", "Катамаран ~15–40 тыс."),
      styleCompact: L("Family-friendly", "เหมาะครอบครัว", "亲子轻松", "Семья"),
      highlights: [
        L("Half & full day", "ครึ่งวันหรือเต็มวัน", "半日/全日", "Полдня / день"),
        L("Sunset cruise", "ล่องชมพระอาทิตย์ตก", "日落巡航", "Закат"),
        L("Koh Larn & island hops", "แวะเกาะล้านและเกาะใกล้ ๆ", "格兰岛跳岛", "Ko Larn"),
        L("Crew, food, snorkel gear", "มีลูกเรือ อาหาร และอุปกรณ์ดำน้ำตื้น", "船员、餐食、浮潜装备", "Экипаж, еда, сноркел"),
      ],
      vibe: L(
        "Often the first name locals mention for families — private boat, wide catamaran decks, and trips you can scale to your group size.",
        "ร้านที่คนพัทยามักแนะนำเมื่อพาครอบครัว — เรือส่วนตัว ดาดฟ้ากว้าง ปรับจำนวนคนและเวลาได้ตามงบ",
        "本地人常向家庭推荐——私人船、宽甲板，可按人数调整。",
        "Лучший выбор для семей с детьми.",
      ),
      bestFor: L(
        "Parents who want crew help, meals on board, and a steadier boat than a small speedboat.",
        "พ่อแม่ที่อยากมีลูกเรือช่วยดูแล มีอาหารบนเรือ และไม่อยากนั่งเรือเร็วที่โยกมาก",
        "需要船员照料、船上餐饮、比快艇更稳的家庭。",
        "С crew и едой на борту.",
      ),
      tips: L(
        "Ask what is included in the quote (food, fuel, park fees) before you transfer a deposit.",
        "ก่อนโอนมัดจำ ถามให้ชัดว่าราคารวมอะไรบ้าง เช่น อาหาร น้ำมัน ค่าเข้าอุทยานทางทะเล",
        "付定金前确认报价包含项目（餐食、燃油、公园费等）。",
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
      "Busier, more active trips — popular when teenagers want jet skis, loud music, and lots of photo stops.",
      "ทริปคึกคักกว่า — วัยรุ่นมักชอบเพราะมีกิจกรรมทางน้ำเยอะและแวะถ่ายรูปบ่อย",
      "行程更热闹——青少年常因水上项目和拍照点多而喜欢。",
      "Для подростков и активного отдыха.",
    ),
    bestFor: L(
      "Groups with older kids or friends who prefer speedboats and water toys over a slow catamaran day.",
      "กลุ่มเพื่อนหรือครอบครัวที่เด็กโตแล้ว อยากเรือเร็วและเล่นน้ำหนัก ๆ มากกว่านั่งเรือสองท้องช้า ๆ",
      "孩子较大或朋友结伴，更想要快艇和水上玩具而非悠闲双体船。",
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
      "The main marina south of Pattaya — most private charter companies meet guests here, not at Bali Hai passenger pier.",
      "ท่าเรือหลักใต้พัทยา — ร้านเช่าเรือส่วนตัวส่วนใหญ่นัดเจอที่นี่ ไม่ใช่ท่าบาลีไฮที่เป็นเรือโดยสาร",
      "芭提雅南侧主码头——多数包船在此会合，不是 Bali Hai 客船码头。",
      "Главная марина — не Bali Hai.",
    ),
    bestFor: L(
      "Finding your boat, meeting the crew, and leaving on a half- or full-day trip.",
      "มาพบร้านที่จอง ดูเรือ และออกทะเลครึ่งวันหรือเต็มวัน",
      "与预订公司会合、看船、出发半日或全日行程。",
      "Встреча с компанией и осмотр лодки.",
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
      "A busy public pier — Koh Larn ferries and shared boats. Private yachts usually use Ocean Marina unless the company tells you otherwise.",
      "ท่าเรือโดยสารคนเยอะ — เรือไปเกาะล้านและเรือรวม เรือเช่าส่วนตัวส่วนใหญ่ไม่ขึ้นที่นี่ เว้นแต่ร้านนัดไว้ชัดเจน",
      "繁忙客运码头——格兰岛渡轮与合乘船；私人包船多在 Ocean Marina，除非公司另有说明。",
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
      ? t(lang, L("Call to book", "โทรจอง", "致电预订", "Позвонить"))
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
        "Yacht & boat charters in Pattaya",
        "เช่าเรือและล่องยอร์ชที่พัทยา",
        "芭提雅游艇与包船",
        "Чартеры в Паттайе",
      ),
    ),
    body: t(
      lang,
      L(
        "From Pattaya you can book a private boat for a few hours or a full day — catamarans for families, speedboats for island hops, or larger yachts for celebrations. Most charter companies use Ocean Marina; Bali Hai Pier is mainly for Koh Larn passenger ferries. Below we list companies and piers we found useful for planning. Pattaya.com does not sell trips — call and book with the company you choose.",
        "จากพัทยาจองเรือออกทะเลได้ทั้งแบบครึ่งวันและเต็มวัน มีเรือสองท้องเหมาะพาครอบครัว เรือเร็วไปเกาะล้าน และยอร์ชใหญ่สำหรับงานฉลอง ร้านเช่าเรือส่วนใหญ่ให้ขึ้นที่ Ocean Marina ส่วนท่าบาลีไฮเป็นเรือโดยสารไปเกาะล้าน ด้านล่างรวบรวมชื่อร้านและท่าเรือไว้ช่วยวางแผน Pattaya.com ไม่ขายทริป — โทรจองกับร้านที่คุณเลือกเอง",
        "芭提雅可订半日或全日私人船——家庭双体船、跳岛快艇、庆典大游艇。多数包船从 Ocean Marina 出发，Bali Hai 主要是去格兰岛的渡轮。下列公司供规划参考，本站不代售。",
        "Из Паттайи — катамараны, катера и яхты. Чартеры с Ocean Marina; паром на Ко Лан — Bali Hai. Мы не продаём туры.",
      ),
    ),
    sourceNote: t(
      lang,
      L(
        "Prices and available boats change often. Before you pay, ask each company for a written quote and confirm the pier, trip length, and what is included (food, fuel, park fees).",
        "ราคาและเรือที่ว่างเปลี่ยนได้บ่อย ก่อนโอนเงินขอใบเสนอราคาเป็นลายลักษณ์ และยืนยันเรื่องท่าเรือ ระยะเวลา และสิ่งที่รวมในราคา (อาหาร น้ำมัน ค่าเข้าอุทยานทางทะเล)",
        "价格与船队常变——付款前请书面确认码头、时长及包含项目（餐食、燃油、海洋公园费等）。",
        "Перед оплатой — письменная смета, причал и что включено.",
      ),
    ),
    openDaysLabel: t(lang, L("Booking", "การจอง", "预订", "Бронь")),
    hoursRangeLabel: t(lang, L("Trip types", "ประเภททริป", "行程类型", "Типы")),
    bestTimeLabel: t(lang, L("Best time", "ช่วงเวลาที่เหมาะ", "适宜时段", "Когда")),
    priceGuideLabel: t(lang, L("Guide price", "ราคาประมาณ", "参考价", "Ориентир")),
    highlightsLabel: t(lang, L("Highlights", "จุดเด่น", "亮点", "Изюминка")),
    vibeLabel: t(lang, L("Atmosphere", "บรรยากาศ", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Good fit if", "เหมาะกับ", "适合", "Кому")),
    tipsLabel: t(lang, L("Note", "หมายเหตุ", "提示", "Совет")),
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
        "Charter companies at a glance",
        "สรุปร้านเช่าเรือและท่า",
        "运营商速览",
        "Операторы кратко",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Tap a row to open the full details. Prices below are rough whole-boat estimates — your quote may differ.",
        "แตะแถวเพื่อดูรายละเอียดเต็ม ราคาด้านล่างเป็นเพียงช่วงประมาณต่อลำ ราคาจริงขึ้นกับจำนวนคน เวลา และวันที่จอง",
        "点击行查看详情。价格为整船约数，实际以报价为准。",
        "Нажмите на строку — цены ориентировочные.",
      ),
    ),
    columns: {
      name: t(lang, L("Company / pier", "ร้าน / ท่า", "公司/码头", "Компания")),
      style: t(lang, L("Type", "ประเภท", "类型", "Тип")),
      price: t(lang, L("Guide price", "ราคาประมาณ", "参考价", "Цена")),
      bestTime: t(lang, L("Best for", "เหมาะกับ", "适合", "Кому")),
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
    title: L("Families & relaxed sunsets", "ครอบครัวและชมพระอาทิตย์ตก", "亲子与悠闲日落", "Семья и закат"),
    subtitle: L(
      "Private boats with crew, food on board, and calmer decks — good when you have kids or older guests.",
      "เรือส่วนตัว มีลูกเรือดูแล มีอาหารบนเรือ ดาดฟ้าไม่แออัด — เหมาะเมื่อมีเด็กหรือผู้สูงอายุ",
      "有船员与餐食、甲板不挤——适合带孩子或长辈。",
      "С crew и спокойнее на палубе.",
    ),
    keys: ["pattaya-yacht-charters", "sailbreeze"] as const,
  },
  {
    id: "luxury",
    title: L("Large groups & celebrations", "งานใหญ่และยอร์ชหรู", "豪华与大型庆典", "Luxury"),
    subtitle: L(
      "Full-day charters with catering, custom menus, and space for birthdays or corporate groups.",
      "เช่าเต็มวัน จัดอาหารบนเรือ เมนูปรับได้ เหมาะวันเกิด ครบรอบ หรือทีมงานบริษัท",
      "全日包船、船上餐饮可定制——生日、纪念日或公司活动。",
      "Кейтеринг и большие группы.",
    ),
    keys: ["we-charters"] as const,
  },
  {
    id: "active",
    title: L("Teens & active days", "เด็กโตและสายลุย", "青少年与动感一日", "Активно"),
    subtitle: L(
      "Speedboats and busier trips — better when your group wants water toys and a faster pace.",
      "เรือเร็ว ทริปคึกคักกว่า — เหมาะกลุ่มที่อยากเล่นน้ำหนัก ๆ และชอบความเร็ว",
      "快艇、节奏更快——适合想玩水上项目、不介意船晃一点的团体。",
      "Катера и активнее.",
    ),
    keys: ["manta-marina"] as const,
  },
  {
    id: "events",
    title: L("Birthdays & proposals", "วันเกิดและขอแต่งงาน", "生日与求婚", "Особые дни"),
    subtitle: L(
      "Two Pattaya companies locals often use for decorated trips — compare quotes for your date.",
      "สองร้านที่คนในพัทยามักใช้จัดทริปมีธีม — ลองขอราคาเทียบกันตามวันที่ต้องการ",
      "芭提雅两家常办主题航程的公司——可按日期比价。",
      "Сравните две популярные компании.",
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
    title: t(lang, L("Rough prices (whole boat)", "ราคาประมาณ (ทั้งลำ)", "参考价（整船）", "Ориентиры (лодка)")),
    subtitle: t(
      lang,
      L(
        "Your final price depends on how many people join, how many hours you book, the route, meals, and whether you pick a weekend or sunset slot. Always ask for a written quote.",
        "ราคาจริงขึ้นกับจำนวนคน จำนวนชั่วโมง เส้นทาง อาหาร และว่าจองวันหยุดหรือช่วงพระอาทิตย์ตกหรือไม่ ควรขอใบเสนอราคาเป็นลายลักษณ์ทุกครั้ง",
        "最终价因人数、时长、路线、餐饮及是否周末/日落档期而异——请书面报价。",
        "Зависит от гостей, часов, маршрута и еды.",
      ),
    ),
    rows: [
      {
        type: t(lang, L("Private speedboat", "เรือเร็วส่วนตัว", "私人快艇", "Speedboat")),
        price: t(lang, L("~5,000–15,000+ THB", "~5,000–15,000+ บาท", "约5,000–15,000+泰铢", "~5–15+ тыс.")),
      },
      {
        type: t(lang, L("Family catamaran", "เรือสองท้อง (ครอบครัว)", "家庭双体船", "Катамаран")),
        price: t(lang, L("~15,000–40,000 THB", "~15,000–40,000 บาท", "约1.5–4万泰铢", "~15–40 тыс.")),
      },
      {
        type: t(lang, L("Large luxury yacht", "ยอร์ชใหญ่", "大型豪华游艇", "Luxury")),
        price: t(lang, L("~40,000–200,000+ THB", "~40,000–200,000+ บาท", "约4–20万+泰铢", "40k+")),
      },
    ],
    footnote: t(
      lang,
      L(
        "Weekends, sunset-only trips, and high season cost more. If you can, leave in the morning — the sea is usually calmer.",
        "วันหยุด ทริปช่วงพระอาทิตย์ตกอย่างเดียว และช่วงไฮซีซันมักแพงกว่า ถ้าเลือกได้ ออกเช้าทะเลมักสงบกว่า",
        "周末、仅日落航程与旺季更贵；能选的话早出发，海况通常更好。",
        "Выходные и закат дороже; утро спокойнее.",
      ),
    ),
  };
}

export function getYachtRoutes(lang: LanguageCode) {
  return {
    title: t(lang, L("Common routes", "เส้นทางที่คนมักจอง", "常见航线", "Маршруты")),
    subtitle: t(
      lang,
      L(
        "Times and marine park fees vary — confirm both with the company before you pay.",
        "เวลาเดินทางและค่าเข้าอุทยานทางทะเลไม่เท่ากันทุกร้าน — ถามให้ชัดก่อนจ่ายเงิน",
        "时间与海洋公园费因公司而异——付款前确认。",
        "Уточните время и парковые сборы.",
      ),
    ),
    items: [
      {
        id: "basic",
        title: t(lang, L("Pattaya & Koh Larn day", "พัทยา–เกาะล้าน ครึ่ง–เต็มวัน", "芭提雅–格兰岛一日", "Классика")),
        body: t(
          lang,
          L(
            "Leave Pattaya Bay, stop at Koh Larn for swimming, add a snorkel point, and head back around sunset if you booked a long enough slot.",
            "ออกจากอ่าวพัทยา แวะเกาะล้านว่ายน้ำ แวะจุดดำน้ำตื้น แล้วกลับช่วงเย็นถ้าจองเวลายาวพอ",
            "出芭提雅湾，格兰岛游泳，加浮潜点，时间够则傍晚返航。",
            "Паттайя → Ko Lan → сноркел → закат.",
          ),
        ),
      },
      {
        id: "monkey",
        title: t(lang, L("Koh Khrok (Monkey Island)", "เกาะครก (เกาะลิง)", "猴岛（Koh Khrok）", "Monkey Island")),
        body: t(
          lang,
          L(
            "Loop past the monkey island area with a snorkel stop — ask the captain about afternoon waves before you book.",
            "วนไปบริเวณเกาะลิง แวะดำน้ำตื้น — ถามกัปตันเรื่องคลื่นช่วงบ่ายก่อนจอง",
            "经猴岛一带并浮潜——预订前问清下午浪况。",
            "Остров обезьян + сноркел.",
          ),
        ),
      },
      {
        id: "sunset",
        title: t(lang, L("Sunset cruise only", "ล่องชมพระอาทิตย์ตกอย่างเดียว", "仅日落巡航", "Только закат")),
        body: t(
          lang,
          L(
            "About three hours inside the bay — many companies offer a shorter trip just for sunset photos and drinks.",
            "ประมาณ 3 ชั่วโมงวนในอ่าว — หลายร้านมีทริปสั้นเฉพาะชมอาทิตย์ตกและดื่มเครื่องดื่มบนเรือ",
            "约三小时湾内环线——不少公司有专门看日落、船上饮品的短航程。",
            "Короткий закатный круг ~3 ч.",
          ),
        ),
      },
    ],
  };
}

export function getYachtFamilyOnBoard(lang: LanguageCode) {
  return {
    title: t(lang, L("Traveling with kids", "พาเด็กไปด้วย", "带孩子", "С детьми")),
    goodTitle: t(lang, L("Usually easier", "มักสบายกว่า", "通常更轻松", "Лучше")),
    goodItems: [
      t(lang, L("Catamaran (wider deck)", "เรือสองท้อง ดาดฟ้ากว้าง", "双体船（甲板宽）", "Катамаран")),
      t(lang, L("Half-day trip", "ทริปครึ่งวัน", "半日行程", "Полдня")),
      t(lang, L("Leave in the morning", "ออกเช้า", "早上出发", "Утро")),
      t(lang, L("Shaded areas on deck", "มีที่ร่มบนดาดฟ้า", "甲板有遮阳", "Тень на палубе")),
    ],
    avoidTitle: t(lang, L("Can be harder", "อาจลำบากกว่า", "可能较累", "Тяжелее")),
    avoidItems: [
      t(lang, L("Very fast speedboats", "เรือเร็วที่วิ่งแรงมาก", "极快快艇", "Быстрые катера")),
      t(lang, L("Full day in strong midday sun", "เต็มวันกลางแดดจัด", "烈日下全天", "Весь день на солнце")),
      t(lang, L("Party boats with loud music", "เรือปาร์ตี้เสียงดัง", "派对船（吵）", "Party-yacht")),
    ],
  };
}

export function getYachtValueNote(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Does a private boat make sense for 6–10 people?",
        "จองเรือส่วนตัวคุ้มไหมถ้ามี 6–10 คน?",
        "6–10人值得包船吗？",
        "Выгодно ли на 6–10 человек?",
      ),
    ),
    body: t(
      lang,
      L(
        "If you split the cost, a private charter is often similar to paying for several tour tickets — but you choose the schedule, stop where you want to swim, and the kids are not squeezed on a crowded deck. It feels very different from a packed ferry.",
        "ถ้าหารค่าเรือกัน 6–10 คน มักใกล้เคียงกับซื้อทัวร์หลายที่นั่ง แต่คุณกำหนดเวลาเอง แวะว่ายน้ำได้ตามใจ และเด็กไม่ต้องเบียดกับคนแน่นเหมือนเรือโดยสาร บรรยากาศต่างจากเรือทัวร์มาก",
        "6–10人分摊后，常与多张团票相当——但时间自定、游泳点自选，孩子不必挤在满舱甲板上，与渡轮或团船差别很大。",
        "На компанию часто сопоставимо с турами, но гибче.",
      ),
    ),
  };
}

export function getYachtMoodPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("Not sure where to start?", "ยังไม่แน่ใจว่าจะเริ่มที่ไหน?", "不知从何选起？", "С чего начать?")),
    subtitle: t(
      lang,
      L(
        "Tap a suggestion to jump to that company’s details below.",
        "แตะหัวข้อด้านล่างเพื่อไปดูรายละเอียดร้านนั้น",
        "点击下列建议跳转到对应公司详情。",
        "К карточке ниже.",
      ),
    ),
    groups: [
      {
        title: t(lang, L("Family with kids", "พาครอบครัวมีเด็ก", "带娃家庭", "Семья")),
        pick: t(lang, L("Pattaya Yacht Charters", "Pattaya Yacht Charters", "Pattaya Yacht Charters", "PYC")),
        charterId: "pattaya-yacht-charters" as const,
      },
      {
        title: t(lang, L("Quiet sail & snorkel", "ล่องใบเงียบ ๆ ดำน้ำตื้น", "安静帆船浮潜", "Парус")),
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
      L("Charter companies & piers on the map", "ร้านเช่าเรือและท่าบนแผนที่", "公司与码头地图", "На карте"),
    ),
    subtitle: t(
      lang,
      L(
        "Tap a pin for directions. Before you pay, double-check which pier your boat leaves from.",
        "แตะหมุดเพื่อดูเส้นทาง ก่อนจ่ายเงินควยืนยันอีกครั้งว่าต้องไปขึ้นเรือท่าไหน",
        "点击标记查路线——付款前再次确认登船码头。",
        "Нажмите на метку — уточните причал.",
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
    legendOperators: t(lang, L("Charter companies", "ร้านเช่าเรือ", "包船公司", "Операторы")),
    legendPiers: t(lang, L("Piers", "ท่าเรือ", "码头", "Причалы")),
  };
}
