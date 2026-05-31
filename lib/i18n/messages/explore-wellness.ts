import type { LanguageCode } from "@/lib/i18n/languages";
import {
  wellnessDayPlanImages,
  wellnessTipImages,
  wellnessZoneImages,
} from "@/lib/design/wellness-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getWellnessZones(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  const openInMaps = t(
    lang,
    L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →"),
  );
  const officialSite = t(
    lang,
    L("Official site →", "เว็บทางการ →", "官网 →", "Сайт →"),
  );
  const beachGuide = t(lang, L("Beach guide →", "คู่มือหาด →", "海滩指南 →", "Гид пляжа →"));

  return {
    title: t(lang, L("Where to unwind", "ไปนวด/สปาที่ไหน", "去哪里放松", "Где отдохнуть")),
    subtitle: t(
      lang,
      L(
        "Real chains and street zones in Pattaya — example brands, not a ranked list. Pattaya.com does not book treatments.",
        "แบรนด์และโซนจริงในพัทยา — เป็นตัวอย่าง ไม่ใช่ ranking Pattaya.com ไม่จองทรีทเมนต์",
        "芭提雅真实连锁与街区 — 仅为示例，非排名；本页不提供预订。",
        "Реальные зоны — не рейтинг; Pattaya.com не бронирует.",
      ),
    ),
    hoursLabel: c.hours,
    highlightLabel: c.bestFor,
    priceRangeLabel: t(lang, L("Guide price", "ราคาคร่าวๆ", "参考价", "Ориентир")),
    items: [
      {
        id: "health-land" as const,
        name: t(
          lang,
          L("Health Land Spa & Massage (Pattaya)", "Health Land Spa & Massage (พัทยา)", "Health Land（芭提雅）", "Health Land Pattaya"),
        ),
        hours: t(lang, L("Daily · ~10:00–22:00", "ทุกวัน · ~10:00–22:00", "每日 · 约10:00–22:00", "Ежедн. · ~10:00–22:00")),
        highlight: t(
          lang,
          L(
            "Thai massage, foot spa, consistent chain standards",
            "นวดไทย สปาเท้า มาตรฐานเครือเดียวกัน",
            "泰式按摩、足疗、连锁标准一致",
            "Тайский массаж, сеть",
          ),
        ),
        text: t(
          lang,
          L(
            "Nationwide chain with a Pattaya branch — easier if you want predictable rooms and menus in English. Book online or walk in; peak hours may queue.",
            "เครือทั่วประเทศ มีสาขาพัทยา — เหมาะถ้าอยากห้องและเมนูภาษาอังกฤษชัด จองออนไลน์หรือ walk-in ช่วง peak อาจรอ",
            "全国连锁芭提雅分店 — 英文菜单较清晰；可网上预约或 walk-in，高峰可能排队。",
            "Сеть по Таиланду — предсказуемый сервис.",
          ),
        ),
        priceRange: t(lang, L("~400–2,500 THB / session", "~400–2,500 บาท/ครั้ง", "约400–2500泰铢/次", "~400–2500 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Health+Land+Spa+Massage+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "https://www.healthlandspa.com/",
        secondaryLinkLabel: officialSite,
        image: wellnessZoneImages[0],
      },
      {
        id: "lets-relax" as const,
        name: t(
          lang,
          L("Let's Relax Spa (Terminal 21 Pattaya)", "Let's Relax Spa (Terminal 21 พัทยา)", "Let's Relax（Terminal 21）", "Let's Relax T21"),
        ),
        hours: t(lang, L("Mall hours · ~10:00–22:00", "เวลาห้าง · ~10:00–22:00", "商场时段 · 约10–22点", "Часы ТРЦ · ~10–22")),
        highlight: t(
          lang,
          L(
            "Mall spa, couples rooms, aromatherapy",
            "สปาในห้าง ห้องคู่ อโรมา",
            "商场水疗、情侣房、芳疗",
            "Спа в ТРЦ, пары",
          ),
        ),
        text: t(
          lang,
          L(
            "Air-conditioned mall option when the beach heat or rain makes outdoor walks miserable — reserve couples slots on weekends. Also branches at other malls; check Maps for the closest.",
            "ทางเลือกในห้างแอร์ เมื่ออากาศร้อนหรือฝนตก — วันหยุดจองห้องคู่ล่วงหน้า มีสาขาห้างอื่น เช็ค Maps ใกล้สุด",
            "酷暑或下雨时的商场空调选择 — 周末情侣房建议预约；其他商场亦有分店。",
            "В ТРЦ — бронируйте пары в выходные.",
          ),
        ),
        priceRange: t(lang, L("~900–3,500 THB / session", "~900–3,500 บาท/ครั้ง", "约900–3500泰铢/次", "~900–3500 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Let's+Relax+Spa+Terminal+21+Pattaya",
        linkLabel: openInMaps,
        secondaryHref: "https://www.letsrelaxspa.com/",
        secondaryLinkLabel: officialSite,
        image: wellnessZoneImages[1],
      },
      {
        id: "jomtien-beach-rd" as const,
        name: t(lang, L("Jomtien Beach Rd massage zone", "โซนนวดถ.จอมเทียน", "Jomtien 海滩路按摩区", "Jomtien — массаж")),
        hours: t(lang, L("Most shops · ~10:00–23:00", "ร้านส่วนใหญ่ · ~10:00–23:00", "多数店铺 · 约10–23点", "Большинство · ~10–23")),
        highlight: t(
          lang,
          L(
            "Foot massage after swimming, walk-ins",
            "นวดเท้าหลังว่ายน้ำ walk-in",
            "游泳后足疗、可 walk-in",
            "После пляжа, walk-in",
          ),
        ),
        text: t(
          lang,
          L(
            "Rows of budget Thai and foot massage along Jomtien Beach Road — quality varies shop to shop. Good for a one-hour reset after the sea; check prices on the menu board before you sit down.",
            "แถวนวดไทย/เท้าริมถ.จอมเทียน — คุณภาพต่างกันร้านต่อร้าน เหมาะพักชั่วโมงหลังทะเล ดูราคาป้ายก่อนนั่ง",
            "Jomtien 海滩路一排预算泰式/足疗 — 质量因店而异；适合海后休息；入座前看清价目。",
            "Бюджетный массаж — качество разное, смотрите прайс.",
          ),
        ),
        priceRange: t(lang, L("~250–600 THB / hour", "~250–600 บาท/ชม.", "约250–600泰铢/小时", "~250–600 бат/ч")),
        href: "https://www.google.com/maps/search/?api=1&query=Jomtien+Beach+Road+massage+Pattaya",
        linkLabel: openInMaps,
        secondaryHref: "/explore/beaches/jomtien",
        secondaryLinkLabel: beachGuide,
        image: wellnessZoneImages[2],
      },
      {
        id: "pratumnak-hill" as const,
        name: t(lang, L("Pratumnak Hill spa zone", "โซนสปา/นวดพระตำหนัก", "Pratumnak hill 水疗区", "Pratumnak — спа")),
        hours: t(lang, L("Afternoon–evening · ~11:00–21:00", "บ่าย–เย็น · ~11:00–21:00", "下午– evening · 约11–21点", "~11–21")),
        highlight: t(
          lang,
          L(
            "Bay views, couples oil massage",
            "วิวอ่าว นวดน้ำมันคู่",
            "湾景、情侣精油按摩",
            "Вид на залив, пары",
          ),
        ),
        text: t(
          lang,
          L(
            "Clifftop and hillside shops above Pattaya Bay — often pricier than beach-road walk-ins but quieter. Pair with sunset on the hill; book the last slot if you want golden-hour views from the room.",
            "ร้านบนเขาเหนืออ่าวพัทยา — มักแพงกว่าริมถนนหาดแต่เงียกว่า จับคู่ sunset บนเขา จองรอบท้ายถ้าอยากวิวตอนเย็น",
            "芭提雅湾上方山坡店铺 — 通常比海滩路贵但更安静；可搭配山上日落；想要傍晚窗景可订末段时段。",
            "На холме — дороже, но тише; закат рядом.",
          ),
        ),
        priceRange: t(lang, L("~800–3,000 THB / session", "~800–3,000 บาท/ครั้ง", "约800–3000泰铢/次", "~800–3000 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=spa+massage+Pratumnak+Hill+Pattaya",
        linkLabel: openInMaps,
        secondaryHref: "/explore/beaches/pratumnak",
        secondaryLinkLabel: beachGuide,
        image: wellnessZoneImages[3],
      },
    ],
  };
}

export function getWellnessDayPlans(lang: LanguageCode) {
  const seeZone = t(lang, L("See this zone →", "ดูโซนนี้ →", "查看此区 →", "Зона →"));
  const fineDining = t(lang, L("Fine dining guide →", "คู่มือไฟน์ไดนิ่ง →", "精致餐饮指南 →", "Fine dining →"));

  return {
    title: t(lang, L("Plan a wellness day", "วางแผนวัน wellness", "规划康养一日", "План wellness")),
    subtitle: t(
      lang,
      L(
        "Three easy splits — confirm prices and duration at the shop; we do not sell packages on this page.",
        "3 แบบง่ายๆ — ยืนยันราคาและเวลาที่ร้าน หน้านี้ไม่ขายแพ็กเกจ",
        "三种简单安排 — 到店确认价格与时长；本页不售套餐。",
        "Три варианта — цены на месте.",
      ),
    ),
    items: [
      {
        id: "post-swim" as const,
        title: t(lang, L("After swimming (Jomtien)", "หลังว่ายน้ำ (จอมเทียน)", "游泳后（Jomtien）", "После пляжа — Jomtien")),
        paragraphs: [
          t(
            lang,
            L(
              "Morning swim, lunch on the beach road, foot or Thai massage mid-afternoon when shops are quieter — avoid deep pressure if shoulders are sunburned.",
              "เช้าว่ายน้ำ กินอาหารกลางวัน ริมถนน บ่ายนวดเท้าหรือไทยตอนคนน้อย — ไหล่แดดไหม้อย่าให้กดลึก",
              "上午游泳、海滩路午餐、下午人少时足疗或泰式 — 肩背晒伤勿深按。",
              "Плавание утром, массаж после обеда.",
            ),
          ),
        ],
        href: "#zone-jomtien-beach-rd",
        linkLabel: seeZone,
        image: wellnessDayPlanImages[0],
      },
      {
        id: "couples-sunset" as const,
        title: t(lang, L("Couples sunset (Pratumnak)", "คู่รัก sunset (พระตำหนัก)", "情侣日落（Pratumnak）", "Пара — Pratumnak")),
        paragraphs: [
          t(
            lang,
            L(
              "Book a late-afternoon oil massage on the hill, watch the bay light change, then dinner inland — our fine-dining page covers Na Jomtien and Pratumnak zones.",
              "จองนวดน้ำมันบ่ายบนเขา ดูแสงอ่าวเปลี่ยน แล้วมื้อเย็นด้านใน — หน้า fine dining มีโซนนาเกลือ/พระตำหนัก",
              "下午在山丘预约精油按摩、看湾光变化，再 inland 晚餐 — fine dining 页含 Na Jomtien 与 Pratumnak。",
              "Массаж на холме, закат, ужин.",
            ),
          ),
        ],
        href: "/explore/restaurants/fine-dining",
        linkLabel: fineDining,
        image: wellnessDayPlanImages[1],
      },
      {
        id: "rainy-mall" as const,
        title: t(lang, L("Hot or rainy day (mall spa)", "ร้อน/ฝนตก (สปาห้าง)", "炎热或雨天（商场水疗）", "Жара или дождь — ТРЦ")),
        paragraphs: [
          t(
            lang,
            L(
              "Skip the pavement — head to Terminal 21 or another mall branch, book a 90-minute Thai or aromatherapy slot, then coffee upstairs. Chains publish menus online.",
              "เลี่ยงแดด/ฝน — ไป Terminal 21 หรือสาขาห้าง จองนวดไทย/อโรมา 90 นาที แล้วคาเฟ่ชั้นบน เครือลงเมนูในเว็บ",
              "避开路面酷暑或雨 — 去 Terminal 21 等商场分店，订90分钟泰式或芳疗，再在楼上喝咖啡；连锁官网有菜单。",
              "В ТРЦ — 90 мин, меню на сайте.",
            ),
          ),
        ],
        href: "#zone-lets-relax",
        linkLabel: seeZone,
        image: wellnessDayPlanImages[2],
      },
    ],
  };
}

export function getWellnessTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Spa tips", "เคล็ดลับสปา", "水疗贴士", "Советы")),
    subtitle: t(
      lang,
      L(
        "Book safely, set expectations, and avoid surprises — no sponsored listings on this page.",
        "จองอย่างไรให้ปลอดภัย ตั้ง expectation — หน้านี้ไม่มีรายการโฆษณา",
        "安全预订、合理预期 — 本页无商业 listing。",
        "Без рекламных листингов.",
      ),
    ),
    items: [
      {
        id: "booking" as const,
        title: t(lang, L("Booking & walk-ins", "จอง & walk-in", "预约与 walk-in", "Бронь и walk-in")),
        paragraphs: [
          t(
            lang,
            L(
              "Mall chains and hotel spas: book 24–48 hours ahead for couples rooms on weekends. Beach-road shops often take walk-ins — ask duration and total price before the therapist starts.",
              "สปาเครือในห้าง/โรงแรม: จองล่วงหน้า 24–48 ชม. ห้องคู่วันหยุด ริมถนนหาด walk-in ได้ — ถามเวลาและราคารวมก่อนเริ่ม",
              "商场/酒店连锁：周末情侣房建议提前24–48小时预约；海滩路多可 walk-in — 开始前问清时长与总价。",
              "ТРЦ — бронь на выходные; пляж — walk-in, спросите цену.",
            ),
          ),
          t(
            lang,
            L(
              "Pattaya.com does not take spa bookings — use the shop phone, mall counter, or official website only.",
              "Pattaya.com ไม่รับจองสปา — ใช้โทรร้าน เคาน์เตอร์ห้าง หรือเว็บทางการเท่านั้น",
              "Pattaya.com 不提供 spa 预订 — 请致电店铺、商场柜台或官网。",
              "Pattaya.com не бронирует спа.",
            ),
          ),
        ],
        image: wellnessTipImages[0],
      },
      {
        id: "pressure" as const,
        title: t(lang, L("Pressure & standards", "แรงกด & มาตรฐาน", "力度与规范", "Давление")),
        paragraphs: [
          t(
            lang,
            L(
              "Say 'bao bao' or 'เบาๆ' for light, 'nak' or 'แรงหน่อย' for firm — stop the session if anything hurts beyond normal stretch.",
              "บอก 'เบาๆ' ถ้าอยากเบา 'แรงหน่อย' ถ้าอยากแรง — หยุดถ้าเจ็บเกินการยืดปกติ",
              "轻说「เบาๆ」，重说「แรงหน่อย」— 若超出正常拉伸痛感请叫停。",
              "«Легче» / «сильнее» — остановите при боли.",
            ),
          ),
          t(
            lang,
            L(
              "Licensed shops display certificates near the entrance. Street prices that look too low may mean rushed sessions or add-on sales — it is OK to walk out after checking the menu.",
              "ร้านที่มีใบอนุญาตมักแปะใบรับรองหน้าร้าน ราคาถูกผิดปกติอาจเร่งมาก หรือ upsell — ดูเมนูแล้วเดินออกได้",
              "持证店入口常展示证书；异常低价可能赶工或 upsell — 看完价目离开完全可以。",
              "Сертификаты у входа; сомнительно дёшево — можно уйти.",
            ),
          ),
        ],
        image: wellnessTipImages[1],
      },
      {
        id: "sun" as const,
        title: t(lang, L("Sun & hydration", "แดด & น้ำ", "日晒与补水", "Солнце")),
        paragraphs: [
          t(
            lang,
            L(
              "Skip deep tissue on fresh sunburn — stick to gentle oil or foot massage until skin calms down.",
              "แดดไหม้อย่านวดลึก — เลือกน้ำมันเบาๆ หรือเท้าจนกว่าผิวจะดีขึ้น",
              "新鲜晒伤勿深度按摩 — 改选 gentle 精油或足疗至皮肤恢复。",
              "При ожоге — без deep tissue.",
            ),
          ),
          t(
            lang,
            L(
              "Drink water before aromatherapy or herbal compress sessions — alcohol and heavy meals right before treatment can make you nauseous on the table.",
              "ดื่มน้ำก่อนอโรมา/ลูกประคบ — แอลกอฮอลและมื้อหนักก่อนทรีทเมนต์อาจเมา",
              "芳疗或草药敷前多喝水 — 治疗前饮酒或大餐易在按摩床上不适。",
              "Вода до ароматерапии; без алкоголя перед сеансом.",
            ),
          ),
        ],
        image: wellnessTipImages[2],
      },
      {
        id: "tipping" as const,
        title: t(lang, L("Tipping & extras", "ทิป & ของเพิ่ม", "小费与附加", "Чаевые")),
        paragraphs: [
          t(
            lang,
            L(
              "Tip 10–15% at premium spas only when service exceeds expectations — many beach-road shops include no tip line on the bill.",
              "ทิป 10–15% ที่สปาพรีเมียมเมื่อบริการเกินความคาดหวัง — ริมหาดหลายร้านไม่มีบรรทัดทิป",
              "高端 spa 服务超预期时可给10–15%；海滩路多数账单不含小费栏。",
              "10–15% в премиум-спа при отличном сервисе.",
            ),
          ),
          t(
            lang,
            L(
              "Decline add-on oils or 'special upgrades' you did not ask for — agree the package name and minutes in writing or on the receipt.",
              "ปฏิเสธน้ำมันหรือ 'อัพเกรด' ที่ไม่ได้ขอ — ตกลงชื่อแพ็กและนาทีเป็นลายลักษณ์หรือบนใบเสร็จ",
              "拒绝未要求的精油或「升级」— 书面或收据上确认套餐名与分钟数。",
              "Откажитесь от допов — фиксируйте пакет на чеке.",
            ),
          ),
        ],
        image: wellnessTipImages[3],
      },
    ],
  };
}

export function getWellnessPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: c.wellness },
    hero: {
      badge: c.wellness,
      title: t(lang, L("Relax & Wellness", "สปา & นวด", "康养与放松", "Wellness")),
      subtitle: t(lang, L("Spa & massage", "สปา & นวด", "水疗与按摩", "Спа и массаж")),
      body: t(
        lang,
        L(
          "Massage chains, mall spas, and beach-road zones around Pattaya — Maps links and honest price guides. We do not book treatments on this page.",
          "เครือนวด สปาห้าง และโซนริมหาดรอบพัทยา — ลิงก์ Maps และราคาคร่าวๆ Pattaya.com ไม่จองทรีทเมนต์",
          "芭提雅按摩连锁、商场 spa 与海滩路区域 — 地图链与参考价；本页不提供预订。",
          "Спа и массаж — Maps и ориентиры; без брони на сайте.",
        ),
      ),
    },
    zones: getWellnessZones(lang),
    dayPlans: getWellnessDayPlans(lang),
    tips: getWellnessTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      mainBeaches: c.mainBeaches,
      fineDining: c.fineDining,
      hiddenGems: t(lang, L("Hidden gems →", "จุดลับ →", "秘境 →", "Hidden gems →")),
      cafesLink: c.cafesLink,
    },
  };
}
