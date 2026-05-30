import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getHiddenGemsPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      current: t(lang, L("Hidden Gems", "จุดลับ", "隐藏 gems", "Секретные места")),
    },
    hero: {
      badge: t(lang, L("Hidden Gems", "จุดลับ", "隐藏 gems", "Секреты")),
      title: t(lang, L("Hidden Gems", "จุดลับ & บทความ", "隐藏 gems", "Секретные места")),
      subtitle: t(lang, L("Local stories", "จุดลับ & บทความ", "本地故事", "Местные истории")),
      body: t(
        lang,
        L(
          "Curated stories and local-only spots for travelers who want Pattaya beyond the postcard — viewpoints, markets, and slow evenings.",
          "เรื่องราวและจุดที่คนท้องถิ่นรู้ — มุมมอง ตลาด ค่ำคืนช้าๆ",
          "精选故事与本地秘境，超越明信片芭提雅。",
          "Истории и места beyond туристических открыток.",
        ),
      ),
    },
    carousel: {
      title: t(lang, L("Stories & secret spots", "เรื่องราว & จุดลับ", "故事与秘境", "Истории и секреты")),
      description: t(
        lang,
        L(
          "Editor picks from the Explore hub — read online or save for your next walk through Naklua, Pratumnak, and the quieter bays.",
          "คัดจาก Explore — อ่านออนไลน์หรือเก็บไว้เดินนาเกลือ พระตำหนัก",
          "编辑精选，适合 Naklua、Pratumnak 漫步。",
          "Подборка для прогулок по Naklua и Pratumnak.",
        ),
      ),
      prev: t(lang, L("Previous stories", "เรื่องก่อนหน้า", "上一项", "Назад")),
      next: t(lang, L("Next stories", "เรื่องถัดไป", "下一项", "Далее")),
    },
    stories: [
      {
        id: "hidden-spots",
        name: t(
          lang,
          L(
            "10 Hidden Spots Only Locals Know",
            "10 จุดลับที่คนท้องถิ่นรู้",
            "10 个本地人秘境",
            "10 секретных мест",
          ),
        ),
        nameTh: "",
        tags: [
          t(lang, L("Magazine", "นิตยสาร", "杂志", "Журнал")),
          t(lang, L("Viewpoints", "จุดชมวิว", "观景点", "Виды")),
          t(lang, L("Local", "ท้องถิ่น", "本地", "Местное")),
        ],
        readTime: t(lang, L("5 min read", "อ่าน 5 นาที", "5 分钟", "5 мин")),
        location: t(lang, L("Naklua · Pratumnak · backstreets", "นาเกลือ · พระตำหนัก · ซอย", "Naklua · Pratumnak", "Naklua · Pratumnak")),
        excerpt: t(
          lang,
          L(
            "Secret viewpoints, quiet cafés, and street stalls beyond Walking Street — our editors map the authentic soul of the city.",
            "จุดชมวิวลับ คาเฟ่เงียบ แผงนอก Walking Street — แผนที่จิตวิญญาณเมือง",
            "秘密观景点、安静咖啡馆与街头小摊。",
            "Секретные виды и тихие кафе.",
          ),
        ),
      },
      {
        id: "weekend-guide",
        name: t(
          lang,
          L("The Ultimate Weekend Guide", "คู่มือสุดสัปดาห์", "终极周末指南", "Гид на выходные"),
        ),
        nameTh: "",
        tags: [
          t(lang, L("Guide", "คู่มือ", "指南", "Гид")),
          t(lang, L("Luxury", "หรู", "奢华", "Люкс")),
          t(lang, L("48 hours", "48 ชม.", "48 小时", "48 часов")),
        ],
        readTime: t(lang, L("8 min read", "อ่าน 8 นาที", "8 分钟", "8 мин")),
        location: t(lang, L("Central Pattaya · Jomtien", "ใจกลางพัทยา · จอมเทียน", "芭提雅中心 · Jomtien", "Центр · Jomtien")),
        excerpt: t(
          lang,
          L(
            "How to spend 48 hours in style — high-end dining, exclusive stays, and the most vibrant nightlife without the tourist traps.",
            "48 ชม.สไตล์ — ไฟน์ไดนิ่ง ที่พักพิเศษ ไนท์ไลฟ์ไม่กับดัก",
            "48 小时奢华餐饮与夜生活。",
            "48 часов стиля и ночной жизни.",
          ),
        ),
      },
      {
        id: "naklua-morning",
        name: t(lang, L("Naklua Morning Rituals", "เช้าที่นาเกลือ", "Naklua 晨间仪式", "Утро в Naklua")),
        nameTh: "",
        tags: [
          t(lang, L("Markets", "ตลาด", "市场", "Рынки")),
          t(lang, L("Food", "อาหาร", "美食", "Еда")),
          t(lang, L("Authentic", "แท้ๆ", "地道", "Аутентично")),
        ],
        readTime: t(lang, L("6 min read", "อ่าน 6 นาที", "6 分钟", "6 мин")),
        location: t(lang, L("Naklua fishing village", "หมู่บ้านประมงนาเกลือ", "Naklua 渔村", "Рыбацкая Naklua")),
        excerpt: t(
          lang,
          L(
            "Start at the wet market, grab boat noodles, then walk the quieter sand before the buses arrive from Bangkok.",
            "เริ่มตลาดสด ก๋วยเตี๋ยวเรือ เดินหาดเงียบก่อนรถจากกรุง",
            "湿货市场、船面，曼谷大巴前漫步。",
            "Рынок, лапша, тихий пляж до автобусов.",
          ),
        ),
      },
      {
        id: "pratumnak-sunsets",
        name: t(
          lang,
          L("Pratumnak Sunset Trail", "เส้นทางพระอาทิตย์ตกพระตำหนัก", "Pratumnak 日落路线", "Тропа заката Pratumnak"),
        ),
        nameTh: "",
        tags: [
          t(lang, L("Sunset", "พระอาทิตย์ตก", "日落", "Закат")),
          t(lang, L("Clifftop", "ริมหน้าผา", "悬崖", "На скале")),
          t(lang, L("Photos", "ถ่ายรูป", "拍照", "Фото")),
        ],
        readTime: t(lang, L("4 min read", "อ่าน 4 นาที", "4 分钟", "4 мин")),
        location: t(lang, L("Pratumnak Hill", "เขาพระตำหนัก", "Pratumnak 山", "Pratumnak")),
        excerpt: t(
          lang,
          L(
            "A short hill loop linking cliff cafés and lookouts — best light 17:30–18:30 on clear evenings.",
            "ลoop สั้นบนเขา คาเฟ่หน้าผa — แสงดี 17:30–18:30",
            "连接悬崖咖啡馆的短环线，17:30–18:30 最佳。",
            "Петля с кафе — лучший свет 17:30–18:30.",
          ),
        ),
      },
    ],
    tips: {
      title: t(lang, L("Explorer tips", "เคล็ดลับนักสำรวจ", "探索贴士", "Советы")),
      subtitle: t(
        lang,
        L(
          "How to enjoy off-path Pattaya respectfully and comfortably.",
          "เที่ยวนอกเส้นทางอย่างเคารพและสบาย",
          "尊重而舒适地探索非主流芭提雅。",
          "Уважительно исследуйте Pattaya.",
        ),
      ),
      items: [
        {
          title: t(lang, L("Go off-peak", "ไปนอก peak", "错峰", "Вне пика")),
          text: t(
            lang,
            L(
              "Hidden viewpoints empty out on weekday mornings — avoid sunset crowds at famous cliffs.",
              "จุดลับว่างเช้าวันธรรมดา — หลีกเลี่ยงคนเยอะยามเย็นหน้าผa",
              "工作日早晨观景点较空。",
              "Будни утром — меньше людей.",
            ),
          ),
        },
        {
          title: t(lang, L("Save for offline", "เก็บออฟไลน์", "离线保存", "Оффлайн")),
          text: t(
            lang,
            L(
              "Screenshot maps and Thai names for taxi drivers — some lanes have no English signage.",
              "แคปแผนที่และชื่อไทยให้คนขับ — บางซอยไม่มีอังกฤษ",
              "截图地图与泰文名给司机。",
              "Сохраните карты и тайские названия.",
            ),
          ),
        },
        {
          title: t(lang, L("Respect locals", "เคารพคนท้องถิ่น", "尊重当地人", "Уважение")),
          text: t(
            lang,
            L(
              "Residential sois are not photo studios — ask before shooting homes, temples, or fishing boats.",
              "ซอยที่อยู่อาศัยไม่ใช่สตูดิโอ — ถามก่อนถ่ายบ้าน วัด เรือ",
              "住宅巷不是摄影棚，拍摄前先询问。",
              "Спрашивайте перед съёмкой.",
            ),
          ),
        },
        {
          title: t(lang, L("Combine with food", "จับคู่กับอาหาร", "搭配美食", "Еда")),
          text: t(
            lang,
            L(
              "Pair Naklua mornings with street-food guides; Pratumnak evenings with fine-dining reservations.",
              "เช้านาเกลือ+street food เย็นพระตำหนัก+ไฟน์ไดนิ่ง",
              "Naklua 晨间配街头美食，Pratumnak 傍晚配精致餐饮。",
              "Naklua утром + street food; Pratumnak вечером.",
            ),
          ),
        },
      ],
    },
    newsletter: {
      title: t(
        lang,
        L("Want more exclusive insights?", "อยากได้ insight พิเศษ?", "想要更多独家见解？", "Ещё инсайты?"),
      ),
      body: t(
        lang,
        L(
          "Subscribe on the Explore hub newsletter card for new hidden-gem stories each month.",
          "สมัคร newsletter ที่ Explore hub เรื่องจุดลับทุกเดือน",
          "在 Explore 中心订阅每月 hidden gem 故事。",
          "Подпишитесь на newsletter Explore hub.",
        ),
      ),
      cta: t(lang, L("Back to Explore hub →", "กลับ Explore hub →", "返回 Explore 中心 →", "Explore hub →")),
    },
    alsoExplore: {
      title: c.alsoExplore,
      mainBeaches: c.mainBeaches,
      localMarkets: c.localMarkets,
      cafesLink: c.cafesLink,
    },
  };
}
