import React from "react";
import {
  Store,
  Package,
  CreditCard,
  Users,
  ShieldCheck,
  Truck,
} from "lucide-react";

const BRAND_COLOR = "#636b2f";

const featuresData = [
  {
    icon: Store,
    title: "Creator Storefronts",
    description:
      "Professional digital shops for makers to showcase collections, manage inventory, and tell their brand story.",
  },
  {
    icon: Package,
    title: "Material Marketplace",
    description:
      "A dedicated section for sourcing high-quality beads, threads, and tools from verified suppliers across Africa.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Verification",
    description:
      "Every seller is vetted. Every product is authentic. We build trust so you can trade with confidence.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Integrated local and international payment gateways. Mobile money, cards, and escrow protection.",
  },
  {
    icon: Truck,
    title: "Logistics (Coming Soon)",
    description:
      "End-to-end shipping solutions. We handle the headache of moving goods across borders.",
    isComingSoon: true,
  },
  {
    icon: Users,
    title: "Community Ratings",
    description:
      "Transparent review system to highlight top-tier craftsmanship and reliable suppliers.",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Our Core Platform Features
        </h1>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="
                p-6 bg-white border border-gray-200 rounded-xl shadow-sm 
                hover:shadow-lg transition duration-300 ease-in-out
                flex flex-col
              "
              style={{ borderColor: BRAND_COLOR }}
            >
              {/* Icon */}
              <div className="mb-4">
                <Icon className="w-8 h-8" style={{ color: BRAND_COLOR }} />
              </div>

              {/* Title */}
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: BRAND_COLOR }}
              >
                {feature.isComingSoon ? (
                  <>
                    Logistics{" "}
                    <span
                      className="text-sm font-medium px-2 py-0.5 rounded-full inline-block ml-2"
                      style={{
                        color: BRAND_COLOR,
                        backgroundColor: `${BRAND_COLOR}20`, // light tint
                      }}
                    >
                      Coming Soon
                    </span>
                  </>
                ) : (
                  feature.title
                )}
              </h2>

              {/* Description */}
              <p className="text-base text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesGrid;
