import type { Manufacturer } from "@/types";

export const MANUFACTURERS: Manufacturer[] = [
  {
    id: "nvidia",
    name: "NVIDIA",
    slug: "nvidia",
    description:
      "Enterprise AI GPUs, data center accelerators, and professional visualization solutions.",
    longDescription:
      "NVIDIA is the world leader in AI computing, GPU technology, and accelerated computing. From data center AI training to edge inference, NVIDIA's architectures power the most demanding workloads across every industry.",
    website: "https://www.nvidia.com",
    founded: "1993",
    headquarters: "Santa Clara, California, USA",
    categories: [
      {
        id: "nvidia-data-center",
        name: "Data Center GPUs",
        slug: "data-center-gpus",
        description:
          "Enterprise AI training and inference GPUs for data centers.",
        icon: "Server",
        subcategories: [
          {
            id: "nvidia-dc-blackwell",
            name: "Blackwell Series",
            slug: "blackwell-series",
            description: "Next-gen AI & HPC accelerators",
            chipIds: ["nvidia-b200"],
          },
          {
            id: "nvidia-dc-hopper",
            name: "Hopper Series",
            slug: "hopper-series",
            description: "Enterprise AI training GPUs",
            chipIds: ["nvidia-h100", "nvidia-h200", "nvidia-gh200"],
          },
          {
            id: "nvidia-dc-ampere",
            name: "Ampere Series",
            slug: "ampere-series",
            description: "Proven enterprise AI GPUs",
            chipIds: ["nvidia-a100"],
          },
          {
            id: "nvidia-dc-ada",
            name: "Ada Lovelace",
            slug: "ada-lovelace-dc",
            description: "Versatile data center GPUs",
            chipIds: ["nvidia-l40s"],
          },
        ],
      },
      {
        id: "nvidia-professional",
        name: "Professional RTX",
        slug: "professional-rtx",
        description: "Professional graphics and compute GPUs for workstations.",
        icon: "Monitor",
        subcategories: [
          {
            id: "nvidia-pro-rtx6000",
            name: "RTX 6000 Series",
            slug: "rtx-6000-series",
            description: "Flagship professional GPUs",
            chipIds: ["nvidia-rtx6000"],
          },
          {
            id: "nvidia-pro-rtx5000",
            name: "RTX 5000 Series",
            slug: "rtx-5000-series",
            description: "Mid-range professional GPUs",
            chipIds: ["nvidia-rtx5000"],
          },
        ],
      },
      {
        id: "nvidia-ai-accelerators",
        name: "AI Accelerators",
        slug: "ai-accelerators",
        description: "Specialized AI inference and edge accelerators.",
        icon: "Brain",
        subcategories: [
          {
            id: "nvidia-ai-jetson",
            name: "Jetson Series",
            slug: "jetson-series",
            description: "Edge AI and robotics modules",
            chipIds: [],
          },
          {
            id: "nvidia-ai-triton",
            name: "Triton Inference",
            slug: "triton-inference",
            description: "AI inference servers",
            chipIds: [],
          },
        ],
      },
      {
        id: "nvidia-networking",
        name: "Networking",
        slug: "networking",
        description: "High-speed networking and interconnect solutions.",
        icon: "Network",
        subcategories: [
          {
            id: "nvidia-net-dpu",
            name: "BlueField DPUs",
            slug: "bluefield-dpus",
            description: "Data processing units",
            chipIds: [],
          },
          {
            id: "nvidia-net-switch",
            name: "NVSwitch",
            slug: "nvswitch",
            description: "GPU interconnect switches",
            chipIds: [],
          },
        ],
      },
      {
        id: "nvidia-automotive",
        name: "Automotive",
        slug: "automotive",
        description: "Autonomous vehicle and in-cabin computing platforms.",
        icon: "Car",
        subcategories: [
          {
            id: "nvidia-auto-drive",
            name: "DRIVE Series",
            slug: "drive-series",
            description: "Autonomous driving platforms",
            chipIds: [],
          },
          {
            id: "nvidia-auto-orin",
            name: "Orin Series",
            slug: "orin-series",
            description: "In-vehicle computing",
            chipIds: [],
          },
        ],
      },
      {
        id: "nvidia-hpc",
        name: "HPC & Grace",
        slug: "hpc-grace",
        description: "High-performance computing and Grace Superchips.",
        icon: "Zap",
        subcategories: [
          {
            id: "nvidia-hpc-grace",
            name: "Grace Hopper",
            slug: "grace-hopper",
            description: "Superchip for HPC & AI",
            chipIds: ["nvidia-gh200"],
          },
          {
            id: "nvidia-hpc-cpu",
            name: "Grace CPU",
            slug: "grace-cpu",
            description: "ARM-based server CPUs",
            chipIds: [],
          },
        ],
      },
      {
        id: "nvidia-gaming",
        name: "Gaming & GeForce",
        slug: "gaming-geforce",
        description: "Consumer and professional gaming GPUs.",
        icon: "Gamepad2",
        subcategories: [
          {
            id: "nvidia-gaming-rtx40",
            name: "RTX 40 Series",
            slug: "rtx-40-series",
            description: "Latest gaming GPUs",
            chipIds: [],
          },
          {
            id: "nvidia-gaming-rtx30",
            name: "RTX 30 Series",
            slug: "rtx-30-series",
            description: "Previous gen gaming GPUs",
            chipIds: [],
          },
        ],
      },
    ],
    seo: {
      metaTitle: "NVIDIA GPU & Chip Distributor | Servchip",
      metaDescription:
        "Authorized distributor of NVIDIA GPUs — H100, H200, B200, RTX 6000 Ada, AI accelerators, networking solutions. Global delivery, enterprise support.",
    },
  },
  {
    id: "amd",
    name: "AMD",
    slug: "amd",
    description:
      "High-performance CPUs, GPUs, and adaptive computing solutions for AI and enterprise.",
    longDescription:
      "AMD delivers high-performance computing, graphics, and adaptive solutions for AI, HPC, data centers, and professional visualization. The AMD Instinct lineup and EPYC processors power the world's most demanding workloads.",
    website: "https://www.amd.com",
    founded: "1969",
    headquarters: "Santa Clara, California, USA",
    categories: [
      {
        id: "amd-instinct",
        name: "AMD Instinct Accelerators",
        slug: "amd-instinct-accelerators",
        description:
          "AI training and HPC accelerators with AMD CDNA architecture.",
        icon: "Server",
        subcategories: [
          {
            id: "amd-instinct-mi300",
            name: "Instinct MI300 Series",
            slug: "instinct-mi300-series",
            description: "Flagship AI accelerators",
            chipIds: ["amd-mi300x", "amd-mi300a"],
          },
          {
            id: "amd-instinct-mi250",
            name: "Instinct MI250 Series",
            slug: "instinct-mi250-series",
            description: "HPC accelerators",
            chipIds: ["amd-mi250"],
          },
          {
            id: "amd-instinct-mi200",
            name: "Instinct MI200 Series",
            slug: "instinct-mi200-series",
            description: "Previous gen HPC accelerators",
            chipIds: [],
          },
        ],
      },
      {
        id: "amd-radeon-pro",
        name: "AMD Radeon Pro",
        slug: "amd-radeon-pro",
        description:
          "Professional graphics GPUs for workstations and enterprise.",
        icon: "Monitor",
        subcategories: [
          {
            id: "amd-pro-w7000",
            name: "Radeon Pro W7000 Series",
            slug: "radeon-pro-w7000-series",
            description: "Flagship workstation GPUs",
            chipIds: ["amd-w7900"],
          },
          {
            id: "amd-pro-w6000",
            name: "Radeon Pro W6000 Series",
            slug: "radeon-pro-w6000-series",
            description: "Professional workstation GPUs",
            chipIds: [],
          },
        ],
      },
      {
        id: "amd-epyc",
        name: "AMD EPYC Processors",
        slug: "amd-epyc-processors",
        description: "High-performance server CPUs for data centers and cloud.",
        icon: "Cpu",
        subcategories: [
          {
            id: "amd-epyc-9004",
            name: "EPYC 9004 Series",
            slug: "epyc-9004-series",
            description: "Genoa — 4th gen EPYC",
            chipIds: ["amd-epyc-9654"],
          },
          {
            id: "amd-epyc-8004",
            name: "EPYC 8004 Series",
            slug: "epyc-8004-series",
            description: "Siena — Power-efficient EPYC",
            chipIds: [],
          },
        ],
      },
      {
        id: "amd-xilinx",
        name: "AMD Adaptive Computing",
        slug: "amd-adaptive-computing",
        description: "FPGAs and adaptive SoCs for edge AI and acceleration.",
        icon: "Microchip",
        subcategories: [
          {
            id: "amd-xilinx-versal",
            name: "Versal Series",
            slug: "versal-series",
            description: "Adaptive AI platforms",
            chipIds: [],
          },
          {
            id: "amd-xilinx-kria",
            name: "Kria SOMs",
            slug: "kria-soms",
            description: "Edge AI modules",
            chipIds: [],
          },
        ],
      },
      {
        id: "amd-ryzen-pro",
        name: "AMD Ryzen Pro",
        slug: "amd-ryzen-pro",
        description: "Enterprise-grade desktop and mobile processors.",
        icon: "Monitor",
        subcategories: [
          {
            id: "amd-ryzen-pro-7000",
            name: "Ryzen Pro 7000 Series",
            slug: "ryzen-pro-7000-series",
            description: "Enterprise desktop CPUs",
            chipIds: [],
          },
          {
            id: "amd-ryzen-pro-5000",
            name: "Ryzen Pro 5000 Series",
            slug: "ryzen-pro-5000-series",
            description: "Mobile workstation CPUs",
            chipIds: [],
          },
        ],
      },
    ],
    seo: {
      metaTitle: "AMD CPU & GPU Distributor | Servchip",
      metaDescription:
        "Authorized distributor of AMD Instinct accelerators, Radeon Pro GPUs, EPYC processors, and adaptive computing solutions. Global delivery, enterprise support.",
    },
  },
  {
    id: "intel",
    name: "Intel",
    slug: "intel",
    description:
      "Industry-leading CPUs, GPUs, and accelerators for AI, data center, and edge computing.",
    longDescription:
      "Intel powers the world's data centers, AI workloads, and edge computing with Xeon processors, Gaudi AI accelerators, Arc GPUs, and a broad portfolio of programmable solutions. Trusted by enterprises globally.",
    website: "https://www.intel.com",
    founded: "1968",
    headquarters: "Santa Clara, California, USA",
    categories: [
      {
        id: "intel-xeon",
        name: "Intel Xeon Processors",
        slug: "intel-xeon-processors",
        description:
          "Server and workstation CPUs for data centers and enterprise.",
        icon: "Server",
        subcategories: [
          {
            id: "intel-xeon-6",
            name: "Xeon 6 Series",
            slug: "xeon-6-series",
            description: "Latest gen performance cores",
            chipIds: ["intel-xeon-6980p"],
          },
          {
            id: "intel-xeon-5",
            name: "Xeon 5 Series",
            slug: "xeon-5-series",
            description: "Efficient performance cores",
            chipIds: [],
          },
          {
            id: "intel-xeon-4",
            name: "Xeon 4th Gen",
            slug: "xeon-4th-gen",
            description: "Sapphire Rapids",
            chipIds: ["intel-xeon-8490h"],
          },
          {
            id: "intel-xeon-max",
            name: "Xeon Max Series",
            slug: "xeon-max-series",
            description: "With HBM memory",
            chipIds: [],
          },
        ],
      },
      {
        id: "intel-gaudi",
        name: "Intel Gaudi AI",
        slug: "intel-gaudi-ai",
        description: "AI training and inference accelerators.",
        icon: "Brain",
        subcategories: [
          {
            id: "intel-gaudi-3",
            name: "Gaudi 3",
            slug: "gaudi-3",
            description: "Latest gen AI accelerator",
            chipIds: ["intel-gaudi-3"],
          },
          {
            id: "intel-gaudi-2",
            name: "Gaudi 2",
            slug: "gaudi-2",
            description: "AI training and inference",
            chipIds: [],
          },
        ],
      },
      {
        id: "intel-arc",
        name: "Intel Arc GPUs",
        slug: "intel-arc-gpus",
        description: "Professional and consumer graphics solutions.",
        icon: "Monitor",
        subcategories: [
          {
            id: "intel-arc-pro",
            name: "Arc Pro Series",
            slug: "arc-pro-series",
            description: "Professional workstation GPUs",
            chipIds: ["intel-arc-a770"],
          },
          {
            id: "intel-arc-a",
            name: "Arc A Series",
            slug: "arc-a-series",
            description: "Consumer and pro GPUs",
            chipIds: [],
          },
        ],
      },
      {
        id: "intel-agilex",
        name: "Intel FPGAs",
        slug: "intel-fpgas",
        description: "Programmable logic for acceleration and edge AI.",
        icon: "Microchip",
        subcategories: [
          {
            id: "intel-agilex-7",
            name: "Agilex 7",
            slug: "agilex-7",
            description: "High-end FPGAs",
            chipIds: [],
          },
          {
            id: "intel-agilex-5",
            name: "Agilex 5",
            slug: "agilex-5",
            description: "Mid-range FPGAs",
            chipIds: [],
          },
        ],
      },
      {
        id: "intel-ipu",
        name: "Infrastructure Processing",
        slug: "infrastructure-processing",
        description: "IPUs and data center acceleration.",
        icon: "Network",
        subcategories: [
          {
            id: "intel-ipu-mount-evans",
            name: "Mount Evans IPU",
            slug: "mount-evans-ipu",
            description: "Infrastructure processing unit",
            chipIds: [],
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Intel CPU & AI Accelerator Distributor | Servchip",
      metaDescription:
        "Authorized distributor of Intel Xeon processors, Gaudi AI accelerators, Arc GPUs, and FPGA solutions. Global delivery, enterprise support.",
    },
  },
  {
    id: "nokia",
    name: "Nokia",
    slug: "nokia",
    description:
      "Networking, communications, and semiconductor solutions for service providers and enterprises.",
    longDescription:
      "Nokia is a global leader in networking and communications technology. Its semiconductor portfolio includes network processors, FPGAs, and custom ASICs that power the world's most advanced 5G, optical, and IP networks.",
    website: "https://www.nokia.com",
    founded: "1865",
    headquarters: "Espoo, Finland",
    categories: [
      {
        id: "nokia-network-processors",
        name: "Network Processors",
        slug: "network-processors",
        description: "High-performance packet processing and routing silicon.",
        icon: "Network",
        subcategories: [
          {
            id: "nokia-np-fp5",
            name: "FP5 Series",
            slug: "fp5-series",
            description: "Latest gen network processors",
            chipIds: [],
          },
          {
            id: "nokia-np-fp4",
            name: "FP4 Series",
            slug: "fp4-series",
            description: "Previous gen network processors",
            chipIds: [],
          },
        ],
      },
      {
        id: "nokia-optical",
        name: "Optical Semiconductors",
        slug: "optical-semiconductors",
        description: "Optical transport and DSP solutions.",
        icon: "Zap",
        subcategories: [
          {
            id: "nokia-optical-pse",
            name: "PSE Series",
            slug: "pse-series",
            description: "Photonic service engine DSPs",
            chipIds: [],
          },
          {
            id: "nokia-optical-wavelite",
            name: "WaveLite",
            slug: "wavelite",
            description: "Coherent optical DSP",
            chipIds: [],
          },
        ],
      },
      {
        id: "nokia-5g",
        name: "5G Semiconductor",
        slug: "5g-semiconductor",
        description: "5G baseband and radio processing chips.",
        icon: "Radio",
        subcategories: [
          {
            id: "nokia-5g-reach",
            name: "Reach Series",
            slug: "reach-series",
            description: "5G baseband processors",
            chipIds: [],
          },
          {
            id: "nokia-5g-airscale",
            name: "AirScale",
            slug: "airscale",
            description: "5G radio access chips",
            chipIds: [],
          },
        ],
      },
      {
        id: "nokia-iot",
        name: "IoT & Industrial",
        slug: "iot-industrial",
        description: "Chips for industrial IoT and edge connectivity.",
        icon: "Cpu",
        subcategories: [
          {
            id: "nokia-iot-wings",
            name: "WING Series",
            slug: "wing-series",
            description: "IoT connectivity chips",
            chipIds: [],
          },
          {
            id: "nokia-iot-impaas",
            name: "IMPACT",
            slug: "impact",
            description: "Industrial IoT platforms",
            chipIds: [],
          },
        ],
      },
    ],
    seo: {
      metaTitle:
        "Nokia Semiconductor & Network Processor Distributor | Servchip",
      metaDescription:
        "Authorized distributor of Nokia network processors, optical DSPs, 5G semiconductors, and IoT chips. Global delivery, enterprise support.",
    },
  },
];

export const MANUFACTURER_IDS: string[] = MANUFACTURERS.map((m) => m.id);

export function getManufacturer(id: string): Manufacturer | undefined {
  return MANUFACTURERS.find((m) => m.id === id);
}

export function getManufacturerBySlug(slug: string): Manufacturer | undefined {
  return MANUFACTURERS.find((m) => m.slug === slug);
}

export function getAllManufacturerChipIds(): string[] {
  return MANUFACTURERS.flatMap((m) =>
    m.categories.flatMap((c) => c.subcategories.flatMap((s) => s.chipIds)),
  ).filter(Boolean);
}
