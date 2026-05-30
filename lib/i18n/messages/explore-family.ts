import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getFamilyActivitiesPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: t(lang, L("Family Activities", "กิจกรรมครอบครัว", "亲子活动", "Семейный отдых")) },
    hero: {
      badge: c.family,
      title: t(lang, L("Family Activities", "กิจกรรมครอบครัว", "亲子活动", "Семейный отдых")),
      subtitle: t(lang, L("Family fun", "กิจกรรมครอบครัว", "亲子乐趣", "Для семьи")),
      body: t(
        lang,
        L(
          "Water parks, gardens, and kid-friendly days out around Pattaya — plan tickets, timing, and transport for stress-free family fun.",
          "สวนน้ำ สวน และกิจกรรมเด็กรอบพัทยา — วางแผนตั๋ว เวลา เดินทาง",
          "芭提雅水上乐园、花园与亲子一日游。",
          "Аквапарки, сады и семейные развлечения.",
        ),
      ),
    },
    carousel: {
      title: t(lang, L("Choose your day out", "เลือกทริปวัน", "选择一日游", "Выберите день")),
      description: t(
        lang,
        L(
          "Featured family attractions from the Explore hub — mix a splash park morning with gardens or mini-landmarks in the afternoon.",
          "สถานที่ครอบครัวจาก Explore — สวนน้ำเช้า สวน/แลนด์มาร์กบ่าย",
          "精选亲子景点，上午水上乐园，下午花园。",
          "Утро в аквапарке, после обеда — сады.",
        ),
      ),
      prev: t(lang, L("Previous activities", "กิจกรรมก่อนหน้า", "上一项", "Назад")),
      next: t(lang, L("Next activities", "กิจกรรมถัดไป", "下一项", "Далее")),
    },
    activities: [
      {
        id: "aquaverse",
        name: t(lang, L("Columbia Pictures Aquaverse", "โคลัมเบีย พิคเจอร์ส อควาเวิร์ส", "Columbia Pictures Aquaverse", "Aquaverse")),
        nameTh: "",
        tags: [
          t(lang, L("Water park", "สวนน้ำ", "水上乐园", "Аквапарк")),
          t(lang, L("Theme park", "สวนสนุก", "主题公园", "Тематический парк")),
          t(lang, L("All ages", "ทุกวัย", "全年龄", "Все возрасты")),
        ],
        hours: t(lang, L("Daily · ~10:00–18:00", "ทุกวัน · ~10:00–18:00", "每日 · 约10:00–18:00", "Ежедн. · ~10:00–18:00")),
        location: t(lang, L("Sukhumvit Rd, south Pattaya", "ถ.สukhumvit ใต้พัทยา", "Sukhumvit 路南", "Sukhumvit Rd")),
        highlight: t(
          lang,
          L(
            "Movie-themed slides, wave pool, family cabanas",
            "สไลด์ธีมหนัง สระคลื่น cabana ครอบครัว",
            "电影主题滑梯、造浪池",
            "Горки, волновой бассейн",
          ),
        ),
        excerpt: t(
          lang,
          L(
            "The world's first Columbia Pictures theme park — blockbuster zones, lazy river, and full-day tickets for kids and adults.",
            "สวนสนุก Columbia Pictures แรกของโลก — โซนหนัง ลazy river ตั๋วเต็มวัน",
            "全球首个 Columbia Pictures 主题公园。",
            "Первый тематический парк Columbia Pictures.",
          ),
        ),
      },
      {
        id: "cartoon-network",
        name: t(lang, L("Cartoon Network Amazone", "การ์ตูน เน็ตเวิร์ก อเมซอน", "Cartoon Network Amazone", "Cartoon Network")),
        nameTh: "",
        tags: [
          t(lang, L("Water park", "สวนน้ำ", "水上乐园", "Аквапарк")),
          t(lang, L("Kids", "เด็ก", "儿童", "Дети")),
          t(lang, L("Slides", "สไลด์", "滑梯", "Горки")),
        ],
        hours: t(lang, L("Daily · ~10:00–17:00", "ทุกวัน · ~10:00–17:00", "每日 · 约10:00–17:00", "Ежедн. · ~10:00–17:00")),
        location: t(lang, L("Bang Saray (short drive from Pattaya)", "บางเสร่ (ขับจากพัทยา)", "Bang Saray", "Bang Saray")),
        highlight: t(
          lang,
          L(
            "Character zones, splash areas, teen-friendly rides",
            "โซนตัวละคร splash ไรด์วัยรุ่น",
            "角色区、戏水区",
            "Зоны персонажей и splash",
          ),
        ),
        excerpt: t(
          lang,
          L(
            "Cartoon-branded water park with high-energy slides — pair with a beach lunch in Bang Saray afterward.",
            "สวนน้ำการ์ตูน สไลด์มันส์ — กินข้าวริมหาดบางเสร่หลังเล่น",
            "卡通主题水上乐园，之后 Bang Saray 午餐。",
            "Аквапарк Cartoon Network + обед в Bang Saray.",
          ),
        ),
      },
      {
        id: "mini-siam",
        name: t(lang, L("Mini Siam", "เมืองจำลอง", "Mini Siam", "Mini Siam")),
        nameTh: "",
        tags: [
          t(lang, L("Landmarks", "แลนด์มาร์ก", "地标", "Достопримечательности")),
          t(lang, L("Photos", "ถ่ายรูป", "拍照", "Фото")),
          t(lang, L("Easy walk", "เดินง่าย", "轻松步行", "Пешком")),
        ],
        hours: t(lang, L("Daily · ~07:00–22:00", "ทุกวัน · ~07:00–22:00", "每日 · 约7:00–22:00", "Ежедн. · ~7:00–22:00")),
        location: t(lang, L("Sukhumvit Rd, north Pattaya", "ถ.สukhumvit เหนือพัทยา", "Sukhumvit 路北", "Sukhumvit Rd")),
        highlight: t(
          lang,
          L(
            "Miniature Thailand & global icons, evening lights",
            "จำลองไทย & โลก ไฟยามเย็น",
            "泰国与世界微缩景观",
            "Миниатюры Таиланда и мира",
          ),
        ),
        excerpt: t(
          lang,
          L(
            "Stroll past scaled temples and world monuments — low effort, high photo value for mixed-age groups.",
            "เดินชมวัดและแลนด์มาร์กจำลอง — เดินง่าย ถ่ายรูปสวย ทุกวัย",
            "漫步微缩寺庙与世界地标。",
            "Миниатюры храмов — мало усилий, много фото.",
          ),
        ),
      },
      {
        id: "nong-nooch",
        name: t(lang, L("Nong Nooch Tropical Garden", "สวนนงนุช", "Nong Nooch 热带花园", "Nong Nooch")),
        nameTh: "",
        tags: [
          t(lang, L("Gardens", "สวน", "花园", "Сады")),
          t(lang, L("Culture show", "โชว์วัฒนธรรม", "文化表演", "Шоу")),
          t(lang, L("Full day", "เต็มวัน", "全天", "На весь день")),
        ],
        hours: t(lang, L("Daily · ~08:00–18:00", "ทุกวัน · ~08:00–18:00", "每日 · 约8:00–18:00", "Ежедн. · ~8:00–18:00")),
        location: t(lang, L("Sattahip (30 min from central Pattaya)", "สattahip (30 นาทีจากพัทยา)", "Sattahip", "Sattahip")),
        highlight: t(
          lang,
          L(
            "Elephant shows, orchid gardens, cycling paths",
            "โชว์ช้าง กล้วยไม้ ปั่นจักรยาน",
            "大象秀、兰花园、骑行道",
            "Слоны, орхидеи, велодорожки",
          ),
        ),
        excerpt: t(
          lang,
          L(
            "Sprawling botanical park with cultural performances — ideal for a relaxed family day away from the beach crowds.",
            "สวนพฤกษศาสตร์ใหญ่ โชว์วัฒนธรรม — วันครอบครัวห่างจากหาด",
            "大型植物园与文化表演。",
            "Ботанический парк с шоу.",
          ),
        ),
      },
    ],
    tips: {
      title: t(lang, L("Family tips", "เคล็ดลับครอบครัว", "亲子贴士", "Советы")),
      subtitle: t(
        lang,
        L(
          "Practical notes before you buy tickets and pack the swim bags.",
          "ก่อนซื้อตั๋วและแพ็คกระเป๋าว่ายน้ำ",
          "购票与打包前的实用建议。",
          "Перед покупкой билетов.",
        ),
      ),
      items: [
        {
          title: t(lang, L("Book online", "จองออนไลน์", "在线预订", "Онлайн")),
          text: t(
            lang,
            L(
              "Water parks often discount advance tickets — compare official sites vs hotel concierge bundles.",
              "สวนน้ำลดราคาจองล่วงหน้า — เทียบเว็บทางการ vs โรงแรม",
              "水上乐园提前购票常有折扣。",
              "Сравните официальный сайт и отель.",
            ),
          ),
        },
        {
          title: t(lang, L("Arrive early", "มาเช้า", "早到", "Приходите рано")),
          text: t(
            lang,
            L(
              "Queues shorten before 11:00. Bring swim shoes, sunscreen, and a dry bag for phones.",
              "คิวสั้นก่อน 11:00 รองเท้าน้ำ ครีมกันแดด ถุงกันน้ำ",
              "11点前排队较短，带涉水鞋与防晒。",
              "До 11:00 очереди короче.",
            ),
          ),
        },
        {
          title: t(lang, L("Height & age rules", "ส่วนสูง & อายุ", "身高与年龄", "Рост и возраст")),
          text: t(
            lang,
            L(
              "Check ride minimum heights online — some slides require adult accompaniment for younger kids.",
              "เช็คความสูงขั้นต่ำ — บางสไลด์ต้องมีผู้ใหญ่",
              "查最低身高，部分滑梯需成人陪同。",
              "Проверьте минимальный рост.",
            ),
          ),
        },
        {
          title: t(lang, L("Getting there", "เดินทาง", "交通", "Добраться")),
          text: t(
            lang,
            L(
              "Grab or private van for Bang Saray / Sattahip parks; songthaews work for Mini Siam on Sukhumvit.",
              "Grab/van ไปบางเสร่/สattahip สองแถวไป Mini Siam",
              "Bang Saray/Sattahip 用 Grab，Mini Siam 可双条车。",
              "Grab до Bang Saray; songthaew до Mini Siam.",
            ),
          ),
        },
      ],
    },
    alsoExplore: {
      title: c.alsoExplore,
      kohLarnDayTrip: c.kohLarnDayTrip,
      mainBeaches: c.mainBeaches,
      streetFood: c.streetFood,
    },
  };
}
