import type { NavItem } from "@/lib/navigation/types";
import { CategoryCard } from "./category-card";

interface CategoryGridProps {
  items: NavItem[];
  groupByCategory?: boolean;
}

export function CategoryGrid({ items, groupByCategory = true }: CategoryGridProps) {
  if (!groupByCategory) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <CategoryCard key={item.slug} item={item} />
        ))}
      </div>
    );
  }

  const grouped = items.reduce<Record<string, NavItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([category, categoryItems]) => (
        <section key={category}>
          <h2 className="mb-4 text-lg font-semibold text-zinc-900">{category}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryItems.map((item) => (
              <CategoryCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
