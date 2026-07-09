import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Award,
  Globe,
  Zap,
  Wrench,
  Rocket,
  Search,
  FileText,
  Package,
} from "lucide-react";

export interface TrustBarItem {
  icon: string;
  text: string;
  badge?: string;
}

export const TRUST_BAR_ITEMS: TrustBarItem[] = [
  { icon: "⚡", text: "Enterprise Chip Distributor", badge: "★" },
  { icon: "✅", text: "ISO 9001:2015 Certified" },
  { icon: "🏢", text: "NVIDIA" },
  { icon: "🏢", text: "AMD" },
  { icon: "🏢", text: "Intel" },
  { icon: "🏢", text: "Nokia" },
  { icon: "🏢", text: "Broadcom" },
  { icon: "🏢", text: "Qualcomm" },
  { icon: "🌍", text: "Trusted by 200+ Enterprises Worldwide" },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  decimals?: number;
}

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Chips Delivered", icon: "Cpu" },
  { value: 200, suffix: "+", label: "Enterprise Clients", icon: "Building2" },
  { value: 50, suffix: "+", label: "Industry Partners", icon: "Handshake" },
  {
    value: 99.9,
    suffix: "%",
    label: "Authenticity Rate",
    icon: "ShieldCheck",
    decimals: 1,
  },
];

export const TECHNOLOGY_FEATURES: string[] = [
  "Multi-Architecture — NVIDIA Hopper, AMD CDNA 3, Intel Granite Rapids — one platform",
  "AI Acceleration — Tensor Cores, Matrix Extensions, and dedicated AI engines across all platforms",
  "High-Bandwidth Memory — HBM3, HBM3e, and GDDR6 for memory-intensive workloads",
  "Advanced Interconnects — NVLink, Infinity Fabric, UPI, and CXL for seamless scaling",
  "Open Ecosystems — CUDA, ROCm, oneAPI — choose your development platform",
  "Enterprise Reliability — ECC memory, RAS features, and multi-vendor certification",
  "Scalable Architecture — From edge to exascale, single GPU to GPU clusters",
];

export interface WhyFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const WHY_FEATURES: WhyFeature[] = [
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    desc: "Every chip sourced directly from manufacturers and authorized partners. Zero counterfeit policy with full chain of custody across all brands.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    desc: "ISO 9001:2015 certified. Rigorous testing, full traceability, and complete documentation with every shipment.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    desc: "Ship to 150+ countries with secure, insured logistics. Express shipping options available for urgent needs.",
  },
  {
    icon: Zap,
    title: "Enterprise Support",
    desc: "Dedicated account managers for every client. Technical team with deep multi-vendor architecture expertise.",
  },
  {
    icon: Wrench,
    title: "Expert Engineering Team",
    desc: "Certified engineers with hands-on experience across NVIDIA, AMD, Intel, and other leading platforms for AI, HPC, and data center deployments.",
  },
  {
    icon: Rocket,
    title: "Fast Turnaround",
    desc: "24-hour quote response guaranteed. Express shipping available for time-critical projects.",
  },
];

export interface ComparisonChip {
  name: string;
  slug: string;
  specs: Record<string, string>;
  badge: string;
  badgeVariant: "amber" | "cyan" | "purple";
  winner?: boolean;
}

export const COMPARISON_CHIPS: ComparisonChip[] = [
  {
    name: "NVIDIA H100",
    slug: "nvidia-h100-tensor-core-gpu",
    specs: {
      manufacturer: "NVIDIA",
      memory: "80GB HBM3",
      bandwidth: "3.35 TB/s",
    },
    badge: "Popular",
    badgeVariant: "amber",
  },
  {
    name: "AMD MI300X",
    slug: "amd-instinct-mi300x",
    specs: { manufacturer: "AMD", memory: "192GB HBM3", bandwidth: "5.2 TB/s" },
    badge: "Latest",
    badgeVariant: "cyan",
  },
  {
    name: "Intel Gaudi 3",
    slug: "intel-gaudi-3-ai-accelerator",
    specs: {
      manufacturer: "Intel",
      memory: "144GB HBM2e",
      bandwidth: "3.9 TB/s",
    },
    badge: "New",
    badgeVariant: "purple",
    winner: false,
  },
];

