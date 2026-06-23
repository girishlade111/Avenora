"use client";

import Image from "next/image";

const galleryTags = [
  "Mountain",
  "Trekking",
  "Hiking",
  "Adventure",
  "Backpacking",
  "Wanderlust",
  "Expedition",
];

const galleryImages = [
  {
    src: "/images/gallery-1.png",
    alt: "Mountain trekking adventure with dramatic landscape",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Tropical island paradise with crystal clear water",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/about-travel.png",
    alt: "Romantic beach dinner at sunset",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/dest-santorini.png",
    alt: "Santorini white architecture with ocean view",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/dest-dubai.png",
    alt: "Dubai desert luxury resort",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/dest-bali.png",
    alt: "Bali tropical jungle with private villa",
    span: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  return (
    <section
      className="py-20 lg:py-28 bg-avenora-light"
      aria-label="Gallery"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-avenora-mid-gray text-sm font-medium uppercase tracking-wider mb-3">
            Our Gallery
          </p>
          <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black mb-4">
            Moments that make the journey feel personal.
          </h2>
        </div>

        {/* Tags marquee */}
        <div className="flex flex-wrap gap-3 mb-10" role="list" aria-label="Gallery tags">
          {galleryTags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="inline-block bg-white border border-avenora-border rounded-full px-4 py-2 text-sm text-avenora-gray font-medium hover:bg-avenora-black hover:text-white hover:border-avenora-black transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`${img.span} group relative rounded-[var(--radius-lg)] overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-avenora-black`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
