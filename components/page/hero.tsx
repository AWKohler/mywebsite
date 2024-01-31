"use client"

import Parallax from "@/components/Parallax";

export default function Hero() {
    return (
        // <section className="w-full pt-12 md:py-24 lg:py-32 xl:py-48 rounded-b-3xl bg-card">
        <section className="w-full pt-6 md:py-12 lg:py-16 xl:py-24 rounded-b-3xl bg-card">
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

                        <div className="w-full h-full flex items-center justify-center">
                          <div
                              style={{
                                  filter: 'url(#noiseFilter)'
                              }}
                              // className={"gradient-text-radial font-bold tracking-tighter text-[12rem] flex flex-row"}
                              className={"gradient-text-radial font-bold tracking-tighter xs:text-[4rem] sm:text-[4rem] md:text-[12rem] lg:text-[12rem] xl:text-[12rem] flex flex-row"}
                          >
                              <div className={"grid grid-cols-1 grid-rows-2 sm:leading-[3.0rem] md:leading-[8.6rem] lg:leading-[8.6rem] xl:leading-[8.6rem]"}>
                                  <span className={"row-start-1 row-span-1 m-0 p-0"}>Aronne</span>
                                  <span className={"row-start-2 row-span-1 m-0 p-0"}>Kohler</span>
                                  {/*<span className={"row-start-3 row-span-1 m-0 p-0"}>Kohler</span>*/}
                              </div>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
