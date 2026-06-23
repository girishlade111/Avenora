"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Travora helped us plan a honeymoon that felt personal from the first day. The hotels, pacing, and private experiences were exactly what we wanted.",
    author: "Patric Stone",
    role: "Traveller",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "From the first conversation to the final itinerary, everything was handled with care and attention. Our trip to Bali was absolutely flawless.",
    author: "Sarah Mitchell",
    role: "Adventure Seeker",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The team went above and beyond to create a personalized experience. Every detail was thoughtfully considered and perfectly executed.",
    author: "James Rivera",
    role: "Travel Enthusiast",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      className="py-20 lg:py-28 bg-avenora-white"
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-avenora-mid-gray text-sm font-medium uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black">
            From first idea to finished itinerary.
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === current;
              return (
                <article
                  key={testimonial.id}
                  className={`bg-white rounded-[var(--radius-lg)] border p-6 lg:p-8 transition-all duration-[var(--duration-instant)] ${
                    isActive
                      ? "border-avenora-black shadow-md ring-1 ring-avenora-black/10"
                      : "border-avenora-border"
                  }`}
                  aria-hidden={!isActive}
                  tabIndex={isActive ? 0 : -1}
                >
                  <Quote
                    className="h-8 w-8 text-avenora-border mb-4"
                    aria-hidden="true"
                  />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-avenora-gray text-[var(--font-size-sm)] leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-heading text-base text-avenora-black">
                      {testimonial.author}
                    </p>
                    <p className="text-avenora-mid-gray text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full h-10 w-10 border-avenora-border hover:bg-avenora-black hover:text-white hover:border-avenora-black transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    idx === current
                      ? "w-8 bg-avenora-black"
                      : "w-2 bg-avenora-border hover:bg-avenora-mid-gray"
                  }`}
                  role="tab"
                  aria-selected={idx === current}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full h-10 w-10 border-avenora-border hover:bg-avenora-black hover:text-white hover:border-avenora-black transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
