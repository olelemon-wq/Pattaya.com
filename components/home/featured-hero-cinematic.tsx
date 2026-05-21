"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/design/images";

export function FeaturedHeroCinematic() {
  const articleRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const [kenBurnsPaused, setKenBurnsPaused] = useState(false);

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
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={articleRef}
      data-cinematic={active ? "active" : "idle"}
      className="hero-cinematic relative min-h-[420px] overflow-hidden rounded-2xl"
    >
      <div
        className={`hero-cinematic__bg absolute inset-0 ${kenBurnsPaused ? "is-paused" : ""}`}
      >
        <Image
          src={images.heroCityNight}
          alt="Pattaya city skyline at night"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 75vw"
        />
      </div>

      <div className="hero-cinematic__vignette absolute inset-0 bg-gradient-to-t from-[#0c1a33]/95 via-[#0c1a33]/55 to-[#0c1a33]/25" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 30%, rgba(12, 26, 51, 0.6) 100%)",
        }}
        aria-hidden
      />

      <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6 sm:p-8">
        <div className="hero-cinematic__rise hero-cinematic__rise--0 mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded bg-[#f97316] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Featured
          </span>
          <span className="flex items-center gap-2 rounded bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
            AI Summary
            <span
              className="inline-block h-3.5 w-7 rounded-full bg-white/30"
              aria-hidden
            >
              <span className="block h-3.5 w-3.5 rounded-full bg-white" />
            </span>
          </span>
        </div>

        <p className="hero-cinematic__rise hero-cinematic__rise--1 mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#f97316]">
          City Development
        </p>
        <h1 className="hero-cinematic__rise hero-cinematic__rise--2 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
          The Neo-Pattaya Transformation: A Smart City Vision 2025
        </h1>
        <p className="hero-cinematic__rise hero-cinematic__rise--3 mt-3 max-w-xl text-sm leading-relaxed text-white/80">
          Infrastructure investments and digital city initiatives reshape
          Pattaya into Southeast Asia&apos;s premier hybrid hub for tourism and
          long-term residency.
        </p>
        <Link
          href="/news/local-news/infrastructure"
          className="hero-cinematic__rise hero-cinematic__rise--4 mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#f97316] px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-[transform,background-color] duration-200 ease-out hover:scale-[1.02] hover:bg-[#ea580c] active:scale-[0.98] motion-reduce:hover:scale-100"
        >
          Read Article
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