export interface HowItWorksStep {
  icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    icon: Search,
    number: "1",
    title: "Browse & Select",
    desc: "Explore our complete multi-vendor chip catalog with detailed specifications and expert recommendations.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Request a Quote",
    desc: "Submit your requirements and get a personalized quote within 24 hours.",
  },
  {
    icon: Package,
    number: "3",
    title: "Receive & Deploy",
    desc: "Fast delivery worldwide with full traceability and enterprise-level support.",
  },
];

export interface Testimonial {
  content: string;
  author: { name: string; role: string; avatar: string; image?: string };
  rating: number;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    content:
      "Servchip delivered our H100 cluster ahead of schedule. Their technical team helped us configure everything for optimal AI training throughput. Exceptional support throughout.",
    author: {
      name: "Dr. Alex Chen",
      role: "CTO, QuantumAI Labs",
      avatar: "AC",
      image: "https://i.pravatar.cc/150?u=alex",
    },
    rating: 5,
    company: "QuantumAI Labs",
  },
  {
    content:
      "We needed 200 GPUs for our rendering farm across multiple vendors. Servchip sourced NVIDIA, AMD, and Intel options within 3 weeks at competitive pricing. Every card tested and documented.",
    author: {
      name: "Sarah Mitchell",
      role: "VP Engineering, RenderForge",
      avatar: "SM",
      image: "https://i.pravatar.cc/150?u=sarah",
    },
    rating: 5,
    company: "RenderForge Inc.",
  },
  {
    content:
      "The engineering consultation saved us from a costly architecture mistake. Their team's deep multi-vendor knowledge is unmatched. Long-term partner for sure.",
    author: {
      name: "Marcus Williams",
      role: "Head of Infrastructure, DataSphere",
      avatar: "MW",
      image: "https://i.pravatar.cc/150?u=marcus",
    },
    rating: 5,
    company: "DataSphere Corp.",
  },
  {
    content:
      "Outstanding logistics and support for our overseas deployment. Servchip handled customs, documentation, and on-site configuration across multiple chip vendors. Truly enterprise-grade service.",
    author: {
      name: "Yuki Tanaka",
      role: "Director of IT, TechFrontier KK",
      avatar: "YT",
      image: "https://i.pravatar.cc/150?u=yuki",
    },
    rating: 5,
    company: "TechFrontier KK",
  },
];

export interface InsightPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  image?: string;
}

export const INSIGHT_POSTS: InsightPost[] = [
  {
    title: "AI Chip Landscape 2026: NVIDIA vs AMD vs Intel",
    excerpt:
      "A comprehensive analysis of the current AI chip landscape and how each manufacturer's architecture stacks up for enterprise workloads.",
    date: "Jun 15, 2026",
    category: "Architecture",
    slug: "ai-chip-landscape-2026-comparison",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
  },
  {
    title: "H100 vs MI300X vs Gaudi 3: Choosing the Right AI Accelerator",
    excerpt:
      "A side-by-side comparison of the leading AI accelerators for training, inference, and HPC workloads.",
    date: "Jun 10, 2026",
    category: "Comparison",
    slug: "h100-vs-mi300x-vs-gaudi3-comparison",
    image:
      "https://images.unsplash.com/photo-1555618561-5b0e7a3f7b9a?w=400&h=250&fit=crop",
  },
  {
    title: "Multi-Vendor GPU Deployments: Best Practices for Enterprise",
    excerpt:
      "How to build and manage heterogeneous GPU infrastructure with chips from different manufacturers.",
    date: "Jun 5, 2026",
    category: "Deployment",
    slug: "multi-vendor-gpu-deployments-best-practices",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
  },
];

export const HERO_PHRASES: string[] = [
  "Enterprise Chips for AI, ML & HPC workloads — all brands",
  "Your trusted source for authentic computing solutions across all manufacturers",
  "From data centers to research labs — we drive innovation",
];

export interface HeroStat {
  value: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  { value: "500+", label: "Chips Delivered" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Authenticity Rate" },
];

export const HERO_METRICS_LOG: string[] = [
  "CORE_LOAD: 94.2%",
  "FABRIC: 400GB/s",
  "AI_READY",
  "MEM_ALLOC: OK",
  "THERMAL: 62°C",
  "VOLTAGE: 1.12V",
  "TENSOR_FLOPS: MAX",
  "BUS_ACTIVE",
];
