import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "All Chip Products — NVIDIA, AMD, Intel & More",
  description:
    "Browse the complete catalog of authentic enterprise chips from NVIDIA, AMD, Intel, Nokia and more. AI accelerators, data center GPUs, server CPUs, professional graphics, and networking solutions.",
  alternates: { canonical: "https://servchip.com/products" },
};

export default function Page() {
  return <PageClient />;
}
