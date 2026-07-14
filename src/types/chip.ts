export interface ChipProduct {
  id: string;
  name: string;
  slug: string;
  manufacturer: string;
  manufacturerId: string;
  series: string;
  architecture: string;
  categoryId: string;
  parentCategoryId?: string;
  categoryName: string;
  images: string[];
  description: string;
  longDescription: string;
  keyFeatures: string[];
  useCases: string[];
  bestFor: string;
  specifications: {
    memory: string;
    memoryBandwidth: string;
    tensorCores: string;
    cudaCores: string;
    fp8TFLOPS: string;
    fp16TFLOPS: string;
    tf32TFLOPS: string;
    fp64TFLOPS: string;
    interconnect: string;
    tdp: string;
    formFactor: string;
    cooling: string;
    launchDate: string;
    manufacturingProcess: string;
  };
  datasheetUrl?: string;
  status: "in_stock" | "on_order" | "limited" | "pre_order" | "discontinued";
  sortOrder: number;
  isFeatured: boolean;
  isPopular: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ServerProduct {
  id: string;
  name: string;
  slug: string;
  manufacturer: string;
  manufacturerId: string;
  series: string;
  categoryId: string;
  parentCategoryId?: string;
  categoryName: string;
  images: string[];
  description: string;
  longDescription: string;
  keyFeatures: string[];
  useCases: string[];
  bestFor: string;
  formFactor: string;
  gpuSupport: string;
  cpuOptions: string;
  memorySupport: string;
  storageSupport: string;
  networking: string;
  powerSupply: string;
  cooling: string;
  status: "in_stock" | "on_order" | "limited" | "pre_order" | "discontinued";
  sortOrder: number;
  isFeatured: boolean;
  isPopular: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface NetworkingProduct {
  id: string;
  name: string;
  slug: string;
  manufacturer: string;
  manufacturerId: string;
  series: string;
  categoryId: string;
  parentCategoryId?: string;
  categoryName: string;
  images: string[];
  description: string;
  longDescription: string;
  keyFeatures: string[];
  useCases: string[];
  bestFor: string;
  specs: {
    type: string;
    speed: string;
    ports: string;
    formFactor: string;
    management: string;
  };
  status: "in_stock" | "on_order" | "limited" | "pre_order" | "discontinued";
  sortOrder: number;
  isFeatured: boolean;
  isPopular: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface MemoryProduct {
  id: string;
  name: string;
  slug: string;
  manufacturer: string;
  manufacturerId: string;
  series: string;
  categoryId: string;
  parentCategoryId?: string;
  categoryName: string;
  images: string[];
  description: string;
  longDescription: string;
  keyFeatures: string[];
  useCases: string[];
  bestFor: string;
  specs: {
    type: string;
    capacity: string;
    speed: string;
    formFactor: string;
    voltage: string;
    bandwidth: string;
  };
  status: "in_stock" | "on_order" | "limited" | "pre_order" | "discontinued";
  sortOrder: number;
  isFeatured: boolean;
  isPopular: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface StorageProduct {
  id: string;
  name: string;
  slug: string;
  manufacturer: string;
  manufacturerId: string;
  series: string;
  categoryId: string;
  parentCategoryId?: string;
  categoryName: string;
  images: string[];
  description: string;
  longDescription: string;
  keyFeatures: string[];
  useCases: string[];
  bestFor: string;
  specs: {
    type: string;
    capacity: string;
    interface: string;
    formFactor: string;
    readSpeed: string;
    writeSpeed: string;
    endurance: string;
  };
  status: "in_stock" | "on_order" | "limited" | "pre_order" | "discontinued";
  sortOrder: number;
  isFeatured: boolean;
  isPopular: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type ProductType = "chip" | "server" | "networking" | "memory" | "storage";

export type AnyProduct = ChipProduct | ServerProduct | NetworkingProduct | MemoryProduct | StorageProduct;

export type UseCase =
  | "ai-training"
  | "ai-inference"
  | "hpc"
  | "data-analytics"
  | "edge-computing"
  | "healthcare"
  | "autonomous-vehicles"
  | "virtualization"
  | "gaming"
  | "robotics";

export interface UseCaseOption {
  id: UseCase;
  label: string;
  description: string;
  icon: string;
  suggestedChips: string[];
}

export interface ConfigParams {
  budget: "budget" | "mid-range" | "high-end" | "enterprise";
  memoryMin: number;
  performancePriority: "memory" | "compute" | "bandwidth" | "balanced";
  powerConstraint?: number;
  formFactor?: "pcie" | "sxm" | "mcm";
  quantity: number;
  useCase: UseCase;
}
