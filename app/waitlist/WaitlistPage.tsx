"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { toast, Toaster } from "sonner";
import { handleWaitlistSubmit } from "../data/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full font-semibold py-3.5 px-6 rounded-xl text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 bg-[#b89a42] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
    >
      {pending ? "Joining..." : "Secure My Spot"}
      <ArrowRight
        size={18}
        className="group-hover:translate-x-1 transition-transform"
      />
    </button>
  );
}

const initialState = {
  success: false,
  message: "",
};

export default function WaitlistPage() {
  const PRIMARY_COLOR = "#636b2f";

  const [state, formAction] = useActionState(
    handleWaitlistSubmit,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message, {
          duration: 4000,
          style: {
            background: PRIMARY_COLOR,
            color: "#fff",
          },
        });
        formRef.current?.reset();
      } else {
        toast.error(state.message, {
          duration: 4000,
          style: {
            background: "#EF4444",
            color: "#fff",
          },
        });
      }
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-28 relative overflow-hidden">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: { borderRadius: "8px", fontSize: "14px" },
        }}
      />

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
          <form ref={formRef} action={formAction} className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                style={{ color: PRIMARY_COLOR }}
                className="block text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Kwame Mensah"
                required
                className="w-full px-4 py-3 bg-white border rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{
                  color: PRIMARY_COLOR,
                  borderColor: PRIMARY_COLOR,
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{ color: PRIMARY_COLOR }}
                className="block text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="kwame@example.com"
                required
                className="w-full px-4 py-3 bg-white border rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{
                  color: PRIMARY_COLOR,
                  borderColor: PRIMARY_COLOR,
                }}
              />
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                style={{ color: PRIMARY_COLOR }}
                className="block text-sm font-semibold mb-2"
              >
                I am a...
              </label>

              <div className="relative">
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-3 bg-white border rounded-xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  style={{
                    color: PRIMARY_COLOR,
                    borderColor: PRIMARY_COLOR,
                  }}
                >
                  <option value="">Select your role</option>
                  <option value="Bead Maker / Artisan">
                    Bead Maker / Artisan
                  </option>
                  <option value="Bead Lovers / Buyers / Learner">
                    Bead Lovers / Buyers / Learner
                  </option>

                  <option value="Material Supplier">Material Supplier</option>
                </select>

                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                style={{ color: PRIMARY_COLOR }}
                className="block text-sm font-semibold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="City, Country"
                className="w-full px-4 py-3 bg-white border rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{
                  color: PRIMARY_COLOR,
                  borderColor: PRIMARY_COLOR,
                }}
              />
            </div>

            {/* Submit Button */}
            <SubmitButton />
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
