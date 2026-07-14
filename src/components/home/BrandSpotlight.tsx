"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowRight, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CHIPS } from "@/data/chips";
import { MANUFACTURER_COLORS } from "@/data/manufacturer-colors";

// Group chips by manufacturer for the showcase
const ENTERPRISE_ROWS = [
  {
    manufacturer: "NVIDIA",
    chips: ["nvidia-h100", "nvidia-h200", "nvidia-b200", "nvidia-gb200"],
    image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&q=80",
    desc: "Enterprise AI training and inference GPUs powering the world's largest AI clusters.",
    badge: "Data Center GPUs",
  },
  {
    manufacturer: "AMD",
    chips: ["amd-mi300x", "amd-mi325x", "amd-mi350x"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    desc: "High-performance Instinct accelerators for AI training, HPC, and scientific computing.",
    badge: "Instinct Accelerators",
  },
  {
    manufacturer: "Intel",
    chips: ["intel-gaudi-3", "intel-xeon-6980p", "intel-xeon-8490h"],
    image: "https://images.unsplash.com/photo-1555618561-5b0e7a3f7b9a?w=600&q=80",
    desc: "Gaudi AI accelerators and Xeon processors for enterprise AI and data center workloads.",
    badge: "AI & Xeon",
  },
];

export function BrandSpotlight() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setFailedImages((prev) => new Set(prev).add(id));
  };

  const getChipsForRow = (chipIds: string[]) => {
    return chipIds.map((id) => CHIPS.find((c) => c.id === id)).filter(Boolean);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-bg-dark to-surface">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          label="Products"
          title="Top Enterprise Products"
          subtitle="Our most in-demand enterprise chips — handpicked for AI, HPC, and data center workloads"
          align="center"
        />

        <div className="space-y-16">
          {ENTERPRISE_ROWS.map((row, index) => {
            const color = MANUFACTURER_COLORS[row.manufacturer] || "#76B900";
            const isReversed = index % 2 === 1;
            const imgFailed = failedImages.has(row.manufacturer);
            const rowChips = getChipsForRow(row.chips);

            return (
              <motion.div
                key={row.manufacturer}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
              >
                {/* Image with zigzag mask */}
                <div className="w-full lg:w-1/2 relative group cursor-pointer">
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      clipPath: isReversed
                        ? "polygon(0 0, 100% 0, calc(100% - 40px) 100%, 0 100%)"
                        : "polygon(40px 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                  >
                    {imgFailed ? (
                      <div className="w-full h-[300px] bg-gradient-to-br from-bg-dark to-surface-2 flex items-center justify-center">
                        <Cpu className="w-16 h-16 text-primary/30" />
                      </div>
                    ) : (
                      <img
                        src={row.image}
                        alt={row.manufacturer}
                        onError={() => handleImageError(row.manufacturer)}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${color}22`, color }}
                      >
                        {row.manufacturer}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-text">
                      {row.manufacturer} {row.badge}
                    </h3>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{ borderColor: color, color }}
                    >
                      {row.chips.length} Products
                    </span>
                  </div>

                  <p className="text-text-dim text-sm leading-relaxed">
                    {row.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    {rowChips.map((chip) =>
                      chip ? (
                        <div
                          key={chip.id}
                          className="flex items-center justify-between bg-bg-dark rounded-xl p-3 border border-border/50"
                        >
                          <div>
                            <p className="text-sm font-semibold text-text">
                              {chip.name}
                            </p>
                            <p className="text-[11px] font-mono text-text-dim mt-0.5">
                              {chip.specifications.memory} · {chip.specifications.memoryBandwidth} · {chip.specifications.tdp}
                            </p>
                          </div>
                          <Link
                            href={`/products/${chip.slug}`}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:scale-105 shrink-0"
                            style={{ backgroundColor: `${color}22`, color }}
                          >
                            Details
                          </Link>
                        </div>
                      ) : null,
                    )}
                  </div>

                  <div className="flex items-center pt-2">
                    <Link
                      href={`/manufacturers/${row.manufacturer.toLowerCase()}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: color }}
                    >
                      View All {row.manufacturer} Products{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary/20 transition-all"
          >
            <Cpu className="w-4 h-4" />
            Browse All Enterprise Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
