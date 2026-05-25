import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import { Car, FileText, MapPin, Shield } from "lucide-react";

const steps = [
  { step: 1, title: "Residence proof", titleTh: "หลักฐานที่อยู่", note: "TM30, lease, or house registration." },
  { step: 2, title: "Medical certificate", titleTh: "ใบตรวจสุขภาพ", note: "From approved clinic — same day in Pattaya." },
  { step: 3, title: "DLT test", titleTh: "สอบขับขี่", note: "Colour-blindness + reaction at Department of Land Transport." },
  { step: 4, title: "License issued", titleTh: "รับใบขับขี่", note: "Thai license valid 5 years (car); motorcycle separate class." },
];

const tips = [
  {
    icon: MapPin,
    title: "Pattaya traffic",
    titleTh: "การจราจรพัทยา",
    text: "Motorbikes dominate; watch for U-turns on Beach Road and Soi traffic entering Sukhumvit.",
  },
  {
    icon: Shield,
    title: "Insurance",
    titleTh: "ประกันรถ",
    text: "Compulsory Por Ror Bor plus optional class 1+ for collision cover — required for peace of mind.",
  },
  {
    icon: FileText,
    title: "International permit",
    titleTh: "ใบขับขี่สากล",
    text: "IDP valid only short-term; long-stay residents should convert to Thai license at DLT Chonburi.",
  },
  {
    icon: Car,
    title: "Rental cars",
    titleTh: "เช่ารถ",
    text: "Carry passport, license, and credit card hold. Inspect damage photos before leaving lot.",
  },
];

const faqs = [
  {
    id: "convert",
    question: "Can I convert my home country license?",
    questionTh: "แปลงใบขับขี่เดิมได้ไหม?",
    answer:
      "Many nationals skip practical test if home license + embassy translation + medical cert are complete — confirm at Chonburi DLT. US/UK/EU licenses commonly qualify.",
  },
  {
    id: "fine",
    question: "What if police stop me?",
    questionTh: "ตำรวจจับได้อย่างไร?",
    answer:
      "Carry license and insurance. Minor infractions may be settled on-site; always request official receipt if paying a fine.",
  },
];

export function DrivingPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.driving}
      heroAlt="Driving in Thailand"
      badge="Transportation"
      breadcrumbLeaf="Driving"
      title="Driving in Thailand | ขับรถในไทย"
      subtitle="Step-by-step Thai driving license guide and Pattaya road rules for expats."
      ctaEyebrow="License Guide"
      ctaTitle="Book DLT appointment support"
      ctaBody="Agents help bundle medical cert, translations, and Chonburi Land Transport visits."
      ctaButton="License Guide"
      bottomTitle="Prefer not to drive?"
      bottomBody="Songthaews and ride apps cover most Pattaya trips."
      bottomPrimary={{ label: "Songthaew guide", href: "/living/transportation/songthaew" }}
      bottomSecondary={{ label: "Grab & Bolt →", href: "/living/transportation/ride-apps" }}
    >
      <section aria-labelledby="driving-steps">
        <h2 id="driving-steps" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          License process
        </h2>
        <p className="mt-1 text-sm text-[#777777]">ขั้นตอนโดยสรุป</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="rounded-xl border border-[#e2e8f0] bg-white p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-3 font-bold text-[#0A192F]">{s.title}</h3>
              <p className="text-xs text-[#B29475]">{s.titleTh}</p>
              <p className="mt-2 text-sm text-[#444748]">{s.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="driving-tips">
        <h2 id="driving-tips" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Pattaya driving tips
        </h2>
        <div className="mt-6">
          <LivingIconCards items={tips} />
        </div>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Driving" />
    </LivingPageShell>
  );
}
