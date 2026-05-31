import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export type SongthaewRouteId = "beach" | "jomtien" | "north";

export function getSongthaewPage(lang: LanguageCode) {
  return {
    introTitle: t(
      lang,
      L("Songthaews in Pattaya", "รถสองแถวในพัทยา", "芭提雅双条车", "Songthaew в Паттайе"),
    ),
    introBody: t(
      lang,
      L(
        "Baht buses are the backbone of Pattaya transport — fixed loops such as the Beach Road ↔ Second Road circuit. They are shared rides with local rules: wave on the normal route, never negotiate like a taxi charter.",
        "รถสองแถว (บาทบัส) คือหัวใจการเดินทางในพัทยา — วิ่งเส้นทางเฉพาะ เช่น วงกลมสายชายหาด–สายสอง เป็นรถร่วมที่มีกฎของคนท้องถิ่น: โบกบนเส้นทางปกติ อย่าเจรจาแบบเช่าเหมา",
        "双条车是芭提雅交通主力——固定环线（如海滩路↔二路）。合乘有本地规矩：在正常线路上招手，勿按包车讨价还价。",
        "Songthaew — фиксированные петли Beach Road ↔ 2nd Road; не договаривайтесь как на чартер.",
      ),
    ),
    guideBadge: t(lang, L("Interactive", "เครื่องมือ", "互动", "Интерактив")),
    guideTitle: t(
      lang,
      L("Songthaew ride guide", "คู่มือขึ้นรถสองแถว", "双条车乘车指南", "Гид по songthaew"),
    ),
    guideSubtitle: t(
      lang,
      L(
        "Follow the three local steps, pick your corridor, and see shared vs charter fares.",
        "ทำตาม 3 ขั้นตามวิถีท้องถิ่น เลือกเส้นทาง และดูราคารถร่วมเทียบเช่าเหมา",
        "按本地三步走、选择线路、对比合乘与包车价。",
        "Три шага, зона и сравнение тарифов.",
      ),
    ),
    howTitle: t(
      lang,
      L("Ride without overpaying", "ขึ้นรถแบบไม่โดนโกง", "不被多收费的乘车法", "Без переплаты"),
    ),
    howSteps: [
      {
        title: t(lang, L("Wave on the normal loop", "โบกบนเส้นทางปกติ", "在正常环线招手", "Машите на маршруте")),
        body: t(
          lang,
          L(
            'Stand on the correct side and wave — do not ask the driver "Can you go to…?" On a running route that sounds like a private charter and the fare jumps immediately.',
            "ยืนรอโบกเรียกในเส้นทางวิ่งปกติ — ห้ามถามคนขับว่า “ไป...ไหม?” เพราะคนขับจะคิดว่าเป็นการเหมาเหวอทันทีและเรียกราคาแพง",
            "在固定线路上招手等车——勿问司机“能去…吗？”，否则会被当作包车加价。",
            "Не спрашивайте «куда едете?» — это чартер.",
          ),
        ),
      },
      {
        title: t(lang, L("Board quietly, ring to stop", "ขึ้นรถเงียบๆ กดกริ่งลง", "安静上车、按铃下车", "Садитесь и жмите звонок")),
        body: t(
          lang,
          L(
            "Enter from the rear and sit quietly. When you reach your stop, press the bell or tap the roof — do not shout.",
            "เดินขึ้นไปนั่งเงียบๆ เมื่อถึงจุดหมายให้กดกริ่งหรือเคาะหลังคา — อย่าตะโกน",
            "从后方上车安静就座；到站按铃或敲车顶，不要大喊。",
            "Садитесь сзади; звонок или стук по крыше.",
          ),
        ),
      },
      {
        title: t(lang, L("Pay at the driver", "จ่ายที่ข้างคนขับ", "到司机旁付款", "Платите у водителя")),
        body: t(
          lang,
          L(
            "Walk to the front and pay in small notes — standard shared fare is usually ฿10–20 per person depending on distance and loop.",
            "เดินมาจ่ายเงินที่ข้างคนขับด้วยเงินย่อย — ราคามาตรฐานรถร่วมมัก 10–20 บาทต่อคน ตามระยะและเส้นทาง",
            "到前方付给司机零钱——合乘标准价通常每人10–20泰铢。",
            "10–20 бат мелкими купюрами у водителя.",
          ),
        ),
      },
    ],
    queueTitle: t(lang, L("Queues at busy stops", "การต่อคิวที่ป้ายหลัก", "热门站排队", "Очереди")),
    queueBody: t(
      lang,
      L(
        "Pattaya is international — queue politely at major songthaew stops (e.g. Wat Chaimongkol), restaurants, and restrooms. Cutting in line is rude and can lead to arguments.",
        "พัทยามีนักท่องเที่ยวจากทั่วโลก — ต่อคิวสุภาพที่ป้ายสองแถวหลัก (เช่น หน้าวัดชัยมงคล) ร้านอาหาร และห้องน้ำ การแซงคิวหยาบคายและอาจทะเลาะได้",
        "芭提雅游客众多——在主要双条车站（如 Wat Chaimongkol）、餐厅和洗手间请礼貌排队，插队易引发冲突。",
        "Очередь у Wat Chaimongkol и др.; не лезьте без очереди.",
      ),
    ),
    modeSharedHint: t(
      lang,
      L("Default on fixed loops — wave, buzzer, ฿10–20 cash.",
        "บนเส้นทางปกติ — โบก กดกริ่ง จ่าย 10–20 บาท",
        "固定线路：招手、按铃、付10–20泰铢。",
        "Попутно: 10–20 бат.",
      ),
    ),
    modeCharterHint: t(
      lang,
      L("Only if you agreed a flat price before moving — often ฿100–300+.",
        "เมื่อตกลงราคาเหมาก่อนออก — มัก 100–300+ บาท",
        "仅出发前讲定包车价——常100–300+泰铢。",
        "Чартер: договор заранее, 100–300+ бат.",
      ),
    ),
    routesTitle: t(lang, L("Main corridors", "เส้นทางหลัก", "主要线路", "Маршруты")),
    routesHint: t(
      lang,
      L("Tap a zone — fares are per person on shared runs unless you charter.",
        "แตะโซน — ราคาต่อคนบนรถร่วม ยกเว้นเช่าเหมา",
        "选择区域——合乘按人计费，包车另议。",
        "Выберите зону — цена за человека.",
      ),
    ),
    faresTitle: t(lang, L("Typical fares", "ค่าโดยสารโดยประมาณ", "参考票价", "Тарифы")),
    faresNote: t(
      lang,
      L(
        "Short hops on a fixed route are usually 10–20 THB. Longer cross-town rides may reach 30–40 THB. Charter = agree a flat price before moving.",
        "ทริปสั้นบนเส้นทางปกติมัก 10–20 บาท ข้ามเมืองอาจ 30–40 บาท เช่าเหมาตกลงราคาก่อนออก",
        "固定线路短途通常10–20泰铢；跨区可能30–40泰铢；包车出发前讲价。",
        "Коротко 10–20 бат; чартер — договор заранее.",
      ),
    ),
    sharedLabel: t(lang, L("Shared (normal)", "รถร่วม (ปกติ)", "合乘（正常）", "Попутно")),
    charterLabel: t(lang, L("Private charter", "เช่าเหมา", "包车", "Чартер")),
    scamTitle: t(lang, L("Avoid overpaying", "หลีกเลี่ยงโดนแพง", "避免多收费", "Не переплачивайте")),
    scamBody: t(
      lang,
      L(
        "Meters do not apply. Red flags: driver quotes ฿200+ for a short hop, detours to jewellery or tailor shops, or pressure to hire the whole van. Use Grab/Bolt instead or walk to the next songthaew.",
        "ไม่มีมิเตอร์ สัญญาณเตือน: เรียก ฿200+ ทริปสั้น พาแวะร้านทัวร์ หรือบังคับเช่าทั้งคัน ใช้ Grab/Bolt หรือรอคันถัดไป",
        "无计价器。警惕：短途要价200+泰铢、绕道购物店、强迫包车。可改用 Grab/Bolt 或等下一辆。",
        "Нет счётчика; 200+ бат за короткую поездку — отказ.",
      ),
    ),
    etiquetteTitle: t(lang, L("Rider etiquette", "มารยาทผู้โดยสาร", "乘车礼仪", "Этикет")),
    etiquetteItems: [
      t(
        lang,
        L("Enter from the rear; offer seats to monks and elderly passengers.",
          "ขึ้นท้ายรถ ให้ที่นั่งพระและผู้สูงอายุ",
          "从后方上车；为僧侣与老人让座。",
          "Садитесь сзади; уступайте место.",
        ),
      ),
      t(
        lang,
        L("Keep voices low at night; do not eat messy food — water is fine.",
          "พูดเบาตอนกลางคืน อย่ากินอาหารเลอะ น้ำได้",
          "夜间轻声；勿吃易脏食物，可带水。",
          "Тихо ночью; без messy food.",
        ),
      ),
      t(
        lang,
        L("Hold handrails on turns; keep bags on your lap in crowded vans.",
          "จับราวตอนเลี้ยว วางกระเป๋าบนตักเมื่อแน่น",
          "转弯抓扶手；拥挤时包放腿上。",
          "Держитесь за поручни.",
        ),
      ),
    ],
    whenGrabTitle: t(
      lang,
      L("When to use Grab or Bolt instead",
        "เมื่อไหร่ควรใช้ Grab/Bolt",
        "何时用 Grab/Bolt",
        "Когда Grab/Bolt",
      ),
    ),
    whenGrabItems: [
      t(
        lang,
        L("After ~22:00 when songthaews thin out on Jomtien and Naklua.",
          "หลัง 22:00 น. รถสองแถวบนจอมเทียนและนาเกลือน้อย",
          "22点后仲天、那库拉车辆变少。",
          "После 22:00 машин мало.",
        ),
      ),
      t(
        lang,
        L("Airport runs (U-Tapao / BKK), rain, or travelling with lots of luggage.",
          "ไปสนามบิน ฝนตก หรือกระเป๋าเยอะ",
          "机场、下雨或行李多。",
          "Аэропорт, дождь, багаж.",
        ),
      ),
      t(
        lang,
        L("When you need AC, a fixed quote, or door-to-door from a condo Soi.",
          "ต้องการแอร์ ราคาชัด หรือรับส่งถึงซอยคอนโด",
          "需要空调、明码或公寓巷口接送。",
          "Нужны кондиционер и точный адрес.",
        ),
      ),
    ],
    cultureLink: t(lang, L("Full etiquette guide →", "คู่มือมารยาทฉบับเต็ม →", "完整礼仪 →", "Этикет →")),
    scamLink: t(lang, L("Common scams →", "มิจฉาชีพที่พบบ่อย →", "常见骗局 →", "Скамы →")),
    rideApps: t(lang, L("Ride apps →", "แอปเรียกรถ →", "网约车 →", "Приложения →")),
    driving: t(lang, L("Driving & licenses →", "ขับรถและใบขับขี่ →", "驾照指南 →", "Права →")),
  };
}

