import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getCafesPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: t(lang, L("Cafes", "คาเฟ่", "咖啡馆", "Кафе")) },
    hero: {
      badge: t(lang, L("Cafes", "คาเฟ่", "咖啡馆", "Кафе")),
      title: t(lang, L("Specialty Coffee", "คาเฟ่", "精品咖啡", "Кофе")),
      subtitle: t(lang, L("Cafes", "คาเฟ่", "咖啡馆", "Кафе")),
      body: t(
        lang,
        L(
          "Cafes and specialty coffee spots across Pattaya — from beach-club terraces to hilltop brunch and slow pour-over mornings.",
          "คาเฟ่และกาแฟพิเศษทั่วพัทยา — ริมหาด บนหน้าผา บรันช์",
          "芭提雅精品咖啡与咖啡馆。",
          "Кофейни и specialty coffee Паттайи.",
        ),
      ),
      badgeSunset: t(lang, L("Sunset & brunch", "พระอาทิตย์ตก & บรันช์", "日落与早午餐", "Закат и бранч")),
      badgeAreas: t(lang, L("Jomtien · Beach Rd · Pratumnak", "จอมเทียน · Beach Rd · พระตำหนัก", "Jomtien · Beach Rd · Pratumnak", "Jomtien · Beach Rd · Pratumnak")),
    },
    carousel: {
      title: t(lang, L("Choose your café", "เลือกคาเฟ่", "选择咖啡馆", "Выберите кафе")),
      description: t(
        lang,
        L(
          "Hand-picked venues from the Explore hub — match your mood to the coastline, central bay, or the hill.",
          "คาเฟ่คัดสรร — จับคู่กับชายฝั่ง อ่าวกลาง หรือบนเขา",
          "精选咖啡馆，按海岸、海湾或山丘选择。",
          "Кафе на побережье, в заливе или на холме.",
        ),
      ),
      prev: t(lang, L("Previous cafés", "คาเฟ่ก่อนหน้า", "上一项", "Назад")),
      next: t(lang, L("Next cafés", "คาเฟ่ถัดไป", "下一项", "Далее")),
    },
    cafes: [
      {
        id: "coco-lounge",
        name: t(lang, L("Coco Lounge & Bar", "โคโค่ เลาจน์ แอนด์ บาร์", "Coco Lounge & Bar", "Coco Lounge")),
        nameTh: "",
        tags: [
          t(lang, L("Ocean front", "ริมทะเล", "海滨", "У моря")),
          t(lang, L("Sunset", "พระอาทิตย์ตก", "日落", "Закат")),
          t(lang, L("Cocktails", "ค็อกเทล", "鸡尾酒", "Коктейли")),
        ],
        hours: t(lang, L("Daily · ~10:00–23:00", "ทุกวัน · ~10:00–23:00", "每日 · 约10:00–23:00", "Ежедн. · ~10:00–23:00")),
        location: t(lang, L("Jomtien Beach Rd", "ถ.จอมเทียน", "Jomtien 海滩路", "Jomtien")),
        mustTry: t(lang, L("Iced latte, fresh coconut, beachfront seating", "ลาเต้เย็น มะพร้าว ที่นั่งริมหาด", "冰拿铁、鲜椰", "Iced latte, кокос")),
        excerpt: t(
          lang,
          L(
            "Relaxed beach-club energy with coffee by day and drinks at golden hour. Ideal for long chats facing the Gulf.",
            "บeach club กาแฟกลางวัน ดrink ยามเย็น วิวอ่าว",
            "白天咖啡、黄昏饮品，面向海湾。",
            "Кофе днём, напитки на закате.",
          ),
        ),
      },
      {
        id: "horizon-terrace",
        name: t(lang, L("Horizon Terrace", "ฮอไรซัน เทอร์เรส", "Horizon Terrace", "Horizon Terrace")),
        nameTh: "",
        tags: [
          t(lang, L("Sunset view", "วิวพระอาทิตย์ตก", "日落景观", "Закат")),
          t(lang, L("Pattaya Beach", "หาดพัทยา", "Pattaya Beach", "Pattaya Beach")),
          t(lang, L("Evening", "เย็น", "傍晚", "Вечер")),
        ],
        hours: t(lang, L("Daily · ~11:00–02:00", "ทุกวัน · ~11:00–02:00", "每日 · 约11:00–02:00", "Ежедн. · ~11:00–02:00")),
        location: t(lang, L("Pattaya Beach Rd", "ถ. Beach Rd", "Pattaya Beach Rd", "Beach Rd")),
        mustTry: t(lang, L("Espresso tonic, sunset mocktails, light bites", "เอสpresso tonic mocktail ของว่าง", "Espresso tonic、 mocktail", "Espresso tonic")),
        excerpt: t(
          lang,
          L(
            "Elevated terrace vibes above the central bay — come before dusk for the best light and breeze.",
            "เทอร์เรสเหนืออ่าวกลาง — มาก่อนค่ำ แสงและลมดี",
            "中央海湾露台，黄昏前最佳。",
            "Терраса над заливом — до заката.",
          ),
        ),
      },
      {
        id: "bake-bloom",
        name: t(lang, L("Bake & Bloom", "เบค แอนด์ บลูม", "Bake & Bloom", "Bake & Bloom")),
        nameTh: "",
        tags: [
          t(lang, L("Artisan", "อาร์ตisan", "手工", "Artisan")),
          t(lang, L("Brunch", "บรันช์", "早午餐", "Бранч")),
          t(lang, L("Pratumnak", "พระตำหนัก", "Pratumnak", "Pratumnak")),
        ],
        hours: t(lang, L("Daily · ~08:00–18:00", "ทุกวัน · ~08:00–18:00", "每日 · 约8:00–18:00", "Ежедн. · ~8:00–18:00")),
        location: t(lang, L("Pratumnak Hill", "เขาพระตำหนัก", "Pratumnak 山", "Pratumnak")),
        mustTry: t(lang, L("Pour-over single origin, house pastries, avocado toast", "พูรโอเวอร์ เบเกอรี่ อาโวคาโdo toast", "手冲、烘焙、牛油果吐司", "Pour-over, выпечка")),
        excerpt: t(
          lang,
          L(
            "Specialty roasts and bakery-forward brunch in a leafy hill setting — a favourite for slow mornings.",
            "คั่วพิเศษ เบเกอรี่ บรันช์บนเขา — เช้าช้าๆ",
            "山上精品烘焙与早午餐。",
            "Specialty и выпечка на холме.",
          ),
        ),
      },
      {
        id: "pratumnak-view",
        name: t(lang, L("Clifftop Coffee Corners", "คาเฟ่ริมหน้าผา พระตำหนัก", "悬崖咖啡角", "Clifftop Coffee")),
        nameTh: "",
        tags: [
          t(lang, L("Viewpoint", "จุดชมวิว", "观景点", "Вид")),
          t(lang, L("Photo spot", "ถ่ายรูป", "拍照", "Фото")),
          t(lang, L("Quiet", "เงียบ", "安静", "Тихо")),
        ],
        hours: t(lang, L("Daily · ~09:00–20:00", "ทุกวัน · ~09:00–20:00", "每日 · 约9:00–20:00", "Ежедн. · ~9:00–20:00")),
        location: t(lang, L("Pratumnak / Cosy Beach area", "พระตำหนัก / Cosy Beach", "Pratumnak / Cosy Beach", "Pratumnak")),
        mustTry: t(lang, L("Cappuccino, Thai tea soft-serve, cliff panoramas", "คาปูชิโน่ ชาไทย soft-serve วิวหน้าผา", "卡布、泰茶 soft-serve", "Cappuccino, Thai tea")),
        excerpt: t(
          lang,
          L(
            "Small footprint cafés tucked into the hill with big views — perfect between beach time and dinner plans.",
            "คาเฟ่เล็กบนเขา วิวใหญ่ — ระหว่างหาดกับดินเนอร์",
            "小山丘小咖啡馆，大视野。",
            "Маленькие кафе с большим видом.",
          ),
        ),
      },
    ],
    styles: {
      title: t(lang, L("What to order", "สั่งอะไร", "点什么", "Что заказать")),
      subtitle: t(lang, L("Four coffee-house styles you will see again and again in Pattaya.", "4 สไตล์คาเฟ่ที่พบบ่อยในพัทยา", "芭提雅常见的四种风格。", "Четыре стиля кофеен.")),
      items: [
        {
          name: t(lang, L("Single-origin pour-over", "พูรโอเวอร์", "单品手冲", "Pour-over")),
          nameTh: lang === "en" ? "พูรโอเวอร์" : "",
          note: t(lang, L("Ask which beans are on rotation; light roasts suit Pattaya's heat.", "ถามเมล็ดที่ใช้ คั่วอ่อนเหมาะอากาศร้อน", "询问当日豆子，浅烘适合炎热。", "Спросите про зерно.")),
        },
        {
          name: t(lang, L("Thai tea & coffee", "ชาไทย / กาแฟโบราณ", "泰式茶与咖啡", "Thai tea & coffee")),
          nameTh: lang === "en" ? "ชาไทย / กาแฟโบราณ" : "",
          note: t(lang, L("Sweetened classics over ice — specify less sugar ('mai wan').", "หวานคลาสสิก — บอก 'ไม่หวาน'", "经典冰饮，可要求少糖。", "Скажите «меньше сахара».")),
        },
        {
          name: t(lang, L("Brunch plates", "บรันช์", "早午餐", "Бранч")),
          nameTh: lang === "en" ? "บรันช์" : "",
          note: t(lang, L("Weekends fill 10:00–12:00; reserve if the venue offers booking.", "สุดสัปดาห์ 10–12 คนเยอะ จองถ้ามี", "周末10–12点较满。", "В выходные 10–12 занято.")),
        },
        {
          name: t(lang, L("Dessert & bakery", "เบเกอรี่", "甜点与烘焙", "Выпечка")),
          nameTh: lang === "en" ? "เบเกอรี่" : "",
          note: t(lang, L("Croissants, basque cheesecake, and local fruit tarts pair well with flat whites.", "ครัวซอง basque ทาร์ตผลไม้ คู่ flat white", "可颂、巴斯克、水果塔。", "Круассаны и basque cheesecake.")),
        },
      ],
    },
    tips: {
      title: t(lang, L("Café tips", "เคล็ดลับคาเฟ่", "咖啡馆贴士", "Советы")),
      subtitle: t(lang, L("Small habits that make mornings and sunsets smoother.", "นิสัยเล็กๆ ให้เช้าและเย็นสบาย", "让晨间与日落更顺畅。", "Мелочи для комфорта.")),
      items: [
        {
          title: t(lang, L("Best hours", "ช่วงเวลาดี", "最佳时段", "Время")),
          text: t(lang, L("Morning for quiet laptop sessions; 17:00–19:00 for sunset terraces and photo light.", "เช้าเงียบสำหรับ laptop 17–19 แสงพระอาทิตย์ตก", "早晨安静办公，17–19点日落。", "Утро — тихо; 17–19 — закат.")),
        },
        {
          title: t(lang, L("Work-friendly", "ทำงานได้", "适合办公", "Для работы")),
          text: t(lang, L("Check power outlets and AC — hill cafés cool faster; beach spots can be breezy and loud.", "เช็คปลั๊กและแอร์ บนเขาเย็น ริมหาดลมแรง", "检查插座与空调。", "Проверьте розетки и кондиционер.")),
        },
        {
          title: t(lang, L("Seating choice", "เลือกที่นั่ง", "选座", "Места")),
          text: t(lang, L("Indoor for midday heat; outdoor decks for golden hour — bring light layers after dark.", "ในอาคารกลางวัน กลางแจ้งยามเย็น เอาเสื้อบาง", "中午室内，黄昏户外。", "Днём внутри, на закат — снаружи.")),
        },
        {
          title: t(lang, L("Order like a local", "สั่งแบบคนท้องถิ่น", "像本地人点单", "Как местные")),
          text: t(lang, L("'Kafe yen' (iced coffee), 'kafe ron' (hot), 'mai wan' (less sweet). Plant milk varies by shop.", "'กาแฟเย็น' 'ร้อน' 'ไม่หวาน' นมพืชแล้วแต่ร้าน", "冰/热咖啡，少糖。", "«Kafe yen», «mai wan».")),
        },
      ],
    },
    alsoExplore: {
      title: c.alsoExplore,
      fineDining: c.fineDining,
      streetFood: c.streetFood,
      mainBeaches: c.mainBeaches,
    },
  };
}
