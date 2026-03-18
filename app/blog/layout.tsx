import { Header } from "@/components/header";
import React from "react";
// import { Header } from "@/components/header";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (

    <div className="max-w-screen overflow-x-hidden bg-white">

      <div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
        <Header />
      </div>
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14 [--gutter-width:2.5rem] lg:grid-cols-[var(--gutter-width)_minmax(0,95rem)_var(--gutter-width)]">

        {/* Left candy cane */}
        <div
          className="col-start-1 row-span-full row-start-1 hidden border-x border-gray-200 bg-[size:10px_10px] bg-fixed lg:block dark:border-gray-700"
          style={{
            backgroundImage:
              "repeating-linear-gradient(315deg, #e5e7eb 0, #e5e7eb 1px, transparent 0, transparent 50%)",
          }}
        ></div>

        {/* Main content area */}
        <div className="text-gray-950 dark:text-white">{children}</div>

        {/* Right candy cane */}
        <div
          className="row-span-full row-start-1 hidden border-x border-gray-200 bg-[size:10px_10px] bg-fixed lg:col-start-3 lg:block dark:border-gray-700"
          style={{
            backgroundImage:
              "repeating-linear-gradient(315deg, #e5e7eb 0, #e5e7eb 1px, transparent 0, transparent 50%)",
          }}
        ></div>

      </div>
    </div>
  );
}
