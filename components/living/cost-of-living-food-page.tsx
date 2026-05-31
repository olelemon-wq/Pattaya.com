"use client";

import { CostLivingCategoryCard } from "@/components/living/cost-living-category-card";
import {
  CostLivingProvider,
  useCostLiving,
} from "@/components/living/cost-living-provider";
import { CostOfLivingWidget } from "@/components/living/cost-of-living-widget";
import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LifestyleSegmentedControl } from "@/components/living/lifestyle-segmented-control";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { useAnimatedAmount } from "@/hooks/use-animated-amount";
import { useCostData } from "@/hooks/use-cost-data";
import { formatCostAmount } from "@/hooks/use-cost-calculator";
import {
  costFoodFaqs,
  getCostFoodPageCopy,
} from "@/lib/i18n/messages/living/cost-of-living-food";
import { getCurrencyOptions } from "@/lib/i18n/messages/living/cost-of-living-widget";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { livingImages } from "@/lib/design/living-images";
import { faq } from "@/lib/i18n/living-helpers";
import { Car, Home, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

function CostFoodPlannerInner() {
  const { language } = useLanguage();
  const copy = getCostFoodPageCopy(language);
  const { currency, setCurrency } = useCostLiving();
  const { plannerTotalAmount } = useCostData(language);
  const currencyOptions = getCurrencyOptions(language);
  const animated = useAnimatedAmount(plannerTotalAmount);

  const totalDisplay = useMemo(
    () => formatCostAmount(animated, currency, language),
    [animated, currency, language],
  );

  const faqs = costFoodFaqs.map((f) => faq(f.id, f.q, f.a));

  return (
    <LocalizedLivingPageShell
      shellKey="food"
      heroImage={livingImages.food}
      heroAlt="Pattaya street food and local dining"
      ctaHref="#col-planner"
      hideLeadCta
    >
      <section id="col-planner" className="cost-food">
        <header className="cost-food__hero">
          <span className="cost-food__badge">{copy.plannerBadge}</span>
          <h2 className="cost-food__title">{copy.plannerTitle}</h2>
          <p className="cost-food__subtitle">{copy.plannerSubtitle}</p>
        </header>

        <div className="cost-food__controls">
          <p className="cost-food__lifestyle-label">{copy.lifestyleLabel}</p>
          <LifestyleSegmentedControl aria-label={copy.lifestyleLabel} />
        </div>

        <div className="cost-food__summary">
          <div className="cost-food__summary-copy">
            <p className="cost-food__summary-label">{copy.estimatedTotal}</p>
            <p className="cost-food__summary-value" aria-live="polite">
              {totalDisplay}
            </p>
          </div>
          <label className="cost-food__currency">
            <select
              className="cost-food__currency-select"
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value as typeof currency)
              }
              aria-label="Currency"
            >
              {currencyOptions.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <h3 className="cost-food__section-label">{copy.coreCategories}</h3>
        <div className="cost-food__grid">
          <CostLivingCategoryCard category="food" icon={UtensilsCrossed} />
          <CostLivingCategoryCard category="housing" icon={Home} />
          <CostLivingCategoryCard category="transport" icon={Car} />
        </div>

        <h3 className="cost-food__section-label">{copy.breakdownTitle}</h3>
        <CostOfLivingWidget hideTierTabs analysisHref="/living/cost-of-living/utilities" />

        <aside className="cost-food__tips">
          <h3 className="cost-food__tips-title">{copy.tipsTitle}</h3>
          <ul className="cost-food__tips-list">
            {copy.tips.map((tip) => (
              <li key={tip.slice(0, 24)}>{tip}</li>
            ))}
          </ul>
          <nav className="cost-food__tips-links">
            <Link href="/living/cost-of-living/utilities">{copy.utilitiesLink}</Link>
            <Link href="/living/housing/rentals">{copy.rentalsLink}</Link>
            <Link href="/explore/restaurants/street-food">{copy.streetFoodLink}</Link>
          </nav>
        </aside>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Cost of living", "ค่าครองชีพ", "生活成本", "Стоимость жизни")}
        titleId="col-food-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}

export function CostOfLivingFoodPage() {
  return (
    <CostLivingProvider defaultTier="standard" defaultCurrency="THB">
      <CostFoodPlannerInner />
    </CostLivingProvider>
  );
}
