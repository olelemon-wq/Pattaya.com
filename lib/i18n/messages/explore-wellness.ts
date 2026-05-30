import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getWellnessPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: c.wellness },
    hero: {
      badge: c.wellness,
      title: t(lang, L("Relax & Wellness", "สปา & นวด", "康养与放松", "Wellness")),
      subtitle: t(lang, L("Spa & massage", "สปา & นวด", "水疗与按摩", "Спа и массаж")),
      body: t(
        lang,
        L(
          "Premium spas and traditional Thai massage across Pattaya — from skyline sanctuaries to quiet herbal houses in Naklua.",
          "สปาและนวดไทยทั่วพัทยา — ตั้งแต่รีทรีตวิวสกายไลน์ถึงร้านสมุนไพรเงียบๆ ที่นาเกลือ",
          "芭提雅高端水疗与传统泰式按摩。",
          "Премиум-спа и тайский массаж в Паттайе.",
        ),
      ),
    },
    carousel: {
      title: t(lang, L("Choose your sanctuary", "เลือกสปาของคุณ", "选择水疗", "Выберите спа")),
      description: t(
        lang,
        L(
          "Hand-picked spas from the Explore hub — match skyline luxury, beach recovery, or traditional herbal treatments.",
          "สปาคัดสรรจาก Explore — หรูวิวสกายไลน์ ฟื้นตัวริมหาด หรือสมุนไพรดั้งเดิม",
          "精选水疗：天际线奢华、海滩恢复或传统草药。",
          "Спа на любой вкус — небо, пляж или травы.",
        ),
      ),
      prev: t(lang, L("Previous spas", "สปาก่อนหน้า", "上一项", "Назад")),
      next: t(lang, L("Next spas", "สปาถัดไป", "下一项", "Далее")),
    },
    spas: [
      {
        id: "aura-sanctuary",
        name: t(lang, L("Aura Sanctuary", "ออร่า แซงชัวรี่", "Aura Sanctuary", "Aura Sanctuary")),
        nameTh: "",
        tags: [
          t(lang, L("Premium", "พรีเมียม", "高端", "Премиум")),
          t(lang, L("Skyline", "วิวสกายไลน์", "天际线", "Панорама")),
          t(lang, L("Thai massage", "นวดไทย", "泰式按摩", "Тайский массаж")),
        ],
        hours: t(lang, L("Daily · ~10:00–22:00", "ทุกวัน · ~10:00–22:00", "每日 · 约10:00–22:00", "Ежедн. · ~10:00–22:00")),
        location: t(lang, L("Central Pattaya · skyline views", "ใจกลางพัทยา · วิวสกายไลน์", "芭提雅中心 · 天际线", "Центр Паттайи")),
        session: t(lang, L("Signature 90-min · from ฿2,400", "90 นาที · จาก ฿2,400", "招牌90分钟 · 起2400泰铢", "90 мин · от 2400 бат")),
        excerpt: t(
          lang,
          L(
            "World-class Thai massage and aromatherapy in a glass-front sanctuary — the Explore hub's top wellness pick.",
            "นวดไทยและอโรมาเธรพีในอาคารกระจก — สปาแนะนำอันดับ 1 ของ Explore",
            "玻璃幕墙内的顶级泰式按摩与芳疗。",
            "Тайский массаж и ароматерапия мирового класса.",
          ),
        ),
      },
      {
        id: "cliff-spa",
        name: t(lang, L("Pratumnak Cliff Spa", "สปาริมหน้าผา พระตำหนัก", "Pratumnak 悬崖水疗", "Cliff Spa")),
        nameTh: "",
        tags: [
          t(lang, L("Clifftop", "ริมหน้าผา", "悬崖", "На скале")),
          t(lang, L("Couples", "คู่รัก", "情侣", "Для двоих")),
          t(lang, L("Sunset", "พระอาทิตย์ตก", "日落", "Закат")),
        ],
        hours: t(lang, L("Daily · ~11:00–21:00", "ทุกวัน · ~11:00–21:00", "每日 · 约11:00–21:00", "Ежедн. · ~11:00–21:00")),
        location: t(lang, L("Pratumnak Hill", "เขาพระตำหนัก", "Pratumnak 山", "Pratumnak")),
        session: t(lang, L("Couples package · from ฿3,200", "แพ็กคู่ · จาก ฿3,200", "情侣套餐 · 起3200泰铢", "Пара · от 3200 бат")),
        excerpt: t(
          lang,
          L(
            "Oil and herbal compress treatments with bay views — book the last slot for golden-hour calm.",
            "นวดน้ำมันและลูกประคบวิวอ่าว — จองรอบสุดท้ายยามเย็น",
            "精油与草药敷疗，俯瞰海湾。",
            "Масло и травяные компрессы с видом на залив.",
          ),
        ),
      },
      {
        id: "jomtien-retreat",
        name: t(lang, L("Jomtien Beach Retreat", "จอมเทียน บีช รีทรีต", "Jomtien Beach Retreat", "Jomtien Retreat")),
        nameTh: "",
        tags: [
          t(lang, L("Beachfront", "ริมหาด", "海滨", "У моря")),
          t(lang, L("Relax", "พักผ่อน", "放松", "Отдых")),
          t(lang, L("Foot massage", "นวดเท้า", "足疗", "Массаж ног")),
        ],
        hours: t(lang, L("Daily · ~10:00–23:00", "ทุกวัน · ~10:00–23:00", "每日 · 约10:00–23:00", "Ежедн. · ~10:00–23:00")),
        location: t(lang, L("Jomtien Beach Rd", "ถ.จอมเทียน", "Jomtien 海滩路", "Jomtien")),
        session: t(lang, L("Foot + shoulder · from ฿800", "เท้า+ไหล่ · จาก ฿800", "足肩 · 起800泰铢", "Ноги+плечи · от 800")),
        excerpt: t(
          lang,
          L(
            "Casual beach-road spa for post-swim recovery — walk-ins welcome, quieter weekday afternoons.",
            "สปาริมถนนหาด ฟื้นหลังว่ายน้ำ — walk-in ได้ บ่าวันธรรมดาเงียบ",
            "海滨休闲水疗，游泳后恢复。",
            "Пляжный спа после купания.",
          ),
        ),
      },
      {
        id: "naklua-herbal",
        name: t(lang, L("Naklua Herbal House", "น้ำมันสมุนไพร นาเกลือ", "Naklua 草药馆", "Naklua Herbal")),
        nameTh: "",
        tags: [
          t(lang, L("Traditional", "ดั้งเดิม", "传统", "Традиция")),
          t(lang, L("Herbal", "สมุนไพร", "草药", "Травы")),
          t(lang, L("Local", "ท้องถิ่น", "本地", "Местное")),
        ],
        hours: t(lang, L("Daily · ~09:00–20:00", "ทุกวัน · ~09:00–20:00", "每日 · 约9:00–20:00", "Ежедн. · ~9:00–20:00")),
        location: t(lang, L("Naklua, north Pattaya", "นาเกลือ เหนือพัทยา", "北芭提雅 Naklua", "Naklua")),
        session: t(lang, L("Herbal ball massage · from ฿1,200", "ลูกประคบ · จาก ฿1,200", "草药球 · 起1200泰铢", "Травяной шар · от 1200")),
        excerpt: t(
          lang,
          L(
            "Old-school Thai techniques and warm herbal compresses — authentic, unhurried atmosphere away from the core.",
            "นวดไทยดั้งเดิมและลูกประคบ — บรรยากาศแท้ๆ ห่างจากใจกลาง",
            "传统泰式手法与温草药敷。",
            "Классический тайский массаж вдали от центра.",
          ),
        ),
      },
    ],
    tips: {
      title: t(lang, L("Spa tips", "เคล็ดลับสปา", "水疗贴士", "Советы")),
      subtitle: t(lang, L("Get the most from your treatment without surprises.", "ได้ประโยชน์สูงสุดจากทรีทเมนต์", "让护理更安心。", "Максимум пользы от процедуры.")),
      items: [
        {
          title: t(lang, L("Book ahead", "จองล่วงหน้า", "提前预约", "Бронируйте")),
          text: t(
            lang,
            L(
              "Weekends fill for couples rooms — reserve 24–48 hours ahead for skyline slots at premium spas.",
              "ห้องคู่เต็มวันหยุด — จองล่วงหน้า 24–48 ชม. สำหรับสปาพรีเมียม",
              "周末情侣房紧张，高端水疗建议提前24–48小时预约。",
              "На выходных комнаты для пар заняты — бронируйте за 1–2 дня.",
            ),
          ),
        },
        {
          title: t(lang, L("Before & after sun", "ก่อน-หลังแดด", "日晒前后", "Солнце")),
          text: t(
            lang,
            L(
              "Avoid deep massage on fresh sunburn. Hydrate before aromatherapy sessions.",
              "หลีกเลี่ยงนวดลึกเมื่อแดดไหม้ ดื่มน้ำก่อนอโรมา",
              "晒伤勿深度按摩，芳疗前补水。",
              "Не делайте глубокий массаж при ожоге. Пейте воду перед ароматерапией.",
            ),
          ),
        },
        {
          title: t(lang, L("Communicate pressure", "บอกแรงกด", "沟通力度", "Давление")),
          text: t(
            lang,
            L(
              "Say 'bao bao' (light) or 'nak' (firm). Tip 10–15% only when service exceeds expectations.",
              "บอก 'เบาๆ' หรือ 'แรง' ทิป 10–15% เมื่อบริการเกินความคาดหวัง",
              "说「轻一点」或「重一点」。满意再给小费10–15%。",
              "Скажите «легче» или «сильнее». Чаевые 10–15% при отличном сервисе.",
            ),
          ),
        },
        {
          title: t(lang, L("Arrive early", "มาถึงก่อน", "提前到达", "Приходите раньше")),
          text: t(
            lang,
            L(
              "Check in 15 minutes early for consultation — late arrivals may shorten treatment time.",
              "เช็คอินก่อน 15 นาที — มาช้าอาจลดเวลาทรีทเมนต์",
              "提前15分钟登记咨询，迟到可能缩短护理时间。",
              "Приходите за 15 мин — опоздание сокращает время процедуры.",
            ),
          ),
        },
      ],
    },
    alsoExplore: {
      title: c.alsoExplore,
      mainBeaches: c.mainBeaches,
      fineDining: c.fineDining,
      kohLarn: c.kohLarn,
    },
  };
}
