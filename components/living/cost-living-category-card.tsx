"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { useAnimatedAmount } from "@/hooks/use-animated-amount";
import { useCostData } from "@/hooks/use-cost-data";
import { formatCostAmount } from "@/hooks/use-cost-calculator";
import { getCostFoodPageCopy } from "@/lib/i18n/messages/living/cost-of-living-food";
import type { CostCategoryKey } from "@/lib/cost-of-living/pattaya-prices";
import type { LucideIcon } from "lucide-react";
import { useMemo } from "react";

const ICON_CLASS: Record<CostCategoryKey, string> = {
  food: "cost-food__icon--food",
  housing: "cost-food__icon--housing",
  transport: "cost-food__icon--transport",
};

type Props = {
  category: CostCategoryKey;
  icon: LucideIcon;
};

export function CostLivingCategoryCard({ category, icon: Icon }: Props) {
  const { language } = useLanguage();
  const copy = getCostFoodPageCopy(language);
  const { categories, currency } = useCostData(language);
  const block = categories.find((c) => c.key === category);
  const animated = useAnimatedAmount(block?.monthlyAmount ?? 0);

  const displayTotal = useMemo(
    () => formatCostAmount(animated, currency, language),
    [animated, currency, language],
  );

  if (!block) return null;

  const maxLine = Math.max(...block.lines.map((l) => l.amount), 1);

  return (
    <article className={`cost-food__card cost-food__card--${category}`}>
      <header className="cost-food__card-head">
        <span className={`cost-food__icon ${ICON_CLASS[category]}`}>
          <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
        </span>
        <div>
          <h4 className="cost-food__card-title">{block.title}</h4>
          <p className="cost-food__card-total" aria-live="polite">
            {displayTotal}
            <span className="cost-food__card-period">{copy.perMonth}</span>
          </p>
        </div>
      </header>

      <ul className="cost-food__lines">
        {block.lines.map((line) => {
          const pct = Math.max(8, Math.round((line.amount / maxLine) * 100));
          return (
            <li key={line.id} className="cost-food__line">
              <div className="cost-food__line-head">
                <span>{line.label}</span>
                <span className="cost-food__line-amt">{line.formatted}</span>
              </div>
              <div className="cost-food__line-track">
                <div
                  className={`cost-food__line-fill cost-food__line-fill--${category}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
