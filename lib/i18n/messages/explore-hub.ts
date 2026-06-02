import type { LanguageCode } from "@/lib/i18n/languages";
import { exploreImages } from "@/lib/design/explore-images";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { streetFoodMarketImages } from "@/lib/design/street-food-market-images";
import { pickText, type LocalizedText } from "@/lib/i18n/text";

const copy = {
  heroTitle: {
    en: "Discover Your Pattaya",
    th: "ค้นพบพัทยาในแบบของคุณ",
    zh: "探索你的芭提雅",
    ru: "Откройте свою Паттайю",
  },
  heroImageAlt: {
    en: "Pattaya coastline at twilight with boats, skyline, and waterfront",
    th: "ชายฝั่งพัทยายามพลบค่ำ เรือ เส้นขอบฟ้า และริมน้ำ",
    zh: "暮光时分的芭提雅海岸、船只与城市天际线",
    ru: "Побережье Паттайи на закате с лодками и skyline",
  },
  searchPlaceholder: {
    en: "Search islands, food, malls, activities…",
    th: "ค้นหาเกาะ ร้านอาหาร ห้าง กิจกรรม…",
    zh: "搜索岛屿、美食、商场、活动…",
    ru: "Острова, еда, моллы, активности…",
  },
  searchBtn: {
    en: "Search",
    th: "ค้นหา",
    zh: "搜索",
    ru: "Найти",
  },
  searchNoResults: {
    en: "No matching page — try “Koh Larn”, “malls”, or “yacht”.",
    th: "ไม่พบหน้าที่ตรงคำนี้ — ลองพิมพ์ เช่น เกาะล้าน ห้าง หรือ ยอร์ช",
    zh: "未找到匹配页面——可试「格兰岛」「商场」「游艇」。",
    ru: "Ничего не найдено — попробуйте «Ko Lan», «mall» или «yacht».",
  },
  mustVisitTitle: {
    en: "Guides to start with",
    th: "คู่มือแนะนำ — เริ่มต้นที่นี่",
    zh: "推荐指南 — 从这里开始",
    ru: "С чего начать",
  },
  mustVisitSubtitle: {
    en: "Start here to see each Pattaya guide by trip style, then open the section that matches your day.",
    th: "เริ่มจากหน้านี้เพื่อดูคู่มือพัทยาแยกตามสไตล์ทริป แล้วเลือกเปิดหมวดที่ตรงกับวันที่อยากไป",
    zh: "先在这里按出行风格浏览芭提雅指南，再进入最符合你当天计划的版块。",
    ru: "Начните здесь: выберите гид по стилю поездки и откройте раздел под ваш день.",
  },
  viewAll: {
    en: "Koh Larn guide →",
    th: "คู่มือเกาะล้าน →",
    zh: "格兰岛指南 →",
    ru: "Гид Ko Lan →",
  },
  guideReadBtn: {
    en: "Read guide",
    th: "อ่านคู่มือ",
    zh: "阅读指南",
    ru: "Читать гид",
  },
  guidePick1Badge: {
    en: "Island guide",
    th: "คู่มือเกาะ",
    zh: "岛屿指南",
    ru: "Острова",
  },
  guidePick1Title: {
    en: "Koh Larn: ferries, beaches & day trips",
    th: "เกาะล้าน: เรือ หาด และทริปครึ่งวัน",
    zh: "格兰岛：船班、海滩与半日游",
    ru: "Ко Лан: паромы и пляжи",
  },
  guidePick1Excerpt: {
    en: "How to get there from Bali Hai Pier, which beach suits swimming, and what to do on the island — plan your own day; we link to maps, not booking sites.",
    th: "เรือจากท่าบาลีไฮ หาดไหนเหมาะว่ายน้ำ ทำอะไรบนเกาะได้บ้าง — วางแผนเดินทางเอง หน้านี้มีแผนที่และคำแนะนำ ไม่มีจองทัวร์",
    zh: "从 Bali Hai 码头如何前往、哪片海滩适合游泳、岛上可做什么——自行规划一日，本站提供地图与建议，不代订行程。",
    ru: "Паром с Bali Hai, пляжи и дела на острове — планируйте сами.",
  },
  guidePick2Badge: {
    en: "Beach guide",
    th: "คู่มือชายหาด",
    zh: "海滩指南",
    ru: "Пляжи",
  },
  guidePick2Title: {
    en: "Pattaya's main beaches",
    th: "ชายหาดหลักของพัทยา",
    zh: "芭提雅主要海滩",
    ru: "Главные пляжи",
  },
  guidePick2Excerpt: {
    en: "Pattaya Beach, Jomtien, Naklua, Wongamat, and Pratumnak — how they differ, who each suits, and how to get there.",
    th: "หาดพัทยา จอมเทียน นาเกลือ วงศ์อมาตย์ พระตำหนัก — แต่ละแห่งต่างกันยังไง เหมาะกับใคร และไปยังไง",
    zh: "芭提雅海滩、仲天、那库鲁阿、旺阿玛、帕塔姆纳克——各有何不同、适合谁、如何到达。",
    ru: "Паттайя, Джомтьен, Наклуа — чем отличаются и как добраться.",
  },
  diningTitle: {
    en: "Pattaya Dining Guide",
    th: "คู่มือร้านอาหารพัทยา",
    zh: "芭提雅餐饮指南",
    ru: "Гид по ресторанам Паттайи",
  },
  diningSubtitle: {
    en: "Curated culinary experiences for the discerning palate.",
    th: "คัดสรรประสบการณ์อาหารสำหรับนักชิมตัวจริง",
    zh: "为讲究口味的你精选餐饮体验。",
    ru: "Отобранные гастрономические впечатления.",
  },
  luxuryDining: {
    en: "Luxury Dining",
    th: "ร้านหรู",
    zh: "高端餐饮",
    ru: "Премиум-рестораны",
  },
  localFood: {
    en: "Local Food",
    th: "อาหารท้องถิ่น",
    zh: "本地美食",
    ru: "Местная еда",
  },
  diningLocalViewAll: {
    en: "Street food & markets guide →",
    th: "คู่มืออาหารข้างทางและตลาด →",
    zh: "街头美食与市场指南 →",
    ru: "Гид по уличной еде →",
  },
  dining1Title: {
    en: "Horizon Rooftop Restaurant & Bar",
    th: "Horizon Rooftop Restaurant & Bar",
    zh: "Horizon 屋顶餐厅",
    ru: "Horizon Rooftop",
  },
  dining1Excerpt: {
    en: "Level-34 rooftop at Hilton Pattaya with full bay views, cocktails, and steak-seafood dinner at sunset.",
    th: "ชั้นดาดฟ้าชั้น 34 ของ Hilton Pattaya วิวอ่าวเต็ม ๆ ค็อกเทลดี เหมาะสำหรับมื้อเย็นช่วงพระอาทิตย์ตก",
    zh: "Hilton Pattaya 34 层屋顶，海湾全景，鸡尾酒与牛排海鲜晚餐，日落时段最佳。",
    ru: "Rooftop на 34-м этаже Hilton Pattaya: панорама залива, коктейли и ужин на закате.",
  },
  dining2Title: {
    en: "Cafe des Amis Fine Dining",
    th: "Cafe des Amis Fine Dining",
    zh: "Cafe des Amis",
    ru: "Cafe des Amis",
  },
  dining2Excerpt: {
    en: "Classic European fine dining with tasting menus and wine pairing — ideal for anniversaries and special dinners.",
    th: "อาหารยุโรประดับพรีเมียมแบบคลาสสิก มีเมนูชิมและจับคู่ไวน์ เหมาะกับมื้อพิเศษหรือวันครบรอบ",
    zh: "经典欧式精致餐饮，含品鉴菜单与餐酒搭配，适合纪念日和正式晚餐。",
    ru: "Классический европейский fine dining с дегустациями и винным сопровождением.",
  },
  dining1Location: {
    en: "Hilton Pattaya · Beach Road",
    th: "Hilton Pattaya · ถนนเลียบหาด",
    zh: "Hilton Pattaya · Beach Road",
    ru: "Hilton Pattaya · Beach Road",
  },
  dining2Location: {
    en: "Thap Phraya",
    th: "ทัพพระยา",
    zh: "Thap Phraya",
    ru: "Thap Phraya",
  },
  localDining1Title: {
    en: "Thepprasit Night Market",
    th: "ตลาดเทพประสิทธิ์",
    zh: "Thepprasit 夜市",
    ru: "Thepprasit",
  },
  localDining1Excerpt: {
    en: "Pattaya's best-known night market — grilled seafood, papaya salad, and snacks. Walk the loop first, then pick a stall.",
    th: "ตลาดกลางคืนดังสุดในพัทยา — กุ้งเผา ส้มตำ ของกินเล่น เดินดูครบวงก่อนเลือกร้าน",
    zh: "芭提雅最知名夜市——烤海鲜、青木瓜沙拉；先逛一圈再选摊。",
    ru: "Самый известный ночной рынок — морепродукты и som tam.",
  },
  localDining1Location: {
    en: "South Pattaya · evenings",
    th: "ใต้พัทยา · เย็น–ค่ำ",
    zh: "南芭提雅 · 傍晚",
    ru: "Юг · вечер",
  },
  localDining2Title: {
    en: "Naklua Morning Market",
    th: "ตลาดนาเกลือ",
    zh: "Naklua 早市",
    ru: "Naklua",
  },
  localDining2Excerpt: {
    en: "Where locals buy breakfast and curry bags before the heat — boat noodles, khao tom, and market-price seafood.",
    th: "ตลาดเช้าของคนท้องถิ่น — ก๋วยเตี๋ยวเรือ ข้าวต้ม แกงถุง ซีฟู้ดราคาตลาด ควรไปก่อน 9 โมง",
    zh: "本地人早市——船面、粥、咖喱袋与海鲜；建议九点前到。",
    ru: "Утренний рынок — лапша, khao tom, морепродукты.",
  },
  localDining2Location: {
    en: "Naklua · morning",
    th: "นาเกลือ · เช้า",
    zh: "那库鲁阿 · 早晨",
    ru: "Naklua · утро",
  },
  wellnessTitle: {
    en: "Relax & Wellness",
    th: "ผ่อนคลาย & เวลเนส",
    zh: "放松与康养",
    ru: "Релакс и велнес",
  },
  eliteChoice: {
    en: "Guide",
    th: "คู่มือ",
    zh: "指南",
    ru: "Гид",
  },
  wellnessEyebrow: {
    en: "Spas & massage in Pattaya",
    th: "สปาและนวดในพัทยา",
    zh: "芭提雅水疗与按摩",
    ru: "Спа и массаж",
  },
  wellnessName: {
    en: "Pattaya spa & massage guide",
    th: "คู่มือสปา & นวดพัทยา",
    zh: "芭提雅水疗按摩指南",
    ru: "Гид по спа Паттайи",
  },
  wellnessTagline: {
    en: "Compare mall spas, chains, and street massage zones — book directly with each shop.",
    th: "เปรียบเทียบสปาในห้าง เครือใหญ่ และโซนนวดริมถนน — จองกับร้านโดยตรง",
    zh: "对比商场水疗、连锁与街边按摩区——请直接向门店预订。",
    ru: "Сравните сети и уличные зоны — бронируйте напрямую.",
  },
  wellnessReviews: {
    en: "Health Land · Let's Relax · Jomtien",
    th: "Health Land · Let's Relax · จอมเทียน",
    zh: "Health Land · Let's Relax · 仲天",
    ru: "Health Land · Let's Relax · Jomtien",
  },
  tagPremium: { en: "Premium", th: "พรีเมียม", zh: "尊享", ru: "Премиум" },
  tagSkyView: { en: "Sky View", th: "วิวดาดฟ้า", zh: "天际线", ru: "Панорама" },
  tagSeaView: { en: "Sea View", th: "วิวทะเล", zh: "海景", ru: "Море" },
  wellnessP1: {
    en: "We list real chains (Health Land, Let's Relax) and popular street zones — examples to help you choose, not a ranked “best spa” list.",
    th: "รวมเครือจริง เช่น Health Land, Let's Relax และโซนนวดริมถนนที่คนใช้กัน — เป็นตัวอย่างช่วยเลือก ไม่ใช่การจัดอันดับ",
    zh: "收录真实连锁与常见街区示例，供您选择，非排名榜单。",
    ru: "Реальные сети и зоны — примеры, не рейтинг.",
  },
  wellnessP2: {
    en: "Pattaya.com does not book treatments or take commission. Call the spa, use their website, or walk in.",
    th: "เว็บไซต์เราไม่จองทรีทเมนต์และไม่รับค่าคอม — โทรร้าน ใช้เว็บของร้าน หรือเข้าใช้หน้าร้าน",
    zh: "Pattaya.com 不代订、不抽佣——请致电门店、官网或到店。",
    ru: "Pattaya.com не бронирует — звоните в спа сами.",
  },
  wellnessP3: {
    en: "Prices change by menu and season — confirm with the shop on the day you visit.",
    th: "ราคาเปลี่ยนตามเมนูและช่วงเวลา — ยืนยันกับร้านวันที่ไป",
    zh: "价格因套餐与季节而异——到店当天向门店确认。",
    ru: "Цены уточняйте в день визита.",
  },
  wellnessFeature1: {
    en: "Mall spas & major chains",
    th: "สปาในห้างและเครือใหญ่",
    zh: "商场水疗与连锁",
    ru: "Сети и ТРЦ",
  },
  wellnessFeature2: {
    en: "Guide price ranges per session",
    th: "ช่วงราคาคร่าวต่อครั้ง",
    zh: "每次参考价区间",
    ru: "Ориентиры цен",
  },
  wellnessFeature3: {
    en: "Maps links for each zone",
    th: "ลิงก์แผนที่แต่ละโซน",
    zh: "各区地图链接",
    ru: "Ссылки на карты",
  },
  wellnessInvestment: {
    en: "Typical session",
    th: "ราคาประมาณต่อครั้ง",
    zh: "单次参考价",
    ru: "За сеанс",
  },
  wellnessPrice: {
    en: "฿400–2,500",
    th: "฿400–2,500",
    zh: "฿400–2,500",
    ru: "฿400–2 500",
  },
  bookNow: {
    en: "Read guide",
    th: "อ่านคู่มือ",
    zh: "阅读指南",
    ru: "Читать гид",
  },
  checkPrice: {
    en: "See spa zones",
    th: "ดูโซนในคู่มือ",
    zh: "查看区域",
    ru: "Зоны в гиде",
  },
  lifestyleTitle: {
    en: "Lifestyle & Local Vibes",
    th: "ไลฟ์สไตล์ & บรรยากาศท้องถิ่น",
    zh: "生活方式与本地氛围",
    ru: "Лайфстайл и местная атмосфера",
  },
  lifestyleSubtitle: {
    en: "The trendiest beach cafes and sunset spots.",
    th: "คาเฟ่ริมทะเลและจุดชมพระอาทิตย์ตกที่ฮิตที่สุด",
    zh: "最潮的海边咖啡馆与日落打卡点。",
    ru: "Модные кафе и закаты.",
  },
  shoppingTitle: {
    en: "Shopping & Markets",
    th: "ช้อปปิ้ง & ตลาด",
    zh: "购物与市场",
    ru: "Шопинг и рынки",
  },
  pattayaMapAria: {
    en: "Map of Pattaya City",
    th: "แผนที่เมืองพัทยา",
    zh: "芭提雅市地图",
    ru: "Карта Паттайи",
  },
  pattayaMapLabel: {
    en: "Pattaya City",
    th: "เมืองพัทยา",
    zh: "芭提雅市",
    ru: "Паттайя",
  },
  pattayaMapOpen: {
    en: "Open in Google Maps",
    th: "เปิดในแผนที่กูเกิล",
    zh: "在 Google 地图中打开",
    ru: "Открыть в Google Maps",
  },
  luxuryMalls: {
    en: "Luxury Malls",
    th: "ห้างสรรพสินค้าหรู",
    zh: "高端商场",
    ru: "Премиум-моллы",
  },
  centralFestivalTitle: {
    en: "Central Festival Pattaya Beach",
    th: "เซ็นทรัล เฟสติวัล พัทยา บีช",
    zh: "芭提雅中央节日海滩购物中心",
    ru: "Central Festival Pattaya Beach",
  },
  centralFestivalExcerpt: {
    en: "Flagship oceanfront mall with international brands, dining, cinema, and bay-view terraces.",
    th: "ห้างริมทะเลแบรนด์ดัง ร้านอาหาร โรงภาพยนตร์ และดาดฟ้าวิวอ่าว",
    zh: "旗舰海滨商场：国际品牌、餐饮、影院与海湾露台。",
    ru: "Флагманский молл у моря: бренды, рестораны, кино.",
  },
  localMarkets: {
    en: "Local Markets",
    th: "ตลาดท้องถิ่น",
    zh: "本地市场",
    ru: "Местные рынки",
  },
  thepprasitTitle: {
    en: "Thepprasit Night Market",
    th: "ตลาดเทพประสิทธิ์",
    zh: "Thepprasit 夜市",
    ru: "Ночной рынок Thepprasit",
  },
  thepprasitExcerpt: {
    en: "Daily night market — street food, bargains, and live music on busy weekends.",
    th: "ตลาดกลางคืนทุกวัน — สตรีทฟู้ด ของถูก ดนตรีสดช่วงส–อา",
    zh: "每日夜市：街头美食、淘货，周末现场音乐最热闹。",
    ru: "Ежедневный ночной рынок — стритфуд; музыка в выходные.",
  },
  familyTitle: {
    en: "Family Activities",
    th: "กิจกรรมครอบครัว",
    zh: "亲子活动",
    ru: "Семейный отдых",
  },
  waterParks: {
    en: "Water Parks",
    th: "สวนน้ำ",
    zh: "水上乐园",
    ru: "Аквапарки",
  },
  aquaverseTitle: {
    en: "Columbia Pictures Aquaverse",
    th: "Columbia Pictures Aquaverse",
    zh: "Columbia Pictures Aquaverse",
    ru: "Columbia Pictures Aquaverse",
  },
  aquaverseExcerpt: {
    en: "The world's first Columbia Pictures theme park — fun for kids and adults.",
    th: "สวนสนุกธีม Columbia Pictures แรกของโลก สนุกทั้งเด็กและผู้ใหญ่",
    zh: "全球首家哥伦比亚影业主题乐园，老少皆宜。",
    ru: "Первый тематический парк Columbia Pictures.",
  },
  yachtEyebrow: {
    en: "Ultra-Luxury Experience",
    th: "ประสบการณ์อัลตร้าลักชูรี",
    zh: "超奢体验",
    ru: "Ультра-люкс",
  },
  yachtTitle: {
    en: "Elite Yacht Life & Charters",
    th: "เรือยอชต์ระดับเอลิท",
    zh: "精英游艇与包船",
    ru: "Яхты и чартеры",
  },
  yachtExcerpt: {
    en: "Access Pattaya's most prestigious private yacht fleet with tailored itineraries.",
    th: "เข้าถึงกองเรือยอชต์ส่วนตัวชั้นนำพร้อมเส้นทางที่ออกแบบเฉพาะ",
    zh: "尊享芭提雅顶级私人游艇船队与定制航线。",
    ru: "Престижный флот частных яхт и маршруты на заказ.",
  },
  hiddenGemsTitle: {
    en: "Pattaya, going deeper",
    th: "พัทยาฉบับคนเริ่มรู้ลึก",
    zh: "芭提雅·开始深入了解",
    ru: "Паттайя: глубже",
  },
  hiddenGemsSubtitle: {
    en: "Hidden gems — quiet corners, timing, and maps links.",
    th: "จุดลับ — มุมเงียบ เวลา และลิงก์แผนที่",
    zh: "秘境——安静角落、时间与地图链接。",
    ru: "Секретные места — тихие уголки и Maps.",
  },
  readAllStories: {
    en: "Read All Stories →",
    th: "อ่านทุกเรื่อง →",
    zh: "阅读全部 →",
    ru: "Все статьи →",
  },
  article1Title: {
    en: "10 Hidden Spots Only Locals Know",
    th: "10 จุดลับที่คนท้องถิ่นรู้",
    zh: "当地人才知道的 10 个秘境",
    ru: "10 мест, которые знают местные",
  },
  article1Excerpt: {
    en: "Secret viewpoints and the best street stalls in Naklua.",
    th: "จุดชมวิวลับและร้านข้างทางที่ดีที่สุดในนาเกลือ",
    zh: "隐秘观景点与那库阿最佳街边小吃。",
    ru: "Секретные виды и лучший стритфуд в Naklua.",
  },
  article2Title: {
    en: "The Ultimate Weekend Guide",
    th: "คู่มือสุดสัปดาห์",
    zh: "终极周末指南",
    ru: "Гид на выходные",
  },
  article2Excerpt: {
    en: "48 hours of luxury dining, stays, and nightlife in Pattaya.",
    th: "48 ชั่วโมงดินเนอร์หรู ที่พักพรีเมียม และไนท์ไลฟ์ในพัทยา",
    zh: "芭提雅 48 小时奢华餐饮、住宿与夜生活。",
    ru: "48 часов люкса, отелей и ночной жизни.",
  },
  newsletter: {
    en: "Newsletter",
    th: "จดหมายข่าว",
    zh: "订阅通讯",
    ru: "Рассылка",
  },
  newsletterTitle: {
    en: "Want more exclusive insights?",
    th: "อยากได้ข้อมูลพิเศษเพิ่มเติม?",
    zh: "想要更多独家内容？",
    ru: "Хотите больше эксклюзива?",
  },
  newsletterBody: {
    en: "Weekly updates on luxury property, lifestyle, and invitation-only events.",
    th: "อัปเดตรายสัปดาห์เรื่องอสังหาหรู ไลฟ์สไตล์ และอีเวนต์เฉพาะกลุ่ม",
    zh: "每周更新奢华房产、生活方式与专属活动。",
    ru: "Еженедельные новости о недвижимости и lifestyle.",
  },
  lifestyle1Title: {
    en: "Coco Lounge & Bar",
    th: "Coco Lounge & Bar",
    zh: "Coco Lounge & Bar",
    ru: "Coco Lounge & Bar",
  },
  lifestyle1Badge: {
    en: "Ocean Front",
    th: "ริมทะเล",
    zh: "海滨",
    ru: "У моря",
  },
  lifestyle1Location: {
    en: "Jomtien Beach",
    th: "หาดจอมเทียน",
    zh: "仲天海滩",
    ru: "Джомтьен",
  },
  lifestyle1Hours: {
    en: "Open until 11 PM",
    th: "เปิดถึง 23:00",
    zh: "营业至 23:00",
    ru: "До 23:00",
  },
  lifestyle2Title: {
    en: "Horizon Terrace",
    th: "Horizon Terrace",
    zh: "Horizon Terrace",
    ru: "Horizon Terrace",
  },
  lifestyle2Badge: {
    en: "Sunset View",
    th: "วิวพระอาทิตย์ตก",
    zh: "日落景观",
    ru: "Закат",
  },
  lifestyle2Location: {
    en: "Pattaya Beach",
    th: "หาดพัทยา",
    zh: "芭提雅海滩",
    ru: "Пляж Паттайи",
  },
  lifestyle2Hours: {
    en: "Open until 2 AM",
    th: "เปิดถึง 02:00",
    zh: "营业至凌晨 2 点",
    ru: "До 02:00",
  },
  lifestyle3Title: {
    en: "Bake & Bloom",
    th: "Bake & Bloom",
    zh: "Bake & Bloom",
    ru: "Bake & Bloom",
  },
  lifestyle3Badge: {
    en: "Artisan Coffee",
    th: "กาแฟคราฟต์",
    zh: "精品咖啡",
    ru: "Крафт-кофе",
  },
  lifestyle3Location: {
    en: "Pratumnak Hill",
    th: "พระตำนัก",
    zh: "帕坦纳克山",
    ru: "Пратамнак",
  },
  lifestyle3Hours: {
    en: "Open until 6 PM",
    th: "เปิดถึง 18:00",
    zh: "营业至 18:00",
    ru: "До 18:00",
  },
  article1ReadMins: {
    en: "5 min read",
    th: "อ่าน 5 นาที",
    zh: "阅读 5 分钟",
    ru: "5 мин чтения",
  },
  article2ReadMins: {
    en: "8 min read",
    th: "อ่าน 8 นาที",
    zh: "阅读 8 分钟",
    ru: "8 мин чтения",
  },
} satisfies Record<string, LocalizedText>;

