import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title:
    "About Beaders Africa | Empowering Africa’s Bead Creators & Marketplace",
  description:
    "Beaders Africa is Africa’s leading digital bead ecosystem. We connect creators, suppliers, and buyers—empowering bead makers with tools, training, and a vibrant marketplace.",
  keywords: [
    "Beaders Africa",
    "African bead marketplace",
    "Bead making in Africa",
    "Bead suppliers Africa",
    "African craft marketplace",
    "Bead artisans Africa",
  ],
  openGraph: {
    title: "About Beaders Africa",
    description:
      "Learn how Beaders Africa is digitizing Africa’s bead economy—connecting creators, suppliers, and buyers across the continent.",
    url: "https://beadersafrica.com/about",
    siteName: "Beaders Africa",
    images: [
      {
        url: "/logo-1.png",
        width: 1200,
        height: 630,
        alt: "Beaders Africa About Page",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default async function Page() {
  return <AboutPage />;
}
