import type { LanguageCode } from "@/lib/i18n/languages";
import { kohLarnBeachMaps } from "@/lib/design/koh-larn-beach-maps";
import { getKohLarnActivityImage } from "@/lib/design/koh-larn-activity-images";
import { L, t } from "@/lib/i18n/living-helpers";

export type KohLarnActivityId =
  | "jetski"
  | "banana-boat"
  | "parasailing"
  | "snorkeling"
  | "island-tour"
  | "paddle-kayak"
  | "sunset-boat";

export type KohLarnActivityItem = {
  id: KohLarnActivityId;
  name: string;
  where: string;
  priceRange: string;
  body: string;
  vibe?: string;
  tips?: string[];
  href: string;
  linkLabel: string;
  external: boolean;
  image: string;
};

export function getKohLarnActivities(lang: LanguageCode) {
  const whereLabel = t(lang, L("Best on", "เล่นที่", "推荐地点", "Где"));
  const priceRangeLabel = t(lang, L("Typical price", "ราคาโดยประมาณ", "大致价格", "Цена"));
  const openMaps = t(lang, L("Open on map", "เปิดแผนที่", "打开地图", "На карте"));
  const pickBeach = t(lang, L("Pick a beach", "เลือกหาด", "选海滩", "Выбрать пляж"));

  const items: KohLarnActivityItem[] = [
    {
      id: "jetski",
      name: t(lang, L("Jet ski", "เจ็ทสกี", "摩托艇", "Jet ski")),
      where: t(lang, L("Ta Waen Beach (most operators)", "หาดตาแหวน (ร้านเยอะสุด)", "塔湾海滩（运营商最多）", "Ta Waen")),
      priceRange: t(
        lang,
        L("~1,000–1,500 THB / 30 min · 2,000+ THB / hour", "~1,000–1,500 บาท/30 นาที · 2,000+ บาท/ชม.", "约1000–1500泰铢/30分钟，约2000+泰铢/小时", "~1000–1500 бат/30 мин"),
      ),
      vibe: t(lang, L("Thrilling — choppy on some days", "มันส์มาก — บางวันคลื่นแรง", "很刺激——部分日期浪大", "Адреналин — волна бывает")),
      body: t(
        lang,
        L(
          "The classic Koh Larn rush — busiest stalls on Ta Waen. Often cheaper than Phuket or Samui for a quick session.",
          "ไฮไลท์เกาะล้าน — ร้านเยอะที่หาดตาแหวน มักถูกกว่าภูเก็ต/สมุยสำหรับเล่นสั้น ๆ",
          "格兰岛经典项目，塔湾摊位最多，短途体验常比普吉/苏梅便宜。",
          "Классика Ко Лан на Ta Waen — часто дешевле, чем на Пхукете.",
        ),
      ),
      tips: [
        t(
          lang,
          L("Photo the jet ski before you ride — note existing scratches", "ถ่ายรูปเจ็ทสกีก่อนเล่น ดูรอยเก่า", "出发前拍照记录艇身旧痕", "Фото катера до старта"),
        ),
        t(lang, L("Agree price and time in writing first", "ตกลงราคาและเวลาเป็นลายลักษณ์อักษร", "书面确认价格与时间", "Цена письменно"),
        ),
        t(
          lang,
          L("Scams have improved but still ask at official-looking stalls", "โกงลดลงแล้ว แต่เลือกร้านที่ดูเป็นระบบ", "骗局有所减少，仍选正规摊位", "Выбирайте проверенные стойки"),
        ),
      ],
      href: kohLarnBeachMaps.tawaen.openHref,
      linkLabel: openMaps,
      external: true,
      image: getKohLarnActivityImage("jetski"),
    },
    {
      id: "banana-boat",
      name: t(lang, L("Banana boat", "บานาน่าโบ๊ต", "香蕉船", "Banana boat")),
      where: t(lang, L("Ta Waen & Samae beaches", "หาดตาแหวน & หาดแสม", "塔湾与 Samae 海滩", "Ta Waen и Samae")),
      priceRange: t(lang, L("~300–800 THB / person", "~300–800 บาท/คน", "约300–800泰铢/人", "~300–800 бат/чел.")),
      vibe: t(lang, L("Loud, splashy, pure fun", "กรี๊ดคอแตก สนุกมาก", "尖叫连连，纯玩乐", "Весело и мокро")),
      body: t(
        lang,
        L(
          "Drivers often “try” to flip you on purpose for laughs — hold on tight and wear swimwear.",
          "คนขับเรือมักจงใจเหวี่ยงเรือจนลูกค้าตกน้ำเพื่อความตื่นเต้น — จับราวหรือเชือกให้แน่น และควรใส่ชุดว่ายน้ำไว้ล่วงหน้า",
          "驾驶员常会故意甩人落水助兴——抓紧，建议穿泳衣。",
          "Водитель часто специально переворачивает лодку — держитесь крепче.",
        ),
      ),
      href: kohLarnBeachMaps.samae.openHref,
      linkLabel: openMaps,
      external: true,
      image: getKohLarnActivityImage("banana-boat"),
    },
    {
      id: "parasailing",
      name: t(lang, L("Parasailing", "พาราเซลลิ่ง", "滑翔伞", "Parasailing")),
      where: t(lang, L("Ta Waen & Pattaya speedboats", "หาดตาแหวน & เรือเร็วจากพัทยา", "塔湾及芭提雅快艇", "Ta Waen и катера с материка")),
      priceRange: t(lang, L("~800–1,500 THB", "~800–1,500 บาท", "约800–1500泰铢", "~800–1500 бат")),
      vibe: t(
        lang,
        L("Huge sea views — skip if you hate heights", "วิวทะเลสวยมาก — กลัวความสูงข้ามได้", "海景绝佳——恐高慎选", "Виды потрясающие — не для боязни высоты"),
      ),
      body: t(
        lang,
        L(
          "See turquoise water wrap the island from above — operators pause on windy days; life jacket is mandatory.",
          "มองทะเลสีฟ้ารอบเกาะจากฟ้า — วันลมแรงอาจหยุด ต้องใส่ชูชีพ",
          "俯瞰环岛碧蓝海水，大风可能停飞，须穿救生衣。",
          "Панорама с высоты — при ветре отменяют.",
        ),
      ),
      href: kohLarnBeachMaps.tawaen.openHref,
      linkLabel: openMaps,
      external: true,
      image: getKohLarnActivityImage("parasailing"),
    },
    {
      id: "snorkeling",
      name: t(lang, L("Snorkeling", "ดำน้ำตื้น", "浮潜", "Снорклинг")),
      where: t(lang, L("Tien, Nual & quieter coves", "หาดเทียน นวล & อ่าวเงียบ", "Tien、Nual 与安静海湾", "Tien, Nual")),
      priceRange: t(lang, L("Gear ~100–300 THB · tours from ~300 THB", "เช่าอุปกรณ์ ~100–300 บาท · ทัวร์จาก ~300", "装备约100–300泰铢，跟团约300起", "Снаряжение ~100–300 бат")),
      body: t(
        lang,
        L(
          "Not world-class reef, but excellent for an easy Bangkok weekend — small fish, some coral, clearer than Pattaya mainland.",
          "ไม่ใช่ปะการังระดับโลก แต่สำหรับทริปใกล้กรุงเทพคือโอเค — ปลาเล็ก ปะการังบางส่วน น้ำใสกว่าฝั่งพัทยา",
          "并非世界级珊瑚，但曼谷周末轻松可达——小鱼、部分珊瑚，比本岛更清。",
          "Не мировой риф, но для поездки из Бангкока отлично.",
        ),
      ),
      tips: [
        t(lang, L("Bring your own mask for hygiene", "พก mask เองจะสะอาดกว่า", "自备面镜更卫生", "Своя маска гигиеничнее")),
        t(lang, L("Best visibility Nov–Apr", "น้ำใสสุด พ.ย.–เม.ย.", "11–4月能见度最佳", "Лучше ноя–апр")),
      ],
      href: "#beach-guide",
      linkLabel: pickBeach,
      external: false,
      image: getKohLarnActivityImage("snorkeling"),
    },
    {
      id: "island-tour",
      name: t(lang, L("Snorkel + fishing sea tour", "ทัวร์ดำน้ำ + ตกปลา", "浮潜钓鱼海上游", "Тур: снорклинг и рыбалка")),
      where: t(lang, L("Book on the beach or pier", "จองริมหาดหรือท่าเรือ", "海滩或码头预订", "На пляже или причале")),
      priceRange: t(lang, L("~500–2,000+ THB", "~500–2,000+ บาท", "约500–2000+泰铢", "~500–2000+ бат")),
      body: t(
        lang,
        L(
          "Local combos are everywhere — often snorkel, fishing, paddle board, drone photos, and seafood lunch. Shared boats are cheaper; private costs more.",
          "ทัวร์ local เยอะมาก — มักรวมดำน้ำ ตกปลา SUP ถ่ายโดรน มื้อซีฟู้ด เรือรวมถูกกว่าเรือส่วนตัว",
          "岛上组合游很多——常含浮潜、钓鱼、桨板、无人机拍照与海鲜午餐，拼船更便宜。",
          "Много комбо-туров — снорклинг, рыбалка, SUP, обед.",
        ),
      ),
      href: kohLarnBeachMaps.tawaen.openHref,
      linkLabel: openMaps,
      external: true,
      image: getKohLarnActivityImage("island-tour"),
    },
    {
      id: "paddle-kayak",
      name: t(lang, L("Paddle board & kayak", "SUP & คายัค", "桨板与皮划艇", "SUP и каяк")),
      where: t(lang, L("Samae Beach (best photos)", "หาดแสม (ถ่ายรูปสวยสุด)", "Samae 海滩（拍照最佳）", "Samae")),
      priceRange: t(lang, L("~100–300 THB / hour", "~100–300 บาท/ชม.", "约100–300泰铢/小时", "~100–300 бат/час")),
      vibe: t(lang, L("Chill — calm water on good days", "ชิล — วันดีคลื่นไม่แรง", "悠闲——好天气浪不大", "Спокойно в штиль")),
      body: t(
        lang,
        L(
          "Turquoise shallows and Instagram-friendly shots — clear kayaks sometimes available for photo lovers.",
          "น้ำสีสวย ถ่ายรูปขึ้น — บางร้านมีคายัคใส",
          "浅海碧蓝，适合拍照——部分店家有透明皮划艇。",
          "Бирюзовая вода — иногда прозрачные каяки.",
        ),
      ),
      href: kohLarnBeachMaps.samae.openHref,
      linkLabel: openMaps,
      external: true,
      image: getKohLarnActivityImage("paddle-kayak"),
    },
    {
      id: "sunset-boat",
      name: t(lang, L("Private boat & sunset cruise", "เรือส่วนตัว / ล่องพระอาทิตย์ตก", "私人船与日落巡航", "Закатный круиз")),
      where: t(lang, L("Charter from Pattaya or island", "เช่าเรือจากพัทยาหรือเกาะ", "芭提雅或岛上包船", "Аренда с материка или острова")),
      priceRange: t(
        lang,
        L("From ~3,000 THB to yacht prices", "ตั้งแต่หลักพัน → ระดับ yacht", "约3000泰铢起至游艇价", "От ~3000 бат"),
      ),
      vibe: t(lang, L("Luxury mood — music, swim, photos", "สาย luxury — ดนตรี ว่ายน้ำ ถ่ายรูป", "轻奢氛围——音乐、游泳、拍照", "Люкс-настроение")),
      body: t(
        lang,
        L(
          "Sunset, drinks, and drone moments — price jumps with boat size. Pair with an evening at Samae if you day-trip.",
          "พระอาทิตย์ตก ดื่ม ถ่ายรูป — ราขึ้นกับขนาดเรือ คู่กับเย็นที่หาดแสมถ้ามาแบบ day trip",
          "日落、饮品与航拍——价格随船型上升，一日游可搭配 Samae 傍晚。",
          "Закат и напитки — цена зависит от яхты.",
        ),
      ),
      href: kohLarnBeachMaps.samae.openHref,
      linkLabel: openMaps,
      external: true,
      image: getKohLarnActivityImage("sunset-boat"),
    },
  ];

  return {
    title: t(
      lang,
      L("Water sports playground", "สนามกิจกรรมทางน้ำเกาะล้าน", "格兰岛水上乐园", "Водные активности Ко Лан"),
    ),
    subtitle: t(
      lang,
      L(
        "Book on the beach when you arrive — prices are typical ranges, not live bookings. Many activities cost less than Phuket or Samui.",
        "จองหน้างานที่หาด — ราคาเป็นช่วงคร่าว ๆ หลายอย่างถูกกว่าภูเก็ต/สมุยพอสมควร",
        "到海滩后现场预订——价格为参考区间，许多项目比普吉/苏梅更实惠。",
        "Бронь на пляже — часто дешевле, чем на Пхукете.",
      ),
    ),
    costsLink: t(lang, L("All typical costs", "ค่าใช้จ่ายทั้งหมด", "全部大致花费", "Все цены")),
    whereLabel,
    priceRangeLabel,
    beachMatrix: {
      title: t(lang, L("Which beach for what?", "หาดไหนเหมาะกับอะไร?", "哪片海滩适合什么？", "Какой пляж для чего?")),
      beachColumn: t(lang, L("Beach", "หาด", "海滩", "Пляж")),
      highlightColumn: t(lang, L("Best for", "เด่นเรื่อง", "适合", "Лучше всего")),
      rows: [
        {
          beach: t(lang, L("Ta Waen", "ตาแหวน", "塔湾", "Ta Waen")),
          highlight: t(lang, L("Most activities in one place", "กิจกรรมครบสุด", "活动最全", "Все активности")),
        },
        {
          beach: t(lang, L("Samae", "แสม", "Samae", "Samae")),
          highlight: t(lang, L("Beautiful water, chill swim, paddle photos", "น้ำสวย เล่นน้ำชิล ถ่ายรูป SUP", "水质好、悠闲游泳、桨板拍照", "Красиво, SUP")),
        },
        {
          beach: t(lang, L("Tien", "เทียน", "Tien", "Tien")),
          highlight: t(lang, L("Calm snorkeling", "ดำน้ำตื้นสงบ", "安静浮潜", "Снорклинг")),
        },
        {
          beach: t(lang, L("Nual", "นวล", "Nual", "Nual")),
          highlight: t(lang, L("Snorkeling + nature", "ดำน้ำ + ธรรมชาติ", "浮潜与自然", "Снорклинг и природа")),
        },
        {
          beach: t(lang, L("Ta Yai", "ตาใหญ่", "Ta Yai", "Ta Yai")),
          highlight: t(lang, L("Clear water, photos, fewer crowds", "น้ำใส ถ่ายรูป คนไม่แน่น", "水清、拍照、人较少", "Фото, меньше людей")),
        },
      ],
    },
    items,
    moodPicks: {
      title: t(lang, L("Pick by your vibe", "เลือกตามสไตล์", "按风格选", "По настроению")),
      subtitle: t(
        lang,
        L(
          "Mix and match — most visitors do two activities, not seven in one day.",
          "ผสมได้ — ส่วนใหญ่เล่น 2 อย่าง ไม่ใช่ 7 อย่างในวันเดียว",
          "可组合——多数人一天玩两项，不必全做。",
          "Обычно 2 активности за день, не все сразу.",
        ),
      ),
      groups: [
        {
          title: t(lang, L("Thrill seekers", "สายมันส์", "刺激派", "Адреналин")),
          picks: t(lang, L("Jet ski · Banana boat · Parasailing", "เจ็ทสกี · บานาน่า · พาราเซล", "摩托艇 · 香蕉船 · 滑翔伞", "Jet ski · Banana · Parasail")),
        },
        {
          title: t(lang, L("Chill & slow", "สายชิล", "悠闲派", "Спокойно")),
          picks: t(lang, L("Kayak · Paddle board · Snorkeling", "คายัค · SUP · ดำน้ำตื้น", "皮划艇 · 桨板 · 浮潜", "Каяк · SUP · Снорклинг")),
        },
        {
          title: t(lang, L("Photo & sunset", "สายถ่ายรูป", "拍照派", "Фото")),
          picks: t(
            lang,
            L("Clear kayak · Sunset boat · Parasailing", "คายัคใส · เรือพระอาทิตย์ตก · พาราเซล", "透明艇 · 日落船 · 滑翔伞", "Прозрачный каяк · Закат"),
          ),
        },
        {
          title: t(lang, L("Ocean lovers", "สายทะเล", "海洋派", "Море")),
          picks: t(lang, L("Snorkel tour · Fishing trip", "ทัวร์ดำน้ำ · ตกปลา", "浮潜团 · 海钓", "Снорклинг · Рыбалка")),
        },
      ],
    },
    safetyTips: {
      title: t(lang, L("Before you play", "ก่อนเล่นกิจกรรม", "玩之前", "Перед стартом")),
      items: [
        {
          id: "sun" as const,
          title: t(lang, L("Brutal sun", "แดดแรงมาก", "暴晒", "Солнце")),
          body: t(
            lang,
            L(
              "30 minutes in the water can burn — reapply SPF",
              "เล่นน้ำ 30 นาที = ไหม้ได้ ทากันแดดซ้ำ",
              "水里30分钟也会晒伤，勤补防晒",
              "30 мин = ожог, SPF",
            ),
          ),
        },
        {
          id: "waves" as const,
          title: t(lang, L("Waves change fast", "คลื่นเปลี่ยนเร็ว", "海浪多变", "Волна")),
          body: t(
            lang,
            L(
              "Especially in rainy season — check before you go",
              "โดยเฉพาะหน้าฝน — เช็กก่อนออก",
              "雨季尤甚，出发前确认",
              "В сезон дождей проверяйте",
            ),
          ),
        },
        {
          id: "vest" as const,
          title: t(lang, L("Wear life jackets", "ใส่ชูชีพ", "穿救生衣", "Жилеты")),
          body: t(
            lang,
            L(
              "Some rides look calm but the sea is stronger than it seems",
              "ดูชิลแต่ทะเลแรงกว่าที่คิด",
              "看起来平静，海水比想象中猛",
              "Море сильнее, чем кажется",
            ),
          ),
        },
        {
          id: "phone" as const,
          title: t(lang, L("Waterproof your phone", "กันน้ำมือถือ", "手机防水", "Телефон")),
          body: t(
            lang,
            L(
              "Phones go overboard all the time",
              "มือถือตกทะเลบ่อยมาก",
              "手机落水很常见",
              "Телефоны тонут часто",
            ),
          ),
        },
        {
          id: "bargain" as const,
          title: t(lang, L("Low season bargains", "low season ต่อราคาได้", "淡季可议价", "Торг")),
          body: t(
            lang,
            L(
              "Some stalls negotiate outside peak holidays",
              "บางร้านต่อราคาได้นอกช่วงเทศกาล",
              "非旺季部分摊位可讲价",
              "Вне пикового сезона торгуйтесь",
            ),
          ),
        },
      ],
    },
    firstTimeCombo: {
      title: t(lang, L("Best value first visit", "คุ้มสุดสำหรับครั้งแรก", "首次到访最划算组合", "Первый раз — лучший микс")),
      body: t(
        lang,
        L(
          "Morning songthaew or bike between beaches → afternoon paddle at Samae → sunset views → seafood dinner. Adventure + chill + island mood in one day.",
          "เช้าสองแถว/มอเตอร์เที่ยวหาด → บ่าย paddle ที่แสม → ชมพระอาทิตย์ตก → มื้อเย็นซีฟู้ด ได้ทั้ง adventure + chill + ฟีลเกาะ",
          "上午双条车/摩托换滩 → 下午 Samae 桨板 → 看日落 → 海鲜晚餐，一天集齐刺激与悠闲。",
          "Утро — пляжи, день — SUP на Samae, вечер — закат и морепродукты.",
        ),
      ),
    },
  };
}
