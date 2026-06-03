import type { LanguageCode } from "@/lib/i18n/languages";
import { shoppingMallImages } from "@/lib/design/shopping-mall-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getMallFirstVisitPicks,
  getMallGuideIntro,
  getMallGuideItems,
  getMallMoodPicks,
} from "@/lib/i18n/messages/explore-shopping-malls-guide";

export function getShoppingMalls(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  const openInMaps = t(
    lang,
    L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps"),
  );

  return {
    title: t(lang, L("Choose your mall", "เลือกห้าง", "选择商场", "Выберите ТРЦ")),
    subtitle: t(
      lang,
      L(
        "Five recommended malls across Pattaya — open hours are guides only; no paid listings on this page.",
        "ห้างแนะนำ 5 แห่งในพัทยา — เวลาเป็นคร่าว ๆ ไม่มีรายการโฆษณาในหน้านี้",
        "芭提雅五家推荐商场 — 开放时间为参考，本页无商业推广。",
        "Пять рекомендуемых ТРЦ — часы ориентировочные.",
      ),
    ),
    hoursLabel: c.hours,
    highlightsLabel: c.highlights,
    priceLevelLabel: t(lang, L("Price level", "ระดับราคา", "价位", "Уровень цен")),
    items: [
      {
        id: "central-festival" as const,
        name: t(
          lang,
          L("Central Festival Pattaya Beach", "เซ็นทรัล เฟสติวัล พัทยา บีช", "Central Festival", "Central Festival"),
        ),
        hours: t(lang, L("Daily · ~10:00–22:00", "ทุกวัน · ~10:00–22:00", "每日 · 约10:00–22:00", "Ежедн. · ~10:00–22:00")),
        highlights: t(
          lang,
          L(
            "Flagship mall with sea views, international fashion, and rooftop dining.",
            "ห้าง flagship วิวทะเล แฟชั่น rooftop dining",
            "旗舰商场，海景与屋顶餐饮。",
            "Флагман с видом на море.",
          ),
        ),
        text: t(
          lang,
          L(
            "Pattaya's largest beach-road mall — air-conditioned comfort, brand-name stores, and easy access from Walking Street and the bay.",
            "ห้างใหญ่สุดริม Beach Rd — แอร์ แบรนด์ ใกล้ Walking Street",
            "最大海滨路商场，近 Walking Street。",
            "Крупнейший ТРЦ на Beach Rd.",
          ),
        ),
        priceLevel: t(lang, L("Mid–high / flagship", "กลาง–สูง / flagship", "中高/旗舰", "Mid–high / флагман")),
        href: "https://www.google.com/maps/search/?api=1&query=Central+Festival+Pattaya+Beach+Thailand",
        linkLabel: openInMaps,
        external: true,
        image: shoppingMallImages[0],
      },
      {
        id: "terminal-21" as const,
        name: t(lang, L("Terminal 21 Pattaya", "เทอร์มินอล 21 พัทยา", "Terminal 21", "Terminal 21")),
        hours: t(lang, L("Daily · ~10:00–22:00", "ทุกวัน · ~10:00–22:00", "每日 · 约10:00–22:00", "Ежедн. · ~10:00–22:00")),
        highlights: t(
          lang,
          L(
            "City-themed levels, wide food court, and mid-range fashion under one roof.",
            "ธีมเมือง ฟู้ดคอร์ทกว้าง แฟชั่นกลาง",
            "城市主题、美食广场与中端时尚。",
            "Тематические этажи и фуд-корт.",
          ),
        ),
        text: t(
          lang,
          L(
            "Distinct airport-terminal concept with photo-friendly décor — popular for families and rainy-day shopping near Bali Hai Pier.",
            "คอนเซปต์สนามบิน ถ่ายรูปสวย ครอบครัว วันฝน ใกล้ท่าเรือแหลมบาลีฮาย",
            "机场主题，适合家庭与雨天，近 Bali Hai 码头。",
            "Аэропорт-тема, семьи, дождь — у причала Bali Hai.",
          ),
        ),
        priceLevel: t(lang, L("Mid-range", "ระดับกลาง", "中端", "Средний")),
        href: "https://www.google.com/maps/search/?api=1&query=Terminal+21+Pattaya+Thailand",
        linkLabel: openInMaps,
        external: true,
        image: shoppingMallImages[1],
      },
      {
        id: "royal-garden" as const,
        name: t(lang, L("Royal Garden Plaza", "รอยัล การ์เด้น พลาซ่า", "Royal Garden Plaza", "Royal Garden")),
        hours: t(lang, L("Daily · ~11:00–22:00", "ทุกวัน · ~11:00–22:00", "每日 · 约11:00–22:00", "Ежедн. · ~11:00–22:00")),
        highlights: t(
          lang,
          L(
            "Ripley's Believe It or Not!, restaurants, and souvenir-friendly mid-size mall.",
            "Ripley's ร้านอาหาร ของฝาก",
            "Ripley's、餐饮与纪念品。",
            "Ripley's и сувениры.",
          ),
        ),
        text: t(
          lang,
          L(
            "Compact mall with entertainment attractions — handy base before an evening on Walking Street.",
            "ห้างกะทัดรัด มีสถานที่ท่องเที่ยว — ก่อน Walking Street",
            "紧凑商场含娱乐景点，Walking Street 前中转。",
            "Компактный ТРЦ перед Walking Street.",
          ),
        ),
        priceLevel: t(lang, L("Mid-range", "ระดับกลาง", "中端", "Средний")),
        href: "https://www.google.com/maps/search/?api=1&query=Royal+Garden+Plaza+Pattaya+Thailand",
        linkLabel: openInMaps,
        external: true,
        image: shoppingMallImages[2],
      },
      {
        id: "harbor-mall" as const,
        name: t(
          lang,
          L("Harbor Mall & Mike Shopping Mall", "ฮาร์เบอร์ / ไมค์ ช็อปปิ้ง", "Harbor & Mike", "Harbor & Mike"),
        ),
        hours: t(lang, L("Daily · ~10:00–21:00", "ทุกวัน · ~10:00–21:00", "每日 · 约10:00–21:00", "Ежедн. · ~10:00–21:00")),
        highlights: t(
          lang,
          L(
            "Value fashion, luggage, and tourist souvenirs at lower price points.",
            "แฟชั่น กระเป๋า ของฝาก ราคาถูก",
            "平价时尚、行李箱与纪念品。",
            "Недорогая мода и сувениры.",
          ),
        ),
        text: t(
          lang,
          L(
            "Pair these adjacent complexes for bargain hunting — expect negotiation at smaller independent stalls.",
            "คู่ complex ติดกัน ต่อราคาได้ที่แผงเล็ก",
            "相邻综合体，小摊可议价。",
            "Два комплекса рядом — торгуйтесь.",
          ),
        ),
        priceLevel: t(lang, L("Budget–mid", "ประหยัด–กลาง", "平价至中端", "Бюджет–mid")),
        href: "https://www.google.com/maps/search/?api=1&query=Harbor+Mall+Pattaya+Thailand",
        linkLabel: openInMaps,
        external: true,
        image: shoppingMallImages[3],
      },
    ],
  };
}

