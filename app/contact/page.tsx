import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Beaders Africa | Reach Africa’s Largest Bead Community",
  description:
    "Get in touch with Beaders Africa — the leading digital bead ecosystem in Africa. Contact us for support, partnerships, training (Beaders Academy), and marketplace inquiries.",
  keywords: [
    "Beaders Africa contact",
    "Contact bead marketplace Africa",
    "Beaders Academy contact",
    "Bead suppliers Africa",
    "African bead community",
  ],
  openGraph: {
    title: "Contact Beaders Africa",
    description:
      "Reach out to Beaders Africa for inquiries about training, marketplace support, partnerships, and bead-making resources across Africa.",
    url: "https://beadersafrica.com/contact",
    siteName: "Beaders Africa",
    images: [
      {
        url: "/logo-1.png",
        width: 1200,
        height: 630,
        alt: "Beaders Africa Contact Page",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default async function Page() {
  return <ContactPage />;
}
