"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, X, Loader2, Cpu, Server, Network, MemoryStick, HardDrive } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchProducts } from "@/data/search";
import type { ProductType } from "@/types";

const TYPE_ICON: Record<ProductType, typeof Cpu> = {
  chip: Cpu,
  server: Server,
  networking: Network,
  memory: MemoryStick,
  storage: HardDrive,
};

const TYPE_LABEL: Record<ProductType, string> = {
  chip: "Chip",
  server: "Server",
  networking: "Networking",
  memory: "Memory",
  storage: "Storage",
};

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const results = searchProducts(debounced).slice(0, 6);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        open
      )
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const loading = query !== debounced && query.length >= 2;

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "p-2 rounded-lg transition-colors",
          open
            ? "text-primary bg-primary/10"
            : "text-text-muted hover:text-text hover:bg-surface",
        )}
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-80 bg-surface border border-border rounded-xl shadow-2xl overflow-hidden z-50"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Search className="w-4 h-4 text-text-dim" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent text-sm text-text placeholder-text-dim outline-none"
              />
              {loading && (
                <Loader2 className="w-3.5 h-3.5 text-text-dim animate-spin" />
              )}
              {query && !loading && (
                <button
                  onClick={() => setQuery("")}
                  className="text-text-dim hover:text-text"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="max-h-72 overflow-y-auto">
              {results.length === 0 && debounced.length >= 2 && !loading && (
                <p className="px-4 py-6 text-center text-text-dim text-xs">
                  No results found
                </p>
              )}
              {results.map(({ product, type }) => {
                const Icon = TYPE_ICON[type];
                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                      setDebounced("");
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-bg-dark transition-colors"
                  >
                    <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm text-text font-medium truncate">
                          {product.name}
                        </span>
                        <span className={cn(
                          "shrink-0 text-[8px] font-bold uppercase tracking-wider px-1 py-0.5 rounded",
                          "bg-primary/15 text-primary"
                        )}>
                          {TYPE_LABEL[type]}
                        </span>
                      </div>
                      <div className="text-xs text-text-dim mt-0.5 truncate">
                        {product.manufacturer}
                      </div>
                    </div>
                  </Link>
                );
              })}
              {results.length > 0 && (
                <Link
                  href={`/products?q=${encodeURIComponent(debounced)}`}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                    setDebounced("");
                  }}
                  className="block px-4 py-2.5 text-xs text-center text-primary hover:bg-bg-dark transition-colors border-t border-border"
                >
                  View all results
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
