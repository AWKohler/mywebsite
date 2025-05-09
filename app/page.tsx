"use client"

import React from "react";
import HomePage from "./components/HomePage";
import MobileHomePage from "./components/MobileHomePage";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <HomePage/>
      </div>
      <div className="md:hidden">
        <MobileHomePage/>
      </div>
    </>
  );
}