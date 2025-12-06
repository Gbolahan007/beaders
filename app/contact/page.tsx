"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { toast, Toaster } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Users,
  X,
  Instagram,
  Linkedin,
  MessageCircle,
  Clapperboard,
} from "lucide-react";
import { handleSubmit } from "../data/data-service";

gsap.registerPlugin(ScrollTrigger);

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-98 disabled:opacity-50 cursor-pointer"
      style={{ backgroundColor: "#636b2f" }}
    >
      {pending ? "SENDING..." : "SEND MESSAGE"}
    </button>
  );
}

const initialState = {
  success: false,
  message: "",
};

export default function ContactPage() {
  const [state, formAction] = useActionState(handleSubmit, initialState);

  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const formElementsRef = useRef<Array<HTMLElement>>([]);
  const contactInfoRef = useRef<Array<HTMLElement>>([]);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message, {
          duration: 4000,
          style: {
            background: "#636b2f",
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

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set([headerRef.current, descriptionRef.current], {
        autoAlpha: 0,
        y: 50,
      });

      gsap.set(formElementsRef.current, { autoAlpha: 0, y: 50 });
      gsap.set(contactInfoRef.current, { autoAlpha: 0, x: -50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to([headerRef.current, descriptionRef.current], {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      tl.to(
        contactInfoRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.4"
      );

      tl.to(
        formElementsRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "<"
      );
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  const addFormElement = (el: HTMLElement | null) => {
    if (el && !formElementsRef.current.includes(el)) {
      formElementsRef.current.push(el);
    }
  };

  const addContactInfo = (el: HTMLElement | null) => {
    if (el && !contactInfoRef.current.includes(el)) {
      contactInfoRef.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen"
      style={{ backgroundColor: "#faf9f5" }}
    >
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "8px",
            fontSize: "14px",
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <h1
              ref={headerRef}
              className="text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "#636b2f" }}
            >
              Let&apos;s Talk
            </h1>
            <p
              ref={descriptionRef}
              className="text-lg mb-12 leading-relaxed"
              style={{ color: "#636b2f" }}
            >
              Whether you&apos;re a maker looking to join, a supplier with
              questions, or a partner wanting to collaborate, we&apos;re here.
            </p>

            {/* Contact Methods */}
            {/* Contact Methods */}
            <div className="space-y-8">
              {/* Email */}
              <div ref={addContactInfo} className="flex items-start gap-4">
                <div
                  className="rounded-full p-4 shrink-0"
                  style={{ backgroundColor: "#d9b753" }}
                >
                  <Mail className="w-6 h-6" style={{ color: "#636b2f" }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#636b2f" }}
                  >
                    Email Us
                  </h3>
                  <a
                    href="mailto:beadersafrica@gmail.com"
                    className="block hover:underline"
                    style={{ color: "#636b2f" }}
                  >
                    Beadersafrica@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div ref={addContactInfo} className="flex items-start gap-4">
                <div
                  className="rounded-full p-4 shrink-0"
                  style={{ backgroundColor: "#d9b753" }}
                >
                  <Phone className="w-6 h-6" style={{ color: "#636b2f" }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#636b2f" }}
                  >
                    Call Us
                  </h3>
                  <a
                    href="tel:+2348163665229"
                    className="block hover:underline"
                    style={{ color: "#636b2f" }}
                  >
                    +234 816 366 5229
                  </a>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "#636b2f", opacity: 0.7 }}
                  >
                    Mon-Fri, 9am - 6pm WAT
                  </p>
                </div>
              </div>
              {/* Visit */}
              <div ref={addContactInfo} className="flex items-start gap-4">
                <div
                  className="rounded-full p-4 shrink-0"
                  style={{ backgroundColor: "#d9b753" }}
                >
                  <MapPin className="w-6 h-6" style={{ color: "#636b2f" }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#636b2f" }}
                  >
                    Visit Us
                  </h3>
                  <p style={{ color: "#636b2f" }}>Lagos, Nigeria</p>
                </div>
              </div>
              <div ref={addContactInfo} className="flex items-start gap-4">
                {/* Icon block */}
                <div
                  className="rounded-full p-4 shrink-0"
                  style={{ backgroundColor: "#d9b753" }}
                >
                  <Users className="w-6 h-6" style={{ color: "#636b2f" }} />
                </div>

                {/* Social links */}
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#636b2f" }}
                  >
                    Connect With Us
                  </h3>

                  <div className="flex flex-wrap gap-4 items-center">
                    <a
                      href="https://www.linkedin.com/company/beaders-africa/"
                      target="_blank"
                      rel="noopener noreferrer" // Added for security best practice
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: "#636b2f" }}
                    >
                      <Linkedin className="w-5 h-5" /> LinkedIn
                    </a>

                    <a
                      href="https://www.instagram.com/beaders.africa?igsh=MWE2M3Z6d2VyY3M1Yg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: "#636b2f" }}
                    >
                      <Instagram className="w-5 h-5" /> Instagram
                    </a>

                    <a
                      href="https://wa.link/qxdfpz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: "#636b2f" }}
                    >
                      {/* Replaced Whatsapp with MessageCircle */}
                      <MessageCircle className="w-5 h-5" /> WhatsApp
                    </a>

                    <a
                      href="https://www.tiktok.com/@beadersafrica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: "#636b2f" }}
                    >
                      {/* Replaced TikTok with Clapperboard */}
                      <Clapperboard className="w-5 h-5" /> TikTok
                    </a>

                    <a
                      href="https://x.com/beadersafrica?s=21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: "#636b2f" }}
                    >
                      {/* X is correct */}
                      <X className="w-5 h-5" /> X / Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
            <form ref={formRef} action={formAction} className="space-y-6">
              {/* Name Field */}
              <div ref={addFormElement}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#636b2f" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "#faf9f5",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#636b2f")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
              </div>

              {/* Email Field */}
              <div ref={addFormElement}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#636b2f" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "#faf9f5",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#636b2f")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
              </div>

              {/* Message Field */}
              <div ref={addFormElement}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#636b2f" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{
                    backgroundColor: "#faf9f5",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#636b2f")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
              </div>

              {/* Submit Button */}
              <div ref={addFormElement}>
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
