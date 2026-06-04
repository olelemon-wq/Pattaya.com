"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ctaToneStyles = {
  home: "bg-[#f97316] shadow-[0_8px_32px_rgba(249,115,22,0.4)] hover:bg-[#ea580c]",
  news: "bg-[#10438f] shadow-[0_8px_32px_rgba(16,67,143,0.45)] hover:bg-[#10438f]/90",
  living: "bg-[#B29475] shadow-[0_8px_32px_rgba(178,148,117,0.4)] hover:bg-[#B29475]/90",
  explore: "bg-[#B52E88] shadow-[0_8px_32px_rgba(181,46,136,0.4)] hover:bg-[#B52E88]/90",
  business: "bg-[#363636] shadow-[0_8px_32px_rgba(54,54,54,0.45)] hover:bg-[#2a2a2a]",
  classifieds:
    "bg-[#C7856D] shadow-[0_8px_32px_rgba(199,133,109,0.4)] hover:bg-[#C7856D]/90",
} as const;

function featuredPillClass(ctaTone: keyof typeof ctaToneStyles) {
  if (ctaTone === "classifieds") {
    return "bg-[#C7856D] shadow-[0_8px_32px_rgba(199,133,109,0.4)]";
  }
  return "bg-[#FF7320] shadow-[0_0_20px_rgba(255,115,32,0.45)]";
}

const heroMetaPillText =
  "text-sm font-bold leading-none tracking-normal sm:text-[15px]";

function categoryPillClass(visualTone: FeaturedHeroCinematicProps["visualTone"]) {
  switch (visualTone) {
    case "neo-smart-city":
      return "border-cyan-400/40 bg-cyan-950/50 text-[#7ee8f7]";
    case "news-dawn":
      return "border-blue-400/40 bg-slate-950/50 text-[#93c5fd]";
    case "classifieds":
      return "border-[#C7856D]/50 bg-[#3c2820]/55 text-[#f5e8e2]";
    default:
      return "border-white/30 bg-black/40 text-white";
  }
}

export type FeaturedHeroCinematicProps = {
  image: string;
  imageAlt: string;
  href: string;
  category?: string;
  title: string;
  excerpt: string;
  featuredLabel?: string;
  ctaLabel?: string;
  /** Matches breaking-news ticker accent for the section */
  ctaTone?: keyof typeof ctaToneStyles;
  showAiSummary?: boolean;
  minHeightClass?: string;
  byline?: string;
  className?: string;
  /** Visual overlay presets for hero photography */
  visualTone?: "default" | "neo-smart-city" | "news-dawn" | "classifieds";
  /** Replaces default link CTA (e.g. hub search bar) */
  footer?: ReactNode;
  showCta?: boolean;
};

