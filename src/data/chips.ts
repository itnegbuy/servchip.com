import type { ChipProduct } from "@/types";
import { ALL_CHIP_PRODUCTS } from "@/data/products";

export const CHIPS: ChipProduct[] = ALL_CHIP_PRODUCTS;

export const FEATURED_CHIP_IDS: string[] = CHIPS.filter(
  (c) => c.isFeatured,
).map((c) => c.id);
export const POPULAR_CHIP_IDS: string[] = CHIPS.filter((c) => c.isPopular).map(
  (c) => c.id,
);

export function getChipsByManufacturer(manufacturerId: string): ChipProduct[] {
  return CHIPS.filter((c) => c.manufacturerId === manufacturerId);
}

export function getChipById(id: string): ChipProduct | undefined {
  return CHIPS.find((c) => c.id === id);
}

export function getChipBySlug(slug: string): ChipProduct | undefined {
  return CHIPS.find((c) => c.slug === slug);
}

export function getManufacturerChipCount(manufacturerId: string): number {
  return CHIPS.filter((c) => c.manufacturerId === manufacturerId).length;
}

export const MANUFACTURER_CHIP_MAP: Record<string, string[]> = CHIPS.reduce(
  (acc, chip) => {
    if (!acc[chip.manufacturerId]) acc[chip.manufacturerId] = [];
    acc[chip.manufacturerId].push(chip.id);
    return acc;
  },
  {} as Record<string, string[]>,
);
