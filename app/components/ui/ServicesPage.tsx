"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Palette,
  RefreshCw,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Beaders",
    subtitle: "Finished Jewelry",
    description:
      "Showcase your handcrafted jewelry to thousands of ready buyers across Africa. Get visibility, build your brand, and grow your income on a marketplace designed specifically for bead makers.",
    icon: ShoppingBag,
    image: "/beads-making.jpeg",
    slug: "beaders",
  },
  {
    id: 2,
    title: "Suppliers",
    subtitle: "Beads, Accessories & Tools",
    description:
      "Premium quality beads, findings, and tools for every project. From seed beads to gemstones, get everything you need for your creative vision.",
    icon: ShoppingBag,
    image: "/martt.jpeg",
    slug: "material-store",
  },
  {
    id: 3,
    title: "Beaders Academy",
    subtitle: "Online Courses",
    description:
      "Master the art of beading with our comprehensive courses. Learn techniques from basic to advanced, from expert instructors with decades of experience.",
    icon: BookOpen,
    image: "/academy.jpeg",
    slug: "beaders-academy",
  },
  {
    id: 4,
    title: "Bespoke Beading",
    subtitle: "Custom Clothing & Repairs",
    description:
      "Personalized beading services for custom creations and restoration. Transform your garments with intricate beadwork or restore your treasured pieces.",
    icon: Palette,
    image: "/custom.jpeg",
    slug: "custom-clothing-beading",
  },
  {
    id: 5,
    title: "Trade-in & Refurbish",
    subtitle: "Program",
    description:
      "Give your old beaded pieces new life. Trade in, upgrade, or refurbish your collection. Sustainable luxury for conscious collectors.",
    icon: RefreshCw,
    image: "/rebur.jpeg",
    slug: "trade-in",
  },
  {
    id: 6,
    title: "Bead Lovers",
    subtitle: "For Shoppers & Jewelry Enthusiasts",
    description:
      "Find unique, handcrafted beaded pieces from verified creators across Africa No more scrolling through random pages, no more guessing who to trust.",
    icon: Heart,
    image: "/beads-love.jpeg",
    slug: "bead-lovers",
  },
];

export function ServicesPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children) as HTMLElement[];

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h1 className="text-2xl md:text-5xl font-bold text-[#636b2f] text-balance">
              Your Beading Marketplace Reimagined.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive ecosystem of beading services, from
              finished masterpieces to premium materials and expert education.
            </p>
          </div>

          {/* Services Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredId === service.id;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 cursor-pointer hover:shadow-xl"
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw,
                          (max-width: 1024px) 50vw,
                          33vw"
                      className={`object-cover transition-transform duration-500 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    />

                    {/* Overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-linear-to-t from-[#636b2f]/20 to-transparent opacity-0 transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : ""
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon
                            className="w-5 h-5"
                            style={{ color: "#d9b753" }}
                          />
                          <p
                            className="text-sm font-medium uppercase tracking-wide"
                            style={{ color: "#d9b753" }}
                          >
                            {service.subtitle}
                          </p>
                        </div>
                        <h3 className="text-xl font-bold text-black">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <button
                      className={`w-full mt-4 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium text-white hover:opacity-90 cursor-pointer`}
                      style={{
                        backgroundColor: isHovered ? "#636b2f" : "#d9b753",
                        color: isHovered ? "#ffffff" : "#1a1a1a",
                      }}
                    >
                      Explore
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`}
                      />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
