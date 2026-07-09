import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MANUFACTURERS, getManufacturerBySlug } from "@/data/manufacturers";
import { getChipsByManufacturer } from "@/data/chips";
import PageClient from "./page-client";

export async function generateStaticParams() {
  return MANUFACTURERS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const manufacturer = getManufacturerBySlug(slug);
  if (!manufacturer) return {};
  return {
    title: manufacturer.seo.metaTitle,
    description: manufacturer.seo.metaDescription,
    alternates: { canonical: `https://servchip.com/manufacturers/${slug}` },
    openGraph: {
      title: manufacturer.seo.metaTitle,
      description: manufacturer.seo.metaDescription,
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const manufacturer = getManufacturerBySlug(slug);
  if (!manufacturer) notFound();
  return <PageClient />;
}
