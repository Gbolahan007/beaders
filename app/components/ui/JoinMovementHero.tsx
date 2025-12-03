"use client";

import { useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

export default function JoinMovementHero() {
  const PRIMARY_COLOR = "#636b2f";
  const ACCENT_COLOR = "#d9b753";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: PRIMARY_COLOR, animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-all duration-300"
          style={{
            backgroundColor: `${ACCENT_COLOR}15`,
            color: ACCENT_COLOR,
            border: `1px solid ${ACCENT_COLOR}40`,
          }}
        >
          <Sparkles className="w-4 h-4" />
          Limited Founding Members
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Join the
          <span
            className="block mt-2 bg-linear-to-r from-yellow-400 via-yellow-300 to-amber-300 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${ACCENT_COLOR}, #ffd700, ${ACCENT_COLOR})`,
            }}
          >
            Movement
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Be part of the first 1,000 members to access exclusive drops and early
          features.
          <span className="block mt-2 text-base">
            The revolution is handmade.
          </span>
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative px-8 sm:px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-2xl hover:scale-105"
            style={{
              backgroundColor: ACCENT_COLOR,
              color: "#1a1a1a",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Early Access
              <ChevronRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </span>
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: `linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)`,
                transform: isHovered ? "translateX(0)" : "translateX(-100%)",
              }}
            />
          </button>

          <button
            className="px-8 sm:px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 group hover:scale-105"
            style={{
              borderColor: `${ACCENT_COLOR}60`,
              color: "white",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-6">
            TRUSTED BY ARTISANS WORLDWIDE
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-gray-400">Active Members</p>
            </div>
            <div className="w-px h-12 bg-gray-700 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">10K+</p>
              <p className="text-sm text-gray-400">Beads Used</p>
            </div>
            <div className="w-px h-12 bg-gray-700 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">48H</p>
              <p className="text-sm text-gray-400">Delivery Worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 w-16 h-16 border border-gray-800 rounded-lg opacity-30 animate-float" />
      <div className="absolute top-1/4 right-12 w-12 h-12 border border-gray-800 rounded-full opacity-20 animate-bounce" />
    </section>
  );
}
