import { SiteFooter } from "@/components/layout/site-footer";
import { LanguageProvider } from "@/components/layout/language-provider";
import { SiteHeader } from "@/components/layout/site-header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main className="w-full flex-1">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 has-[>[data-full-bleed]]:max-w-none has-[>[data-full-bleed]]:px-0 has-[>[data-full-bleed]]:py-0">
          {children}
        </div>
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
