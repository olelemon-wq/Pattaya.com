import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import { Building, FileKey, Home, LandPlot } from "lucide-react";
import Link from "next/link";

const options = [
  {
    icon: Home,
    title: "Freehold condo",
    titleTh: "คอนโดกรรมสิทธิ์",
    text: "Foreigners may own up to 49% of sellable area in a qualified condominium — check the quota letter before signing.",
  },
  {
    icon: FileKey,
    title: "Leasehold",
    titleTh: "สิทธิเช่า",
    text: "30-year registered leases (often +30+30) are common for villas, houses, and land-backed projects.",
  },
  {
    icon: LandPlot,
    title: "Land",
    titleTh: "ที่ดิน",
    text: "Direct foreign land ownership is restricted; structures typically use Thai nominee structures (high legal risk) or leasehold.",
  },
  {
    icon: Building,
    title: "Company structures",
    titleTh: "นิติบุคคล",
    text: "Buying via Thai majority companies requires FBA compliance and ongoing accounting — not a casual purchase route.",
  },
];

const faqs = [
  {
    id: "quota",
    question: "How do I verify foreign quota?",
    questionTh: "ตรวจโควต้าต่างชาติอย่างไร?",
    answer:
      "Request a juristic person letter showing foreign ownership ratio and unit count. Your lawyer should match the Chanote title and house registration before transfer day.",
  },
  {
    id: "lease",
    question: "Is leasehold safe for 90 years?",
    questionTh: "เช่า 90 ปีปลอดภัยไหม?",
    answer:
      "Renewal clauses must be registered at the Land Office. Unregistered side agreements are not enforceable — always register extensions.",
  },
];

export function OwnershipPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.ownership}
      heroAlt="Property ownership and keys"
      badge="Housing"
      breadcrumbLeaf="Ownership"
      title="Leasehold vs Freehold | สิทธิการถือครอง"
      subtitle="Understand foreign property ownership frameworks and title transfers in Thailand."
      ctaEyebrow="Legal Service"
      ctaTitle="Get a title & quota review"
      ctaBody="Pattaya lawyers verify Chanote, foreign quota, and lease registration before you transfer funds."
      ctaButton="Legal Guide Consultation"
      bottomTitle="Buying a condo instead?"
      bottomBody="See the full Pattaya buyer checklist and Land Office steps."
      bottomPrimary={{ label: "Condo buying guide", href: "/living/housing/condo-buying" }}
      bottomSecondary={{ label: "Rentals guide →", href: "/living/housing/rentals" }}
    >
      <section aria-labelledby="ownership-options">
        <h2 id="ownership-options" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Ownership options
        </h2>
        <p className="mt-1 text-sm text-[#777777]">ทางเลือกสำหรับชาวต่างชาติ</p>
        <div className="mt-6">
          <LivingIconCards items={options} />
        </div>
      </section>

      <section aria-labelledby="ownership-compare">
        <h2 id="ownership-compare" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Quick comparison
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">Type</th>
                <th className="px-4 py-3 sm:px-6">Foreign access</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">Typical use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              <tr>
                <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">Condo freehold</td>
                <td className="px-4 py-3 sm:px-6">Yes, within 49% quota</td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-6">Beach / city apartments</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">Registered lease</td>
                <td className="px-4 py-3 sm:px-6">Yes, up to 30+30 years</td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-6">Houses, villas, land projects</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">Direct land</td>
                <td className="px-4 py-3 sm:px-6">Generally no</td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-6">Requires Thai structure</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[#777777]">
          Not legal advice —{" "}
          <Link href="/living/housing/condo-buying" className="font-semibold text-[#B29475] hover:underline">
            condo buying guide
          </Link>{" "}
          for transfer steps.
        </p>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Ownership" />
    </LivingPageShell>
  );
}
