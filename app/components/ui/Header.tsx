"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "about", label: "About" },
    { href: "features", label: "Features" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <div className="w-24 h-24 relative">
                {" "}
                <Image
                  src="/logo-1.png"
                  alt="Beaders Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-white relative group transition-colors duration-300 hover:text-[#d9b753]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d9b753] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
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
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full bg-[#f5efd4] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full border-2 border-[#636b2f] text-[#636b2f] hover:bg-[#636b2f] hover:text-white transition-colors duration-200"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-start justify-start p-12 pt-24 space-y-8 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#636b2f] text-3xl font-medium hover:text-[#4a5223] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-[#636b2f] text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-[#4a5223] transition-colors duration-200 mt-8 text-center block"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
