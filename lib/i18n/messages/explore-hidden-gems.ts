import type { LanguageCode } from "@/lib/i18n/languages";
import {
  hiddenGemSpotImages,
  hiddenGemTipImages,
  hiddenGemWalkPlanImages,
} from "@/lib/design/hidden-gem-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getHiddenGemsSpots(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  const openInMaps = t(
    lang,
    L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →"),
  );
  const beachGuide = t(lang, L("Beach guide →", "คู่มือหาด →", "海滩指南 →", "Гид пляжа →"));

  return {
    title: t(lang, L("Quieter corners", "มุมเงียบกว่า", "更安静的角落", "Тихие уголки")),
    subtitle: t(
      lang,
      L(
        "Real neighbourhoods and beaches around Pattaya — open Maps for directions; we link to guides already on this site, not paid listings.",
        "ย่านและหาดจริงรอบพัทยา — เปิดแผนที่เอง เราลิงก์คู่มือในเว็บ ไม่มีรายการโฆษณา",
        "芭提雅真实街区与海滩 — 请自行导航；链至站内已有指南，无付费 listing。",
        "Реальные места — ссылки на гиды сайта, без рекламы.",
      ),
    ),
    hoursLabel: t(lang, L("Best time", "เวลาที่เหมาะ", "最佳时段", "Лучшее время")),
    highlightLabel: c.vibe,
    accessLabel: t(lang, L("Getting there", "การเดินทาง", "交通", "Добраться")),
    items: [
      {
        id: "naklua-mornings" as const,
        name: t(
          lang,
          L("Naklua fishing village & morning market", "หมู่บ้านประมง & ตลาดเช้านาเกลือ", "那库拉渔村与早市", "Naklua — рынок"),
        ),
        hours: t(lang, L("~06:00–10:00 weekdays", "~06:00–10:00 วันธรรมดา", "工作日约6–10点", "~6–10 будни")),
        highlight: t(
          lang,
          L(
            "Wet market, boat noodles, quiet sand",
            "ตลาดสด ก๋วยเตี๋ยวเรือ หาดเงียบ",
            "湿货市场、船面、安静沙滩",
            "Рынок, лапша, тихий пляж",
          ),
        ),
        access: t(
          lang,
          L(
            "Songthaew along Naklua Road · parking near market",
            "สองแถวถ.นาเกลือ · จอดใกล้ตลาด",
            "那库拉路双条车 · 市场附近停车",
            "Songthaew по Naklua Rd",
          ),
        ),
        text: t(
          lang,
          L(
            "North of Pattaya Beach — fishermen mend nets while the wet market opens. Walk the sand before Bangkok day-trippers arrive; pair with our Naklua market card for shopping.",
            "เหนือหาดพัทยา — ชาวประมงซ่อมแพ ตลาดสดเปิด เดินหาดก่อนรถจากกรุงมา ดูการ์ดตลาดนาเกลือในหน้าตลาด",
            "芭提雅海滩以北 — 早市与渔网；曼谷一日游人群到来前漫步沙滩；可配合 markets 页的 Naklua 卡片。",
            "Север Pattaya Beach — рынок до туристов из Bangkok.",
          ),
        ),
        href: "https://www.google.com/maps/search/?api=1&query=Naklua+Market+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "/explore/beaches/naklua",
        secondaryLinkLabel: beachGuide,
        image: hiddenGemSpotImages[0],
      },
      {
        id: "pratumnak-viewpoint" as const,
        name: t(
          lang,
          L("Pratumnak Hill viewpoint", "จุดชมวิวเขาพระตำหนัก", "Pratumnak 山观景点", "Смотровая Pratumnak"),
        ),
        hours: t(lang, L("Clear days · ~17:00–18:30", "อากาศดี · ~17:00–18:30", "晴天 · 约17–18:30", "Ясно · ~17–18:30")),
        highlight: t(
          lang,
          L(
            "Bay panorama, Big Buddha area",
            "วิวอ่าว บริเวณพระใหญ่",
            "海湾全景、大佛区域",
            "Панорама залива",
          ),
        ),
        access: t(
          lang,
          L(
            "Grab or motorbike · steep hill road",
            "Grab หรือมอเตอร์ไซค์ · ถนนขึ้นเขา",
            "Grab 或摩托 · 陡坡",
            "Grab или байк — крутой подъём",
          ),
        ),
        text: t(
          lang,
          L(
            "Short hill road linking cliff cafés and lookouts over Pattaya Bay — busy at sunset on weekends; weekday evenings are easier for photos without queues.",
            "ถนนขึ้นเขาเชื่อมคาเฟ่หน้าผา มองอ่าวพัทยา — วันหยุดเย็นคนเยอะ วันธรรมดาแสงดีกว่าไม่ต้องแย่งที่",
            "上山公路连接悬崖咖啡馆与观景点 — 周末日落人多；平日傍晚拍照更轻松。",
            "Дорога к кафе и видам — в будни спокойнее.",
          ),
        ),
        href: "https://www.google.com/maps/search/?api=1&query=Pattaya+Viewpoint+Big+Buddha+Hill+Pratumnak",
        linkLabel: openInMaps,
        secondaryHref: "/explore/beaches/pratumnak",
        secondaryLinkLabel: beachGuide,
        image: hiddenGemSpotImages[1],
      },
      {
        id: "wongamat-quiet" as const,
        name: t(lang, L("Wongamat Beach mornings", "หาดวงอมาตย์เช้า", "Wongamat 清晨", "Wongamat утром"),
        ),
        hours: t(lang, L("~06:30–09:00", "~06:30–09:00", "约6:30–9:00", "~6:30–9:00")),
        highlight: t(
          lang,
          L(
            "Wide sand, condo strip, calm swim",
            "หาดกว้าง ริมคอนโด ว่ายน้ำสบาย",
            "宽沙滩、公寓带、适合游泳",
            "Широкий пляж, спокойнее",
          ),
        ),
        access: t(
          lang,
          L(
            "Songthaew north on Beach Road · hotel soi parking",
            "สองแถวเหนือถนนเลียบหาด · จอดซอยโรงแรม",
            "海滩路北向双条车 · 酒店巷停车",
            "Songthaew на север",
          ),
        ),
        text: t(
          lang,
          L(
            "North Pattaya's longer beach stretch — fewer bar flyers than central Beach Road in the early hours. Good if you want a swim and coffee before the heat.",
            "หาดยาวฝั่งเหนือ — เช้าๆ ไม่วุ่นเหมือนกลางหาด ว่ายน้ำกินกาแฟก่อนแดดแรง",
            "北侧较长海滩 — 清晨比中央海滩路安静；适合游泳后喝咖啡。",
            "Северный участок — утром тише центра.",
          ),
        ),
        href: "https://www.google.com/maps/search/?api=1&query=Wongamat+Beach+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "/explore/beaches/wongamat",
        secondaryLinkLabel: beachGuide,
        image: hiddenGemSpotImages[2],
      },
      {
        id: "dongtan-evening" as const,
        name: t(lang, L("Dongtan Beach evenings", "หาด dongtan บ่าย–เย็น", "Dongtan 傍晚", "Dongtan вечером"),
        ),
        hours: t(lang, L("~16:00–19:00", "~16:00–19:00", "约16–19点", "~16–19")),
        highlight: t(
          lang,
          L(
            "Local families, long sand bar",
            "ครอบครัวท้องถิ่น หาดยาว",
            "本地家庭、长沙滩",
            "Местные семьи",
          ),
        ),
        access: t(
          lang,
          L(
            "Songthaew to Jomtien · walk south end",
            "สองแถวไปจอมเทียน · เดินปลายหาด",
            "双条至 Jomtien · 走海滩南端",
            "Songthaew до Jomtien",
          ),
        ),
        text: t(
          lang,
          L(
            "South of central Jomtien — popular with Thai weekenders and expat residents, not tour buses. Stay for the breeze after the sun drops; respect the marked swimming zones.",
            "ใต้จอมเทียนกลาง — คนไทยและ expat มาเยอะ ไม่ใช่รถทัวร์ แวะหลังแดดลดลม ว่ายในโซนที่กำหนด",
            "Jomtien 中心以南 — 本地人与长住客多；日落後海风舒适；请在指定区域游泳。",
            "Южнее Jomtien — местные, не автобусы.",
          ),
        ),
        href: "https://www.google.com/maps/search/?api=1&query=Dongtan+Beach+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "/explore/beaches/dongtan",
        secondaryLinkLabel: beachGuide,
        image: hiddenGemSpotImages[3],
      },
    ],
  };
}