export type ExploreHubDiningCard = {
  title: string;
  rating: string;
  location: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  cta: string;
  href: string;
  sponsored?: boolean;
};

export function getExploreHubDiningPicks(lang: LanguageCode): {
  luxury: ExploreHubDiningCard[];
  local: ExploreHubDiningCard[];
} {
  const guideCta = tExplore(lang, "guideReadBtn");

  return {
    luxury: [
      {
        title: tExplore(lang, "dining1Title"),
        rating: "4.9",
        location: tExplore(lang, "dining1Location"),
        excerpt: tExplore(lang, "dining1Excerpt"),
        image: "/images/explore/fine-dining-horizon-rooftop.png",
        imageAlt: tExplore(lang, "dining1Title"),
        cta: guideCta,
        href: "/explore/restaurants/fine-dining",
        sponsored: false,
      },
      {
        title: tExplore(lang, "dining2Title"),
        rating: "4.8",
        location: tExplore(lang, "dining2Location"),
        excerpt: tExplore(lang, "dining2Excerpt"),
        image: "/images/explore/fine-dining-cafe-des-amis.png",
        imageAlt: tExplore(lang, "dining2Title"),
        cta: guideCta,
        href: "/explore/restaurants/fine-dining",
        sponsored: false,
      },
    ],
    local: [
      {
        title: tExplore(lang, "localDining1Title"),
        rating: "4.8",
        location: tExplore(lang, "localDining1Location"),
        excerpt: tExplore(lang, "localDining1Excerpt"),
        image: streetFoodMarketImages[0],
        imageAlt: tExplore(lang, "localDining1Title"),
        cta: guideCta,
        href: marketPagePaths.streetFoodThepprasit,
        sponsored: false,
      },
      {
        title: tExplore(lang, "localDining2Title"),
        rating: "4.7",
        location: tExplore(lang, "localDining2Location"),
        excerpt: tExplore(lang, "localDining2Excerpt"),
        image: streetFoodMarketImages[1],
        imageAlt: tExplore(lang, "localDining2Title"),
        cta: guideCta,
        href: marketPagePaths.oldNaklua,
        sponsored: false,
      },
    ],
  };
}

export function getLifestyleSpots(lang: LanguageCode) {
  return [
    {
      title: tExplore(lang, "lifestyle1Title"),
      badge: tExplore(lang, "lifestyle1Badge"),
      location: tExplore(lang, "lifestyle1Location"),
      hours: tExplore(lang, "lifestyle1Hours"),
      href: "/explore/cafes",
    },
    {
      title: tExplore(lang, "lifestyle2Title"),
      badge: tExplore(lang, "lifestyle2Badge"),
      location: tExplore(lang, "lifestyle2Location"),
      hours: tExplore(lang, "lifestyle2Hours"),
      href: "/explore/cafes",
    },
    {
      title: tExplore(lang, "lifestyle3Title"),
      badge: tExplore(lang, "lifestyle3Badge"),
      location: tExplore(lang, "lifestyle3Location"),
      hours: tExplore(lang, "lifestyle3Hours"),
      href: "/explore/cafes",
    },
  ];
}

export function tExplore(lang: LanguageCode, key: keyof typeof copy): string {
  return pickText(lang, copy[key]);
}
