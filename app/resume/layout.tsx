"use client"

import { Navbar } from "@/components/ui/navbar";
import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f0f0f0]">
      <Navbar/>
      <div className="py-12">
        {children}
      </div>
    </div>
  );
}
