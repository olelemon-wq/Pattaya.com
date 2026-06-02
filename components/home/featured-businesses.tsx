"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeBusinesses } from "@/lib/i18n/messages/home-hub";

type FeaturedBusiness = {
  name: string;
  badgeKey: "verified" | "featured";
  badgeStyle: string;
  logoSrc: string;
  logoAlt: string;
  websiteHref: string;
  markClassName?: string;
};

const businesses: FeaturedBusiness[] = [
  {
    name: "Royal Cliff Hotels",
    badgeKey: "verified",
    badgeStyle: "bg-[#fff7ed] text-[#f97316]",
    logoSrc: "/logos/royal-cliff.png",
    logoAlt: "Royal Cliff Hotels",
    websiteHref: "https://www.royalcliff.com/",
    markClassName:
      "overflow-hidden rounded-full border border-[#fde8d8] bg-white p-3 shadow-sm",
  },
  {
    name: "Siam Yacht Club",
    badgeKey: "featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    logoSrc: "/logos/siam-yacht-club.png",
    logoAlt: "Siam Yacht Club",
    websiteHref: "https://www.siamyachtclub.com/",
    markClassName: "overflow-hidden rounded-full bg-[#1a2344] p-2.5 shadow-sm",
  },
  {
    name: "Bangkok Hospital",
    badgeKey: "featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    logoSrc: "/logos/bangkok-hospital.png",
    logoAlt: "Bangkok Hospital Pattaya",
    websiteHref: "https://pattaya.bangkokhospital.com/",
    markClassName:
      "overflow-hidden rounded-full border border-[#e2e8f0] bg-white p-3 shadow-sm",
  },
];

const markSizeClass =
  "mb-3 flex h-28 w-28 shrink-0 items-center justify-center sm:h-32 sm:w-32";

function BusinessMark({ biz }: { biz: FeaturedBusiness }) {
  return (
    <span className={`${markSizeClass} ${biz.markClassName ?? ""}`}>
      <Image
        src={biz.logoSrc}
        alt={biz.logoAlt}
        width={96}
        height={96}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}

export function FeaturedBusinesses() {
  const { language } = useLanguage();
  const copy = getHomeBusinesses(language);

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 lg:px-6">
      <h2 className="mb-6 text-center text-sm font-extrabold uppercase tracking-[0.2em] text-[#0c1a33]">
        {copy.title}
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {businesses.map((biz) => (
          <Link
            key={biz.name}
            href={biz.websiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <BusinessMark biz={biz} />
            <span
              className={`mb-2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${biz.badgeStyle}`}
            >
              {copy[biz.badgeKey]}
            </span>
            <span className="text-xs font-bold text-[#0c1a33]">{biz.name}</span>
          </Link>
        ))}

        {[1, 2].map((slot) => (
          <div
            key={slot}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#cbd5e1] bg-[#f8fafc] p-6 text-center"
          >
            <span className="mb-2 text-2xl text-[#cbd5e1]">+</span>
            <span className="text-[10px] font-bold uppercase tracking-wide text-[#94a3b8]">
              {copy.addBranch}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
