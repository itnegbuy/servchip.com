import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Contact Servchip — Get in Touch with Our NVIDIA Sales Team",
  description: "Contact Servchip for NVIDIA chip pricing, availability, and enterprise quotes. Our team responds within 24 hours. Global shipping available.",
  alternates: { canonical: "https://servchip.com/contact" },
};

export default function Page() {
  return <PageClient />;
}
