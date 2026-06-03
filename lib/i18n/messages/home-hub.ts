import { kohLarnImages } from "@/lib/design/koh-larn-images";
import { livingImages } from "@/lib/design/living-images";
import { newsImages } from "@/lib/design/news-images";
import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const hero = {
  category: L("City Development", "พัฒนาเมือง", "城市发展", "Развитие города"),
  title: L(
    "The Neo-Pattaya Transformation: A Smart City Vision 2025",
    "Neo-Pattaya: วิสัยทัศน์เมืองอัจฉริยะ 2025",
    "新芭提雅转型：2025 智慧城市愿景",
    "Neo-Pattaya: умный город 2025",
  ),
  excerpt: L(
    "Infrastructure and digital initiatives reshape Pattaya into Southeast Asia's premier hybrid hub.",
    "โครงสร้างพื้นฐานและดิจิทัลยกระดับพัทยาเป็นศูนย์กลางท่องเที่ยวและที่อยู่อาศัย",
    "基建与数字化举措将芭提雅打造为东南亚混合枢纽。",
    "Инфраструктура и цифра превращают Паттайю в гибридный хаб.",
  ),
  featured: L("Featured", "แนะนำ", "精选", "Рекомендуем"),
  cta: L("Read Article", "อ่านบทความ", "阅读文章", "Читать"),
  imageAlt: L(
    "Aerial view of Pattaya at blue hour",
    "มุมสูงพัทยายามพลบค่ำ",
    "蓝调时刻芭提雅航拍",
    "Паттайя с высоты на закате",
  ),
  byline: L("By Editor-in-Chief · 2 Hours Ago", "บรรณาธิการ · 2 ชม.ที่แล้ว", "主编 · 2 小时前", "Главред · 2 ч назад"),
};

export function getHomeHero(lang: LanguageCode) {
  return {
    category: t(lang, hero.category),
    title: t(lang, hero.title),
    excerpt: t(lang, hero.excerpt),
    featured: t(lang, hero.featured),
    cta: t(lang, hero.cta),
    imageAlt: t(lang, hero.imageAlt),
    byline: t(lang, hero.byline),
  };
}

const LOCALE_BY_LANG: Record<LanguageCode, string> = {
  th: "th-TH",
  en: "en-US",
  zh: "zh-CN",
  ru: "ru-RU",
};

export function getHomeWeather(lang: LanguageCode) {
  return {
    title: t(lang, L("Pattaya Weather", "สภาพอากาศพัทยา", "芭提雅天气", "Погода в Паттайе")),
    feelsLike: t(lang, L("Feels like", "รู้สึกเหมือน", "体感", "Ощущается")),
    seaUv: t(lang, L("Sea & UV", "ทะเล & UV", "海水与紫外线", "Море и UV")),
    high: t(lang, L("High", "สูง", "高", "Высокий")),
    wind: t(lang, L("Wind", "ลม", "风力", "Ветер")),
    unavailable: t(
      lang,
      L("Weather unavailable", "โหลดข้อมูลไม่ได้", "天气暂不可用", "Погода недоступна"),
    ),
    locale: LOCALE_BY_LANG[lang],
  };
}

