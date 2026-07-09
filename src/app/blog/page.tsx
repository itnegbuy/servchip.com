import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Blog — Chip Architecture Guides, Comparisons & Industry Insights",
  description:
    "Expert guides on NVIDIA Blackwell, AMD CDNA 3, Intel Granite Rapids and more. Chip comparisons, deployment best practices, and enterprise AI infrastructure insights from all major manufacturers.",
  alternates: { canonical: "https://servchip.com/blog" },
};

export default function Page() {
  return <PageClient />;
}
