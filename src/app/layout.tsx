import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avenora – Tailored Journeys for Discerning Travelers",
  description:
    "Avenora creates personalized travel experiences for clients who value thoughtful planning, handpicked stays, private experiences, and a journey designed around the way they actually want to travel.",
  keywords: [
    "travel",
    "luxury travel",
    "personalized journeys",
    "honeymoon",
    "adventure",
    "destinations",
    "tour packages",
  ],
  authors: [{ name: "Avenora" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Avenora – Tailored Journeys for Discerning Travelers",
    description:
      "Personalized travel experiences crafted around your style. Handpicked stays, private moments, seamless planning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenora – Tailored Journeys for Discerning Travelers",
    description:
      "Personalized travel experiences crafted around your style.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-avenora-white text-avenora-black font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
