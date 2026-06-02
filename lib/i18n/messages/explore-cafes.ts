import type { LanguageCode } from "@/lib/i18n/languages";
import { cafesImages } from "@/lib/design/cafes-images";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getCafeFirstVisitPicks,
  getCafeGuideIntro,
  getCafeGuideItems,
  getCafeHoppingRoute,
  getCafeMoodPicks,
} from "@/lib/i18n/messages/explore-cafes-guide";

export function getCafeTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Café tips", "เคล็ดลับคาเฟ่", "咖啡馆贴士", "Советы")),
    subtitle: t(
      lang,
      L(
        "Simple tips for café days in Pattaya — the best times to go, where to sit, and how to order what you actually want.",
        "เคล็ดลับก่อนไปคาเฟ่ในพัทยา — ไปเวลาไหนดี นั่งตรงไหนสบาย และสั่งอะไรให้ได้ตามใจ",
        "芭提雅喝咖啡的实用建议——什么时候去、坐哪里更舒服、怎么点到你想要的。",
        "Простые советы для café-дня в Pattaya — когда идти, где сидеть и как заказать то, что хочется.",
      ),
    ),
    items: [
      {
        id: "hours" as const,
        title: t(lang, L("Best hours", "ช่วงเวลาไหนดี", "什么时候去最好", "Когда идти")),
        paragraphs: [
          t(
            lang,
            L(
              "08:00–11:00 is the sweet spot for quiet mornings — good for laptop time, fresh bakery, and photos without crowds. Spots on the hill or north shore (Jomtien, Naklua) usually feel calmer than Beach Road at this hour.",
              "เช้า 08:00–11:00 คือช่วงที่คุ้มสุด — เงียบพอนั่ง laptop ได้ เบเกอรี่ยังสด ถ่ายรูปไม่ต้องแย่งคน โซนบนเขาหรือฝั่งเหนืออย่างจอมเทียน/นาเกลือมักเงียบกว่า Beach Road",
              "8:00–11:00 是早晨黄金时段——适合办公、新鲜烘焙和拍照，人相对少；山上或北部（Jomtien、Naklua）通常比 Beach Road 安静。",
              "08:00–11:00 — тихое утро для ноутбука и выпечки; Jomtien и Naklua спокойнее Beach Road.",
            ),
          ),
          t(
            lang,
            L(
              "17:00–19:00 is prime time for beach cafés and rooftop sunset views — arrive before the light drops. On weekends, brunch queues often hit 10:00–12:00; come before 10:00 or after 13:00 if you hate waiting.",
              "17:00–19:00 เหมาะคาเฟ่ริมทะเลและ rooftop ดูพระอาทิตย์ตก — มาก่อนแสงลง ส่วนสุดสัปดาห์บรันช์ช่วง 10:00–12:00 มักมีคิว ถ้าไม่อยากรอ มาก่อน 10:00 หรือหลัง 13:00",
              "17:00–19:00 适合海滨咖啡和屋顶看日落——最好在光线暗下来前到。周末 10:00–12:00 早午餐常排队，不想等就 10 点前或 13 点后去。",
              "17:00–19:00 — закат у моря и на rooftop; в выходные бранч 10:00–12:00 — очереди.",
            ),
          ),
        ],
      },
      {
        id: "work" as const,
        title: t(lang, L("Working from a café", "นั่งทำงานในร้าน", "在咖啡馆办公", "Работа из кафе")),
        paragraphs: [
          t(
            lang,
            L(
              "Ask about Wi‑Fi and power outlets at the counter before you sit — beachfront tables look great but not every seat has a plug. Garden cafés (Sheeva) and hidden spots (Backstreet) tend to have stronger AC if midday heat is an issue.",
              "ถาม Wi‑Fi และปลั๊กที่เคาน์เตอร์ก่อนนั่ง — โต๊ะริมหาดสวยแต่ไม่ใช่ทุกที่มีปลั๊ก คาเฟ่สวนอย่าง Sheeva หรือร้านลับอย่าง Backstreet มักแอร์เย็นกว่า ถ้ากลางวันร้อน",
              "入座前先问 Wi‑Fi 和插座——海滨位好看，但不是每张桌子都有电源。花园店（Sheeva）或隐蔽店（Backstreet）空调通常更凉，中午更舒服。",
              "Спросите Wi‑Fi и розетки до посадки; у моря не везде есть питание. Sheeva и Backstreet — прохладнее днём.",
            ),
          ),
          t(
            lang,
            L(
              "At busy specialty shops, ordering roughly one drink per hour is the unspoken norm. Off-peak hours are fine for long sits; if people start queuing at the door, it is polite to wrap up and free a table.",
              "ร้าน specialty ที่คนเยอะ มักมีกติกาไม่เป็นลายลักษณ์ว่าสั่งประมาณ 1 แก้วต่อชั่วโมง นอก peak นั่งนานได้ แต่ถ้ามีคิวรอหน้าร้าน ควรเก็บของให้โต๊ะว่าง",
              "人气精品店非正式规则大约是每小时一杯；非高峰可以久坐，但如果门口开始排队，最好收拾让位。",
              "В specialty-кафе неформально ~1 напиток в час; уступите стол, если очередь у входа.",
            ),
          ),
        ],
      },
      {
        id: "seating" as const,
        title: t(lang, L("Pick your seat", "เลือกที่นั่งให้เหมาะ", "怎么选座位", "Выбор места")),
        paragraphs: [
          t(
            lang,
            L(
              "11:00–15:00 — choose indoor or shaded seats. Pattaya sun is harsh even when it looks cloudy, and open decks get uncomfortable fast. Save outdoor and seafront tables for late afternoon when the light turns golden.",
              "11:00–15:00 เลือกที่ในร่มหรือมีร่มเงา — แดดพัทยาแรงแม้ท้องฟ้าเมฆครึ้ม โต๊ะกลางแจ้งร้อนเร็ว เก็บที่นั่งริมทะเล/ดาดฟ้าไว้ช่วงบ่ายแก่ แสงจะสวยกว่า",
              "11:00–15:00 选室内或有荫凉的位子——芭提雅日照很强，阴天也晒；露天位很快会热。海滨和露台留到下午晚些时候，光线更柔和。",
              "11:00–15:00 — внутри или в тени; террасы и море — ближе к вечеру.",
            ),
          ),
          t(
            lang,
            L(
              "If you are planning a full café day, Jomtien and Naklua are worth starting early — many regulars say the best mood and sea views in Pattaya right now cluster in these zones, away from central Beach Road crowds.",
              "ถ้าวางแผนคาเฟ่ฮอปทั้งวัน ลองเริ่มที่จอมเทียนหรือนาเกลือตั้งแต่เช้า — หลายคนบอกว่าช่วงนี้ฟีลและวิวทะเลดีที่สุดอยู่แถวนี้ ห่างจากความวุ่นวาย Beach Road กลางเมือง",
              "如果计划咖啡巡游一整天，建议一早从 Jomtien 或 Naklua 开始——不少常客说目前芭提雅最好的氛围和海景集中在这里，远离市中心 Beach Road 的拥挤。",
              "На полный café-day начните рано с Jomtien или Naklua — лучший mood и вид сейчас там.",
            ),
          ),
        ],
      },
      {
        id: "ordering" as const,
        title: t(lang, L("Order without confusion", "สั่งให้ตรงใจ", "点单不踩雷", "Заказ без сюрпризов")),
        paragraphs: [
          t(
            lang,
            L(
              "Handy Thai phrases: กาแฟเย็น (iced coffee), ร้อน (hot), ไม่หวาน (less sweet). Thai iced coffee is often pre-sweetened — say ไม่หวาน or หวานน้อย when you order. โอเลี้ยง is Thai-style iced black coffee, a different vibe from specialty espresso.",
              "คำไทยที่ใช้บ่อย: กาแฟเย็น ร้อน ไม่หวาน — กาแฟเย็นไทยมักหวานมาแล้ว บอก ไม่หวาน หรือ หวานน้อย ตอนสั่ง โอเลี้ยง คือกาแฟดำเย็นแบบไทย คนละสายกับ specialty espresso",
              "常用泰语：กาแฟเย็น（冰）、ร้อน（热）、ไม่หวาน（少糖）。泰式冰咖啡常预甜，点单时说 ไม่หวาน 或 หวานน้อย。โอเลี้ยง 是泰式冰黑咖，和精品 espresso 不是一路。",
              "Полезно: กาแฟเย็น, ร้อน, ไม่หวาน; โอเลี้ยง — Thai iced black, не specialty espresso.",
            ),
          ),
          t(
            lang,
            L(
              "Plant milk, decaf, and oat options vary shop by shop — ask before you order a pour-over or flat white. Single-origin beans rotate often; most baristas will tell you what is on the bar today if you ask.",
              "นมพืช decaf หรือ oat milk แล้วแต่ร้าน — ถามก่อนสั่ง pour-over หรือ flat white เมล็ด single-origin หมุนเปลี่ยนบ่อย ถามบาริสต้าว่าวันนี้ใช้อะไร ส่วนใหญ่จะบอกได้",
              "植物奶、decaf、燕麦奶因店而异——点 hand brew 或 flat white 前先问。单品豆经常轮换，问 barista 今天用什么豆，一般都会告诉你。",
              "Растительное молоко и decaf — уточняйте; зерно меняется — спросите barista.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getCafesPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: t(lang, L("Cafes", "คาเฟ่", "咖啡馆", "Кафе")) },
    hero: {
      badge: t(lang, L("Cafes", "คาเฟ่", "咖啡馆", "Кафе")),
      title: t(lang, L("Café guide", "คู่มือคาเฟ่", "咖啡指南", "Гид по кафе")),
      subtitle: t(
        lang,
        L(
          "Beach views, specialty roasters & hidden gardens",
          "วิวทะเล specialty & สวนลับ",
          "海景、精品烘焙与隐藏花园",
          "Море, specialty и сады",
        ),
      ),
      body: t(
        lang,
        L(
          "Pattaya is a real café-hopping city — beach-club mornings, serious specialty coffee, and hidden spots with completely different moods. Nine picks sorted by vibe so you can compare and choose.",
          "พัทยาคือสายคาเฟ่ฮอปจริง — มีตั้งแต่คาเฟ่ทะเล vibe ดี ยัน specialty coffee จริงจัง และ hidden gem mood ดี รวม 9 ร้านแนะนำแยกสาย ให้เทียบแล้วเลือกตามฟีล",
          "芭提雅是名副其实的咖啡巡游城市——海滨早晨、认真精品咖啡与气质各异的隐藏店，九家精选按类型分组方便对比。",
          "9 кафе по типу — от моря до specialty и hidden gems.",
        ),
      ),
      badgeSunset: t(lang, L("Sunset & brunch", "พระอาทิตย์ตก & บรันช์", "日落与早午餐", "Закат и бранч")),
      badgeAreas: t(lang, L("Jomtien · Naklua · Central", "จอมเทียน · นาเกลือ · กลางเมือง", "Jomtien · Naklua · 中心", "Jomtien · Naklua · центр")),
    },
    guide: getCafeGuideIntro(lang),
    guideItems: getCafeGuideItems(lang),
    moodPicks: getCafeMoodPicks(lang),
    firstVisit: getCafeFirstVisitPicks(lang),
    hoppingRoute: getCafeHoppingRoute(lang),
    tips: getCafeTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      fineDining: c.fineDining,
      streetFood: c.streetFood,
      localMarkets: c.localMarkets,
      mainBeaches: c.mainBeaches,
    },
    heroImage: cafesImages.hero,
  };
}
