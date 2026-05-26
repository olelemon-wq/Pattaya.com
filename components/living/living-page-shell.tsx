import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import {
  LivingHeroSection,
  LivingLeadCtaCard,
  LivingMainContent,
  LivingPageFrame,
} from "@/components/living/living-layout";
import { livingTheme } from "@/lib/design/living-theme";
import Link from "next/link";
import type { ReactNode } from "react";

export type LivingPageShellProps = {
  heroImage: string;
  heroAlt: string;
  badge: string;
  breadcrumbLeaf: string;
  title: string;
  subtitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  ctaHref?: string;
  ctaAriaLabel?: string;
  children: ReactNode;
  bottomTitle?: string;
  bottomBody?: string;
  bottomPrimary?: { label: string; href: string };
  bottomSecondary?: { label: string; href: string };
  /** Skip the floating lead card (e.g. culture guide) */
  hideLeadCta?: boolean;
  /** Custom bottom actions (e.g. three guide links) */
  bottomChildren?: ReactNode;
};

export function LivingPageShell({
  heroImage,
  heroAlt,
  badge,
  breadcrumbLeaf,
  title,
  subtitle,
  ctaEyebrow,
  ctaTitle,
  ctaBody,
  ctaButton,
  ctaHref = "/living",
  ctaAriaLabel = "Living consultation",
  children,
  bottomTitle,
  bottomBody,
  bottomPrimary,
  bottomSecondary,
  hideLeadCta = false,
  bottomChildren,
}: LivingPageShellProps) {
  return (
    <LivingPageFrame>
      <LivingHeroSection
        image={heroImage}
        alt={heroAlt}
        badge={badge}
        breadcrumbLeaf={breadcrumbLeaf}
        title={title}
        subtitle={subtitle}
      />
      <LivingLeadCtaCard
        ariaLabel={ctaAriaLabel}
        eyebrow={ctaEyebrow}
        title={ctaTitle}
        body={ctaBody}
        button={ctaButton}
        href={ctaHref}
      />
      <LivingMainContent>
        {children}
        {bottomTitle ? (
          <section className={livingTheme.bottomCard} aria-labelledby="living-bottom-cta">
            <h2 id="living-bottom-cta" className={livingTheme.headingSm}>
              {bottomTitle}
            </h2>
            {bottomBody ? (
              <p className={`mx-auto mt-2 max-w-lg ${livingTheme.body}`}>{bottomBody}</p>
            ) : null}
            {bottomChildren ?? (
              <LivingCtaActions>
                {bottomPrimary ? (
                  <Link href={bottomPrimary.href} className={livingCtaButtonClass.primary}>
                    {bottomPrimary.label}
                  </Link>
                ) : null}
                {bottomSecondary ? (
                  <Link
                    href={bottomSecondary.href}
                    className={livingCtaButtonClass.outline}
                  >
                    {bottomSecondary.label}
                  </Link>
                ) : null}
              </LivingCtaActions>
            )}
          </section>
        ) : null}
      </LivingMainContent>
    </LivingPageFrame>
  );
}
