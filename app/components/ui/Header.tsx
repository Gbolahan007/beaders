"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PRIMARY_COLOR = "#636b2f";
const ACCENT_COLOR = "#d9b753";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link
            href="#home"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.jpg"
                alt="Beaders Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              Beaders
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium text-white relative group transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[${ACCENT_COLOR}] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out`}
                ></span>
              </Link>
            ))}

            <Link
              href="#waitlist"
              className="ml-4 bg-transparent border-2 border-white/50 text-white px-7 py-3 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-screen border-t border-white/20 shadow-xl"
              : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-white text-lg py-3 px-3 rounded-lg hover:bg-white/10 hover:text-[${ACCENT_COLOR}] transition-colors duration-200`}
              >
                {link.label}
              </a>
            ))}

            <button
              className={`mt-4 bg-[${PRIMARY_COLOR}] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[${ACCENT_COLOR}] transition-colors duration-300 w-full`}
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
