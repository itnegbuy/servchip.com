"use client";

import { useParams } from "next/navigation";
import { ALL_PRODUCTS } from "@/data/products";
import { ChipDetail } from "@/components/products/ChipDetail";
import { ServerDetail } from "@/components/products/ServerDetail";
import { NetworkingDetail } from "@/components/products/NetworkingDetail";
import { MemoryDetail } from "@/components/products/MemoryDetail";
import { StorageDetail } from "@/components/products/StorageDetail";
import type { AnyProduct, ChipProduct, ServerProduct, NetworkingProduct, MemoryProduct, StorageProduct } from "@/types";

function isChip(p: AnyProduct): p is ChipProduct {
  return "specifications" in p;
}
function isServer(p: AnyProduct): p is ServerProduct {
  return "formFactor" in p && !("specifications" in p);
}
function isNetworking(p: AnyProduct): p is NetworkingProduct {
  return "specs" in p && "management" in p.specs;
}
function isMemory(p: AnyProduct): p is MemoryProduct {
  return "specs" in p && "voltage" in p.specs;
}
function isStorage(p: AnyProduct): p is StorageProduct {
  return "specs" in p && "interface" in p.specs;
}

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return <ChipDetail />;

  if (isChip(product)) return <ChipDetail />;
  if (isServer(product)) return <ServerDetail />;
  if (isNetworking(product)) return <NetworkingDetail />;
  if (isMemory(product)) return <MemoryDetail />;
  if (isStorage(product)) return <StorageDetail />;

  return <ChipDetail />;
}
