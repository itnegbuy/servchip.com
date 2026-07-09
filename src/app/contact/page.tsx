import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Contact Servchip — Get in Touch with Our Sales Team",
  description:
    "Contact Servchip for enterprise chip pricing, availability, and quotes across NVIDIA, AMD, Intel, Nokia and more. Our team responds within 24 hours. Global shipping available.",
  alternates: { canonical: "https://servchip.com/contact" },
};

export default function Page() {
  return <PageClient />;
}
