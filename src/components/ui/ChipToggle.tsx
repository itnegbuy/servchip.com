"use client";

import { useState, useEffect } from "react";

export function ChipToggle() {
  const [show3d, setShow3d] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("servchip-show3d");
    if (stored !== null) {
      setShow3d(stored === "true");
    }
  }, []);

  const toggle = () => {
    const next = !show3d;
    setShow3d(next);
    localStorage.setItem("servchip-show3d", String(next));
    window.dispatchEvent(new Event("servchip-3d-toggle"));
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 border ${
        show3d
          ? "bg-primary/10 text-primary border-primary/30 shadow-[0_0_10px_rgba(118,255,3,0.15)]"
          : "text-text-muted hover:text-text hover:bg-primary/[0.04] border-border/50"
      }`}
      aria-label={show3d ? "Hide 3D Chip" : "Show 3D Chip"}
      title={show3d ? "Hide 3D Chip" : "Show 3D Chip"}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {show3d ? (
          <>
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" />
          </>
        ) : (
          <>
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <line x1="9" y1="2" x2="9" y2="6" />
            <line x1="15" y1="2" x2="15" y2="6" />
            <line x1="9" y1="18" x2="9" y2="22" />
            <line x1="15" y1="18" x2="15" y2="22" />
            <line x1="2" y1="9" x2="6" y2="9" />
            <line x1="18" y1="9" x2="22" y2="9" />
            <line x1="2" y1="15" x2="6" y2="15" />
            <line x1="18" y1="15" x2="22" y2="15" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </>
        )}
      </svg>
    </button>
  );
}
