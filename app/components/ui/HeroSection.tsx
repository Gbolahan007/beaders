"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRouter } from "next/navigation";

gsap.registerPlugin(SplitText);

const PRIMARY_COLOR = "#636b2f";
const ACCENT_COLOR = "#d9b753";

const HeroSection = () => {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating orbs
      gsap.to(orb1Ref.current, {
        x: 50,
        y: -50,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: -50,
        y: 50,
        scale: 1.1,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline();

      // SplitText for title
      const split = new SplitText(titleRef.current, { type: "words,chars" });
      tl.from(split.chars, {
        opacity: 0,
        y: 100,
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
          y: 50,
          scale: 0.8,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8" // overlap with title
      );

      // Button animation
      tl.from(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Button hover animation
      const button = buttonRef.current;
      if (button) {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            boxShadow: `0 20px 40px ${PRIMARY_COLOR}80`,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            boxShadow: `0 10px 20px rgba(0,0,0,0.3)`,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen md:h-[750px] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-3.webp"
          alt="Hero background mobile"
          fill
          priority
          className="object-cover block md:hidden"
        />
        <Image
          src="/hero-3.webp"
          alt="Hero background desktop"
          fill
          priority
          className="object-cover object-center hidden md:block"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating Orbs */}
      <div
        ref={orb1Ref}
        className="absolute w-40 h-40 bg-yellow-400/30 rounded-full top-20 left-10 blur-3xl"
      />
      <div
        ref={orb2Ref}
        className="absolute w-32 h-32  rounded-full bottom-20 right-10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-10 text-center pb-16 sm:pb-28">
        <h1
          ref={titleRef}
          className="mt-12 text-6xl uppercase sm:text-8xl font-extrabold text-white leading-tight sm:leading-none"
        >
          Africa<span className="text-[#636b2f]">’s</span> First Bead Market{" "}
          <span className="text-[#636b2f]">place</span>
        </h1>
        <p
          ref={subtitleRef}
          className="mt-2 sm:mt-3 text-xl sm:text-3xl font-black"
          style={{ color: ACCENT_COLOR }}
        >
          Connecting bead makers, lovers, and suppliers in a bold new digital
          ecosystem. <br />
          The future of African craftsmanship is here.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
          <button
            ref={buttonRef}
            onClick={() => router.push("waitlist")}
            style={{ backgroundColor: PRIMARY_COLOR }}
            className="cursor-pointer text-white px-10 py-4 rounded-xl font-bold text-lg sm:text-xl w-full sm:w-auto min-w-[200px] shadow-lg"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
