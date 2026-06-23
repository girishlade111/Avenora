"use client";

import Image from "next/image";

interface Experience {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    label: "Card 01",
    title: "Adventure Travel",
    description:
      "Experience the perfect romantic escape with our luxury honeymoon experiences designed for unforgettable memories.",
    image: "/images/gallery-1.png",
  },
  {
    id: 2,
    label: "Card 02",
    title: "Wellness Retreat",
    description:
      "Discover breathtaking destinations and romantic experiences crafted for your perfect honeymoon journey.",
    image: "/images/gallery-2.png",
  },
  {
    id: 3,
    label: "Card 03",
    title: "Cultural Journey",
    description:
      "Celebrate your love with exclusive honeymoon getaways filled with comfort, elegance, and adventure.",
    image: "/images/about-travel.png",
  },
  {
    id: 4,
    label: "Card 04",
    title: "Adventure Travel",
    description:
      "Escape to stunning destinations where every moment is designed to make your honeymoon special.",
    image: "/images/dest-santorini.png",
  },
  {
    id: 5,
    label: "Card 05",
    title: "Island Holiday",
    description:
      "Indulge in a dream honeymoon filled with luxury, romance, and cherished moments together.",
    image: "/images/dest-malibu.png",
  },
  {
    id: 6,
    label: "Card 06",
    title: "Safari Experience",
    description:
      "Experience the perfect romantic escape with our luxury honeymoon experiences designed for unforgettable memories.",
    image: "/images/dest-dubai.png",
  },
];

export function Experiences() {
  return (
    <section
      className="py-20 lg:py-28 bg-avenora-light"
      aria-label="Travel Experiences"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="text-avenora-mid-gray text-sm font-medium uppercase tracking-wider mb-3">
            Travel Experiences
          </p>
          <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black mb-4">
            Choose the kind of journey you want to remember.
          </h2>
          <p className="text-avenora-mid-gray text-[var(--font-size-md)]">
            Every traveler has a different reason for leaving. Select the
            experience that feels closest to your dream, and we will shape the
            journey around it.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="group relative bg-white rounded-[var(--radius-lg)] overflow-hidden border border-avenora-border hover:shadow-lg transition-all duration-[var(--duration-instant)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={`${exp.title} travel experience`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                    {exp.label}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg text-avenora-black mb-2">
                  {exp.title}
                </h3>
                <p className="text-avenora-mid-gray text-sm leading-relaxed line-clamp-2">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
