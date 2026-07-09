import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Resources | Servchip — Authorized NVIDIA Distributor",
  description:
    "Explore our library of technical guides, blog articles, case studies, whitepapers, and webinars on AI computing, GPU architectures, HPC deployments, and enterprise chip solutions from NVIDIA-certified engineers.",
  alternates: { canonical: "https://servchip.com/resources" },
  openGraph: {
    title: "Resources | Servchip — Authorized NVIDIA Distributor",
    description:
      "Explore our library of technical guides, blog articles, case studies, whitepapers, and webinars on AI computing, GPU architectures, HPC deployments, and enterprise chip solutions.",
  },
};

export default function ResourcesPage() {
  return <PageClient />;
}
