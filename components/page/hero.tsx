"use client"

import Parallax from "@/components/Parallax";

export default function Hero() {
    return (
        <section className="w-full pt-12 md:py-24 lg:py-32 xl:py-48 rounded-b-3xl bg-card">
            {/*<div className="px-4 md:px-6">*/}
            <div className="">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center">
                        <div className="space-y-2">
                            {/*<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">*/}
                            {/*<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-500">*/}
                            {/*    /!*<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">*!/*/}

                            {/*    Aronne Kohler*/}
                            {/*</h1>*/}
                            <Parallax></Parallax>
                        </div>

                        {/*<p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">*/}
                        {/*    Student developer*/}
                        {/*</p>*/}

                    </div>
                </div>
            </div>
        </section>
    )
}
