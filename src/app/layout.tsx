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
  metadataBase: new URL("https://servchip.com"),
  title: {
    template: "%s | Servchip — Enterprise Chip Distributor",
    default:
      "Servchip — Enterprise Chip Distributor for AI, HPC & Data Centers | NVIDIA H100, AMD MI300X, Intel Xeon",
  },
  description:
    "ISO 9001 certified enterprise chip distributor supplying NVIDIA H100, AMD Instinct MI300X, Intel Xeon & Gaudi 3 accelerators. India's trusted data center GPU distributor for AI infrastructure with global shipping.",
  keywords: [
    "enterprise chip distributor",
    "NVIDIA H100 distributor India",
    "AMD Instinct distributor",
    "data center GPU distributor",
    "AI infrastructure provider",
    "enterprise IT hardware supplier",
    "HPC hardware solutions",
    "server components wholesale",
    "enterprise AI hardware India",
    "data center solutions provider",
    "high-performance computing hardware",
    "NVIDIA distributor",
    "AMD distributor",
    "Intel distributor",
    "AI accelerators",
    "data center GPUs",
    "server processors",
    "enterprise GPU",
    "ISO 9001 certified IT distributor",
  ],
  authors: [{ name: "Servchip Inc." }],
  creator: "Servchip Inc.",
  publisher: "Servchip Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://servchip.com",
    siteName: "Servchip",
    title: "Servchip — Enterprise Chip Distributor for AI, HPC & Data Centers",
    description:
      "ISO 9001 certified enterprise chip distributor supplying NVIDIA H100, AMD Instinct MI300X, Intel Xeon & Gaudi 3. India's trusted data center GPU distributor with global shipping.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servchip — Enterprise Chip Distributor for AI, HPC & Data Centers",
    description:
      "ISO 9001 certified enterprise chip distributor. NVIDIA H100, AMD MI300X, Intel Xeon. India's trusted data center GPU distributor.",
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
                "ISO 9001 certified enterprise chip distributor supplying NVIDIA H100, AMD Instinct MI300X, Intel Xeon & Gaudi 3 accelerators. Authorized distribution partner for AI, HPC & data center hardware.",
              foundingDate: "2018",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 7982498712",
                contactType: "sales",
                email: "sales@servchip.com",
                availableLanguage: ["English"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "New Delhi",
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
