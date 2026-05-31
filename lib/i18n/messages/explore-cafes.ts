import type { LanguageCode } from "@/lib/i18n/languages";
import { cafeTipImages, cafeZoneImages } from "@/lib/design/cafe-zone-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getCafeZones(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    title: t(lang, L("Choose your café area", "เลือกโซนคาเฟ่", "选择咖啡区域", "Выберите район")),
    subtitle: t(
      lang,
      L(
        "Where to look for beach-club mornings, central bay terraces, or hilltop pour-overs — price ranges are guides only; no paid listings on this page.",
        "โซนริมหาด อ่าวกลาง บนหน้าผา — ราคาเป็นคร่าวๆ ไม่มีรายการโฆษณาในหน้านี้",
        "海滨、中央海湾或山顶手冲 — 价格为参考，本页无商业推广。",
        "Где искать кофе у моря, в заливе или на холме — цены ориентировочные.",
      ),
    ),
    hoursLabel: c.hours,
    mustTryLabel: c.mustTry,
    vibeLabel: t(lang, L("Vibe", "บรรยากาศ", "氛围", "Атмосфера")),
    priceRangeLabel: t(lang, L("Typical spend", "ราคาโดยประมาณ", "人均参考", "Примерно")),
    items: [
      {
        id: "jomtien" as const,
        name: t(lang, L("Jomtien Beach Road", "ถนนจอมเทียน", "Jomtien 海滩路", "Jomtien Beach Rd")),
        vibe: t(lang, L("Beach-club · Relaxed · Day to dusk", "beach club · ชิล · กลางวันถึงเย็น", "海滩俱乐部 · 休闲 · 白天至黄昏", "Beach club · расслабленно")),
        hours: t(lang, L("Most · ~08:00–22:00", "ส่วนใหญ่ · ~08:00–22:00", "多数 · 约8:00–22:00", "Большинство · ~8:00–22:00")),
        mustTry: t(lang, L("Iced latte, fresh coconut, beachfront seating", "ลาเต้เย็น มะพร้าว ที่นั่งริมหาด", "冰拿铁、鲜椰、海滨座位", "Iced latte, кокос")),
        text: t(
          lang,
          L(
            "Long chats facing the Gulf — coffee and light bites by day, golden-hour drinks as the light drops. Quieter than central Pattaya.",
            "นั่งคุยยาววิวอ่าว — กาแฟกลางวัน ดื่มยามเย็น เงียบกว่ากลางเมือง",
            "面向海湾的长聊 — 白天咖啡轻食，黄昏饮品；比市中心安静。",
            "Кофе днём, напитки на закате — тише центра.",
          ),
        ),
        priceRange: t(lang, L("~80–180 THB / drink", "~80–180 บาท/แก้ว", "约80–180泰铢/杯", "~80–180 бат/напиток")),
        href: "/explore/beaches/jomtien",
        linkLabel: t(lang, L("Jomtien beach guide →", "คู่มือหาดจอมเทียน →", "Jomtien 海滩指南 →", "Гид Jomtien →")),
        external: false,
        image: cafeZoneImages[0],
      },
      {
        id: "pattaya-beach" as const,
        name: t(lang, L("Pattaya Beach & Beach Road", "หาดพัทยา & Beach Road", "芭提雅海滩与 Beach Road", "Pattaya Beach Rd")),
        vibe: t(lang, L("Central bay · Terraces · Evening buzz", "อ่าวกลาง · เทอร์เรส · ค่ำคึก", "中央海湾 · 露台 · 傍晚热闹", "Центр · террасы")),
        hours: t(lang, L("Most · ~09:00–23:00", "ส่วนใหญ่ · ~09:00–23:00", "多数 · 约9:00–23:00", "Большинство · ~9:00–23:00")),
        mustTry: t(lang, L("Espresso tonic, sunset mocktails, light bites", "Espresso tonic mocktail ของว่าง", "Espresso tonic、无酒精 mocktail", "Espresso tonic, mocktail")),
        text: t(
          lang,
          L(
            "Elevated terrace vibes above the main bay — come before dusk for the best light and breeze. Walkable from the beach.",
            "เทอร์เรสเหนืออ่าวหลัก — มาก่อนค่ำ แสงและลมดี เดินจากหาดได้",
            "主湾上方露台 — 黄昏前光线与海风最佳，步行可达海滩。",
            "Террасы над заливом — до заката, пешком от пляжа.",
          ),
        ),
        priceRange: t(lang, L("~90–200 THB / drink", "~90–200 บาท/แก้ว", "约90–200泰铢/杯", "~90–200 бат/напиток")),
        href: "/explore/beaches/pattaya-beach",
        linkLabel: t(lang, L("Pattaya Beach guide →", "คู่มือหาดพัทยา →", "芭提雅海滩指南 →", "Гид Pattaya Beach →")),
        external: false,
        image: cafeZoneImages[1],
      },
      {
        id: "pratumnak" as const,
        name: t(lang, L("Pratumnak Hill & clifftop", "พระตำหนัก & ริมหน้าผา", "帕坦纳克山与悬崖", "Pratumnak Hill")),
        vibe: t(lang, L("Viewpoint · Specialty · Slow mornings", "จุดชมวิว · สペเชียลตี้ · เช้าช้า", "观景点 · 精品 · 慢早晨", "Виды · specialty · медленное утро")),
        hours: t(lang, L("Most · ~08:00–20:00", "ส่วนใหญ่ · ~08:00–20:00", "多数 · 约8:00–20:00", "Большинство · ~8:00–20:00")),
        mustTry: t(lang, L("Pour-over, house pastries, avocado toast", "พูรโอเวอร์ เบเกอรี่ อาหารเช้า", "手冲、烘焙、牛油果吐司", "Pour-over, выпечка")),
        text: t(
          lang,
          L(
            "Small footprint cafés tucked into the hill with big views — specialty roasts and bakery-forward brunch between beach time and dinner.",
            "คาเฟ่เล็กบนเขา วิวใหญ่ — คั่วพิเศษ บรันช์ ระหว่างหาดกับดินเนอร์",
            "山丘小馆大视野 — 精品烘焙与早午餐，介于海滩与晚餐之间。",
            "Маленькие кафе на холме — specialty и бранч.",
          ),
        ),
        priceRange: t(lang, L("~100–250 THB / drink · ~200–400 brunch", "~100–250 บาท/แก้ว · บรันช์ ~200–400", "约100–250泰铢/杯 · 早午餐200–400", "~100–250 бат · бранч ~200–400")),
        href: "/explore/beaches/pratumnak",
        linkLabel: t(lang, L("Pratumnak beach guide →", "คู่มือหาดพระตำหนัก →", "帕坦纳克指南 →", "Гид Pratumnak →")),
        external: false,
        image: cafeZoneImages[2],
      },
      {
        id: "wongamat" as const,
        name: t(lang, L("Wongamat & Naklua north", "วงอมาตย์ & นาเกลือเหนือ", "Wongamat 与北部那库拉", "Wongamat & Naklua")),
        vibe: t(lang, L("Quiet · Resort-adjacent · Morning calm", "เงียบ · ใกล้รีสอร์ท · เช้าสงบ", "安静 · 度假村旁 · 晨间宁静", "Тихо · у курортов")),
        hours: t(lang, L("Most · ~07:30–18:00", "ส่วนใหญ่ · ~07:30–18:00", "多数 · 约7:30–18:00", "Большинство · ~7:30–18:00")),
        mustTry: t(lang, L("Flat white, Thai tea soft-serve, quiet laptop spots", "flat white ชาไทย soft-serve นั่ง laptop", "flat white、泰茶 soft-serve", "Flat white, Thai tea")),
        text: t(
          lang,
          L(
            "Calmer northern cove — good for slow pour-over mornings and work-friendly AC before the central bay crowds arrive.",
            "อ่าวเหนือเงียบ — พูรโอเวอร์เช้า นั่ง laptop แอร์เย็น ก่อนคนเยอะกลางเมือง",
            "北部静湾 — 适合慢手冲早晨与有空调的办公位。",
            "Северная бухта — тихое утро и кондиционер.",
          ),
        ),
        priceRange: t(lang, L("~80–160 THB / drink", "~80–160 บาท/แก้ว", "约80–160泰铢/杯", "~80–160 бат/напиток")),
        href: "/explore/beaches/wongamat",
        linkLabel: t(lang, L("Wongamat beach guide →", "คู่มือหาดวงอมาตย์ →", "Wongamat 指南 →", "Гид Wongamat →")),
        external: false,
        image: cafeZoneImages[3],
      },
    ],
  };
}

