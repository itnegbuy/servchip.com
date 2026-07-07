import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "NVIDIA Solutions — AI, HPC, Data Center & Edge Computing",
  description: "Explore NVIDIA-powered solutions for AI training, HPC, data center acceleration, edge computing, and professional visualization. Enterprise deployment guides.",
  alternates: { canonical: "https://servchip.com/solutions" },
};

export default function Page() {
  return <PageClient />;
}
