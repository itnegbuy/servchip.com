import type { Metadata } from "next";
import { Hero3D } from "@/components/home/Hero3D";
import { TrustBar } from "@/components/home/TrustBar";
import { QuickLinks } from "@/components/home/QuickLinks";
import { GamingChips } from "@/components/home/GamingChips";
import { StatsCounter } from "@/components/home/StatsCounter";
import { FeaturedChips } from "@/components/home/FeaturedChips";
import { Technology } from "@/components/home/Technology";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { WhyServchip } from "@/components/home/WhyServchip";
import { ComparisonPreview } from "@/components/home/ComparisonPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SuccessStories } from "@/components/home/SuccessStories";
import { LatestInsights } from "@/components/home/LatestInsights";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Servchip — Enterprise Chip Distributor for AI, HPC & Data Centers",
  description:
    "Premium distributor of authentic enterprise chips from NVIDIA, AMD, Intel, Nokia and more. H100, MI300X, Xeon, Gaudi 3, AI accelerators, server processors, networking solutions. Global delivery with certified support.",
  alternates: { canonical: "https://servchip.com" },
  openGraph: {
    title: "Servchip — Enterprise Chip Distributor for AI, HPC & Data Centers",
    description:
      "Premium distributor of authentic enterprise chips from NVIDIA, AMD, Intel, Nokia and more. Global delivery, enterprise support.",
    url: "https://servchip.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero3D />
      <TrustBar />
      <QuickLinks />
      <GamingChips />
      <StatsCounter />
      <FeaturedChips />
      <Technology />
      <CategoriesGrid />
      <WhyServchip />
      <ComparisonPreview />
      <HowItWorks />
      <SuccessStories />
      <LatestInsights />
      <FinalCTA />
    </>
  );
}
