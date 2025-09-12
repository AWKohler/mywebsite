"use client";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./components/HomePage"), {
  ssr: false, // don’t block server-side render with FM hooks
  loading: () => <div>Loading...</div>,
});

const MobileHomePage = dynamic(() => import("./components/MobileHomePage"), {
  ssr: false,
  loading: () => <div>Loading mobile...</div>,
});

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <HomePage />
      </div>
      <div className="md:hidden">
        <MobileHomePage />
      </div>
    </>
  );
}