export function getHomeSidebar(lang: LanguageCode) {
  return {
    eventsToday: t(lang, L("Events Today", "อีเวนต์วันนี้", "今日活动", "События сегодня")),
    viewAll: t(lang, L("VIEW ALL", "ดูทั้งหมด", "查看全部", "ВСЕ")),
    promotedEvent: t(lang, L("Promoted Event", "อีเวนต์โปรโมต", "推广活动", "Рекомендуем")),
    techMeetup: t(lang, L("Pattaya Tech Meetup", "Pattaya Tech Meetup", "芭提雅科技聚会", "Tech Meetup")),
    trafficLive: t(lang, L("Traffic Live", "รายงานสดการจราจร", "实时交通", "Трафик")),
    trafficUpdated: t(lang, L("Updated just now", "อัปเดตเมื่อสักครู่", "刚刚更新", "Только что")),
    trafficViewAll: t(lang, L("Transport", "การเดินทาง", "交通", "Транспорт")),
    clear: t(lang, L("Clear", "คล่องตัว", "畅通", "Свободно")),
    moderate: t(lang, L("Moderate", "ปานกลาง", "中等", "Умеренно")),
    onSchedule: t(lang, L("On Schedule", "ตรงเวลา", "准点", "По расписанию")),
    events: [
      {
        date: "OCT 24",
        title: t(lang, L("Pattaya International Fireworks", "Pattaya International Fireworks", "芭提雅国际烟花节", "Международный фейерверк")),
      },
      {
        date: "OCT 26",
        title: t(lang, L("Yacht Show 2024", "Yacht Show 2024", "2024 游艇展", "Yacht Show 2024")),
      },
    ],
    traffic: [
      {
        road: "Sukhumvit Rd.",
        status: t(lang, L("Clear", "คล่องตัว", "畅通", "Свободно")),
        tone: "success" as const,
        kind: "road" as const,
        href: "/living/transportation/driving",
      },
      {
        road: "Walking Street",
        status: t(lang, L("Moderate", "ปานกลาง", "中等", "Умеренно")),
        tone: "warning" as const,
        kind: "road" as const,
        href: "/explore/beaches/pattaya-beach",
      },
      {
        road: "UTP Airport",
        status: t(lang, L("On Schedule", "ตรงเวลา", "准点", "По расписанию")),
        tone: "neutral" as const,
        kind: "airport" as const,
        href: "/living/transportation/ride-apps",
      },
    ],
  };
}

