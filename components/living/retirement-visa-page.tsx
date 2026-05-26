import { LivingPageShell } from "@/components/living/living-page-shell";
import { RetirementVisaFaq } from "@/components/living/retirement-visa-faq";
import { RetirementVisaRequirements } from "@/components/living/retirement-visa-requirements";
import { RetirementVisaTimeline } from "@/components/living/retirement-visa-timeline";
import { retirementVisaImages } from "@/lib/design/retirement-visa-images";

export function RetirementVisaPage() {
  return (
    <LivingPageShell
      heroImage={retirementVisaImages.hero}
      heroAlt="Happy expat couple enjoying retirement life in Pattaya"
      badge="Visa & Immigration"
      breadcrumbLeaf="Retirement Visa"
      title="Retirement Visa | วีซ่าเกษียณ"
      subtitle="Comprehensive guide to retirement visa requirements and application process in Pattaya."
      ctaEyebrow="Visa Service"
      ctaTitle="Need Help with Your Application?"
      ctaBody="Get a hassle-free retirement visa with our certified legal experts in Pattaya — document review, bank letter prep, and Immigration accompaniment."
      ctaButton="Talk to a Visa Expert / Get Free Consultation"
      ctaAriaLabel="Visa consultation"
      bottomTitle="Ready to start your retirement in Pattaya?"
      bottomBody="Our visa specialists handle Chonburi Immigration appointments, translations, and annual extensions — so you can focus on enjoying your new chapter."
      bottomPrimary={{ label: "Get Free Consultation", href: "/living" }}
    >
      <RetirementVisaRequirements />
      <RetirementVisaTimeline />
      <RetirementVisaFaq />
    </LivingPageShell>
  );
}
