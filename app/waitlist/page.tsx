"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

export default function WaitlistForm() {
  const PRIMARY_COLOR = "#636b2f"; // Dark moss green
  const ACCENT_COLOR = "#d9b753"; // Bright gold/ochre

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-28 relative overflow-hidden">
      {/* Decorative elements */}

      <div className="max-w-md w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl font-bold mb-4 leading-tight"
            style={{ color: PRIMARY_COLOR }}
          >
            Join the Waitlist
          </h1>
          <p className="text-lg text-gray-700">
            Be the first to know when we launch.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Kwame Mensah"
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[${ACCENT_COLOR}] focus:border-transparent transition-all`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="kwame@example.com"
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[${ACCENT_COLOR}] focus:border-transparent transition-all`}
              />
            </div>

            {/* Role Select */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                I am a...
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#636b2f] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d9b753] focus:border-transparent transition-all">
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="bead-maker">Bead Maker / Artisan</option>
                  <option value="bead-lover">Bead Lover / Buyer</option>
                  <option value="material-supplier">Material Supplier</option>
                </select>

                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className={`w-full font-semibold py-3.5 px-6 rounded-xl text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 bg-[#b89a42]`}
            >
              Secure My Spot
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            No spam. Just updates on our journey to revolutionize the bead
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}
