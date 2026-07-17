import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Resources — Enterprise AI Hardware Guides, Blog & Technical Insights",
  description:
    "Technical guides, blog articles, case studies & whitepapers on AI computing, GPU architectures, HPC deployments, and enterprise chip solutions from Servchip's certified engineers.",
  alternates: { canonical: "https://servchip.com/resources" },
  openGraph: {
    title: "Resources & Guides | Servchip — Enterprise Chip Distributor",
    description:
      "Technical guides, case studies & whitepapers on AI computing, GPU architectures & enterprise chip solutions.",
  },
};

export default function ResourcesPage() {
  return <PageClient />;
}
