import type { Metadata } from "next";
import WaitlistPage from "./WaitlistPage";

export const metadata: Metadata = {
  title: "Join the Waitlist | Beaders Africa",
  description:
    "Join the Beaders Africa waitlist and be among the first to access Africa’s largest digital marketplace for bead makers, suppliers, and lovers of African craftsmanship.",
  keywords: [
    "Beaders Africa waitlist",
    "Join bead marketplace Africa",
    "Bead makers community",
    "African bead economy",
    "Bead making platform",
    "Bead suppliers Africa",
    "Early access bead platform",
  ],
  openGraph: {
    title: "Join the Beaders Africa Waitlist",
    description:
      "Be the first to access Africa’s bead marketplace, materials hub, and creator community. Secure your spot today.",
    url: "https://beadersafrica.com/waitlist",
    siteName: "Beaders Africa",
    images: [
      {
        url: "/logo-1.png",
        width: 1200,
        height: 630,
        alt: "Beaders Africa Waitlist Page",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default async function Page() {
  return <WaitlistPage />;
}
