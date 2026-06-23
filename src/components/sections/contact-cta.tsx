"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, ArrowRight } from "lucide-react";

export function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-avenora-white"
      aria-label="Contact us"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Copy */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black mb-6">
              Ready to plan a journey that feels truly yours?
            </h2>
            <p className="text-avenora-mid-gray text-[var(--font-size-md)] leading-relaxed mb-8">
              From hotels to transfers, experiences, timing, and local support,
              every detail is considered. Share your travel vision and we&apos;ll
              craft the perfect itinerary.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-avenora-black flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-avenora-mid-gray">
                  Average response time
                </p>
                <p className="font-heading text-avenora-black">Under 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-[var(--radius-xl)] border border-avenora-border p-6 lg:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Send className="h-7 w-7 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl text-avenora-black mb-2">
                  Thank you!
                </h3>
                <p className="text-avenora-mid-gray text-sm">
                  Your submission has been received. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-avenora-gray">
                      First Name*
                    </Label>
                    <Input
                      id="firstName"
                      required
                      placeholder="John"
                      className="rounded-[var(--radius-xs)] border-avenora-border focus-visible:ring-avenora-black h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-avenora-gray">
                      Last Name*
                    </Label>
                    <Input
                      id="lastName"
                      required
                      placeholder="Doe"
                      className="rounded-[var(--radius-xs)] border-avenora-border focus-visible:ring-avenora-black h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-avenora-gray">
                    Work Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="rounded-[var(--radius-xs)] border-avenora-border focus-visible:ring-avenora-black h-11"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="tripType" className="text-sm font-medium text-avenora-gray">
                      Trip Types*
                    </Label>
                    <Select required>
                      <SelectTrigger className="rounded-[var(--radius-xs)] border-avenora-border focus:ring-avenora-black h-11">
                        <SelectValue placeholder="Choose your trip" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="honeymoon">Honeymoon</SelectItem>
                        <SelectItem value="adventure">Adventure</SelectItem>
                        <SelectItem value="wellness">Wellness Retreat</SelectItem>
                        <SelectItem value="cultural">Cultural Journey</SelectItem>
                        <SelectItem value="group">Group Travel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-sm font-medium text-avenora-gray">
                      Estimated Budget*
                    </Label>
                    <Select required>
                      <SelectTrigger className="rounded-[var(--radius-xs)] border-avenora-border focus:ring-avenora-black h-11">
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2k">Under $2,000</SelectItem>
                        <SelectItem value="2k-5k">$2,000 – $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 – $10,000</SelectItem>
                        <SelectItem value="over-10k">Over $10,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-avenora-gray">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your dream trip..."
                    className="rounded-[var(--radius-xs)] border-avenora-border focus-visible:ring-avenora-black min-h-[100px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-avenora-black text-white hover:bg-avenora-gray rounded-full h-12 font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-avenora-black focus-visible:ring-offset-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Request
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
