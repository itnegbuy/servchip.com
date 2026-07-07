import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "NVIDIA Blog — Architecture Guides, Comparisons & Industry Insights",
  description: "Expert guides on NVIDIA Blackwell, Hopper, and Ada Lovelace architectures. Chip comparisons, deployment best practices, and enterprise AI infrastructure insights.",
  alternates: { canonical: "https://servchip.com/blog" },
};

export default function Page() {
  return <PageClient />;
}
