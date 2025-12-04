import { Gem, ShoppingBag, Sparkles, Users } from "lucide-react";

const PRIMARY_COLOR = "#636b2f";
const ACCENT_COLOR = "#d9b753";
const HomeAboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto  px-6 py-16 md:py-24">
        {/* Mission Label */}
        <div className="text-center mb-8">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase py-1 px-4 rounded-full"
            style={{
              color: PRIMARY_COLOR,
              backgroundColor: `${ACCENT_COLOR}30`,
            }}
          >
            Our Mission
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-xl md:text-2xl font-extrabold text-center mb-6 leading-tight"
          style={{ color: PRIMARY_COLOR }}
        >
          To digitize Africa’s bead economy by connecting creators and buyers,
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ color: ACCENT_COLOR }}
          >
            enabling skills development, and building sustainable income
            opportunities.
          </span>
        </h1>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
          {[
            {
              icon: ShoppingBag,
              title: "Buy & Sell",
              description:
                "Connect with creators and customers across Africa in a vibrant marketplace designed for artisans and entrepreneurs.",
              bgColor: ACCENT_COLOR,
            },
            {
              icon: Gem,
              title: "Source Materials",
              description:
                "Access quality materials and resources from verified suppliers to bring your creative visions to life.",
              bgColor: PRIMARY_COLOR,
            },
            {
              icon: Users,
              title: "Community",
              description:
                "Join a thriving network of creators, share knowledge, and collaborate on projects that celebrate African culture.",
              bgColor: ACCENT_COLOR,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/90 border-t-4"
              style={{ borderTopColor: feature.bgColor }}
            >
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-md"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="px-6 py-10 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#636b2f] text-center mb-16 text-balance">
            Why It Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description:
                  "Sourced from the finest suppliers worldwide. Every bead, tool, and material meets our rigorous standards.",
              },
              {
                title: "Expert Community",
                description:
                  "Learn from master artisans with decades of experience. Join workshops, courses, and exclusive events.",
              },
              {
                title: "Sustainable Practices",
                description:
                  "Ethical sourcing and our trade-in program keep beading beautiful and responsible for future generations.",
              },
            ].map((feature, index) => (
              <div key={index} className="space-y-3">
                <Sparkles className="w-8 h-8" style={{ color: "#d9b753" }} />
                <h3 className="text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAboutPage;
