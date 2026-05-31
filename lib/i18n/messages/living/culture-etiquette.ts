import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export type EtiquetteItemId =
  | "wai"
  | "hierarchy"
  | "dress"
  | "monks"
  | "shoes"
  | "right-hand"
  | "smile"
  | "thai-phrases"
  | "queue"
  | "head"
  | "feet"
  | "voice"
  | "monarchy"
  | "pda"
  | "beach-dress"
  | "public-argue"
  | "litter"
  | "photos-monks";

export type DontDeepDiveId = "head" | "feet" | "voice" | "monarchy";

/** Covered by illustrated panels on thai-culture & etiquette — omit from icon lists */
const VISUAL_DO_IDS = new Set<EtiquetteItemId>(["wai", "shoes", "smile"]);
const VISUAL_DONT_IDS = new Set<EtiquetteItemId>([
  "head",
  "feet",
  "voice",
  "public-argue",
]);

export function getExtendedCultureDos(lang: LanguageCode) {
  return getCultureDos(lang).filter((item) => !VISUAL_DO_IDS.has(item.id));
}

export function getExtendedCultureDonts(lang: LanguageCode) {
  return getCultureDonts(lang).filter((item) => !VISUAL_DONT_IDS.has(item.id));
}

export function getCultureEtiquettePage(lang: LanguageCode) {
  return {
    introTitle: t(
      lang,
      L("The Thai Way in Pattaya", "วิถีไทยในพัทยา", "芭提雅的泰国之道", "Тайский образ жизни в Паттайе"),
    ),
    introBody: t(
      lang,
      L(
        "Pattaya welcomes millions of visitors, but daily harmony still runs on Thai values — respect, patience, and saving face. Start with the illustrated do's and don'ts (same as the Thai culture page), then use the extended lists for temples, monarchy, and local life.",
        "พัทยาต้อนรับนักท่องเที่ยวนับล้าน ความกลมกลืนอยู่บนเคารพ อดทน และรักษาหน้า เริ่มจากภาพควรทำ/ไม่ควรทำ (เหมือนหน้าวัฒนธรรมไทย) แล้วอ่านรายการเพิ่มเรื่องวัด สถาบัน และชีวิตในพัทยา",
        "芭提雅日常和谐建立在尊重与给面子之上。先看插图版宜忌（与泰国文化页相同），再读寺庙、王室与本地生活细则。",
        "Начните с иллюстраций (как на странице культуры), затем — храмы и Pattaya.",
      ),
    ),
    pillarsTitle: t(lang, L("Three values to remember", "สามค่านิยมที่ควรจำ", "三个核心观念", "Три ценности")),
    pillars: [
      {
        title: t(lang, L("Saving face", "รักษาหน้า / เกรงใจ", "给面子", "Сохранение лица")),
        body: t(
          lang,
          L(
            "Avoid public embarrassment, loud arguments, or forcing a clear “no.” Calm negotiation and gentle phrasing work better.",
            "หลีกเลี่ยงทำให้อายในที่สาธารณะ ทะเลาะเสียงดัง หรือบังคับให้ปฏิเสธตรงๆ การเจรจาอย่างใจเย็นดีกว่า",
            "避免当众让人难堪或激烈争吵；委婉表达更有效。",
            "Избегайте публичного смущения и крика.",
          ),
        ),
      },
      {
        title: t(lang, L("Respect & hierarchy", "เคารพและลำดับชั้น", "尊重与层级", "Иерархия")),
        body: t(
          lang,
          L(
            "Age, profession, and social status matter. Use polite particles (khrap/kha), wai to elders, and patient tones with officials.",
            "อายุ อาชีพ และสถานะมีความหมาย ใช้คำลงท้าย ไหว้ผู้ใหญ่ พูดสุภาพกับเจ้าหน้าที่",
            "年龄、职业与地位重要；用礼貌尾词、向长辈合十礼。",
            "Уважайте возраст и статус; вежливый тон.",
          ),
        ),
      },
      {
        title: t(lang, L("Jai yen (cool heart)", "ใจเย็น", "心平气和", "Спокойствие")),
        body: t(
          lang,
          L(
            "Thais value calm under pressure. Smile, pause, and avoid aggressive body language — especially in traffic or disputes.",
            "คนไทยให้ความสำคัญกับความสงบ ยิ้ม หยุดคิด และหลีกเลี่ยงท่าทีก้าวร้าว โดยเฉพาะการจราจรหรือข้อพิพาท",
            "泰国人重视冷静；微笑、停顿，避免攻击性肢体语言。",
            "Сохраняйте спокойствие и улыбайтесь.",
          ),
        ),
      },
    ],
    waiTitle: t(lang, L("The wai (ไหว้)", "การไหว้", "合十礼（Wai）", "Вай")),
    waiSubtitle: t(
      lang,
      L(
        "Palms together with a slight bow — not every situation needs a deep wai.",
        "ประนมมือพร้อมโค้งเล็กน้อย — ไม่ใช่ทุกสถานการณ์ต้องไหว้ลึก",
        "双手合十轻鞠躬——并非每次都需要深礼。",
        "Сложенные ладони и лёгкий поклон.",
      ),
    ),
    waiSteps: [
      {
        level: t(lang, L("Deep wai", "ไหว้ลึก", "深礼", "Глубокий")),
        who: t(lang, L("Monks, elders, royalty images, formal occasions", "พระ ผู้ใหญ่ รูปสถาบัน งานพิธี", "僧侣、长辈、正式场合", "Монахи, старшие")),
      },
      {
        level: t(lang, L("Standard wai", "ไหว้ทั่วไป", "标准礼", "Обычный")),
        who: t(lang, L("Teachers, officials, first meetings, shop staff", "ครู เจ้าหน้าที่ พบครั้งแรก พนักงาน", "老师、官员、初次见面", "Официальные лица")),
      },
      {
        level: t(lang, L("Light nod / smile", "ยิ้ม/พยักหน้า", "微笑/点头", "Лёгкий")),
        who: t(lang, L("Peers, daily service staff, casual friends", "เพื่อนร่วมงาน พนักงานบริการ เพื่อนสนิท", "同辈、日常服务人员", "Повседневное общение")),
      },
    ],
    dosTitle: t(lang, L("Cultural dos", "สิ่งที่ควรทำ", "文化宜做", "Что делать")),
    dontsTitle: t(lang, L("Cultural don'ts", "สิ่งที่ไม่ควรทำ", "文化忌做", "Чего избегать")),
    illustratedTitle: t(
      lang,
      L("Do's & don'ts (illustrated)", "ควรทำ / ไม่ควรทำ (ภาพประกอบ)", "该做与不该做（插图）", "Do & Don't (иллюстрации)"),
    ),
    illustratedIntro: t(
      lang,
      L(
        "Three everyday topics with matching visuals — the same layout as the Thai culture page.",
        "สามหัวข้อในชีวิตประจำวันพร้อมภาพประกอบ — รูปแบบเดียวกับหน้าวัฒนธรรมไทย",
        "三个日常主题配图说明——与泰国文化页相同版式。",
        "Три темы с иллюстрациями — как на странице культуры.",
      ),
    ),
    waiPromoTitle: t(lang, L("Interactive wai visualizer", "จำลองท่าไหว้แบบโต้ตอบ", "互动合十礼示意", "Интерактивный wai")),
    waiPromoBody: t(
      lang,
      L(
        "Photos, thumb height, and bow depth for monks, elders, and peers — on the Thai culture page (not duplicated here).",
        "ภาพ ระดับนิ้วโป้ง และการโค้งสำหรับพระ ผู้ใหญ่ และเพื่อน — อยู่หน้าวัฒนธรรมไทย (ไม่ซ้ำที่นี่)",
        "僧侣、长辈、同辈的参考图与拇指高度——见泰国文化页（此处不重复）。",
        "Фото и уровень wai — на странице культуры.",
      ),
    ),
    waiPromoCta: t(
      lang,
      L("Open wai visualizer →", "เปิดจำลองไหว้ →", "打开合十礼示意 →", "Открыть wai →"),
    ),
    extendedDosDontsIntro: t(
      lang,
      L(
        "More rules beyond the three illustrated topics — dress, monks, monarchy, beaches, and Pattaya nightlife.",
        "กฎเพิ่มเติมนอกสามหัวข้อภาพประกอบ — การแต่งกาย พระ สถาบัน ชายหาด และไนต์ไลฟ์พัทยา",
        "插图三组之外的更多规矩——着装、僧侣、王室、海滩与芭提雅夜生活。",
        "Правила помимо трёх иллюстраций.",
      ),
    ),
    dosDontsIntro: t(
      lang,
      L(
        "Extended do's and don'ts — icon cards for topics not shown in the illustrations above.",
        "ควรทำ/ไม่ควรทำเพิ่มเติม — การ์ดสำหรับหัวข้อที่ไม่มีในภาพด้านบน",
        "延伸宜忌——上图未涵盖的主题。",
        "Дополнительные do/don't.",
      ),
    ),
    highLowTitle: t(lang, L("High & low: head and feet", "ของสูงและของต่ำ: ศีรษะและเท้า", "高与低：头与脚", "Высокое и низкое")),
    highLowBody: t(
      lang,
      L(
        "The head holds spiritual “khwan” (life force) — the highest, most sacred part. Feet are the lowest and unclean — never use them to point, touch people, or rest on tables.",
        "ศีรษะเป็นที่ของ “ขวัญ” — ส่วนสูงและศักดิ์สิทธิ์ที่สุด เท้าเป็นของต่ำและสกปรก — อย่าใช้ชี้คน แตะผู้อื่น หรือพาดบนโต๊ะ",
        "头部承载“魂气”，最神圣；脚最低也最不洁——勿用脚指向人或搁在桌上。",
        "Голова священна; ноги — для указания не используют.",
      ),
    ),
    deepDiveTitle: t(lang, L("Why these don'ts matter", "ทำไม “ห้ามทำ” จึงสำคัญ", "为何这些禁忌重要", "Почему это важно")),
    deepDiveSubtitle: t(
      lang,
      L(
        "Understanding the reason behind each rule helps you act naturally, not just memorize a list.",
        "เข้าใจเหตุผลจะช่วยให้ปฏิบัติได้เป็นธรรมชาติ ไม่ใช่แค่ท่องจำ",
        "理解原因比死记硬背更有效。",
        "Понимание причин важнее заучивания.",
      ),
    ),
    templeTitle: t(lang, L("Temple & shrine etiquette", "มารยาทวัดและศาลเจ้า", "寺庙与神龛礼仪", "Храмы")),
    templeSubtitle: t(
      lang,
      L(
        "Big Buddha, Sanctuary of Truth, Wat Yansangwararam, and local shrines.",
        "พระใหญ่ ปราสาทสัจธรรม วัดญาณสังวราราม และศาลเจ้า",
        "大佛像、真理圣殿、Yansangwararam 寺等。",
        "Big Buddha, Sanctuary of Truth и др.",
      ),
    ),
    pattayaTitle: t(lang, L("Pattaya-specific tips", "เคล็ดลับเฉพาะพัทยา", "芭提雅贴士", "Советы для Паттайи")),
    pattayaSubtitle: t(
      lang,
      L("How locals expect you to behave in this city.", "สิ่งที่คนท้องถิ่นคาดหวังในเมืองนี้", "本地人对行为的期待", "Ожидания в городе"),
    ),
    socialTitle: t(lang, L("Daily social life", "ชีวิตสังคมประจำวัน", "日常社交", "Бытовой этикет")),
    livingHub: t(lang, L("Living hub →", "ศูนย์ไลฟ์สไตล์ →", "生活中心 →", "Раздел «Жизнь» →")),
    thaiCulture: t(lang, L("Thai culture →", "วัฒนธรรมไทย →", "泰国文化 →", "Культура →")),
    scamAlerts: t(lang, L("Scam alerts →", "แจ้งเตือนมิจฉาชีพ →", "诈骗提醒 →", "Мошенничество →")),
  };
}

