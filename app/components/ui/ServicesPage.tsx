"use client";

import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  BookOpen,
  Palette,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Beaders Marketplace",
    subtitle: "Finished Jewelry",
    description:
      "Discover curated collections of exquisite finished beaded jewelry from talented artisans. Browse unique pieces, limited editions, and seasonal collections.",
    icon: ShoppingBag,
    image: "/beads-market.jpeg",
  },
  {
    id: 2,
    title: "Materials Store",
    subtitle: "Beads, Accessories & Tools",
    description:
      "Premium quality beads, findings, and tools for every project. From seed beads to gemstones, get everything you need for your creative vision.",
    icon: ShoppingBag,
    image: "/beads-tools.jpeg",
  },
  {
    id: 3,
    title: "Beaders Academy",
    subtitle: "Online Courses",
    description:
      "Master the art of beading with our comprehensive courses. Learn techniques from basic to advanced, from expert instructors with decades of experience.",
    icon: BookOpen,
    image: "/beads-0.jpeg",
  },
  {
    id: 4,
    title: "Bespoke Beading",
    subtitle: "Custom Clothing & Repairs",
    description:
      "Personalized beading services for custom creations and restoration. Transform your garments with intricate beadwork or restore your treasured pieces.",
    icon: Palette,
    image: "/beads-custom.jpeg",
  },
  {
    id: 5,
    title: "Trade-in & Refurbish",
    subtitle: "Program",
    description:
      "Give your old beaded pieces new life. Trade in, upgrade, or refurbish your collection. Sustainable luxury for conscious collectors.",
    icon: RefreshCw,
    image: "/beads-repair.jpeg",
  },
];

export function ServicesPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h1 className="text-2xl md:text-5xl font-bold text-[#636b2f] text-balance">
              Artisanal Beading at Its Finest
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive ecosystem of beading services, from
              finished masterpieces to premium materials and expert education.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredId === service.id;

              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 cursor-pointer hover:shadow-xl"
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
                      className={`w-full mt-4 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium text-white ${
                        isHovered ? "hover:opacity-90" : "hover:opacity-80"
                      }`}
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* Features Section */}
      <section className="px-6 py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16 text-balance">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description:
                  "Sourced from the finest suppliers worldwide. Every bead, tool, and material meets our rigorous standards.",
              },
              {
                title: "Expert Community",
                description:
                  "Learn from master artisans with decades of experience. Join workshops, courses, and exclusive events.",
              },
              {
                title: "Sustainable Practices",
                description:
                  "Ethical sourcing and our trade-in program keep beading beautiful and responsible for future generations.",
              },
            ].map((feature, index) => (
              <div key={index} className="space-y-3">
                <Sparkles className="w-8 h-8" style={{ color: "#d9b753" }} />
                <h3 className="text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
