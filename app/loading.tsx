"use client";

import React from "react";

const PRIMARY_COLOR = "#636b2f";
const ACCENT_COLOR = "#d9b753";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
      <div className="relative">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            width: "120px",
            height: "120px",
            border: `3px solid transparent`,
            borderTopColor: PRIMARY_COLOR,
            borderRightColor: PRIMARY_COLOR,
            animation:
              "spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
          }}
        />

        {/* Middle rotating ring */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            width: "120px",
            height: "120px",
            border: `3px solid transparent`,
            borderBottomColor: ACCENT_COLOR,
            borderLeftColor: ACCENT_COLOR,
            animation:
              "spin 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse",
            margin: "8px",
          }}
        />

        {/* Center pulsing circle */}
        <div
          className="absolute inset-0 m-auto rounded-full"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: PRIMARY_COLOR,
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />

        {/* Accent dots */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: ACCENT_COLOR,
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 120}deg) translateY(-60px)`,
              animation: `fade 1.5s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}

        <div className="w-[120px] h-[120px]" />
      </div>

      {/* Loading text */}
      <div className="absolute mt-48">
        <p
          className="text-lg font-medium tracking-wide"
          style={{
            color: PRIMARY_COLOR,
            animation: "fadeInOut 2s ease-in-out infinite",
          }}
        >
          Loading
          <span style={{ animation: "dots 1.5s steps(4, end) infinite" }}>
            ...
          </span>
        </p>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes fade {
          0%,
          100% {
            opacity: 0.3;
            transform: rotate(var(--rotation)) translateY(-60px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--rotation)) translateY(-60px) scale(1);
          }
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes dots {
          0%,
          20% {
            content: ".";
          }
          40% {
            content: "..";
          }
          60%,
          100% {
            content: "...";
          }
        }
      `}</style>
    </div>
  );
}
