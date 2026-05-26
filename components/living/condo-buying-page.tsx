import { CondoBuyingFaq } from "@/components/living/condo-buying-faq";
import { CondoBuyingRequirements } from "@/components/living/condo-buying-requirements";
import { CondoBuyingSteps } from "@/components/living/condo-buying-steps";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { condoBuyingImages } from "@/lib/design/condo-buying-images";
import { livingTheme } from "@/lib/design/living-theme";

const areas = [
  {
    name: "Pattaya Beach & Central",
    nameTh: "พัทยากลาง",
    note: "Walkable nightlife, older stock, strong short-term rental demand.",
  },
  {
    name: "Jomtien & Dongtan",
    nameTh: "จอมเทียน",
    note: "Family-friendly beaches, newer high-rises, popular with long-stay expats.",
  },
  {
    name: "Pratumnak Hill",
    nameTh: "พระตำหนัก",
    note: "Premium views, quieter vibe, boutique low-rise and luxury towers.",
  },
  {
    name: "Naklua & Wong Amat",
    nameTh: "นาเกลือ",
    note: "North Pattaya upswing, marina proximity, growing foreign buyer interest.",
  },
];

export function CondoBuyingPage() {
  return (
    <LivingPageShell
      heroImage={condoBuyingImages.hero}
      heroAlt="Luxury condominium towers in Pattaya"
      badge="Housing"
      breadcrumbLeaf="Condo Buying"
      title="Condo Buying | ซื้อคอนโด"
      subtitle="Guide to buying a condo in Pattaya — foreign quota, due diligence, and transfer at Chonburi Land Office."
      ctaEyebrow="Property Service"
      ctaTitle="Need help checking quota & contracts?"
      ctaBody="Verified lawyers and agents for Pattaya resale and off-plan — foreign quota checks, SPA review, and Land Office transfer day support."
      ctaButton="Get Free Property Consultation"
      ctaAriaLabel="Property consultation"
      bottomTitle="Ready to shortlist condos in Pattaya?"
      bottomBody="Browse verified listings, compare foreign quota buildings, and book a lawyer-backed viewing tour."
      bottomPrimary={{ label: "View Property Listings", href: "/living" }}
      bottomSecondary={{ label: "Rentals guide →", href: "/living/housing/rentals" }}
    >
      <CondoBuyingRequirements />

      <section aria-labelledby="areas-title">
        <h2 id="areas-title" className={livingTheme.heading}>
          Popular Pattaya areas
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>
          ทำเลยอดนิยมสำหรับซื้ออยู่เองหรือลงทุน
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {areas.map((area) => (
            <div key={area.name} className={`p-5 ${livingTheme.card}`}>
              <h3 className="font-bold text-[#0A192F]">{area.name}</h3>
              <p className="text-xs font-medium text-[#B29475]">{area.nameTh}</p>
              <p className={`mt-2 ${livingTheme.body}`}>{area.note}</p>
            </div>
          ))}
        </div>
      </section>

      <CondoBuyingSteps />

      <section aria-labelledby="costs-title">
        <h2 id="costs-title" className={livingTheme.heading}>
          Typical buyer costs
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>
          งบประมาณโดยประมาณ (แตกต่างตามสัญญาและอายุกรรมสิทธิ์)
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">Item</th>
                <th className="px-4 py-3 sm:px-6">Approx.</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              <tr>
                <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">
                  Transfer fee
                </td>
                <td className="px-4 py-3 sm:px-6">2% of appraised value</td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-6">
                  Often split with seller in SPA
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">
                  Sinking fund (one-off)
                </td>
                <td className="px-4 py-3 sm:px-6">฿300–800 / sqm</td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-6">
                  Paid to juristic person on transfer
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">
                  Common fees
                </td>
                <td className="px-4 py-3 sm:px-6">฿40–80 / sqm / month</td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-6">
                  Facilities vary by building
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">
                  Legal review
                </td>
                <td className="px-4 py-3 sm:px-6">฿15k–40k</td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-6">
                  Recommended for every purchase
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <CondoBuyingFaq />
    </LivingPageShell>
  );
}
