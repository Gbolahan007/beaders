import React from "react";

const PRIMARY_COLOR = "#636b2f";
const ACCENT_COLOR = "#d9b753";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer rotating ring */}
        <div
          className="w-32 h-32 rounded-full animate-spin"
          style={{
            border: `4px solid #f3f4f6`,
            borderTopColor: PRIMARY_COLOR,
            borderRightColor: PRIMARY_COLOR,
          }}
        />

        {/* Inner rotating ring */}
        <div
          className="absolute inset-0 w-32 h-32 rounded-full"
          style={{
            border: `4px solid transparent`,
            borderBottomColor: ACCENT_COLOR,
            animation: "spin 1.5s linear infinite reverse",
            margin: "8px",
          }}
        />

        {/* Brand Name - Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1
              className="text-xl font-bold tracking-[0.2em] animate-pulse"
              style={{ color: PRIMARY_COLOR }}
            >
              BEADERS
            </h1>
          </div>
        </div>
      </div>

      {/* Loading Dots */}
      <div className="absolute bottom-20">
        <div className="flex gap-1">
          <span
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: PRIMARY_COLOR,
              animationDelay: "0ms",
            }}
          />
          <span
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: ACCENT_COLOR,
              animationDelay: "150ms",
            }}
          />
          <span
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: PRIMARY_COLOR,
              animationDelay: "300ms",
            }}
          />
        </div>
      </div>
    </div>
  );
}
