import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";

export default function Footer() {
  const PRIMARY_COLOR = "#636b2f"; // Earthy Green
  const ACCENT_COLOR = "#d9b753"; // Golden Yellow (Used for highlights)
  const DARK_BG = "#1a1a1a"; // Deep Black-like background
  const DARKER_LINE = "#333333"; // Dark grey for separators
  const TEXT_GREY = "#cccccc"; // Light grey for primary text

  const footerLinks = [
    {
      title: "Courses",
      links: ["Beginner Classes", "Intermediate", "Advanced", "Masterclass"],
    },
    {
      title: "Resources",
      links: ["Patterns Library", "Tutorials", "Community", "Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Careers", "Press"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Youtube, label: "YouTube" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer
      className="text-white pt-16"
      style={{
        backgroundColor: DARK_BG,
        borderTop: `4px solid ${ACCENT_COLOR}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand, Contact, and Links */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12 pb-12"
          style={{ borderBottom: `1px solid ${DARKER_LINE}` }}
        >
          {/* 1. Brand & Contact Info (2 columns on large screens) */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              {/* Logo/Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg"
                style={{ backgroundColor: ACCENT_COLOR, color: PRIMARY_COLOR }}
              >
                ◇
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight">
                Beading Artisans
              </h3>
            </div>

            <p className="max-w-sm" style={{ color: TEXT_GREY }}>
              Master the art of beading with expert guidance. Join our community
              of passionate artisans crafting beautiful designs.
            </p>

            <div className="space-y-3 pt-2">
              <div
                className="flex items-center gap-3"
                style={{ color: TEXT_GREY }}
              >
                <Mail
                  className="w-5 h-5 shrink-0"
                  style={{ color: ACCENT_COLOR }}
                />
                <a
                  href="mailto:hello@beadingartisans.com"
                  className="hover:text-white transition-colors text-sm"
                >
                  hello@beadafrica.com
                </a>
              </div>
              <div
                className="flex items-center gap-3"
                style={{ color: TEXT_GREY }}
              >
                <Phone
                  className="w-5 h-5 shrink-0"
                  style={{ color: ACCENT_COLOR }}
                />
                <a
                  href="tel:08163665229"
                  className="hover:text-white transition-colors text-sm"
                >
                  0816 366 5229
                </a>
              </div>
              <div
                className="flex items-center gap-3"
                style={{ color: TEXT_GREY }}
              >
                <MapPin
                  className="w-5 h-5 shrink-0"
                  style={{ color: ACCENT_COLOR }}
                />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* 2. Links Sections (3 columns on large screens) */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h4
                className="font-bold text-xl mb-5 pb-1 border-b-2 inline-block"
                style={{
                  color: ACCENT_COLOR,
                  borderColor: PRIMARY_COLOR,
                }}
              >
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className={`text-base transition-colors duration-200 ${TEXT_GREY} hover:text-white`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Social & Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: TEXT_GREY }}
            >
              Follow Us
            </span>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md"
                    style={{
                      backgroundColor: `${ACCENT_COLOR}20`,
                      color: ACCENT_COLOR,
                      border: `1.5px solid ${ACCENT_COLOR}`,
                    }}
                    title={`Connect on ${social.label}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Join our newsletter for patterns"
              className="px-4 py-3 rounded-lg w-full sm:w-80 
             border text-white placeholder-gray-400 
             bg-[#2e2e2e] border-(--darker-line)
             focus:outline-none focus:ring-2 
             focus:ring-(--accent-color)]
             focus:ring-offset-2 focus:ring-(--dark-bg) 
             transition-all"
            />

            <button
              className="px-6 py-3 rounded-lg font-bold text-gray-900 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 whitespace-nowrap"
              style={{
                backgroundColor: ACCENT_COLOR,
              }}
            >
              <Send className="w-5 h-5" />
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center py-6 mt-4"
          style={{
            borderTop: `1px solid ${DARKER_LINE}`,
            color: "#888888", // Muted grey for copyright text
          }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Beading Artisans. All rights reserved.
            <span className="block sm:inline sm:ml-2">
              Crafted with passion for artisans worldwide.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
