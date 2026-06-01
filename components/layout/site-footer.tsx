"use client";

import Link from "next/link";
import {
  getFooterConnectLinks,
  getFooterCopy,
  getFooterCopyright,
  getFooterNetworkLinks,
} from "@/lib/i18n/messages/site-footer";
import { useLanguage } from "./language-provider";

export function SiteFooter() {
  const { language } = useLanguage();
  const copy = getFooterCopy(language);
  const networkLinks = getFooterNetworkLinks(language);
  const connectLinks = getFooterConnectLinks(language);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 bg-[#0c1a33] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-6">
        <div>
          <p className="text-lg font-extrabold tracking-tight">PATTAYA.COM</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            {copy.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
            {copy.networkTitle}
          </h3>
          <ul className="space-y-2.5">
            {networkLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#f97316]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
            {copy.connectTitle}
          </h3>
          <ul className="space-y-2.5">
            {connectLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#f97316]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1280px] px-4 py-4 text-center text-[10px] uppercase tracking-[0.12em] text-white/40 lg:px-6">
          {getFooterCopyright(language, year)}
        </p>
      </div>
    </footer>
  );
}
