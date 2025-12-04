"use client";

import { useEffect, useRef } from "react";
import { Gem, ShoppingBag, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PRIMARY_COLOR = "#636b2f";
const ACCENT_COLOR = "#d9b753";

const features = [
  {
    icon: ShoppingBag,
    title: "Buy & Sell",
    description:
      "Connect with creators and customers across Africa in a vibrant marketplace designed for artisans and entrepreneurs.",
    bgColor: ACCENT_COLOR,
  },
  {
    icon: Gem,
    title: "Source Materials",
    description:
      "Access quality materials and resources from verified suppliers to bring your creative visions to life.",
    bgColor: PRIMARY_COLOR,
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join a thriving network of creators, share knowledge, and collaborate on projects that celebrate African culture.",
    bgColor: ACCENT_COLOR,
  },
];

const HomeAboutPage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate heading with modern bottom-to-top reveal
    if (headingRef.current) {
      const headingChildren = Array.from(
        headingRef.current.children
      ) as HTMLElement[];

      gsap.fromTo(
        headingChildren,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate feature cards with modern staggered reveal from bottom
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children) as HTMLElement[];

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Optional: Reveal entire "Why It Matters" section
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-8">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase py-1 px-4 rounded-full"
            style={{
              color: PRIMARY_COLOR,
              backgroundColor: `${ACCENT_COLOR}30`,
            }}
          >
            Our Mission
          </span>
        </div>

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-6">
          <h1
            className="text-xl md:text-2xl font-extrabold leading-tight"
            style={{ color: PRIMARY_COLOR }}
          >
            To digitize Africa’s bead economy by connecting creators and buyers,
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ color: ACCENT_COLOR }}
            >
              enabling skills development, and building sustainable income
              opportunities.
            </span>
          </h1>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/90 border-t-4"
              style={{ borderTopColor: feature.bgColor }}
            >
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-md"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why It Matters Section */}
      <section ref={sectionRef} className="px-6 py-14 md:py-20 bg-[#faf9f5]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-10">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-center"
              style={{ color: PRIMARY_COLOR }}
            >
              Why It Matters
            </h2>
            <div
              className="h-1 w-20 mx-auto mt-3 rounded-full"
              style={{ backgroundColor: ACCENT_COLOR }}
            />
          </div>

          <div className="space-y-6 max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Beadwork isn&apos;t just an accessory; it&apos;s heritage,
              economy, and expression. Yet, the market is fragmented. Creators
              struggle to find buyers, and buyers struggle to find authenticity.
            </p>
            <p>
              Beaders changes the narrative. We empower creators with tools to
              scale, and give the world access to Africa&apos;s finest
              craftsmanship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAboutPage;
