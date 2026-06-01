import type { LanguageCode } from "@/lib/i18n/languages";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { L, t } from "@/lib/i18n/living-helpers";
import { beachMaps } from "@/lib/design/beach-maps";
import type { BeachDetailSlug } from "@/lib/explore/beach-detail-slugs";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { getMainBeachesPage } from "@/lib/i18n/messages/explore-beaches";
import { getBeachWhenSlots } from "@/lib/i18n/messages/explore-beach-when-slots";
import { beachNearbyImages } from "@/lib/design/beach-nearby-images";

type NearbyItem = { name: string; text: string };

function getSlugExtras(lang: LanguageCode, slug: BeachDetailSlug) {
  const c = getExploreCommon(lang);
  const shared = {
    whenToVisit: {
      title: t(lang, L("When to visit", "เวลาไป", "何时前往", "Когда ехать")),
    },
    map: {
      title: t(lang, L("Getting there", "การเดินทาง", "如何到达", "Как добраться")),
      openMaps: t(lang, L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps")),
    },
    nearby: {
      title: t(lang, L("Nearby", "ใกล้เคียง", "周边", "Рядом")),
    },
    costs: {
      title: t(lang, L("Typical costs", "ค่าใช้จ่ายโดยประมาณ", "大致花费", "Цены")),
    },
    safety: {
      title: t(lang, L("Good to know", "ควรรู้", "须知", "Важно")),
    },
    related: { title: c.alsoExplore },
    backToAll: t(lang, L("All main beaches", "ชายหาดหลักทั้งหมด", "全部主海滩", "Все пляжи")),
  };

  if (slug === "pattaya-beach") {
    return {
      ...shared,
      heroDescription: t(
        lang,
        L(
          "Pattaya's central bay — busy promenade, malls within walking distance, and the classic sunset-over-the-bay photo.",
          "อ่าวใจกลางพัทยา — ถนนเลียบชายหาดคึกคัก ห้างเดินถึง วิวพระอาทิตย์ตกคลาสสิก",
          "芭提雅中心海湾：热闹海滨大道、步行可达商场、经典海湾日落。",
          "Центральная бухта — набережная, ТРЦ, закаты.",
        ),
      ),
      whenToVisit: {
        ...shared.whenToVisit,
        body: t(
          lang,
          L(
            "Sunrise to 10 AM for quieter sand; late afternoon for golden light and fewer jet skis. Evenings bring nightlife energy near Walking Street — expect crowds Fri–Sun.",
            "เช้า–10:00 คนน้อย เย็นแสงสวย เจ็ทสกีลด — ค่ำใกล้ Walking Street คึกคัก ศ–อา",
            "清晨至10点较安静；傍晚光线好。周五至周日近 Walking Street 较热闹。",
            "До 10:00 тише; вечер — закаты. Пт–Вс многолюдно у Walking Street.",
          ),
        ),
      },
      map: {
        ...shared.map,
        body: t(
          lang,
          L(
            "Blue songthaews run Beach Road (≈10–20 THB short hops). Grab/Bolt pick up at Central Festival and Royal Garden. Walking Street anchors the south end.",
            "สองแถวสีฟ้า Beach Rd ~10–20 บาท Grab รับที่ Central Festival / Royal Garden ปลายทาง Walking Street",
            "蓝色双条车沿 Beach Road（短途约10–20泰铢）。Grab 可在 Central Festival 上车。",
            "Songthaew по Beach Rd; Grab у Central Festival.",
          ),
        ),
      },
      nearby: {
        ...shared.nearby,
        items: [
          {
            name: t(lang, L("Walking Street", "Walking Street", "Walking Street", "Walking Street")),
            text: t(
              lang,
              L("Night market & entertainment — 10 min songthaew south along Beach Rd.", "ไนท์มาร์เก็ต — สองแถวใต้ Beach Rd ~10 นาที", "夜市娱乐，双条车南下约10分钟", "Ночной рынок — songthaew на юг."),
            ),
          },
          {
            name: t(lang, L("Central Festival", "เซ็นทรัล เฟสติวัล", "Central Festival", "Central Festival")),
            text: t(
              lang,
              L("Oceanfront mall, cinema, dining — direct beach access.", "ห้างริมทะเล โรงหนัง ร้านอาหาร", "海滨商场、影院、餐饮", "ТРЦ у моря."),
            ),
          },
          {
            name: t(lang, L("Pattaya City Sign viewpoint", "ป้าย PATTAYA city", "PATTAYA 标志观景点", "Вывеска PATTAYA")),
            text: t(
              lang,
              L("Iconic hilltop photo spot north of the main strip.", "จุดถ่ายรูปบนเขาเหนือชายหาด", "主海滩以北山头打卡点", "Фото на холме к северу."),
            ),
          },
        ] satisfies NearbyItem[],
      },
      costs: {
        ...shared.costs,
        items: [
          t(
            lang,
            L("Beach chair + umbrella: 50–100 THB (confirm before sitting).", "เก้าอี้+ร่ม 50–100 บาท ถามก่อนนั่ง", "躺椅+伞约50–100泰铢，先问价", "Шезлонг+зонт 50–100 бат."),
          ),
          t(
            lang,
            L("Jet ski / banana boat: always agree price and route in writing.", "เจ็ทสกี/บานาน่า ตกลงราคาและเส้นทางเป็นลายลักษณ์อักษร", "摩托艇/香蕉船务必书面确认价格路线", "Гидроцикл — цена письменно."),
          ),
        ],
      },
      safety: {
        ...shared.safety,
        items: [
          t(
            lang,
            L("Strong UV — reapply sunscreen every 2 hours.", "UV แรง ทาครีมกันแดดซ้ำทุก 2 ชม.", "紫外线强，每2小时补防晒", "Сильное UV."),
          ),
          t(
            lang,
            L("Watch bags on crowded afternoons; use hotel safe for valuables.", "ช่วงบ่ายคนแน่น ระวังกระเป๋า เก็บของมีค่าในตู้เซฟ", "下午人多，注意随身物品", "Следите за сумками днём."),
          ),
          t(
            lang,
            L("Swim only in flagged zones; avoid alcohol before water sports.", "ว่ายในจุดที่มีธง งดแอลกอฮอลก่อนเล่นน้ำ", "仅在插旗区游泳，水上活动前勿饮酒", "Плавайте у флагов."),
          ),
        ],
      },
      related: {
        title: shared.related.title,
        links: [
          {
            label: c.kohLarnDayTrip,
            href: "/explore/islands/koh-larn",
            blurb: t(lang, L("Clear water day trip from Bali Hai Pier", "น้ำใสจากท่า Bali Hai", "从 Bali Hai 码头出发", "Чистая вода с Bali Hai")),
          },
          {
            label: c.streetFood,
            href: marketPagePaths.streetFoodThepprasit,
            blurb: t(lang, L("Thepprasit night market after the beach", "ตลาดเทพประสิทธิ์หลังเล่นหาด", "海滩后 Thepprasit 夜市", "Thepprasit вечером")),
          },
          {
            label: c.cafesLink,
            href: "/explore/cafes",
            blurb: t(lang, L("Beach-road cafes & sunset terraces", "คาเฟ่ริมหาด", "海滨咖啡馆", "Кафе у моря")),
          },
        ],
      },
    };
  }

  if (slug === "jomtien") {
    return {
    ...shared,
    heroDescription: t(
      lang,
      L(
        "A longer, calmer shoreline south of central Pattaya — family-friendly swimming, seafood strips, and condo towers with sea views.",
        "ชายหาดยาวใต้ใจกลาง — ว่ายน้ำครอบครัว ร้านอาหารทะเล คอนโดวิวทะเล",
        "市中心以南更长更静的海岸：适合家庭、海鲜与海景公寓。",
        "Длинный спокойный пляж к югу — семьи, морепродукты.",
      ),
    ),
    whenToVisit: {
      ...shared.whenToVisit,
      body: t(
        lang,
        L(
          "Morning is best for swimming and chair rentals with shade. Weekends fill with Bangkok day-trippers — weekdays feel noticeably quieter.",
          "เช้าเหมาะว่ายน้ำและเช่าเก้าอี้ วันหยุดคนกรุงเทพมาเยอะ วันธรรมดาเงียบกว่า",
          "上午适合游泳与租躺椅；周末曼谷一日游客流大，平日更安静。",
          "Утро — для купания; выходные многолюднее.",
        ),
      ),
    },
    map: {
      ...shared.map,
      body: t(
        lang,
        L(
          "South-bound songthaews on Beach Rd or Thappraya Rd (~20–40 THB from central Pattaya). Parking along Jomtien 2nd Rd; Grab works well for condo zones.",
          "สองแถวใต้ Beach Rd หรือ Thappraya ~20–40 บาทจากกลางเมือง จอด Jomtien 2nd Rd Grab เข้าคอนโดสะดวก",
          "南向双条车经 Beach Rd 或 Thappraya（从市中心约20–40泰铢）。",
          "Songthaew на юг; парковка Jomtien 2nd Rd.",
        ),
      ),
    },
    nearby: {
      ...shared.nearby,
      items: [
        {
          name: t(lang, L("Jomtien Night Market", "ตลาดจอมเทียน", "仲天夜市", "Рынок Jomtien")),
          text: t(
            lang,
            L("Evening street food & souvenirs — short songthaew inland.", "สตรีทฟู้ดเย็น — สองแถวเข้าในไม่กี่นาที", "傍晚小吃纪念品", "Вечерний рынок."),
          ),
        },
        {
          name: t(lang, L("Dongtan Beach", "หาดดงตาล", "Dongtan Beach", "Dongtan")),
          text: t(
            lang,
            L("Relaxed southern extension — see the Dongtan beach guide.", "ปลายจอมเทียน — ดูคู่มือหาดดงตาล", "南端延伸 — 见 Dongtan 指南", "Южное продолжение — гид Dongtan."),
          ),
        },
        {
          name: t(lang, L("Pattaya Floating Market", "ตลาดน้ำ 4 ภาค", "四方水上市场", "Плавучий рынок")),
          text: t(
            lang,
            L("Cultural day trip — taxi or tour from Jomtien area.", "ทริปวันเดียว — แท็กซี่หรือทัวร์จากจอมเทียน", "一日游，可从仲天打车", "Экскурсия на такси."),
          ),
        },
      ] satisfies NearbyItem[],
    },
    costs: {
      ...shared.costs,
      items: [
        t(
          lang,
          L("Chair sets: often 50–80 THB; quieter stretches may negotiate.", "เก้าอี้ 50–80 บาท ช่วงเงียงต่อรองได้", "躺椅约50–80泰铢", "50–80 бат за шезлонг."),
        ),
        t(
          lang,
          L("Parasailing & jet skis: compare 2–3 operators before paying.", "พาราเซล/เจ็ทสกี เทียบ 2–3 ร้านก่อนจ่าย", "滑翔伞/摩托艇货比三家", "Сравните 2–3 оператора."),
        ),
      ],
    },
    safety: {
      ...shared.safety,
      items: [
        t(
          lang,
          L("Gradual shelf — good for kids; still supervise near water sports zones.", "ค่อยๆ ลึก เหมาะเด็ก ดูใกล้โซนกีฬาทางน้ำ", "坡度缓，适合儿童，注意水上运动区", "Пологий вход — следите у зон спорта."),
        ),
        t(
          lang,
          L("May–Oct: check wave flags; rip currents can appear after storms.", "พ.ค.–ต.ค. ดูธงคลื่น หลังพายุอาจมีปากแม่น้ำทะเล", "5–10月看浪旗，风暴后可能有离岸流", "Май–окт — смотрите флаги."),
        ),
      ],
    },
    related: {
      title: shared.related.title,
      links: [
        {
          label: c.mainBeaches,
          href: "/explore/beaches",
          blurb: t(lang, L("Compare all six main shores", "เทียบ 6 หาดหลัก", "对比六片主海滩", "6 главных пляжей")),
        },
        {
          label: c.family,
          href: "/explore/family-activities",
          blurb: t(lang, L("Water parks & kid-friendly days", "สวนน้ำ กิจกรรมเด็ก", "水上乐园与亲子", "Семейный отдых")),
        },
        {
          label: c.wellness,
          href: "/explore/wellness",
          blurb: t(lang, L("Spa recovery after a long swim day", "สปาหลังว่ายน้ำ", "游泳后水疗放松", "Спа после пляжа")),
        },
      ],
    },
    };
  }

  if (slug === "dongtan") {
    return {
      ...shared,
      heroDescription: t(
        lang,
        L(
          "The relaxed southern tip of Jomtien — shallow water, tree-lined promenade, and an inclusive, community-forward beach culture.",
          "ปลายจอมเทียน ผ่อนคลาย น้ำตื้น ทางเดินร่มไม้ วัฒนธรรมชายหาดที่เปิดกว้าง",
          "Jomtien 南端：浅水、林荫步道、包容的社区海滩氛围。",
          "Южный конец Jomtien — мелководье и расслабленная атмосфера.",
        ),
      ),
      whenToVisit: {
        ...shared.whenToVisit,
        body: t(
          lang,
          L(
            "Late morning to sunset for the best light under the casuarina trees. Weekday afternoons are calmest; weekends bring more local and Bangkok visitors.",
            "สาย–เย็น แสงสวยใต้ต้นไม้ วันธรรมดาบ่ายเงียบ วันหยุดคนมากขึ้น",
            "上午至日落，林荫下光线佳；平日午后最静。",
            "До заката — тише в будни.",
          ),
        ),
      },
      map: {
        ...shared.map,
        body: t(
          lang,
          L(
            "End of Jomtien Beach Rd at the Dongtan roundabout. Songthaews from Jomtien (~10 THB); Grab drops at the promenade gates.",
            "ปลาย Jomtien Beach Rd วงเวียนดงตาล สองแถวจากจอมเทียน ~10 บาท Grab ส่งทางเดินริมทะเล",
            "Jomtien Beach Rd 尽头 Dongtan 环岛，双条车约10泰铢。",
            "Конец Jomtien Beach Rd, songthaew ~10 бат.",
          ),
        ),
      },
      nearby: {
        ...shared.nearby,
        items: [
          {
            name: t(lang, L("Jomtien Beach", "หาดจอมเทียน", "Jomtien Beach", "Jomtien")),
            text: t(
              lang,
              L("Longer main strip north — water sports & seafood restaurants.", "ชายหาดหลักทางเหนือ กีฬาทางน้ำ อาหารทะเล", "往北主海滩更长", "Основной пляж на север."),
            ),
          },
          {
            name: t(lang, L("Jomtien Night Market", "ตลาดจอมเทียน", "仲天夜市", "Рынок Jomtien")),
            text: t(
              lang,
              L("Evening food & shopping inland from the beach road.", "สตรีทฟู้ดเย็น ฝั่งในไม่ไกล", "傍晚小吃，离海滩路不远", "Вечерняя еда внутри."),
            ),
          },
          {
            name: t(lang, L("Pattaya Park", "สวนสนุกพัทยาพาร์ค", "Pattaya Park", "Pattaya Park")),
            text: t(
              lang,
              L("Tower views & rides on the hill above the bay.", "จุดชมวิวและเครื่องเล่นบนเขา", "山上观景与游乐", "Виды с холма."),
            ),
          },
        ] satisfies NearbyItem[],
      },
      costs: {
        ...shared.costs,
        items: [
          t(
            lang,
            L("Chair rental: 40–80 THB; tree-shade sections popular — arrive early on holidays.", "เก้าอี้ 40–80 บาท ร่มต้นไมร วันหยุดมาเช้า", "躺椅40–80泰铢，假日早到", "40–80 бат, в праздники приходите рано."),
          ),
          t(
            lang,
            L("Street food along the promenade: 40–120 THB per dish.", "อาหารริมทางเดิน 40–120 บาท/จาน", "步道小吃约40–120泰铢", "Стритфуд 40–120 бат."),
          ),
        ],
      },
      safety: {
        ...shared.safety,
        items: [
          t(
            lang,
            L("Respect local beach culture; keep noise reasonable near families.", "เคารพวัฒนธรรมชายหาด ลดเสียงดังใกล้ครอบครัว", "尊重当地海滩文化", "Уважайте местную культуру."),
          ),
          t(
            lang,
            L("Shallow shelf — ideal for wading; watch children near boat lanes.", "น้ำตื้น เดินเล่นได้ ดูเด็กใกล้ทางเรือ", "浅水适合涉水，注意儿童与船道", "Мелководье — следите за детьми."),
          ),
        ],
      },
      related: {
        title: shared.related.title,
        links: [
          {
            label: t(lang, L("Jomtien guide →", "คู่มือจอมเทียน →", "仲天指南 →", "Jomtien →")),
            href: "/explore/beaches/jomtien",
            blurb: t(lang, L("Compare the longer main Jomtien strip", "เทียบชายหาดจอมเทียนหลัก", "对比仲天主海滩", "Основной Jomtien"),
            ),
          },
          {
            label: c.cafesLink,
            href: "/explore/cafes",
            blurb: t(lang, L("Sea-view terraces toward Pratumnak", "คาเฟ่วิวทะเลสู่พระตำหนัก", "朝向帕坦纳克的海景咖啡", "Кафе с видом"),
            ),
          },
          {
            label: c.mainBeaches,
            href: "/explore/beaches",
            blurb: t(lang, L("All six shores at a glance", "6 หาดหลักครบ", "六片主海滩一览", "6 пляжей"),
            ),
          },
        ],
      },
    };
  }

  if (slug === "naklua") {
    return {
      ...shared,
      heroDescription: t(
        lang,
        L(
          "North Pattaya's fishing-village roots — morning markets, long-tail boats, and a quieter rhythm before the city wakes fully.",
          "นาเกลือเหนือพัทยา หมู่บ้านประมง ตลาดเช้า เรือหางยาว จังหวะเงียบก่อนเมืองคึกคัก",
          "北芭提雅渔村风情：早市、长尾船、清晨更安静。",
          "Север — рыбацкая деревня и утренние рынки.",
        ),
      ),
      whenToVisit: {
        ...shared.whenToVisit,
        body: t(
          lang,
          L(
            "5–9 AM for the Naklua market buzz and fishing-boat photos. Midday heat pushes most visitors to shade; late afternoon good for a quiet stroll.",
            "5–9:00 ตลาดนาเกลือ ถ่ายเรือประมง กลางวันร้อน เย็นเดินชายหาดเงียบ",
            "5–9点早市最热闹；傍晚适合安静散步。",
            "5–9:00 — рынок; вечером прогулка.",
          ),
        ),
      },
      map: {
        ...shared.map,
        body: t(
          lang,
          L(
            "North Pattaya songthaews along Naklua Rd and Sukhumvit frontage (~20–30 THB from central). Parking near Naklua market; walk 5–10 min to sand.",
            "สองแถวเหนือ Naklua Rd ~20–30 บาทจากกลาง จอดใกล้ตลาด เดินถึงหาด 5–10 นาที",
            "北向双条车 Naklua Rd，近市场停车步行5–10分钟到沙滩。",
            "Songthaew на север, парковка у рынка.",
          ),
        ),
      },
      nearby: {
        ...shared.nearby,
        items: [
          {
            name: t(lang, L("Naklua Market", "ตลาดนาเกลือ", "那库拉市场", "Рынок Naklua")),
            text: t(
              lang,
              L("Fresh seafood & breakfast — go early for the full experience.", "อาหารทะเลเช้า มาเช้าได้ครบ", "海鲜早餐，宜早到", "Морепродукты — приходите рано."),
            ),
          },
          {
            name: t(lang, L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Thepprasit")),
            text: t(
              lang,
              L("Night street-food hub a short ride inland — busiest on weekends.", "สตรีทฟู้ดกลางคืน ฝั่งในไม่ไกล ส–อาคนเยอะ", "内陆夜市，周末最挤", "Ночной рынок недалеко."),
            ),
          },
          {
            name: t(lang, L("Wongamat Beach", "หาดวงอมาตย์", "Wongamat Beach", "Wongamat")),
            text: t(
              lang,
              L("Upscale northern cove — continue along the coast road.", "อ่าวเหนือหรู ต่อตามถนนริมทะเล", "往北高端海湾", "Премиум-бухта на север."),
            ),
          },
        ] satisfies NearbyItem[],
      },
      costs: {
        ...shared.costs,
        items: [
          t(
            lang,
            L("Market breakfast: 50–150 THB; beach chairs less common — bring a mat or rent if offered.", "อาหารเช้าตลาด 50–150 บาท เก้าอี้น้อย นำเสื่อหรือเช่าถ้ามี", "早市早餐50–150泰铢", "Завтрак 50–150 бат."),
          ),
          t(
            lang,
            L("Boat photo tips: ask before filming working fishermen.", "ถ่ายเรือ ถามก่อนถ่ายชาวประมง", "拍摄渔船前先征得同意", "Спросите перед съёмкой рыбаков."),
          ),
        ],
      },
      safety: {
        ...shared.safety,
        items: [
          t(
            lang,
            L("Watch footing on wet boat ramps and market-side alleys.", "ระวังลื่นทางลงเรือและซอยตลาด", "船坡与市集小巷注意湿滑", "Скользкие пандусы."),
          ),
          t(
            lang,
            L("Swimming less common here — many visit for atmosphere, not deep swims.", "ว่ายน้อยกว่าหาดอื่น มาเพื่อบรรยากาศ", "此处游泳较少，多为氛围游览", "Купаются реже — атмосфера."),
          ),
        ],
      },
      related: {
        title: shared.related.title,
        links: [
          {
            label: t(lang, L("Wongamat guide →", "คู่มือวงอมาตย์ →", "Wongamat 指南 →", "Wongamat →")),
            href: "/explore/beaches/wongamat",
            blurb: t(lang, L("Quieter upscale bay next door", "อ่าวหรูเงียบถัดไป", "隔壁高端静湾", "Тихая бухта рядом"),
            ),
          },
          {
            label: t(
              lang,
              L("Old Naklua market →", "ตลาดเก่านาเกลือ →", "那库拉老市场 →", "Старый рынок Naklua →"),
            ),
            href: marketPagePaths.oldNaklua,
            blurb: t(lang, L("Morning wet market on our guide", "ตลาดสดเช้าในคู่มือ", "指南中的早市", "Утренний рынок"),
            ),
          },
          {
            label: t(
              lang,
              L("Hidden seafood market →", "ตลาดลับลานโพธิ์ →", "隐秘海鲜市场 →", "Lan Pho →"),
            ),
            href: marketPagePaths.hiddenLanPho,
            blurb: t(lang, L("Local seafood — quieter than tourist spots", "ซีฟู้ด local เงียบกว่าจุดทัวร์", "本地海鲜", "Морепродукты"),
            ),
          },
          {
            label: c.streetFood,
            href: marketPagePaths.streetFoodThepprasit,
            blurb: t(lang, L("Thepprasit eats after the beach", "ของกินเทพประสิทธิ์หลังหาด", "Thepprasit 美食", "Thepprasit"),
            ),
          },
        ],
      },
    };
  }

  if (slug === "wongamat") {
    return {
      ...shared,
      heroDescription: t(
        lang,
        L(
          "A premium northern bay — Sanctuary of Truth views, boutique hotels, and clifftop dining with fewer crowds than central Pattaya.",
          "อ่าวเหนือพรีเมียม วิวปราสาทสัจธรรม โรงแรมบูติก ร้านริมหน้าผา คนน้อยกว่าใจกลาง",
          "北部高端海湾：真理寺景观、精品酒店、悬崖餐饮，比市中心清静。",
          "Премиум-север — храм Истины, бутики, рестораны на скале.",
        ),
      ),
      whenToVisit: {
        ...shared.whenToVisit,
        body: t(
          lang,
          L(
            "Morning for calm water and photos with the wooden temple offshore. Sunset from clifftop restaurants is the signature experience — book ahead on weekends.",
            "เช้าน้ำสงบ ถ่ายปราสาทสัจธรรม เย็นดินเนอร์ริมหน้าผา วันหยุดจองล่วงหน้า",
            "清晨水质平静、可拍海上木庙；悬崖餐厅日落是招牌体验。",
            "Утро — фото храма; закат в ресторанах — бронь.",
          ),
        ),
      },
      map: {
        ...shared.map,
        body: t(
          lang,
          L(
            "Wong Amat Rd and Naklua Soi 12 frontage. Songthaew north (~20–40 THB); taxis/Grab preferred for evening cliff restaurants.",
            "Wong Amat Rd / ซอยนาเกลือ 12 สองแถวเหนือ ~20–40 บาท เย็นแนะนำ Grab",
            "Wong Amat Rd 与 Naklua Soi 12，晚间建议 Grab。",
            "Wong Amat Rd; вечером Grab.",
          ),
        ),
      },
      nearby: {
        ...shared.nearby,
        items: [
          {
            name: t(lang, L("Sanctuary of Truth", "ปราสาทสัจธรรม", "真理寺", "Храм Истины")),
            text: t(
              lang,
              L("Iconic teak temple — tickets & dress code apply; 5–10 min by car.", "ปราสาทไม้ — มีค่าเข้า แต่งกายสุภาพ รถ 5–10 นาที", "标志性木庙，需门票与着装", "Храм — билет и дресс-код."),
            ),
          },
          {
            name: t(lang, L("Naklua Beach & market", "หาดนาเกลือ & ตลาด", "那库拉海滩与市场", "Naklua")),
            text: t(
              lang,
              L("Morning market energy south along the coast.", "ตลาดเช้าทางใต้ตามชายฝั่ง", "沿岸往南即早市", "Утренний рынок на юг."),
            ),
          },
          {
            name: t(lang, L("Terminal 21 Pattaya", "เทอร์มินัล 21", "Terminal 21", "Terminal 21")),
            text: t(
              lang,
              L("Themed mall — easy taxi from Wongamat hotels.", "ห้างธีม แท็กซี่จากโรงแรมวงอมาตย์", "主题商场，酒店打车方便", "ТРЦ — такси от отелей."),
            ),
          },
        ] satisfies NearbyItem[],
      },
      costs: {
        ...shared.costs,
        items: [
          t(
            lang,
            L("Luxury hotels: 2,500–8,000+ THB/night; beach clubs may have minimum spend.", "โรงแรมหรู 2,500–8,000+ บาท/คืน บีชคลับอาจมีมินิมัม", "奢华酒店每晚约2500–8000+泰铢", "Отели 2500–8000+ бат."),
          ),
          t(
            lang,
            L("Cliff restaurants: 400–1,500 THB/person with view seats premium.", "ร้านหน้าผา 400–1,500 บาท/คน ที่นั่งวิวแพงกว่า", "悬崖餐厅人均约400–1500泰铢", "Рестораны 400–1500 бат."),
          ),
        ],
      },
      safety: {
        ...shared.safety,
        items: [
          t(
            lang,
            L("Rocky patches at low tide — water shoes help; check before diving in.", "มีหินตอนน้ำลง ใส่รองเท้าเล่นน้ำ ดูก่อนดำ", "退潮有礁石，建议穿涉水鞋", "Камни на отливе."),
          ),
          t(
            lang,
            L("Steep Sois to cliff venues — use Grab at night if walking hills.", "ซอยขึ้นเขาสูง เย็นใช้ Grab ถ้าเดินไม่สะดวก", "上悬崖餐厅坡陡，晚间宜打车", "Крутые Soi — ночью такси."),
          ),
        ],
      },
      related: {
        title: shared.related.title,
        links: [
          {
            label: t(lang, L("Naklua guide →", "คู่มือนาเกลือ →", "那库拉指南 →", "Naklua →")),
            href: "/explore/beaches/naklua",
            blurb: t(lang, L("Morning markets & fishing boats", "ตลาดเช้า เรือประมง", "早市与渔船", "Рынок и лодки"),
            ),
          },
          {
            label: c.fineDining,
            href: "/explore/restaurants/fine-dining",
            blurb: t(lang, L("Cliff & bay-view dining picks", "ร้านวิวอ่าว", "海湾景观餐厅", "Fine dining"),
            ),
          },
          {
            label: c.wellness,
            href: "/explore/wellness",
            blurb: t(lang, L("Spa stays near luxury hotels", "สปาใกล้โรงแรมหรู", "酒店附近水疗", "Спа"),
            ),
          },
        ],
      },
    };
  }

  if (slug === "pratumnak") {
    return {
      ...shared,
      heroDescription: t(
        lang,
        L(
          "Between Pattaya and Jomtien — Big Buddha viewpoints, small coves, and legendary cliff restaurants for golden-hour photos.",
          "ระหว่างพัทยา–จอมเทียน พระใหญ่ อ่าวเล็ก ร้านริมหน้าผ้าพระอาทิตย์ตก",
          "芭提雅与仲天之间：大佛观景点、小海湾、悬崖日落餐厅。",
          "Между Pattaya и Jomtien — Большой Будда и закаты.",
        ),
      ),
      whenToVisit: {
        ...shared.whenToVisit,
        body: t(
          lang,
          L(
            "Late afternoon for Big Buddha views without harsh midday heat. Reserve cliff restaurants 1–2 hours before sunset; tide matters for small cove swims.",
            "บ่ายแก่ๆ ขึ้นพระใหญ่ จองร้านหน้าผ่า 1–2 ชม.ก่อนพระอาทิตย์ตก ว่ายดูน้ำขึ้น-ลง",
            "午后上大佛较舒适；日落前1–2小时订悬崖餐厅；小湾游泳看潮汐。",
            "После 16:00 — Будда; бронь ресторана; прилив.",
          ),
        ),
      },
      map: {
        ...shared.map,
        body: t(
          lang,
          L(
            "Pratumnak Hill Sois off Thappraya Rd. Motorbike taxis common; songthaew Pattaya↔Jomtien (~10–20 THB). Parking limited at peak sunset — arrive early.",
            "ซอยพระตำหนักจาก Thappraya มอเตอร์ไซค์ สองแถวพัทยา-จอมเทียน ~10–20 บาท จอดยากตอนพระอาทิตย์ตก มาเร็ว",
            "Thappraya 支路进帕坦纳克山；双条车10–20泰铢；日落时段停车位紧。",
            "Soi Pratumnak; songthaew 10–20 бат.",
          ),
        ),
      },
      nearby: {
        ...shared.nearby,
        items: [
          {
            name: t(lang, L("Big Buddha (Wat Phra Yai)", "พระใหญ่", "大佛", "Большой Будда")),
            text: t(
              lang,
              L("Panoramic bay views — modest dress, remove shoes at temple areas.", "วิวอ่าว แต่งกายสุภาพ ถอดรองเท้าในวัด", "全湾景观，寺庙区脱鞋", "Панорама — скромная одежда."),
            ),
          },
          {
            name: t(lang, L("Viewpoint restaurants", "ร้านวิวพระอาทิตย์ตก", "观景点餐厅", "Рестораны на закат")),
            text: t(
              lang,
              L("Book ahead; arrive 45 min before sunset for the best tables.", "จองล่วงหน้า มาก่อนพระอาทิตย์ตก 45 นาที", "提前预订，日落前45分钟到", "Бронь за 45 мин до заката."),
            ),
          },
          {
            name: t(lang, L("Pattaya & Jomtien beaches", "หาดพัทยา & จอมเทียน", "芭提雅与仲天海滩", "Pattaya & Jomtien")),
            text: t(
              lang,
              L("10–15 min downhill to either main bay.", "ลงเขา 10–15 นาทีถึงอ่าวหลัก", "下山10–15分钟到主湾", "10–15 мин до пляжей."),
            ),
          },
        ] satisfies NearbyItem[],
      },
      costs: {
        ...shared.costs,
        items: [
          t(
            lang,
            L("Cliff dinner: 500–2,000 THB/person; minimums on holidays.", "ดินเนอร์หน้าผา 500–2,000 บาท/คน วันหยุดมีมินิมัม", "悬崖晚餐人均约500–2000泰铢", "Ужин 500–2000 бат."),
          ),
          t(
            lang,
            L("Big Buddha: free entry; donations welcome; parking ~20–40 THB.", "พระใหญ่เข้าฟรี บริจาคได้ จอด ~20–40 บาท", "大佛免费，停车约20–40泰铢", "Будда — бесплатно."),
          ),
        ],
      },
      safety: {
        ...shared.safety,
        items: [
          t(
            lang,
            L("Check tide tables before swimming in small coves — rocks appear at low tide.", "ดูน้ำขึ้น-ลงก่อนว่าย น้ำลงมีหิน", "小湾游泳前查潮汐", "Прилив для купания."),
          ),
          t(
            lang,
            L("Steep hill roads — helmet if renting scooters; Grab safer at night.", "ถนนขึ้นเขาสูง ใส่หมวกถ้าเช่ามอเตอร์ไซค์ เย็นใช้ Grab", "山路陡，租摩托戴头盔", "Крутые дороги — Grab ночью."),
          ),
        ],
      },
      related: {
        title: shared.related.title,
        links: [
          {
            label: t(lang, L("Pattaya Beach →", "หาดพัทยา →", "芭提雅海滩 →", "Pattaya →")),
            href: "/explore/beaches/pattaya-beach",
            blurb: t(lang, L("Central bay & nightlife", "อ่าวกลาง ไนท์ไลฟ์", "中心海湾与夜生活", "Центр"),
            ),
          },
          {
            label: c.cafesLink,
            href: "/explore/cafes",
            blurb: t(lang, L("Hill cafes with sunset terraces", "คาเฟ่บนเขา", "山坡日落咖啡馆", "Кафе на холме"),
            ),
          },
          {
            label: t(lang, L("Hidden gems →", "จุดลับ →", "秘境 →", "Секреты →")),
            href: "/explore/hidden-gems",
            blurb: t(lang, L("Secret viewpoints beyond the main hill", "จุดชมวิวลับ", "主山以外的秘境", "Секретные виды"),
            ),
          },
        ],
      },
    };
  }

  throw new Error(`Unhandled beach detail slug: ${slug}`);
}

export function getBeachDetailPage(lang: LanguageCode, slug: BeachDetailSlug) {
  const c = getExploreCommon(lang);
  const main = getMainBeachesPage(lang);
  const beach = main.beaches.find((b) => b.id === slug);
  if (!beach) throw new Error(`Unknown beach slug: ${slug}`);

  const extras = getSlugExtras(lang, slug);
  const mapLinks = beachMaps[slug];

  return {
    slug,
    beach,
    breadcrumb: {
      explore: c.explore,
      beaches: main.hero.title,
      current: beach.name,
    },
    hero: {
      title: beach.name,
      description: extras.heroDescription,
      tags: beach.vibe,
    },
    photo: {
      title: t(lang, L("On the shore", "บรรยากาศชายหาด", "海滩实景", "На пляже")),
      caption: beach.excerpt,
    },
    summary: {
      bestFor: { label: c.bestFor, value: beach.bestFor },
      access: { label: c.access, value: beach.access },
      water: { label: c.water, value: beach.water },
    },
    whenToVisit: {
      title: extras.whenToVisit.title,
      slots: getBeachWhenSlots(lang, slug),
    },
    map: {
      ...extras.map,
      mapsUrl: mapLinks.openHref,
      embedSrc: mapLinks.embedSrc,
      embedAria: t(
        lang,
        L(
          "Map of {name}",
          "แผนที่ {name}",
          "{name} 地图",
          "Карта: {name}",
        ),
      ).replace("{name}", beach.name),
      locationLabel: beach.name,
    },
    nearby: {
      ...extras.nearby,
      items: extras.nearby.items.map((item, i) => ({
        ...item,
        image: beachNearbyImages[slug][i],
      })),
    },
    costs: extras.costs,
    safety: extras.safety,
    related: extras.related,
    backToAll: extras.backToAll,
  };
}
