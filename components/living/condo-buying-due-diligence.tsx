"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";

function getRows(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      check: t(lang, L("Chanote title deed", "โฉนดที่ดิน (ชานอต)", "Chanote 产权证", "Chanote")),
      verify: t(
        lang,
        L("Owner name, unit no., no forgery; read back page for mortgages/leases", "ชื่อเจ้าของ เลขห้อง ไม่ปลอม อ่านหน้าหลังภาระจำนอง/เช่า", "产权人、房号、背面负担", "Владелец, оборотная сторона"),
      ),
      where: t(lang, L("Land Department", "กรมที่ดิน", "土地厅", "Land Department")),
    },
    {
      check: t(lang, L("Condo registration", "ทะเบียนอาคารชุด", "公寓注册", "Регистрация кондо")),
      verify: t(
        lang,
        L("Building is registered under Condominium Act — not an unregistered “apartment”", "จดทะเบียนอาคารชุดตาม พ.ร.บ. ไม่ใช่หอพักไม่จด", "须为依法注册的公寓，非普通公寓楼", "Зарегистрированное кондо"),
      ),
      where: t(lang, L("Land Department", "กรมที่ดิน", "土地厅", "Land Department")),
    },
    {
      check: t(lang, L("Foreign quota letter", "หนังสือโควตาต่างชาติ", "外资配额函", "Quota letter")),
      verify: t(
        lang,
        L("Remaining foreign sqm covers your unit; dated within 14–30 days", "พื้นที่ต่างชาติเหลือรองรับห้องคุณ อายุ 14–30 วัน", "剩余配额覆盖本单元，14–30 日内", "Квота и дата"),
      ),
      where: t(lang, L("Juristic person (CJP)", "นิติบุคคล", "物业管理", "CJP")),
    },
    {
      check: t(lang, L("Outstanding fees", "ค่าใช้จ่ายค้าง", "欠费", "Задолженности")),
      verify: t(
        lang,
        L("Common fees, sinking fund, utilities paid through transfer day", "ค่าส่วนกลาง กองทุน สาธารณูปโภคจ่ายครบถึงวันโอน", "物业费、维修基金、水电结清", "Взносы и коммуналка"),
      ),
      where: t(lang, L("Juristic person", "นิติบุคคล", "物业", "CJP")),
    },
    {
      check: t(lang, L("Developer / off-plan", "ผู้พัฒนา / ออฟพลาน", "开发商/期房", "Застройщик")),
      verify: t(
        lang,
        L("Licensed developer, EIA if required, staged payments in SPA", "ใบอนุญาต สิ่งแวดล้อม (ถ้ามี) จ่ายเป็นงวดในสัญญา", "许可、环评、分期付款", "Лицензия, этапы оплаты"),
      ),
      where: t(lang, L("Lawyer + authorities", "ทนาย + หน่วยงาน", "律师+主管部门", "Юрист")),
    },
    {
      check: t(lang, L("SPA review", "ตรวจสัญญา SPA", "审阅 SPA", "SPA")),
      verify: t(
        lang,
        L("Thai version binding; penalties, completion date, fee split, fixtures list", "ฉบับไทยมีผลผูกพัน ค่าปรับ วันโอน แบ่งค่าธรรมเนียม ทรัพย์สินแถม", "泰文版为准；违约、过户日、费用分担", "Тайская версия SPA"),
      ),
      where: t(lang, L("Property lawyer", "ทนายอสังหา", "房产律师", "Юрист")),
    },
  ];
}

export function CondoBuyingDueDiligence() {
  const { language } = useLanguage();
  const rows = getRows(language);
  const h = {
    check: t(language, L("Check", "ตรวจ", "核查项", "Проверка")),
    verify: t(language, L("What to verify", "สิ่งที่ต้องดู", "核实内容", "Что проверить")),
    where: t(language, L("Where", "ที่ไหน", "何处", "Где")),
  };

  return (
    <section aria-labelledby="dd-title" className="mt-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
        {t(language, L("Due diligence", "ตรวจสอบก่อนซื้อ", "尽职调查", "Due diligence"))}
      </p>
      <h2 id="dd-title" className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl">
        {t(
          language,
          L("Pre-purchase checklist", "เช็กลิสต์ก่อนเซ็นสัญญา", "签约前核查清单", "Чеклист перед покупкой"),
        )}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[#777777]">
        {t(
          language,
          L(
            "Your lawyer should verify each item before you sign the SPA or pay beyond a small reservation fee.",
            "ทนายควรตรวจทุกข้อก่อนเซ็น SPA หรือจ่ายเกินค่าจอง",
            "签署 SPA 或支付大额定金前，律师应逐项核实。",
            "Юрист проверяет до SPA и крупного депозита.",
          ),
        )}
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
            <tr>
              <th className="px-4 py-3 sm:px-6">{h.check}</th>
              <th className="hidden px-4 py-3 sm:table-cell sm:px-6">{h.verify}</th>
              <th className="px-4 py-3 sm:px-6">{h.where}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
            {rows.map((row) => (
              <tr key={row.check}>
                <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">
                  {row.check}
                  <p className="mt-1 text-xs font-normal sm:hidden">{row.verify}</p>
                </td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{row.verify}</td>
                <td className="px-4 py-3 sm:px-6">{row.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 rounded-xl bg-[#F8FAFC] px-4 py-3 text-xs text-[#777777] ring-1 ring-[#e2e8f0]">
        {t(
          language,
          L(
            "Tip: Always inspect the original Chanote back page for registered mortgages, leases, or rights — not only a copy of the front.",
            "เคล็ดลับ: ดูโฉนดต้นฉบับหน้าหลังว่ามีจำนอง เช่า หรือสิทธิ์อื่นหรือไม่",
            "提示：务必查验 Chanote 原件背面是否登记抵押、租赁或其他权利。",
            "Смотрите оборот Chanote на обременения.",
          ),
        )}
      </p>
    </section>
  );
}
