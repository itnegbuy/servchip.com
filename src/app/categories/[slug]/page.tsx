import type { Metadata } from "next";
import { CATEGORIES } from "@/data/categories";
import PageClient from "./page-client";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return {};
  const title = `${cat.name} — Enterprise ${cat.name}`;
  return {
    title,
    description: cat.description,
    alternates: { canonical: `https://servchip.com/categories/${slug}` },
  };
}

export default function Page() {
  return <PageClient />;
}