export function getHomeLivingPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("Expat life in Pattaya", "ชีวิตชาวต่างชาติในพัทยา", "芭提雅外籍生活", "Жизнь expat в Паттайе")),
    subtitle: t(
      lang,
      L(
        "Visa, healthcare, housing, and safety guides for daily life.",
        "วีซ่า สุขภาพ ที่อยู่อาศัย และความปลอดภัยสำหรับชีวิตประจำวัน",
        "签证、医疗、住房与安全——日常生活指南。",
        "Виза, медицина, жильё и безопасность — гайды на каждый день.",
      ),
    ),
    viewAll: t(lang, L("View all community", "ดูหมวดชุมชนทั้งหมด", "查看全部社区", "Весь раздел «Жизнь»")),
    viewAllHref: "/living",
    readMore: t(lang, L("Read more", "อ่านต่อ", "阅读更多", "Читать")),
    picks: [
      {
        title: t(lang, L("90-Day Reporting Guide", "รายงานตัว 90 วัน", "90 天报到指南", "Отчёт 90 дней")),
        meta: t(lang, L("Immigration", "ตรวจคนเข้าเมือง", "移民", "Immigration")),
        href: "/living/visa/90-day-report",
        image: newsImages.immigration,
        lines: [
          t(
            lang,
            L(
              "Long-stay visa holders must report every 90 days — online, by post, or in person at immigration.",
              "ผู้ถือวีซ่าพักระยะยาวต้องรายงานตัวทุก 90 วัน — ออนไลน์ ส่งไปรษณีย์ หรือไปที่ตม.เอง",
              "长期签证持有人须每 90 天报到一次——可在线、邮寄或亲临移民局。",
              "Долгосрочная виза — отчёт каждые 90 дней: онлайн, почта или лично.",
            ),
          ),
          t(
            lang,
            L(
              "Jomtien Immigration is the main office for Pattaya — bring passport, TM.30, and your last receipt.",
              "ตม.จอมเทียนเป็นสำนักงานหลักของพัทยา — นำพาสปอร์ต TM.30 และใบเสร็จครั้งก่อน",
              "乔木提恩移民局为芭提雅主办事处——请带护照、TM.30 与上次回执。",
              "Jomtien — паспорт, TM.30 и прошлая квитанция.",
            ),
          ),
          t(
            lang,
            L(
              "File before your due date to avoid fines; many condos and agents offer TM.30 help.",
              "ยื่นก่อนครบกำหนดเพื่อหลีกเลี่ยงค่าปรับ หลายคอนโดและเอเจนต์ช่วย TM.30 ได้",
              "请在截止日期前提交以免罚款；许多公寓与中介可协助 TM.30。",
              "Подайте до срока; кондо и агенты помогают с TM.30.",
            ),
          ),
        ],
      },
      {
        title: t(lang, L("Hospitals & Clinics", "โรงพยาบาล & คลินิก", "医院与诊所", "Больницы и клиники")),
        meta: t(lang, L("Healthcare", "สุขภาพ", "医疗", "Здоровье")),
        href: "/living/healthcare/hospitals",
        image: livingImages.medical,
        lines: [
          t(
            lang,
            L(
              "Bangkok Hospital Pattaya, Phyathai, and Memorial offer international departments and English-speaking staff.",
              "โรงพยาบาลกรุงเทพพัทยา พญาไท และเมโมเรียล มีแผนกต่างชาติและเจ้าหน้าที่พูดอังกฤษ",
              "曼谷医院芭提雅分院、Phyathai、Memorial 设有国际部与英语服务。",
              "Bangkok Hospital Pattaya, Phyathai, Memorial — международные отделения.",
            ),
          ),
          t(
            lang,
            L(
              "Emergency: dial 1669 for ambulance; keep insurance card and passport copies ready.",
              "ฉุกเฉินโทร 1669 เรียกรถพยาบาล — เตรียมบัตรประกันและสำเนาพาสปอร์ตไว้",
              "急救请拨 1669；备好保险卡与护照复印件。",
              "Экстренно: 1669; держите страховку и копии паспорта.",
            ),
          ),
          t(
            lang,
            L(
              "Compare outpatient packages for dental, check-ups, and specialist referrals before choosing a provider.",
              "เปรียบเทียบแพ็กผู้ป่วยนอกทันตกรรม ตรวจสุขภาพ และส่งต่อผู้เชี่ยวชาญก่อนเลือกโรงพยาบาล",
              "选定前可比较牙科、体检与专科转诊的门诊套餐。",
              "Сравните амбулаторные пакеты: стоматология, check-up, специалисты.",
            ),
          ),
        ],
      },
      {
        title: t(lang, L("Rentals & Condos", "เช่า & คอนโด", "租房与公寓", "Аренда и кондо")),
        meta: t(lang, L("Housing", "ที่อยู่อาศัย", "住房", "Жильё")),
        href: "/living/housing/rentals",
        image: livingImages.rentals,
        lines: [
          t(
            lang,
            L(
              "Jomtien and Pratumnak suit families and long stays; Central Pattaya suits walkable nightlife and transit.",
              "จอมเทียนและพระตำหนักเหมาะครอบครัวและพักยาว พัทยากลางเดินทางและไนท์ไลฟ์สะดวก",
              "仲天与帕坦纳克适合家庭与长租；中心区步行与夜生活便利。",
              "Jomtien и Pratumnak — для семей; центр — ночная жизнь.",
            ),
          ),
          t(
            lang,
            L(
              "Ask for Chanote title, foreign quota letter, and a clear lease before paying deposit.",
              "ขอโฉนด หนังสือโควตาต่างชาติ และสัญญาเช่าชัดเจนก่อนจ่ายมัดจำ",
              "付押金前请确认地契、外资配额函与租约条款。",
              "Chanote, квота и договор аренды до депозита.",
            ),
          ),
          t(
            lang,
            L(
              "Typical 1BR sea-view condos run ฿12,000–35,000/mo depending on building age and facilities.",
              "คอนโด 1 ห้องนอนวิวทะเลโดยทั่วไป ฿12,000–35,000/เดือน ตามอายุตึกและสิ่งอำนวยความสะดวก",
              "海景一卧公寓月租通常约 12,000–35,000 泰铢，视楼龄与配套而定。",
              "1BR с видом на море: примерно ฿12,000–35,000/мес.",
            ),
          ),
        ],
      },
      {
        title: t(lang, L("Scam Alerts", "เตือนภัยมิจฉาชีพ", "诈骗预警", "Мошенничество")),
        meta: t(lang, L("Safety", "ความปลอดภัย", "安全", "Безопасность")),
        href: "/living/safety/scam-alerts",
        image: livingImages.scamAlerts,
        lines: [
          t(
            lang,
            L(
              "Watch for jet-ski damage claims, rental deposit traps, and fake property agents on social media.",
              "ระวังค่าเสียหายเจ็ทสกี มัดจำเช่าหลอก และนายหน้าอสังหาปลอมบนโซเชียล",
              "警惕水上摩托索赔、租房押金陷阱及社交媒体假房产中介。",
              "Осторожно: jet-ski, депозиты, фейковые агенты.",
            ),
          ),
          t(
            lang,
            L(
              "Never wire money before viewing a unit in person — meet in public and verify IDs.",
              "อย่าโอนเงินก่อนดูห้องจริง — นัดพบในที่สาธารณะและตรวจสอบตัวตน",
              "看房前切勿转账——公共场所见面并核实身份。",
              "Не переводите до осмотра; встреча в людном месте.",
            ),
          ),
          t(
            lang,
            L(
              "Report issues to Tourist Police 1155 and keep Pattaya.com verified listings in mind.",
              "แจ้ง Tourist Police 1155 และใช้ประกาศที่ตรวจสอบบน Pattaya.com",
              "可向旅游警察 1155 举报，并优先参考本站已核实信息。",
              "Tourist Police 1155; проверенные объявления Pattaya.com.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getHomeGuide(lang: LanguageCode) {
  return {
    title: t(lang, L("Pattaya Guide", "เที่ยวรอบเมือง", "芭提雅指南", "Гид по Паттайе")),
    subtitle: t(
      lang,
      L(
        "Curated city exploration by local experts.",
        "สำรวจเมืองโดยผู้เชี่ยวชาญท้องถิ่น",
        "本地专家精选城市探索。",
        "Город от местных экспертов.",
      ),
    ),
    exploreAll: t(lang, L("Explore All Guides", "ดูรอบเมืองทั้งหมด", "探索全部指南", "Все гайды")),
    exploreAllHref: "/explore",
    readMore: t(lang, L("Read more", "อ่านต่อ", "阅读更多", "Читать")),
    guides: [
      {
        title: t(lang, L("Island Hopping: Koh Larn & Beyond", "ทัวร์เกาะ: เกาะล้าน & อื่นๆ", "跳岛：格兰岛及周边", "Острова: Ко Лан")),
        meta: t(lang, L("Islands", "เกาะ", "岛屿", "Острова")),
        href: "/explore/islands/koh-larn",
        image: kohLarnImages.hero,
        lines: [
          t(
            lang,
            L(
              "Ferries from Bali Hai Pier reach Koh Larn in 30–45 minutes — check morning and last return times.",
              "เรือจากท่าแหลมบาลีฮายถึงเกาะล้าน 30–45 นาที — เช็คเที่ยวเช้าและเรือกลับสุดท้าย",
              "从 Bali Hai 码头渡轮约 30–45 分钟抵格兰岛——请确认首班与末班返程时间。",
              "Паром с Bali Hai — 30–45 мин; уточните последний рейс обратно.",
            ),
          ),
          t(
            lang,
            L(
              "Tien and Samae beaches are calmer; Nual suits snorkeling on clear days.",
              "หาดเทียนและสมาเอเงียบกว่า หาดนวลเหมาะดำน้ำวันทะเลใส",
              "Tien、Samae 海滩较安静；天气好时 Nual 适合浮潜。",
              "Tien и Samae спокойнее; Nual — для снорклинга.",
            ),
          ),
          t(
            lang,
            L(
              "Rent a golf cart or book a glass-bottom boat if you want to circle the island in one day.",
              "เช่ารถกอล์ฟหรือจองเรือก้นจอกเพื่อรอบเกาะในวันเดียว",
              "想一日环岛可租高尔夫车或预订玻璃底船。",
              "Арендуйте гольф-кар или стеклянное дно — круг острова за день.",
            ),
          ),
        ],
      },
      {
        title: t(lang, L("Street Food: Best Local Eats", "สตรีทฟู้ด: ร้านเด็ดพัทยา", "街头美食：本地必吃", "Уличная еда: лучшие места")),
        meta: t(lang, L("Street food", "สตรีทฟู้ด", "街头美食", "Уличная еда")),
        href: "/explore/restaurants/street-food",
        image: "/images/explore/street-food-thepprasit.png",
        lines: [
          t(
            lang,
            L(
              "Thepprasit Night Market fires up weekends with seafood grills, live music, and late snacks.",
              "ตลาดเทพประสิทธิ์คึกสุดสัปดาห์ มีซีฟู้ดย่าง ดนตรีสด และของว่างดึกๆ",
              "Thepprasit 夜市周末最热闹——海鲜烧烤、现场音乐与深夜小吃。",
              "Thepprasit по выходным — морепродукты и музыка.",
            ),
          ),
          t(
            lang,
            L(
              "Soi Buakhao and Naklua markets are budget-friendly — agree prices before seafood by weight.",
              "ตลาดซอยบัวขาวและนาเกลือราคาดี — ตกลงราคาอาหารทะเลก่อนชั่ง",
              "Soi Buakhao 与那库拉市集实惠——海鲜按重量前先讲价。",
              "Soi Buakhao и Naklua — договоритесь о цене за морепродукты.",
            ),
          ),
          t(
            lang,
            L(
              "Carry cash for stalls; peak hours 18:00–21:00 — go earlier for shorter queues.",
              "พกเงินสดสำหรับร้านค้า ช่วง 18:00–21:00 คนแน่น — ไปเช้ากว่าคิวสั้น",
              "摊位多收现金；18:00–21:00 最挤——稍早去排队较短。",
              "Наличные; пик 18:00–21:00 — приходите раньше.",
            ),
          ),
        ],
      },
      {
        title: t(
          lang,
          L(
            "Pattaya Beaches: Jomtien to Wongamat",
            "ชายหาดพัทยา: จอมเทียนถึงวงอามาด",
            "芭提雅海滩：仲天至 Wongamat",
            "Пляжи Pattaya: от Jomtien до Wongamat",
          ),
        ),
        meta: t(lang, L("Beaches", "ชายหาด", "海滩", "Пляжи")),
        href: "/explore/beaches",
        image: "/images/explore/jomtien-beach.png",
        lines: [
          t(
            lang,
            L(
              "Pattaya Beach and Walking Street south end suit first-time visitors and evening strolls.",
              "หาดพัทยาและปลาย Walking Street ฝั่งใต้เหมาะมือใหม่และเดินเล่นตอนเย็น",
              "芭提雅海滩与步行街南端适合初访者与傍晚散步。",
              "Pattaya Beach и юг Walking Street — для первого визита.",
            ),
          ),
          t(
            lang,
            L(
              "Jomtien offers calmer water and family zones; Dongtan is popular with local crowds.",
              "จอมเทียนน้ำสงบและมีโซนครอบครัว หาดดงตาลคนท้องถิ่นเยอะ",
              "仲天海水较平静并有家庭区； Dongtan 深受本地人喜爱。",
              "Jomtien — спокойнее; Dongtan — местные.",
            ),
          ),
          t(
            lang,
            L(
              "Wongamat and Naklua north beaches pair well with Sanctuary of Truth and seafood lunch.",
              "วงอามาดและนาเกลือเหนือเหมาะจับคู่ปราสาทสัจธรรมและอาหารทะเลมื้อเที่ยง",
              "北侧 Wongamat、那库拉海滩适合搭配真理寺与海鲜午餐。",
              "Wongamat и Naklua — рядом Sanctuary of Truth.",
            ),
          ),
        ],
      },
      {
        title: t(
          lang,
          L(
            "Hidden Spots Around Pattaya",
            "จุดลับรอบเมืองพัทยา",
            "芭提雅周边秘境",
            "Скрытые места вокруг Pattaya",
          ),
        ),
        meta: t(lang, L("Hidden gems", "จุดลับ", "秘境", "Секреты")),
        href: "/explore/hidden-gems",
        image: "/images/explore/hidden-mabprachan-lake.png",
        lines: [
          t(
            lang,
            L(
              "Mabprachan Lake and hill viewpoints offer quiet mornings away from Beach Road traffic.",
              "อ่างมาบประชันและจุดชมวิวบนเนินเหมาะเช้าๆ ห่างจากจราจร Beach Road",
              "Mabprachan 湖与山景适合远离海滩路车流的清晨。",
              "Mabprachan и смотровые — тихое утро.",
            ),
          ),
          t(
            lang,
            L(
              "Koh Rin and Koh Kram Yai are day-trip snorkel picks with fewer tour boats than Koh Larn.",
              "เกาะรินและเกาะกรามใหญ่ดำน้ำได้ในวันเดียว เรือทัวร์น้อยกว่าเกาะล้าน",
              "Koh Rin、Koh Kram Yai 适合一日浮潜，游船比格兰岛少。",
              "Koh Rin и Koh Kram Yai — снорклинг без толп.",
            ),
          ),
          t(
            lang,
            L(
              "Bring sun protection and cash — many hidden coves have minimal shade and no card machines.",
              "พกครีมกันแดดและเงินสด — หลายอ่าวมีร่มน้อยและไม่มีเครื่องรูดบัตร",
              "请带防晒与现金——不少隐秘海湾遮阳少且无刷卡机。",
              "Солнце и наличные — в бухтах мало тени.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getHomeForum(lang: LanguageCode) {
  return {
    title: t(lang, L("Trending Forum Topics", "หัวข้อฟอรัมยอดนิยม", "热门论坛话题", "Темы форума")),
    visitForum: t(lang, L("Visit Forum", "เข้าฟอรัม", "访问论坛", "На форум")),
    replies: t(lang, L("replies", "ตอบกลับ", "回复", "ответов")),
    currencyTitle: t(lang, L("Currency Rates", "อัตราแลกเปลี่ยน", "汇率", "Курсы")),
    currencies: [
      {
        code: "USD",
        flag: "🇺🇸",
        flagLabel: t(lang, L("United States", "สหรัฐอเมริกา", "美国", "США")),
        rate: "35.42",
        trend: "up" as const,
      },
      {
        code: "EUR",
        flag: "🇪🇺",
        flagLabel: t(lang, L("European Union", "สหภาพยุโรป", "欧盟", "ЕС")),
        rate: "38.15",
        trend: "down" as const,
      },
      {
        code: "GBP",
        flag: "🇬🇧",
        flagLabel: t(lang, L("United Kingdom", "สหราชอาณาจักร", "英国", "Великобритания")),
        rate: "44.80",
        trend: "up" as const,
      },
      {
        code: "JPY",
        flag: "🇯🇵",
        flagLabel: t(lang, L("Japan", "ญี่ปุ่น", "日本", "Япония")),
        rate: "0.24",
        trend: "down" as const,
      },
      {
        code: "CNY",
        flag: "🇨🇳",
        flagLabel: t(lang, L("China", "จีน", "中国", "Китай")),
        rate: "4.88",
        trend: "up" as const,
      },
      {
        code: "AUD",
        flag: "🇦🇺",
        flagLabel: t(lang, L("Australia", "ออสเตรเลีย", "澳大利亚", "Австралия")),
        rate: "23.15",
        trend: "up" as const,
      },
      {
        code: "SGD",
        flag: "🇸🇬",
        flagLabel: t(lang, L("Singapore", "สิงคโปร์", "新加坡", "Сингапур")),
        rate: "26.40",
        trend: "down" as const,
      },
      {
        code: "HKD",
        flag: "🇭🇰",
        flagLabel: t(lang, L("Hong Kong", "ฮ่องกง", "香港", "Гонконг")),
        rate: "4.52",
        trend: "up" as const,
      },
      {
        code: "KRW",
        flag: "🇰🇷",
        flagLabel: t(lang, L("South Korea", "เกาหลีใต้", "韩国", "Южная Корея")),
        rate: "0.026",
        trend: "down" as const,
      },
      {
        code: "RUB",
        flag: "🇷🇺",
        flagLabel: t(lang, L("Russia", "รัสเซีย", "俄罗斯", "Россия")),
        rate: "0.39",
        trend: "up" as const,
      },
    ],
    topics: [
      {
        initials: "JD",
        color: "bg-[#dbeafe] text-[#1d4ed8]",
        title: t(lang, L("Visa Extension 2024 Updates", "อัปเดตต่อวีซ่า 2024", "2024 签证延期更新", "Продление визы 2024")),
        meta: t(lang, L("Last reply 2m ago", "ตอบล่าสุด 2 นาที", "2 分钟前回复", "2 мин назад")),
        replies: 42,
        href: "/forum/trending",
      },
      {
        initials: "MK",
        color: "bg-[#fce7f3] text-[#be185d]",
        title: t(lang, L("Best Condo Areas for Expats?", "ย่านคอนโดดีสำหรับชาวต่างชาติ?", "外籍人士最佳公寓区？", "Лучшие районы для экспатов?")),
        meta: t(lang, L("Last reply 15m ago", "ตอบล่าสุด 15 นาที", "15 分钟前", "15 мин назад")),
        replies: 18,
        href: "/forum/trending",
      },
      {
        initials: "RS",
        color: "bg-[#dcfce7] text-[#15803d]",
        title: t(lang, L("Songthaew Routes Explained", "เส้นทางสองแถว", "双条车路线说明", "Маршруты songthaew")),
        meta: t(lang, L("Last reply 1h ago", "ตอบล่าสุด 1 ชม.", "1 小时前", "1 ч назад")),
        replies: 7,
        href: "/forum/trending",
      },
      {
        initials: "AN",
        color: "bg-[#e0e7ff] text-[#4338ca]",
        title: t(
          lang,
          L(
            "Which Hospital for Expats Near Jomtien?",
            "โรงพยาบาลไหนเหมาะชาวต่างชาติแถวจอมเทียน?",
            "仲天附近哪家医院适合外籍人士？",
            "Какая больница у Джомтьена для экспатов?",
          ),
        ),
        meta: t(lang, L("Last reply 2h ago", "ตอบล่าสุด 2 ชม.", "2 小时前", "2 ч назад")),
        replies: 31,
        href: "/living/healthcare/hospitals",
      },
      {
        initials: "PL",
        color: "bg-[#ffedd5] text-[#c2410c]",
        title: t(
          lang,
          L(
            "Rent vs Buy a Scooter in Pattaya",
            "เช่าหรือซื้อมอเตอร์ไซค์ในพัทยา?",
            "芭提雅租还是买摩托车？",
            "Аренда или покупка байка в Паттайе?",
          ),
        ),
        meta: t(lang, L("Last reply 3h ago", "ตอบล่าสุด 3 ชม.", "3 小时前", "3 ч назад")),
        replies: 24,
        href: "/living/transportation/driving",
      },
      {
        initials: "KT",
        color: "bg-[#cffafe] text-[#0e7490]",
        title: t(
          lang,
          L(
            "Koh Larn Ferry: Bali Hai vs Tawaen?",
            "เรือเกาะล้าน: บาลีไฮหรือตะเวน?",
            "格兰岛渡轮：Bali Hai 还是 Tawaen？",
            "Паром на Ко Лан: Bali Hai или Tawaen?",
          ),
        ),
        meta: t(lang, L("Last reply 4h ago", "ตอบล่าสุด 4 ชม.", "4 小时前", "4 ч назад")),
        replies: 56,
        href: "/explore/islands/koh-larn",
      },
      {
        initials: "BK",
        color: "bg-[#fef9c3] text-[#a16207]",
        title: t(
          lang,
          L(
            "Opening a Thai Bank Account (2026)",
            "เปิดบัญชีธนาคารไทย (2569)",
            "开立泰国银行账户（2026）",
            "Открытие счёта в тайском банке (2026)",
          ),
        ),
        meta: t(lang, L("Last reply 5h ago", "ตอบล่าสุด 5 ชม.", "5 小时前", "5 ч назад")),
        replies: 39,
        href: "/living/housing/rentals",
      },
      {
        initials: "NW",
        color: "bg-[#f3e8ff] text-[#7e22ce]",
        title: t(
          lang,
          L(
            "Best 5G SIM for Remote Work?",
            "ซิม 5G ไหนดีสำหรับทำงานออนไลน์?",
            "远程办公用哪家 5G SIM？",
            "Какая 5G SIM для удалённой работы?",
          ),
        ),
        meta: t(lang, L("Last reply 6h ago", "ตอบล่าสุด 6 ชม.", "6 小时前", "6 ч назад")),
        replies: 15,
        href: "/living/cost-of-living/utilities",
      },
      {
        initials: "LM",
        color: "bg-[#fee2e2] text-[#b91c1c]",
        title: t(
          lang,
          L(
            "Night Market Food: Hygiene Tips",
            "อาหารตลาดกลางคืน: เรื่องสุขอนามัย",
            "夜市美食卫生贴士",
            "Уличная еда: гигиена",
          ),
        ),
        meta: t(lang, L("Last reply 8h ago", "ตอบล่าสุด 8 ชม.", "8 小时前", "8 ч назад")),
        replies: 12,
        href: "/explore/restaurants/street-food",
      },
      {
        initials: "TM",
        color: "bg-[#e2e8f0] text-[#334155]",
        title: t(
          lang,
          L(
            "TM30 Reporting: Common Mistakes",
            "รายงานตัว TM30: ข้อผิดพลาดที่พบบ่อย",
            "TM30 报到常见错误",
            "TM30: частые ошибки",
          ),
        ),
        meta: t(lang, L("Last reply 10h ago", "ตอบล่าสุด 10 ชม.", "10 小时前", "10 ч назад")),
        replies: 28,
        href: "/living/visa/90-day-report",
      },
      {
        initials: "EV",
        color: "bg-[#ccfbf1] text-[#0f766e]",
        title: t(
          lang,
          L(
            "Weekend Events in Pattaya (June)",
            "อีเวนต์สุดสัปดาห์พัทยา (มิ.ย.)",
            "芭提雅周末活动（六月）",
            "События Паттайи на выходные (июнь)",
          ),
        ),
        meta: t(lang, L("Last reply 12h ago", "ตอบล่าสุด 12 ชม.", "12 小时前", "12 ч назад")),
        replies: 9,
        href: "/events",
      },
    ],
  };
}

export function getHomeBusinesses(lang: LanguageCode) {
  return {
    title: t(lang, L("Featured Businesses", "ธุรกิจแนะนำ", "精选商家", "Рекомендуемые бизнесы")),
    verified: t(lang, L("Verified", "ยืนยันแล้ว", "已认证", "Проверено")),
    featured: t(lang, L("Featured", "แนะนำ", "精选", "Рекомендуем")),
    addBranch: t(lang, L("Add Branch", "เพิ่มสาขา", "添加分店", "Добавить филиал")),
  };
}

export function getHomeTopStories(lang: LanguageCode) {
  return {
    title: t(lang, L("Top Stories", "ข่าวเด่น", "头条", "Главное")),
    viewAll: t(lang, L("View all news", "ดูข่าวทั้งหมด", "查看全部新闻", "Все новости")),
    readMore: t(lang, L("Read more", "อ่านต่อ", "阅读更多", "Читать")),
    hotelTime: t(lang, L("4 hours ago", "4 ชม.ที่แล้ว", "4 小时前", "4 ч назад")),
  };
}

export function getHomeExploreSections(lang: LanguageCode) {
  return {
    title: t(lang, L("Explore by Section", "สำรวจตามหมวด", "按栏目浏览", "По разделам")),
    sections: [
      {
        id: "news" as const,
        label: t(lang, L("News", "ข่าวสาร", "新闻", "Новости")),
        countValue: "248",
        countUnit: t(lang, L("Articles", "บทความ", "文章", "статей")),
        href: "/news",
        imageAlt: t(lang, L("News section", "หมวดข่าวสาร", "新闻栏目", "Раздел новостей")),
      },
      {
        id: "living" as const,
        label: t(lang, L("Living", "ชุมชน", "生活", "Жизнь")),
        countValue: "156",
        countUnit: t(lang, L("Guides", "คู่มือ", "指南", "гайдов")),
        href: "/living",
        imageAlt: t(lang, L("Living section", "หมวดชุมชน", "生活栏目", "Раздел «Жизнь»")),
      },
      {
        id: "explore" as const,
        label: t(lang, L("Explore", "รอบเมือง", "探索", "Обзор")),
        countValue: "89",
        countUnit: t(lang, L("Locations", "สถานที่", "地点", "мест")),
        href: "/explore",
        imageAlt: t(lang, L("Explore section", "หมวดรอบเมือง", "探索栏目", "Раздел «Обзор»")),
      },
      {
        id: "business" as const,
        label: t(lang, L("Business", "ธุรกิจ", "商业", "Бизнес")),
        countValue: "312",
        countUnit: t(lang, L("Listings", "รายการ", "listing", "записей")),
        href: "/business",
        imageAlt: t(lang, L("Business section", "หมวดธุรกิจ", "商业栏目", "Раздел бизнеса")),
      },
    ],
  };
}

export function getHomeEmergency(lang: LanguageCode) {
  return {
    srOnly: t(lang, L("Emergency support phone numbers", "เบอร์ฉุกเฉิน", "紧急电话", "Экстренные номера")),
    closeOverlay: t(lang, L("Close emergency support dialog", "ปิดหน้าต่างฉุกเฉิน", "关闭紧急对话框", "Закрыть")),
    title: t(lang, L("Emergency Support", "ช่วยเหลือฉุกเฉิน", "紧急支援", "Экстренная помощь")),
    subtitle: t(lang, L("Available 24/7 in Pattaya City", "บริการ 24/7 ในพัทยา", "芭提雅 24/7 服务", "24/7 в Паттайе")),
    close: t(lang, L("Close", "ปิด", "关闭", "Закрыть")),
    call: t(lang, L("Call", "โทร", "拨打", "Звонок")),
    footer: t(
      lang,
      L(
        "Always verify locations for rapid response",
        "ยืนยันตำแหน่งเพื่อการตอบสนองที่รวดเร็ว",
        "请确认位置以便快速响应",
        "Уточняйте местоположение для быстрой помощи",
      ),
    ),
  };
}