export function getCafeTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Café tips", "เคล็ดลับคาเฟ่", "咖啡馆贴士", "Советы")),
    subtitle: t(
      lang,
      L(
        "Practical habits for timing, seating, and ordering — no paid listings on this page.",
        "เคล็ดลับเวลา ที่นั่ง การสั่ง — ไม่มีรายการโฆษณาในหน้านี้",
        "时间、座位与点单实用建议 — 本页无商业推广。",
        "Советы по времени, местам и заказу.",
      ),
    ),
    items: [
      {
        id: "hours" as const,
        title: t(lang, L("Best hours", "ช่วงเวลาดี", "最佳时段", "Время")),
        paragraphs: [
          t(
            lang,
            L(
              "Morning (08:00–11:00) for quiet laptop sessions and fresh bakery — hill and north-shore spots fill slower than Beach Road.",
              "เช้า 08–11 เงียบ laptop เบเกอรี่สด — บนเขา/เหนือคนน้อยกว่า Beach Road",
              "早晨8–11点适合安静办公与新鲜烘焙 — 山上与北部比 Beach Road 人少。",
              "Утро 8–11 — тихо для ноутбука и выпечки.",
            ),
          ),
          t(
            lang,
            L(
              "17:00–19:00 for sunset terraces and photo light on Pratumnak and central bay decks. Weekends 10:00–12:00 brunch queues are common — arrive early or after 13:00.",
              "17–19 แสงพระอาทิตย์ตก พระตำหนัก/อ่าวกลาง สุดสัปดาห์บรันช์ 10–12 คิวยาว มาเช้าหรือหลัง 13:00",
              "17–19点帕坦纳克与中央湾露台看日落；周末10–12点早午餐常排队。",
              "17–19 — закат на террасах; бранч в выходные 10–12 — очереди.",
            ),
          ),
        ],
        image: cafeTipImages[0],
      },
      {
        id: "work" as const,
        title: t(lang, L("Work-friendly spots", "นั่งทำงานได้", "适合办公", "Для работы")),
        paragraphs: [
          t(
            lang,
            L(
              "Check power outlets and Wi‑Fi at the counter before settling in — not every beachfront table has plugs. Hill cafés cool faster with AC; open-deck spots can be breezy and loud.",
              "ถามปลั๊กและ Wi‑Fi ก่อนนั่ง — โต๊ะริมหาดไม่มีปลั๊กทุกที่ บนเขาแอร์เย็น ดาดฟ้าลมแรง",
              "入座前确认插座与 Wi‑Fi — 海滨桌并非都有电源；山上空调更凉，露天台可能风大嘈杂。",
              "Спросите про розетки и Wi‑Fi; у моря не везде есть питание.",
            ),
          ),
          t(
            lang,
            L(
              "One drink per hour is an unwritten norm at busy specialty shops. Long laptop sessions are welcome off-peak; move on if a queue builds at the door.",
              "กติกาไม่เป็นลายลักษณ์ ~1 แก้ว/ชม. นอก peak นั่งได้ ถ้ามีคิวรอให้ย้าย",
              "精品店非正式规则约每小时一杯；非高峰可久坐，门口排队时请让位。",
              "Неформально ~1 напиток в час; уступите место, если очередь.",
            ),
          ),
        ],
        image: cafeTipImages[1],
      },
      {
        id: "seating" as const,
        title: t(lang, L("Seating choice", "เลือกที่นั่ง", "选座", "Места")),
        paragraphs: [
          t(
            lang,
            L(
              "Indoor or shaded tables for midday heat (11:00–15:00) — Pattaya sun is strong even on cloudy days. Outdoor decks and cliff rails shine at golden hour.",
              "ในร่ม/ร่ม 11–15 น. แดดแรงแม้เมฆครึ้ม ดาดฟ้าและริมหน้าผาดีช่วงเย็น",
              "11–15点选室内或荫凉位 — 芭提雅日照强；黄昏时户外露台与悬崖边最佳。",
              "11–15 — внутри или в тени; на закат — террасы.",
            ),
          ),
          t(
            lang,
            L(
              "After dark, hill viewpoints get breezy — a light layer helps. Smoking rules vary; most indoor rooms are non-smoking.",
              "หลังค่ำบนหน้าผาลมแรง เอาเสื้อบาง กฎสูบบุหรี่ต่างกัน ในอาคารส่วนใหญ่ห้าม",
              "入夜后山顶风大，备薄外套；室内多数禁烟。",
              "После темноты на холме прохладно; внутри обычно некурящая зона.",
            ),
          ),
        ],
        image: cafeTipImages[2],
      },
      {
        id: "ordering" as const,
        title: t(lang, L("Order like a local", "สั่งแบบคนท้องถิ่น", "像本地人点单", "Как местные")),
        paragraphs: [
          t(
            lang,
            L(
              "'Kafe yen' (iced coffee), 'kafe ron' (hot), 'mai wan' (less sweet) — Thai iced coffee is often pre-sweetened; ask upfront. 'O liang' is Thai-style iced black coffee.",
              "'กาแฟเย็น' 'ร้อน' 'ไม่หวาน' — กาแฟเย็นไทยมักหวาน ถามก่อน 'โอเลี้ยง' กาแฟดำเย็น",
              "「กาแฟเย็น」冰咖啡、「ร้อน」热、「ไม่หวาน」少糖；泰式冰咖啡常预甜，「โอเลี้ยง」为泰式冰黑咖。",
              "«Kafe yen», «kafe ron», «mai wan»; «o liang» — Thai iced black.",
            ),
          ),
          t(
            lang,
            L(
              "Plant milk and decaf vary by shop — ask before ordering pour-over or flat white. Single-origin beans rotate; baristas usually explain what's on today if you ask.",
              "นมพืชและ decaf แล้วแต่ร้าน ถามก่อนสั่งพูรโอเวอร์ เมล็ด single-origin หมุน ถามบาริสต้าวันนี้ใช้อะไร",
              "植物奶与 decaf 因店而异；单品豆常轮换，可问 barista 当日豆子。",
              "Растительное молоко и decaf — уточняйте; зерно меняется.",
            ),
          ),
        ],
        image: cafeTipImages[3],
      },
    ],
  };
}

