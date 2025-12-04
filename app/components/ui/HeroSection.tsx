import Image from "next/image";

const PRIMARY_COLOR = "#636b2f"; // Main brand color
const ACCENT_COLOR = "#d9b753"; // Secondary brand color

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen md:min-h-0 md:h-[750px] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Mobile Image */}
        <Image
          src="/hero-3.WEBP"
          alt="Hero background mobile"
          fill
          priority
          className="object-cover block md:hidden"
        />

        {/* Desktop Image */}
        <Image
          src="/hero-3.WEBP"
          alt="Hero background desktop"
          fill
          priority
          className="object-cover object-center hidden md:block"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-10 text-center pb-16 sm:pb-28">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-lgs sm:text-sm text-white font-medium shadow-xl">
          <Sparkles style={{ color: ACCENT_COLOR }} className="w-4 h-4" />
          <span>The Premier Global Bead Marketplace</span>
        </div> */}

        <h1 className="mt-5 text-6xl sm:text-9xl  font-extrabold text-white leading-tight sm:leading-none">
          Africa<span className="text-[#636b2f]">’s</span> First Bead Market{" "}
          <span className="text-[#636b2f]">place</span>
          <span
            className={`  block mt-2 sm:mt-3 text-xl sm:text-3xl font-black`}
            style={{ color: ACCENT_COLOR }}
          >
            Connecting bead makers, lovers, and suppliers in a bold new digital
            ecosystem. The future of African craftsmanship is here.
          </span>
        </h1>

        <div className="mt-20 flex flex-col sm:flex-row gap-5 justify-center">
          <button
            style={{ backgroundColor: PRIMARY_COLOR }}
            className="cursor-pointer text-white px-10 py-4 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 hover:opacity-90 hover:scale-[1.02] w-full sm:w-auto min-w-[200px] shadow-lg"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
