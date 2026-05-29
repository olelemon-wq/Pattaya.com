"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import type { LocalizedText } from "@/lib/i18n/text";
import { Ambulance, HeartPulse, Hospital, Stethoscope } from "lucide-react";

function getHospitals(): {
  name: LocalizedText;
  focus: LocalizedText;
  services: LocalizedText;
}[] {
  return [
    {
      name: L(
        "Bangkok Hospital Pattaya",
        "โรงพยาบาลกรุงเทพพัทยา",
        "曼谷医院芭提雅分院",
        "Bangkok Hospital Pattaya",
      ),
      focus: L(
        "International standards, JCI-accredited, full specialist departments.",
        "มาตรฐานสากล JCI ครบทุกแผนกเฉพาะทาง",
        "国际标准、JCI 认证、全科专科齐全。",
        "Международные стандарты, JCI, все специализации.",
      ),
      services: L(
        "ER 24/7, cardiology, orthopedics, health check packages",
        "ER 24 ชม. หัวใจ กระดูก แพ็กเกจตรวจสุขภาพ",
        "24 小时急诊、心脏、骨科、体检套餐",
        "ER 24/7, кардиология, ортопедия, check-up",
      ),
    },
    {
      name: L(
        "Phyathai Hospital Pattaya",
        "โรงพยาบาลพญาไท พัทยา",
        "帕亚泰医院芭提雅",
        "Phyathai Hospital Pattaya",
      ),
      focus: L(
        "Popular with expats for check-ups, surgery, and maternity.",
        "ชาวต่างชาตินิยมตรวจสุขภาพ ผ่าตัด และคลอด",
        "外籍人士常选：体检、手术与产科。",
        "Популярен у экспатов: check-up, хирургия, роды.",
      ),
      services: L(
        "Dental, imaging, insurance direct billing",
        "ทันตกรรม เอกซเรย์ เคลมประกันตรง",
        "牙科、影像、保险直付",
        "Стоматология, снимки, прямой биллинг",
      ),
    },
    {
      name: L(
        "Pattaya International Hospital",
        "โรงพยาบาลพัทยาอินเตอร์",
        "芭提雅国际医院",
        "Pattaya International Hospital",
      ),
      focus: L(
        "Central location, English-speaking staff, tourist-friendly pricing.",
        "ทำเลกลาง บุคลากรพูดอังกฤษ ราคาเป็นมิตรกับนักท่องเที่ยว",
        "市中心、英语员工、游客友好价格。",
        "Центр, англоязычный персонал, цены для туристов.",
      ),
      services: L(
        "General medicine, lab, pharmacy on site",
        "อายุรกรรม แล็บ ร้านยาในที่",
        "全科、化验、院内药房",
        "Терапия, лаборатория, аптека",
      ),
    },
    {
      name: L(
        "Banglamung Hospital",
        "โรงพยาบาลบางละมุง",
        "邦拉蒙医院",
        "Banglamung Hospital",
      ),
      focus: L(
        "Public hospital option; lower cost, longer waits for non-urgent care.",
        "รพ.รัฐ ค่าใช้จ่ายต่ำ รอนานสำหรับไม่ฉุกเฉิน",
        "公立医院；费用较低，非急诊等候较久。",
        "Госбольница; дешевле, дольше ждать некритичные случаи.",
      ),
      services: L(
        "Emergency, referrals, Thai social security patients",
        "ฉุกเฉิน ส่งต่อ ผู้ป่วยประกันสังคม",
        "急诊、转诊、社保患者",
        "Экстренная помощь, направления, соцстрах",
      ),
    },
  ];
}

