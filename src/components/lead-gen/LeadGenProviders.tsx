"use client";

import dynamic from "next/dynamic";

const ExitIntentPopup = dynamic(
  () =>
    import("@/components/lead-gen/ExitIntentPopup").then(
      (m) => m.ExitIntentPopup,
    ),
  { ssr: false },
);

const StickyBottomCTA = dynamic(
  () =>
    import("@/components/lead-gen/StickyBottomCTA").then(
      (m) => m.StickyBottomCTA,
    ),
  { ssr: false },
);

export function LeadGenProviders() {
  return (
    <>
      <ExitIntentPopup />
      <StickyBottomCTA />
    </>
  );
}
