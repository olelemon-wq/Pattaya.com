import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { CondoBuyingFaq } from "@/components/living/condo-buying-faq";
import { CondoBuyingRequirements } from "@/components/living/condo-buying-requirements";
import { CondoBuyingSteps } from "@/components/living/condo-buying-steps";
import { condoBuyingImages } from "@/lib/design/condo-buying-images";
import Image from "next/image";
import Link from "next/link";

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
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>

      <section
        className="relative min-h-[min(72vh,560px)] overflow-hidden"
        aria-labelledby="condo-hero-title"
      >
        <Image
          src={condoBuyingImages.hero}
          alt="Luxury condominium towers in Pattaya"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/75 to-[#0A192F]/92"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(72vh,560px)] max-w-[1280px] flex-col justify-end px-4 pb-28 pt-20 sm:px-6 sm:pb-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/75 sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/living" className="hover:text-white">
                  Living
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/90">Condo Buying</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#D7CBBA] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6b5a48]">
            Housing
          </span>
          <h1
            id="condo-hero-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Condo Buying | ซื้อคอนโด
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Guide to buying a condo in Pattaya — foreign quota, due diligence,
            and transfer at Chonburi Land Office.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-[900px] px-4 sm:-mt-16 sm:px-6">
        <aside
          className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-xl ring-1 ring-[#B29475]/20 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8"
          aria-label="Property consultation"
        >
          <div className="sm:flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
              Property Service
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-[#0A192F] sm:text-lg">
              Need help checking quota &amp; contracts?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#777777]">
              Verified lawyers and agents for Pattaya resale and off-plan —
              foreign quota checks, SPA review, and Land Office transfer day
              support.
            </p>
          </div>
          <Link
            href="/living"
            className="mt-5 inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-[#B29475] px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#B29475]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B29475] sm:mt-0 sm:w-auto"
          >
            Get Free Property Consultation
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        <CondoBuyingRequirements />

        <section aria-labelledby="areas-title">
          <h2
            id="areas-title"
            className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            Popular Pattaya areas
          </h2>
          <p className="mt-2 text-sm text-[#777777]">
            ทำเลยอดนิยมสำหรับซื้ออยู่เองหรือลงทุน
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area.name}
                className="rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA] hover:shadow-md"
              >
                <h3 className="font-bold text-[#0A192F]">{area.name}</h3>
                <p className="text-xs font-medium text-[#B29475]">
                  {area.nameTh}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">
                  {area.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CondoBuyingSteps />

        <section aria-labelledby="costs-title">
          <h2
            id="costs-title"
            className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            Typical buyer costs
          </h2>
          <p className="mt-2 text-sm text-[#777777]">
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

        <section
          className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] px-6 py-8 text-center sm:px-10 sm:py-10"
          aria-labelledby="condo-cta-title"
        >
          <h2
            id="condo-cta-title"
            className="text-xl font-bold text-[#0A192F] sm:text-2xl"
          >
            Ready to shortlist condos in Pattaya?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#444748]">
            Browse verified listings, compare foreign quota buildings, and book a
            lawyer-backed viewing tour.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/living"
              className="inline-flex items-center justify-center rounded-lg bg-[#B29475] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#B29475]/90"
            >
              View Property Listings
            </Link>
            <Link
              href="/living/housing/rentals"
              className="inline-flex items-center justify-center rounded-lg border border-[#B29475] px-8 py-3.5 text-sm font-bold text-[#B29475] transition hover:bg-[#B29475]/10"
            >
              Rentals guide →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
