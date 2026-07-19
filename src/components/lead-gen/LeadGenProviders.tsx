"use client";

import dynamic from "next/dynamic";

const ExitIntentPopup = dynamic(
  () =>
    import("@/components/lead-gen/ExitIntentPopup").then(
      (m) => m.ExitIntentPopup,
    ),
  { ssr: false },
);

const FloatingContactWidget = dynamic(
  () =>
    import("@/components/lead-gen/FloatingContactWidget").then(
      (m) => m.FloatingContactWidget,
    ),
  { ssr: false },
);

export function LeadGenProviders() {
  return (
    <>
      <ExitIntentPopup />
      <FloatingContactWidget />
    </>
  );
}
