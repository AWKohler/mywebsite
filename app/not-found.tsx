"use client";

import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Navbar />

      {/* 404 page */}
      <div className="relative bg-[#f0f0f0] h-screen overflow-hidden -z-1">
        {/* Oversized “404” that sits partly off-screen */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/404_NF.svg"
            alt="404"
            width={700}
            height={700}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </>
  );
}