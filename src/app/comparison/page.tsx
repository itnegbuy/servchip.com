import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "NVIDIA GPU Comparison Tool — H100 vs H200 vs B200",
  description: "Compare NVIDIA GPUs side by side. H100 vs H200 vs B200 vs RTX 6000 Ada. Memory, bandwidth, TFLOPS, TDP, and architecture specifications.",
  alternates: { canonical: "https://servchip.com/comparison" },
};

export default function Page() {
  return <PageClient />;
}
