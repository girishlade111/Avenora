"use client";

import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Destination {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini Private Escape",
    location: "Santorini, Greece",
    rating: 4.5,
    image: "/images/dest-santorini.png",
  },
  {
    id: 2,
    name: "Malibu Cliff Retreat",
    location: "Malibu, California",
    rating: 4.5,
    image: "/images/dest-malibu.png",
  },
  {
    id: 3,
    name: "Modern Desert Haven",
    location: "Dubai Desert, UAE",
    rating: 4.5,
    image: "/images/dest-dubai.png",
  },
  {
    id: 4,
    name: "Bali Island Escape",
    location: "Bali, Indonesia",
    rating: 4.5,
    image: "/images/dest-bali.png",
  },
];

export function Destinations() {
  return (
    <section
      id="destinations"
      className="py-20 lg:py-28 bg-avenora-white"
      aria-label="Destinations"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black mb-4">
            Destinations For Unforgettable Journeys.
          </h2>
          <p className="text-avenora-mid-gray text-[var(--font-size-md)] max-w-xl">
            Discover handpicked destinations where every moment is crafted
            around your travel style.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <article
              key={dest.id}
              className="group relative bg-white rounded-[var(--radius-lg)] overflow-hidden border border-avenora-border hover:shadow-lg transition-all duration-[var(--duration-instant)] focus-within:ring-2 focus-within:ring-avenora-black"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={`${dest.name} — ${dest.location}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-avenora-black">
                    {dest.rating}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base text-avenora-black mb-1">
                  {dest.name}
                </h3>
                <p className="text-avenora-mid-gray text-sm">
                  {dest.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full px-8 h-12 border-avenora-black text-avenora-black hover:bg-avenora-black hover:text-white transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-avenora-black focus-visible:ring-offset-2"
            asChild
          >
            <a href="#packages">
              View All Destinations
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
