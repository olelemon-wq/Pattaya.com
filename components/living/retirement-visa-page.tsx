import Image from "next/image";
import Link from "next/link";
import { RetirementVisaFaq } from "@/components/living/retirement-visa-faq";
import { RetirementVisaRequirements } from "@/components/living/retirement-visa-requirements";
import { RetirementVisaTimeline } from "@/components/living/retirement-visa-timeline";
import { retirementVisaImages } from "@/lib/design/retirement-visa-images";

export function RetirementVisaPage() {
  return (
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      {/* Hero */}
      <section
        className="relative min-h-[min(72vh,560px)] overflow-hidden"
        aria-labelledby="retirement-visa-hero-title"
      >
        <Image
          src={retirementVisaImages.hero}
          alt="Happy expat couple enjoying retirement life in Pattaya"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/80 to-[#0A192F]/92"
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
                <span className="text-white/90">Retirement Visa</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#a7f3d0] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#065f46]">
            Visa & Immigration
          </span>
          <h1
            id="retirement-visa-hero-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Retirement Visa | วีซ่าเกษียณ
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Comprehensive guide to retirement visa requirements and
            application process in Pattaya.
          </p>
        </div>
      </section>

      {/* Lead gen widget */}
      <div className="relative z-10 mx-auto -mt-14 max-w-[900px] px-4 sm:-mt-16 sm:px-6">
        <aside
          className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-xl ring-1 ring-[#B29475]/20 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8"
          aria-label="Visa consultation"
        >
          <div className="sm:flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Visa Service
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-[#0A192F] sm:text-lg">
              Need Help with Your Application?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#777777]">
              Get a hassle-free retirement visa with our certified legal
              experts in Pattaya — document review, bank letter prep, and
              Immigration accompaniment.
            </p>
          </div>
          <Link
            href="/living"
            className="mt-5 inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-[#B29475] px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#B29475]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B29475] sm:mt-0 sm:w-auto"
          >
            Talk to a Visa Expert / Get Free Consultation
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        <RetirementVisaRequirements />

        <RetirementVisaTimeline />

        <RetirementVisaFaq />

        {/* Secondary CTA */}
        <section
          className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] px-6 py-8 text-center sm:px-10 sm:py-10"
          aria-labelledby="cta-bottom-title"
        >
          <h2
            id="cta-bottom-title"
            className="text-xl font-bold text-[#0A192F] sm:text-2xl"
          >
            Ready to start your retirement in Pattaya?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#444748]">
            Our visa specialists handle Chonburi Immigration appointments,
            translations, and annual extensions — so you can focus on enjoying
            your new chapter.
          </p>
          <Link
            href="/living"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#B29475] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#B29475]/90"
          >
            Get Free Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
