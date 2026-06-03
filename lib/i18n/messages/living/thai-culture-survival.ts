import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export type WaiTabId = "monks" | "elders" | "peers";
export type FlipCardId = "shoes" | "head-feet" | "temper";

export function getThaiCultureSurvivalCopy(lang: LanguageCode) {
  return {
    badge: t(lang, L("Interactive", "เครื่องมือ", "互动", "Интерактив")),
    title: t(
      lang,
      L(
        "Thai culture survival guide",
        "คู่มือวัฒนธรรมไทยสำหรับชาวต่างชาติ",
        "外籍人士泰国文化 survival 指南",
        "Гид по тайской культуре",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Practice the wai by context and study the illustrated do's and don'ts — then open the full etiquette guide for temples, monarchy, and Pattaya.",
        "ฝึกไหว้ตามบริบท และดูภาพควรทำ/ไม่ควรทำ — จากนั้นเปิดคู่มือมารยาทฉบับเต็มสำหรับวัด สถาบัน และพัทยา",
        "按场景练习合十礼并查看插图版该做与不该做——完整礼仪见礼仪专页。",
        "Wai по контексту и иллюстрации do/don't; полный этикет — на отдельной странице.",
      ),
    ),
    waiTitle: t(lang, L("The wai visualizer", "จำลองท่าไหว้", "合十礼示意", "Визуализатор wai")),
    waiHint: t(
      lang,
      L("Select a context — thumb position and bow depth change.",
        "เลือกบริบท — ตำแหน่งนิ้วโป้งและระดับการโค้งจะเปลี่ยน",
        "选择场景——拇指位置与鞠躬深度不同。",
        "Выберите контекст.",
      ),
    ),
    flipTitle: t(lang, L("Do's & don'ts", "ควรทำ / ไม่ควรทำ", "该做与不该做", "Do & Don't")),
    flipHint: t(
      lang,
      L(
        "Green = do, red = don't. Each panel matches the illustration above.",
        "เขียว = ควรทำ แดง = ไม่ควรทำ แต่ละช่องสอดคล้องภาพด้านบน",
        "绿色=应该，红色=不应该，与上图各栏对应。",
        "Зелёный = да, красный = нет.",
      ),
    ),
    illustratedAlt: t(
      lang,
      L(
        "Illustrated Thai culture do's and don'ts — shoes, head and feet, and keeping calm",
        "ภาพประกอบควรทำและไม่ควรทำ — รองเท้า ศีรษะและเท้า และความใจเย็น",
        "泰国文化该做与不该做插图——鞋子、头脚、情绪",
        "Иллюстрация do и don't",
      ),
    ),
    doLabel: t(lang, L("Do", "ควรทำ", "应该", "Да")),
    dontLabel: t(lang, L("Don't", "ไม่ควรทำ", "不应该", "Нет")),
    photoCaption: t(
      lang,
      L("Reference photo for this wai level", "ภาพตัวอย่างระดับไหว้นี้", "此合十礼等级参考图", "Фото для этого wai"),
    ),
    thumbLabel: t(lang, L("Thumb position", "ตำแหน่งนิ้วโป้ง", "拇指位置", "Большой палец")),
    bowLabel: t(lang, L("Bow depth", "ระดับการโค้ง", "鞠躬幅度", "Поклон")),
    toolkitNote: t(
      lang,
      L(
        "For temples, monarchy, nightlife, and Pattaya-specific tips:",
        "เรื่องวัด สถาบัน ไนต์ไลฟ์ และเคล็ดลับในพัทยา —",
        "寺庙、王室、夜生活及芭提雅贴士：",
        "Храмы, монархия, Pattaya:",
      ),
    ),
    etiquetteLink: t(
      lang,
      L("Full etiquette guide", "คู่มือมารยาทฉบับเต็ม", "完整礼仪指南", "Полный этикет"),
    ),
  };
}