export function getHiddenGemsWalkPlans(lang: LanguageCode) {
  const seeSpot = t(lang, L("See this spot →", "ดูจุดนี้ →", "查看此点 →", "Подробнее →"));
  const marketGuide = t(lang, L("Naklua market guide →", "คู่มือตลาดนาเกลือ →", "那库拉市场指南 →", "Рынок Naklua →"));

  return {
    title: t(lang, L("Plan a slow walk", "วางแผนเดินช้าๆ", "规划慢游", "Медленная прогулка")),
    subtitle: t(
      lang,
      L(
        "Three half-day loops — no booking needed, just Maps and comfortable shoes.",
        "3 ลูปครึ่งวัน — ไม่ต้องจอง แค่ Maps กับรองเท้าดีๆ",
        "三条半日路线 — 无需预订，备好地图与舒适鞋。",
        "Три маршрута — без брони.",
      ),
    ),
    items: [
      {
        id: "naklua-loop" as const,
        title: t(lang, L("Naklua morning loop", "ลูปเช้านาเกลือ", "那库拉晨间环线", "Утро Naklua")),
        paragraphs: [
          t(
            lang,
            L(
              "Market at 7, boat noodles breakfast, then ten minutes on Naklua sand before heading back — skip if you hate fish smells.",
              "7 โมงตลาด ก๋วยเตี๋ยวเรือ แล้วเดินหาดนาเกลือสิบนาที — ถ้าไม่ชอบกลิ่นปลาข้ามได้",
              "7点市场、船面早餐，再在 Naklua 沙滩走十分钟 — 不喜鱼腥味可跳过。",
              "7:00 рынок, лапша, 10 мин по пляжу.",
            ),
          ),
        ],
        href: "#spot-naklua-mornings",
        linkLabel: seeSpot,
        image: hiddenGemWalkPlanImages[0],
      },
      {
        id: "pratumnak-sunset" as const,
        title: t(lang, L("Pratumnak sunset walk", "เดิน sunset พระตำหนัก", "Pratumnak 日落漫步", "Закат Pratumnak")),
        paragraphs: [
          t(
            lang,
            L(
              "Arrive by 17:00, walk the hill loop once, grab a drink at a cliff café, down before full dark if you are walking back.",
              "ถึง 17:00 เดินลูป บนเขาหนึ่งรอบ แวะคาเฟ่หน้าผา ลงก่อนมืดถ้าเดินกลับ",
              "17:00 到，环山走一圈，悬崖 café 喝一杯，若步行返回请在全黑前下山。",
              "К 17:00 — петля, кафе, спуск до темноты.",
            ),
          ),
        ],
        href: "#spot-pratumnak-viewpoint",
        linkLabel: seeSpot,
        image: hiddenGemWalkPlanImages[1],
      },
      {
        id: "quiet-beach" as const,
        title: t(lang, L("Quiet beach half-day", "ครึ่งวันหาดเงียบ", "安静海滩半日", "Тихий пляж")),
        paragraphs: [
          t(
            lang,
            L(
              "Morning swim at Wongamat, lunch north Pattaya, optional Naklua market stop on the way back — or flip to Dongtan if you prefer evenings.",
              "เช้าว่ายวงอมาตย์ กินอาหารกลางวัน ฝั่งเหนือ แวะตลาดนาเกลือขากลับ — หรือเปลี่ยนเป็นหาดดงตัน ถ้าชอบเย็น",
              "上午 Wongamat 游泳，北侧午餐，返程可停 Naklua 市场 — 或改傍晚 Dongtan。",
              "Wongamat утром, обед; по пути рынок Naklua.",
            ),
          ),
        ],
        href: "/explore/shopping/markets#market-naklua",
        linkLabel: marketGuide,
        image: hiddenGemWalkPlanImages[2],
      },
    ],
  };
}

