import type { LanguageCode } from "@/lib/i18n/languages";
import {
  cafeGoogleMapsDirectionsHref,
  cafeMapPinById,
  cafesChillRouteHref,
  cafesHiddenRouteHref,
  cafesMapOpenHref,
  cafesMapRouteHref,
  type CafeMapPinId,
} from "@/lib/design/cafes-map";
import { getCafeGuideImage } from "@/lib/design/cafes-guide-images";
import { L, t } from "@/lib/i18n/living-helpers";

export type CafeGuideItem = {
  id: CafeMapPinId;
  category: string;
  name: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  highlights: string[];
  vibe: string;
  bestFor: string;
  mustTry?: string;
  tips?: string;
  phone?: string;
  phoneHref?: string;
  mapsHref: string;
  directionsHref: string;
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function telHref(number: string) {
  return `tel:${number.replace(/\s/g, "")}`;
}

function cafe(
  id: CafeMapPinId,
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
    mustTry?: ReturnType<typeof L>;
    tips?: ReturnType<typeof L>;
    phone?: string;
  },
) {
  const pin = cafeMapPinById[id];
  return {
    id,
    mapsHref: mapsQuery(maps),
    directionsHref: cafeGoogleMapsDirectionsHref(pin.lat, pin.lng),
    phoneHref: fields.phone ? telHref(fields.phone) : undefined,
    ...fields,
  };
}

