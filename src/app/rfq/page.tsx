import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Request a Quote — Enterprise Chip Pricing",
  description:
    "Request a personalized quote for enterprise chips from NVIDIA, AMD, Intel, Nokia and more. Enterprise pricing, bulk discounts, and fast worldwide shipping. Get a response within 24 hours.",
  alternates: { canonical: "https://servchip.com/rfq" },
};

export default function Page() {
  return <PageClient />;
}
