"use client";

import { MapPin, Heart, Users, Compass } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Custom Itinerary Planning",
    description:
      "Thoughtfully designed journeys for couples seeking intimate moments, relaxed travel experiences, and beautifully planned escapes that create unforgettable memories together.",
    icon: <MapPin className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 2,
    title: "Honeymoon & Romantic Escapes",
    description:
      "Thoughtfully crafted journeys for couples seeking intimate escapes, relaxed experiences, and beautifully planned adventures filled with unforgettable moments together.",
    icon: <Heart className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 3,
    title: "Private Tours & Local Experiences",
    description:
      "From romantic getaways to once-in-a-lifetime adventures, we craft intimate journeys for couples who value comfort, connection, and seamless travel.",
    icon: <Compass className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 4,
    title: "Retreats & Group Travel",
    description:
      "Create lasting memories together with carefully curated travel experiences that combine intimate moments, stress-free planning, and beautiful destinations.",
    icon: <Users className="h-6 w-6" aria-hidden="true" />,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-avenora-white"
      aria-label="Our Services"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="text-avenora-mid-gray text-sm font-medium uppercase tracking-wider mb-3">
            Our Service
          </p>
          <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black mb-4">
            Travel planning services for every kind of meaningful escape.
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-[var(--radius-lg)] border border-avenora-border p-6 lg:p-8 hover:shadow-md transition-all duration-[var(--duration-instant)] focus-within:ring-2 focus-within:ring-avenora-black"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-xs)] bg-avenora-light flex items-center justify-center text-avenora-black group-hover:bg-avenora-black group-hover:text-white transition-colors duration-200">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-avenora-mid-gray text-sm font-medium tabular-nums">
                      0{service.id}
                    </span>
                    <h3 className="font-heading text-lg text-avenora-black">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-avenora-mid-gray text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