export function getCafesPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: t(lang, L("Cafes", "คาเฟ่", "咖啡馆", "Кафе")) },
    hero: {
      badge: t(lang, L("Cafes", "คาเฟ่", "咖啡馆", "Кафе")),
      title: t(lang, L("Specialty Coffee", "คาเฟ่", "精品咖啡", "Кофе")),
      subtitle: t(lang, L("Cafes", "คาเฟ่", "咖啡馆", "Кафе")),
      body: t(
        lang,
        L(
          "Cafes and specialty coffee spots across Pattaya — from beach-club terraces to hilltop brunch and slow pour-over mornings.",
          "คาเฟ่และกาแฟพิเศษทั่วพัทยา — ริมหาด บนหน้าผา บรันช์",
          "芭提雅精品咖啡与咖啡馆。",
          "Кофейни и specialty coffee Паттайи.",
        ),
      ),
      badgeSunset: t(lang, L("Sunset & brunch", "พระอาทิตย์ตก & บรันช์", "日落与早午餐", "Закат и бранч")),
      badgeAreas: t(lang, L("Jomtien · Beach Rd · Pratumnak", "จอมเทียน · Beach Rd · พระตำหนัก", "Jomtien · Beach Rd · Pratumnak", "Jomtien · Beach Rd · Pratumnak")),
    },
    zones: getCafeZones(lang),
    styles: {
      title: t(lang, L("What to order", "สั่งอะไร", "点什么", "Что заказать")),
      subtitle: t(
        lang,
        L(
          "Four coffee-house styles you will see again and again in Pattaya.",
          "4 สไตล์คาเฟ่ที่พบบ่อยในพัทยา",
          "芭提雅常见的四种风格。",
          "Четыре стиля кофеен.",
        ),
      ),
      items: [
        {
          name: t(lang, L("Single-origin pour-over", "พูรโอเวอร์", "单品手冲", "Pour-over")),
          nameTh: lang === "en" ? "พูรโอเวอร์" : "",
          note: t(
            lang,
            L(
              "Ask which beans are on rotation; light roasts suit Pattaya's heat.",
              "ถามเมล็ดที่ใช้ คั่วอ่อนเหมาะอากาศร้อน",
              "询问当日豆子，浅烘适合炎热。",
              "Спросите про зерно.",
            ),
          ),
        },
        {
          name: t(lang, L("Thai tea & coffee", "ชาไทย / กาแฟโบราณ", "泰式茶与咖啡", "Thai tea & coffee")),
          nameTh: lang === "en" ? "ชาไทย / กาแฟโบราณ" : "",
          note: t(
            lang,
            L(
              "Sweetened classics over ice — specify less sugar ('mai wan').",
              "หวานคลาสสิก — บอก 'ไม่หวาน'",
              "经典冰饮，可要求少糖。",
              "Скажите «меньше сахара».",
            ),
          ),
        },
        {
          name: t(lang, L("Brunch plates", "บรันช์", "早午餐", "Бранч")),
          nameTh: lang === "en" ? "บรันช์" : "",
          note: t(
            lang,
            L(
              "Weekends fill 10:00–12:00; reserve directly with the venue if they take bookings.",
              "สุดสัปดาห์ 10–12 คนเยอะ จองตรงกับร้านถ้ารับ",
              "周末10–12点较满；若接受预订请直接向店预约。",
              "В выходные 10–12 занято; бронируйте напрямую.",
            ),
          ),
        },
        {
          name: t(lang, L("Dessert & bakery", "เบเกอรี่", "甜点与烘焙", "Выпечка")),
          nameTh: lang === "en" ? "เบเกอรี่" : "",
          note: t(
            lang,
            L(
              "Croissants, basque cheesecake, and local fruit tarts pair well with flat whites.",
              "ครัวซอง basque ทาร์ตผลไม้ คู่ flat white",
              "可颂、巴斯克、水果塔。",
              "Круассаны и basque cheesecake.",
            ),
          ),
        },
      ],
    },
    tips: getCafeTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      fineDining: c.fineDining,
      streetFood: c.streetFood,
      mainBeaches: c.mainBeaches,
    },
  };
}
