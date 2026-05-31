import type { LanguageCode } from "@/lib/i18n/languages";
import {
  yachtCharterTypeImages,
  yachtDayPlanImages,
  yachtDepartureImages,
  yachtTipImages,
} from "@/lib/design/yacht-charter-images";
import { exploreImages } from "@/lib/design/explore-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getYachtDeparturePoints(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  const openInMaps = t(
    lang,
    L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →"),
  );
  const officialSite = t(
    lang,
    L("Official marina site →", "เว็บมารีน่าทางการ →", "码头官网 →", "Сайт марины →"),
  );
  const kohLarnGuide = t(
    lang,
    L("Koh Larn day trip guide →", "คู่มือทริปเกาะล้าน →", "格兰岛指南 →", "Гид Ko Larn →"),
  );

  return {
    title: t(lang, L("Where boats leave", "จุดออกเรือ", "出发码头", "Откуда выходят")),
    subtitle: t(
      lang,
      L(
        "Real piers and marinas around Pattaya Bay — open Maps for directions; Pattaya.com does not sell or book charters.",
        "ท่าเรือและมารีน่าจริงรอบอ่าวพัทยา — เปิดแผนที่เอง Pattaya.com ไม่ขายหรือจองเรือ",
        "芭提雅湾真实码头 — 请自行导航；本页不提供包船预订。",
        "Реальные марины — Pattaya.com чартеры не продаёт.",
      ),
    ),
    hoursLabel: c.hours,
    highlightLabel: c.bestFor,
    priceRangeLabel: t(lang, L("Typical mooring / ferry", "ค่าท่า/เรือโดยสาร", "参考泊位/船票", "Примерная стоимость")),
    items: [
      {
        id: "ocean-marina" as const,
        name: t(
          lang,
          L("Ocean Marina Yacht Club", "โอเชียน มารีน่า ยอชต์ คลับ", "Ocean Marina 游艇俱乐部", "Ocean Marina"),
        ),
        hours: t(
          lang,
          L("Office ~08:00–17:00 · berths 24/7", "สำนักงาน ~08:00–17:00 · ท่าจอด 24 ชม.", "办公约8–17点 · 泊位全天", "Офис ~8–17"),
        ),
        highlight: t(
          lang,
          L(
            "Deep-water berths, charter operators, fuel dock",
            "ท่าน้ำลึก ผู้ให้บริการเช่าเรือ จุดเติมน้ำมัน",
            "深水泊位、包船运营商、加油站",
            "Глубоководные причалы и чартеры",
          ),
        ),
        text: t(
          lang,
          L(
            "Main yacht hub south of Pattaya in Na Jomtien — most private charters and larger boats start here. Allow extra drive time from Beach Road on weekends.",
            "ฮับยอชต์หลักใต้พัทยา หนองจอกเทียน — เรือเช่าส่วนใหญ่ออกจากที่นี่ วันหยุดจากถนนเลียบหาดใช้เวลาขับนานขึ้น",
            "芭提雅南侧 Na Jomtien 主要游艇枢纽 — 多数私人包船由此出发；周末从海滩路车程更长。",
            "Главная марина к югу — большинство чартеров отсюда.",
          ),
        ),
        priceRange: t(
          lang,
          L("Charter quotes vary · day fees on request", "ราคาเช่าแล้วแต่เรือ · ค่าท่าถามหน้างาน", "包船价格因船而异", "Цены индивидуально"),
        ),
        href: "https://www.google.com/maps/search/?api=1&query=Ocean+Marina+Yacht+Club+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "https://www.oceanmarina.com/",
        secondaryLinkLabel: officialSite,
        image: yachtDepartureImages[0],
      },
      {
        id: "bali-hai" as const,
        name: t(lang, L("Bali Hai Pier", "ท่าเรือบาลีไฮ", "Bali Hai 码头", "Bali Hai Pier")),
        hours: t(
          lang,
          L("Ferries ~07:00–18:00 (seasonal)", "เรือโดยสาร ~07:00–18:00 (ตามฤดู)", "渡轮约7–18点（季变）", "Паромы ~7–18"),
        ),
        highlight: t(
          lang,
          L(
            "Speedboats & ferries to Koh Larn",
            "เรือเร็ว/เรือโดยสารไปเกาะล้าน",
            "格兰岛快艇与渡轮",
            "Скоростные катера на Ko Larn",
          ),
        ),
        text: t(
          lang,
          L(
            "Busy passenger pier at the south end of Walking Street — public ferries and shared speedboats, not luxury charters. Good reference point if your operator says 'meet at Bali Hai'.",
            "ท่าเรือโดยสารปลาย Walking Street — เรือเกาะล้าน ไม่ใช่ยอชต์หรู แต่ operator มักบอก 'เจอที่บาลีไฮ'",
            "Walking Street 南端客运码头 — 公共渡轮与合乘快艇；运营商常说「Bali Hai 集合」。",
            "Пассажирский причал — паромы на Ko Larn.",
          ),
        ),
        priceRange: t(lang, L("~30–150 THB ferry / ~300+ THB speedboat", "~30–150 บาทเรือใหญ่ / ~300+ เรือเร็ว", "渡轮约30–150 / 快艇300+", "~30–150 / ~300+ бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Bali+Hai+Pier+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "/explore/islands/koh-larn",
        secondaryLinkLabel: kohLarnGuide,
        image: yachtDepartureImages[1],
      },
      {
        id: "pattaya-bay" as const,
        name: t(lang, L("Pattaya Bay anchorage", "จุดจอดอ่าวพัทยา", "芭提雅湾锚地", "Залив Паттайи")),
        hours: t(lang, L("Sunset charters ~16:00–19:00", "ล่อง sunset ~16:00–19:00", "日落巡航约16–19点", "Закат ~16–19"),
        ),
        highlight: t(
          lang,
          L(
            "Short sunset loops, bay views",
            "ลoop พระอาทิตย์ตก วิวอ่าว",
            "短 sunset 环线、湾景",
            "Короткие закатные круги",
          ),
        ),
        text: t(
          lang,
          L(
            "Operators often pick up near Bali Hai or Ocean Marina then idle in the bay for sunset — confirm your exact pier in writing before payment.",
            "operator มักรับใกล้บาลีไฮหรือโอเชียน มารีน่า แล้วจอดในอ่าวตอนเย็น — ยืนยันท่ารับเป็นข้อความก่อนจ่าย",
            "运营商多在 Bali Hai 或 Ocean Marina 接人后在湾内看日落 — 付款前书面确认上船点。",
            "Уточните причал посадки письменно до оплаты.",
          ),
        ),
        priceRange: t(lang, L("Sunset charters often ~15,000–45,000 THB", "ล่อง sunset มัก ~15,000–45,000 บาท", "日落包船约1.5–4.5万泰铢", "Закат ~15–45 тыс. бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Pattaya+Bay+Thailand",
        linkLabel: openInMaps,
        image: yachtDepartureImages[2],
      },
    ],
  };
}

export function getYachtCharterTypes(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  const openInMaps = t(
    lang,
    L("Find operators on Maps →", "หา operator ใน Maps →", "在地图找运营商 →", "Операторы на Maps →"),
  );
  const bookingTips = t(
    lang,
    L("Booking tips →", "เคล็ดลับจอง →", "预订贴士 →", "Советы по брони →"),
  );

  return {
    title: t(lang, L("Charter styles", "รูปแบบการเช่าเรือ", "包船类型", "Типы чартеров")),
    subtitle: t(
      lang,
      L(
        "Typical trip shapes — not specific boats. Compare quotes from licensed operators; names and fleets change season to season.",
        "รูปทริปทั่วไป — ไม่ใช่ชื่อเรือจริง เปรียบเทียบใบเสนอราคาจาก operator ที่มีใบอนุญาต",
        "常见行程形态 — 非具体船名；请向持证运营商询价。",
        "Типовые форматы — не конкретные суда.",
      ),
    ),
    hoursLabel: t(lang, L("Typical duration", "ระยะเวลาโดยทั่วไป", "常见时长", "Длительность")),
    highlightLabel: c.capacity,
    priceRangeLabel: t(lang, L("Guide price (whole boat)", "ราคาคร่าวๆ (ทั้งลำ)", "参考价（整船）", "Ориентир (лодка)")),
    items: [
      {
        id: "catamaran-sunset" as const,
        name: t(lang, L("Catamaran sunset", "คาตามารัน sunset", "双体船日落", "Катамаран на закат")),
        hours: t(lang, L("~3 hours · late afternoon", "~3 ชม. · บ่ายแก่เย็น", "约3小时 · 傍晚", "~3 ч · вечер")),
        highlight: t(lang, L("~8–20 guests", "~8–20 คน", "约8–20人", "~8–20 гостей")),
        text: t(
          lang,
          L(
            "Twin-hull boats with shaded decks — popular for birthdays and office drinks. Usually includes soft drinks; alcohol and catering are add-ons.",
            "เรือสองท้อง มีร่ม — งานวันเกิด ดื่มสังสรรค์บริษัท มักมีน้ำอัดลม แอลกอฮอล/บุฟเฟ่ต์จ่ายเพิ่ม",
            "双体船带遮阳 — 适合生日与聚会；通常含软饮，酒与餐饮另计。",
            "Катамаран с тенью — напитки часто включены.",
          ),
        ),
        priceRange: t(lang, L("~15,000–45,000 THB / trip", "~15,000–45,000 บาท/ทริป", "约1.5–4.5万泰铢/次", "~15–45 тыс. бат")),
        href: "https://www.google.com/maps/search/?api=1&query=yacht+charter+Ocean+Marina+Pattaya",
        linkLabel: openInMaps,
        secondaryHref: "#tip-booking",
        secondaryLinkLabel: bookingTips,
        image: yachtCharterTypeImages[0],
      },
      {
        id: "motor-yacht-islands" as const,
        name: t(lang, L("Motor yacht — island day", "มอเตอร์ยอชต์ — เกาะเต็มวัน", "机动游艇岛上一日", "Моторная яхта — острова")),
        hours: t(lang, L("~6–8 hours · morning start", "~6–8 ชม. · ออกเช้า", "约6–8小时 · 早出发", "~6–8 ч · утро")),
        highlight: t(lang, L("~6–15 guests", "~6–15 คน", "约6–15人", "~6–15 гостей")),
        text: t(
          lang,
          L(
            "Faster hulls for Koh Larn loops or longer runs toward Koh Khram — check fuel and park fees are included in your quote.",
            "ตัวเร็ว วนเกาะล้าน หรือไกลถึงเกาะคราม — เช็คว่าราคารวมน้ำมันและค่าอุทยานหรือยัง",
            "较快船型环格兰岛或更远 — 确认报价是否含燃油与公园费。",
            "Ko Larn и дальше — уточните топливо в цене.",
          ),
        ),
        priceRange: t(lang, L("~35,000–80,000 THB / day", "~35,000–80,000 บาท/วัน", "约3.5–8万泰铢/天", "~35–80 тыс. бат")),
        href: "https://www.google.com/maps/search/?api=1&query=motor+yacht+charter+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "#tip-booking",
        secondaryLinkLabel: bookingTips,
        image: yachtCharterTypeImages[1],
      },
      {
        id: "superyacht-events" as const,
        name: t(lang, L("Superyacht / event charter", "ซูเปอร์ยอชต์ / งานพิเศษ", "超级游艇/活动", "Суперяхта / ивент")),
        hours: t(lang, L("Full day or overnight", "เต็มวันหรือค้างคืน", "全天或过夜", "День или ночь")),
        highlight: t(lang, L("~12–40+ guests", "~12–40+ คน", "约12–40+人", "~12–40+")),
        text: t(
          lang,
          L(
            "Crewed boats with saloons and galleys for weddings, product launches, or multi-day hops — book weeks ahead in high season.",
            "เรือมีลูกเรือ ห้องแอร์ ครัว — งานแต่ง เปิดตัวสินค้า หรือหลายวัน ไฮซีซันจองล่วงหน้าหลายสัปดาห์",
            "有船员、空调厅与厨房 — 婚礼、发布会或多日行程；旺季需提前数周预订。",
            "С экипажем — бронируйте заранее в сезон.",
          ),
        ),
        priceRange: t(lang, L("~80,000 THB+ / day", "~80,000 บาท+/วัน", "约8万泰铢+/天", "от ~80 тыс. бат")),
        href: "https://www.google.com/maps/search/?api=1&query=superyacht+charter+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "#tip-booking",
        secondaryLinkLabel: bookingTips,
        image: yachtCharterTypeImages[2],
      },
    ],
  };
}

export function getYachtMarinaSpotlight(lang: LanguageCode) {
  const openInMaps = t(
    lang,
    L("Open Ocean Marina in Maps →", "เปิด Ocean Marina ใน Maps →", "在地图打开 Ocean Marina →", "Ocean Marina на Maps →"),
  );
  const officialSite = t(
    lang,
    L("Ocean Marina official site →", "เว็บ Ocean Marina →", "Ocean Marina 官网 →", "Сайт Ocean Marina →"),
  );

  return {
    eyebrow: t(lang, L("Primary marina", "มารีน่าหลัก", "主要码头", "Главная марина")),
    title: t(lang, L("Ocean Marina Yacht Club", "โอเชียน มารีน่า ยอชต์ คลับ", "Ocean Marina 游艇俱乐部", "Ocean Marina")),
    body: t(
      lang,
      L(
        "The best-known deep-water marina serving Pattaya charters — fuel, provisioning, and waterfront restaurants on site. Most multi-hour private trips start here rather than at Bali Hai passenger piers.",
        "มารีน่าน้ำลึกที่รู้จักที่สุดสำหรับเช่าเรือรอบพัทยา — มีน้ำมัน จัดเสบียง ร้านอาหารริมน้ำ ทริปส่วนตัวหลายชม. มักออกจากที่นี่มากกว่าท่าเรือโดยสารบาลีไฮ",
        "芭提雅最知名深水游艇码头 — 加油、补给与滨水餐厅；多数私人包船由此出发。",
        "Глубоководная марина — большинство чартеров отсюда.",
      ),
    ),
    amenities: [
      t(lang, L("Deep-water berths (large yachts)", "ท่าจอดน้ำลึก (เรือใหญ่)", "深水泊位（大艇）", "Глубокие причалы")),
      t(lang, L("Fuel dock & basic technical support", "จุดเติมน้ำมัน & บริการเทคนิคเบื้องต้น", "加油站与基础维修", "Топливо и сервис")),
      t(lang, L("Waterfront dining & marina office", "ร้านอาหารริมน้ำ & สำนักงานมารีน่า", "滨水餐饮与码头办公室", "Рестораны и офис")),
      t(lang, L("Security gate — bring booking confirmation", "มีประตูรักษาความปลอดภัย — นำยืนยันการจอง", "有门禁 — 请带预订确认", "Охрана — нужно подтверждение")),
    ],
    mapsHref: "https://www.google.com/maps/search/?api=1&query=Ocean+Marina+Yacht+Club+Pattaya+Thailand",
    mapsLabel: openInMaps,
    siteHref: "https://www.oceanmarina.com/",
    siteLabel: officialSite,
    image: exploreImages.yacht,
  };
}

export function getYachtDayPlans(lang: LanguageCode) {
  const seeCharter = t(lang, L("See charter styles →", "ดูรูปแบบเช่าเรือ →", "查看包船类型 →", "Типы чартеров →"));
  const kohLarnGuide = t(lang, L("Koh Larn guide →", "คู่มือเกาะล้าน →", "格兰岛指南 →", "Гид Ko Larn →"));
  const seeDeparture = t(lang, L("See departure points →", "ดูจุดออกเรือ →", "查看出发码头 →", "Причалы →"));

  return {
    title: t(lang, L("Plan your charter day", "วางแผนทริปเรือ", "规划包船一日", "План чартера")),
    subtitle: t(
      lang,
      L(
        "Sample itineraries — confirm times, pier, and inclusions with your operator before you pay.",
        "ตัวอย่างแผนวัน — ยืนยันเวลา ท่า และสิ่งที่รวมในราคากับ operator ก่อนจ่าย",
        "示例行程 — 付款前与运营商确认时间、码头与包含项目。",
        "Примеры — уточните у оператора до оплаты.",
      ),
    ),
    items: [
      {
        id: "sunset-bay" as const,
        title: t(lang, L("Sunset in the bay (~3 hr)", "Sunset ในอ่าว (~3 ชม.)", "湾内日落（约3小时）", "Закат в заливе (~3 ч)")),
        paragraphs: [
          t(
            lang,
            L(
              "Board around 16:30, motor out of Ocean Marina, loop Pattaya Bay for golden hour, back before dark. Works well for groups that do not want a full-day commitment.",
              "ขึ้นเรือ ~16:30 ออกจากโอเชียน มารีน่า วนอ่าวพัทยาช่วงเย็น กลับก่อนค่ำ — เหมาะกลุ่มที่ไม่อยากใช้เวลาทั้งวัน",
              "约16:30 从 Ocean Marina 出发，环芭提雅湾看日落，天黑前返回 — 适合不想全天出海的人。",
              "Посадка ~16:30 из Ocean Marina — короткий закатный круг.",
            ),
          ),
        ],
        href: "#charter-catamaran-sunset",
        linkLabel: seeCharter,
        image: yachtDayPlanImages[0],
      },
      {
        id: "koh-larn-full-day" as const,
        title: t(lang, L("Koh Larn full day (~6–8 hr)", "เกาะล้านเต็มวัน (~6–8 ชม.)", "格兰岛全天（约6–8小时）", "Ko Larn — день (~6–8 ч)")),
        paragraphs: [
          t(
            lang,
            L(
              "Morning pickup, snorkel stops, lunch on board or at a beach club, return mid-afternoon. Pair with our Koh Larn guide for ferry alternatives if a private boat is over budget.",
              "รับเช้า แวะดำน้ำ กินอาหารกลางวันบนเรือหรือที่ beach club กลับบ่าย — ถ้างบไม่ถึงดูคู่มือเกาะล้านเรือโดยสาร",
              "上午接人、浮潜、船上或 beach club 午餐、下午返回 — 预算有限可看格兰岛渡轮指南。",
              "Утро — сноркелинг и обед; см. гид Ko Larn для парома.",
            ),
          ),
        ],
        href: "/explore/islands/koh-larn",
        linkLabel: kohLarnGuide,
        image: yachtDayPlanImages[1],
      },
      {
        id: "koh-khram-escape" as const,
        title: t(lang, L("Koh Khram escape (full day)", "หนีฝูงชนเกาะคราม (เต็มวัน)", "Koh Khram 一日", "Koh Khram — день")),
        paragraphs: [
          t(
            lang,
            L(
              "Farther east with fewer boats — needs calm seas and an early start from Ocean Marina. Not every operator goes there; book ahead and check national-park rules for the day.",
              "อยู่ไกลกว่า เรือน้อย — ต้องทะเลสงบ ออกเช้าจากโอเชียน มารีน่า ไม่ใช่ทุก operator ไป จองล่วงหน้า เช็คกฎอุทยาน",
              "更远的东部岛屿、船少 — 需平静海况与早起；并非所有运营商都去；提前预订并查公园规定。",
              "Дальше на восток — бронь заранее, проверьте правила парка.",
            ),
          ),
        ],
        href: "#departure-ocean-marina",
        linkLabel: seeDeparture,
        image: yachtDayPlanImages[2],
      },
    ],
  };
}

export function getYachtTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Charter tips", "เคล็ดลับเช่าเรือ", "包船贴士", "Советы")),
    subtitle: t(
      lang,
      L(
        "How to book safely and read quotes — no paid listings or fake 'instant booking' on this page.",
        "จองอย่างไรให้ปลอดภัย อ่านใบเสนอราคาอย่างไร — หน้านี้ไม่มีรายการโฆษณาหรือปุ่มจองปลอม",
        "如何安全预订与读懂报价 — 本页无付费 listing 或假「即时预订」。",
        "Как бронировать — без рекламных листингов.",
      ),
    ),
    items: [
      {
        id: "booking" as const,
        title: t(lang, L("Booking direct", "จองตรงกับ operator", "直接向运营商预订", "Бронирование")),
        paragraphs: [
          t(
            lang,
            L(
              "Use the operator's own contract or invoice — get the pier name, boarding time, and cancellation policy in writing. Deposits via bank transfer are common; avoid paying strangers in cash without a receipt.",
              "ใช้สัญญ/ใบเสนอราคาของ operator เอง — ให้ระบุท่า เวลาขึ้นเรือ นโยบายยกเลิกเป็นข้อความ มัดจำโอนเงินเป็นเรื่องปกติ อย่าจ่ายเงินสดคนแปลกหน้าโดยไม่มีใบเสร็จ",
              "使用运营商合同或发票 — 书面写明码头、登船时间与取消政策；转账订金常见，勿向陌生人无收据付现金。",
              "Договор с pier и временем — не платите наличными без чека.",
            ),
          ),
          t(
            lang,
            L(
              "Pattaya.com does not arrange charters or take commission — we only link to Maps and official marina pages.",
              "Pattaya.com ไม่จัดเรือหรือรับค่าคอม — เราแค่ลิงก์ Maps และเว็บมารีน่าทางการ",
              "Pattaya.com 不安排包船、不抽佣 — 仅链接地图与官方码头页。",
              "Pattaya.com чартеры не организует.",
            ),
          ),
        ],
        image: yachtTipImages[0],
      },
      {
        id: "season" as const,
        title: t(lang, L("Season & sea state", "ฤดูกาล & สภาพทะเล", "季节与海况", "Сезон")),
        paragraphs: [
          t(
            lang,
            L(
              "Calmest months are usually November through April — afternoon wind can still chop the bay. May–October brings rain and swell; operators may reschedule rather than refund.",
              "ทะเลสงบสุดมัก พ.ย.–เม.ย. แต่ลมบ่ายก็ทำให้อ่าวมีคลื่น พ.ค.–ต.ค. ฝนและ swell มาก operator มักเลื่อนวันมากกว่าคืนเงิน",
              "通常11–4月最平静，但下午仍可能有浪；5–10月雨与涌浪多，运营商多改期而非退款。",
              "Ноябрь–апрель спокойнее; в муссон переносят дату.",
            ),
          ),
          t(
            lang,
            L(
              "Ask what happens if the captain cancels for weather — a written rain-check beats a verbal promise at the pier.",
              "ถามว่าถ้ากัปตันยกเลิกเพราะอากาศจะทำอย่างไร — มี rain-check เป็นลายลักษณ์ดีกว่าคำพูดหน้าท่า",
              "问船长因天气取消如何处理 — 书面改期条款优于码头口头承诺。",
              "Уточните политику при отмене из-за погоды.",
            ),
          ),
        ],
        image: yachtTipImages[1],
      },
      {
        id: "cost" as const,
        title: t(lang, L("Reading the quote", "อ่านใบเสนอราคา", "读懂报价", "Смета")),
        paragraphs: [
          t(
            lang,
            L(
              "Check whether fuel, crew, ice, water, and national-park fees are included — 'from' prices often exclude alcohol, DJ, or jet skis. Overtime is usually billed per hour after the agreed return time.",
              "เช็คว่ารวมน้ำมัน ลูกเรือ น้ำแข็ง น้ำดื่ม ค่าอุทยานหรือยัง ราคา 'จาก' มักไม่รวมแอลกอฮอล DJ หรือ jet ski เกินเวลาคิดรายชั่วโมง",
              "确认是否含燃油、船员、冰、水与公园费；「起价」常不含酒、DJ 或摩托艇；超时通常按小时计费。",
              "Топливо, экипаж, парки — уточните; переработка почасово.",
            ),
          ),
          t(
            lang,
            L(
              "Tipping crew is appreciated but not mandatory — 5–10% of the charter fee is a common gesture on full-day trips if service was excellent.",
              "ทิปลูกเรือแล้วแต่ใจ ไม่บังคับ — 5–10% ของค่าเช่าเป็นมารยาททั่วไปถ้าบริการดี",
              "船员小费自愿 — 全天行程服务很好时，约为包船费5–10%较常见。",
              "Чаевые 5–10% при отличном сервисе.",
            ),
          ),
        ],
        image: yachtTipImages[2],
      },
      {
        id: "departure" as const,
        title: t(lang, L("Which pier to use", "ควรไปท่าไหน", "选哪个码头", "Какой причал")),
        paragraphs: [
          t(
            lang,
            L(
              "Private charters and larger boats: Ocean Marina. Public ferries and budget speedboats to Koh Larn: Bali Hai — do not confuse the two when your driver drops you off.",
              "เรือเช่าส่วนตัว/เรือใหญ่: โอเชียน มารีน่า เรือโดยสาร/เรือเร็วเกาะล้าน: บาลีไฮ — อย่าสลับเมื่อรถมาส่ง",
              "私人包船与大艇：Ocean Marina；格兰岛公共渡轮/快艇：Bali Hai — 司机送达时勿搞混。",
              "Чартер — Ocean Marina; паром Ko Larn — Bali Hai.",
            ),
          ),
          t(
            lang,
            L(
              "Arrive 20–30 minutes early for security at Ocean Marina — you may need passport copies for guest manifests on longer trips.",
              "ถึงโอเชียน มารีน่าก่อน 20–30 นาที ผ่านรปภ. — ทริปไกลๆ อาจต้องสำเนาพาสปอร์ตรายชื่อผู้โดยสาร",
              "Ocean Marina 提前20–30分钟到以过安检 — 长途行程可能需乘客护照复印件。",
              "Ocean Marina — приезжайте за 20–30 мин; паспорта для манифеста.",
            ),
          ),
        ],
        image: yachtTipImages[3],
      },
    ],
  };
}

export function getYachtPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      luxury: c.luxury,
      current: t(lang, L("Yacht & Marina", "เรือยอร์ช & มารีน่า", "游艇与码头", "Яхты и марина")),
    },
    hero: {
      badge: c.luxury,
      title: t(lang, L("Yacht & Marina", "เรือยอร์ช & มารีน่า", "游艇与码头", "Яхты")),
      subtitle: t(lang, L("Charters & marinas", "เช่าเรือ & มารีน่า", "包船与码头", "Чартеры")),
      body: t(
        lang,
        L(
          "Plan private charters around Pattaya Bay — real marinas, typical prices, and booking tips. We link to Maps and operator sites; we do not sell trips on this page.",
          "วางแผนเช่าเรือรอบอ่าวพัทยา — มารีน่าจริง ราคาคร่าวๆ tips การจอง เราลิงก์ Maps/เว็บ operator ไม่ขายทริปในหน้านี้",
          "规划芭提雅湾包船 — 真实码头、参考价与预订贴士；仅链地图与运营商，本页不售行程。",
          "Чартеры в заливе — марины и советы; мы не продаём поездки.",
        ),
      ),
    },
    departurePoints: getYachtDeparturePoints(lang),
    charterTypes: getYachtCharterTypes(lang),
    marina: getYachtMarinaSpotlight(lang),
    dayPlans: getYachtDayPlans(lang),
    tips: getYachtTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      kohLarnDayTrip: c.kohLarnDayTrip,
      fineDining: c.fineDining,
      wellness: t(lang, L("Wellness →", "สปา & สุขภาพ →", "康养 →", "Wellness →")),
    },
  };
}
