import type { Metadata } from "next";
import CategoriesPage from "./page-client";

export const metadata: Metadata = {
  title:
    "Product Categories — Data Center GPUs, AI Accelerators & Enterprise Hardware",
  description:
    "Browse enterprise chip categories — NVIDIA data center GPUs, AMD Instinct accelerators, Intel Xeon CPUs, AI servers, networking, memory & storage from an ISO 9001 certified distributor.",
  alternates: { canonical: "https://servchip.com/categories" },
  openGraph: {
    title: "Product Categories | Servchip — Enterprise Chip Distributor",
    description:
      "Browse enterprise chip categories — data center GPUs, AI accelerators, server CPUs & more.",
  },
};

export default function Page() {
  return <CategoriesPage />;
}
