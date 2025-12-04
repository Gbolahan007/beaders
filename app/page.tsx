import FeaturesGrid from "./components/ui/FeaturesGrid";
import HeroSection from "./components/ui/HeroSection";
import HomeAboutPage from "./components/ui/HomeAboutPage";
import HomeBeads from "./components/ui/HomeBeads";
import ImpactStats from "./components/ui/ImpactStats";
import JoinMovementHero from "./components/ui/JoinMovementHero";
import { ServicesPage } from "./components/ui/ServicesPage";
import TestimonialCarousel from "./components/ui/TestimonialCarousel";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <HomeAboutPage />
      <ServicesPage />
      <HomeBeads />
      <ImpactStats />
      <JoinMovementHero />
      {/* <FeaturesGrid /> */}
      {/* <TestimonialCarousel /> */}
    </div>
  );
}