export function FeaturedHeroCinematic({
  image,
  imageAlt,
  href,
  category,
  title,
  excerpt,
  featuredLabel = "Featured",
  ctaLabel = "Read Article",
  ctaTone = "home",
  showAiSummary = true,
  minHeightClass = "min-h-[min(72dvh,420px)] sm:min-h-[480px] lg:min-h-[540px]",
  byline,
  className = "",
  visualTone = "default",
  footer,
  showCta,
}: FeaturedHeroCinematicProps) {
  const showLinkCta = (showCta ?? true) && !footer;
  const articleRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const [kenBurnsPaused, setKenBurnsPaused] = useState(false);
  const isLocalAsset = image.startsWith("/");

  useEffect(() => {
    let frame2 = 0;
    const frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(() => setActive(true));
    });
    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
    };
  }, []);

  useEffect(() => {
    const node = articleRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setKenBurnsPaused(!entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-cinematic-shell overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/10 sm:rounded-2xl">
      <article
        ref={articleRef}
        data-cinematic={active ? "active" : "idle"}
        className={`hero-cinematic group relative isolate z-0 overflow-hidden ${visualTone === "neo-smart-city" ? "hero-cinematic--neo" : ""} ${visualTone === "news-dawn" ? "hero-cinematic--news-dawn" : ""} ${visualTone === "classifieds" ? "hero-cinematic--classifieds" : ""} ${minHeightClass} ${className}`}
      >
      <div className="hero-cinematic__media pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <div
          className={`hero-cinematic__bg absolute inset-[-4%] ${kenBurnsPaused ? "is-paused" : ""}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            unoptimized={isLocalAsset}
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        <div className="hero-cinematic__shine absolute inset-0" aria-hidden />
        <div className="hero-cinematic__vignette absolute inset-0" aria-hidden />
        <div
          className={`hero-cinematic__text-scrim absolute inset-x-0 bottom-0 ${
            visualTone === "classifieds"
              ? "h-[46%] hero-cinematic__text-scrim--classifieds sm:inset-0 sm:h-full"
              : "h-[46%] sm:h-[42%]"
          }`}
          aria-hidden
        />
        {visualTone === "classifieds" ? (
          <div className="hero-cinematic__copy-scrim pointer-events-none absolute inset-y-0 left-0 z-[1] hidden sm:block" aria-hidden />
        ) : null}
        <div className="hero-cinematic__glow absolute inset-x-0 bottom-0 h-2/5" aria-hidden />
        <div className="hero-cinematic__grain absolute inset-0 opacity-[0.14]" aria-hidden />
      </div>

      <div
        className={`relative flex h-full flex-col justify-end p-4 pb-5 sm:p-8 sm:pb-8 lg:p-10 ${minHeightClass}`}
      >
        <div className="hero-cinematic__rise hero-cinematic__rise--0 mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
          <span
            className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-white sm:px-3.5 sm:py-1.5 ${heroMetaPillText} ${featuredPillClass(ctaTone)}`}
          >
            {featuredLabel}
          </span>
          {category ? (
            <span
              className={`hero-cinematic__rise hero-cinematic__rise--1 inline-flex w-fit items-center rounded-full border px-3 py-1 backdrop-blur-md sm:px-3.5 sm:py-1.5 ${heroMetaPillText} ${categoryPillClass(visualTone)}`}
            >
              {category}
            </span>
          ) : null}
          {showAiSummary && (
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
              AI Summary
              <span
                className="relative inline-block h-4 w-8 rounded-full bg-white/25"
                aria-hidden
              >
                <span className="absolute left-0.5 top-0.5 block h-3 w-3 rounded-full bg-white shadow-sm" />
              </span>
            </span>
          )}
        </div>

        <h1 className="hero-cinematic__rise hero-cinematic__rise--2 mt-0.5 max-w-3xl text-balance text-[1.25rem] font-extrabold leading-[1.2] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:mt-1 sm:text-3xl sm:leading-[1.15] md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="hero-cinematic__rise hero-cinematic__rise--3 mt-2 max-w-2xl text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base sm:leading-relaxed md:text-lg">
          {excerpt}
        </p>
        {byline && (
          <p className="hero-cinematic__rise hero-cinematic__rise--3 mt-3 flex flex-wrap items-center gap-2 text-xs text-white/65 sm:hidden">
            {byline}
          </p>
        )}
        {footer ? (
          <div className="hero-cinematic__rise hero-cinematic__rise--4 mt-4 w-full sm:mt-6">
            {footer}
          </div>
        ) : null}
        {showLinkCta ? (
          <div className="hero-cinematic__rise hero-cinematic__rise--4 mt-4 flex justify-center sm:mt-6 sm:justify-start">
            <Link
              href={href}
              className={`hero-cinematic__cta inline-flex w-fit items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-[transform,background-color,box-shadow] duration-300 ease-out active:scale-[0.98] sm:px-7 sm:py-3 sm:text-xs sm:tracking-[0.12em] sm:hover:scale-[1.03] motion-reduce:sm:hover:scale-100 ${ctaToneStyles[ctaTone]}`}
            >
              {ctaLabel}
            </Link>
          </div>
        ) : null}
        {byline && (
          <p
            className={`hero-cinematic__rise hero-cinematic__rise--4 ${showLinkCta || footer ? "mt-4" : "mt-6"} hidden flex-wrap items-center gap-2 text-sm text-white/60 sm:flex`}
          >
            {byline}
          </p>
        )}
      </div>
    </article>
    </div>
  );
}
