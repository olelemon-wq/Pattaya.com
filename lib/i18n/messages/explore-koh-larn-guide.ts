import type { LanguageCode } from "@/lib/i18n/languages";
import { exploreImages } from "@/lib/design/explore-images";
import { kohLarnGuideImages } from "@/lib/design/koh-larn-guide-images";
import { L, t } from "@/lib/i18n/living-helpers";

function mapsSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function getKohLarnDayPlan(lang: LanguageCode) {
  return {
    title: t(lang, L("One-day Koh Larn plan", "แพลนเกาะล้านวันเดียว", "格兰岛一日游路线", "Маршрут на день")),
    subtitle: t(
      lang,
      L(
        "Leave Pattaya early — most of the magic is before the midday tour rush.",
        "ออกจากพัทยาเช้า — ช่วงเช้าก่อนทัวร์ลงคือเวลาที่คุ้มที่สุด",
        "尽早从芭提雅出发——中午旅游团抵达前体验最佳。",
        "Выезжайте рано — до полуденного наплыва туров.",
      ),
    ),
    steps: [
      {
        time: t(lang, L("07:00", "07:00", "07:00", "07:00")),
        title: t(lang, L("First ferry out", "ขึ้นเรือรอบแรก", "搭乘首班船", "Первый рейс")),
        body: t(
          lang,
          L(
            "Buy at Bali Hai Pier counters — calmer seas and shorter queues than mid-morning.",
            "ซื้อตั๋วที่เคาน์เตอร์ในแหลมบาลีฮาย — คิวสั้นกว่าและน้ำสงบกว่าสาย–เที่ยง",
            "在 Bali Hai 码头官方柜台购票，比上午中段人少、海况更稳。",
            "Билеты в кассе Bali Hai — меньше очередей, чем в 10–11.",
          ),
        ),
      },
      {
        time: t(lang, L("08:00", "08:00", "08:00", "08:00")),
        title: t(lang, L("Start at Samae Beach", "เริ่มที่หาดแสม", "先到 Samae 海滩", "Пляж Samae")),
        body: t(
          lang,
          L(
            "Clear water and cafés without Ta Waen crowds — best balance for photos and swimming.",
            "น้ำใส มีคาเฟ่ คนไม่อัดเท่าตาแหวน — สมดุลดีสำหรับว่ายน้ำและถ่ายรูป",
            "水质好、有咖啡馆，人流比塔湾少——游泳与拍照都很均衡。",
            "Чистая вода и кафе без толпы Ta Waen.",
          ),
        ),
      },
      {
        time: t(lang, L("11:30", "11:30", "11:30", "11:30")),
        title: t(lang, L("Seafood lunch", "มื้อเที่ยงซีฟู้ด", "海鲜午餐", "Морепродукты")),
        body: t(
          lang,
          L(
            "Try grilled squid or tom yum by the beach — check the price board before ordering.",
            "ลองหมึกย่างหรือต้มยำริมหาด — ดูป้ายราคาก่อนสั่ง",
            "可试烤鱿鱼或冬阴功，点菜前看清价目。",
            "Кальмар на гриле или том ям — сверьте цены.",
          ),
        ),
      },
      {
        time: t(lang, L("14:00", "14:00", "14:00", "14:00")),
        title: t(lang, L("Café break", "พักที่คาเฟ่", "咖啡馆休息", "Кофе-пауза")),
        body: t(
          lang,
          L(
            "Island cafés with sea views — good shade when the sun peaks.",
            "คาเฟ่วิวทะเลบนเกาะ — หลบแดดช่วงแดดแรง",
            "岛上海景咖啡馆，正午暴晒时很适合休息。",
            "Кафе с видом на море в зной.",
          ),
        ),
      },
      {
        time: t(lang, L("17:00", "17:00", "17:00", "17:00")),
        title: t(lang, L("Windmill viewpoint", "จุดชมวิวกังหันลม", "风车观景台", "Мельница")),
        body: t(
          lang,
          L(
            "Short ride uphill for cinematic sunset over the island — arrive before golden hour fills up.",
            "ขึ้นเนินสั้น ๆ ชมพระอาทิตย์ตกเหนือเกาะ — ไปก่อนคนแน่น",
            "短程上山俯瞰全岛日落，黄金时刻前到达更佳。",
            "Короткий подъём — закат над островом.",
          ),
        ),
      },
      {
        time: t(lang, L("17:30", "17:30", "17:30", "17:30")),
        title: t(lang, L("Return to Pattaya", "กลับพัทยา", "返回芭提雅", "Обратно в Паттайю")),
        body: t(
          lang,
          L(
            "Confirm last boat times at the pier — weekends sell out earlier.",
            "เช็กเรือกลับรอบสุดท้ายที่ท่า — วันหยุดตั๋วหมดเร็ว",
            "在码头确认末班船时间，周末更早售罄。",
            "Уточните последний рейс — в выходные раньше.",
          ),
        ),
      },
    ],
  };
}

