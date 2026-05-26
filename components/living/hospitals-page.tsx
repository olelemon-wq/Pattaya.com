import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import {
  Ambulance,
  ChevronDown,
  HeartPulse,
  Hospital,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

const hospitals = [
  {
    name: "Bangkok Hospital Pattaya",
    nameTh: "โรงพยาบาลกรุงเทพพัทยา",
    focus: "International standards, JCI-accredited, full specialist departments.",
    services: "ER 24/7, cardiology, orthopedics, health check packages",
  },
  {
    name: "Phyathai Hospital Pattaya",
    nameTh: "โรงพยาบาลพญาไท พัทยา",
    focus: "Popular with expats for check-ups, surgery, and maternity.",
    services: "Dental, imaging, insurance direct billing",
  },
  {
    name: "Pattaya International Hospital",
    nameTh: "โรงพยาบาลพัทยาอินเตอร์",
    focus: "Central location, English-speaking staff, tourist-friendly pricing.",
    services: "General medicine, lab, pharmacy on site",
  },
  {
    name: "Banglamung Hospital",
    nameTh: "โรงพยาบาลบางละมุง",
    focus: "Public hospital option; lower cost, longer waits for non-urgent care.",
    services: "Emergency, referrals, Thai social security patients",
  },
];

const services: { icon: LucideIcon; title: string; titleTh: string; text: string }[] =
  [
    {
      icon: Ambulance,
      title: "Emergency care",
      titleTh: "ฉุกเฉิน",
      text: "Dial 1669 (ambulance). Private ERs in Pattaya accept international insurance with pre-authorization.",
    },
    {
      icon: HeartPulse,
      title: "Health screenings",
      titleTh: "ตรวจสุขภาพ",
      text: "Annual packages for visa, work permit, and retirement extensions — book morning slots fasting.",
    },
    {
      icon: Stethoscope,
      title: "Specialists",
      titleTh: "แพทย์เฉพาะทาง",
      text: "Dermatology, orthopedics, ENT, and dental clinics cluster along Sukhumvit and beach roads.",
    },
    {
      icon: Hospital,
      title: "Insurance billing",
      titleTh: "เคลมประกัน",
      text: "Confirm direct billing with your insurer before admission; keep passport and policy PDF handy.",
    },
  ];

const faqs = [
  {
    id: "insurance",
    question: "Which hospitals accept expat health insurance?",
    questionTh: "โรงพยาบาลไหนรับประกันต่างชาติ?",
    answer:
      "Bangkok Hospital Pattaya and Phyathai commonly work with international insurers (April, Luma, Aetna, etc.). Always call the hospital billing desk with your policy number before elective procedures.",
  },
  {
    id: "visa-medical",
    question: "Where do I get a visa medical certificate?",
    questionTh: "ใบตรวจสุขภาพวีซ่าทำที่ไหน?",
    answer:
      "Approved clinics and hospitals issue Immigration-standard forms. Retirement and long-stay applicants should use facilities familiar with Chonburi Immigration requirements.",
  },
  {
    id: "pharmacy",
    question: "Are pharmacies open late?",
    questionTh: "ร้านยาเปิดดึกไหม?",
    answer:
      "Chain pharmacies (Boots, Watsons, local chains) are widespread; hospital pharmacies stock prescription items after clinic hours.",
  },
];

function FaqBlock() {
  return (
    <section
      id="faq"
      className={`relative z-10 scroll-mt-24 ${livingTheme.panel}`}
      aria-labelledby="hospitals-faq-title"
    >
      <h2 id="hospitals-faq-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-sm text-[#777777]">คำถามที่พบบ่อย — Hospitals</p>
      <div className="mt-6 divide-y divide-[#e2e8f0]">
        {faqs.map((faq, index) => (
          <details key={faq.id} className="group py-4 first:pt-0 last:pb-0" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 pr-2">
                <span className="block font-semibold text-[#0A192F]">{faq.question}</span>
                <span className="mt-0.5 block text-xs text-[#777777]">{faq.questionTh}</span>
              </span>
              <span
                className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#F8FAFC] transition duration-200 group-open:rotate-180 group-open:border-[#B29475] group-open:bg-[#B29475] group-open:text-white"
                aria-hidden
              >
                <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#444748]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function HospitalsPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.medical}
      heroAlt="World-class medical facility in Pattaya"
      badge="Healthcare"
      breadcrumbLeaf="Hospitals"
      title="Hospitals | โรงพยาบาล"
      subtitle="Curated directory of international hospitals and clinics in the Pattaya region for residents and visitors."
      ctaEyebrow="Medical Service"
      ctaTitle="Match insurance with the right hospital"
      ctaBody="Compare expat health plans, direct billing, and check-up packages used for visa and retirement extensions."
      ctaButton="Health Insurance Options"
      ctaHref="/living/healthcare/insurance"
      ctaAriaLabel="Healthcare consultation"
      bottomTitle="Need health insurance for your visa?"
      bottomBody="See approved plans for retirement, Elite, and long-stay residents in Thailand."
      bottomPrimary={{ label: "View Insurance Guide", href: "/living/healthcare/insurance" }}
    >
        <section aria-labelledby="directory-title">
          <h2 id="directory-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
            Hospital directory
          </h2>
          <p className="mt-1 text-sm text-[#777777]">
            โรงพยาบาลหลักในพื้นที่พัทยา–บางละมุง
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {hospitals.map((h) => (
              <article
                key={h.name}
                className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition hover:border-[#D7CBBA] hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-[#0A192F]">{h.name}</h3>
                <p className="text-xs font-medium text-[#B29475]">{h.nameTh}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#444748]">{h.focus}</p>
                <p className="mt-3 border-t border-[#e2e8f0] pt-3 text-xs text-[#777777]">
                  {h.services}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="services-title">
          <h2 id="services-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
            What to know
          </h2>
          <p className="mt-1 text-sm text-[#777777]">บริการและข้อควรรู้</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, titleTh, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B29475] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F]">{title}</h3>
                  <p className="text-xs font-medium text-[#B29475]">{titleTh}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#444748]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      <FaqBlock />
    </LivingPageShell>
  );
}
