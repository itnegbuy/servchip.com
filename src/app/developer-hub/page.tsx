import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Developer Hub — SDK, API Docs & Integration Guides for AI Chips",
  description:
    "Integration guides for NVIDIA CUDA, AMD ROCm, Intel oneAPI. SDK documentation, API reference, and code samples for enterprise AI chip development and deployment.",
  alternates: { canonical: "https://servchip.com/developer-hub" },
  openGraph: {
    title: "Developer Hub | Servchip — Enterprise AI Hardware",
    description:
      "SDK docs, API reference & integration guides for NVIDIA CUDA, AMD ROCm, Intel oneAPI across enterprise chip platforms.",
  },
};

export default function Page() {
  return <PageClient />;
}
