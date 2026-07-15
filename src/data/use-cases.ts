import type { UseCaseOption } from "@/types";

export const USE_CASES: UseCaseOption[] = [
  {
    id: "ai-training",
    label: "AI Training",
    description:
      "Large-scale AI model training with GPU clusters and AI accelerators",
    icon: "Brain",
    suggestedChips: [
      "nvidia-h100",
      "nvidia-h200",
      "nvidia-b200",
      "amd-mi300x",
      "intel-gaudi-3",
    ],
  },
  {
    id: "ai-inference",
    label: "AI Inference",
    description: "Real-time AI inference and serving at scale",
    icon: "Zap",
    suggestedChips: [
      "nvidia-h200",
      "nvidia-l40s",
      "amd-mi300x",
      "intel-gaudi-3",
      "intel-xeon-8490h",
    ],
  },
  {
    id: "hpc",
    label: "HPC",
    description:
      "High-performance computing for scientific simulations and research",
    icon: "Server",
    suggestedChips: [
      "nvidia-h100",
      "nvidia-gh200",
      "amd-mi300a",
      "amd-mi250",
      "intel-xeon-6980p",
      "amd-epyc-9654",
    ],
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    description: "Big data processing, analytics, and business intelligence",
    icon: "BarChart3",
    suggestedChips: ["nvidia-h100", "amd-epyc-9654", "intel-xeon-8490h"],
  },
  {
    id: "edge-computing",
    label: "Edge Computing",
    description:
      "Edge AI inference and local processing for IoT and industrial applications",
    icon: "Radio",
    suggestedChips: ["nvidia-rtx5000"],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    description: "Medical imaging, drug discovery, and healthcare AI",
    icon: "HeartPulse",
    suggestedChips: ["nvidia-rtx6000", "nvidia-rtx5000", "amd-w7900"],
  },
  {
    id: "autonomous-vehicles",
    label: "Autonomous Vehicles",
    description: "Self-driving car computing platforms and ADAS systems",
    icon: "Car",
    suggestedChips: [],
  },
  {
    id: "virtualization",
    label: "Virtualization",
    description: "Virtual desktop infrastructure and GPU virtualization",
    icon: "Monitor",
    suggestedChips: [
      "nvidia-rtx6000",
      "nvidia-l40s",
      "amd-w7900",
      "intel-arc-a770",
    ],
  },
  {
    id: "gaming",
    label: "Gaming",
    description: "Consumer and professional gaming GPU solutions",
    icon: "Gamepad2",
    suggestedChips: [],
  },
  {
    id: "robotics",
    label: "Robotics",
    description: "Autonomous robotics and intelligent machine control",
    icon: "Bot",
    suggestedChips: [],
  },
];
