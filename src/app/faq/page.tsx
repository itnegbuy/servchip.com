import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "FAQ — Enterprise Chip Distributor Questions & Answers",
  description:
    "Answers about enterprise chip purchasing, authenticity verification, shipping, warranty, and support from Servchip — ISO 9001 certified distributor for NVIDIA, AMD, Intel & more.",
  alternates: { canonical: "https://servchip.com/faq" },
  openGraph: {
    title: "FAQ | Servchip — Enterprise Chip Distributor",
    description:
      "Common questions about enterprise chip purchasing, shipping, warranty & support from an ISO 9001 certified distributor.",
  },
};

export default function Page() {
  return <PageClient />;
}
