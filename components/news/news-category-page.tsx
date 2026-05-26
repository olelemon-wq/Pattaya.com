import { FeaturedHeroCinematic } from "@/components/cinematic/featured-hero-cinematic";
import {
  NewsCategoryHeader,
  NewsPageFrame,
  NewsSectionHeading,
} from "@/components/news/news-layout";
import {
  NewsArticleCard,
  NewsBadge,
  NewsTimeFooter,
  OverlayFeaturedCard,
} from "@/components/news/news-ui";
import type { NewsCategoryContent } from "@/lib/data/news-category-types";
import { newsTheme } from "@/lib/design/news-theme";
import type { NavItem } from "@/lib/navigation/types";
import { buildBreadcrumbs } from "@/lib/navigation/utils";
import { Building2, MapPin, TrendingUp } from "lucide-react";
import Link from "next/link";

const spotlightIcons = [Building2, TrendingUp, MapPin] as const;

const footerStyles = {
  default: newsTheme.footerDefault,
  accent: newsTheme.footerAccent,
  property: newsTheme.footerProperty,
} as const;

type NewsCategoryPageProps = {
  item: NavItem;
  content: NewsCategoryContent;
};

function formatArticleFooter(footer: string) {
  return footer.replace(/^🕐\s*/, "").replace(/^⚠\s*/, "");
}

export function NewsCategoryPage({ item, content }: NewsCategoryPageProps) {
  const breadcrumbs = buildBreadcrumbs("News", "/news", item.label, item.href);
  const headlinesTitle =
    content.headlinesTitle ?? `Latest ${item.label} Headlines`;
  const footerVariant = content.footer?.variant ?? "default";

  return (
    <NewsPageFrame>
      <NewsCategoryHeader
        breadcrumbs={breadcrumbs}
        category={item.category}
        title={item.label}
        titleTh={item.labelTh}
        description={item.description}
      />

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
                <span className={newsTheme.spotlightCta}>{spotlight.cta}</span>
              </OverlayFeaturedCard>
            );
          })}
        </div>
      </section>

      <section id="latest" className="mb-12 scroll-mt-24 sm:mb-16">
        <NewsSectionHeading
          title={headlinesTitle}
          action={
            <Link href="/news" className={newsTheme.link}>
              News Hub →
            </Link>
          }
        />

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
              footer={<NewsTimeFooter>{formatArticleFooter(article.footer)}</NewsTimeFooter>}
            />
          ))}
        </div>
      </section>

      {content.footer ? (
        <section className={footerStyles[footerVariant]}>
          <h2 className={`text-lg font-semibold text-[#0c1a33]`}>
            {content.footer.title}
          </h2>
          <p className={`mt-2 text-sm leading-relaxed ${newsTheme.muted}`}>
            {content.footer.body}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={content.footer.primary.href} className={newsTheme.btnPrimary}>
              {content.footer.primary.label}
            </Link>
            {content.footer.secondary ? (
              <Link href={content.footer.secondary.href} className={newsTheme.btnOutline}>
                {content.footer.secondary.label}
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </NewsPageFrame>
  );
}