function getServices() {
  return [
    iconEnTh(
      Ambulance,
      "Emergency care",
      "ฉุกเฉิน",
      "Dial 1669 (ambulance). Private ERs accept international insurance with pre-authorization.",
      "โทร 1669 ER เอกชนรับประกันต่างชาติเมื่อ pre-auth",
      "急诊",
      "Экстренная помощь",
      "拨打 1669；私立 ER 凭预授权接受国际保险。",
      "1669 — скорая; частные ER с pre-auth.",
    ),
    iconEnTh(
      HeartPulse,
      "Health screenings",
      "ตรวจสุขภาพ",
      "Annual packages for visa and retirement extensions — book morning slots fasting.",
      "แพ็กเกจตรวจประจำปีสำหรับวีซ่า — จองเช้า งดอาหาร",
      "健康体检",
      "Медосмотры",
      "签证与退休延签年度套餐 — 预约晨间空腹。",
      "Check-up для визы — утром натощак.",
    ),
    iconEnTh(
      Stethoscope,
      "Specialists",
      "แพทย์เฉพาะทาง",
      "Dermatology, orthopedics, ENT, and dental clinics cluster along Sukhumvit.",
        "ผิวหนัง กระดูก หูคอจมูก ทันตกรรม แถว Sukhumvit",
      "专科诊所",
      "Специалисты",
      "皮肤、骨科、耳鼻喉与牙科沿 Sukhumvit 集中。",
      "Дерматология, ортопедия, ЛОР, стоматология на Sukhumvit.",
    ),
    iconEnTh(
      Hospital,
      "Insurance billing",
      "เคลมประกัน",
      "Confirm direct billing before admission; keep passport and policy PDF handy.",
      "ยืนยันเคลมตรงก่อนรับเข้า พกพาสปอร์ตและกรมธรรม์",
      "保险结算",
      "Страховка",
      "入院前确认直付；备好护照与保单 PDF。",
      "Подтвердите direct billing; паспорт и полис под рукой.",
    ),
  ];
}

const faqs = [
  faqEnTh(
    "insurance",
    "Which hospitals accept expat health insurance?",
    "โรงพยาบาลไหนรับประกันต่างชาติ?",
    "Bangkok Hospital Pattaya and Phyathai commonly work with international insurers. Call billing with your policy number before elective procedures.",
    "กรุงเทพพัทยาและพญาไทมักรับประกันนานาชาติ โทรแผนกการเงินก่อนทำหัตถการ",
    "哪些医院接受外籍保险？",
    "Какие больницы принимают страховку?",
  ),
  faqEnTh(
    "visa-medical",
    "Where do I get a visa medical certificate?",
    "ใบตรวจสุขภาพวีซ่าทำที่ไหน?",
    "Approved clinics issue Immigration-standard forms. Use facilities familiar with Chonburi Immigration.",
    "คลินิกที่อนุมัติออกแบบฟอร์มตม. ใช้สถานที่คุ้นเคยกับตม.ชลบุรี",
    "签证体检在哪做？",
    "Где медосмотр для визы?",
  ),
  faqEnTh(
    "pharmacy",
    "Are pharmacies open late?",
    "ร้านยาเปิดดึกไหม?",
    "Chain pharmacies are widespread; hospital pharmacies stock prescriptions after clinic hours.",
    "ร้านยาเชนแบรนด์มีทั่วไป รพ.มียาหลังเวลาคลินิก",
    "药店营业到很晚吗？",
    "Аптеки открыты поздно?",
  ),
];

export function HospitalsPage() {
  const { language } = useLanguage();
  const headings = {
    directory: t(language, L("Hospital directory", "โรงพยาบาลหลัก", "医院目录", "Больницы")),
    directorySub: t(
      language,
      L(
        "Major facilities in Pattaya–Banglamung",
        "โรงพยาบาลหลักในพื้นที่พัทยา–บางละมุง",
        "芭提雅–邦拉蒙主要医疗机构",
        "Основные клиники Pattaya–Banglamung",
      ),
    ),
    services: t(language, L("What to know", "บริการและข้อควรรู้", "须知", "Полезно знать")),
  };

  return (
    <LocalizedLivingPageShell
      shellKey="hospitals"
      heroImage={livingImages.medical}
      heroAlt="World-class medical facility in Pattaya"
      ctaHref="/living/healthcare/insurance"
      ctaAriaLabel="Healthcare consultation"
    >
      <section aria-labelledby="directory-title">
        <h2 id="directory-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {headings.directory}
        </h2>
        <p className="mt-1 text-sm text-[#777777]">{headings.directorySub}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {getHospitals().map((h) => (
            <article
              key={h.name.en}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition hover:border-[#D7CBBA] hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#0A192F]">{t(language, h.name)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#444748]">{t(language, h.focus)}</p>
              <p className="mt-3 border-t border-[#e2e8f0] pt-3 text-xs text-[#777777]">
                {t(language, h.services)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="services-title">
        <h2 id="services-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {headings.services}
        </h2>
        <div className="mt-6">
          <LivingIconCards items={getServices()} />
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Hospitals", "โรงพยาบาล", "医院", "Больницы")}
        titleId="hospitals-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
