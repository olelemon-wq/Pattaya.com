import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { FeaturedHeroCinematic } from "@/components/cinematic/featured-hero-cinematic";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import {
  NewsArticleCard,
  NewsBadge,
  OverlayFeaturedCard,
} from "@/components/news/news-ui";
import type { NewsCategoryContent } from "@/lib/data/news-category-types";
import type { NavItem } from "@/lib/navigation/types";
import { buildBreadcrumbs } from "@/lib/navigation/utils";
import { Building2, MapPin, TrendingUp } from "lucide-react";
import Link from "next/link";

const spotlightIcons = [Building2, TrendingUp, MapPin] as const;

const footerStyles = {
  default: "rounded-2xl border border-[#c4c7c8]/40 bg-white p-6 shadow-sm sm:p-8",
  accent:
    "rounded-2xl border border-[#dbeafe] bg-gradient-to-br from-[#eff6ff] to-white p-6 shadow-sm sm:p-8",
  property:
    "rounded-2xl border border-[#fde8d8] bg-gradient-to-br from-[#fff7ed] to-white p-6 shadow-sm sm:p-8",
} as const;

type NewsCategoryPageProps = {
  item: NavItem;
  content: NewsCategoryContent;
};

export function NewsCategoryPage({ item, content }: NewsCategoryPageProps) {
  const breadcrumbs = buildBreadcrumbs("News", "/news", item.label, item.href);
  const headlinesTitle =
    content.headlinesTitle ?? `Latest ${item.label} Headlines`;
  const footerVariant = content.footer?.variant ?? "default";

  return (
    <div data-full-bleed className="bg-[#f8f9fa] pb-16 text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="news" />
      </div>

      <div className="mx-auto max-w-[1280px] px-4 pt-4 pb-10 sm:px-6 sm:pt-6 md:px-16 md:pt-8">
        <Breadcrumb items={breadcrumbs} />

        <header className="mb-6 mt-4 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#455f88]">
            {item.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#191c1d] sm:text-4xl">
            {item.label}
          </h1>
          <p className="mt-1 text-lg text-[#455f88]">{item.labelTh}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">
            {item.description}
          </p>
        </header>

        <section className="relative mb-12 flex flex-col gap-5 sm:mb-16 sm:gap-6">
          <div className="relative z-0">
            <FeaturedHeroCinematic
              image={content.hero.image}
              imageAlt={content.hero.imageAlt}
              href="#latest"
              category={item.subcategory}
              featuredLabel={content.hero.featuredLabel ?? "Featured"}
              title={content.hero.title}
              excerpt={content.hero.excerpt}
              ctaLabel={content.hero.ctaLabel ?? "Read Full Story"}
              ctaTone="news"
              showAiSummary={false}
              minHeightClass="min-h-[min(70dvh,380px)] sm:min-h-[460px] lg:min-h-[520px]"
              byline={content.hero.byline}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {content.spotlights.map((spotlight, index) => {
              const Icon = spotlightIcons[index] ?? Building2;

              return (
                <OverlayFeaturedCard
                  key={spotlight.id}
                  image={spotlight.image}
                  imageAlt={spotlight.imageAlt}
                  overlayClass={spotlight.overlayClass}
                  href={spotlight.href}
                >
                  <div>
                    <div className="mb-4 flex items-start justify-between">
                      <NewsBadge className="bg-white/15 text-white backdrop-blur-sm">
                        {spotlight.badge}
                      </NewsBadge>
                      <Icon
                        className="h-5 w-5 text-white/90"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <h2 className="mb-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                      {spotlight.title}
                    </h2>
                    <p className="line-clamp-3 text-sm text-white/85">
                      {spotlight.excerpt}
                    </p>
                  </div>
                  <span className="mt-4 inline-block rounded-lg border border-white/50 bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#455f88]">
                    {spotlight.cta}
                  </span>
                </OverlayFeaturedCard>
              );
            })}
          </div>
        </section>

        <section id="latest" className="mb-12 scroll-mt-24 sm:mb-16">
          <div className="mb-8 flex items-center justify-between border-b border-[#c4c7c8] pb-4">
            <h2 className="text-2xl font-semibold">{headlinesTitle}</h2>
            <Link
              href="/news"
              className="text-sm font-semibold text-[#455f88] hover:underline"
            >
              News Hub →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.articles.map((article) => (
              <NewsArticleCard
                key={article.title}
                href={article.href}
                image={article.image}
                imageAlt={article.imageAlt}
                badge={article.badge}
                badgeClass={article.badgeClass}
                title={article.title}
                excerpt={article.excerpt}
                footer={`🕐 ${article.footer}`}
              />
            ))}
          </div>
        </section>

        {content.footer ? (
          <section className={footerStyles[footerVariant]}>
            <h2 className="text-lg font-semibold text-[#191c1d]">
              {content.footer.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              {content.footer.body}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={content.footer.primary.href}
                className="rounded-lg bg-[#10438f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#10438f]/90"
              >
                {content.footer.primary.label}
              </Link>
              {content.footer.secondary ? (
                <Link
                  href={content.footer.secondary.href}
                  className="rounded-lg border border-[#10438f] px-5 py-2.5 text-sm font-semibold text-[#10438f] transition-colors hover:bg-[#10438f]/5"
                >
                  {content.footer.secondary.label}
                </Link>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
