import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Privacy Policy — Servchip Data Protection & Privacy Practices",
  description: "Servchip privacy policy explains how we collect, use, and protect your personal data when you browse our store or contact our sales team.",
  alternates: { canonical: "https://servchip.com/privacy" },
};

export default function Page() {
  return <PageClient />;
}
