"use client"

import Parallax from "@/components/Parallax";

export default function Hero() {
    return (
        // <section className="w-full pt-12 md:py-24 lg:py-32 xl:py-48 rounded-b-3xl bg-card">
        <section className="w-full pt-8 md:py-0 lg:py-0 xl:py-0 rounded-b-3xl bg-card -space-y-8">
            {/*<div className="px-4 md:px-6">*/}
            <div className="">
                {/*<div className="grid gap-6 items-center">*/}
                <div className="grid items-center">
                    {/*<div className="flex flex-col justify-center space-y-8 text-center">*/}
                    <div className="flex flex-col justify-center space-y-4 text-center">

                        <svg style={{ height: 0 }}>
                            <defs>
                                <filter id="noiseFilter">
                                    {/*<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />*/}
                                    <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" stitchTiles="stitch" />
                                    <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -5" />
                                    <feComposite in2="SourceGraphic" operator="in" />
                                    <feBlend in="SourceGraphic" mode="multiply" />
                                </filter>
                            </defs>
                        </svg>

                        {/*<div className="w-full h-full rounded-full flex items-center justify-center">*/}
                        {/*  <span*/}
                        {/*      style={{*/}
                        {/*          filter: 'url(#noiseFilter)'*/}
                        {/*      }}*/}
                        {/*      // className={"text-primary font-bold tracking-tighter text-9xl"}*/}
                        {/*      // className={"text-primary font-bold tracking-tighter text-9xl"}*/}
                        {/*      className={"text-primary font-bold tracking-tighter bg-clip-text text-9xl"}*/}
                        {/*      // className={"bg-gradient-to-r from-primary to-secondary font-bold tracking-tighter text-9xl"}*/}
                        {/*  >Aronne Kohler</span>*/}
                        {/*</div>*/}

                        <div className="w-full h-full flex items-center justify-center">
                          <div
                              style={{
                                  filter: 'url(#noiseFilter)'
                              }}
                              // className={"gradient-text font-bold tracking-tighter text-9xl"}
                              // className={"gradient-text-radial font-bold tracking-tighter text-9xl"}
                              // className={"gradient-text-conic font-bold tracking-tighter text-9xl"}// -space-y-[9.5rem]
                              // className={"gradient-text-conic font-bold tracking-tighter text-[12rem] flex flex-row"}
                              className={"gradient-text-radial font-bold tracking-tighter text-[12rem] flex flex-row"}
                              // className={"gradient-text-reflected font-bold tracking-tighter text-9xl flex flex-col -space-y-10"}
                          >
                              {/*<div className={"-space-y-[9.5rem] grid grid-cols-1 grid-rows-3"}>*/}
                              {/*<div className={"grid grid-cols-1 grid-rows-3"}>*/}
                              {/*    <span className={"row-start-1 row-span-1 flex"}>Grainy</span>*/}
                              {/*    <span className={"row-start-2 row-span-1 flex"}>Text</span>*/}
                              {/*    <span className={"row-start-3 row-span-1 flex"}>CSS</span>*/}
                              {/*</div>*/}

                              <div className={"grid grid-cols-1 grid-rows-3 leading-[8.6rem]"}>
                                  <span className={"row-start-1 row-span-1 m-0 p-0"}>Grainy</span>
                                  <span className={"row-start-2 row-span-1 m-0 p-0"}>Text</span>
                                  <span className={"row-start-3 row-span-1 m-0 p-0"}>CSS</span>
                              </div>
                          </div>
                        </div>





                        {/*<div className="space-y-2">*/}
                        {/*    /!*<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">*!/*/}
                        {/*    /!*<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-500">*!/*/}
                        {/*    /!*    /!*<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">*!/*!/*/}

                        {/*    /!*    Aronne Kohler*!/*/}
                        {/*    /!*</h1>*!/*/}
                        {/*    <Parallax></Parallax>*/}
                        {/*</div>*/}

                        {/*/!*<p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">*!/*/}
                        {/*/!*    Student developer*!/*/}
                        {/*/!*</p>*!/*/}

                    </div>
                </div>
            </div>
        </section>
    )
}
