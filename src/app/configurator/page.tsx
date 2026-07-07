import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "NVIDIA Chip Configurator — Find the Right GPU for Your Workload",
  description: "Configure your ideal NVIDIA GPU setup. Answer a few questions and get matched with the right chip for AI training, inference, HPC, or professional graphics.",
  alternates: { canonical: "https://servchip.com/configurator" },
};

export default function Page() {
  return <PageClient />;
}
