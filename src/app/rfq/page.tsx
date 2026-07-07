import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Request a Quote — Enterprise NVIDIA GPU Pricing",
  description: "Request a personalized quote for NVIDIA GPUs. Enterprise pricing, bulk discounts, and fast worldwide shipping. Get a response within 24 hours.",
  alternates: { canonical: "https://servchip.com/rfq" },
};

export default function Page() {
  return <PageClient />;
}
