"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Globe, Calendar, MapPin } from "lucide-react";
import { MANUFACTURERS, getManufacturerBySlug } from "@/data/manufacturers";
import { getChipsByManufacturer } from "@/data/chips";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { ChipGrid } from "@/components/chips/ChipGrid";
import { Button } from "@/components/ui/Button";

export default function ManufacturerPage() {
  const params = useParams();
  const slug = params.slug as string;
  const manufacturer = getManufacturerBySlug(slug);
  const chips = getChipsByManufacturer(manufacturer?.id ?? "");

  if (!manufacturer) {
    return (
      <div className="min-h-screen bg-bg-dark pt-[72px] lg:pt-[104px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text mb-2">
            Manufacturer Not Found
          </h1>
          <Link href="/products" className="text-primary hover:underline">
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark">
      <PageHero
        label={manufacturer.name}
        title={`${manufacturer.name} — Enterprise Chip Solutions`}
        subtitle={manufacturer.longDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Manufacturers", href: "/products" },
          { label: manufacturer.name },
        ]}
      />

      {/* Info Section */}
      <section className="py-16 bg-bg-body">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-bg-dark">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-text-dim">Founded</div>
                <div className="text-sm font-semibold text-text">
                  {manufacturer.founded}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-bg-dark">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-text-dim">Headquarters</div>
                <div className="text-sm font-semibold text-text">
                  {manufacturer.headquarters}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-bg-dark">
              <Globe className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-text-dim">Website</div>
                <a
                  href={manufacturer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {manufacturer.website}
                </a>
              </div>
            </div>
          </div>

          <SectionHeading
            label="Categories"
            title={`${manufacturer.name} Product Lines`}
            subtitle={`Browse our complete ${manufacturer.name} portfolio by category`}
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {manufacturer.categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/manufacturers/${manufacturer.slug}/${cat.slug}`}
                  className="block group rounded-2xl border border-border bg-surface p-6 card-hover h-full"
                >
                  <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.slice(0, 4).map((sub) => (
                      <span
                        key={sub.id}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {sub.name}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                    View Products <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Products"
            title={`Available ${manufacturer.name} Chips`}
            subtitle="Browse in-stock and available products"
            align="center"
          />
          <div className="mt-10">
            <ChipGrid chips={chips} />
          </div>
          {chips.length === 0 && (
            <div className="text-center py-12">
              <Cpu className="w-12 h-12 text-text-dim mx-auto mb-4" />
              <p className="text-text-muted">
                No products currently listed. Contact us for availability.
              </p>
              <Link href="/contact">
                <Button variant="solid" size="sm" className="mt-4">
                  Contact Sales
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
