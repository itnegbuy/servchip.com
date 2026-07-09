import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Services | Servchip — Authorized NVIDIA Distributor",
  description:
    "End-to-end NVIDIA computing services — hardware procurement, bulk & wholesale, technical support, warranty & RMA, AI infrastructure design, data center planning, and HPC optimization. Certified engineering, global delivery.",
  alternates: { canonical: "https://servchip.com/services" },
  openGraph: {
    title: "Services | Servchip — Authorized NVIDIA Distributor",
    description:
      "End-to-end NVIDIA computing services — hardware procurement, bulk & wholesale, technical support, warranty & RMA, AI infrastructure design, data center planning, and HPC optimization.",
  },
};

export default function ServicesPage() {
  return <PageClient />;
}
