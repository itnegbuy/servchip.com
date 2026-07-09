import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Enterprise Solutions — AI, HPC, Data Center & Edge Computing",
  description:
    "Explore multi-vendor solutions for AI training, HPC, data center acceleration, edge computing, and professional visualization. Enterprise deployment guides featuring NVIDIA, AMD, Intel and more.",
  alternates: { canonical: "https://servchip.com/solutions" },
};

export default function Page() {
  return <PageClient />;
}
