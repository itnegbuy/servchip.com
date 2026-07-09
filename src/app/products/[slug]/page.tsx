import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CHIPS } from "@/data/chips";
import PageClient from "./page-client";

const baseUrl = "https://servchip.com";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const chip = CHIPS.find((c) => c.slug === slug);
  if (!chip) return {};
  return {
    title: `${chip.name} — Specifications, Pricing & Availability`,
    description: chip.description,
    alternates: { canonical: `${baseUrl}/products/${slug}` },
    openGraph: {
      title: `${chip.name} — Servchip`,
      description: chip.description,
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const chip = CHIPS.find((c) => c.slug === slug);
  if (!chip) notFound();

  return (
    <>
      {chip && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: `${baseUrl}/`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Products",
                    item: `${baseUrl}/products`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: chip.name,
                    item: `${baseUrl}/products/${slug}`,
                  },
                ],
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: chip.name,
                description: chip.description,
                sku: chip.id,
                mpn: chip.id,
                brand: { "@type": "Brand", name: chip.manufacturer },
                manufacturer: {
                  "@type": "Organization",
                  name: chip.manufacturer,
                },
                category: chip.categoryName,
                url: `${baseUrl}/products/${slug}`,
                ...(chip.images.length > 0 ? { image: chip.images[0] } : {}),
                offers: {
                  "@type": "Offer",
                  url: `${baseUrl}/products/${slug}`,
                  availability:
                    AVAILABILITY_MAP[chip.status] ??
                    "https://schema.org/InStock",
                  priceCurrency: "USD",
                },
              }),
            }}
          />
        </>
      )}
      <PageClient />
    </>
  );
}

const AVAILABILITY_MAP: Record<string, string> = {
  in_stock: "https://schema.org/InStock",
  on_order: "https://schema.org/PreOrder",
  limited: "https://schema.org/LimitedAvailability",
  pre_order: "https://schema.org/PreOrder",
  discontinued: "https://schema.org/Discontinued",
};
