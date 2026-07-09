"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowRight, Zap, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GAMING_CHIPS } from "@/data/gaming-chips";

const MANUFACTURER_COLORS: Record<string, string> = {
  NVIDIA: "#76B900",
  AMD: "#ED1C24",
  Intel: "#0071C5",
};

export function GamingChips() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setFailedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-bg-dark to-surface">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          label="Gaming"
          title="Next-Gen Gaming GPUs"
          subtitle="From flagship 4K beasts to budget 1080p champions — find your perfect gaming GPU"
          align="center"
        />

        <div className="space-y-16">
          {GAMING_CHIPS.map((chip, index) => {
            const color = MANUFACTURER_COLORS[chip.manufacturer] || "#76B900";
            const isReversed = index % 2 === 1;
            const imgFailed = failedImages.has(chip.id);

            return (
              <motion.div
                key={chip.id}
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
                        src={chip.image}
                        alt={chip.name}
                        onError={() => handleImageError(chip.id)}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${color}22`, color }}
                      >
                        {chip.manufacturer}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-text">
                      {chip.name}
                    </h3>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{ borderColor: color, color }}
                    >
                      {chip.architecture}
                    </span>
                  </div>

                  <p className="text-text-dim text-sm leading-relaxed">
                    {chip.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <SpecItem label="Memory" value={chip.memory} />
                    <SpecItem label="Clock Speed" value={chip.clockSpeed} />
                    <SpecItem label="TDP" value={chip.tdp} />
                    <SpecItem label="Best For" value={chip.bestFor} />
                  </div>

                  <div className="flex items-center pt-4">
                    <Link
                      href={`/products?q=${encodeURIComponent(chip.name.split(" ").slice(0, 2).join(" "))}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: color }}
                    >
                      View Options <ArrowRight className="w-3.5 h-3.5" />
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
            <Zap className="w-4 h-4" />
            Browse All Gaming GPUs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg-dark rounded-xl p-3 border border-border/50">
      <p className="text-[10px] font-mono text-text-dim uppercase tracking-wider">
        {label}
      </p>
      <p className="text-sm font-semibold text-text mt-0.5">{value}</p>
    </div>
  );
}