export function getHiddenGemsTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Explorer tips", "เคล็ดลับนักสำรวจ", "探索贴士", "Советы")),
    subtitle: t(
      lang,
      L(
        "How to enjoy off-path Pattaya respectfully — with links to food and market guides on this site.",
        "เที่ยวนอกเส้นทางอย่างเคารพ — ลิงก์ไปคู่มืออาหารและตลาดในเว็บ",
        "尊重地探索非主流芭提雅 — 链至站内美食与市场指南。",
        "Уважительно — ссылки на гиды еды и рынков.",
      ),
    ),
    items: [
      {
        id: "timing" as const,
        title: t(lang, L("Timing & crowds", "เวลา & ฝูงชน", "时间与人流", "Время и люди")),
        paragraphs: [
          t(
            lang,
            L(
              "Viewpoints and cliff cafés fill up Friday–Sunday sunsets — weekday mornings at Naklua and Wongamat stay calmer. Rainy season afternoons can still be humid; carry water.",
              "จุดชมวิวและคาเฟ่หน้าผา เต็มศ–อา ตอนเย็น — เช้าวันธรรมดานาเกลือ/วงอมาตย์สบายกว่า ฤดูฝนบ่ายๆ ยังร้อน พกน้ำ",
              "周末日落 viewpoint 与悬崖 café 人多 — 平日早晨 Naklua/Wongamat 较静；雨季下午仍闷热，带水。",
              "Закаты в выходные crowded; будни утром спокойнее.",
            ),
          ),
          t(
            lang,
            L(
              "Songthaews slow down after 22:00 — plan Grab back if you stay out late on Pratumnak Hill.",
              "สองแถวหายหลัง 22:00 — ถ้าอยู่เขาพระตำหนักจนค่ำ วาง Grab กลับ",
              "22:00 后双条车减少 — Pratumnak 晚归请用 Grab。",
              "После 22:00 songthaew реже — Grab с Pratumnak.",
            ),
          ),
        ],
        image: hiddenGemTipImages[0],
      },
      {
        id: "respect" as const,
        title: t(lang, L("Respect locals", "เคารพคนท้องถิ่น", "尊重当地人", "Уважение")),
        paragraphs: [
          t(
            lang,
            L(
              "Residential sois are not photo studios — ask before shooting homes, temples, fishing boats, or market vendors up close.",
              "ซอยที่อยู่อาศัยไม่ใช่สตูดิโอ — ถามก่อนถ่ายบ้าน วัด เรือประมง หรือแม่ค้าใกล้ๆ",
              "住宅巷不是摄影棚 — 拍摄房屋、寺庙、渔船或近拍摊主前先询问。",
              "Спрашивайте перед съёмкой домов и лодок.",
            ),
          ),
          t(
            lang,
            L(
              "Dress modestly near temples on Pratumnak Hill and keep voices down in Naklua village lanes after dark.",
              "แต่งกายสุภาพใกล้วัดบนเขาพระตำหนัก และลดเสียงในซอยนาเกลือหลังค่ำ",
              "Pratumnak 寺庙附近衣着得体；Naklua 村巷夜间放低音量。",
              "Скромная одежда у храмов; тише в Naklua вечером.",
            ),
          ),
        ],
        image: hiddenGemTipImages[1],
      },
      {
        id: "nav" as const,
        title: t(lang, L("Maps & taxis", "แผนที่ & รถ", "地图与交通", "Карты и такси")),
        paragraphs: [
          t(
            lang,
            L(
              "Screenshot Maps pins and Thai place names for drivers — many Naklua and hill sois have little English signage.",
              "แคปหมุด Maps และชื่อไทยให้คนขับ — ซอยนาเกลือและเขาหลายที่ไม่มีป้ายอังกฤษ",
              "截图 Maps 钉点与泰文地名给司机 — 那库拉与上山许多巷无英文标识。",
              "Сохраните Thai названия для водителя.",
            ),
          ),
          t(
            lang,
            L(
              "Songthaews work for beach-road loops; Grab is easier for hill returns with tired kids. Agree songthaew price before chartering off-route.",
              "สองแถวเหมาะวนเลียบหาด Grab สะดวกลงเขากับเด็ก — ถ้าเหมาสองแถวออกนอกเส้นทางตกลงราคาก่อน",
              "海滩路环线双条车可行；带孩子下山 Grab 更省事 — 包车须先讲价。",
              "Songthaew по Beach Rd; Grab с холма.",
            ),
          ),
        ],
        image: hiddenGemTipImages[2],
      },
      {
        id: "food" as const,
        title: t(lang, L("Pair with food guides", "จับคู่คู่มืออาหาร", "搭配美食指南", "Еда рядом")),
        paragraphs: [
          t(
            lang,
            L(
              "Naklua mornings: wet market snacks plus our street-food and market pages for evening plans.",
              "เช้านาเกลือ: ของว่างตลาดสด + ดูหน้า street food และตลาดสำหรับแผนเย็น",
              "Naklua 早晨：早市小吃 + 配合 street food 与市场页规划晚上。",
              "Naklua утром + гиды street food и рынков.",
            ),
          ),
          t(
            lang,
            L(
              "Pratumnak evenings: cliff cafés first, then fine-dining reservations inland if you want a sit-down meal after the view.",
              "เย็นพระตำหนัก: คาเฟ่หน้าผา ก่อน แล้วค่อยจอง fine dining ด้านใน ถ้าอยากนั่งจริงจัง",
              "Pratumnak 傍晚：先悬崖 café，若要正式晚餐再订 inland fine dining。",
              "Pratumnak: кафе, потом fine dining.",
            ),
          ),
        ],
        image: hiddenGemTipImages[3],
      },
    ],
  };
}

