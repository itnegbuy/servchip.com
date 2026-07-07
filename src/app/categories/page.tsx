import type { Metadata } from "next";
import CategoriesPage from "./page-client";

export const metadata: Metadata = {
  title: "NVIDIA Product Categories — Data Center GPUs, AI Accelerators & More",
  description:
    "Browse NVIDIA products by category. Data center GPUs, AI accelerators, professional RTX, edge computing, networking, automotive, and HPC solutions.",
  alternates: { canonical: "https://servchip.com/categories" },
};

export default function Page() {
  return <CategoriesPage />;
}
