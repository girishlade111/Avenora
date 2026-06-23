"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--duration-instant)] ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-avenora-border"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8 h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-heading tracking-tight text-avenora-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-avenora-black rounded"
          aria-label="Avenora – Go to homepage"
        >
          Avenora
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[var(--font-size-sm)] font-medium text-avenora-gray hover:text-avenora-black transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-avenora-black rounded px-1"
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="bg-avenora-black text-white hover:bg-avenora-gray rounded-full px-6 h-11 text-[var(--font-size-sm)] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-avenora-black focus-visible:ring-offset-2"
            asChild
          >
            <Link href="#contact">Start Exploring</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="focus-visible:ring-2 focus-visible:ring-avenora-black"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white p-0"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 h-20 border-b border-avenora-border">
                  <span className="text-xl font-heading text-avenora-black">
                    Avenora
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex flex-col gap-1 p-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-avenora-gray hover:text-avenora-black hover:bg-avenora-light rounded-xl px-4 py-3 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto p-6 border-t border-avenora-border">
                  <Button
                    className="w-full bg-avenora-black text-white hover:bg-avenora-gray rounded-full h-12 text-base font-medium"
                    asChild
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Start Exploring
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
