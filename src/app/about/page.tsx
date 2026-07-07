import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "About Servchip — Authorized NVIDIA Distributor & Technology Partner",
  description: "Learn about Servchip, an authorized NVIDIA distributor serving enterprises worldwide. Certified quality, global logistics, and deep technical expertise in AI and HPC infrastructure.",
  alternates: { canonical: "https://servchip.com/about" },
};

export default function Page() {
  return <PageClient />;
}
