import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getMainBeachesPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: c.beaches },
    hero: {
      badge: c.beaches,
      title: t(lang, L("Main Beaches", "ชายหาดหลัก", "主要海滩", "Главные пляжи")),
      subtitle: t(lang, L("Main beaches", "ชายหาดหลัก", "主要海滩", "Пляжи")),
      body: t(
        lang,
        L(
          "Pattaya's main beaches and what to expect — from the central promenade to quiet northern coves and family-friendly Jomtien.",
          "ชายหาดหลักของพัทยา — ตั้งแต่ถนนเลียบชายหาดถึงอ่าวเงียบเหนือและจอมเทียน",
          "芭提雅主要海滩指南。",
          "Главные пляжи Паттайи.",
        ),
      ),
      badgeStretches: t(lang, L("6 main stretches", "6 หาดหลัก", "6 段主海滩", "6 пляжей")),
      badgeOptions: t(lang, L("Family & nightlife options", "ครอบครัว & ไนท์ไลฟ์", "亲子与夜生活", "Семья и ночная жизнь")),
    },
    carousel: {
      title: t(lang, L("Choose your shoreline", "เลือกชายหาด", "选择海岸", "Выберите пляж")),
      description: t(
        lang,
        L(
          "Each beach has a distinct rhythm. Use this guide to match vibe, crowd level, and access — then dive into island trips or dining from the Explore hub.",
          "แต่ละหาดมีจังหวะต่างกัน — จับคู่บรรยากาศ คน และการเดินทาง",
          "每片海滩节奏不同，按氛围与交通选择。",
          "У каждого пляжа свой ритм — выберите по настроению.",
        ),
      ),
      prev: t(lang, L("Previous beaches", "หาดก่อนหน้า", "上一项", "Назад")),
      next: t(lang, L("Next beaches", "หาดถัดไป", "下一项", "Далее")),
    },
    beaches: [
      {
        id: "pattaya-beach",
        name: t(lang, L("Pattaya Beach", "หาดพัทยา", "Pattaya Beach", "Pattaya Beach")),
        nameTh: "",
        vibe: [
          t(lang, L("Central", "ใจกลาง", "中心", "Центр")),
          t(lang, L("Nightlife", "ไนท์ไลฟ์", "夜生活", "Ночная жизнь")),
          t(lang, L("Shopping", "ช้อปปิ้ง", "购物", "Шопинг")),
        ],
        bestFor: t(lang, L("First-time visitors, beachfront walks, easy access to malls", "นักท่องเที่ยวครั้งแรก เดินริมหาด ใกล้ห้าง", "首次到访、海滨漫步", "Первый визит, прогулки")),
        access: t(lang, L("Songthaew along Beach Rd · Walking Street at south end", "สองแถว Beach Rd · Walking Street ปลายทาง", "Beach Rd 双条车", "Сongthaew по Beach Rd")),
        water: t(lang, L("Moderate clarity · busier on weekends", "น้ำปานกลาง · คนเยอะวันหยุด", "水质一般 · 周末较忙", "Средняя прозрачность")),
        excerpt: t(
          lang,
          L(
            "The city's signature 3 km stretch from Walking Street to North Pattaya. Lively promenade, jet skis, and sunset views over the bay.",
            "ชายหาด 3 กม. จาก Walking Street ถึงเหนือพัทยา — ถนนเลียบชายหาด เรือเจ็ทสกี วิวพระอาทิตย์ตก",
            "从 Walking Street 到北芭提雅约3公里，热闹海滨大道。",
            "3 км от Walking Street — оживлённая набережная.",
          ),
        ),
      },
      {
        id: "jomtien",
        name: t(lang, L("Jomtien Beach", "หาดจอมเทียน", "Jomtien Beach", "Jomtien")),
        nameTh: "",
        vibe: [
          t(lang, L("Family", "ครอบครัว", "亲子", "Семья")),
          t(lang, L("Calm", "สงบ", "安静", "Спокойно")),
          t(lang, L("Dining", "อาหาร", "餐饮", "Еда")),
        ],
        bestFor: t(lang, L("Families, long-stay visitors, relaxed swimming", "ครอบครัว ผู้พักระยะยาว ว่ายน้ำสบาย", "家庭、长住、轻松游泳", "Семьи и спокойное купание")),
        access: t(lang, L("Songthaew south · parking along Jomtien 2nd Rd", "สองแถวใต้ · จอด Jomtien 2nd Rd", "南向双条车", "Songthaew на юг")),
        water: t(lang, L("Generally calmer than central Pattaya", "สงบกว่าใจกลางพัทยา", "比市中心更平静", "Спокойнее центра")),
        excerpt: t(
          lang,
          L(
            "A softer, longer shoreline south of the core. Popular for seafood restaurants, water sports, and condo living with sea views.",
            "ชายหาดยาวใต้ใจกลาง — อาหารทะเล กีฬาทางน้ำ คอนโดวิวทะเล",
            "核心以南更长更柔和的海岸线。",
            "Длинный спокойный пляж к югу от центра.",
          ),
        ),
      },
      {
        id: "dongtan",
        name: t(lang, L("Dongtan Beach", "หาดดองตาล", "Dongtan Beach", "Dongtan")),
        nameTh: "",
        vibe: [
          t(lang, L("Inclusive", "หลากหลาย", "包容", "Инклюзив")),
          t(lang, L("Relaxed", "ผ่อนคลาย", "放松", "Расслабленно")),
          t(lang, L("Local", "ท้องถิ่น", "本地", "Местное")),
        ],
        bestFor: t(lang, L("Inclusive beach culture, casual day trips", "วัฒนธรรมชายหาด ทริปวันเดียว", "包容海滩文化", "Непринуждённый отдых")),
        access: t(lang, L("End of Jomtien Beach Rd · near Dongtan roundabout", "ปลาย Jomtien Beach Rd · วงเวียนดองตาล", "Jomtien 路尽头", "Конец Jomtien Beach Rd")),
        water: t(lang, L("Shallow sections suitable for wading", "ตื้น เหมาะเดินเล่นน้ำ", "浅水区适合涉水", "Мелководье")),
        excerpt: t(
          lang,
          L(
            "A welcoming stretch at the southern end of Jomtien known for its relaxed atmosphere and strong local community presence.",
            "ปลายจอมเทียน บรรยากาศผ่อนคลาย ชุมชนท้องถิ่นเข้มแข็ง",
            "Jomtien 南端，氛围轻松。",
            "Южный конец Jomtien — расслабленная атмосфера.",
          ),
        ),
      },
      {
        id: "naklua",
        name: t(lang, L("Naklua Beach", "หาดนาเกลือ", "Naklua Beach", "Naklua")),
        nameTh: "",
        vibe: [
          t(lang, L("Local", "ท้องถิ่น", "本地", "Местное")),
          t(lang, L("Markets", "ตลาด", "市场", "Рынки")),
          t(lang, L("Authentic", "แท้ๆ", "地道", "Аутентично")),
        ],
        bestFor: t(lang, L("Morning markets, local food, quieter mornings", "ตลาดเช้า อาหารท้องถิ่น เช้าเงียบ", "早市与本地美食", "Утренние рынки")),
        access: t(lang, L("North Pattaya · near Naklua market area", "เหนือพัทยา · ใกล้ตลาดนาเกลือ", "北芭提雅 Naklua", "Север, рынок Naklua")),
        water: t(lang, L("Quieter; fishing boats in morning", "เงียบ เรือประมงตอนเช้า", "较安静，晨间渔船", "Тихо, утром лодки")),
        excerpt: t(
          lang,
          L(
            "Traditional fishing village character meets tourism. Visit early for the market energy, then stroll the quieter sand.",
            "หมู่บ้านประมงพบการท่องเที่ยว — มาเช้าชมตลาด เดินชายหาดเงียบ",
            "渔村风情，早市后漫步安静沙滩。",
            "Рыбацкая деревня — приходите утром на рынок.",
          ),
        ),
      },
      {
        id: "wongamat",
        name: t(lang, L("Wong Amat Beach", "หาดวงอามาด", "Wong Amat Beach", "Wong Amat")),
        nameTh: "",
        vibe: [
          t(lang, L("Upscale", "หรู", "高端", "Премиум")),
          t(lang, L("Quiet", "เงียบ", "安静", "Тихо")),
          t(lang, L("Clifftop", "ริมหน้าผา", "悬崖", "На скале")),
        ],
        bestFor: t(lang, L("Luxury stays, peaceful sunbathing, fewer crowds", "ที่พักหรู อาบแดดเงียบ คนน้อย", "奢华住宿、安静日光浴", "Люкс и меньше людей")),
        access: t(lang, L("North Pattaya · Wong Amat Rd", "เหนือพัทยา · Wong Amat Rd", "北芭提雅 Wong Amat Rd", "Wong Amat Rd")),
        water: t(lang, L("Clearer on calm days · rocky patches in places", "ใสวันสงบ · มีหินบางจุด", "平静日较清 · 局部礁石", "Чище в штиль")),
        excerpt: t(
          lang,
          L(
            "An upscale northern bay with boutique hotels and clifftop venues. Ideal when you want space and a slower pace.",
            "อ่าวเหนือหรู โรงแรมบูติก ร้านริมหน้าผา — เงียบ ช้า",
            "北部高端海湾，精品酒店与悬崖 venue。",
            "Северная бухта с бутик-отелями.",
          ),
        ),
      },
      {
        id: "pratumnak",
        name: t(lang, L("Pratumnak Beach", "หาดพระตำหนัก", "Pratumnak Beach", "Pratumnak")),
        nameTh: "",
        vibe: [
          t(lang, L("Views", "วิว", "景观", "Виды")),
          t(lang, L("Cliffside", "ริมหน้าผา", "悬崖", "Скала")),
          t(lang, L("Sunset", "พระอาทิตย์ตก", "日落", "Закат")),
        ],
        bestFor: t(lang, L("Sunset dinners, photography, cliff viewpoints", "ดินเนอร์ยามเย็น ถ่ายรูป จุดชมวิว", "日落晚餐与摄影", "Закаты и фото")),
        access: t(lang, L("Pratumnak Hill · between Pattaya & Jomtien", "เขาพระตำหนัก · ระหว่างพัทยา-จอมเทียน", "Pratumnak 山", "Pratumnak Hill")),
        water: t(lang, L("Smaller coves · check tide for swimming", "อ่าวเล็ก · ดูน้ำขึ้น-ลง", "小海湾 · 注意潮汐", "Небольшие бухты")),
        excerpt: t(
          lang,
          L(
            "Hilltop outlooks and cliffside dining define this area between the two main bays. Home to iconic sunset restaurants.",
            "จุดชมวิวบนเขา ร้านริมหน้าผา — ร้านพระอาทิตย์ตกดัง",
            "两湾之间的悬崖景观与日落餐厅。",
            "Смотровые площадки и рестораны на закат.",
          ),
        ),
      },
    ],
    comparison: {
      eyebrow: t(lang, L("Quick comparison", "เปรียบเทียบเร็ว", "快速对比", "Сравнение")),
      title: t(lang, L("Central vs south vs north", "กลาง vs ใต้ vs เหนือ", "中/南/北对比", "Центр, юг, север")),
      items: [
        {
          name: t(lang, L("Pattaya Beach", "หาดพัทยา", "Pattaya Beach", "Pattaya Beach")),
          text: t(lang, L("busiest, best for first visits and nightlife proximity.", "คนเยอะสุด เหมาะครั้งแรก ใกล้ไนท์ไลฟ์", "最热闹，首次到访首选", "самый оживлённый")),
        },
        {
          name: t(lang, L("Jomtien & Dongtan", "จอมเทียน & ดองตาล", "Jomtien & Dongtan", "Jomtien & Dongtan")),
          text: t(lang, L("longer sand, calmer swim, strong dining scene.", "หาดยาว ว่ายสบาย อาหารเยอะ", "更长沙滩，游泳更静", "длинный пляж, спокойнее")),
        },
        {
          name: t(lang, L("Naklua & Wong Amat", "นาเกลือ & วงอามาด", "Naklua & Wong Amat", "Naklua & Wong Amat")),
          text: t(lang, L("quieter mornings, upscale stays, local markets north.", "เช้าเงียบ ที่พักหรู ตลาดเหนือ", "清晨安静，北部市场", "тихие утра, рынки")),
        },
        {
          name: t(lang, L("Pratumnak", "พระตำหนัก", "Pratumnak", "Pratumnak")),
          text: t(lang, L("cliff sunsets and fine dining, smaller swim coves.", "พระอาทิตย์ตกหน้าผา ไฟน์ไดนิ่ง อ่าวเล็ก", "悬崖日落与精致餐饮", "закаты и fine dining")),
        },
      ],
      cta: t(lang, L("Plan a Koh Larn day trip →", "วางแผนทริปเกาะล้าน →", "规划格兰岛一日游 →", "Ко Лан →")),
    },
    tips: {
      title: t(lang, L("Practical tips", "เคล็ดลับ", "实用贴士", "Советы")),
      subtitle: t(lang, L("Stay comfortable and avoid common tourist pitfalls on the coast.", "สบายและหลีกเลี่ยงกับดักนักท่องเที่ยว", "舒适避坑。", "Комфорт на побережье.")),
      items: [
        {
          title: t(lang, L("Sun & peak hours", "แดด & ช่วงคนเยอะ", "日晒与高峰", "Солнце")),
          text: t(
            lang,
            L(
              "UV is strong year-round. Aim for early morning or late afternoon; midday shade is limited on open beaches.",
              "UV แรงตลอดปี มาเช้าหรือเย็น กลางวันร่มน้อย",
              "全年 UV 强，建议早晚前往。",
              "UV сильный — утро или вечер.",
            ),
          ),
        },
        {
          title: t(lang, L("Season & sea", "ฤดู & ทะเล", "季节与海水", "Сезон")),
          text: t(
            lang,
            L(
              "Nov–Feb often brings calmer seas. May–Oct can have stronger waves — check flags and local advisories before swimming.",
              "พ.ย.–ก.พ. ทะเลสงบ พ.ค.–ต.ค. คลื่นแรง — ดูธงก่อนว่าย",
              "11–2月较平静，5–10月浪大，游泳前看旗标。",
              "Ноя–фев спокойнее; май–окт — сильнее волны.",
            ),
          ),
        },
        {
          title: t(lang, L("Chair rentals", "เช่าเก้าอี้", "租躺椅", "Шезлонги")),
          text: t(
            lang,
            L(
              "Expect 50–100 THB per chair/umbrella set on busy strips. Confirm price before sitting down.",
              "เก้าอี้+ร่ม 50–100 บาท ถามราคาก่อนนั่ง",
              "热门区躺椅约50–100泰铢，先问价。",
              "50–100 бат за комплект — уточняйте цену.",
            ),
          ),
        },
        {
          title: t(lang, L("Getting around", "เดินทาง", "交通", "Транспорт")),
          text: t(
            lang,
            L(
              "Blue songthaews run Beach Rd and Jomtien loops. Agree on fare (~10–20 THB short hops) before boarding.",
              "สองแถวสีฟ้า Beach Rd และจอมเทียน ตกลงค่าโดยสาร ~10–20 บาท",
              "蓝色双条车环 Beach Rd 与 Jomtien，短途约10–20泰铢。",
              "Синие songthaew — ~10–20 бат за короткую поездку.",
            ),
          ),
        },
      ],
    },
    exploreMore: {
      title: t(lang, L("Explore more", "สำรวจเพิ่ม", "更多探索", "Ещё")),
      links: [
        {
          label: t(lang, L("Koh Larn day trips", "ทริปเกาะล้าน", "格兰岛一日游", "Ко Лан")),
          blurb: t(lang, L("Island beaches 30 minutes from Bali Hai Pier", "หาดเกาะ 30 นาทีจากแหลมบาลีฮาย", "从 Bali Hai 码头30分钟", "30 мин от Bali Hai")),
          href: "/explore/islands/koh-larn",
        },
        {
          label: t(lang, L("Hidden gems", "จุดลับ", "隐藏 gems", "Секреты")),
          blurb: t(lang, L("Secret viewpoints and local-only stretches", "จุดชมวิวลับ ชายหาดท้องถิ่น", "秘密观景点", "Секретные виды")),
          href: "/explore/hidden-gems",
        },
        {
          label: t(lang, L("Wellness & spa", "สปา & สุขภาพ", "康养水疗", "Спа")),
          blurb: t(lang, L("Recover after a long beach day", "ฟื้นหลังเที่ยวหาด", "海滩日后恢复", "Отдых после пляжа")),
          href: "/explore/wellness",
        },
      ],
    },
  };
}
