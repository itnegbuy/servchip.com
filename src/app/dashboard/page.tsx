import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Account Dashboard — Servchip Enterprise Portal",
  description: "Manage your Servchip account, track orders, view quotes, and access your enterprise dashboard for NVIDIA chip procurement.",
  alternates: { canonical: "https://servchip.com/dashboard" },
};

export default function Page() {
  return <PageClient />;
}