export function getMallTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Mall tips", "เคล็ดลับห้าง", "购物贴士", "Советы")),
    subtitle: t(
      lang,
      L(
        "Straightforward tips from people who actually shop here — nothing sponsored on this page.",
        "Tips ตรงๆ จากคนที่ช้อปพัทยาจริง — หน้านี้ไม่มีโฆษณา",
        "实用购物建议，本页无商业推广。",
        "Простые советы без рекламы.",
      ),
    ),
    items: [
      {
        id: "parking" as const,
        title: t(lang, L("Parking & taxis", "ที่จอด & แท็กซี่", "停车与出租", "Парковка")),
        paragraphs: [
          t(
            lang,
            L(
              "Beach Rd jams up around sunset. Easier to use the mall car park or get dropped at the entrance than circle the block. Central Festival and Terminal 21 both have parking — some shops stamp your ticket for a discount.",
              "ช่วงเย็น Beach Rd รถติดมาก จอดในห้างหรือให้ส่งหน้าประตูสะดวกกว่าวนไปมา เซ็นทรัลกับเทอร์มินอล 21 มีที่จอด บางร้านช่วยสแตมป์ตั๋วลดค่าจอดได้",
              "傍晚 Beach Rd 很堵 — 用商场停车场或在门口下车更省事；Central 与 Terminal 21 均可停车，部分店铺可盖章减停车费。",
              "К вечеру Beach Rd в пробках — паркуйтесь в ТРЦ; иногда штамп на парковке даёт скидку.",
            ),
          ),
          t(
            lang,
            L(
              "Songthaews run Beach Rd and 2nd Rd — agree the fare before you hop on. After 22:00, Grab or Bolt is usually simpler than flagging a taxi in traffic.",
              "สองแถววิ่ง Beach Rd กับ 2nd Rd ถามราคาก่อนขึ้น หลัง 4 ทุ่มเรียก Grab/Bolt มักสะดวกกว่าเรียกแท็กซี่กลางถนน",
              "双条车走 Beach Rd 和 2nd Rd，上车前先讲价；22:00 后 Grab/Bolt 通常比路边拦出租省事。",
              "Songthaew — договоритесь о цене заранее; после 22:00 удобнее Grab.",
            ),
          ),
        ],
      },
      {
        id: "timing" as const,
        title: t(lang, L("Best times", "ช่วงเวลาดี", "最佳时段", "Время")),
        paragraphs: [
          t(
            lang,
            L(
              "Mon–Thu, 10:00–12:00 is the calmest window for clothes and electronics. Food courts still fill up at lunch — that part never really quiets down.",
              "จ–พฤ 10:00–12:00 คนบาง แวะดูเสื้อผ้า มือถือสบาย แต่ฟู้ดคอร์ทมื้อเที่ยงยังแน่นอยู่ดี",
              "周一至周四 10:00–12:00 逛服装和电子产品最安静；美食广场午餐仍很挤。",
              "Пн–Чт 10:00–12:00 — спокойнее для магазинов; фуд-корт в обед всё равно полон.",
            ),
          ),
          t(
            lang,
            L(
              "Fri–Sun, 17:00–20:00 gets busy near cinemas and restaurants — book movie tickets ahead if you can. On rainy afternoons, more people duck into malls to wait out the weather.",
              "ศ–อา 17:00–20:00 โรงหนังกับร้านอาหารแน่น อยากดูหนังควรจองตั๋วล่วงหน้า ฤดูฝนบ่ายๆ คนชอบเข้าห้างหลบฝน",
              "周五至周日 17:00–20:00 影院和餐饮区最挤，建议提前订票；雨季下午很多人进商场躲雨。",
              "Пт–Вс 17:00–20:00 — очереди у кино; в дождь в ТРЦ больше народа.",
            ),
          ),
        ],
      },
      {
        id: "vat" as const,
        title: t(lang, L("Tax & receipts", "ภาษี & ใบเสร็จ", "退税与收据", "Налог")),
        paragraphs: [
          t(
            lang,
            L(
              "Only some stores offer tourist VAT refund — look for signs at the counter or just ask before you pay. There is a minimum spend, and receipts from the same day usually need to be grouped together.",
              "ไม่ใช่ทุกร้าน — ดูป้ายที่เคาน์เตอร์หรือถามก่อนจ่าย มียอดขั้นต่ำ ใบเสร็จวันเดียวกันมักต้องรวมกัน",
              "并非每家店都能退税 — 付款前看柜台标识或询问；有最低消费，同日收据通常要合并。",
              "Не все магазины — спросите до оплаты; есть минимум, чеки за один день вместе.",
            ),
          ),
          t(
            lang,
            L(
              "Keep your passport and receipts for the refund desk at the airport when you leave Thailand. Meals, services, and small everyday items usually do not count.",
              "เก็บพาสปอร์ตกับใบเสร็จ ไปทำที่เคาน์เตอร์สนามบินตอนออกไทย ของกิน ค่าบริการ ยอดเล็กๆ มักไม่รวม",
              "离境时在机场退税柜台办理，需护照和收据；餐饮、服务和日常小额消费通常不可退。",
              "Паспорт и чеки — в аэропорту при вылете; еда и услуги обычно не подходят.",
            ),
          ),
        ],
      },
      {
        id: "midday" as const,
        title: t(lang, L("Escaping the midday heat", "หลบแดดกลางวัน", "午间避暑", "Жара в полдень")),
        paragraphs: [
          t(
            lang,
            L(
              "Pattaya sun is brutal between 11:00 and 15:00. A common split: beach in the morning, mall for lunch and shopping in the AC, back outside when it cools off.",
              "แดดพัทยาแรง 11:00–15:00 น. หลายคนแบ่งวันแบบนี้: เช้าไปหาด → กลางวันเข้าห้างกินข้าว ช้อปต่อแบบแอร์เย็น → เย็นค่อยออกมาใหม่",
              "11:00–15:00 日照很强 — 常见安排：上午海滩，中午进商场吃饭购物，傍晚再出来。",
              "С 11:00 до 15:00 жарко — утро на пляже, день в ТРЦ, вечером снова на улицу.",
            ),
          ),
          t(
            lang,
            L(
              "Upper floors and cinemas can feel freezing — bring a light jacket. Food courts have Wi‑Fi but seats go fast at lunch; after 13:30 you will find a table more easily.",
              "ชั้นบนกับโรงหนังแอร์หนาว ควรมีเสื้อคลุมบางๆ ฟู้ดคอร์ทมี Wi‑Fi แต่โต๊ะเต็มเร็วช่วงมื้อเที่ยง กินหลัง 13:30 จะหาง่ายกว่า",
              "高层和影院空调很冷，备薄外套；美食广场有 Wi‑Fi，午餐位紧张，13:30 后好找座。",
              "На верхних этажах и в кино холодно — лёгкая кофта; после 13:30 в фуд-корте проще найти стол.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getShoppingMallsPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: t(lang, L("Shopping Malls", "ห้างสรรพสินค้า", "购物中心", "ТРЦ")) },
    hero: {
      badge: c.shopping,
      title: t(lang, L("Shopping Malls", "ห้างสรรพสินค้า", "购物中心", "ТРЦ")),
      subtitle: t(lang, L("Shopping malls", "ห้างสรรพสินค้า", "商场", "Торговые центры")),
      body: t(
        lang,
        L(
          "Pattaya has more malls than many visitors expect — each with a different character: flagship shopping, themed walks, outlets, local marina life, or gem galleries.",
          "พัทยามีห้างเยอะกว่าที่หลายคนคิด แต่ละที่คาแรกเตอร์ต่างกัน — ช้อป ธีมเที่ยว เอาท์เล็ต ฟีล local หรือเครื่องประดับ",
          "芭提雅商场比想象中多，各有特色：旗舰购物、主题逛吃、奥特莱斯、本地生活或珠宝馆。",
          "В Паттайе больше ТРЦ, чем кажется — у каждого свой характер.",
        ),
      ),
      badgeLuxury: t(lang, L("Luxury & mid-range", "หรู & กลาง", "奢华与中端", "Люкс и mid-range")),
      badgeAreas: t(lang, L("Beach Rd · 2nd Rd", "Beach Rd · 2nd Rd", "Beach Rd · 2nd Rd", "Beach Rd · 2nd Rd")),
    },
    malls: getShoppingMalls(lang),
    guide: getMallGuideIntro(lang),
    guideItems: getMallGuideItems(lang),
    moodPicks: getMallMoodPicks(lang),
    firstVisit: getMallFirstVisitPicks(lang),
    tips: getMallTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      localMarkets: c.localMarkets,
      streetFood: c.streetFood,
      cafesLink: c.cafesLink,
    },
  };
}
