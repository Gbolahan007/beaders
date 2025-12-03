// ... (The existing imports and component structure)

import Image from "next/image";

export default function BeadworkPage() {
  const ACCENT_COLOR = "#d9b753"; // Golden Yellow

  return (
    <main className="bg-white">
      <section className="flex flex-col lg:flex-row min-h-screen">
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/beads-1.jpeg"
            alt="Beadwork artisans creating colorful beaded accessories"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover object-center"
          />
        </div>

        <div
          className=" flex flex-col justify-center items-center lg:items-start px-8 lg:px-14 py-16 space-y-8 text-center lg:text-left text-black "
          style={{ backgroundColor: "#f9f6e9" }}
        >
          <div className="max-w-xl space-y-8">
            {/* Title */}
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Why It Matters
            </h2>

            {/* Text */}
            <div className="space-y-6 text-black text-lg leading-relaxed">
              <p>
                Beadwork isn&apos;t just an accessory; it&apos;s **heritage,
                economy, and expression**. Yet, the market is fragmented.
                Creators struggle to find buyers, and buyers struggle to find
                authenticity.
              </p>
              <p>
                **Beaders** changes the narrative. We empower creators with
                tools to scale, and give the world access to **Africa&apos;s
                finest craftsmanship**.
              </p>
            </div>

            {/* CTA */}
            <button
              className="px-8 py-3 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4 cursor-pointer"
              style={{
                borderColor: ACCENT_COLOR,
                color: ACCENT_COLOR,
              }}
            >
              Discover Our Story
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
