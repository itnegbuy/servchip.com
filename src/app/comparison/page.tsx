import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Chip Comparison Tool — NVIDIA H100 vs AMD MI300X vs Intel Gaudi 3",
  description:
    "Compare enterprise AI accelerators side by side — NVIDIA H100 vs AMD MI300X vs Intel Gaudi 3. Memory, bandwidth, TFLOPS, TDP & architecture specs for data center GPU procurement.",
  alternates: { canonical: "https://servchip.com/comparison" },
  openGraph: {
    title: "AI Chip Comparison | NVIDIA H100 vs AMD MI300X vs Intel Gaudi 3",
    description:
      "Side-by-side enterprise chip comparison — specs, performance & pricing for data center GPU procurement.",
  },
};

export default function Page() {
  return <PageClient />;
}
