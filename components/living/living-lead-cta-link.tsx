"use client";

import { livingTheme } from "@/lib/design/living-theme";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export function LivingLeadCtaLink({ href, children }: Props) {
  const className = `mt-5 w-full shrink-0 sm:mt-0 sm:w-auto ${livingTheme.btnPrimary}`;

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          const id = href.slice(1);
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