export function getKohLarnFirstTimerTips(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("First visit? Don't skip these", "ครั้งแรก? อย่าพลาด", "首次到访须知", "В первый раз"),
    ),
    subtitle: t(
      lang,
      L(
        "Locals and repeat visitors avoid these mistakes — the island is easy, but timing and cash matter.",
        "คนพื้นที่เลี่ยงพลาดเหล่านี้ — เกาะไปง่าย แต่เวลาและเงินสดสำคัญ",
        "老游客会避开这些坑——岛上交通简单，但时间与现金很关键。",
        "Опытные туристы избегают этих ошибок.",
      ),
    ),
    items: [
      {
        id: "cash" as const,
        title: t(lang, L("Bring cash", "พกเงินสด", "带现金", "Наличные")),
        body: t(
          lang,
          L(
            "Many beach chairs, songthaews, and small eateries are still cash-first — ATMs exist but can run out on busy Sundays.",
            "เก้าอี้ สองแถว ร้านเล็ก ๆ ยังรับเงินสดเป็นหลัก — มีตู้แต่หมดวันอาทิตย์คนเยอะ",
            "躺椅、双条车与小餐馆多仍以现金为主，周日人多时取款机可能没钱。",
            "Шезлонги и songthaew часто только за наличные.",
          ),
        ),
      },
      {
        id: "early" as const,
        title: t(lang, L("Go early, not at noon", "ไปเช้า อย่าเที่ยง", "早去，别中午才到", "Рано, не в полдень")),
        body: t(
          lang,
          L(
            "A 7 a.m. ferry means clearer water and easier photos; by 10–11 a.m. tour groups pack Ta Waen and jet skis line the sand.",
            "เรือ 7 โมง = น้ำใส ถ่ายรูปง่าย ถึง 10–11 โมงทัวร์ลงหาดตาแหวนแน่น",
            "7点船水质更清；10–11点旅游团会挤满塔湾与摩托艇。",
            "Рейс в 7:00 — чище вода; к 10–11 толпа на Ta Waen.",
          ),
        ),
      },
      {
        id: "sun" as const,
        title: t(lang, L("Sun protection", "กันแดด", "防晒", "Солнце")),
        body: t(
          lang,
          L(
            "Island sun is stronger than Pattaya mainland — reapply SPF every two hours and pack reef shoes for rocky coves.",
            "แดดบนเกาะแรงกว่าฝั่งพัทยา — ทากันแดดทุก 2 ชม. พกรองเท้าเล่นน้ำสำหรับหาดหิน",
            "岛上日照强于本岛，每两小时补涂防晒，礁石区建议穿涉水鞋。",
            "Солнце сильнее — SPF каждые 2 часа, коралловые тапки.",
          ),
        ),
      },
      {
        id: "beaches" as const,
        title: t(lang, L("Visit more than one beach", "อย่าอยู่หาดเดียว", "别只待一片海滩", "Несколько пляжей")),
        body: t(
          lang,
          L(
            "Each bay has a different mood — busy Ta Waen, balanced Samae, slow Tien, wild Nual. Hop by songthaew or bike if you are confident on hills.",
            "แต่ละอ่าวคนละฟีล — ตาแหวนคึกคัก แสมสมดุล เทียนชิล นวลธรรมชาติ เปลี่ยนหาดด้วยสองแถวหรือมอเตอร์ไซค์",
            "各海湾氛围不同：塔湾热闹、Samae均衡、Tien安静、Nual更野。可搭双条车或租摩托换滩。",
            "У каждого пляжа свой характер — смените пляж на songthaew.",
          ),
        ),
      },
    ],
  };
}

