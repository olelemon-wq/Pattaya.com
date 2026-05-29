"use client";

import { LivingPageShell } from "@/components/living/living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import {
  getLivingShell,
  type LivingShellKey,
} from "@/lib/i18n/messages/living/shells";
import type { ReactNode } from "react";

type Props = {
  shellKey: LivingShellKey;
  heroImage: string;
  heroAlt: string;
  children: ReactNode;
  ctaHref?: string;
  ctaAriaLabel?: string;
  hideLeadCta?: boolean;
  bottomChildren?: ReactNode;
};

export function LocalizedLivingPageShell({
  shellKey,
  heroImage,
  heroAlt,
  children,
  ctaHref,
  ctaAriaLabel,
  hideLeadCta,
  bottomChildren,
}: Props) {
  const { language } = useLanguage();
  const shell = getLivingShell(language, shellKey);

  return (
    <LivingPageShell
      heroImage={heroImage}
      heroAlt={heroAlt}
      badge={shell.badge}
      breadcrumbLeaf={shell.breadcrumbLeaf}
      title={shell.title}
      subtitle={shell.subtitle}
      ctaEyebrow={shell.ctaEyebrow}
      ctaTitle={shell.ctaTitle}
      ctaBody={shell.ctaBody}
      ctaButton={shell.ctaButton}
      ctaHref={ctaHref}
      ctaAriaLabel={ctaAriaLabel}
      bottomTitle={shell.bottomTitle}
      bottomBody={shell.bottomBody}
      bottomPrimary={shell.bottomPrimary}
      bottomSecondary={shell.bottomSecondary}
      hideLeadCta={hideLeadCta}
      bottomChildren={bottomChildren}
    >
      {children}
    </LivingPageShell>
  );
}
