"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import {
  isChipProduct,
  isServerProduct,
  isNetworkingProduct,
  isMemoryProduct,
  isStorageProduct,
} from "@/types";
import type { AnyProduct } from "@/types";

const ChipDetail = dynamic(
  () => import("@/components/products/ChipDetail").then((m) => m.ChipDetail),
  { ssr: false },
);
const ServerDetail = dynamic(
  () =>
    import("@/components/products/ServerDetail").then((m) => m.ServerDetail),
  { ssr: false },
);
const NetworkingDetail = dynamic(
  () =>
    import("@/components/products/NetworkingDetail").then(
      (m) => m.NetworkingDetail,
    ),
  { ssr: false },
);
const MemoryDetail = dynamic(
  () =>
    import("@/components/products/MemoryDetail").then((m) => m.MemoryDetail),
  { ssr: false },
);
const StorageDetail = dynamic(
  () =>
    import("@/components/products/StorageDetail").then((m) => m.StorageDetail),
  { ssr: false },
);

export default function ProductDetailPage({
  product,
}: {
  product: AnyProduct;
}) {
  if (isChipProduct(product)) return <ChipDetail />;
  if (isServerProduct(product)) return <ServerDetail />;
  if (isNetworkingProduct(product)) return <NetworkingDetail />;
  if (isMemoryProduct(product)) return <MemoryDetail />;
  if (isStorageProduct(product)) return <StorageDetail />;

  return <ChipDetail />;
}
