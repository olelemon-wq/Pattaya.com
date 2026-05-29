"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import { AlertTriangle, FileBadge } from "lucide-react";

export function CondoBuyingQuotaDetail() {
  const { language } = useLanguage();

  const points = [
    t(
      language,
      L(
        "Quota is measured by total sellable floor area (sqm), not number of units — one large penthouse uses more foreign quota than a studio.",
        "คิดจากพื้นที่ขายรวม (ตร.ม.) ไม่ใช่จำนวนห้อง — ห้องใหญ่กินโควตามากกว่าสตูดิโอ",
        "按可售总面积（平方米）计算，非按套数——大户型占用更多外资配额。",
        "Квота по площади, не по числу юнитов.",
      ),
    ),
    t(
      language,
      L(
        "Each registered building in a project has its own 49% calculation — Building A can be full while Building B still has quota.",
        "แต่ละอาคารในโครงการคำนวณโควตาแยก — ตึก A เต็ม ตึก B อาจยังว่าง",
        "项目中每栋注册公寓楼单独计算 49% 配额。",
        "В каждой башне проекта — своя квота.",
      ),
    ),
    t(
      language,
      L(
        "When quota is full, Land Office will not register new foreign freehold — leasehold or another building are the legal alternatives (not informal nominees).",
        "โควตาเต็ม ที่ดินไม่จดกรรมสิทธิ์ต่างชาติ — ทางกฎหมายคือสิทธิเช่าหรือเปลี่ยนอาคาร",
        "配额满则无法登记外籍永久产权——合法选择为租赁或其他楼盘。",
        "При заполнении — только leasehold или другой объект.",
      ),
    ),
    t(
      language,
      L(
        "Proposals to raise the cap to 75% have not become law as of 2026 — plan purchases on the current 49% rule.",
        "ข้อเสนอขยับเป็น 75% ยังไม่เป็นพ.ร.บ. ปี 2026 — วางแผนตาม 49%",
        "提高至 75% 的提案截至 2026 年尚未立法。",
        "Повышение до 75% — не закон в 2026.",
      ),
    ),
  ];

  return (
    <section aria-labelledby="quota-detail-title" className="mt-16">
      <div className="rounded-2xl border border-[#B29475]/25 bg-gradient-to-br from-[#F8FAFC] to-white p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A192F] text-white">
            <FileBadge className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
              {t(language, L("Foreign quota letter", "หนังสือโควตาต่างชาติ", "外资配额证明", "Quota letter"))}
            </p>
            <h2
              id="quota-detail-title"
              className="mt-1 text-xl font-bold text-[#0A192F] sm:text-2xl"
            >
              {t(
                language,
                L(
                  "49% rule — verify in writing before you pay",
                  "กฎ 49% — ขอหนังสือยืนยันก่อนจ่ายเงิน",
                  "49% 规则——付款前书面核实",
                  "Правило 49% — письменно до оплаты",
                ),
              )}
            </h2>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-[#444748]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29475]" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <p>
            {t(
              language,
              L(
                "Request a foreign-quota certificate from the juristic person (CJP) dated within 14–30 days before transfer. A reservation fee (฿50k–200k) is normal; do not pay large deposits without quota confirmation.",
                "ขอหนังสือจากนิติบุคคล อายุ 14–30 วันก่อนโอน มัดจำจอง ฿50,000–200,000 เป็นเรื่องปกติ อย่าจ่ายมัดจำใหญ่โดยไม่ยืนยันโควตา",
                "过户前 14–30 日内向物业索取配额证明。预订金 5–20 万泰铢常见；未确认配额勿付大额定金。",
                "Справка CJP за 14–30 дней до сделки. Депозит 50–200k THB — без справки не платите крупные суммы.",
              ),
            )}
          </p>
        </div>

        <p className="mt-4 text-xs text-[#777777]">
          {t(language, L("Reference:", "อ้างอิง:", "参考：", "Ссылка:"))}{" "}
          <a
            href="https://houseviser.com/guide/legal/condo-foreign-quota-49-percent"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#0d9488] hover:underline"
          >
            Condominium Act §19 — 49% foreign quota
          </a>
        </p>
      </div>
    </section>
  );
}
