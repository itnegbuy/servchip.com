import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";

import { QueryProvider } from "@/providers/QueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ColorProvider } from "@/providers/ColorProvider";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const baseUrl = "https://servchip.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Servchip — Enterprise Chip Distributor",
    default:
      "Servchip — Enterprise Chip Distributor & Technology Partner for AI, HPC & Data Centers",
  },
  description:
    "Premium distributor of authentic chips — NVIDIA, AMD, Intel, Nokia & more. H100, MI300X, Xeon, Gaudi 3, AI accelerators, networking & more. Global delivery, enterprise support.",
  keywords: [
    "chip distributor",
    "NVIDIA distributor",
    "AMD distributor",
    "Intel distributor",
    "Nokia semiconductor",
    "AI chips",
    "H100",
    "MI300X",
    "Xeon",
    "Gaudi 3",
    "AI GPUs",
    "data center GPUs",
    "GPU distributor",
    "enterprise GPU",
    "AI hardware",
    "server processors",
    "FPGA distributor",
    "network processors",
  ],
  authors: [{ name: "Servchip Inc." }],
  creator: "Servchip Inc.",
  publisher: "Servchip Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Servchip",
    title: "Servchip — Enterprise Chip Distributor for AI, HPC & Data Centers",
    description:
      "Premium distributor of authentic chips from NVIDIA, AMD, Intel, Nokia & more. Global delivery, enterprise support.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servchip — Enterprise Chip Distributor",
    description:
      "Premium distributor of authentic chips from NVIDIA, AMD, Intel, Nokia & more. Global delivery, enterprise support.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Servchip Inc.",
              url: "https://servchip.com",
              logo: "https://servchip.com/favicon.svg",
              description:
                "Authorized distributor of authentic enterprise chips from NVIDIA, AMD, Intel, Nokia and other leading manufacturers. AI GPUs, server CPUs, FPGAs, and networking solutions.",
              foundingDate: "2018",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 7982498712",
                contactType: "sales",
                email: "sales@servchip.com",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/servchip",
                "https://twitter.com/servchip",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Servchip",
              url: "https://servchip.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://servchip.com/products?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('servchip-theme');
                  if (t === 'dark') document.documentElement.classList.add('dark');
                  else document.documentElement.classList.remove('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg-body text-text antialiased`}
      >
        <ThemeProvider>
          <ColorProvider>
            <QueryProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </QueryProvider>
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
