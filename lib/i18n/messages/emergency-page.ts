import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getEmergencyPageCopy(lang: LanguageCode) {
  return {
    heroBadge: t(lang, L("24/7 Pattaya", "พัทยา 24 ชม.", "芭提雅 24 小时", "Паттайя 24/7")),
    heroTitle: t(lang, L("Emergency Contacts", "เบอร์ฉุกเฉิน", "紧急联系方式", "Экстренные номера")),
    heroSubtitle: t(
      lang,
      L(
        "Tap to call, show Thai phrases to locals, or share your GPS — optimized for mobile when every second counts.",
        "แตะโทร โชว์ประโยคไทย หรือแชร์พิกัด — ออกแบบให้ใช้เร็วบนมือถือเมื่อทุกวินาทีสำคัญ",
        "一键拨号、向当地人展示泰语或分享 GPS——为分秒必争的手机急救设计。",
        "Звонок, тайские фразы или GPS — для мобильного в экстренной ситуации.",
      ),
    ),
    heroChips: [
      { label: t(lang, L("Tourist Police", "ตำรวจท่องเที่ยว", "旅游警察", "Tourist Police")), number: "1155" },
      { label: t(lang, L("Ambulance", "รถพยาบาล", "救护车", "Скорая")), number: "1669" },
      { label: t(lang, L("Police", "ตำรวจ", "警察", "Полиция")), number: "191" },
    ],
    hubTitle: t(lang, L("Quick actions", "ทำได้ทันที", "快速操作", "Быстрые действия")),
    directoryTitle: t(
      lang,
      L("Official numbers directory", "รายการเบอร์ทางการ", "官方号码目录", "Официальные номера"),
    ),
    directorySubtitle: t(
      lang,
      L(
        "Save these contacts offline. For life-threatening emergencies, call ambulance or police first.",
        "บันทึกเบอร์ไว้แม้ไม่มีเน็ต อันตรายถึงชีวิต โทรรถพยาบาลหรือตำรวจก่อน",
        "请离线保存这些号码。危及生命时请优先拨打救护车或警察。",
        "Сохраните номера офлайн. При угрозе жизни — сначала скорая или полиция.",
      ),
    ),
    fullGuideTitle: t(
      lang,
      L("Need step-by-step help?", "ต้องการขั้นตอนละเอียด?", "需要分步指引？", "Нужна пошаговая помощь?"),
    ),
    fullGuideBody: t(
      lang,
      L(
        "Scenarios for accidents, theft, medical issues, and embassy contacts — on our living safety guide.",
        "สถานการณ์อุบัติเหตุ โจรกรรม การแพทย์ และสถานทูต — ในคู่มือความปลอดภัย",
        "事故、盗窃、医疗与使馆等场景 — 见生活安全指南。",
        "ДТП, кража, медицина и посольство — в гиде по безопасности.",
      ),
    ),
    fullGuideLink: t(
      lang,
      L("Open emergency guide →", "เปิดคู่มือฉุกเฉิน →", "打开紧急指南 →", "Открыть гид →"),
    ),
  };
}
