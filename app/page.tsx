import HeroSection from "./components/ui/HeroSection";
import HomeAboutPage from "./components/ui/HomeAboutPage";
import ImpactStats from "./components/ui/ImpactStats";
import JoinMovementHero from "./components/ui/JoinMovementHero";
import { ServicesPage } from "./components/ui/ServicesPage";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <HomeAboutPage />
      <ServicesPage />
      {/* <HomeBeads /> */}
      <ImpactStats />
      <JoinMovementHero />
      {/* <FeaturesGrid /> */}
      {/* <TestimonialCarousel /> */}
    </div>
  );
}
