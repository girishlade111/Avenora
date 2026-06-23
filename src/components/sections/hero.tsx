"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Breathtaking aerial view of Santorini, Greece with white buildings and blue domes overlooking the sea"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Play className="h-3.5 w-3.5 text-white fill-white" aria-hidden="true" />
            <span className="text-white/90 text-sm font-medium">
              Plan your next vacation
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-[var(--font-size-3xl)] sm:text-[var(--font-size-4xl)] font-heading leading-[1.1] tracking-tight mb-6">
            Tailored journeys for travelers who want more than a standard trip.
          </h1>

          {/* Subheading */}
          <p className="text-white/80 text-[var(--font-size-md)] sm:text-[var(--font-size-lg)] leading-relaxed mb-10 max-w-lg">
            Affordable tour packages, accommodations, and seamless booking
            services for unforgettable experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-white text-avenora-black hover:bg-white/90 rounded-full px-8 h-13 text-base font-medium group transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              size="lg"
              asChild
            >
              <Link href="#destinations">
                Explore Destinations
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8 h-13 text-base font-medium backdrop-blur-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              size="lg"
              asChild
            >
              <Link href="#packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
