"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React from "react";

function BlankScreen() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0", // matches your real site background
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}

const HomePage = dynamic(() => import("./components/HomePage"), {
  ssr: false,
  loading: () => <BlankScreen />, // loads instantly with BG
});

const MobileHomePage = dynamic(() => import("./components/MobileHomePage"), {
  ssr: false,
  loading: () => <BlankScreen />,
});

function FadeInWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <FadeInWrapper>
          <HomePage />
        </FadeInWrapper>
      </div>
      <div className="md:hidden">
        <FadeInWrapper>
          <MobileHomePage />
        </FadeInWrapper>
      </div>
    </>
  );
}