export function getCultureDos(lang: LanguageCode) {
  const items: {
    id: EtiquetteItemId;
    title: string;
    text: string;
  }[] = [
    {
      id: "wai",
      title: t(lang, L("The wai greeting", "การทักทายด้วยไหว้", "合十问候", "Приветствие вай")),
      text: t(
        lang,
        L(
          "Greet elders, monks, and officials with palms together. Returning a wai shows good manners.",
          "ทักทายผู้ใหญ่ พระ และเจ้าหน้าที่ด้วยไหว้ ไหว้ตอบแสดงมารยาท",
          "向长辈、僧侣、官员合十问候；回礼表示礼貌。",
          "Здоровайтесь вай с уважаемыми людьми.",
        ),
      ),
    },
    {
      id: "dress",
      title: t(lang, L("Modest dress", "แต่งกายสุภาพ", "得体着装", "Скромная одежда")),
      text: t(
        lang,
        L(
          "Cover shoulders and knees at temples, Immigration, and government offices. Carry a sarong for beach-area temples.",
          "ปิดไหล่และเข่าเมื่อเข้าวัด ตม. และหน่วยงานราชการ พกผ้าคลุมสำหรับวัดริมทะเล",
          "寺庙、移民局、政府机关需遮肩盖膝；海边寺庙可带纱笼。",
          "В храмах и госорганах — скромная одежда.",
        ),
      ),
    },
    {
      id: "monks",
      title: t(lang, L("Respect for monks", "เคารพพระ", "尊重僧侣", "Монахи")),
      text: t(
        lang,
        L(
          "Give up your seat on songthaews. Women do not touch monks — place offerings on a cloth.",
          "ให้ที่นั่งพระในสองแถว ผู้หญิงไม่สัมผัสพระ วางของบนผ้า",
          "双条车上给僧侣让座；女性勿触碰僧侣，供品放布上。",
          "Уступайте место; женщинам не касаться монахов.",
        ),
      ),
    },
    {
      id: "shoes",
      title: t(lang, L("Remove shoes", "ถอดรองเท้า", "脱鞋", "Снимайте обувь")),
      text: t(
        lang,
        L(
          "Remove shoes before ubosot (main temple halls), homes, and some small shops — look for piles of footwear at the entrance.",
          "ถอดก่อนเข้าพระอุโบสถ บ้าน และร้านเล็กบางแห่ง — สังเกตรองเท้าที่วางหน้าร้าน",
          "进主殿、住宅及部分小店前脱鞋——看门口是否堆满鞋。",
          "Снимайте обувь перед убосотом, в домах и мелких лавках.",
        ),
      ),
    },
    {
      id: "thai-phrases",
      title: t(lang, L("Basic Thai phrases", "ภาษาไทยพื้นฐาน", "基础泰语", "Базовый тайский")),
      text: t(
        lang,
        L(
          'Try "Sawasdee khrap/kha" and "Khob khun khrap/kha" with a smile — locals appreciate the effort and it opens doors to help.',
          "ลอง “สวัสดีครับ/ค่ะ” และ “ขอบคุณครับ/ค่ะ” พร้อมรอยยิ้ม — คนไทยชื่นชมและช่วยเหลือมากขึ้น",
          "试试“สวัสดีครับ/ค่ะ”“ขอบคุณครับ/ค่ะ”并微笑——当地人会更愿意帮忙。",
          "«Sawasdee» и «Khob khun» с улыбкой очень помогают.",
        ),
      ),
    },
    {
      id: "right-hand",
      title: t(lang, L("Use your right hand", "ใช้มือขวา", "使用右手", "Правая рука")),
      text: t(
        lang,
        L(
          "Give and receive items, especially money and food, with the right hand or both hands.",
          "รับ-ส่งของ โดยเฉพาะเงินและอาหาร ด้วยมือขวาหรือสองมือ",
          "递接物品（尤其钱与食物）用右手或双手。",
          "Передавайте предметы правой или обеими руками.",
        ),
      ),
    },
    {
      id: "hierarchy",
      title: t(lang, L("Social hierarchy", "ลำดับชั้นทางสังคม", "社会层级", "Иерархия")),
      text: t(
        lang,
        L(
          "Acknowledge age and status with a wai, khrap/kha, and calm tone — especially with elders and officials.",
          "ยอมรับอายุและสถานะด้วยไหว้ ครับ/ค่ะ และน้ำเสียงสงบ — โดยเฉพาะผู้ใหญ่และเจ้าหน้าที่",
          "以合十礼、ครับ/ค่ะ与平和语气体现对年龄与地位的尊重。",
          "Уважайте возраст и статус в жестах и тоне.",
        ),
      ),
    },
    {
      id: "smile",
      title: t(lang, L("Smile & jai yen", "รอยยิ้มและใจเย็น", "微笑与心平气和", "Улыбка и спокойствие")),
      text: t(
        lang,
        L(
          "Solve problems with a polite smile even when frustrated — you will get help faster than shouting or losing your temper.",
          "แก้ปัญหาด้วยรอยยิ้มและความสุภาพแม้ไม่พอใจ — ได้ความช่วยเหลือเร็วกว่าการโวยวาย",
          "即使不满也以礼貌微笑解决问题——比吼叫更有效。",
          "Улыбка и вежливость решают быстрее крика.",
        ),
      ),
    },
    {
      id: "queue",
      title: t(lang, L("Queues & personal space", "คิวและระยะส่วนตัว", "排队与个人空间", "Очереди")),
      text: t(
        lang,
        L(
          "Wait your turn at Immigration, malls, and popular restaurants. Gentle tone beats cutting in line.",
          "รอคิวที่ตม. ห้าง และร้านดัง น้ำเสียงสุภาพดีกว่าการแทรกคิว",
          "移民局、商场、热门餐厅请排队。",
          "Соблюдайте очередь в Immigration и ТЦ.",
        ),
      ),
    },
  ];
  return items;
}

