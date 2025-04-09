import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif} from "next/font/google";
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
  src: "../public/fonts/lock-serif.ttf",
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
  description: "Aronnes personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${instrumentSans.variable} ${tomatoGrotesk.variable} ${whyteInktrap.variable} ${dotemp.variable} ${lockSerif.variable} `}
      >
        <div className={"bg-background font-instrument-serif"}>
          {children}
        </div>
      </body>
    </html>
  );
}
