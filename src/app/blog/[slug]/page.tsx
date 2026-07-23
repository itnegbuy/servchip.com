import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog";
import { SITE } from "@/lib/constants";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  OG_IMAGE,
  OG_WIDTH,
  OG_HEIGHT,
} from "@/lib/seo";
import PageClient from "./page-client";

export function generateStaticParams() {
  return BLOG_POSTS.filter((p) => p.isPublished).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const title = post.seo?.metaTitle || `${post.title} — Servchip Blog`;
  const description = post.seo?.metaDescription || post.excerpt;
  return {
    title,
    description,
    keywords: [
      post.title,
      "enterprise chip distributor blog",
      "AI hardware guide",
      "semiconductor procurement",
      "NVIDIA H100 guide",
      "AMD MI300X comparison",
      "data center GPU guide",
    ],
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags.map((t) => t.name),
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: OG_IMAGE,
              width: OG_WIDTH,
              height: OG_HEIGHT,
              alt: post.title,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.featuredImage || OG_IMAGE],
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const faqSection = post.sections?.find((s) =>
    s.heading.toLowerCase().includes("frequently asked"),
  );
  const faqItems: { question: string; answer: string }[] | undefined =
    faqSection
      ? faqSection.paragraphs
          .map((p) => {
            const idx = p.indexOf("? ");
            if (idx === -1) return null;
            return {
              question: p.substring(0, idx + 1),
              answer: p.substring(idx + 2),
            };
          })
          .filter((x): x is NonNullable<typeof x> => x !== null)
      : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={articleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          author: { name: post.author.name },
          image: post.featuredImage || undefined,
          category: post.category.name,
        })}
      />
      {faqItems && faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={faqSchema(faqItems)}
        />
      )}
      <PageClient />
    </>
  );
}