export function getKohLarnOvernightTip(lang: LanguageCode) {
  return {
    title: t(lang, L("Why stay overnight?", "ทำไมควรค้างคืน?", "为何建议过夜", "Ночёвка на острове")),
    body: t(
      lang,
      L(
        "After about 5 p.m. day-trippers head back — the island quiets down, sunsets stretch longer, and dinner feels unhurried. Bungalows near Ta Waen and Tien are simple but book Fri–Sun ahead.",
        "หลังบ่าย 4–5 คนทริปวันเดียวกลับหมด เกาะเงียบลง พระอาทิตย์ตกสวยขึ้น มื้อเย็นไม่รีบ บังกะโลใกล้ตาแหวน/เทียนเรียบง่าย แต่ศ–อา ควรจองล่วงหน้า",
        "下午四五点后一日游游客返程，岛上立刻安静，日落与晚餐都更从容。塔湾与 Tien 附近 bungalow 较简朴，周五至周日宜提前订。",
        "После 17:00 туристы уезжают — остров тише, закаты длиннее. Бронируйте bungalow на выходные.",
      ),
    ),
  };
}

export function getKohLarnViewpoint(lang: LanguageCode) {
  return {
    title: t(lang, L("Windmill viewpoint", "จุดชมวิวกังหันลม", "风车观景台", "Смотровая у мельницы")),
    body: t(
      lang,
      L(
        "A short ride from the main beaches to the hilltop windmill — an under-the-radar spot most guides skip, but the wide island and sea views are stunning. Come in the late afternoon or early evening: the light is cinematic and the mood is calmer before sunset crowds arrive.",
        "ขี่สั้น ๆ จากหาดหลักขึ้นเนินกังหันลม — จุดที่คนไม่ค่อยพูดถึงแต่สวยมาก วิวเกาะและทะเลกว้าง ช่วงบ่ายแก่–เย็นๆ บรรยากาศดี แสงสวย เงียบกว่าหาดหลักก่อนคนแน่นตอนพระอาทิตย์ตก",
        "从主海滩短程上山至风车处——少被提及却极美，可俯瞰全岛与海面。建议傍晚前往，光线出片、氛围比主海滩安静，日落前人还不多。",
        "Короткая поездка к мельнице — мало кто пишет, но вид потрясающий. Лучше под вечер: мягкий свет и спокойнее, чем на главных пляжах.",
      ),
    ),
    mapsUrl: mapsSearch("Koh Larn windmill viewpoint Thailand"),
    openMaps: t(lang, L("Open on map", "เปิดแผนที่", "打开地图", "На карте")),
    images: [
      {
        src: kohLarnGuideImages.viewpointDay,
        alt: t(
          lang,
          L(
            "Windmill viewpoint — daytime panorama over Koh Larn",
            "จุดชมวิวกังหันลม — วิวกลางวันเหนือเกาะล้าน",
            "风车观景台——白天俯瞰格兰岛",
            "Смотровая — панорама днём",
          ),
        ),
        caption: t(lang, L("Daytime", "กลางวัน", "白天", "Днём")),
      },
      {
        src: kohLarnGuideImages.viewpointSunset,
        alt: t(
          lang,
          L(
            "Windmill viewpoint at golden hour",
            "จุดชมวิวกังหันลม — ช่วงพระอาทิตย์ตก",
            "风车观景台——日落时分",
            "Закат у мельницы",
          ),
        ),
        caption: t(lang, L("Sunset", "พระอาทิตย์ตก", "日落", "Закат")),
      },
    ],
  };
}

