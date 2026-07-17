import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Contact Us — Enterprise Chip Pricing, Availability & Quotes",
  description:
    "Contact Servchip for enterprise chip pricing, availability, and quotes. NVIDIA H100, AMD MI300X, Intel Xeon & more. Enterprise hardware distributor with 24-hour response time & global shipping.",
  alternates: { canonical: "https://servchip.com/contact" },
  openGraph: {
    title: "Contact Servchip — Enterprise Chip Distributor",
    description:
      "Get enterprise chip pricing & quotes. 24-hour response time. Global shipping from India & UAE.",
  },
};

export default function Page() {
  return <PageClient />;
}
