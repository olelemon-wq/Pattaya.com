import type { LanguageCode } from "@/lib/i18n/languages";
import {
  type FamilyActivityImageId,
  getFamilyActivityImage,
} from "@/lib/design/family-activity-images";
import { L, t } from "@/lib/i18n/living-helpers";

export type FamilyGuideItem = {
  id: FamilyActivityImageId;
  name: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  scheduleVibe: string;
  highlights: string[];
  vibe: string;
  bestFor?: string;
  tips?: string;
  mapsHref: string;
  directionsHref?: string;
  officialHref?: string;
  internalHref?: string;
};

export type FamilyGuideCategory = {
  id: string;
  title: string;
  subtitle: string;
  spots: FamilyGuideItem[];
};

export type FamilyScheduleRow = {
  id: FamilyActivityImageId;
  name: string;
  ageRange: string;
  ageRangeCompact: string;
  bestTimeOfDay: string;
  scheduleVibe: string;
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function spot(
  id: FamilyActivityImageId,
  maps: string,
  fields: {
    name: ReturnType<typeof L>;
    openDays: ReturnType<typeof L>;
    hoursRange: ReturnType<typeof L>;
    bestTimeOfDay: ReturnType<typeof L>;
    scheduleVibe: ReturnType<typeof L>;
    ageRange: ReturnType<typeof L>;
    ageRangeCompact?: ReturnType<typeof L>;
    highlights: ReturnType<typeof L>[];
    vibe: ReturnType<typeof L>;
    bestFor?: ReturnType<typeof L>;
    tips?: ReturnType<typeof L>;
    officialHref?: string;
    internalHref?: string;
  },
) {
  return { id, mapsHref: mapsQuery(maps), ...fields };
}

const guideSpots = {
  aquaverse: spot("aquaverse", "Columbia Pictures Aquaverse Pattaya Thailand", {
    name: L("Columbia Pictures Aquaverse", "Columbia Pictures Aquaverse", "Columbia Pictures Aquaverse", "Aquaverse"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–18:00", "~10:00–18:00", "约10:00–18:00", "~10:00–18:00"),
    bestTimeOfDay: L("Weekday mornings", "เช้าวันธรรมดา", "平日早上", "Будни утром"),
    scheduleVibe: L(
      "Clean, modern, great photos",
      "สะอาด ใหม่ ถ่ายรูปสวย",
      "干净现代、好拍照",
      "Чисто, современно",
    ),
    ageRange: L("Ages ~4–15", "เด็ก ~4–15 ปี", "约4–15岁", "~4–15 лет"),
    ageRangeCompact: L("~4–15 yrs", "~4–15 ปี", "4–15岁", "4–15"),
    highlights: [
      L("Movie themes", "ธีมหนัง", "电影主题", "Кинотематика"),
      L("Many slides", "สไลเดอร์เยอะ", "滑梯多", "Много горок"),
      L("Kids' zone", "โซนเด็กเล็ก", "幼童区", "Детская зона"),
      L("Adults can play too", "ผู้ใหญ่เล่นได้จริง", "大人也能玩", "Взрослые тоже"),
    ],
    vibe: L(
      "Top water park pick — kids will scream with joy; parents get real slides, not just a splash pad.",
      "สวนน้ำตัวท็อป — เด็กกรี๊ดแน่น ผู้ใหญ่เล่นสไลด์จริง ไม่ใช่แค่สระเด็ก",
      "头号水上乐园——孩子会很兴奋，大人也能玩真正的滑道。",
      "Топ аквапарк для всей семьи.",
    ),
    bestFor: L(
      "Families who want a full splash day without leaving Pattaya.",
      "ครอบครัวที่อยากเล่นน้ำเต็มวัน ไม่ต้องออกจากพัทยา",
      "想在芭提雅玩足一天水的家庭。",
      "Полный день в воде в Паттайе.",
    ),
    tips: L(
      "Weekdays are calmer than weekends — arrive near opening for shorter queues.",
      "วันธรรมดาคนน้อยกว่าวันหยุด — มาใกล้เวลาเปิดคิวสั้นกว่า",
      "平日比周末人少——尽量开园到。",
      "В будни спокойнее — приходите к открытию.",
    ),
    officialHref: "https://www.columbiapicturesaquaverse.com/",
  }),
  "tiger-park": spot("tiger-park", "Tiger Park Pattaya Thailand", {
    name: L("Tiger Park Pattaya", "Tiger Park Pattaya", "Tiger Park Pattaya", "Tiger Park"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~09:00–18:00", "~09:00–18:00", "约9:00–18:00", "~9:00–18:00"),
    bestTimeOfDay: L("Morning", "ช่วงเช้า", "上午", "Утро"),
    scheduleVibe: L(
      "Up-close tigers, photo stops",
      "เสือใกล้ ๆ ถ่ายรูป",
      "近距离看虎、拍照",
      "Тигры вблизи",
    ),
    ageRange: L("School age+", "วัยเรียน+", "学龄+", "Школьный возраст+"),
    ageRangeCompact: L("School+", "วัยเรียน+", "学龄+", "Школа+"),
    highlights: [
      L("Several tiger ages", "เสือหลายวัย", "不同年龄的虎", "Разный возраст тигров"),
      L("Photo opportunities", "ถ่ายรูป", "拍照", "Фото"),
      L("Walk-through viewing", "เดินชม", "步行参观", "Прогулка"),
    ],
    vibe: L(
      "Many kids are thrilled to see tigers up close — exciting but not for every toddler.",
      "เด็กหลายคนตื่นเต้นมากที่ได้เห็นเสือใกล้ ๆ — สนุกแต่ไม่ใช่ทุกเด็กเล็ก",
      "很多孩子看到老虎会很兴奋——但并非每个幼童都适合。",
      "Восторг у детей, но малышам может быть страшно.",
    ),
    bestFor: L(
      "Kids who love animals and are okay with big-cat encounters.",
      "เด็กที่ชอบสัตว์และไม่กลัวเสือตัวใหญ่",
      "喜欢动物、不怕大型猫科的孩子。",
      "Любители животных.",
    ),
    tips: L(
      "Very young children may find it scary — skip if yours is nervous around large animals.",
      "เด็กเล็กมากอาจกลัว — ถ้าลูกกลัวสัตว์ใหญ่ให้ข้าม",
      "幼童可能害怕——若孩子怕大型动物可跳过。",
      "Малышам может быть страшно.",
    ),
  }),
  "underwater-world": spot("underwater-world", "Underwater World Pattaya Thailand", {
    name: L("Underwater World Pattaya", "Underwater World Pattaya", "Underwater World", "Underwater World"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~09:00–18:00", "~09:00–18:00", "约9:00–18:00", "~9:00–18:00"),
    bestTimeOfDay: L("Hot or rainy afternoons", "บ่ายร้อนหรือฝนตก", "炎热或下雨的下午", "Жаркий/дождливый день"),
    scheduleVibe: L(
      "Air-conditioned tunnel",
      "อุโมงค์ปลา แอร์เย็น",
      "空调海底隧道",
      "Туннель с кондиционером",
    ),
    ageRange: L("All ages, great for toddlers", "ทุกวัย เด็กเล็กชอบ", "全年龄、幼童友好", "Все возрасты"),
    ageRangeCompact: L("All ages", "ทุกวัย", "全年龄", "Все"),
    highlights: [
      L("Fish tunnel", "อุโมงค์ปลา", "海底隧道", "Туннель"),
      L("Sharks & rays", "ฉลาม & ปลากระเบน", "鲨鱼与鳐鱼", "Акулы и скаты"),
      L("Fish feeding", "ให้อาหารปลา", "喂鱼", "Кормление"),
    ],
    vibe: L(
      "Easy flat walk, cool AC — a lifesaver on blazing or rainy days.",
      "เดินง่าย แอร์เย็น — ช่วยชีวิตวันร้อนหรือฝนตก",
      "平路好走、空调凉快——暴晒或雨天的好选择。",
      "Лёгкая прогулка в кондиционере.",
    ),
    bestFor: L(
      "Young kids, grandparents, and anyone who wants shade without skipping the outing.",
      "เด็กเล็ก คุณยายคุณตา หรือใครอยากพักในร่ม",
      "幼童、长辈、想躲太阳又不想宅酒店的人。",
      "Малыши и старшие.",
    ),
    tips: L(
      "No swimming gear needed — combine with a mall dinner nearby if rain lingers.",
      "ไม่ต้องชุดว่าย — ฝนตกนาน ๆ แวะห้างกินข้าวต่อ",
      "无需泳装——雨不停可顺路去商场吃饭。",
      "Купальники не нужны.",
    ),
    officialHref: "https://www.underwaterworldpattaya.com/",
  }),
  "khao-kheow": spot("khao-kheow", "Khao Kheow Open Zoo Chonburi Thailand", {
    name: L("Khao Kheow Open Zoo", "สวนสัตว์เปิดเขาเขียว", "Khao Kheow 开放动物园", "Khao Kheow"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~08:00–17:00", "~08:00–17:00", "约8:00–17:00", "~8:00–17:00"),
    bestTimeOfDay: L("Full day, start early", "เต็มวัน ออกเช้า", "全天、早出发", "Весь день, рано"),
    scheduleVibe: L(
      "Open zoo, golf carts, giraffe feeding",
      "สวนเปิด รถกอล์ฟ ให้อาหารยีราฟ",
      "开放动物园、电瓶车、喂长颈鹿",
      "Открытый зоопарк",
    ),
    ageRange: L("Best all-family day trip", "ทริปครอบครัวคุ้มสุด", "最适合全家一日游", "Лучший семейный день"),
    ageRangeCompact: L("All family", "ครอบครัว", "全家", "Семья"),
    highlights: [
      L("Open safari feel", "ฟีลซาฟารี", "开放式 safari 感", "Сафари"),
      L("Giraffe feeding", "ให้อาหารยีราฟ", "喂长颈鹿", "Жирафы"),
      L("Golf cart routes", "นั่งรถกอล์ฟ", "电瓶车", "Гольф-кары"),
      L("Hippos, penguins, lemurs", "ฮิปโป เพนกวิน ลีเมอร์", "河马、企鹅、狐猴", "Бегемоты, пингвины"),
    ],
    vibe: L(
      "Technically just outside Pattaya but worth it — adults have fun too, not only the kids.",
      "ไม่ใช่พัทยาเป๊ะ แต่ใกล้มาก — ผู้ใหญ่ก็สนุก ไม่ใช่แค่เด็ก",
      "严格说不算芭提雅市内，但很近——大人也会玩得很开心。",
      "Чуть вне Паттайи, но лучший зоопарк рядом.",
    ),
    bestFor: L(
      "A full-day family trip when you want animals, shade, and variety in one ticket.",
      "ทริปเต็มวันเมื่ออยากได้สัตว์ เงา และหลายโซนในที่เดียว",
      "想要动物、绿荫、多样体验的一日行程。",
      "Целый день с животными.",
    ),
    tips: L(
      "Leave Pattaya by ~08:30 — book golf carts early on weekends and Thai holidays.",
      "ออกพัทยา ~8:30 — วันหยุดจองรถกอล์ฟเร็ว",
      "约8:30 从芭提雅出发——周末尽早租电瓶车。",
      "Выезд ~8:30; в праздники берите карт заранее.",
    ),
    officialHref: "https://www.khaokheow.zoothailand.org/",
  }),
  "koh-larn": spot("koh-larn", "Koh Larn Pattaya Thailand", {
    name: L("Koh Larn", "เกาะล้าน", "格兰岛", "Ко Лан"),
    openDays: L("Ferry daily", "เรือทุกวัน", "每日船班", "Паром ежедневно"),
    hoursRange: L("Day trip · ferries ~07:00–18:00", "ทริปวัน · เรือ ~07:00–18:00", "一日游 · 船约7:00–18:00", "День · паром"),
    bestTimeOfDay: L("Early ferry", "เรือเช้า", "早班船", "Утренний паром"),
    scheduleVibe: L(
      "Clear water, sand play",
      "น้ำใส เล่นทราย",
      "水清、玩沙",
      "Чистая вода",
    ),
    ageRange: L("With calm-beach picks", "เลือกหาดสงบ", "选对海滩", "Спокойные пляжи"),
    ageRangeCompact: L("Beach day", "วันหาด", "海滩日", "Пляж"),
    highlights: [
      L("Samae & Tien beaches (calmer)", "หาดแสม & เทียน (สงบกว่า)", "Samae 与 Tien（更静）", "Samae и Tien"),
      L("Sand play & clear water", "เล่นทราย น้ำใส", "玩沙、清水", "Песок и вода"),
      L("Gentle banana boat", "บานาน่าโบ๊ตเบา ๆ", "温和香蕉船", "Banana boat"),
      L("Fish feeding", "ให้อาหารปลา", "喂鱼", "Рыбки"),
    ],
    vibe: L(
      "Still works with kids if you pick the right bay — skip the busiest beach crowds.",
      "ไปกับเด็กได้ถ้าเลือกหาดดี — อย่าไปหาดที่คนแน่นที่สุด",
      "选对海湾很适合带孩子——避开最挤的滩。",
      "С детьми — выберите спокойный пляж.",
    ),
    bestFor: L(
      "A classic island day when everyone wants sea, sand, and simple water fun.",
      "วันทะเลคลาสสิก เมื่ออยากเล่นน้ำ ทราย สนุกง่าย ๆ",
      "经典海岛日——海水、沙滩、轻松水上乐。",
      "Классический островной день.",
    ),
    tips: L(
      "Pack shade, SPF, and kids' life vests — Bali Hai pier gets busy; confirm last ferry times.",
      "พกร่ม กันแดด เสื้อชูชีพเด็ก — เช็คเรือกลับรอบสุดท้ายที่ท่า",
      "带遮阳、防晒、儿童救生衣——确认末班船。",
      "SPF, тень, спасжилеты; уточните последний паром.",
    ),
    internalHref: "/explore/islands/koh-larn",
  }),
  harborland: spot("harborland", "HarborLand Pattaya Thailand", {
    name: L("HarborLand Pattaya", "HarborLand Pattaya", "HarborLand Pattaya", "HarborLand"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–20:00", "~10:00–20:00", "约10:00–20:00", "~10:00–20:00"),
    bestTimeOfDay: L("Rainy or blazing afternoons", "บ่ายฝนหรือแดดแรง", "下雨或暴晒的下午", "Дождь/жара"),
    scheduleVibe: L(
      "Huge indoor playground",
      "สนามเด็กเล่น indoor ยักษ์",
      "大型室内游乐场",
      "Крытая площадка",
    ),
    ageRange: L("High-energy kids", "เด็กพลังเยอะ", "精力旺盛的孩子", "Активные дети"),
    ageRangeCompact: L("Indoor play", "เล่นในร่ม", "室内", "Крыто"),
    highlights: [
      L("Climbing & slides", "ปีนป่าย สไลด์", "攀爬与滑梯", "Горки"),
      L("Air-conditioned", "แอร์เย็น", "空调", "Кондиционер"),
      L("Parents can rest", "ผู้ปกครองนั่งพักได้", "家长可休息", "Отдых для родителей"),
    ],
    vibe: L(
      "Burn off energy when it is too hot or wet outside — parents finally sit down.",
      "ปล่อยพลังตอนร้อนหรือฝน — ผู้ปกครองได้นั่งพักแอร์",
      "外面太热或下雨时放电——家长终于能坐下。",
      "Сжечь энергию в жару или дождь.",
    ),
    bestFor: L(
      "Rain backup, post-mall afternoon, or kids who never tire.",
      "แผนสำรองวันฝน หลังห้าง หรือเด็กไม่ยอมหยุด",
      "雨天备选、逛完商场后、精力无限的孩子。",
      "Запасной план в дождь.",
    ),
    tips: L(
      "Socks are usually required — check height zones before you pay so expectations match.",
      "มักต้องใส่ถุงเท้า — เช็คโซนความสูงก่อนจ่าย",
      "通常要穿袜——付款前看清身高分区。",
      "Нужны носки; проверьте ростовые зоны.",
    ),
  }),
  "nong-nooch": spot("nong-nooch", "Nong Nooch Tropical Garden Pattaya Thailand", {
    name: L("Nong Nooch Tropical Garden", "สวนนงนุช", "Nong Nooch 热带花园", "Nong Nooch"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~08:00–18:00", "~08:00–18:00", "约8:00–18:00", "~8:00–18:00"),
    bestTimeOfDay: L("Morning to late afternoon", "เช้าถึงบ่ายแก่", "上午至傍晚", "Утро–день"),
    scheduleVibe: L(
      "Gardens, dinosaurs, tram, shows",
      "สวน ไดโนเสาร์ รถชม โชว์",
      "花园、恐龙、观光车、表演",
      "Сады и шоу",
    ),
    ageRange: L("Walkable for all ages", "เดินได้ทุกวัย", "各年龄可步行", "Все возрасты"),
    ageRangeCompact: L("Garden day", "วันสวน", "花园日", "Сад"),
    highlights: [
      L("Huge gardens", "สวนใหญ่", "大花园", "Сады"),
      L("Dinosaur park", "ไดโนเสาร์", "恐龙园", "Динозавры"),
      L("Garden tram", "รถชมสวน", "观光车", "Трам"),
      L("Animal & cultural shows", "สัตว์ & การแสดง", "动物与文化表演", "Шоу"),
    ],
    vibe: L(
      "Adults enjoy the scenery; kids love dinosaurs and open space — photogenic all day.",
      "ผู้ใหญ่ชอบวิว เด็กชอบไดโนเสาร์และพื้นที่กว้าง — ถ่ายรูปสวย",
      "大人看景、孩子爱恐龙和开阔空间——全天好拍。",
      "Красиво и интересно всей семье.",
    ),
    bestFor: L(
      "Mixed ages when you want walking, shade, and shows without a water park.",
      "หลายวัยเมื่ออยากเดินสวน เงา โชว์ ไม่เน้นสวนน้ำ",
      "不想玩水、想散步看景看表演的多年龄家庭。",
      "Без аквапарка — сады и шоу.",
    ),
    tips: L(
      "Plan most of a day — wear comfy shoes; show times change, check at the gate.",
      "เผื่อเกือบทั้งวัน — ใส่รองเท้าสบาย เช็คเวลาโชว์ที่ประตู",
      "预留大半天——穿舒适鞋；演出时间门口确认。",
      "Почти целый день; уточните расписание шоу.",
    ),
    officialHref: "https://www.nongnooch-garden.com/",
  }),
} as const;

const spotOrder = [
  "aquaverse",
  "tiger-park",
  "underwater-world",
  "khao-kheow",
  "koh-larn",
  "harborland",
  "nong-nooch",
] as const satisfies readonly FamilyActivityImageId[];

function resolveSpot(lang: LanguageCode, key: keyof typeof guideSpots): FamilyGuideItem {
  const raw = guideSpots[key];
  return {
    id: raw.id,
    name: t(lang, raw.name),
    openDays: t(lang, raw.openDays),
    hoursRange: t(lang, raw.hoursRange),
    bestTimeOfDay: t(lang, raw.bestTimeOfDay),
    scheduleVibe: t(lang, raw.scheduleVibe),
    highlights: raw.highlights.map((h) => t(lang, h)),
    vibe: t(lang, raw.vibe),
    bestFor: raw.bestFor ? t(lang, raw.bestFor) : undefined,
    tips: raw.tips ? t(lang, raw.tips) : undefined,
    mapsHref: raw.mapsHref,
    officialHref: raw.officialHref,
    internalHref: raw.internalHref,
  };
}

export function getFamilyActivityImageForCard(id: FamilyActivityImageId): string {
  return getFamilyActivityImage(id);
}

export function getFamilyGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Pattaya with kids — easy wins",
        "พาครอบครัว + เด็ก ๆ ที่พัทยา",
        "芭提雅亲子游",
        "Паттайя с детьми",
      ),
    ),
    body: t(
      lang,
      L(
        "Pattaya is an easy family city: sea, water parks, zoos, cafés, malls, and kid activities — plus enough for adults not to get bored. We picked spots where kids have fun and parents do not burn out.",
        "พัทยาเที่ยวกับครอบครัวง่ายมาก — มีทั้งทะเล สวนน้ำ สวนสัตว์ คาเฟ่ ห้าง กิจกรรมเด็ก และผู้ใหญ่ก็ไม่เบื่อ เด้งคัดแบบเด็กสนุก ผู้ใหญ่ไม่เหนื่อยเกิน",
        "芭提雅很适合家庭：海、水上乐园、动物园、咖啡馆、商场与儿童活动，大人也不会无聊。我们挑选孩子开心、家长不太累的点。",
        "Паттайя удобна для семьи — море, парки, зоопарки, кафе и ТРЦ.",
      ),
    ),
    sourceNote: t(
      lang,
      L(
        "Hours and prices change — confirm on each venue's official site or at the gate on the day you go.",
        "เวลาและราคาเปลี่ยนได้ — ยืนยันที่เว็บทางการหรือหน้าประตูวันไป",
        "开放时间与票价可能变动——出行当日请在官网或门口确认。",
        "Часы и цены уточняйте в день визита.",
      ),
    ),
    openDaysLabel: t(lang, L("Open", "เปิด", "开放", "Открыто")),
    hoursRangeLabel: t(lang, L("Hours (guide)", "เวลา (คร่าว ๆ)", "时间（参考）", "Часы")),
    bestTimeLabel: t(lang, L("Best time", "เหมาะสุด", "最佳时段", "Лучшее время")),
    highlightsLabel: t(lang, L("Highlights", "เด่น", "亮点", "Изюминка")),
    vibeLabel: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Best for", "เหมาะกับ", "适合", "Кому")),
    tipsLabel: t(lang, L("Tip", "ทิป", "提示", "Совет")),
    openInMaps: t(lang, L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图打开 →", "Google Maps →")),
    directionsLabel: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    officialSiteLabel: t(lang, L("Official site →", "เว็บทางการ →", "官网 →", "Сайт →")),
    guideLinkLabel: t(lang, L("Full guide on Pattaya.com →", "คู่มือฉบับเต็ม →", "本站完整指南 →", "Полный гид →")),
  };
}

export function getFamilyAgeSchedule(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Which spot fits which age?",
        "แต่ละที่เหมาะวัยไหน",
        "各景点适合年龄",
        "Кому какое место",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Quick glance before you book — tap a row to jump to the full card.",
        "เช็คเร็วก่อนจอง — แตะแถวเพื่อไปการ์ดเต็ม",
        "预订前快速对照——点击行跳转到详情卡。",
        "Кратко — нажмите на строку к карточке.",
      ),
    ),
    columns: {
      spot: t(lang, L("Place", "สถานที่", "地点", "Место")),
      age: t(lang, L("Age fit", "เหมาะวัย", "适合年龄", "Возраст")),
      bestTime: t(lang, L("Best time", "เหมาะสุด", "最佳时段", "Время")),
      vibe: t(lang, L("In one line", "สรุปสั้น", "一句话", "Кратко")),
    },
    rows: spotOrder.map((key) => {
      const raw = guideSpots[key];
      const spot = resolveSpot(lang, key);
      return {
        id: spot.id,
        name: spot.name,
        ageRange: t(lang, raw.ageRange),
        ageRangeCompact: t(lang, raw.ageRangeCompact ?? raw.ageRange),
        bestTimeOfDay: spot.bestTimeOfDay,
        scheduleVibe: spot.scheduleVibe,
      } satisfies FamilyScheduleRow;
    }),
  };
}

const categoriesDef = [
  {
    id: "splash",
    title: L("Water & cool escapes", "สวนน้ำ & หลบร้อน", "玩水与避暑", "Вода и прохлада"),
    subtitle: L(
      "Scream-worthy slides or AC tunnels when the sun wins.",
      "สไลด์กรี๊ด หรืออุโมงค์ปลาแอร์เย็นเมื่อแดดแรง",
      "烈日下的尖叫滑道或空调海底隧道。",
      "Горки или туннель с кондиционером.",
    ),
    spotKeys: ["aquaverse", "underwater-world"] as const,
  },
  {
    id: "animals",
    title: L("Animals & safari day", "สัตว์ & ซาฟารี", "动物与 safari", "Животные"),
    subtitle: L(
      "Tigers up close or Thailand's best open zoo near Pattaya.",
      "เสือใกล้ ๆ หรือสวนสัตว์เปิดที่ดีที่สุดใกล้พัทยา",
      "近距离看虎，或芭提雅附近最佳开放动物园。",
      "Тигры или Khao Kheow.",
    ),
    spotKeys: ["tiger-park", "khao-kheow"] as const,
  },
  {
    id: "island-garden",
    title: L("Island, gardens & indoor play", "เกาะ สวน & เล่นในร่ม", "海岛、花园与室内", "Остров и сады"),
    subtitle: L(
      "Beach days, dinosaur gardens, and rainy-day playgrounds.",
      "วันหาด สวนไดโนเสาร์ และสนามเด็กเล่นวันฝน",
      "海滩日、恐龙花园、雨天室内游乐场。",
      "Пляж, Nong Nooch, HarborLand.",
    ),
    spotKeys: ["koh-larn", "harborland", "nong-nooch"] as const,
  },
] as const;

export function getFamilyGuideCategories(lang: LanguageCode): FamilyGuideCategory[] {
  return categoriesDef.map((cat) => ({
    id: cat.id,
    title: t(lang, cat.title),
    subtitle: t(lang, cat.subtitle),
    spots: cat.spotKeys.map((key) => resolveSpot(lang, key)),
  }));
}

export function getFamilyYoungKidsSection(lang: LanguageCode) {
  return {
    badge: t(lang, L("Ages 2–6", "อายุ 2–6 ขวบ", "2–6岁", "2–6 лет")),
    title: t(
      lang,
      L(
        "Best for toddlers & preschoolers",
        "เด็กเล็กมาก (2–6 ขวบ) ไปไหนดี",
        "幼童（2–6岁）去哪好",
        "Малыши 2–6 лет",
      ),
    ),
    intro: t(
      lang,
      L(
        "Skip extreme rides — these are calmer wins before nap time.",
        "ข้ามกิจกรรม extreme — เลือกแบบชิลก่อนเวลางีบ",
        "避开刺激项目——午睡前先选轻松的。",
        "Без экстрима — спокойнее.",
      ),
    ),
    items: [
      t(lang, L("Underwater World", "Underwater World", "Underwater World", "Underwater World")),
      t(lang, L("HarborLand", "HarborLand", "HarborLand", "HarborLand")),
      t(lang, L("Nong Nooch", "สวนนงนุช", "Nong Nooch", "Nong Nooch")),
      t(lang, L("Chill beach (Samae / Tien)", "หาดชิล ๆ (แสม / เทียน)", "安静海滩（Samae/Tien）", "Спокойный пляж")),
    ],
    picks: {
      title: t(lang, L("Skip for now if…", "ยังไม่เหมาะถ้า…", "若…可暂缓", "Пока пропустите")),
      items: [
        t(
          lang,
          L("Your child is nervous around big cats → Tiger Park", "ลูกกลัวสัตว์ใหญ่ → ข้าม Tiger Park", "孩子怕大型动物 → 暂缓 Tiger Park", "Страх тигров"),
        ),
        t(
          lang,
          L("You only want a quick swim → pick a calm bay, not peak Ta Waen", "อยากแค่ลงน้ำสั้น ๆ → หาดสงบ ไม่ใช่ตาแหวนช่วงคนแน่น", "只想短游 → 选安静湾，避开高峰塔湾", "Не пик Ta Waen"),
        ),
      ],
    },
  };
}

export function getFamilyDiningSection(lang: LanguageCode) {
  return {
    title: t(lang, L("Family-friendly eating", "สายกินแบบครอบครัว", "家庭用餐", "Еда с детьми")),
    subtitle: t(
      lang,
      L(
        "Malls when you need toilets, AC, easy food, and sweets.",
        "ห้างเมื่อต้องการห้องน้ำดี แอร์เย็น หาอะไรกินง่าย และของหวาน",
        "需要厕所、空调、多样餐饮和甜点时选商场。",
        "ТРЦ — туалеты, кондиционер, еда.",
      ),
    ),
    malls: [
      {
        name: t(lang, L("Terminal 21 Pattaya", "Terminal 21 Pattaya", "Terminal 21 Pattaya", "Terminal 21")),
        href: "https://www.google.com/maps/search/?api=1&query=Terminal+21+Pattaya",
        perks: [
          t(lang, L("Clean toilets", "ห้องน้ำดี", "厕所干净", "Туалеты")),
          t(lang, L("Lots of food courts", "ฟู้ดคอร์ทเยอะ", "美食广场多", "Фуд-корт")),
          t(lang, L("Kids can walk safely", "เด็กเดินได้สบาย", "孩子好走", "Детям удобно")),
        ],
      },
      {
        name: t(lang, L("Central Pattaya", "Central Pattaya", "Central Pattaya", "Central Pattaya")),
        href: "https://www.google.com/maps/search/?api=1&query=Central+Pattaya",
        perks: [
          t(lang, L("Air-conditioned", "แอร์เย็น", "空调", "Кондиционер")),
          t(lang, L("Toys & desserts", "ของเล่น/ของหวาน", "玩具与甜点", "Игрушки и десерты")),
          t(lang, L("Easy with strollers", "รถเข็นเด็กสะดวก", "婴儿车友好", "Коляски")),
        ],
      },
    ],
  };
}

export function getFamilyThreeDayPlan(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "Balanced 3-day family plan",
        "แพลนครอบครัว 3 วัน แบบกำลังดี",
        "均衡三日亲子行程",
        "План на 3 дня",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Not rushed — mix mall/indoor, one big outing, and one island day.",
        "ไม่แน่นเกิน — ผสมห้าง/ในร่ม ทริปใหญ่หนึ่งวัน และเกาะหนึ่งวัน",
        "不紧不慢——商场/室内、一次大出游、一次海岛。",
        "Без спешки — ТРЦ, экскурсия, остров.",
      ),
    ),
    days: [
      {
        id: "day-1",
        title: t(lang, L("Day 1 — City & indoor", "วัน 1 — เมือง & ในร่ม", "第1天 — 市区与室内", "День 1")),
        items: [
          t(lang, L("Terminal 21", "Terminal 21", "Terminal 21", "Terminal 21")),
          t(lang, L("HarborLand", "HarborLand", "HarborLand", "HarborLand")),
          t(lang, L("Dinner by the sea", "มื้อเย็นริมทะเล", "海边晚餐", "Ужин у моря")),
        ],
      },
      {
        id: "day-2",
        title: t(lang, L("Day 2 — Big outing", "วัน 2 — ทริปใหญ่", "第2天 — 大出游", "День 2")),
        items: [
          t(lang, L("Khao Kheow Open Zoo", "สวนสัตว์เปิดเขาเขียว", "Khao Kheow", "Khao Kheow")),
          t(lang, L("Café break", "พักคาเฟ่", "咖啡馆休息", "Кафе")),
          t(lang, L("Night market", "ตลาดกลางคืน", "夜市", "Ночной рынок")),
        ],
      },
      {
        id: "day-3",
        title: t(lang, L("Day 3 — Island", "วัน 3 — เกาะ", "第3天 — 海岛", "День 3")),
        items: [
          t(lang, L("Koh Larn (calm beach)", "เกาะล้าน (หาดสงบ)", "格兰岛（安静海滩）", "Ко Лан")),
          t(lang, L("Swim & sand play", "เล่นน้ำ เล่นทราย", "玩水玩沙", "Купание")),
          t(lang, L("Easy mall wind-down", "ปิดท้ายห้างเบา ๆ", "商场轻松收尾", "ТРЦ вечером")),
        ],
      },
    ],
  };
}
