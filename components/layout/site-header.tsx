"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/design/tokens";
import { LanguageSelector } from "./language-selector";

function activeHrefForPath(pathname: string): string {
  if (pathname === "/") return "/";
  if (pathname.startsWith("/news")) return "/news";
  if (pathname.startsWith("/living")) return "/living";
  if (pathname.startsWith("/explore")) return "/explore";
  if (pathname.startsWith("/business")) return "/business";
  return "";
}

function NavLinks({
  activeHref,
  onNavigate,
  className = "",
}: {
  activeHref: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <nav aria-label="Main navigation" className={className}>
      <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-8">
        {navItems.map((item) => {
          const isActive = item.href === activeHref;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`relative block py-3 text-sm font-bold tracking-[0.12em] transition-colors lg:py-0 lg:text-xs ${
                  isActive
                    ? "text-[#0c1a33]"
                    : "text-[#64748b] hover:text-[#0c1a33]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 hidden h-0.5 w-full rounded-full bg-[#f97316] lg:block" />
                )}
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
    <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-4 px-4 lg:px-6">
        <Link
          href="/"
          className="shrink-0 text-lg font-extrabold tracking-tight text-[#0c1a33]"
        >
          PATTAYA.COM
        </Link>

        <NavLinks
          activeHref={activeHref}
          className="hidden flex-1 justify-center lg:flex"
        />

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <label className="relative hidden sm:block">
            <span className="sr-only">Search</span>
            <input
              type="search"
              placeholder="Search..."
              className="h-9 w-32 rounded-full border border-[#e2e8f0] bg-[#f8fafc] pl-9 pr-3 text-xs text-[#0c1a33] outline-none placeholder:text-[#94a3b8] focus:border-[#f97316] lg:w-40"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#94a3b8]">
              🔍
            </span>
          </label>

          <LanguageSelector className="hidden sm:block" />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#e2e8f0] text-[#0c1a33] transition-colors hover:border-[#f97316] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
          className="border-t border-[#e2e8f0] bg-white px-4 py-4 lg:hidden"
        >
          <label className="relative mb-4 block sm:hidden">
            <span className="sr-only">Search</span>
            <input
              type="search"
              placeholder="Search..."
              className="h-10 w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] pl-10 pr-3 text-sm outline-none focus:border-[#f97316]"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#94a3b8]">
              🔍
            </span>
          </label>

          <NavLinks
            activeHref={activeHref}
            onNavigate={() => setMenuOpen(false)}
          />

          <div className="mt-4 border-t border-[#e2e8f0] pt-4 sm:hidden">
            <LanguageSelector />
          </div>
        </div>
      )}
    </header>
  );
}