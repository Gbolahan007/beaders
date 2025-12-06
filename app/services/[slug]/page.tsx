import { getServicesDetail } from "@/app/_lib/data-client";
import BackButton from "@/app/hooks/BackButton";
import React from "react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const services = await getServicesDetail(slug);

  if (!services) {
    return (
      <div className="max-w-3xl mx-auto py-24 text-center">
        <h2 className="text-2xl font-bold text-red-600">Service not found</h2>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-28">
      {/* Back Button */}
      <BackButton />

      {/* Title */}
      <h1
        className="text-3xl md:text-5xl font-bold mb-6"
        style={{ color: "#636b2f" }}
      >
        {services.title}
      </h1>

      {/* Subtitle */}
      <h2
        className="text-xl md:text-2xl font-semibold mb-10"
        style={{ color: "#d9b753" }}
      >
        {services.sub_title}
      </h2>

      {/* Benefits */}
      <section className="space-y-4 mb-10">
        <h3 className="text-xl font-bold mb-4" style={{ color: "#636b2f" }}>
          Key Benefits
        </h3>

        <ul className="space-y-3">
          {services.benefits?.map((item: string, index: number) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-800 leading-relaxed"
            >
              {/* Bullet icon */}
              <span
                className="mt-2 block h-3 w-3 rounded-full"
                style={{ backgroundColor: "#d9b753" }}
              />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Join Waitlist Button */}
      <div className="text-center ">
        <Link href="/waitlist">
          <button
            className="px-6 py-3 rounded-xl cursor-pointer font-semibold text-white transition-colors"
            style={{ backgroundColor: "#636b2f" }}
          >
            Join the Waitlist
          </button>
        </Link>
      </div>
    </main>
  );
}
