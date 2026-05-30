import type { NewsCategoryBodySet } from "@/lib/i18n/messages/news-bodies-factory";
import { L } from "@/lib/i18n/living-helpers";

export const newsLocalBodies: Record<string, NewsCategoryBodySet> = {
  "local-news/crime": {
    spotlights: {
      "jomtien-raid": {
        badge: L("Police & Crime", "ตำรวจและอาชญากรรม", "警务与犯罪", "Полиция и преступность"),
        title: L(
          "Jomtien Villa Raid: 2M THB Seized",
          "บุกค้นวิลล่าจอมเทียน: ยึด 2 ล้านบาท",
          "仲天别墅突袭：查获 200 万泰铢",
          "Jomtien: изъято 2 млн бат",
        ),
        excerpt: L(
          "Underground casino operation dismantled after weeks of surveillance — 14 detained for questioning.",
          "ปิดคาสิโนใต้ดินหลังสืบสวนหลายสัปดาห์ — ควบคุมตัว 14 คนเพื่อสอบสวน",
          "经数周监视后捣毁地下赌场 — 14 人拘留问话。",
          "Подпольное казино закрыто после слежки — 14 задержаны.",
        ),
        cta: L("Case Details", "รายละเอียดคดี", "案件详情", "Детали дела"),
        imageAlt: L(
          "Police operation at night in Pattaya",
          "ปฏิบัติการตำรวจกลางคืนในพัทยา",
          "芭提雅夜间警务行动",
          "Полицейская операция ночью в Pattaya",
        ),
      },
      "tourist-police": {
        badge: L("Tourist Police", "Tourist Police", "旅游警察", "Tourist Police"),
        title: L(
          "Bali Hai Pier: Mobile Unit Deployed",
          "แหลมบาลีฮาย: ส่งหน่วยเคลื่อนที่",
          "Bali Hai 码头：部署移动单位",
          "Bali Hai: мобильный пост",
        ),
        excerpt: L(
          "Bilingual officers on patrol during peak ferry hours to Koh Larn — report scams via 1155 hotline.",
          "เจ้าหน้าที่สองภาษาลาดตระเวนช่วงเรือไปเกาะล้าน — แจ้งมิจฉาชีพที่ 1155",
          "格兰岛渡轮高峰双语警员巡逻 — 诈骗请拨 1155。",
          "Двуязычные патрули на паромы к Koh Larn — мошенничество: 1155.",
        ),
        cta: L("Emergency Numbers", "เบอร์ฉุกเฉิน", "紧急号码", "Экстренные номера"),
        imageAlt: L(
          "Pattaya tourist area at night",
          "ย่านท่องเที่ยวพัทยายามค่ำ",
          "芭提雅旅游区夜景",
          "Туристическая зона Pattaya ночью",
        ),
      },
      scams: {
        badge: L("Public Safety", "ความปลอดภัยสาธารณะ", "公共安全", "Общественная безопасность"),
        title: L(
          "Jet-Ski Scam Alert: Beach Road Advisory",
          "เตือนมิจฉาชีพ Jet-Ski: แนะนำ Beach Road",
          "摩托艇诈骗预警：海滩路提示",
          "Jet-Ski: предупреждение Beach Road",
        ),
        excerpt: L(
          "City officials warn tourists to use licensed operators only — verify price lists before payment.",
          "เทศบาลเตือนใช้ผู้ให้บริการที่ได้ใบอนุญาต — ตรวจราคาก่อนจ่าย",
          "市政提醒仅使用持证运营商 — 付款前核对价目表。",
          "Только лицензированные операторы — проверьте цены.",
        ),
        cta: L("Scam Alerts", "แจ้งเตือนมิจฉาชีพ", "诈骗预警", "Предупреждения"),
        imageAlt: L(
          "Pattaya beach and water activities",
          "ชายหาดและกิจกรรมทางน้ำพัทยา",
          "芭提雅海滩与水上活动",
          "Пляж и водные активности Pattaya",
        ),
      },
    },
    articles: {
      "Central Pattaya: Counterfeit Goods Ring Broken Up": {
        badge: L("Investigation", "สืบสวน", "调查", "Расследование"),
        title: L(
          "Central Pattaya: Counterfeit Goods Ring Broken Up",
          "กลางพัทยา: ทลายเครือข่ายของปลอม",
          "芭提雅市中心：捣毁假货团伙",
          "Центр Pattaya: сеть подделок",
        ),
        excerpt: L(
          "Royal Thai Police seize luxury watch replicas worth 8M THB from Naklua warehouse.",
          "ตำรวจยึดนาฬิกาแบรนด์เนมปลอมมูลค่า 8 ล้านบาทจากคลังนาเกลือ",
          "皇家泰国警察从那库拉仓库查获价值 800 万泰铢的名表仿品。",
          "Изъяты реплики часов на 8 млн бат из Naklua.",
        ),
        footer: L("3 hours ago", "3 ชม.ที่แล้ว", "3 小时前", "3 ч назад"),
        imageAlt: L("Police checkpoint Pattaya", "ด่านตรวจตำรวจพัทยา", "芭提雅警察检查站", "КПП Pattaya"),
      },
      "DUI Checkpoint: 12 Arrests on Sukhumvit Weekend": {
        badge: L("Related", "ที่เกี่ยวข้อง", "相关", "Связанное"),
        title: L(
          "DUI Checkpoint: 12 Arrests on Sukhumvit Weekend",
          "จุดตรวจเมา: จับ 12 คนสุขุมวิทสุดสัปดาห์",
          "酒驾检查点：周末素坤逸 12 人被捕",
          "DUI на Sukhumvit: 12 арестов",
        ),
        excerpt: L(
          "Chonburi highway police increase breathalyzer tests near Walking Street exits.",
          "ตำรวจทางหลวงชลบุรีเพิ่มตรวจแอลกอฮอล์ใกล้ทางออก Walking Street",
          "春武里公路警察在 Walking Street 出口附近加强呼气检测。",
          "Больше алкотестов у выездов с Walking Street.",
        ),
        footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
        imageAlt: L("Traffic incident Sukhumvit", "อุบัติเหตุจราจรสุขุมวิท", "素坤逸交通事故", "ДТП на Sukhumvit"),
      },
      "Romance Scam Warning: Dating App Reports Rise": {
        badge: L("Advisory", "คำแนะนำ", "提示", "Рекомендация"),
        title: L(
          "Romance Scam Warning: Dating App Reports Rise",
          "เตือนมิจฉาชีพความรัก: รายงานจากแอปหาคู่เพิ่ม",
          "恋爱诈骗预警：交友 App 举报上升",
          "Romance scam: больше жалоб",
        ),
        excerpt: L(
          "Tourist Police Pattaya publish bilingual guide for victims — do not send money overseas.",
          "Tourist Police พัทยาเผยคู่มือสองภาษาสำหรับผู้เสียหาย — อย่าโอนเงินต่างประเทศ",
          "芭提雅旅游警察发布双语受害者指南 — 勿向境外汇款。",
          "Tourist Police: двуязычный гид — не переводите деньги за границу.",
        ),
        footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
        imageAlt: L("Tourist advisory", "คำแนะนำนักท่องเที่ยว", "游客提示", "Совет туристам"),
      },
      "CCTV Expansion: Beach Road Cameras Go Live": {
        badge: L("Smart City", "Smart City", "智慧城市", "Smart City"),
        title: L(
          "CCTV Expansion: Beach Road Cameras Go Live",
          "ขยาย CCTV: กล้อง Beach Road เปิดใช้",
          "监控扩容：海滩路摄像头上线",
          "CCTV: камеры Beach Road",
        ),
        excerpt: L(
          "City Hall links 120 new feeds to central monitoring to deter street crime.",
          "ศาลากลางเชื่อมฟีดใหม่ 120 จุดเพื่อลดอาชญากรรมบนถนน",
          "市政厅将 120 路新信号接入中央监控以震慑街头犯罪。",
          "120 новых камер подключены к центральному мониторингу.",
        ),
        footer: L("4 days ago", "4 วันที่แล้ว", "4 天前", "4 дня назад"),
        imageAlt: L("Pattaya city surveillance", "ระบบเฝ้าระวังเมืองพัทยา", "芭提雅城市监控", "Видеонаблюдение Pattaya"),
      },
      "Save These Numbers: Tourist Police 1155": {
        badge: L("Emergency", "ฉุกเฉิน", "紧急", "Экстренно"),
        title: L(
          "Save These Numbers: Tourist Police 1155",
          "บันทึกเบอร์นี้: Tourist Police 1155",
          "保存这些号码：旅游警察 1155",
          "Сохраните номер: Tourist Police 1155",
        ),
        excerpt: L(
          "Quick reference for medical, fire, and marine police in Pattaya Bay.",
          "อ้างอิงด่วนสำหรับการแพทย์ ดับเพลิง และตำรวจทางน้ำในอ่าวพัทยา",
          "芭提雅湾医疗、消防与水上警察快速参考。",
          "Медицина, пожарные и морская полиция в заливе Pattaya.",
        ),
        footer: L("Reference", "อ้างอิง", "参考", "Справка"),
        imageAlt: L("Emergency contact", "ติดต่อฉุกเฉิน", "紧急联系", "Экстренные контакты"),
      },
      "Overstay Crackdown: Random Checks at Condos": {
        badge: L("Immigration", "ตม.", "移民", "Immigration"),
        title: L(
          "Overstay Crackdown: Random Checks at Condos",
          "กวาด overstay: ตรวจคอนโดแบบสุ่ม",
          "逾期居留严打：公寓随机检查",
          "Overstay: проверки в кондо",
        ),
        excerpt: L(
          "Immigration confirms spot inspections continue in Jomtien — carry passport copies.",
          "ตม.ยืนยันตรวจจุดในจอมเทียนต่อ — ควรพกสำเนาพาสปอร์ต",
          "移民局确认 Jomtien 继续 spot 检查 — 请携带护照复印件。",
          "Immigration продолжает проверки в Jomtien — носите копии паспорта.",
        ),
        footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
        imageAlt: L("Immigration security", "ความปลอดภัยตม.", "移民安全", "Immigration"),
      },
    },
  },

  "local-news/accidents": {
    spotlights: {
      sukhumvit: {
        badge: L("Traffic", "จราจร", "交通", "Трафик"),
        title: L(
          "Sukhumvit Collision: Lanes Reopening",
          "ชนกันสุขุมวิท: เปิดเลนคืน",
          "素坤逸碰撞：车道恢复通行",
          "Sukhumvit: полосы открываются",
        ),
        excerpt: L(
          "Tow trucks on scene — expect 45-minute delays toward Bangkok until 11:00.",
          "รถลากอยู่ที่เกิดเหตุ — คาดหน่วง 45 นาทีไปกรุงเทพจนถึง 11:00",
          "拖车现场处置 — 往曼谷方向预计延误 45 分钟至 11:00。",
          "Эвакuators на месте — задержки к Bangkok до 11:00.",
        ),
        cta: L("Detour Map", "แผนเส้นทางเลี่ยง", "绕行地图", "Объезд"),
        imageAlt: L(
          "Multi-vehicle accident scene",
          "ที่เกิดเหตุรถชนกันหลายคัน",
          "多车事故现场",
          "Место ДТП",
        ),
      },
      ferry: {
        badge: L("Marine", "ทางน้ำ", "海上", "Морской"),
        title: L(
          "Bali Hai Pier: Minor Ferry Delay",
          "แหลมบาลีฮาย: เรือล่าช้าเล็กน้อย",
          "Bali Hai 码头：渡轮小幅延误",
          "Bali Hai: небольшая задержка паромов",
        ),
        excerpt: L(
          "Strong afternoon gusts slow Koh Larn services — wear life jackets as directed.",
          "ลมแรงช่วงบ่ายทำให้เรือเกาะล้านช้า — สวมเสื้อชูชีพตามแนะนำ",
          "午后强风减缓 Koh Larn 班次 — 请按要求穿救生衣。",
          "Порывы ветра замедляют рейсы на Koh Larn — наденьте спасжилеты.",
        ),
        cta: L("Koh Larn Guide", "คู่มือเกาะล้าน", "格兰岛指南", "Гид Koh Larn"),
        imageAlt: L("Ferry Pattaya bay", "เรือข้ามอ่าวพัทยา", "芭提雅湾渡轮", "Паром в заливе Pattaya"),
      },
      motorbike: {
        badge: L("Safety", "ความปลอดภัย", "安全", "Безопасность"),
        title: L(
          "Beach Road: Motorbike Incidents Up 8%",
          "Beach Road: อุบัติเหตุมอเตอร์ไซค์ +8%",
          "海滩路：摩托车事故升 8%",
          "Beach Road: +8% ДТП на мото",
        ),
        excerpt: L(
          "Police urge helmet use and sober riding during festival weekends.",
          "ตำรวจเรียกร้องสวมหมวกและไม่เมาในช่วงเทศกาล",
          "警方呼吁节庆周末戴头盔、不酒驾。",
          "Шлемы и трезвая езда в праздничные выходные.",
        ),
        cta: L("Driving Guide", "คู่มือขับขี่", "驾驶指南", "Гид по вождению"),
        imageAlt: L(
          "Pattaya beach road traffic",
          "จราจรถนน Beach Road พัทยา",
          "芭提雅海滩路交通",
          "Трафик Beach Road",
        ),
      },
    },
    articles: {
      "Walking Street: Pedestrian Struck, Road Partially Closed": {
        badge: L("Breaking", "ด่วน", "突发", "Срочно"),
        title: L(
          "Walking Street: Pedestrian Struck, Road Partially Closed",
          "Walking Street: รถชนคนเดิน ปิดบางช่วง",
          "Walking Street：行人被撞，部分封路",
          "Walking Street: сбили пешехода",
        ),
        excerpt: L(
          "Medics transport victim to Bangkok Hospital Pattaya — investigation ongoing.",
          "แพทย์ส่งผู้บาดเจ็บไป Bangkok Hospital Pattaya — สืบสวนต่อ",
          "医护人员将伤者送至 Bangkok Hospital Pattaya — 调查进行中。",
          "Пострадавшего доставили в Bangkok Hospital Pattaya — расследование.",
        ),
        footer: L("1 hour ago", "1 ชม.ที่แล้ว", "1 小时前", "1 ч назад"),
        imageAlt: L("Road accident Pattaya", "อุบัติเหตุถนนพัทยา", "芭提雅道路交通事故", "ДТП Pattaya"),
      },
      "Thappraya Road: Night Lane Closures Continue": {
        badge: L("Road Works", "งานถนน", "道路施工", "Дорожные работы"),
        title: L(
          "Thappraya Road: Night Lane Closures Continue",
          "ถนนทัพพระยา: ปิดเลนกลางคืนต่อเนื่อง",
          "Thappraya 路：夜间封 lane 持续",
          "Thappraya Road: ночные перекрытия",
        ),
        excerpt: L(
          "Drainage project causes slow traffic 22:00–05:00 through May.",
          "โครงการท่อระบายทำให้จราจรช้า 22:00–05:00 จนถึงพฤษภา",
          "排水工程致 22:00–05:00 通行缓慢，持续至五月。",
          "Дренаж — медленный трафик 22:00–05:00 до мая.",
        ),
        footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
        imageAlt: L("Road construction", "งานก่อสร้างถนน", "道路施工", "Стройка"),
      },
      "Songthaew Routes: Updated Beach Loop Schedule": {
        badge: L("Transport", "ขนส่ง", "交通", "Транспорт"),
        title: L(
          "Songthaew Routes: Updated Beach Loop Schedule",
          "สายรถสองแถว: ตารางวนชายหาดใหม่",
          "双条车线路：海滩环线时刻更新",
          "Songthaew: новое расписание",
        ),
        excerpt: L(
          "Drivers post new fares near Central Festival — confirm before boarding.",
          "คนขับประกาศค่าโดยสารใหม่ใกล้ Central Festival — ยืนยันก่อนขึ้น",
          "Central Festival 附近司机张贴新票价 — 上车前确认。",
          "Новые тарифы у Central Festival — уточните перед посадкой.",
        ),
        footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
        imageAlt: L("Pattaya transport", "ขนส่งพัทยา", "芭提雅交通", "Транспорт Pattaya"),
      },
      "DUI Patrols Increased After Holiday Weekend": {
        badge: L("Police", "ตำรวจ", "警方", "Полиция"),
        title: L(
          "DUI Patrols Increased After Holiday Weekend",
          "เพิ่มลาดตระเวนเมาหลังวันหยุดยาว",
          "长假后加强酒驾巡逻",
          "Больше DUI-патрулей после праздников",
        ),
        excerpt: L(
          "Checkpoint locations rotate nightly on Sukhumvit and Pattaya Klang.",
          "จุดตรวจสลับทุกคืนบนสุขุมวิทและพัทยากลาง",
          "素坤逸与 Pattaya Klang 检查站每晚轮换。",
          "КПП меняются ночью на Sukhumvit и Pattaya Klang.",
        ),
        footer: L("3 days ago", "3 วันที่แล้ว", "3 天前", "3 дня назад"),
        imageAlt: L("Police at accident scene", "ตำรวจที่เกิดเหตุ", "警方在事故现场", "Полиция на месте ДТП"),
      },
      "Koh Larn: Jetty Repairs Complete, Ferries Normal": {
        badge: L("Marine", "ทางน้ำ", "海上", "Морской"),
        title: L(
          "Koh Larn: Jetty Repairs Complete, Ferries Normal",
          "เกาะล้าน: ซ่อมท่าเสร็จ เรือปกติ",
          "Koh Larn：码头修竣，渡轮恢复正常",
          "Koh Larn: причал готов, паромы в норме",
        ),
        excerpt: L(
          "Tien Beach pier reopening restores full day-trip capacity from Bali Hai.",
          "เปิดท่าหาดเทียนคืนความจุทริปวันเต็มจาก Bali Hai",
          "Tien Beach 码头重开，Bali Hai 一日游运力恢复。",
          "Причал Tien Beach — полная вместимость из Bali Hai.",
        ),
        footer: L("5 days ago", "5 วันที่แล้ว", "5 天前", "5 дней назад"),
        imageAlt: L("Koh Larn boat", "เรือเกาะล้าน", "格兰岛船只", "Лодка Koh Larn"),
      },
      "What to Do After a Road Accident in Thailand": {
        badge: L("Guide", "คู่มือ", "指南", "Гид"),
        title: L(
          "What to Do After a Road Accident in Thailand",
          "ทำอย่างไรหลังอุบัติเหตุบนถนนในไทย",
          "泰国道路交通事故后怎么办",
          "Что делать после ДТП в Таиланде",
        ),
        excerpt: L(
          "Step-by-step for insurance claims and police reports in Chonburi.",
          "ขั้นตอนเคลมประกันและแจ้งตำรวจในชลบุรี",
          "春武里保险理赔与报警分步指南。",
          "Страховка и полиция в Chonburi — по шагам.",
        ),
        footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
        imageAlt: L("Emergency guide", "คู่มือฉุกเฉิน", "应急指南", "Экстренный гид"),
      },
    },
  },

  "local-news/infrastructure": {
    spotlights: {
      "beach-road": {
        badge: L("Beach Road", "Beach Road", "海滩路", "Beach Road"),
        title: L(
          "Phase 1: Central to Walking Street",
          "เฟส 1: กลางเมืองถึง Walking Street",
          "一期：市中心至 Walking Street",
          "Фаза 1: центр — Walking Street",
        ),
        excerpt: L(
          "Night work 22:00–05:00 — follow digital signage for pedestrian paths.",
          "งานกลางคืน 22:00–05:00 — ตามป้ายดิจิทัลสำหรับทางเดิน",
          "夜间施工 22:00–05:00 — 按电子指示牌走人行通道。",
          "Ночные работы 22:00–05:00 — следуйте указателям.",
        ),
        cta: L("City Updates", "ข่าวเมือง", "城市动态", "Новости города"),
        imageAlt: L(
          "Beach Road waterfront works",
          "งานริมน้ำ Beach Road",
          "海滩路滨水施工",
          "Работы на Beach Road",
        ),
      },
      drainage: {
        badge: L("Drainage", "ระบายน้ำ", "排水", "Дренаж"),
        title: L(
          "Jomtien Pump Station Upgrade",
          "อัปเกรดสถานีสูบน้ำจอมเทียน",
          "仲天泵站升级",
          "Jomtien: модернизация насосной",
        ),
        excerpt: L(
          "Flood-prone sois near Thappraya get new pumps before monsoon peak.",
          "ซอยเสี่ยงน้ำท่วมใกล้ทัพพระยาได้ปั๊มใหม่ก่อนฤดูฝนพีค",
          "Thappraya 附近易涝巷在雨季高峰前安装新泵。",
          "Новые насосы в зонах риска у Thappraya до муссона.",
        ),
        cta: L("Utility Map", "แผนสาธารณูปโภค", "公用设施地图", "Карта коммунальных"),
        imageAlt: L("Drainage works Pattaya", "งานระบายน้ำพัทยา", "芭提雅排水工程", "Дренаж Pattaya"),
      },
      wifi: {
        badge: L("Utilities", "สาธารณูปโภค", "公用事业", "Коммунальные"),
        title: L(
          "Public Wi-Fi: 200 New Access Points",
          "Wi-Fi สาธารณะ: จุดใหม่ 200 จุด",
          "公共 Wi-Fi：新增 200 接入点",
          "Wi-Fi: 200 новых точек",
        ),
        excerpt: L(
          "Free zones expand to Wongamat and Naklua promenades.",
          "โซนฟรีขยายถึงทางเดินริมทะเลวงอามาดและนาเกลือ",
          "免费区扩展至 Wongamat 与 Naklua 海滨步道。",
          "Бесплатные зоны: Wongamat и Naklua.",
        ),
        cta: L("Coverage Map", "แผนครอบคลุม", "覆盖地图", "Карта покрытия"),
        imageAlt: L("Pattaya smart city", "Smart City พัทยา", "芭提雅智慧城市", "Smart City Pattaya"),
      },
    },
    articles: {
      "Sukhumvit U-Turn Widening: Delays Through May": {
        badge: L("Roads", "ถนน", "道路", "Дороги"),
        title: L(
          "Sukhumvit U-Turn Widening: Delays Through May",
          "ขยายยูเทิร์นสุขุมวิท: หน่วงจนถึงพฤษภา",
          "素坤逸掉头拓宽：延误至五月",
          "Sukhumvit: задержки до мая",
        ),
        excerpt: L(
          "Third lane added at North Pattaya interchange — use Soi 50 alternate.",
          "เพิ่มเลนที่ทาง interchange เหนือพัทยา — ใช้ทางเลี่ยงซอย 50",
          "北芭提雅立交增第三车道 — 请走 Soi 50 绕行。",
          "Третья полоса на съезде — объезд Soi 50.",
        ),
        footer: L("Today", "วันนี้", "今天", "Сегодня"),
        imageAlt: L("Sukhumvit road widening", "ขยายถนนสุขุมวิท", "素坤逸拓宽施工", "Расширение Sukhumvit"),
      },
      "Walking Street: Smart Lighting Rollout": {
        badge: L("Nightlife", "ไนท์ไลฟ์", "夜生活", "Ночная жизнь"),
        title: L(
          "Walking Street: Smart Lighting Rollout",
          "Walking Street: ติดตั้งไฟอัจฉริยะ",
          "Walking Street：智能照明部署",
          "Walking Street: умное освещение",
        ),
        excerpt: L(
          "LED poles and emergency call boxes installed along full length.",
          "ติดเสา LED และปุ่มฉุกเฉินตลอดทาง",
          "全线安装 LED 灯杆与紧急呼叫箱。",
          "LED-столбы и SOS-боксы на всей длине.",
        ),
        footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
        imageAlt: L(
          "Walking Street infrastructure",
          "โครงสร้าง Walking Street",
          "Walking Street 基建",
          "Инфраструктура Walking Street",
        ),
      },
      "Naklua Rezoning: Height Caps for New Towers": {
        badge: L("Planning", "ผังเมือง", "规划", "Планирование"),
        title: L(
          "Naklua Rezoning: Height Caps for New Towers",
          "ปรับโซนนาเกลือ: จำกัดความสูงตึกใหม่",
          "那库拉重新分区：新塔限高",
          "Naklua: лимиты высоты",
        ),
        excerpt: L(
          "Committee limits future high-rises to protect sea-view corridors.",
          "คณะกรรมการจำกัดตึกสูงเพื่อรักษาเส้นสายตามทะเล",
          "委员会限制未来高层建筑以保护海景通廊。",
          "Лимиты высоты для сохранения видов на море.",
        ),
        footer: L("3 days ago", "3 วันที่แล้ว", "3 天前", "3 дня назад"),
        imageAlt: L("Urban planning", "ผังเมือง", "城市规划", "Градостроение"),
      },
      "Monsoon Prep: Storm Drain Clearing Underway": {
        badge: L("Weather", "สภาพอากาศ", "天气", "Погода"),
        title: L(
          "Monsoon Prep: Storm Drain Clearing Underway",
          "เตรียมมรสุม: ล้างท่อระบายน้ำ",
          "季风准备：清理雨水排水沟",
          "Муссон: очистка ливневок",
        ),
        excerpt: L(
          "Residents asked to remove debris from soi drains before May rains.",
          "ขอให้ประชาชนเก็บขยะออกจากท่อซอยก่อนฝนพฤษภา",
          "请居民在五月降雨前清理巷内排水沟杂物。",
          "Уберите мусор из ливневок до майских дождей.",
        ),
        footer: L("4 days ago", "4 วันที่แล้ว", "4 天前", "4 дня назад"),
        imageAlt: L("Storm preparation", "เตรียมพร้อมพายุ", "防风暴准备", "Подготовка к шторму"),
      },
      "Thappraya Detours: Allow Extra Commute Time": {
        badge: L("Traffic", "จราจร", "交通", "Трафик"),
        title: L(
          "Thappraya Detours: Allow Extra Commute Time",
          "ทัพพระยาเลี่ยงเส้นทาง: เผื่อเวลาเดินทาง",
          "Thappraya 绕行：请预留通勤时间",
          "Thappraya: закладывайте время",
        ),
        excerpt: L(
          "Grab recommends rear entrance drop-off for Jomtien Immigration visitors.",
          "Grab แนะนำส่งที่ทางเข้าหลังสำหรับผู้ไปตม.จอมเทียน",
          "Grab 建议 Jomtien 移民局访客在后门下车。",
          "Grab: высадка у заднего входа к Immigration Jomtien.",
        ),
        footer: L("5 days ago", "5 วันที่แล้ว", "5 天前", "5 дней назад"),
        imageAlt: L("Traffic detour", "เส้นทางเลี่ยงจราจร", "交通绕行", "Объезд"),
      },
      "500M THB Beach Road Package Approved": {
        badge: L("Smart City", "Smart City", "智慧城市", "Smart City"),
        title: L(
          "500M THB Beach Road Package Approved",
          "อนุมัติแพ็กเกจ Beach Road 500 ล้านบาท",
          "批准 5 亿泰铢 Beach Road 工程包",
          "Пакет Beach Road: 500 млн бат",
        ),
        excerpt: L(
          "Full smart-city scope includes Wi-Fi, cabling, and wayfinding kiosks.",
          "ขอบเขต Smart City ครบ Wi-Fi สายเคเบิล และ kiosk นำทาง",
          "完整智慧城市范围含 Wi-Fi、线缆与导视 kiosk。",
          "Wi-Fi, кабели и навигационные киоски.",
        ),
        footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
        imageAlt: L("Pattaya city project", "โครงการเมืองพัทยา", "芭提雅城市项目", "Городской проект Pattaya"),
      },
    },
  },
};
