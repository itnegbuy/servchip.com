import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Technology — Multi-Vendor AI Chip Architecture & Enterprise Solutions",
  description:
    "Explore enterprise chip technology — NVIDIA Hopper, AMD CDNA 3, Intel Granite Rapids. AI acceleration, HBM memory, NVLink interconnects & more for data center deployments.",
  alternates: { canonical: "https://servchip.com/technology" },
  openGraph: {
    title:
      "Technology Portfolio | Servchip — Enterprise AI Hardware Distributor",
    description:
      "Multi-vendor chip architecture expertise across NVIDIA, AMD, Intel for enterprise AI, HPC & data center workloads.",
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
