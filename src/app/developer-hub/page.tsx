import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Developer Hub — NVIDIA SDK, API Docs & Integration Guides",
  description: "Access NVIDIA CUDA, TensorRT, and Triton Inference Server integration guides. SDK documentation, API reference, and code samples for developers.",
  alternates: { canonical: "https://servchip.com/developer-hub" },
};

export default function Page() {
  return <PageClient />;
}
