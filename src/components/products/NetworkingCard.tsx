"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Tilt3D } from "@/components/ui/Tilt3D";
import type { NetworkingProduct } from "@/types";

const statusStyles: Record<NetworkingProduct["status"], { label: string; variant: "green" | "cyan" | "amber" | "purple" | "default" }> = {
  in_stock: { label: "In Stock", variant: "green" },
  on_order: { label: "On Order", variant: "cyan" },
  limited: { label: "Limited", variant: "amber" },
  pre_order: { label: "Pre-Order", variant: "purple" },
  discontinued: { label: "Discontinued", variant: "default" },
};

interface Props {
  net: NetworkingProduct;
  index?: number;
}

export function NetworkingCard({ net, index = 0 }: Props) {
  const status = statusStyles[net.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Tilt3D>
        <div className="bg-surface border border-primary/40 rounded-xl p-5 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <div className="w-full h-36 bg-gradient-to-br from-surface-2 to-bg-dark rounded-lg border border-border mb-4 flex items-center justify-center">
            <Network className="w-16 h-16 text-primary/30" />
          </div>

          <div className="mb-1">
            <Badge variant={status.variant} size="sm">{status.label}</Badge>
          </div>
          <h3 className="text-sm font-bold text-text leading-tight mb-2 line-clamp-1">{net.name}</h3>
          <p className="text-xs text-text-dim mb-3 line-clamp-2">{net.description}</p>

          <div className="space-y-1 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-text-dim">Type</span>
              <span className="text-text-muted font-mono text-[11px]">{net.specs.type}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-text-dim">Speed</span>
              <span className="text-text-muted font-mono text-[11px]">{net.specs.speed}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-text-dim">Ports</span>
              <span className="text-text-muted font-mono text-[11px]">{net.specs.ports}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href={`/products/${net.slug}`} className="flex-1">
              <Button variant="outline" size="sm" fullWidth>Details</Button>
            </Link>
            <Link href={`/rfq?chip=${net.slug}`} className="flex-1">
              <Button variant="solid" size="sm" fullWidth>Get Quote</Button>
            </Link>
          </div>
        </div>
      </Tilt3D>
    </motion.div>
  );
}
