import { newsTheme } from "@/lib/design/news-theme";
import { AlertTriangle, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function NewsBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${className}`}
    >
      {children}
    </span>
  );
}

export function NewsTimeFooter({ children }: { children: string }) {
  return (
    <span className={`flex items-center gap-1.5 ${newsTheme.muted} text-xs`}>
      <Clock className="h-3.5 w-3.5 shrink-0 text-[#455f88]" aria-hidden />
      {children}
    </span>
  );
}

export function NewsLiveFooter({ children }: { children: string }) {
  return (
    <span className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#ba1a1a]">
      <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {children}
    </span>
  );
}

export function OverlayFeaturedCard({
  image,
  imageAlt,
  overlayClass,
  href,
  className = "",
  children,
}: {
  image: string;
  imageAlt: string;
  overlayClass: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const isLocalAsset = image.startsWith("/");
  const shellClass = `group relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden rounded-xl bg-[#0c1a33] shadow-sm transition-shadow hover:shadow-lg sm:min-h-[320px] ${className}`;

  const body = (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0c1a33]">
        <Image
          src={image}
          alt=""
          fill
          unoptimized={isLocalAsset}
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          aria-hidden
        />
      </div>
      <div className={`absolute inset-0 z-[1] ${overlayClass}`} aria-hidden />
      <div className="relative z-10 flex flex-1 flex-col justify-between p-4 sm:p-6">
        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={shellClass} aria-label={imageAlt}>
        {body}
      </Link>
    );
  }

  return <div className={shellClass}>{body}</div>;
}

export function NewsArticleCard({
  href,
  image,
  imageAlt,
  badge,
  badgeClass,
  title,
  excerpt,
  footer,
  footerClass,
  children,
  className = "",
  borderHover,
}: {
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
  badgeClass?: string;
  title: string;
  excerpt: string;
  footer?: ReactNode;
  footerClass?: string;
  children?: React.ReactNode;
  className?: string;
  borderHover?: string;
}) {
  return (
    <Link
      href={href}
      className={`group overflow-hidden rounded-xl bg-[#eef1f5] transition-all ${borderHover ?? "hover:ring-1 hover:ring-[#10438f]/25"} ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-4 top-4">
          <NewsBadge className={badgeClass ?? newsTheme.badgePrimary}>{badge}</NewsBadge>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="mb-3 text-base font-semibold leading-snug text-[#0c1a33] transition-colors group-hover:text-[#10438f] sm:text-lg">
          {title}
        </h3>
        <p className={`mb-4 text-sm leading-relaxed text-[#444748]`}>{excerpt}</p>
        {children}
        {footer ? (
          <div className={`text-xs ${footerClass ?? ""}`}>{footer}</div>
        ) : null}
      </div>
    </Link>
  );
}
