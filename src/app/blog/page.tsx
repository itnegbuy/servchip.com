import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Blog — Enterprise AI Hardware Guides & Chip Architecture Insights",
  description:
    "Expert guides on NVIDIA Blackwell, AMD CDNA 3, Intel Granite Rapids & more. Enterprise AI chip comparisons, deployment best practices & data center infrastructure insights.",
  alternates: { canonical: "https://servchip.com/blog" },
  openGraph: {
    title: "Blog | Servchip — Enterprise Chip Distributor",
    description:
      "Expert guides on AI chip architectures, comparisons & enterprise deployment best practices.",
  },
};

export default function Page() {
  return <PageClient />;
}