export function getCultureDonts(lang: LanguageCode) {
  const items: {
    id: EtiquetteItemId;
    title: string;
    text: string;
  }[] = [
    {
      id: "head",
      title: t(lang, L("Touching the head", "จับหัว", "摸头", "Голова")),
      text: t(
        lang,
        L(
          "The head holds “khwan” — do not pat, stroke, or play with anyone's head (even cute children). Avoid reaching over someone's head.",
          "ศีรษะเป็นที่ของขวัญ — อย่าตบ ลูบ หรือเล่นหัวใคร (แม้เด็กน่ารัก) อย่าเอื้อมข้ามศีรษะผู้อื่น",
          "头部承载魂气——勿拍、抚摸任何人头部；勿从他人头顶伸手。",
          "Голову не трогают и не перешагивают руками.",
        ),
      ),
    },
    {
      id: "feet",
      title: t(lang, L("Pointing with feet", "ใช้เท้าชี้", "用脚指向", "Ноги")),
      text: t(
        lang,
        L(
          "Do not point at people, objects, or Buddha images with your feet; when sitting cross-legged, keep soles away from others and sacred images.",
          "อย่าใช้เท้าชี้คน สิ่งของ หรือพระพุทธรูป เวลานั่งขัดสมาธิอย่าให้ฝ่าเท้าหันหาคนหรือพระ",
          "勿用脚指向人、物品或佛像；盘腿时注意脚心勿朝向他人或佛像。",
          "Не указывайте ногой; следите за положением ног при сидении.",
        ),
      ),
    },
    {
      id: "voice",
      title: t(lang, L("Loud voices & public fights", "พูดเสียงดังและทะเลาะในที่สาธารณะ", "高声与当众冲突", "Громкий голос")),
      text: t(
        lang,
        L(
          "Shouting or arguing in public is uncivil and makes everyone lose face — calm, steady politeness gets results faster.",
          "ตะโกนหรือทะเลาะในที่สาธารณะไร้อารยธรรมและทำให้เสียหน้า — น้ำเสียงนุ่มนวลแต่มั่นคงได้ผลเร็วกว่า",
          "当众吼叫或争吵失礼且让各方丢面子——温和坚定更有效。",
          "Крик в общественных местах — потеря лица для всех.",
        ),
      ),
    },
    {
      id: "monarchy",
      title: t(lang, L("Royal institution", "สถาบันกษัตริย์", "王室机构", "Монархия")),
      text: t(
        lang,
        L(
          "Never mock portraits or currency bearing the King. Pick up dropped banknotes by hand, not with your foot — strict laws apply (including for foreigners).",
          "ห้ามล้อเลียนรูปหรือเงินที่มีพระบรมฉายาลักษณ์ เก็บธนบัตรด้วยมือไม่ใช่เท้า — มีกฎหมายเข้มงวด (รวมชาวต่างชาติ)",
          "勿嘲弄御像或印有国王的货币；掉钱用手捡勿用脚踩——法律严厉（外籍人士亦然）。",
          "Не оскорбляйте портреты и не топчите банкноты.",
        ),
      ),
    },
    {
      id: "pda",
      title: t(lang, L("Public displays of affection", "แสดงความรักในที่สาธารณะ", "公共场所亲密行为", "PDA")),
      text: t(
        lang,
        L(
          "Even in party-town Pattaya, heavy PDA outside nightlife zones makes many Thais uncomfortable — keep it modest on streets, malls, and family areas.",
          "แม้พัทยาจะเป็นปาร์ตี้ทาวน์ การแสดงความรักเกินไปนอกย่านไนท์ไลฟ์ทำให้คนไทยหลายคนอึดอัด — สุภาพบนถนน ห้าง และพื้นที่ครอบครัว",
          "即使在芭提雅，非夜生活区的过分亲密仍令人不适。",
          "Сдержанность вне зон nightlife.",
        ),
      ),
    },
    {
      id: "beach-dress",
      title: t(lang, L("Beachwear in town", "ชุดชายหาดในเมือง", "市区穿泳装", "Купальники в городе")),
      text: t(
        lang,
        L(
          "Bikinis and shirtless walks belong on the sand or hotel pool only — cover up before 7-Eleven, restaurants, and main roads.",
          "บิกินี่และเดินไม่สวมเสื้อได้บนหาดหรือสระโรงแรมเท่านั้น — ใส่เสื้อก่อนเข้าเซเว่น ร้านอาหาร และถนนใหญ่",
          "比基尼与赤膊仅限沙滩或酒店泳池——进便利店、餐厅、主干道前请穿衣。",
          "Купальники только на пляже и у бассейна.",
        ),
      ),
    },
    {
      id: "photos-monks",
      title: t(lang, L("Photos at sacred sites", "ถ่ายรูปในที่ศักดิ์สิทธิ์", "圣地拍照", "Фото")),
      text: t(
        lang,
        L(
          "Ask before photographing monks up close. No selfies with Buddha images above your head level.",
          "ถามก่อนถ่ายพระใกล้ๆ ห้ามเซลฟี่กับพระพุทธรูปสูงกว่าระดับศีรษะ",
          "近距离拍僧侣须先问；勿在佛像高于头处自拍。",
          "Спрашивайте перед съёмкой монахов.",
        ),
      ),
    },
    {
      id: "public-argue",
      title: t(lang, L("Public embarrassment", "ทำให้อายในที่สาธารณะ", "当众难堪", "Смущение")),
      text: t(
        lang,
        L(
          "Correcting someone harshly in front of others is deeply uncomfortable. Discuss issues privately.",
          "ตำหนิอย่างรุนแรงต่อหน้าคนอื่นทำให้อึดอัด คุยกันเป็นส่วนตัว",
          "当众严厉指责令人难堪；私下沟通。",
          "Не унижайте людей при других.",
        ),
      ),
    },
    {
      id: "litter",
      title: t(lang, L("Litter at shrines", "ทิ้งขยะบริเวณศาลเจ้า", "神龛乱扔垃圾", "Мусор")),
      text: t(
        lang,
        L(
          "Remove shoes at spirit houses; do not litter or sit on shrine platforms.",
          "ถอดรองเท้าที่ศาลเจ้า ไม่ทิ้งขยะหรือนั่งบนแท่นศาล",
          "神龛前脱鞋；勿乱扔垃圾或坐祭台。",
          "У святилищ — без мусора.",
        ),
      ),
    },
  ];
  return items;
}

