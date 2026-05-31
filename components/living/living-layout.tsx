"use client";

import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { LivingLeadCtaLink } from "@/components/living/living-lead-cta-link";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { getSiteSectionCopy } from "@/lib/i18n/messages/site-sections";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function LivingPageFrame({ children }: { children: ReactNode }) {
  return (
    <div data-full-bleed className={livingTheme.page}>
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>
      {children}
    </div>
  );
}

type LivingHeroProps = {
  image: string;
  alt: string;
  badge: string;
  breadcrumbLeaf: string;
  title: string;
  subtitle: string;
  titleId?: string;
};

export function LivingHeroSection({
  image,
  alt,
  badge,
  breadcrumbLeaf,
  title,
  subtitle,
  titleId = "living-page-hero-title",
}: LivingHeroProps) {
  const { language } = useLanguage();
  const livingSection = getSiteSectionCopy(language, "living");

  return (
    <section
      className={`relative ${livingTheme.heroHeight} overflow-hidden`}
      aria-labelledby={titleId}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${livingTheme.heroGradient}`} aria-hidden />
      <div
        className={`relative mx-auto flex ${livingTheme.heroHeight} max-w-[1280px] flex-col justify-end px-4 pb-28 pt-20 sm:px-6 sm:pb-32`}
      >
        <nav aria-label={tSiteUi(language, "breadcrumb")} className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-white/75 sm:text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                {tSiteUi(language, "home")}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/living" className="hover:text-white">
                {livingSection?.label ?? "Living"}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <span className="text-white/90">{breadcrumbLeaf}</span>
            </li>
          </ol>
        </nav>
        <span className={`mb-3 inline-flex w-fit ${livingTheme.badge}`}>{badge}</span>
        <h1
          id={titleId}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

type LivingLeadCtaProps = {
  ariaLabel: string;
  eyebrow: string;
  title: string;
  body: string;
  button: string;
  href?: string;
};

export function LivingLeadCtaCard({
  ariaLabel,
  eyebrow,
  title,
  body,
  button,
  href = "/living",
}: LivingLeadCtaProps) {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-[900px] px-4 sm:-mt-16 sm:px-6">
      <aside className={livingTheme.leadCard} aria-label={ariaLabel}>
        <div className="sm:flex-1">
          <p className={livingTheme.eyebrow}>{eyebrow}</p>
          <p className="mt-2 text-base font-semibold leading-snug text-[#0A192F] sm:text-lg">
            {title}
          </p>
          <p className={`mt-2 ${livingTheme.muted}`}>{body}</p>
        </div>
        <LivingLeadCtaLink href={href}>{button}</LivingLeadCtaLink>
      </aside>
    </div>
  );
}

export function LivingMainContent({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 sm:px-6 sm:py-16">
      {children}
    </div>
  );
}
