import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { TrustBar } from "@/components/home/TrustBar";
import { ClientLogos } from "@/components/home/ClientLogos";

const Hero3D = dynamic(
  () => import("@/components/home/Hero3D").then((m) => m.Hero3D),
  {
    ssr: false,
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
const BrandSpotlight = dynamic(
  () =>
    import("@/components/home/BrandSpotlight").then((m) => m.BrandSpotlight),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-gradient-to-b from-bg-dark to-surface">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="h-8 w-48 bg-surface-2 rounded mx-auto" />
          <div className="h-4 w-72 bg-surface-2 rounded mx-auto mb-12" />
        </div>
      </div>
    ),
  },
);
const StatsCounter = dynamic(
  () => import("@/components/home/StatsCounter").then((m) => m.StatsCounter),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 w-24 bg-surface-2 rounded animate-pulse"
            />
          ))}
        </div>
      </div>
    ),
  },
);
const CategoriesGrid = dynamic(
  () =>
    import("@/components/home/CategoriesGrid").then((m) => m.CategoriesGrid),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-bg-body">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-32 bg-surface rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    ),
  },
);
const WorkloadSolutions = dynamic(
  () =>
    import("@/components/home/WorkloadSolutions").then(
      (m) => m.WorkloadSolutions,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="h-8 w-56 bg-surface-2 rounded" />
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 bg-surface-2 rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
);
const ServicesShowcase = dynamic(
  () =>
    import("@/components/home/ServicesShowcase").then(
      (m) => m.ServicesShowcase,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="h-64 bg-surface rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    ),
  },
);
const FeaturedChips = dynamic(
  () => import("@/components/home/FeaturedChips").then((m) => m.FeaturedChips),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 bg-surface-2 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    ),
  },
);
const Technology = dynamic(
  () => import("@/components/home/Technology").then((m) => m.Technology),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-bg-body">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-48 bg-surface rounded-xl animate-pulse" />
        </div>
      </div>
    ),
  },
);
const WhyServchip = dynamic(
  () => import("@/components/home/WhyServchip").then((m) => m.WhyServchip),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-40 bg-surface-2 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    ),
  },
);
const ComparisonPreview = dynamic(
  () =>
    import("@/components/home/ComparisonPreview").then(
      (m) => m.ComparisonPreview,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-64 bg-surface rounded-xl animate-pulse" />
        </div>
      </div>
    ),
  },
);
const HowItWorks = dynamic(
  () => import("@/components/home/HowItWorks").then((m) => m.HowItWorks),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-32 bg-surface-2 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    ),
  },
);
const SuccessStories = dynamic(
  () =>
    import("@/components/home/SuccessStories").then((m) => m.SuccessStories),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-bg-body">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="h-48 bg-surface rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    ),
  },
);
const FAQAccordion = dynamic(
  () => import("@/components/home/FAQAccordion").then((m) => m.FAQAccordion),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-14 bg-surface-2 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    ),
  },
);
const LatestInsights = dynamic(
  () =>
    import("@/components/home/LatestInsights").then((m) => m.LatestInsights),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-surface rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    ),
  },
);
const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((m) => m.FinalCTA),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-bg-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="h-10 w-64 bg-surface-2 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-4 w-96 bg-surface-2 rounded mx-auto animate-pulse" />
        </div>
      </div>
    ),
  },
);

export const metadata: Metadata = {
  title: "Servchip — Enterprise Chip Distributor for AI, HPC & Data Centers",
  description:
    "ISO 9001 certified enterprise chip distributor supplying NVIDIA H100, AMD Instinct MI300X, Intel Xeon & Gaudi 3 accelerators. India's trusted data center GPU distributor for AI infrastructure with global shipping & enterprise support.",
  keywords: [
    "enterprise chip distributor",
    "NVIDIA H100 distributor India",
    "AMD Instinct distributor",
    "data center GPU distributor",
    "AI infrastructure provider",
    "enterprise IT hardware supplier",
    "HPC hardware solutions",
  ],
  alternates: { canonical: "https://servchip.com" },
  openGraph: {
    title: "Servchip — Enterprise Chip Distributor for AI, HPC & Data Centers",
    description:
      "ISO 9001 certified enterprise chip distributor. NVIDIA H100, AMD MI300X, Intel Xeon. India's trusted data center GPU distributor with global shipping.",
    url: "https://servchip.com",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are all chips 100% authentic?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Every chip is sourced directly from manufacturers or authorized distributors. We maintain full chain of custody documentation and each shipment includes a certificate of authenticity. Zero counterfeit policy is enforced across all 27+ manufacturer partnerships.",
                },
              },
              {
                "@type": "Question",
                name: "What brands does Servchip carry?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We carry products from 27+ manufacturers including NVIDIA, AMD, Intel, Broadcom, Marvell, Cisco, Qualcomm, Samsung, SK hynix, Micron, Seagate, Dell, HPE, Supermicro, and Lenovo. Our catalog covers AI accelerators, server CPUs, AI servers, networking, memory & storage.",
                },
              },
              {
                "@type": "Question",
                name: "How fast can Servchip deliver enterprise chips?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard delivery is 3-5 business days for in-stock items. Express shipping is available for urgent needs. We ship to 150+ countries with secure, insured logistics and real-time tracking.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide warranty on all products?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All products come with a minimum 3-year manufacturer warranty. We also offer extended warranty plans and advanced replacement services. Our RMA team handles the entire process for hassle-free support.",
                },
              },
              {
                "@type": "Question",
                name: "Can Servchip help me choose the right chip?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Our engineering team provides free technical consultation to help match the right chip to your workload. We offer architecture reviews, workload benchmarking, and side-by-side comparisons across NVIDIA, AMD, and Intel.",
                },
              },
              {
                "@type": "Question",
                name: "Is Servchip an authorized NVIDIA distributor in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Servchip is an authorized distribution partner for NVIDIA, AMD, Intel, and 27+ manufacturers. We supply authentic data center GPUs including NVIDIA H100, H200, AMD Instinct MI300X, and Intel Gaudi 3 to enterprises across India and globally.",
                },
              },
            ],
          }),
        }}
      />
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
