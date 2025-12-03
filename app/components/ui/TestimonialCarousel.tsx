"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Honestly, I'm really glad I joined this cohort. What I enjoyed the most was the practical side of things. We didn't just learn, we did. Watching my hands go from confused to confident with each piece I created was so satisfying. The facilitator taught with no long talks, just straight to the point, clear, and very easy to follow.",
    author: "Kolade",
    role: "Beginner Class Graduate",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    quote:
      "It's a great pleasure being part of the bead training from the beginners class to the advance class. I'm a Civil Servant who needed another source of income. My sister had her wedding few weeks ago and I did costume jewelry for her and her husband within few months of learning. So proud of myself!",
    author: "Oluwadamilola",
    role: "Advanced Class Graduate",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    quote:
      "Today's introductory class was fantastic. I really enjoyed how engaging and informative the session was. It laid a solid foundation for what's ahead, and I already feel more confident about diving into the world of beading. Looking forward to the next classes and learning even more.",
    author: "Joy Adaiwu",
    role: "Current Student",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d9b753]/20 text-[#636b2f] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-current" />
            Rated 5.0 by Our Students
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from students who transformed their passion into
            craft
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                index === current
                  ? "ring-4 ring-[#d9b753] scale-105"
                  : "opacity-60 scale-95"
              }`}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#d9b753] text-[#d9b753]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-8 leading-relaxed text-base">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Image Wrapper */}

                <div>
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all text-[#636b2f]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[#d9b753] w-8" : "bg-gray-300 w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all text-[#636b2f]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
