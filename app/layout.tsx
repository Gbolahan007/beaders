import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Beaders Africa – Marketplace for Bead Makers & Suppliers",
  description:
    "Join Africa's largest community of bead makers and suppliers. Discover unique bead materials, tools, and connect with artisans across Africa.",
  keywords: [
    "Beaders Africa",
    "bead makers",
    "bead suppliers",
    "bead marketplace",
    "African artisans",
    "craft materials",
  ],
  authors: [{ name: "Beaders Africa", url: "https://beaders.africa" }],
  openGraph: {
    title: "Beaders Africa – Marketplace for Bead Makers & Suppliers",
    description:
      "Connect with thousands of bead makers and suppliers in Africa. Explore materials, tools, and scale your bead business effortlessly.",
    url: "https://beaders.africa",
    siteName: "Beaders Africa",
    images: [
      {
        url: "https://beaders.africa/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beaders Africa Marketplace",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beaders Africa – Marketplace for Bead Makers & Suppliers",
    description:
      "Connect with thousands of bead makers and suppliers in Africa. Explore materials, tools, and scale your bead business effortlessly.",
    images: ["https://beaders.africa/og-image.png"],
    creator: "@beadersafrica",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