export function getWaiImageAlt(lang: LanguageCode, id: WaiTabId): string {
  const alts: Record<WaiTabId, string> = {
    monks: t(
      lang,
      L(
        "Deep wai to a Buddhist monk — hands high, thumbs between eyebrows",
        "ไหว้พระแบบลึก — มือสูง นิ้วโป้งระหว่างคิ้ว",
        "向僧侣深合十——手抬高，拇指在眉间",
        "Глубокий wai монаху",
      ),
    ),
    elders: t(
      lang,
      L(
        "Medium wai to an elder — thumbs at nose level",
        "ไหว้ผู้ใหญ่ — นิ้วโป้งระดับปลายจมูก",
        "向长辈合十——拇指在鼻尖高度",
        "Wai старшему",
      ),
    ),
    peers: t(
      lang,
      L(
        "Light wai between friends — thumbs at chin",
        "ไหว้เพื่อนแบบเบา — นิ้วโป้งระดับคาง",
        "朋友间轻合十——拇指在下巴",
        "Лёгкий wai друзьям",
      ),
    ),
  };
  return alts[id];
}

export function getWaiTabContent(lang: LanguageCode, id: WaiTabId) {
  const tabs: Record<
    WaiTabId,
    { label: string; thumb: string; bow: string; body: string }
  > = {
    monks: {
      label: t(lang, L("Wai to monks", "ไหว้พระ", "向僧侣合十", "Монахам")),
      thumb: t(
        lang,
        L("Between the eyebrows (forehead level)", "ระหว่างคิ้ว (ระดับหน้าผาก)", "两眉之间（额部高度）", "Между бровями"),
      ),
      bow: t(lang, L("Deep bow — palms together, eyes lowered", "โค้งลึก — ฝ่ามือชิด สายตาต่ำ", "深鞠躬——合掌垂目", "Глубокий поклон"),
      ),
      body: t(
        lang,
        L(
          "Never touch a monk if you are a woman; offer seats and speak softly. At temples, remove shoes and keep your head lower than seated monks.",
          "ผู้หญิงไม่สัมผัสพระ ให้ที่นั่งและพูดเบา ในวัดถอดรองเท้าและศีรษะต่ำกว่าพระที่นั่ง",
          "女性勿触碰僧侣；让座、轻声说话。入寺脱鞋，头部勿高过坐着的僧人。",
          "Женщинам не касаться монахов; в храме — без обуви.",
        ),
      ),
    },
    elders: {
      label: t(lang, L("Wai to elders", "ไหว้ผู้ใหญ่", "向长辈合十", "Старшим")),
      thumb: t(lang, L("Tip of the nose", "ปลายจมูก", "鼻尖高度", "Кончик носа")),
      bow: t(
        lang,
        L("Medium bow — respectful, not as deep as for monks",
          "โค้งปานกลาง — เคารพ ไม่ลึกเท่าไหว้พระ",
          "中度鞠躬——恭敬，不及对僧众深",
          "Средний поклон",
        ),
      ),
      body: t(
        lang,
        L(
          "Use for landlords, senior colleagues, immigration officers, and parents of friends. Add khrap (male) or kha (female) when greeting.",
          "ใช้กับเจ้าของบ้าน หัวหน้างาน เจ้าหน้าที่ตม. และพ่อแม่เพื่อน ทักทายด้วย ครับ/ค่ะ",
          "用于房东、上级、移民官员及朋友父母；问候时加 ครับ/ค่ะ。",
          "Арендодатель, начальник, родители друзей + khrap/kha.",
        ),
      ),
    },
    peers: {
      label: t(lang, L("Wai to peers", "ไหว้เพื่อน", "向同辈合十", "Ровесникам")),
      thumb: t(lang, L("Chin level", "ระดับคาง", "下巴高度", "Уровень подбородка")),
      bow: t(
        lang,
        L("Light nod with palms — casual, friendly",
          "โค้งเบาๆ — เป็นกันเอง",
          "轻微合十点头——随意友好",
          "Лёгкий поклон",
        ),
      ),
      body: t(
        lang,
        L(
          "Common with shop staff, neighbours, and friends your age. A smile and sawasdee often enough in Pattaya service settings.",
          "ใช้กับพนักงานร้าน เพื่อนบ้าน และเพื่อนวัยเดียวกัน ในพัทยามักยิ้มและสวัสดีก็พอ",
          "店员、邻居、同龄朋友。芭提雅服务业常微笑说萨瓦迪即可。",
          "Магазины, соседи, друзья — часто достаточно sawasdee.",
        ),
      ),
    },
  };
  return tabs[id];
}

