import { ALL_PRODUCTS, ALL_CHIP_PRODUCTS, ALL_SERVERS, ALL_NETWORKING_PRODUCTS, ALL_MEMORY, ALL_STORAGE } from "./products/index";
import type { ProductType, AnyProduct } from "@/types";

export interface SearchResult {
  product: AnyProduct;
  type: ProductType;
}

export function searchProducts(query: string): SearchResult[] {
  if (query.length < 2) return [];
  const q = query.toLowerCase();

  function match(product: AnyProduct): boolean {
    return (
      product.name.toLowerCase().includes(q) ||
      product.manufacturer.toLowerCase().includes(q) ||
      product.series.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q)
    );
  }

  const results: SearchResult[] = [];

  for (const p of ALL_CHIP_PRODUCTS) if (match(p)) results.push({ product: p, type: "chip" });
  for (const p of ALL_SERVERS) if (match(p)) results.push({ product: p, type: "server" });
  for (const p of ALL_NETWORKING_PRODUCTS) if (match(p)) results.push({ product: p, type: "networking" });
  for (const p of ALL_MEMORY) if (match(p)) results.push({ product: p, type: "memory" });
  for (const p of ALL_STORAGE) if (match(p)) results.push({ product: p, type: "storage" });

  return results;
}
