"use client";

import {
  Anchor,
  ChefHat,
  Coffee,
  Gem,
  Ship,
  ShoppingBag,
  Soup,
  Sparkles,
  Store,
  Users,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const categoryIcons = {
  waves: Waves,
  ship: Ship,
  chefHat: ChefHat,
  soup: Soup,
  coffee: Coffee,
  shoppingBag: ShoppingBag,
  store: Store,
  users: Users,
  anchor: Anchor,
  gem: Gem,
  sparkles: Sparkles,
} as const;

type CategoryIconName = keyof typeof categoryIcons;

const categories: {
  label: string;
  href: string;
  icon: CategoryIconName;
  active?: boolean;
}[] = [
  { label: "Beaches", href: "/explore/beaches", icon: "waves", active: true },
  { label: "Islands", href: "/explore/islands/koh-larn", icon: "ship" },
  {
    label: "Luxury Dining",
    href: "/explore/restaurants/fine-dining",
    icon: "chefHat",
  },
  {
    label: "Local Food",
    href: "/explore/restaurants/street-food",
    icon: "soup",
  },
  { label: "Cafes", href: "/explore/cafes", icon: "coffee" },
  { label: "Shopping", href: "/explore/shopping/malls", icon: "shoppingBag" },
  { label: "Markets", href: "/explore/shopping/markets", icon: "store" },
  { label: "Family", href: "/explore/family-activities", icon: "users" },
  { label: "Yacht", href: "/explore/luxury/yacht", icon: "anchor" },
  { label: "Hidden Gems", href: "/explore/hidden-gems", icon: "gem" },
  { label: "Wellness", href: "/explore/wellness", icon: "sparkles" },
];

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const DRAG_CLICK_THRESHOLD = 6;

export function ExploreCategoryNav() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const didDragRef = useRef(false);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updatePagination = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollWidth, clientWidth, scrollLeft } = el;
    if (scrollWidth <= clientWidth + 2) {
      setPageCount(1);
      setActivePage(0);
      return;
    }

    const pages = Math.max(1, Math.ceil(scrollWidth / clientWidth));
    setPageCount(pages);
    setActivePage(
      Math.min(pages - 1, Math.round(scrollLeft / clientWidth)),
    );
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updatePagination();
    el.addEventListener("scroll", updatePagination, { passive: true });
    const ro = new ResizeObserver(updatePagination);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", updatePagination);
      ro.disconnect();
    };
  }, [updatePagination]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth + 2) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (event: MouseEvent) => {
      const el = scrollRef.current;
      if (!el || !dragRef.current.active) return;
      event.preventDefault();
      const delta = event.pageX - dragRef.current.startX;
      if (Math.abs(delta) > DRAG_CLICK_THRESHOLD) {
        didDragRef.current = true;
      }
      el.scrollLeft = dragRef.current.scrollLeft - delta;
    };

    const endDrag = () => {
      dragRef.current.active = false;
      setIsDragging(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", endDrag);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", endDrag);
    };
  }, [isDragging]);

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= el.clientWidth + 2) return;
    if (event.button !== 0) return;

    didDragRef.current = false;
    dragRef.current = {
      active: true,
      startX: event.pageX,
      scrollLeft: el.scrollLeft,
    };
    setIsDragging(true);
  };

  const scrollToPage = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="sticky top-0 z-30 border-b border-[#B52E88]/15 bg-white py-4">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          className={cn(
            "snap-x snap-mandatory overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-visible md:snap-none [&::-webkit-scrollbar]:hidden",
            pageCount > 1 && "cursor-grab",
            isDragging && "cursor-grabbing select-none",
          )}
        >
          <div className="flex min-w-max items-start justify-start gap-6 px-1 py-2 md:mx-auto md:min-w-0 md:justify-center md:gap-10">
            {categories.map((cat) => {
              const Icon: LucideIcon = categoryIcons[cat.icon];
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  draggable={false}
                  onClick={(event) => {
                    if (didDragRef.current) {
                      event.preventDefault();
                      didDragRef.current = false;
                    }
                  }}
                  className="group flex w-[4.5rem] shrink-0 snap-start flex-col items-center gap-3 transition-all duration-300 sm:w-auto sm:min-w-max"
                >
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-105 group-hover:border-[#B52E88] group-hover:bg-[#B52E88] group-hover:text-white group-hover:shadow-lg",
                      cat.active
                        ? "border-[#B52E88]/20 bg-[#B52E88]/5 text-[#B52E88]"
                        : "border-[#c4c7c8]/30 bg-[#edeeef] text-[#444748]",
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                  </div>
                  <span
                    className={cn(
                      "max-w-[4.5rem] text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.12em]",
                      cat.active
                        ? "text-[#B52E88]"
                        : "text-[#444748] group-hover:text-[#B52E88]",
                    )}
                  >
                    {cat.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {pageCount > 1 && (
          <div
            className="mt-3 flex items-center justify-center gap-2 md:hidden"
            role="tablist"
            aria-label="Category pages"
          >
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activePage}
                aria-label={`Categories page ${index + 1} of ${pageCount}`}
                onClick={() => scrollToPage(index)}
                className={cn(
                  "rounded-full transition-all",
                  index === activePage
                    ? "h-2 w-2 bg-[#444748]"
                    : "h-2 w-2 bg-[#c4c7c8] hover:bg-[#747878]",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