export function getWaiTabLabels(lang: LanguageCode) {
  return (["monks", "elders", "peers"] as const).map((id) => ({
    id,
    label: getWaiTabContent(lang, id).label,
  }));
}

export function getDosDontPanels(lang: LanguageCode) {
  const panels: Record<
    FlipCardId,
    { topic: string; doText: string; dontText: string; doAlt: string; dontAlt: string }
  > = {
    shoes: {
      topic: t(lang, L("Shoes", "รองเท้า", "鞋子", "Обувь")),
      doAlt: t(
        lang,
        L(
          "Do: remove shoes before entering a Thai home or temple",
          "ควรทำ: ถอดรองเท้าก่อนเข้าบ้านหรือวัด",
          "应该：进入泰国家庭或寺庙前脱鞋",
          "Да: снимите обувь",
        ),
      ),
      dontAlt: t(
        lang,
        L(
          "Don't: enter with shoes on — especially muddy shoes at a temple",
          "ไม่ควรทำ: เข้าด้วยรองเท้า โดยเฉพาะรองเท้าเปื้อนโคลนที่วัด",
          "不应该：穿鞋进入，尤其是脏鞋进寺庙",
          "Нет: не входите в обуви",
        ),
      ),
      doText: t(
        lang,
        L(
          "Take off shoes before entering Thai homes and temple buildings. Place them neatly outside — socks are usually fine.",
          "ถอดรองเท้าก่อนเข้าบ้านคนไทยและอาคารในวัด จัดวางรองเท้าเรียบร้อยนอกอาคาร — มักใส่ถุงเท้าได้",
          "进入泰国家庭与寺庙前脱鞋，整齐放在门外——通常可穿袜。",
          "Снимайте обувь перед домом и храмом.",
        ),
      ),
      dontText: t(
        lang,
        L(
          "Do not walk into temple halls or homes with shoes on — staff or monks may stop you.",
          "ห้ามเดินเข้าศาลาในวัดหรือบ้านด้วยรองเท้า — เจ้าหน้าที่หรือพระอาจห้าม",
          "切勿穿鞋进入寺庙殿堂或他人家中。",
          "Не заходите в храм в обуви.",
        ),
      ),
    },
    "head-feet": {
      topic: t(lang, L("Head & feet", "ศีรษะและเท้า", "头与脚", "Голова и ноги")),
      doAlt: t(
        lang,
        L(
          "Do: respectful wai and polite hand gestures",
          "ควรทำ: ไหว้และใช้มืออย่างสุภาพ",
          "应该：合十礼与礼貌手势",
          "Да: wai",
        ),
      ),
      dontAlt: t(
        lang,
        L(
          "Don't: point feet at a Buddha image or touch someone's head",
          "ไม่ควรทำ: ใช้เท้าชี้พระหรือแตะศีรษะผู้อื่น",
          "不应该：用脚指向佛像或触碰他人头部",
          "Нет: ноги к изображению Будды",
        ),
      ),
      doText: t(
        lang,
        L(
          "Use respectful gestures — wai, offer items with your right hand, and keep a calm posture.",
          "ใช้ท่าทางที่สุภาพ — ไหว้ ส่งของด้วยมือขวา และทำตัวสงบ",
          "使用礼貌手势——合十、右手递物、举止平和。",
          "Wai и правая рука — знак уважения.",
        ),
      ),
      dontText: t(
        lang,
        L(
          "Never touch someone's head. Do not point your feet at people, Buddha images, or sacred objects.",
          "ห้ามแตะศีรษะผู้อื่น และห้ามใช้เท้าชี้คน พระพุทธรูป หรือสิ่งศักดิ์สิทธิ์",
          "勿触碰他人头部；勿用脚指向人、佛像或圣物。",
          "Не трогайте голову; не указывайте ногой.",
        ),
      ),
    },
    temper: {
      topic: t(lang, L("Keeping calm", "ความใจเย็น", "保持冷静", "Спокойствие")),
      doAlt: t(
        lang,
        L(
          "Do: stay calm and greet politely in public",
          "ควรทำ: ใจเย็นและทักทายสุภาพในที่สาธารณะ",
          "应该：公共场所保持冷静礼貌",
          "Да: спокойствие",
        ),
      ),
      dontAlt: t(
        lang,
        L(
          "Don't: shout or lose temper at service staff in public",
          "ไม่ควรทำ: ตะโกนหรือเสียอารมณ์กับพนักงานในที่สาธารณะ",
          "不应该：对服务人员当众发火",
          "Нет: не кричите",
        ),
      ),
      doText: t(
        lang,
        L(
          "Stay calm and polite in public — a smile and quiet tone help you save face and theirs.",
          "ใจเย็นและสุภาพในที่สาธารณะ — ยิ้มและพูดเบาช่วยรักษาหน้าทั้งสองฝ่าย",
          "公共场所保持冷静礼貌——微笑与轻声有助于双方保全面子。",
          "Спокойствие и улыбка — saving face.",
        ),
      ),
      dontText: t(
        lang,
        L(
          "Avoid shouting, arguing, or humiliating staff in public — Thais strongly value saving face.",
          "ห้ามตะโกน ทะเลาะ หรือทำให้พนักงานอายในที่สาธารณะ — คนไทยให้ความสำคัญกับการรักษาหน้า",
          "避免当众大喊、争吵或羞辱服务人员。",
          "Не кричите и не унижайте людей на людях.",
        ),
      ),
    },
  };
  return (["shoes", "head-feet", "temper"] as const).map((id) => ({ id, ...panels[id] }));
}

