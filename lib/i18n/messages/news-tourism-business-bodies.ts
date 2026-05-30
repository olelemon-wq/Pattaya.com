import { L } from "@/lib/i18n/living-helpers";
import type { NewsCategoryBodySet } from "@/lib/i18n/messages/news-bodies-factory";

export const newsTourismBusinessBodies: Record<string, NewsCategoryBodySet> = {
  "tourism/attractions": {
    spotlights: {
      sanctuary: {
        badge: L("Attractions", "สถานที่ท่องเที่ยว", "景点", "Достопримечательности"),
        title: L(
          "Sanctuary of Truth: New Gallery Wing",
          "ปราสาทสัจธรรม: ปีกแกลเลอรีใหม่",
          "真理寺：新画廊翼",
          "Sanctuary of Truth: новое крыло",
        ),
        excerpt: L(
          "Guided tours highlight 40 years of hand-carved teak craftsmanship.",
          "ทัวร์นำเที่ยวชู 40 ปีงานแกะสลักไม้สักด้วยมือ",
          "导览突出 40 年手工柚木雕刻工艺。",
          "Экскурсии — 40 лет резьбы по тику.",
        ),
        cta: L("Visitor Info", "ข้อมูลผู้เยี่ยมชม", "访客信息", "Для гостей"),
        imageAlt: L(
          "Sanctuary of Truth architecture",
          "สถาปัตยกรรมปราสาทสัจธรรม",
          "真理寺建筑",
          "Архитектура Sanctuary of Truth",
        ),
      },
      islands: {
        badge: L("Experiences", "ประสบการณ์", "体验", "Впечатления"),
        title: L(
          "Hidden Gems: 5 Islands Near Pattaya",
          "Hidden Gems: 5 เกาะใกล้พัทยา",
          "隐藏宝石：芭提雅附近 5 岛",
          "5 островов рядом с Pattaya",
        ),
        excerpt: L(
          "Koh Rin and Koh Kram Yai offer quiet snorkeling away from crowds.",
          "เกาะรินและเกาะกรามใหญ่ดำน้ำเงียบๆ ห่างจากฝูงชน",
          "Koh Rin 与 Koh Kram Yai 可远离人群安静浮潜。",
          "Koh Rin и Koh Kram Yai — снорклинг без толп.",
        ),
        cta: L("Book Tour", "จองทัวร์", "预订行程", "Тур"),
        imageAlt: L(
          "Islands near Pattaya",
          "เกาะใกล้พัทยา",
          "芭提雅附近岛屿",
          "Острова у Pattaya",
        ),
      },
      "koh-larn": {
        badge: L("Koh Larn", "เกาะล้าน", "格兰岛", "Koh Larn"),
        title: L(
          "Tien Beach: Ferry Schedule Summer 2026",
          "หาดเทียน: ตารางเรือฤดูร้อน 2026",
          "Tien 海滩：2026 夏季渡轮时刻",
          "Tien Beach: расписание лета 2026",
        ),
        excerpt: L(
          "First boat 07:00 from Bali Hai — return last ferry 18:30.",
          "เรือแรก 07:00 จากแหลมบาลีฮาย — เรือกลับสุดท้าย 18:30",
          "首班 07:00 自 Bali Hai 出发 — 末班返程 18:30。",
          "Первый рейс 07:00 с Bali Hai — последний 18:30.",
        ),
        cta: L("Beach Guide", "คู่มือหาด", "海滩指南", "Гид по пляжам"),
        imageAlt: L(
          "Koh Larn beach",
          "หาดเกาะล้าน",
          "格兰岛海滩",
          "Пляж Koh Larn",
        ),
      },
    },
    articles: {
      "Koh Larn Day Trip: Best Beaches Ranked": {
        badge: L("Islands", "เกาะ", "岛屿", "Острова"),
        title: L(
          "Koh Larn Day Trip: Best Beaches Ranked",
          "เกาะล้าน 1 วัน: จัดอันดับหาด",
          "格兰岛一日游：最佳海滩排名",
          "Koh Larn: лучшие пляжи",
        ),
        excerpt: L(
          "Tien, Samae, and Nual — what to expect for families vs. parties.",
          "Tien, Samae และ Nual — เหมาะครอบครัว vs ปาร์ตี้",
          "Tien、Samae、Nual — 家庭与派对各有什么不同。",
          "Tien, Samae, Nual — для семей и вечеринок.",
        ),
        footer: L("Today", "วันนี้", "今天", "Сегодня"),
        imageAlt: L(
          "Koh Larn snorkeling",
          "ดำน้ำเกาะล้าน",
          "格兰岛浮潜",
          "Снорклинг Koh Larn",
        ),
      },
      "Nong Nooch Gardens: Festival Weekend Dates": {
        badge: L("Culture", "วัฒนธรรม", "文化", "Культура"),
        title: L(
          "Nong Nooch Gardens: Festival Weekend Dates",
          "สวนนงนุช: วันเทศกาลสุดสัปดาห์",
          "东芭乐园：节庆周末日期",
          "Nong Nooch: даты фестиваля",
        ),
        excerpt: L(
          "Cultural shows and elephant care demos — book transport from Pattaya.",
          "โชว์วัฒนธรรมและดูแลช้าง — จองรถจากพัทยา",
          "文化表演与大象护理演示 — 可从芭提雅预订交通。",
          "Шоу и уход за слонами — трансфер из Pattaya.",
        ),
        footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
        imageAlt: L(
          "Cultural attraction",
          "สถานที่วัฒนธรรม",
          "文化景点",
          "Культурная достопримечательность",
        ),
      },
      "Jomtien Beach: Family Zone Expanded": {
        badge: L("Beaches", "ชายหาด", "海滩", "Пляжи"),
        title: L(
          "Jomtien Beach: Family Zone Expanded",
          "หาดจอมเทียน: ขยายโซนครอบครัว",
          "仲天海滩：家庭区扩大",
          "Jomtien: зона для семей",
        ),
        excerpt: L(
          "New shaded play area and lifeguard towers installed along central strip.",
          "ติดตั้งสนามเด็กมีร่มเงาและหอ lifeguard ตลอดแนวกลาง",
          "中央带新增遮阳儿童区与救生塔。",
          "Детская зона с тенью и вышки спасателей.",
        ),
        footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
        imageAlt: L(
          "Pattaya beaches",
          "ชายหาดพัทยา",
          "芭提雅海滩",
          "Пляжи Pattaya",
        ),
      },
      "Combo Tickets: Sanctuary + Floating Market": {
        badge: L("Deals", "ดีล", "优惠", "Акции"),
        title: L(
          "Combo Tickets: Sanctuary + Floating Market",
          "ตั๋วคอมโบ: ปราสาทสัจธรรม + ตลาดน้ำ",
          "联票：真理寺 + 水上市场",
          "Комбо: Sanctuary + плавучий рынок",
        ),
        excerpt: L(
          "20% off bundled entry when purchased before Friday.",
          "ลด 20% เมื่อซื้อก่อนวันศุกร์",
          "周五前购买联票享 8 折。",
          "−20% при покупке до пятницы.",
        ),
        footer: L("3 days ago", "3 วันที่แล้ว", "3 天前", "3 дня назад"),
        imageAlt: L(
          "Tour promotion",
          "โปรโมชันทัวร์",
          "旅游促销",
          "Туристическая акция",
        ),
      },
      "Sunset Cruises: Peak Season Slots Filling": {
        badge: L("Luxury", "ลักซ์ชัวรี", "奢华", "Люкс"),
        title: L(
          "Sunset Cruises: Peak Season Slots Filling",
          "ล่องเรือพระอาทิตย์ตก: คิวฤดูทยอดเต็ม",
          "日落巡航：旺季名额紧俏",
          "Круизы на закат: места заканчиваются",
        ),
        excerpt: L(
          "Charter operators add mid-week departures from Ocean Marina.",
          "ผู้ให้บริการเพิ่มออกเรือกลางสัปดาห์จาก Ocean Marina",
          "包船运营商从 Ocean Marina 增开周中班次。",
          "Рейсы в середине недели из Ocean Marina.",
        ),
        footer: L("5 days ago", "5 วันที่แล้ว", "5 天前", "5 дней назад"),
        imageAlt: L(
          "Yacht charter",
          "เช่าเรือยอชต์",
          "游艇包租",
          "Аренда яхты",
        ),
      },
      "Pattaya Guide: Curated Routes for First-Timers": {
        badge: L("Guides", "คู่มือ", "指南", "Гиды"),
        title: L(
          "Pattaya Guide: Curated Routes for First-Timers",
          "คู่มือพัทยา: เส้นทางสำหรับมือใหม่",
          "芭提雅指南：新手精选路线",
          "Pattaya: маршруты для новичков",
        ),
        excerpt: L(
          "Editors pick one-day itineraries for beach, food, and culture.",
          "บรรณาธิการคัดทริป 1 วัน หาด อาหาร และวัฒนธรรม",
          "编辑精选海滩、美食与文化一日游行程。",
          "Маршруты на день: пляж, еда, культура.",
        ),
        footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
        imageAlt: L(
          "Pattaya guide",
          "คู่มือพัทยา",
          "芭提雅指南",
          "Гид по Pattaya",
        ),
      },
    },
  },

  "tourism/promotions": {
    spotlights: {
      hotels: {
        badge: L("Hotels", "โรงแรม", "酒店", "Отели"),
        title: L(
          "Beach Road: 3-Night Packages From 4,900 THB",
          "Beach Road: แพ็ก 3 คืน เริ่ม 4,900 บาท",
          "海滩路：三晚套餐 4900 泰铢起",
          "Beach Road: 3 ночи от 4900 бат",
        ),
        excerpt: L(
          "Select 4-star properties include free minibar refill on day one.",
          "โรงแรม 4 ดาวที่ร่วมรายการเติมมินิบาร์ฟรีวันแรก",
          "部分四星酒店首日免费补充迷你吧。",
          "4★ отели: бесплатное пополнение minibar в первый день.",
        ),
        cta: L("Hotel News", "ข่าวโรงแรม", "酒店新闻", "Новости отелей"),
        imageAlt: L(
          "Pattaya hotel pool",
          "สระโรงแรมพัทยา",
          "芭提雅酒店泳池",
          "Бассейн отеля Pattaya",
        ),
      },
      dining: {
        badge: L("Dining", "อาหาร", "餐饮", "Рестораны"),
        title: L(
          "Fine Dining Week: Tasting Menus 1,990 THB",
          "Fine Dining Week: เมนูชิม 1,990 บาท",
          "Fine Dining Week：品鉴菜单 1990 泰铢",
          "Fine Dining Week: дегустация 1990 бат",
        ),
        excerpt: L(
          "Twelve restaurants join citywide promotion — reserve via Pattaya.com partners.",
          "12 ร้านร่วมโปรทั่วเมือง — จองผ่านพาร์ทเนอร์ Pattaya.com",
          "十二家餐厅参与全城促销 — 通过 Pattaya.com 合作方预订。",
          "12 ресторанов — бронь через партнёров Pattaya.com.",
        ),
        cta: L("Restaurant Guide", "คู่มือร้านอาหาร", "餐厅指南", "Гид по ресторанам"),
        imageAlt: L(
          "Fine dining Pattaya",
          "ฟายไดนิ่งพัทยา",
          "芭提雅 fine dining",
          "Fine dining Pattaya",
        ),
      },
      spa: {
        badge: L("Wellness", "สุขภาพ", "康养", "Wellness"),
        title: L(
          "Spa Bundles: Couples Packages 2-for-1",
          "สปาแพ็ก: คู่รัก 2 แถม 1",
          "水疗套餐：情侣 2 送 1",
          "Спа: пары 2 по цене 1",
        ),
        excerpt: L(
          "Jomtien wellness centers extend hours for holiday visitors.",
          "ศูนย์ wellness จอมเทียนขยายเวลารับนักท่องเที่ยวช่วงวันหยุด",
          "仲天康养中心为假日访客延长营业时间。",
          "Wellness-центры Jomtien работают дольше в праздники.",
        ),
        cta: L("Wellness", "Wellness", "康养", "Wellness"),
        imageAlt: L(
          "Wellness resort",
          "รีสอร์ท wellness",
          "康养度假村",
          "Wellness-курорт",
        ),
      },
    },
    articles: {
      "Seafood Buffets: Weekend Brunch Specials": {
        badge: L("Food", "อาหาร", "美食", "Еда"),
        title: L(
          "Seafood Buffets: Weekend Brunch Specials",
          "บุฟเฟ่ต์ซีฟู้ด: บรันช์สุดสัปดาห์",
          "海鲜自助：周末早午餐特惠",
          "Морепродукты: бранч на выходных",
        ),
        excerpt: L(
          "Jomtien pier restaurants compete on crab and prawn spreads.",
          "ร้านริมท่าจอมเทียนแข่งบุฟเฟ่ต์ปูและกุ้ง",
          "仲天码头餐厅比拼蟹虾自助。",
          "Рестораны у причала Jomtien — крабы и креветки.",
        ),
        footer: L("Today", "วันนี้", "今天", "Сегодня"),
        imageAlt: L(
          "Restaurant promotion",
          "โปรโมชันร้านอาหาร",
          "餐厅促销",
          "Акция ресторана",
        ),
      },
      "Royal Cliff: Anniversary Rates for Members": {
        badge: L("Resorts", "รีสอร์ท", "度假村", "Курорты"),
        title: L(
          "Royal Cliff: Anniversary Rates for Members",
          "Royal Cliff: ราคาครบรอบสำหรับสมาชิก",
          "Royal Cliff：会员周年价",
          "Royal Cliff: годовщина для членов",
        ),
        excerpt: L(
          "Loyalty guests receive room upgrades subject to availability.",
          "สมาชิกได้อัปเกรดห้องตามความพร้อม",
          "忠诚会员视空房情况可享房型升级。",
          "Апгрейд номера для loyalty-гостей.",
        ),
        footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
        imageAlt: L(
          "Resort deal",
          "ดีลรีสอร์ท",
          "度假村优惠",
          "Акция курорта",
        ),
      },
      "Michelin-Listed Chefs Pop-Up at Naklua": {
        badge: L("Fine Dining", "ฟายไดนิ่ง", "Fine Dining", "Fine dining"),
        title: L(
          "Michelin-Listed Chefs Pop-Up at Naklua",
          "เชฟ Michelin Pop-Up ที่นาเกลือ",
          "米其林主厨 Pop-Up 亮相那库拉",
          "Шефы Michelin: pop-up в Naklua",
        ),
        excerpt: L(
          "Limited seats for collaborative tasting menu — book early.",
          "ที่นั่งจำกัดเมนูชิมร่วม — จองล่วงหน้า",
          "合作品鉴菜单席位有限 — 请尽早预订。",
          "Мало мест — бронируйте заранее.",
        ),
        footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
        imageAlt: L(
          "Fine dining",
          "ฟายไดนิ่ง",
          "Fine dining",
          "Fine dining",
        ),
      },
      "Attraction Pass: 5 Venues One Ticket": {
        badge: L("Bundles", "แพ็กเกจ", "联票", "Пакеты"),
        title: L(
          "Attraction Pass: 5 Venues One Ticket",
          "บัตรผ่าน: 5 สถานที่ ตั๋วเดียว",
          "景点通票：五处一券",
          "Pass: 5 площадок, один билет",
        ),
        excerpt: L(
          "Valid 7 days — includes Sanctuary, aquarium, and viewpoint.",
          "ใช้ได้ 7 วัน — รวมปราสาทสัจธรรม อควาเรียม และจุดชมวิว",
          "7 天有效 — 含真理寺、水族馆与观景点。",
          "7 дней — Sanctuary, аквариум, смотровая.",
        ),
        footer: L("4 days ago", "4 วันที่แล้ว", "4 天前", "4 дня назад"),
        imageAlt: L(
          "Attraction combo ticket",
          "ตั๋วคอมโบสถานที่ท่องเที่ยว",
          "景点联票",
          "Комбо-билет",
        ),
      },
      "Pattaya Music Festival: Shuttle + Hotel Packs": {
        badge: L("Events", "งาน", "活动", "События"),
        title: L(
          "Pattaya Music Festival: Shuttle + Hotel Packs",
          "Pattaya Music Festival: Shuttle + แพ็กโรงแรม",
          "芭提雅音乐节：接驳 + 酒店套餐",
          "Music Festival: shuttle + отели",
        ),
        excerpt: L(
          "Free shuttle loops with selected hotel partners during event weekend.",
          "รถรับส่งฟรีวนกับโรงแรมพาร์ทเนอร์ช่วงสุดสัปดาห์งาน",
          "活动周末与指定酒店合作提供免费接驳环线。",
          "Бесплатный shuttle с отелями-партнёрами.",
        ),
        footer: L("5 days ago", "5 วันที่แล้ว", "5 天前", "5 дней назад"),
        imageAlt: L(
          "Festival event",
          "งานเทศกาล",
          "节庆活动",
          "Фестиваль",
        ),
      },
      "Featured Businesses: April Spotlight": {
        badge: L("Sponsored", "โฆษณา", "赞助", "Спонсор"),
        title: L(
          "Featured Businesses: April Spotlight",
          "ธุรกิจเด่น: ไฮไลท์เมษายน",
          "精选商户：四月 spotlight",
          "Featured: апрельский spotlight",
        ),
        excerpt: L(
          "Verified partners offering exclusive reader discounts.",
          "พาร์ทเนอร์ที่ยืนยันแล้วมอบส่วนลดพิเศษให้ผู้อ่าน",
          "认证合作方提供读者专属折扣。",
          "Проверенные партнёры — эксклюзивные скидки.",
        ),
        footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
        imageAlt: L(
          "Featured business",
          "ธุรกิจเด่น",
          "精选商户",
          "Featured business",
        ),
      },
    },
  },

  "business/hotels": {
    spotlights: {
      occupancy: {
        badge: L("Market", "ตลาด", "市场", "Рынок"),
        title: L(
          "Q1 Occupancy: 78% Citywide Average",
          "อัตราเข้าพัก Q1: เฉลี่ยทั้งเมือง 78%",
          "Q1 入住率：全市平均 78%",
          "Q1: загрузка 78% по городу",
        ),
        excerpt: L(
          "Wongamat luxury segment leads at 85% — Jomtien family hotels close behind.",
          "วงอามาดลักซ์ชัวรีนำ 85% — โรงแรมครอบครัวจอมเทียนตามมา",
          "Wongamat luxury 段领先 85% — 仲天家庭酒店紧随其后。",
          "Wongamat luxury 85% — семейные отели Jomtien следом.",
        ),
        cta: L("Market Data", "ข้อมูลตลาด", "市场数据", "Данные рынка"),
        imageAlt: L(
          "Hotel skyline Pattaya",
          "เส้นขอบฟ้าโรงแรมพัทยา",
          "芭提雅酒店天际线",
          "Горизонт отелей Pattaya",
        ),
      },
      mice: {
        badge: L("MICE", "MICE", "MICE", "MICE"),
        title: L(
          "Convention Center: 3 Major Events Booked",
          "ศูนย์ประชุม: จอง 3 งานใหญ่",
          "会议中心：已订三场大型活动",
          "Конвенц-центр: 3 крупных события",
        ),
        excerpt: L(
          "International dental and tech conferences fill shoulder season dates.",
          "งานทันตกรรมและเทคโนโลยีนานาชาติเติมช่วง low season",
          "国际牙科与科技会议填补淡季档期。",
          "Международные конференции заполняют межсезонье.",
        ),
        cta: L("Event Deals", "ดีลงาน", "活动优惠", "Акции событий"),
        imageAlt: L(
          "Conference hotel",
          "โรงแรมประชุม",
          "会议酒店",
          "Конференц-отель",
        ),
      },
      staffing: {
        badge: L("Labor", "แรงงาน", "劳动力", "Персонал"),
        title: L(
          "Staffing Shortage Eases With Training Program",
          "ขาดคนบรรเทาด้วยโครงการฝึกอบรม",
          "培训计划缓解用工短缺",
          "Дефицит кадров: программа обучения",
        ),
        excerpt: L(
          "Chonburi hospitality school places 200 graduates in Pattaya properties.",
          "โรงเรียน hospitality ชลบุรีส่งบัณฑิต 200 คนเข้าโรงแรมพัทยา",
          "春武里 hospitality 学校向芭提雅酒店输送 200 名毕业生。",
          "200 выпускников школы hospitality в отелях Pattaya.",
        ),
        cta: L("Hiring News", "ข่าวรับสมัคร", "招聘新闻", "Найм"),
        imageAlt: L(
          "Hotel staff training",
          "ฝึกอบรมพนักงานโรงแรม",
          "酒店员工培训",
          "Обучение персонала",
        ),
      },
    },
    articles: {
      "Naklua: Boutique 120-Room Property Soft-Opens": {
        badge: L("Development", "พัฒนา", "开发", "Развитие"),
        title: L(
          "Naklua: Boutique 120-Room Property Soft-Opens",
          "นาเกลือ: บูติก 120 ห้องซอฟต์เปิด",
          "那库拉：120 间精品酒店软开业",
          "Naklua: бутик-отель 120 номеров",
        ),
        excerpt: L(
          "Adults-only concept targets long-stay remote workers with co-working floor.",
          "แนว adults-only สำหรับ remote worker พักยาว พร้อมชั้น co-working",
          "成人专属概念面向长租远程工作者，设联合办公层。",
          "Adults-only для remote workers с co-working.",
        ),
        footer: L("Today", "วันนี้", "今天", "Сегодня"),
        imageAlt: L(
          "New hotel opening",
          "เปิดโรงแรมใหม่",
          "新酒店开业",
          "Открытие отеля",
        ),
      },
      "Beach Road Plot Sells at 420M THB Per Rai": {
        badge: L("Real Estate", "อสังหา", "房地产", "Недвижимость"),
        title: L(
          "Beach Road Plot Sells at 420M THB Per Rai",
          "ที่ดิน Beach Road 420 ล้าน/ไร่",
          "海滩路地块：每莱 4.2 亿泰铢成交",
          "Beach Road: 420 млн бат за rai",
        ),
        excerpt: L(
          "Developers eye mixed-use tower with branded residences.",
          "นักพัฒนามองตึก mixed-use พร้อม branded residence",
          "开发商瞄准混合用途塔楼与品牌住宅。",
          "Mixed-use башня с branded residences.",
        ),
        footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
        imageAlt: L(
          "Hotel land deal",
          "ดีลที่ดินโรงแรม",
          "酒店地块交易",
          "Сделка с землёй",
        ),
      },
      "Flash Sale: 4-Star Properties Under 3,000 THB": {
        badge: L("Promotions", "โปรโมชัน", "促销", "Акции"),
        title: L(
          "Flash Sale: 4-Star Properties Under 3,000 THB",
          "แฟลชเซล: โรงแรม 4 ดาว ต่ำกว่า 3,000 บาท",
          "闪购：四星酒店低于 3000 泰铢",
          "Flash sale: 4★ до 3000 бат",
        ),
        excerpt: L(
          "Two-night minimum — valid weekdays through June.",
          "พักขั้นต่ำ 2 คืน — วันธรรมดาถึงมิถุนายน",
          "最少两晚 — 工作日有效至六月。",
          "Минимум 2 ночи — будни до июня.",
        ),
        footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
        imageAlt: L(
          "Hotel promotion",
          "โปรโมชันโรงแรม",
          "酒店促销",
          "Акция отеля",
        ),
      },
      "Royal Cliff: Renovated Grand Wing Debuts": {
        badge: L("Featured", "เด่น", "精选", "Featured"),
        title: L(
          "Royal Cliff: Renovated Grand Wing Debuts",
          "Royal Cliff: เปิด Grand Wing หลังรีโนเวท",
          "Royal Cliff：翻新 Grand Wing 亮相",
          "Royal Cliff: Grand Wing после реновации",
        ),
        excerpt: L(
          "Verified partner property adds 86 sea-view suites.",
          "พาร์ทเนอร์ที่ยืนยันแล้วเพิ่ม 86 ห้อง suite วิวทะเล",
          "认证合作物业新增 86 间海景套房。",
          "86 новых suites с видом на море.",
        ),
        footer: L("4 days ago", "4 วันที่แล้ว", "4 天前", "4 дня назад"),
        imageAlt: L(
          "Royal Cliff hotel",
          "โรงแรม Royal Cliff",
          "Royal Cliff 酒店",
          "Royal Cliff",
        ),
      },
      "Opening a Hotel in Pattaya: License Checklist": {
        badge: L("B2B", "B2B", "B2B", "B2B"),
        title: L(
          "Opening a Hotel in Pattaya: License Checklist",
          "เปิดโรงแรมพัทยา: เช็กลิสต์ใบอนุญาต",
          "在芭提雅开酒店：执照清单",
          "Открытие отеля: чеклист лицензий",
        ),
        excerpt: L(
          "Updated 2026 guide for fire, health, and tourism authority permits.",
          "คู่มือ 2026 ใบอนุญาตดับเพลิง สุขภาพ และการท่องเที่ยว",
          "2026 更新指南：消防、卫生与旅游局许可。",
          "Гид 2026: пожарная, санитарная, туристическая лицензии.",
        ),
        footer: L("5 days ago", "5 วันที่แล้ว", "5 天前", "5 дней назад"),
        imageAlt: L(
          "Hotel business guide",
          "คู่มือธุรกิจโรงแรม",
          "酒店商业指南",
          "Гид для отельеров",
        ),
      },
      "Forbes Features Pattaya MICE Recovery": {
        badge: L("Global", "โลก", "国际", "Мир"),
        title: L(
          "Forbes Features Pattaya MICE Recovery",
          "Forbes รายงานฟื้นตัว MICE พัทยา",
          "Forbes 报道芭提雅 MICE 复苏",
          "Forbes о восстановлении MICE Pattaya",
        ),
        excerpt: L(
          "International press highlights Eastern Seaboard convention growth.",
          "สื่อนานาชาติชี้การเติบโตศูนย์ประชุม Eastern Seaboard",
          "国际媒体关注东海岸会议业增长。",
          "Мировая пресса о росте конвенций Eastern Seaboard.",
        ),
        footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
        imageAlt: L(
          "International coverage",
          "ข่าวนานาชาติ",
          "国际报道",
          "Международное освещение",
        ),
      },
    },
  },

  "business/openings": {
    spotlights: {
      fnb: {
        badge: L("Food & Drink", "อาหารและเครื่องดื่ม", "餐饮", "Еда и напитки"),
        title: L(
          "Chef-Led Bistro Opens on Naklua Soi 12",
          "Bistro เชฟนำเปิดซอย 12 นาเกลือ",
          "那库拉 Soi 12 主厨 Bistro 开业",
          "Bistro шефа: Naklua Soi 12",
        ),
        excerpt: L(
          "Modern Thai tasting menu — reservations required for opening week.",
          "เมนูชิมไทยสมัยใหม่ — สัปดาห์เปิดต้องจอง",
          "现代泰式品鉴菜单 — 开业周需预约。",
          "Дегустационное меню — бронь на неделю открытия.",
        ),
        cta: L("Dining Guide", "คู่มืออาหาร", "餐饮指南", "Гид по ресторанам"),
        imageAlt: L(
          "New restaurant interior",
          "ภายในร้านอาหารใหม่",
          "新餐厅内景",
          "Интерьер нового ресторана",
        ),
      },
      retail: {
        badge: L("Retail", "ค้าปลีก", "零售", "Ритейл"),
        title: L(
          "Beach Road: Lifestyle Concept Store",
          "Beach Road: ร้าน lifestyle concept",
          "海滩路：生活方式概念店",
          "Beach Road: lifestyle concept store",
        ),
        excerpt: L(
          "Local designers showcase swimwear and resort wear collections.",
          "ดีไซเนอร์ท้องถิ่นโชว์ชุดว่ายน้ำและ resort wear",
          "本地设计师展示泳装与度假服饰系列。",
          "Местные дизайнеры — купальники и resort wear.",
        ),
        cta: L("Shopping", "ช้อปปิ้ง", "购物", "Шопинг"),
        imageAlt: L(
          "Retail opening beach road",
          "เปิดร้านค้า Beach Road",
          "海滩路零售开业",
          "Открытие магазина Beach Road",
        ),
      },
      cowork: {
        badge: L("Workspace", "พื้นที่ทำงาน", "办公空间", "Коворкинг"),
        title: L(
          "Jomtien: Co-Working With Sea View",
          "จอมเทียน: Co-working วิวทะเล",
          "仲天：海景联合办公",
          "Jomtien: co-working с видом на море",
        ),
        excerpt: L(
          "Day passes from 299 THB — fiber internet and meeting pods.",
          "Day pass 299 บาท — ไฟเบอร์และห้องประชุม",
          "日票 299 泰铢 — 光纤网络与会议舱。",
          "Day pass от 299 бат — fiber и переговорки.",
        ),
        cta: L("Start a Business", "เริ่มธุรกิจ", "创业", "Открыть бизнес"),
        imageAlt: L(
          "Co-working space",
          "พื้นที่ co-working",
          "联合办公空间",
          "Коворкинг",
        ),
      },
    },
    articles: {
      "Rooftop Bar Debuts Above Central Pattaya": {
        badge: L("Nightlife", "ไนท์ไลฟ์", "夜生活", "Nightlife"),
        title: L(
          "Rooftop Bar Debuts Above Central Pattaya",
          "Rooftop Bar เปิดเหนือ Central Pattaya",
          "Central Pattaya 上方 Rooftop Bar 亮相",
          "Rooftop bar над Central Pattaya",
        ),
        excerpt: L(
          "360° views and live DJ Thursdays — dress code smart casual.",
          "วิว 360° และ DJ สดวันพฤหัส — แต่งตัว smart casual",
          "360° 景观，周四现场 DJ — smart casual 着装。",
          "360° вид, DJ по четвергам — smart casual.",
        ),
        footer: L("Today", "วันนี้", "今天", "Сегодня"),
        imageAlt: L(
          "Bar opening",
          "เปิดบาร์",
          "酒吧开业",
          "Открытие бара",
        ),
      },
      "Walking Street: Venue Relaunch After Renovation": {
        badge: L("Clubs", "คลับ", "俱乐部", "Клубы"),
        title: L(
          "Walking Street: Venue Relaunch After Renovation",
          "Walking Street: รีเปิดหลังรีโนเวท",
          "Walking Street：翻新后场馆重开",
          "Walking Street: рестарт после реновации",
        ),
        excerpt: L(
          "New sound system and fire-safety upgrades complete inspection.",
          "ระบบเสียงใหม่และมาตรฐานความปลอดภัยผ่านตรวจ",
          "新音响与消防升级已通过检查。",
          "Новый звук и пожарная безопасность — проверка пройдена.",
        ),
        footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
        imageAlt: L(
          "Club opening",
          "เปิดคลับ",
          "俱乐部开业",
          "Открытие клуба",
        ),
      },
      "Siam Yacht Club: Marina Lounge Expansion": {
        badge: L("Featured", "เด่น", "精选", "Featured"),
        title: L(
          "Siam Yacht Club: Marina Lounge Expansion",
          "Siam Yacht Club: ขยาย Marina Lounge",
          "Siam Yacht Club：Marina Lounge 扩建",
          "Siam Yacht Club: расширение lounge",
        ),
        excerpt: L(
          "Verified partner adds members-only sunset deck.",
          "พาร์ทเนอร์ที่ยืนยันแล้วเพิ่มดาดฟ้าพระอาทิตย์ตกสมาชิก",
          "认证合作方新增会员专属日落甲板。",
          "Партнёр добавил sunset deck только для членов.",
        ),
        footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
        imageAlt: L(
          "Featured business opening",
          "เปิดธุรกิจเด่น",
          "精选商户开业",
          "Открытие featured business",
        ),
      },
      "Opening a Restaurant: 2026 License Steps": {
        badge: L("Guide", "คู่มือ", "指南", "Гид"),
        title: L(
          "Opening a Restaurant: 2026 License Steps",
          "เปิดร้านอาหาร: ขั้นตอนใบอนุญาต 2026",
          "开餐厅：2026 执照步骤",
          "Ресторан: лицензии 2026",
        ),
        excerpt: L(
          "Health, alcohol, and music licenses explained for Pattaya operators.",
          "อธิบายใบอนุญาตสุขภาพ แอลกอฮอล์ และดนตรีสำหรับผู้ประกอบการพัทยา",
          "为芭提雅经营者解读卫生、酒类与音乐许可。",
          "Санитарная, алкогольная и музыкальная лицензии.",
        ),
        footer: L("4 days ago", "4 วันที่แล้ว", "4 天前", "4 дня назад"),
        imageAlt: L(
          "Restaurant business",
          "ธุรกิจร้านอาหาร",
          "餐饮生意",
          "Ресторанный бизнес",
        ),
      },
      "Boutique Hotel Soft-Opens in Wongamat": {
        badge: L("Hotels", "โรงแรม", "酒店", "Отели"),
        title: L(
          "Boutique Hotel Soft-Opens in Wongamat",
          "บูติกโรงแรมซอฟต์เปิดที่วงอามาด",
          "Wongamat 精品酒店软开业",
          "Бутик-отель в Wongamat",
        ),
        excerpt: L(
          "Adults-only property targets digital nomad long-stays.",
          "แนว adults-only สำหรับ digital nomad พักยาว",
          "成人专属物业面向数字游民长租。",
          "Adults-only для digital nomads.",
        ),
        footer: L("5 days ago", "5 วันที่แล้ว", "5 天前", "5 дней назад"),
        imageAlt: L(
          "Hotel soft opening",
          "ซอฟต์เปิดโรงแรม",
          "酒店软开业",
          "Soft opening отеля",
        ),
      },
      "Chamber Mixer: Meet New Operators": {
        badge: L("Networking", "เน็ตเวิร์ก", "社交", "Networking"),
        title: L(
          "Chamber Mixer: Meet New Operators",
          "Chamber Mixer: พบผู้ประกอบการใหม่",
          "商会联谊：结识新经营者",
          "Chamber mixer: новые операторы",
        ),
        excerpt: L(
          "Monthly meetup at Ocean Marina — register for April slot.",
          "พบกันรายเดือนที่ Ocean Marina — ลงทะเบียนคิวเมษายน",
          "Ocean Marina 每月聚会 — 报名四月场次。",
          "Ежемесячно в Ocean Marina — регистрация на апрель.",
        ),
        footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
        imageAlt: L(
          "Business networking",
          "เน็ตเวิร์กธุรกิจ",
          "商务社交",
          "Деловой networking",
        ),
      },
    },
  },
};
