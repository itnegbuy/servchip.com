import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MANUFACTURERS } from "@/data/manufacturers";
import { CHIPS } from "@/data/chips";
import PageClient from "./page-client";

export async function generateStaticParams() {
  const params: { slug: string; categorySlug: string }[] = [];
  for (const m of MANUFACTURERS) {
    for (const c of m.categories) {
      params.push({ slug: m.slug, categorySlug: c.slug });
    }
  }
  return params;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string; categorySlug: string }>;
}): Promise<Metadata> {
  const { slug, categorySlug } = await props.params;
  const manufacturer = MANUFACTURERS.find((m) => m.slug === slug);
  if (!manufacturer) return {};
  const category = manufacturer.categories.find((c) => c.slug === categorySlug);
  if (!category) return {};
  return {
    title: `${manufacturer.name} ${category.name} | Servchip`,
    description: `Browse ${manufacturer.name} ${category.name}. ${category.description}`,
    alternates: {
      canonical: `https://servchip.com/manufacturers/${slug}/${categorySlug}`,
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string; categorySlug: string }>;
}) {
  const { slug, categorySlug } = await props.params;
  const manufacturer = MANUFACTURERS.find((m) => m.slug === slug);
  if (!manufacturer) notFound();
  const category = manufacturer.categories.find((c) => c.slug === categorySlug);
  if (!category) notFound();
  return <PageClient />;
}