export function getKohLarnCafes(lang: LanguageCode) {
  return {
    title: t(lang, L("Island cafés with a view", "คาเฟ่วิวดีบนเกาะ", "岛上海景咖啡馆", "Кафе с видом")),
    subtitle: t(
      lang,
      L(
        "Shade, coffee, and sea breeze between beach hops — names locals search for.",
        "พักร่ม กาแฟ ลมทะเล ระหว่างเปลี่ยนหาด — ร้านที่คนพื้นที่มักแนะนำ",
        "换滩间隙避暑喝咖啡——本地人常搜的店名。",
        "Кофе и тень между пляжами.",
      ),
    ),
    items: [
      {
        name: t(lang, L("Maharak Cafe", "มหาราช คาเฟ่", "Maharak Cafe", "Maharak Cafe")),
        text: t(
          lang,
          L(
            "Popular stop for iced drinks and photos — usually on the Samae / central island loop.",
            "จุดแวะเครื่องดื่มเย็นและถ่ายรูป — มักอยู่เส้นทางหาดแสม/กลางเกาะ",
            "冷饮与拍照热门站，多在 Samae 或岛中部环线。",
            "Холодные напитки и фото — у Samae.",
          ),
        ),
        href: mapsSearch("Maharak Cafe Koh Larn"),
        image: kohLarnGuideImages.cafeMaharak,
      },
      {
        name: t(lang, L("Sea You Again Cafe & Eatery", "Sea You Again", "Sea You Again", "Sea You Again")),
        text: t(
          lang,
          L(
            "Casual café-meets-eatery — good for a late lunch or sunset drink away from Ta Waen noise.",
            "คาเฟ่ผสมอาหารจานง่าย — มื้อเย็นหรือดื่มชมวิวห่างเสียงหาดตาแหวน",
            "轻食咖啡馆，适合远离塔湾喧嚣的午餐或日落饮品。",
            "Кафе-закусочная вдали от шума Ta Waen.",
          ),
        ),
        href: mapsSearch("Sea You Again Cafe Koh Larn"),
        image: kohLarnGuideImages.cafeSeaYouAgain,
      },
      {
        name: t(lang, L("Pakron Café", "ปากรอง คาเฟ่", "Pakron Café", "Pakron Café")),
        text: t(
          lang,
          L(
            "Small island café for a slow afternoon — pair with Tien or Samae beach time.",
            "คาเฟ่เล็ก ๆ บรรยากาศชิล — คู่กับหาดเทียนหรือแสม",
            "小岛慢节奏咖啡馆，适合搭配 Tien 或 Samae。",
            "Небольшое кафе — рядом с Tien или Samae.",
          ),
        ),
        href: mapsSearch("Pakron Cafe Koh Larn"),
        image: kohLarnGuideImages.cafePakron,
      },
    ],
  };
}

