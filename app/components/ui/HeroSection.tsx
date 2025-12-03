import { Sparkles } from "lucide-react";
import Image from "next/image";

const ACCENT_COLOR = "#d9b753";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen md:min-h-0 md:h-[700px] lg:max-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 text-center pt-28 pb-20 sm:pb-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mt-6 text-white shadow-lg animate-fadeIn">
          <Sparkles style={{ color: ACCENT_COLOR }} className="w-4 h-4" />
          <span>Africa&apos;s Premier Bead Marketplace</span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-x6l xl:text-7xl font-black text-white leading-tight animate-fadeInSlow">
          Discover the Art of
          <span className="block mt-1" style={{ color: ACCENT_COLOR }}>
            African Beadwork
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 font-light animate-fadeInSlow">
          Your one-stop marketplace to explore, buy, and celebrate authentic
          bead materials and craftsmanship.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fadeInSlow">
          <button className="bg-white/10 cursor-pointer border border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 w-full sm:w-auto">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
