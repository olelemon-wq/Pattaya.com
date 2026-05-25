"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ctaToneStyles = {
  home: "bg-[#f97316] shadow-[0_8px_32px_rgba(249,115,22,0.4)] hover:bg-[#ea580c]",
  news: "bg-[#10438f] shadow-[0_8px_32px_rgba(16,67,143,0.45)] hover:bg-[#10438f]/90",
  living: "bg-[#B29475] shadow-[0_8px_32px_rgba(178,148,117,0.4)] hover:bg-[#B29475]/90",
  explore: "bg-[#B52E88] shadow-[0_8px_32px_rgba(181,46,136,0.4)] hover:bg-[#B52E88]/90",
} as const;

export type FeaturedHeroCinematicProps = {
  image: string;
  imageAlt: string;
  href: string;
  category: string;
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
}: FeaturedHeroCinematicProps) {
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
    <article
      ref={articleRef}
      data-cinematic={active ? "active" : "idle"}
      className={`hero-cinematic group relative isolate z-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/10 sm:rounded-2xl ${minHeightClass} ${className}`}
    >
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
          sizes="100vw"
        />
      </div>

      <div className="hero-cinematic__shine pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-cinematic__vignette absolute inset-0" aria-hidden />
      <div className="hero-cinematic__glow pointer-events-none absolute inset-x-0 bottom-0 h-2/5" aria-hidden />
      <div className="hero-cinematic__grain pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden />

      <div
        className={`relative flex h-full flex-col justify-end p-4 pb-5 sm:p-8 sm:pb-8 lg:p-10 ${minHeightClass}`}
      >
        <div className="hero-cinematic__rise hero-cinematic__rise--0 mb-3 flex flex-wrap items-center gap-2 sm:mb-5">
          <span className="rounded-md bg-[#FF7320] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_20px_rgba(255,115,32,0.45)] sm:px-2.5 sm:py-1 sm:text-[10px] sm:tracking-[0.2em]">
            {featuredLabel}
          </span>
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

        <p className="hero-cinematic__rise hero-cinematic__rise--1 mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FF7320] drop-shadow-sm sm:mb-2 sm:text-xs sm:tracking-[0.2em]">
          {category}
        </p>
        <h1 className="hero-cinematic__rise hero-cinematic__rise--2 max-w-3xl text-balance text-[1.25rem] font-extrabold leading-[1.2] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-3xl sm:leading-[1.15] md:text-4xl lg:text-5xl">
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
        <Link
          href={href}
          className={`hero-cinematic__rise hero-cinematic__rise--4 hero-cinematic__cta mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-[transform,background-color,box-shadow] duration-300 ease-out active:scale-[0.98] sm:mt-6 sm:w-fit sm:justify-start sm:px-7 sm:py-3 sm:text-xs sm:tracking-[0.12em] sm:hover:scale-[1.03] motion-reduce:sm:hover:scale-100 ${ctaToneStyles[ctaTone]}`}
        >
          {ctaLabel}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
        {byline && (
          <p className="hero-cinematic__rise hero-cinematic__rise--4 mt-4 hidden flex-wrap items-center gap-2 text-sm text-white/60 sm:flex">
            {byline}
          </p>
        )}
      </div>
    </article>
  );
}