export function getTempleChecklist(lang: LanguageCode): string[] {
  return [
    t(
      lang,
      L(
        "Strict dress: no tank tops, bare shoulders, shorts above the knee, or ripped jeans — rent or buy a sarong at the gate if needed.",
        "แต่งกายเคร่งครัด: ห้ามสายเดี่ยว เปิดไหล่ ขาสั้นเหนือเข่า กางเกงขาด — เช่าหรือซื้อผ้าคลุมที่ทางเข้าได้",
        "着装严格：禁吊带、露肩、过膝短裤、破洞牛仔裤——门口可租纱笼。",
        "Строгий дресс-код; саронг у входа.",
      ),
    ),
    t(
      lang,
      L(
        "Remove shoes before entering the ubosot (main hall) — follow where others leave footwear.",
        "ถอดรองเท้าก่อนเข้าพระอุโบสถ — ทำตามจุดที่คนอื่นวางรองเท้า",
        "进主殿（乌波索）前脱鞋——跟随他人放鞋处。",
        "Снимайте обувь перед убосотом.",
      ),
    ),
    t(lang, L("Speak softly; phone on silent", "พูดเบา ปิดเสียงมือถือ", "轻声；手机静音", "Тихий голос")),
    t(
      lang,
      L(
        "Do not climb structures or Buddha bases for photos; sit with feet tucked, not pointing at the main image.",
        "ห้ามปีนโบราณสถานหรือฐานพระเพื่อถ่ายรูป นั่งพับเพียบหรือคุกเข่า อย่าเหยียดขาชี้พระประธาน",
        "禁止攀爬古迹或佛座拍照；盘腿或跪坐，脚勿指向主佛。",
        "Не лазайте; сидите, не направляя ступни на Будду.",
      ),
    ),
    t(lang, L("Women keep distance from monks; no touching", "ผู้หญิงรักษาระยะจากพระ ไม่สัมผัส", "女性与僧侣保持距离", "Женщины не касаются монахов")),
    t(
      lang,
      L(
        "Big Buddha (Khao Phra Tamnak), Wat Yansangwararam, and Sanctuary of Truth follow the same rules.",
        "พระใหญ่เขาพระตำหนัก วัดญาณสังวราราม และปราสาทสัจธรรม ใช้กฎเดียวกัน",
        "大佛、Yansangwararam 寺、真理圣殿规则相同。",
        "Big Buddha, Wat Yansangwararam, Sanctuary of Truth.",
      ),
    ),
  ];
}

