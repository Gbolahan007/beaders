import React from "react";
import {
  Users,
  DollarSign,
  Award,
  Zap,
  ShoppingBag,
  Heart,
} from "lucide-react";

// Define the brand colors based on your request
const BRAND_COLOR = "#636b2f"; // Primary (Dark Olive)
const SECONDARY_COLOR = "#d9b753"; // Secondary (Mustard/Gold)

const statsData = [
  {
    icon: Users,
    label: "Individuals Trained",
    value: "400+",
    description: "Dedicated artisans and entrepreneurs empowered.",
  },
  {
    icon: DollarSign,
    label: "Total Revenue Generated",
    value: "₦7M",
    description: "Successfully transformed passion into profit.",
  },
  {
    icon: ShoppingBag,
    label: "Pieces Created & Sold",
    value: "100+",
    description: "High-quality, handcrafted items sold globally.",
  },
  {
    icon: Award,
    label: "Industry Recognition",
    value: "Featured",
    description: "Showcased on a major fashion runway.",
  },
  {
    icon: Zap,
    label: "Community Programs",
    value: "2",
    description:
      "Partnered with FinTech for training & Lagos Women Run Empowerment.",
  },
  {
    icon: Heart,
    label: "Starter Packs Donated",
    value: "12",
    description: "Free starter packs given to emerging artisans.",
  },
];

const ImpactStats = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: BRAND_COLOR }}
          >
            Our Impact, Defined
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Driving empowerment, craftsmanship, and sustainable community
            growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.02] border-t-4"
              style={{
                borderColor: SECONDARY_COLOR,
                backgroundColor: "white",
              }}
            >
              <div className="flex items-center space-x-4">
                <stat.icon
                  className="w-8 h-8 shrink-0"
                  style={{ color: SECONDARY_COLOR }}
                />
                <p className="text-lg font-medium text-gray-800">
                  {stat.label}
                </p>
              </div>

              <div className="mt-4">
                <p
                  className="text-5xl font-extrabold leading-none"
                  style={{ color: BRAND_COLOR }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-base text-gray-500">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}

          {/* Special Community Stat Card (A different layout for variety) */}
          <div
            className="p-6 rounded-xl shadow-lg col-span-1 md:col-span-2 lg:col-span-3 text-center"
            style={{
              backgroundColor: BRAND_COLOR,
              color: "white",
            }}
          >
            <p
              className="text-xl font-semibold mb-2"
              style={{ color: SECONDARY_COLOR }}
            >
              COMMUNITY STRENGTH
            </p>
            <p className="text-6xl font-extrabold">148</p>
            <p className="mt-1 text-lg opacity-90">
              Active members in our thriving artisan network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
