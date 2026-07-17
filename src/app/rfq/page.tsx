import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Request a Quote — Enterprise AI Hardware Pricing & Availability",
  description:
    "Request a personalized quote for enterprise chips — NVIDIA H100, AMD MI300X, Intel Xeon & Gaudi 3. Volume discounts, 24-hour response time & global shipping from an ISO 9001 certified distributor.",
  alternates: { canonical: "https://servchip.com/rfq" },
  openGraph: {
    title: "Request a Quote | Servchip — Enterprise Chip Distributor",
    description:
      "Get enterprise chip pricing. NVIDIA, AMD, Intel hardware. Volume discounts & 24-hour quotes.",
  },
};

export default function Page() {
  return <PageClient />;
}