export function getDontDeepDives(lang: LanguageCode) {
  return [
    {
      id: "head" as const,
      title: t(lang, L("Touching the head", "จับหัว", "摸头", "Голова")),
      why: t(
        lang,
        L(
          "The head is spiritually the highest part of the body — home to “khwan,” your life force.",
          "ศีรษะเป็นส่วนสูงและศักดิ์สิทธิ์ทางจิตวิญญาณ — เป็นที่ของ “ขวัญ”",
          "头部是精神层面最高的部位——“魂气”所在。",
          "Голова — место «khwan», жизненной силы.",
        ),
      ),
      tips: [
        t(
          lang,
          L(
            "Affectionate head-pats on children still feel wrong to many Thais — smile and wave instead.",
            "การลูบหัวเด็กแม้ด้วยความเอ็นดูก็ทำให้หลายคนอึดอัด — ยิ้มและโบกมือแทน",
            "即使出于喜爱也不要拍小孩头——微笑挥手即可。",
            "Не гладьте детей по голове.",
          ),
        ),
        t(
          lang,
          L(
            "If you must reach across someone, say sorry first — only very close family may touch heads.",
            "หากต้องเอื้อมข้าม ขอโทษก่อน — เฉพาะครอบครัวสนิทมากเท่านั้น",
            "必须伸手越过他人时先道歉——仅极亲近家人可触头。",
            "Извинитесь, если тянетесь через человека.",
          ),
        ),
      ],
    },
    {
      id: "feet" as const,
      title: t(lang, L("Pointing with feet", "ชี้เท้า", "用脚指向", "Ноги")),
      why: t(
        lang,
        L(
          "Feet are the lowest, dirtiest part of the body — using them to communicate is deeply rude.",
          "เท้าเป็นส่วนต่ำและสกปรกที่สุด — ใช้เท้าสื่อสารถือว่าหยาบคายมาก",
          "脚是身体最低、最脏的部位——用脚交流极不礼貌。",
          "Ноги — самая «низкая» часть тела.",
        ),
      ),
      tips: [
        t(
          lang,
          L(
            "Never point at people, supermarket items on the floor, or Buddha images with your feet.",
            "อย่าใช้เท้าชี้คน ของบนพื้นในซูเปอร์ หรือพระพุทธรูป",
            "勿用脚指向人、超市地上物品或佛像。",
            "Не указывайте ногой на людей и святыни.",
          ),
        ),
        t(
          lang,
          L(
            "Do not open doors, kick objects toward others, or step over people or food on the floor.",
            "อย่าใช้เท้าเปิดประตู เตะของให้คนอื่น หรือก้าวข้ามคน/อาหารบนพื้น",
            "勿用脚开门、踢物给他人、跨过地上的人或食物。",
            "Не открывайте двери ногой и не перешагивайте через еду.",
          ),
        ),
      ],
    },
    {
      id: "voice" as const,
      title: t(lang, L("Speaking too loudly", "พูดเสียงดัง", "大声说话", "Громкая речь")),
      why: t(
        lang,
        L(
          "Thai society values harmony and saving face — loud confrontation is seen as uncivil.",
          "สังคมไทยให้คุณค่ากับความสงบและรักษาหน้า — การทะเลาะเสียงดังถือว่าไร้อารยธรรม",
          "泰国社会重视和谐与面子——当众大吵被视为不文明。",
          "Гармония и «лицо» важнее победы в споре.",
        ),
      ),
      tips: [
        t(
          lang,
          L(
            "Anger makes locals shut down negotiations to protect their own face — you will not get your way faster.",
            "ความโกรธทำให้คนไทยหยุดเจรจาเพื่อรักษาหน้า — จะไม่ได้สิ่งที่ต้องการเร็วขึ้น",
            "发怒会让对方为保全面子停止协商——反而更慢。",
            "Гнев закрывает диалог.",
          ),
        ),
        t(
          lang,
          L(
            'Use a soft, steady tone and a smile — “jai yen” works better than yelling at staff.',
            "ใช้น้ำเสียงนุ่มนวลมั่นคงและรอยยิ้ม — “ใจเย็น” ดีกว่าตะโนใส่พนักงาน",
            "用温和坚定的语气与微笑——“心平气和”胜过对店员吼叫。",
            "«Jai yen» эффективнее крика.",
          ),
        ),
      ],
    },
    {
      id: "monarchy" as const,
      title: t(lang, L("Disrespecting the monarchy", "ไม่เคารพสถาบัน", "不敬王室", "Монархия")),
      why: t(
        lang,
        L(
          "The monarchy is central to Thai identity; insult laws are among the strictest in the world.",
          "สถาบันกษัตริย์เป็นศูนย์รวมจิตใจคนไทย กฎหมายหมิ่นประมาทเข้มงวดมาก",
          "王室是泰国认同核心；侮辱相关法律极为严厉。",
          "Монархия — ядро идентичности; законы строгие.",
        ),
      ),
      tips: [
        t(
          lang,
          L(
            "Do not criticize or joke about the institution in public or on social media — foreigners are not exempt.",
            "ห้ามวิพากษ์หรือล้อเลียนในที่สาธารณะหรือโซเชียล — ชาวต่างชาติไม่ยกเว้น",
            "勿在公共场所或社交媒体批评或玩笑——外籍人士无豁免。",
            "Иностранцы тоже под законом.",
          ),
        ),
        t(
          lang,
          L(
            "Treat street portraits with respect; pick up fallen notes and coins by hand — never step on them.",
            "เคารพรูปพระบรมฉายาลักษณ์ตามท้องถนน เก็บธนบัตร/เหรียญด้วยมือ ห้ามเหยียบ",
            "尊重街头御像；掉落的纸币硬币用手捡，勿踩。",
            "Поднимайте деньги руками, не ногой.",
          ),
        ),
      ],
    },
  ];
}

