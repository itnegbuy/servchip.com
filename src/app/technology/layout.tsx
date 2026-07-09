import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology — Multi-Vendor Chip Architecture & Enterprise Solutions",
  description:
    "Explore our technology portfolio — NVIDIA Hopper, AMD CDNA 3, Intel Granite Rapids, and more. Enterprise-grade AI, HPC, and data center solutions across all major chip architectures.",
  alternates: { canonical: "https://servchip.com/technology" },
  openGraph: {
    title: "Technology — Servchip Enterprise Chip Solutions",
    description:
      "Multi-vendor chip architecture expertise across NVIDIA, AMD, Intel, and leading manufacturers for AI, HPC, and data center workloads.",
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
