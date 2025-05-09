// "use client";

// import { Navbar } from "@/components/ui/navbar";
// import React from "react";

// export default function NotFound() {

//   return (
//     <>
//       <Navbar/>
//       {/* This is the 404 page */}
//       <div className="overflow-clip bg-[#0e100f] font-whyte-inktrap font-bold flex flex-col items-center justify-center h-screen text-[40rem] text-white tracking-tight overflow-clip">
//         404
//       </div>
//     </>
//   );
// }


// "use client";

// import { Navbar } from "@/components/ui/navbar";
// import React from "react";

// export default function NotFound() {
//   return (
//     <>
//       <Navbar />

//        {/* ── Grain-on-blur SVG filter (hidden) ── */}
//        <svg className="absolute pointer-events-none w-0 h-0">
//          <filter id="grainy-blur">
//            {/* 1️⃣ Blur the original page */}
//            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />

//            {/* 2️⃣ Generate monochrome noise (grain) */}
//            <feTurbulence
//              type="fractalNoise"
//              baseFrequency="0.5"
//              numOctaves="3"
//              seed="2"
//              result="noise"
//            />
//            {/* convert noise to pure luminance so colors stay intact */}
//            <feColorMatrix
//              in="noise"
//              type="saturate"
//              values="0"
//              result="noiseMono"
//            />

//            {/* 3️⃣ Lay the grain on top of the blurred graphic */}
//            <feBlend in="blur" in2="noiseMono" mode="multiply" />
//          </filter>
//        </svg>

//       {/* 404 page */}
//       <div className="relative h-screen bg-[#0e100f] overflow-hidden -z-1" style={{ filter: "url(#grainy-blur)" }}>
//         {/* Oversized “404” that sits partly off-screen */}
//         <span
//           className="
//             absolute
//             bottom-[-10rem]        /* push it 10 rem BELOW the viewport edge */
//             left-1/2
//             -translate-x-1/2       /* center horizontally */
//             text-[40rem]
//             leading-none           /* no extra line-height */
//             text-white
//             select-none
//             pointer-events-none
//           "
//         >
//           404
//         </span>
//       </div>
//     </>
//   );
// }

"use client";

import { Navbar } from "@/components/ui/navbar";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Navbar />

      {/* 404 page */}
      <div className="relative h-screen bg-[#0e100f] overflow-hidden -z-1">
        {/* Oversized “404” that sits partly off-screen */}
        <span
          className="
            absolute
            bottom-[-10rem]        /* push it 10 rem BELOW the viewport edge */
            left-1/2
            -translate-x-1/2       /* center horizontally */
            mt-[-10rem]        /* push it 10 rem BELOW the viewport edge */
            text-[20rem]    /* 30rem on extra small screens */
            xs:text-[30rem]    /* 30rem on extra small screens */
            sm:text-[40rem]    /* 40rem on small screens */
            md:text-[50rem]
            leading-none           /* no extra line-height */
            text-white
            select-none
            pointer-events-none
          "
        >
          404
        </span>
      </div>
    </>
  );
}


// "use client";

// import React from "react";
// import { Navbar } from "@/components/ui/navbar";

// export default function NotFound() {
//   return (
//     <>
//       {/* ─── Grainy-blur filter definition (hidden 0×0 SVG) ─── */}
//       <svg className="absolute pointer-events-none w-0 h-0">
//         <filter id="grainy-blur">
//           {/* Random grain pattern */}
//           <feTurbulence
//             type="fractalNoise"
//             baseFrequency="4.8"
//             numOctaves="8"
//             result="noise"
//           />
//           {/* Blend the grain with what’s underneath */}
//           <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
//           {/* Soft blur on top of the grain */}
//           <feGaussianBlur stdDeviation="4" />
//         </filter>
//       </svg>

//       {/* ─── Page content with filter applied ─── */}
//       <main
//         className="overflow-clip bg-[#0e100f] font-whyte-inktrap font-bold flex flex-col items-center justify-center h-screen text-[40rem] text-white tracking-tight"
//         /* Tailwind doesn’t yet expose url(#…) filters,
//            so we inline the style attribute */
//         style={{ filter: "url(#grainy-blur)" }}
//       >
//         {/* <Navbar /> */}
//         404
//       </main>
//     </>
//   );
// }


// "use client";

// import React from "react";
// import { Navbar } from "@/components/ui/navbar";

// export default function NotFound() {
//   return (
//     <>
//       {/* ── Grain-on-blur SVG filter (hidden) ── */}
//       <svg className="absolute pointer-events-none w-0 h-0">
//         <filter id="grainy-blur">
//           {/* 1️⃣ Blur the original page */}
//           <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />

//           {/* 2️⃣ Generate monochrome noise (grain) */}
//           <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.5"
//             numOctaves="3"
//             seed="2"
//             result="noise"
//           />
//           {/* convert noise to pure luminance so colors stay intact */}
//           <feColorMatrix
//             in="noise"
//             type="saturate"
//             values="0"
//             result="noiseMono"
//           />

//           {/* 3️⃣ Lay the grain on top of the blurred graphic */}
//           <feBlend in="blur" in2="noiseMono" mode="multiply" />
//         </filter>
//       </svg>

//       {/* ── Content wrapped with the filter ── */}
//       <main
//         className="overflow-clip bg-[#0e100f] font-whyte-inktrap font-bold flex flex-col items-center justify-center h-screen text-[40rem] text-white tracking-tight"
//         // style={{ filter: "url(#grainy-blur)" }}
//       >
//         {/* <Navbar /> */}
//         404
//       </main>
//     </>
//   );
// }
