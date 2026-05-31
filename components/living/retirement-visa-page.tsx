"use client";

import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { RetirementVisaDocuments } from "@/components/living/retirement-visa-documents";
import { RetirementVisaFaq } from "@/components/living/retirement-visa-faq";
import { RetirementVisaPathways } from "@/components/living/retirement-visa-pathways";
import { RetirementVisaRenewal } from "@/components/living/retirement-visa-renewal";
import { RetirementVisaToolkit } from "@/components/living/retirement-visa-toolkit";
import { retirementVisaImages } from "@/lib/design/retirement-visa-images";

export function RetirementVisaPage() {
  return (
    <LocalizedLivingPageShell
      shellKey="retirement"
      heroImage={retirementVisaImages.hero}
      ctaHref="#retirement-toolkit"
    >
      <RetirementVisaToolkit />
      <RetirementVisaPathways />
      <RetirementVisaDocuments />
      <RetirementVisaRenewal />
      <RetirementVisaFaq />
    </LocalizedLivingPageShell>
  );
}
