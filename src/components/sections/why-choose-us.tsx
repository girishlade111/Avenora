"use client";

import { Check, UserRound, Sparkles, MapPinned } from "lucide-react";

interface Reason {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const reasons: Reason[] = [
  {
    id: 1,
    title: "Personal, not packaged",
    description:
      "Your journey is designed around your travel style, not copied from a standard tour list.",
    icon: <UserRound className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: 2,
    title: "Beautifully planned details",
    description:
      "From hotels to transfers, experiences, timing, and local support, every detail is considered.",
    icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: 3,
    title: "Handpicked stays and experiences",
    description:
      "We focus on places and moments that feel refined, memorable, and worth the journey.",
    icon: <MapPinned className="h-5 w-5" aria-hidden="true" />,
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="py-20 lg:py-28 bg-avenora-white"
      aria-label="Why Choose Us"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-avenora-mid-gray text-sm font-medium uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black mb-10">
              Choose the kind of journey you want to remember.
            </h2>
            <div className="space-y-8">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-avenora-black text-white flex items-center justify-center">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base text-avenora-black mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-avenora-mid-gray text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-avenora-light rounded-[var(--radius-lg)] p-6 aspect-[3/4] flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <UserRound className="h-6 w-6 text-avenora-black" aria-hidden="true" />
                  </div>
                  <p className="font-heading text-sm text-avenora-black">
                    Personal, not packaged
                  </p>
                </div>
                <div className="bg-avenora-black rounded-[var(--radius-lg)] p-6 aspect-square flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="font-heading text-sm text-white">
                    Beautifully planned
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-avenora-black rounded-[var(--radius-lg)] p-6 aspect-square flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <MapPinned className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="font-heading text-sm text-white">
                    Handpicked stays
                  </p>
                </div>
                <div className="bg-avenora-light rounded-[var(--radius-lg)] p-6 aspect-[3/4] flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Check className="h-6 w-6 text-avenora-black" aria-hidden="true" />
                  </div>
                  <p className="font-heading text-sm text-avenora-black">
                    Every detail matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
