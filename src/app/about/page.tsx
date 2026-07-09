import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "About Servchip — Enterprise Chip Distributor & Technology Partner",
  description:
    "Learn about Servchip, an authorized enterprise chip distributor serving enterprises worldwide. Certified quality, global logistics, and deep technical expertise across NVIDIA, AMD, Intel, Nokia and more.",
  alternates: { canonical: "https://servchip.com/about" },
};

export default function Page() {
  return <PageClient />;
}
