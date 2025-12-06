import {
  Clapperboard,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  X,
} from "lucide-react";
import Image from "next/image";

// Existing Colors
const PRIMARY_COLOR = "#636b2f";
const TEXT_GREY = "#d1d5db";
const ACCENT_COLOR = "#d9b753";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Our Story", url: "/about" },
      { name: "Marketplace", url: "/beaders" },
      { name: "For Makers", url: "/#makers" },
      { name: "For Suppliers", url: "/#suppliers" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", url: "/contact" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "FAQ", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full text-white py-16 px-6"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 border-b border-white/20 pb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative w-20 h-20 rounded-lg">
                <Image
                  src="/logo-1.png"
                  alt="Beaders Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-3xl font-extrabold tracking-wide">
                Beaders Africa
              </h3>
            </div>

            <p
              className="max-w-md text-base leading-relaxed"
              style={{ color: TEXT_GREY }}
            >
              Africa&apos;s First Bead Marketplace. Connecting makers, lovers,
              and suppliers in a digital ecosystem built for growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 pt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/beaders.africa"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/beadersafrica"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <X size={22} /> {/* Using 'X' icon */}
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/beaders-africa/"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={22} />
              </a>

              {/* WhatsApp (MessageCircle) */}
              <a
                href="https://wa.link/qxdfpz"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={22} />
              </a>

              {/* TikTok (Clapperboard) - THE REMAINING ICON */}
              <a
                href="https://www.tiktok.com/@beadersafrica"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Clapperboard size={22} />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:ml-auto">
              <h4 className="text-xl font-bold mb-6 tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      style={{ color: TEXT_GREY }}
                      className={`block text-base transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:beadersafrica@gmail.com"
                style={{ color: TEXT_GREY }}
                className={`flex items-center gap-3 text-base transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
              >
                <Mail size={18} />
                beadersafrica@gmail.com
              </a>

              <div className=" space-y-2">
                <div className="text-sm" style={{ color: TEXT_GREY }}>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-2 sm:mb-0" style={{ color: TEXT_GREY }}>
            &copy; {new Date().getFullYear()} Beaders Africa. All rights
            reserved.
          </p>
          <p className="text-sm font-medium" style={{ color: TEXT_GREY }}>
            Built with pride in Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
