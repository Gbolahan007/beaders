import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import "./globals.css";
import SEO from "./components/ui/SEO";

// Google Fonts
const lato = Oswald({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for Beaders Africa
export const metadata: Metadata = {
  title: "Beaders Africa – Africa’s First Bead Marketplace",
  description:
    "Explore handcrafted jewelry, find trusted bead makers, shop bead materials, trade-in old pieces, and learn bead making—all in one seamless platform.",
  keywords: [
    "Beaders Africa",
    "bead makers",
    "bead suppliers",
    "bead marketplace",
    "African artisans",
    "craft materials",
  ],
  authors: [{ name: "Beaders Africa", url: "https://beadersafrica.com" }],
  openGraph: {
    title: "Beaders Africa – Africa’s First Bead Marketplace",
    description:
      "Connect with thousands of bead makers and suppliers in Africa. Explore materials, tools, and scale your bead business effortlessly.",
    url: "https://beadersafrica.com",
    siteName: "Beaders Africa",
    images: [
      {
        url: "/logo-1.png",
        width: 1200,
        height: 630,
        alt: "Beaders Africa Marketplace",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beaders Africa – Africa’s First Bead Marketplace",
    description:
      "Connect with thousands of bead makers and suppliers in Africa. Explore materials, tools, and scale your bead business effortlessly.",
    images: ["https://beaders.africa/og-image.png"],
    creator: "@beadersafrica",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SEO />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${lato.className} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
