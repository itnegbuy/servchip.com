import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "About Servchip — ISO 9001 Certified Enterprise Chip Distributor",
  description:
    "Learn about Servchip, an ISO 9001 certified enterprise chip distributor serving enterprises across India, UAE & 150+ countries. Authorized distribution partner for NVIDIA, AMD, Intel with 27+ manufacturer partnerships.",
  alternates: { canonical: "https://servchip.com/about" },
  openGraph: {
    title: "About Servchip — Enterprise Chip Distributor & Technology Partner",
    description:
      "ISO 9001 certified enterprise chip distributor. 27+ manufacturer partnerships. Serving 500+ enterprises across 150+ countries from India & UAE.",
  },
};

export default function Page() {
  return <PageClient />;
}
