"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { MANUFACTURERS } from "@/data/manufacturers";
import { CHIPS } from "@/data/chips";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChipGrid } from "@/components/chips/ChipGrid";

export default function ManufacturerCategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const categorySlug = params.categorySlug as string;

  const manufacturer = MANUFACTURERS.find((m) => m.slug === slug);
  const category = manufacturer?.categories.find(
    (c) => c.slug === categorySlug,
  );

  if (!manufacturer || !category) {
    return (
      <div className="min-h-screen bg-bg-dark pt-[72px] lg:pt-[104px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text mb-2">
            Category Not Found
          </h1>
          <Link href="/products" className="text-primary hover:underline">
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  const allChipIds = category.subcategories.flatMap((s) => s.chipIds);
  const categoryChips = CHIPS.filter((c) => allChipIds.includes(c.id));

  return (
    <div className="min-h-screen bg-bg-dark pt-[72px] lg:pt-[104px] pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <Link
            href={`/manufacturers/${manufacturer.slug}`}
            className="text-xs text-primary hover:underline mb-2 inline-block"
          >
            &larr; Back to {manufacturer.name}
          </Link>
          <SectionHeading
            label={`${manufacturer.name} • ${category.name}`}
            title={`${manufacturer.name} ${category.name}`}
            subtitle={category.description}
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {category.subcategories.map((sub) => (
            <div
              key={sub.id}
              className="p-4 rounded-xl border border-border bg-surface"
            >
              <h4 className="text-sm font-bold text-text mb-1">{sub.name}</h4>
              <p className="text-xs text-text-muted">{sub.description}</p>
              <span className="text-xs text-primary mt-2 inline-block">
                {sub.chipIds.length} products
              </span>
            </div>
          ))}
        </div>

        <ChipGrid chips={categoryChips} />
      </div>
    </div>
  );
}
