"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "servchip-exit-intent-closed";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const shouldShow = useCallback(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(STORAGE_KEY);
  }, []);

  useEffect(() => {
    if (!shouldShow()) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      let hasScrolled = false;
      const handleScroll = () => {
        if (hasScrolled) return;
        if (window.scrollY > 400) {
          hasScrolled = true;
          setTimeout(() => {
            if (shouldShow()) setIsOpen(true);
          }, 30000);
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && shouldShow()) {
        setIsOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [shouldShow]);

  const close = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("[LeadGen] Exit intent email captured:", email);
        setStatus("success");
        setMessage(data.message || "You're in! Check your inbox.");
        setEmail("");
        localStorage.setItem(STORAGE_KEY, "1");
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setStatus("error");
        setMessage(data.error?.message || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-dark/80 backdrop-blur-xl p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-surface border border-border rounded-2xl p-8 shadow-2xl"
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-text-muted hover:text-text hover:border-primary/40 transition-transform duration-200"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Exclusive Offer
              </span>
            </div>

            <h2 className="text-xl font-bold text-text mb-2">
              Get Exclusive AI Chip Pricing & Market Intelligence
            </h2>
            <p className="text-sm text-text-muted mb-6 leading-relaxed">
              Join 2,000+ AI infrastructure leaders who get weekly GPU market
              updates, exclusive pricing, and deployment guides.
            </p>

            {status === "success" ? (
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                <p className="text-primary font-semibold">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your work email"
                  required
                  className="w-full px-4 py-3 bg-bg-dark border border-border rounded-xl text-text placeholder:text-text-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-transform duration-200"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-primary text-bg-dark font-semibold rounded-xl hover:bg-primary-dark neon-glow hover:scale-[1.02] transition-transform duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <span className="w-4 h-4 border-2 border-bg-dark/30 border-t-bg-dark rounded-full animate-spin" />
                  ) : (
                    <>
                      Get Free Access
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-xs text-error">{message}</p>
                )}
                <p className="text-xs text-text-dim text-center">
                  No spam, unsubscribe anytime
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