export function getPattayaTips(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Temples & shrines", "วัดและศาลเจ้า", "寺庙与神龛", "Храмы")),
      text: t(
        lang,
        L(
          "Landmarks like Big Buddha (Wat Phra Yai), Wat Yansangwararam, and Sanctuary of Truth share temple rules — strict dress, quiet voices, shoes off in the ubosot.",
          "พระใหญ่ วัดญาณสังวราราม ปราสาทสัจธรรม ใช้กฎวัดเดียวกัน — แต่งกายเคร่งครัด พูดเบา ถอดรองเท้าในพระอุโบสถ",
          "大佛、Yansangwararam、真理圣殿同守寺庙规矩——着装严格、轻声、主殿脱鞋。",
          "Те же правила, что в храмах.",
        ),
      ),
    },
    {
      title: t(lang, L("Beach vs city", "ชายหาด vs ในเมือง", "海滩与市区", "Пляж и город")),
      text: t(
        lang,
        L(
          "Daytime is the beach; once you step onto the sidewalk, 7-Eleven, or a mall, put on a shirt and cover-up — shirtless men and bikinis off-sand feel disrespectful.",
          "กลางวันคือหาด พอขึ้นฟุตบาท เซเว่น หรือห้าง ต้องใส่เสื้อและคลุม — เดินไม่สวมเสื้อ/บิกินี่นอกหาดไม่เหมาะสม",
          "白天是海滩；踏上人行道、便利店或商场即需穿衣遮盖。",
          "На пляже — купальник; в городе — прикрывайтесь.",
        ),
      ),
    },
    {
      title: t(lang, L("Nightlife etiquette", "มารยาทไนท์ไลฟ์", "夜生活礼仪", "Этикет nightlife")),
      text: t(
        lang,
        L(
          "Tip staff when happy, respect workers' boundaries (no grabbing without consent), and call venue security or Tourist Police 1155 instead of street fights.",
          "ให้ทิปเมื่อพอใจ เคารพสิทธิ์พนักงาน (อย่าจับตัวโดยไม่ได้รับอนุญาต) แจ้งการ์ดหรือตำรวจท่องเที่ยว 1155 แทนการทะเลาะ",
          "满意可给小费；尊重从业者边界；纠纷找场所保安或旅游警察1155。",
          "Чаевые, согласие, полиция 1155.",
        ),
      ),
    },
    {
      title: t(lang, L("Walking Street & safety", "Walking Street & ความปลอดภัย", "步行街与安全", "Walking Street")),
      text: t(
        lang,
        L(
          "Dress a bit smarter than on the sand (shirt, decent shorts). Carry minimal valuables, watch bags in crowds, avoid settling disputes alone at night.",
          "แต่งตัวดีกว่าบนหาดเล็กน้อย (เสื้อ กางเกงสุภาพ) พกของมีค่าน้อย ระวังกระเป๋าในที่แออัด อย่าเคลียร์เองกลางคืน",
          "穿着比沙滩稍正式；少带贵重物品；夜间勿独自“私了”纠纷。",
          "Осторожнее с ценностями ночью.",
        ),
      ),
    },
    {
      title: t(lang, L("Business etiquette", "มารยาทธุรกิจ", "商务礼仪", "Бизнес")),
      text: t(
        lang,
        L(
          "Present business cards with both hands, text facing the recipient, brief bow — read the card before pocketing (never write on it or stuff into pants). Small talk on food or weather before contracts; respect the senior person in the room.",
          "ส่งนามบัตรสองมือ หันตัวอักษรให้ผู้รับ โค้งเล็กน้อย อ่านก่อนเก็บ (ห้ามเขียนหรือยัดกางเกง) คุยอาหาร/อากาศก่อนสัญญา เคารพผู้ใหญ่ในห้อง",
          "双手递名片、稍鞠躬、阅读后再收（勿当场涂写或塞裤袋）；签约前先寒暄；尊重在场最长者。",
          "Визитки двумя руками; small talk; уважение старшим.",
        ),
      ),
    },
    {
      title: t(lang, L("Songthaews (baht buses)", "รถสองแถว", "双条车", "Сонгтхэу")),
      text: t(
        lang,
        L(
          'On fixed routes, wave to board — do not ask "Can you go to…?" or you may be charged a charter fare. Press the buzzer to stop, pay 10–20 THB at the driver with small notes. Queue politely at busy stops (e.g. Wat Chaimongkol).',
          "บนเส้นทางปกติ โบกขึ้นรถ — อย่าถาม “ไป...ได้ไหม” ไม่งั้นโดนเหมาแพง กดกิ่งลง จ่าย 10–20 บาทที่คนขับด้วยเงินย่อย ต่อคิวสุภาพที่จุดจอดหลัก",
          "固定线路招手即上——勿问“能去…吗”以免按包车价；按铃下车；付10–20泰铢零钱；热门站礼貌排队。",
          "Не спрашивайте маршрут — махните; 10–20 бат.",
        ),
      ),
    },
    {
      title: t(lang, L("Helmets & driving", "หมวกกันน็อกและขับขี่", "头盔与驾驶", "Шлемы")),
      text: t(
        lang,
        L(
          "Pattaya police enforce helmet laws strictly — wear a certified helmet and carry your international driving permit to avoid fines and impound drama.",
          "ตำรวจพัทยากวดเรื่องหมวกเข้ม — สวมหมวกมาตรฐานและพกใบขับขี่สากลเพื่อหลีกเลี่ยงค่าปรับ",
          "芭提雅严查头盔——佩戴合格头盔并携带国际驾照以免罚款。",
          "Шлем и МВУ обязательны.",
        ),
      ),
    },
  ];
}