export function getKohLarnMustTry(lang: LanguageCode) {
  return {
    title: t(lang, L("What to eat on the island", "ของกินที่ควรลอง", "岛上必吃", "Что попробовать")),
    subtitle: t(
      lang,
      L(
        "Order from the board, share plates, and ask what's fresh that morning.",
        "ดูป้ายราคา สั่งแชร์จาน ถามของสดวันนี้",
        "看清价目、适合分享，可问当日鲜货。",
        "Смотрите цены и спрашивайте свежий улов.",
      ),
    ),
    restaurantsTitle: t(
      lang,
      L("Local restaurants to try", "ร้าน local แนะนำ", "推荐本地餐厅", "Местные рестораны"),
    ),
    dishes: [
      t(lang, L("Grilled squid", "หมึกย่าง", "烤鱿鱼", "Кальмар на гриле")),
      t(lang, L("Fried shrimp with fish sauce", "กุ้งทอดน้ำปลา", "鱼露炸虾", "Креветки с рыбным соусом")),
      t(lang, L("Tom yum seafood", "ต้มยำทะเล", "海鲜冬阴功", "Том ям с морепродуктами")),
      t(lang, L("Crab fried rice", "ข้าวผัดปู", "蟹肉炒饭", "Жареный рис с крабом")),
      t(lang, L("Fresh coconut", "น้ำมะพร้าวสด", "新鲜椰子", "Свежий кокос")),
    ],
    restaurants: [
      {
        name: t(lang, L("Kra Ta Koh Larn", "ครัวกระถะ เกาะล้าน", "Kra Ta 格兰岛", "Kra Ta Koh Larn")),
        text: t(
          lang,
          L(
            "Local kitchen known for seafood plates — cash-friendly, best at lunch.",
            "ครัวท้องถิ่นขึ้นชื่อซีฟู้ด — เงินสดสะดวก มื้อเที่ยงดี",
            "本地海鲜小厨，午餐佳，多收现金。",
            "Местная кухня с морепродуктами.",
          ),
        ),
        href: mapsSearch("Kra Ta Koh Larn restaurant"),
        image: kohLarnGuideImages.restaurantKraTa,
      },
      {
        name: t(lang, L("Jarn-A-Roi & Love Eat", "จานอร่อย & Love Eat", "Jarn-A-Roi", "Jarn-A-Roi")),
        text: t(
          lang,
          L(
            "Casual island favourites for Thai comfort food between beach stops.",
            "ร้านโปรดคนท้องถิ่น อาหารไทยจานง่าย ระหว่างเปลี่ยนหาด",
            "岛民常去的泰式简餐，换滩途中很方便。",
            "Простая тайская еда между пляжами.",
          ),
        ),
        href: mapsSearch("Jarn-A-Roi Koh Larn"),
        image: kohLarnGuideImages.restaurantLoveEat,
      },
      {
        name: t(lang, L("Zapp Samantan Koh Larn", "แซป สมันตัน", "Zapp Samantan", "Zapp Samantan")),
        text: t(
          lang,
          L(
            "Relaxed dinner spot — good after an afternoon at Samae or Tien.",
            "มื้อเย็นชิล ๆ หลังบ่ายที่หาดแสมหรือเทียน",
            "下午在 Samae 或 Tien 后适合的轻松晚餐。",
            "Ужин после Samae или Tien.",
          ),
        ),
        href: mapsSearch("Zapp Samantan Koh Larn"),
        image: kohLarnGuideImages.restaurantZappSamantan,
      },
      {
        name: t(
          lang,
          L("Sunset Restaurant", "ซันเซ็ต เรสเทอรองต์", "Sunset Restaurant", "Sunset Restaurant"),
        ),
        text: t(
          lang,
          L(
            "Name says it all — time your visit for golden hour if you are not overnighting.",
            "ชื่อบอกอยู่แล้ว — จับเวลามาช่วงพระอาทิตย์ตกถ้าไม่ค้างคืน",
            "店名即卖点——不过夜的话请卡在日落时段。",
            "Приходите на закат, если уезжаете вечером.",
          ),
        ),
        href: mapsSearch("Sunset Restaurant Koh Larn"),
        image: kohLarnGuideImages.restaurantSunset,
      },
    ],
  };
}

export function getKohLarnSummary(lang: LanguageCode) {
  return {
    title: t(lang, L("Is Koh Larn worth it?", "เกาะล้านคุ้มไหม?", "格兰岛值得去吗？", "Стоит ли ехать?")),
    body: t(
      lang,
      L(
        "Yes for clear water, easy day trips, cafés, and photos without flying south. It is Pattaya's \"near-city island\" — lively, not deserted. For quieter island vibes, Koh Samet or Koh Kut are farther but calmer.",
        "คุ้มถ้าอยากน้ำใส ทริปวันเดียวง่าย คาเฟ่ ถ่ายรูป โดยไม่ต้องบินใต้ เกาะล้านคือ \"เกาะพักใจใกล้เมือง\" คึกคัก ไม่เงียบสนิท ถ้าอยากเงียบมาก ๆ ลองเกาะเสม็ด/เกาะกูด",
        "若想要清澈海水、轻松一日游、咖啡馆与拍照，不必飞南部，很值得。格兰岛是「近城的度假岛」，热闹但不偏远。若要更安静的岛屿氛围，可考虑更远处的沙美或阁骨。",
        "Да — прозрачная вода и поездка на день без перелёта. Это «остров у города», не пустынный. Для тишины — Ко Самет или Ко Куд.",
      ),
    ),
  };
}
