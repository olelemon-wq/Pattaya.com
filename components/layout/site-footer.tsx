import Link from "next/link";

const networkLinks = [
  { label: "Investment Portal", href: "/business/investment/real-estate" },
  { label: "Real Estate Index", href: "/news/business/real-estate" },
  { label: "Visa Services", href: "/living/visa/retirement" },
  { label: "Business Directory", href: "/directory/featured" },
];

const connectLinks = [
  { label: "Advertise With Us", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-[#0c1a33] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-6">
        <div>
          <p className="text-lg font-extrabold tracking-tight">PATTAYA.COM</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            The Seamless Hybrid City Hub — connecting expats, tourists, and
            local businesses through trusted information and community.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
            Network
          </h3>
          <ul className="space-y-2.5">
            {networkLinks.map((link) => (
              <li key={link.label}>
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
            Connect
          </h3>
          <ul className="space-y-2.5">
            {connectLinks.map((link) => (
              <li key={link.label}>
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
          © {new Date().getFullYear()} Pattaya.com — The Seamless Hybrid City
          Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
