import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import { Calendar, Globe, Mail, Monitor } from "lucide-react";
import Link from "next/link";

const methods = [
  {
    icon: Monitor,
    title: "Online (TM47)",
    titleTh: "ออนไลน์",
    text: "Immigration Bureau online reporting — fastest if your address history is up to date.",
  },
  {
    icon: Mail,
    title: "By mail",
    titleTh: "ส่งไปรษณีย์",
    text: "Registered mail to Immigration with TM47 form — keep proof of posting.",
  },
  {
    icon: Globe,
    title: "In person",
    titleTh: "ยื่นด้วยตน",
    text: "Chonburi Immigration (Pattaya) — bring passport, previous receipt, and TM30 if requested.",
  },
  {
    icon: Calendar,
    title: "Deadline",
    titleTh: "กำหนดเวลา",
    text: "Report within 90 days of last entry or last report — late fines apply (typically ฿2,000).",
  },
];

const faqs = [
  {
    id: "tm30",
    question: "How is TM30 related?",
    questionTh: "TM30 เกี่ยวอะไร?",
    answer:
      "Landlords file TM30 when you check in. Your 90-day report uses your registered address — mismatches cause delays. Keep TM30 copies from condo juristic or landlord.",
  },
  {
    id: "travel",
    question: "Does leaving Thailand reset the clock?",
    questionTh: "ออกนอกประเทศแล้วนับใหม่ไหม?",
    answer:
      "Re-entry on a new stamp starts a new 90-day period for reporting purposes. Track entry date stickers in your passport.",
  },
  {
    id: "agent",
    question: "Can someone report for me?",
    questionTh: "ให้คนอื่นยื่นแทนได้ไหม?",
    answer:
      "Power of attorney is possible in person; online must be your account. Many Pattaya services offer reminder + filing for a modest fee.",
  },
];

export function NinetyDayReportPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.ninetyDay}
      heroAlt="Passport and immigration documents"
      badge="Visa & Immigration"
      breadcrumbLeaf="90-Day Report"
      title="90-Day Report | รายงานตัว 90 วัน"
      subtitle="Simplified guide to mandatory immigration address reporting for long-stay residents."
      ctaEyebrow="Process Guide"
      ctaTitle="Never miss a reporting window"
      ctaBody="Automated reminders, TM30 checks, and assisted filing for Pattaya and Jomtien addresses."
      ctaButton="Process Guide"
      bottomTitle="On a retirement visa?"
      bottomBody="Combine 90-day reporting with annual extension planning."
      bottomPrimary={{ label: "Retirement visa guide", href: "/living/visa/retirement" }}
      bottomSecondary={{ label: "Rentals & TM30 →", href: "/living/housing/rentals" }}
    >
      <section aria-labelledby="report-methods">
        <h2 id="report-methods" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Reporting methods
        </h2>
        <p className="mt-1 text-sm text-[#777777]">ช่องทางรายงานตัว</p>
        <div className="mt-6">
          <LivingIconCards items={methods} />
        </div>
      </section>

      <section aria-labelledby="report-steps">
        <h2 id="report-steps" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Step-by-step (online)
        </h2>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[#444748]">
          <li>Confirm your current address matches TM30 / house book data.</li>
          <li>Log in to the Immigration Bureau online reporting portal.</li>
          <li>Complete TM47 fields and submit before day 90.</li>
          <li>Save confirmation PDF or screenshot for your records.</li>
          <li>Set calendar reminder for the next cycle (day 85 alert).</li>
        </ol>
        <p className="mt-4 text-xs text-[#777777]">
          Rules change — verify on{" "}
          <Link href="/living/visa/retirement" className="text-[#B29475] hover:underline">
            visa guides
          </Link>{" "}
          or with a licensed agent.
        </p>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — 90-Day Report" />
    </LivingPageShell>
  );
}
