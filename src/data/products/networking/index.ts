import type { NetworkingProduct } from "@/types";
import { BROADCOM_PRODUCTS } from "./broadcom";
import { MARVELL_PRODUCTS } from "./marvell";
import { CISCO_PRODUCTS } from "./cisco";
import { NVIDIA_NETWORKING_PRODUCTS } from "./nvidia-networking";

export * from "./broadcom";
export * from "./marvell";
export * from "./cisco";
export * from "./nvidia-networking";

export const ALL_NETWORKING: NetworkingProduct[] = [
  ...BROADCOM_PRODUCTS,
  ...MARVELL_PRODUCTS,
  ...CISCO_PRODUCTS,
  ...NVIDIA_NETWORKING_PRODUCTS,
];
