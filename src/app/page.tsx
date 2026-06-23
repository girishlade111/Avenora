"use client";

import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Destinations } from "@/components/sections/destinations";
import { Packages } from "@/components/sections/packages";
import { Services } from "@/components/sections/services";
import { Experiences } from "@/components/sections/experiences";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Destinations />
        <Packages />
        <Services />
        <Experiences />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
