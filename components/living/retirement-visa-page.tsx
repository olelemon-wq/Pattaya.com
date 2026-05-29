"use client";

import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { RetirementVisaDocuments } from "@/components/living/retirement-visa-documents";
import { RetirementVisaFaq } from "@/components/living/retirement-visa-faq";
import { RetirementVisaFinancialOptions } from "@/components/living/retirement-visa-financial-options";
import { RetirementVisaPathways } from "@/components/living/retirement-visa-pathways";
import { RetirementVisaRenewal } from "@/components/living/retirement-visa-renewal";
import { RetirementVisaRequirements } from "@/components/living/retirement-visa-requirements";
import { RetirementVisaTimeline } from "@/components/living/retirement-visa-timeline";
import { retirementVisaImages } from "@/lib/design/retirement-visa-images";

export function RetirementVisaPage() {
  return (
    <LocalizedLivingPageShell
      shellKey="retirement"
      heroImage={retirementVisaImages.hero}
      heroAlt="Happy expat couple enjoying retirement life in Pattaya"
      ctaAriaLabel="Visa consultation"
    >
      <RetirementVisaRequirements />
      <RetirementVisaFinancialOptions />
      <RetirementVisaDocuments />
      <RetirementVisaPathways />
      <RetirementVisaTimeline />
      <RetirementVisaRenewal />
      <RetirementVisaFaq />
    </LocalizedLivingPageShell>
  );
}