export function getSongthaewRoutes(lang: LanguageCode) {
  const routes: Record<
    SongthaewRouteId,
    { label: string; corridors: string; fare: string; tips: string[] }
  > = {
    beach: {
      label: t(lang, L("Beach & central", "ชายหาดและกลางเมือง", "海滩与市中心", "Центр")),
      corridors: t(
        lang,
        L(
          "Beach Road (Chaiyapruek) ↔ Pattaya Second Road ↔ Sukhumvit loops — Central Festival, Walking Street area, North Pattaya.",
          "Beach Road ↔ ถนนพัทยา 2 ↔ สุขุมวิท — เซ็นทรัล วอล์คกิ้งสตรีต พัทยาเหนือ",
          "Beach Road ↔ 芭提雅二路 ↔ 素坤逸环线。",
          "Beach Road ↔ 2nd Road ↔ Sukhumvit.",
        ),
      ),
      fare: "฿10–20",
      tips: [
        t(
          lang,
          L("Highest frequency daytime; very crowded during Songkran and weekends.",
            "ถี่ที่สุดกลางวัน แน่นมากช่วงสงกรานต์และวันหยุด",
            "白天最密；宋干节与周末很挤。",
            "Часто днём.",
          ),
        ),
        t(
          lang,
          L("Walking Street closes to vehicles at night — walk or use apps from Dolphin Circle.",
            "Walking Street ปิดรถกลางคืน — เดินหรือใช้แอปจากวงเวียนดอลฟิน",
            "步行街夜间车辆禁行。",
            "Walking Street пешком ночью.",
          ),
        ),
      ],
    },
    jomtien: {
      label: t(lang, L("Jomtien & Pratumnak", "จอมเทียนและพระตำหนัก", "仲天与帕塔姆纳克", "Jomtien")),
      corridors: t(
        lang,
        L(
          "Jomtien Beach Road ↔ Second Road ↔ Thappraya — Big Buddha, Dongtan, Pattaya Park, Jomtien Night Market.",
          "ถนนจอมเทียน ↔ พัทยา 2 ↔ ทับพระยา — พระใหญ่ ดงตาล พัทยาปาร์ค ตลาดจอมเทียน",
          "仲天海滩路 ↔ 二路 ↔ Thappraya。",
          "Jomtien ↔ 2nd Road ↔ Thappraya.",
        ),
      ),
      fare: "฿10–30",
      tips: [
        t(
          lang,
          L("Wait for the van to fill on quiet stretches — charter only if you agreed a price.",
            "รอให้รถเต็มบนช่วงเงียบ — เช่าเหมาเมื่อตกลงราคาแล้วเท่านั้น",
            "安静路段会等客满——仅讲价后才算包车。",
            "Ждите наполнения или чартер по цене.",
          ),
        ),
        t(
          lang,
          L("Steep hills near Pratumnak — some drivers skip late; Grab for hill condos.",
            "เนินพระตำหนักสูง — บางคันไม่วิ่งดึก ใช้ Grab ขึ้นเนิน",
            "帕塔姆纳克坡陡，深夜可能无车。",
            "Холмы Pratumnak — поздно редко.",
          ),
        ),
      ],
    },
    north: {
      label: t(lang, L("Naklua & Wong Amat", "นาเกลือและวงอามาด", "那库拉与 Wong Amat", "Naklua")),
      corridors: t(
        lang,
        L(
          "Naklua Road ↔ Sukhumvit north — Banglamung market, Wong Amat, Ambassador City area.",
          "ถนนนาเกลือ ↔ สุขุมวิทเหนือ — ตลาดบางละมุง วงอามาด แอมบาสเดอร์",
          "那库拉路 ↔ 北素坤逸。",
          "Naklua ↔ North Sukhumvit.",
        ),
      ),
      fare: "฿10–30",
      tips: [
        t(
          lang,
          L("Fewer vans after 22:00 — plan Grab for returns from seafood restaurants.",
            "รถน้อยหลัง 22:00 น. วางแผน Grab กลับจากร้านอาหารทะเล",
            "22点后车少，海鲜晚餐返程建议 Grab。",
            "После 22:00 — Grab.",
          ),
        ),
        t(
          lang,
          L("Residential sois may need a songthaew plus short walk or moto taxi.",
            "ซอยที่อยู่อาศัยอาจต้องลงสองแถวแล้วเดิน/มอเตอร์ไซค์ต่อ",
            "住宅巷可能需双条车+步行/摩托接驳。",
            "Soi — пешком или мото.",
          ),
        ),
      ],
    },
  };

  return (["beach", "jomtien", "north"] as const).map((id) => ({ id, ...routes[id] }));
}