export function getHiddenGemsPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      current: t(lang, L("Hidden Gems", "จุดลับ", "隐藏 gems", "Секретные места")),
    },
    hero: {
      badge: t(lang, L("Hidden Gems", "จุดลับ", "隐藏 gems", "Секреты")),
      title: t(lang, L("Hidden Gems", "จุดลับ & เส้นทางช้า", "隐藏 gems", "Секретные места")),
      subtitle: t(lang, L("Beyond Walking Street", "นอก Walking Street", "超越 Walking Street", "Beyond Walking Street")),
      body: t(
        lang,
        L(
          "Quieter beaches, markets, and hill viewpoints around Pattaya — real Maps links and guides on this site, not magazine paywalls or fake story carousels.",
          "หาด ตลาด และจุดชมวิบริเวณพัทยา — ลิงก์ Maps และคู่มือจริงในเว็บ ไม่มีบทความปลอมหรือ carousel",
          "芭提雅较安静的 beaches、市场与观景点 — 真实地图链与站内指南，无假文章轮播。",
          "Тихие места — реальные Maps и гиды, без фейковых статей.",
        ),
      ),
    },
    spots: getHiddenGemsSpots(lang),
    walkPlans: getHiddenGemsWalkPlans(lang),
    tips: getHiddenGemsTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      mainBeaches: c.mainBeaches,
      localMarkets: c.localMarkets,
      streetFood: c.streetFood,
      cafesLink: c.cafesLink,
    },
  };
}