export function getThaiCulturePageCopy(lang: LanguageCode) {
  return {
    introTitle: t(
      lang,
      L("Thai culture for Pattaya expats", "วัฒนธรรมไทยสำหรับชาวต่างชาติในพัทยา", "芭提雅外籍人士的泰国文化", "Культура для expat"),
    ),
    introBody: t(
      lang,
      L(
        "Thailand blends Buddhist calm, sanuk (fun), and strong social hierarchy. The interactive block below covers the wai and three illustrated do's and don'ts — the etiquette page adds temples, monarchy, and Pattaya detail without repeating those visuals.",
        "ไทยผสมความสงบทางพุทธ สนุก และลำดับชั้นทางสังคม บล็อกด้านล่างมีไหว้และภาพควรทำ/ไม่ควรทำ 3 หัวข้อ — หน้ามารยาทเพิ่มเรื่องวัด สถาบัน และพัทยาโดยไม่ซ้ำภาพ",
        "泰国融合佛教宁静、乐趣与社会层级。下方互动区含合十礼与三组插图礼仪；礼仪专页补充寺庙、王室与芭提雅内容且不重复插图。",
        "Интерактивный блок — wai и 3 иллюстрации; этикет — храмы и Pattaya без дубля.",
      ),
    ),
    pillarsTitle: t(lang, L("Cultural pillars", "หัวใจวัฒนธรรม", "文化支柱", "Столпы")),
    pattayaTitle: t(lang, L("Living in Pattaya", "ใช้ชีวิตในพัทยา", "在芭提雅生活", "Жизнь в Паттайе")),
    etiquetteLink: t(lang, L("Full etiquette guide", "คู่มือมารยาทฉบับเต็ม", "完整礼仪指南", "Этикет")),
    livingHub: t(lang, L("Living hub", "ศูนย์ Living", "生活中心", "Living")),
    etiquette: t(lang, L("Do & Don't", "ควรทำ/ไม่ควรทำ", "礼仪指南", "Этикет")),
  };
}
