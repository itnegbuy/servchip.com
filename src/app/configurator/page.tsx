import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Chip Configurator — Find the Right Accelerator for Your Workload",
  description:
    "Configure your ideal chip setup from NVIDIA, AMD, Intel and more. Answer a few questions and get matched with the right chip for AI training, inference, HPC, or professional graphics.",
  alternates: { canonical: "https://servchip.com/configurator" },
};

export default function Page() {
  return <PageClient />;
}
