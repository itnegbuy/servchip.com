"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(
  () => import("@/components/home/Hero3D").then((m) => m.Hero3D),
  {
    loading: () => (
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#070B15" }}
      >
        <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </section>
    ),
  },
);
const TrustBar = dynamic(() =>
  import("@/components/home/TrustBar").then((m) => m.TrustBar),
);
const BrandSpotlight = dynamic(() =>
  import("@/components/home/BrandSpotlight").then((m) => m.BrandSpotlight),
);
const StatsCounter = dynamic(() =>
  import("@/components/home/StatsCounter").then((m) => m.StatsCounter),
);
const ClientLogos = dynamic(() =>
  import("@/components/home/ClientLogos").then((m) => m.ClientLogos),
);
const CategoriesGrid = dynamic(() =>
  import("@/components/home/CategoriesGrid").then((m) => m.CategoriesGrid),
);
const WorkloadSolutions = dynamic(() =>
  import("@/components/home/WorkloadSolutions").then(
    (m) => m.WorkloadSolutions,
  ),
);
const ServicesShowcase = dynamic(() =>
  import("@/components/home/ServicesShowcase").then((m) => m.ServicesShowcase),
);
const FeaturedChips = dynamic(() =>
  import("@/components/home/FeaturedChips").then((m) => m.FeaturedChips),
);
const Technology = dynamic(() =>
  import("@/components/home/Technology").then((m) => m.Technology),
);
const WhyServchip = dynamic(() =>
  import("@/components/home/WhyServchip").then((m) => m.WhyServchip),
);
const ComparisonPreview = dynamic(() =>
  import("@/components/home/ComparisonPreview").then(
    (m) => m.ComparisonPreview,
  ),
);
const HowItWorks = dynamic(() =>
  import("@/components/home/HowItWorks").then((m) => m.HowItWorks),
);
const SuccessStories = dynamic(() =>
  import("@/components/home/SuccessStories").then((m) => m.SuccessStories),
);
const FAQAccordion = dynamic(() =>
  import("@/components/home/FAQAccordion").then((m) => m.FAQAccordion),
);
const LatestInsights = dynamic(() =>
  import("@/components/home/LatestInsights").then((m) => m.LatestInsights),
);
const FinalCTA = dynamic(() =>
  import("@/components/home/FinalCTA").then((m) => m.FinalCTA),
);

export function HomeSections() {
  return (
    <>
      <Hero3D />
      <TrustBar />
      <BrandSpotlight />
      <StatsCounter />
      <ClientLogos />
      <CategoriesGrid />
      <WorkloadSolutions />
      <ServicesShowcase />
      <FeaturedChips />
      <Technology />
      <WhyServchip />
      <ComparisonPreview />
      <HowItWorks />
      <SuccessStories />
      <FAQAccordion />
      <LatestInsights />
      <FinalCTA />
    </>
  );
}
