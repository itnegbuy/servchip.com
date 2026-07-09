import type { ChipCategory } from "@/types";

export const CATEGORIES: ChipCategory[] = [
  {
    id: "data-center-gpus",
    name: "Data Center GPUs",
    slug: "data-center-gpus",
    description: "Enterprise AI training and inference GPUs for data centers.",
    icon: "Server",
    sortOrder: 1,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "Data Center GPUs for AI & HPC | Servchip",
      metaDescription:
        "Enterprise data center GPUs from NVIDIA, AMD, and Intel for AI training, HPC, and inference workloads.",
    },
  },
  {
    id: "ai-accelerators",
    name: "AI Accelerators",
    slug: "ai-accelerators",
    description: "Specialized AI inference and training accelerators.",
    icon: "Brain",
    sortOrder: 2,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "AI Accelerators for Training & Inference | Servchip",
      metaDescription:
        "AI accelerators from NVIDIA, AMD, and Intel for deep learning and generative AI workloads.",
    },
  },
  {
    id: "professional-graphics",
    name: "Professional GPUs",
    slug: "professional-graphics",
    description: "Professional graphics and compute GPUs for workstations.",
    icon: "Monitor",
    sortOrder: 3,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "Professional Workstation GPUs | Servchip",
      metaDescription:
        "Professional GPUs for CAD, 3D rendering, and AI-assisted design workflows.",
    },
  },
  {
    id: "server-cpus",
    name: "Server CPUs",
    slug: "server-cpus",
    description:
      "High-performance server processors for data centers and cloud.",
    icon: "Cpu",
    sortOrder: 4,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "Server CPUs for Data Centers | Servchip",
      metaDescription:
        "Server processors from AMD EPYC and Intel Xeon for enterprise data centers.",
    },
  },
  {
    id: "edge-ai",
    name: "Edge AI & Embedded",
    slug: "edge-ai-embedded",
    description: "Embedded modules and edge computing solutions.",
    icon: "Microchip",
    sortOrder: 5,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "Edge AI & Embedded Computing Solutions | Servchip",
      metaDescription:
        "Edge AI modules and embedded computing solutions for IoT and industrial applications.",
    },
  },
  {
    id: "networking",
    name: "Networking",
    slug: "networking",
    description: "High-speed networking and interconnect solutions.",
    icon: "Network",
    sortOrder: 6,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "Networking & Interconnect Solutions | Servchip",
      metaDescription:
        "High-speed networking solutions from NVIDIA, Intel, and Nokia.",
    },
  },
  {
    id: "automotive",
    name: "Automotive",
    slug: "automotive",
    description: "Autonomous vehicle and in-cabin computing platforms.",
    icon: "Car",
    sortOrder: 7,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "Automotive Computing Platforms | Servchip",
      metaDescription:
        "Automotive-grade chips for autonomous driving and in-vehicle computing.",
    },
  },
  {
    id: "hpc",
    name: "HPC Solutions",
    slug: "hpc-solutions",
    description: "High-performance computing and supercomputing platforms.",
    icon: "Zap",
    sortOrder: 8,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "HPC & Supercomputing Solutions | Servchip",
      metaDescription:
        "High-performance computing solutions for scientific research and simulation.",
    },
  },
  {
    id: "fpgas",
    name: "FPGAs & Adaptive SoCs",
    slug: "fpgas-adaptive-socs",
    description: "Programmable logic and adaptive computing platforms.",
    icon: "Cpu",
    sortOrder: 9,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "FPGAs & Adaptive Computing Solutions | Servchip",
      metaDescription:
        "FPGAs and adaptive SoCs from AMD and Intel for acceleration and edge AI.",
    },
  },
  {
    id: "network-processors",
    name: "Network Processors",
    slug: "network-processors",
    description:
      "Packet processing and routing silicon for telecom and data centers.",
    icon: "Network",
    sortOrder: 10,
    productCount: 0,
    isActive: true,
    seo: {
      metaTitle: "Network Processors & Telecom Silicon | Servchip",
      metaDescription:
        "Network processors from Nokia for 5G, optical, and IP networking.",
    },
  },
];

export function getCategoryBySlug(slug: string): ChipCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
