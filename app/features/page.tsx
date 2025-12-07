import type { Metadata } from "next";
import FeaturesPage from "./FeaturesPage";

export const metadata: Metadata = {
  title:
    "Platform Features | Beaders Africa – Empowering Africa’s Bead Economy",
  description:
    "Discover Beaders Africa’s powerful features: marketplace for buying & selling, material sourcing for creators, and a thriving bead-making community across Africa.",
  keywords: [
    "Beaders Africa features",
    "African bead marketplace",
    "Buy and sell beads online Africa",
    "Bead material suppliers Africa",
    "Bead making community Africa",
    "Bead sourcing platform",
  ],
  openGraph: {
    title: "Beaders Africa – Platform Features",
    description:
      "Explore the core features of Beaders Africa: a digital marketplace, materials sourcing hub, and creative community for artisans across Africa.",
    url: "https://beadersafrica.com/features",
    siteName: "Beaders Africa",
    images: [
      {
        url: "/logo-1.png",
        width: 1200,
        height: 630,
        alt: "Beaders Africa Features Page",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default async function Page() {
  return <FeaturesPage />;
}