export function getSocialTips(lang: LanguageCode): string[] {
  return [
    t(
      lang,
      L(
        "Gifts: present with both hands; small thoughtful items beat expensive showiness.",
        "ให้ของด้วยสองมือ ของเล็กที่มีความหมายดีกว่าของแพงโอ้อวด",
        "用双手送礼；贴心小礼物胜过炫富。",
        "Подарки — двумя руками.",
      ),
    ),
    t(
      lang,
      L(
        "Invitations: RSVP when possible; arriving a few minutes late to casual dinners is common, but not to official appointments.",
        "ตอบรับคำเชิญเมื่อเป็นไปได้ งานทานเลี้ยงไม่เป็นทางการมาสายเล็กน้อยได้ แต่นัดราชการต้องตรงเวลา",
        "尽量回复邀请；非正式晚宴可稍晚，公务须准时。",
        "На официальные встречи — вовремя.",
      ),
    ),
    t(
      lang,
      L(
        "Neighbors: quiet hours in condos matter; inform juristic person about parties.",
        "เวลาเงียบในคอนโดสำคัญ แจ้งนิติบุคคลหากมีปาร์ตี้",
        "公寓注意安静时段；聚会告知物业。",
        "Соблюдайте тишину в кондо.",
      ),
    ),
    t(
      lang,
      L(
        "Temple donations & merit: follow local customs; do not pose disrespectfully with sacred objects.",
        "ทำบุญตามธรรมเนียมท้องถิ่น อย่าถ่ายรูปท่าไม่เหมาะสมกับสิ่งศักดิ์สิทธิ์",
        "捐赠遵循当地习俗；勿对圣物不敬拍照。",
        "Уважайте местные обычаи подношений.",
      ),
    ),
  ];
}
