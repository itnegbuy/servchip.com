import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title:
    "Enterprise AI & HPC Solutions — Data Center, Edge & Cloud Infrastructure",
  description:
    "Multi-vendor enterprise solutions for AI training, HPC, data center acceleration, edge computing & professional visualization. NVIDIA, AMD, Intel hardware for enterprise deployments.",
  alternates: { canonical: "https://servchip.com/solutions" },
  openGraph: {
    title:
      "Enterprise AI & HPC Solutions | Servchip — Data Center GPU Distributor",
    description:
      "Multi-vendor enterprise solutions for AI training, HPC, and data center workloads featuring NVIDIA, AMD, and Intel hardware.",
  },
};

export default function Page() {
  return <PageClient />;
}
