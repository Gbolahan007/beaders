"use client";

import { ChevronRight, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JoinMovementHero() {
  const PRIMARY_COLOR = "#636b2f";
  const ACCENT_COLOR = "#d9b753";
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(badgeRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        headingRef.current,
        { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
        "+=0.2"
      )
      .from(
        subtitleRef.current,
        { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
        "+=0.2"
      )
      .from(
        buttonsRef.current,
        { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
        "+=0.2"
      );

    // Continuous subtle float animation for blobs
    if (blob1Ref.current) {
      gsap.to(blob1Ref.current, {
        y: "-=20",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });
    }
    if (blob2Ref.current) {
      gsap.to(blob2Ref.current, {
        y: "+=20",
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden flex items-center justify-center py-10 sm:py-12"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div
          ref={blob1Ref}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: PRIMARY_COLOR }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
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
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Join the
          <span
            className="block mt-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${ACCENT_COLOR}, #ffd700, ${ACCENT_COLOR})`,
            }}
          >
            Movement
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Be part of the first 1,000 members to access exclusive drops and early
          features.
          <span className="block mt-2 text-sm sm:text-base">
            The revolution is handmade.
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
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
              className={`absolute inset-0 transition-all duration-300`}
              style={{
                background: `linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)`,
                opacity: isHovered ? 1 : 0,
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
