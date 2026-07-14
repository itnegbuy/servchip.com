"use client";

import { ChipCard } from "@/components/chips/ChipCard";
import { ServerCard } from "./ServerCard";
import { NetworkingCard } from "./NetworkingCard";
import { MemoryCard } from "./MemoryCard";
import { StorageCard } from "./StorageCard";
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

interface Props {
  product: AnyProduct;
  index?: number;
}

export function ProductCard({ product, index = 0 }: Props) {
  if (isChip(product)) return <ChipCard chip={product} index={index} />;
  if (isServer(product)) return <ServerCard server={product} index={index} />;
  if (isNetworking(product)) return <NetworkingCard net={product} index={index} />;
  if (isMemory(product)) return <MemoryCard mem={product} index={index} />;
  if (isStorage(product)) return <StorageCard st={product} index={index} />;
  return null;
}
