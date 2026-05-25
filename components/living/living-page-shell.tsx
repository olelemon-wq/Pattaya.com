import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import Image from "next/image";
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
  children: ReactNode;
  bottomTitle?: string;
  bottomBody?: string;
  bottomPrimary?: { label: string; href: string };
  bottomSecondary?: { label: string; href: string };
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
  children,
  bottomTitle,
  bottomBody,
  bottomPrimary,
  bottomSecondary,
}: LivingPageShellProps) {
  const heroTitleId = "living-page-hero-title";

  return (
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>

      <section
        className="relative min-h-[min(72vh,560px)] overflow-hidden"
        aria-labelledby={heroTitleId}
      >
        <Image
          src={heroImage}
          alt={heroAlt}
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
                <span className="text-white/90">{breadcrumbLeaf}</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#D7CBBA] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6b5a48]">
            {badge}
          </span>
          <h1
            id={heroTitleId}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-[900px] px-4 sm:-mt-16 sm:px-6">
        <aside
          className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-xl ring-1 ring-[#B29475]/20 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8"
        >
          <div className="sm:flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
              {ctaEyebrow}
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-[#0A192F] sm:text-lg">
              {ctaTitle}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#777777]">{ctaBody}</p>
          </div>
          <Link
            href={ctaHref}
            className="mt-5 inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-[#B29475] px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#B29475]/90 sm:mt-0 sm:w-auto"
          >
            {ctaButton}
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        {children}

        {bottomTitle ? (
          <section
            className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] px-6 py-8 text-center sm:px-10 sm:py-10"
            aria-labelledby="living-bottom-cta"
          >
            <h2
              id="living-bottom-cta"
              className="text-xl font-bold text-[#0A192F] sm:text-2xl"
            >
              {bottomTitle}
            </h2>
            {bottomBody ? (
              <p className="mx-auto mt-2 max-w-lg text-sm text-[#444748]">{bottomBody}</p>
            ) : null}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {bottomPrimary ? (
                <Link
                  href={bottomPrimary.href}
                  className="inline-flex items-center justify-center rounded-lg bg-[#B29475] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#B29475]/90"
                >
                  {bottomPrimary.label}
                </Link>
              ) : null}
              {bottomSecondary ? (
                <Link
                  href={bottomSecondary.href}
                  className="inline-flex items-center justify-center rounded-lg border border-[#B29475] px-8 py-3.5 text-sm font-bold text-[#B29475] transition hover:bg-[#B29475]/10"
                >
                  {bottomSecondary.label}
                </Link>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
