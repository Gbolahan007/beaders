import Image from "next/image";
import { Globe, Sparkles, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="relative py-24 text-center bg-[#f9f6e9]">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3.5 space-y-6 relative z-10">
          <div
            className="inline-block px-4 py-2 rounded-full border"
            style={{
              borderColor: "#d9b753",
              backgroundColor: "rgba(217, 183, 83, 0.05)",
            }}
          >
            <span style={{ color: "#636b2f" }} className="text-sm font-medium">
              Our Story
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold leading-tight text-balance"
            style={{ color: "#636b2f" }}
          >
            Connecting Africa&apos;s{" "}
            <span style={{ color: "#d9b753" }}>bead artisans</span> to the world
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Born from a love for African artistry and a vision to empower the
            hands that create it.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section
        id="story"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div
              className="aspect-square rounded-lg overflow-hidden relative"
              style={{ backgroundColor: "#e8e8d8" }}
            >
              <Image
                src="/african-woman-beading-artisan-founder-portrait.jpg"
                alt="Founder - The Visionary behind Beaders"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>

            <div
              className="absolute -bottom-6 right-0 sm:-right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs"
              style={{ borderTop: "4px solid #d9b753" }}
            >
              <p className="text-sm text-slate-600 italic">
                &quot;I watched my grandmother thread stories into necklaces,
                yet she struggled to find buyers beyond her village.&quot;
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ color: "#636b2f" }}
            >
              The Visionary
            </h2>

            <div className="space-y-4 text-slate-700">
              <p className="text-lg leading-relaxed">
                Beaders was born from a simple realisation: beadmaking can be so
                much more. More than sitting for hours stringing beads. More
                than posting endlessly on Instagram hoping the right customer
                appears. More than treating a powerful craft like a small
                hustle.
              </p>

              <p className="text-lg leading-relaxed">
                I saw an industry filled with skill yet limited by visibility,
                tools, and structure. And I knew we could transform that.
              </p>

              <p className="text-lg leading-relaxed">
                Beaders is our movement to revolutionise beadmaking in Africa. A
                digital home where creators can earn sustainably, buyers can
                effortlessly discover quality pieces, and learners can access
                opportunities without barriers.
              </p>

              <p className="text-lg leading-relaxed">
                We’re proving that beadmaking isn’t “just beads”… it’s{" "}
                <span className="font-semibold" style={{ color: "#636b2f" }}>
                  culture, creativity, and commerce
                </span>{" "}
                — and it deserves technology that elevates it.
              </p>

              <p className="text-lg leading-relaxed">
                We’re only at the beginning, but the mission remains clear:
              </p>

              <ul className="list-disc ml-6 space-y-1 text-lg">
                <li>Empower creators.</li>
                <li>Celebrate culture.</li>
                <li>Redefine the future of beadcraft in Africa.</li>
              </ul>

              <p
                className="pt-2 text-lg font-semibold"
                style={{ color: "#636b2f" }}
              >
                — Ibukunoluwa Kohode <br />
                Founder, Beaders Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ color: "#636b2f" }}
            >
              Our Mission
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed">
              To democratize access to the global market for African bead
              makers, and to provide a trusted source for authentic materials
              and finished goods.
            </p>

            <div className="pt-4">
              <button
                className="px-4 py-2 rounded-md border font-medium bg-white"
                style={{ borderColor: "#d9b753", color: "#636b2f" }}
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Mission Image */}
          <div className="order-1 md:order-2">
            <div
              className="relative h-80 rounded-lg overflow-hidden"
              style={{ backgroundColor: "#f0ede4" }}
            >
              <Image
                src="/academy-2.jpeg"
                alt="African beaded necklaces"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(99,107,47,0.1) 0%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold leading-tight mb-4"
            style={{ color: "#636b2f" }}
          >
            The Future We&apos;re Building
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A world where artisans can reach global markets effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="p-8 rounded-lg hover:border-[#d9b753] transition">
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: "rgba(99,107,47,0.1)" }}
              >
                <Globe className="w-6 h-6" style={{ color: "#636b2f" }} />
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg" style={{ color: "#636b2f" }}>
                  Global Connectivity
                </h3>
                <p className="text-slate-600">
                  Connecting artisans across Africa with global buyers.
                </p>
              </div>
            </div>
          </div>

          {/* Value 2 */}
          <div className="p-8 rounded-lg border border-slate-200 hover:border-[#d9b753] transition">
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: "rgba(217,183,83,0.1)" }}
              >
                <Sparkles className="w-6 h-6" style={{ color: "#d9b753" }} />
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg" style={{ color: "#636b2f" }}>
                  Authentic Artistry
                </h3>
                <p className="text-slate-600">
                  Showcasing true African bead craftsmanship.
                </p>
              </div>
            </div>
          </div>

          {/* Value 3 */}
          <div className="p-8 rounded-lg border border-slate-200 hover:border-[#d9b753] transition">
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: "rgba(99,107,47,0.1)" }}
              >
                <Zap className="w-6 h-6" style={{ color: "#636b2f" }} />
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg" style={{ color: "#636b2f" }}>
                  Empowerment
                </h3>
                <p className="text-slate-600">
                  Fair compensation and resources to help artisans thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
