import type { BlogPost, BlogCategory, BlogTag } from "@/types";

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "architecture",
    name: "Architecture",
    slug: "architecture",
    description: "Deep dives into chip architectures",
    postCount: 3,
  },
  {
    id: "comparison",
    name: "Comparison",
    slug: "comparison",
    description: "Side-by-side chip comparisons",
    postCount: 2,
  },
  {
    id: "deployment",
    name: "Deployment",
    slug: "deployment",
    description: "Deployment guides and best practices",
    postCount: 2,
  },
  {
    id: "guides",
    name: "Guides",
    slug: "guides",
    description: "Technical guides and tutorials",
    postCount: 2,
  },
  {
    id: "case-studies",
    name: "Case Studies",
    slug: "case-studies",
    description: "Real-world deployment stories",
    postCount: 1,
  },
];

export const BLOG_TAGS: BlogTag[] = [
  { id: "ai-training", name: "AI Training", slug: "ai-training" },
  { id: "inference", name: "Inference", slug: "inference" },
  { id: "hpc", name: "HPC", slug: "hpc" },
  { id: "data-center", name: "Data Center", slug: "data-center" },
  { id: "edge", name: "Edge Computing", slug: "edge" },
  { id: "nvidia", name: "NVIDIA", slug: "nvidia" },
  { id: "amd", name: "AMD", slug: "amd" },
  { id: "intel", name: "Intel", slug: "intel" },
];

function cat(slug: string): BlogCategory {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)!;
}

function tag(slug: string): BlogTag {
  return BLOG_TAGS.find((t) => t.slug === slug)!;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "AI Chip Landscape 2026: NVIDIA, AMD, Intel Compared",
    slug: "ai-chip-landscape-2026-comparison",
    excerpt:
      "A comprehensive analysis of the current AI chip market. We compare NVIDIA H100/H200/B200, AMD Instinct MI300X, and Intel Gaudi 3 across performance, memory, and ecosystem.",
    content: "",
    featuredImage: "",
    category: cat("architecture"),
    tags: [
      tag("ai-training"),
      tag("data-center"),
      tag("nvidia"),
      tag("amd"),
      tag("intel"),
    ],
    author: { name: "Servchip Tech Team", avatar: "ST" },
    readingTime: 12,
    publishedAt: "2026-06-15",
    isPublished: true,
    seo: {
      metaTitle: "AI Chip Landscape 2026 | NVIDIA vs AMD vs Intel | Servchip",
      metaDescription:
        "Comprehensive comparison of NVIDIA H100/B200, AMD MI300X, and Intel Gaudi 3 for AI workloads. Find the right AI accelerator for your needs.",
    },
  },
  {
    id: "2",
    title: "H100 vs MI300X vs Gaudi 3: Choosing the Right AI Accelerator",
    slug: "h100-vs-mi300x-vs-gaudi3-comparison",
    excerpt:
      "Detailed comparison of the three leading AI accelerators — NVIDIA H100, AMD MI300X, and Intel Gaudi 3 — for training, inference, and HPC workloads.",
    content: "",
    featuredImage: "",
    category: cat("comparison"),
    tags: [
      tag("ai-training"),
      tag("inference"),
      tag("nvidia"),
      tag("amd"),
      tag("intel"),
    ],
    author: { name: "Servchip Tech Team", avatar: "ST" },
    readingTime: 15,
    publishedAt: "2026-06-10",
    isPublished: true,
    seo: {
      metaTitle: "H100 vs MI300X vs Gaudi 3 Comparison | Servchip",
      metaDescription:
        "Compare NVIDIA H100, AMD MI300X, and Intel Gaudi 3 AI accelerators head-to-head for performance, memory, and cost considerations.",
    },
  },
  {
    id: "3",
    title: "Multi-Vendor GPU Deployments: Best Practices for Enterprise",
    slug: "multi-vendor-gpu-deployments-best-practices",
    excerpt:
      "How to build and manage heterogeneous GPU infrastructure with chips from NVIDIA, AMD, and Intel in the same data center.",
    content: "",
    featuredImage: "",
    category: cat("deployment"),
    tags: [
      tag("data-center"),
      tag("hpc"),
      tag("nvidia"),
      tag("amd"),
      tag("intel"),
    ],
    author: { name: "Servchip Tech Team", avatar: "ST" },
    readingTime: 10,
    publishedAt: "2026-06-05",
    isPublished: true,
    seo: {
      metaTitle: "Multi-Vendor GPU Deployments Guide | Servchip",
      metaDescription:
        "Best practices for deploying and managing heterogeneous GPU infrastructure with NVIDIA, AMD, and Intel accelerators.",
    },
  },
  {
    id: "4",
    title: "AMD Instinct MI300X Deep Dive: Architecture and Performance",
    slug: "amd-instinct-mi300x-deep-dive",
    excerpt:
      "An in-depth look at AMD's flagship AI accelerator, the MI300X with CDNA 3 architecture, 192GB HBM3 memory, and ROCm software ecosystem.",
    content: "",
    featuredImage: "",
    category: cat("architecture"),
    tags: [tag("ai-training"), tag("hpc"), tag("amd")],
    author: { name: "Servchip Tech Team", avatar: "ST" },
    readingTime: 10,
    publishedAt: "2026-05-28",
    isPublished: true,
    seo: {
      metaTitle: "AMD Instinct MI300X Deep Dive | Servchip",
      metaDescription:
        "Detailed analysis of AMD Instinct MI300X architecture, CDNA 3 compute units, 192GB HBM3 memory, and performance benchmarks.",
    },
  },
  {
    id: "5",
    title: "Intel Gaudi 3 AI Accelerator: What You Need to Know",
    slug: "intel-gaudi-3-ai-accelerator-guide",
    excerpt:
      "Everything about Intel's Gaudi 3 AI accelerator — architecture, performance, software stack, and how it compares to NVIDIA and AMD offerings.",
    content: "",
    featuredImage: "",
    category: cat("architecture"),
    tags: [tag("ai-training"), tag("inference"), tag("intel")],
    author: { name: "Servchip Tech Team", avatar: "ST" },
    readingTime: 8,
    publishedAt: "2026-05-20",
    isPublished: true,
    seo: {
      metaTitle: "Intel Gaudi 3 AI Accelerator Guide | Servchip",
      metaDescription:
        "Complete guide to Intel Gaudi 3 AI accelerator — architecture, 144GB HBM2e memory, integrated Ethernet, and software ecosystem.",
    },
  },
  {
    id: "6",
    title: "The Future of Heterogeneous Computing: Multi-Vendor Strategies",
    slug: "future-heterogeneous-computing-strategies",
    excerpt:
      "How enterprises are leveraging chips from multiple vendors to build flexible, cost-effective AI and HPC infrastructure.",
    content: "",
    featuredImage: "",
    category: cat("deployment"),
    tags: [
      tag("data-center"),
      tag("hpc"),
      tag("nvidia"),
      tag("amd"),
      tag("intel"),
    ],
    author: { name: "Servchip Tech Team", avatar: "ST" },
    readingTime: 9,
    publishedAt: "2026-05-15",
    isPublished: true,
    seo: {
      metaTitle: "Future of Heterogeneous Computing | Servchip",
      metaDescription:
        "Learn how enterprises are using multi-vendor chip strategies with NVIDIA, AMD, and Intel to build flexible AI infrastructure.",
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category.slug === categorySlug);
}

export function getBlogPostsByTag(tagSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.tags.some((t) => t.slug === tagSlug));
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.isPublished).slice(0, 3);
}
