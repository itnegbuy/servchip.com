import type { ChipProduct, ServerProduct, NetworkingProduct, MemoryProduct, StorageProduct, AnyProduct } from "@/types";

import { NVIDIA_PRODUCTS } from "./manufacturers/nvidia";
import { AMD_PRODUCTS } from "./manufacturers/amd";
import { INTEL_PRODUCTS } from "./manufacturers/intel";
import { GOOGLE_PRODUCTS } from "./manufacturers/google";
import { AMAZON_PRODUCTS } from "./manufacturers/amazon";
import { QUALCOMM_PRODUCTS } from "./manufacturers/qualcomm";
import { AMPERE_PRODUCTS } from "./manufacturers/ampere";

import { ALL_SERVERS } from "./servers/index";

import { BROADCOM_PRODUCTS } from "./networking/broadcom";
import { MARVELL_PRODUCTS } from "./networking/marvell";
import { CISCO_PRODUCTS } from "./networking/cisco";
import { NVIDIA_NETWORKING_PRODUCTS } from "./networking/nvidia-networking";

import { ALL_MEMORY } from "./memory/index";
import { ALL_STORAGE } from "./storage/index";

export * from "./manufacturers/nvidia";
export * from "./manufacturers/amd";
export * from "./manufacturers/intel";
export * from "./manufacturers/google";
export * from "./manufacturers/amazon";
export * from "./manufacturers/qualcomm";
export * from "./manufacturers/ampere";

export * from "./servers/index";

// Note: NVIDIA networking is exported via ./manufacturers/nvidia
export * from "./networking/broadcom";
export * from "./networking/marvell";
export * from "./networking/cisco";

export * from "./memory/index";
export * from "./storage/index";

export const ALL_CHIP_PRODUCTS: ChipProduct[] = [
  ...(NVIDIA_PRODUCTS.filter(p => "specifications" in p) as ChipProduct[]),
  ...(AMD_PRODUCTS.filter(p => "specifications" in p) as ChipProduct[]),
  ...(INTEL_PRODUCTS.filter(p => "specifications" in p) as ChipProduct[]),
  ...GOOGLE_PRODUCTS,
  ...AMAZON_PRODUCTS,
  ...QUALCOMM_PRODUCTS,
  ...AMPERE_PRODUCTS,
];

export const ALL_NETWORKING_PRODUCTS: NetworkingProduct[] = [
  ...BROADCOM_PRODUCTS,
  ...MARVELL_PRODUCTS,
  ...CISCO_PRODUCTS,
  ...NVIDIA_NETWORKING_PRODUCTS,
];

export const ALL_PRODUCTS: AnyProduct[] = [
  ...ALL_CHIP_PRODUCTS,
  ...ALL_SERVERS,
  ...ALL_NETWORKING_PRODUCTS,
  ...ALL_MEMORY,
  ...ALL_STORAGE,
];

export function getProductById(id: string): AnyProduct | undefined {
  return ALL_PRODUCTS.find(p => p.id === id);
}

export function getProductBySlug(slug: string): AnyProduct | undefined {
  return ALL_PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByManufacturer(manufacturerId: string): AnyProduct[] {
  return ALL_PRODUCTS.filter(p => p.manufacturerId === manufacturerId);
}

export function getProductsByCategory(categoryId: string): AnyProduct[] {
  return ALL_PRODUCTS.filter(p => p.categoryId === categoryId);
}

export function getProductsByParentCategory(parentCategoryId: string): AnyProduct[] {
  return ALL_PRODUCTS.filter((p): p is AnyProduct & { parentCategoryId: string } =>
    "parentCategoryId" in p && p.parentCategoryId === parentCategoryId
  );
}

export function getManufacturerProductCount(manufacturerId: string): number {
  return ALL_PRODUCTS.filter(p => p.manufacturerId === manufacturerId).length;
}

export function getProductsByUseCase(useCase: string): AnyProduct[] {
  return ALL_PRODUCTS.filter(p =>
    "useCases" in p && Array.isArray((p as AnyProduct & { useCases: string[] }).useCases) &&
    (p as AnyProduct & { useCases: string[] }).useCases.includes(useCase)
  );
}

export function getProductsByUseCases(useCases: string[]): AnyProduct[] {
  const results = new Map<string, AnyProduct>();
  for (const uc of useCases) {
    for (const p of getProductsByUseCase(uc)) {
      results.set(p.id, p);
    }
  }
  return Array.from(results.values());
}
