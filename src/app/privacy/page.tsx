import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { OG_IMAGE, OG_WIDTH, OG_HEIGHT } from "@/lib/seo";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Privacy Policy — Servchip Data Protection & Privacy Practices",
  description:
    "Servchip privacy policy explains how we collect, use, and protect your personal data when you browse our store or contact our sales team.",
  alternates: { canonical: `${SITE.url}/privacy` },
  openGraph: {
    title: "Privacy Policy | Servchip",
    description:
      "How Servchip collects, uses, and protects your personal data.",
    images: [
      {
        url: OG_IMAGE,
        width: OG_WIDTH,
        height: OG_HEIGHT,
        alt: "Servchip Privacy Policy",
        type: "image/png",
      },
    ],
  },
};

export default function Page() {
  return <PageClient />;
}
