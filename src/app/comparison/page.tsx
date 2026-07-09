import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Chip Comparison Tool — NVIDIA vs AMD vs Intel",
  description:
    "Compare enterprise chips side by side. H100 vs MI300X vs Gaudi 3 vs Xeon. Memory, bandwidth, TFLOPS, TDP, and architecture specifications across all manufacturers.",
  alternates: { canonical: "https://servchip.com/comparison" },
};

export default function Page() {
  return <PageClient />;
}
