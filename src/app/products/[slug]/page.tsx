import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CHIPS } from "@/data/chips";
import PageClient from "./page-client";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const chip = CHIPS.find((c) => c.slug === slug);
  if (!chip) return {};
  return {
    title: `${chip.name} — Specifications, Pricing & Availability`,
    description: chip.description,
    alternates: { canonical: `https://servchip.com/products/${slug}` },
    openGraph: {
      title: `${chip.name} — Servchip`,
      description: chip.description,
    },
  };
}

export default function Page() {
  return <PageClient />;
}
