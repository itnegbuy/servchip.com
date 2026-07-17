import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Enterprise Hardware Services — Procurement, Integration & Support",
  description:
    "End-to-end enterprise chip services — custom hardware sourcing, system integration, technical support, AI infrastructure consulting, and warranty & RMA. ISO 9001 certified IT distributor with global delivery.",
  alternates: { canonical: "https://servchip.com/services" },
  openGraph: {
    title: "Enterprise Hardware Services | Servchip — Chip Distributor",
    description:
      "Custom chip sourcing, system integration, AI infrastructure consulting, and enterprise warranty services from an ISO 9001 certified distributor.",
  },
};

export default function ServicesPage() {
  return <PageClient />;
}
