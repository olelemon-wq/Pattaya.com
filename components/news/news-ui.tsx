import Image from "next/image";
import Link from "next/link";

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
  const shellClass = `group relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg sm:min-h-[320px] ${className}`;

  const body = (
    <>
      <Image
        src={image}
        alt=""
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        aria-hidden
      />
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
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
  footer?: React.ReactNode;
  footerClass?: string;
  children?: React.ReactNode;
  className?: string;
  borderHover?: string;
}) {
  return (
    <Link
      href={href}
      className={`group overflow-hidden rounded-xl bg-[#f3f4f5] transition-all ${borderHover ?? ""} ${className}`}
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
          <NewsBadge className={badgeClass}>{badge}</NewsBadge>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="mb-3 text-base font-semibold leading-snug text-[#191c1d] transition-colors group-hover:text-[#455f88] sm:text-lg">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-[#444748]">{excerpt}</p>
        {children}
        {footer && (
          <p
            className={`flex items-center gap-1 text-xs ${footerClass ?? "text-[#444748]"}`}
          >
            {footer}
          </p>
        )}
      </div>
    </Link>
  );
}
