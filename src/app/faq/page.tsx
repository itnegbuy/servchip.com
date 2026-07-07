import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions About NVIDIA Chip Purchasing",
  description: "Answers to common questions about NVIDIA GPU purchasing, shipping, warranty, authenticity verification, and enterprise support from Servchip.",
  alternates: { canonical: "https://servchip.com/faq" },
};

export default function Page() {
  return <PageClient />;
}