const guideCafes = {
  "lunar-beach-house": cafe("lunar-beach-house", "The Lunar Beach House Pattaya Thailand", {
    category: L("Sea views & photos", "สายวิวทะเล / ถ่ายรูป", "海景与拍照", "Море и фото"),
    name: L("The Lunar Beach House", "The Lunar Beach House", "The Lunar Beach House", "The Lunar Beach House"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Check Maps · brunch to evening", "เช็ก Maps · brunch ถึงเย็น", "请查地图 · 早午餐至傍晚", "Уточняйте в Maps"),
    bestTimeOfDay: L("Late afternoon · sunset", "บ่ายแก่ · พระอาทิตย์ตก", "傍晚 · 日落", "Закат"),
    highlights: [
      L("Beach club + seaside café", "beach club + คาเฟ่ริมทะเล", "海滩俱乐部 + 海滨咖啡", "Beach club у моря"),
      L("Soft golden-hour light", "แสงเย็นละมุน", "柔和黄昏光线", "Мягкий свет на закате"),
      L("Coffee, brunch & evening cocktails", "กาแฟ brunch ค็อกเทลเย็น", "咖啡、早午餐与晚间鸡尾酒", "Кофе, бранч, коктейли"),
      L("Long sit-friendly", "นั่งยาวได้", "适合久坐", "Можно сидеть долго"),
    ],
    vibe: L(
      "Beach club meets café — pretty evening light, coffee and brunch by day, cocktails as the sun drops.",
      "ฟีล beach club + คาเฟ่ริมทะเล — แสงเย็นสวย กาแฟ brunch กลางวัน ค็อกเทลช่วงเย็น",
      "海滩俱乐部式咖啡——白天咖啡早午餐，日落时分鸡尾酒，傍晚光线很美。",
      "Beach club и кофе — красивый закат.",
    ),
    bestFor: L(
      "Long hangs with friends, dates, and anyone who wants sea air with their latte.",
      "นั่งยาวกับเพื่อน เดท อยากลมทะเลคู่ลาเต้",
      "与朋友长聊、约会、想要海风配咖啡的人。",
      "Долгие посиделки и свидания у моря.",
    ),
    mustTry: L("Brunch plate + iced coffee at golden hour", "จาน brunch + กาแฟเย็นช่วงเย็น", "黄昏时早午餐 + 冰咖啡", "Бранч и iced coffee на закате"),
    phone: "+66808250959",
  }),
  "siris-beach-cafe": cafe("siris-beach-cafe", "Siri's Beach Cafe Na Chom Thian Pattaya Thailand", {
    category: L("Sea views & photos", "สายวิวทะเล / ถ่ายรูป", "海景与拍照", "Море и фото"),
    name: L("Siri's Beach Café", "Siri's Beach Café", "Siri's Beach Café", "Siri's Beach Café"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Check Maps · day to sunset", "เช็ก Maps · กลางวันถึงเย็น", "请查地图 · 白天至日落", "Уточняйте в Maps"),
    bestTimeOfDay: L("Mid-afternoon to sunset", "บ่ายแก่ถึง sunset", "下午至日落", "День — закат"),
    highlights: [
      L("Na Jomtien location", "โซนนาจอมเทียน", "Na Jomtien 区域", "Na Jomtien"),
      L("Seafront breeze", "ติดทะเล ลมดี", "临海、海风好", "У моря, ветер"),
      L("Slower than central Pattaya", "ช้าลงจากพัทยากลาง", "比芭提雅中心慢", "Тише центра"),
      L("Escape-the-crowds mood", "ฟีลหลุดจากความวุ่นวาย", "逃离喧嚣的氛围", "Вдали от суеты"),
    ],
    vibe: L(
      "Na Jomtien slows down here — seafront seating and breeze that feels miles from noisy central Pattaya.",
      "โซนนาจอมเทียน บรรยากาศช้าลงจริง ๆ — ติดทะเล ลมดี ฟีลหลุดจากพัทยาที่วุ่นวาย",
      "Na Jomtien 区真正慢下来——临海座位与海风，像远离喧嚣的芭提雅。",
      "Na Jomtien — спокойнее и у моря.",
    ),
    bestFor: L(
      "Afternoon-to-sunset sessions when you want calm, not queues.",
      "บ่ายแก่ถึง sunset อยากเงียบ ไม่อยากแย่งคิว",
      "想要安静、不想排队时，下午到日落最合适。",
      "Тихий полдень и закат.",
    ),
    mustTry: L("Iced coffee facing the Gulf", "กาแฟเย็นวิวอ่าว", "面向海湾的冰咖啡", "Iced coffee с видом"),
    phone: "+66635303756",
  }),
  "smore-beach-cafe": cafe("smore-beach-cafe", "S'more Beach Cafe Pattaya Thailand", {
    category: L("Sea views & photos", "สายวิวทะเล / ถ่ายรูป", "海景与拍照", "Море и фото"),
    name: L("S'more Beach Cafe", "S'more Beach Cafe", "S'more Beach Cafe", "S'more Beach Cafe"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Check Maps", "เช็ก Maps", "请查地图", "Уточняйте в Maps"),
    bestTimeOfDay: L("Daytime · bright light", "กลางวัน · แสงสว่าง", "白天 · 光线好", "Днём"),
    highlights: [
      L("Cute Korean-style vibe", "โทนเกาหลี ๆ คิวท์", "韩式可爱风", "Корейский cute-вайб"),
      L("Photo props everywhere", "พร็อพถ่ายรูปเยอะ", "拍照道具多", "Много реквизита"),
      L("Pretty desserts", "ขนมหน้าตาน่ารัก", "甜点颜值高", "Красивые десерты"),
      L("“Beach day” content", "คอนเทนต์ “วันนี้ฉันมาทะเล”", "“今天我来海边”式内容", "Контент «я на море»"),
    ],
    vibe: L(
      "Cute, Korean-leaning beach café — props, pastel desserts, and easy “today I went to the sea” photos.",
      "คาเฟ่สายคิวท์ โทนเกาหลี ๆ — พร็อพเยอะ ขนมน่ารัก ถ่าย “วันนี้ฉันมาทะเล” ง่าย",
      "韩式可爱海滨咖啡——道具多、甜点好看，轻松拍出“今天来海边了”。",
      "Милое кафе в корейском стиле у моря.",
    ),
    bestFor: L(
      "Content days, friend groups who love cute corners, and dessert-first café hops.",
      "สายคอนเทนต์ กลุ่มเพื่อนชอบมุมน่ารัก อยากเริ่มจากของหวาน",
      "出片日、爱可爱角落的朋友、以甜点为主的咖啡巡游。",
      "Для фото и десертов.",
    ),
    mustTry: L("Signature cute dessert + iced latte", "ขนม signature + ลาเต้เย็น", "招牌可爱甜点 + 冰拿铁", "Десерт + iced latte"),
    phone: "+66939519791",
  }),
  "sunset-coffee-roasters": cafe(
    "sunset-coffee-roasters",
    "Sunset Coffee Roasters Flagship Store N Pattaya Rd Pattaya Thailand",
    {
      category: L("Specialty coffee", "สายกาแฟจริงจัง", "精品咖啡", "Specialty coffee"),
      name: L("Sunset Coffee Roasters", "Sunset Coffee Roasters", "Sunset Coffee Roasters", "Sunset Coffee Roasters"),
      openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
      hoursRange: L("Check Maps · usually ~08:00–18:00", "เช็ก Maps · มัก ~08:00–18:00", "请查地图 · 通常约8:00–18:00", "Обычно ~8:00–18:00"),
      bestTimeOfDay: L("Morning · early afternoon", "เช้า · บ่ายต้น", "早晨 · 下午早些时候", "Утро"),
      highlights: [
        L("Flagship roastery store", "ร้าน flagship คั่วเอง", "旗舰烘焙店", "Флагманская обжарка"),
        L("Quality beans & gear", "เมล็ดดี เครื่องดี", "豆子与设备好", "Зерно и оборудование"),
        L("Minimal cool interior", "มินิมอล เท่", "极简有型", "Минимализм"),
        L("Latte · pour-over · espresso tonic", "latte / pour-over / espresso tonic", "拿铁、手冲、Espresso tonic", "Latte, pour-over, tonic"),
      ],
      vibe: L(
        "Pattaya coffee people talk about this one — serious beans, clean minimal room, and a menu that rewards coffee nerds.",
        "คนสายกาแฟพูดถึงเยอะ — เมล็ดดี ร้านมินิมอล เมนูครบสำหรับคนรักกาแฟ",
        "咖啡爱好者常提的一家——好豆子、极简空间、菜单对咖啡迷友好。",
        "Любимое место coffee-nerds.",
      ),
      bestFor: L(
        "Your first specialty stop in Pattaya, pour-over fans, and anyone comparing local roasters.",
        "จุดแรกสาย specialty คนชอบ pour-over อยากเทียบร้านคั่วในพัทยา",
        "芭提雅第一家精品咖啡、手冲爱好者、想对比本地烘焙的人。",
        "Первый specialty-stop в Pattaya.",
      ),
      mustTry: L("Pour-over of the day or espresso tonic", "pour-over ประจำวัน หรือ espresso tonic", "当日手冲或 Espresso tonic", "Pour-over дня или espresso tonic"),
      phone: "+66946028396",
    },
  ),
  "albatross-coffee": cafe("albatross-coffee", "Albatross Coffee Roasters Pattaya Thailand", {
    category: L("Specialty coffee", "สายกาแฟจริงจัง", "精品咖啡", "Specialty coffee"),
    name: L("Albatross Coffee Roasters", "Albatross Coffee Roasters", "Albatross Coffee Roasters", "Albatross Coffee Roasters"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Check Maps", "เช็ก Maps", "请查地图", "Уточняйте в Maps"),
    bestTimeOfDay: L("Late morning · slow afternoon", "สาย ๆ · บ่ายชิล", "上午 · 悠闲下午", "Утро — спокойный день"),
    highlights: [
      L("Warm, easy atmosphere", "บรรยากาศอบอุ่น นั่งง่าย", "氛围温暖、好坐", "Тёплая атмосфера"),
      L("Coffee + bakery", "กาแฟ + เบเกอรี่", "咖啡 + 烘焙", "Кофе и выпечка"),
      L("Unhurried pace", "ไม่ต้องรีบ", "节奏不急", "Без спешки"),
      L("Local coffee crowd favourite", "คอกาแฟชอบ", "本地咖啡客爱去", "Любимое у местных"),
    ],
    vibe: L(
      "Coffee lovers' living room — warm lighting, solid bakery case, and a pace that says stay as long as you like.",
      "คาเฟ่ที่คอกาแฟค่อนข้างรัก — อบอุ่น นั่งง่าย มีทั้ง coffee และ bakery",
      "咖啡爱好者会喜欢的店——温暖、好坐，咖啡与烘焙都有。",
      "Как гостиная для любителей кофе.",
    ),
    bestFor: L(
      "Slow days, reading, and pairing pastry with a flat white.",
      "วันพักแบบไม่รีบ อ่านหนังสือ คู่เบเกอรี่กับ flat white",
      "不赶的日子、阅读、可颂配 flat white。",
      "Медленный день с выпечкой.",
    ),
    mustTry: L("House pastry + flat white", "เบเกอรี่ house + flat white", "招牌烘焙 + flat white", "Выпечка + flat white"),
    phone: "+66924689897",
  }),
  "squid-coffee": cafe("squid-coffee", "SQUID COFFEE Espresso Specialty Coffee Pattaya Thailand", {
    category: L("Specialty coffee", "สายกาแฟจริงจัง", "精品咖啡", "Specialty coffee"),
    name: L("SQUID COFFEE", "SQUID COFFEE", "SQUID COFFEE", "SQUID COFFEE"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Check Maps", "เช็ก Maps", "请查地图", "Уточняйте в Maps"),
    bestTimeOfDay: L("Morning · off-peak hours", "เช้า · นอก peak", "早晨 · 非高峰", "Утро"),
    highlights: [
      L("Small shop, serious espresso", "ร้านเล็ก กาแฟจริงจัง", "小店、专业 espresso", "Маленькое, но серьёзное"),
      L("High review scores", "รีวิวสูง", "评价高", "Высокие оценки"),
      L("Rotating beans", "เมล็ดหมุนเปลี่ยน", "豆子轮换", "Меняющееся зерно"),
      L("For adventurous palates", "สนุกถ้าชอบลองเมล็ดแปลก ๆ", "适合爱试新豆的人", "Для экспериментов"),
    ],
    vibe: L(
      "Tiny footprint, big coffee standards — the kind of place specialty regulars find on their own.",
      "ร้านเล็กแต่กาแฟจริงจังมาก — สาย specialty มักเจอเอง",
      "店面小但咖啡很认真——精品咖啡常客会自己找到这里。",
      "Маленькое, но с высокой планкой.",
    ),
    bestFor: L(
      "Espresso purists, bean hunters, and quick quality stops between beach and city.",
      "สาย espresso นักล่าเมล็ด แวะคุณภาพระหว่างหาดกับเมือง",
      "Espresso 纯粹派、找豆子的人、海滩与市区之间快速喝一杯。",
      "Для purists и охотников за зерном.",
    ),
    mustTry: L("Ask what's on the bar today", "ถามบาร์วันนี้ใช้อะไร", "问 bar 今天用什么豆", "Спросите зерно дня"),
    phone: "+66893322777",
  }),
  "backstreet-house": cafe("backstreet-house", "Backstreet House Pattaya Thailand", {
    category: L("Hidden gem mood", "สาย hidden gem", "隐藏气质", "Hidden gem"),
    name: L("Backstreet House Pattaya", "Backstreet House Pattaya", "Backstreet House Pattaya", "Backstreet House"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Check Maps · day into evening", "เช็ก Maps · กลางวันถึงเย็น", "请查地图 · 白天至晚间", "День — вечер"),
    bestTimeOfDay: L("Daytime work · evening mood", "กลางวันทำงาน · กลางคืน mood ดี", "白天办公 · 晚间氛围", "День или вечер"),
    highlights: [
      L("Homely + artistic corners", "ฟีลโฮมมี่ + artistic", "居家感 + 艺术角落", "Домашне и arty"),
      L("Laptop-friendly", "นั่งทำงานได้", "适合办公", "Для ноутбука"),
      L("Books & photo play", "อ่านหนังสือ ถ่ายรูปเล่น", "看书、随手拍照", "Книги и фото"),
      L("Evening atmosphere shifts", "กลางคืนบางวัน mood ดีมาก", "有些夜晚氛围特别好", "Вечером особенно"),
    ],
    vibe: L(
      "A slightly hidden house café — homely, a little artistic, and surprisingly good for getting work done before the evening mood kicks in.",
      "คาเฟ่ลับฟีลโฮมมี่ + artistic — นั่งทำงาน อ่านหนังสือ ถ่ายรูปเล่น กลางคืนบางวัน mood ดีมาก",
      "有点隐蔽的居家风咖啡——适合工作、阅读、拍照，有些夜晚氛围特别好。",
      "Уютное «домашнее» кафе с arty-деталями.",
    ),
    bestFor: L(
      "Solo café days, remote work off-peak, and anyone avoiding loud beach-club playlists.",
      "ไปคนเดียว ทำงานนอก peak ไม่อยากเพลง beach club ดัง ๆ",
      "独自咖啡日、非高峰远程办公、不想听 beach club 大音量的人。",
      "Один, работа, без шумных плейлистов.",
    ),
    tips: L(
      "Evenings can feel different from daytime — worth a second visit after dark if you liked the afternoon calm.",
      "กลางคืนฟีลต่างจากกลางวัน — ถ้าชอบตอนบ่าย ลองกลับมาตอนมืดอีกครั้ง",
      "夜晚与白天感觉不同——若喜欢下午的清静，值得晚上再来。",
      "Вечером другой вайб — загляните снова.",
    ),
    phone: "+66646362365",
  }),
  "sheeva-cafe": cafe("sheeva-cafe", "Sheeva Cafe Sukhumvit Pattaya 75 Thailand", {
    category: L("Hidden gem mood", "สาย hidden gem", "隐藏气质", "Hidden gem"),
    name: L("Sheeva Cafe", "Sheeva Cafe", "Sheeva Cafe", "Sheeva Cafe"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Check Maps", "เช็ก Maps", "请查地图", "Уточняйте в Maps"),
    bestTimeOfDay: L("Morning · soft light", "ช่วงสาย ๆ แสงสวย", "上午 · 光线柔和", "Утро"),
    highlights: [
      L("Large tropical garden", "สวน tropical ใหญ่", "大型热带花园", "Большой tropical-сад"),
      L("Lots of greenery", "ต้นไม้เยอะ", "绿植多", "Много зелени"),
      L("Solid drinks & desserts", "เครื่องดื่มและขนมทำดี", "饮品与甜点都不错", "Хорошие напитки и десерты"),
      L("Very popular in reviews", "รีวิวเยอะมาก", "评价很多", "Много отзывов"),
    ],
    vibe: L(
      "Big garden café — tropical greenery everywhere, well-made drinks and desserts, and morning light that photographers love.",
      "ร้านใหญ่ ต้นไม้เยอะ ฟีล tropical garden — ขนมกับเครื่องดื่มทำดี แสงสายสวย",
      "大型花园咖啡——热带绿植、饮品甜点做得好，上午光线很受拍照党欢迎。",
      "Большой садовый café с tropical-зеленью.",
    ),
    bestFor: L(
      "Brunch with parents, garden walks between sips, and anyone who wants nature without leaving town.",
      "บรันช์พาผู้ใหญ่ เดินในสวนระหว่างจิบ อยากธรรมชาติแต่ไม่ออกนอกเมือง",
      "带长辈早午餐、边喝边逛花园、想在城里感受自然的人。",
      "Бранч в саду, природа в городе.",
    ),
    mustTry: L("Garden-seat brunch + Thai tea soft-serve if available", "บรันช์นั่งสวน + ชาไทย soft-serve ถ้ามี", "花园位早午餐 + 有的话试泰茶 soft-serve", "Бранч в саду"),
    phone: "+66817823099",
  }),
  "vanvela-cafe": cafe("vanvela-cafe", "VANVELA cafe space Nong Pla Lai Pattaya Thailand", {
    category: L("Hidden gem mood", "สาย hidden gem", "隐藏气质", "Hidden gem"),
    name: L("VANVELA cafe & space", "VANVELA cafe & space", "VANVELA cafe & space", "VANVELA"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("Check Maps", "เช็ก Maps", "请查地图", "Уточняйте в Maps"),
    bestTimeOfDay: L("Weekday morning · quiet hours", "เช้าวันธรรมดา ช่วงเงียบ", "工作日早晨 · 安静时段", "Утро в будни"),
    highlights: [
      L("Minimal natural tones", "โทนมินิมอลธรรมชาติ", "极简自然色调", "Минимализм и природа"),
      L("Hint of Japanese calm", "ความญี่ปุ่นนิด ๆ", "一点日式静感", "Японское спокойствие"),
      L("Very peaceful", "สงบมาก", "非常安静", "Очень тихо"),
      L("Escape-the-crowds pick", "หนีคนได้จริง", "真能躲开人群", "Убежать от толпы"),
    ],
    vibe: L(
      "Minimal, nature-led, quietly Japanese-leaning — the café you pick when you want Pattaya to feel far away.",
      "โทนมินิมอลธรรมชาติ มีความญี่ปุ่นนิด ๆ สงบมาก — เหมาะวันอยากหนีคน",
      "极简自然、略带日式静感——想躲开人群时会选这里。",
      "Минимализм и тишина — вдали от толпы.",
    ),
    bestFor: L(
      "Solo recharge days, journaling, and anyone who finds central café queues exhausting.",
      "ไปคนเดียวชาร์จพลัง จด journalling ไม่อยากแย่งคิวกลางเมือง",
      "独自充电、写日记、厌倦市中心咖啡排队的人。",
      "Один, тишина, без очередей.",
    ),
    tips: L(
      "Grab or car is easier than expecting a beach-road walk — it's tucked in Nong Pla Lai side streets.",
      "เรียก Grab หรือขับรถสะดวกกว่าเดินจาก Beach Rd — ซ่อนในซอยโซน Nong Pla Lai",
      "Grab 或开车比从 Beach Rd 走过去方便——藏在 Nong Pla Lai 巷子里。",
      "Удобнее Grab — в стороне от Beach Rd.",
    ),
    phone: "+66616595659",
  }),
} as const;

export function getCafeGuideItems(lang: LanguageCode): CafeGuideItem[] {
  return (Object.values(guideCafes) as (typeof guideCafes)[keyof typeof guideCafes][]).map((item) => ({
    id: item.id,
    category: t(lang, item.category),
    name: t(lang, item.name),
    openDays: t(lang, item.openDays),
    hoursRange: t(lang, item.hoursRange),
    bestTimeOfDay: t(lang, item.bestTimeOfDay),
    highlights: item.highlights.map((h) => t(lang, h)),
    vibe: t(lang, item.vibe),
    bestFor: t(lang, item.bestFor),
    mustTry: item.mustTry ? t(lang, item.mustTry) : undefined,
    tips: item.tips ? t(lang, item.tips) : undefined,
    phone: item.phone,
    phoneHref: item.phoneHref,
    mapsHref: item.mapsHref,
    directionsHref: item.directionsHref,
  }));
}

export function getCafesForMap(lang: LanguageCode) {
  return getCafeGuideItems(lang).map((item) => ({
    ...item,
    pin: cafeMapPinById[item.id],
  }));
}

export function getCafeMapCopy(lang: LanguageCode) {
  return {
    title: t(lang, L("Café map", "แผนที่คาเฟ่", "咖啡馆地图", "Карта кафе")),
    subtitle: t(
      lang,
      L(
        "Nine picks by vibe — tap a pin for directions.",
        "9 ร้านแยกตามสาย — แตะหมุดดูเส้นทาง",
        "按类型精选九家——点击图钉导航。",
        "9 мест — нажмите на метку для маршрута.",
      ),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open place", "เปิดสถานที่", "打开地点", "Открыть")),
    openRoute: t(
      lang,
      L("Open suggested café route in Maps", "เปิดเส้นทางคาเฟ่แนะนำใน Maps", "在地图中打开推荐咖啡路线", "Маршрут кафе в Maps"),
    ),
    openRouteHref: cafesMapRouteHref,
    openAll: t(lang, L("Browse cafés in Pattaya →", "ดูคาเฟ่ในพัทยา →", "浏览芭提雅咖啡馆 →", "Кафе Pattaya →")),
    openAllHref: cafesMapOpenHref,
    legendGuide: t(lang, L("9 cafés", "9 ร้าน", "9 家", "9 кафе")),
  };
}

export function getCafeGuideIntro(lang: LanguageCode) {
  return {
    title: t(lang, L("Choose your café line", "เลือกสายคาเฟ่", "选择咖啡类型", "Выберите тип кафе")),
    body: t(
      lang,
      L(
        "Pattaya is a real café-hopping city — beach-club mornings, serious specialty roasters, and hidden garden spots with completely different moods. Below: nine trusted picks sorted by vibe.",
        "พัทยาคือสายคาเฟ่ฮอปจริง — มีตั้งแต่คาเฟ่ทะเล vibe ดี ยัน specialty coffee จริงจัง และ hidden gem mood ดี ด้านล่างคือ 9 ร้านแนะนำแยกสาย",
        "芭提雅是名副其实的咖啡巡游城市——海滨 club 早晨、认真精品烘焙、以及气质完全不同的隐藏花园店。下列九家按类型精选。",
        "Pattaya — настоящий café-hopping: море, specialty и hidden gems.",
      ),
    ),
    pillars: [
      t(lang, L("Sea views & golden hour", "วิวทะเล / แสงเย็น", "海景与黄金时段", "Море и закат")),
      t(lang, L("Specialty & roasters", "specialty & roasters", "精品与烘焙", "Specialty")),
      t(lang, L("Hidden gardens & calm", "hidden garden / เงียบ", "隐藏花园与安静", "Сады и тишина")),
      t(lang, L("Jomtien & Naklua clusters", "โซน Jomtien / Naklua คาเฟ่ดี", "Jomtien 与 Naklua 聚集", "Jomtien и Naklua")),
    ],
    sourceNote: t(
      lang,
      L(
        "Hours and menus change — confirm on Google Maps or call ahead.",
        "เวลาและเมนูเปลี่ยนได้ — เช็กก่อนไปหรือโทรถาม",
        "时间与菜单会变——请查地图或致电确认。",
        "Уточняйте часы и меню в Maps или по телефону.",
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
    mustTryLabel: t(lang, L("Must try", "ต้องลอง", "必试", "Попробуйте")),
    tipsLabel: t(lang, L("Tip", "เคล็ดลับ", "提示", "Совет")),
    openDaysLabel: t(lang, L("Open", "เปิดวัน", "开放", "Дни")),
    hoursRangeLabel: t(lang, L("Hours", "เวลาโดยประมาณ", "时间", "Часы")),
    bestTimeLabel: t(lang, L("Best time", "ช่วงเวลาดี", "最佳时段", "Лучшее время")),
  };
}

export function getCafeMoodPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("Match your mood", "เลือกตามอารมณ์อยากไป", "按心情选择", "По настроению")),
    subtitle: t(
      lang,
      L("Quick picks when you know how you want the day to feel.", "สรุปสั้น ๆ ตามฟีลที่อยากได้", "按你想要的氛围快速选。", "Коротко по настроению."),
    ),
    groups: [
      {
        title: t(lang, L("Sunset & sea breeze", "อยากพระอาทิตย์ตก ลมทะเล", "日落与海风", "Закат и море")),
        pick: t(lang, L("→ The Lunar Beach House", "→ The Lunar Beach House", "→ The Lunar", "→ The Lunar")),
        cafeId: "lunar-beach-house" as const,
      },
      {
        title: t(lang, L("Escape central chaos", "อยากหลุดจากพัทยาวุ่น", "逃离市中心喧嚣", "Вдали от суеты")),
        pick: t(lang, L("→ Siri's Beach Café", "→ Siri's Beach Café", "→ Siri's", "→ Siri's Beach Café")),
        cafeId: "siris-beach-cafe" as const,
      },
      {
        title: t(lang, L("Cute content day", "สายคอนเทนต์ คิวท์ ๆ", "可爱出片日", "Милый контент")),
        pick: t(lang, L("→ S'more Beach Cafe", "→ S'more Beach Cafe", "→ S'more", "→ S'more")),
        cafeId: "smore-beach-cafe" as const,
      },
      {
        title: t(lang, L("Serious coffee", "สายกาแฟจริงจัง", "认真喝咖啡", "Серьёзный кофе")),
        pick: t(lang, L("→ Sunset Coffee Roasters", "→ Sunset Coffee Roasters", "→ Sunset Coffee", "→ Sunset Coffee")),
        cafeId: "sunset-coffee-roasters" as const,
      },
      {
        title: t(lang, L("Slow & unhurried", "อยากพักแบบไม่รีบ", "慢慢休息", "Без спешки")),
        pick: t(lang, L("→ Albatross Coffee Roasters", "→ Albatross Coffee Roasters", "→ Albatross", "→ Albatross")),
        cafeId: "albatross-coffee" as const,
      },
      {
        title: t(lang, L("Garden morning", "เช้าในสวน", "花园早晨", "Утро в саду")),
        pick: t(lang, L("→ Sheeva Cafe", "→ Sheeva Cafe", "→ Sheeva", "→ Sheeva")),
        cafeId: "sheeva-cafe" as const,
      },
    ],
  };
}

export function getCafeFirstVisitPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("First visit?", "ไปครั้งแรกควรไปไหน?", "第一次来？", "Первый раз?")),
    subtitle: t(
      lang,
      L("If you only have time for one or two stops.", "ถ้ามีเวลาแค่หนึ่งหรือสองที่", "时间只够去一两处时。", "Если мало времени."),
    ),
    items: [
      {
        title: t(lang, L("Only one café", "ไปได้ร้านเดียว", "只能去一家", "Одно кафе")),
        body: t(
          lang,
          L(
            "Sunset Coffee Roasters — Pattaya's most talked-about specialty flagship, easy to reach on North Pattaya Rd.",
            "Sunset Coffee Roasters — specialty ที่คนพูดถึงเยอะ flagship บน North Pattaya Rd เข้าถึงง่าย",
            "Sunset Coffee Roasters——最受讨论的精品旗舰，North Pattaya Rd 上好找。",
            "Sunset Coffee Roasters — главный specialty-stop.",
          ),
        ),
        cafeId: "sunset-coffee-roasters" as const,
      },
      {
        title: t(lang, L("Want beach café vibes", "อยากฟีลคาเฟ่ทะเล", "想要海滨咖啡氛围", "Кафе у моря")),
        body: t(
          lang,
          L(
            "The Lunar Beach House or Siri's Beach Café — golden light, sea air, and a completely different pace from Beach Road queues.",
            "The Lunar Beach House หรือ Siri's Beach Café — แสงเย็น ลมทะเล ฟีลต่างจากคิว Beach Road",
            "The Lunar 或 Siri's——黄昏光线、海风，和 Beach Road 排队完全不同的节奏。",
            "The Lunar или Siri's — море и другой темп.",
          ),
        ),
        cafeId: "lunar-beach-house" as const,
      },
    ],
  };
}

export function getCafeHoppingRoute(lang: LanguageCode) {
  const mapsSearch = (query: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return {
    title: t(
      lang,
      L("Pattaya Cafe Hopping Route", "Pattaya Cafe Hopping Route", "芭提雅咖啡巡游路线", "Pattaya Cafe Hopping Route"),
    ),
    subtitle: t(
      lang,
      L(
        "Two ready-made day plans — doable in real life, minimal backtracking, and each stop feels clearly different.",
        "จัด 2 แพลนไปได้จริง ไม่วนรถเยอะ แต่ละร้าน mood ต่างกันชัด",
        "两条可执行的日计划——少绕路，每站气质分明。",
        "Два маршрута на день — без лишних кругов, разный mood на каждой остановке.",
      ),
    ),
    footnote: t(
      lang,
      L(
        "Many regulars say Na Jomtien and Naklua have Pattaya's strongest café scene right now — quieter and better sea views than central Beach Road.",
        "หลายรีวิวบอกว่าโซน Na Jomtien กับ Naklua บรรยากาศคาเฟ่ดีที่สุดในพัทยาช่วงนี้ — เงียบกว่าและวิวทะเลสวยกว่าโซนกลางเมือง",
        "不少常客说目前 Na Jomtien 与 Naklua 是芭提雅咖啡氛围最好的区域——比 Beach Road 中心更安静、海景更好。",
        "Na Jomtien и Naklua сейчас — сильнее café-сцена, чем центр Beach Road.",
      ),
    ),
    openRouteLabel: t(
      lang,
      L("Open route in Google Maps →", "เปิดเส้นทางใน Google Maps →", "在 Google 地图中打开路线 →", "Маршрут в Maps →"),
    ),
    routes: [
      {
        id: "chill-sea" as const,
        title: t(
          lang,
          L("Route 1 — Chill day, photos & sea", "Route 1 — วันชิลล์ ถ่ายรูปสวย + ทะเล", "路线 1 — 轻松拍照 + 海景", "Маршрут 1 — chill, фото и море"),
        ),
        subtitle: t(
          lang,
          L(
            "Best for cute outfits, slow walks, and catching sunset.",
            "เหมาะวันอยากแต่งตัวน่ารัก เดินเรื่อย ๆ ดู sunset",
            "适合穿得好看、慢慢逛、看日落的一天。",
            "Для красивых образов, прогулок и заката.",
          ),
        ),
        openRouteHref: cafesChillRouteHref,
        stops: [
          {
            timeLabel: t(lang, L("Morning — specialty first", "☀️ เช้า — specialty coffee ก่อน", "早晨 — 先喝精品咖啡", "Утро — specialty")),
            title: t(lang, L("Sunset Coffee Roasters", "Sunset Coffee Roasters", "Sunset Coffee Roasters", "Sunset Coffee Roasters")),
            body: t(
              lang,
              L(
                "Start with serious coffee in a minimal room — morning light is especially pretty here.",
                "เริ่มที่ Sunset Coffee Roasters — กาแฟดีจริง ร้านมินิมอล แสงเช้าสวยมาก",
                "从 Sunset Coffee Roasters 开始——咖啡扎实、空间极简，早晨光线尤其好看。",
                "Sunset Coffee Roasters — хороший кофе, минимализм, красивое утро.",
              ),
            ),
            mustTry: t(lang, L("Iced latte or dirty coffee", "iced latte หรือ dirty coffee", "冰拿铁或 dirty coffee", "Iced latte или dirty coffee")),
            cafeId: "sunset-coffee-roasters" as const,
          },
          {
            timeLabel: t(lang, L("Afternoon — beach café", "🌊 บ่าย — คาเฟ่ติดทะเล", "下午 — 海滨咖啡", "День — у моря")),
            title: t(lang, L("Siri's Beach Café", "Siri's Beach Café", "Siri's Beach Café", "Siri's Beach Café")),
            body: t(
              lang,
              L(
                "Sea breeze and a slower pace — order brunch and cold drinks, then let time drift.",
                "ต่อ Siri's Beach Café — vibe ดีมาก ลมทะเลแบบนั่งได้ยาว เหมาะสั่ง brunch + เครื่องดื่มเย็น แล้วนั่งปล่อยเวลา",
                "接着去 Siri's Beach Café——氛围很好、海风舒服，适合早午餐加冰饮，慢慢坐。",
                "Siri's Beach Café — бриз, brunch, можно сидеть долго.",
              ),
            ),
            cafeId: "siris-beach-cafe" as const,
            alternative: {
              label: t(
                lang,
                L("Or Skoop Beach Café — cuter, brighter, great for outfits", "หรือ Skoop Beach Café — คิวท์กว่า สีสวย ถ่าย outfit สนุก", "或 Skoop Beach Café——更可爱、色彩更亮、适合拍穿搭", "Или Skoop Beach Café — cute и для outfit"),
              ),
              href: mapsSearch("Skoop Beach Cafe Pattaya Thailand"),
            },
          },
          {
            timeLabel: t(lang, L("Evening — rooftop sunset", "🌅 เย็น — rooftop ดูพระอาทิตย์ตก", "傍晚 — 屋顶看日落", "Вечер — rooftop закат"),
            ),
            title: t(
              lang,
              L("Skybar Summer Club or Sola Luna Rooftop", "Skybar Summer Club หรือ Sola Luna Rooftop", "Skybar Summer Club 或 Sola Luna Rooftop", "Skybar Summer Club или Sola Luna"),
            ),
            body: t(
              lang,
              L(
                "Finish around 17:30 for the best light — grown-up Pattaya vibes with a strong sunset view.",
                "ปิดท้าย Skybar Summer Club หรือ Sola Luna — sunset ดีมาก ฟีล “พัทยาที่โตแล้ว” แนะนำไปประมาณ 5 โมงครึ่งกำลังสวย",
                "在 Skybar Summer Club 或 Sola Luna 收尾——日落很美，更有“成熟的芭提雅”感觉，建议约 17:30 到。",
                "Skybar Summer Club или Sola Luna — закат около 17:30, «взрослая» Pattaya.",
              ),
            ),
            mapsHref: mapsSearch("Skybar Summer Club Pattaya Thailand"),
            alternative: {
              label: t(lang, L("Sola Luna Rooftop →", "Sola Luna Rooftop →", "Sola Luna Rooftop →", "Sola Luna →")),
              href: mapsSearch("Sola Luna Rooftop Restaurant Pattaya Thailand"),
            },
          },
        ],
      },
      {
        id: "hidden-gem" as const,
        title: t(
          lang,
          L("Route 2 — Hidden gems, fewer crowds", "Route 2 — hidden gem / คนไม่พลุกพล่าน", "路线 2 — 隐藏气质、人少", "Маршрут 2 — hidden gems, без толпы"),
        ),
        subtitle: t(
          lang,
          L(
            "Best for recharging — work, read, and skip the busy central queues.",
            "เหมาะวันอยากพักใจ ไม่อยากเจอคนเยอะ",
            "适合想休息、不想挤市中心排队的一天。",
            "Для спокойного дня без очередей в центре.",
          ),
        ),
        openRouteHref: cafesHiddenRouteHref,
        stops: [
          {
            timeLabel: t(lang, L("Morning — green garden", "🌱 เริ่มเช้าที่สวนเขียว ๆ", "早晨 — 绿色花园", "Утро — сад")),
            title: t(lang, L("Sheeva Cafe", "Sheeva Cafe", "Sheeva Cafe", "Sheeva Cafe")),
            body: t(
              lang,
              L(
                "Big tropical garden energy — popular for reading, laptop time, and quiet mornings.",
                "ไป Sheeva Cafe — ร้านใหญ่ ต้นไม้เยอะ ฟีล tropical garden คนชอบไปอ่านหนังสือ ทำงาน นั่งเงียบ ๆ",
                "Sheeva Cafe——大花园、热带绿植，适合阅读、办公、安静早晨。",
                "Sheeva Cafe — большой сад, чтение и работа.",
              ),
            ),
            cafeId: "sheeva-cafe" as const,
          },
          {
            timeLabel: t(lang, L("Midday — serious espresso", "☕ ต่อ specialty coffee จริงจัง", "中午 — 认真 espresso", "День — specialty espresso")),
            title: t(lang, L("SQUID COFFEE", "SQUID COFFEE", "SQUID COFFEE", "SQUID COFFEE")),
            body: t(
              lang,
              L(
                "Small shop, high standards — coffee nerds usually leave happy here.",
                "แวะ SQUID COFFEE — ร้านเล็กแต่กาแฟจริงจังมาก สาย coffee nerd น่าจะชอบ",
                "顺路 SQUID COFFEE——小店但咖啡很认真，coffee nerd 通常会满意。",
                "SQUID COFFEE — маленькое, но серьёзное.",
              ),
            ),
            cafeId: "squid-coffee" as const,
            alternative: {
              label: t(
                lang,
                L("Or Just Specialty Coffee — quieter, cooler tone", "หรือ Just Specialty Coffee — นิ่ง ๆ เท่ ๆ หน่อย", "或 Just Specialty Coffee——更静、更酷", "Или Just Specialty Coffee — тише и cooler"),
              ),
              href: mapsSearch("Just Specialty Coffee Pattaya Thailand"),
            },
          },
          {
            timeLabel: t(lang, L("Evening — hidden mood", "🌙 ค่ำ — ร้านลับ mood ดี", "晚上 — 隐蔽氛围", "Вечер — hidden mood")),
            title: t(lang, L("Backstreet House Pattaya", "Backstreet House Pattaya", "Backstreet House Pattaya", "Backstreet House")),
            body: t(
              lang,
              L(
                "End at this hidden gem — homely and a little artistic, especially warm after dark.",
                "จบที่ Backstreet House — hidden gem vibe ดีจริง กลางคืนจะอบอุ่น ๆ มีความ artistic นิดนึง",
                "在 Backstreet House 收尾——真正的 hidden gem，入夜后温暖又带点艺术感。",
                "Backstreet House — hidden gem, тепло и arty вечером.",
              ),
            ),
            cafeId: "backstreet-house" as const,
          },
        ],
      },
    ],
  };
}

export { getCafeGuideImage };
