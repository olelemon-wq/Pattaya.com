"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { LanguageCode } from "@/lib/i18n/languages";
import { getHeaderNavItems, getHeaderUi } from "@/lib/i18n/messages/site-header";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "./language-provider";

function activeHrefForPath(pathname: string): string {
  if (pathname === "/") return "/";
  if (pathname.startsWith("/news")) return "/news";
  if (pathname.startsWith("/living")) return "/living";
  if (pathname.startsWith("/explore")) return "/explore";
  if (pathname.startsWith("/business")) return "/business";
  if (pathname.startsWith("/classifieds")) return "/classifieds";
  return "";
}

function activeUnderlineClass(href: string): string {
  if (href === "/") return "bg-[#f97316]";
  if (href === "/news") return "bg-[#10438f]";
  if (href === "/living") return "bg-[#B29475]";
  if (href === "/explore") return "bg-[#B52E88]";
  if (href === "/business") return "bg-[#363636]";
  if (href === "/classifieds") return "bg-[#0d9488]";
  return "bg-[#f97316]";
}

function NavLinks({
  activeHref,
  language,
  onNavigate,
  className = "",
}: {
  activeHref: string;
  language: LanguageCode;
  onNavigate?: () => void;
  className?: string;
}) {
  const navItems = getHeaderNavItems(language);

  return (
    <nav aria-label={tSiteUi(language, "mainNav")} className={className}>
      <ul className="flex flex-col gap-0.5 lg:flex-row lg:items-center lg:gap-8">
        {navItems.map((item) => {
          const isActive = item.href === activeHref;
          const underlineClass = activeUnderlineClass(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`relative block py-2 text-[14px] font-bold leading-tight tracking-[0.12em] transition-colors lg:py-0 lg:leading-normal ${
                  isActive
                    ? "text-[#0c1a33]"
                    : "text-[#64748b] hover:text-[#0c1a33]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 hidden h-0.5 w-full origin-left rounded-full lg:block ${underlineClass} ${
                    isActive
                      ? "scale-x-100 [animation:nav-underline-in_460ms_cubic-bezier(0.22,1,0.36,1)_both]"
                      : "scale-x-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const headerUi = getHeaderUi(language);
  const activeHref = activeHrefForPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[120] isolate overflow-visible border-b border-[#e2e8f0] bg-white">
      <div className="relative z-[121] mx-auto flex h-[72px] max-w-[1280px] items-center gap-4 overflow-visible px-4 lg:px-6">
        <Link
          href="/"
          className="shrink-0 text-lg font-extrabold tracking-tight text-[#0c1a33]"
        >
          PATTAYA.COM
        </Link>

        <NavLinks
          activeHref={activeHref}
          language={language}
          className="pointer-events-auto hidden min-w-0 flex-1 justify-center overflow-hidden lg:flex"
        />

        <div className="relative z-[200] ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="relative z-[130] hidden sm:block">
            <LanguageSelector />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="pointer-events-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#e2e8f0] text-[#0c1a33] transition-colors hover:border-[#f97316] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={
              menuOpen ? headerUi.menuClose : headerUi.menuOpen
            }
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="relative z-[121] border-t border-[#e2e8f0] bg-white px-4 py-4 pointer-events-auto lg:hidden"
        >
          <NavLinks
            activeHref={activeHref}
            language={language}
            onNavigate={() => setMenuOpen(false)}
          />

          <div className="relative z-[130] mt-4 border-t border-[#e2e8f0] pt-4 sm:hidden">
            <LanguageSelector />
          </div>
        </div>
      )}
    </header>
  );
}