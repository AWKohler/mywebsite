"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React, {useRef} from "react";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {GraduationCap, MapPin, School2} from "lucide-react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import {wrap} from "@motionone/utils";

export default function AboutMe() {

    const redirectToGitHub = () => {
        // Redirect the user to your GitHub profile URL
        window.location.href = 'https://github.com/awkohler';
    };

    const redirectToInstagram = () => {
        // Redirect the user to your GitHub profile URL
        window.location.href = 'https://www.instagram.com/aronnekohler/';
    };

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        // let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        let moveBy = directionFactor.current * 100 * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <section className="flex flex-col w-full py-12 md:py-24 lg:py-32 xl:py-48 rounded-3xl bg-card justify-center items-center">

            <div className={"pb-14 text-7xl font-bold tracking-tighter flex items-center justify-center flex-col"}>
                About Me
            </div>

            <div className={"w-3/4 flex flex-row"}>
                <div className={"p-16"}>
                    {/*<Image className={"rounded-full border-secondary border-2"} fill src={"/pfp.png"} alt={"Profile"}></Image>*/}
                    <img className={"rounded-full border-secondary border-2"} src={"/pfp.png"} alt={"Profile"}></img>
                </div>

                <div className={"grid grid-rows-1 grid-cols-1 h-[27rem] min-w-[35rem]"}>
                    <div className={"flex flex-row p-6"}>
                        <MapPin className={"mt-1"} />
                        <div className={"font-bold text-2xl ml-2"}>
                            Greensboro, NC and Lynchburg, VA
                        </div>
                    </div>

                    <Separator className={"w-10/12"}></Separator>

                    <div className={"flex flex-row p-6"}>
                        <GraduationCap className={"mt-1"} />
                        <div className={"font-bold text-2xl ml-3"}>
                            Northern Guilford High School (Graduated)
                        </div>
                    </div>

                    <Separator className={"w-10/12"}></Separator>

                    <div className={"flex flex-row p-6"}>
                        <School2 />
                        <div className={"font-bold text-2xl ml-3"}>
                            Liberty University (2nd year sophomore)
                        </div>
                    </div>

                    <Separator className={"w-10/12"}></Separator>

                    <div className={"flex p-6"}>
                        <div className={"ml-3 w-10/12"}>
                            I am a 20 year old college student attending Liberty University pursuing a computer science, software engineering degree.
                        </div>
                    </div>

                </div>

            </div>

            <div className={"flex flex-row pt-24"}>

                <div className={"px-5 flex flex-col items-center"}>
                    <div className={"relative h-56 w-56 rounded-full bg-primary"}>
                        <Image className={"rounded-full border-secondary border-2"} fill src={"/ghpfp.png"} alt={"Profile"}></Image>
                    </div>

                    <div className={"pt-5"}>
                        <Button
                            onClick={redirectToGitHub}
                        >
                            My GitHub
                        </Button>
                    </div>
                </div>

            </div>

        </section>
    )
}
