import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export type EmergencySosId = "doctor" | "police";

export function getEmergencyHubCopy(lang: LanguageCode) {
  return {
    badge: t(lang, L("Interactive", "เครื่องมือ", "互动", "Интерактив")),
    title: t(
      lang,
      L("Pattaya Emergency Hub", "ศูนย์ช่วยเหลือฉุกเฉินพัทยา", "芭提雅紧急中心", "Экстренный центр Паттайи"),
    ),
    subtitle: t(
      lang,
      L(
        "Tap to call, show Thai phrases, or share your location — built for speed on mobile.",
        "แตะโทร แสดงประโยคไทย หรือแชร์พิกัด — ออกแบบให้ใช้เร็วบนมือถือ",
        "一键拨号、展示泰语、分享位置——为手机急救设计。",
        "Звонок, фразы на тайском, геолокация.",
      ),
    ),
    callTitle: t(lang, L("Quick call", "โทรด่วน", "快速拨号", "Быстрый звонок")),
    touristPolice: t(lang, L("Tourist Police", "ตำรวจท่องเที่ยว", "旅游警察", "Tourist Police")),
    touristPoliceNote: t(lang, L("24/7 · English", "24 ชม. · อังกฤษ", "24 小时·英语", "24/7 · English")),
    ambulance: t(lang, L("Ambulance", "รถพยาบาล", "救护车", "Скорая")),
    ambulanceNote: t(lang, L("Medical emergency", "ฉุกเฉินทางการแพทย์", "医疗急救", "Медицина")),
    sosTitle: t(lang, L("Show Thai to locals", "โชว์ภาษาไทยให้คนท้องถิ่น", "给当地人看泰语", "Показать тайский текст")),
    sosDoctor: t(lang, L("I need a Doctor", "ต้องการหมอ", "我需要医生", "Нужен врач")),
    sosPolice: t(lang, L("I need the Police", "ต้องการตำรวจ", "我需要警察", "Нужна полиция")),
    sosDoctorThai: "ช่วยด้วย! ต้องการหมอ",
    sosPoliceThai: "ช่วยด้วย! ต้องการตำรวจ",
    sosTapHint: t(
      lang,
      L("Tap to expand — hold your phone toward staff or bystanders.",
        "แตะเพื่อขยาย — ยื่นมือถือให้พนักงานหรือคนใกล้เคียง",
        "点击展开——将手机展示给工作人员或路人。",
        "Нажмите — покажите телефон.",
      ),
    ),
    locationTitle: t(lang, L("Share where you are", "แชร์ตำแหน่งของคุณ", "分享您的位置", "Поделиться местоположением")),
    locationBtn: t(lang, L("Get my current location", "ดึงตำแหน่งปัจจุบัน", "获取当前位置", "Моё местоположение")),
    locationLoading: t(lang, L("Locating…", "กำลังหาพิกัด…", "定位中…", "Поиск…")),
    locationOpenMaps: t(lang, L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps")),
    locationCoords: (lat: string, lng: string) =>
      t(
        lang,
        L(`Coordinates: ${lat}, ${lng}`, `พิกัด: ${lat}, ${lng}`, `坐标：${lat}, ${lng}`, `Координаты: ${lat}, ${lng}`),
      ),
    locationDenied: t(
      lang,
      L(
        "Location blocked — enable GPS in browser settings or share a nearby landmark verbally.",
        "ปิดกั้นพิกัด — เปิด GPS ในเบราว์เซอร์ หรือบอกจุดสังเกตใกล้ๆ",
        "无法定位——请在浏览器中允许定位，或口头说明附近地标。",
        "Геолокация отключена — включите GPS.",
      ),
    ),
    locationUnsupported: t(
      lang,
      L("Geolocation is not supported on this device.", "อุปกรณ์นี้ไม่รองรับพิกัด", "此设备不支持定位。", "Геолокация недоступна."),
    ),
    moreNumbersTitle: t(lang, L("Other key numbers", "เบอร์สำคัญอื่น", "其他重要号码", "Другие номера")),
    disclaimer: t(
      lang,
      L(
        "In immediate danger call 191 (police) or 1669 (ambulance). This tool does not replace professional emergency services.",
        "อันตรายทันที โทร 191 หรือ 1669 เครื่องมือนี้ไม่แทนบริการฉุกเฉิน",
        "紧急危险请拨 191 或 1669。本工具不能替代专业急救。",
        "Опасность — 191 или 1669.",
      ),
    ),
  };
}

export function getEmergencyMoreNumbers(lang: LanguageCode) {
  return [
    {
      label: t(lang, L("Police (general)", "ตำรวจทั่วไป", "警察", "Полиция")),
      number: "191",
      href: "tel:191",
    },
    {
      label: t(lang, L("Fire", "ดับเพลิง", "消防", "Пожарные")),
      number: "199",
      href: "tel:199",
    },
    {
      label: t(lang, L("Pattaya Call Center", "ศูนย์ 1337", "芭提雅热线", "1337")),
      number: "1337",
      note: t(lang, L("Press 9 for English", "กด 9 ภาษาอังกฤษ", "按 9 英语", "9 — English")),
      href: "tel:1337",
    },
    {
      label: t(lang, L("Bangkok Hospital Pattaya ER", "ER กรุงเทพพัทยา", "曼谷医院急诊", "Bangkok Hospital ER")),
      number: "038 259 999",
      href: "tel:+6638259999",
    },
  ];
}

export function getEmergencyScenarios(lang: LanguageCode) {
  return [
    {
      id: "medical",
      title: t(lang, L("Medical emergency", "ฉุกเฉินทางการแพทย์", "医疗急救", "Медицина")),
      steps: t(
        lang,
        L(
          "Tap Ambulance above or call 1669. Go to ER with passport; contact insurer if you can.",
          "กดรถพยาบาลด้านบนหรือโทร 1669 ไป ER พร้อมพาสปอร์ต แจ้งประกันถ้าไหว",
          "使用上方救护车按钮或拨 1669；带护照前往急诊。",
          "1669 или кнопка скорой; паспорт в ER.",
        ),
      ),
    },
    {
      id: "accident",
      title: t(lang, L("Traffic accident", "อุบัติเหตุจราจร", "交通事故", "ДТП")),
      steps: t(
        lang,
        L(
          "Stay at the scene. Call 191 and 1669. Photograph vehicles, plates, and licenses.",
          "อยู่ที่เกิดเหตุ โทร 191 และ 1669 ถ่ายรูปรถ ป้าย และใบขับขี่",
          "留在现场；拨 191 与 1669；拍照取证。",
          "Не уезжайте; 191 и 1669; фото.",
        ),
      ),
    },
    {
      id: "crime",
      title: t(lang, L("Theft or assault", "ขโมยหรือทำร้าย", "盗窃或袭击", "Кража / нападение")),
      steps: t(
        lang,
        L(
          "Use Tourist Police 1155 for English reports. Keep copies for embassy and insurance.",
          "ใช้ตำรวจท่องเที่ยว 1155 รายงานภาษาอังกฤษ เก็บสำเนาให้สถานทูตและประกัน",
          "旅游警察 1155 可英文报案；保留副本。",
          "1155 — отчёт на английском.",
        ),
      ),
    },
    {
      id: "fire",
      title: t(lang, L("Fire / flood in condo", "ไฟไหม้ / น้ำท่วมในคอนโด", "公寓火灾/进水", "Пожар / затопление")),
      steps: t(
        lang,
        L(
          "Call 199. Use stairs — not lifts. Alert juristic office or security.",
          "โทร 199 ใช้บันได ไม่ใช้ลิฟต์ แจ้งนิติบุคคลหรือรปภ.",
          "拨 199；走楼梯；通知物业。",
          "199; лестница; управляющая.",
        ),
      ),
    },
  ];
}

export function getEmergencyGuidePage(lang: LanguageCode) {
  return {
    scenariosTitle: t(lang, L("What to do next", "ขั้นตอนถัดไป", "后续步骤", "Что делать дальше")),
    hospitalsLink: t(lang, L("Hospitals directory", "รายชื่อโรงพยาบาล", "医院目录", "Больницы")),
    scamLink: t(lang, L("Common scams", "มิจฉาชีพที่พบบ่อย", "常见骗局", "Мошенничество")),
    appNote: t(
      lang,
      L(
        "Download Tourist Police I Lert U (iOS / Android) for SOS chat in English.",
        "ดาวน์โหลดแอป Tourist Police I Lert U สำหรับ SOS แชทภาษาอังกฤษ",
        "可下载 Tourist Police I Lert U 应用获取英语 SOS 支持。",
        "Приложение I Lert U.",
      ),
    ),
  };
}
