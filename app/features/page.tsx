import React from "react";
import FeaturesGrid from "../components/ui/FeaturesGrid";

export default function PlatformFeatures() {
  return (
    <div className="bg-[#636b2f]">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
        <div className="text-center space-y-8 max-w-5xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            Platform Features
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
            Everything you need to thrive in the bead economy.
          </p>
        </div>
      </div>
      <FeaturesGrid />
    </div>
  );
}
