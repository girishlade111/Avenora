"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Mail } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Home", href: "#home" },
    { label: "Destinations", href: "#destinations" },
    { label: "Packages", href: "#packages" },
    { label: "Contact", href: "#contact" },
  ],
  pages: [
    { label: "Style Guide", href: "#" },
    { label: "License", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "404", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-avenora-black text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 lg:py-20 border-b border-white/10">
          {/* Left */}
          <div>
            <Link
              href="#home"
              className="text-2xl font-heading tracking-tight text-white inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
              aria-label="Avenora – Go to homepage"
            >
              <MapPin className="h-6 w-6" aria-hidden="true" />
              Avenora
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-md">
              Avenora travel platform creating personalized journeys, seamless
              planning, private escapes, and unforgettable destination
              experiences.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Mail className="h-4 w-4 text-white/60" aria-hidden="true" />
              <a
                href="mailto:Avenora@info.com"
                className="text-white/80 text-sm hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
              >
                Avenora@info.com
              </a>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div>
            <h3 className="font-heading text-base text-white mb-4">
              Newsletter
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Stay updated with our latest travel offers and destination guides.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-3"
              aria-label="Newsletter signup"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-full h-11 focus-visible:ring-white/30"
                aria-label="Email address for newsletter"
              />
              <Button
                type="submit"
                className="bg-white text-avenora-black hover:bg-white/90 rounded-full px-6 h-11 font-medium shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-avenora-black"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Subscribe to newsletter</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-b border-white/10">
          <div>
            <h4 className="font-heading text-sm text-white mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm text-white mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm text-white mb-4">Office</h4>
            <address className="not-italic">
              <p className="text-white/60 text-sm leading-relaxed">
                123 Travel Lane
                <br />
                Suite 456
                <br />
                New York, NY 10001
              </p>
            </address>
          </div>
          <div>
            <h4 className="font-heading text-sm text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 text-sm hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 text-sm hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 text-sm hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Avenora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
