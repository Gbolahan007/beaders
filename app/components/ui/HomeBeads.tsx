"use client";

import Image from "next/image";

export default function HomeBeads() {
  const categories = [
    {
      title: "Bead Makers",
      subtitle: "FOR CREATORS",
      image: "/beaders.jpeg",
      alt: "Hands holding blue and green beads",
      paragraph:
        "Showcase your work to a global audience and source quality materials easily.",
    },
    {
      title: "Bead Lovers",
      subtitle: "FOR COLLECTORS",
      image: "/beads-love.jpeg",
      alt: "Woman wearing beaded jewelry",
      paragraph:
        "Discover unique, authentic pieces that tell a story. Shop with confidence.",
    },
    {
      title: "Suppliers",
      subtitle: "FOR BUSINESS",
      image: "/suppliers.png",
      alt: "Beads and jewelry materials display",
      paragraph:
        "Reach thousands of artisans looking for your beads, tools, and materials.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#d9b753]/20 flex flex-col">
      {/* Header */}
      <div className="py-16 px-4">
        <h1 className="text-center text-5xl md:text-6xl font-bold text-slate-800">
          Built For You
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex-1 px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative h-[430px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition hover:scale-105"
            >
              {/* Background Image using next/image */}
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Strong black overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                <p className="text-yellow-400 text-sm font-semibold tracking-wide mb-2">
                  {category.subtitle}
                </p>

                <h2 className="text-white text-4xl font-bold mb-3">
                  {category.title}
                </h2>

                <p className="text-gray-200 text-sm leading-relaxed">
                  {category.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
