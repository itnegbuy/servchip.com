import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title:
    "Enterprise Chip Products — NVIDIA H100, AMD MI300X, Intel Xeon & More",
  description:
    "Browse authentic enterprise chips — NVIDIA data center GPUs, AMD Instinct accelerators, Intel Xeon processors, AI servers, networking, memory & storage. ISO 9001 certified distributor.",
  alternates: { canonical: "https://servchip.com/products" },
  openGraph: {
    title: "Enterprise Chip Products | Servchip — AI Hardware Distributor",
    description:
      "Browse authentic enterprise chips from NVIDIA, AMD, Intel & more. Data center GPUs, AI accelerators, server CPUs.",
  },
};

export default function Page() {
  return <PageClient />;
}
