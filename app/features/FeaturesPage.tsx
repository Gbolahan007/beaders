"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import FeaturesGrid from "../components/ui/FeaturesGrid";

gsap.registerPlugin(SplitText);

export default function FeaturesPage() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Split title into chars
      const split = new SplitText(titleRef.current, { type: "words,chars" });
      tl.from(split.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Subtitle animation
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // Features grid stagger animation
      const items = gridRef.current?.querySelectorAll(".feature-item");
      if (items) {
        tl.from(
          items,
          {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#636b2f]">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
        <div className="text-center space-y-8 max-w-5xl">
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
          >
            Platform Features
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light"
          >
            From creation to commerce, we give you everything you need to thrive
            in the bead economy and trade with absolute confidence.
          </p>
        </div>
      </div>

      {/* Pass the ref to the grid wrapper */}
      <div>
        <FeaturesGrid />
      </div>
    </div>
  );
}
