import type { LanguageCode } from "@/lib/i18n/languages";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { kohLarnActivityImages } from "@/lib/design/koh-larn-activity-images";
import { kohLarnBeachMaps } from "@/lib/design/koh-larn-beach-maps";
import { kohLarnGuideImages } from "@/lib/design/koh-larn-guide-images";
import { kohLarnMaps } from "@/lib/design/koh-larn-maps";
import { kohLarnNearbyImages } from "@/lib/design/koh-larn-nearby-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getKohLarnCafes,
  getKohLarnDayPlan,
  getKohLarnFirstTimerTips,
  getKohLarnMustTry,
  getKohLarnOvernightTip,
  getKohLarnSummary,
  getKohLarnViewpoint,
} from "@/lib/i18n/messages/explore-koh-larn-guide";

type NearbyItem = { name: string; text: string; href: string };

export function getKohLarnPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      islands: c.islands,
      current: t(lang, L("Koh Larn", "เกาะล้าน", "格兰岛", "Ко Лан")),
    },
    hero: {
      badge: c.islands,
      title: t(lang, L("Koh Larn", "เกาะล้าน", "格兰岛", "Ко Лан")),
      subtitle: t(lang, L("Island day trips", "ทริปเกาะ", "岛上一日游", "Островной день")),
      body: t(
        lang,
        L(
          "More than a quick swim — Koh Larn is Pattaya's easy island escape: clearer water than the mainland, four main beach moods, cafés, and day trips that still work for Bangkok weekends.",
          "มากกว่าแค่ลงเล่นน้ำ — เกาะล้านคือเกาะพักใจใกล้พัทยา น้ำใสกว่าฝั่งแผ่นดิน หลายหาดหลายฟีล มีคาเฟ่ ทริปวันเดียวจากกรุงเทพก็ไหว",
          "不只是玩水——格兰岛是芭提雅最便捷的海岛：海水比本岛更清、海滩各具性格、有咖啡馆，曼谷周末也能轻松往返。",
          "Больше, чем купание — Ко Лан рядом с Паттайей: вода чище, разные пляжи, кафе, поездка на день из Бангкока.",
        ),
      ),
      badgeBeaches: t(lang, L("8 Main Beaches", "8 หาดหลัก", "8 片主海滩", "8 пляжей")),
      badgeFerry: t(lang, L("30 mins from Pattaya", "30 นาทีจากพัทยา", "距芭提雅30分钟", "30 мин от Паттайи")),
      badgeTop: t(lang, L("Top Destination", "จุดหมายยอดนิยม", "热门目的地", "Топ направление")),
    },
    tripPlanner: {
      ariaLabel: t(lang, L("Plan your day trip", "วางแผนทริปวันเดียว", "规划一日游", "План поездки")),
      title: t(lang, L("Plan your day trip", "วางแผนทริปวันเดียว", "规划一日游", "План поездки")),
      subtitle: t(
        lang,
        L(
          "No online booking here yet — use the links below for ferry info, beach picks, and what to expect on the island.",
          "ยังไม่มีจองออนไลน์ — ใช้ลิงก์ด้านล่างดูท่าเรือ เลือกหาด และกิจกรรมบนเกาะ",
          "暂无在线预订 — 点击下方链接查看码头、选海滩与岛上活动说明。",
          "Онлайн-брони пока нет — ссылки ниже для причала и пляжей.",
        ),
      ),
      actions: [
        {
          id: "ferry" as const,
          label: t(lang, L("Ferry & Bali Hai Pier", "ท่าเรือ & เรือ", "渡轮与码头", "Паром и причал")),
          blurb: t(
            lang,
            L("Tickets, times & map", "ตั๋ว เวลา แผนที่", "票务、时间与地图", "Билеты и карта"),
          ),
          href: "#ferry-guide",
        },
        {
          id: "beach" as const,
          label: t(lang, L("Pick a beach", "เลือกหาด", "选海滩", "Выбрать пляж")),
          blurb: t(
            lang,
            L("Ta Waen, Samae, Tien…", "ตาแหวน แสม เทียน…", "塔湾、Samae、Tien…", "Ta Waen, Samae, Tien…"),
          ),
          href: "#beach-guide",
        },
        {
          id: "activities" as const,
          label: t(lang, L("Water sports", "กิจกรรมทางน้ำ", "水上活动", "Водные виды")),
          blurb: t(
            lang,
            L("Book on the beach at Ta Waen", "จองที่หาดตาแหวนเมื่อถึง", "到塔湾后在海滩预订", "На пляже Ta Waen"),
          ),
          href: "#activities",
        },
      ],
    },
    about: {
      title: t(lang, L("About Koh Larn in 1 minute", "รู้จักเกาะล้านใน 1 นาที", "一分钟了解格兰岛", "Ко Лан за минуту")),
      body: t(
        lang,
        L(
          "A few kilometres off Pattaya — easy ferries from Bali Hai Pier, busier hubs like Ta Waen, balanced Samae, slow Tien, and wild Nual with macaques. Most visitors day-trip; staying overnight changes the atmosphere after 5 p.m.",
          "ห่างพัทยาไม่กี่กม. เรือจากแหลมบาลีฮาย หาดตาแหวนคึกคัก แสมสมดุล เทียนชิล นวลมีลิง ส่วนใหญ่ไปเช้าเย็นกลับ ค้างคืนฟีลต่างหลังบ่าย 4–5",
          "距芭提雅仅数公里，Bali Hai 码头乘船即达：塔湾热闹、Samae均衡、Tien安静、Nual有猴。多数一日游，下午四五点后过夜氛围截然不同。",
          "В нескольких км от Паттайи — паром с Bali Hai: Ta Waen, Samae, Tien, Nual. Большинство на день; ночёвка — другой остров после 17:00.",
        ),
      ),
      sourceNote: t(
        lang,
        L(
          "Ferry times and prices change — confirm at the pier counter on the day you travel.",
          "เวลาเรือและราคาเปลี่ยนได้ — ยืนยันที่เคาน์เตอร์ในท่าวันเดินทาง",
          "船班与票价可能变动——出行当日请在码头柜台确认。",
          "Расписание и цены уточняйте в кассе в день поездки.",
        ),
      ),
    },
    keyInfo: {
      title: t(lang, L("Key info", "ข้อมูลสำคัญ", "关键信息", "Важно")),
      transport: {
        label: t(lang, L("Getting there", "การเดินทาง", "交通", "Как добраться")),
        text: t(
          lang,
          L(
            "Speedboat 15 min / larger ferry 30–45 min from Bali Hai Pier",
            "เรือสปีดโบ๊ท 15 นาที / เรือใหญ่ 30–45 นาที จากแหลมบาลีฮาย",
            "快艇15分钟 / 大船30–45分钟，Bali Hai 码头",
            "Катер 15 мин / паром 30–45 мин от Bali Hai",
          ),
        ),
      },
      season: {
        label: t(lang, L("Best season", "ช่วงเวลาแนะนำ", "最佳季节", "Сезон")),
        text: t(
          lang,
          L("Nov–Apr (calmer seas, clearest water)", "พ.ย.–เม.ย. (คลื่นลมสงบ น้ำใสที่สุด)", "11–4月（海况较稳）", "Ноя–апр — спокойнее море"),
        ),
      },
      islandTransport: {
        label: t(lang, L("On-island transport", "ยานพาหนะบนเกาะ", "岛上交通", "На острове")),
        text: t(
          lang,
          L(
            "Songthaew hops ~20–50 THB; motorbike ~250–400 THB/day — island hills are steep, so ride carefully or stick to songthaews if you are not used to slopes.",
            "สองแถว ~20–50 บาท มอเตอร์ไซค์ ~250–400 บาท/วัน — ถนนชัน ขับระวังหรือนั่งสองแถวถ้าไม่ชินทางลาด",
            "双条车约20–50泰铢；摩托约250–400泰铢/天——岛上坡陡，不熟山路建议坐双条车。",
            "Songthaew ~20–50 бат; байк ~250–400 бат — крутые холмы.",
          ),
        ),
      },
    },
    activities: {
      title: t(
        lang,
        L("Water sports & island activities", "กิจกรรมทางน้ำบนเกาะ", "岛上水上活动", "Водные активности"),
      ),
      subtitle: t(
        lang,
        L(
          "Book on the beach when you arrive — price ranges are guides only, not live listings.",
          "จองหน้างานที่หาด — ราคาเป็นคร่าวๆ ไม่ใช่รายการจองออนไลน์",
          "到海滩后现场预订 — 价格为参考区间，非实时报价。",
          "Бронь на пляже — цены ориентировочные.",
        ),
      ),
      costsLink: t(lang, L("All typical costs →", "ค่าใช้จ่ายทั้งหมด →", "全部大致花费 →", "Все цены →")),
      priceRangeLabel: t(lang, L("Typical range", "ราคาโดยประมาณ", "大致价格", "Примерно")),
      items: [
        {
          id: "snorkeling" as const,
          name: t(lang, L("Snorkeling", "ดำน้ำตื้น", "浮潜", "Снорклинг")),
          priceRange: t(lang, L("~300–800 THB / person", "~300–800 บาท/คน", "约300–800泰铢/人", "~300–800 бат")),
          text: t(
            lang,
            L(
              "Rent gear on the beach or join a short boat trip from Ta Waen — clearest water Nov–Apr.",
              "เช่าอุปกรณ์ริมหาด หรือตามเรือสั้นๆ จากตาแหวน — น้ำใสสุด พ.ย.–เม.ย.",
              "海滩租装备或从塔湾跟短程船，11–4月水质最佳。",
              "Аренда снаряжения или лодка с Ta Waen.",
            ),
          ),
          href: "#beach-guide",
          linkLabel: t(lang, L("Pick a beach →", "เลือกหาด →", "选海滩 →", "Выбрать пляж →")),
          external: false,
          image: kohLarnActivityImages[0],
        },
        {
          id: "island-tour" as const,
          name: t(lang, L("Half-day island loop", "ทัวร์รอบเกาะครึ่งวัน", "半日环岛", "Тур по острову")),
          priceRange: t(lang, L("~500–800 THB / person", "~500–800 บาท/คน", "约500–800泰铢/人", "~500–800 бат")),
          text: t(
            lang,
            L(
              "Speedboats circle Koh Larn from the pier or Ta Waen — confirm stops, duration, and return time before paying.",
              "เรือเร็วอ้อมเกาะจากท่าหรือตาแหวน — ยืนยนจุดแวะ เวลา และเรือกลับก่อนจ่าย",
              "从码头或塔湾出发环岛快艇 — 付款前确认停靠点与返程时间。",
              "Катер вокруг острова — уточните остановки и возврат.",
            ),
          ),
          href: kohLarnBeachMaps.tawaen.openHref,
          linkLabel: t(lang, L("Open Ta Waen on map →", "เปิดแผนที่ตาแหวน →", "打开塔湾地图 →", "Карта Ta Waen →")),
          external: true,
          image: kohLarnActivityImages[1],
        },
        {
          id: "jetski" as const,
          name: t(lang, L("Jet ski & banana boat", "เจ็ทสกี & บานาน่า", "摩托艇与香蕉船", "Jet ski & banana boat")),
          priceRange: t(lang, L("~800–1,500 THB / session", "~800–1,500 บาท/รอบ", "约800–1500泰铢/次", "~800–1500 бат")),
          text: t(
            lang,
            L(
              "Operators line Ta Waen Beach — compare 2–3 stalls and agree price plus route in writing.",
              "ร้านเรียงริมหาดตาแหวน — เทียบ 2–3 ร้าน ตกลงราคาและเส้นทางเป็นลายลักษณ์อักษร",
              "塔湾海滩有多家运营商 — 货比三家并书面确认价格与路线。",
              "На Ta Waen — сравните 2–3 операторов, цена письменно.",
            ),
          ),
          href: kohLarnBeachMaps.tawaen.openHref,
          linkLabel: t(lang, L("Open on map →", "เปิดแผนที่ →", "打开地图 →", "На карте →")),
          external: true,
          image: kohLarnActivityImages[2],
        },
        {
          id: "parasailing" as const,
          name: t(lang, L("Parasailing", "พาราเซลลิ่ง", "滑翔伞", "Parasailing")),
          priceRange: t(lang, L("~1,000–1,500 THB / flight", "~1,000–1,500 บาท/รอบ", "约1000–1500泰铢/次", "~1000–1500 бат")),
          text: t(
            lang,
            L(
              "Often run from Ta Waen when wind is calm — may pause on gusty days; life jacket required.",
              "มักเปิดที่หาดตาแหวนเมื่อลมสงบ — วันลมแรงอาจหยุด ต้องใส่ชูชีพ",
              "通常在塔湾风小时运营 — 大风可能暂停，须穿救生衣。",
              "Чаще на Ta Waen при штиле — при ветре отменяют.",
            ),
          ),
          href: "#beach-guide",
          linkLabel: t(lang, L("See Ta Waen guide →", "ดูคู่มือตาแหวน →", "查看塔湾指南 →", "Гид Ta Waen →")),
          external: false,
          image: kohLarnActivityImages[3],
        },
      ],
    },
    beachGuide: {
      title: t(
        lang,
        L(
          "Which beach? Koh Larn shoreline guide",
          "เที่ยวหาดไหนดี? คู่มือรวมชายหาดเกาะล้าน",
          "选哪片海滩？格兰岛海岸指南",
          "Какой пляж? Гид по Ко Лан",
        ),
      ),
      subtitle: t(
        lang,
        L(
          "Pick the beach that matches your travel style",
          "เลือกหาดที่เหมาะกับสไตล์การเที่ยวของคุณ",
          "按你的旅行风格选海滩",
          "Выберите пляж под ваш стиль",
        ),
      ),
      tablistLabel: t(lang, L("Koh Larn beaches", "ชายหาดเกาะล้าน", "格兰岛海滩", "Пляжи Ко Лан")),
      meta: {
        bestFor: t(lang, L("Best for", "เหมาะกับ", "适合", "Подходит")),
        crowd: t(lang, L("Crowd level", "ความคึกคัก", "人流", "Людность")),
        access: t(lang, L("From Bali Hai pier", "จากท่าบาลีฮาย", "从 Bali Hai 码头", "От Bali Hai")),
        openMaps: t(lang, L("Open beach on map →", "เปิดแผนที่หาด →", "在地图中打开 →", "На карте →")),
      },
      beaches: [
        {
          id: "tawaen" as const,
          label: t(lang, L("Ta Waen Beach", "หาดตาแหวน", "塔湾海滩", "Ta Waen")),
          description: t(
            lang,
            L(
              "The island's main hub — pier landing, rows of beach chairs, restaurants, jet skis and parasailing. Best if you want everything in one place.",
              "หาดหลักของเกาะ — เรือจอด เก้าอี้เรียงราย ร้านอาหาร เจ็ทสกี พาราเซล ครบในที่เดียว",
              "岛上主海滩：码头接驳、躺椅、餐饮与水上运动一应俱全。",
              "Главный пляж — причал, еда, водные виды.",
            ),
          ),
          bestFor: t(
            lang,
            L("Families, first-timers, water sports", "ครอบครัว มาครั้งแรก กิจกรรมทางน้ำ", "家庭、首次到访、水上运动", "Семьи и водные виды"),
          ),
          crowd: t(lang, L("Busiest on weekends", "คนเยอะสุดวันหยุด", "周末最热闹", "Многолюдно в выходные"),
          ),
          access: t(
            lang,
            L("Ferry docks here — songthaew to other beaches ~10–20 THB", "เรือจอดที่นี่ — สองแถวไปหาดอื่น ~10–20 บาท", "渡轮在此靠岸，去其他海滩双条车约10–20泰铢", "Паром сюда; songthaew ~10–20 бат"),
          ),
          mapsUrl: kohLarnBeachMaps.tawaen.openHref,
          features: [
            t(lang, L("Swimming", "ว่ายน้ำได้", "可游泳", "Купание")),
            t(lang, L("Food", "มีอาหาร", "有餐饮", "Еда")),
            t(lang, L("Water sports", "กิจกรรมทางน้ำ", "水上运动", "Водные виды")),
          ],
        },
        {
          id: "samae" as const,
          label: t(lang, L("Samae Beach", "หาดแสม", "Samae 海滩", "Samae")),
          description: t(
            lang,
            L(
              "The sweet spot — turquoise water, sunset views, and cafés without Ta Waen crowds. Locals' pick for a balanced day.",
              "จุดสมดุล — น้ำสวย พระอาทิตย์ตกดี มีคาเฟ่ คนไม่อัดเท่าตาแหวน คนพื้นที่แนะนำบ่อย",
              "水质好、日落佳、有咖啡馆且比塔湾人少——本地人常推荐的均衡之选。",
              "Баланс — чистая вода, закаты, кафе, меньше людей, чем на Ta Waen.",
            ),
          ),
          bestFor: t(
            lang,
            L("Photos, cafés, first-timers who want calm-ish water", "ถ่ายรูป คาเฟ่ มาครั้งแรกอยากได้น้ำใสแต่ไม่เงียบสนิท", "摄影、咖啡馆、首次到访想要清静些的海水", "Фото, кафе, первый визит"),
          ),
          crowd: t(lang, L("Busy at sunset, calmer mornings", "เย็นคนเยอะ เช้าสงบกว่า", "日落时较热闹，早晨更静", "На закате люднее"),
          ),
          access: t(
            lang,
            L("Songthaew from Ta Waen ~10–15 min; popular on day-trip loops", "สองแถวจากตาแหวน ~10–15 นาที อยู่ในเส้นทางทัวร์รอบเกาะ", "从塔湾双条车约10–15分钟，常出现在环岛线", "10–15 мин songthaew от Ta Waen"),
          ),
          mapsUrl: kohLarnBeachMaps.samae.openHref,
          features: [
            t(lang, L("Swimming", "ว่ายน้ำได้", "可游泳", "Купание")),
            t(lang, L("Cafés", "มีคาเฟ่", "咖啡馆", "Кафе")),
            t(lang, L("Sunset", "พระอาทิตย์ตกสวย", "日落", "Закат")),
          ],
        },
        {
          id: "nual" as const,
          label: t(lang, L("Nual Beach (Monkey Beach)", "หาดนวล (หาดลิง)", "Nual 海滩（猴滩）", "Nual (обезьяны)")),
          description: t(
            lang,
            L(
              "Scenic bay with white sand and turquoise water — famous for wild macaques on the rocks. Great for photos; keep food sealed and don't feed the monkeys.",
              "อ่าวสวย น้ำใส มีลิงป่าบนหิน — ถ่ายรูปดี เก็บอาหารให้มิดชิด อย่าให้อาหารลิง",
              "白沙海湾，岩石上有野生猕猴，适合拍照；勿投喂。",
              "Живописная бухта и макаки — не кормите.",
            ),
          ),
          bestFor: t(lang, L("Photos, nature, quieter swim", "ถ่ายรูป ธรรมชาติ ว่ายเงียบกว่า", "摄影、自然、较安静", "Фото и природа"),
          ),
          crowd: t(lang, L("Moderate — tour boats visit", "ปานกลาง — มีเรือทัวร์แวะ", "中等，有游船停靠", "Умеренно — туры"),
          ),
          access: t(
            lang,
            L("Songthaew or motorbike ~10–15 min from Ta Waen", "สองแถว/มอเตอร์ไซค์จากตาแหวน ~10–15 นาที", "从塔湾双条车/摩托约10–15分钟", "10–15 мин от Ta Waen"),
          ),
          mapsUrl: kohLarnBeachMaps.nual.openHref,
          features: [
            t(lang, L("Swimming", "ว่ายน้ำได้", "可游泳", "Купание")),
            t(lang, L("Wild monkeys", "มีลิงป่า", "野生猴", "Обезьяны")),
            t(lang, L("Photo spot", "จุดถ่ายรูป", "拍照点", "Фото")),
          ],
        },
        {
          id: "tien" as const,
          label: t(lang, L("Tien Beach", "หาดเทียน", "Tien 海滩", "Tien")),
          description: t(
            lang,
            L(
              "Beautiful curved bay with very clear water in peak season — seaside restaurants and one of the island's best sunsets.",
              "หาดโค้งสวย น้ำใสมากในฤดูท่องเที่ยว — ร้านริมทะเล พระอาทิตย์ตกสวย",
              "优美海湾，旺季海水极清，日落绝佳。",
              "Живописная бухта и закаты.",
            ),
          ),
          bestFor: t(lang, L("Sunset dinners, couples, clear water", "ดินเนอร์พระอาทิตย์ตก คู่รัก น้ำใส", "日落晚餐、情侣、清澈海水", "Закаты и ужин"),
          ),
          crowd: t(lang, L("Popular at sunset", "คนเยอเย็นๆ ตอนพระอาทิตย์ตก", "傍晚人气高", "Многолюдно на закате"),
          ),
          access: t(
            lang,
            L("Songthaew from Ta Waen ~15–20 min; some speedboats stop nearby", "สองแถวจากตาแหวน ~15–20 นาที เรือเร็วบางลำแวะใกล้ๆ", "从塔湾约15–20分钟", "15–20 мин songthaew"),
          ),
          mapsUrl: kohLarnBeachMaps.tien.openHref,
          features: [
            t(lang, L("Swimming", "ว่ายน้ำได้", "可游泳", "Купание")),
            t(lang, L("Food", "มีอาหาร", "有餐饮", "Еда")),
            t(lang, L("Sunset", "พระอาทิตย์ตกสวย", "日落", "Закат")),
          ],
        },
      ],
    },
    directory: {
      title: t(
        lang,
        L(
          "Eat & stay on Koh Larn",
          "กิน & พักบนเกาะล้าน",
          "格兰岛餐饮与住宿",
          "Еда и ночёвка на Ко Лан",
        ),
      ),
      subtitle: t(
        lang,
        L(
          "Practical tips by beach — most visitors day-trip from Pattaya. We do not list paid promotions yet.",
          "แนะนำตามหาด — ส่วนใหญ่ไปเช้าเย็นกลับจากพัทยา ยังไม่มีรายการโปรโมชั่นเชิงพาณิชย์",
          "按海滩实用建议 — 多数为芭提雅一日游，暂无商业推广。",
          "Советы по пляжам — большинство едут с Паттайи на день.",
        ),
      ),
      eatTitle: t(lang, L("Where to eat", "กินที่ไหนดี?", "在哪吃", "Где поесть")),
      stayTitle: t(lang, L("Where to stay", "พักที่ไหนดี?", "在哪住", "Где остановиться")),
      eat: [
        {
          name: t(
            lang,
            L("Ta Waen beachfront", "ริมหาดตาแหวน", "塔湾海滨", "Набережная Ta Waen"),
          ),
          text: t(
            lang,
            L(
              "Rows of seafood shacks right where the ferry lands — check the price board before ordering; lunch 200–400 THB/person is common.",
              "ร้านอาหารทะเลเรียงริมทางเดินหลังลงเรือ — ดูป้ายราคาก่อนสั่ง มื้อเที่ยง ~200–400 บาท/คน",
              "渡轮靠岸后沿步道有多家海鲜档，点菜前看清价目，午餐常见约200–400泰铢/人。",
              "Морепродукты у причала — проверьте цены, обед ~200–400 бат.",
            ),
          ),
          href: kohLarnBeachMaps.tawaen.openHref,
          linkLabel: t(lang, L("Open on map →", "เปิดแผนที่ →", "打开地图 →", "На карте →")),
          external: true,
          image: kohLarnGuideImages.eatTawaen,
        },
        {
          name: t(lang, L("Tien bay restaurants", "ร้านริมอ่าวเทียน", "Tien 湾餐厅", "Рестораны Tien")),
          text: t(
            lang,
            L(
              "Curved bay with seaside tables — best for a relaxed meal or sunset drinks; slightly pricier than Ta Waen.",
              "อ่าวโค้ง โต๊ะริมทะเล — มื้อเย็น/ดื่มชมพระอาทิตย์ตก ราคาสูงกว่าตาแหวนเล็กน้อย",
              "海湾边餐桌，适合晚餐或日落饮品，略贵于塔湾。",
              "Бухта Tien — ужин и закат, чуть дороже Ta Waen.",
            ),
          ),
          href: kohLarnBeachMaps.tien.openHref,
          linkLabel: t(lang, L("Open on map →", "เปิดแผนที่ →", "打开地图 →", "На карте →")),
          external: true,
          image: kohLarnGuideImages.eatTien,
        },
      ],
      stay: [
        {
          name: t(lang, L("Day trip (most common)", "ไปเช้าเย็นกลับ (นิยม)", "一日游（最常见）", "На один день")),
          text: t(
            lang,
            L(
              "Catch the first ferry out and a late-afternoon return — no hotel needed. Store bags at beach chair rentals if you hop beaches.",
              "นั่งเรือเช้า กลับบ่ายแก่ๆ ไม่ต้องจองที่พัก ฝากของได้ที่ร้านเช่าเก้าอี้เมื่อเปลี่ยนหาด",
              "早班船去、下午返程即可，换海滩时可将行李寄放在躺椅租赁处。",
              "Утренний паром туда, вечером обратно — отель не нужен.",
            ),
          ),
          href: "#beach-guide",
          linkLabel: t(lang, L("Pick a beach →", "เลือกหาด →", "选海滩 →", "Выбрать пляж →")),
          external: false,
          image: kohLarnGuideImages.stayDayTrip,
        },
        {
          name: t(lang, L("Overnight on the island", "ค้างคืนบนเกาะ", "岛上过夜", "Ночёвка на острове")),
          text: t(
            lang,
            L(
              "Small resorts and bungalows near Ta Waen and Tien — book ahead Fri–Sun. Expect 800–2,500+ THB/night; power and Wi‑Fi vary by property.",
              "รีสอร์ท/บังกะโลใกล้ตาแหวนและเทียน — ศ–อา จองล่วงหน้า ~800–2,500+ บาท/คื ไฟ/Wi‑Fi แล้วแต่ที่",
              "塔湾与 Tien 附近有小型度假村与 bungalow，周五至周日宜提前订，约800–2500+泰铢/晚。",
              "Бунгало у Ta Waen/Tien — бронь на выходные, ~800–2500+ бат.",
            ),
          ),
          href: "#beach-guide",
          linkLabel: t(lang, L("Compare beaches →", "เทียบหาด →", "对比海滩 →", "Сравнить пляжи →")),
          external: false,
          image: kohLarnGuideImages.stayOvernight,
        },
      ],
    },
    ferry: {
      title: t(
        lang,
        L("Bali Hai Pier & ferries", "ท่าเรือบาลีฮาย & เรือไปเกาะ", "Bali Hai 码头与渡轮", "Причал Bali Hai"),
      ),
      body: t(
        lang,
        L(
          "All Koh Larn day trips start at Bali Hai Pier (south Pattaya). Buy tickets at official counters inside the pier — avoid touts on the street. Speedboats leave when full; larger ferries run on a schedule and are cheaper but slower.",
          "ทริปเกาะล้านออกจากแหลมบาลีฮาย (ใต้พัทยา) ซื้อตั๋วที่เคาน์เตอร์ในท่า ระวังคนเร่งรัดหน้าท่า เรือเร็วออกเมื่อคนครบ เรือใหญ่ตามเวลา ถูกกว่าแต่ช้ากว่า",
          "格兰岛行程从 Bali Hai 码头（芭提雅南侧）出发，请在码头内官方柜台购票。快艇满员即走，大船按班次更便宜但更慢。",
          "Рейсы на Ко Лан с причала Bali Hai — покупайте билеты в кассе на причале.",
        ),
      ),
      points: [
        t(
          lang,
          L(
            "Go early: a 7 a.m. crossing means clearer water, easier photos, and shorter queues than 10–11 a.m. tour arrivals.",
            "ไปเช้า: เรือ 7 โมง น้ำใส ถ่ายรูปง่าย คิวสั้นกว่าช่วง 10–11 โมงที่ทัวร์ลง",
            "尽量早班：7点左右船水质更清、拍照更容易，比10–11点旅游团抵达时人少。",
            "Рано: рейс в 7:00 — чище вода и короче очереди, чем в 10–11.",
          ),
        ),
        t(
          lang,
          L(
            "Speedboat: ~15 min — often 150–300 THB one-way (confirm before boarding).",
            "เรือเร็ว ~15 นาที — มัก 150–300 บาท/ทาง (ยืนยันก่อนขึ้นเรือ)",
            "快艇约15分钟，单程常见150–300泰铢（上船前确认）",
            "Катер ~15 мин — часто 150–300 бат в одну сторону.",
          ),
        ),
        t(
          lang,
          L(
            "Large ferry: ~30–45 min — often ~30 THB; less bumpy in moderate seas.",
            "เรือใหญ่ ~30–45 นาที — มัก ~30 บาท นุ่มกว่าเมื่อมีคลื่น",
            "大船约30–45分钟，常见约30泰铢",
            "Паром 30–45 мин — часто ~30 бат.",
          ),
        ),
        t(
          lang,
          L(
            "Last returns vary by operator — check times; weekends sell out by mid-morning.",
            "เรือกลับขึ้นกับผู้ให้บริการ — วันหยุดควรไปเช้า ตั๋วหมดเร็ว",
            "返程时间因运营商而异，周末宜早到",
            "Обратные рейсы уточняйте — в выходные приходите рано.",
          ),
        ),
      ],
      locationLabel: t(lang, L("Bali Hai Pier", "แหลมบาลีฮาย", "Bali Hai 码头", "Bali Hai Pier")),
      openMaps: t(lang, L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps")),
      embedSrc: kohLarnMaps.baliHai.embedSrc,
      mapsUrl: kohLarnMaps.baliHai.openHref,
      embedAria: t(
        lang,
        L("Map of Bali Hai Pier", "แผนที่แหลมบาลีฮาย", "Bali Hai 码头地图", "Карта Bali Hai"),
      ),
    },
    nearby: {
      title: t(lang, L("Nearby on the mainland", "ใกล้เคียงฝั่งพัทยา", "芭提雅本岛周边", "Рядом на материке")),
      items: (
        [
          {
            name: t(lang, L("Pattaya Beach", "หาดพัทยา", "芭提雅海滩", "Pattaya Beach")),
            text: t(
              lang,
              L(
                "Central bay & promenade — 5–10 min from the pier by songthaew.",
                "อ่าวกลาง & ถนนเลียบหาด — สองแถวจากท่า ~5–10 นาที",
                "中心海湾与海滨大道，双条车约5–10分钟",
                "Центральная бухта — songthaew 5–10 мин от причала.",
              ),
            ),
            href: "/explore/beaches/pattaya-beach",
          },
          {
            name: t(lang, L("Walking Street", "Walking Street", "Walking Street", "Walking Street")),
            text: t(
              lang,
              L(
                "Night market & shows — easy after an island day trip.",
                "ไนท์มาร์เก็ต — เหมาะหลังทริปเกาะ",
                "夜市与演出，岛上一日游后顺路",
                "Ночной рынок после поездки на остров.",
              ),
            ),
            href: marketPagePaths.streetFoodThepprasit,
          },
          {
            name: t(lang, L("Central Festival", "เซ็นทรัล เฟสติวัล", "Central Festival", "Central Festival")),
            text: t(
              lang,
              L(
                "Mall, cinema & dining — short taxi from Bali Hai.",
                "ห้าง โรงหนัง ร้านอาหาร — แท็กซี่จากท่าไม่ไกล",
                "商场影院餐饮，离码头打车不远",
                "ТРЦ у моря — такси от причала.",
              ),
            ),
            href: "/explore/shopping/malls",
          },
        ] satisfies NearbyItem[]
      ).map((item, i) => ({ ...item, image: kohLarnNearbyImages[i] })),
    },
    costs: {
      title: t(lang, L("Typical costs", "ค่าใช้จ่ายโดยประมาณ", "大致花费", "Цены")),
      items: [
        t(
          lang,
          L(
            "Ferry / speedboat: ~30–300 THB depending on boat type (buy at pier counters).",
            "เรือ/เรือเร็ว ~30–300 บาท ตามประเภท (ซื้อที่เคาน์เตอร์ในท่า)",
            "船票约30–300泰铢，依船型（码头柜台购买）",
            "Паром/катер ~30–300 бат.",
          ),
        ),
        t(
          lang,
          L(
            "Beach chair on Koh Larn: 50–100 THB — confirm before sitting.",
            "เก้าอี้บนเกาะ 50–100 บาท ถามก่อนนั่ง",
            "岛上躺椅约50–100泰铢，先问价",
            "Шезлонг 50–100 бат.",
          ),
        ),
        t(
          lang,
          L(
            "Motorbike rental on island: ~200–350 THB/day; songthaew hops ~20–40 THB.",
            "เช่ามอเตอร์ไซค์บนเกาะ ~200–350 บาท/วัน สองแถว ~20–40 บาท",
            "岛上租摩托约200–350泰铢/天，双条车约20–40泰铢",
            "Байк ~200–350 бат/день; songthaew ~20–40 бат.",
          ),
        ),
        t(
          lang,
          L(
            "Water sports: agree price and route in writing before paying.",
            "กิจกรรมทางน้ำ ตกลงราคาและเส้นทางเป็นลายลักษณ์อักษร",
            "水上活动务必书面确认价格与路线",
            "Водные виды — цена письменно.",
          ),
        ),
      ],
    },
    safety: {
      title: t(lang, L("Good to know", "ควรรู้", "须知", "Важно")),
      items: [
        t(
          lang,
          L(
            "Use official pier ticket counters; report scams to tourist police 1155.",
            "ซื้อตั๋วที่เคาน์เตอร์ในท่า แจ้งโกง 1155",
            "请在码头官方柜台购票，诈骗可拨1155",
            "Покупайте в кассе причала; мошенничество — 1155.",
          ),
        ),
        t(
          lang,
          L(
            "Wear life jackets on speedboats when crew provides them; sit where instructed.",
            "ใส่ชูชีพตามที่เรือจัด นั่งตำแหน่งที่กำหนด",
            "快艇请穿救生衣并听从船员指引",
            "Надевайте спасжилеты на катере.",
          ),
        ),
        t(
          lang,
          L(
            "Nov–Apr is calmest; strong wind days may delay ferries — check before you go.",
            "พ.ย.–เม.ย. คลื่นสงบ วันลมแรงเรืออาจหยุด — เช็กก่อนออก",
            "11–4月海况最稳，大风可能停航",
            "Ноя–апр спокойнее; при ветре рейсы задерживают.",
          ),
        ),
        t(
          lang,
          L(
            "Reef shoes help on rocky coves; reapply sunscreen every 2 hours.",
            "รองเท้าเล่นน้ำช่วยหาดหิน ทากันแดดซ้ำทุก 2 ชม.",
            "礁石海滩建议穿涉水鞋，每2小时补防晒",
            "Коралловые тапки; SPF каждые 2 часа.",
          ),
        ),
      ],
    },
    dayPlan: getKohLarnDayPlan(lang),
    firstTimerTips: getKohLarnFirstTimerTips(lang),
    overnight: getKohLarnOvernightTip(lang),
    viewpoint: getKohLarnViewpoint(lang),
    cafes: getKohLarnCafes(lang),
    mustTry: getKohLarnMustTry(lang),
    summary: getKohLarnSummary(lang),
  };
}
