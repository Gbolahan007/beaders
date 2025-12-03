import HeroSection from "./components/ui/HeroSection";
import HomeAboutPage from "./components/ui/HomeAboutPage";
import HomeServices from "./components/ui/HomeServices";
import JoinMovementHero from "./components/ui/JoinMovementHero";
import { ServicesPage } from "./components/ui/ServicesPage";
import TestimonialCarousel from "./components/ui/TestimonialCarousel";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HomeAboutPage />
      <ServicesPage />
      <HomeServices />
      <JoinMovementHero />
      <TestimonialCarousel />
    </div>
  );
}
