"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";

// A blank full-screen placeholder (matches your site's background)
function BlankScreen() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}

const HomePage = dynamic(() => import("./components/HomePage"), {
  ssr: false,
  loading: () => <BlankScreen />,
});

const MobileHomePage = dynamic(() => import("./components/MobileHomePage"), {
  ssr: false,
  loading: () => <BlankScreen />,
});

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

// Fade-in wrapper using Framer Motion
function FadeInWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </motion.div>
  );
}
