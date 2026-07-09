import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Developer Hub — SDK, API Docs & Integration Guides",
  description:
    "Access integration guides for NVIDIA CUDA, AMD ROCm, Intel oneAPI and more. SDK documentation, API reference, and code samples for developers across all major chip platforms.",
  alternates: { canonical: "https://servchip.com/developer-hub" },
};

export default function Page() {
  return <PageClient />;
}
