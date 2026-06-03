"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeBusinesses } from "@/lib/i18n/messages/home-hub";

type FeaturedBusiness = {
  name: string;
  badgeKey: "verified" | "featured";
  badgeStyle: string;
  logoAlt: string;
  websiteHref: string;
  markClassName?: string;
  logoSrc?: string;
  logoObjectFit?: "contain" | "cover";
  monogram?: string;
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
      "overflow-hidden rounded-full bg-white p-3 shadow-sm",
  },
  {
    name: "InterContinental Pattaya",
    badgeKey: "featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    logoAlt: "InterContinental Pattaya Resort",
    websiteHref: "https://pattaya.intercontinental.com/",
    markClassName: "rounded-full bg-[#1a2b4a] shadow-sm",
    monogram: "IC",
  },
  {
    name: "Bangkok Hospital Pattaya",
    badgeKey: "verified",
    badgeStyle: "bg-[#ecfeff] text-[#0f766e]",
    logoSrc: "/logos/bangkok-hospital.png",
    logoAlt: "Bangkok Hospital Pattaya",
    websiteHref: "https://www.bangkokhospital.com/en/pattaya",
    markClassName:
      "overflow-hidden rounded-full bg-white p-3 shadow-sm",
  },
  {
    name: "Hilton Pattaya",
    badgeKey: "featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    logoSrc: "/logos/hilton-pattaya.png",
    logoAlt: "Hilton Pattaya",
    websiteHref: "https://www.hilton.com/en/hotels/bkkpphi-hilton-pattaya/",
    markClassName:
      "overflow-hidden rounded-full bg-white p-4 shadow-sm",
  },
  {
    name: "Centara Grand Mirage",
    badgeKey: "featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    logoSrc: "/logos/centara-grand.png",
    logoAlt: "Centara Grand Mirage Beach Resort",
    websiteHref: "https://www.centarahotelsresorts.com/centaragrand/cmbr",
    markClassName:
      "overflow-hidden rounded-full bg-white p-3 shadow-sm",
  },
  {
    name: "Hard Rock Hotel Pattaya",
    badgeKey: "featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    logoSrc: "/logos/hard-rock-pattaya.png",
    logoAlt: "Hard Rock Hotel Pattaya",
    websiteHref: "https://www.hardrockhotelpattaya.com/",
    markClassName: "overflow-hidden rounded-full bg-[#0f0f0f] shadow-sm",
    logoObjectFit: "cover",
  },
  {
    name: "Ocean Marina Jomtien",
    badgeKey: "verified",
    badgeStyle: "bg-[#fff7ed] text-[#f97316]",
    logoSrc: "/logos/ocean-marina.png",
    logoAlt: "Ocean Marina Jomtien",
    websiteHref: "https://www.oceanmarinajomtien.com/",
    markClassName: "overflow-hidden rounded-full bg-[#4579a7] shadow-sm",
    logoObjectFit: "cover",
  },
  {
    name: "Amari Pattaya",
    badgeKey: "featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    logoSrc: "/logos/amari-pattaya.png",
    logoAlt: "Amari Pattaya",
    websiteHref: "https://www.amari.com/pattaya/",
    markClassName:
      "overflow-hidden rounded-full bg-white p-3 shadow-sm",
  },
  {
    name: "Dusit Thani Pattaya",
    badgeKey: "verified",
    badgeStyle: "bg-[#fff7ed] text-[#f97316]",
    logoSrc: "/logos/dusit-thani-pattaya.png",
    logoAlt: "Dusit Thani Pattaya",
    websiteHref: "https://www.dusit.com/dusitthani-pattaya/",
    markClassName: "overflow-hidden rounded-full bg-[#32323e] p-4 shadow-sm sm:p-5",
  },
  {
    name: "Pullman Pattaya G",
    badgeKey: "featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    logoSrc: "/logos/pullman-pattaya.png",
    logoAlt: "Pullman Pattaya G",
    websiteHref: "https://www.pullmanpattayag.com/",
    markClassName: "overflow-hidden rounded-full bg-white p-3 shadow-sm sm:p-4",
  },
];

const markSizeClass =
  "mb-3 flex h-28 w-28 shrink-0 items-center justify-center sm:h-32 sm:w-32";

function BusinessMark({ biz }: { biz: FeaturedBusiness }) {
  if (biz.logoSrc) {
    const objectFit = biz.logoObjectFit ?? "contain";

    return (
      <span className={`${markSizeClass} ${biz.markClassName ?? ""}`}>
        <Image
          src={biz.logoSrc}
          alt={biz.logoAlt}
          width={96}
          height={96}
          className={`h-full w-full ${objectFit === "cover" ? "object-cover" : "object-contain"}`}
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={`${markSizeClass} ${biz.markClassName ?? ""} text-xl font-bold tracking-tight text-white sm:text-2xl`}
    >
      {biz.monogram}
    </span>
  );
}

export function FeaturedBusinesses() {
  const { language } = useLanguage();
  const copy = getHomeBusinesses(language);

  return (
    <section className="mx-auto max-w-[1280px] px-3 py-10 sm:px-4 lg:px-6">
      <h2 className="mb-6 text-center text-sm font-extrabold uppercase tracking-[0.2em] text-[#0c1a33]">
        {copy.title}
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-5">
        {businesses.map((biz) => (
          <Link
            key={biz.name}
            href={biz.websiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl border border-[#e2e8f0] bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6"
          >
            <BusinessMark biz={biz} />
            <span
              className={`mb-2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${biz.badgeStyle}`}
            >
              {copy[biz.badgeKey]}
            </span>
            <span className="text-xs font-bold leading-snug text-[#0c1a33]">{biz.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
