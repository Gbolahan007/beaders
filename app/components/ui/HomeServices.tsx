"use client";
import { useState } from "react";
import {
  Play,
  Download,
  Users,
  Clock,
  Award,
  CheckCircle2,
  Star,
  Video,
  FileText,
  Calendar,
} from "lucide-react";

export default function HomeServices() {
  const PRIMARY_COLOR = "#636b2f";
  const ACCENT_COLOR = "#d9b753";
  const [selectedPlan, setSelectedPlan] = useState("beginner");

  const classPlans = [
    {
      id: "free",
      name: "Free Intro",
      price: "Free",
      duration: "1 hour",
      sessions: 1,
      format: "Recorded",
      popular: false,
      features: [
        "Introduction to beading basics",
        "1-hour recorded video lesson",
        "Downloadable PDF pattern",
        "Basic techniques overview",
        "Community access",
      ],
      colorClass: "from-gray-600 to-gray-700",
    },
    {
      id: "beginner",
      name: "Beginner",
      price: "$49",
      duration: "4 weeks",
      sessions: 4,
      format: "Recorded + Live",
      popular: true,
      features: [
        "4 comprehensive sessions",
        "Mix of recorded & live classes",
        "Weekly live Q&A sessions",
        "Downloadable patterns & resources",
        "Foundation techniques mastery",
        "Private student community",
      ],
      colorClass: "from-[#636b2f] to-[#7a8439]",
    },
    {
      id: "intermediate",
      name: "Intermediate",
      price: "$89",
      duration: "6 weeks",
      sessions: 6,
      format: "Recorded + Live",
      popular: false,
      features: [
        "6 detailed sessions",
        "Advanced pattern design",
        "Bi-weekly live workshops",
        "Exclusive pattern library",
        "One-on-one feedback session",
        "Certificate of completion",
      ],
      colorClass: "#d9b753",
    },
    {
      id: "advanced",
      name: "Advanced",
      price: "$149",
      duration: "8 weeks",
      sessions: 8,
      format: "Recorded + Live",
      popular: false,
      features: [
        "8 intensive sessions",
        "Business of beading masterclass",
        "Weekly live coaching calls",
        "Premium pattern collection",
        "Marketing & pricing strategies",
        "Lifetime course access",
        "Professional certification",
      ],
      colorClass: "#d9b753",
    },
  ];

  const learningOutcomes = [
    {
      icon: Award,
      title: "Master the Basics",
      description:
        "Learn fundamental beading techniques, tools, and materials from scratch",
    },
    {
      icon: FileText,
      title: "Pattern Design",
      description:
        "Create your own unique patterns and understand color theory in beadwork",
    },
    {
      icon: Users,
      title: "Business Skills",
      description:
        "Turn your passion into profit with marketing, pricing, and sales strategies",
    },
    {
      icon: Star,
      title: "Advanced Techniques",
      description:
        "Master complex stitches, 3D designs, and professional-level craftsmanship",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-green-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: `${ACCENT_COLOR}20`,
              color: PRIMARY_COLOR,
            }}
          >
            <Star className="w-4 h-4 fill-current" />
            Learn from Expert Artisans
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Classes & Learning
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of beading with our comprehensive courses. From
            complete beginner to professional artisan.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-24">
          {classPlans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              // --- START: Mobile responsiveness fix for scaling ---
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer 
                ${
                  selectedPlan === plan.id
                    ? "scale-105 lg:scale-110"
                    : "hover:scale-[1.02] lg:hover:scale-105"
                }
              `}
              // --- END: Mobile responsiveness fix for scaling ---
              style={
                selectedPlan === plan.id
                  ? {
                      borderColor: PRIMARY_COLOR,
                      borderWidth: "3px",
                    }
                  : {}
              }
            >
              {plan.popular && (
                <div
                  className="absolute top-0 right-0 text-white px-4 py-1 text-xs font-bold rounded-bl-lg"
                  style={{
                    background: ` ${PRIMARY_COLOR}`,
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 sm:p-8">
                <div
                  className={`bg-linear-to-r ${plan.colorClass} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-600">USD</span>
                  )}
                </div>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock
                      className="w-4 h-4"
                      style={{ color: PRIMARY_COLOR }}
                    />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar
                      className="w-4 h-4"
                      style={{ color: PRIMARY_COLOR }}
                    />
                    <span>{plan.sessions} sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play
                      className="w-4 h-4"
                      style={{ color: PRIMARY_COLOR }}
                    />
                    <span>{plan.format}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "text-white shadow-lg hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md hover:-translate-y-1"
                  }`}
                  style={
                    selectedPlan === plan.id
                      ? {
                          background: ` ${PRIMARY_COLOR}`,
                        }
                      : {}
                  }
                >
                  {plan.price === "Free" ? "Start Free" : "Enroll Now"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Class Format Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-16 sm:mb-24">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Class Format & Duration
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}20, ${ACCENT_COLOR}20)`,
                }}
              >
                <Video className="w-8 h-8" style={{ color: PRIMARY_COLOR }} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Recorded Lessons
              </h4>
              <p className="text-gray-600">
                30-90 minute modules you can watch at your own pace, anytime
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `linear-gradient(to bottom right, ${ACCENT_COLOR}20, ${PRIMARY_COLOR}20)`,
                }}
              >
                <Users className="w-8 h-8" style={{ color: ACCENT_COLOR }} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Live Q&A</h4>
              <p className="text-gray-600">
                Weekly interactive sessions with instructors and fellow students
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}20, ${ACCENT_COLOR}20)`,
                }}
              >
                <Download
                  className="w-8 h-8"
                  style={{ color: PRIMARY_COLOR }}
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Resources
              </h4>
              <p className="text-gray-600">
                Downloadable patterns, guides, and reference materials
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            What Students Will Learn
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive curriculum designed to take you from beginner to
            professional beading artist
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}20, ${ACCENT_COLOR}20)`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: PRIMARY_COLOR }}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {outcome.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{outcome.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
