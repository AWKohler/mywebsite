import FooterSection from "@/components/FooterSection";
import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

const whyteInktrap = localFont({
  weight: "400",
  src: "../public/fonts/Whyte-Inktrap-Regular.otf",
  variable: "--font-whyte-inktrap",
});

const tomatoGrotesk = localFont({
  weight: "400",
  src: "../public/fonts/Tomato-Grotesk-Regular.a1ec7af8.woff2",
  variable: "--font-tomato-sans",
});

const lockSerif = localFont({
  weight: "400",
  src: "../public/fonts/lock-serif.otf",
  variable: "--font-lock-serif",
});

const dotemp = localFont({
  weight: "400",
  src: "../public/fonts/Dotemp-8bit.ttf",
  variable: "--font-pixelated",
});

const instrumentSans = Instrument_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Aronne Kohler",
  description: "Aronne’s personal website",
  openGraph: {
    type: "website",
    url: "https://awkohler.dev/",
    title: "Aronne Kohler",
    description: "Aronne’s personal website",
    images: [
      {
        url: "https://awkohler.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aronne Kohler – personal site preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",        // ← replace with your handle
    title: "Aronne Kohler",
    description: "Aronne’s personal website",
    images: ["https://awkohler.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${instrumentSerif.variable}
          ${instrumentSans.variable}
          ${tomatoGrotesk.variable}
          ${whyteInktrap.variable}
          ${dotemp.variable}
          ${lockSerif.variable}
        `}
      >
        <div className="bg-background font-instrument-serif">
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
