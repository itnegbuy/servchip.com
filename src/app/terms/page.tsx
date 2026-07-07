import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Terms of Service — Servchip Terms & Conditions",
  description: "Servchip terms of service govern the use of our website, product purchases, warranty claims, and enterprise account management.",
  alternates: { canonical: "https://servchip.com/terms" },
};

export default function Page() {
  return <PageClient />;
}
