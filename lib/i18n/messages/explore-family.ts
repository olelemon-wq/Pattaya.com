import type { LanguageCode } from "@/lib/i18n/languages";
import {
  familyActivityImages,
  familyDayPlanImages,
  familyTipImages,
} from "@/lib/design/family-activity-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getFamilyActivitiesList(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  const openInMaps = t(
    lang,
    L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →"),
  );
  const officialSite = t(
    lang,
    L("Official site & tickets →", "เว็บทางการ & ตั๋ว →", "官网购票 →", "Официальный сайт →"),
  );

  return {
    title: t(lang, L("Choose your day out", "เลือกทริปวัน", "选择一日游", "Выберите день")),
    subtitle: t(
      lang,
      L(
        "Real family attractions around Pattaya — prices are guides only; buy tickets on each venue's official site, not on this page.",
        "สถานที่ครอบครัวจริงรอบพัทยา — ราคาเป็นคร่าวๆ ซื้อตั๋วที่เว็บทางการของแต่ละที่ ไม่ใช่ในหน้านี้",
        "芭提雅真实亲子景点 — 价格为参考，请在各景点官网购票。",
        "Реальные места — билеты только на официальных сайтах.",
      ),
    ),
    hoursLabel: c.hours,
    highlightLabel: c.highlights,
    priceRangeLabel: t(lang, L("Typical ticket", "ตั๋วโดยประมาณ", "参考票价", "Примерный билет")),
    items: [
      {
        id: "aquaverse" as const,
        name: t(
          lang,
          L("Columbia Pictures Aquaverse", "โคลัมเบีย พิคเจอร์ส อควาเวิร์ส", "Columbia Pictures Aquaverse", "Aquaverse"),
        ),
        hours: t(lang, L("Daily · ~10:00–18:00", "ทุกวัน · ~10:00–18:00", "每日 · 约10:00–18:00", "Ежедн. · ~10:00–18:00")),
        highlight: t(
          lang,
          L(
            "Movie-themed slides, wave pool, family cabanas",
            "สไลด์ธีมหนัง สระคลื่น กระท่อนครอบครัว",
            "电影主题滑梯、造浪池",
            "Горки, волновой бассейн",
          ),
        ),
        text: t(
          lang,
          L(
            "Full-day water park with Hollywood zones — best for mixed ages if everyone likes slides. Lockers and cabanas cost extra on top of entry.",
            "สวนน้ำเต็มวัน โซนหนังฮอลลีวู้ด — เหมาะทุกวัยที่ชอบสไลด์ ล็อกเกอร์/กระท่อนจ่ายเพิ่ม",
            "好莱坞主题全日水上乐园 — 适合喜欢滑梯的全家；储物柜与 cabana 另计。",
            "Аквапарк на весь день — локеры отдельно.",
          ),
        ),
        priceRange: t(lang, L("~900–1,400 THB / adult", "~900–1,400 บาท/ผู้ใหญ่", "成人约900–1400泰铢", "~900–1400 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Columbia+Pictures+Aquaverse+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "https://www.columbiapicturesaquaverse.com/",
        secondaryLinkLabel: officialSite,
        image: familyActivityImages[0],
      },
      {
        id: "cartoon-network" as const,
        name: t(
          lang,
          L("Cartoon Network Amazone", "การ์ตูน เน็ตเวิร์ก อเมซอน", "Cartoon Network Amazome", "Cartoon Network"),
        ),
        hours: t(lang, L("Daily · ~10:00–17:00", "ทุกวัน · ~10:00–17:00", "每日 · 约10:00–17:00", "Ежедн. · ~10:00–17:00")),
        highlight: t(
          lang,
          L(
            "Character zones, splash areas, teen-friendly rides",
            "โซนตัวละคร สระเด็ก ไรด์วัยรุ่น",
            "角色区、儿童戏水、青少年项目",
            "Зоны персонажей и splash",
          ),
        ),
        text: t(
          lang,
          L(
            "Cartoon-branded slides in Bang Saray — about 20–30 minutes south of central Pattaya. Pair with a beach lunch nearby after you change out of swim gear.",
            "สวนน้ำการ์ตูนที่บางเสร่ — ขับจากกลางพัทยา ~20–30 นาที เล่นเสร็จแวะกินข้าวริมหาดบางเสร่",
            "Bang Saray 卡通水上乐园 — 距市中心约20–30分钟车程，玩完可在附近海滩午餐。",
            "Bang Saray — 20–30 мин от центра; обед на пляже после.",
          ),
        ),
        priceRange: t(lang, L("~800–1,200 THB / adult", "~800–1,200 บาท/ผู้ใหญ่", "成人约800–1200泰铢", "~800–1200 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Cartoon+Network+Amazone+Bang+Saray+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "https://www.cartoonnetworkamazone.com/",
        secondaryLinkLabel: officialSite,
        image: familyActivityImages[1],
      },
      {
        id: "mini-siam" as const,
        name: t(lang, L("Mini Siam", "เมืองจำลอง", "Mini Siam", "Mini Siam")),
        hours: t(lang, L("Daily · ~07:00–22:00", "ทุกวัน · ~07:00–22:00", "每日 · 约7:00–22:00", "Ежедн. · ~7:00–22:00")),
        highlight: t(
          lang,
          L(
            "Miniature Thailand & global icons, evening lights",
            "จำลองไทย & โลก ไฟยามเย็น",
            "泰国与世界微缩景观",
            "Миниатюры Таиланда и мира",
          ),
        ),
        text: t(
          lang,
          L(
            "Easy stroll past tiny temples and world landmarks — low effort, good for grandparents and toddlers in strollers. Evenings look best when the models light up.",
            "เดินชมวัดและแลนด์มาร์กจำลอง — เดินง่าย คุณยายพาเด็กในรถเข็นได้ ยามเย็นไฟสวย",
            "轻松漫步微缩景观 — 适合推婴儿车与长辈，傍晚亮灯最美。",
            "Лёгкая прогулка — подходит с коляской; вечером подсветка.",
          ),
        ),
        priceRange: t(lang, L("~250–400 THB / adult", "~250–400 บาท/ผู้ใหญ่", "成人约250–400泰铢", "~250–400 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Mini+Siam+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "https://www.minisiam.co.th/",
        secondaryLinkLabel: officialSite,
        image: familyActivityImages[2],
      },
      {
        id: "nong-nooch" as const,
        name: t(lang, L("Nong Nooch Tropical Garden", "สวนนงนุช", "Nong Nooch 热带花园", "Nong Nooch")),
        hours: t(lang, L("Daily · ~08:00–18:00", "ทุกวัน · ~08:00–18:00", "每日 · 约8:00–18:00", "Ежедн. · ~8:00–18:00")),
        highlight: t(
          lang,
          L(
            "Elephant shows, orchid gardens, cycling paths",
            "โชว์ช้าง กล้วยไม้ ปั่นจักรยาน",
            "大象秀、兰花园、骑行道",
            "Слоны, орхидеи, велодорожки",
          ),
        ),
        text: t(
          lang,
          L(
            "Large botanical park in Sattahip — plan most of a day for gardens, cultural shows, and lunch on site. Less beach-crowd energy, more shade and walking.",
            "สวนใหญ่ที่ศาทะเหียป — ใช้เวลาเกือบทั้งวัน ดูสวน โชว์ กินข้างใน เงาเยอะ ไม่วุ่นวายเหมือนหาด",
            "Sattahip 大型植物园 — 建议留几乎全天；绿荫多，比海滩安静。",
            "Большой парк в Sattahip — почти весь день; тень и прогулки.",
          ),
        ),
        priceRange: t(lang, L("~500–800 THB / adult", "~500–800 บาท/ผู้ใหญ่", "成人约500–800泰铢", "~500–800 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Nong+Nooch+Tropical+Garden+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "https://www.nongnooch-garden.com/",
        secondaryLinkLabel: officialSite,
        image: familyActivityImages[3],
      },
    ],
  };
}

export function getFamilyDayPlans(lang: LanguageCode) {
  const seeActivity = t(lang, L("See this activity →", "ดูกิจกรรมนี้ →", "查看此项 →", "Подробнее →"));
  const compareWaterParks = t(
    lang,
    L("Compare water parks →", "เทียบสวนน้ำ →", "对比水上乐园 →", "Сравнить аквапарки →"),
  );

  return {
    title: t(lang, L("Plan your family day", "วางแผนวันครอบครัว", "规划亲子一日", "План на день")),
    subtitle: t(
      lang,
      L(
        "Three simple splits — tap through to maps and official ticket pages for each stop.",
        "3 แบบง่ายๆ — กดดูแผนที่และเว็บตั๋วของแต่ละที่",
        "三种简单安排 — 点击查看地图与官网购票。",
        "Три простых маршрута — карты и билеты на сайтах.",
      ),
    ),
    items: [
      {
        id: "water-park" as const,
        title: t(lang, L("Morning splash (water park)", "เช้าเล่นน้ำ (สวนน้ำ)", "上午玩水", "Утро в аквапарке")),
        paragraphs: [
          t(
            lang,
            L(
              "Leave your hotel by 09:00, hit the slides before noon, then lunch and a rest back in Pattaya. Aquaverse is closer; Cartoon Network is farther but quieter on weekdays.",
              "ออกจากโรงแรม 9 โมง เล่นสไลด์ก่อนเที่ยง กลับพัทยากินข้าวพัก — อควาเวิร์สใกล้กว่า การ์ตูนเน็ตเวิร์กไกลกว่าแต่วันธรรมดาคนน้อย",
              "9:00 出发，中午前玩滑梯，回芭提雅午餐休息 — Aquaverse 更近；CN Amazome 较远但平日人少。",
              "Выезд в 9:00, горки до полудня; Aquaverse ближе.",
            ),
          ),
        ],
        href: "#activities",
        linkLabel: compareWaterParks,
        image: familyDayPlanImages[0],
      },
      {
        id: "easy-evening" as const,
        title: t(lang, L("Easy evening (Mini Siam)", "เย็นเบาๆ (เมืองจำลอง)", "轻松傍晚", "Лёгкий вечер")),
        paragraphs: [
          t(
            lang,
            L(
              "Keep the beach for the morning, nap at the hotel, then Mini Siam from ~17:00 when it cools down. Flat paths, no swimming gear, good for mixed ages in one hour or two.",
              "เช้าเล่นหาด พักที่โรงแรม ตกเย็นค่อยไปเมืองจำลอง ~17:00 อากาศเยลง ทางเรียบ ไม่ต้องชุดว่าย 1–2 ชม. ทุกวัยไหว",
              "上午海滩、酒店午休，约17:00 去 Mini Siam — 平路、无需泳装，1–2小时适合各年龄。",
              "Пляж утром, Mini Siam с ~17:00 — без купальников.",
            ),
          ),
        ],
        href: "#activity-mini-siam",
        linkLabel: seeActivity,
        image: familyDayPlanImages[1],
      },
      {
        id: "full-day-garden" as const,
        title: t(lang, L("Full day (Nong Nooch)", "เต็มวัน (สวนนงนุช)", "全天花园", "День в Nong Nooch")),
        paragraphs: [
          t(
            lang,
            L(
              "Treat it like a day trip — leave Pattaya by 08:30, see one cultural show, wander the orchid sections, and eat before the drive back. Not ideal if your kids only want slides.",
              "เหมือนทริปเต็มวัน — ออกพัทยา 8:30 ดูโชว์หนึ่งรอบ เดินสวนกล้วยไม้ กินข้างในก่อนขับกลับ ไม่เหมาะถ้าลูกอยากเล่นน้ำอย่างเดียว",
              "当作一日游 — 8:30 出发，看一场表演、逛兰园、园内用餐后返回；若孩子只想玩水则不太适合。",
              "Выезд 8:30, одно шоу и сады — не для тех, кто хочет только горки.",
            ),
          ),
        ],
        href: "#activity-nong-nooch",
        linkLabel: seeActivity,
        image: familyDayPlanImages[2],
      },
    ],
  };
}

export function getFamilyTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Family tips", "เคล็ดลับครอบครัว", "亲子贴士", "Советы")),
    subtitle: t(
      lang,
      L(
        "Straightforward notes on tickets, timing, kids' rules, and getting there — nothing sponsored on this page.",
        "Tips ตรงๆ เรื่องตั๋ว เวลา กฎเด็ก เดินทาง — หน้านี้ไม่มีโฆษณา",
        "购票、时间、儿童规则与交通 — 本页无商业推广。",
        "Билеты, время, правила — без рекламы.",
      ),
    ),
    items: [
      {
        id: "tickets" as const,
        title: t(lang, L("Buying tickets", "ซื้อตั๋ว", "购票", "Билеты")),
        paragraphs: [
          t(
            lang,
            L(
              "Check each park's official site first — online bundles often beat walk-up prices on weekends. Hotel desks sometimes add transport; compare the total, not just the ticket face value.",
              "เช็คเว็บทางการก่อน — จองออนไลน์มักถูกกว่าซื้อหน้างานวันหยุด โรงแรมอาจมีแพ็กรวมรถ ดูราคารวม ไม่ใช่แค่ตั๋ว",
              "先查官网 — 周末网上套票常比现场便宜；酒店套餐含交通，比总价而非票面价。",
              "Сначала официальный сайт — онлайн часто дешевле в выходные.",
            ),
          ),
          t(
            lang,
            L(
              "We do not sell tickets on Pattaya.com — always pay through the venue or a seller you trust.",
              "Pattaya.com ไม่ขายตั๋ว — จ่ายผ่านสถานที่หรือร้านที่เชื่อถือได้เท่านั้น",
              "Pattaya.com 不售票 — 请通过景点或可信渠道购买。",
              "Pattaya.com билеты не продаёт.",
            ),
          ),
        ],
        image: familyTipImages[0],
      },
      {
        id: "timing" as const,
        title: t(lang, L("Timing & what to pack", "เวลา & ของที่ต้องพก", "时间与携带物品", "Время и вещи")),
        paragraphs: [
          t(
            lang,
            L(
              "Water-park queues are shortest before 11:00 — arrive at opening if you can. Sunscreen, swim shoes, and a phone dry bag save a lot of hassle.",
              "คิวสวนน้ำสั้นสุดก่อน 11:00 — มาเปิดถ้าไหว ครีมกันแดด รองเท้าน้ำ ถุงกันน้ำโทรศัพท์ ช่วยได้เยอะ",
              "11:00 前水上乐园排队最短 — 尽量开园到；防晒、涉水鞋、手机防水袋很实用。",
              "До 11:00 очереди короче; SPF, обувь для воды, dry bag.",
            ),
          ),
          t(
            lang,
            L(
              "Plan a slow lunch break — tired kids and long afternoon lines do not mix well. Lockers fill on Thai public holidays.",
              "เผื่อพักกลางวันช้าๆ — เด็กเหนื่อย+คิวบ่ายยาว = แย่ ล็อกเกอร์เต็มวันหยุดนักขัตฤกษ์",
              "预留悠闲午餐 — 孩子累了下午排队更糟；泰国公休日储物柜紧张。",
              "Обед без спешки; в праздники локеры заняты.",
            ),
          ),
        ],
        image: familyTipImages[1],
      },
      {
        id: "kids" as const,
        title: t(lang, L("Height & age rules", "ส่วนสูง & อายุ", "身高与年龄", "Рост и возраст")),
        paragraphs: [
          t(
            lang,
            L(
              "Every park posts minimum heights on its site — screenshot the chart before you go so you are not explaining 'no' at the queue gate.",
              "ทุกที่บอกความสูงขั้นต่ำในเว็บ — แคปหน้าจอไว้ จะได้ไม่ต้องอธิบาย 'ห้าม' หน้าคิว",
              "各园官网有最低身高表 — 出发前截图，避免到队列口才被拒。",
              "Сохраните таблицу роста с сайта заранее.",
            ),
          ),
          t(
            lang,
            L(
              "Younger kids often need an adult on the same raft or slide — check which rides allow solo riders and which need a parent within arm's reach.",
              "เด็กเล็กมักต้องมีผู้ใหญ่ในแพหรือสไลด์เดียวกัน — เช็คว่าไหนเล่นคนเดียวได้ ไหนต้องมีพ่อแม่ข้างๆ",
              "幼童常需成人同筏或同滑 — 查清哪些可单独玩、哪些须家长陪同。",
              "Малышам часто нужен взрослый на том же плоту.",
            ),
          ),
        ],
        image: familyTipImages[2],
      },
      {
        id: "transport" as const,
        title: t(lang, L("Getting there", "เดินทาง", "交通", "Добраться")),
        paragraphs: [
          t(
            lang,
            L(
              "Grab or a private van works best for Bang Saray (Cartoon Network) and Sattahip (Nong Nooch) — agree return pickup times if you book a day hire.",
              "Grab หรือรถเหมาเหมาะกับบางเสร่ (การ์ตูนเน็ตเวิร์ก) และศาทะเหียป (นงนุช) — จองรถทั้งวันตกลงเวลารับกลับ",
              "Bang Saray 与 Sattahip 建议 Grab 或包车 — 包天需约定返程时间。",
              "Grab или машина на день до Bang Saray и Sattahip.",
            ),
          ),
          t(
            lang,
            L(
              "Mini Siam sits on Sukhumvit — songthaews pass regularly from central Pattaya. Aquaverse is south on Sukhumvit; check traffic before sunset return.",
              "เมืองจำลองอยู่ถ.สุขุมวิท สองแถวผ่านบ่อยจากกลางพัทยา อควาเวิร์สอยู่ใต้ถ.สุขุมวิท เช็ครถกลับช่วงเย็น",
              "Mini Siam 在 Sukhumvit，双条车常经过；Aquaverse 在南侧 Sukhumvit，傍晚返程注意堵车。",
              "Mini Siam — songthaew по Sukhumvit; вечером пробки.",
            ),
          ),
        ],
        image: familyTipImages[3],
      },
    ],
  };
}

export function getFamilyActivitiesPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: t(lang, L("Family Activities", "กิจกรรมครอบครัว", "亲子活动", "Семейный отдых")) },
    hero: {
      badge: c.family,
      title: t(lang, L("Family Activities", "กิจกรรมครอบครัว", "亲子活动", "Семейный отдых")),
      subtitle: t(lang, L("Family fun", "กิจกรรมครอบครัว", "亲子乐趣", "Для семьи")),
      body: t(
        lang,
        L(
          "Water parks, gardens, and kid-friendly days out around Pattaya — plan tickets, timing, and transport for stress-free family fun.",
          "สวนน้ำ สวน และกิจกรรมเด็กรอบพัทยา — วางแผนตั๋ว เวลา เดินทาง",
          "芭提雅水上乐园、花园与亲子一日游。",
          "Аквапарки, сады и семейные развлечения.",
        ),
      ),
    },
    activities: getFamilyActivitiesList(lang),
    dayPlans: getFamilyDayPlans(lang),
    tips: getFamilyTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      kohLarnDayTrip: c.kohLarnDayTrip,
      mainBeaches: c.mainBeaches,
      streetFood: c.streetFood,
    },
  };
}
