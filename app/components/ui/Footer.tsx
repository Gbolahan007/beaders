import {
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import Image from "next/image";

// Existing Colors
const PRIMARY_COLOR = "#636b2f";
const TEXT_GREY = "#d1d5db";
const ACCENT_COLOR = "#d9b753";

const footerLinks = [
  {
    title: "Platform",
    links: ["Our Story", "Marketplace", "For Makers", "For Suppliers"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Privacy Policy", "Terms of Service", "FAQ"],
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
              <a
                href="#"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
              >
                <Instagram size={22} />
              </a>

              <a
                href="#"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
              >
                <Twitter size={22} />
              </a>

              <a
                href="#"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://wa.me/2348161554055"
                style={{ color: TEXT_GREY }}
                className={`transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={22} />
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
                      href="#"
                      style={{ color: TEXT_GREY }}
                      className={`block text-base transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
                    >
                      {link}
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
                href="mailto:hello@beaders.africa"
                style={{ color: TEXT_GREY }}
                className={`flex items-center gap-3 text-base transition-colors duration-300 hover:text-[${ACCENT_COLOR}]`}
              >
                <Mail size={18} />
                hello@beaders.africa
              </a>

              <div className="pt-2 space-y-2">
                <p
                  className="text-sm font-semibold"
                  style={{ color: TEXT_GREY }}
                >
                  Regional Hubs:
                </p>

                <div className="text-sm space-y-1" style={{ color: TEXT_GREY }}>
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
