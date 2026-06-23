"use client";

import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Package {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

const packages: Package[] = [
  {
    id: 1,
    title: "7-Day Bali",
    subtitle: "Wellness Journey",
    description:
      "A calm escape designed around private villas, spa rituals, slow mornings, and cultural discovery.",
    price: "$2,400",
    rating: 5.0,
    reviews: 589,
    image: "/images/dest-bali.png",
  },
  {
    id: 2,
    title: "Maldives",
    subtitle: "Honeymoon Stay",
    description:
      "A calm escape designed around private villas, spa rituals, slow mornings, and cultural discovery.",
    price: "$2,400",
    rating: 5.0,
    reviews: 589,
    image: "/images/dest-malibu.png",
  },
  {
    id: 3,
    title: "Morocco Desert",
    subtitle: "Experience",
    description:
      "A calm escape designed around private villas, spa rituals, slow mornings, and cultural discovery.",
    price: "$2,400",
    rating: 5.0,
    reviews: 589,
    image: "/images/dest-dubai.png",
  },
  {
    id: 4,
    title: "Thailand Bali",
    subtitle: "Wellness Journey",
    description:
      "A calm escape designed around private villas, spa rituals, slow mornings, and cultural discovery.",
    price: "$2,400",
    rating: 5.0,
    reviews: 589,
    image: "/images/dest-santorini.png",
  },
];

export function Packages() {
  return (
    <section
      id="packages"
      className="py-20 lg:py-28 bg-avenora-light"
      aria-label="Travel Packages"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="text-avenora-mid-gray text-sm font-medium uppercase tracking-wider mb-3">
            Our Packages
          </p>
          <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black mb-4">
            Curated Travel Packages With Room for Personal Details.
          </h2>
          <p className="text-avenora-mid-gray text-[var(--font-size-md)]">
            Choose from carefully designed journey ideas, then customize the
            pace, destination, hotel style, activities, and special moments
            around your preferences.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="group bg-white rounded-[var(--radius-lg)] overflow-hidden border border-avenora-border hover:shadow-lg transition-all duration-[var(--duration-instant)] focus-within:ring-2 focus-within:ring-avenora-black"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.title} ${pkg.subtitle} travel package`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base text-avenora-black">
                  {pkg.title}{" "}
                  <span className="text-avenora-mid-gray">{pkg.subtitle}</span>
                </h3>
                <p className="text-avenora-mid-gray text-sm mt-2 line-clamp-2">
                  {pkg.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-avenora-border">
                  <div>
                    <p className="text-avenora-black font-heading text-lg">
                      From {pkg.price}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star
                        className="h-3 w-3 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-avenora-mid-gray">
                        {pkg.rating} ({pkg.reviews})
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-avenora-black hover:bg-avenora-light group/btn"
                    aria-label={`Explore ${pkg.title} ${pkg.subtitle} package`}
                  >
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            className="bg-avenora-black text-white hover:bg-avenora-gray rounded-full px-8 h-12 font-medium transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-avenora-black focus-visible:ring-offset-2"
            asChild
          >
            <a href="#contact">
              Explore Packages
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
