import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import { Globe, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

const planTypes = [
  {
    icon: Globe,
    title: "International plans",
    titleTh: "ประกันต่างประเทศ",
    text: "April, Luma, Cigna-style coverage with regional hospitals and direct billing in Pattaya.",
  },
  {
    icon: ShieldCheck,
    title: "Thai local insurers",
    titleTh: "ประกันในประเทศ",
    text: "Lower premiums; confirm Immigration-approved wording for retirement and long-stay visas.",
  },
  {
    icon: Stethoscope,
    title: "Hospital packages",
    titleTh: "แพ็กเกจโรงพยาบาล",
    text: "Check-up bundles used for visa medical proof — separate from comprehensive inpatient cover.",
  },
  {
    icon: HeartPulse,
    title: "Travel vs resident",
    titleTh: "เดินทาง vs อยู่ระยะยาว",
    text: "Short-trip travel insurance rarely satisfies retirement extension rules — use resident expat products.",
  },
];

const faqs = [
  {
    id: "retirement",
    question: "What coverage does retirement visa need?",
    questionTh: "วีซ่าเกษียณต้องมีประกันแบบไหน?",
    answer:
      "Policies must meet Immigration minimums (commonly outpatient 40,000 THB and inpatient 400,000 THB, or approved equivalents). Coverage must span your full stay period.",
  },
  {
    id: "preexisting",
    question: "Are pre-existing conditions covered?",
    questionTh: "โรคประจำตัวคุ้มครองไหม?",
    answer:
      "Most plans exclude or waiting-period pre-existing conditions. Disclose honestly at application — claims can be denied retroactively.",
  },
];

export function HealthInsurancePage() {
  return (
    <LivingPageShell
      heroImage={livingImages.insurance}
      heroAlt="Health insurance planning"
      badge="Healthcare"
      breadcrumbLeaf="Health Insurance"
      title="Health Insurance | ประกันสุขภาพ"
      subtitle="Premium international and local health plans tailored for long-term expats in Pattaya."
      ctaEyebrow="Insurance Service"
      ctaTitle="Compare approved plans"
      ctaBody="Match hospital direct billing, visa compliance, and deductible preferences with licensed brokers."
      ctaButton="View Policies"
      ctaHref="/living/healthcare/insurance"
      bottomTitle="Need a hospital directory?"
      bottomBody="See ER contacts, check-up packages, and insurance billing tips."
      bottomPrimary={{ label: "Hospitals guide", href: "/living/healthcare/hospitals" }}
      bottomSecondary={{ label: "Retirement visa →", href: "/living/visa/retirement" }}
    >
      <section aria-labelledby="insurance-types">
        <h2 id="insurance-types" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Plan types
        </h2>
        <p className="mt-1 text-sm text-[#777777]">ประเภทประกันที่ expat ใช้บ่อย</p>
        <div className="mt-6">
          <LivingIconCards items={planTypes} />
        </div>
      </section>

      <section
        className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 sm:p-8"
        aria-labelledby="insurance-visa-note"
      >
        <h2 id="insurance-visa-note" className="text-xl font-bold text-[#0A192F]">
          Visa & extension checklist
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#444748]">
          <li>Policy certificate in English (or certified Thai)</li>
          <li>Valid through proposed extension date</li>
          <li>Insurer letterhead and contact number</li>
          <li>Coverage amounts matching Immigration circular</li>
        </ul>
        <p className="mt-4 text-sm">
          <Link href="/living/visa/retirement" className="font-bold text-[#B29475] hover:underline">
            Retirement visa requirements →
          </Link>
        </p>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Health Insurance" />
    </LivingPageShell>
  );
}
