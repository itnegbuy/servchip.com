"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CHIPS } from "@/data/chips";

interface SearchResult {
  title: string;
  slug: string;
  type: "chip" | "category" | "blog";
  subtitle?: string;
}

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (query.length < 2) {
          setResults([]);
          setLoading(false);
          return;
        }
        setLoading(true);
        const q = query.toLowerCase();
        const matched = CHIPS.filter(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            c.series.toLowerCase().includes(q) ||
            c.manufacturer.toLowerCase().includes(q),
        )
          .slice(0, 6)
          .map((c): SearchResult => ({
            title: c.name,
            slug: c.slug,
            type: "chip",
            subtitle: `${c.manufacturer} — ${c.specifications.memory}`,
          }));
        setResults(matched);
        setLoading(false);
      },
      query.length < 2 ? 0 : 300,
    );
    return () => clearTimeout(timer);
  }, [query]);

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
                placeholder="Search chips, categories..."
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
              {results.length === 0 && query.length >= 2 && !loading && (
                <p className="px-4 py-6 text-center text-text-dim text-xs">
                  No results found
                </p>
              )}
              {results.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.type === "blog" ? "blog" : r.type === "category" ? "categories" : "products"}/${r.slug}`}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="block px-4 py-3 hover:bg-bg-dark transition-colors"
                >
                  <div className="text-sm text-text font-medium">{r.title}</div>
                  {r.subtitle && (
                    <div className="text-xs text-text-dim mt-0.5">
                      {r.subtitle}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
