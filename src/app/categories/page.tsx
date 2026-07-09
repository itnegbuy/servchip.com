import type { Metadata } from "next";
import CategoriesPage from "./page-client";

export const metadata: Metadata = {
  title: "Product Categories — Data Center GPUs, AI Accelerators & More",
  description:
    "Browse enterprise chip products by category. Data center GPUs, AI accelerators, professional GPUs, server CPUs, FPGAs, networking, and HPC solutions from NVIDIA, AMD, Intel, Nokia and more.",
  alternates: { canonical: "https://servchip.com/categories" },
};

export default function Page() {
  return <CategoriesPage />;
}
