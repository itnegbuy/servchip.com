import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_PRODUCTS } from "@/data/products";
import type { AnyProduct } from "@/types";
import PageClient from "./page-client";

const baseUrl = "https://servchip.com";

function getPriceCurrency() {
  return "USD";
}

const AVAILABILITY_MAP: Record<string, string> = {
  in_stock: "https://schema.org/InStock",
  on_order: "https://schema.org/PreOrder",
  limited: "https://schema.org/LimitedAvailability",
  pre_order: "https://schema.org/PreOrder",
  discontinued: "https://schema.org/Discontinued",
};

function getProductName(product: AnyProduct): string {
  if ("specifications" in product) return `${product.name} — Specifications, Pricing & Availability`;
  if ("formFactor" in product) return `${product.name} — AI Server Specs & Pricing`;
  return `${product.name} — Product Details & Pricing`;
}

function getProductDescription(product: AnyProduct): string {
  return product.description;
}

function getProductCategory(product: AnyProduct): string {
  return product.categoryName;
}

function getProductBrand(product: AnyProduct): string {
  return product.manufacturer;
}

function getProductStatus(product: AnyProduct): string {
  return product.status;
}

function getProductImages(product: AnyProduct): string[] {
  return product.images || [];
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: getProductName(product),
    description: getProductDescription(product),
    alternates: { canonical: `${baseUrl}/products/${slug}` },
    openGraph: {
      title: `${product.name} — Servchip`,
      description: getProductDescription(product),
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const images = getProductImages(product);

  return (
    <>
      {product && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
                  { "@type": "ListItem", position: 2, name: "Products", item: `${baseUrl}/products` },
                  { "@type": "ListItem", position: 3, name: product.name, item: `${baseUrl}/products/${slug}` },
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
                name: product.name,
                description: getProductDescription(product),
                sku: product.id,
                mpn: product.id,
                brand: { "@type": "Brand", name: getProductBrand(product) },
                manufacturer: { "@type": "Organization", name: getProductBrand(product) },
                category: getProductCategory(product),
                url: `${baseUrl}/products/${slug}`,
                ...(images.length > 0 ? { image: images[0] } : {}),
                offers: {
                  "@type": "Offer",
                  url: `${baseUrl}/products/${slug}`,
                  availability: AVAILABILITY_MAP[getProductStatus(product)] ?? "https://schema.org/InStock",
                  priceCurrency: getPriceCurrency(),
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
