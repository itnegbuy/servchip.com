import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "NVIDIA GPU Products — H100, H200, B200, RTX 6000 Ada & More",
  description: "Browse the complete catalog of authentic NVIDIA GPUs and accelerators. H100, H200, B200 data center GPUs, RTX 6000 Ada professional cards, and networking solutions.",
  alternates: { canonical: "https://servchip.com/products" },
};

export default function Page() {
  return <PageClient />;
}
