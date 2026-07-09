import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions About Enterprise Chip Purchasing",
  description:
    "Answers to common questions about enterprise chip purchasing, shipping, warranty, authenticity verification, and support from Servchip across all manufacturers.",
  alternates: { canonical: "https://servchip.com/faq" },
};

export default function Page() {
  return <PageClient />;
}
